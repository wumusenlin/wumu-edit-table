# Agent Harness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Add a small, repository-native harness that lets an agent safely maintain wumu-edit-table with durable context, task records, and a deterministic governance check.

**Architecture:** Keep AGENTS.md short and navigational. Store source-of-truth project knowledge in docs/agent/, track non-trivial work in two Markdown ledgers under tasks/, and check the harness with a dependency-free Node script exposed by npm.

**Tech Stack:** Markdown, Node.js built-ins, npm scripts, existing React/TypeScript/father/dumi toolchain.

## Global Constraints

- Do not add dependencies, runtime code, MCP configuration, hooks, or platform-specific custom-agent profiles.
- Agents may edit code and run existing commands directly; they may not change public API, dependencies, publishing, Git commits, or remote state without explicit user authorization.
- Preserve the package's public entrypoint src/index.ts and existing build outputs.
- Use npm, not another package manager.
- Run npm run agent:check and git diff --check for every harness change.

---

### Task 1: Add the cross-agent entrypoint and operational documents

**Files:**

- Create: AGENTS.md
- Create: docs/agent/architecture.md
- Create: docs/agent/workflow.md
- Create: tasks/active.md
- Create: tasks/completed.md

**Interfaces:**

- Consumes: Existing source structure under src/EditTable/, documented component examples in docs/components/edit-table.md, and scripts in package.json.
- Produces: A short repository entrypoint linking to the code map, operating workflow, and task ledgers.

- [ ] **Step 1: Write the harness entrypoint and code map**

Create AGENTS.md with this structure and exact command list:

~~~markdown
# Agent Guide

## Start Here

- Read [architecture](docs/agent/architecture.md) before changing component behavior.
- Read [workflow](docs/agent/workflow.md) before editing.
- Read [active tasks](tasks/active.md) for a feature or defect.

## Commands

~~~bash
npm run build
npm run lint
npm run docs:build
npm run agent:check
~~~

## Hard Boundaries

- Direct code and documentation edits are allowed.
- Do not change exported API, dependencies, publish settings, Git history, or remote state without user approval.
- Sync docs/components/ and affected demos when component behavior changes.
- Keep changes narrow and run the validation that matches the changed surface.
~~~

Create docs/agent/architecture.md with these exact sections: Public Surface, Module Map, Main Flows, and Documentation Map. Document the actual current modules:

~~~text
src/index.ts                 package export
src/EditTable/index.tsx      component state, virtual list and renderer composition
src/EditTable/core/          header, body, row and cell rendering
src/EditTable/helper/        DragManager, useVirtualList and table calculations
src/EditTable/input/         basic and select editors
src/EditTable/type/          low-level type definitions
src/EditTable/types.tsx      shared component types
~~~

- [ ] **Step 2: Write the direct-edit workflow**

Create docs/agent/workflow.md with Intake, Edit, Validate, Record, and Escalate sections. Encode the following decision table:

| Change | Required validation | Record |
|---|---|---|
| Documentation only | npm run docs:build | No task card for typo or formatting-only changes |
| Internal implementation | npm run build | Add a task card only for a defect or feature |
| CSS or TypeScript style | npm run lint plus the affected build | Add a task card only for a defect or feature |
| Public behavior | npm run build and npm run docs:build | Update docs/demo and task card |

State that validation failures must record the exact command and failure location; they must never be reported as a pass. State that a public API, dependency, publishing, commit, or remote-state change stops for explicit user approval.

- [ ] **Step 3: Add task ledgers**

Create tasks/active.md:

~~~markdown
# Active Tasks

Use one entry for each feature or defect. Do not create an entry for typo-only or formatting-only changes.

## Template

### [ID] Title

- Status: investigating | implementing | blocked
- Scope: files and behavior in scope
- Acceptance: observable result
- Validation: command and result
~~~

Create tasks/completed.md:

~~~markdown
# Completed Tasks

Move finished feature and defect records here.

## Template

### [ID] Title

