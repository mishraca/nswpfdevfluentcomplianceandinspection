var CporReviewRuntime = Class.create();
CporReviewRuntime.prototype = {
    initialize: function () {},

    canReadCase: function (caseId) {
        if (!/^[0-9a-f]{32}$/.test(String(caseId || '')) ||
            !gs.hasRole('x_au_nswp_pcm.case_worker')) return false;
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(caseId)) return false;
        var service = record.service.getRefRecord();
        if (!service.isValidRecord() || service.getValue('active') != '1') return false;
        var position = new CporPositionAuthority().positionFor(gs.getUserID());
        if (!position) return false;
        var activity = new GlideRecord('x_au_nswp_cicsm_activity');
        activity.addQuery('case', caseId);
        activity.addQuery('responsible_position', position);
        activity.setLimit(1);
        activity.query();
        return activity.next();
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
        if (!nomineePosition) throw 'Select a Superintendent with a valid SAP position.';
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

    type: 'CporReviewRuntime'
};
