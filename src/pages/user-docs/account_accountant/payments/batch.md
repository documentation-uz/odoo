# Batch payments

Batch payments allow grouping payments from multiple customers or
vendors into a single batch and generating a detailed deposit slip or
payment file with a batch reference. This reference can be used during
`reconciliation `
to match bank transactions with the corresponding payments. This feature
is particularly useful for submitting `SEPA Direct Debit
payments `, depositing cash
payments or `checks `, or generating outgoing payment files, such as
`SEPA ` or
`NACHA `.

## Configuration

To enable batch payments, go to
`Accounting ‣ Configuration ‣ Settings`, scroll down to the
`Customer Payments` section, and
enable `Batch Payments`.

## Batch creation 

To create a batch payment, follow these steps:

1.  Make sure all payments to be included in the batch have been
    `registered
    `.

2.  Go to `Accounting ‣ Customers ‣ Payments`.

3.  Select the payments to include in the batch.

    ::: tip
    : note

Once validated, no additional payments can be added to a batch.
::::

::: tip

\- Click `Print` to download a list
of the included payments. - To view existing batch payments, go to
`Accounting ‣ Customers ‣ Batch
Payments`.
::::

### Bank reconciliation

Once the bank transactions
`have been created `
in your database, you can
`reconcile them with the batch payment `.

