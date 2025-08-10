# AvaTax integration

Avalara\'s *AvaTax* is a cloud-based tax software. Integrating *AvaTax*
with Odoo provides real-time and region-specific tax calculations when
users sell, purchase, and invoice items in Odoo. *AvaTax* tax
calculation is supported with every United Nations charted country,
including inter-border transactions.

::: warning

*AvaTax* is only available for integration with databases/companies that
have locations in the United States, Canada, and Brazil. This means the
fiscal position/country of a database can only be set to the United
States, Canada, or Brazil. For more information, reference this
documentation: `accounting/avatax/fiscal_country`.
::::

*AvaTax* accounts for location-based tax rates for each state, county,
and city. It improves remittance accuracy by paying close attention to
laws, rules, jurisdiction boundaries, and special circumstances (like,
tax holidays, and product exemptions). Companies who integrate with
*AvaTax* can maintain control of tax-calculations in-house with this
simple `API (application
programming interface)` integration.

::: warning

Some limitations exist in Odoo while using AvaTax for tax calculation:

- AvaTax uses the company address by default. To use the warehouse
  address, enable `Allow
  Ship Later ` in the **POS** app settings.
- Excise tax is **not** supported. This includes tobacco/vape taxes,
  fuel taxes, and other specific industries.
::::


## Set up on AvaTax

