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
            {text: 'Developer', link: '/developer/table-of-contents'},
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
            '/user-docs/crm': [
                {
                    "text": "Acquire leads",
                    "link": "/user-docs/crm/acquire_leads",
                    "items": [
                        {
                            "text": "Convert leads into opportunities",
                            "link": "/user-docs/crm/acquire_leads/convert"
                        },
                        {
                            "text": "Create leads (from email or manually)",
                            "link": "/user-docs/crm/acquire_leads/email_manual"
                        },
                        {
                            "text": "Lead mining",
                            "link": "/user-docs/crm/acquire_leads/lead_mining"
                        },
                        {
                            "text": "Create opportunities from web contact forms",
                            "link": "/user-docs/crm/acquire_leads/opportunities_form"
                        },
                        {
                            "text": "Create and send quotations",
                            "link": "/user-docs/crm/acquire_leads/send_quotes"
                        }
                    ]
                },
                {
                    "text": "Optimize your Day-to-Day work",
                    "link": "/user-docs/crm/optimize",
                    "items": [
                        {
                            "text": "CRM Gamification",
                            "link": "/user-docs/crm/optimize/gamification"
                        },
                        {
                            "text": "Lead enrichment",
                            "link": "/user-docs/crm/optimize/lead_enrichment"
                        },
                        {
                            "text": "Enrich contacts with partner autocomplete",
                            "link": "/user-docs/crm/optimize/partner_autocomplete"
                        },
                        {
                            "text": "Utilize activities for sales teams",
                            "link": "/user-docs/crm/optimize/utilize_activities"
                        }
                    ]
                },
                {
                    "text": "Analyze performance",
                    "link": "/user-docs/crm/performance",
                    "items": [
                        {
                            "text": "Expected revenue report",
                            "link": "/user-docs/crm/performance/expected_revenue_report"
                        },
                        {
                            "text": "Forecast report",
                            "link": "/user-docs/crm/performance/forecast_report"
                        },
                        {
                            "text": "Pipeline Analysis",
                            "link": "/user-docs/crm/performance/win_loss"
                        }
                    ]
                },
                {
                    "text": "Organize the pipeline",
                    "link": "/user-docs/crm/pipeline",
                    "items": [
                        {
                            "text": "Lost opportunities",
                            "link": "/user-docs/crm/pipeline/lost_opportunities"
                        },
                        {
                            "text": "Manage sales teams",
                            "link": "/user-docs/crm/pipeline/manage_sales_teams"
                        },
                        {
                            "text": "Merge similar leads and opportunities",
                            "link": "/user-docs/crm/pipeline/merge_similar"
                        }
                    ]
                },
                {
                    "text": "Assign and track leads",
                    "link": "/user-docs/crm/track_leads",
                    "items": [
                        {
                            "text": "Lead distribution report",
                            "link": "/user-docs/crm/track_leads/lead_distribution_report"
                        },
                        {
                            "text": "Assign leads with predictive lead scoring",
                            "link": "/user-docs/crm/track_leads/lead_scoring"
                        },
                        {
                            "text": "Marketing attribution reports",
                            "link": "/user-docs/crm/track_leads/marketing_attribution"
                        },
                        {
                            "text": "Quality leads report",
                            "link": "/user-docs/crm/track_leads/quality_leads_report"
                        },
                        {
                            "text": "Resellers",
                            "link": "/user-docs/crm/track_leads/resellers"
                        },
                        {
                            "text": "Unattended leads report",
                            "link": "/user-docs/crm/track_leads/unattended_leads_report"
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
                    "text": "Introduction",
                    "link": "/user-docs/subscriptions"
                },
                {
                    "text": "Automation rules",
                    "link": "/user-docs/subscriptions/automatic_alerts"
                },
                {
                    "text": "Close subscriptions",
                    "link": "/user-docs/subscriptions/closing"
                },
                {
                    "text": "Subscriptions in the eCommerce shop",
                    "link": "/user-docs/subscriptions/ecommerce"
                },
                {
                    "text": "Subscription plans",
                    "link": "/user-docs/subscriptions/plans"
                },
                {
                    "text": "Renew subscriptions",
                    "link": "/user-docs/subscriptions/renewals"
                },
                {
                    "text": "Subscription reports",
                    "link": "/user-docs/subscriptions/reports"
                },
                {
                    "text": "Scheduled actions",
                    "link": "/user-docs/subscriptions/scheduled_actions"
                },
                {
                    "text": "Upsell subscriptions",
                    "link": "/user-docs/subscriptions/upselling"
                }
            ],
            '/user-docs/rental': [
                {
                    "text": "Rental",
                    "link": "/user-docs/rental"
                },
                {
                    "text": "Manage deposits",
                    "link": "/user-docs/rental/manage_deposits"
                }
            ],
            '/user-docs/inventory': [
                {
                    "text": "Product management",
                    "link": "/user-docs/inventory/product_management",
                    "items": [
                        {
                            "text": "Configure product",
                            "link": "/user-docs/inventory/product_management/configure",
                            "items": [
                                {
                                    "text": "Packages",
                                    "link": "/user-docs/inventory/product_management/configure/package"
                                },
                                {
                                    "text": "Packaging",
                                    "link": "/user-docs/inventory/product_management/configure/packaging"
                                },
                                {
                                    "text": "Product type",
                                    "link": "/user-docs/inventory/product_management/configure/type"
                                },
                                {
                                    "text": "Units of measure",
                                    "link": "/user-docs/inventory/product_management/configure/uom"
                                }
                            ]
                        },
                        {
                            "text": "Inventory valuation",
                            "link": "/user-docs/inventory/product_management/inventory_valuation",
                            "items": [
                                {
                                    "text": "Automatic inventory valuation",
                                    "link": "/user-docs/inventory/product_management/inventory_valuation/inventory_valuation_config"
                                },
                                {
                                    "text": "Landed costs",
                                    "link": "/user-docs/inventory/product_management/inventory_valuation/landed_costs"
                                },
                                {
                                    "text": "Using inventory valuation",
                                    "link": "/user-docs/inventory/product_management/inventory_valuation/using_inventory_valuation"
                                },
                                {
                                    "text": "Valuation by lots/serial numbers",
                                    "link": "/user-docs/inventory/product_management/inventory_valuation/valuation_by_lots"
                                }
                            ]
                        },
                        {
                            "text": "Product tracking",
                            "link": "/user-docs/inventory/product_management/product_tracking",
                            "items": [
                                {
                                    "text": "Expiration dates",
                                    "link": "/user-docs/inventory/product_management/product_tracking/expiration_dates"
                                },
                                {
                                    "text": "Lot numbers",
                                    "link": "/user-docs/inventory/product_management/product_tracking/lots"
                                },
                                {
                                    "text": "Reassign lot/serial numbers",
                                    "link": "/user-docs/inventory/product_management/product_tracking/reassign"
                                },
                                {
                                    "text": "Serial numbers",
                                    "link": "/user-docs/inventory/product_management/product_tracking/serial_numbers"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "Warehouses and storage",
                    "link": "/user-docs/inventory/warehouses_storage",
                    "items": [
                        {
                            "text": "Inventory management",
                            "link": "/user-docs/inventory/warehouses_storage/inventory_management",
                            "items": [
                                {
                                    "text": "Inventory adjustments",
                                    "link": "/user-docs/inventory/warehouses_storage/inventory_management/count_products"
                                },
                                {
                                    "text": "Cycle counts",
                                    "link": "/user-docs/inventory/warehouses_storage/inventory_management/cycle_counts"
                                },
                                {
                                    "text": "Product catalog",
                                    "link": "/user-docs/inventory/warehouses_storage/inventory_management/product_catalog"
                                },
                                {
                                    "text": "Scrap inventory",
                                    "link": "/user-docs/inventory/warehouses_storage/inventory_management/scrap_inventory"
                                },
                                {
                                    "text": "Locations",
                                    "link": "/user-docs/inventory/warehouses_storage/inventory_management/use_locations"
                                },
                                {
                                    "text": "Warehouses",
                                    "link": "/user-docs/inventory/warehouses_storage/inventory_management/warehouses"
                                }
                            ]
                        },
                        {
                            "text": "Replenishment",
                            "link": "/user-docs/inventory/warehouses_storage/replenishment",
                            "items": [
                                {
                                    "text": "Lead times",
                                    "link": "/user-docs/inventory/warehouses_storage/replenishment/lead_times"
                                },
                                {
                                    "text": "Replenish on order (MTO)",
                                    "link": "/user-docs/inventory/warehouses_storage/replenishment/mto"
                                },
                                {
                                    "text": "Reordering rules",
                                    "link": "/user-docs/inventory/warehouses_storage/replenishment/reordering_rules"
                                },
                                {
                                    "text": "Replenishment report",
                                    "link": "/user-docs/inventory/warehouses_storage/replenishment/report"
                                },
                                {
                                    "text": "Inter-warehouse replenishment",
                                    "link": "/user-docs/inventory/warehouses_storage/replenishment/resupply_warehouses"
                                }
                            ]
                        },
                        {
                            "text": "Reporting",
                            "link": "/user-docs/inventory/warehouses_storage/reporting",
                            "items": [
                                {
                                    "text": "Stock valuation dashboard",
                                    "link": "/user-docs/inventory/warehouses_storage/reporting/aging"
                                },
                                {
                                    "text": "Forecasted report",
                                    "link": "/user-docs/inventory/warehouses_storage/reporting/forecast"
                                },
                                {
                                    "text": "Locations dashboard",
                                    "link": "/user-docs/inventory/warehouses_storage/reporting/locations"
                                },
                                {
                                    "text": "Moves history dashboard",
                                    "link": "/user-docs/inventory/warehouses_storage/reporting/moves_history"
                                },
                                {
                                    "text": "Stock report",
                                    "link": "/user-docs/inventory/warehouses_storage/reporting/stock"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "Shipping and receiving",
                    "link": "/user-docs/inventory/shipping_receiving",
                    "items": [
                        {
                            "text": "Inbound and outbound flows",
                            "link": "/user-docs/inventory/shipping_receiving/daily_operations",
                            "items": [
                                {
                                    "text": "Organize a cross-dock in a warehouse",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/cross_dock"
                                },
                                {
                                    "text": "Three-step delivery",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/delivery_three_steps"
                                },
                                {
                                    "text": "Dropshipping",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/dropshipping"
                                },
                                {
                                    "text": "Consignment: buy and sell stock without owning it",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/owned_stock"
                                },
                                {
                                    "text": "Putaway rules",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/putaway"
                                },
                                {
                                    "text": "One-step receipt and delivery",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/receipts_delivery_one_step"
                                },
                                {
                                    "text": "Two-step receipt and delivery",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/receipts_delivery_two_steps"
                                },
                                {
                                    "text": "Three-step receipt",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/receipts_three_steps"
                                },
                                {
                                    "text": "Sell stock from multiple warehouses using virtual locations",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/stock_warehouses"
                                },
                                {
                                    "text": "Storage categories",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/storage_category"
                                },
                                {
                                    "text": "Routes and push/pull rules",
                                    "link": "/user-docs/inventory/shipping_receiving/daily_operations/use_routes"
                                }
                            ]
                        },
                        {
                            "text": "Picking methods",
                            "link": "/user-docs/inventory/shipping_receiving/picking_methods",
                            "items": [
                                {
                                    "text": "Batch picking",
                                    "link": "/user-docs/inventory/shipping_receiving/picking_methods/batch"
                                },
                                {
                                    "text": "Cluster picking",
                                    "link": "/user-docs/inventory/shipping_receiving/picking_methods/cluster"
                                },
                                {
                                    "text": "Wave transfers",
                                    "link": "/user-docs/inventory/shipping_receiving/picking_methods/wave"
                                }
                            ]
                        },
                        {
                            "text": "Removal strategies",
                            "link": "/user-docs/inventory/shipping_receiving/removal_strategies",
                            "items": [
                                {
                                    "text": "Closest location removal",
                                    "link": "/user-docs/inventory/shipping_receiving/removal_strategies/closest_location"
                                },
                                {
                                    "text": "FEFO removal",
                                    "link": "/user-docs/inventory/shipping_receiving/removal_strategies/fefo"
                                },
                                {
                                    "text": "FIFO removal",
                                    "link": "/user-docs/inventory/shipping_receiving/removal_strategies/fifo"
                                },
                                {
                                    "text": "Least packages removal",
                                    "link": "/user-docs/inventory/shipping_receiving/removal_strategies/least_packages"
                                },
                                {
                                    "text": "LIFO removal",
                                    "link": "/user-docs/inventory/shipping_receiving/removal_strategies/lifo"
                                }
                            ]
                        },
                        {
                            "text": "Reservation methods",
                            "link": "/user-docs/inventory/shipping_receiving/reservation_methods",
                            "items": [
                                {
                                    "text": "At confirmation reservation",
                                    "link": "/user-docs/inventory/shipping_receiving/reservation_methods/at_confirmation"
                                },
                                {
                                    "text": "Before scheduled date reservation",
                                    "link": "/user-docs/inventory/shipping_receiving/reservation_methods/before_scheduled_date"
                                },
                                {
                                    "text": "Manual reservation",
                                    "link": "/user-docs/inventory/shipping_receiving/reservation_methods/manually"
                                }
                            ]
                        },
                        {
                            "text": "Delivery methods",
                            "link": "/user-docs/inventory/shipping_receiving/setup_configuration",
                            "items": [
                                {
                                    "text": "Bpost integration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/bpost"
                                },
                                {
                                    "text": "How to cancel a shipping request to a shipper?",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/cancel"
                                },
                                {
                                    "text": "DHL integration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/dhl_credentials"
                                },
                                {
                                    "text": "Dispatch management system",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/dispatch"
                                },
                                {
                                    "text": "Envia.com integration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/envia_shipping"
                                },
                                {
                                    "text": "FedEx integration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/fedex"
                                },
                                {
                                    "text": "Shipping cost invoicing",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/invoicing"
                                },
                                {
                                    "text": "Change shipping label size",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/label_type"
                                },
                                {
                                    "text": "Print shipping labels",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/labels"
                                },
                                {
                                    "text": "Multi-package shipments",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/multipack"
                                },
                                {
                                    "text": "Add a new delivery method",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/new_delivery_method"
                                },
                                {
                                    "text": "Printable delivery PDFs",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/print_on_validation"
                                },
                                {
                                    "text": "Sendcloud integration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/sendcloud_shipping"
                                },
                                {
                                    "text": "Starshipit shipping",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/starshipit_shipping"
                                },
                                {
                                    "text": "Third-party shipping carriers",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/third_party_shipper"
                                },
                                {
                                    "text": "UPS integration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/ups_credentials"
                                },
                                {
                                    "text": "Zebra label configuration",
                                    "link": "/user-docs/inventory/shipping_receiving/setup_configuration/zebra"
                                }
                            ]
                        }
                    ]
                }
            ],
            '/user-docs/manufacturing/': [
                {
                    "text": "Advanced configuration",
                    "link": "/user-docs/manufacturing/advanced_configuration",
                    "items": [
                        {
                            "text": "Kits",
                            "link": "/user-docs/manufacturing/advanced_configuration/kit_shipping"
                        },
                        {
                            "text": "Managing BoMs for product variants",
                            "link": "/user-docs/manufacturing/advanced_configuration/product_variants"
                        },
                        {
                            "text": "Multilevel BoMs",
                            "link": "/user-docs/manufacturing/advanced_configuration/sub_assemblies"
                        },
                        {
                            "text": "Work centers",
                            "link": "/user-docs/manufacturing/advanced_configuration/using_work_centers"
                        },
                        {
                            "text": "Work order dependencies",
                            "link": "/user-docs/manufacturing/advanced_configuration/work_order_dependencies"
                        }
                    ]
                },
                {
                    "text": "Basic setup",
                    "link": "/user-docs/manufacturing/basic_setup",
                    "items": [
                        {
                            "text": "Bill of materials",
                            "link": "/user-docs/manufacturing/basic_setup/bill_configuration"
                        },
                        {
                            "text": "Manufacturing product configuration",
                            "link": "/user-docs/manufacturing/basic_setup/configure_manufacturing_product"
                        },
                        {
                            "text": "Manufacturing order costs",
                            "link": "/user-docs/manufacturing/basic_setup/mo_costs"
                        },
                        {
                            "text": "One-step manufacturing",
                            "link": "/user-docs/manufacturing/basic_setup/one_step_manufacturing"
                        },
                        {
                            "text": "Three-step manufacturing",
                            "link": "/user-docs/manufacturing/basic_setup/three_step_manufacturing"
                        },
                        {
                            "text": "Two-step manufacturing",
                            "link": "/user-docs/manufacturing/basic_setup/two_step_manufacturing"
                        }
                    ]
                },
                {
                    "text": "Reporting",
                    "link": "/user-docs/manufacturing/reporting",
                    "items": [
                        {
                            "text": "Allocation reports",
                            "link": "/user-docs/manufacturing/reporting/allocation"
                        },
                        {
                            "text": "Overall equipment effectiveness",
                            "link": "/user-docs/manufacturing/reporting/oee"
                        },
                        {
                            "text": "Production analysis",
                            "link": "/user-docs/manufacturing/reporting/production_analysis"
                        }
                    ]
                },
                {
                    "text": "Shop Floor",
                    "link": "/user-docs/manufacturing/shop_floor",
                    "items": [
                        {
                            "text": "Shop Floor overview",
                            "link": "/user-docs/manufacturing/shop_floor/shop_floor_overview"
                        },
                        {
                            "text": "Shop Floor time tracking",
                            "link": "/user-docs/manufacturing/shop_floor/shop_floor_tracking"
                        }
                    ]
                },
                {
                    "text": "Subcontracting",
                    "link": "/user-docs/manufacturing/subcontracting",
                    "items": [
                        {
                            "text": "Basic subcontracting lead times",
                            "link": "/user-docs/manufacturing/subcontracting/basic_subcontracting_lead_times"
                        },
                        {
                            "text": "Dropship subcontracting lead times",
                            "link": "/user-docs/manufacturing/subcontracting/dropship_subcontracting_lead_times"
                        },
                        {
                            "text": "Resupply subcontracting lead times",
                            "link": "/user-docs/manufacturing/subcontracting/resupply_subcontracting_lead_times"
                        },
                        {
                            "text": "Basic subcontracting",
                            "link": "/user-docs/manufacturing/subcontracting/subcontracting_basic"
                        },
                        {
                            "text": "Dropship to subcontractor",
                            "link": "/user-docs/manufacturing/subcontracting/subcontracting_dropship"
                        },
                        {
                            "text": "Resupply subcontractor",
                            "link": "/user-docs/manufacturing/subcontracting/subcontracting_resupply"
                        }
                    ]
                },
                {
                    "text": "Workflows",
                    "link": "/user-docs/manufacturing/workflows",
                    "items": [
                        {
                            "text": "By-Products",
                            "link": "/user-docs/manufacturing/workflows/byproducts"
                        },
                        {
                            "text": "Continuous product improvement",
                            "link": "/user-docs/manufacturing/workflows/continuous_improvement"
                        },
                        {
                            "text": "Manufacture with lots and serial numbers",
                            "link": "/user-docs/manufacturing/workflows/manufacture_lots_serials"
                        },
                        {
                            "text": "Manufacturing backorders",
                            "link": "/user-docs/manufacturing/workflows/manufacturing_backorders"
                        },
                        {
                            "text": "Scrap during manufacturing",
                            "link": "/user-docs/manufacturing/workflows/scrap_manufacturing"
                        },
                        {
                            "text": "Split and merge manufacturing orders",
                            "link": "/user-docs/manufacturing/workflows/split_merge"
                        },
                        {
                            "text": "Unbuild orders",
                            "link": "/user-docs/manufacturing/workflows/unbuild_orders"
                        },
                        {
                            "text": "Master production schedule",
                            "link": "/user-docs/manufacturing/workflows/use_mps"
                        },
                        {
                            "text": "Work center time off",
                            "link": "/user-docs/manufacturing/workflows/work_center_time_off"
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
