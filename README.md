# Snippets Code

一个使用 Tauri、Vue 3 和 Rust 构建的高效效率工具应用程序。

## 功能特性

- **快速搜索**：使用全局快捷键快速调用搜索窗口
- **代码片段管理**：保存和组织常用代码片段
- **待办事项提醒**：创建并管理待办事项，支持提醒功能
- **书签管理**：保存和组织网页书签
- **应用启动器**：快速打开应用程序
- **文本翻译**：划词快速翻译功能，支持在线翻译（Google/Bing）和离线翻译
- **离线翻译**：基于 Transformers.js 的本地英译中翻译，无需网络连接
- **快速截图**：快速截取屏幕信息，支持 OCR 文字识别和翻译
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
- Transformers.js (离线翻译)
- Tesseract.js (OCR 文字识别)

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
通过全局快捷键唤起的浮动搜索窗口，可以快速搜索和访问应用程序、代码片段和书签，识别常用应用优先显示最前列，便于查找快速访问。

### 代码片段管理
支持多种编程语言的代码片段存储和分类管理，内置语法高亮和代码编辑器。

### 本地检索数据管理
高效管理本地应用和各浏览器书签数据，可自定义格式化修改或添加系统未识别到的常用地址数据。

### 待办事项管理
创建、编辑和删除待办事项，支持提醒功能和截止日期设置。

### 书签管理
保存网页书签，自动获取网站图标，支持分类管理。

### 应用启动器
快速查找和启动系统应用程序。

### 文本翻译
处理从文本输入、划词翻译检测到翻译服务集成和结果呈现的整个流程。支持三种翻译引擎：
- **Google 翻译**：在线翻译服务
- **Bing 翻译**：在线翻译服务
- **离线翻译**：基于 Transformers.js 的本地英译中翻译

### 快速截图
自定义截取屏幕信息，支持自定义框选、涂鸦、吸取颜色、贴图显示，复制图片到剪切板或保存图片到本地。集成 OCR 文字识别功能，可直接识别截图中的文字并进行翻译

## 配置

通过 `src-tauri/tauri.conf.json` 文件进行应用配置，包括窗口尺寸、更新服务器等。

## 贡献指南

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
