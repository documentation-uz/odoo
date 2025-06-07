# Down payments

A down payment is an initial, up-front payment made during the
confirmation of a sales transaction. Down payments reduce the risk for
both parties (the seller and the buyer) as they indicate a mutual
commitment to complete the sales transaction.

With a down payment, the buyer pays a portion of the total amount owed
while agreeing to pay the remaining amount at a later date. In turn, the
seller provides goods or services to the buyer upon or after accepting
the down payment, trusting that the remaining amount will be paid later
on.

In the Odoo **Sales** app, down payments can be customized to fit the
needs of each individual sales transaction.

## Create invoices

When a sales order is confirmed, the option to create an invoice becomes
available, via the `Create Invoice`
button. When clicked, a `Create invoice(s)` pop-up appears.

![Create invoices pop-up form that appears in Odoo Sales.](down_payment/create-invoices-popup-form.png)

::: tip

Invoices are automatically created as drafts, so they can be reviewed
before validation.
::::

On the `Create invoices` pop-up,
there are 3 options to choose from in the
`Create Invoice` field:

- `Regular invoice`
- `Down payment (percentage)`
- `Down payment (fixed amount)`

## Initial down payment request

On the `Create invoice(s)` pop-up
window, the down payment options are:

- `Down payment (percentage)`
- `Down payment (fixed amount)`

Select the desired down payment option, then designate the desired
amount, either as a percentage or a fixed amount, in the
`Down Payment Amount` field.

Once all fields are filled in, click the
`Create Draft` button. Upon clicking
this button, Odoo reveals the `Customer Invoice Draft`.

::: warning

If an `Invalid Operation` error
appears, double-check that the
`invoicing policy ` is
configured correctly. In some cases, for example, the invoicing policy
is configured to require delivery before invoicing.
::::

In the `Invoice Lines` tab of the
`Customer Invoice Draft`, the down
payment that was just configured in the
`Create invoices` pop-up form appears
as a `Product`.

## Example: request 50% down payment 

::: tip

The following example involves a 50% amount down payment on a product
(`Cabinet with
Doors`) with
`Ordered quantities` as the
`Invoicing Policy`.

![Cabinet with doors product form showcasing various details and fields.](down_payment/cabinet-product-details.png)
::::


First, navigate to `Sales app ‣ New`, and add a `Customer` to the quotation.

Then, click `Add a product` in the
`Order Lines` tab, and select the
`Cabinet with Doors` product.

When the order is confirmed (via the `Confirm` button), the quotation turns into a sales order. Once
this occurs, create and view the invoice by clicking
`Create Invoice`.

