# Component Architecture

## Public Surface

- `src/index.ts` exports `EditTable` and `genOptionsColumns`.
- `src/EditTable/types.tsx` defines the component-facing table, column, renderer, virtual-list, and input types.
- Public component behavior is documented in `docs/components/edit-table.md` and demonstrated in `docs/demo/`.
- Do not alter exports or props without explicit user approval.

## Module Map

| Path | Responsibility |
|---|---|
| `src/EditTable/index.tsx` | Owns local columns/data, composes header/body renderers, virtual scrolling, fixed-column data and drag lifecycle. |
| `src/EditTable/core/` | Renders header, body, rows, cells, and operation columns. |
| `src/EditTable/helper/useVirtualList.tsx` | Calculates the visible row slice, padding and scroll state. |
| `src/EditTable/helper/DragManager.tsx` | Reorders non-fixed header columns through native drag events. |
| `src/EditTable/helper/utils.tsx` | Builds column layout, fixed offsets, row keys, styles and display helpers. |
| `src/EditTable/input/` | Selects and renders basic or select editors. |
| `src/EditTable/type/` | Low-level shared type definitions. |
| `src/EditTable/types.tsx` | Higher-level internal and public TypeScript contracts. |
| `docs/components/` | User-facing component documentation. |
| `docs/demo/` | Dumi examples that exercise user-visible behavior. |

## Main Flows

### Edit a Cell

1. The consumer controls `dataSource` and `editId`.
2. `EditTable` adds internal row indexes with `setRowKey`, renders only the virtual-list slice, and passes table context to the body renderer.
3. `cellRenderer` creates a cell id from the row key and `dataIndex`; clicking an editable cell calls `onEdit(id)`.
4. The selected input calls `handleChange`; it writes the nested or direct `dataIndex` and calls consumer `onChange` with row, field, value and record metadata.

### Render and Scroll

1. `useVirtualList` derives the visible slice from `rowHeight`, `maxHeight`, scroll position, `overscan`, and `calcDelay`.
2. `EditTable` synchronizes horizontal body scrolling to the header and derives the left-shadow state.
3. `tbodyRenderer` renders the visible rows or the configured empty state; spacer heights preserve the full scroll range.

### Fixed Columns and Header Drag

1. `genFixedInfo` derives sticky offsets from column widths.
2. Header and cell renderers consume those offsets to apply sticky styles and shadows.
3. When `headerDraggable` is enabled, `DragManager` blocks fixed columns and writes the DOM order back into local columns on drag end.

## Documentation Map

- Update `docs/components/edit-table.md` for user-visible behavior changes.
- Update the matching `docs/demo/*.demo.tsx` when a documented interaction changes or needs a new example.
- Keep README text limited to installation and high-level capability; detailed usage belongs in Dumi docs.
