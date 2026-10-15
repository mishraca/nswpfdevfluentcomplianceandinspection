import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cpor-review-ajax'],
    name: 'CporReviewAjax',
    active: true,
    accessibleFrom: 'public',
    callerAccess: 'restriction',
    clientCallable: true,
    description: 'Submits guarded CPOR review and same-case amendment actions from approved interfaces.',
    script: Now.include('../server/cpor-review-ajax.server.js'),
})
