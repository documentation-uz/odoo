# Discounts

The *Discounts* feature allows users to decrease or increase the price
on item lines in a sales quotation or order. This is calculated as a
percentage of the products\' sales price.

To access discounts in the **Sales** app, navigate to
`Sales app ‣ Configuration
‣ Settings`. In the
`Pricing` section, tick the
`Discounts` checkbox, then click
`Save`.

After the setting has been activated, navigate to the desired quotation
by going to `Sales app ‣ Orders ‣ Quotations` at the top of the page. Once there, click on the
desired quote from the list.

## Discounts on product lines

In the `Order Lines` tab of the
quotation form, a new column heading appears labeled
`Disc.%`. This column is used to set
discounts on individual line items. Enter the desired discount for each
product line and the new price is automatically calculated in the
`Total` at the bottom of the page.

::: tip

A discount can also be added directly to a sales order in the same way.
Navigate to `Sales app ‣ Orders ‣ Orders`, click the desired sales order, and add the
discount to `Disc.%` field as
described above.
::::

![The Dis.% heading will now appear in Order Lines.](discounts/discount-on-sales-order.png)

::: tip

Positive values for `Disc.%` will
apply a *discount*, while negative values can be used to *increase* the
price.
::::

::: warning

Positive values, or price decreases, will be visible to the customer,
while negative values, or price increases, will *not* be visible to the
customer. Instead of a discount column, the negative discount will
change the product\'s unit price.
::::

## Discount button 

With the *Discounts* settings enabled, a `Discount` button appears at the bottom of sales orders.

![The discount button located at the bottom of a sales order form in the Odoo Sales app.](discounts/discount-button-sales-order.png)

Clicking the `Discount` button on a
sales order opens a pop-up window, where the
`Discount` percentage, and options
are configured:

- `On All Order Lines`: Add the
  specified discount percentage (configured in the
  `Discount` field of the pop-up
  window) on all existing order lines of the sales order.

- `Global Discount`: Add a discount
  product line to the order, which has the cumulative value equivalent
  to the specified discount percentage.

  ::: example
  A global discount of 10% is added in the last line of a sales order
  with a subtotal of \$4,200 by adding a discount line with a -\$420
  value (which is 10% of \$4,200).

  ![The sales order with the applied global discount option in the Odoo Sales application.](discounts/global-discount-option.png)
  :::

  ::: warning
  : note

It is more beneficial to add a `Fixed Amount` discount after **all** desired products have been added
to a sales order. If there are changes made to the sales order *after*
the discount is added, adjust the value on the
`Discount` line, or remove the line
and add the discount again, as needed.
::::
