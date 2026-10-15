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

    holds: function (positionId, userId) {
        return !!positionId && this.positionFor(userId || gs.getUserID()) == positionId;
    },

    type: 'CporPositionAuthority'
};
