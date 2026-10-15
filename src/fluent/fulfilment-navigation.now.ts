import { ApplicationMenu, Record, UiAction } from '@servicenow/sdk/core'
import { cporIntake } from './cpor-intake.now'

const menu = ApplicationMenu({
    $id: Now.ID['compliance-fulfilment-menu'],
    title: 'Compliance and Inspection Cases',
    description: 'Case and activity lists for compliance fulfilment.',
    roles: ['x_au_nswp_pcm.case_worker'],
    active: true,
})

Record({ $id: Now.ID['menu-compliance-cases'], table: 'sys_app_module', data: {
    title: 'All cases', application: menu, link_type: 'LIST',
    name: 'x_au_nswp_cicsm_case', roles: ['x_au_nswp_pcm.case_worker'], active: true, order: 100,
} })
Record({ $id: Now.ID['menu-cpor-cases'], table: 'sys_app_module', data: {
    title: 'CPOR 16D cases', application: menu, link_type: 'LIST',
    name: 'x_au_nswp_cicsm_cpor', roles: ['x_au_nswp_pcm.case_worker'], active: true, order: 200,
} })
Record({ $id: Now.ID['menu-operational-activities'], table: 'sys_app_module', data: {
    title: 'Case activities', application: menu, link_type: 'LIST',
    name: 'x_au_nswp_pcm_activity', roles: ['x_au_nswp_pcm.case_worker'], active: true, order: 300,
} })

UiAction({
    $id: Now.ID['new-cpor-application'],
    table: 'x_au_nswp_cicsm_cpor',
    name: 'New CPOR application',
    actionName: 'new_cpor_application',
    active: true,
    showQuery: true,
    roles: ['x_au_nswp_pcm.case_worker'],
    list: { showBannerButton: true, style: 'primary' },
    script: `action.setRedirectURL('sc_cat_item.do?sys_id=${cporIntake.$id}');`,
})
