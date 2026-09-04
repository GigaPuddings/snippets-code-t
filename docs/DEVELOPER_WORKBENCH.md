# Developer Workbench 架构收敛方案

> 状态：P2-C Developer Workbench Shell 已启动
> 更新日期：2026-09-04
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
- `search-engines` 插件通过标准 provider 注册 `engine-shortcut` 和 `default-search`，Universal Search 不再特判搜索引擎快捷方式和默认搜索项。
- 开发者诊断页展示搜索源健康状态，并在完整报告中输出 source、phase、domain、priority、耗时和错误摘要。
- 搜索 provider 默认 2500 ms 超时；慢 provider 会标记为降级来源，搜索页继续展示可用结果并节流提示，开发者诊断报告输出 `timeoutMs`。

### P2-B AI Capability Layer

在 Universal Search 稳定后再做 AI Provider，避免 AI 直接绑 UI 或插件内部命令。

已启动的第一批边界：

- `src/ai/providerRegistry.ts`：统一 AI provider id、capability、上下文、状态、启动、chat、stream chat、cancel stream 和 translate 协议。
- `src/ai/localAiProvider.ts`：把现有 Local AI Tauri command 包装为默认 provider。
- `src/ai/service.ts` 与 `src/ai/index.ts`：提供 `chatWithAi`、`streamChatWithAi`、`cancelAiChatStream`、`translateWithAi`、`getAiProviderStatus`、`startAiProvider` 这类稳定应用服务入口。
- `src/ai/context.ts`：统一构造、归一化、格式化和合并 workspace、selection、search 请求上下文，调用侧不再手写 context payload。
- `src/ai/contextRegistry.ts`、`src/ai/builtinContextProviders.ts` 与 `src/plugins/ai-context-providers.ts`：提供 AI context provider registry 和内置 workspace、selection、workspace-search 来源；插件可注册上下文来源，并在禁用/卸载时清理。
- `src/ai/preferences.ts` 与设置页 `AI 能力`：将 `chat`、`vision`、`translation` 的默认 provider 偏好保存到核心配置，显式指定 provider 的旧调用保持兼容。
- `src/ai/providerStatus.ts` 与设置页 `AI 能力`：提供启用 provider 的状态快照、模型信息和启动入口，避免设置页直接依赖具体插件实现。
- `src/plugins/ai-providers.ts`：把 `context.registerAiProvider` 接入 AI provider registry，并在插件禁用/卸载时按 pluginId 清理。
- `src/plugins/screenshot/utils/aiOcr.ts`：AI OCR 通过 vision provider 调用，不再直接依赖 Local AI chat command。
- `src/plugins/screenshot/pages/screenshot/core/ScreenshotManager.ts`：截图视觉翻译通过 AI capability layer 调用。
- `src/plugins/screenshot/pages/pin/index.vue`：Pin 窗口 OCR 结果的 Local AI 翻译通过 `translateWithAi` 调用。
- `src/plugins/translation/pages/translate/index.vue`：Translation 插件的 Local AI 引擎通过 `translateWithAi` 调用。
- `src/plugins/local-ai/pages/chat/index.vue`：提示词增强通过 `chatWithAi` 调用，主聊天流式生成通过 `streamChatWithAi` 调用。
- `src/components/AiAssistDialog/index.vue`：编辑器 AI 辅助流式生成通过 `streamChatWithAi` 调用，不再直接绑定 Local AI stream command。
- `src/ai/localAiProvider.ts`：将标准 `AiRequestContext` 转换为 Local AI system message，让现有 Rust chat 后端可以实际消费上下文。
- Local AI 提示词增强、Pin OCR 翻译、AI OCR 和截图视觉翻译已通过 `contextCollection` 进入内置 selection provider，不再在产品调用点手写 selection context payload。

目标：

- 继续统一本地/远端 AI provider。
- 继续完善 workspace context、selection context、search context 的注入策略。
- 让 OCR、Translation、Local AI、未来代码助手共享能力层。

### P2-C Developer Workbench Shell

最后再做产品层工作台外壳。

已启动的第一批边界：

- 设置页新增 `Developer Workbench` 总览入口，聚合 Workspace、Universal Search、Plugin Platform、AI Capability Layer 四层运行状态。
- 总览页展示内容数量、插件能力面、搜索 provider 健康状态、AI provider 可用性，以及 Screenshot、OCR、Recorder、Translation、Todo、Wallpaper、Launcher、Local AI、Git Sync 等产品能力状态。
- 工作台总览只读取现有应用服务、插件 store、搜索 provider registry 和 AI provider registry，不重新发明独立运行时。

目标：

- Workspace 视图承载 Markdown、Snippet、Assets、Git。
- Universal Search 成为跨内容、应用、文件、书签和工具的主入口。
- 插件能力以面板、命令、搜索源、后台服务或独立窗口接入。
