# Dropship to subcontractor

In manufacturing, subcontracting is the process of a company engaging a
third-party manufacturer, or subcontractor, to manufacture products that
are then sold by the contracting company.

In Odoo, the *Dropship Subcontractor on Order* route is used to purchase
the necessary components for a subcontracted product from the vendor,
and have them delivered directly to the subcontractor, each time a
purchase order (PO) for that product is confirmed.

The subcontractor then uses the components to manufacture the desired
product, before shipping it back to the contracting company.

::: warning

It is necessary to understand the differences between the *Dropship* and
*Dropship Subcontractor on Order* routes. While both routes involve
dropshipping, they are used for different purposes.

The *Dropship* route is used to purchase products from a vendor, and
have them shipped directly to the end customer.

The *Dropship Subcontractor on Order* route is used to purchase
components from a vendor, and have them shipped directly to a
subcontractor. By default, finished products are then sent from the
subcontractor back to the contracting company.

However, it is possible to combine both the *Dropship* and *Dropship
Subcontractor on Order* routes so they are used for the same product. In
this workflow, components are dropshipped to the subcontractor, who then
ships the finished product directly to the end customer.

This can be achieved by following steps one through five in the
`workflow section
` of this doc.
::::

## Configuration

To use the *Dropship Subcontractor on Order* route, navigate to
`Manufacturing app
‣ Configuration ‣ Settings`,
and enable the checkbox next to `Subcontracting`, under the `Operations` heading.

Once the *Subcontracting* setting is enabled, it is also necessary to
properly configure the subcontracted product, the product\'s
`BoM (Bill of Materials)`, and the
components listed on the `BoM (Bill of Materials)`.

### Configure product

To configure a product for the *Dropship Subcontractor on Order* route,
navigate to `Inventory app ‣ Products ‣ Products`, and select a product, or create a new one by
clicking `New`.

Select the `Purchase` tab, and add
the product\'s subcontractor as a vendor by clicking
`Add a line`, selecting the
subcontractor in the `Vendor`
drop-down menu, and entering a price in the `Price` field.

Then, click on the `Inventory` tab to
configure a route that determines what happens to the finished product,
once it has been manufactured by the subcontractor.

If the finished product is shipped back to the contracting company, make
sure that the `Buy` route is
selected. In addition, select the
`Replenish on Order (MTO)` route to
automatically create a `PO (Purchase Order)` for the product upon confirmation of a
`SO (Sales Order)`, unless there is
enough stock on-hand to fulfill the `SO (Sales Order)`.

If the finished product is shipped directly to the customer by the
subcontractor, make sure that only the `Dropship` route is selected.

### Configure bill of materials

To configure a `BoM (Bill of Materials)`
for the *Dropship Subcontractor on Order* route, click the `Bill of
Materials` smart button on the
product\'s page, and select the
`BoM (Bill of Materials)`.

Alternatively, navigate to
`Manufacturing app ‣ Products ‣ Bills of Materials`, and select the
`BoM (Bill of Materials)` for the
subcontracted product.


In the `BoM Type` field, select the
`Subcontracting` option. Then, add
one or more subcontractors in the `Subcontractors` field that appears below.

