# Dropship subcontracting lead times

In Odoo, lead times are used to predict how long it takes to complete a
certain action. For example, a *delivery lead time* can be set for a
purchased product, which specifies the number of days it usually takes
for the product\'s vendor to deliver the product to the purchasing
company.

For subcontracted products specifically, delivery lead times can be
configured to take into account the amount of time required for the
subcontractor to manufacture a product. Doing so allows the contracting
company to better predict the delivery dates of subcontracted products.

Certain subcontracted products require the contracting company to supply
the subcontractor with manufacturing components. In this case, a
*manufacturing lead time* can be used, in addition to the delivery lead
time, to generate the date on which the subcontractor must receive the
required components, in order to manufacture the product and deliver it
on time.

In cases where components are dropshipped to the subcontractor, an
additional delivery lead time can be set for each component. This should
be set to the amount of time it takes the vendor to deliver components
to the subcontractor.

Once a delivery lead time has been set on a component, dropship orders
for the component display the date by which the order must be confirmed,
so that it can be dropshipped to the subcontractor by the date on which
manufacturing must begin.

::: warning

Like all lead times in Odoo, lead times for subcontracted products are
only an estimate, and are based on how long actions are *expected* to
take.

Unforeseen circumstances can impact the completion of these actions,
which means that lead times should not be viewed as guarantees.
::::

## Configuration

When using the
`Dropship Subcontractor on Order ` route, a company is responsible for purchasing the necessary
components from a vendor, and having them dropshipped directly to the
subcontractor.

This means that, in addition to the amount of time it takes the
subcontractor to manufacture and deliver the product, it is also
necessary to consider how long it takes the component vendor to dropship
the components to the subcontractor.

By assigning a product\'s subcontractor a *delivery lead time*,
specifying a *manufacturing lead time* on the product\'s BoM, and
assigning the vendor of the components an additional *delivery lead
time*, *Dropship Subcontractor* orders for the product\'s components
display the deadline for confirming a dropship order to send the
components to the subcontractor.

### Product delivery lead time

To set a delivery lead time for a product\'s subcontractor, navigate to
`Inventory app ‣
Products ‣ Products`, and select a
subcontracted product.

Then, select the `Purchase` tab on
the product\'s page. If the subcontractor has not already been added as
a vendor, do so now by clicking `Add a line`, and selecting the subcontractor in the
`Vendor` column.

Once the subcontractor has been added, enter the number of days it takes
them to manufacture and deliver the product, in the
`Delivery Lead Time` column.

![The Delivery Lead Time field for a subcontractor, on the Purchase tab of a product page.](dropship_subcontracting_lead_times/delivery-lead-time.png)

### Product manufacturing lead time

Next, navigate to the product\'s
`BoM (Bill of Materials)` by clicking the
`Bill of Materials` smart button at
the top of the product\'s page. Then, select a BoM from the list.

On the `BoM (Bill of Materials)`, select
the `Miscellaneous` tab. In the
`Manuf. Lead Time` field, enter the
same number of days that was entered in the
`Delivery Lead Time` field of the
`BoM (Bill of Materials)`\'s product.

