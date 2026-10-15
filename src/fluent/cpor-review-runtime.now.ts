import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cpor-review-runtime'],
    name: 'CporReviewRuntime',
    active: true,
    accessibleFrom: 'package_private',
    clientCallable: false,
    description: 'Records a position-authorised Manager support decision and creates the configured final approval activity.',
    script: Now.include('../server/cpor-review-runtime.server.js'),
})
