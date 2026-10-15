import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cpor-position-authority'],
    name: 'CporPositionAuthority',
    active: true,
    accessibleFrom: 'package_private',
    clientCallable: false,
    description: 'Resolves live SAP HDA or permanent position for CPOR review authority.',
    script: Now.include('../server/cpor-position-authority.server.js'),
})
