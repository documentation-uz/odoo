# Payment terms and installment plans

**Payment terms** specify all the conditions of a sale\'s payment to
help ensure customers pay their invoices correctly and on time.

Payment terms are generally defined on documents such as sales orders,
customer invoices, and vendor bills. Payment terms cover:

- The due date(s)
- Early payment discounts
- Any other conditions on the payment

An **installment plan** allows the customers to pay an invoice in parts,
with the amounts and payment dates defined beforehand by the seller.

::: example
Immediate Payment The full payment is due on the day of the invoice\'s
issuance. 15 Days (or Net 15) The full payment is due 15 days after the
invoice date. 21 MFI The full payment is due by the 21st of the month
following the invoice date. 30% Advance End of Following Month 30% is
due on the day of the invoice\'s issuance. The remaining balance is due
at the end of the following month. 2% 10, Net 30 EOM A 2%
`cash discount ` if the
payment is received within ten days. Otherwise, the full payment is due
at the end of the month following the invoice date.
:::

::: tip

\- Payment terms are not to be confused with `down payment invoices
`. If, for a specific order, you issue multiple invoices to
your customer, that is neither a payment term nor an installment plan
but an invoicing policy. - This page is about the *payment terms*
feature, not `terms & conditions
`, which can be used to
declare contractual obligations regarding content use, return policies,
and other policies surrounding the sale of goods and services.
::::


## Configuration 

To create new payment terms, follow these steps:

1.  Go to
    `Accounting ‣ Configuration ‣ Payment Terms` and click on `New`.

2.  Enter a name in the `Payment Terms` field. This field is the name displayed both
    internally and on sales orders.

3.  Tick the `Early Discount`
    checkbox and fill out the discount percentage, discount days, and
    `tax reduction ` fields to add a `cash discount
    `, if desired.

4.  In the `Due Terms` section, add a
    set of rules (terms) to define what needs to be paid and by which
    due date(s). Defining terms automatically calculates the payments\'
    due date(s). This is particularly helpful for managing **installment
    plans** (`payment terms with multiple
    terms`).

    To add a term, click on `Add a line`, define the discount\'s value and type in the
    `Due` fields, then fill out the
    `After` fields to determine the
    due date.

    ::: tip
    : tip

To instead specify a number of days *before the end of the month*, use a
negative value in the `After` field.
::::

To test that your payment terms are configured correctly, enter an
invoice date on the `Example` line to
generate the payments that would be due and their due dates using these
payment terms.

::: warning

Terms are computed in the order of their due dates.
::::

::: example
In the following example, 30% is due on the day of issuance, and the
remaining 70% is due at the end of the following month.

![Example of Payment Terms. The first line is the 30% due immediately. The second line is
the remaining 70% due at the end of the following month.](payment_terms/configuration.png)
:::

### End of the month buffer 

The `Days end of the month on the`
option allows users to add a buffer period so that an invoice registered
at the end of the month isn\'t due at the beginning of the month that
immediately follows.

When using this option, Odoo calculates the due date by taking the
invoice date, adding the integer in the `After` field, going to the end of the resulting month, and
then adding the integer from the
`Days on the next month` field.

::: example
For example, take two invoices, one dated 5 March and the other dated 28
March. Both use the same payment terms with a single
`Due Terms` line for 100% of the due
amount, due [5]
`Days end of the month on the`
[1].

For the invoice dated 5 March, the due date is computed as **1 April**
with the following calculations:

- 5 March + 5 days = 10 March
- 10 March + end of the month = 31 March
- 31 March + on the 1 = 1 April

For the invoice dated 28 March, the due date is computed as **1 May**
with the following calculations:

- 28 March + 5 days = 2 April
- 2 April + end of the month = 30 April
- 30 April + on the 1 = 1 May
:::

## Using payment terms 

Payment terms can be defined using the `Payment Terms` field on:

- **Contacts:** To automatically set default payment terms on a
  contact\'s new sales orders, invoices, and bills. This can be modified
  in the contact form, under the `Sales &
  Purchase` tab.
- **Quotations/Sales Orders:** To set specific payment terms
  automatically on all invoices generated from a quotation or sales
  order.

Payment terms can be defined using the `Due Date` field, with the `Terms` drop-down list on:

- **Customer invoices:** To set specific payment terms on an invoice.
- **Vendor bills:** To set specific payment terms on a bill.

::: tip

Setting payment terms on a vendor bill is mostly useful for managing
vendor terms with multiple installments or cash discounts. Otherwise,
manually setting the **due date** is enough. If payment terms are
already defined, empty the field to select a date.
::::

## Journal entries 

Invoices with specific payment terms generate different *journal
entries*, with one *journal item* for every computed *due date*.

This makes for easier
`follow-ups ` and
`reconciliation ` since Odoo takes each due date into account, rather than
just the balance due date. It also helps to get an accurate
`aged receivable report `.

::: 
.. image:: payment_terms/journal-entry.png
:::
