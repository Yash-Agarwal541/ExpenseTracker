# Expense Tracker — Application Architecture

## Objective

Define a simple frontend-only architecture that implements the eight approved EXP-1 acceptance criteria without introducing frameworks, backend services, databases, or dependencies.

## Architecture Overview

The application is a static browser application with three layers:

- **HTML (`index.html`)**: semantic structure for expense entry, expense list/filter controls, and total display.
- **CSS (`css/style.css`)**: presentation and responsive layout for the HTML components.
- **Vanilla JavaScript (`js/script.js`)**: UI event handling, expense operations, validation, filtering, total calculation, and LocalStorage persistence.

No server or external service is part of the architecture.

## Component Responsibilities

| Component | Responsibility |
|---|---|
| Expense form | Collect title, amount, category, and date; validate input; submit add or edit operations. |
| Expense list | Render recorded expenses and expose edit and delete actions. |
| Category filter | Select a category and restrict displayed expenses to matching entries. |
| Total display | Calculate and present the sum of the currently recorded expenses. |
| Expense store | Load, save, update, and delete expense records in browser LocalStorage. |

## Expense Data Model

Each expense record must contain:

- `id`: stable unique identifier
- `title`: required text
- `amount`: required numeric value
- `category`: required text
- `date`: required date value

The exact storage key name is an implementation detail, while persisted records remain local to the browser.

## Data Flow

1. The application loads expense records from LocalStorage at startup.
2. User actions raise JavaScript events.
3. Input is validated before add or edit operations.
4. Valid operations update the in-memory expense collection.
5. The collection is persisted to LocalStorage.
6. The expense list, category filter view, and total display are refreshed from the collection.

## Requirements Mapping

| Area | Architectural Support |
|---|---|
| FR-1/FR-3 | Form add/edit mode and expense record update operations. |
| FR-2 | Expense-list renderer using the expense collection. |
| FR-4 | Expense deletion operation and list refresh. |
| FR-5 | Total calculation over recorded expenses. |
| FR-6 | Category predicate applied during list rendering. |
| FR-7 | Browser LocalStorage load/save operations with defensive error handling. |
| FR-8 | Required-field and numeric amount validation before persistence. |

## Persistence and Error Handling

- Read failures or invalid stored data must not crash the application.
- Write failures must be handled safely and reported through the UI when possible.
- State updates occur only after validation succeeds.
- The implementation should keep storage access isolated in small functions.

## Issues and Design Constraints

- Category values and date format are not defined by EXP-1.
- Zero, maximum, and presentation-format rules for amounts are not defined.
- Delete confirmation and post-delete behavior are not specified.
- These items are intentionally left unresolved rather than expanding scope.

## Handover

- Architecture status: complete.
- No application code was implemented.
- Ready for Design Review Agent after human approval.