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
- [x] 搜索结果已增加代码片段“复制代码”快速动作，强化前端片段检索后即复用的工作流。
- [x] 新增片段入口已根据标题、分类名和代码块语言推断 `language/framework/kind` 默认元数据，并补齐创建链路的 `framework/kind` 写入。
- [x] 搜索预览已增加片段复制格式动作，支持复制原始代码、Markdown fenced code 和 VS Code snippet JSON。
- [x] 片段复制/插入链路已在执行前处理 `{{input:Name}}`、`{{clipboard}}` 等模板变量，支持按默认值轻量填写后再复制。
- [x] 首页、配置页和插件市场继续弱化“全能效率工具”叙事，强化前端片段工作流：欢迎页/加载页/用户中心/插件设置页文案已收敛到“前端代码片段与知识资产工作台”，README 将截图、翻译、Todo、启动器等能力归为官方插件增强。

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
- [x] 新增 `src/plugins/git-sync/useGitRepoNotFoundDialog.ts`，承接仓库不存在弹窗状态、信息和忽略流程，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/conflictFeedback.ts`，承接冲突解决成功提示、刷新事件和恢复同步提示，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/useGitConflictFlow.ts`，承接 Git 冲突处理、取消、手动合并完成/取消的流程编排，并补充单元测试。
- [x] 新增 `src/plugins/git-sync/gitSyncRuntimeHost.ts`，承接 Git 事件监听、runtime 监听、gitignore 初始化和启动同步初始化编排，并补充单元测试。
- [x] 将窗口 show/hide 自动同步监听、首次可见启动和卸载停止收进 `src/plugins/git-sync/gitSyncRuntimeHost.ts`，配置页不再直接绑定 Git 自动同步窗口事件。
- [x] 新增 `src/plugins/git-sync/components/GitSyncRuntimePortal.vue`，集中挂载冲突、手动合并、仓库不存在和冲突确认弹窗，配置页不再直接引用 Git 弹窗组件。
- [x] 新增 `src/plugins/git-sync/useGitRuntimeController.ts`，承接 Git flow 装配、portal loading adapter、仓库不存在处理和错误反馈，并补充单元测试。
- [x] 为 `src/plugins/git-sync/gitSyncRuntimeHost.ts` 增加默认装配/清理入口，配置页不再直接加载和拼接 Git lifecycle/runtime/auto-sync 模块。
- [x] 新增 `src/plugins/git-sync/useGitRuntimeState.ts`，聚合冲突状态、确认状态和仓库异常状态，配置页不再逐个创建 Git 状态 composable。
- [x] `src/plugins/git-sync/components/GitSyncRuntimePortal.vue` 改为接收 runtime state/controller 对象，配置页模板不再展开 Git 弹窗 props 和事件。
- [x] 新增 `src/plugins/git-sync/useGitRuntimeHostController.ts`，承接 Git runtime ready、host 实例、冲突 handled reset、setup/cleanup 生命周期。
- [x] `src/plugins/git-sync/useGitRuntimeHostController.ts` 增加 `setupWithState`，配置页不再创建 Git 冲突/仓库异常 runtime 事件回调。
- [x] `src/plugins/git-sync/useGitRuntimeController.ts` 改为直接接收 runtime state，配置页不再手动拼装 Git dialogs/confirm/repoNotFound 依赖。
- [x] 新增 `src/plugins/git-sync/useGitSyncRuntimeFacade.ts`，配置页通过单一 facade 接入 Git runtime state/controller/host 生命周期。
- [x] 新增 `src/plugins/git-sync/components/GitSyncRuntimeMount.vue`，配置页不再直接传递 Git portal 的 ready/state/controller/ref 细节。
- [x] `useGitSyncRuntimeFacade` 增加 `setupAndRestore`，配置页不再单独调用 Git 冲突状态恢复。
- [x] `GitSyncRuntimeMount.vue` 接管 facade cleanup，配置页卸载流程不再直接清理 Git runtime。
- [x] `GitSyncRuntimeMount.vue` 接管 facade setup/restore，配置页只传入全局初始化结果，不再直接启动 Git runtime。
- [x] 新增 `src/pages/config/composables/useConfigNavigationEvents.ts`，配置页导航事件、待处理跳转和系统打开 Markdown 逻辑迁出主文件。
- [x] 新增 `src/pages/config/composables/useConfigStartup.ts`，配置页全局启动、config_ready、插件初始化和初始化清理逻辑迁出主文件。
- [x] 新增 `src/pages/config/composables/useConfigLifecycle.ts`，配置页生命周期启动/清理编排和清理日志迁出主文件。
- [x] 配置页只保留插件挂载点、路由跳转和最小错误展示：Git runtime 已由 facade/mount 接入，主配置页只负责路由视图、插件状态初始化和最小装配。
- [x] 为冲突处理和自动同步生命周期补测试或最小回归脚本：新增 `useGitSyncRuntimeMount` 回归测试，覆盖配置页 Git runtime mount 等待启动决策、只初始化一次和卸载清理。

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

