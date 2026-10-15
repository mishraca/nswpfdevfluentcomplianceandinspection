var CporReviewRuntime = Class.create();
CporReviewRuntime.prototype = {
    initialize: function () {},

    canReadCase: function (caseId) {
        if (!/^[0-9a-f]{32}$/.test(String(caseId || '')) ||
            !gs.hasRole('x_au_nswp_pcm.case_worker')) return false;
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(caseId)) return false;
        var service = record.service.getRefRecord();
        if (!service.isValidRecord()) return false;
        var position = new CporPositionAuthority().positionFor(gs.getUserID());
        if (!position) return false;
        var activity = new GlideRecord('x_au_nswp_cicsm_activity');
        activity.addQuery('case', caseId);
        activity.addQuery('responsible_position', position);
        activity.addQuery('activity_status', 'IN', 'ready,in_progress,waiting');
        activity.setLimit(1);
        activity.query();
        return activity.next() && new CporPositionAuthority().holds(position);
    },

    canReadActivity: function (activity) {
        if (!activity || !activity.isValidRecord() ||
            !gs.hasRole('x_au_nswp_pcm.case_worker')) return false;
        var caseId = activity.getValue('case');
        if (!caseId || !this.canReadCase(caseId)) return false;
        return new CporPositionAuthority().holds(activity.getValue('responsible_position'));
    },

    _context: function (caseId) {
        if (!/^[0-9a-f]{32}$/.test(String(caseId || '')) ||
            !gs.hasRole('x_au_nswp_pcm.case_worker')) return null;
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(caseId) || record.getValue('lifecycle') != 'new') return null;
        var service = record.service.getRefRecord();
        if (!service.isValidRecord() || service.getValue('active') != '1' ||
            service.getValue('fulfilment_mode') != 'activities') return null;

        var activity = new GlideRecord('x_au_nswp_cicsm_activity');
        activity.addQuery('case', caseId);
        activity.addQuery('activity_status', 'ready');
        activity.setLimit(2);
        activity.query();
        if (!activity.next()) return null;
        var stage = activity.stage.getRefRecord();
        if (!stage.isValidRecord() || stage.getValue('process') != service.getValue('process') ||
            stage.getValue('purpose') != 'support' || stage.getValue('active') != '1' ||
            !new CporPositionAuthority().holds(activity.getValue('responsible_position'))) return null;
        var selected = activity.getUniqueValue();
        if (activity.next()) return null;
        activity.get(selected);
        return { record: record, service: service, activity: activity, stage: stage };
    },

    canSupport: function (caseId) {
        var context = this._context(caseId);
        if (!context) return false;
        var next = this._nextApprovalStage(context);
        return !!next && !!this._rankRule(next);
    },

    supportContext: function (caseId) {
        var context = this._context(caseId);
        if (!context || !this._rankRule(this._nextApprovalStage(context))) {
            throw 'Manager support is unavailable for this case.';
        }
        return { activity: context.activity.getUniqueValue() };
    },

    _nextApprovalStage: function (context) {
        var next = new GlideRecord('x_au_nswp_pcm_stage');
        next.addQuery('process', context.service.getValue('process'));
        next.addQuery('active', true);
        next.addQuery('sequence', '>', context.stage.getValue('sequence'));
        next.orderBy('sequence');
        next.setLimit(1);
        next.query();
        return next.next() && next.getValue('purpose') == 'approval' ? next : null;
    },

    _rankRule: function (stage) {
        if (!stage) return null;
        var rule = new GlideRecord('x_au_nswp_cicsm_review_authority');
        rule.addQuery('approval_stage', stage.getUniqueValue());
        rule.addQuery('active', true);
        rule.setLimit(1);
        rule.query();
        if (!rule.next()) return null;
        var rank = rule.required_rank.getRefRecord();
        if (!rank.isValidRecord() || rank.getValue('active') != '1') return null;
        return rank;
    },

    _eligibleNominee: function (userId, requiredRank) {
        var user = new GlideRecord('sys_user');
        if (!user.get(userId) || user.getValue('active') != '1') return false;
        var acting = user.getValue('u_hda_rank');
        var effective = acting || user.getValue('title');
        var required = String(requiredRank.getValue('name') || '').trim().toLowerCase();
        return !!required && String(effective || '').trim().toLowerCase() == required;
    },

    support: function (caseId, activityId, nomineeId, comments) {
        var context = this._context(caseId);
        if (!context) throw 'This Manager review is not available to you.';
        if (!/^[0-9a-f]{32}$/.test(String(activityId || '')) ||
            context.activity.getUniqueValue() != activityId) {
            throw 'The Manager review has changed. Reload the case before continuing.';
        }
        comments = String(comments || '').trim();
        if (comments.length > 4000) throw 'Review comments are too long.';
        nomineeId = String(nomineeId || '');
        var next = this._nextApprovalStage(context);
        if (!next) {
            throw 'The configured next stage must be an active approval stage.';
        }
        var requiredRank = this._rankRule(next);
        if (!requiredRank || !this._eligibleNominee(nomineeId, requiredRank)) {
            throw 'The selected person does not hold the required effective rank.';
        }
        var nomineePosition = new CporPositionAuthority().positionFor(nomineeId);
        if (!nomineePosition || !new CporPositionAuthority().holds(nomineePosition, nomineeId)) {
            throw 'Select a Superintendent who is the current holder of one SAP position.';
        }
        var duplicate = new GlideRecord('x_au_nswp_cicsm_activity');
        duplicate.addQuery('case', caseId);
        duplicate.addQuery('stage', next.getUniqueValue());
        duplicate.addQuery('activity_status', 'IN', 'ready,in_progress,waiting');
        duplicate.setLimit(1);
        duplicate.query();
        if (duplicate.next()) throw 'An active final approval activity already exists.';

        var approval = new GlideRecord('x_au_nswp_cicsm_activity');
        approval.initialize();
        approval.setValue('case', caseId);
        approval.setValue('stage', next.getUniqueValue());
        approval.setValue('activity_status', 'ready');
        approval.setValue('responsible_position', nomineePosition);
        approval.setValue('assigned_to', nomineeId);
        approval.setValue('short_description', next.getValue('name'));
        var approvalId = approval.insert();
        if (!approvalId) throw 'The final approval activity could not be created.';

        context.activity.setValue('activity_status', 'complete');
        context.activity.setValue('review_outcome', 'support');
        context.activity.setValue('review_comments', comments);
        context.activity.setValue('nominated_superintendent', nomineeId);
        if (!context.activity.update()) throw 'Manager support could not be recorded.';
        context.record.setValue('lifecycle', 'awaiting_review');
        if (!context.record.update()) throw 'The case could not advance to final approval.';
        return { caseId: caseId, approvalActivityId: approvalId };
    },

    _approvalContext: function (caseId) {
        if (!/^[0-9a-f]{32}$/.test(String(caseId || '')) ||
            !gs.hasRole('x_au_nswp_pcm.case_worker')) return null;
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(caseId) || record.getValue('lifecycle') != 'awaiting_review' ||
            record.getValue('approval_outcome')) return null;
        var service = record.service.getRefRecord();
        if (!service.isValidRecord() || service.getValue('active') != '1' ||
            service.getValue('fulfilment_mode') != 'activities') return null;
        var activity = new GlideRecord('x_au_nswp_cicsm_activity');
        activity.addQuery('case', caseId);
        activity.addQuery('activity_status', 'ready');
        activity.setLimit(2);
        activity.query();
        if (!activity.next()) return null;
        var stage = activity.stage.getRefRecord();
        if (!stage.isValidRecord() || stage.getValue('process') != service.getValue('process') ||
            stage.getValue('purpose') != 'approval' || stage.getValue('active') != '1' ||
            !new CporPositionAuthority().holds(activity.getValue('responsible_position'))) return null;
        var selected = activity.getUniqueValue();
        if (activity.next()) return null;
        activity.get(selected);
        return { record: record, service: service, activity: activity, stage: stage };
    },

    canDecide: function (caseId) {
        return !!this._approvalContext(caseId);
    },

    decisionContext: function (caseId) {
        var context = this._approvalContext(caseId);
        if (!context) throw 'Final approval is unavailable for this case.';
        return { activity: context.activity.getUniqueValue() };
    },

    decide: function (caseId, activityId, outcome, comments) {
        if (outcome != 'approve' && outcome != 'reject') throw 'Unsupported final decision.';
        var context = this._approvalContext(caseId);
        if (!context || !/^[0-9a-f]{32}$/.test(String(activityId || '')) ||
            context.activity.getUniqueValue() != activityId) {
            throw 'The final approval has changed. Reload the case before continuing.';
        }
        comments = String(comments || '').trim();
        if (comments.length > 4000 || (outcome == 'reject' && !comments)) {
            throw 'A rejection reason is required and comments must be within 4000 characters.';
        }
        if (outcome == 'approve') {
            var next = new GlideRecord('x_au_nswp_pcm_stage');
            next.addQuery('process', context.service.getValue('process'));
            next.addQuery('active', true);
            next.addQuery('sequence', '>', context.stage.getValue('sequence'));
            next.orderBy('sequence');
            next.setLimit(1);
            next.query();
            if (!next.next() || next.getValue('purpose') != 'finalisation') {
                throw 'The configured next stage must be finalisation.';
            }
        }
        context.activity.setValue('activity_status', 'complete');
        context.activity.setValue('review_outcome', outcome);
        context.activity.setValue('review_comments', comments);
        if (!context.activity.update()) throw 'The final approval activity could not be completed.';
        context.record.setValue('approval_outcome', outcome == 'approve' ? 'approved' : 'rejected');
        context.record.setValue('lifecycle', outcome == 'approve' ? 'in_progress' : 'complete');
        if (outcome == 'reject') {
            context.record.setValue('active', false);
            context.record.setValue('closed_at', new GlideDateTime().getValue());
            context.record.setValue('closed_by', gs.getUserID());
            context.record.setValue('close_notes', comments);
        }
        if (!context.record.update()) throw 'The final decision could not be recorded.';
        return { caseId: caseId, outcome: outcome };
    },

    _finalisationContext: function (caseId) {
        if (!/^[0-9a-f]{32}$/.test(String(caseId || ''))) return null;
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(caseId) || record.getValue('lifecycle') != 'in_progress' ||
            record.getValue('approval_outcome') != 'approved' || record.getValue('active') != '1') return null;
        if (!new x_au_nswp_pcm.OperationalCasePolicy().allows(record, 'case.finalise')) return null;
        var service = record.service.getRefRecord();
        if (!service.isValidRecord() || service.getValue('active') != '1' ||
            service.getValue('fulfilment_mode') != 'activities') return null;
        var stage = new GlideRecord('x_au_nswp_pcm_stage');
        stage.addQuery('process', service.getValue('process'));
        stage.addQuery('purpose', 'finalisation');
        stage.addQuery('active', true);
        stage.setLimit(2);
        stage.query();
        if (!stage.next()) return null;
        if (stage.next()) return null;
        return { record: record, stage: stage };
    },

    canFinalise: function (caseId) {
        return !!this._finalisationContext(caseId);
    },

    validateOutcome: function (record) {
        var conducted = String(record.getValue('inspection_conducted') || '');
        var date = String(record.getValue('final_inspection_date') || '');
        var charge = String(record.getValue('charge_laid') || '');
        var chargeNumber = String(record.getValue('charge_number') || '').trim();
        var reason = String(record.getValue('not_conducted_reason') || '').trim();
        if (conducted != 'yes' && conducted != 'no') return 'Select whether the inspection was conducted.';
        if (conducted == 'yes') {
            var parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
            var parsed = parts ? new Date(Date.UTC(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]))) : null;
            if (!parts || !parsed || parsed.getUTCFullYear() != Number(parts[1]) ||
                parsed.getUTCMonth() != Number(parts[2]) - 1 || parsed.getUTCDate() != Number(parts[3]) ||
                date >= new GlideDate().getValue()) return 'Enter a valid inspection date before today.';
            if (charge != 'yes' && charge != 'no') return 'Select whether a charge was laid.';
            if (reason) return 'A reason for an inspection not conducted does not apply.';
        } else if (date || charge || chargeNumber) {
            return 'Inspection and charge details require a conducted inspection.';
        }
        if (charge != 'yes' && chargeNumber) return 'A charge number requires a charge laid.';
        if (chargeNumber.length > 80 || reason.length > 4000) return 'Inspection outcome details are too long.';
        return '';
    },

    finalise: function (caseId, conducted, date, charge, chargeNumber, reason) {
        var context = this._finalisationContext(caseId);
        if (!context) throw 'Recording an inspection outcome is unavailable for this case.';
        conducted = String(conducted || '');
        date = String(date || '');
        charge = String(charge || '');
        chargeNumber = String(chargeNumber || '').trim();
        reason = String(reason || '').trim();
        context.record.setValue('inspection_conducted', conducted);
        context.record.setValue('final_inspection_date', date);
        context.record.setValue('charge_laid', charge);
        context.record.setValue('charge_number', chargeNumber);
        context.record.setValue('not_conducted_reason', reason);
        var validationError = this.validateOutcome(context.record);
        if (validationError) throw validationError;
        context.record.setValue('lifecycle', 'complete');
        context.record.setValue('active', false);
        context.record.setValue('closed_at', new GlideDateTime().getValue());
        context.record.setValue('closed_by', gs.getUserID());
        if (!context.record.update()) throw 'The inspection outcome could not be recorded.';
        return { caseId: caseId };
    },

    type: 'CporReviewRuntime'
};
