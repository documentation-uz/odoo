# LIFO removal

The *Last In, First Out* (LIFO) removal strategy picks the **newest**
products on-hand, based on the date they entered a warehouse\'s stock.

Every time an order is placed for products using the
`LIFO (Last In, First Out)` strategy, a
transfer is created for the lot/serial number that has most recently
entered the stock (the **last** lot/serial number that entered the
warehouse\'s inventory).


:::: warning

In many countries, the `LIFO (Last In, First Out)` removal strategy is banned, since it can potentially result
in old, expired, or obsolete products being delivered to customers.
::::

Consider the following example, with the product, [Cinder
Block], which is tracked `By
Lots` in the
`Inventory` tab of the product form.
The `Force Removal Strategy` for the
cinder block\'s product category is set to
`Last In, First Out (LIFO)`.


The following table represents the cinder blocks in stock, and their
various lot number details.

                                                                                           LOT1     LOT2     LOT3
  ---------------------------------------------------------------------------------------- -------- -------- --------
  On-hand stock                                                                            10       10       10
  `Created on `   June 1   June 3   June 6

To see the removal strategy in action, create a
`delivery order ` for seven cinder blocks by navigating to the
`Sales app` and creating a new
quotation.

`Confirm` the sales order to create a
delivery order. Doing so reserves the newest lot numbers are using the
`LIFO (Last In, First Out)` removal
strategy.

To view the detailed pickings, click the
`⦙≣ (bulleted list)` icon, located on
the far-right of the cinder block\'s product line in the
`Operations` tab of the delivery
order. Doing so opens the `Open: Stock move` pop-up window.

In the `Open: Stock move` pop-up
window, the `Pick from` field
displays where the quantities to fulfill the `Demand` are picked from. Since the order demanded seven cinder
blocks, the newest cinder blocks from [LOT3] are selected,
using the `LIFO (Last In,
First Out)` removal strategy.

![The detailed operations shows which lots are being selected for the picking.](lifo/cinder-block-picking.png)
