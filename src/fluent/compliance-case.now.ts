import {
    Acl, BusinessRule, ChoiceColumn, DateColumn, Form, IntegerColumn, List, MultiLineTextColumn,
    Record, ReferenceColumn, StringColumn, Table, default_view,
} from '@servicenow/sdk/core'

// The family table carries shared case behaviour. Specialist leaves inherit
// it and remain one logical Task record rather than a second details record.
export const x_au_nswp_cicsm_case = Table({
    name: 'x_au_nswp_cicsm_case', label: 'Compliance and inspection case',
    extends: 'x_au_nswp_pcm_case' as any, display: 'number',
    extensible: true,
    accessibleFrom: 'public', callerAccess: 'restricted',
    actions: { read: true, create: false, update: false, delete: false },
    allowClientScripts: false, allowNewFields: false, allowUiActions: false,
    allowWebServiceAccess: false, audit: true,
    schema: {},
})

export const x_au_nswp_cicsm_cpor = Table({
    name: 'x_au_nswp_cicsm_cpor', label: 'CPOR 16D case',
    extends: 'x_au_nswp_cicsm_case', display: 'number',
    accessibleFrom: 'public', callerAccess: 'restricted',
    actions: { read: true, create: false, update: false, delete: false },
    allowClientScripts: false, allowNewFields: false, allowUiActions: false,
    allowWebServiceAccess: false, audit: true,
    attributes: { no_attachment: true },
    schema: {
        external_contact_number: StringColumn({ label: 'Best external contact number', maxLength: 20, mandatory: true }),
        registerable_person_name: StringColumn({ label: "Registerable person's name", maxLength: 160, mandatory: true }),
        date_of_birth: DateColumn({ label: 'Date of birth', mandatory: true }),
        cni: StringColumn({ label: 'CNI', maxLength: 80, mandatory: true }),
        cpr_case_number: StringColumn({ label: 'CPR case number', maxLength: 80, mandatory: true }),
        premises_address: StringColumn({ label: 'Address subject to application', maxLength: 1000, mandatory: true }),
        grounds: MultiLineTextColumn({ label: 'Grounds for application', maxLength: 16000, mandatory: true }),
        inspection_16c1_date: DateColumn({ label: 'Date of 16C1 inspection', mandatory: true }),
        inspection_16c1_event_number: StringColumn({ label: '16C1 event number', maxLength: 80, mandatory: true }),
        inspection_16c2_date: DateColumn({ label: 'Date of 16C2 inspection', mandatory: true }),
        inspection_16c2_event_number: StringColumn({ label: '16C2 event number', maxLength: 80, mandatory: true }),
        manager: ReferenceColumn({ label: 'Supporting Manager', referenceTable: 'sys_user', mandatory: true, cascadeRule: 'restrict' }),
        manager_position_at_submission: ReferenceColumn({ label: 'Manager position at submission',
            referenceTable: 'sn_hr_core_sap_position', mandatory: true, cascadeRule: 'restrict' }),
        cpor_application_year: IntegerColumn({ label: 'CPOR application year', mandatory: true, min: 1000, max: 9999 }),
        approval_outcome: ChoiceColumn({ label: 'Final decision', choices: {
            approved: 'Approved', rejected: 'Rejected',
        } }),
        inspection_conducted: ChoiceColumn({ label: 'Inspection conducted', choices: { yes: 'Yes', no: 'No' } }),
        final_inspection_date: DateColumn({ label: 'Final inspection date' }),
        charge_laid: ChoiceColumn({ label: 'Charge laid', choices: { yes: 'Yes', no: 'No' } }),
        charge_number: StringColumn({ label: 'Charge number', maxLength: 80 }),
        not_conducted_reason: MultiLineTextColumn({ label: 'Reason inspection not conducted', maxLength: 4000 }),
    },
})

export const x_au_nswp_cicsm_activity = Table({
    name: 'x_au_nswp_cicsm_activity', label: 'Compliance case activity',
    extends: 'x_au_nswp_pcm_activity' as any, display: 'number',
    accessibleFrom: 'public', callerAccess: 'restricted',
    actions: { read: true, create: false, update: false, delete: false },
    allowClientScripts: false, allowNewFields: false, allowUiActions: false,
    allowWebServiceAccess: false, audit: true,
    schema: {
        responsible_position: ReferenceColumn({ label: 'Responsible SAP position',
            referenceTable: 'sn_hr_core_sap_position', mandatory: true, cascadeRule: 'restrict' }),
        review_outcome: ChoiceColumn({ label: 'Review outcome', choices: {
            support: 'Supported', decline: 'Not supported',
            request_amendment: 'Amendments requested', approve: 'Approved', reject: 'Rejected',
        } }),
        review_comments: MultiLineTextColumn({ label: 'Review comments', maxLength: 4000 }),
        nominated_superintendent: ReferenceColumn({ label: 'Nominated Superintendent',
            referenceTable: 'sys_user', cascadeRule: 'restrict' }),
    },
})

