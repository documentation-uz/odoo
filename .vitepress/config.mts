import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Odoo framework",
    description: "Learn today, work tomorrow!",
    srcDir: "src/pages/",
    head: [
        ['link', {rel: 'icon', href: 'https://i.imgur.com/qo0NNF9.png'}],
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/documentation-uz/odoo/tree/main/src/pages/:path',
            text: 'Edit this page on GitHub',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'User Docs',
                // link: '/user-docs/get-started/introduction',
                items: [
                    {
                        text: 'Contacts',
                        link: '/user-docs/contacts',
                    },
                    {
                        text: 'CRM',
                        link: '/user-docs/crm',
                    },
                    {
                        text: 'Sales',
                        link: '/user-docs/sales',
                    },
                    {
                        text: 'Point of Sale',
                        link: '/user-docs/point-of-sale',
                    },
                    {
                        text: 'Manufacturing',
                        link: '/user-docs/manufacturing/get-started/introduction',
                    },
                    {
                        text: 'Employees',
                        link: '/user-docs/hr/get-started/introduction',
                    },
                    {
                        text: 'Attendances',
                        link: '/user-docs/hr_attendance/get-started/introduction',
                    },
                    {
                        text: 'Payroll',
                        link: '/user-docs/hr_payroll/get-started/introduction',
                    },
                    {
                        text: 'Time Off',
                        link: '/user-docs/hr_holidays/get-started/introduction',
                    },
                    {
                        text: 'Recruitment',
                        link: '/user-docs/hr_recruitment/get-started/introduction',
                    },
                    {
                        text: 'Employee Contracts',
                        link: '/user-docs/hr_contract/get-started/introduction',
                    },
                    {
                        text: 'Appraisals',
                        link: '/user-docs/hr_appraisal/get-started/introduction',
                    },
                    {
                        text: 'Employee Referral',
                        link: '/user-docs/hr_referral/get-started/introduction',
                    },
                    {
                        text: 'Skills Management',
                        link: '/user-docs/hr_skills/get-started/introduction',
                    },
                ]
            },
            {
                text: 'Developer',
                link: '/developer'
            },
            {text: 'API Reference', link: '/api-reference/print'},
            {
                text: 'Versions',
                items: [
                    {text: '18.0', link: '/18.0'},
                    {text: '17.0', link: '/17.0'}
                ]
            }
        ],

        sidebar: {
            '/docs/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/docs/get-started/introduction'},
                        {text: 'Installation', link: '/docs/get-started/installation'},
                    ],
                    collapsed: false
                },
                {
                    text: 'Quick start',
                    items: [
                        {text: 'Create a project', link: '/docs/quick-start/create-a-project'},
                        {text: 'Connect database', link: '/docs/quick-start/connect-database'},
                        {text: 'Create an addon', link: '/docs/quick-start/create-an-addon'},
                        {text: 'Configuration file', link: '/docs/quick-start/configuration-file'},
                        {text: 'Create first model', link: '/docs/quick-start/create-first-model'},
                        {text: 'Upgrade addon', link: '/docs/quick-start/upgrade-addon'},
                        {text: 'Security', link: '/docs/quick-start/security'},
                        {text: 'Write xml view', link: '/docs/quick-start/write-xml-view'},
                    ],
                    collapsed: false
                },
                {
                    text: 'Models',
                    items: [
                        {text: 'Special attributes', link: '/docs/essentials/models/special-attributes'},
                        {text: 'Fields', link: '/docs/essentials/models/fields'},
                        {text: 'Compute fields', link: '/docs/essentials/models/compute-fields'},
                        {text: 'Onchange methods', link: '/docs/essentials/models/on-change-methods'},
                        {text: 'API model methods', link: '/docs/essentials/models/api-model-methods'},
                    ],
                    collapsed: false
                }
            ],
            '/examples/': [
                {
                    text: 'Todo app',
                    items: [
                        {text: 'Get started', link: '/examples/todo-app/get-started'},
                        {text: 'Create models', link: '/examples/todo-app/create-models'}
                    ]
                },
            ],
            '/developer/': [
                {
                    text: "Get started",
                    items: [
                        {
                            text: "Introduction",
                            link: "/developer"
                        },
                        {
                            text: "Launch the project",
                            link: "/developer/launch-the-project"
                        },
                        {
                            text: "Add a new module",
                            link: "/developer/add-a-new-module"
                        },
                        {
                            text: "Upgrade the module",
                            link: "/developer/upgrade-the-module"
                        }
                    ]
                },
                {
                    text: "Models",
                    items: [
                        {
                            text: "Introduction to models",
                            link: "/developer/models/introduction-to-models",
                        },
                        {
                            text: "Create a new model",
                            link: "/developer/models/create-a-new-model",
                        }
                    ]
                }
                // {
                //     text: "Glossary",
                //     link: "/developer/glossary"
                // },
                // {
                //     text: "How-to guides",
                //     link: "/developer/howtos",
                //     items: [
                //         {
                //             text: "Multi-company Guidelines",
                //             link: "/developer/howtos/company"
                //         },
                //         {
                //             text: "Connect with a device",
                //             link: "/developer/howtos/connect_device"
                //         },
                //         {
                //             text: "Create customized reports",
                //             link: "/developer/howtos/create_reports"
                //         },
                //         {
                //             text: "Use Owl components on the portal and website",
                //             link: "/developer/howtos/frontend_owl_components"
                //         },
                //         {
                //             text: "Create a client action",
                //             link: "/developer/howtos/javascript_client_action"
                //         },
                //         {
                //             text: "Customize a field",
                //             link: "/developer/howtos/javascript_field"
                //         },
                //         {
                //             text: "Customize a view type",
                //             link: "/developer/howtos/javascript_view"
                //         },
                //         {
                //             text: "Write lean easy-to-maintain CSS",
                //             link: "/developer/howtos/scss_tips"
                //         },
                //         {
                //             text: "Create a standalone Owl application",
                //             link: "/developer/howtos/standalone_owl_application"
                //         },
                //         {
                //             text: "Translating Modules",
                //             link: "/developer/howtos/translations"
                //         },
                //         {
                //             text: "Upgrade a customized database",
                //             link: "/developer/howtos/upgrade_custom_db"
                //         },
                //         {
                //             text: "Web Services",
                //             link: "/developer/howtos/web_services"
                //         },
                //         {
                //             text: "Website themes",
                //             link: "/developer/howtos/website_themes",
                //             items: [
                //                 {
                //                     text: "Animations",
                //                     link: "/developer/howtos/website_themes/animations"
                //                 },
                //                 {
                //                     text: "Building blocks",
                //                     link: "/developer/howtos/website_themes/building_blocks"
                //                 },
                //                 {
                //                     text: "Forms",
                //                     link: "/developer/howtos/website_themes/forms"
                //                 },
                //                 {
                //                     text: "Going live",
                //                     link: "/developer/howtos/website_themes/going_live"
                //                 },
                //                 {
                //                     text: "Gradients",
                //                     link: "/developer/howtos/website_themes/gradients"
                //                 },
                //                 {
                //                     text: "Layout",
                //                     link: "/developer/howtos/website_themes/layout"
                //                 },
                //                 {
                //                     text: "Media",
                //                     link: "/developer/howtos/website_themes/media"
                //                 },
                //                 {
                //                     text: "Navigation",
                //                     link: "/developer/howtos/website_themes/navigation"
                //                 },
                //                 {
                //                     text: "Pages",
                //                     link: "/developer/howtos/website_themes/pages"
                //                 },
                //                 {
                //                     text: "Setup",
                //                     link: "/developer/howtos/website_themes/setup"
                //                 },
                //                 {
                //                     text: "Shapes",
                //                     link: "/developer/howtos/website_themes/shapes"
                //                 },
                //                 {
                //                     text: "Theming",
                //                     link: "/developer/howtos/website_themes/theming"
                //                 },
                //                 {
                //                     text: "Translations",
                //                     link: "/developer/howtos/website_themes/translations"
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     text: "Developer",
                //     link: "/developer/index"
                // },
                // {
                //     text: "Reference",
                //     link: "/developer/reference",
                //     items: [
                //         {
                //             text: "Server framework",
                //             link: "/developer/reference/backend",
                //             items: [
                //                 {
                //                     text: "Actions",
                //                     link: "/developer/reference/backend/actions"
                //                 },
                //                 {
                //                     text: "Web Controllers",
                //                     link: "/developer/reference/backend/http"
                //                 },
                //                 {
                //                     text: "Mixins and Useful Classes",
                //                     link: "/developer/reference/backend/mixins"
                //                 },
                //                 {
                //                     text: "Module Manifests",
                //                     link: "/developer/reference/backend/module"
                //                 },
                //                 {
                //                     text: "ORM API",
                //                     link: "/developer/reference/backend/orm",
                //                     items: [
                //                         {
                //                             text: "Changelog",
                //                             link: "/developer/reference/backend/orm/changelog"
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     text: "Performance",
                //                     link: "/developer/reference/backend/performance"
                //                 },
                //                 {
                //                     text: "QWeb Reports[]",
                //                     link: "/developer/reference/backend/reports"
                //                 },
                //                 {
                //                     text: "Security in Odoo",
                //                     link: "/developer/reference/backend/security"
                //                 },
                //                 {
                //                     text: "Testing Odoo",
                //                     link: "/developer/reference/backend/testing"
                //                 }
                //             ]
                //         },
                //         {
                //             text: "Command-line interface (CLI)",
                //             link: "/developer/reference/cli"
                //         },
                //         {
                //             text: "External API",
                //             link: "/developer/reference/external_api"
                //         },
                //         {
                //             text: "Extract API",
                //             link: "/developer/reference/extract_api"
                //         },
                //         {
                //             text: "Web framework",
                //             link: "/developer/reference/frontend",
                //             items: [
                //                 {
                //                     text: "Assets",
                //                     link: "/developer/reference/frontend/assets"
                //                 },
                //                 {
                //                     text: "Error handling",
                //                     link: "/developer/reference/frontend/error_handling"
                //                 },
                //                 {
                //                     text: "Framework Overview",
                //                     link: "/developer/reference/frontend/framework_overview"
                //                 },
                //                 {
                //                     text: "Hooks",
                //                     link: "/developer/reference/frontend/hooks"
                //                 },
                //                 {
                //                     text: "Javascript Modules",
                //                     link: "/developer/reference/frontend/javascript_modules"
                //                 },
                //                 {
                //                     text: "Javascript Reference",
                //                     link: "/developer/reference/frontend/javascript_reference"
                //                 },
                //                 {
                //                     text: "Mobile JavaScript",
                //                     link: "/developer/reference/frontend/mobile"
                //                 },
                //                 {
                //                     text: "Odoo Editor",
                //                     link: "/developer/reference/frontend/odoo_editor"
                //                 },
                //                 {
                //                     text: "Owl components",
                //                     link: "/developer/reference/frontend/owl_components"
                //                 },
                //                 {
                //                     text: "Patching code",
                //                     link: "/developer/reference/frontend/patching_code"
                //                 },
                //                 {
                //                     text: "QWeb Templates",
                //                     link: "/developer/reference/frontend/qweb"
                //                 },
                //                 {
                //                     text: "Registries",
                //                     link: "/developer/reference/frontend/registries"
                //                 },
                //                 {
                //                     text: "Services",
                //                     link: "/developer/reference/frontend/services"
                //                 }
                //             ]
                //         },
                //         {
                //             text: "Standard modules",
                //             link: "/developer/reference/standard_modules",
                //             items: [
                //                 {
                //                     text: "Accounting",
                //                     link: "/developer/reference/standard_modules/account",
                //                     items: [
                //                         {
                //                             text: "Account",
                //                             link: "/developer/reference/standard_modules/account/account_account"
                //                         },
                //                         {
                //                             text: "Account Tag",
                //                             link: "/developer/reference/standard_modules/account/account_account_tag"
                //                         },
                //                         {
                //                             text: "Fiscal Position",
                //                             link: "/developer/reference/standard_modules/account/account_fiscal_position"
                //                         },
                //                         {
                //                             text: "Account Group",
                //                             link: "/developer/reference/standard_modules/account/account_group"
                //                         },
                //                         {
                //                             text: "Report",
                //                             link: "/developer/reference/standard_modules/account/account_report"
                //                         },
                //                         {
                //                             text: "Report Line",
                //                             link: "/developer/reference/standard_modules/account/account_report_line"
                //                         },
                //                         {
                //                             text: "Taxes",
                //                             link: "/developer/reference/standard_modules/account/account_tax"
                //                         },
                //                         {
                //                             text: "Tax Repartitions",
                //                             link: "/developer/reference/standard_modules/account/account_tax_repartition"
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     text: "Payment",
                //                     link: "/developer/reference/standard_modules/payment",
                //                     items: [
                //                         {
                //                             text: "Payment Method",
                //                             link: "/developer/reference/standard_modules/payment/payment_method"
                //                         },
                //                         {
                //                             text: "Payment Provider",
                //                             link: "/developer/reference/standard_modules/payment/payment_provider"
                //                         },
                //                         {
                //                             text: "Payment Token",
                //                             link: "/developer/reference/standard_modules/payment/payment_token"
                //                         },
                //                         {
                //                             text: "Payment Transaction",
                //                             link: "/developer/reference/standard_modules/payment/payment_transaction"
                //                         }
                //                     ]
                //                 }
                //             ]
                //         },
                //         {
                //             text: "Upgrades",
                //             link: "/developer/reference/upgrades",
                //             items: [
                //                 {
                //                     text: "Upgrade scripts",
                //                     link: "/developer/reference/upgrades/upgrade_scripts"
                //                 },
                //                 {
                //                     text: "Upgrade utils",
                //                     link: "/developer/reference/upgrades/upgrade_utils"
                //                 }
                //             ]
                //         },
                //         {
                //             text: "User interface",
                //             link: "/developer/reference/user_interface",
                //             items: [
                //                 {
                //                     text: "UI icons",
                //                     link: "/developer/reference/user_interface/icons"
                //                 },
                //                 {
                //                     text: "SCSS inheritance",
                //                     link: "/developer/reference/user_interface/scss_inheritance"
                //                 },
                //                 {
                //                     text: "View architectures",
                //                     link: "/developer/reference/user_interface/view_architectures"
                //                 },
                //                 {
                //                     text: "View records",
                //                     link: "/developer/reference/user_interface/view_records"
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     text: "Tutorials",
                //     link: "/developer/tutorials",
                //     items: [
                //         {
                //             text: "Building a Module[]",
                //             link: "/developer/tutorials/backend"
                //         },
                //         {
                //             text: "Define module data",
                //             link: "/developer/tutorials/define_module_data"
                //         },
                //         {
                //             text: "Discover the web framework",
                //             link: "/developer/tutorials/discover_js_framework",
                //             items: [
                //                 {
                //                     text: "Chapter 1: Owl components",
                //                     link: "/developer/tutorials/discover_js_framework/01_owl_components"
                //                 },
                //                 {
                //                     text: "Chapter 2: Build a dashboard",
                //                     link: "/developer/tutorials/discover_js_framework/02_build_a_dashboard"
                //                 }
                //             ]
                //         },
                //         {
                //             text: "Write importable modules",
                //             link: "/developer/tutorials/importable_modules"
                //         },
                //         {
                //             text: "Master the web framework",
                //             link: "/developer/tutorials/master_odoo_web_framework",
                //             items: [
                //                 {
                //                     text: "Chapter 1: Build a Clicker game",
                //                     link: "/developer/tutorials/master_odoo_web_framework/01_build_clicker_game"
                //                 },
                //                 {
                //                     text: "Chapter 2: Create a Gallery View",
                //                     link: "/developer/tutorials/master_odoo_web_framework/02_create_gallery_view"
                //                 },
                //                 {
                //                     text: "Chapter 3: Customize a kanban view",
                //                     link: "/developer/tutorials/master_odoo_web_framework/03_customize_kanban_view"
                //                 }
                //             ]
                //         },
                //         {
                //             text: "Reuse code with mixins",
                //             link: "/developer/tutorials/mixins"
                //         },
                //         {
                //             text: "Build PDF Reports",
                //             link: "/developer/tutorials/pdf_reports"
                //         },
                //         {
                //             text: "Restrict access to data",
                //             link: "/developer/tutorials/restrict_data_access"
                //         },
                //         {
                //             text: "Server framework 101",
                //             link: "/developer/tutorials/server_framework_101",
                //             items: [
                //                 {
                //                     text: "Chapter 1: Architecture Overview",
                //                     link: "/developer/tutorials/server_framework_101/01_architecture"
                //                 },
                //                 {
                //                     text: "Chapter 2: A New Application",
                //                     link: "/developer/tutorials/server_framework_101/02_newapp"
                //                 },
                //                 {
                //                     text: "Chapter 3: Models And Basic Fields",
                //                     link: "/developer/tutorials/server_framework_101/03_basicmodel"
                //                 },
                //                 {
                //                     text: "Chapter 4: Security - A Brief Introduction",
                //                     link: "/developer/tutorials/server_framework_101/04_securityintro"
                //                 },
                //                 {
                //                     text: "Chapter 5: Finally, Some UI To Play With",
                //                     link: "/developer/tutorials/server_framework_101/05_firstui"
                //                 },
                //                 {
                //                     text: "Chapter 6: Basic Views",
                //                     link: "/developer/tutorials/server_framework_101/06_basicviews"
                //                 },
                //                 {
                //                     text: "Chapter 7: Relations Between Models",
                //                     link: "/developer/tutorials/server_framework_101/07_relations"
                //                 },
                //                 {
                //                     text: "Chapter 8: Computed Fields And Onchanges",
                //                     link: "/developer/tutorials/server_framework_101/08_compute_onchange"
                //                 },
                //                 {
                //                     text: "Chapter 9: Ready For Some Action?",
                //                     link: "/developer/tutorials/server_framework_101/09_actions"
                //                 },
                //                 {
                //                     text: "Chapter 10: Constraints",
                //                     link: "/developer/tutorials/server_framework_101/10_constraints"
                //                 },
                //                 {
                //                     text: "Chapter 11: Add The Sprinkles",
                //                     link: "/developer/tutorials/server_framework_101/11_sprinkles"
                //                 },
                //                 {
                //                     text: "Chapter 12: Inheritance",
                //                     link: "/developer/tutorials/server_framework_101/12_inheritance"
                //                 },
                //                 {
                //                     text: "Chapter 13: Interact With Other Modules",
                //                     link: "/developer/tutorials/server_framework_101/13_other_module"
                //                 },
                //                 {
                //                     text: "Chapter 14: A Brief History Of QWeb",
                //                     link: "/developer/tutorials/server_framework_101/14_qwebintro"
                //                 },
                //                 {
                //                     text: "Chapter 15: The final word",
                //                     link: "/developer/tutorials/server_framework_101/15_final_word"
                //                 }
                //             ]
                //         },
                //         {
                //             text: "Setup guide",
                //             link: "/developer/tutorials/setup_guide"
                //         },
                //         {
                //             text: "Safeguard your code with unit tests",
                //             link: "/developer/tutorials/unit_tests"
                //         },
                //         {
                //             text: "Customizing the web client",
                //             link: "/developer/tutorials/web"
                //         },
                //         {
                //             text: "Build a website theme",
                //             link: "/developer/tutorials/website_theme",
                //             items: [
                //                 {
                //                     text: "Chapter 1 - Theming",
                //                     link: "/developer/tutorials/website_theme/01_theming"
                //                 },
                //                 {
                //                     text: "Chapter 2 - Build your website",
                //                     link: "/developer/tutorials/website_theme/02_build_website"
                //                 },
                //                 {
                //                     text: "Chapter 3 - Customisation, Part I",
                //                     link: "/developer/tutorials/website_theme/03_customisation_part1"
                //                 },
                //                 {
                //                     text: "Chapter 4 - Customisation, Part II",
                //                     link: "/developer/tutorials/website_theme/04_customisation_part2"
                //                 },
                //                 {
                //                     text: "Chapter 5 - Dynamic templates",
                //                     link: "/developer/tutorials/website_theme/05_dynamic_templates"
                //                 },
                //                 {
                //                     text: "Chapter 6 - Going live",
                //                     link: "/developer/tutorials/website_theme/06_going_live"
                //                 }
                //             ]
                //         }
                //     ]
                // }
            ],
            '/user-docs/account_accountant': [
                {
                    text: "Introduction",
                    link: "/user-docs/account_accountant/introduction"
                },
                {
                    text: "Get started",
                    link: "/user-docs/account_accountant/get_started",
                    items: [
                        {
                            text: "Introduction",
                            link: "/user-docs/account_accountant/get_started/introduction"
                        },
                        {
                            text: "Accounting cheat sheet",
                            link: "/user-docs/account_accountant/get_started/cheat_sheet"
                        },
                        {
                            text: "Chart of accounts",
                            link: "/user-docs/account_accountant/get_started/chart_of_accounts"
                        },
                        {
                            text: "Consolidation",
                            link: "/user-docs/account_accountant/get_started/consolidation"
                        },
                        {
                            text: "Multi-currency system",
                            link: "/user-docs/account_accountant/get_started/multi_currency"
                        },
                        {
                            text: "Average price on returned goods",
                            link: "/user-docs/account_accountant/get_started/avg_price_valuation"
                        },
                        {
                            text: "Tax units",
                            link: "/user-docs/account_accountant/get_started/tax_units"
                        }
                    ]
                },
                {
                    text: "Taxes",
                    link: "/user-docs/account_accountant/taxes",
                    items: [
                        {
                            text: "B2B (tax excluded) and B2C (tax included) pricing",
                            link: "/user-docs/account_accountant/taxes/B2B_B2C"
                        },
                        {
                            text: "AvaTax integration",
                            link: "/user-docs/account_accountant/taxes/avatax",
                            items: [
                                {
                                    text: "Avalara (Avatax) portal",
                                    link: "/user-docs/account_accountant/taxes/avatax/avalara_portal"
                                },
                                {
                                    text: "AvaTax use",
                                    link: "/user-docs/account_accountant/taxes/avatax/avatax_use"
                                }
                            ]
                        },
                        {
                            text: "Cash basis taxes",
                            link: "/user-docs/account_accountant/taxes/cash_basis"
                        },
                        {
                            text: "EU intra-community distance selling",
                            link: "/user-docs/account_accountant/taxes/eu_distance_selling"
                        },
                        {
                            text: "Fiscal positions (tax and account mapping)",
                            link: "/user-docs/account_accountant/taxes/fiscal_positions"
                        },
                        {
                            text: "Withholding taxes",
                            link: "/user-docs/account_accountant/taxes/retention"
                        },
                        {
                            text: "VAT numbers verification (VIES)",
                            link: "/user-docs/account_accountant/taxes/vat_verification"
                        }
                    ]
                },
                {
                    text: "Customer invoices",
                    link: "/user-docs/account_accountant/customer_invoices",
                    items: [
                        {
                            text: "Cash discounts and tax reduction",
                            link: "/user-docs/account_accountant/customer_invoices/cash_discounts"
                        },
                        {
                            text: "Cash rounding",
                            link: "/user-docs/account_accountant/customer_invoices/cash_rounding"
                        },
                        {
                            text: "Credit notes and refunds",
                            link: "/user-docs/account_accountant/customer_invoices/credit_notes"
                        },
                        {
                            text: "Delivery and invoice addresses",
                            link: "/user-docs/account_accountant/customer_invoices/customer_addresses"
                        },
                        {
                            text: "Deferred revenues",
                            link: "/user-docs/account_accountant/customer_invoices/deferred_revenues"
                        },
                        {
                            text: "Electronic invoicing (`EDI (electronic data interchange)`)",
                            link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing",
                            items: [
                                {
                                    text: "Odoo electronic invoicing in Argentina",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/argentina"
                                },
                                {
                                    text: "Odoo electronic invoicing in Austria",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/austria"
                                },
                                {
                                    text: "Odoo electronic invoicing in the Basque Country",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/basque_country"
                                },
                                {
                                    text: "Odoo electronic invoicing in Belgium",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/belgium"
                                },
                                {
                                    text: "Odoo electronic invoicing in Brazil",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/brazil"
                                },
                                {
                                    text: "Odoo electronic invoicing in Chile",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/chile"
                                },
                                {
                                    text: "Odoo electronic invoicing in Colombia",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/colombia"
                                },
                                {
                                    text: "Odoo electronic invoicing in Croatia",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/croatia"
                                },
                                {
                                    text: "Odoo electronic invoicing in Ecuador",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/ecuador"
                                },
                                {
                                    text: "Odoo electronic invoicing in Estonia",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/estonia"
                                },
                                {
                                    text: "Odoo electronic invoicing in Finland",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/finland"
                                },
                                {
                                    text: "Odoo electronic invoicing in Guatemala",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/guatemala"
                                },
                                {
                                    text: "Odoo electronic invoicing in Hungary",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/hungary"
                                },
                                {
                                    text: "Odoo electronic invoicing in Ireland",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/ireland"
                                },
                                {
                                    text: "Odoo electronic invoicing in Italy",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/italy"
                                },
                                {
                                    text: "Odoo electronic invoicing in Latvia",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/latvia"
                                },
                                {
                                    text: "Odoo electronic invoicing in Lithuania",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/lithuania"
                                },
                                {
                                    text: "Odoo electronic invoicing in Luxembourg",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/luxembourg"
                                },
                                {
                                    text: "Odoo electronic invoicing in Mexico",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/mexico"
                                },
                                {
                                    text: "Odoo electronic invoicing in the Netherlands",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/netherlands"
                                },
                                {
                                    text: "Odoo electronic invoicing in Norway",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/norway"
                                },
                                {
                                    text: "Odoo electronic invoicing in Peru",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/peru"
                                },
                                {
                                    text: "Odoo electronic invoicing in Romania",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/romania"
                                },
                                {
                                    text: "Odoo electronic invoicing in Spain",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/spain"
                                },
                                {
                                    text: "Odoo electronic invoicing in Uruguay",
                                    link: "/user-docs/account_accountant/customer_invoices/electronic_invoicing/uruguay"
                                }
                            ]
                        },
                        {
                            text: "EPC QR codes",
                            link: "/user-docs/account_accountant/customer_invoices/epc_qr_code"
                        },
                        {
                            text: "Incoterms",
                            link: "/user-docs/account_accountant/customer_invoices/incoterms"
                        },
                        {
                            text: "Invoicing processes",
                            link: "/user-docs/account_accountant/customer_invoices/overview"
                        },
                        {
                            text: "Payment terms and installment plans",
                            link: "/user-docs/account_accountant/customer_invoices/payment_terms"
                        },
                        {
                            text: "Invoice sequence",
                            link: "/user-docs/account_accountant/customer_invoices/sequence"
                        },
                        {
                            text: "Snailmail",
                            link: "/user-docs/account_accountant/customer_invoices/snailmail"
                        },
                        {
                            text: "Default terms and conditions (T&C)",
                            link: "/user-docs/account_accountant/customer_invoices/terms_conditions"
                        }
                    ]
                },
                {
                    text: "Vendor bills",
                    link: "/user-docs/account_accountant/vendor_bills",
                    items: [
                        {
                            text: "Non-current assets and fixed assets",
                            link: "/user-docs/account_accountant/vendor_bills/assets"
                        },
                        {
                            text: "Deferred expenses",
                            link: "/user-docs/account_accountant/vendor_bills/deferred_expenses"
                        },
                        {
                            text: "AI-powered document digitization",
                            link: "/user-docs/account_accountant/vendor_bills/invoice_digitization"
                        },
                        {
                            text: "Vendor bill sequence",
                            link: "/user-docs/account_accountant/vendor_bills/sequence"
                        }
                    ]
                },
                {
                    text: "Payments",
                    link: "/user-docs/account_accountant/payments",
                    items: [
                        {
                            text: "Batch payments",
                            link: "/user-docs/account_accountant/payments/batch"
                        },
                        {
                            text: "SEPA Direct Debit (SDD) customer payments",
                            link: "/user-docs/account_accountant/payments/batch_sdd"
                        },
                        {
                            text: "Follow-up on invoices",
                            link: "/user-docs/account_accountant/payments/follow_up"
                        },
                        {
                            text: "Forecast future bills to pay",
                            link: "/user-docs/account_accountant/payments/forecast"
                        },
                        {
                            text: "Online payments",
                            link: "/user-docs/account_accountant/payments/online",
                            items: [
                                {
                                    text: "Install the patch to disable online invoice payment",
                                    link: "/user-docs/account_accountant/payments/online/install_portal_patch"
                                }
                            ]
                        },
                        {
                            text: "Pay by checks",
                            link: "/user-docs/account_accountant/payments/pay_checks"
                        },
                        {
                            text: "Pay with SEPA",
                            link: "/user-docs/account_accountant/payments/pay_sepa"
                        },
                        {
                            text: "Trusted accounts (send money)",
                            link: "/user-docs/account_accountant/payments/trusted_accounts"
                        }
                    ]
                },
                {
                    text: "Bank and cash accounts",
                    link: "/user-docs/account_accountant/bank",
                    items: [
                        {
                            text: "Bank synchronization",
                            link: "/user-docs/account_accountant/bank/bank_synchronization",
                            items: [
                                {
                                    text: "Enable Banking",
                                    link: "/user-docs/account_accountant/bank/bank_synchronization/enablebanking"
                                },
                                {
                                    text: "Ponto",
                                    link: "/user-docs/account_accountant/bank/bank_synchronization/ponto"
                                },
                                {
                                    text: "Salt Edge",
                                    link: "/user-docs/account_accountant/bank/bank_synchronization/saltedge"
                                }
                            ]
                        },
                        {
                            text: "Manage a bank account in a foreign currency",
                            link: "/user-docs/account_accountant/bank/foreign_currency"
                        },
                        {
                            text: "Internal transfers",
                            link: "/user-docs/account_accountant/bank/internal_transfers"
                        },
                        {
                            text: "Loans management",
                            link: "/user-docs/account_accountant/bank/loans"
                        },
                        {
                            text: "Bank reconciliation",
                            link: "/user-docs/account_accountant/bank/reconciliation"
                        },
                        {
                            text: "Reconciliation models",
                            link: "/user-docs/account_accountant/bank/reconciliation_models"
                        },
                        {
                            text: "Transactions",
                            link: "/user-docs/account_accountant/bank/transactions"
                        }
                    ]
                },
                {
                    text: "Reporting",
                    link: "/user-docs/account_accountant/reporting",
                    items: [
                        {
                            text: "Analytic accounting",
                            link: "/user-docs/account_accountant/reporting/analytic_accounting"
                        },
                        {
                            text: "Budgets",
                            link: "/user-docs/account_accountant/reporting/budget"
                        },
                        {
                            text: "Custom reports",
                            link: "/user-docs/account_accountant/reporting/customize"
                        },
                        {
                            text: "Data inalterability check report",
                            link: "/user-docs/account_accountant/reporting/data_inalterability"
                        },
                        {
                            text: "Intrastat",
                            link: "/user-docs/account_accountant/reporting/intrastat"
                        },
                        {
                            text: "Silverfin integration",
                            link: "/user-docs/account_accountant/reporting/silverfin"
                        },
                        {
                            text: "Tax carryover",
                            link: "/user-docs/account_accountant/reporting/tax_carryover"
                        },
                        {
                            text: "Tax return (VAT declaration)",
                            link: "/user-docs/account_accountant/reporting/tax_returns"
                        },
                        {
                            text: "Year-end closing",
                            link: "/user-docs/account_accountant/reporting/year_end"
                        }
                    ]
                }
            ],
            '/user-docs/crm': [
                {
                    text: "Acquire leads",
                    link: "/user-docs/crm/acquire_leads",
                    items: [
                        {
                            text: "Convert leads into opportunities",
                            link: "/user-docs/crm/acquire_leads/convert"
                        },
                        {
                            text: "Create leads (from email or manually)",
                            link: "/user-docs/crm/acquire_leads/email_manual"
                        },
                        {
                            text: "Lead mining",
                            link: "/user-docs/crm/acquire_leads/lead_mining"
                        },
                        {
                            text: "Create opportunities from web contact forms",
                            link: "/user-docs/crm/acquire_leads/opportunities_form"
                        },
                        {
                            text: "Create and send quotations",
                            link: "/user-docs/crm/acquire_leads/send_quotes"
                        }
                    ]
                },
                {
                    text: "Optimize your Day-to-Day work",
                    link: "/user-docs/crm/optimize",
                    items: [
                        {
                            text: "CRM Gamification",
                            link: "/user-docs/crm/optimize/gamification"
                        },
                        {
                            text: "Lead enrichment",
                            link: "/user-docs/crm/optimize/lead_enrichment"
                        },
                        {
                            text: "Enrich contacts with partner autocomplete",
                            link: "/user-docs/crm/optimize/partner_autocomplete"
                        },
                        {
                            text: "Utilize activities for sales teams",
                            link: "/user-docs/crm/optimize/utilize_activities"
                        }
                    ]
                },
                {
                    text: "Analyze performance",
                    link: "/user-docs/crm/performance",
                    items: [
                        {
                            text: "Expected revenue report",
                            link: "/user-docs/crm/performance/expected_revenue_report"
                        },
                        {
                            text: "Forecast report",
                            link: "/user-docs/crm/performance/forecast_report"
                        },
                        {
                            text: "Pipeline Analysis",
                            link: "/user-docs/crm/performance/win_loss"
                        }
                    ]
                },
                {
                    text: "Organize the pipeline",
                    link: "/user-docs/crm/pipeline",
                    items: [
                        {
                            text: "Lost opportunities",
                            link: "/user-docs/crm/pipeline/lost_opportunities"
                        },
                        {
                            text: "Manage sales teams",
                            link: "/user-docs/crm/pipeline/manage_sales_teams"
                        },
                        {
                            text: "Merge similar leads and opportunities",
                            link: "/user-docs/crm/pipeline/merge_similar"
                        }
                    ]
                },
                {
                    text: "Assign and track leads",
                    link: "/user-docs/crm/track_leads",
                    items: [
                        {
                            text: "Lead distribution report",
                            link: "/user-docs/crm/track_leads/lead_distribution_report"
                        },
                        {
                            text: "Assign leads with predictive lead scoring",
                            link: "/user-docs/crm/track_leads/lead_scoring"
                        },
                        {
                            text: "Marketing attribution reports",
                            link: "/user-docs/crm/track_leads/marketing_attribution"
                        },
                        {
                            text: "Quality leads report",
                            link: "/user-docs/crm/track_leads/quality_leads_report"
                        },
                        {
                            text: "Resellers",
                            link: "/user-docs/crm/track_leads/resellers"
                        },
                        {
                            text: "Unattended leads report",
                            link: "/user-docs/crm/track_leads/unattended_leads_report"
                        }
                    ]
                }
            ],
            '/user-docs/sales': [
                {
                    text: 'Sales Quotations',
                    link: '/user-docs/sales/sales_quotations',
                    items: [
                        {
                            text: 'Create quotations',
                            link: '/user-docs/sales/sales_quotations/create_quotations'
                        },
                        {
                            text: 'Quotation Templates',
                            link: '/user-docs/sales/sales_quotations/quote_template'
                        },
                        {
                            text: 'Optional products',
                            link: '/user-docs/sales/sales_quotations/optional_products'
                        },
                        {
                            text: 'Online signatures for order confirmations',
                            link: '/user-docs/sales/sales_quotations/get_signature_to_validate'
                        },
                        {
                            text: 'Online payment order confirmation',
                            link: '/user-docs/sales/sales_quotations/get_paid_to_validate'
                        },
                        {
                            text: 'Quotation deadlines',
                            link: '/user-docs/sales/sales_quotations/deadline'
                        },
                        {
                            text: 'Deliveries and invoices to different addresses',
                            link: '/user-docs/sales/sales_quotations/different_addresses'
                        },
                        {
                            text: 'Product variants on quotations and sales orders',
                            link: '/user-docs/sales/sales_quotations/orders_and_variants'
                        },
                        {
                            text: 'PDF quote builder',
                            link: '/user-docs/sales/sales_quotations/pdf_quote_builder'
                        },
                    ]
                },
                {
                    text: 'Invoicing Method',
                    items: [
                        {
                            text: 'Invoice based on delivered or ordered quantities',
                            link: '/user-docs/sales/invoicing/invoicing_policy'
                        },
                        {
                            text: 'Down payments',
                            link: '/user-docs/sales/invoicing/down_payment'
                        },
                        {
                            text: 'Pro-forma invoices',
                            link: '/user-docs/sales/invoicing/proforma'
                        },
                        {
                            text: 'Invoicing based on time and materials',
                            link: '/user-docs/sales/invoicing/time_materials'
                        },
                        {
                            text: 'Invoice project milestones',
                            link: '/user-docs/sales/invoicing/milestone'
                        },
                        {
                            text: 'Reinvoice expenses to customers',
                            link: '/user-docs/sales/invoicing/expense'
                        },
                    ]
                },
                {
                    text: 'Products Prices',
                    items: [
                        {
                            text: 'Manage Your Products',
                            items: [
                                {
                                    text: 'Import products',
                                    link: '/user-docs/sales/products_prices/products/import'
                                },
                                {
                                    text: 'Product variants',
                                    link: '/user-docs/sales/products_prices/products/variants'
                                },
                                {
                                    text: 'Product images with Google Images',
                                    link: '/user-docs/sales/products_prices/products/product_images'
                                },
                            ]
                        },
                        {
                            text: 'Manage Your Pricing',
                            items: [
                                {
                                    text: 'Pricelists',
                                    link: '/user-docs/sales/products_prices/prices/pricing'
                                },
                                {
                                    text: 'Foreign currencies',
                                    link: '/user-docs/sales/products_prices/prices/currencies'
                                },
                                {
                                    text: 'Discounts',
                                    link: '/user-docs/sales/products_prices/prices/discounts'
                                },
                            ]
                        },
                        {
                            text: 'Returns and refunds',
                            link: '/user-docs/sales/products_prices/returns'
                        },
                        {
                            text: 'Use eWallets and gift cards',
                            link: '/user-docs/sales/products_prices/ewallets_giftcards'
                        },
                        {
                            text: 'Discount and loyalty programs',
                            link: '/user-docs/sales/products_prices/loyalty_discount'
                        },
                    ]
                },
                {
                    text: 'Commissions',
                    link: '/user-docs/sales/commissions'
                },
            ],
            '/user-docs/subscriptions': [
                {
                    text: "Introduction",
                    link: "/user-docs/subscriptions"
                },
                {
                    text: "Automation rules",
                    link: "/user-docs/subscriptions/automatic_alerts"
                },
                {
                    text: "Close subscriptions",
                    link: "/user-docs/subscriptions/closing"
                },
                {
                    text: "Subscriptions in the eCommerce shop",
                    link: "/user-docs/subscriptions/ecommerce"
                },
                {
                    text: "Subscription plans",
                    link: "/user-docs/subscriptions/plans"
                },
                {
                    text: "Renew subscriptions",
                    link: "/user-docs/subscriptions/renewals"
                },
                {
                    text: "Subscription reports",
                    link: "/user-docs/subscriptions/reports"
                },
                {
                    text: "Scheduled actions",
                    link: "/user-docs/subscriptions/scheduled_actions"
                },
                {
                    text: "Upsell subscriptions",
                    link: "/user-docs/subscriptions/upselling"
                }
            ],
            '/user-docs/rental': [
                {
                    text: "Rental",
                    link: "/user-docs/rental"
                },
                {
                    text: "Manage deposits",
                    link: "/user-docs/rental/manage_deposits"
                }
            ],
            '/user-docs/inventory': [
                {
                    text: "Product management",
                    link: "/user-docs/inventory/product_management",
                    items: [
                        {
                            text: "Configure product",
                            link: "/user-docs/inventory/product_management/configure",
                            items: [
                                {
                                    text: "Packages",
                                    link: "/user-docs/inventory/product_management/configure/package"
                                },
                                {
                                    text: "Packaging",
                                    link: "/user-docs/inventory/product_management/configure/packaging"
                                },
                                {
                                    text: "Product type",
                                    link: "/user-docs/inventory/product_management/configure/type"
                                },
                                {
                                    text: "Units of measure",
                                    link: "/user-docs/inventory/product_management/configure/uom"
                                }
                            ]
                        },
                        {
                            text: "Inventory valuation",
                            link: "/user-docs/inventory/product_management/inventory_valuation",
                            items: [
                                {
                                    text: "Automatic inventory valuation",
                                    link: "/user-docs/inventory/product_management/inventory_valuation/inventory_valuation_config"
                                },
                                {
                                    text: "Landed costs",
                                    link: "/user-docs/inventory/product_management/inventory_valuation/landed_costs"
                                },
                                {
                                    text: "Using inventory valuation",
                                    link: "/user-docs/inventory/product_management/inventory_valuation/using_inventory_valuation"
                                },
                                {
                                    text: "Valuation by lots/serial numbers",
                                    link: "/user-docs/inventory/product_management/inventory_valuation/valuation_by_lots"
                                }
                            ]
                        },
                        {
                            text: "Product tracking",
                            link: "/user-docs/inventory/product_management/product_tracking",
                            items: [
                                {
                                    text: "Expiration dates",
                                    link: "/user-docs/inventory/product_management/product_tracking/expiration_dates"
                                },
                                {
                                    text: "Lot numbers",
                                    link: "/user-docs/inventory/product_management/product_tracking/lots"
                                },
                                {
                                    text: "Reassign lot/serial numbers",
                                    link: "/user-docs/inventory/product_management/product_tracking/reassign"
                                },
                                {
                                    text: "Serial numbers",
                                    link: "/user-docs/inventory/product_management/product_tracking/serial_numbers"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "Warehouses and storage",
                    link: "/user-docs/inventory/warehouses_storage",
                    items: [
                        {
                            text: "Inventory management",
                            link: "/user-docs/inventory/warehouses_storage/inventory_management",
                            items: [
                                {
                                    text: "Inventory adjustments",
                                    link: "/user-docs/inventory/warehouses_storage/inventory_management/count_products"
                                },
                                {
                                    text: "Cycle counts",
                                    link: "/user-docs/inventory/warehouses_storage/inventory_management/cycle_counts"
                                },
                                {
                                    text: "Product catalog",
                                    link: "/user-docs/inventory/warehouses_storage/inventory_management/product_catalog"
                                },
                                {
                                    text: "Scrap inventory",
                                    link: "/user-docs/inventory/warehouses_storage/inventory_management/scrap_inventory"
                                },
                                {
                                    text: "Locations",
                                    link: "/user-docs/inventory/warehouses_storage/inventory_management/use_locations"
                                },
                                {
                                    text: "Warehouses",
                                    link: "/user-docs/inventory/warehouses_storage/inventory_management/warehouses"
                                }
                            ]
                        },
                        {
                            text: "Replenishment",
                            link: "/user-docs/inventory/warehouses_storage/replenishment",
                            items: [
                                {
                                    text: "Lead times",
                                    link: "/user-docs/inventory/warehouses_storage/replenishment/lead_times"
                                },
                                {
                                    text: "Replenish on order (MTO)",
                                    link: "/user-docs/inventory/warehouses_storage/replenishment/mto"
                                },
                                {
                                    text: "Reordering rules",
                                    link: "/user-docs/inventory/warehouses_storage/replenishment/reordering_rules"
                                },
                                {
                                    text: "Replenishment report",
                                    link: "/user-docs/inventory/warehouses_storage/replenishment/report"
                                },
                                {
                                    text: "Inter-warehouse replenishment",
                                    link: "/user-docs/inventory/warehouses_storage/replenishment/resupply_warehouses"
                                }
                            ]
                        },
                        {
                            text: "Reporting",
                            link: "/user-docs/inventory/warehouses_storage/reporting",
                            items: [
                                {
                                    text: "Stock valuation dashboard",
                                    link: "/user-docs/inventory/warehouses_storage/reporting/aging"
                                },
                                {
                                    text: "Forecasted report",
                                    link: "/user-docs/inventory/warehouses_storage/reporting/forecast"
                                },
                                {
                                    text: "Locations dashboard",
                                    link: "/user-docs/inventory/warehouses_storage/reporting/locations"
                                },
                                {
                                    text: "Moves history dashboard",
                                    link: "/user-docs/inventory/warehouses_storage/reporting/moves_history"
                                },
                                {
                                    text: "Stock report",
                                    link: "/user-docs/inventory/warehouses_storage/reporting/stock"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "Shipping and receiving",
                    link: "/user-docs/inventory/shipping_receiving",
                    items: [
                        {
                            text: "Inbound and outbound flows",
                            link: "/user-docs/inventory/shipping_receiving/daily_operations",
                            items: [
                                {
                                    text: "Organize a cross-dock in a warehouse",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/cross_dock"
                                },
                                {
                                    text: "Three-step delivery",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/delivery_three_steps"
                                },
                                {
                                    text: "Dropshipping",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/dropshipping"
                                },
                                {
                                    text: "Consignment: buy and sell stock without owning it",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/owned_stock"
                                },
                                {
                                    text: "Putaway rules",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/putaway"
                                },
                                {
                                    text: "One-step receipt and delivery",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/receipts_delivery_one_step"
                                },
                                {
                                    text: "Two-step receipt and delivery",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/receipts_delivery_two_steps"
                                },
                                {
                                    text: "Three-step receipt",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/receipts_three_steps"
                                },
                                {
                                    text: "Sell stock from multiple warehouses using virtual locations",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/stock_warehouses"
                                },
                                {
                                    text: "Storage categories",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/storage_category"
                                },
                                {
                                    text: "Routes and push/pull rules",
                                    link: "/user-docs/inventory/shipping_receiving/daily_operations/use_routes"
                                }
                            ]
                        },
                        {
                            text: "Picking methods",
                            link: "/user-docs/inventory/shipping_receiving/picking_methods",
                            items: [
                                {
                                    text: "Batch picking",
                                    link: "/user-docs/inventory/shipping_receiving/picking_methods/batch"
                                },
                                {
                                    text: "Cluster picking",
                                    link: "/user-docs/inventory/shipping_receiving/picking_methods/cluster"
                                },
                                {
                                    text: "Wave transfers",
                                    link: "/user-docs/inventory/shipping_receiving/picking_methods/wave"
                                }
                            ]
                        },
                        {
                            text: "Removal strategies",
                            link: "/user-docs/inventory/shipping_receiving/removal_strategies",
                            items: [
                                {
                                    text: "Closest location removal",
                                    link: "/user-docs/inventory/shipping_receiving/removal_strategies/closest_location"
                                },
                                {
                                    text: "FEFO removal",
                                    link: "/user-docs/inventory/shipping_receiving/removal_strategies/fefo"
                                },
                                {
                                    text: "FIFO removal",
                                    link: "/user-docs/inventory/shipping_receiving/removal_strategies/fifo"
                                },
                                {
                                    text: "Least packages removal",
                                    link: "/user-docs/inventory/shipping_receiving/removal_strategies/least_packages"
                                },
                                {
                                    text: "LIFO removal",
                                    link: "/user-docs/inventory/shipping_receiving/removal_strategies/lifo"
                                }
                            ]
                        },
                        {
                            text: "Reservation methods",
                            link: "/user-docs/inventory/shipping_receiving/reservation_methods",
                            items: [
                                {
                                    text: "At confirmation reservation",
                                    link: "/user-docs/inventory/shipping_receiving/reservation_methods/at_confirmation"
                                },
                                {
                                    text: "Before scheduled date reservation",
                                    link: "/user-docs/inventory/shipping_receiving/reservation_methods/before_scheduled_date"
                                },
                                {
                                    text: "Manual reservation",
                                    link: "/user-docs/inventory/shipping_receiving/reservation_methods/manually"
                                }
                            ]
                        },
                        {
                            text: "Delivery methods",
                            link: "/user-docs/inventory/shipping_receiving/setup_configuration",
                            items: [
                                {
                                    text: "Bpost integration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/bpost"
                                },
                                {
                                    text: "How to cancel a shipping request to a shipper?",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/cancel"
                                },
                                {
                                    text: "DHL integration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/dhl_credentials"
                                },
                                {
                                    text: "Dispatch management system",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/dispatch"
                                },
                                {
                                    text: "Envia.com integration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/envia_shipping"
                                },
                                {
                                    text: "FedEx integration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/fedex"
                                },
                                {
                                    text: "Shipping cost invoicing",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/invoicing"
                                },
                                {
                                    text: "Change shipping label size",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/label_type"
                                },
                                {
                                    text: "Print shipping labels",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/labels"
                                },
                                {
                                    text: "Multi-package shipments",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/multipack"
                                },
                                {
                                    text: "Add a new delivery method",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/new_delivery_method"
                                },
                                {
                                    text: "Printable delivery PDFs",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/print_on_validation"
                                },
                                {
                                    text: "Sendcloud integration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/sendcloud_shipping"
                                },
                                {
                                    text: "Starshipit shipping",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/starshipit_shipping"
                                },
                                {
                                    text: "Third-party shipping carriers",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/third_party_shipper"
                                },
                                {
                                    text: "UPS integration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/ups_credentials"
                                },
                                {
                                    text: "Zebra label configuration",
                                    link: "/user-docs/inventory/shipping_receiving/setup_configuration/zebra"
                                }
                            ]
                        }
                    ]
                }
            ],
            '/user-docs/manufacturing/': [
                {
                    text: "Advanced configuration",
                    link: "/user-docs/manufacturing/advanced_configuration",
                    items: [
                        {
                            text: "Kits",
                            link: "/user-docs/manufacturing/advanced_configuration/kit_shipping"
                        },
                        {
                            text: "Managing BoMs for product variants",
                            link: "/user-docs/manufacturing/advanced_configuration/product_variants"
                        },
                        {
                            text: "Multilevel BoMs",
                            link: "/user-docs/manufacturing/advanced_configuration/sub_assemblies"
                        },
                        {
                            text: "Work centers",
                            link: "/user-docs/manufacturing/advanced_configuration/using_work_centers"
                        },
                        {
                            text: "Work order dependencies",
                            link: "/user-docs/manufacturing/advanced_configuration/work_order_dependencies"
                        }
                    ]
                },
                {
                    text: "Basic setup",
                    link: "/user-docs/manufacturing/basic_setup",
                    items: [
                        {
                            text: "Bill of materials",
                            link: "/user-docs/manufacturing/basic_setup/bill_configuration"
                        },
                        {
                            text: "Manufacturing product configuration",
                            link: "/user-docs/manufacturing/basic_setup/configure_manufacturing_product"
                        },
                        {
                            text: "Manufacturing order costs",
                            link: "/user-docs/manufacturing/basic_setup/mo_costs"
                        },
                        {
                            text: "One-step manufacturing",
                            link: "/user-docs/manufacturing/basic_setup/one_step_manufacturing"
                        },
                        {
                            text: "Three-step manufacturing",
                            link: "/user-docs/manufacturing/basic_setup/three_step_manufacturing"
                        },
                        {
                            text: "Two-step manufacturing",
                            link: "/user-docs/manufacturing/basic_setup/two_step_manufacturing"
                        }
                    ]
                },
                {
                    text: "Reporting",
                    link: "/user-docs/manufacturing/reporting",
                    items: [
                        {
                            text: "Allocation reports",
                            link: "/user-docs/manufacturing/reporting/allocation"
                        },
                        {
                            text: "Overall equipment effectiveness",
                            link: "/user-docs/manufacturing/reporting/oee"
                        },
                        {
                            text: "Production analysis",
                            link: "/user-docs/manufacturing/reporting/production_analysis"
                        }
                    ]
                },
                {
                    text: "Shop Floor",
                    link: "/user-docs/manufacturing/shop_floor",
                    items: [
                        {
                            text: "Shop Floor overview",
                            link: "/user-docs/manufacturing/shop_floor/shop_floor_overview"
                        },
                        {
                            text: "Shop Floor time tracking",
                            link: "/user-docs/manufacturing/shop_floor/shop_floor_tracking"
                        }
                    ]
                },
                {
                    text: "Subcontracting",
                    link: "/user-docs/manufacturing/subcontracting",
                    items: [
                        {
                            text: "Basic subcontracting lead times",
                            link: "/user-docs/manufacturing/subcontracting/basic_subcontracting_lead_times"
                        },
                        {
                            text: "Dropship subcontracting lead times",
                            link: "/user-docs/manufacturing/subcontracting/dropship_subcontracting_lead_times"
                        },
                        {
                            text: "Resupply subcontracting lead times",
                            link: "/user-docs/manufacturing/subcontracting/resupply_subcontracting_lead_times"
                        },
                        {
                            text: "Basic subcontracting",
                            link: "/user-docs/manufacturing/subcontracting/subcontracting_basic"
                        },
                        {
                            text: "Dropship to subcontractor",
                            link: "/user-docs/manufacturing/subcontracting/subcontracting_dropship"
                        },
                        {
                            text: "Resupply subcontractor",
                            link: "/user-docs/manufacturing/subcontracting/subcontracting_resupply"
                        }
                    ]
                },
                {
                    text: "Workflows",
                    link: "/user-docs/manufacturing/workflows",
                    items: [
                        {
                            text: "By-Products",
                            link: "/user-docs/manufacturing/workflows/byproducts"
                        },
                        {
                            text: "Continuous product improvement",
                            link: "/user-docs/manufacturing/workflows/continuous_improvement"
                        },
                        {
                            text: "Manufacture with lots and serial numbers",
                            link: "/user-docs/manufacturing/workflows/manufacture_lots_serials"
                        },
                        {
                            text: "Manufacturing backorders",
                            link: "/user-docs/manufacturing/workflows/manufacturing_backorders"
                        },
                        {
                            text: "Scrap during manufacturing",
                            link: "/user-docs/manufacturing/workflows/scrap_manufacturing"
                        },
                        {
                            text: "Split and merge manufacturing orders",
                            link: "/user-docs/manufacturing/workflows/split_merge"
                        },
                        {
                            text: "Unbuild orders",
                            link: "/user-docs/manufacturing/workflows/unbuild_orders"
                        },
                        {
                            text: "Master production schedule",
                            link: "/user-docs/manufacturing/workflows/use_mps"
                        },
                        {
                            text: "Work center time off",
                            link: "/user-docs/manufacturing/workflows/work_center_time_off"
                        }
                    ]
                }
            ],
            '/user-docs/hr/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr/get-started/installation'}
                    ],
                    collapsed: false
                },
                {
                    text: 'Essentials',
                    items: [
                        {text: 'New employees', link: '/user-docs/hr/essentials/new-employees'},
                        {text: 'Departments', link: '/user-docs/hr/essentials/departments'},
                        {text: 'Certifications', link: '/user-docs/hr/essentials/certifications'},
                        {text: 'Equipment', link: '/user-docs/hr/essentials/equipment'},
                        {text: 'Offboarding', link: '/user-docs/hr/essentials/offboarding'},
                        {text: 'Employee retention report', link: '/user-docs/hr/essentials/employee-retention-report'},
                    ]
                }
            ],
            '/user-docs/hr_attendance/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_attendance/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_attendance/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_payroll/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_payroll/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_payroll/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_holidays/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_holidays/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_holidays/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_recruitment/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_recruitment/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_recruitment/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_contract/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_contract/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_contract/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_appraisal/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_appraisal/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_appraisal/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_referral/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_referral/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_referral/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
            '/user-docs/hr_skills/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/user-docs/hr_skills/get-started/introduction'},
                        {text: 'Installation', link: '/user-docs/hr_skills/get-started/installation'}
                    ],
                    collapsed: false
                }
            ],
        },

        socialLinks: [
            {icon: 'youtube', link: 'https://youtube.com/documentation-uz'},
            {icon: 'x', link: 'https://twitter.com/documentation-uz'},
            {icon: 'github', link: 'https://github.com/documentation-uz/odoo'}
        ]
    },
    ignoreDeadLinks: true
})