![The \"BoM Type\" field on a BoM, configured to manufacture the product using subcontracting.](subcontracting_dropship/bom-type.png)

Finally, make sure that all necessary components are specified on the
`Components` tab. To add a new
component, click `Add a line`, select
the component in the `Component`
drop-down menu, and specify the required quantity in the
`Quantity` field.

### Configure Components

To configure components for the *Dropship Subcontractor on Order* route,
navigate to each component from the
`BoM (Bill of Materials)` by selecting
the component\'s name in the `Components` tab, and clicking the
`➡️ (right arrow)` button to the
right of the name.

Alternatively, navigate to each component by going to
`Inventory app ‣ Products ‣
Products`, and selecting the
component.

On the component product form, select the `Purchase` tab, and add a vendor by clicking
`Add a line`, selecting the vendor in
the `Vendor` field, and adding the
price they sell the product for in the `Price` field. This is the vendor that sends components to the
subcontractor, once they are purchased.

Then, click on the `Inventory` tab
and select the `Dropship Subcontractor on
Order` route in the
`Routes` section.

Repeat the process for every component that must be dropshipped to the
subcontractor.

## Dropship subcontractor on order workflow 

The dropship subcontractor on order workflow consists of up to six
steps:

1.  Create a sales order (SO) for the subcontracted product; doing so
    creates a *subcontractor* `PO (Purchase Order)` to purchase the product from the subcontractor.
2.  Confirm the `PO (Purchase Order)`
    created in the previous step, or create a new
    `PO (Purchase Order)`; doing so
    creates a request for quotation (RfQ) to purchase the components
    from the vendor, as well as a receipt order or a dropship order.
3.  Confirm the `RfQ (Request for Quotation)` to turn it into a second
    `PO (Purchase Order)` (*vendor*
    `PO (Purchase Order)`); doing so
    creates a *Dropship Subcontractor* order.
4.  Process the *Dropship Subcontractor* order once the vendor has sent
    the components to the subcontractor.
5.  Process the receipt once the subcontractor has finished
    manufacturing the subcontracted product, and shipped it back to the
    contracting company **OR** process the dropship order to ship the
    product directly to the end customer.
6.  If the workflow was started by creating an
    `SO (Sales Order)`, and the finished
    product is not dropshipped to the end customer, process the delivery
    order once the product has been shipped to the customer.

The specific number of steps depends on the reason that the
subcontracted product is being purchased from the subcontractor.

If the reason is to fulfill a specific customer order, the process
starts with creating an SO, and ends with delivering the product to the
customer, or having the subcontractor dropship it to them.

If the reason is to increase quantity of stock on-hand, the process
starts with creating a PO, and ends with receiving the product into
inventory.

### Create an SO

It is only necessary to complete this step if the product is being
purchased from the subcontractor to fulfill a customer need. If the
product is being purchased to increase the quantity of stock on-hand,
move on to the next step.

To create a new `SO (Sales Order)`,
navigate to `Sales app ‣ Orders ‣ Orders`, and click `New`.

Select the customer in the `Customer`
drop-down menu. Then, click `Add a
product` on the
`Order Lines` tab, select the product
in the `Product` drop-down menu, and
enter a quantity in the `Quantity`
field.

Click `Confirm` to confirm the
`SO (Sales Order)`, at which point a
`Purchase` smart button appears at
the top of the page. This is the *subcontractor*
`PO (Purchase Order)`, or the
`PO (Purchase Order)` created to purchase
the subcontracted product from the subcontractor.

::: tip

An `SO (Sales Order)` for the product
only creates a *subcontractor* `PO (Purchase Order)` if the *Replenish on Order (MTO)* route is enabled on the
product\'s page, **and** there is no stock of the product on-hand.

If there is stock on-hand, confirming an
`SO (Sales Order)` for the product will
instead create a delivery order, because Odoo assumes that the
`SO (Sales Order)` is fulfilled using the
stock in the warehouse.

This is not the case for subcontracted products that are dropshipped to
the end customer. In that case, a *subcontractor*
`PO (Purchase Order)` is **always**
created, even if there is stock on-hand.
::::

### Process subcontractor PO

If a *subcontractor* `PO (Purchase Order)` was not created in the previous step, do so now by
navigating to
`Purchase app ‣ Orders ‣ Purchase Orders`, and clicking `New`.

Begin filling out the `PO (Purchase Order)` by selecting a subcontractor from the
`Vendor` drop-down menu.

In the `Products` tab, click
`Add a product` to create a new
product line. Select a product produced by the subcontractor in the
`Product` field, and enter the
quantity in the `Quantity` field.

Finally, click `Confirm Order` to
confirm the *subcontractor* `PO (Purchase Order)`.

When a `PO (Purchase Order)` is confirmed
for a product that requires dropshipping components to a subcontractor,
a receipt or dropship order is automatically created, and can be
accessed from the corresponding `Receipt` or `Dropship` smart
button that appears at the top of the
`PO (Purchase Order)`.

![A subcontractor PO for a \*Dropship Subcontractor on Order\* product, with a Receipt smart
button at the top of the page.](subcontracting_dropship/subcontractor-po.png)

In addition, an `RfQ (Request for Quotation)` is created for the components that are purchased from the
vendor and sent to the subcontractor. However, the
`RfQ (Request for Quotation)` **IS NOT**
automatically linked to the *subcontractor*
`PO (Purchase Order)`.

Once the `RfQ (Request for Quotation)` is
confirmed and becomes a *vendor* `PO (Purchase Order)`, a *Dropship Subcontractor* order is created. This order is
linked to both the *vendor* `PO (Purchase Order)` and the *subcontractor*
`PO (Purchase Order)`.

### Confirm vendor RfQ

To access the `RfQ (Request for Quotation)` created by confirming the *subcontractor*
`PO (Purchase Order)`, navigate to
`Purchase app ‣ Orders ‣ Requests for Quotation`. Select the
`RfQ (Request for Quotation)` that lists
the correct vendor in the `Vendor`
field, and the reference number of the receipt that was created after
confirming *subcontractor* `PO (Purchase Order)`, in the `Source Document` field.

On the `RfQ (Request for Quotation)`, the
`Deliver To` field reads
`Dropship Subcontractor`, and the
`Dropship Address` field shows the
name of the subcontractor to whom components are being dropshipped.

Click `Confirm Order` to turn the
`RfQ (Request for Quotation)` into a
*vendor* `PO (Purchase Order)`, and
confirm the purchase of components from the vendor. After doing so, a
`Dropship` smart button appears at
the top of the *vendor* `PO (Purchase Order)`, and a `Resupply` smart
button appears at the top of the *subcontractor*
`PO (Purchase Order)`.

![A vendor PO for the components of a \*Dropship Subcontractor on Order\* product, with a
Dropship smart button at the top of the page.](subcontracting_dropship/vendor-po.png)

### Process Dropship Subcontractor order

Once the components have been delivered to the subcontractor, navigate
to `Purchase
app ‣ Orders ‣ Purchase Orders`, and select the *vendor*
`PO (Purchase Order)` or the
*subcontractor* `PO (Purchase Order)`.
Then, click the `Dropship` smart
button or the `Resupply` smart
button, respectively.

Clicking either button opens the *Dropship Subcontractor* order. Click
the `Validate` button at the top of
the order to confirm that the subcontractor has received the components.

### Process receipt or dropship order

Once the subcontractor has manufactured the finished product, navigate
to `Purchase
app ‣ Orders ‣ Purchase Orders`, and select the *subcontractor*
`PO (Purchase Order)`.

If the subcontracted product should be received into inventory, once the
product arrives, click the `Receive Products` button at the top of the *subcontractor*
`PO (Purchase Order)` to open the
receipt. Then, click `Validate` at
the top of the receipt to register the product into inventory.

Alternatively, select the `Receipt`
smart button at the top of the *subcontractor*
`PO (Purchase Order)`, and click
`Validate` at the top of the receipt.

If the subcontracted product should be dropshipped, select the
`Dropship` button at the top of the
page to open the dropship order, and click `Validate` once the subcontractor has sent the product to the
customer.

### Process delivery order

If the subcontracting workflow was started by a customer
`SO (Sales Order)`, and the finished
product was **not** dropshipped to the customer, but rather delivered to
the contracting company, it is necessary to ship the product to the
customer, and process the delivery order.

Once the product has been shipped to the customer, navigate to the
`Sales` app, and select the
`SO (Sales Order)`. Select the
`Delivery` smart button at the top of
the page to open the delivery order, and click
`Validate` to confirm that the
product has been shipped to the customer.
