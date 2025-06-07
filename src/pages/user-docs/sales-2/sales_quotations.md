# Sales quotations

A *sales quotation* or quote is a document sent to a customer that
outlines the estimated costs and terms for goods and services. Once
accepted, a quotation can be converted into a sales order, which serves
as the final agreement before delivery and invoicing.

## Sales flow overview

Quotations fit into a broader sales flow that connects different stages
of customer interactions from initial interest to payment.

The typical flow follows these steps:

1.  *Quotation*: A proposal sent to the customer with product details
    and pricing.
2.  *Sales order*: Created automatically when the customer accepts the
    quotation, confirming the sale.
3.  *Delivery* (if applicable): Products are shipped or services are
    delivered.
4.  *Invoice*: The final bill is issued based on the sales order or
    delivered products/services.
5.  *Payment*: The customer settles the invoice, completing the sales
    cycle.

This flow helps businesses track the entire lifecycle of a sale while
keeping information consistent across apps.

In Odoo, quotations are configured in the **Sales** app. They can also
be generated from other apps as part of the sales workflow:

- **CRM**:
  `Convert opportunities ` into quotes to follow up on potential deals.
- **Helpdesk**:
  `Generate quotes from tickets ` when offering paid services or products.
- **Subscriptions**:
  `Offer recurring services ` before starting an automatic billing cycle.

## Sales quotations in business deals

Sales quotations serve as a key step in the sales process, bridging the
gap between a customer\'s initial inquiry about goods and services and
the final contractual agreement for payment and delivery. The quotation
also provides transparency in pricing, helping both parties negotiate
and finalize the terms before making a commitment.

Sales quotations play a crucial role in business transactions by
defining the scope and cost of what is being sold to the end-customer;
setting clear expectations on pricing, delivery, tax, and payment terms;
and providing a documented stage where the business deal can be
negotiated before agreed upon.

## Key components of a sales quotation

A well-structured sales quotation comprises the following:

- Quotation number and date: A unique identifier for tracking and
  reference, as well as the
  `dates of issue and expiration `. In Odoo **Sales** app, the quotation number is assigned
  under a standard naming convention once it is confirmed.
- Customer information: Customer name and contact information, as well
  as
  `invoicing and delivery address `.
- Products and services: Itemized listing of items to be purchased,
  including quantity, specifications (as needed), and unit price.
- Payment terms and
  `pricelists `: Configured agreements and rules for the pricing and
  payment of this particular sales quotation.
- Special pricing: Optional `discounts and promotional pricing
  ` to
  update and/or modify individual product lines.
- Total cost and currency: Summary totals of product or service and
  shipping prices, including relevant taxes.

In Odoo\'s **Sales** app, quotations can include additional details and
configurations that add more detail and information, such as
`quotation templates `,
`subscription plans `, and `sales team referrer name
`.

![Unconfirmed sales quotation in Odoo \*\*Sales\*\* app.](sales_quotations/sales-quotation.png)

::: 
sales_quotations/create_quotations sales_quotations/quote_template
sales_quotations/optional_products
sales_quotations/get_signature_to_validate
sales_quotations/get_paid_to_validate sales_quotations/deadline
sales_quotations/different_addresses
sales_quotations/orders_and_variants sales_quotations/pdf_quote_builder
:::
