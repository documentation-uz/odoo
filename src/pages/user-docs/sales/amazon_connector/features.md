# Amazon Connector features

The *Amazon Connector* synchronizes orders between Amazon and Odoo,
which considerably reduces the amount of time spent manually entering
Amazon orders (from the Amazon Seller account) into Odoo. It also allows
users to accurately keep track of Amazon sales in Odoo.

## Supported features

The Amazon Connector is able to:

- Synchronize (Amazon to Odoo) all confirmed orders (both FBA and FBM),
  and their order items, which include:
  - product name, description, and quantity
  - shipping costs for the product
  - gift wrapping charges
- Create any missing partner related to an order in Odoo (contact types
  supported: contact and delivery address).
- Notify Amazon of confirmed shipment in Odoo (FBM) to get paid.
- Synchronize (Odoo to Amazon) all available quantities of your products
  (FBM).
- Support multiple seller accounts.
- Support multiple marketplaces per seller account.

The following table lists capabilities provided by Odoo when using the
Amazon Connector:

+--------------------+--------------------+---------------------------+
|                    | Fulfilled By       | Fulfilled By Merchant     |
|                    | Amazon (FBA)       | (FBM)                     |
+====================+====================+===========================+
| **Orders**         | Synchronize        | Synchronize unshipped and |
|                    | shipped and        | cancelled orders.         |
|                    | cancelled orders.  |                           |
+--------------------+--------------------+---------------------------+
| **Shipping**       | Shipping cost is   | Shipping cost is computed |
|                    | computed by        | by Amazon and included in |
|                    | Amazon, and        | the synchronized orders.  |
|                    | included in the    |                           |
|                    | synchronized       |                           |
|                    | order.             |                           |
|                    +--------------------+---------------------------+
|                    | Shipping done by   | A delivery order is       |
|                    | Amazon.            | automatically created in  |
|                    |                    | Odoo for each new order.  |
|                    |                    | Once it has been          |
|                    |                    | processed in Odoo, the    |
|                    |                    | status is then            |
|                    |                    | synchronized in Amazon.   |
+--------------------+--------------------+---------------------------+
| **Gift Wrapping**  | Handled by Amazon. | Cost is computed by       |
|                    |                    | Amazon, and included in   |
|                    |                    | the synchronized order.   |
|                    |                    | Gift message is added on  |
|                    |                    | a line of the order and   |
|                    |                    | on the delivery order.    |
|                    |                    | Then it is up to the      |
|                    |                    | user.                     |
+--------------------+--------------------+---------------------------+
| **Stock            | Managed by Amazon, | Managed in Odoo Inventory |
| Management**       | and synchronized   | app, and synchronized     |
|                    | with a virtual     | with Amazon.              |
|                    | location to follow |                           |
|                    | it in Odoo.        |                           |
+--------------------+--------------------+---------------------------+
| **Delivery         | Handled by Amazon. | Send by Amazon, based on  |
| Notifications**    |                    | delivery status           |
|                    |                    | synchronized from Odoo.   |
+--------------------+--------------------+---------------------------+

::: tip

The Amazon Connector is designed to synchronize the data of sales
orders. Other actions, such as downloading monthly fees reports,
handling disputes, or issuing refunds, **must** be managed from the
*Amazon Seller Central*, as usual.
::::

:::: warning

As of February 19, 2024, in North American marketplaces,
`FBA (Fulfilled by Amazon)` orders
created with the *Amazon Connector*, do not get the customer\'s name
passed onto the sales/delivery order in Odoo. This is due to the fact
that Amazon now calculates, and remits, sales tax on behalf of sellers.
In other words, personally identifiable customer information is not
transmitted to the seller any longer, after a
`FBA (Fulfilled by Amazon)` order.
::::

## Supported marketplaces 

If a marketplace is not listed in your Amazon marketplaces, it\'s
possible to `add a new
marketplace `.

+-----------------------------------+
| **North America region**          |
+=================+=================+
| Canada          | Amazon.ca       |
+-----------------+-----------------+
| Mexico          | Amazon.com.mx   |
+-----------------+-----------------+
| US              | Amazon.com      |
+-----------------+-----------------+

+-----------------------------------+
| **Europe region**                 |
+=================+=================+
| Germany         | Amazon.de       |
+-----------------+-----------------+
| Spain           | Amazon.es       |
+-----------------+-----------------+
| France          | Amazon.fr       |
+-----------------+-----------------+
| UK              | Amazon.co.uk    |
+-----------------+-----------------+
| Italy           | Amazon.it       |
+-----------------+-----------------+
| Netherlands     | Amazon.nl       |
+-----------------+-----------------+

