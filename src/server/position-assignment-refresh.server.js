(function () {
    var property = 'x_au_nswp_cicsm.assignment_refresh_cursor';
    var cursor = String(gs.getProperty(property, '') || '');
    if (cursor && !/^[0-9a-f]{32}$/.test(cursor)) {
        gs.error('Outstanding assignment refresh stopped: invalid cursor.');
        return;
    }

    var activities = new GlideRecord('x_au_nswp_cicsm_activity');
    activities.addQuery('activity_status', 'IN', 'ready,in_progress,waiting');
    if (cursor) activities.addQuery('sys_id', '>', cursor);
    activities.orderBy('sys_id');
    activities.setLimit(100);
    activities.query();

    var examined = 0;
    var changed = 0;
    var last = '';
    var authority = new CporPositionAuthority();
    while (activities.next()) {
        examined++;
        last = activities.getUniqueValue();
        var record = new GlideRecord('x_au_nswp_cicsm_cpor');
        if (!record.get(activities.getValue('case')) || record.getValue('active') != '1') continue;
        var service = record.service.getRefRecord();
        var stage = activities.stage.getRefRecord();
        if (!service.isValidRecord() || service.getValue('active') != '1' ||
            !stage.isValidRecord() || stage.getValue('active') != '1' ||
            stage.getValue('process') != service.getValue('process')) continue;

        var incumbent = authority.incumbentFor(activities.getValue('responsible_position'));
        if (String(activities.getValue('assigned_to') || '') == incumbent) continue;
        activities.setValue('assigned_to', incumbent);
        if (!activities.update()) {
            gs.error('Outstanding assignment refresh stopped at activity ' + last);
            return;
        }
        changed++;
    }

    // Revisit the beginning after the last page. Keeping the cursor on a
    // failed update ensures the failed activity is retried on the next run.
    gs.setProperty(property, examined < 100 ? '' : last);
    if (changed) gs.info('Outstanding compliance assignments refreshed: ' + changed);
})();
