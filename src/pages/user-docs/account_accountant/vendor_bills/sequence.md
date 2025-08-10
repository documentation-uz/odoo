# Vendor bill sequence

When confirming a vendor bill, Odoo generates a unique vendor bill
reference number. By default, it uses the sequence format
[BILL/year/month/incrementing-number] (e.g.,
[BILL/2025/01/00001]), which restarts from
[00001] each year.

However, it is possible to
`change the sequence format ` and its periodicity, and to `mass-resequence vendor bills
`.

::: tip

Changes made to reference numbers are logged in the chatter.
::::

## Changing the default sequence 

To customize the default sequence, open the last confirmed vendor bill,
click `Reset to
Draft`, and edit the vendor bill\'s
reference number.

![Editing the reference number of a vendor bill.](sequence/sequence-reference-number.png)

Odoo then explains how the detected format will be applied to all future
vendor bills. For example, if the current vendor bill\'s month is
withdrawn, the sequence\'s periodicity will change to every year instead
of every month.

![Editing the reference number of a vendor bill.](sequence/sequence-dialog.png)

::: tip

The sequence format can be edited directly when creating the first
vendor bill of a given sequence period.
::::

## Mass-resequencing vendor bills 

It can be helpful to resequence multiple vendor bill numbers. For
example, when importing vendor bills from another accounting system and
the reference originates from the previous software, continuity for the
current year must be maintained without restarting from the beginning.

::: tip

This feature is only available to users with administrator or advisor
access.
::::

Follow these steps to resequence vendor bill numbers:

1.  Activate the `developer mode `.
2.  In the vendor bills list view, select the vendor bills that need a
    new sequence.
3.  Click the `fa-cog`
    `Actions` menu and select
    `Resequence`.
4.  In the `Ordering` field, choose
    to
    - `Keep current order`: The order
      of the numbers remains the same.
    - `Reorder by accounting date`:
      The number is reordered by accounting date.
5.  Set the `First New Sequence`.
6.  `Preview Modifications` and click
    `Confirm`.

![Resequence options window](sequence/sequence-bill-sequencing.png)

::: tip

\- To indicate where the sequence change began, the first vendor bill in
the new sequence is highlighted in red in the
`Vendor Bills` list. This visual
marker is permanent and purely informational. - If there are any
irregularities in the new sequence, such as gaps, cancelled, or deleted
entries within the open period, a
`Gaps in the sequence` message
appears in the `Vendor Bills` journal
on the Accounting dashboard. To view more details about the related
vendor bill(s), click `Gaps in the sequence`. This visual marker is temporary and will disappear
once the entry\'s accounting date is on or after the lock date.
::::

::: tip

Resequencing is not possible:

- When entries are before a lock date.
- When the sequence leads to a duplicate.
- When the range is invalid. For example, if the
  `Bill Date` doesn\'t align with the
  date in the new sequence, such as using a 2024 sequence
  (BILL/2024/MM/XXXX) for an vendor bill dated in 2025.

In these cases, a `Validation Error`
message appears.
::::
