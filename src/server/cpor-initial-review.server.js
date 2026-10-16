var CporInitialReview = Class.create();
CporInitialReview.prototype = {
    initialize: function () {},

    ensure: function (caseId) {
        if (!/^[0-9a-f]{32}$/.test(String(caseId || ''))) {
            throw 'A saved CPOR case is required before review can start.';
        }
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(caseId) || record.getRecordClassName() != 'x_au_nswp_cicsm_cpor' ||
            record.getValue('lifecycle') != 'new') {
            throw 'The new CPOR case is unavailable for Manager review.';
        }
        var service = record.service.getRefRecord();
        var caseType = service.isValidRecord() ? service.case_type.getRefRecord() : null;
        if (!service.isValidRecord() || service.getValue('active') != '1' ||
            service.getValue('fulfilment_mode') != 'activities' ||
            !caseType || !caseType.isValidRecord() ||
            caseType.getValue('case_table') != record.getRecordClassName()) {
            throw 'The CPOR service is not ready for activity fulfilment.';
        }
        var stage = new GlideRecord('x_au_nswp_pcm_stage');
        stage.addQuery('process', service.getValue('process'));
        stage.addQuery('active', true);
        stage.orderBy('sequence');
        stage.setLimit(1);
        stage.query();
        if (!stage.next() || stage.getValue('purpose') != 'support') {
            throw 'The first CPOR review stage must be an active support stage.';
        }
        var existing = new GlideRecord('x_au_nswp_cicsm_activity');
        existing.addQuery('case', caseId);
        existing.addQuery('stage', stage.getUniqueValue());
        existing.setLimit(2);
        existing.query();
        if (existing.next()) {
            var existingId = existing.getUniqueValue();
            if (existing.next()) throw 'The first CPOR review activity is duplicated.';
            return existingId;
        }
        var managerId = record.getValue('manager');
        var positionId = record.getValue('manager_position_at_submission');
        if (!positionId || !new CporPositionAuthority().holds(positionId, managerId)) {
            throw 'Manager position authority changed before the review activity was created.';
        }
        var review = new GlideRecord('x_au_nswp_cicsm_activity');
        review.initialize();
        review.setValue('case', caseId);
        review.setValue('stage', stage.getUniqueValue());
        review.setValue('responsible_position', positionId);
        review.setValue('assigned_to', managerId);
        review.setValue('activity_status', 'ready');
        review.setValue('short_description', stage.getValue('name'));
        var reviewId = review.insert();
        if (!reviewId) throw 'The first CPOR review activity could not be created.';
        return reviewId;
    },

    type: 'CporInitialReview'
};
