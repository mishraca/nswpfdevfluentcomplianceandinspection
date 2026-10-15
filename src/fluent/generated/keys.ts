import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'abcd555a51ee4efa94c3de427eb13630'
                    }
                    'compliance-activity-create': {
                        table: 'sys_security_acl'
                        id: '5c67eb84e2bc4ce1866dbb0f20b1b76c'
                    }
                    'compliance-activity-delete': {
                        table: 'sys_security_acl'
                        id: '3c01ffc7bae5405e9885412bd6b83ed2'
                    }
                    'compliance-activity-position-read': {
                        table: 'sys_security_acl'
                        id: '1b1a70a7643d4866a51b1c7cb10bc5b0'
                    }
                    'compliance-activity-write': {
                        table: 'sys_security_acl'
                        id: '3291789ff7a44674b8b2d44a177789b8'
                    }
                    'compliance-case-create': {
                        table: 'sys_security_acl'
                        id: 'ab0433b623ef4a3fac66a436ad319d40'
                    }
                    'compliance-case-delete': {
                        table: 'sys_security_acl'
                        id: 'a5f8a4b59ac740b7bd55d5ff04c606fb'
                    }
                    'compliance-case-write': {
                        table: 'sys_security_acl'
                        id: '0587e4d6d2cd43ed902986305d2e5948'
                    }
                    'compliance-fulfilment-menu': {
                        table: 'sys_app_application'
                        id: '7361d0ac5ae948daa54c6744f776de28'
                    }
                    'compliance-inspections-catalog-category': {
                        table: 'sc_category'
                        id: 'a7a6640383664f6296052188b26766b0'
                        deleted: true
                    }
                    'cpor-16d-record-producer': {
                        table: 'sc_cat_item_producer'
                        id: '1b80a9541b1d4b29a3593ec281fccd02'
                    }
                    'cpor-case-activities-related-list': {
                        table: 'sys_ui_related_list_entry'
                        id: '7d4b22f9fa5045e5afb5a9c3b6a685af'
                    }
                    'cpor-case-create': {
                        table: 'sys_security_acl'
                        id: '9fe8d393c80a401c95cb23d6a703c449'
                    }
                    'cpor-case-delete': {
                        table: 'sys_security_acl'
                        id: '02a9c86f432944369477292e6c8afa43'
                    }
                    'cpor-case-position-read': {
                        table: 'sys_security_acl'
                        id: '084669ce50c043359ec5c5cef0d4009f'
                    }
                    'cpor-case-related-lists': {
                        table: 'sys_ui_related_list'
                        id: 'a8b26a4898934f77926bc1fef35053de'
                    }
                    'cpor-case-write': {
                        table: 'sys_security_acl'
                        id: '4c681b07a2654410b2dddd06ab68230f'
                    }
                    'cpor-final-approve': {
                        table: 'sys_ui_action'
                        id: '026ab98c07ff412b9036c331e473596f'
                    }
                    'cpor-final-approve-workspace-layout': {
                        table: 'sys_ux_form_action_layout_item'
                        id: '0675e9464d77413bb6f7878d234a940c'
                    }
                    'cpor-final-reject': {
                        table: 'sys_ui_action'
                        id: 'c85414f486fb447f86060cae01c52adf'
                    }
                    'cpor-final-reject-workspace-layout': {
                        table: 'sys_ux_form_action_layout_item'
                        id: 'e2d3865209d140fd81724480aa8f0f28'
                    }
                    'cpor-manager-support': {
                        table: 'sys_ui_action'
                        id: '9315f3308a6f4292947111cbbf00ae39'
                    }
                    'cpor-manager-support-workspace-layout': {
                        table: 'sys_ux_form_action_layout_item'
                        id: 'bf5c117bc59e4363b3ae82f629cbfedf'
                    }
                    'cpor-position-authority': {
                        table: 'sys_script_include'
                        id: 'f6ef1934b25e4c2a980fd145c662c9d6'
                    }
                    'cpor-process-cancelled': {
                        table: 'sys_process_flow'
                        id: '1fd3728d335f4de5b2bb657bca486e38'
                    }
                    'cpor-process-complete': {
                        table: 'sys_process_flow'
                        id: 'd93f9ea57b0f4dc4bbc14be559076bd8'
                    }
                    'cpor-process-in-progress': {
                        table: 'sys_process_flow'
                        id: '323231505bee4cbe9370874580e62c2e'
                    }
                    'cpor-process-information': {
                        table: 'sys_process_flow'
                        id: 'cd5b0597b34a406fa052a7ea497ae1f7'
                    }
                    'cpor-process-new': {
                        table: 'sys_process_flow'
                        id: '0624d41a131c4150b6490d388ffcec1e'
                    }
                    'cpor-record-outcome': {
                        table: 'sys_ui_action'
                        id: '4b2265af21a04a42852969b212edba8e'
                    }
                    'cpor-record-outcome-workspace-layout': {
                        table: 'sys_ux_form_action_layout_item'
                        id: '025d91f680cb478ea5e8b80ab5147fb3'
                    }
                    'cpor-review-ajax': {
                        table: 'sys_script_include'
                        id: '456fca9373b3460da48f94d000c38190'
                    }
                    'cpor-review-runtime': {
                        table: 'sys_script_include'
                        id: '4f6237e82c254957b9b892f3690a4cd6'
                    }
                    'create-cpor-first-activity': {
                        table: 'sys_script'
                        id: 'a2392c9ff8f4413c8ee6879d8d1f1a55'
                    }
                    'menu-compliance-cases': {
                        table: 'sys_app_module'
                        id: '6206fe5e1cab40e0ae01348a4312959e'
                    }
                    'menu-cpor-cases': {
                        table: 'sys_app_module'
                        id: 'fc85d5b4c4d249feb3a9ae45531b5ac0'
                    }
                    'menu-operational-activities': {
                        table: 'sys_app_module'
                        id: 'cf3570875d314183beaba65fdf16ef64'
                    }
                    'menu-police-ranks': {
                        table: 'sys_app_module'
                        id: 'e30cddfb958e46fc8b90976d26a7cca0'
                    }
                    'menu-review-authority': {
                        table: 'sys_app_module'
                        id: 'ed9a168f8a92476490448b2a017a1680'
                    }
                    'new-cpor-application': {
                        table: 'sys_ui_action'
                        id: 'f756828b3ad84f5a9b5972f6c718dcaf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9b1e42c560994ba687fdb25334f01ef2'
                    }
                    'rank-create': {
                        table: 'sys_security_acl'
                        id: 'e32f401a89324a4aa9ebc818569b1070'
                    }
                    'rank-delete': {
                        table: 'sys_security_acl'
                        id: 'b83e849b808746f5a5fa676ac5bbc590'
                    }
                    'rank-read': {
                        table: 'sys_security_acl'
                        id: 'af3f88de211f4817beb565087ce848b9'
                    }
                    'rank-write': {
                        table: 'sys_security_acl'
                        id: '012552eaaee94b6393c8d4e1bd3aa960'
                    }
                    'review-authority-create': {
                        table: 'sys_security_acl'
                        id: '349f9643f51e4885a733af84b3695da5'
                    }
                    'review-authority-delete': {
                        table: 'sys_security_acl'
                        id: '193e832b51ab465e87aab622cfc39ff9'
                    }
                    'review-authority-read': {
                        table: 'sys_security_acl'
                        id: '2428d7245ef54e09aeece8b99dbe81f9'
                    }
                    'review-authority-write': {
                        table: 'sys_security_acl'
                        id: '6806a6eb33f84e9bbbc5552696fdfee5'
                    }
                    'src_server_cpor-position-authority_server_js': {
                        table: 'sys_module'
                        id: '970a1d848865475e884edb3e5296677a'
                    }
                    'src_server_cpor-producer_server_js': {
                        table: 'sys_module'
                        id: '766490914a2940b5bc6f6dda3e7c8d8b'
                    }
                    'src_server_cpor-review-ajax_server_js': {
                        table: 'sys_module'
                        id: '70ccdf33f16443e68336b499fec9d2f8'
                    }
                    'src_server_cpor-review-runtime_server_js': {
                        table: 'sys_module'
                        id: '986363d69ede4dd192cf1238c7628054'
                    }
                    'superintendent-rank': {
                        table: 'x_au_nswp_cicsm_rank'
                        id: '847a993174eb45798e67d57033299c43'
                    }
                    'validate-cpor-application-fields': {
                        table: 'sys_script'
                        id: '58c1bd07c53a4cefb3803397ddbabc40'
                    }
                    'validate-cpor-inspection-outcome': {
                        table: 'sys_script'
                        id: '467df8758907408ca4ec4d44e1ad72f0'
                    }
                    'validate-cpor-intake-input': {
                        table: 'catalog_script_client'
                        id: '4b579a12a5a64076aa3cf4e2e41c4c4d'
                    }
                    'validate-police-rank': {
                        table: 'sys_script'
                        id: '92f633bc0a584f438d3458fe49bb666b'
                    }
                    'validate-review-authority-rule': {
                        table: 'sys_script'
                        id: '98522ad987ae45b7a9ef6ff40e30a35d'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice_set'
                        id: '000d58da5aa44c43b7fc1bc8019aee6d'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '050bbd289ac14a4c9ba3f707a523728c'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'personSplit'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '052385596cda4f569aa8ca17617244f4'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '081f61f075254857af3a8eaa024ae278'
                        key: {
                            sys_ui_action: 'f756828b3ad84f5a9b5972f6c718dcaf'
                            sys_user_role: {
                                id: '940ae6de9d1d40af898e72c3a115183f'
                                key: {
                                    name: 'x_au_nswp_pcm.case_worker'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b18eddba0e841d086998880337c9b09'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b4b403baa624699b80c591e51de3ad0'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'approval_outcome'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b7fd06982e445dd9d92033e617b6610'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'approval_outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0beec47487654fec8cd8629502b7dc83'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c6e4ad671d640c296b776f3bd5695f1'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c1_event_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0ca02dd6aadc4a53a575c82a9f4d12cd'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '103fc7ad5e0942a3ac252f602d33b381'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'responsible_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1104d21f918a4bc5bda169cd1e26abc4'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cpor_application_year'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '117881adc48f4e009c14f22a48db5238'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11820183659c4b46af9b5a1f8652122f'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '14b242e290154ff2a69cf4c768c1febe'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '15c105a8faa14a0f9c1c33f9c5dcf3ee'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'manager'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '15daca3ae801472f9a1781d5513cd334'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approval_outcome'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '16158e05f0c44aa6a9be9d636bbaac18'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ab608c5cc434f94aec11424134c9196'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'manager_position_at_submission'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1afe557c7eed413492fbeb8c9cfece54'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'activity_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b78b679a55248d2bd3dbae9f5d388d9'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c2_event_number'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d2bf4368ca94efb8283826e09d33d38'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'nominated_superintendent'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d6bf85ba1c74703b1c49100d9219a30'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'review_outcome'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1db3e879c1444b0ba09d1abf71afab0d'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'date_of_birth'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1eeed3f96d664cdfab29d2a4541a9777'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspection16c2Event'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1eef2241f83e4128933a557630b12b45'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                            value: 'request_amendment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1ff789e000344d8fb62a3d0c3b05345a'
                        key: {
                            sys_security_acl: '6806a6eb33f84e9bbbc5552696fdfee5'
                            sys_user_role: {
                                id: '398ae73896234527b35abc90f11e012f'
                                key: {
                                    name: 'x_au_nswp_pcm.configuration_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '20210d955ff54d49add3b59e4123d691'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                            value: 'decline'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '20b7bbc8e69241839aae3f8479e201c3'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2115a8f9a74b4ff9a2e6f5b79e3b39f9'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c2_event_number'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '217cdc66df4740c0bb8669a1caea6e5f'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            caption: 'Decision and outcome'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '219149401a3b4f76b657ce9473cd34bd'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requester'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22e19de3dfcd4b4f9fd70eaf1eaef268'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ux_form_action'
                        id: '26089bcd80dc44ee9801092292c730e6'
                        key: {
                            ui_action: '9315f3308a6f4292947111cbbf00ae39'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '273ab76b8a234594954f71f046ab0f22'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '277388c66e1846e9abde365a9dfd15a2'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspection16c1Date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '287f93af13da4b5986cabd169d7c06ff'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_conducted'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ux_form_action'
                        id: '2976d1b2f18345b9a8ed3ea353cf414a'
                        key: {
                            ui_action: '4b2265af21a04a42852969b212edba8e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a25ab5f40b64a0cad37671cc466e23c'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2ae27143cc5645f8a364a3901d077260'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'external_contact_number'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2c372bf32083466f8b0223861c60768d'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cpor_application_year'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2c6c88ad55a148dd90189c2d3650580c'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '14'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2d21ff1e21e94b638ee2f72bdf9b0713'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'requestingOfficer'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2dc6754e9ea74970b9f0b0fe9853f7dc'
                        key: {
                            sys_ui_action: '9315f3308a6f4292947111cbbf00ae39'
                            sys_user_role: {
                                id: '940ae6de9d1d40af898e72c3a115183f'
                                key: {
                                    name: 'x_au_nswp_pcm.case_worker'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            caption: 'Review activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2e263bb23e7f484ab90a70f2db3746ee'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            caption: 'Rank'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2fa6f11ac9164199a2653c52d198444c'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'registerable_person_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '310e743334424e44a25394205b7f8d6c'
                        key: {
                            sys_ui_section: {
                                id: '2e263bb23e7f484ab90a70f2db3746ee'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    caption: 'Rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '31145649bebf40d4b372e714e4df8d39'
                        key: {
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '324b2a097a464488b995fbc8d04aa6ae'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'review_comments'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32cf71771c314615b3ba0b54975790b9'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '32fab7cab6fd47c6bd7b8fecc616c498'
                        key: {
                            list_id: {
                                id: 'a8c8cdc59b6c4858b59455876b1cd836'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '338402c379d74b53ab6407f96f5b2fef'
                        key: {
                            sys_ui_form: {
                                id: '638830690a464137b7ff110ea9dafd8b'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3453f6d824224d6ebe710e1285b9fb6b'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'date_of_birth'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '364daf6ae500499b9432511799658e89'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requester'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '369f917f24b140818d63e67f1d2dbddb'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'lifecycle'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '394c4aef64df4009b66a429053c9caf0'
                        key: {
                            sys_security_acl: '349f9643f51e4885a733af84b3695da5'
                            sys_user_role: {
                                id: '398ae73896234527b35abc90f11e012f'
                                key: {
                                    name: 'x_au_nswp_pcm.configuration_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '39d35232f61645f88d892ec8626352b1'
                        key: {
                            list_id: {
                                id: 'e7af2857d3d242c6a6e0f4f1afc7b175'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'required_rank'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '3a769d033b8845b78758d9515c5b9db2'
                        key: {
                            sys_ui_form: {
                                id: 'e2832693bc404b4cb061b0559ade974c'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2e263bb23e7f484ab90a70f2db3746ee'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    caption: 'Rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3b98ed3b304245f28b30bc47e89d2534'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e2daa1e673540768a7be2856699fc43'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'manager_position_at_submission'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3e6851f1f0e04affbc4de07eb9364849'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'responsible_position'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '3ed1caebaa9d400a8a341a088f94f610'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40704778d6d54272bb5676aae66221b5'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cni'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '40789c01eabb4ad5aa25efd5072d402a'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_outcome'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '432349dc2a474f4f93d32344b9f1b142'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '433e8e1659874153b78a73f08c8bbe91'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '43563611c77042aa8b7e30dc538d9827'
                        key: {
                            sys_ui_action: '026ab98c07ff412b9036c331e473596f'
                            sys_user_role: {
                                id: '940ae6de9d1d40af898e72c3a115183f'
                                key: {
                                    name: 'x_au_nswp_pcm.case_worker'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4364f8da5f094f49b148f6832fed1816'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'approval_outcome'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4475a11f4ba64774a9b7d45445f9ab49'
                        key: {
                            list_id: {
                                id: 'a8c8cdc59b6c4858b59455876b1cd836'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '4657825af3ea4a528aab8103d198a41f'
                        deleted: true
                        key: {
                            sc_cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            sc_catalog: '02d32ada44f9485297e36bde9defd9bb'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '46ae3a0b12994a08aba54a4a1c49cf41'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '46ed3d749cce45ff9c9ddc93b2feee9e'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'final_inspection_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4728e0dbcc2348a1aed89ca5276b687a'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lifecycle'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '483d7a5a7f21428092a6c322cd96cc27'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4925f191242f4b06b160076276601d62'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'officerEnd'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '494df0b90be4466db357bda1972af5d1'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'selectedDepartment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a87503661594ee7b2ce4c9078346068'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'required_rank'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b0cec364b3f4d3eb97d88bc643f42a2'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'not_conducted_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4c0a1d26c89d41ae96de88339a8b3c7a'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4ccb7943b6d14aafba9e2ed610fca45c'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stage'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d06c14ced8b406d8920b693d50d5611'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_laid'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d9c1b06e27c497a9dd65f6806b80717'
                        key: {
                            sys_security_acl: 'e32f401a89324a4aa9ebc818569b1070'
                            sys_user_role: {
                                id: '398ae73896234527b35abc90f11e012f'
                                key: {
                                    name: 'x_au_nswp_pcm.configuration_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4edfbe8a461149228a38e9a7cad28d13'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '6'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '52029b7f72ed4169914fd3686f5a046d'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'officerSection'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '569d825d853c4da3b45aa5941de8d027'
                        key: {
                            list_id: {
                                id: 'e7af2857d3d242c6a6e0f4f1afc7b175'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56aec078ab5045e29eb3175db1c52489'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '593c59a1f09f43a996d78bd5aa0b192a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c2_date'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '59c3a84ef14643de946a117611e57de3'
                        key: {
                            logical_table_name: 'x_au_nswp_cicsm_review_authority'
                            col_name_string: 'approval_stage'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5ac5f1a29ba04466bc896e1890573e14'
                        key: {
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_stage'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5ce2c44fcb574e779c69ff5c443c5a1a'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5ce81ac3e036419db886fee8f8117007'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61918e84de0d432cbe6daa30c032264d'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'grounds'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '625d0d521cbe4b4e98979435e97373c1'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'final_inspection_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '625f67f747db4d40b73ba606ec100d11'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspectionSplit'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '638830690a464137b7ff110ea9dafd8b'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '64365ff35a3847f29b82de1995dbe9c7'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requester'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65b3dbc05ba546a88075547b3915edb0'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'nominated_superintendent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65eafffa4f094032a93c4f1195ec818a'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6634580e36fe4402ae341e0b61759292'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'supportingManager'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '687124372bf84704807cbee19b7f0f5e'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cni'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6881cf74a9274075af608d8019047f3d'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            caption: 'Approval authority'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '68bd5df2ac504d0facf32b41cca73cbd'
                        key: {
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '69e399b48ab24d3891b2c7acc65266cf'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a217ac3681f425bb8a7c4b7958099ea'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b291cfaa6884161ae57bbca44a6faa5'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b3aa45805304932916d677fa78ba5eb'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6c7c8074b69b4ecf825608144fbca88c'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'grounds'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6d1103a91f1d4a00beda2f2fda325de9'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspection16c2Date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6d3d3125dbab4aa08261f45f2fd435ad'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d896b5d4842498ba8018a1cb4b77a2c'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d9a5cf613cb46b99042e7c54225caba'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'not_conducted_reason'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6efaac2828b24b0e87837b48f839864e'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '71678fd1d6864e828f6be80e10d22eb6'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72a1a04e494f434b95ac8d5f6b96b2ea'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                            value: 'support'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '731df969d80f488eacb4ef73bd99f2f4'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'external_contact_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '737c43219dbf455a9c33bd8311322e60'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '737c5bcee89d4a04aa5b9061c202612a'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '73d06aac23934affa92b914ed2a135fc'
                        key: {
                            list_id: {
                                id: 'e7af2857d3d242c6a6e0f4f1afc7b175'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7454e1e5368a4eb5941fcd49a2fe2dc9'
                        key: {
                            sys_ui_section: {
                                id: '2e263bb23e7f484ab90a70f2db3746ee'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    caption: 'Rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '748897f22d2a4692956ef260cdaacbc8'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_at'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7501afc67d02440caf3f2fd898bc93f0'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lifecycle'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '759b5e735a4545e9ad8aaa8bbc3f3ae4'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'manager_position_at_submission'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75be0d6014c04625b614fa958e37f613'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76f12706b568454680d3d05c3da5f9b5'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'premises_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77c507018930426c9f3e851a9919b127'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c1_event_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77e653d4c00e4beca3448e589ae27634'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c2_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77eb67dc633b4e3d83c82a899da5ea19'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_conducted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78aa0686f28a4caca1c8605954ec27b4'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                            value: 'approve'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '791a1090096e4580bc750a177045a4e5'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '7a93e60c59ff4a518deb074d5860056a'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7e7ce21b6b274d77b727c50fb9713066'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'applicationYear'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7edd964a9b6a43b2b42e8fa4e6a517be'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspection16c1Event'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '80f525e37a7e43fca3c6849ccc43bcf5'
                        key: {
                            sys_ui_section: {
                                id: '2e263bb23e7f484ab90a70f2db3746ee'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    caption: 'Rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '835c2fbe697f4a608441fea8f94997c3'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cpor_application_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83c998765c5b4a3f8fa71a5fa642774c'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_comments'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '873b56f4b1f241efa87fc4ed3c0614a2'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '879f1e5d5124472a9a364d3a15dea4f4'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'secondary_requester'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '87c92e27b7fa442ab78bf56bda152d4a'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'grounds'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88bc3de210d6492baa3d9af8a4d69d75'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'required_rank'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88ed788b261a4e3cbcce8458bf532157'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c1_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8b92fbf0cc64460f9a758506a79c9167'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c1_date'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8c12d0be657345a3b8c1c1824f19b1a0'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c24e665ea4e43a7ba54dabf0d3d22b5'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'external_contact_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cb6fe691f0b4374bb1fc233888f52df'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8d590dc3862a4a76a32b3053f96184c7'
                        key: {
                            sys_security_acl: '012552eaaee94b6393c8d4e1bd3aa960'
                            sys_user_role: {
                                id: '398ae73896234527b35abc90f11e012f'
                                key: {
                                    name: 'x_au_nswp_pcm.configuration_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ux_form_action'
                        id: '8e300c043bc4466dbd61683856902548'
                        key: {
                            ui_action: '026ab98c07ff412b9036c331e473596f'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e343af5372a49b1a8feeb6675abed83'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9082578ac1d64a14966cbce2a72d8cd1'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'officerSplit'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '91b2796dfc4245b9bcf69a44508a2766'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_at'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94fdadf3b7c1451291edc51d93ed48cf'
                        key: {
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b41b7298109413d9fb025ff9b632513'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c95576cb091432ca1ef0bcef442be86'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'responsible_position'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d0c2006f30d43b4af540999bf243a70'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'final_inspection_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9d1629caa9114119bcdf766ab4a87770'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e04bb30c6da4aed8d1e02e39e85074c'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'grounds'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9ec598f467d04b618f7fdfcc38a842a1'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'selected_department'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ef957d7e36645f8853a2aa7c387e35e'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'registerable_person_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9fa561286b5749528808e83bb1c98e06'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'approval_stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a0d6137e093740be99813cc531568e56'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c1_event_number'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1d4e90f4a6743d39840cdc6922de0e2'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c2_event_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a273f04d88af462bb5ed536a81773140'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'responsible_position'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a2ba68b2dd714ea783fe33c666b6b673'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            caption: 'CPOR 16D application'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a3cc0fe9a89549348804cd93a5dbbdc8'
                        key: {
                            sys_ui_form: {
                                id: '483d7a5a7f21428092a6c322cd96cc27'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a3eb703676f349e796c22e3589d9e5b5'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cpr_case_number'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a4054ce2390149bbaaab7afab333cff9'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'charge_number'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a49f79b8a8614444a5bc6c917511a65d'
                        key: {
                            sys_ui_form: {
                                id: '3ed1caebaa9d400a8a341a088f94f610'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a6a6aaa260f441c38b0eca52c238a412'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'secondary_requester'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a6c83498ac944cefaa65a049f0f08b01'
                        key: {
                            sys_security_acl: '2428d7245ef54e09aeece8b99dbe81f9'
                            sys_user_role: {
                                id: '398ae73896234527b35abc90f11e012f'
                                key: {
                                    name: 'x_au_nswp_pcm.configuration_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6cf22ca27394c4ebb12f90efe760d79'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a746eae7cfe74b39b3a03f402053b000'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'dateOfBirth'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a89a5e9627244b0e968941e789a83559'
                        key: {
                            sys_ui_section: {
                                id: '2e263bb23e7f484ab90a70f2db3746ee'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    caption: 'Rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'a8c8cdc59b6c4858b59455876b1cd836'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'aa9be12fb9c4412bac5d91fc779d0107'
                        key: {
                            sys_ui_form: {
                                id: '483d7a5a7f21428092a6c322cd96cc27'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'acacd807dc954dbdb738af0c9cda9042'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            caption: 'Case overview'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ad4d16ac2ddd4a82bc1a545fd5c1095f'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'personEnd'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'adf3fba955ef4aa6af9ba2b0cb43e44d'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'lifecycle'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'ae60182be4b44ed1ab75f2284808377b'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'af0d223019654c19bcc08ee2b7c4d436'
                        key: {
                            sys_ui_section: {
                                id: '2e263bb23e7f484ab90a70f2db3746ee'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    caption: 'Rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b0251453328b4d5baa9d7460d218e83f'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_laid'
                            value: 'no'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b04bb876236248aaa552ba0965ebfadc'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b2012c1cc869410eb55189cc7b3e09ea'
                        key: {
                            sys_security_acl: 'af3f88de211f4817beb565087ce848b9'
                            sys_user_role: {
                                id: '398ae73896234527b35abc90f11e012f'
                                key: {
                                    name: 'x_au_nswp_pcm.configuration_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b32c9a2277d845a4bf4f5252e9c94e35'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cni'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4a6c0b75e9a42e8b5a8fcf3a5641853'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cpr_case_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5f9bf04a950415cb7d741ca690e928a'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'b7149bdb00474adc90ee95c4e164257c'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b78d3774541447c28c7ecf5b6771f2d7'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspectionEnd'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b89c5531b1dc438e9bb43ad022e0266f'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8e7cc6d9bf54f91869481193a225942'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c2_event_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb6a4d22b91b4dd981f812f8ce678dae'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'approval_outcome'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bbcf3747caac42cfbd2625f82ab8b79b'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'premises_address'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bcec1ae78d154e25acf940b61731e9a3'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be6aa9f8ceb24abbb0ecff69a03dabba'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bf41d7ec732e4725bb3358dab7eb35ff'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c0d83076145f47398bfc890463a62813'
                        key: {
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c31d67ed163944478b383606d788beae'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3492dca6ee34efb825aec1a1054f06e'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c3b2b0613510451a841ce715a5321117'
                        key: {
                            list_id: {
                                id: 'e7af2857d3d242c6a6e0f4f1afc7b175'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approval_stage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c427bb16b35c4665bedb92aeb2c8bf2a'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_laid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c528ca21b2ea42e6ac01336f40d0799e'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'registerable_person_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c58a5598a85846f2b4486bebecb32922'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity_status'
                            position: '4'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c5a8a130a8bf45ebaa9dc29dbf018ec0'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'cni'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c69b11d616324fbc8b071812978fe00b'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'personSection'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8d8e313c26d41ffae92da1be01b06ec'
                        key: {
                            sys_ui_section: {
                                id: '6881cf74a9274075af608d8019047f3d'
                                key: {
                                    name: 'x_au_nswp_cicsm_review_authority'
                                    caption: 'Approval authority'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'required_rank'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c923fa2b86874804bc52182607282c2d'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c92ba9e1695a4af2bef9f64dc659245a'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c9ebd7046c9b4e01ab42b6fb03800290'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspectionSection'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'cbc5005406574f09859d66836c0137fc'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'cprCaseNumber'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cdebe5092bf7454eafdffa5f98d998c1'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'selected_department'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'cee3dc129e984709bee07b7eba2a460b'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'personName'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cfc06bf71f644db2949054dd617af5c3'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd002587ee36d4f26a458e10da02b718f'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cpor_application_year'
                            position: '9'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd0de32f3dfc549ec951f2acc8a8e8318'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0e1e4314ee74396af6325f030dd31a1'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_conducted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd3f06b62180d463a8c60667d95de3a50'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3fe56f50db34417beecf4133b3c8fb6'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'case'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd5dfb4c06b594f669ddab1e9f3527652'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd6a3723f1ae2417da7c47283dcd1eaca'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_conducted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd813401a813f449caea302d664d6a4b9'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c2_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd84904ef2092488a93e2faf3c5ffd7fc'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c2_date'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da87e42d4e114be9a2126f54ca61cafa'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'nominated_superintendent'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'db29fab197b541558d29ef1db41bd187'
                        key: {
                            sys_ui_form: {
                                id: 'b7149bdb00474adc90ee95c4e164257c'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'dc4e0554a5334de48d55a9df24c0574c'
                        key: {
                            list_id: {
                                id: 'ae60182be4b44ed1ab75f2284808377b'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'dcc38a36eb7d44419d83e2cf10e82bc2'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requester'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dcc42382e5cd41c78fd3e5d3fba97501'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'externalContact'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'de1e202e54ff4ed5857d127c8a50293a'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_laid'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dee82f39b4a8406b8bad31e5d62139d1'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'secondaryOfficer'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'df1cd12252e94b979033dffbfc9e792b'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1209ea67d5445b5b960011e00a8a90e'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_16c1_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e169ac356d6442a28066c6b3297c4dee'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e20ef3b2b3494fb4865458bf0b7bbed6'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'not_conducted_reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e24037d650f24d0b8efe31a8d83c070b'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'e2832693bc404b4cb061b0559ade974c'
                        key: {
                            name: 'x_au_nswp_cicsm_rank'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e65b8ba776de42899058cc13635bccfd'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_conducted'
                            value: 'no'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e68c1dadca064822b7ae161e874f7966'
                        key: {
                            list_id: {
                                id: 'cf727c5f9ef44daaad7679be9c7e95bb'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'e7af2857d3d242c6a6e0f4f1afc7b175'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e7d118d1e30f440490801a84014580ef'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c1_event_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e7ed8475547046ba8bca37e9ff038627'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'grounds'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'e831c570b2434d7a82d679bb6ae2d80c'
                        key: {
                            sys_ui_form: {
                                id: '483d7a5a7f21428092a6c322cd96cc27'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e879f4ffb52e4f73bff3e2f2d1da207a'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'inspection_conducted'
                            value: 'yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8af8fe292884b3eb7d8f7b4303f7ff8'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea009f7d0d6d4823aaa50a34ae42e899'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eadc235344ca452697268c772d370f79'
                        key: {
                            name: 'x_au_nswp_cicsm_review_authority'
                            element: 'approval_stage'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ec5cc81ce1b241f8a761bd7957a8b5bf'
                        key: {
                            sys_ui_section: {
                                id: '217cdc66df4740c0bb8669a1caea6e5f'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Decision and outcome'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'charge_laid'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ec7915ac353c4ad0be0cb89b8717ae45'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'approval_outcome'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec8b29ab705d4fe18ecac884c86376c7'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'premises_address'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed368178959149e1ae2c9d5807a6fa4d'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'edc36413740b48f5b7957f89b517d6d7'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_laid'
                            value: 'yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'edccf2e0e10b49e292f465634ff2e929'
                        key: {
                            name: 'x_au_nswp_cicsm_activity'
                            element: 'review_outcome'
                            value: 'reject'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f1167f6920db49fb8a53793dfa98a544'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'date_of_birth'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3de0081441f407bbd8659ec9682828a'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'charge_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_form_action'
                        id: 'f487448030ac4a0fbb3ecb6aad9f6839'
                        key: {
                            ui_action: 'c85414f486fb447f86060cae01c52adf'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f4c48ace06c64b1d8ea83263ae31554b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'premises_address'
                            position: '14'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'f55cb746d7b74e63a1ab5af1ee1a095a'
                        deleted: true
                        key: {
                            sc_cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            sc_category: 'a7a6640383664f6296052188b26766b0'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f61370a8167d43e0b5d4d8414c240e6e'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f6b304876a83401ca89781494a433e28'
                        key: {
                            list_id: {
                                id: '7a93e60c59ff4a518deb074d5860056a'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f741bf70a1724eb0b58983cec6f3127a'
                        key: {
                            sys_ui_section: {
                                id: '2e1b63ee4aca4e2881e8b33a635f2dcb'
                                key: {
                                    name: 'x_au_nswp_cicsm_activity'
                                    caption: 'Review activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f7cba7eedc0e481ca72c017b88b191b6'
                        key: {
                            sys_ui_section: {
                                id: 'a2ba68b2dd714ea783fe33c666b6b673'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'CPOR 16D application'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inspection_16c1_date'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f8292342bb0543429df614bfd1637808'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'selected_department'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f8f1ae843cfa45b8aa861266b91385ac'
                        key: {
                            sys_ui_section: {
                                id: 'acacd807dc954dbdb738af0c9cda9042'
                                key: {
                                    name: 'x_au_nswp_cicsm_cpor'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f93992efb438413d88021c372bd8f3ae'
                        key: {
                            name: 'x_au_nswp_cicsm_case'
                            caption: 'Case overview'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fab07c7b038d4f07a14c0d43f1615a02'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cpr_case_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fab5c2a7c51140c5bfdd7f213c1c3cfd'
                        key: {
                            list_id: {
                                id: 'a8c8cdc59b6c4858b59455876b1cd836'
                                key: {
                                    name: 'x_au_nswp_cicsm_rank'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fbbc0b5e15f64a6ca237307a5a40a833'
                        key: {
                            sys_ui_section: {
                                id: 'f93992efb438413d88021c372bd8f3ae'
                                key: {
                                    name: 'x_au_nswp_cicsm_case'
                                    caption: 'Case overview'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'selected_department'
                            position: '4'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'fe359cd79d4549c1aabdd97e8d297930'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'premisesAddress'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ff810802dd1141128b0a17f1cb5ff894'
                        key: {
                            sys_ui_action: 'c85414f486fb447f86060cae01c52adf'
                            sys_user_role: {
                                id: '940ae6de9d1d40af898e72c3a115183f'
                                key: {
                                    name: 'x_au_nswp_pcm.case_worker'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