![Cabinet with doors sales order that\'s been confirmed in the Odoo Sales application.](down_payment/cabinet-sales-orders-confirmed.png)

Next, on the `Create invoices` pop-up
window that appears, select `Down payment
(percentage)`, and type
[50] in the `Down Payment Amount` field.

::: tip

The `Income Account` attached to the
`Down payment` product can be
changed.

For more information, check out the documentation on
`income account modification on down
payments `.

A `Down payment Account` can also be
set on a product category. If set, this account is prioritized.
::::

Lastly, click `Create Draft Invoice`
to create and view the invoice draft.

Clicking `Create Draft Invoice`
reveals the draft invoice, which includes the down payment as a
`Product` in the
`Invoice Lines` tab.

From there, the invoice can be confirmed and posted by clicking
`Confirm`. Confirming the invoice
changes the status from `Draft` to
`Posted`. It also reveals a new
series of buttons at the top of the page.

![A sample draft invoice with down payment mentioned in Odoo Sales.](down_payment/draft-invoice-sample.png)

From those buttons, the payment can be registered by clicking
`Register Payment`.

![Showcase of the Register Payment button on a confirmed customer invoice.](down_payment/register-payment-button.png)

Doing so reveals a `Register Payment`
pop-up form, which is auto-populated with the necessary information.
Confirm the information provided is correct, and make any necessary
adjustments. When ready, click the `Create Payment` button.

![Showcase of the Register Payment pop-up window with create payment button.](down_payment/register-payment-pop-up-window.png)

After clicking `Create Payment`, Odoo
reveals the customer invoice, now with a green
`In Payment` banner in the
upper-right corner.

![Customer Invoice with a green In Payment banner located in the upper-right corner.](down_payment/customer-invoice-green-payment-banner.png)

Now, when the customer wants to pay the remaining amount of the order,
another invoice must be created. To do that, return to the sales order,
via the breadcrumb links.

Back on the sales order, a new `Down Payments` section is present in the `Order
Lines` tab, along with the down
payment that was just invoiced and posted.

![The down payments section in the order lines tab of a sales order.](down_payment/down-payments-section-order-lines.png)

Next, click the `Create Invoice`
button.

On the `Create invoices` pop-up
window that appears, there are two new fields:
`Already invoiced` and
`Amount to invoice`.

![The deduct down payment option on the create invoices pop up in Odoo Sales.](down_payment/create-invoices-pop-up-already-invoiced.png)

If the remaining amount is ready to be paid, select the
`Regular Invoice` option. Odoo will
create an invoice for the exact amount needed to complete the total
payment, as indicated in the `Amount to invoice` field.

Once ready, click `Create Draft Invoice`.

Doing so reveals another `Customer Invoice Draft` page, listing *all* the invoices for that specific
sales order in the `Invoice Lines`
tab. Each invoice line item displays all the necessary information
related to each invoice.

To complete the flow, click `Confirm`, which changes the status of the invoice from
`Draft` to `Posted`. Then, click `Register Payment`.

Once again, the `Register Payment`
appears, with all fields auto-populated with the necessary information,
including the remaining amount left to be paid on the order.

![The second register payment pop-up form in Odoo sales.](down_payment/second-register-payment-popup.png)

After confirming that information, click
`Create Payment`. Doing so reveals
the final `Customer Invoice` with a
green `In Payment` banner in the
upper-right corner. Also, both down payments are present in the
`Invoice Lines` tab.

![The second down payment invoice with in payment banner in Odoo Sales.](down_payment/second-down-payment-in-payment-invoice.png)

At this point, the flow is now complete.

::: tip

This flow is also possible with the `Fixed amount` down payment option.
::::

::: warning

If a down payment is used with a product that has a
`Delivered quantities` invoicing
policy, and the cost of the product *exceeds* the 50% down payment (as
in most cases), a regular invoice is created.

However, for products that cost *less* than the 50% down payment, the
down payments will **not** be able to be deducted when it comes time to
invoice the customer.

This is because the product(s) would have to be delivered *before*
creating the final invoice due to Odoo not allowing negative totals for
invoices.

If nothing has been delivered, a `Credit Note` is created, which cancels the draft invoice that was
created after the down payment.

To utilize the `Credit Note` option,
the *Inventory* application must be installed, in order to confirm the
delivery. Otherwise, the delivered quantity can be entered manually
directly on the sales order.
::::

## Example: request 100% down payment 

The process of requesting a 100% down payment is similar to the process
of setting up a `50%
down payment `, but with fewer steps.

::: tip

A 100% down payment is **not** the same as a full payment of the sales
order.

A sales order paid through the regular invoice process will not allow
any additional invoices to be generated, and **will not** display the
*Create Invoice* button on the Sales Order.

Following this example **will** cause the *Create Invoice* button to be
displayed on the Sales Order. This is because Odoo expects another
invoice to be created after the down payment to complete payment of the
sales order.
::::

The *Solar Panel Installation* product is being used in this example.

To configure a 100% down payment, begin by navigating to
`Sales app ‣ New`, and add a
`Customer` to the quote.

Next, click `Add a product` in the
`Order Lines` tab, and select the
[Solar Panel Installation] product.

Upon clicking the `Confirm` button,
the quotation turns into a sales order. At that point, an invoice can
now be created by clicking `Create Invoice` in the top-left corner.

On the `Create invoices` pop-up
window that appears, select `Down payment
(percentage)`, and type
[100] in the `Down Payment Amount` field.

![The Down payment (percentage) option selected with 100% set as the Down Payment.](down_payment/100p-down-payment-percentage.png)

Next, click `Create Draft Invoice` to
create an invoice draft. This will also bring the draft invoice into
view, which includes the `Down payment` as a `Product` in
the `Invoice Lines` tab.

The invoice can now be confirmed and posted by clicking
`Confirm`. Confirming the invoice
changes the status from `Draft` to
`Posted`. It also reveals a new
series of buttons at the top of the page.

The payment can be registered by clicking the
`Register Payment` button.

Doing so reveals a `Register Payment`
pop-up form, which is auto-populated with the necessary information.
Confirm the information provided is correct and make any necessary
adjustments. When ready, click the `Create Payment` button.

After clicking `Create Payment`, Odoo
reveals the customer invoice, now with a green
`In Payment` banner in the
upper-right corner.

![Customer Invoice with a green In Payment banner located in the upper-right corner.](down_payment/100p-invoice.png)

The process is now complete, and the 100% down payment has been
successfully applied.

## Income account modification on down payments 

To change or adjust the income account attached to the
`Down Payment` product page, the
*Accounting* app **must** be installed.

Navigate to the `Products` page
(`Sales app ‣ Products ‣ Products`), search for the [Down Payment]
product in the search bar, and select it to reveal the product detail
page.

With the *Accounting* app installed, the `Accounting` tab becomes available on the product page.

In the `Accounting` tab, the income
account can be changed in the `Income
Account` field, located in the
`Receivables` section.

![How to modify the income account link to down payments.](down_payment/income-account.png)

