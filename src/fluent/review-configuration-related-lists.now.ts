import { Record } from '@servicenow/sdk/core'

const rankLists = Record({
    $id: Now.ID['rank-related-lists'], table: 'sys_ui_related_list',
    data: { name: 'x_au_nswp_cicsm_rank', view: 'Default view' },
})
Record({ $id: Now.ID['rank-review-authorities-list'], table: 'sys_ui_related_list_entry', data: {
    list_id: rankLists, related_list: 'x_au_nswp_cicsm_review_authority.required_rank', position: 0,
} })
