
---
name: requirements
description: Analyze Jira stories and create requirements documentation.
---

# Requirements Skill

1. Fetch Jira issue `EXP-1` using Atlassian MCP.
2. Analyze the user story and all acceptance criteria.
3. Identify functional requirements, constraints, and ambiguities.
4. Do not invent requirements or expand the approved scope.
5. Create or update `docs/requirements.md`.
6. Create or update `docs/agent-reports/requirements-agent-report.md`.

## Mandatory Agent Report

The report must include:
- Work performed
- Requirements identified
- Files created or modified
- Issues or ambiguities found
- Handover status

## Rules

- Always update both the requirements document and agent report.
- Never leave the report empty or claim work not performed.
- Do not write application code.
- Do not modify Jira.
- Escalate unclear requirements to the Orchestrator.
- Do not mark the task complete until both documents are updated.

