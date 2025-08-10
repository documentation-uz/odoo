# Budgets

`Analytic budgets ` track specific activities and projects using analytic
accounts, helping businesses make informed decisions about specific
departments, projects, or other groups of transactions. In contrast,
`financial budgets
` are tied
to the general ledger accounts that appear on the profit and loss and
focus on the company\'s overall economic position.

## Analytic budgets 

Analytic budgets allow for allocating and tracking income and expenses
in detail, breaking down costs and revenues by specific projects,
departments, or groups of transactions. Analytic budgets can be applied
across various departments or projects to measure profitability and
performance. Odoo manages analytic budgets using
`analytic accounting `.

To activate the option for creating analytic budgets, go to
`Accounting ‣
Configuration ‣ Settings`, and
enable `Budget Management` in the
`Analytics` section.

::: warning

Odoo structures budgets using
`plans ` and
`accounts `, which must be configured *before* creating a budget.
::::

### Set an analytic budget 

To create a new budget, go to
`Accounting ‣ Accounting ‣ Analytic Budgets` and click `New`. Make sure the following fields are appropriately
completed: `Budget
Name`, `Period`, and `Budget Type`.

Click `Add a line` in the
`Budget Lines` tab to structure the
budget with the
`analytic plans ` and `accounts
` previously created. While the `analytic
plans ` correspond to the column names, select the
`analytic accounts ` to define the budget lines and set the amounts for each in
the `Budgeted` column. Once all the
budget lines are settled, click `Open`. If changes need to be made once the budget\'s status
is `Open`, there are two options:

- `Reset to Draft`: To overwrite the
  data, then reopen the budget.
- `Revise`: A new budget will be
  created. Once it is `Open`, a
  `Rev` reference is added to the
  `Budget Name`. The original budget
  is then `Revised`.

### Check an analytic budget 

Once the budget is `Open`, two
additional columns are available: `Committed` and `Achieved`.
These columns\' amounts are automatically calculated based on the
related
`analytic distribution ` of journal items. When the
`analytic distribution ` of a journal item within the budget\'s period is updated,
the budget\'s columns for the analytic account(s) selected in the
distribution are automatically updated. The `Achieved` amount reflects the current result according to the
items of confirmed journal entries for the associated
`analytic account `. In contrast, the `Committed` amount displays the full value of the
`Achieved` amount, plus any confirmed
purchase orders that have not yet been billed.

::: tip

\- When a line in a request for quotation or purchase order includes an
analytic distribution, a `Budget`
smart button appears, providing a link to the `budget report
` for more details. - For `Open` budgets, if a request for quotation or a purchase order
is created using the associated analytic distribution and exceeds the
allocated budget amount, the corresponding purchase order line is
highlighted in red.
::::

To reveal the `Theoretical` amount or
percentage, use the `oi-settings-adjust`
(`adjust settings`) icon in the
`Budget Lines`\' header. The
`Theoretical` amount represents the
amount of money that could theoretically have been spent or should have
been received based on the current date relative to the start/end dates.
Click `Details` to open a filtered
view of the `budget report
` related to that specific budget line.

![open budget with committed, achieved, and theoretical amounts](budget/budget.png)

::: tip

Deleting a budget is only allowed in the `Draft` and `Cancelled`
stages.
::::

To view the budget lines of one or multiple budgets directly from the
`Budgets` list view, select the
budget(s) and click `Budget Lines`.

### Generate periodic budgets 

To create periodic budgets (monthly, quarterly, and yearly) for the
selected `Analytic
Plans`, click
`Generate`. A new budget is created
for each `Period` between the start
and end dates:

- If a single analytic plan is selected, each budget includes a line for
  each account in that analytic plan.
- If multiple analytic plans are selected, each budget includes a line
  for each account/analytic plan combination.

To generate periodic budgets, follow these steps:

1.  In the `Budgets` list view, click
    `Generate`.

2.  In the `Generate Budget` window,
    set the dates and select the `Period` and the `Analytic Plans`.

    ![all the options to generate periodical budgets](budget/generate-budgets.png)

3.  Click `Split` to create the
    periodic budgets.

4.  Click `Budgets` in the top-left
    corner to return to the `Budgets`
    list view.

5.  One by one, click on the different periodic budgets with the
    `Draft` status to open them and
    set the amounts in the `Budgeted`
    column for each analytic account linked to the chosen analytic
    plans.

6.  Click `Open` for each periodic
    budget.

### Reporting 

To perform various reporting actions, go to
`Accounting ‣ Reporting ‣
Budget Report`, then:

- Track, analyze, and compare budget data.
- Filter and group data using the `fa-plus-square` (`plus-square`) or
  `fa-minus-square`
  `(minus-square)` icon.
- Drill down into the report to see more details on the actual amounts
  and transactions.
- Export the data for further analysis or reporting needs.

## Financial budgets 

Financial budgets are structured around specific income and expense
accounts and transactions for official financial reporting and
compliance purposes.

::: tip

Financial budgets are available on the `Profit and Loss
`
report.
::::

### Set a financial budget 

To create a new financial budget, follow these steps:

1.  Go to
    `Accounting ‣ Reporting ‣ Profit and Loss` to open the
    `Profit and Loss ` report.
2.  Click the `fa-calendar`
    `(calendar)` button to use the
    date selector and choose a period.
3.  Click the `fa-bar-chart`
    `Budget` button and name the
    budget. A new column labeled with the budget name will appear next
    to the `Balance` column.
4.  Assign amounts to each account requiring analysis.
5.  A new `%` column will appear to
    the right of the new budget column, indicating the current status.

Different financial budgets can be created using these steps for
comparison purposes.

::: tip

The date selector enables the division of periods and navigation between
periods, automatically updating the amounts accordingly.
::::
