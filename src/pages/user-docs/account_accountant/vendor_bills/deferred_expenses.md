# Deferred expenses

**Deferred expenses** and **prepayments** (also known as **prepaid
expenses**) are both costs that have already occurred for products or
services yet to be received.

Such costs are **assets** for the company that pays them since it
already paid for products and services but has either not yet received
them or not yet used them. The company cannot report them on the current
**profit and loss statement**, or *income statement*, since the payments
will be effectively expensed in the future.

These future expenses must be deferred on the company\'s balance sheet
until the moment in time they can be **recognized**, at once or over a
defined period, on the profit and loss statement.

For example, let\'s say we pay \$1200 at once for one year of insurance.
We already pay the cost now but haven\'t used the service yet.
Therefore, we post this new expense in a *prepayment account* and decide
to recognize it on a monthly basis. Each month, for the next 12 months,
\$100 will be recognized as an expense.

Odoo Accounting handles deferred expenses by spreading them across
multiple entries that are posted periodically.

::: tip

The server checks once a day if an entry must be posted. It might then
take up to 24 hours before you see a change from
`Draft` to `Posted`.
::::

## Configuration

Make sure the default settings are correctly configured for your
business. To do so, go to
`Accounting ‣ Configuration ‣ Settings`. The following options are available:

Journal

:   The deferral entries are posted in this journal.

Deferred Expense

:   Expenses are deferred on this Current Asset account until they are
    recognized.

Generate Entries

:   By default, Odoo
    `automatically generates ` the deferral entries when you post a vendor bill.
    However, you can also choose to
    `generate them manually ` by selecting the `Manually & Grouped` option instead.

Based on

:   Suppose a bill of \$1200 must be deferred over 12 months.

    - The `Months` option accounts
      for \$100 each month prorated to the number of days in that month
      (e.g., \$50 for the first month if the
      `Start Date` is set to the 15th
      of the month).
    - The `Full Months` option
      considers each month started to be full (e.g., \$100 for the first
      month even if the `Start Date`
      is set to the 15th of the month); this means that with the
      `Full Months` option, a full
      \$100 is recognized in the first partial month, eliminating the
      need for a 13th month to recognize any remainder as would be the
      case when using the `Months`
      option.
    - The `Days` option accounts for
      different amounts depending on the number of days in each month
      (e.g., \~\$102 for January and \~\$92 for February).

## Generate deferral entries on validation 

::: tip

Make sure the `Start Date` and
`End Date` fields are visible in the
`Invoice Lines` tab. In most cases,
the `Start Date` should be in the
same month as the `Bill Date`.
Deferred expense entries are posted from the bill date and are displayed
in the report accordingly.
::::

For each line of the bill that should be deferred, specify the start and
end dates of the deferral period.

If the `Generate Entries` field is
set to `On invoice/bill validation`,
Odoo automatically generates the deferral entries when the bill is
validated. Click on the `Deferred Entries` smart button to see them.

One entry, dated on the same day as the bill\'s accounting date, moves
the bill amounts from the expense account to the deferred account. The
other entries are deferral entries which will, month after month, move
the bill amounts from the deferred account to the expense account to
recognize the expense.

::: example
You can defer a January bill of \$1200 over 12 months by specifying a
start date of 01/01/2023 and an end date of 12/31/2023. At the end of
August, \$800 is recognized as an expense, whereas \$400 remains on the
deferred account.
:::

## Reporting

The deferred expense report computes an overview of the necessary
deferral entries for each account. To access it, go to
`Accounting ‣ Reporting ‣ Deferred Expense`.

To view the journal items of each account, click on the account name and
then `Journal
Items`.

![Deferred expense report](deferred_expenses/deferred_expense_report.png)

::: tip

Only bills whose accounting date is before the end of the period of the
report are taken into account.
::::

## Generate grouped deferral entries manually 

If you have a lot of deferred revenues and wish to reduce the number of
journal entries created, you can generate deferral entries manually. To
do so, set the `Generate Entries`
field in the **Settings** to `Manually & Grouped`. Odoo then aggregates the deferred amounts in a single
entry.

At the end of each month, go to the Deferred Expenses report and click
the `Generate Entries` button. This
generates two deferral entries:

- One dated at the end of the month which aggregates, for each account,
  all the deferred amounts of that month. This means that at the end of
  that period, a part of the deferred expense is recognized.
- The reversal of this created entry, dated on the following day (i.e.,
  the first day of the next month) to cancel the previous entry.

::: example
There are two bills:

- Bill A: \$1200 to be deferred from 01/01/2023 to 12/31/2023
- Bill B: \$600 to be deferred from 01/01/2023 to 12/31/2023

In January

:   At the end of January, after clicking the
    `Generate Entries` button, there
    are the following entries:

    - Entry 1 dated on the 31st January:
      - Line 1: Expense account -1200 -600 = **-1800** (cancelling the
        total of both bills)
      - Line 2: Expense account 100 + 50 = **150** (recognizing 1/12 of
        bill A and bill B)
      - Line 3: Deferred account 1800 - 150 = **1650** (amount that has
        yet to be deferred later on)
    - Entry 2 dated on the 1st February, the reversal of the previous
      entry:
      - Line 1: Expense account **1800**
      - Line 2: Deferred account **-150**
      - Line 3: Expense account **-1650**

In February

:   At the end of February, after clicking the
    `Generate Entries` button, there
    are the following entries:

    - Entry 1 dated on the 28th February:
      - Line 1: Expense account -1200 -600 = **-1800** (cancelling the
        total of both bills)
      - Line 2: Expense account 200 + 100 = **300** (recognizing 2/12 of
        bill A and bill B)
      - Line 3: Deferred account 1800 - 300 = **1500** (amount that has
        yet to be deferred later on)
    - Entry 2 dated on the 1st March, the reversal of the previous
      entry.

From March to October

:   The same computation is done for each month until October.

In November

:   At the end of November, after clicking the
    `Generate Entries` button, there
    are the following entries:

    - Entry 1 dated on the 30th November:
      - Line 1: Expense account -1200 -600 = **-1800** (cancelling the
        total of both bills)
      - Line 2: Expense account 1100 + 550 = **1650** (recognizing 11/12
        of bill A and bill B)
      - Line 3: Deferred account 1800 - 1650 = **150** (amount that has
        yet to be deferred later on)
    - Entry 2 dated on the 1st December, the reversal of the previous
      entry.

In December

:   There is no need to generate entries in December. Indeed, if we do
    the computation for December, we will have an amount of 0 to be
    deferred.

In total

:   If we aggregate everything, we would have:

    - bill A and bill B
    - two entries (one for the deferral and one for the reversal) for
      each month from January to November

    Therefore, at the end of December, bills A and B are fully
    recognized as expense only once in spite of all the created entries
    thanks to the reversal mechanism.
:::
