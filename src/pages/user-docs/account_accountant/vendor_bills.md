# Vendor bills

Vendor bills can be registered either **manually** or **automatically**
in Odoo. The
`Aged Payable report ` provides an overview of all outstanding bills to help ensure
timely payment of the correct amounts.


## Bill creation 

### Manually 

To create a vendor bill manually, go to
`Accounting ‣ Vendors ‣ Bills` and click `New`.

::: tip

Alternatively, it is possible to create a vendor bill from the
Accounting dashboard:

- either click `New` on the
  `Vendor Bills` journal;
- or click the `fa-ellipsis-v`
  `(vertical ellipsis)` icon of the
  `Vendor Bills` journal, then
  `Bill` under the
  `New` section.
::::

### Automatically 

Vendor bills can be automatically created through various methods:

- Emailing to an
  `email alias ` associated with the purchase journal. If the email does
  not contain a valid file, an automatic response notifies the sender
  that no document was received.
- Uploading a PDF: To upload a bill, go to
  `Accounting ‣ Vendors ‣ Bills`, then click `Upload`.

::: tip

\- Once the bill is uploaded, the PDF document appears on the right side
of the screen, making it easy to fill in the bill information. - Bills
can be `digitized ` for automatic completion. - Services such as digitizing
scanned or PDF vendor bills in Odoo require `In-App
Purchase (IAP) ` credits.
::::

To automatically post bills from selected vendors, go to
`Accounting ‣ Vendors ‣
Vendors` and select the relevant
vendor. In the `Accounting` tab,
under the `Automation` section,
update the `Auto-post bills` field
with one of the following options:

- `Always`
- `Ask after 3 validations without edits`
- `Never`

## Bill completion 

Whether the bill is created manually or automatically, make sure the
following fields are appropriately completed:

- `Vendor`: Odoo automatically fills
  in some information based on the information on the vendor\'s contact
  record as well as previous purchase orders and bills.
- `Bill Reference`: Add the sales
  order reference provided by the vendor. This field is used to
  `match ` the products when they are received.
- `Auto-Complete`: Select a past
  bill/purchase order to complete the document automatically. The
  `Vendor` field should be completed
  before completing this field.
- `Bill Date`: Select the document\'s
  issuance date.
- `Accounting Date`: Update the
  document\'s accounting registration date if needed.
- `Payment Reference`: The
  `Memo` field automatically includes
  the payment reference once the payment is registered.
- `Recipient Bank`: Indicates the
  account number to which the payment will be made. This field is
  required when paying via batch payment files (such as `NACHA
  ` and
  `SEPA `).
- `Due Date` or
  `Payment Terms` must be specified
  for the bill payment.
- `Journal`: Select which journal
  should record the bill and in which `currency
  `.

In the `Invoice Lines` tab:

- `Product`: Click
  `Add a line`, then search for and
  select the product.
- `Quantity`
- `Price`
- `Taxes ` (if applicable)

::: tip

If the bill line does not correspond to an existing product in the
database, click the `oi-view-list`
`(bars)` icon to enter a description
for the bill line without linking it to a product.
::::

To access the product catalog and view all items in an organized
display, click `Catalog
`. When the products and quantities are selected, click
`Back to Bill` to return to the
vendor bill; the selected catalog items will appear in the vendor bill
lines.

::: tip

Multiple bills for the same purchase order may be issued if the vendor
is on back-order and sends invoices as products are shipped or if the
vendor sends partial bills or requests a deposit. In this case, multiple
bills may have the same `Bill Reference`.
::::

## Bill confirmation 

Click `Confirm` when the document is
completed. The status changes to `Posted`, and a journal entry is generated based on the vendor
bill information. On confirmation, Odoo assigns each vendor bill a
unique number from a defined
`sequence `.

::: tip

Once confirmed, a vendor bill can no longer be updated. Click
`Reset to draft` if changes are
required.
::::

## Payment and reconciliation 

To register a payment, click on `Pay`. In the `Pay`
window, select the `Journal`, the
`Payment Method`, the
`Amount`, and the
`Currency`.

When the `Amount` paid is less than
the total remaining amount on the vendor bill, the payment is
`partial `, and the `Payment
Difference` field displays the
outstanding balance.

The `Memo` field is filled
automatically if the `Payment Reference` has been set correctly on the vendor bill. If the field
is empty, select the vendor invoice number as a reference.

Then click `Create payment`. An
`In Payment`/`Partial` banner
appears on the bill until it is
`reconciled ` and its
status updates to `Paid`.


## Aged payable report 

To get an overview of the open vendor bills and their due dates, go to
`Accounting
‣ Reporting ‣ Aged payable`.

Click the `fa-caret-right`
`(right arrow)` icon next to a vendor
to view the details of all their outstanding bills, including the due
dates and amounts.

::: tip

Click `PDF` or
`XLSX` to generate a PDF or XLSX
file, respectively.
::::

::: 
vendor_bills/invoice_digitization vendor_bills/assets
vendor_bills/deferred_expenses vendor_bills/sequence
:::