![The Manuf. Lead Time field on a product\'s BoM.](dropship_subcontracting_lead_times/manufacturing-lead-time.png)

While not all of these days are actually used for manufacturing by the
subcontractor, setting the same number of days in each field tells Odoo
that the subcontractor must receive the components and begin production
by the start of the product\'s delivery lead time. This gives the
subcontractor enough time to both manufacture and deliver the product.

### Component delivery lead time

From the product\'s BoM, navigate to each component by clicking on the
component in the `Components` tab,
and then clicking the `oi-arrow-right`
`(right arrow)` button to the right
of the component.

On the product page for each component, select the
`Purchase` tab. If the vendor has not
already been added, do so now by clicking `Add a line`, and selecting the subcontractor in the
`Vendor` column.

Once the vendor has been added, enter the number of days it takes them
to dropship the product to the subcontractor, in the
`Delivery Lead Time` column.

## Dropship subcontracting workflow

Create a request for quotation (RfQ) for the product by navigating to
`Purchase app
‣ Orders ‣ Requests for Quotation`, and clicking `New`.

Specify the subcontractor in `Vendor`
field. Then, add the product in the `Products` tab by clicking `Add a product`, selecting the product in the
`Product` column, and specifying a
quantity in the `Quantity` column.

In the `Expected Arrival` field,
enter a date that provides enough time for the component vendor to
dropship the components, and the subcontractor to manufacture and
deliver the product.

::: warning

When a product is added to an
`RfQ (Request for Quotation)`, the
`Expected Arrival` field
auto-populates with a date that is today\'s date plus the delivery lead
time of the product. However, this does not consider the time it takes
to dropship the components to the subcontractor.

When purchasing a product subcontracted using the *Dropship
Subcontractor on Order* route, it is necessary to adjust this date to
take into account the extra time needed for the components to be
delivered to the subcontractor.

Since production does not begin until they receive the components,
leaving the date as is results in the finished product arriving *after*
the date listed on the `RfQ (Request for Quotation)`.
::::

Next, click `Confirm Order` to turn
the `RfQ (Request for Quotation)` into a
`PO (Purchase Order)`. Doing so creates a
second `RfQ (Request for Quotation)` to
purchase the components from the dropshipper, and have them sent to the
subcontractor.

Navigate to
`Purchase app ‣ Orders ‣ Requests for Quotation`, and select the
`RfQ (Request for Quotation)` that lists
the dropshipper in the `Vendor`
column.

On the `RfQ (Request for Quotation)`, the
`Expected Arrival` field lists the
date on which the subcontractor must receive the components, in order to
deliver the finished product by the *Expected Arrival* date listed on
the subcontractor `PO (Purchase Order)`.

The `Order Deadline` field lists the
latest date on which the `RfQ (Request for Quotation)` can be confirmed, in order for the dropshipper to deliver
the components to the subcontractor by the `Expected
Arrival` date.

Click `Confirm Order` to turn the
`RfQ (Request for Quotation)` into a
`PO (Purchase Order)`, and confirm the
purchase of the components from the dropshipper. Doing so causes a
`Dropship` smart button to appear at
the top of the page.

Click the `Dropship` smart button to
open the dropship order. This order can also be accessed from the
`Resupply` smart button that now
appears on the subcontractor `PO (Purchase Order)`.

After the dropshipper has delivered the components to the subcontractor,
click the `Validate` button at the
top of the dropship order to confirm that the subcontractor has received
the components.

Once the subcontractor receives the components, they begin manufacturing
the component, before delivering it to the contracting company.

::: example
Bike retailer *Mike\'s Bikes* works with a subcontractor --- *Bike
Friends* --- to produce units of their *Bicycle* product.

Mike\'s Bikes must purchase the required components from vendor Bike
World, and have them dropshipped to Bike Friends.

On average, Bike Friends takes three days to manufacture each bicycle,
plus an addition two days to deliver it to Mike\'s Bikes.

As a result, Mike\'s Bikes sets a delivery lead time of five days for
bicycle manufactured by Bike Friends: three days for manufacturing, plus
two days for delivery.

On the bicycle\'s BoM, they enter a manufacturing lead time of five days
as well, to remind themselves of the date that components must be
delivered to the subcontractor.

On the product pages for each of the bicycle\'s components, they assign
Bike World a delivery lead time of two days. This is the amount of time
it takes Bike World to dropship each component directly to the
subcontractor.

On May 10th, Mike\'s Bikes confirms a
`PO (Purchase Order)` for one bicycle,
with an expected delivery date of May 17th.

The `RfQ (Request for Quotation)` for
purchasing the components from Bike World and having them dropshipped to
Bike Friends has an Expected Arrival date of May 12th, and a Deadline of
May 10th. The `RfQ (Request for Quotation)` must be confirmed by the deadline in order for Bike Friends
to receive the components by the Expected Arrival date, giving them
enough time to deliver the finished bicycle to Mike\'s Bikes by May
17th.

![The Order Deadline and Expected Arrival dates on a dropship order.](dropship_subcontracting_lead_times/deadline-arrival.png)

Mike\'s Bikes confirms the
`RfQ (Request for Quotation)` on May
10th, and Bike World delivers the components to Bike Friends on May
12th. Bike Friends manufactures the bicycle, and delivers it to Mike\'s
Bikes on May 17th.
:::
