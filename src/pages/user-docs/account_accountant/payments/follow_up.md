# Follow-up on invoices

Follow-up messages can be sent to customers when payments are overdue.
Odoo helps identify late payments and allows scheduling and sending the
appropriate reminders using **follow-up actions** according to the
number of overdue days. Follow-ups can be sent through different
methods, including email, post, or SMS.


## Configuration 

To configure `Follow-up actions`, go
to `Accounting ‣ Configuration
‣ Follow-up Levels`. In the
`Follow-up Levels` list view, several
follow-up levels and actions are configured by default.

To modify a follow-up level, click on the record. From the form view,
edit the `Description` or adjust the
number of days before a reminder is sent. In the
`Notification` tab, select
`Actions` such as
`Send Email`, `Send
a Letter `,
and `Send SMS Message `.

::: tip

Sending letters or SMS messages in Odoo requires `In-App Purchase (IAP)
` credit or tokens.
::::

To use a pre-filled template when sending an email or letter, select a
`Content Template`. To modify it,
click the `oi-arrow-right`
`(internal link arrow)` icon next to
the `Content Template` field. If
enabled, SMS messages use a specific `Sms Template` field that can be modified by clicking the
`oi-arrow-right`
`(internal link arrow)` icon.

Other options can be enabled in the `Options` section within the specific follow-up level:

- Automate the reminder with the `Automatic` option.
- `Attach Invoices` that are overdue
  in the reminder.
- `Add followers` on the related
  customer to receive notifications about any email reply made on the
  reminder\'s email.

In the `Activity` tab, enable the
option to automatically schedule `activities
`
when the follow-up level is triggered. Select the
`Responsible` user and the
`Activity Type`, and enter a
`Summary`.

To add a new `Follow-up Level`, click
`New` and fill in the fields.

::: tip

Set a negative number of days to send a reminder before the invoice due
date.
::::

## Invoice follow-ups 

::: tip

Reconcile all bank transactions before starting the follow-up process to
avoid sending reminders for invoices that have already been paid.
::::

To view all overdue invoices, go to
`Accounting ‣ Customers ‣ Invoices`. In the `Invoices` list view, click into the search bar and filter on
`Overdue`.

### Follow-ups for one customer 

For a detailed overview of a customer\'s invoice follow-up status, go to
`Accounting
‣ Customers ‣ Customers`.
Open the customer\'s form and click the `Accounting` tab. In the `Invoice follow-ups` section, click on the different levels to view the
`Follow-up Status` of each level. If
actions are needed, click `Overdue
Invoices` to have a detailed list of
the overdue invoices.

Additional options can be set:

- `Reminders`: These are either
  `Automatic` or
  `Manual`.
- `Next reminder`: The date by which
  the next follow-up actions should be taken is automatically set when
  follow-ups are processed, but can be manually adjusted if needed.
- `Responsible`: The user who handles
  the follow-up actions.

To manually send a payment reminder to a customer, click
`Send` and select the actions in the
`Send and Print` window:

- `Print`
- `Email`
- `Sms`
- `By post`

Enable the `Attach Invoices` option
and change the `Content Template` if
needed. Then, click `Send` or
`Send & Print` to send the
`follow-up report
`.


::: tip

\- The contact information on the invoice or the contact form is used to
send the reminder. - The chatter keeps a full record of all follow-up
actions.
::::

### Follow-ups for all customers due for action 

After setting up the additional `follow-up
` options, review which customers have overdue invoices or
require follow-up. To do so, go to `Accounting ‣ Customers ‣
Customers`. In the
`Customers` kanban view, click the
search bar and filter by `Overdue Invoices` or `Requires Follow-up`.

To take follow-up actions for all relevant customers, switch to the list
view and select the customers requiring follow-up. Then, click
`fa-cog` `(Actions)` and select `Process Follow-ups` to send them the `follow-up report
`.

## Reports 

### Customer statement 

To get a comprehensive overview of a customer\'s account status, click
the `Customer
Statement` smart button on the
customer\'s form. This statement corresponds to the `Partner
Ledger ` report\'s portion specific to that customer.

To send it to the customer, click `Send`, change the `Email Template` if needed, and click `Print & Send`.

To view the customer statements for multiple customers at once, select
the customers from the `Customers`
list view, click `fa-cog`
`(Actions)`, and select
`Open Customer Statements`.

Click `PDF` or
`XLSX` to generate a PDF or XLSX
file, respectively.

### Follow-up report 

To get a complete overview of a customer\'s due invoices, separating
those that are due from those that are overdue, click the
`Customer Statement ` smart button on the customer\'s form. Then, click
`fa-book` `Report: Customer
Statement` and select
`Follow-Up Report`.

To view the follow-up report for all customers at once, go to
`Accounting ‣
Reporting ‣ Partner Ledger`.
Then, click `fa-book`
`Report:` and select
`Follow-Up Report`.

Click `PDF` or
`XLSX` to generate a PDF or XLSX
file, respectively.
