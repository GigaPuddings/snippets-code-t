# Snippets Code 面向前端程序员的产品与工程优化建议

本文基于当前项目结构、文档与核心源码分析，目标是帮助 Snippets Code 从“开发者效率工具集合”进一步收敛为“前端程序员的代码片段与知识资产工作台”。

## 1. 项目定位判断

Snippets Code 当前已经具备一个成熟桌面开发者工具的雏形：

- Tauri 2 + Vue 3 + Rust 适合构建轻量、本地优先、系统集成能力强的桌面工具。
- Markdown 文件化存储天然适合前端程序员使用 VS Code、Git 和任意文本编辑器协作。
- 全局搜索、代码片段、知识库、截图 OCR、翻译、Git 同步、应用启动器等功能覆盖了开发者高频工作流。
- 插件系统已经开始把截图、翻译、Todo、Git 同步、搜索源等能力模块化。

但当前产品主线偏宽。它可以被理解为“效率工具箱”，也可以被理解为“代码片段管理器”，还可以被理解为“本地知识库”。对前端程序员而言，最有差异化和长期价值的方向是：

> 本地优先、Git 可同步、可被快速检索和复用的前端代码片段与知识资产工作台。

这个定位比泛效率工具更具体，也更容易指导功能取舍。

## 2. 主要问题

### 2.1 产品边界偏散，核心价值表达不够集中

当前 README 和功能结构中同时强调智能搜索、代码片段、知识管理、翻译、截图、Todo、启动器、Git 同步、主题等能力。每个功能单独看都有价值，但它们对前端程序员的贡献强弱不同。

更适合作为核心的能力：

- 代码片段管理
- Markdown 知识库
- 快速搜索与复制
- 框架/语言/标签维度组织
- Git 同步与本地可控存储
- VS Code 或开发环境联动

更适合作为插件增强的能力：

- 截图标注
- OCR
- 翻译
- Todo
- 应用启动器
- 桌面文件搜索
- 系统主题

建议把官网、README、启动页和设置页的叙事统一到“前端代码片段与知识资产管理”。其他功能不需要删，但要以插件形式服务主线。

### 2.2 核心页面仍承担过多插件复杂度

插件化方向已经明确，但部分插件复杂度仍留在核心页面。例如 Git 同步已被定义为官方插件，但配置页仍直接持有 Git 冲突对话框、手动合并对话框、自动同步状态、事件监听和恢复逻辑。

这会带来几个问题：

- 配置页职责变重，难以维护。
- 插件无法真正独立演进。
- 禁用插件后，核心页面仍需要知道大量插件内部细节。
- 后续增加更多插件时，核心壳会继续膨胀。

建议把 Git 同步的运行时逻辑继续迁移到 `src/plugins/git-sync/`：

- `useGitConflictController`
- `useGitAutoSyncLifecycle`
- `GitSyncRuntimeHost`
- `GitConflictPortal`

核心配置页只保留一个插件运行时挂载点，不直接理解冲突策略、force pull、force push、resume auto sync 等细节。

### 2.3 编辑器组件过重，后续功能迭代风险高

TipTap 编辑器当前承担了大量职责：

- 富文本编辑
- Markdown/HTML/JSON 转换
- 图片上传
- 源码模式
- 阅读模式
- 搜索
- 大纲
- 反向链接
- 右键菜单
- 状态栏
- 滚动同步
- wikilink 跳转

这些能力都合理，但不适合长期放在一个大组件内。前端程序员工具的核心体验会不断围绕编辑器扩展，如果编辑器本身过重，后续引入模板变量、片段预览、复制格式、代码运行预览等功能会更困难。

建议拆分为更稳定的内部边界：

- `EditorShell.vue`：只负责布局。
- `useTipTapEditorCore`：创建和销毁编辑器实例。
- `useMarkdownBridge`：Markdown、HTML、JSON 转换。
- `useEditorImageUpload`：图片拖拽、上传、路径转换。
- `useEditorOutline`：标题提取和跳转。
- `useEditorSearch`：编辑器内搜索。
- `useBacklinks`：反链统计与跳转。
- `useEditorViewMode`：阅读、编辑、源码模式切换。

拆分的目标不是“为了好看”，而是让代码片段相关的新能力可以低风险插入。

### 2.4 搜索能力强，但缺少面向前端语义的分层

