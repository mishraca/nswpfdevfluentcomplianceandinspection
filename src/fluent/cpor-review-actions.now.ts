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
    form: { showButton: false, showLink: false, showContextMenu: false },
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

const requestAmendment = UiAction({
    $id: Now.ID['cpor-request-amendments'], table: 'x_au_nswp_cicsm_cpor',
    name: 'Request amendments', actionName: 'cpor_request_amendments', active: true,
    showInsert: false, showUpdate: true, roles: ['x_au_nswp_pcm.case_worker'],
    condition: 'new CporReviewRuntime().canRequestAmendment(current.getUniqueValue())',
    order: 150, form: { showButton: false, showLink: false, showContextMenu: false },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    var caseId = g_form.getUniqueValue();
    var contextRequest = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
    contextRequest.addParam('sysparm_name', 'amendmentRequestContext');
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
        g_modal.showFields({ title: 'Request amendments', confirmTitle: 'Send request', size: 'md',
            fields: [{ type: 'textarea', name: 'reason', label: 'What needs to be amended', mandatory: true }],
        }).then(function (result) {
            var reason = '';
            (result.updatedFields || []).forEach(function (field) {
                if (field.name === 'reason') reason = field.value;
            });
            if (!String(reason || '').trim()) {
                g_form.addErrorMessage('Enter amendment instructions.');
                return;
            }
            var request = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
            request.addParam('sysparm_name', 'requestAmendment');
            request.addParam('sysparm_case', caseId);
            request.addParam('sysparm_activity', context.activity);
            request.addParam('sysparm_reason', reason);
            request.getXMLAnswer(function (answer) {
                try {
                    var response = JSON.parse(answer || '{}');
                    if (response.error || !response.ok) throw response.error || 'The request was not recorded.';
                    g_form.addInfoMessage('Amendments requested from the submitter.');
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
const requestAmendmentFormAction = Record({ $id: Now.ID['cpor-request-amendments-workspace-action'],
    table: 'sys_ux_form_action', data: { table: 'x_au_nswp_cicsm_cpor',
        ui_action: requestAmendment, action_type: 'ui_action', active: true, name: 'Request amendments' } })
Record({ $id: Now.ID['cpor-request-amendments-workspace-layout'],
    table: 'sys_ux_form_action_layout_item',
    data: { table: 'x_au_nswp_cicsm_cpor', name: 'cpor_request_amendments',
        label: 'Request amendments', color: 'secondary', overflow: false, order: 150,
        active: true, item_type: 'action', action: requestAmendmentFormAction } })

const approveScript = `function onClick(g_form) {
    var caseId = g_form.getUniqueValue();
    var contextRequest = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
    contextRequest.addParam('sysparm_name', 'decisionContext');
    contextRequest.addParam('sysparm_case', caseId);
    contextRequest.getXMLAnswer(function (raw) {
        var context;
        try {
            context = JSON.parse(raw || '{}');
            if (context.error || !context.activity) throw context.error || 'Approval context is unavailable.';
        } catch (error) {
            g_form.addErrorMessage(String(error));
            return;
        }
        g_modal.showFields({ title: 'Approve application', confirmTitle: 'Approve application', size: 'md',
            fields: [{ type: 'textarea', name: 'comments', label: 'Decision comments', mandatory: false }],
        }).then(function (result) {
            var comments = '';
            (result.updatedFields || []).forEach(function (field) {
                if (field.name === 'comments') comments = field.value;
            });
            var request = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
            request.addParam('sysparm_name', 'decide');
            request.addParam('sysparm_case', caseId);
            request.addParam('sysparm_activity', context.activity);
            request.addParam('sysparm_outcome', 'approve');
            request.addParam('sysparm_comments', comments);
            request.getXMLAnswer(function (answer) {
                try {
                    var response = JSON.parse(answer || '{}');
                    if (response.error || !response.ok) throw response.error || 'The decision was not recorded.';
                    g_form.addInfoMessage('Decision recorded.');
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
}`

const rejectScript = `function onClick(g_form) {
    var caseId = g_form.getUniqueValue();
    var contextRequest = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
    contextRequest.addParam('sysparm_name', 'decisionContext');
    contextRequest.addParam('sysparm_case', caseId);
    contextRequest.getXMLAnswer(function (raw) {
        var context;
        try {
            context = JSON.parse(raw || '{}');
            if (context.error || !context.activity) throw context.error || 'Approval context is unavailable.';
        } catch (error) {
            g_form.addErrorMessage(String(error));
            return;
        }
        g_modal.showFields({ title: 'Reject application', confirmTitle: 'Reject application', size: 'md',
            fields: [{ type: 'textarea', name: 'comments', label: 'Decision comments', mandatory: true }],
        }).then(function (result) {
            var comments = '';
            (result.updatedFields || []).forEach(function (field) {
                if (field.name === 'comments') comments = field.value;
            });
            var request = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
            request.addParam('sysparm_name', 'decide');
            request.addParam('sysparm_case', caseId);
            request.addParam('sysparm_activity', context.activity);
            request.addParam('sysparm_outcome', 'reject');
            request.addParam('sysparm_comments', comments);
            request.getXMLAnswer(function (answer) {
                try {
                    var response = JSON.parse(answer || '{}');
                    if (response.error || !response.ok) throw response.error || 'The decision was not recorded.';
                    g_form.addInfoMessage('Decision recorded.');
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
}`

const approveApplication = UiAction({
    $id: Now.ID['cpor-final-approve'], table: 'x_au_nswp_cicsm_cpor',
    name: 'Approve application', actionName: 'cpor_final_approve', active: true,
    showInsert: false, showUpdate: true, roles: ['x_au_nswp_pcm.case_worker'],
    condition: 'new CporReviewRuntime().canDecide(current.getUniqueValue())',
    order: 200, form: { showButton: false, showLink: false, showContextMenu: false },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true,
        clientScriptV2: approveScript },
})
const approveFormAction = Record({ $id: Now.ID['cpor-final-approve-workspace-action'],
    table: 'sys_ux_form_action', data: { table: 'x_au_nswp_cicsm_cpor',
        ui_action: approveApplication, action_type: 'ui_action', active: true, name: 'Approve application' } })
Record({ $id: Now.ID['cpor-final-approve-workspace-layout'], table: 'sys_ux_form_action_layout_item',
    data: { table: 'x_au_nswp_cicsm_cpor', name: 'cpor_final_approve', label: 'Approve application',
        color: 'primary', overflow: false, order: 200, active: true,
        item_type: 'action', action: approveFormAction } })

const rejectApplication = UiAction({
    $id: Now.ID['cpor-final-reject'], table: 'x_au_nswp_cicsm_cpor',
    name: 'Reject application', actionName: 'cpor_final_reject', active: true,
    showInsert: false, showUpdate: true, roles: ['x_au_nswp_pcm.case_worker'],
    condition: 'new CporReviewRuntime().canDecide(current.getUniqueValue())',
    order: 250, form: { showButton: false, showLink: false, showContextMenu: false },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true,
        clientScriptV2: rejectScript },
})
const rejectFormAction = Record({ $id: Now.ID['cpor-final-reject-workspace-action'],
    table: 'sys_ux_form_action', data: { table: 'x_au_nswp_cicsm_cpor',
        ui_action: rejectApplication, action_type: 'ui_action', active: true, name: 'Reject application' } })
Record({ $id: Now.ID['cpor-final-reject-workspace-layout'], table: 'sys_ux_form_action_layout_item',
    data: { table: 'x_au_nswp_cicsm_cpor', name: 'cpor_final_reject', label: 'Reject application',
        color: 'primary-negative', overflow: false, order: 250, active: true,
        item_type: 'action', action: rejectFormAction } })

const recordOutcome = UiAction({
    $id: Now.ID['cpor-record-outcome'], table: 'x_au_nswp_cicsm_cpor',
    name: 'Record inspection outcome', actionName: 'cpor_record_outcome', active: true,
    showInsert: false, showUpdate: true,
    condition: 'new CporReviewRuntime().canFinalise(current.getUniqueValue())',
    order: 300, form: { showButton: false, showLink: false, showContextMenu: false },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    var caseId = g_form.getUniqueValue();
    var yesNo = [{ displayValue: 'Select', value: '' },
        { displayValue: 'Yes', value: 'yes' }, { displayValue: 'No', value: 'no' }];
    g_modal.showFields({ title: 'Record inspection outcome', confirmTitle: 'Finalise case', size: 'lg',
        instruction: 'Enter the inspection date and charge details when conducted, or a reason when not conducted.',
        fields: [
            { type: 'choice', name: 'conducted', label: 'Inspection conducted', mandatory: true, choices: yesNo },
            { type: 'string', name: 'date', label: 'Inspection date (YYYY-MM-DD)' },
            { type: 'choice', name: 'charge', label: 'Charge laid', choices: yesNo },
            { type: 'string', name: 'charge_number', label: 'Charge number, if applicable' },
            { type: 'textarea', name: 'reason', label: 'Reason inspection not conducted' },
        ],
    }).then(function (result) {
        var values = { conducted: '', date: '', charge: '', charge_number: '', reason: '' };
        (result.updatedFields || []).forEach(function (field) {
            if (Object.prototype.hasOwnProperty.call(values, field.name)) values[field.name] = String(field.value || '');
        });
        var request = new GlideAjax('x_au_nswp_cicsm.CporReviewAjax');
        request.addParam('sysparm_name', 'finalise');
        request.addParam('sysparm_case', caseId);
        request.addParam('sysparm_conducted', values.conducted);
        request.addParam('sysparm_date', values.date);
        request.addParam('sysparm_charge', values.charge);
        request.addParam('sysparm_charge_number', values.charge_number);
        request.addParam('sysparm_reason', values.reason);
        request.getXMLAnswer(function (answer) {
            try {
                var response = JSON.parse(answer || '{}');
                if (response.error || !response.ok) throw response.error || 'The outcome was not recorded.';
                g_form.addInfoMessage('Inspection outcome recorded.');
                if (typeof g_aw !== 'undefined') {
                    g_aw.closeRecord();
                    g_aw.openRecord('x_au_nswp_cicsm_cpor', caseId);
                }
            } catch (error) {
                g_form.addErrorMessage(String(error));
            }
        });
    });
}`,
    },
})
const outcomeFormAction = Record({ $id: Now.ID['cpor-record-outcome-workspace-action'],
    table: 'sys_ux_form_action', data: { table: 'x_au_nswp_cicsm_cpor',
        ui_action: recordOutcome, action_type: 'ui_action', active: true, name: 'Record inspection outcome' } })
Record({ $id: Now.ID['cpor-record-outcome-workspace-layout'], table: 'sys_ux_form_action_layout_item',
    data: { table: 'x_au_nswp_cicsm_cpor', name: 'cpor_record_outcome', label: 'Record inspection outcome',
        color: 'primary', overflow: false, order: 300, active: true,
        item_type: 'action', action: outcomeFormAction } })
