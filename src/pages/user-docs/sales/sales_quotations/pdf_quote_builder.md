# PDF quote builder

The *PDF Quote Builder* in Odoo *Sales* provides the opportunity to send
customers a fully customized PDF file for quotes, showcasing the company
and products, with various information and design elements, instead of
just showing the price and total.

The PDF Quote Builder groups header pages, product descriptions, the
price(s), and footer pages to create a detailed quote. It can also
inject dynamic texts or custom notes in the PDF to personalize the offer
for the customer.

Having a customized PDF in quotes provides a heightened conclusion to
the shopping experience for customers, and adds an elegant level of
professionalism to a company.


::: tip

It is recommended to edit PDF forms with Adobe software. The form fields
on the header and footer PDF templates are necessary to get dynamic
values with Odoo.
::::

## Configuration

In order to add custom PDF files for quotes, the
`PDF Quote builder` feature *must* be
configured.

To do that, navigate to
`Sales app ‣ Configuration ‣ Settings`. Then, on the `Settings` page, scroll to the
`Quotations & Orders` section, and
locate the `PDF Quote builder`
feature.

## Add PDF as Header/Footer

In Odoo *Sales*, it\'s possible to add a custom PDF that can be used
either as a header or a footer. When the PDF quote builder is activated
in a quotation, you can then select as many headers and footers as you
wish to use, these PDF will then also be inserted in the final PDF.

To add a custom PDF as header or footer, start by navigating to
`Sales app ‣
Configuration ‣ Headers/Footers`. From this page, either click
`New` or `Upload`.

Clicking `Upload` instantly provides
the opportunity to upload the desired document. Then, the document can
be further configured on the document card, or by clicking the
`fa-ellipsis-v`
`(vertical ellipsis)` icon in the top
right corner of the document card, and then clicking
`Edit`.

Clicking `New` reveals a blank
documents form, in which the desired PDF can be uploaded via the
`Upload your file` button on the
form, located in the `File Content`
field.

Various information and configurations related to the uploaded document
can be modified here.

The first field on the documents form is for the
`Name` of the document, and it is
grayed-out (not clickable) until a document is uploaded. Once a PDF has
been uploaded, the `Name` field is
auto-populated with the name of the PDF, and it can then be edited.

Then, in the `Document Type` field,
click the drop-down menu, and select either: `Header`, or `Footer` to
define whether these files would be selectable to be at the beginning or
at the end of your quote.

Under this, in the `Quotation Templates` section, this PDF can be restricted quotation templates
only.

::: tip

Alternatively, you can also navigate to `Sales app ‣ Configuration ‣
Quotation Templates`, select a
template and directly `Add` or
`Upload` a PDF to it in the
`Quote Builder` tab.
::::

Lastly, beside the `File Content`
field, you have the possibility to
`Configure dynamic fields`.

## Dynamic text in PDFs

While creating custom PDFs for quotes, use *dynamic text* for Odoo to
auto-fill the PDF content with information related to the quote from the
Odoo database, like names, prices, etc.

Dynamic text values are form components (text inputs) that can be added
in a PDF file, and Odoo automatically fills those values in with
information related to the quote.

### Dynamic text values

Below are common dynamic text values used in custom PDFs that are
already mapped to the correct fields, and what they represent.

For headers and footers PDF:

- `name`: Sales Order Reference
- `partner_id__name`: Customer Name
- `user_id__name`: Salesperson Name
- `amount_untaxed`: Untaxed Amount
- `amount_total`: Total Amount
- `delivery_date`: Delivery Date
- `validity_date`: Expiration Date
- `client_order_ref`: Customer
  Reference

For product PDF:

- `description`: Product Description
- `quantity`: Quantity
- `uom`: Unit of Measure (UoM)
- `price_unit`: Price Unit
- `discount`: Discount
- `product_sale_price`: Product List
  Price
- `taxes`: Taxes name joined by a
  comma ([,])
- `tax_excl_price`: Tax Excluded
  Price
- `tax_incl_price`: Tax Included
  Price

After uploading a PDF, you can then
`Configure dynamic fields`. This will
allow you to map any field name found in your PDF to the field you want
to show by writing down any existing path. Headers and footers starts
from the current `sale_order` model,
whereas product document follows their path from their
`sale_order_line`. Leaving that path
empty allows you to fill a custom notes, directly from the specific
quote that requires it.

::: example
When a PDF is built, it\'s best practice to use common dynamic text
values (`name` and
`partner_id_name`). When uploaded
into the database, Odoo auto-populates those fields with the information
from their respective fields.

In this case, Odoo would auto-populate the Sales Order Reference in the
`name` dynamic text field, and the
Customer Name in the `partner_id_name` field.

![PDF quote being built using common dynamic placeholders.](pdf_quote_builder/pdf-quote-builder-sample.png)
:::

Once the PDF file(s) are complete, save them to the computer\'s hard
drive, and proceed to upload them to Odoo via
`Sales app ‣ Configuration ‣ Headers/Footers`.

