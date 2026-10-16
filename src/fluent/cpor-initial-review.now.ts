import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cpor-initial-review'],
    name: 'CporInitialReview',
    active: true,
    accessibleFrom: 'package_private',
    clientCallable: false,
    description: 'Starts the configured first Manager review activity for one saved CPOR case.',
    script: Now.include('../server/cpor-initial-review.server.js'),
})
