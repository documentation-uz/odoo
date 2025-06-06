# Three-step delivery

Some companies process large amounts of deliveries every day, many of
which include multiple products or require special packaging. To make
this efficient, a packing step is needed before shipping out products.
For this, Odoo has a three step process for delivering goods.

In the default three-step delivery process, products that are part of a
delivery order are picked in the warehouse according to their removal
strategy, and brought to a packing zone. After the items have been
packed into the different shipments in the packing zone, they are
brought to an output location before being shipped. These steps can be
modified if they do not fit the needs of the business.

## Configuration

To change delivery settings from
`one step ` to
three steps, make sure the *Multi-Step Routes* option is enabled in
`Inventory app ‣ Configuration
‣ Settings ‣ Warehouse`.
Note that activating `Multi-Step Routes` will also activate *Storage Locations*.

![Activate multi-step routes and storage locations in inventory settings.](delivery_three_steps/delivery-three-steps-multi-step-routes.png)

Next, the warehouse needs to be configured for three step deliveries. To
do this, go to
`Inventory app ‣ Configuration ‣ Warehouses`, and click on the `warehouse` to edit. Then, select
`Pack goods, send goods in output and then
deliver (3 steps)` for
`Outgoing Shipments`.

![Set outgoing shipment option to deliver in three steps.](delivery_three_steps/delivery-three-steps-outgoing-shipments.png)

Activating three-step receipts and deliveries creates two new internal
locations: a *Packing Zone* (WH/Packing Zone), and *Output* (WH/Output).
To rename these locations, go to
`Inventory app ‣ Configuration ‣ Locations`, click on the `Location` to change, and update the name.

## Deliver in three steps (pick + pack + ship)

### Create a sales order

To create a new quote, go to `Sales app ‣ Create`, which reveals a blank quotation form. On the
blank quotation form, select a `Customer`, add a storable `Product`, and click `Confirm`.

A `Delivery` smart button appears in
the top right of the quotation form. Clicking it opens the picking order
to move the ordered product from [WH/Stock] to [WH/Packing
Zone].

![After confirming the sales order, the Delivery smart button appears showing three items
associated with it.](delivery_three_steps/delivery-three-steps-smart-button.png)

### Process a picking

The picking order will be created once the sales order is confirmed. To
view the picking, navigate to the `Inventory app`, and locate the `Pick` task card on the `Inventory Overview` dashboard.

Click the `# To Process` button,
which reveals the picking order generated from the previously confirmed
sales order.

Click on the picking to process. If the product is in stock, Odoo will
automatically reserve the product. Click `Validate` to mark the picking as done, and complete the transfer
to the `Packing Zone`.

![Picking order operation showing source location and destination location.](delivery_three_steps/delivery-three-steps-picking-order.png)

### Process a packing

After validating the picking, the packing order is ready to process.
Click back to the `Inventory Overview`, and locate the `Pack` task card on the dashboard.

Click the `# To Process` button (in
this case, `1 To Process`). This
reveals the packing order generated from the previously confirmed sales
order.

Click on the packing order associated with the sales order, then click
on `Validate` to complete the
packing.

![Packing order operation showing source location and destination location.](delivery_three_steps/delivery-three-steps-packing-order.png)

Once the packing order is validated, the product leaves the
`WH/Packing Zone` location and moves
to the `WH/Output` location. Then,
the status of the document will change to `Done`.

### Process a delivery

Once the packing order has been validated, the delivery order is ready
to process. Navigate back to the original sales order to process the
delivery by going to `Sales app`, and selecting the sales order created previously.

::: tip

Delivery orders can *also* be accessed by going to
`Inventory app ‣ Operations
‣ Deliveries`.
::::

The `Delivery` smart button now
indicates there are 3 transfers, instead of one. Clicking the
`Delivery` smart button shows the
three operations for this sales order: the picking, the packing, and the
delivery.

Click the delivery (WH/OUT) transfer to open the delivery order. Then,
click `Validate`.

![Click Validate on the delivery order to transfer the product from the output location to
the customer location.](delivery_three_steps/delivery-three-steps-delivery-order.png)

Once the delivery order is validated, the product leaves the
`WH/Output` location and moves to the
`Partners/Customers` location. Then,
the status of the document will change to `Done`.
