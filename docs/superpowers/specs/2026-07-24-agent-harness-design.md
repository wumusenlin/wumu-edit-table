# Agent Harness Design

## Goal

让 agent 可以在不重复了解项目的前提下，直接维护这个 React 可编辑表格组件，同时把任务状态和验证证据留在仓库中。

## Scope

- 建立跨编码 agent 可读取的项目入口和知识库。
- 默认允许 agent 修改代码并运行现有脚本。
- 对功能和缺陷任务保留可追踪状态；微小文案和格式调整不强制建卡。
- 不引入依赖、远程服务、编排器、MCP 配置或专用角色文件。

## Repository Model

`AGENTS.md` 是不超过约 100 行的目录，不承载长篇规则。它定义边界、现有命令、任务分流和必读文档。

`docs/agent/architecture.md` 是代码知识的唯一来源，记录当前真实模块边界：`EditTable` 负责状态和组合渲染；`core/` 负责表头、表体和单元格渲染；`helper/` 负责虚拟列表、拖拽和计算；`input/` 负责编辑控件；`type/` 与 `types.tsx` 定义公共类型。它还列出公共入口和文档同步位置。

`docs/agent/workflow.md` 定义直接修改的闭环：定位真实链路，控制 diff，执行与改动相称的现有验证，记录结果。公共 API、依赖、发布和 Git 提交仍需要用户明确授权。

`tasks/active.md` 只保存正在进行的功能或缺陷任务，并包含目标、范围、状态和验证项。完成后将简短条目移动至 `tasks/completed.md`，保留修改与验证证据。

`scripts/check-agent-harness.mjs` 只校验管理结构本身：要求的文件是否存在、`AGENTS.md` 是否链接知识库和任务记录、任务文件是否具有约定标题。`package.json` 通过 `npm run agent:check` 暴露该检查。脚本不解析源码，也不替代 build 或 lint。

## Operation Rules

1. agent 可直接修改仓库文件和运行已声明的验证命令。
2. 修改公开导出、`EditTable` props、依赖、发布配置、Git commit 或远程状态前，必须取得用户明确授权。
3. 改变组件行为时，同步更新 `docs/components/edit-table.md`、API 文档或相关 demo；纯内部重构无需修改用户文档。
4. 先选择最窄的真实修改点；禁止为未出现的需求添加抽象、依赖或自动化编排。
5. 验证按影响选择：代码库构建用 `npm run build`，文档用 `npm run docs:build`，风格改动用 `npm run lint`；任何治理文件改动至少运行 `npm run agent:check` 和 `git diff --check`。

## Data Flow

```text
用户任务
  -> AGENTS.md（约束与导航）
  -> architecture.md（找到真实代码路径）
  -> active.md（仅功能或缺陷任务）
  -> 修改代码或文档
  -> 对应 npm 验证 + agent:check
  -> completed.md（范围与证据）
```

## Failure Handling

- 现有验证因历史环境问题失败时，记录命令、失败位置和是否覆盖本次改动；不得伪造通过。
- 如果任务目标会破坏现有公共 API、需要新依赖或需要发布，停止在修改前并向用户说明所需授权。
- 任务状态文件与实际 diff 不一致时，以当前 diff 和验证输出为准，并在任务记录中修正。

## Acceptance Criteria

- 新 agent 仅阅读 `AGENTS.md` 即可找到代码地图、工作流、任务状态和全部可用验证命令。
- `npm run agent:check` 在任一必要治理文件或关键链接缺失时失败。
- 该结构不新增运行时依赖，不影响组件打包产物或公共 API。
- 功能和缺陷工作可从 `tasks/active.md` 开始，并以 `tasks/completed.md` 的验证证据结束。

## Deliberate Exclusions

- 不添加 `.github/agents/`、MCP、hooks 或多角色编排；只有确定实际使用对应平台或并行工作产生稳定需求后才添加。
- 不补建完整测试体系；本次只复用工程已有的 build、lint 和文档构建命令。
