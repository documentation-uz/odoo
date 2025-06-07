# Product type

In Odoo, goods and services are both set up as *products*. When setting
up a new product, there are several fields that should be carefully
chosen, as they determine how to invoice and track a business\' goods or
services.

To configure an existing product, go to
`Inventory app ‣ Products ‣ Products`, and select the desired product from the list.
Alternatively, from the `Products`
menu, click `New` to create a new
product.


## For sale vs. purchase 

Goods and services can be designated as those that can be bought, sold,
or both. On the product form, tick the `Sales` checkbox if a product can be *sold* to a customer (e.g.
finished goods). Tick `Purchase` if
the product can be *purchased* (e.g. raw materials).

::: example
If a resale clothing shop buys discounted denim jackets and sells them
at a higher cost to the end consumer, the [Jacket] product
form might have *both* the `Sales`
and `Purchase` checkbox ticked.

On the other hand, say the store occasionally sews new jackets using
denim and thread as raw materials. In the [Denim] and
[Thread] product forms, only `Purchase` should be ticked, whereas the [Handmade
Jacket] product form would only tick
`Sales`.
:::

## Goods vs. services

When configuring a product, a `Product Type` needs to be selected on the
`General Information` tab of a
product form. Each product type impacts different operations in other
Odoo applications, such as **Sales** and **Purchase**, and should be
chosen carefully.

- `Goods`: a tangible, material
  object (e.g. anything from a hamburger to a house)
- `Service`: an intangible,
  immaterial offering (e.g., a repair, a haircut, call center
  assistance)
- `Combo`: any mix of goods and
  services (e.g. a new car (*good*) with an oil change included
  (*service*))

::: tip

Due to their immaterial nature, services are not trackable in Odoo\'s
**Inventory** application.
::::

## Configure goods 

Selecting `Goods` as the
`Product Type` automatically triggers
the appearance of a few fields and tabs in the product form:

- `Inventory` tab: From here,
  `purchasing and manufacturing routes ` and product logistics, such as product weight and customer
  lead time, can be specified.

- `Invoicing Policy ` field: This field determines at what point in the sales
  process a customer is invoiced.

  ::: warning
  : tip

Tick the `Track Inventory` checkbox
if it is necessary to track a product\'s stock at various locations, for
inventory valuation, with lots and/or serial numbers, or when using
reordering rules.
::::


### Inventory operations by product type 

`Whether a good is tracked or untracked ` affects common **Inventory** operations, like transfers and
reordering rules.

The table below summarizes which operations (and smart buttons) are
enabled for tracked vs. untracked goods. Click highlighted chart items
to navigate to detailed sections and related documents.

  Inventory operation                                                                                                        Tracked   Untracked
  -------------------------------------------------------------------------------------------------------------------------- --------- -----------
  `Show on-hand quantity `                               Yes       No
  `Show forecasted quantity `                            Yes       No
  `Use reordering rules `                          Yes       No
  `Can be included in a purchase order `                      Yes       Yes
  `Use putaway rules `                                   Yes       No
  `Can be manufactured, subcontracted, or used in another good's BoM                                                         Yes       Yes
  `                                                          
  `Use inventory adjustments `   Yes       No
  `Use inventory valuation `                 Yes       No
  `Create transfer `                              Yes       Yes
  `Use lot/serial number tracking `                                       Yes       No
  `Can be placed in a kit `        Yes       Yes
  `Can be placed in a package `                          Yes       Yes
  `Appears on inventory reports `                         Yes       No

#### Inventory

##### On-hand and forecasted quantities 

A tracked product\'s on-hand and forecasted quantities, based on
incoming and outgoing orders, are reflected on the product form with two
smart buttons:

- `fa-cubes`
  `On-Hand Quantity`: This represents
  the number of units currently available in inventory. Click the button
  to view or add stock levels for a tracked product.
- `fa-area-chart`
  `Forecasted`: This represents the
  number of units *expected* to be available in inventory after all
  orders are taken into account. In other words,
  $\text = \text + \text - \text$.
  Click the button to view the `Forecasted Report`.

