# Agent Guide

## Start Here

- Read [architecture](docs/agent/architecture.md) before changing component behavior.
- Read [workflow](docs/agent/workflow.md) before editing.
- Read [active tasks](tasks/active.md) for a feature or defect.

## Project Facts

- This is a dependency-free React editable-table component.
- Package exports are in `src/index.ts`; implementation is in `src/EditTable/`.
- Documentation and demos are under `docs/`; package scripts use npm.
- No test script exists. Use the validation that matches the changed surface.

## Commands

```bash
npm run build
npm run lint
npm run docs:build
npm run agent:check
```

## Working Rules

1. Direct code and documentation edits are allowed.
2. Make the narrowest change on the real data/rendering path. Reuse existing helpers before adding code or dependencies.
3. For a feature or defect, create or update an entry in `tasks/active.md`; move it to `tasks/completed.md` with validation evidence when finished.
4. If `.codegraph/` exists, use CodeGraph before searching source with `rg`.
5. Keep replies concise and evidence-based.

## Hard Boundaries

- Do not change exported API, dependencies, publish settings, Git history, or remote state without user approval.
- Do not commit or publish unless the user explicitly asks.
- Sync `docs/components/` and affected demos when component behavior changes.
- Report a failed command as failed, with its command and relevant error; never infer a pass.
- Run `npm run agent:check` and `git diff --check` for governance changes.

## Knowledge Base

- [Component architecture](docs/agent/architecture.md)
- [Operating workflow](docs/agent/workflow.md)
- [Active tasks](tasks/active.md)
- [Completed tasks](tasks/completed.md)
