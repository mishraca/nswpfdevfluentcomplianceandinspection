import { ApplicationMenu, Record, UiAction } from '@servicenow/sdk/core'
import { cporIntake } from './cpor-intake.now'

const menu = ApplicationMenu({
    $id: Now.ID['compliance-fulfilment-menu'],
    title: 'Compliance and Inspection Cases',
    description: 'Case and activity lists for compliance fulfilment.',
    roles: ['x_au_nswp_pcm.case_worker', 'x_au_nswp_pcm.configuration_admin'],
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
    name: 'x_au_nswp_cicsm_activity', roles: ['x_au_nswp_pcm.case_worker'], active: true, order: 300,
} })
Record({ $id: Now.ID['menu-review-authority'], table: 'sys_app_module', data: {
    title: 'Review authority', application: menu, link_type: 'LIST',
    name: 'x_au_nswp_cicsm_review_authority', roles: ['x_au_nswp_pcm.configuration_admin'], active: true, order: 400,
} })
Record({ $id: Now.ID['menu-police-ranks'], table: 'sys_app_module', data: {
    title: 'Police ranks', application: menu, link_type: 'LIST',
    name: 'x_au_nswp_cicsm_rank', roles: ['x_au_nswp_pcm.configuration_admin'], active: true, order: 500,
} })
Record({ $id: Now.ID['menu-cpor-amendment-rules'], table: 'sys_app_module', data: {
    title: 'CPOR amendment rules', application: menu, link_type: 'LIST',
    name: 'x_au_nswp_cicsm_amendment_rule', roles: ['x_au_nswp_pcm.configuration_admin'], active: true, order: 600,
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
