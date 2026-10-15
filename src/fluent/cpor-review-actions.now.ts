import { Record, UiAction } from '@servicenow/sdk/core'

const managerSupport = UiAction({
    $id: Now.ID['cpor-manager-support'],
    table: 'x_au_nswp_cicsm_cpor',
    name: 'Support application',
    actionName: 'cpor_manager_support',
    active: true,
    showInsert: false,
    showUpdate: true,
    roles: ['x_au_nswp_pcm.case_worker'],
    condition: 'new CporReviewRuntime().canSupport(current.getUniqueValue())',
    order: 100,
    form: true,
    client: { isClient: true, onClick: 'openCporManagerSupport()' },
    script: 'function openCporManagerSupport() { return false; }',
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    var caseId = g_form.getUniqueValue();
    var contextRequest = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
    contextRequest.addParam('sysparm_name', 'supportContext');
    contextRequest.addParam('sysparm_case', caseId);
    contextRequest.getXMLAnswer(function (raw) {
        var context;
        try {
            context = JSON.parse(raw || '{}');
            if (context.error || !context.activity) throw context.error || 'Review context is unavailable.';
        } catch (error) {
            g_form.addErrorMessage(String(error));
            return;
        }
        g_modal.showFields({
            title: 'Support application',
            size: 'lg',
            confirmTitle: 'Support',
            fields: [
                { type: 'reference', name: 'nominee', label: 'Nominated Superintendent', mandatory: true,
                    reference: 'sys_user', referringTable: 'x_au_nswp_cicsm_cpor', referringRecordId: caseId },
                { type: 'textarea', name: 'comments', label: 'Review comments', mandatory: false },
            ],
        }).then(function (result) {
            var nominee = '', comments = '';
            (result.updatedFields || []).forEach(function (field) {
                if (field.name === 'nominee') nominee = field.value;
                if (field.name === 'comments') comments = field.value;
            });
            if (!nominee) {
                g_form.addErrorMessage('Select a Superintendent.');
                return;
            }
            var request = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
            request.addParam('sysparm_name', 'support');
            request.addParam('sysparm_case', caseId);
            request.addParam('sysparm_activity', context.activity);
            request.addParam('sysparm_nominee', nominee);
            request.addParam('sysparm_comments', comments);
            request.getXMLAnswer(function (answer) {
                try {
                    var response = JSON.parse(answer || '{}');
                    if (response.error || !response.ok) throw response.error || 'Support was not recorded.';
                    g_form.addInfoMessage('Manager support recorded.');
                    if (typeof g_aw !== 'undefined') {
                        g_aw.closeRecord();
                        g_aw.openRecord('x_au_nswp_cicsm_cpor', caseId);
                    }
                } catch (error) {
                    g_form.addErrorMessage(String(error));
                }
            });
        });
    });
}`,
    },
})

const supportFormAction = Record({
    $id: Now.ID['cpor-manager-support-workspace-action'],
    table: 'sys_ux_form_action',
    data: { table: 'x_au_nswp_cicsm_cpor', ui_action: managerSupport,
        action_type: 'ui_action', active: true, name: 'Support application' },
})

Record({
    $id: Now.ID['cpor-manager-support-workspace-layout'],
    table: 'sys_ux_form_action_layout_item',
    data: { table: 'x_au_nswp_cicsm_cpor', name: 'cpor_manager_support', label: 'Support application',
        color: 'primary', overflow: false, order: 100, active: true,
        item_type: 'action', action: supportFormAction },
})
