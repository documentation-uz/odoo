import os.path

apps = [
    {
        "name": "Accounting",
        "technical_name": "account_accountant",
        "details": "Centralize employee information"
    },
    {
        "name": "Employees",
        "technical_name": "hr",
        "details": "Centralize employee information"
    },
    {
        "name": "Attendances",
        "technical_name": "hr_attendance",
        "details": "Track employee attendance"
    },
    {
        "name": "Payroll",
        "technical_name": "hr_payroll",
        "details": "Manage your employee payroll records"
    },
    {
        "name": "Time Off",
        "technical_name": "hr_holidays",
        "details": "Allocate PTOs and follow leaves requests"
    },
    {
        "name": "Recruitment",
        "technical_name": "hr_recruitment",
        "details": "Track your recruitment pipeline"
    },
    {
        "name": "Employee Contracts",
        "technical_name": "hr_contract",
        "details": "Employee Contracts"
    },
    {
        "name": "Appraisals",
        "technical_name": "hr_appraisal",
        "details": "Assess your employees"
    },
    {
        "name": "Employee Referral",
        "technical_name": "hr_referral",
        "details": "Let your employees share job positions and refer their friends"
    },
    {
        "name": "Skills Management",
        "technical_name": "hr_skills",
        "details": "Manage skills, knowledge and resume of your employees"
    }
]

BASE_DIR = "/Users/user/Documents/uic/projects/virtus_tricot/odoo-backend/src"

nav_text = ""
sidebar_text = ""
yaml_text = ""
for app in apps:
    yaml_text += f"""  - icon: <img src="https://download.odoocdn.com/icons/{app['technical_name']}/static/description/icon.svg"/>
    title: {app['name']}
    details: {app['details']}
    link: /user-docs/{app['technical_name']}/get-started/introduction
    linkText: Learn more
"""
    folder = f"{BASE_DIR}/frontend/{app['technical_name']}/get-started/introduction"
    if os.path.exists(folder):
        continue

    os.makedirs(folder)

    with open(f"{folder}/introduction.md", "w") as f:
        f.write(f"""# Introduction

Introduction of {app['name']}
""")
    with open(f"{folder}/installation.md", "w") as f:
        f.write(f"""# Installation

Installation of {app['name']}
""")

    nav_text += f"""{{
                        text: '{app['name']}',
                        link: '/user-docs/{app['technical_name']}/get-started/introduction',
                    }},
"""

    sidebar_text += f"""'/user-docs/{app['technical_name']}/': [
                {{
                    text: 'Get started',
                    items: [
                        {{text: 'Introduction', link: '/user-docs/{app['technical_name']}/get-started/introduction'}},
                        {{text: 'Installation', link: '/user-docs/{app['technical_name']}/get-started/installation'}}
                    ],
                    collapsed: false
                }}
            ],
"""

with open(f"{BASE_DIR}/yaml.text", "w") as f:
    f.write(yaml_text)

with open(f"{BASE_DIR}/nav.text", "w") as f:
    f.write(nav_text)

with open(f"{BASE_DIR}/sidebar.text", "w") as f:
    f.write(sidebar_text)
