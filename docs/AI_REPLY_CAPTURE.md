# AI 回复保存为笔记

## 产品范围

AI 回复可以保存为普通工作区 Markdown 笔记，随后使用现有编辑、检索、收藏、移动、重命名和回收站能力管理。工作区知识问答、文档／文献问答和知识型 Agent 不属于本次交付范围。

主应用提供文件写入、稳定身份、来源保存和重复保存保护。保存／打开入口由 local-ai 插件独立更新提供；主应用更新不会替换已安装的插件包。

## 主应用数据契约

| 文件 | 职责 |
| --- | --- |
| `src/types/aiNote.ts` | 笔记引用与 AI 来源的公共类型 |
| `src/types/models.ts` | Markdown 文件的 `documentId` 和 `aiSource` 可选字段 |
| `src/api/markdown.ts` | 保存／读取时的工作区检查与元数据列表读取选项 |
| `src-tauri/src/markdown/commands.rs` | 跨窗口重复保存保护、来源保留及后台文件列表读取 |
| `src-tauri/src/markdown/metadata.rs` | 来源的 frontmatter 序列化与元数据读取 |
| `src-tauri/src/markdown/file_system_manager.rs` | 复用现有路径校验与文件读写 |

- `documentId` 来自 frontmatter UUID，独立于兼容旧界面的路径型 `id`，编辑、收藏、移动和重命名不会重新生成身份。
- `aiSource` 保存 `version`、`conversationId`、`messageId`、`generatedAt`、可选的 `modelName` 和 `question`。旧来源的未知属性按原样保留，不作为执行指令或问答上下文使用。
- `expectedWorkspaceRoot` 为可选参数。插件传入来源工作区后，主应用在读写前拒绝已切换工作区的请求；旧调用可以继续省略该参数。
- `getAllFiles({ includeContent: false })` 只读取元数据，不传输正文或来源快照；未指定时保留原有完整内容读取行为。文件列表扫描使用后台任务。

## 保存与同步规则

1. 插件将完成的最终回复原始 Markdown 保存到「AI 收集箱」，类型为笔记，标签为 AI；生成中、空回复和错误回复不提供保存入口。
2. 保存不启动模型或读取其他文档。正文保留代码块、表格、列表和引用；生成模型、回复时间与原问题作为来源信息保存。
3. 主应用以 `conversationId + messageId` 识别同一回复，写入前持锁查找当前工作区现存笔记。重复保存返回已有路径，不覆盖用户编辑的正文。
4. 去重只包含现存的笔记，已转为片段或进入回收站的文件不参与；用户明确再次保存时可以创建新笔记。
5. 插件通过 UUID 核对已存引用，更新移动／重命名后的路径，删除后重置保存状态。不同工作区的引用不能静默打开当前工作区的同名文件。

## 兼容与发布边界

- 旧笔记不要求 `aiSource`，现有正文、frontmatter 和用户编辑内容继续保留。
- 来源信息跟随 Markdown 文件进行 Git 同步，不绑定插件私有数据库；绝对工作区路径不写入来源正文。
- 主应用拥有公共类型、后端命令和 `src/i18n/locales` 文案。local-ai 使用宿主的 Vue I18n，因此保存入口的配套翻译随主应用交付。
- local-ai 源码与 `plugin-registry/packages/local-ai` 运行包独立发布。仅安装插件不能升级主应用后端；部署保存能力时需配套支持本契约的主应用。
- 本地插件构建命令为 `node scripts/build-official-plugin-runtimes.mjs local-ai`；安装目录为 `plugin-registry/packages/local-ai`，其中必须同时存在 `plugin.json` 与 `dist`。构建本身不上传远程或修改已安装插件。

## 验证边界

主应用回归覆盖旧来源兼容、UUID 保留、编辑后重复保存、移动后去重、转为片段后的处理、工作区切换拒绝、元数据读取和 Markdown 代码块完整性。插件独立更新还需验证保存／打开图标、删除与移动同步、失败重试、跨会话切换及浅色／深色显示。
