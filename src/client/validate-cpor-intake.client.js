function onSubmit() {
    function dateParts(value) {
        var match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value);
        var year, month, day;
        if (match) {
            year = Number(match[1]);
            month = Number(match[2]);
            day = Number(match[3]);
        } else {
            match = /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/.exec(value);
            if (!match) return null;
            day = Number(match[1]);
            month = Number(match[2]);
            year = Number(match[3]);
        }
        var date = new Date(Date.UTC(year, month - 1, day));
        if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 ||
            date.getUTCDate() !== day) return null;
        return { year: year, time: date.getTime() };
    }
    var contact = g_form.getValue('externalContact') || '';
    var requester = g_form.getValue('requestingOfficer') || '';
    var secondary = g_form.getValue('secondaryOfficer') || '';
    var department = g_form.getValue('selectedDepartment') || '';
    var year = g_form.getValue('applicationYear') || '';
    var birth = g_form.getValue('dateOfBirth') || '';
    var first = g_form.getValue('inspection16c1Date') || '';
    var second = g_form.getValue('inspection16c2Date') || '';
    var now = new Date();
    var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    if (requester && secondary && requester === secondary) {
        g_form.showFieldMsg('secondaryOfficer', 'Select a different secondary requesting officer.', 'error');
        return false;
    }
    if (!department) {
        g_form.showFieldMsg('selectedDepartment', 'Select the department for this application.', 'error');
        return false;
    }
    if (!/^[0-9]{8,20}$/.test(contact)) {
        g_form.showFieldMsg('externalContact', 'Enter 8 to 20 digits.', 'error');
        return false;
    }
    if (!/^[0-9]{4}$/.test(year)) {
        g_form.showFieldMsg('applicationYear', 'Enter a four-digit year.', 'error');
        return false;
    }
    var birthDate = dateParts(birth);
    var firstDate = dateParts(first);
    var secondDate = dateParts(second);
    if (birth && (!birthDate || birthDate.time > today)) {
        g_form.showFieldMsg('dateOfBirth', 'Enter a valid date of birth that is not in the future.', 'error');
        return false;
    }
    if ((first && !firstDate) || (second && !secondDate)) {
        g_form.showFieldMsg('inspection16c1Date', 'Enter valid inspection dates.', 'error');
        return false;
    }
    if ((firstDate && firstDate.year !== Number(year)) ||
        (secondDate && secondDate.year !== Number(year))) {
        g_form.showFieldMsg('applicationYear', 'Both inspection dates must be within the application year.', 'error');
        return false;
    }
    if (firstDate && secondDate && firstDate.time >= secondDate.time) {
        g_form.showFieldMsg('inspection16c2Date', 'The 16C2 inspection must be after the 16C1 inspection.', 'error');
        return false;
    }
    return true;
}
