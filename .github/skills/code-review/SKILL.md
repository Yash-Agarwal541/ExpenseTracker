
---
name: code-review
description: Review application code for defects and maintainability.
---

# Code Review Skill

## Must Follow
- Prompt: `.github/prompts/code-review.prompt.md`
- Shared instructions: `.github/copilot-instructions.md`
- Coding standards: `.github/instructions/coding-standards.instructions.md`
- Documentation: `.github/instructions/documentation.instructions.md`

## Tasks
1. Review changed application files.
2. Check correctness against approved requirements.
3. Inspect validation, error handling and LocalStorage.
4. Identify bugs, security issues and unnecessary complexity.
5. Update `docs/code-review.md`.
6. Update `docs/agent-reports/code-review-agent-report.md`.

## Rules
- Always update both documents.
- Do not report unverified findings as confirmed defects.
- Do not modify application code.
- Complete only after both documents are updated.

