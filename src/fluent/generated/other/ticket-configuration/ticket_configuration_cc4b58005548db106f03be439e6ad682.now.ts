import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['cc4b58005548db106f03be439e6ad682'],
    table: 'ticket_configuration',
    data: {
        active: 'true',
        advanced: 'false',
        description_field: 'short_description',
        info_fields: 'lifecycle,approval_outcome,requester,manager',
        show_description: 'always',
        state_field: 'state',
        sys_domain: 'global',
        table: 'x_au_nswp_cicsm_cpor',
    },
})