::: example
When uploading PDF containing the form field
`invoice_partner_country`, which is
an information available in the sales order, configure the
`path` of the
`Form Field Name` to: -
`partner_invoice_id.country_id.name`
for a header or footer document -
`order_id.partner_invoice_id.country_id.name` for a product document fills the form with the invoice
partner country\'s name when the PDF is built.
:::

::: example
When uploading any PDF containing the form field
`custom_note`, leaving the
`path` empty allows the seller to
write down any note where that form field is in that document and shown
when the PDF is built.
:::

## Add PDF to product

In Odoo *Sales*, it\'s also possible to add a custom PDF to a product
form. When a PDF is added to a product, and that product is used in a
quotation, that PDF is also inserted in the final PDF.

To add a custom PDF to a product, start by navigating to
`Sales app ‣ Products
‣ Products`, and select the
desired product to add a custom PDF to.

::: tip

A document could also be added to a product variant, instead of a
product. If there are documents on a product *and* on its variant,
**only** the documents in the variant are shown.

To add a custom document to a product variant, navigate to
`Sales app ‣
Products ‣ Product Variants`.
Select the desired variant, click the `Documents` smart button, and proceed to upload the custom document
to the specific product variant.
::::

On the product page, click the `Documents` smart button at the top of the page to navigate to a
`Documents` page for that product,
where files related to that product can be uploaded. From this page,
either click `New` or
`Upload`.

![The Documents smart button on a product form in Odoo Sales.](pdf_quote_builder/documents-smart-button.png)

Clicking `Upload` opens the
computer\'s local file directory. An uploaded document can be further
configured on the document card, or by clicking the
`fa-ellipsis-v`
`(vertical ellipsis)` icon in the
top-right corner of the document card, and then clicking
`Edit`.

Clicking `New` reveals a blank
documents form, in which the desired PDF can be uploaded via the
`Upload your file` button on the
form, located in the `File Content`
field.

### PDF form configuration

![A standard document form with various fields for a specific product in Odoo Sales.](pdf_quote_builder/blank-document-form.png)

The first field on the documents form is for the
`Name` of the document, and it is
grayed-out (not clickable) until a document is uploaded. Once a PDF has
been uploaded, the `Name` field is
auto-populated with the name of the PDF, and it can then be edited.

Prior to uploading a document, there\'s the option to designate whether
the document is a `File` or
`URL` from the
`Type` drop-down field menu.

![A standard document form with an uploaded pdf in Odoo Sales.](pdf_quote_builder/document-form-uploaded-pdf.png)

::: tip

If a PDF is uploaded, the `Type`
field is auto-populated to `File`,
and it cannot be modified.
::::

Then, in the `Sales` section, in the
`Visible at` field, click the
drop-down menu, and select either: `On quotation`, `On confirmed order`, or `Inside quote pdf`.

- `Quotation`: the document is sent
  to (and accessible by) customers at any time.
- `Confirmed order`: the document is
  sent to customers upon the confirmation of an order. This is best for
  user manuals and other supplemental documents.
- `Inside quote`: the document is
  included in the PDF of the quotation, between the header pages and the
  `Pricing` section of the quote.

::: example
When the `Inside quote` option for
the `Visible at` field is chosen, and
the custom PDF file, [Corner Desk.pdf] is uploaded, the PDF
is visible on the quotation in the *customer portal* under the
`Documents` field.

![Sample of an uploaded pdf with the on quote option chosen in Odoo Sales.](pdf_quote_builder/pdf-on-quote-sample.png)
:::

Beside the `File Content` field, you
have the possibility to `Configure dynamic fields`. When doing so, remember that the starting model is the
`sale_order_line`, unlike for headers
and footers that start from the `sale_order`.

Lastly, in the `E-Commerce` section,
decide whether or not to `Publish on Website` so that the PDF appears on the product page in the
online store.

::: example
When the `Publish on Website` option
is enabled, a link to the uploaded document, [Corner
Desk.pdf], appears on the product\'s page in the online
store.

It appears beneath a `Documents`
heading, with a link showcasing the name of the uploaded document.

> ![Showing a link to an uploaded document on a product page using Odoo Sales.](pdf_quote_builder/show-product-page.png)
:::

## PDF quote

On a sales order, in the `Quote Builder` tab, select additional documents to be merged into the
final PDF. If a selected document has custom fields, they appear as
editable text boxes to be filled in.

![Selectable quotation headers and footers under the Quote Builder section in a quotation.](pdf_quote_builder/quote-builder-headers.png)

Once a quote with a pre-configured PDF has been confirmed, Odoo provides
the option to print the confirmed quote to check for errors, or to keep
for records.

To print the PDF quote, navigate to the confirmed quote, and click the
`⚙️ (gear)` icon to reveal a
drop-down menu. From this drop-down menu, select
`Print`, then select
`PDF Quote`.

![Print pdf quote option on drop-down menu located on confirmed sales order in Odoo Sales.](pdf_quote_builder/drop-down-print-pdf.png)

Doing so instantly downloads the PDF quote. When opened, the PDF quote,
along with the configured product PDF that was set to be visible inside
the quote, can be viewed and printed.

::: tip

Download these `PDF quote builder examples
` or download `sample quotation
` for added reference.
::::

