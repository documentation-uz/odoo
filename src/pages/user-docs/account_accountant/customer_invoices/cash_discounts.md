# Cash discounts and tax reduction

**Cash discounts** are reductions in the amount a customer must pay for
goods or services offered as an incentive for paying their invoice
promptly. These discounts are typically a percentage of the total
invoice amount and are applied if the customer pays within a specified
time. Cash discounts can help a company maintain a steady cash flow.

::: example
You issue a €100 invoice on the 1st of January. The full payment is due
within 30 days, and you also offer a 2% discount if your customer pays
you within seven days.

The customer can pay €98 up to the 8th of January. After that date, they
would have to pay €100 by the 31st of January.
:::

A `tax reduction ` can also be applied depending on the country or region.


## Configuration 

To grant cash discounts to customers, you must first verify the
`gain and loss accounts
`.
Then, configure `payment terms
` and add a
cash discount by checking the `Early Discount` checkbox and filling in the discount percentage,
discount days, and `tax
reduction `
fields.

### Cash discount gain/loss accounts 

With a cash discount, the amount you earn depends on whether the
customer benefits from the cash discount or not. This inevitably leads
to gains and losses, which are recorded on default accounts.

To modify these accounts, go to
`Accounting ‣ Configuration ‣ Settings`, and, in the `Default Accounts` section, select the accounts you want to use for the
`Cash Discount Gain account` and
`Cash Discount Loss account`.

### Payment terms 

Cash discounts are defined on
`payment terms `. Configure
them to your liking by going to
`Accounting ‣ Configuration ‣ Payment Terms`, and make sure to fill out the discount
percentage, discount days, and
`tax reduction ` fields.

![Configuration of payment terms named \"2/7 Net 30\". The field \"Description on Invoices\"
reads: \"Payment terms: 30 Days, 2% Early Payment Discount under 7 days\".](cash_discounts/payment-terms.png)

### Tax reductions 

Depending on the country or region, the base amount used to compute the
tax can vary, which can lead to a **tax reduction**. Since tax
reductions are set on individual payment terms, each term can use a
specific tax reduction.

To configure how the tax reduction is applied, go to a payment term with
the `Early
Discount` checkbox enabled, and
select one of the three following options:

- 

  Always (upon invoice)

  :   The tax is always reduced. The base amount used to compute the tax
      is the discounted amount, whether the customer benefits from the
      discount or not.

- 

  On early payment

  :   The tax is reduced only if the customer pays early. The base
      amount used to compute the tax is the same as the sale: if the
      customer benefits from the reduction, then the tax is reduced.
      This means that, depending on the customer, the tax amount can
      vary after the invoice is issued.

- 

  Never

  :   The tax is never reduced. The base amount used to compute the tax
      is the full amount, whether the customer benefits from the
      discount or not.

::::::: example
You issue a €100 invoice (tax-excluded) on the 1st of January, with a
21% tax rate. The full payment is due within 30 days, and you also offer
a 2% discount if your customer pays you within seven days.

:::::: tabs
::: tab
Always (upon invoice)

  Due date          Total amount due   Computation
  ----------------- ------------------ ---------------------
  8th of January    €118.58            €98 + (21% of €98)
  31st of January   €120.58            €100 + (21% of €98)
:::

::: tab
On early payment

  Due date          Total amount due   Computation
  ----------------- ------------------ ----------------------
  8th of January    €118.58            €98 + (21% of €98)
  31st of January   €121.00            €100 + (21% of €100)
:::

::: tab
Never

  Due date          Total amount due   Computation
  ----------------- ------------------ ----------------------
  8th of January    €119.00            €98 + (21% of €100)
  31st of January   €121.00            €100 + (21% of €100)
:::
::::::
:::::::

::: tip

\- `Tax grids `,
which are used for the tax report, are correctly computed according to
the
`type of tax reduction ` you configured. - The **type of cash discount tax
reduction** may be correctly pre-configured, depending on your
`fiscal localization package `.
::::

## Apply a cash discount to a customer invoice 

On a customer invoice, apply a cash discount by selecting the
`payment terms you created
`. Odoo
automatically computes the correct amounts, tax amounts, due dates, and
accounting records.

Under the `Journal Items` tab, you
can display the discount details by clicking on the \"toggle\" button
and adding the `Discount Date` and
`Discount Amount` columns.

![An invoice of €100.00 with \"2/7 Net 30\" selected as payment terms. The \"Journal Items\" tab
is open, and the \"Discount Date\" and \"Discount Amount\" columns are displayed.](cash_discounts/invoice-journal-entry.png)

The discount amount and due date are also displayed on the generated
invoice report sent to the customer if the
`Show installment dates` option is
checked on the payment terms.

![An invoice of €100.00 with the following text added to the terms and conditions: \"30
Days, 2% Early Payment Discount under 7 days. 118.58 € due if paid before 01/08/2023.\"](cash_discounts/invoice-print.png)

### Payment reconciliation

When you record a `payment `
or `reconcile your bank transactions
`, Odoo takes the
customer payment\'s date into account to determine if the customer can
benefit from the cash discount or not.

::: tip

If your customer pays the discount amount *after* the discount date, you
can always decide to mark the invoice as fully paid with a write-off or
as partially paid.
::::
