import {
    Acl, BusinessRule, DateColumn, Form, IntegerColumn, List, MultiLineTextColumn,
    ReferenceColumn, StringColumn, Table, default_view,
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
if (!/^[0-9]{8,20}$/.test(contact) || !/^\\d{4}$/.test(year) ||
    !birth || birth > today || !first || !second ||
    first.substring(0, 4) != year || second.substring(0, 4) != year ||
    !current.getValue('selected_department')) {
    gs.addErrorMessage('Check the contact number, date of birth, application year, inspection dates and department.');
    current.setAbortAction(true);
}`,
})

// No ordinary direct create, write or delete path is opened by this table.
Acl({ $id: Now.ID['compliance-case-create'], type: 'record', table: 'x_au_nswp_cicsm_case', operation: 'create', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['compliance-case-write'], type: 'record', table: 'x_au_nswp_cicsm_case', operation: 'write', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['compliance-case-delete'], type: 'record', table: 'x_au_nswp_cicsm_case', operation: 'delete', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['cpor-case-create'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'create', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['cpor-case-write'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'write', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['cpor-case-delete'], type: 'record', table: 'x_au_nswp_cicsm_cpor', operation: 'delete', decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })

List({ table: 'x_au_nswp_cicsm_case', view: default_view,
    columns: ['number', 'short_description', 'service', 'lifecycle', 'requester', 'selected_department', 'sys_updated_on'] })
List({ table: 'x_au_nswp_cicsm_cpor', view: default_view,
    columns: ['number', 'short_description', 'lifecycle', 'requester', 'selected_department', 'manager', 'sys_updated_on'] })

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
] })