当前搜索已经有多源聚合、深度搜索、历史权重、标题优先、插件搜索源等能力。问题在于，它更像通用搜索，而不是专门为前端程序员组织结果。

前端程序员搜索时常见意图包括：

- 找一个 Vue 组件模板。
- 找一段 CSS 动效。
- 找某个 npm 包的使用示例。
- 找某类报错解决方案。
- 找一个 API 封装。
- 找一个正则表达式。
- 找 Tailwind 布局片段。
- 找浏览器兼容性记录。

建议在搜索结果中强化“开发语义”：

- `lang:ts`、`lang:vue`、`lang:scss`
- `framework:vue`、`framework:react`
- `kind:component`、`kind:hook`、`kind:css`、`kind:regex`、`kind:error`
- `source:snippet`、`source:note`、`source:package`
- `has:demo`、`has:link`、`has:copy-template`

这会让搜索从“能搜到”变成“能按开发目的搜到”。

### 2.5 缺少测试体系，风险集中在高复杂度模块

当前项目有 lint-staged 和构建脚本，但缺少稳定的单元测试、组件测试和 Rust 测试入口。对这个项目来说，最需要测试的不是普通 UI，而是核心行为：

- 搜索排序与权重。
- Markdown frontmatter 解析。
- Markdown 与 TipTap JSON/HTML 转换。
- wikilink 与反向链接更新。
- 文件监听与外部修改合并。
- 插件 manifest 校验。
- 插件权限拦截。
- Git 同步冲突解析。
- 截图标注几何计算。

建议先补小而稳定的测试，而不是一次性追求覆盖率：

- 前端：Vitest。
- Vue 组件：Vue Test Utils。
- Rust：针对 markdown、search、plugin manifest、git_common 写单元测试。
- 端到端：只覆盖启动、搜索、创建片段、复制片段、插件开关这些主链路。

### 2.6 Tauri 与插件安全边界需要收紧

当前桌面应用拥有本地文件、插件加载、Tauri command、asset protocol 等能力。插件系统已经做了 command/backend 权限校验，这是好的开始，但仍建议继续强化：

- 避免过宽的 asset scope。
- 设置更明确的 CSP。
- 插件安装前展示权限差异。
- 插件包校验 hash/signature。
- marketplace 条目记录来源、版本、大小、权限。
- 本地插件默认禁用高风险权限。
- 插件调用后端命令时保留审计日志。

面向前端程序员的工具通常会保存大量私有代码片段、项目经验和接口信息，本地安全边界会直接影响信任感。

## 3. 面向前端程序员的优化建议

### 3.1 建立“前端片段类型系统”

建议将片段从简单的 `code/note` 扩展为更贴近前端工作的类型。

推荐类型：

- `component`：组件模板，如 Vue SFC、React Component。
- `hook`：Vue composable、React hook。
- `style`：CSS、SCSS、Tailwind、动画片段。
- `api`：请求封装、接口类型、mock 数据。
- `regex`：正则表达式与测试样例。
- `command`：常用终端命令。
- `error-fix`：报错与解决方案。
- `package-note`：npm 包使用笔记。
- `config`：Vite、ESLint、TSConfig、Tailwind 配置。
- `pattern`：业务模式和最佳实践。

每种类型可以拥有不同的字段和展示方式。例如 `regex` 应显示测试输入，`component` 应显示 props/slots/emits，`error-fix` 应显示错误关键词和解决步骤。

### 3.2 增加片段模板变量

前端代码片段经常需要轻微改名后复用。建议支持变量化片段：

```ts
export function use${Name}() {
  const loading = ref(false)

  const fetch${Name} = async () => {
    loading.value = true
    try {
      // ${cursor}
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    fetch${Name}
  }
}
```

复制或插入前弹出轻量表单：

- `Name`
- `apiPath`
- `method`
- `stateName`

这会让 Snippets Code 从“收藏代码”升级为“生成可用代码”。

### 3.3 强化复制格式

同一个片段在不同场景下需要不同复制方式。建议为片段提供复制菜单：

- 复制原始代码。
- 复制 Markdown fenced code。
- 复制为 VS Code snippet JSON。
- 复制为 Vue SFC。
- 复制为 React TSX。
- 复制为 npm install 命令。
- 复制标题 + 链接。
- 复制为 issue/comment 格式。

