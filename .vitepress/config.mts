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
            {text: 'Documentation', link: '/docs/get-started/introduction'},
            {text: 'Examples', link: '/examples/table-of-contents'},
            {text: 'API Reference', link: '/api-reference/print'},
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
            ]
        },

        socialLinks: [
            {icon: 'youtube', link: 'https://youtube.com/documentation-uz'},
            {icon: 'x', link: 'https://twitter.com/documentation-uz'},
            {icon: 'github', link: 'https://github.com/documentation-uz/odoo'}
        ]
    }
})