On the other hand, untracked products are regarded as *always*
available. Consequently, `On-Hand Quantity` is not tracked, and there is no
`Forecasted` quantity available.

##### Putaway rules and storage 

Both tracked and untracked goods can optimize storage using:

- `fa-random`
  `Putaway Rules `: This represents putaway rules that apply to a good, such
  as where to store it when a new shipment arrives.
- `fa-cubes`
  `Storage Capacities `: This represents any storage capacity limitations
  specified for this good. For example, a warehouse may require that
  only ten (or less) sofas be stored there at any given time, due to
  their large size.

##### Replenishment 

###### Reordering rules

Only tracked products can trigger
`reordering rules ` to generate purchase orders. Untracked goods *cannot* be
managed using reordering rules.

Reordering rules can be configured directly on the product form via the
`fa-refresh`
`(refresh)` icon.

::: tip

If reordering rules already exist on a product, Odoo re-labels this
button to `Min / Max`, to show the
minimum and maximum number of units that must be in stock.
::::

###### Create purchase orders 

Both tracked and untracked products can be included in a request for
quotation in the **Purchase** app. However, when receiving untracked
products, their on-hand quantity does not change upon validating the
receipt ([WH/IN]).

###### Replenish smart button

The `Replenish` smart button allows
all goods to be restocked directly from the product form, according to
the *Preferred Route*.


#### Manufacturing 

Both tracked and untracked products can be manufactured,
`subcontracted `, or included in another product\'s
`bill of materials (BoM) `.

::: 
On the product form for a tracked or untracked good, there are several
smart buttons that may appear for manufacturing operations:
:::

- `fa-flask`
  `Bill of Materials`: This shows the
  BoMs used to make this product.
- `fa-level-up`
  `Used In`: This shows other goods
  that include this product in their BoM.

#### Transfer goods 

*Transfers* are warehouse operations that involve the movement of goods.
Examples of transfers include `deliveries and receipts
`, as well as
`internal transfers ` between warehouses.

When creating a transfer for tracked products in the **Inventory** app,
transfers modify the on-hand quantity at each location. For example,
transferring five units from the internal location
[WH/Stock] to [WH/Packing Zone] decreases the
recorded quantity at [WH/Stock] and increases it at
[WH/Packing Zone].

For untracked products, transfers can be created, but exact quantities
at each storage location are not tracked.

#### Packages 

Both tracked and untracked (non-inventory), products can be placed in
`packages `.

However, for non-inventory products, the quantity is not tracked, and
the product is not listed in the package\'s `Contents` (which can be accessed by going to `Inventory app
‣ Products ‣ Packages`, and
selecting the desired package).



An untracked product was placed in the package, but the
Content section does not list it.


Additionally, if the *Move Entire Packages* feature is enabled, moving a
package updates the location of the contained tracked products but not
the contained untracked products. To enable this feature, navigate to
`Inventory app ‣ Configuration ‣ Operations Types`, select any operation, and tick the
`Move Entire Packages` checkbox.

#### Inventory reports 

**Only** tracked products appear on the following reports.

::: warning

These reports are only available to users with
`administrator access `.
::::

- `Stock report `: This report provides a comprehensive list of all on-hand,
  unreserved, incoming, and outgoing tracked inventory. To access the
  report, go to
  `Inventory app ‣ Reporting ‣ Stock`.
- `Location report  `: This report shows a breakdown of which tracked products
  are held at each location (internal, external, or virtual). The report
  is only available with the *Storage Location* feature activated
  (`Inventory app ‣ Configuration ‣ Settings`). To access it, go to
  `Inventory app ‣ Reporting ‣ Locations`.
- `Moves History report `: This report summarizes where and when this good has moved
  in/out of stock. To access the report, go to
  `Inventory app ‣ Reporting ‣ Moves History`. Alternatively, click the
  `fa-exchange`
  `In / Out` smart button on a
  product form to filter the report on that product\'s specific moves
  history.
- `Moves Analysis`: This report
  provides a pivot table view of inventory transfers by operation type.
- `Stock Valuation report `: A detailed record of the monetary value of all tracked
  inventory.
