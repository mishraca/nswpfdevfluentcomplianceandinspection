function onSubmit() {
    var contact = g_form.getValue('externalContact') || '';
    var year = g_form.getValue('applicationYear') || '';
    var birth = g_form.getValue('dateOfBirth') || '';
    var first = g_form.getValue('inspection16c1Date') || '';
    var second = g_form.getValue('inspection16c2Date') || '';
    var now = new Date();
    var today = String(now.getFullYear()) + '-' +
        ('0' + (now.getMonth() + 1)).slice(-2) + '-' +
        ('0' + now.getDate()).slice(-2);
    if (!/^[0-9]{8,20}$/.test(contact)) {
        g_form.showFieldMsg('externalContact', 'Enter 8 to 20 digits.', 'error');
        return false;
    }
    if (!/^[0-9]{4}$/.test(year)) {
        g_form.showFieldMsg('applicationYear', 'Enter a four-digit year.', 'error');
        return false;
    }
    if (birth && birth > today) {
        g_form.showFieldMsg('dateOfBirth', 'Date of birth cannot be in the future.', 'error');
        return false;
    }
    if ((first && first.substring(0, 4) !== year) || (second && second.substring(0, 4) !== year)) {
        g_form.showFieldMsg('applicationYear', 'Both inspection dates must be within the application year.', 'error');
        return false;
    }
    return true;
}
