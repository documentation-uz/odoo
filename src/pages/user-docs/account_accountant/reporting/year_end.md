# Year-end closing

Year-end closing is vital for maintaining financial accuracy, complying
with regulations, making informed decisions, and ensuring transparency
in reporting.


## Fiscal years 

By default, the fiscal year is set to last 12 months and ends on
December 31st. However, its duration and end date can vary due to
cultural, administrative, and economic considerations.

To modify these values, go to
`Accounting ‣ Configuration ‣ Settings`. Under the `Fiscal Periods` section, change the `Last Day` field if necessary.

If the period lasts *more* than or *less* than 12 months, enable
`Fiscal Years` and
`Save`. Go back to the
`Fiscal Periods` section and click
`oi-arrow-right`
`Fiscal Years`. Then, click
`New`, give it a
`Name` and both a
`Start Date` and
`End Date`.

::: tip

Once the set fiscal period is over, Odoo automatically reverts to the
default periodicity, considering the value specified in the
`Last Day` field.
::::

## Year-end checklist 

### Before closure 

Before closing a fiscal year, ensure that everything is accurate and
up-to-date:

- Make sure all bank accounts are fully
  `reconciled ` up
  to year-end, and confirm that the ending book balances match the bank
  statement balances.
- Verify that all
  `customer invoices ` have been created and confirmed and that there are no
  draft invoices.
- Confirm that all `vendor bills  ` have been created and confirmed.
- Ensure the accuracy of all
  `expenses ` and validate
  them.
- Check that all `received payments ` have been encoded and confirmed.
- Close all
  `suspense accounts `.
- Book all `depreciation ` and `deferred revenue
  ` entries.

### Closing a fiscal year 

Then, to close the fiscal year:

- Run a `tax report `, and verify that all tax information is correct.
- Reconcile all accounts on the
  `balance sheet `:
  - Update the bank balances in Odoo according to the actual balances
    found on the bank statements.
  - Reconcile all transactions in the cash and bank accounts by running
    the `aged receivables
    ` and `aged payables
    `
    reports.
  - Audit all accounts, fully understanding all transactions and their
    nature, including `loans
    ` and
    `fixed assets `.
  - Optionally,
    `match payments ` to validate any open vendor bills and customer invoices
    with their payments. While this step is optional, it could assist
    the year-end closing process if all outstanding payments and
    invoices are reconciled, potentially finding errors or mistakes in
    the system.

Next, the accountant likely verifies balance sheet items and book
entries for:

> - year-end manual adjustments,
> - work in progress,
> - depreciation journal entries,
> - loans,
> - tax adjustments,
> - etc.

During the year-end audit, the accountant may print paper copies of all
balance sheet items (e.g., loans, bank accounts, prepayments, sales tax
statements) to compare them against the balances recorded in Odoo.

::: tip

As part of this process, setting a
`Lock Everything ` date to the last day (inclusive) of the preceding fiscal
year is good practice. This ensures that journal entries with an
accounting date on or before the lock date cannot be created or modified
during the audit. Users with *administrator* access rights can still
create and edit entries if an exception is configured.
::::

#### Lock everything date 

Setting a lock date prevents modifications to any posted journal entries
with an accounting date on or before the lock date. It also prevents
posting new entries with an accounting date on or before the lock date.
In such cases, the system automatically sets the accounting date to the
day after the lock date.

To set a `Lock Everything` date, go
to `Accounting ‣ Accounting ‣ Lock
Dates`. In the
`Lock Journal Entries` window, set
the `Lock Everything` date and
`Save`.

::: tip

Users with `Administrator` access
rights to the Accounting app can create exceptions. To do so:

1.  After setting the `Lock Everything` date, reopen the `Lock Journal
    Entries` window and remove the
    `Lock Everything` date.
2.  In the `Exception` banner, choose
    if this exception should be set `for me` (the current user) or
    `for everyone` and how long it
    should last.
3.  A `Reason` for this exception can
    be added.
4.  All of this information is logged in the chatter of the
    `company record
    `.
::::

::: tip

To remove the `Lock Everything` date
after it has been saved, configure the exception to apply
`for everyone` and set the duration
to `forever`.
::::

#### Current year\'s earnings 

Odoo uses a unique account type called **current year\'s earnings** to
display the difference between the **income** and **expense** accounts.

::: tip

The chart of accounts can only contain one account of this type. By
default, it is a 999999 account named
`Undistributed Profits/Losses`.
::::

To allocate the current year\'s earnings, create a new miscellaneous
entry with a date set to the end of the fiscal year to book them to any
equity account.

Then, verify whether the current year\'s earnings on the **balance
sheet** correctly show a zero balance. If so, a
`Hard Lock date` can be set to the
last day of the fiscal year in
`Accounting ‣ Accounting ‣ Lock Dates`.

::: tip

The `Hard Lock date` field is
irreversible and is intended to ensure data inalterability required to
comply with accounting regulations in certain countries. If such
compliance is not applicable, setting this field may not be necessary.
However, if required, the date should only be set once it is confirmed
to be correct, as it **cannot be changed or overridden**, regardless of
access rights.
::::
