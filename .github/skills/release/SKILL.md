
---
name: release
description: Prepare and verify the Expense Tracker release.
---

# Release Skill

## Must Follow
- Prompt: `.github/prompts/release.prompt.md`
- Shared instructions: `.github/copilot-instructions.md`
- Documentation: `.github/instructions/documentation.instructions.md`

## Tasks
1. Check verification and code review results.
2. Confirm critical issues are resolved or documented.
3. Verify project documentation.
4. Update `CHANGELOG.md` and `README.md` if needed.
5. Check Git status, branch and PR readiness.
6. Update `docs/release-report.md`.
7. Update `docs/agent-reports/release-agent-report.md`.

## Rules
- Always update both documents.
- Never claim an unverified release.
- Do not merge or push without authorization.
- Complete only after both documents are updated.

