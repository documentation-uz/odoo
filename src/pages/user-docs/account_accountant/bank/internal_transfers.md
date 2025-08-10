# Internal transfers

Internal money transfers can be handled in Odoo. At least two bank or
cash accounts are needed to make internal transfers.


## Configuration

An internal transfer account is automatically created on your database
based on your company\'s
`localization ` and depending on your country's legislation. To modify the
default `Internal Transfer` account,
go to `Accounting ‣
Configuration ‣ Settings` and
scroll down to the `Default Accounts`
section.

## Register an internal transfer from one bank to another

When money is transferred from one bank or cash account to another, that
amount appears as two transactions on the corresponding journals,
whether the transactions are created manually, via import, or via
`bank synchronization `. When reconciling the transaction, select the
`Internal Transfers`
`reconciliation model ` button. This reconciliation model button writes the
transaction off to the `Internal
Transfer` account.

::: tip

Remember to reconcile the transaction for both the outgoing transaction
on the journal that sends the payment and the incoming transaction on
the journal that receives the payment.
::::

::: example
Take, for example, a transfer of \$1000 from Bank A to Bank B:

- Bank journal (Bank A)

    **Account**                     **Debit**     **Credit**
    ------------------------------- ------------- ------------
    Bank A account                                \$1,000
    **Internal transfer account**   **\$1,000**   

- Bank journal (Bank B)

    **Account**                     **Debit**   **Credit**
    ------------------------------- ----------- -------------
    Bank B account                  \$1,000     
    **Internal transfer account**               **\$1,000**
:::

