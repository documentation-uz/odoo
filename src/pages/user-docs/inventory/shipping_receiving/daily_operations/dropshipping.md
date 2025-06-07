# Dropshipping

Dropshipping is an order fulfillment strategy that allows sellers to
have items shipped directly from suppliers to customers. Normally, a
seller purchases a product from a supplier, stores it in their
inventory, and ships it to the end customer once an order is placed.
With dropshipping, the supplier is responsible for storing and shipping
the item. This benefits the seller by reducing inventory costs,
including the price of operating warehouses.

## Configure products to be dropshipped

To use dropshipping as a fulfillment strategy, navigate to the
`Purchase` app and select
`Configuration ‣ Settings`.
Under the `Logistics` heading, click
the `Dropshipping` checkbox, and
`Save` to finish.

Next, go to the `Sales` app,
click `Products ‣ Products`
and choose an existing product or select `Create` to configure a new one. On the
`Product` page, make sure that the
`Can be Sold` and
`Can be Purchased` checkboxes are
enabled.

![Enable the \"Can be Sold\" and \"Can be Purchased\" checkboxes on the product form.](dropshipping/sold-purchased-checkboxes.png)

Click on the `Purchase` tab and
specify a vendor and the price that they sell the product for. Multiple
vendors can be added, but the vendor at the top of the list will be the
one automatically selected for purchase orders.

![The product form with a vendor specified.](dropshipping/product-vendor-config.png)

Finally, select the `Inventory` tab
and enable the `Dropship` checkbox in
the `Routes` section.

![Enable the Dropship option in the product inventory tab.](dropshipping/enable-dropship-route.png)

::: tip

While it is not necessary to enable the `Buy` route in addition to the `Dropship` route, enabling both provides the option of
dropshipping the product or purchasing it directly.
::::

## Fulfill orders using dropshipping

When a sales order is created for a dropshipped product, an associated
request for quotation (RfQ) is automatically generated to purchase the
product from the vendor. Sales orders can be viewed in the
`Sales` app by selecting
`Orders ‣ Orders`. Click the
`Purchase` smart button at the top
right of a sales order to view the associated
`RFQ (Request for Quotation)`.

![A dropship sales order with the Purchase smart button in the top right corner.](dropshipping/dropship-sales-order.png)

Once the `RFQ (Request for Quotation)` is
confirmed, it becomes a purchase order, and a dropship receipt is
created and linked to it. The receipt can be viewed by clicking the
`Dropship` smart button in the
top-right corner of the purchase order form.

![A dropship purchase order with the Receipt smart button in the top right corner.](dropshipping/dropship-purchase-order.png)

The dropship receipt displays `Partners/Vendors` in the `Source Location` field, and `Partners/Customers` in the `Destination Location` field. Upon delivery of the product to the customer,
click on the `Validate` button at the
top-left of the dropship receipt to confirm the delivered quantity.

![Validate the dropship receipt after delivery.](dropshipping/validate-dropship-receipt.png)

To view all dropship orders, simply navigate to the
`Inventory`
`Overview` dashboard and click the
teal `# TO PROCESS` button on the
`Dropship` card.

![Click the green button on the Dropship card to view all dropship orders.](dropshipping/view-all-dropship-orders.png)