BusinessRule({
    $id: Now.ID['validate-cpor-application-fields'],
    name: 'Validate CPOR application fields', table: 'x_au_nswp_cicsm_cpor',
    when: 'before', action: ['insert', 'update'], order: 100, active: true,
    script: `var contact = current.getValue('external_contact_number') || '';
var birth = current.getValue('date_of_birth') || '';
var year = current.getValue('cpor_application_year') || '';
var first = current.getValue('inspection_16c1_date') || '';
var second = current.getValue('inspection_16c2_date') || '';
var today = new GlideDate().getValue();
var problem = '';
if (!/^[0-9]{8,20}$/.test(contact)) problem = 'Enter a contact number of 8 to 20 digits.';
else if (!birth || birth > today) problem = 'Enter a date of birth that is not in the future.';
else if (!/^[0-9]{4}$/.test(year)) problem = 'Enter a four-digit application year.';
else if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(first) ||
    !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(second)) {
    problem = 'Enter both inspection dates.';
} else if (first.substring(0, 4) != year || second.substring(0, 4) != year) {
    problem = 'Both inspection dates must be within the application year.';
} else if (first >= second) {
    problem = 'The 16C2 inspection must be after the 16C1 inspection.';
} else if (!current.getValue('selected_department')) {
    problem = 'Select the department for this application.';
}
if (problem) {
    gs.addErrorMessage(problem);
    current.setAbortAction(true);
}`,
})

BusinessRule({
    $id: Now.ID['create-cpor-first-activity'],
    name: 'Create first CPOR review activity', table: 'x_au_nswp_cicsm_cpor',
    when: 'after', action: ['insert'], order: 100, active: true,
    script: `var service = current.service.getRefRecord();
if (!service.isValidRecord() || service.getValue('active') != '1' ||
    service.getValue('fulfilment_mode') != 'activities') {
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
var managerId = current.getValue('manager');
var positionId = current.getValue('manager_position_at_submission');
if (!positionId || !new CporPositionAuthority().holds(positionId, managerId)) {
    throw 'Manager position authority changed before the review activity was created.';
}
var existing = new GlideRecord('x_au_nswp_cicsm_activity');
existing.addQuery('case', current.getUniqueValue());
existing.addQuery('stage', stage.getUniqueValue());
existing.setLimit(1);
existing.query();
if (existing.next()) throw 'The first CPOR review activity already exists.';
var review = new GlideRecord('x_au_nswp_cicsm_activity');
review.initialize();
review.setValue('case', current.getUniqueValue());
review.setValue('stage', stage.getUniqueValue());
review.setValue('responsible_position', positionId);
review.setValue('assigned_to', managerId);
review.setValue('activity_status', 'ready');
review.setValue('short_description', stage.getValue('name'));
if (!review.insert()) throw 'The first CPOR review activity could not be created.';`,
})

BusinessRule({
    $id: Now.ID['validate-cpor-inspection-outcome'],
    name: 'Validate CPOR inspection outcome', table: 'x_au_nswp_cicsm_cpor',
    when: 'before', action: ['update'], order: 120, active: true,
    script: `var outcomeFields = ['inspection_conducted', 'final_inspection_date',
    'charge_laid', 'charge_number', 'not_conducted_reason'];
if (previous.getValue('lifecycle') == 'complete') {
    for (var i = 0; i < outcomeFields.length; i++) {
        if (current.getValue(outcomeFields[i]) != previous.getValue(outcomeFields[i])) {
            gs.addErrorMessage('A completed inspection outcome cannot be changed through ordinary record update.');
            current.setAbortAction(true);
            break;
        }
    }
}
if (current.getValue('approval_outcome') == 'approved' && current.getValue('lifecycle') == 'complete') {
    var error = new CporReviewRuntime().validateOutcome(current);
    if (error) {
        gs.addErrorMessage(error);
        current.setAbortAction(true);
    }
}`,
})