- Scope: changed files and behavior
- Validation: command and result
- Notes: remaining limitation, or None
~~~

- [ ] **Step 4: Verify document links and content manually**

Run:

~~~bash
rg -n '^#|docs/agent/|tasks/' AGENTS.md docs/agent/architecture.md docs/agent/workflow.md tasks/active.md tasks/completed.md
~~~

Expected: AGENTS.md links to both docs/agent/ files and tasks/active.md; the architecture and workflow headings match the specified sections.

### Task 2: Add a dependency-free governance check

**Files:**

- Create: scripts/check-agent-harness.mjs
- Modify: package.json

**Interfaces:**

- Consumes: Repository root as process.cwd() and the five governance Markdown files from Task 1.
- Produces: Process exit code 0 when the harness exists and has the required navigation; non-zero with every missing or invalid condition printed to stderr.

- [ ] **Step 1: Write the failing check invocation**

Run before creating scripts/check-agent-harness.mjs:

~~~bash
npm run agent:check
~~~

Expected: FAIL because agent:check does not yet exist in package.json.

- [ ] **Step 2: Add the npm entrypoint**

Add this exact script to package.json:

~~~json
"agent:check": "node scripts/check-agent-harness.mjs"
~~~

Run the command again.

Expected: FAIL because scripts/check-agent-harness.mjs does not yet exist.

- [ ] **Step 3: Implement the minimal checker**

Create scripts/check-agent-harness.mjs using only node:fs, node:path, and node:process. It must use:

~~~js
const requiredFiles = [
  'AGENTS.md',
  'docs/agent/architecture.md',
  'docs/agent/workflow.md',
  'tasks/active.md',
  'tasks/completed.md',
];
~~~

For each path, use existsSync(join(process.cwd(), file)); print Missing: <file> to stderr for every absent file. When AGENTS.md exists, require the literal links docs/agent/architecture.md, docs/agent/workflow.md, and tasks/active.md; print AGENTS.md missing link: <link> for each absent link. Set process.exitCode = 1 when any issue is found.

- [ ] **Step 4: Run the governance check**

Run:

~~~bash
npm run agent:check
~~~

Expected: exit code 0 and no output.

- [ ] **Step 5: Commit**

Do not commit. This repository policy requires explicit user authorization before any Git commit.

### Task 3: Validate the delivered harness

**Files:**

- Modify: AGENTS.md only if Task 2 reveals a missing mandatory link.
- Modify: docs/agent/*.md or tasks/*.md only if Task 2 reveals a missing required file or heading.

**Interfaces:**

- Consumes: The documents from Task 1 and checker from Task 2.
- Produces: A clean, verifiable governance diff that does not alter package behavior.

- [ ] **Step 1: Run the full governance validation**

Run:

~~~bash
npm run agent:check
git diff --check
~~~

Expected: both commands exit 0.

- [ ] **Step 2: Run the existing package build**

Run:

~~~bash
npm run build
~~~

Expected: father completes successfully and dist/ is generated. If the repository's existing toolchain fails, preserve the output and report the command and first relevant error rather than changing unrelated build tooling.

- [ ] **Step 3: Review the final diff**

Run:

~~~bash
git diff --check
git status --short
~~~

Expected: no whitespace errors; only AGENTS.md, docs/agent/, tasks/, scripts/check-agent-harness.mjs, and package.json are new or modified, plus the pre-existing untracked design and plan documents.

- [ ] **Step 4: Commit**

Do not commit. Hand the verified diff to the user and wait for explicit authorization.

## Plan Self-Review

- Spec coverage: Task 1 supplies the short entrypoint, repository map, workflow, and task tracking. Task 2 supplies the deterministic check and npm command. Task 3 verifies the harness without modifying component behavior.
- Placeholder scan: no TBD, TODO, or undefined work remains.
- Interface consistency: AGENTS.md links and the checker both use the same five governance file paths; agent:check consistently invokes scripts/check-agent-harness.mjs.
