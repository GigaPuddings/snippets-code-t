# Snippets Code

<div align="center">

![Version](https://img.shields.io/badge/version-1.3.6-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tauri](https://img.shields.io/badge/Tauri-2.0-orange.svg)
![Vue](https://img.shields.io/badge/Vue-3.5-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)

一个使用 Tauri 2 + Vue 3 + Rust 构建的现代化跨平台效率工具，专为开发者设计。

[功能特性](#功能特性) • [快速开始](#快速开始) • [技术栈](#技术栈) • [文档](#文档) • [贡献指南](#贡献指南)

</div>

---

## 功能特性

### 🔍 智能搜索
- **全局快捷键唤起**：随时随地快速搜索
- **多源搜索**：统一搜索代码片段、应用、书签
- **智能识别**：自动识别网址、应用名称
- **使用频率优化**：常用项目优先显示
- **键盘导航**：完整的键盘快捷键支持

### 📝 代码片段管理
- **富文本编辑器**：基于 TipTap 的 Markdown 编辑器
- **代码高亮**：支持多种编程语言的语法高亮
- **分类管理**：灵活的分类和标签系统
- **反向链接**：类似 Obsidian 的双向链接功能
- **实时预览**：Markdown 实时渲染
- **快速检索**：全文搜索，支持高级搜索语法

### 📚 知识管理
- **Wikilink 支持**：使用 `[[链接]]` 语法创建笔记链接
- **反向链接面板**：查看哪些笔记链接到当前笔记
- **未链接提及**：发现潜在的关联笔记
- **大纲视图**：自动生成文档大纲
- **源码模式**：直接编辑 Markdown 源码

### 🌐 翻译功能
- **多引擎支持**：Google、Bing、离线翻译
- **划词翻译**：选中文本即可翻译
- **离线翻译**：基于 Transformers.js 的本地翻译
- **快速切换**：一键切换翻译引擎

### 📸 截图标注
- **快速截图**：全局快捷键快速截图
- **丰富标注**：矩形、箭头、画笔、马赛克、文字
- **OCR 识别**：集成 Tesseract.js 文字识别
- **颜色吸取**：取色器功能
- **贴图显示**：截图钉在桌面

### 🎯 效率工具
- **应用启动器**：快速启动系统应用
- **书签管理**：统一管理浏览器书签
- **待办提醒**：创建待办事项，支持定时提醒
- **自动更新**：应用内自动更新
- **GitHub 同步**：同步数据到 GitHub Gist

### 🎨 界面与主题
- **现代化 UI**：基于 Element Plus 的精美界面
- **深色模式**：支持亮色/暗色主题
- **自动切换**：根据时间或系统自动切换主题
- **多语言支持**：中文、英文界面

---

## 快速开始

### 系统要求

- **操作系统**：Windows 10/11
- **开发环境**：
  - Node.js 18.0+
  - pnpm 8.0+
  - Rust 1.70+
  - Tauri CLI 2.0+

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/GigaPuddings/snippets-code-t.git
cd snippets-code-t
```

2. **安装依赖**
```bash
pnpm install
```

3. **开发模式运行**
```bash
pnpm tauri dev
```

4. **构建应用**
```bash
pnpm tauri build
```

构建产物位于 `src-tauri/target/release/bundle/`

### 首次使用

1. 启动应用后会显示设置向导
2. 选择数据存储位置（推荐非系统盘）
3. 选择界面语言
4. 完成设置，开始使用

---

## 技术栈

### 前端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue 3 | 3.5+ | 渐进式 JavaScript 框架 |
| TypeScript | 5.6+ | 类型安全的 JavaScript |
| Vite | 6.0+ | 下一代前端构建工具 |
| Pinia | 2.3+ | Vue 状态管理 |
| Vue Router | 4.x | 路由管理 |
| Element Plus | 2.9+ | UI 组件库 |
| TipTap | 3.17+ | 富文本编辑器 |
| CodeMirror | 6.x | 代码编辑器 |
| TailwindCSS | 3.4+ | 原子化 CSS 框架 |
| Vue I18n | 11.2+ | 国际化 |

### 后端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| Tauri | 2.0+ | 跨平台桌面应用框架 |
| Rust | 1.70+ | 系统编程语言 |
| SQLite | 3.x | 嵌入式数据库 |
| Tokio | 1.36+ | 异步运行时 |

### 开发工具

- **代码质量**：ESLint、Prettier、Stylelint
- **Git 工作流**：Husky、Commitlint、Lint-staged
- **包管理**：pnpm

---

## 项目结构

```
snippets-code/
├── src/                          # 前端源代码
│   ├── api/                      # API 调用层
│   ├── components/               # 可复用组件
│   │   ├── TipTapEditor/         # 富文本编辑器
│   │   ├── CodeMirrorEditor/     # 代码编辑器
│   │   ├── CategoryItem/         # 分类项
│   │   └── ...
│   ├── pages/                    # 页面组件
│   │   ├── search/               # 搜索页面
│   │   ├── config/               # 配置页面
│   │   ├── screenshot/           # 截图页面
│   │   └── ...
│   ├── hooks/                    # Composables
│   ├── store/                    # Pinia 状态管理
│   ├── types/                    # TypeScript 类型定义
│   ├── utils/                    # 工具函数
│   │   ├── error-handler.ts      # 错误处理系统
│   │   ├── type-guards.ts        # 类型守卫
│   │   └── ...
│   ├── i18n/                     # 国际化
│   └── styles/                   # 全局样式
├── src-tauri/                    # Rust 后端
│   ├── src/                      # Rust 源代码
│   │   ├── db/                   # 数据库模块
│   │   ├── alarm.rs              # 提醒功能
│   │   ├── apps.rs               # 应用管理
│   │   ├── bookmarks.rs          # 书签管理
│   │   ├── github_sync.rs        # GitHub 同步
│   │   ├── translation.rs        # 翻译功能
│   │   └── ...
│   ├── Cargo.toml                # Rust 依赖配置
│   └── tauri.conf.json           # Tauri 配置
├── docs/                         # 文档
│   ├── ARCHITECTURE.md           # 架构文档
│   ├── CODING_STANDARDS.md       # 编码规范
│   └── BACKLINKS_FEATURE.md      # 反向链接功能说明
├── package.json                  # 前端依赖配置
├── vite.config.ts                # Vite 配置
├── tsconfig.json                 # TypeScript 配置
└── README.md                     # 项目说明
```

---

## 核心功能详解

### 代码片段管理

支持两种类型的内容：

- **代码片段（Code）**：使用 CodeMirror 编辑器，支持语法高亮
- **笔记（Note）**：使用 TipTap 富文本编辑器，支持 Markdown

**特性**：
- 分类管理和标签系统
- 全文搜索和高级搜索语法
- 反向链接和 Wikilink 支持
- 导入/导出功能
- GitHub Gist 同步

### 搜索功能

**搜索模式**：
- **搜索模式**：输入关键词搜索所有内容
- **列表模式**：按类型浏览内容
- **标签模式**：按标签筛选

**智能识别**：
- 自动识别网址并提供直接打开选项
- 识别应用名称并优先显示
- 根据使用频率排序结果

### 翻译功能

**支持的翻译引擎**：

1. **Google 翻译**：在线翻译，支持多种语言
2. **Bing 翻译**：在线翻译，支持多种语言
3. **离线翻译**：基于 Transformers.js，英译中，无需网络

**使用方式**：
- 选中文本后使用快捷键翻译
- 在翻译窗口输入文本翻译
- 截图后 OCR 识别并翻译

### 截图标注

**标注工具**：
- 矩形标注
- 箭头标注
- 画笔涂鸦
- 马赛克遮挡
- 文字标注

**功能**：
- OCR 文字识别（基于 Tesseract.js）
- 颜色吸取器
- 贴图到桌面
- 复制到剪贴板
- 保存到本地

---

## 文档

- [架构文档](docs/ARCHITECTURE.md) - 详细的技术架构说明
- [编码规范](docs/CODING_STANDARDS.md) - 代码质量标准和最佳实践
- [反向链接功能](docs/BACKLINKS_FEATURE.md) - Backlinks 功能使用说明
- [反向链接使用指南](docs/BACKLINKS_USAGE.md) - 详细的使用教程

---

## 代码质量标准

本项目遵循严格的代码质量标准，确保代码的可维护性和可靠性。

### TypeScript 类型安全
- ✅ 启用 TypeScript 严格模式
- ✅ 所有函数都有明确的类型定义
- ✅ 禁止使用 `any` 类型（除非有充分理由并添加注释）
- ✅ 使用类型守卫验证外部数据

### 代码文档
- ✅ 所有导出函数都有 JSDoc 注释
- ✅ JSDoc 包含参数说明、返回值说明和使用示例
- ✅ 复杂逻辑添加行内注释说明

### 错误处理
- ✅ 使用统一的 ErrorHandler 系统处理错误
- ✅ 所有异步操作都有错误处理
- ✅ 提供用户友好的错误消息

### 代码组织
- ✅ 组件不超过 300 行
- ✅ 函数不超过 50 行
- ✅ 复杂逻辑提取到 composables 或工具函数
- ✅ 保持单一职责原则

### 代码风格
- ✅ 使用 ESLint 进行代码检查
- ✅ 使用 Prettier 进行代码格式化
- ✅ 遵循 Vue 3 Composition API 最佳实践

详细的编码规范请参见 [docs/CODING_STANDARDS.md](docs/CODING_STANDARDS.md)。

---

## 贡献指南

欢迎提交 Issue 和 Pull Request！

### 提交代码前请确保

1. 代码符合项目的编码规范
2. 通过所有代码质量检查
3. 添加必要的注释和文档
4. 遵循 Conventional Commits 规范

### 开发流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 提交信息规范

使用 Conventional Commits 规范：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 构建/工具链更新

---

## 常见问题

### 如何修改全局快捷键？

在应用设置中可以自定义所有快捷键。

### 数据存储在哪里？

首次启动时可以选择数据存储位置，默认位置为用户文档目录。

### 如何备份数据？

在设置 > 数据管理中可以备份和恢复数据库。

### 支持哪些操作系统？

目前仅支持 Windows 10/11，未来计划支持 macOS 和 Linux。

---

## 更新日志

查看 [RELEASE_NOTES.md](RELEASE_NOTES.md) 了解最新版本的更新内容。

### 最新版本 v1.3.6

🎉 新增功能：
- 搜索框智能识别网址，直接在浏览器中打开
- 支持多种网址格式识别

🐛 问题修复：
- 修复搜索框输入网址时无法显示结果的问题

🔧 优化改进：
- 优化搜索体验，智能判断输入内容类型
- 改进代码结构，提升应用性能和稳定性

---

## 许可证

本项目采用 [MIT](LICENSE) 许可证。

---

## 致谢

感谢以下开源项目：

- [Tauri](https://tauri.app/) - 跨平台桌面应用框架
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TipTap](https://tiptap.dev/) - 无头富文本编辑器
- [Element Plus](https://element-plus.org/) - Vue 3 UI 组件库
- [CodeMirror](https://codemirror.net/) - 代码编辑器
- [Transformers.js](https://huggingface.co/docs/transformers.js) - 机器学习模型
- [Tesseract.js](https://tesseract.projectnaptha.com/) - OCR 引擎

---

<div align="center">

**[⬆ 回到顶部](#snippets-code)**

Made with ❤️ by [GigaPuddings](https://github.com/GigaPuddings)

</div>