这类功能对前端程序员非常实用，而且实现成本低于大型新功能。

### 3.4 与 VS Code 工作流打通

VS Code 是前端程序员最核心的工作台。建议优先支持：

- 一键用 VS Code 打开当前工作区。
- 一键打开当前 Markdown 文件。
- 导入 VS Code user snippets。
- 导出选中片段为 VS Code snippets。
- 从剪贴板代码快速创建片段。
- 识别当前复制内容语言并自动填充类型。

进一步可以考虑 VS Code 插件，但桌面端先支持导入导出和 open in editor 就足够有价值。

### 3.5 增加前端专用元数据

建议在 Markdown frontmatter 中加入更贴近前端工作的字段：

```yaml
---
title: Vue useRequest composable
type: hook
language: typescript
framework: vue
tags: [vue, composable, request]
package: axios
dependencies:
  - vue
  - axios
compatibility:
  vue: ">=3.4"
  typescript: ">=5"
copyModes:
  - raw
  - markdown
  - vscode-snippet
---
```

这样搜索、过滤、展示、导出都能有更好的结构基础。

### 3.6 做“前端知识卡片”而不只是笔记

很多前端知识不是长文，而是小卡片：

- 一个坑。
- 一个报错。
- 一个 CSS 技巧。
- 一个组件 API 设计。
- 一个浏览器兼容性结论。
- 一个 npm 包对比。

建议增加更适合快速沉淀的卡片视图：

- 错误关键词。
- 复现条件。
- 解决方法。
- 相关链接。
- 适用版本。
- 上次验证时间。

这样用户会更愿意把日常问题沉淀进工具里。

### 3.7 提供内置前端分类模板

首次创建工作区时，可以提供前端程序员模板：

```text
Frontend Workspace
  Vue
  React
  TypeScript
  CSS
  Tailwind
  Components
  Hooks
  API
  Build Tools
  Browser
  Errors
  Regex
  Commands
```

这能明显降低首次使用成本，也会强化产品定位。

### 3.8 建立“快速收集”能力

前端程序员的片段来源往往很碎：

- 浏览器页面。
- ChatGPT 回答。
- GitHub 代码。
- 项目中的某段代码。
- 终端命令。
- 报错日志。

建议支持：

- 从剪贴板创建片段。
- 选中文本后全局快捷键保存为片段。
- 自动识别语言。
- 自动提取标题。
- 保存来源链接。
- 自动建议标签。

这类能力会提升日常使用频率。

### 3.9 搜索结果增加“立即动作”

搜索结果不只应该打开，还应该能直接执行动作：

- 复制代码。
- 复制模板化结果。
- 打开源 Markdown。
- 打开所在文件夹。
- 加入收藏。
- 复制 npm install。
- 打开相关链接。
- 插入到最近活动窗口。

这会让全局搜索窗口成为真正的开发效率入口。

### 3.10 插件市场围绕前端生态设计

插件市场建议优先围绕前端生态，而不是泛工具：

- npm 包速查插件。
- MDN 搜索插件。
- Can I Use 搜索插件。
- Tailwind class 查询插件。
- Vue/React 文档搜索插件。
- 正则测试插件。
- JSON 格式化插件。
- CSS 渐变/阴影生成插件。
- SVG 优化插件。
- API mock 片段插件。

这些插件更容易服务核心用户群，也更容易形成社区贡献。

## 4. 建议路线图

### 第一阶段：收敛核心体验

目标：让用户明确知道这是前端代码片段与知识资产工具。

- 更新 README、欢迎页和设置页文案。
- 新增前端工作区模板。
- 增加片段类型：component、hook、style、api、regex、error-fix。
- 搜索支持 `lang:`、`framework:`、`kind:`。
- 搜索结果增加“复制代码”快捷动作。
- 支持从剪贴板快速创建片段。

### 第二阶段：提升复用效率

目标：让片段从“存起来”变成“马上能用”。

- 支持模板变量。
- 支持复制为 VS Code snippet。
- 支持导入/导出 VS Code snippets。
- 支持片段复制格式菜单。
- 增加片段预览与示例输入。
- 增加前端专用 frontmatter 字段。

### 第三阶段：工程架构整理

目标：降低长期维护成本。

