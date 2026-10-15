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
                    'cpor-case-related-lists': {
                        table: 'sys_ui_related_list'
                        id: 'a8b26a4898934f77926bc1fef35053de'
                    }
                    'cpor-case-write': {
                        table: 'sys_security_acl'
                        id: '4c681b07a2654410b2dddd06ab68230f'
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
                    'new-cpor-application': {
                        table: 'sys_ui_action'
                        id: 'f756828b3ad84f5a9b5972f6c718dcaf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9b1e42c560994ba687fdb25334f01ef2'
                    }
                    'src_server_cpor-producer_server_js': {
                        table: 'sys_module'
                        id: '766490914a2940b5bc6f6dda3e7c8d8b'
                    }
                    'validate-cpor-application-fields': {
                        table: 'sys_script'
                        id: '58c1bd07c53a4cefb3803397ddbabc40'
                    }
                    'validate-cpor-intake-input': {
                        table: 'catalog_script_client'
                        id: '4b579a12a5a64076aa3cf4e2e41c4c4d'
                    }
                }
                composite: [
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
                        table: 'sys_documentation'
                        id: '2fa6f11ac9164199a2653c52d198444c'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'registerable_person_name'
                            language: 'en'
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
                        table: 'item_option_new'
                        id: '52029b7f72ed4169914fd3686f5a046d'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'officerSection'
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
                        table: 'item_option_new'
                        id: '625f67f747db4d40b73ba606ec100d11'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'inspectionSplit'
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
                        table: 'sys_dictionary'
                        id: '731df969d80f488eacb4ef73bd99f2f4'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'external_contact_number'
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
                        table: 'sys_documentation'
                        id: '835c2fbe697f4a608441fea8f94997c3'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'cpor_application_year'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '8c24e665ea4e43a7ba54dabf0d3d22b5'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'external_contact_number'
                            language: 'en'
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
                        table: 'item_option_new'
                        id: 'a746eae7cfe74b39b3a03f402053b000'
                        key: {
                            cat_item: '1b80a9541b1d4b29a3593ec281fccd02'
                            variable_set: 'NULL'
                            name: 'dateOfBirth'
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
                        table: 'sys_dictionary'
                        id: 'c528ca21b2ea42e6ac01336f40d0799e'
                        key: {
                            name: 'x_au_nswp_cicsm_cpor'
                            element: 'registerable_person_name'
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
                ]
            }
        }
    }
}