- [x] 先盘点 `TipTapEditor/index.vue` 内部状态、方法和模板区域归属，确认视图模式、源码同步、搜索、大纲、反链、图片上传和持久化桥接是主要拆分面。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorViewMode.ts`，先抽出阅读、编辑预览、源码模式的状态机和切换命令。
- [x] `TipTapEditor/index.vue` 保留 Markdown 转换、编辑器可编辑状态和大纲刷新回调，UI 行为不变，视图模式控制流先迁出主组件。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorViewMode.test.ts`，覆盖源码/预览/阅读切换、重复切换、源码回写和大纲刷新。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorPersistenceBridge.ts`，承接 TipTap JSON 到 Markdown 发射、源码模式回写、props 内容同步和防循环状态。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorPersistenceBridge.test.ts`，覆盖防抖发射、源码实时发射、源码回写、外部内容同步和内部更新跳过。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorBacklinks.ts`，承接反链面板开关、反链计数刷新和反链导航事件转发。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorBacklinks.test.ts`，覆盖计数加载、空标题重置、面板开关、导航转发和加载失败兜底。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorImageUpload.ts`，承接附件上传、Tauri 文件 URL 转换、图片 HTML 插入、非空段落拆分和插入后图片节点选中。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorImageUpload.test.ts`，覆盖空段落插入、非空段落拆分、缺少笔记 ID 和上传失败提示。
- [x] 完善并接入 `src/components/TipTapEditor/composables/useEditorSearch.ts`，承接搜索面板打开、匹配收集、匹配计数同步、上一项/下一项和滚动定位。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorSearch.test.ts`，覆盖搜索面板聚焦、匹配收集、不自动选中首项、下一项导航和清理高亮。
- [x] 完善并接入 `src/components/TipTapEditor/composables/useEditorOutline.ts`，承接大纲面板开关、TipTap/源码标题提取、可视标题计算、滚动监听、标题跳转和清理。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorOutline.test.ts`，覆盖 TipTap 标题提取、源码标题提取、大纲开关、源码跳转和滚动监听清理。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorLinks.ts`，承接锚点点击拦截、文档内标题跳转、外链协议补全和 Tauri shell 打开逻辑。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorLinks.test.ts`，覆盖直接锚点、标题锚点兜底、外链打开、相对链接忽略和捕获监听清理。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorSessionScroll.ts`，承接会话滚动位置读取/恢复、wikilink 定位滚动和高亮提示。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorSessionScroll.test.ts`，覆盖滚动位置读取、非负恢复、wikilink 定位高亮和无编辑器兜底。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorContextMenu.ts`，承接主编辑区和源码区右键菜单启用判断、默认菜单拦截和菜单实例打开。
- [x] 新增 `src/components/TipTapEditor/composables/useEditorContextMenu.test.ts`，覆盖启用打开、禁用保留原生菜单和菜单实例缺失兜底。
- [x] 新增 `src/components/TipTapEditor/composables/useContextMenuCommands.ts`，承接 `TipTapContextMenu.vue` 内部源码/富文本命令分发、链接插入、粘贴和全选动作。
- [x] 新增 `src/components/TipTapEditor/composables/useContextMenuCommands.test.ts`，覆盖源码格式包裹、禁用兜底、链接插入、富文本链接设置和纯文本粘贴。

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
- [x] 增加 Rust 侧插件 zip 解析测试，覆盖安全解压、单层根目录识别、多根目录拒绝和路径逃逸拒绝，并为解压目标增加 canonical 边界校验。
- [x] 新增 `src/pages/search/composables/useSearchResultActions.test.ts`，覆盖搜索结果代码片段复制资格、模板处理后写入剪贴板和失败兜底。
- [x] 新增 `src/utils/snippetMetadataInference.test.ts`，覆盖新增片段默认 `language/framework/kind` 推断规则。
- [x] 新增 `src/utils/snippetCopyFormats.test.ts`，覆盖原始代码、Markdown fenced code 和 VS Code snippet JSON 格式化。
- [x] 新增 `src/utils/templateInputResolver.test.ts`，覆盖模板输入变量提示、取消复制和剪贴板变量读取。
- [x] 继续补 Git 同步冲突处理或插件安装压缩包解析测试。

### 5. 安全边界需要收紧

Tauri 配置里 `csp` 为 `null`，asset scope 为 `"**"`。插件系统已有 command/backend 权限校验，但桌面应用、本地插件和文件协议组合仍需要更严格的安全模型。

进度任务：

- [x] 盘点当前图片、本地资源、插件资源实际依赖的 asset protocol 路径：编辑器附件主要来自工作区 `assets/` 或 `.assets/` 并经 `convertFileSrc` 预览；本地插件资源位于插件安装目录 `plugins/<id>/resources/*`；OCR 仍有插件资源、内置资源和开发目录多级查找路径。
- [x] 收窄 `assetProtocol.scope`，避免继续使用 `"**"` 作为默认策略：默认允许应用数据、应用本地数据、资源目录和常见用户目录，并显式拒绝 `.ssh`、`.gnupg`、`.git` 等敏感目录；任意外部工作区后续可接入 persisted scope 做运行时授权。
- [x] 制定 CSP 初版，并验证编辑器、插件视图、图片预览、CodeMirror/TipTap 样式不回退：策略已覆盖 Tauri IPC、asset protocol、插件 Blob 动态模块、内联样式、图片预览和离线翻译 runtime 依赖的连接来源，`pnpm build` 已通过。
- [x] 插件市场和安装流程增加权限说明与风险提示：插件设置页已展示安装风险说明，并为 marketplace 条目、已安装插件和资源包展示能力/权限摘要。

## 工程优先级

1. `[~]` 先收敛架构边界：产品叙事和架构文档已推进，Git runtime mount/facade、Git 冲突状态工具、runtime state、runtime state controller 接线、runtime host controller、runtime state 回调装配、冲突弹窗状态、确认流程、结果反馈、仓库异常弹窗、冲突流程编排、runtime host 默认装配、runtime portal 对象接口、runtime controller、自动同步窗口生命周期、runtime 事件监听和冲突解决动作已迁入插件目录；翻译窗口热键、划词翻译热键、选中文本重试和窗口 ready 后文本投递逻辑已迁入 `src-tauri/src/plugins/translation.rs`，核心 `window.rs` 只保留通用窗口管理与转发；截图/翻译兼容实现仍需继续迁出核心模块。
2. `[x]` 给搜索和 Markdown 转换补测试：搜索排序、搜索语法解析、语义过滤、搜索结果复制动作、Markdown JSON 转换、wikilink、前端插件权限、Git 自动同步生命周期、Git runtime host/事件监听/窗口自动同步、Git runtime controller、Git 冲突解决动作、Git 冲突弹窗状态/确认流程/结果反馈/流程编排、Git 仓库异常弹窗、Rust frontmatter、Rust 插件校验和插件 zip 解析测试已落地。
3. `[x]` 拆 TipTapEditor：`useEditorViewMode`、`useEditorPersistenceBridge`、`useEditorBacklinks`、`useEditorImageUpload`、`useEditorSearch`、`useEditorOutline`、`useEditorLinks`、`useEditorSessionScroll`、`useEditorContextMenu` 和 `useContextMenuCommands` 已落地并覆盖测试，主编辑器拆分风险已基本收敛。
4. `[x]` 收紧 Tauri 权限：已盘点资源路径，移除 asset protocol 的全局 `"**"` 默认策略，并加入 CSP 初版。
5. `[x]` 更新文档一致性：README、架构文档和插件系统文档已同步核心工作台/官方插件增强边界，README 的项目结构与功能详述已移除旧核心模块口径，`docs/PLUGIN_SYSTEM.md` 已补充 core shell、官方插件、资源包和兼容后端边界契约。
