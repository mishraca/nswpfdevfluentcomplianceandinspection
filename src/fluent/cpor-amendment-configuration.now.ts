import { Acl, BooleanColumn, BusinessRule, FieldListColumn, Form, List, Record, ReferenceColumn, Table, default_view } from '@servicenow/sdk/core'

export const x_au_nswp_cicsm_amendment_rule = Table({
    name: 'x_au_nswp_cicsm_amendment_rule', label: 'CPOR amendment rule', display: 'stage',
    index: [{ name: 'one_amendment_rule_per_stage', unique: true, element: ['stage'] }],
    accessibleFrom: 'package_private', callerAccess: 'restricted',
    actions: { read: true, create: false, update: false, delete: false },
    allowClientScripts: false, allowNewFields: false, allowUiActions: false,
    allowWebServiceAccess: false, audit: true,
    schema: {
        stage: ReferenceColumn({ label: 'Review stage', referenceTable: 'x_au_nswp_pcm_stage',
            mandatory: true, referenceQual: 'amendments_allowed=true^purposeINreview,support,approval',
            cascadeRule: 'restrict' }),
        editable_fields: FieldListColumn({ label: 'Fields the submitter may amend', mandatory: true,
            attributes: { table: 'x_au_nswp_cicsm_cpor' },
            help: 'Select only submitted application fields. Review and outcome fields cannot be made editable.' }),
        active: BooleanColumn({ label: 'Active', default: false }),
    },
})

const applicationFields = 'external_contact_number,registerable_person_name,date_of_birth,cni,cpr_case_number,premises_address,grounds,inspection_16c1_date,inspection_16c1_event_number,inspection_16c2_date,inspection_16c2_event_number,cpor_application_year'

Record({ $id: Now.ID['cpor-manager-amendment-rule'], table: 'x_au_nswp_cicsm_amendment_rule',
    data: { stage: '556c082aa05f4949b88c8600d4623dd0', editable_fields: applicationFields, active: true } })
Record({ $id: Now.ID['cpor-superintendent-amendment-rule'], table: 'x_au_nswp_cicsm_amendment_rule',
    data: { stage: 'ca6df3be16ce4866881c4a3c3fb36edd', editable_fields: applicationFields, active: true } })

BusinessRule({
    $id: Now.ID['validate-cpor-amendment-rule'], name: 'Validate CPOR amendment rule',
    table: 'x_au_nswp_cicsm_amendment_rule', when: 'before', action: ['insert', 'update'], order: 100, active: true,
    script: `var stage = current.stage.getRefRecord();
var process = stage.isValidRecord() ? stage.process.getRefRecord() : null;
var caseType = process && process.isValidRecord() ? process.case_type.getRefRecord() : null;
var allowed = ['external_contact_number','registerable_person_name','date_of_birth','cni',
    'cpr_case_number','premises_address','grounds','inspection_16c1_date',
    'inspection_16c1_event_number','inspection_16c2_date','inspection_16c2_event_number',
    'cpor_application_year'];
var selected = String(current.getValue('editable_fields') || '').split(',');
var valid = stage.isValidRecord() && stage.getValue('amendments_allowed') == '1' &&
    ['review','support','approval'].indexOf(stage.getValue('purpose')) >= 0 &&
    caseType && caseType.isValidRecord() && caseType.getValue('case_table') == 'x_au_nswp_cicsm_cpor' &&
    selected.length > 0;
for (var i = 0; i < selected.length; i++) {
    if (allowed.indexOf(selected[i]) < 0 || selected.indexOf(selected[i]) != i) valid = false;
}
if (!valid) {
    gs.addErrorMessage('Select an amendment-enabled review stage and permitted application fields.');
    current.setAbortAction(true);
}`,
})

Acl({ $id: Now.ID['cpor-amendment-rule-read'], type: 'record', table: 'x_au_nswp_cicsm_amendment_rule', operation: 'read',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['cpor-amendment-rule-create'], type: 'record', table: 'x_au_nswp_cicsm_amendment_rule', operation: 'create',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['cpor-amendment-rule-write'], type: 'record', table: 'x_au_nswp_cicsm_amendment_rule', operation: 'write',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['cpor-amendment-rule-delete'], type: 'record', table: 'x_au_nswp_cicsm_amendment_rule', operation: 'delete',
    decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })

List({ table: 'x_au_nswp_cicsm_amendment_rule', view: default_view,
    columns: ['stage', 'editable_fields', 'active', 'sys_updated_on'] })
Form({ table: 'x_au_nswp_cicsm_amendment_rule', view: default_view, sections: [
    { caption: 'Amendment permissions', content: [{ layout: 'two-column', leftElements: [
        { type: 'table_field', field: 'stage' }, { type: 'table_field', field: 'editable_fields' },
    ], rightElements: [{ type: 'table_field', field: 'active' }] }] },
] })
