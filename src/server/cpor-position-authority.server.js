var CporPositionAuthority = Class.create();
CporPositionAuthority.prototype = {
    initialize: function () {},

    positionFor: function (userId) {
        if (!/^[0-9a-f]{32}$/.test(String(userId || ''))) return '';
        var user = new GlideRecord('sys_user');
        if (!user.get(userId) || user.getValue('active') != '1') return '';

        var profile = new GlideRecord('sn_hr_core_profile');
        profile.addQuery('user', userId);
        profile.setLimit(2);
        profile.query();
        if (!profile.next()) return '';
        var selected = profile.getValue('u_hda_position') || profile.getValue('u_permanent_position');
        if (profile.next() || !/^[0-9a-f]{32}$/.test(String(selected || ''))) return '';

        var position = new GlideRecord('sn_hr_core_sap_position');
        if (!position.get(selected) ||
            (position.isValidField('active') && position.getValue('active') != '1')) return '';
        return position.getUniqueValue();
    },

    incumbentFor: function (positionId) {
        if (!/^[0-9a-f]{32}$/.test(String(positionId || ''))) return '';
        var position = new GlideRecord('sn_hr_core_sap_position');
        if (!position.get(positionId) ||
            (position.isValidField('active') && position.getValue('active') != '1')) return '';

        var profiles = new GlideRecord('sn_hr_core_profile');
        var match = profiles.addQuery('u_hda_position', positionId);
        match.addOrCondition('u_permanent_position', positionId);
        profiles.setLimit(101);
        profiles.query();
        var selectedUser = '';
        var examined = 0;
        while (profiles.next()) {
            if (++examined > 100) return '';
            // An acting position takes precedence over the permanent position.
            var effective = profiles.getValue('u_hda_position') || profiles.getValue('u_permanent_position');
            if (effective != positionId) continue;
            var userId = profiles.getValue('user');
            if (!/^[0-9a-f]{32}$/.test(String(userId || ''))) continue;
            var user = new GlideRecord('sys_user');
            if (!user.get(userId) || user.getValue('active') != '1') continue;
            if (selectedUser && selectedUser != userId) return '';
            selectedUser = userId;
        }
        return selectedUser;
    },

    holds: function (positionId, userId) {
        var actor = userId || gs.getUserID();
        return !!actor && this.incumbentFor(positionId) == actor;
    },

    type: 'CporPositionAuthority'
};