- 拆分 TipTapEditor。
- 把 Git 同步运行时逻辑迁回 git-sync 插件目录。
- 将截图、翻译、Todo 的核心页面依赖继续收敛到插件边界。
- 给搜索、Markdown 转换、wikilink、插件权限补测试。
- 建立 Rust 核心模块测试。

### 第四阶段：插件生态与安全

目标：让插件系统可扩展、可信任。

- 插件安装页展示权限。
- 插件包 hash/signature 校验。
- marketplace 增加权限、大小、来源、版本信息。
- 收紧 Tauri asset scope 和 CSP。
- 提供前端生态官方插件。

## 5. 优先级建议

如果只选 5 件最值得做的事，建议按以下顺序：

1. 定位收敛：把产品叙事改成“前端代码片段与知识资产工作台”。
2. 搜索增强：支持 `lang:`、`framework:`、`kind:` 并增加复制快捷动作。
3. 片段类型系统：新增前端专用类型和 frontmatter 字段。
4. 模板变量：让片段可以参数化生成可用代码。
5. 架构减负：拆 TipTapEditor，并把 Git 同步逻辑从核心配置页迁出。

这 5 件事能同时改善产品表达、用户效率和工程可维护性，是当前投入产出比最高的方向。

## 6. 当前推进状态

已完成的第一批落地改进：

