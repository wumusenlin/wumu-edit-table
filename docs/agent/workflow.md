# Agent Workflow

## Intake

1. Classify the request as documentation, internal implementation, feature, defect, public behavior, or release work.
2. For a feature or defect, add a concise record to `tasks/active.md`.
3. Read the affected code path and its callers before editing. If `.codegraph/` exists, use CodeGraph before `rg`.
4. Stop for approval before changing a public API, dependency, publishing, commit, or remote state.

## Edit

- Modify the narrowest real seam; do not patch each symptom when one shared path owns the behavior.
- Reuse installed tooling and existing helpers. Do not add abstractions or dependencies for hypothetical needs.
- Preserve controlled-component semantics: callers own `dataSource` and `editId`.
- Update component docs and demos only when user-visible behavior changes.

## Validate

| Change | Required validation | Record |
|---|---|---|
| Documentation only | `npm run docs:build` | No task card for typo or formatting-only changes |
| Internal implementation | `npm run build` | Add a task card only for a defect or feature |
| CSS or TypeScript style | `npm run lint` plus the affected build | Add a task card only for a defect or feature |
| Public behavior | `npm run build` and `npm run docs:build` | Update docs/demo and task card |
| Governance files | `npm run agent:check` and `git diff --check` | No task card required |

Run the smallest useful check first, then the required command above. If a command fails, record the exact command, the first relevant failure, and whether it blocks the changed path. Never report an unrun or failed command as passing.

## Record

- Keep `tasks/active.md` limited to current features and defects.
- When a task is finished, move it to `tasks/completed.md` with scope, validation output summary, and any remaining limitation.
- Do not create task entries for typo-only, formatting-only, or governance-only edits.

## Escalate

Ask the user before changing exports, props, dependencies, package publishing, Git history, remote state, or release configuration. Also ask when existing validation repeatedly fails before reaching the changed path.
