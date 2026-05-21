# Engineering Priority Progress

本文件跟踪面向前端程序员定位后的主要问题、工程优先级和推进状态。每完成一个进度任务，都在这里标记，避免问题清单与实际代码演进脱节。

## 状态说明

- `[x]` 已完成并提交验证。
- `[~]` 已开始，仍需要后续拆分或验证。
- `[ ]` 未开始。

## 主要问题

### 1. 产品边界偏散

当前功能覆盖搜索、截图、OCR、翻译、Todo、应用启动器、Git 同步、主题等。对“前端程序员”来说，核心卖点容易被稀释。

目标叙事：前端代码片段与知识资产管理工具。截图、OCR、翻译、Todo、应用启动器、Git 同步、主题等能力作为插件增强。

进度任务：

- [x] README 已收敛为“本地优先代码片段与知识资产工作台”，版本同步到 2.0.2。
- [x] 编辑器已暴露 `language/framework/kind`，让前端片段语义成为一等字段。
- [x] 架构文档的核心特性说明已改为“核心能力 + 官方插件增强”。
- [ ] 首页、配置页和插件市场继续弱化“全能效率工具”叙事，强化前端片段工作流。

### 2. 核心壳仍承担太多插件复杂度

Git 同步已经是插件，但配置页仍直接管理 Git 冲突弹窗、自动同步生命周期和事件处理。`src/pages/config/index.vue` 体量较大，会让插件化收益打折。

目标方向：把 Git 相关弹窗状态、事件监听、冲突处理迁回 `src/plugins/git-sync/` 下的 composable 或 runtime controller。

进度任务：

- [x] 梳理 `src/pages/config/index.vue` 中 Git 同步状态、事件监听、弹窗和副作用入口。
- [x] 将 Git 冲突文件路径解码和冲突状态持久化迁入 `src/plugins/git-sync/conflictState.ts`，并补充单元测试。
- [x] 将窗口显示/隐藏时的 Git 自动同步生命周期迁入 `src/plugins/git-sync/autoSyncLifecycle.ts`，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/gitSyncRuntime.ts`，承接 Git 冲突与仓库不存在运行时事件监听，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/conflictResolution.ts`，承接 force push/pull、恢复自动同步和手动合并动作，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/useGitConflictDialogs.ts`，承接冲突弹窗状态、冲突文件列表、会话恢复和清理，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/useGitConflictConfirm.ts`，承接 Git 冲突确认弹窗状态和确认流程，并补充单元测试。
- [~] 配置页只保留插件挂载点和最小 UI 编排。
- [ ] 为冲突处理和自动同步生命周期补测试或最小回归脚本。

### 3. 编辑器组件过重

`src/components/TipTapEditor/index.vue` 承担图片上传、Markdown 转换、搜索、大纲、反链、源码模式、状态栏、上下文菜单等职责。后续维护成本会快速上升。

目标拆分：

- `useTipTapEditorCore`
- `useImageUpload`
- `useEditorViewMode`
- `useEditorPersistenceBridge`
- `useBacklinks`
- `useOutline`
- `EditorShell.vue`

进度任务：

- [ ] 先盘点 `TipTapEditor/index.vue` 内部状态、方法和模板区域归属。
- [ ] 优先抽出无 UI 依赖的 view mode、persistence bridge、outline/backlinks 状态。
- [ ] 保持现有 UI 行为不变，分批拆 composable。
- [ ] 拆分后补基础组件测试或交互回归说明。

### 4. 缺少测试体系

`package.json` 原本没有单元测试、组件测试或 Rust 测试入口。对搜索排序、Markdown 解析、文件监听、Git 冲突、插件权限这类逻辑，缺测试会限制迭代速度。

进度任务：

- [x] 新增 Vitest 依赖和 `pnpm test` / `pnpm test:watch` 脚本。
- [x] 将搜索排序/匹配逻辑从 `useSearch.ts` 抽为可测试纯模块 `src/hooks/searchRanking.ts`。
- [x] 新增 `src/hooks/searchRanking.test.ts`，覆盖分词、浅/深搜索、标题优先、历史权重、后端分数封顶。
- [x] 修复搜索排序边界：普通片段正文不再被当作文件名参与评分，避免正文命中压过标题精确命中。
- [x] 新增 `src/utils/wikilink-parser.test.ts`，覆盖 wikilink 解析、去重、替换、HTML 渲染和正则状态复用。
- [x] 新增 `src/components/TipTapEditor/utils/markdown.test.ts`，覆盖 TipTap JSON 到 Markdown 的标题、段落、标记、任务列表、代码块和图片路径序列化。
- [x] 将插件 command/backend 权限判断抽为 `src/plugins/permissions.ts`，并新增 `src/plugins/permissions.test.ts` 覆盖精确权限、通配权限和拒绝路径。
- [x] 新增 `src/utils/searchParser.test.ts` 和 `src/utils/filterEngine.test.ts`，覆盖搜索语法解析、语义筛选、标签/分类兜底和排序。
- [x] `getFragmentList` 已统一复用 `applyFilter`，确保 `lang/framework/kind` 在 API 层入口也能生效。
- [x] 增加 Rust 侧 `cargo test` 可执行用例，覆盖 Markdown frontmatter 的 `language/framework/kind` 序列化、旧文件兼容和错误解析。
- [x] 增加 Rust 侧插件校验测试，覆盖插件 ID、资源相对路径、manifest schema/kind/backendKind、backend 权限和 semver 比较。
- [ ] 继续补 Git 同步冲突处理或插件安装压缩包解析测试。

### 5. 安全边界需要收紧

Tauri 配置里 `csp` 为 `null`，asset scope 为 `"**"`。插件系统已有 command/backend 权限校验，但桌面应用、本地插件和文件协议组合仍需要更严格的安全模型。

进度任务：

- [ ] 盘点当前图片、本地资源、插件资源实际依赖的 asset protocol 路径。
- [ ] 收窄 `assetProtocol.scope`，避免继续使用 `"**"` 作为默认策略。
- [ ] 制定 CSP 初版，并验证编辑器、插件视图、图片预览、CodeMirror/TipTap 样式不回退。
- [ ] 插件市场和安装流程增加权限说明与风险提示。

## 工程优先级

1. `[~]` 先收敛架构边界：产品叙事和架构文档已推进，Git 冲突状态工具、冲突弹窗状态、确认流程、自动同步生命周期、runtime 事件监听和冲突解决动作已迁入插件目录；截图/翻译逻辑仍需继续迁出核心页面。
2. `[x]` 给搜索和 Markdown 转换补测试：搜索排序、搜索语法解析、语义过滤、Markdown JSON 转换、wikilink、前端插件权限、Git 自动同步生命周期、Git runtime 事件监听、Git 冲突解决动作、Git 冲突弹窗状态与确认流程、Rust frontmatter、Rust 插件校验测试已落地。下一步测试重点转向 Git 冲突弹窗交互和插件安装压缩包解析。
3. `[ ]` 拆 TipTapEditor：先拆 composable，不重写 UI。
4. `[ ]` 收紧 Tauri 权限：先盘点资源路径，再调整 CSP 和 asset scope。
5. `[~]` 更新文档一致性：README 版本已同步，架构文档已开始收敛，插件化结构说明仍需继续细化。
