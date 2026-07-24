# Type Cleanup Design

## Goal

在不改变 `EditTable` 和 `genOptionsColumns` 对外行为或导出 API 的前提下，清理内部重复类型、无用代码和不安全的实现细节。

## Scope

- 以 `type/types.basic.tsx` 为唯一基础类型来源；删除 `types.tsx` 中重复的 `handleChange`、`fixedInfoProps`、`IAutoCol` 包装定义。
- 将内部 Props 类型改为 PascalCase 命名，并让渲染层 Props 继承现有共享类型。
- 为 `DragManager` 使用列类型和 React state setter 类型，替换 `any`。
- 抽取单元格数据读取函数，复用嵌套和普通 `dataIndex` 的读取逻辑。
- 删除运行时 `console.log`、未引用的工具函数及过期示例注释。
- 让固定列偏移计算不再通过 `reverse()` 原地修改传入 columns。

## Constraints

- 不改 `src/index.ts` 导出、组件 Props、依赖、发布设置或远程状态。
- 不新增依赖或测试框架。
- 仅修改内部实现；不需要同步用户文档或 demos。
- 使用现有 `npm run build`、`npm run lint`、`git diff --check` 验证。

## Deferred

- `EditTable<T>` 泛型化涉及公开类型设计，另行确认。
- `genOptionsColumns` 的 `addConfig` / `deleteConfig` 目前无实现，需先确认预期行为，不能在本次重构中猜测。
