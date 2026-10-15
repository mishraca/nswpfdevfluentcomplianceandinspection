import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cpor-review-ajax'],
    name: 'CporReviewAjax',
    active: true,
    accessibleFrom: 'package_private',
    clientCallable: true,
    description: 'Submits guarded CPOR review actions from the case workspace.',
    script: Now.include('../server/cpor-review-ajax.server.js'),
})
