# 项目文档

此目录保留随代码长期维护的使用说明、架构约束和开发规范。安装与日常使用入口见 [项目 README](../README.md)，本轮功能与修复见 [更新日志](../RELEASE_NOTES.md)。

## 架构与开发规范

- [架构文档](ARCHITECTURE.md)：模块结构、数据流和设计背景。
- [工作台架构](DEVELOPER_WORKBENCH.md)：工作区、统一搜索、插件平台和 AI 能力层的职责。
- [编码规范](CODING_STANDARDS.md)：TypeScript、Vue、样式和代码组织约定。
- [公共 UI 样式](UI_STYLE_GUIDE.md)：主题变量、公共组件、图标和 Markdown 排版。
- [原生窗口设计](WINDOW_CONTENT_FIT_AND_PASSTHROUGH.md)：窗口尺寸、可见区域和鼠标穿透。

## 数据与编辑

- [数据存储与管理](DATA_MANAGEMENT.md)：数据所有权、缓存清理、完整备份、隔离恢复和目录迁移。
- [跨设备同步](DATA_SYNC.md)：Git 同步白名单、配置投影和同步冲突。
- [Markdown 编辑器](MARKDOWN_EDITOR.md)：三种模式、表格与图片、保存保护和滚动标题上下文。
- [全局快速搜索](global-quick-search.md)：索引、来源生命周期、排序和跳转。
- [AI 回复保存为笔记](AI_REPLY_CAPTURE.md)：内容来源、保存规则及应用和插件的更新边界。

## 插件维护

- [插件系统](PLUGIN_SYSTEM.md)：协议、能力、权限和生命周期。
- [官方插件开发](OFFICIAL_PLUGIN_DEVELOPMENT.md)：接入、构建、市场校验和独立发布。
- [启动器与书签](plugins/launcher-discovery-and-bookmark-bridge.md)：检索、来源记录及浏览器原书签操作。
- [待办提醒](plugins/todo-reminders.md)：提醒调度、通知和提示音。
- [壁纸来源与筛选](wallpaper-provider-review.md)：现有来源的筛选行为、适配限制和兼容维护。

## 维护约定

- 功能和行为变化更新对应的主题文档，用户可见的改进写入根目录 `RELEASE_NOTES.md`。
- 阶段评审、排查报告、实施计划和本机验收记录保存在仓库外；相关过程文档路径已加入 `.gitignore`，不随常规提交发布。
- 模块专用的技术说明仍可保留在 `docs/plugins`，插件包、市场索引、构建输出和临时日志使用各自目录。
