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
  - icon: <img src="https://download.odoocdn.com/icons/sale_management/static/description/icon.svg"/>
    title: Sales
    details: From quotations to invoices
    link: /user-docs/sales/sales_quotations
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr/static/description/icon.svg"/>
    title: Employees
    details: Centralize employee information
    link: /user-docs/hr/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_attendance/static/description/icon.svg"/>
    title: Attendances
    details: Track employee attendance
    link: /user-docs/hr_attendance/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_payroll/static/description/icon.svg"/>
    title: Payroll
    details: Manage your employee payroll records
    link: /user-docs/hr_payroll/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_holidays/static/description/icon.svg"/>
    title: Time Off
    details: Allocate PTOs and follow leaves requests
    link: /user-docs/hr_holidays/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_recruitment/static/description/icon.svg"/>
    title: Recruitment
    details: Track your recruitment pipeline
    link: /user-docs/hr_recruitment/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_contract/static/description/icon.svg"/>
    title: Employee Contracts
    details: Employee Contracts
    link: /user-docs/hr_contract/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_appraisal/static/description/icon.svg"/>
    title: Appraisals
    details: Assess your employees
    link: /user-docs/hr_appraisal/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_referral/static/description/icon.svg"/>
    title: Employee Referral
    details: Let your employees share job positions and refer their friends
    link: /user-docs/hr_referral/get-started/introduction
    linkText: Learn more
  - icon: <img src="https://download.odoocdn.com/icons/hr_skills/static/description/icon.svg"/>
    title: Skills Management
    details: Manage skills, knowledge and resume of your employees
    link: /user-docs/hr_skills/get-started/introduction
    linkText: Learn more
#  - icon: <img src="https://download.odoocdn.com/icons/contacts/static/description/icon.svg"/>
#    title: Contacts
#    details: Centralize your address book
#    link: /guide/
#    linkText: Learn more
#  - icon: <img src="https://download.odoocdn.com/icons/crm/static/description/icon.svg"/>
#    title: CRM
#    details: Track leads and close opportunities
#    link: /guide/
#    linkText: Learn more
#  - icon: <img src="https://download.odoocdn.com/icons/sale/static/description/icon.svg"/>
#    title: Sales
#    details: From quotations to invoices
#    link: /guide/
#    linkText: Learn more
#  - icon: <img src="https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg"/>
#    title: Point of Sale
#    details: User-friendly PoS interface for shops and restaurants
#    link: /guide/
#    linkText: Learn more
#  - icon: <img src="https://download.odoocdn.com/icons/mrp/static/description/icon.svg"/>
#    title: Manufacturing
#    details: Manufacturing Orders & BOMs
#    link: /user-docs/manufacturing/get-started/introduction
#    linkText: Learn more
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
