# Developer Workbench 架构收敛方案

> 状态：P2-B AI Capability Layer 已启动
> 更新日期：2026-09-03
> 范围：Workspace、Universal Search、Plugin Platform、AI Capability Layer

## 1. 长期产品形态

Snippets Code 后续不再只定位为代码片段管理器，而是面向开发者日常工作的本地工作台：

```text
┌─────────────────────────────┐
│        Developer Workbench  │
├─────────────┬───────────────┤
│ Workspace   │ Universal     │
│             │ Search        │
│ Markdown    │               │
│ Snippet     │ Markdown      │
│ Assets      │ Apps          │
│ Git         │ Files         │
│             │ Bookmark      │
├─────────────┴───────────────┤
│        Plugin Platform      │
├─────────────────────────────┤
│      AI Capability Layer    │
└─────────────────────────────┘
```

Screenshot、OCR、Recorder、Translation、Todo、Wallpaper、Launcher、Local AI、Git Sync 等功能应作为能力接入工作台，而不是继续堆叠成互相耦合的页面和命令。

## 2. 四层职责

| 层级 | 职责 | 不负责 |
| --- | --- | --- |
| Workspace | Markdown、Snippet、Assets、Git 等用户内容和项目上下文 | 直接承载插件私有运行时细节 |
| Universal Search | 统一搜索源注册、查询编排、排序、去重、历史权重和来源元数据 | 直接实现每个插件的业务细节 |
| Plugin Platform | 插件生命周期、Capability API、权限、运行时注册和资源包 | 暴露 Tauri 内部命令作为稳定插件 API |
| AI Capability Layer | AI Provider、上下文注入、模型能力、工具调用和本地/远端 provider 统一抽象 | 绑定单一插件或单一模型实现 |

## 3. P2 推进顺序

### P2-A Universal Search

先稳定搜索内核，不急于重做 UI。

已启动的第一批边界：

- `src/search/ranking.ts`：搜索排序、历史权重、去重和匹配规则。
- `src/search/universalSearch.ts`：统一搜索应用服务，编排 URL、Markdown、插件 provider、搜索历史和默认搜索引擎。
- `src/search/sourceCatalog.ts`：声明稳定 source、domain、plugin 归属和默认优先级。
- `src/search/sourceRegistry.ts`：统一注册、替换、注销搜索 provider，并记录 provider 运行健康状态。
- `src/hooks/useSearch.ts`：仅保留 Vue 状态、输入防抖、生命周期和回车动作。

后续可继续演进：

- 为 source 健康状态增加设置页或诊断面板入口。
- 为慢 provider 制定产品级默认超时和降级提示。
- 将 search-engines 也收敛为标准 provider，而不是由 Universal Search 特判快捷方式和默认搜索项。

### P2-B AI Capability Layer

在 Universal Search 稳定后再做 AI Provider，避免 AI 直接绑 UI 或插件内部命令。

已启动的第一批边界：

- `src/ai/providerRegistry.ts`：统一 AI provider id、capability、上下文、状态、启动、非流式 chat 和 translate 协议。
- `src/ai/localAiProvider.ts`：把现有 Local AI Tauri command 包装为默认 provider。
- `src/ai/index.ts`：提供 `chatWithAi`、`translateWithAi`、`getAiProviderStatus`、`startAiProvider` 这类稳定应用服务入口。
- `src/plugins/screenshot/utils/aiOcr.ts`：AI OCR 通过 vision provider 调用，不再直接依赖 Local AI chat command。
- `src/plugins/screenshot/pages/screenshot/core/ScreenshotManager.ts`：截图视觉翻译通过 AI capability layer 调用。
- `src/plugins/translation/pages/translate/index.vue`：Translation 插件的 Local AI 引擎通过 `translateWithAi` 调用。
- `src/plugins/local-ai/pages/chat/index.vue`：提示词增强通过 `chatWithAi` 调用，流式聊天仍保留原 Local AI stream API。

目标：

- 继续统一本地/远端 AI provider。
- 继续完善 workspace context、selection context、search context 的注入策略。
- 让 OCR、Translation、Local AI、未来代码助手共享能力层。

### P2-C Developer Workbench Shell

最后再做产品层工作台外壳。

目标：

- Workspace 视图承载 Markdown、Snippet、Assets、Git。
- Universal Search 成为跨内容、应用、文件、书签和工具的主入口。
- 插件能力以面板、命令、搜索源、后台服务或独立窗口接入。
