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
    var profile = new GlideRecord('sn_hr_core_profile');
    profile.addQuery('user', manager);
    profile.setLimit(2);
    profile.query();
    if (!profile.next()) throw 'The selected Manager has no HR Profile.';
    var hda = profile.getValue('u_hda_position');
    var permanent = profile.getValue('u_permanent_position');
    var managerPosition = hda || permanent;
    if (profile.next() || !activeRecord('sn_hr_core_sap_position', managerPosition)) {
        throw 'The selected Manager has no valid SAP HDA Position or SAP Position.';
    }
    var service = new GlideRecord('x_au_nswp_pcm_service');
    service.addQuery('code', 'cpor_16d');
    service.addQuery('active', true);
    service.setLimit(2);
    service.query();
    if (!service.next()) throw 'The CPOR 16D service is unavailable.';
    var selected = service.getUniqueValue();
    if (service.next()) throw 'The CPOR 16D service configuration is ambiguous.';

    var caseType = new GlideRecord('x_au_nswp_pcm_case_type');
    if (!caseType.get(service.getValue('case_type')) ||
        caseType.getValue('case_table') != 'x_au_nswp_cicsm_cpor') {
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
