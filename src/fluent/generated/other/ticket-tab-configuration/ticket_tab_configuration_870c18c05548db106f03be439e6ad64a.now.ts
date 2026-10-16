import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['870c18c05548db106f03be439e6ad64a'],
    table: 'ticket_tab_configuration',
    data: {
        advanced: 'false',
        order: '30',
        parent: 'cc4b58005548db106f03be439e6ad682',
        script: `/**
 * The script should evaluate true/false or \`answer\` populated with true/false which validates if a tab is visible 
 * The \`current\` object refers to the current Task(extension) record 
 **/ 
`,
        tab_name: 'Case Details',
        table: 'x_au_nswp_cicsm_cpor',
        type: 'custom',
        widget: 'dc076bbadb9084103d43bd16f49619a5',
    },
})
