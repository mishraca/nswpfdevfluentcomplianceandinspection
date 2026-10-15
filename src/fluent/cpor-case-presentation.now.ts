import { Record } from '@servicenow/sdk/core'

const relatedLists = Record({
    $id: Now.ID['cpor-case-related-lists'],
    table: 'sys_ui_related_list',
    data: { name: 'x_au_nswp_cicsm_cpor', view: 'Default view' },
})

Record({
    $id: Now.ID['cpor-case-activities-related-list'],
    table: 'sys_ui_related_list_entry',
    data: { list_id: relatedLists, related_list: 'x_au_nswp_pcm_activity.case', position: 0 },
})

Record({ $id: Now.ID['cpor-process-new'], table: 'sys_process_flow', data: {
    table: 'x_au_nswp_cicsm_cpor', name: 'Application received', label: 'Received',
    condition: 'lifecycle=new^EQ', order: 100, active: true,
} })
Record({ $id: Now.ID['cpor-process-in-progress'], table: 'sys_process_flow', data: {
    table: 'x_au_nswp_cicsm_cpor', name: 'Application review', label: 'In review',
    condition: 'lifecycleINin_progress,awaiting_review^EQ', order: 200, active: true,
} })
Record({ $id: Now.ID['cpor-process-information'], table: 'sys_process_flow', data: {
    table: 'x_au_nswp_cicsm_cpor', name: 'Information requested', label: 'Information requested',
    condition: 'lifecycle=awaiting_information^EQ', order: 300, active: true,
} })
Record({ $id: Now.ID['cpor-process-complete'], table: 'sys_process_flow', data: {
    table: 'x_au_nswp_cicsm_cpor', name: 'Application complete', label: 'Complete',
    condition: 'lifecycle=complete^EQ', order: 400, active: true,
} })
Record({ $id: Now.ID['cpor-process-cancelled'], table: 'sys_process_flow', data: {
    table: 'x_au_nswp_cicsm_cpor', name: 'Application cancelled', label: 'Cancelled',
    condition: 'lifecycle=cancelled^EQ', order: 500, active: true,
} })
