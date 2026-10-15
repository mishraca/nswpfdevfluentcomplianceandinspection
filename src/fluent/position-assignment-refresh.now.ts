import { Property, ScheduledScript } from '@servicenow/sdk/core'

Property({
    $id: Now.ID['position-assignment-refresh-cursor'],
    name: 'x_au_nswp_cicsm.assignment_refresh_cursor',
    type: 'string',
    value: '',
    description: 'Internal cursor for bounded reassignment of outstanding compliance activities. A blank value starts at the first activity.',
    $meta: { installMethod: 'first install' },
    roles: { read: ['admin'], write: ['admin'] },
})

// Enable only after native HR reads, activity writes and vacancy/overlap
// behavior are verified in the police development instance.
ScheduledScript({
    $id: Now.ID['refresh-outstanding-position-assignments'],
    name: 'Refresh outstanding compliance assignments',
    active: false,
    frequency: 'periodically',
    executionInterval: { minutes: 5 },
    script: Now.include('../server/position-assignment-refresh.server.js'),
})
