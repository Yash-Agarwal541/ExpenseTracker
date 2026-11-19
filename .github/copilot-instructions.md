
# ExpenseTracker — Copilot Instructions

## Project Overview
Build a simple personal Expense Tracker application.

## Technology Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Browser LocalStorage

Do not introduce backend technologies, databases, frameworks or additional dependencies.

## Source of Truth
- Jira project: Expense Tracker
- Jira issue: EXP-1
- User story and acceptance criteria in Jira define the application scope.
- Do not add features beyond the approved acceptance criteria without permission.

## Application Requirements
The application must support:
1. Add expenses.
2. View expenses.
3. Edit expenses.
4. Delete expenses.
5. Display total expenses.
6. Filter expenses by category.
7. Persist expenses using LocalStorage.
8. Validate required fields and expense amounts.

## SDLC Rules
- Follow the defined SDLC workflow.
- Use the eight specialized agents and their assigned responsibilities.
- Do not skip approval or review stages.
- Do not let agents perform responsibilities assigned to other agents.
- The Orchestrator coordinates the workflow; it does not independently implement features.

## Documentation Rules
- Every agent must create or update its individual report under `docs/agent-reports/`.
- Maintain relevant project documentation under `docs/`.
- Record work performed, files changed, decisions, issues and handover status.
- Never claim work was completed unless it was actually performed.

## Development Rules
- Keep code simple, readable and maintainable.
- Use meaningful names and modular JavaScript functions.
- Handle invalid input and errors appropriately.
- Do not modify approved requirements without authorization.
- Do not overwrite existing work without reviewing it first.

## Git Rules
- Follow the agreed branch and pull request workflow.
- Never push directly to main unless explicitly authorized.
- Do not commit secrets or credentials.
