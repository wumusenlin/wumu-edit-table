# Type Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove internal duplicate types and dead code while preserving the component's public behavior.

**Architecture:** `type/types.basic.tsx` remains the source of truth for low-level table contracts. Render-layer types in `types.tsx` compose those contracts. A single record-value helper serves display and edit paths; fixed-offset calculation uses index traversal instead of mutating its input.

**Tech Stack:** React 18, TypeScript, Father, Node.js built-in test runner.

## Global Constraints

- Do not change `src/index.ts` exports, component Props, dependencies, publish settings, Git history, or remote state.
- Keep the existing controlled-component data flow unchanged.
- Use no new dependencies or test framework.
- Validate with `npm run build`, `npm run lint`, `node --test test/genFixedInfo.test.mjs`, and `git diff --check`.

---

### Task 1: Add fixed-column mutation regression check

**Files:**
- Create: `test/genFixedInfo.test.mjs`

**Interfaces:**
- Consumes: source `genFixedInfo(columns)` bundled in memory by installed esbuild.
- Produces: a regression check that detects mutation of the original columns array.

- [x] **Step 1: Write the failing test**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const testDir = dirname(fileURLToPath(import.meta.url));
const utilsPath = resolve(testDir, '../src/EditTable/helper/utils.tsx');

async function loadGenFixedInfo() {
  const source = await readFile(utilsPath, 'utf8');
  const result = await build({
    stdin: {
      contents: source.replace("import '../css/tbody.css';", ''),
      resolveDir: dirname(utilsPath),
      sourcefile: 'utils.tsx',
      loader: 'tsx',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
  });
  const module = await import(
    `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`,
  );

  return module.genFixedInfo;
}

test('genFixedInfo preserves a frozen columns array', async () => {
  const genFixedInfo = await loadGenFixedInfo();
  const columns = Object.freeze([
    { dataIndex: 'name', fixed: 'left', width: 80 },
    { dataIndex: 'price', width: 100 },
    { dataIndex: 'actions', fixed: 'right', width: 60 },
  ]);

  assert.deepEqual(genFixedInfo(columns), { left: { 0: 0 }, right: { 2: 0 } });
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `node --test test/genFixedInfo.test.mjs`

Expected: FAIL because current `genFixedInfo` reverses `columns` in place and cannot mutate a frozen array.

- [x] **Step 3: Keep the test for future regression coverage**

The test bundles the source in memory because Node does not execute repository `.tsx` source directly.

### Task 2: Consolidate internal contracts and helpers

**Files:**
- Modify: `src/EditTable/type/types.basic.tsx`
- Modify: `src/EditTable/type/types.useful.tsx`
- Modify: `src/EditTable/types.tsx`
- Modify: `src/EditTable/helper/DragManager.tsx`
- Modify: `src/EditTable/helper/fn.tsx`
- Modify: `src/EditTable/helper/utils.tsx`
- Modify: `src/EditTable/core/cellRenderer.tsx`
- Modify: `src/EditTable/index.tsx`

**Interfaces:**
- Consumes: `ColumnProps`, `FixedInfoProps`, `AutoCol`, and `HandleChange` from `type/types.basic.tsx`.
- Produces: PascalCase internal Props names, typed drag-column state, and `getRecordValue(record, dataIndex)` for cell rendering.

- [x] **Step 1: Remove duplicate type wrappers**

Import the base `FixedInfoProps`, `AutoCol`, and `HandleChange` directly where needed. Remove their duplicate definitions from `types.tsx`; retain public component shape and field types.

- [x] **Step 2: Normalize internal names and drag state**

Rename internal Props interfaces to PascalCase. Type `DragManager.columns` as `ColumnProps[]` and its setter as `Dispatch<SetStateAction<ColumnProps[]>>`; preserve its event sequence and DOM behavior.

- [x] **Step 3: Extract the record-value helper and remove dead code**

Add `getRecordValue(record, dataIndex)` in `helper/utils.tsx`, use it from `cellRenderer.tsx`, delete unused `isExist`, `notExist`, `notEmptyArray`, and remove the production render `console.log` plus obsolete commented-out code.

- [x] **Step 4: Stop fixed-info input mutation**

Replace both `reverse()` traversals with indexed loops over a `ReadonlyArray<ColumnProps>`. Preserve offsets: left offsets accumulate left-fixed columns from left to right; right offsets accumulate right-fixed columns from right to left.

- [x] **Step 5: Run the regression check**

Run: `npm run build && node --test test/genFixedInfo.test.mjs`

Expected: build succeeds and the test passes.

### Task 3: Validate the refactor

**Files:**
- Modify: `docs/superpowers/plans/2026-07-24-type-cleanup.md` to mark completed plan steps.

**Interfaces:**
- Consumes: completed internal refactor and test.
- Produces: validation evidence recorded in the plan.

- [x] **Step 1: Run lint**

Run: `npm run lint`

Expected: ESLint and Stylelint exit with code 0.

- [x] **Step 2: Run final build and regression check**

Run: `npm run build && node --test test/genFixedInfo.test.mjs`

Expected: Father emits declarations and the Node test runner reports one passing test.

- [x] **Step 3: Check the final diff**

Run: `git diff --check && git status --short`

Expected: no whitespace errors; only the intended source, test, and internal design/plan files are modified.

- [x] **Step 4: Do not commit**

The repository policy requires explicit user approval before committing. Leave the finished diff on `refactor/type-cleanup`.

## Validation Evidence

- `npm run lint` — passed.
- `npm run build` — passed; declarations generated for 21 files.
- `node --test test/genFixedInfo.test.mjs` — passed; 1 test, 0 failures.
- `npm run agent:check` — passed.
- `git diff --check` — passed.
