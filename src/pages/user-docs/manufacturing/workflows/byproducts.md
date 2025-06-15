# By-Products

When manufacturing certain products, it is common to be left with
residual materials, in addition to the finished product. These materials
are known as *by-products*. By specifying the by-products created during
manufacturing on a product\'s bill of materials (BoM), the quantity of
by-products on-hand is tracked by Odoo.

::: example
Manufacturing a *rocking chair* requires ten pieces of wood. During
production, five pieces of *scrap wood* are created, in addition to the
rocking chair. By designating the scrap wood as a by-product on the
rocking chair\'s `BoM (bill of materials)`, Odoo tracks the on-hand count of scrap wood, as well as
the quantity of rocking chairs produced.
:::

## Configuration

To specify by-products on a product\'s
`BoM (bill of materials)`, the
*By-Products* setting **must** be enabled. To do so, navigate to
`Manufacturing app ‣ Configuration ‣ Settings`, and tick the `By-Products` checkbox, located under the
`Operations` heading. Then, click
`Save` to apply the change.

![The By-Products setting on the Manufacturing app settings page.](byproducts/byproducts-setting.png)

With the `By-Products` setting
enabled, a `By-products` tab appears
on product `BoMs (bills of materials)`.

## Add byproduct to BoM

To add by-products to a `BoM (bill of materials)`, navigate to `Manufacturing app ‣ Products ‣ Bills
of Materials`, and select a
`BoM (bill of materials)`.

On the `BoM (bill of materials)`, select
the `By-products` tab. Click
`Add a line`, and select the
by-product in the `By-product`
drop-down field. In the `Quantity`
field, enter the quantity of the by-product produced during
manufacturing.

If the by-product is produced during a specific operation of a
manufacturing order (MO), select the operation in the
`Produced in Operation` field. For
example, if a scrap wood by-product is produced during an *Assemble*
operation, select that operation in the `Produced in
Operation` field.

![The By-Products tab on a BoM, configured with a \"Scrap Wood\" by-product.](byproducts/byproducts-tab.png)

## Manufacture by-product

When an `MO (manufacturing order)` is
completed and marked as *Done*, Odoo registers the quantity of
by-products created during the manufacturing process. To create a new
`MO (manufacturing order)`, navigate to
`Manufacturing
app ‣ Operations ‣ Manufacturing Orders`, and click `New`.

In the `Bill of Material` field,
select a `BoM (bill of materials)` on
which by-products have been specified. After doing so, the
`Product` field auto-populates with
the corresponding product. Click `Confirm` to confirm the
`MO (manufacturing order)`.

When manufacturing is completed, click the
`Produce All` button at the top of
the `MO (manufacturing order)`. After
doing so, inventory counts update to reflect the quantity of
by-product(s) produced, as well as the quantity of the product.

Click the `Product Moves` smart
button at the top of the `MO (manufacturing order)` page to see the movements of components and products. Each
by-product is listed on the resulting
`Inventory Moves` page, with the
`From` column displaying the virtual
production location, and the `To`
column displaying the location where the by-product is stored.

![The Product Moves page for an MO with by-products.](byproducts/product-moves.png)
