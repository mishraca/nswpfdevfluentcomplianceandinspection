import { Acl, BusinessRule, Form, List, Record, ReferenceColumn, StringColumn, Table, BooleanColumn, default_view } from '@servicenow/sdk/core'

export const x_au_nswp_cicsm_rank = Table({
    name: 'x_au_nswp_cicsm_rank', label: 'Police rank', display: 'name',
    accessibleFrom: 'package_private', callerAccess: 'restricted',
    actions: { read: true, create: false, update: false, delete: false },
    allowClientScripts: false, allowNewFields: false, allowUiActions: false,
    allowWebServiceAccess: false, audit: true,
    schema: {
        name: StringColumn({ label: 'Rank', maxLength: 80, mandatory: true, unique: true }),
        active: BooleanColumn({ label: 'Active', default: false }),
    },
})

Record({ $id: Now.ID['superintendent-rank'], table: 'x_au_nswp_cicsm_rank',
    data: { name: 'Superintendent', active: true } })

BusinessRule({
    $id: Now.ID['validate-police-rank'], name: 'Validate police rank',
    table: 'x_au_nswp_cicsm_rank', when: 'before', action: ['insert', 'update'], order: 100, active: true,
    script: `var name = String(current.getValue('name') || '').trim();
if (!/^[A-Za-z][A-Za-z /-]{0,79}$/.test(name)) {
    gs.addErrorMessage('Enter a rank name using letters, spaces, slash or hyphen.');
    current.setAbortAction(true);
} else {
    current.setValue('name', name);
}`,
})

export const x_au_nswp_cicsm_review_authority = Table({
    name: 'x_au_nswp_cicsm_review_authority', label: 'Review authority rule',
    display: 'approval_stage',
    index: [{ name: 'one_authority_rule_per_stage', unique: true, element: ['approval_stage'] }],
    accessibleFrom: 'package_private', callerAccess: 'restricted',
    actions: { read: true, create: false, update: false, delete: false },
    allowClientScripts: false, allowNewFields: false, allowUiActions: false,
    allowWebServiceAccess: false, audit: true,
    schema: {
        approval_stage: ReferenceColumn({ label: 'Approval stage', referenceTable: 'x_au_nswp_pcm_stage', mandatory: true, cascadeRule: 'restrict' }),
        required_rank: ReferenceColumn({ label: 'Required nominee rank', referenceTable: 'x_au_nswp_cicsm_rank', mandatory: true,
            referenceQual: 'active=true', cascadeRule: 'restrict' }),
        active: BooleanColumn({ label: 'Active', default: false }),
    },
})

BusinessRule({
    $id: Now.ID['validate-review-authority-rule'],
    name: 'Validate review authority rule', table: 'x_au_nswp_cicsm_review_authority',
    when: 'before', action: ['insert', 'update'], order: 100, active: true,
    script: `var stage = current.approval_stage.getRefRecord();
var rank = current.required_rank.getRefRecord();
if (!stage.isValidRecord() || stage.getValue('purpose') != 'approval' ||
    !rank.isValidRecord() || rank.getValue('active') != '1' || !rank.getValue('name')) {
    gs.addErrorMessage('Select an approval stage and an active rank.');
    current.setAbortAction(true);
}`,
})

Acl({ $id: Now.ID['rank-read'], type: 'record', table: 'x_au_nswp_cicsm_rank', operation: 'read',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['rank-create'], type: 'record', table: 'x_au_nswp_cicsm_rank', operation: 'create',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['rank-write'], type: 'record', table: 'x_au_nswp_cicsm_rank', operation: 'write',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['rank-delete'], type: 'record', table: 'x_au_nswp_cicsm_rank', operation: 'delete',
    decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })
Acl({ $id: Now.ID['review-authority-read'], type: 'record', table: 'x_au_nswp_cicsm_review_authority', operation: 'read',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['review-authority-create'], type: 'record', table: 'x_au_nswp_cicsm_review_authority', operation: 'create',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['review-authority-write'], type: 'record', table: 'x_au_nswp_cicsm_review_authority', operation: 'write',
    roles: ['x_au_nswp_pcm.configuration_admin'], adminOverrides: false })
Acl({ $id: Now.ID['review-authority-delete'], type: 'record', table: 'x_au_nswp_cicsm_review_authority', operation: 'delete',
    decisionType: 'deny', adminOverrides: false, script: 'answer = false;' })

List({ table: 'x_au_nswp_cicsm_rank', view: default_view, columns: ['name', 'active', 'sys_updated_on'] })
Form({ table: 'x_au_nswp_cicsm_rank', view: default_view, sections: [
    { caption: 'Rank', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'name' }],
        rightElements: [{ type: 'table_field', field: 'active' }] }] },
] })
List({ table: 'x_au_nswp_cicsm_review_authority', view: default_view,
    columns: ['approval_stage', 'required_rank', 'active', 'sys_updated_on'] })
Form({ table: 'x_au_nswp_cicsm_review_authority', view: default_view, sections: [
    { caption: 'Approval authority', content: [{ layout: 'two-column', leftElements: [
        { type: 'table_field', field: 'approval_stage' }, { type: 'table_field', field: 'required_rank' },
    ], rightElements: [{ type: 'table_field', field: 'active' }] }] },
] })
