# Snippets Code

一个使用 Tauri、Vue 3 和 Rust 构建的高效效率工具应用程序。

## 功能特性

- **快速搜索**：使用全局快捷键快速调用搜索窗口
- **代码片段管理**：保存和组织常用代码片段
- **待办事项提醒**：创建并管理待办事项，支持提醒功能
- **书签管理**：保存和组织网页书签
- **应用启动器**：快速打开应用程序
- **文本翻译**：划词快速翻译功能
- **支持多种主题**：亮色和暗色模式
- **自动更新**：应用内自动更新功能

## 技术栈

### 前端
- Vue 3 + TypeScript
- Vite
- Vue Router
- Pinia 状态管理
- TailwindCSS
- Element Plus UI 组件库
- CodeMirror 代码编辑器

### 后端
- Tauri (Rust)
- SQLite 数据库

## 开发环境设置

### 先决条件
- Node.js (v16+)
- pnpm
- Rust 和 Cargo
- Tauri CLI

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/snippets-code.git
cd snippets-code
```

2. 安装依赖
```bash
pnpm install
```

3. 开发模式运行
```bash
pnpm tauri dev
```

4. 构建应用
```bash
pnpm tauri build
```

## 项目结构

- `/src` - 前端 Vue 应用
- `/src-tauri` - Tauri/Rust 后端
- `/src-tauri/src` - Rust 源代码
- `/src/pages` - Vue 页面组件
- `/src/components` - Vue 可复用组件
- `/src/store` - Pinia 状态管理
- `/src/styles` - 全局样式

## 功能模块

### 搜索模块
通过全局快捷键唤起的浮动搜索窗口，可以快速搜索和访问应用程序、代码片段和书签。

### 代码片段管理
支持多种编程语言的代码片段存储和分类管理，内置语法高亮和代码编辑器。

### 待办事项管理
创建、编辑和删除待办事项，支持提醒功能和截止日期设置。

### 书签管理
保存网页书签，自动获取网站图标，支持分类管理。

### 应用启动器
快速查找和启动系统应用程序。

### 文本输入翻译
处理从文本输入、划词翻译检测到翻译服务集成和结果呈现的整个流程

## 配置

通过 `src-tauri/tauri.conf.json` 文件进行应用配置，包括窗口尺寸、更新服务器等。

## 贡献指南

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
