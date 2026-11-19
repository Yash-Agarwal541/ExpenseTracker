
---
name: verification
description: Verify Expense Tracker functionality against acceptance criteria.
---

# Verification Skill

## Must Follow
- Prompt: `.github/prompts/verification.prompt.md`
- Shared instructions: `.github/copilot-instructions.md`
- Testing standards: `.github/instructions/testing-standards.instructions.md`
- Documentation: `.github/instructions/documentation.instructions.md`

## Tasks
1. Review acceptance criteria and implementation.
2. Test each acceptance criterion.
3. Verify validation, CRUD, filtering and LocalStorage.
4. Record actual test results and defects.
5. Update `docs/test-plan.md`.
6. Update `docs/test-report.md`.
7. Update `docs/agent-reports/verification-agent-report.md`.

## Rules
- Always update all three documents.
- Never report unexecuted tests as passed.
- Do not modify application code.
- Complete only after documentation is updated.

