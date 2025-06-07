# Configure product

A group of products in Odoo can be further defined using:

- `Units of measure (UoM) `: a standard quantity for specifying product amounts (e.g.,
  meters, yards, kilograms). Enables automatic conversion between
  measurement systems in Odoo, such as centimeters to feet.
  - *Ex: Purchasing fabric measured in meters but receiving it in yards
    from a vendor.*
- `configure/package`: A physical
  container used to group products together, regardless of whether they
  are the same or different.
  - *Ex: A box containing assorted items for delivery, or a storage box
    of two hundred buttons on a shelf.*
- `configure/packaging`: groups the *same*
  products together to receive or sell them in specified quantities.
  - *Ex: Cans of soda sold in packs of six, twelve, or twenty-four.*

## Comparison

This table provides a detailed comparison of units of measure, packages,
and packaging to help businesses evaluate which best suits their
requirements.

  Feature                      Unit of measure                                                                                                                                                 Packages                                                                                                                                                                     Packaging
  ---------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------
  Purpose                      Standardized measurement for product units (e.g., cm, lb, L)                                                                                                    Tracks the specific physical container and its contents                                                                                                                      Groups a fixed number of items together for easier management (e.g., packs of 6, 12 or 24)
  Product uniformity           Defined per product; saved as one `UoM (Unit of Measure)` in the database                                                        Allows mixed products                                                                                                                                                        Same products only
  Flexible                     Converts between vendor/customer `UoMs (Units of Measure)` and database `UoM (Unit of Measure)`   Items can be added or removed from the container                                                                                                                             Quantities are fixed (e.g., always packs of 6, 12 or 24)
  Complexity                   Simplest for unit conversions                                                                                                                                   More complex due to container-level inventory tracking                                                                                                                       Simpler; suitable for uniform product groupings
  Inventory tracking           Tracks product quantities within the warehouse in the specific `UoM (Unit of Measure)` defined in the product form               Tracks package location and contents within the warehouse                                                                                                                    Tracks grouped quantities but not individual items\' locations
  Smooth barcode operations    Not available                                                                                                                                                   Requires scanning both the package and individual items for reception. (even if there are 30 items in a package). Can enable the `Move Entire Packages                       Scanning a packaging barcode automatically records all included units. (e.g. 1 pack = 12 units)
                                                                                                                                                                                               ` feature to update the package\'s contained items\' locations, when moving the package         
  Product lookup               Not available                                                                                                                                                   Scanning a product\'s barcode identifies its typical storage location in the Odoo database                                                                                   Barcode identifies grouped quantity, not storage location
  Unique barcodes              Not available                                                                                                                                                   Unique barcodes for individual packages (e.g. Pallet #12)                                                                                                                    Barcodes set at the packaging type level (e.g. for a pack of 6)
  Reusability                  Not applicable                                                                                                                                                  Can be disposable or reusable, configured via the `Package Use                                                                                                               Disposable only
                                                                                                                                                                                               ` field                                                                                             
  Container weight             Not applicable                                                                                                                                                  Weight of the container itself is included in the *Shipping Weight* field of a package (`Inventory app ‣ Products ‣ Packages`)   Weight of the container is defined in the *Package Type* settings
  Lot/serial number tracking   Requires manual adjustments to track `UoMs (Units of Measure)` via lots (See `use case                                           Applies only to contained products                                                                                                                                           Applies to both contained products and the container
                               ` for details)                                                                                                                                                                                                                                                          
  Custom routes                Cannot be set                                                                                                                                                   Cannot be set                                                                                                                                                                Routes can define specific warehouse paths for a particular packaging type

## Use cases

After comparing the various features, consider how these businesses,
with various inventory management and logistics workflows, came to their
decision.

### Pallets of items using packaging

A warehouse receives shipments of soap organized on physical pallets,
each containing 96 bars. These pallets are used for internal transfers
and are also sold as standalone units. For logistical purposes, the
pallet\'s weight must be included in the total shipping weight for
certain deliveries. Additionally, the pallet requires a barcode to
facilitate tracking, and the number of individual bars of soap must be
included in the stock count when the pallet is received.

After evaluating various options, *product packaging* was the most
suitable solution. Packaging enables assigning a barcode to a pallet,
identifying it as a \"pallet type\" containing 96 soap bars. This
barcode streamlines operations by automatically registering the grouped
quantity. Key distinctions include:

- **Warehouse tracking limitations**: Odoo tracks only the total
  quantity, not the number of packagings. For instance, if a pallet with
  12 and 24 quantities is received, Odoo records 36 quantities, not the
  pallet details.
- **Packaging barcodes are type-specific, not unique**: Barcodes
  represent packaging types (e.g., \"pallet of 96 soap bars\") but do
  not uniquely identify individual pallets, such as Pallet #1 or Pallet
  #2.

### Capture product information using barcode

An Odoo user expects the **Barcode** app to display the typical storage
location of a product by scanning a barcode for a container.

*Packages* was the most suitable. When the
`appropriate setting is enabled
`, scanning a package barcode displays its contents in the
**Barcode** app.

Packages represent physical containers, enabling detailed tracking of
the items they hold. Scanning a package provides visibility into its
contents and facilitates operations, like inventory moves.

### Track different units of measure in storage 

A fruit juice distributor tracks multiple
`UoMs (Units of Measure)` for their
operations:

- Fruits are purchased in tons.
- Juice is produced and stored in kilograms.
- Small samples are stored in grams for recipe testing.

*Unit of Measure* was most suitable. Odoo automatically converts tons to
kilograms during receipts. However, since Odoo tracks only one
`UoM (Unit of Measure)` per product in
the database, the company uses lot numbers to differentiate
`UoMs (Units of Measure)`:

- LOT1: Grams (g)
- LOT2: Kilograms (kg)

Manual inventory adjustments are required to convert between lots, such
as subtracting 1 kg from LOT2 to add 1,000 g to LOT1. While functional,
this workaround can be time-consuming and prone to errors.

::: 
configure/type configure/uom configure/package configure/packaging
:::
