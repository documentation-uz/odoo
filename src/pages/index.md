---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Odoo framework"
  text: "Learn today, work tomorrow!"
  image:
    src: https://i.imgur.com/mMGoNyq.png
    alt: odoo-logo-documentation-uz
  actions:
    - theme: brand
      text: Get started
      link: /docs/get-started/introduction
    - theme: alt
      text: API Reference
      link: /api-examples

features:
  - icon: <img src="https://download.odoocdn.com/icons/contacts/static/description/icon.svg"/>
    title: Contacts
    details: Centralize your address book
    link: /guide/
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/crm/static/description/icon.svg"/>
    title: CRM
    details: Track leads and close opportunities
    link: /guide/
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/sale/static/description/icon.svg"/>
    title: Sales
    details: From quotations to invoices
    link: /guide/
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg"/>
    title: Point of Sale
    details: User-friendly PoS interface for shops and restaurants
    link: /guide/
    linkText: Learn more
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/zedcentury.png',
    name: 'Asliddin Maxmudov',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/zedcentury' },
      { icon: 'twitter', link: 'https://twitter.com/zedcentury' },
      { icon: 'youtube', link: 'https://youtube.com/zedcentury' },
    ]
  },
]
</script>

<h2 style="text-align: center">Our team</h2>

<VPTeamMembers size="small" :members="members" />
