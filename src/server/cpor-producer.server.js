(function () {
    var actor = gs.getUserID();
    if (!actor || gs.getUserName() == 'guest') {
        throw 'Sign in before submitting this application.';
    }
    function activeRecord(table, id) {
        if (!/^[0-9a-f]{32}$/.test(id)) return false;
        var row = new GlideRecord(table);
        return row.get(id) && (!row.isValidField('active') || row.getValue('active') == '1');
    }
    var requester = String(producer.requestingOfficer || '');
    var secondary = String(producer.secondaryOfficer || '');
    var department = String(producer.selectedDepartment || '');
    var manager = String(producer.supportingManager || '');
    if (!activeRecord('sys_user', requester) || !activeRecord('sys_user', secondary) ||
        !activeRecord('cmn_department', department) || !activeRecord('sys_user', manager)) {
        throw 'Select active officers, a Manager and a department.';
    }
    var managerPosition = new CporPositionAuthority().positionFor(manager);
    if (!managerPosition || !new CporPositionAuthority().holds(managerPosition, manager)) {
        throw 'The selected Manager must be the current holder of one valid SAP HDA Position or SAP Position.';
    }
    var intake = new GlideRecord('x_au_nswp_pcm_intake');
    intake.addQuery('producer', cat_item.getUniqueValue());
    intake.addQuery('active', true);
    intake.setLimit(2);
    intake.query();
    if (!intake.next()) throw 'This application has no active case intake registration.';
    var selected = intake.getValue('service');
    if (intake.next()) throw 'This application has multiple active case intake registrations.';
    var service = new GlideRecord('x_au_nswp_pcm_service');
    if (!service.get(selected) || service.getValue('active') != '1') {
        throw 'The registered case service is unavailable.';
    }

    var caseType = new GlideRecord('x_au_nswp_pcm_case_type');
    if (!caseType.get(service.getValue('case_type')) ||
        caseType.getValue('case_table') != 'x_au_nswp_cicsm_cpor' ||
        cat_item.getValue('table_name') != 'x_au_nswp_cicsm_cpor') {
        throw 'The CPOR 16D case type is not configured for this intake.';
    }
    current.setValue('service', selected);
    current.setValue('requester', requester);
    current.setValue('secondary_requester', secondary);
    current.setValue('selected_department', department);
    current.setValue('manager_position_at_submission', managerPosition);
    current.setValue('submitted_by', actor);
    current.setValue('submitted_at', new GlideDateTime().getValue());
    current.setValue('lifecycle', 'new');
    current.setValue('short_description', 'CPOR 16D permission application');
})();
