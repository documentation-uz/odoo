# Inventory management

In the Odoo *Inventory* app,
`warehouses ` handle the broader organization and distribution of stock
across different physical sites, while `locations
`
provide a more detailed breakdown within each warehouse for efficient
item management.

This document serves as an introduction to the terminology and concepts
necessary to master *Inventory*. For specific instructions and examples
of how things work, refer to individual documentation pages.


## Warehouses

`Warehouses ` represent a physical place, with a physical address, where a
company\'s items are stored.

Configure
`routes ` in a warehouse to control how products move to customers,
from vendors, within the warehouse, or `between
warehouses `.

## Locations

`Locations ` refer to specific areas within a warehouse, such as shelves,
floors, or aisles. These are sub-divisions within a warehouse, and are
unique to that warehouse. Users can create and manage numerous locations
within a single warehouse to organize inventory more precisely.


### Location types 

*Location types* in Odoo help categorize and manage where products are,
and what actions need to be taken with them. By default, on the
`Inventory app ‣ Configuration ‣ Locations` page, only internal locations are displayed.

To view the seven location types in Odoo, select any location, and in
the `Location Type` field, there are:

- `Vendor Location`: defines an area
  where products purchased from vendors originate. Items here are
  **not** in stock.

- `View`: used to organize and
  structure the warehouse hierarchy. For example, the view location
  [WH] (short for warehouse) groups all internal locations,
  such as [Stock], receiving docks, quality checkpoints, and
  packing areas to show they all belong to the same warehouse.

  ::: warning
  : note

In Odoo, location types are color-coded: - **Red**: internal locations -
**Blue**: view locations - **Black**: external locations (including
inventory loss, vendor, and customer locations).
::::

### View locations in Odoo

Odoo databases include preconfigured view locations to organize the
hierarchy of locations. These provide helpful context, and distinguish
between internal and external locations.

- *Physical locations* group internal locations---such as secondary
  warehouses and subcontractor sites. Because `inventory valuation
  ` changes only when goods move from internal to external
  locations, Odoo uses physical locations to track stock that is
  off-site or in transit without affecting valuation.

::: 
> ::: example
> When moving products in warehouses [WH] and
> [WH2], the items are not in either warehouse, but still
> belong to the company. While in transit, they are placed in the
> [Inter-warehouse transit] location, a
> `Transit Location` type.
>
> This location is under the view location, [Physical
> Locations], indicating that [Inter-warehouse
> transit] is outside of a warehouse, but still part of the
> company. Doing so does not affect the inventory valuation of the
> products.
> :::
:::

- *Partner locations* group customer and vendor locations (external
  locations) together. Transfers to these locations affect inventory
  valuation.
- *Virtual locations* are locations that do **not** exist physically,
  but it is where items that are not in inventory can be placed. These
  can be items that are no longer in inventory due to loss, or other
  factors.

::: 
inventory_management/warehouses inventory_management/use_locations
inventory_management/count_products inventory_management/cycle_counts
inventory_management/scrap_inventory
inventory_management/product_catalog
:::
