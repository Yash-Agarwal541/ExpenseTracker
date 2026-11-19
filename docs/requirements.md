# Expense Tracker — Approved Requirements

## Source

- Jira issue: **EXP-1 — Manage Personal Expenses**
- Project: **Expense Tracker (EXP)**
- Jira status: **To Do**
- Jira description is the approved source of scope.

## Objective

The user must be able to add, view, edit, and delete daily expenses so that spending can be tracked and managed.

## Functional Requirements

| ID | Requirement | Jira Acceptance Criterion |
|---|---|---|
| FR-1 | Allow the user to add an expense with title, amount, category, and date. | 1 |
| FR-2 | Allow the user to view all recorded expenses. | 2 |
| FR-3 | Allow the user to edit an existing expense. | 3 |
| FR-4 | Allow the user to delete an expense. | 4 |
| FR-5 | Display the total expense amount. | 5 |
| FR-6 | Allow the user to filter expenses by category. | 6 |
| FR-7 | Persist expense data using browser LocalStorage. | 7 |
| FR-8 | Validate required fields and prevent invalid expense amounts. | 8 |

## Constraints

- Use HTML5, CSS3, and vanilla JavaScript.
- Use browser LocalStorage for persistence.
- Do not introduce a backend, database, framework, or additional dependency.
- Scope is limited to the eight acceptance criteria above.

## Validation Rules

- Title, amount, category, and date are required fields for an added expense.
- An expense must not be saved when required fields are missing.
- Invalid expense amounts must be prevented.

## Ambiguities and Risks

- The approved story does not define a finite list or naming convention for expense categories.
- The story does not state a specific date format or locale.
- The story does not state whether an amount of zero is invalid or define a maximum amount.
- The story does not define the exact presentation or currency symbol for the total expense.
- The story does not define confirmation behavior or the exact UI behavior after deletion.
- These details must not be added as approved scope; they require authorization or a later Jira decision before implementation.

## Traceability

The requirements above are derived only from EXP-1 and its eight acceptance criteria. No additional product feature is included.