To use *AvaTax*, an account with Avalara is required for the setup. If
one has not been set up yet, connect with Avalara to purchase a license:
[Avalara: Let\'s Talk](https://www.avalara.com/us/en/get-started.html).

::: tip

Upon account setup, take note of the *AvaTax*
`Account ID`. This will be needed in
the `Odoo setup `. In Odoo, this number is the `API
ID`.
::::

Then, [create a basic company profile](https://www.odoo.com/r/2k0).

### Create basic company profile

Collect essential business details for the next step: locations where
tax is collected, products/services sold (and their sales locations),
and customer tax exemptions, if applicable. Follow the Avalara
documentation for creating a basic company profile:

1.  [Add company information](https://www.odoo.com/r/XZDW).
2.  [Tell us where the company collects and pays
    tax](https://www.odoo.com/r/E6g).
3.  [Verify jurisdictions and activate the
    company](https://www.odoo.com/r/NIy).
4.  [Add other company locations for location-based
    filing](https://www.odoo.com/r/GF4).
5.  [Add a marketplace to the company
    profile](https://www.odoo.com/r/QA5).

### Connect to AvaTax 

After creating the basic company profile in Avalara, connect to
*AvaTax*. This step links Odoo and *AvaTax* bidirectionally.

Navigate to either Avalara\'s
[sandbox](https://sandbox.admin.avalara.com/) or
[production](https://admin.avalara.com/) environment. This will depend
on which type of Avalara account the company would like to integrate.


Log in to create the `License Key`.
Go to `Settings ‣ License and API
Keys`. Click
`Generate License Key`.

::: warning

A warning appears stating: [If your business app is connected to Avalara
solutions, the connection will be broken until you update the app with
the new license key. This action cannot be undone.]

Generating a new license key breaks the connection with existing
business apps using the *AvaTax* integration. Make sure to update these
apps with the new license key.
::::

If this will be the first
`API (application programming interface)`
integration being made with *AvaTax* and Odoo, then click
`Generate license key`.

If this is an additional license key, ensure the previous connection can
be broken. There is **only** one license key associated with each of the
Avalara sandbox and production accounts.

:::: warning

Copy this key to a safe place. It is strongly encouraged to back up the
license key for future reference. This key **cannot** be retrieved after
leaving this screen.
::::

## Odoo configuration 

Before using *AvaTax*, there are some additional configurations in Odoo
to ensure tax calculations are made accurately.

Verify that the Odoo database contains necessary data. The country
initially set up in the database determines the fiscal position, and
aids *AvaTax* in calculating accurate tax rates.

### Fiscal country 

To set the `Fiscal Country`, navigate
to `Accounting app ‣ Configuration
‣ Settings`.


Under the `Taxes` section, set the
`Fiscal Country` feature to `United
States`, `Canada`, or `Brazil`. Then,
click `Save`.

### Company settings

All companies operating under the Odoo database should have a full and
complete address listed in the settings. Navigate to the
`Settings app`, and under the
`Companies` section, ensure there is
only one company operating the Odoo database. Click
`Update Info` to open a separate page
to update company details.

If there are multiple companies operating in the database, click
`Manage Companies` to load a list of
companies to select from. Update company information by clicking into
the specific company.

Database administrators should ensure that the
`Street...`,
`Street2...`,
`City`, `State`, `ZIP`, and
`Country` are all updated for the
companies.

This ensures accurate tax calculations and smooth end-of-year accounting
operations.


### Module installation

Next, ensure that the Odoo *AvaTax* module is installed. To do so,
navigate to the `Apps application`. In the `Search...` bar, type in [avatax], and press
`Enter`. The following results populate:

  --------------------------------------------------------------------------------------------------------------------------------------
  Name                                                    Technical name                             Description
  ------------------------------------------------------- ------------------------------------------ -----------------------------------
  `Avatax`             [account_avatax]               Default *AvaTax* module. This
                                                                                                     module adds the base *AvaTax*
                                                                                                     features for tax calculation.

  `Avatax for geo localization`   This module includes the features
  role="guilabel"}                                                                                   required for integration of
                                                                                                     *AvaTax* into geo-localization in
                                                                                                     Odoo.

  `Avatax for SO`      [account_avatax_sale]          Includes the information needed for
                                                                                                     tax calculation on sales orders in
                                                                                                     Odoo.

  `Avatax for Inventory`         Includes tax calculation in Odoo
  role="guilabel"}                                                                                   Inventory.

  `Amazon/Avatax Bridge`           Includes tax calculation features
  role="guilabel"}                                                                                   between the *Amazon Connector* and
                                                                                                     Odoo.

  `Avatax Brazil`      [l10n_br_avatax]               Includes information for tax
                                                                                                     calculation in the Brazil
                                                                                                     localization.

  `Avatax Brazil for Services`      This module includes the required
  role="guilabel"}                                                                                   features for tax calculation for
                                                                                                     services in the Brazil
                                                                                                     localization.

  `Avatax Brazil Sale for Services`    This module includes the required
  role="guilabel"}                                                                                   features for tax calculation for
                                                                                                     the sale of services in the Brazil
                                                                                                     localization. This includes
                                                                                                     electronic data interchange (EDI).

  `Test SOs for the Brazilian AvaTax`     This module includes the required
  role="guilabel"}                                                                                   features for test sales orders in
                                                                                                     the Brazil localization.
  --------------------------------------------------------------------------------------------------------------------------------------

Click the `Install` button on the
module labeled, `Avatax`:
[account_avatax]. Doing so installs the following modules:

- `Avatax`:
  [account_avatax]
- `Avatax for SO`:
  [account_avatax_sale]
- `Avatax for Inventory`:
  [account_avatax_stock]

Should *AvaTax* be needed for geo-localization, or with the *Amazon
Connector*, then install those modules individually by clicking on
`Install` on
`Avatax for geo localization` and
`Amazon/Avatax Bridge`, respectively.


### Odoo AvaTax settings 

To integrate the *AvaTax*
`API (application programming interface)`
with Odoo, go to
`Accounting app ‣ Configuration ‣ Settings` section. The `AvaTax` fields in the `Taxes` section is where the *AvaTax* configurations are made,
and the credentials are entered in.

First, tick the checkbox to the left of the `AvaTax` settings, to activate *AvaTax* on the database. This is
a quick, convenient way to activate and deactivate *AvaTax* tax
calculation on the Odoo database.

![Configure AvaTax settings](avatax/avatax-configuration-settings.png)

#### Prerequisites 

First, select the `Environment` in
which the company wishes to use *AvaTax* in. It can either be
`Sandbox` or
`Production`.


#### Credentials

Now, the credentials can be entered in. The *AvaTax*
`Account ID` should be entered in the
`API ID` field, and the
`License Key` should be entered in
the `API
Key` field.

::: warning

The `Account ID` can be found by
logging into the *AvaTax* portal
([sandbox](https://sandbox.admin.avalara.com/) or
[production](https://admin.avalara.com/)). In the upper-right corner,
click on the initials of the user and `Account`. The `Account ID` is
listed first.

To access the `License Key` see this
documentation:
`accounting/avatax/create_avalara_credentials`.
::::

For the `Company Code` field, enter
the Avalara company code for the company being configured. Avalara
interprets this as [DEFAULT], if it is not set. The
`Company Code` can be accessed in the
Avalara management portal.

First, log into the *AvaTax* portal
([sandbox](https://sandbox.admin.avalara.com/) or
[production](https://admin.avalara.com/)). Then, navigate to
`Settings ‣ Manage Companies`.
The `Company Code` value is located
in the row of the `Company` in the
`Company Code` column.

![AvaTax company code highlighted on the company details page.](avatax/company-code.png)

#### Transaction options

There are two transactional settings in the Odoo *AvaTax* settings that
can be configured: `Use UPC` and
`Commit Transactions`.

If the checkbox next to `Use UPC` is
ticked, the transactions will use Universal Product Codes (UPC), instead
of custom defined codes in Avalara. Consult a certified public
accountant (CPA) for specific guidance.

Should the `Commit Transactions`
checkbox be ticked, then, the transactions in the Odoo database will be
committed for reporting in *AvaTax*.

#### Address validation

The *Address Validation* feature ensures that the most up-to-date
address by postal standards is set on a contact in Odoo. This is
important to provide accurate tax calculations for customers.

::: warning

The `Address Validation` feature only
works with partners/customers in North America.
::::

Additionally, tick the checkbox next to the
`Address validation` field.

::: warning

For accurate tax calculations, it is best practice to enter a complete
address for the contacts saved in the database. However, *AvaTax* can
still function by implementing a best effort attempt using only the
`Country`, `State`, and `Zip code`.
These are the three minimum required fields.
::::

`Save` the settings to implement the
configuration.

::: tip

Manually `Validate` the address by
navigating to the `Contacts app`, and selecting a contact. Now that the *AvaTax*
module has been configured on the database, a
`Validate` button appears directly
below the `Address`.

Click `Validate`, and a pop-up window
appears with a `Validated Address`
and `Original Address` listed. If the
`Validated Address` is the correct
mailing address for tax purposes, click
`Save Validated`.

![Validate address pop-up window in Odoo with \"Save Validated\" button and \"Validated
Address\" highlighted.](avatax/validate-address.png)
::::

:::: warning

All previously-entered addresses for contacts in the Odoo database will
need to be validated using the manually validate process outlined above.
Addresses are not automatically validated if they were entered
previously. This only occurs upon tax calculation.
::::

#### Test connection

After entering all the above information into the *AvaTax* setup on
Odoo, click `Test
connection`. This ensures the
`API ID` and
`API KEY` are correct, and a
connection is made between Odoo and the *AvaTax* application programming
interface (API).

#### Sync parameters

Upon finishing the configuration and settings of the *AvaTax* section,
click the `Sync
Parameters` button. This action
synchronizes the exemption codes from *AvaTax*.

### Fiscal position 

Next, navigate to
`Accounting app ‣ Configuration ‣ Accounting: Fiscal
Positions`. A
`Fiscal Position` is listed named,
`Automatic Tax Mapping
(AvaTax)`. Click it to open
*AvaTax\'s* fiscal position configuration page.

Here, ensure that the `Use AvaTax API` checkbox is ticked.

Optionally, tick the checkbox next to the field labeled:
`Detect Automatically`. Should this
option be ticked, then, Odoo will automatically apply this
`Fiscal Position` for transactions in
Odoo.

Enabling `Detect Automatically` also
makes specific parameters, such as `VAT
required`,
`Foreign Tax ID`,
`Country Group`,
`Country`,
`Federal States`, or
`Zip Range` appear. Filling these
parameters filters the `Fiscal Position` usage. Leaving them blank ensures all calculations are
made using this `Fiscal Position`.

:::: warning

Should the `Detect Automatically`
checkbox not be ticked, each customer will need to have the
`Fiscal Position` set on their
`Sales and Purchase` tab of the
contact record. To do so, navigate to
`Sales app ‣ Order ‣ Customers`, or `Contacts app ‣ Contacts`. Then, select a customer or contact to set the
fiscal position on.

Navigate to the `Sales and Purchase`
tab, and down to the section labeled,
`Fiscal Position`. Set the
`Fiscal Position` field to the fiscal
position for the customer.
::::


#### AvaTax accounts

Upon selecting the checkbox option for
`Use AvaTax API` a new
`AvaTax` tab appears. Click into this
tab to reveal two different settings.

The first setting is the `AvaTax Invoice Account`, while the second is, `AvaTax
Refund Account`. Ensure both accounts
are set for smooth end-of-year record keeping. Consult a certified
public accountant (CPA) for specific guidance on setting both accounts.

Click `Save` to implement the
changes.

### Tax mapping

The *AvaTax* integration is available on sale orders and invoices with
the included *AvaTax* fiscal position.

::: tip

Additionally, there is a `Tax Mapping` tab and `Account Mapping` tab in the
`Automatic Tax Mapping (AvaTax)`
fiscal position, where mapping for products can also be configured. To
access `Fiscal Positions` navigate to
`Accounting app
‣ Configuration ‣ Accounting: Fiscal Positions`.
::::

#### Product category mapping

Before using the integration, specify an
`Avatax Category` on the product
categories. Navigate to
`Inventory app ‣ Configuration ‣ Product Categories`. Select the product category to add the
`AvaTax Category` to. In the
`AvaTax Category` field, select a
category from the drop-down menu, or `Search More...` to open the complete list of options.

![Specify AvaTax Category on products.](avatax/avatax-category.png)

#### Product mapping

*AvaTax* Categories may be set on individual products, as well. To set
the `Avatax
Category` navigate to
`Inventory app ‣ Products ‣ Products`. Select the product to add the
`Avatax Category` to. Under the
`General Information` tab, on the
far-right, is a selector field labeled:
`Avatax Category`. Finally, click the
drop-down menu, and select a category, or
`Search More...` to find one that is
not listed.

::: tip

If both the product, and its category, have an
`AvaTax Category` set, the product\'s
`AvaTax Category` takes precedence.
::::

![Override product categories as needed.](avatax/override-avatax-product-category.png)

::: warning

Mapping an `AvaTax Category` on
either the *Product* or *Product Category* should be completed for every
*Product* or *Product Category*, depending on the route that is chosen.
::::


::: 
avatax/avatax_use avatax/avalara_portal
:::