- README 已更新为 2.0.2，并将项目定位收敛为“本地优先代码片段与知识资产工作台”。
- 内容列表搜索已支持 `lang:`、`language:`、`framework:`、`kind:` 语法。
- 搜索提示面板已加入 `lang:ts`、`framework:vue`、`kind:component` 示例。
- Markdown frontmatter 已扩展 `framework` 和 `kind` 字段，并保持旧文件兼容。
- 后端 Markdown 文件列表、读取、创建、更新、迁移、索引链路已接入 `framework` 和 `kind`。
- 前端 `MarkdownFile`、`FragmentMetadata`、`ContentType.metadata` 映射已接入 `framework` 和 `kind`。
- 编辑器已暴露“语言、框架、类型”属性栏，并提供前端常用语言、框架、片段类型的内置选项。
- 保存链路已修复“只修改标签或语义元数据时可能跳过写入”的问题，确保 frontmatter 能正确落盘。
- 新增工程优先级进度文档 `docs/ENGINEERING_PRIORITY_PROGRESS.md`，用于按任务标记推进状态。
- 新增 Vitest 测试入口，并将搜索排序逻辑抽为 `src/hooks/searchRanking.ts`，已覆盖第一批搜索排序用例，同时修复普通片段正文被当作文件名评分的边界问题。
- 已补充 wikilink 解析和 TipTap JSON 到 Markdown 序列化测试，开始覆盖编辑器长期维护风险较高的基础转换链路。
- 插件前端 command/backend 权限判断已抽为可测试纯模块，并覆盖精确权限、通配权限和拒绝路径。
- 搜索语法解析和语义过滤测试已补齐，`getFragmentList` 已复用统一过滤引擎，避免 `lang/framework/kind` 在不同入口表现不一致。
- Rust 侧 Markdown frontmatter 已新增单元测试，覆盖 `language/framework/kind` 序列化、旧文件兼容和解析失败场景。
- Rust 侧插件校验已新增单元测试，覆盖插件 ID、资源路径逃逸、manifest schema/kind/backendKind、backend 权限和 semver 比较。
- Git 冲突文件路径解码和冲突状态持久化已迁入 `src/plugins/git-sync/conflictState.ts`，配置页减少了一段插件专属实现。
- Git 自动同步窗口生命周期已迁入 `src/plugins/git-sync/autoSyncLifecycle.ts`，配置页不再直接读取 Git 设置或判断自动同步运行状态。
- Git 冲突与仓库不存在运行时事件监听已迁入 `src/plugins/git-sync/gitSyncRuntime.ts`，配置页只通过回调更新弹窗状态。
- Git 冲突解决动作已迁入 `src/plugins/git-sync/conflictResolution.ts`，配置页不再直接执行 force push/pull、删除未跟踪文件、恢复自动同步和批量解决冲突。
- Git 冲突弹窗状态、冲突文件列表、会话恢复和清理已迁入 `src/plugins/git-sync/useGitConflictDialogs.ts`，配置页进一步收敛为弹窗挂载和确认流程。
- Git 冲突确认弹窗状态和确认流程已迁入 `src/plugins/git-sync/useGitConflictConfirm.ts`，配置页不再直接维护通用确认框 Promise 状态。
- Git 仓库不存在弹窗状态、展示信息和忽略流程已迁入 `src/plugins/git-sync/useGitRepoNotFoundDialog.ts`，配置页只保留重新配置时的路由跳转。
- Git 冲突解决后的成功提示、刷新事件和恢复同步提示已迁入 `src/plugins/git-sync/conflictFeedback.ts`，配置页不再直接拼装这些收尾动作。
- Git 冲突处理、取消、手动合并完成/取消的流程编排已迁入 `src/plugins/git-sync/useGitConflictFlow.ts`，配置页进一步收敛为 flow 调用和最小错误展示。
- Git 事件监听、runtime 监听、gitignore 初始化和启动同步初始化已聚合到 `src/plugins/git-sync/gitSyncRuntimeHost.ts`，配置页不再直接编排 Git runtime 启动顺序。
- Git 自动同步窗口 show/hide 监听、首次可见启动和卸载停止已收进 `src/plugins/git-sync/gitSyncRuntimeHost.ts`，配置页不再直接管理 Git 自动同步窗口事件。
- Git 冲突、手动合并、仓库不存在和冲突确认弹窗已集中挂载到 `src/plugins/git-sync/components/GitSyncRuntimePortal.vue`，配置页只保留一个 Git 插件 portal 入口。
- Git flow 装配、portal loading adapter、仓库不存在处理和错误反馈已收进 `src/plugins/git-sync/useGitRuntimeController.ts`，配置页不再直接拼装冲突处理依赖。
- Git runtime host 已提供默认装配/清理入口，配置页不再直接加载和拼接 Git lifecycle、runtime、auto-sync 三组模块。
- Git 冲突状态、确认状态和仓库异常状态已聚合到 `src/plugins/git-sync/useGitRuntimeState.ts`，配置页不再逐个创建 Git 状态 composable。
- Git runtime portal 已改为接收 `state/controller` 对象，配置页模板不再展开 Git 弹窗 props 和事件。
- Git runtime ready、host 实例、冲突 handled reset、setup/cleanup 生命周期已收进 `src/plugins/git-sync/useGitRuntimeHostController.ts`。
- Git runtime 冲突/仓库异常事件回调已由 `useGitRuntimeHostController.setupWithState` 根据 runtime state 自动创建，配置页不再拼装这些回调。
- Git runtime controller 已改为直接接收 `runtime state`，配置页不再手动拼装 Git `dialogs/confirm/repoNotFound` 依赖。
- Git runtime facade 已新增到 `src/plugins/git-sync/useGitSyncRuntimeFacade.ts`，配置页通过单一对象接入 state、controller、ready、setup、restore 和 cleanup。
- Git runtime mount 已新增到 `src/plugins/git-sync/components/GitSyncRuntimeMount.vue`，配置页不再直接传递 portal 的 ready/state/controller/ref 细节。
- Git runtime setup 与冲突状态恢复已合并到 `useGitSyncRuntimeFacade.setupAndRestore`，配置页不再单独调用 Git 恢复逻辑。
- Git runtime cleanup 已下沉到 `GitSyncRuntimeMount.vue`，配置页卸载时不再直接清理 Git runtime。
- Git runtime setup/restore 已由 `GitSyncRuntimeMount.vue` 根据 `shouldInit` 启动，配置页不再直接调用 Git runtime 初始化。
- 配置页导航事件、待处理跳转和系统打开 Markdown 已迁入 `src/pages/config/composables/useConfigNavigationEvents.ts`，并补充单元测试。

下一批建议优先推进：

- 搜索结果增加“复制代码”快速动作，让全局搜索更像开发工作流入口。
- 测试体系下一步建议转向 Git 同步冲突处理、插件安装压缩包解析，以及 Tauri 权限收紧后的回归用例。
- 配置页下一步建议把全局初始化防抖和缓存清理封装成 `useConfigStartup`，主文件只保留初始化编排和视图挂载。
- 开始拆分 `TipTapEditor` 的图片上传、搜索、大纲、反链逻辑，为后续模板变量做准备。
- 梳理新增片段入口的默认元数据策略，例如根据文件名、代码块语言或当前分类自动推断 `language/framework/kind`。
