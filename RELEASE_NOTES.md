🎉 新增功能：
- AI 辅助新增**知识库问答（RAG）**模式：基于已有笔记和代码片段进行语义检索，让 AI 参考你的知识库内容回答问题，并展示引用来源。
- 新增 **CI 工作流** (`ci.yml`)：在 push 和 PR 时自动执行前端类型检查、单元测试、ESLint/Stylelint 检查、Rust Clippy 和测试。
- 发布流程新增 **Quality Gate**：`publish.yml` 在构建发布包前先通过类型检查、前端测试和 Rust 测试的质量门控。
- Store 架构重构：将快捷键状态拆分为独立的 `useHotkeyStore`，主题状态拆分为 `useThemeStore`，提升代码可维护性。
- 后端新增 `app_setup.rs` 模块：封装 App 初始化防抖、启动模式检测、旧日志清理等逻辑，降低主入口复杂度。
- 插件市场 API 新增 GitHub 镜像支持：为国内用户提供 `ghfast.top` 镜像加速下载大文件插件包。

🐛 问题修复：
- 修复 AI 辅助对话框中 `LocalAiMessage` 类型不匹配导致的 TypeScript 编译错误。

🔧 优化改进：
- 新增 `pnpm lint:fix`、`pnpm lint:style`、`pnpm typecheck` 脚本命令，完善开发工具链。
- Rust 后端精简冗余代码：`lib.rs`、`apps.rs`、`window.rs`、`file_system.rs` 等模块共减少约 350 行重复或过时代码。
- OCR 模块和本地 AI 插件的错误处理与日志输出优化。
- 屏幕录制插件移除废弃的内部 API 调用。
- AI 对话框布局重构：采用 CSS Grid 自适应布局，改善不同窗口尺寸下的显示效果；对话框支持全屏高度利用，内容区域可滚动。
- 插件市场索引更新：新增插件条目信息。

⚙️ 内部变更：
- Tauri 配置 (`tauri.conf.json`) 更新：调整窗口默认参数与插件权限。
- Cargo.toml 依赖版本更新与特性开关调整。