BusinessRule({
    $id: Now.ID['protect-cpor-amendment-fields'],
    name: 'Protect fields during CPOR amendments', table: 'x_au_nswp_cicsm_cpor',
    when: 'before', action: ['update'], order: 115, active: true,
    script: `if (previous.getValue('lifecycle') == 'awaiting_information' &&
    current.getValue('lifecycle') == 'awaiting_information') {
    var permitted;
    try {
        permitted = new CporReviewRuntime().amendmentContext(previous.getUniqueValue()).fields;
    } catch (error) {
        gs.addErrorMessage('This application cannot be amended by the current person.');
        current.setAbortAction(true);
    }
    if (permitted) {
        var elements = current.getElements();
        for (var i = 0; i < elements.length; i++) {
            var field = elements[i].getName();
            if (field != 'variables' && !/^sys_/.test(field) && elements[i].changes() &&
                permitted.indexOf(field) < 0) {
                gs.addErrorMessage('Only configured application details may be amended.');
                current.setAbortAction(true);
                break;
            }
        }
    }
}`,
})

// No ordinary direct create, write or delete path is opened by this table.
Acl({ $id: Now.ID['cpor-case-position-read'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'read',
    adminOverrides: false, script: 'answer = gs.hasRole("admin") || new x_au_nswp_pcm.OperationalCasePolicy().allows(current, "case.read") || new CporReviewRuntime().canReadCase(current.getUniqueValue());' })
Acl({ $id: Now.ID['compliance-activity-position-read'], type: 'record', table: 'x_au_nswp_cicsm_activity', operation: 'read',
    adminOverrides: false, script: 'answer = gs.hasRole("admin") || new x_au_nswp_pcm.OperationalCasePolicy().allowsActivity(current) || new CporReviewRuntime().canReadActivity(current);' })
Acl({ $id: Now.ID['compliance-case-create'], type: 'record', table: 'x_au_nswp_cicsm_case', operation: 'create', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['compliance-case-write'], type: 'record', table: 'x_au_nswp_cicsm_case', operation: 'write',
    adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmend(current.getUniqueValue());' })
Acl({ $id: Now.ID['compliance-case-delete'], type: 'record', table: 'x_au_nswp_cicsm_case', operation: 'delete', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['cpor-case-create'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'create', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['cpor-case-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'write',
    adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmend(current.getUniqueValue());' })
Acl({ $id: Now.ID['cpor-case-field-write-default-deny'], type: 'record', table: 'x_au_nswp_cicsm_cpor',
    field: '*', operation: 'write', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['cpor-amend-contact-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'external_contact_number', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "external_contact_number");' })
Acl({ $id: Now.ID['cpor-amend-name-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'registerable_person_name', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "registerable_person_name");' })
Acl({ $id: Now.ID['cpor-amend-birth-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'date_of_birth', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "date_of_birth");' })
Acl({ $id: Now.ID['cpor-amend-cni-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'cni', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "cni");' })
Acl({ $id: Now.ID['cpor-amend-cpr-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'cpr_case_number', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "cpr_case_number");' })
Acl({ $id: Now.ID['cpor-amend-address-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'premises_address', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "premises_address");' })
Acl({ $id: Now.ID['cpor-amend-grounds-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'grounds', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "grounds");' })
Acl({ $id: Now.ID['cpor-amend-16c1-date-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'inspection_16c1_date', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "inspection_16c1_date");' })
Acl({ $id: Now.ID['cpor-amend-16c1-event-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'inspection_16c1_event_number', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "inspection_16c1_event_number");' })
Acl({ $id: Now.ID['cpor-amend-16c2-date-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'inspection_16c2_date', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "inspection_16c2_date");' })
Acl({ $id: Now.ID['cpor-amend-16c2-event-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'inspection_16c2_event_number', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "inspection_16c2_event_number");' })
Acl({ $id: Now.ID['cpor-amend-year-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', field: 'cpor_application_year', operation: 'write', adminOverrides: false, script: 'answer = new CporReviewRuntime().canAmendField(current.getUniqueValue(), "cpor_application_year");' })
Acl({ $id: Now.ID['cpor-case-delete'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'delete', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['compliance-activity-create'], type: 'record', table: 'x_au_nswp_cicsm_activity', operation: 'create', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['compliance-activity-write'], type: 'record', table: 'x_au_nswp_cicsm_activity', operation: 'write', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['compliance-activity-delete'], type: 'record', table: 'x_au_nswp_cicsm_activity', operation: 'delete', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })

List({ table: 'x_au_nswp_cicsm_case', view: default_view,
    columns: ['number', 'short_description', 'service', 'lifecycle', 'requester', 'selected_department', 'sys_updated_on'] })
List({ table: 'x_au_nswp_cicsm_cpor', view: default_view,
    columns: ['number', 'short_description', 'lifecycle', 'approval_outcome', 'requester', 'selected_department', 'manager', 'sys_updated_on'] })
List({ table: 'x_au_nswp_cicsm_activity', view: default_view,
    columns: ['number', 'short_description', 'case', 'stage', 'activity_status', 'assigned_to', 'responsible_position'] })

const cporProcessFlow = Record({ $id: Now.ID['cpor-process-flow-formatter'], table: 'sys_ui_formatter',
    data: { name: 'Process Flow', type: 'formatter', formatter: 'process_flow.xml',
        table: 'x_au_nswp_cicsm_cpor', active: true } })

Form({ table: 'x_au_nswp_cicsm_case', view: default_view, sections: [
    { caption: 'Case overview', content: [
        { layout: 'two-column', leftElements: [
            { type: 'table_field', field: 'number' }, { type: 'table_field', field: 'short_description' },
            { type: 'table_field', field: 'service' }, { type: 'table_field', field: 'selected_department' },
        ], rightElements: [
            { type: 'table_field', field: 'lifecycle' }, { type: 'table_field', field: 'requester' },
            { type: 'table_field', field: 'secondary_requester' }, { type: 'table_field', field: 'submitted_at' },
        ] },
    ] },
] })

Form({ table: 'x_au_nswp_cicsm_cpor', view: default_view, sections: [
    { caption: 'Case overview', content: [
        { layout: 'one-column', elements: [{ type: 'formatter', formatterRef: cporProcessFlow }] },
        { layout: 'two-column', leftElements: [
            { type: 'table_field', field: 'number' }, { type: 'table_field', field: 'short_description' },
            { type: 'table_field', field: 'service' }, { type: 'table_field', field: 'selected_department' },
        ], rightElements: [
            { type: 'table_field', field: 'lifecycle' }, { type: 'table_field', field: 'requester' },
            { type: 'table_field', field: 'secondary_requester' }, { type: 'table_field', field: 'submitted_at' },
        ] },
    ] },
    { caption: 'CPOR 16D application', content: [
        { layout: 'two-column', leftElements: [
            { type: 'table_field', field: 'registerable_person_name' },
            { type: 'table_field', field: 'date_of_birth' },
            { type: 'table_field', field: 'cni' },
            { type: 'table_field', field: 'cpr_case_number' },
            { type: 'table_field', field: 'external_contact_number' },
        ], rightElements: [
            { type: 'table_field', field: 'manager' },
            { type: 'table_field', field: 'manager_position_at_submission' },
            { type: 'table_field', field: 'cpor_application_year' },
            { type: 'table_field', field: 'inspection_16c1_date' },
            { type: 'table_field', field: 'inspection_16c1_event_number' },
            { type: 'table_field', field: 'inspection_16c2_date' },
            { type: 'table_field', field: 'inspection_16c2_event_number' },
        ] },
        { layout: 'one-column', elements: [
            { type: 'table_field', field: 'premises_address' },
            { type: 'table_field', field: 'grounds' },
        ] },
    ] },
    { caption: 'Decision and outcome', content: [
        { layout: 'two-column', leftElements: [
            { type: 'table_field', field: 'approval_outcome' },
            { type: 'table_field', field: 'inspection_conducted' },
            { type: 'table_field', field: 'final_inspection_date' },
        ], rightElements: [
            { type: 'table_field', field: 'charge_laid' },
            { type: 'table_field', field: 'charge_number' },
            { type: 'table_field', field: 'not_conducted_reason' },
        ] },
    ] },
] })

Form({ table: 'x_au_nswp_cicsm_activity', view: default_view, sections: [
    { caption: 'Review activity', content: [
        { layout: 'two-column', leftElements: [
            { type: 'table_field', field: 'number' }, { type: 'table_field', field: 'case' },
            { type: 'table_field', field: 'stage' }, { type: 'table_field', field: 'activity_status' },
        ], rightElements: [
            { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'responsible_position' },
            { type: 'table_field', field: 'review_outcome' },
            { type: 'table_field', field: 'nominated_superintendent' },
        ] },
        { layout: 'one-column', elements: [{ type: 'table_field', field: 'review_comments' }] },
    ] },
] })
