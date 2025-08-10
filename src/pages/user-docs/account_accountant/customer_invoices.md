# Customer invoices

A customer invoice is a document issued by a company for products and/or
services sold to a customer. It records receivables as they are sent to
customers. Customer invoices can include amounts due for the goods
and/or services provided, applicable sales taxes, shipping and handling
fees, and other charges. Odoo supports multiple invoicing and payment
workflows.


From draft invoice to profit and loss report, the process involves
several steps once the goods (or services) have been ordered/shipped (or
rendered) to a customer, depending on the invoicing policy:

- `accounting/invoice/creation`
- `accounting/invoice/confirmation`
- `accounting/invoice/sending`
- `accounting/invoice/paymentandreconciliation`
- `accounting/invoice/followup`
- `accounting/invoice/reporting`

## Invoice creation 

Draft invoices can be created directly from documents like sales orders
or purchase orders or manually from the
`Customer Invoices` journal in the
`Accounting Dashboard`.

An invoice must include the required information to enable the customer
to pay promptly for their goods and services. Make sure the following
fields are appropriately completed:

- `Customer`: When a customer is
  selected, Odoo automatically pulls information from the customer
  record like the invoice address,
  `preferred payment terms `,
  `fiscal positions `, receivable account, and more onto the invoice. To change
  these values for this specific invoice, edit them directly on the
  invoice. To change them for future invoices, change the values on the
  contact record.
- `Invoice Date`: If not set
  manually, this field is automatically set as the current date upon
  confirmation.
- `Due Date` or
  `payment terms `: To specify when the customer has to pay the invoice.
- `Journal`: Automatically set and
  can be changed if needed.
- `Currency `.
  If the invoice\'s currency differs from the company\'s currency, the
  currency exchange rate is automatically displayed.

In the `Invoice Lines` tab:

- `Product`: Click
  `Add a line`, then search for and
  select the product.
- `Quantity`
- `Price`
- `Taxes ` (if applicable)

To access the product catalog and view all items in an organized
display, click `Catalog
`. When the products and quantities are selected, click
`Back to Invoice` to return to the
invoice; the selected catalog items will appear in the invoice lines.

::: tip

To display the total amount of the invoice in words, go to
`Accounting ‣
Configuration ‣ Settings` and
activate the `Total amount of invoice in letters` option.
::::

The `Journal Items` tab displays the
accounting entries created. Additional invoice information such as the
`Customer Reference`,
`Payment Reference`, `Fiscal
Positions `,
`Incoterms `,
and more can be added or modified in the `Other Info` tab.

::: tip

Odoo initially creates invoices in `Draft` status. Draft invoices have no accounting impact until
they are `confirmed `.
::::


## Invoice confirmation 

Click `Confirm` when the invoice is
completed. The invoice\'s status changes to `Posted`, and a journal entry is generated based on the invoice
configuration. On confirmation, Odoo assigns each invoice a unique
number from a defined `sequence
`.

::: tip

\- Once confirmed, an invoice can no longer be updated. Click
`Reset to draft` if changes are
needed. - If required, invoices and other journal entries can be locked
once posted using the
`Secure posted entries with hash ` feature.
::::

## Invoice sending 

To set a preferred `Invoice sending`
method for a customer, go to
`Accounting ‣ Customers ‣ Customers` and select the customer. In the
`Accounting` tab of the contact form,
select the preferred `Invoice sending` method in the `Customer Invoices` section.

::: tip

Sending letters in Odoo requires
`In-App Purchase (IAP) ` credit or tokens.
::::

To send the invoice to the customer, navigate back to the invoice record
and follow these steps:

1.  Click `Print & Send`.

2.  If the
    `default invoice layout ` has not been customized yet, a
    `Configure your document layout`
    pop-up window appears. Configure the layout and click
    `Continue`.

    ::: tip
     seealso
\- `payments` -
`bank/reconciliation`
:::

## Payment follow-up 

Odoo\'s `follow-up actions ` help companies follow up on customer invoices. Different
actions can be set up to remind customers to pay their outstanding
invoices, depending on how much the customer is overdue. These actions
are bundled into follow-up levels that trigger when an invoice is
overdue by a certain number of days. If there are multiple overdue
invoices for the same customer, the actions are performed on the most
overdue invoice.

## Reporting 

### Partner reports 

#### Partner Ledger 

The `Partner Ledger` report shows the
balance of customers and suppliers. To access it, go to
`Accounting ‣ Reporting ‣ Partner Ledger`.

#### Aged Receivable 

To review outstanding customer invoices and their related due dates, use
the `Aged Receivable
`
report. To access it, go to `Accounting ‣
Reporting ‣ Aged Receivable`.

#### Aged Payable 

To review outstanding vendor bills and their related due dates, use the
`Aged Payable
`
report. To access it, go to `Accounting ‣
Reporting ‣ Aged Payable`.

### Profit and Loss 

The
`Profit and Loss ` statement shows details of income and expenses.

### Balance sheet 

The
`Balance Sheet ` summarizes the company\'s assets, liabilities, and equity at
a specific time.

::: 
customer_invoices/overview customer_invoices/customer_addresses
customer_invoices/payment_terms customer_invoices/terms_conditions
customer_invoices/cash_discounts customer_invoices/credit_notes
customer_invoices/cash_rounding customer_invoices/deferred_revenues
customer_invoices/electronic_invoicing customer_invoices/sequence
customer_invoices/snailmail customer_invoices/epc_qr_code
customer_invoices/incoterms
:::
