# Snippets Code 架构文档

## 目录

- [概述](#概述)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [架构设计](#架构设计)
- [核心模块](#核心模块)
- [数据流](#数据流)
- [类型系统](#类型系统)
- [错误处理](#错误处理)
- [性能优化](#性能优化)
- [开发指南](#开发指南)

## 概述

Snippets Code 是一个基于 Tauri 2 + Vue 3 + Rust 的跨平台桌面应用，用于管理代码片段、笔记和知识库。应用采用前后端分离架构，前端使用 Vue 3 生态系统，后端使用 Rust 提供高性能的系统级功能。

### 核心特性

- **代码片段管理**: 支持多种编程语言的代码片段存储和管理
- **富文本编辑**: 基于 TipTap 的 Markdown 编辑器
- **全文搜索**: 快速搜索片段内容
- **分类管理**: 灵活的分类和标签系统
- **截图标注**: 内置截图工具和标注功能
- **翻译功能**: 集成翻译服务
- **GitHub 同步**: 支持与 GitHub Gist 同步
- **主题切换**: 支持亮色/暗色主题

## 技术栈

### 前端技术栈

- **框架**: Vue 3.5+ (Composition API)
- **构建工具**: Vite 6.0+
- **语言**: TypeScript 5.6+
- **状态管理**: Pinia 2.3+
- **路由**: Vue Router 4
- **UI 组件**: Element Plus 2.9+
- **编辑器**: 
  - TipTap 3.17+ (富文本编辑，带自定义搜索)
  - CodeMirror 6 (代码编辑，带自定义搜索)
- **国际化**: Vue I18n 11.2+
- **样式**: 
  - SCSS
  - Tailwind CSS 3.4+
  - PostCSS

### 后端技术栈

- **框架**: Tauri 2
- **语言**: Rust
- **数据库**: SQLite (通过 Tauri SQL 插件)
- **系统集成**: 
  - 全局快捷键
  - 系统托盘
  - 自动启动
  - 剪贴板管理
  - 通知系统

### 开发工具

- **代码质量**: 
  - ESLint 8.57+
  - Prettier 3.4+
  - Stylelint 16.8+
- **Git 工作流**: 
  - Husky (Git hooks)
  - Commitlint (提交规范)
  - Lint-staged (预提交检查)
- **包管理**: pnpm

## 项目结构

```
snippets-code/
├── src/                          # 前端源代码
│   ├── api/                      # API 层
│   │   ├── fragment.ts           # 片段 API
│   │   └── github.ts             # GitHub API
│   ├── assets/                   # 静态资源
│   ├── components/               # 可复用组件
│   │   ├── CategoryItem/         # 分类项组件
│   │   ├── CodeMirrorEditor/     # 代码编辑器（带搜索）
│   │   ├── ContentItem/          # 内容项组件
│   │   ├── ContextMenu/          # 右键菜单
│   │   ├── TipTapEditor/         # 富文本编辑器（带搜索）
│   │   ├── TagInput/             # 标签输入
│   │   └── UI/                   # 基础 UI 组件
│   │       ├── SearchPanel.vue   # 共享搜索面板
│   │       └── ...               # 其他 UI 组件
│   ├── database/                 # 数据库操作层
│   │   ├── category.ts           # 分类操作
│   │   ├── fragment.ts           # 片段操作
│   │   ├── search.ts             # 搜索操作
│   │   └── index.ts              # 导出入口
│   ├── hooks/                    # Composables
│   │   ├── useSearch.ts          # 搜索逻辑
│   │   ├── useContextMenu.ts     # 右键菜单逻辑
│   │   ├── useFocusMode.ts       # 焦点模式
│   │   ├── useErrorHandler.ts    # 错误处理
│   │   ├── useDebounce.ts        # 防抖
│   │   └── useLocalStorage.ts    # 本地存储
│   ├── i18n/                     # 国际化
│   │   ├── locales/              # 语言文件
│   │   │   ├── en-US.ts          # 英文
│   │   │   └── zh-CN.ts          # 中文
│   │   └── index.ts              # i18n 配置
│   ├── layout/                   # 布局组件
│   ├── pages/                    # 页面组件
│   │   ├── search/               # 搜索页面
│   │   ├── config/               # 配置页面
│   │   ├── screenshot/           # 截图页面
│   │   ├── translate/            # 翻译页面
│   │   └── ...                   # 其他页面
│   ├── router/                   # 路由配置
│   ├── store/                    # 状态管理
│   ├── styles/                   # 全局样式
│   ├── types/                    # TypeScript 类型定义
│   │   ├── index.ts              # 类型导出入口
│   │   ├── api.ts                # API 类型
│   │   ├── database.ts           # 数据库类型
│   │   ├── components.ts         # 组件类型
│   │   └── models.ts             # 数据模型类型
│   ├── utils/                    # 工具函数
│   │   ├── error-handler.ts      # 错误处理系统
│   │   ├── error-messages.ts     # 错误消息
│   │   ├── type-guards.ts        # 类型守卫
│   │   ├── validators.ts         # 数据验证
│   │   ├── text.ts               # 文本处理
│   │   ├── url.ts                # URL 处理
│   │   ├── format.ts             # 格式化
│   │   └── ...                   # 其他工具
│   ├── workers/                  # Web Workers
│   ├── App.vue                   # 根组件
│   └── main.ts                   # 应用入口
├── src-tauri/                    # Rust 后端
│   ├── src/                      # Rust 源代码
│   │   ├── db/                   # 数据库模块
│   │   ├── alarm.rs              # 提醒功能
│   │   ├── apps.rs               # 应用管理
│   │   ├── bookmarks.rs          # 书签管理
│   │   ├── config.rs             # 配置管理
│   │   ├── github_sync.rs        # GitHub 同步
│   │   ├── hotkey.rs             # 快捷键
│   │   ├── icon.rs               # 图标处理
│   │   ├── search.rs             # 搜索功能
│   │   ├── translation.rs        # 翻译功能
│   │   ├── tray.rs               # 系统托盘
│   │   ├── update.rs             # 自动更新
│   │   ├── window.rs             # 窗口管理
│   │   ├── lib.rs                # 库入口
│   │   └── main.rs               # 主程序
│   ├── capabilities/             # Tauri 权限配置
│   ├── icons/                    # 应用图标
│   ├── Cargo.toml                # Rust 依赖配置
│   └── tauri.conf.json           # Tauri 配置
├── docs/                         # 文档
│   ├── ARCHITECTURE.md           # 架构文档（本文件）
│   └── CODING_STANDARDS.md       # 编码规范
├── .kiro/                        # Kiro 配置
│   └── specs/                    # 功能规格
├── package.json                  # 前端依赖配置
├── tsconfig.json                 # TypeScript 配置
├── vite.config.ts                # Vite 配置
├── tailwind.config.js            # Tailwind 配置
├── .eslintrc.cjs                 # ESLint 配置
├── .prettierrc.cjs               # Prettier 配置
├── .stylelintrc.cjs              # Stylelint 配置
├── README.md                     # 项目说明
└── CONTRIBUTING.md               # 贡献指南
```


## 架构设计

### 整体架构

应用采用**分层架构**设计，从上到下分为以下几层：

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│                  (Vue Components & Pages)                │
├─────────────────────────────────────────────────────────┤
│                   Composition Layer                      │
│              (Composables & Business Logic)              │
├─────────────────────────────────────────────────────────┤
│                      Service Layer                       │
│                  (API & Database Access)                 │
├─────────────────────────────────────────────────────────┤
│                    Infrastructure Layer                  │
│              (Utils, Types, Error Handling)              │
├─────────────────────────────────────────────────────────┤
│                      Tauri Bridge                        │
│                  (IPC Communication)                     │
├─────────────────────────────────────────────────────────┤
│                      Rust Backend                        │
│              (System APIs & Database)                    │
└─────────────────────────────────────────────────────────┘
```

### 层次说明

#### 1. Presentation Layer (表现层)

**职责**: 
- 渲染 UI 组件
- 处理用户交互
- 展示数据

**组成**:
- Vue 组件 (`src/components/`)
- 页面组件 (`src/pages/`)
- 布局组件 (`src/layout/`)

**原则**:
- 组件保持简洁，不超过 300 行
- 只包含 UI 逻辑，业务逻辑提取到 Composables
- 使用 TypeScript 定义 Props 和 Emits 接口

#### 2. Composition Layer (组合层)

**职责**:
- 封装可复用的业务逻辑
- 管理组件状态
- 处理副作用

**组成**:
- Composables (`src/hooks/`)
- 状态管理 (`src/store/`)

**原则**:
- 每个 Composable 只负责一个功能
- 提供清晰的接口和类型定义
- 包含完整的 JSDoc 文档

#### 3. Service Layer (服务层)

**职责**:
- 与后端通信
- 数据持久化
- 业务数据处理

**组成**:
- API 模块 (`src/api/`)
- 数据库模块 (`src/database/`)

**原则**:
- 所有 API 调用使用 ErrorHandler 包装
- 使用类型守卫验证响应数据
- 提供统一的错误处理

#### 4. Infrastructure Layer (基础设施层)

**职责**:
- 提供通用工具函数
- 类型定义
- 错误处理机制

**组成**:
- 工具函数 (`src/utils/`)
- 类型定义 (`src/types/`)
- 错误处理系统 (`src/utils/error-handler.ts`)

**原则**:
- 工具函数保持纯函数特性
- 完整的类型定义和 JSDoc
- 统一的错误处理机制

#### 5. Tauri Bridge (桥接层)

**职责**:
- 前后端通信
- IPC 消息传递
- 事件监听

**技术**:
- Tauri API (`@tauri-apps/api`)
- Tauri Plugins

#### 6. Rust Backend (后端层)

**职责**:
- 系统级功能
- 数据库操作
- 文件系统访问

**组成**:
- Tauri Commands
- 数据库模块
- 系统集成模块

## 核心模块

### 1. 搜索模块 (Search Module)

**位置**: `src/pages/search/`

**功能**:
- 全文搜索片段
- 搜索历史管理
- 键盘导航

**架构**:
```
search/
├── index.vue                     # 主组件
├── components/
│   └── Result.vue                # 搜索结果组件
└── composables/
    └── useSearchKeyboard.ts      # 键盘导航逻辑
```

**关键 Composables**:
- `useSearch`: 搜索逻辑和状态管理
- `useSearchKeyboard`: 键盘导航

### 2. 片段管理模块 (Fragment Module)

**位置**: `src/pages/config/components/category/`

**功能**:
- 片段 CRUD 操作
- 分类管理
- 标签管理
- 内容编辑

**架构**:
```
category/
├── index.vue                     # 主组件
└── components/
    ├── content/                  # 内容编辑
    │   ├── index.vue
    │   └── components/
    │       └── EditorControls.vue
    ├── contentList/              # 内容列表
    │   ├── index.vue
    │   └── FilterPanel.vue
    └── settings/                 # 设置
        └── index.vue
```

**关键组件**:
- `ContentItem`: 片段项组件
- `FilterPanel`: 过滤面板
- `TipTapEditor`: 富文本编辑器
- `CodeMirrorEditor`: 代码编辑器

### 3. 编辑器模块 (Editor Module)

#### 3.1 TipTap 编辑器

**位置**: `src/components/TipTapEditor/`

**功能**:
- Markdown 编辑
- 富文本编辑
- 代码高亮
- 表格支持
- 任务列表
- 全局搜索（Ctrl+F）

**架构**:
```
TipTapEditor/
├── index.vue                     # 主编辑器组件
├── Toolbar.vue                   # 工具栏
├── TipTapContextMenu.vue         # 右键菜单
├── components/                   # 子组件
│   ├── EditorActions.vue
│   ├── EditorStatusBar.vue
│   ├── OutlinePanel.vue
│   ├── BacklinkPanel.vue
│   └── SourceEditor.vue
├── config/                       # 配置
│   └── extensions.ts
├── extensions/                   # 自定义扩展
│   ├── CodeBlockLowlight.ts
│   ├── EnhancedMarkdown.ts
│   └── Wikilink.ts
└── utils/                        # 工具函数
    └── markdown.ts
```

**搜索功能**:
- 使用共享的 `SearchPanel` 组件（`src/components/UI/SearchPanel.vue`）
- 支持实时搜索、区分大小写、上一个/下一个匹配
- 通过遍历 TipTap 文档节点查找匹配项
- 使用浏览器原生文本选择高亮显示

**关键技术**:
- TipTap 3.17+ (基于 ProseMirror)
- Lowlight (代码高亮)
- Turndown (HTML 转 Markdown)

#### 3.2 CodeMirror 编辑器

**位置**: `src/components/CodeMirrorEditor/`

**功能**:
- 代码编辑
- 语法高亮
- 自动语言检测
- 全局搜索（Ctrl+F）

**搜索功能**:
- 使用共享的 `SearchPanel` 组件
- 通过正则表达式在文档文本中查找匹配项
- 使用 CodeMirror 的 `dispatch` API 设置选区
- 自动滚动到匹配位置

**关键技术**:
- CodeMirror 6
- 自定义搜索实现（不使用 `@codemirror/search`）

### 4. 搜索面板组件 (Search Panel Component)

**位置**: `src/components/UI/SearchPanel.vue`

**功能**:
- 统一的搜索 UI
- 实时搜索
- 区分大小写选项
- 匹配计数显示
- 上一个/下一个导航
- 键盘快捷键支持

**特点**:
- 可复用组件，被 TipTap 和 CodeMirror 编辑器共享
- 支持明暗主题
- 使用 Tailwind CSS 实现响应式设计
- 参考 Obsidian 的设计风格

**使用示例**:
```vue
<SearchPanel
  :show="showSearch"
  :dark="isDark"
  @close="closeSearch"
  @search="handleSearch"
  @next="findNext"
  @previous="findPrevious"
/>
```

### 4. 截图模块 (Screenshot Module)

**位置**: `src/pages/screenshot/`

**功能**:
- 屏幕截图
- 图像标注
- OCR 文字识别
- 图像压缩

**架构**:
```
screenshot/
├── index.vue                     # 主组件
├── components/
│   └── ToolbarSection.vue        # 工具栏
├── core/                         # 核心逻辑
│   ├── ScreenshotManager.ts      # 截图管理器
│   ├── DrawingEngine.ts          # 绘图引擎
│   ├── EventHandler.ts           # 事件处理
│   ├── CoordinateSystem.ts       # 坐标系统
│   ├── CanvasPool.ts             # Canvas 池
│   ├── ImageCompressor.ts        # 图像压缩
│   ├── OCRWorkerManager.ts       # OCR 管理器
│   ├── LazyLoader.ts             # 懒加载
│   ├── AnnotationFactory.ts      # 标注工厂
│   ├── BaseAnnotation.ts         # 基础标注类
│   └── types.ts                  # 类型定义
└── annotations/                  # 标注类型
    ├── ArrowAnnotation.ts
    ├── MosaicAnnotation.ts
    ├── PenAnnotation.ts
    ├── RectangleAnnotation.ts
    └── TextAnnotation.ts
```

**设计模式**:
- **工厂模式**: AnnotationFactory 创建不同类型的标注
- **对象池模式**: CanvasPool 复用 Canvas 对象
- **策略模式**: 不同的标注类型实现不同的绘制策略

### 5. 翻译模块 (Translation Module)

**位置**: `src/pages/translate/`

**功能**:
- 文本翻译
- 划词翻译
- 离线翻译

**技术**:
- Hugging Face Transformers
- Web Workers (离线翻译)

### 6. GitHub 同步模块 (GitHub Sync Module)

**位置**: 
- 前端: `src/api/github.ts`
- 后端: `src-tauri/src/github_sync.rs`

**功能**:
- GitHub Gist 同步
- 冲突解决
- 增量同步

## 数据流

### 1. 用户操作流程

```
User Action
    ↓
Vue Component (Presentation)
    ↓
Composable (Business Logic)
    ↓
API/Database Service
    ↓
Tauri IPC
    ↓
Rust Backend
    ↓
SQLite Database / System API
```

### 2. 数据读取流程

```
Component Mount
    ↓
Call Composable
    ↓
Composable calls API
    ↓
API invokes Tauri Command
    ↓
Rust executes database query
    ↓
Return data through IPC
    ↓
API validates with Type Guard
    ↓
Composable updates reactive state
    ↓
Component re-renders
```

### 3. 错误处理流程

```
Error occurs
    ↓
ErrorHandler.handle()
    ↓
Log error (console/file)
    ↓
Get user-friendly message
    ↓
Show notification/toast
    ↓
Return fallback value (optional)
```

### 4. 状态管理流程

```
User Action
    ↓
Component dispatches action
    ↓
Pinia Store action
    ↓
Update store state
    ↓
Persist to localStorage (if configured)
    ↓
Components reactively update
```


## 类型系统

### 类型定义结构

项目采用集中式类型定义管理，所有类型定义位于 `src/types/` 目录：

```
types/
├── index.ts              # 类型导出入口
├── api.ts                # API 相关类型
├── database.ts           # 数据库模型类型
├── components.ts         # 组件 Props 类型
├── models.ts             # 核心数据模型
├── auto-imports.d.ts     # 自动导入类型
├── components.d.ts       # 组件自动导入类型
├── global.d.ts           # 全局类型声明
└── router.d.ts           # 路由类型
```

### 核心类型

#### 1. Fragment (片段)

```typescript
interface Fragment {
  id: string;
  title: string;
  content: string;
  type: ContentType;
  category_id: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  is_favorite: boolean;
  language?: string;
}

type ContentType = 'code' | 'note' | 'link' | 'image';
```

#### 2. Category (分类)

```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
  parent_id: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
```

#### 3. API Response

```typescript
interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
```

### 类型守卫

位于 `src/utils/type-guards.ts`，提供运行时类型检查：

```typescript
// 检查是否为 Fragment
function isFragment(value: unknown): value is Fragment

// 检查是否为 Category
function isCategory(value: unknown): value is Category

// 检查是否为 API 响应
function isApiResponse<T>(value: unknown): value is ApiResponse<T>

// 检查是否为 ContentType
function isContentType(value: unknown): value is ContentType
```

### 类型使用原则

1. **禁止使用 `any`**: 所有变量和函数都必须有明确的类型
2. **使用类型守卫**: 对外部数据进行运行时验证
3. **接口优先**: 优先使用 `interface` 而不是 `type`
4. **泛型支持**: API 函数使用泛型提供类型安全
5. **严格模式**: 启用 TypeScript 严格模式

## 错误处理

### ErrorHandler 系统

位于 `src/utils/error-handler.ts`，提供统一的错误处理机制。

#### 错误类型

```typescript
enum ErrorType {
  NETWORK = 'NETWORK',           // 网络错误
  DATABASE = 'DATABASE',         // 数据库错误
  VALIDATION = 'VALIDATION',     // 验证错误
  PERMISSION = 'PERMISSION',     // 权限错误
  NOT_FOUND = 'NOT_FOUND',       // 资源不存在
  UNKNOWN = 'UNKNOWN'            // 未知错误
}
```

#### 使用方式

**1. 同步错误处理**:

```typescript
try {
  // 可能抛出错误的代码
  const result = someOperation();
} catch (error) {
  ErrorHandler.handle(error, {
    type: ErrorType.VALIDATION,
    context: 'someOperation',
    showNotification: true
  });
}
```

**2. 异步错误处理**:

```typescript
const result = await ErrorHandler.wrapAsync(
  async () => {
    return await someAsyncOperation();
  },
  {
    type: ErrorType.NETWORK,
    context: 'someAsyncOperation',
    showNotification: true,
    fallbackValue: null
  }
);
```

**3. 在 Composables 中使用**:

```typescript
import { useErrorHandler } from '@/hooks/useErrorHandler';

export function useMyFeature() {
  const { handleError, wrapAsync } = useErrorHandler();
  
  const fetchData = async () => {
    return await wrapAsync(
      async () => {
        return await api.getData();
      },
      {
        type: ErrorType.NETWORK,
        context: 'fetchData'
      }
    );
  };
  
  return { fetchData };
}
```

### 错误消息

位于 `src/utils/error-messages.ts`，提供用户友好的错误消息：

```typescript
const ERROR_MESSAGES: Record<ErrorType, string> = {
  [ErrorType.NETWORK]: '网络连接失败，请检查网络设置',
  [ErrorType.DATABASE]: '数据库操作失败，请稍后重试',
  [ErrorType.VALIDATION]: '数据验证失败，请检查输入',
  [ErrorType.PERMISSION]: '权限不足，无法执行此操作',
  [ErrorType.NOT_FOUND]: '请求的资源不存在',
  [ErrorType.UNKNOWN]: '发生未知错误，请稍后重试'
};
```

## 性能优化

### 1. 代码分割

**路由懒加载**:

```typescript
const routes = [
  {
    path: '/search',
    component: () => import('@/pages/search/index.vue')
  }
];
```

**组件懒加载**:

```typescript
const TipTapEditor = defineAsyncComponent(
  () => import('@/components/TipTapEditor/index.vue')
);
```

### 2. 虚拟滚动

使用 `vue-virtual-scroller` 处理大列表：

```vue
<RecycleScroller
  :items="items"
  :item-size="50"
  key-field="id"
>
  <template #default="{ item }">
    <ContentItem :item="item" />
  </template>
</RecycleScroller>
```

### 3. 防抖和节流

使用 `useDebounce` Composable：

```typescript
import { useDebounce } from '@/hooks/useDebounce';

const { debouncedValue, debouncedFn } = useDebounce(
  searchQuery,
  300
);
```

### 4. 缓存策略

**本地存储缓存**:

```typescript
import { useLocalStorage } from '@/hooks/useLocalStorage';

const { value, setValue } = useLocalStorage('key', defaultValue);
```

**Pinia 持久化**:

```typescript
export const useStore = defineStore('store', {
  state: () => ({ ... }),
  persist: {
    pick: ['theme', 'language']
  }
});
```

### 5. 图像优化

**Canvas 对象池**:

```typescript
// src/pages/screenshot/core/CanvasPool.ts
class CanvasPool {
  acquire(): HTMLCanvasElement
  release(canvas: HTMLCanvasElement): void
}
```

**图像压缩**:

```typescript
// src/pages/screenshot/core/ImageCompressor.ts
class ImageCompressor {
  compress(image: ImageData, quality: number): Promise<Blob>
}
```

### 6. Web Workers

**OCR 处理**:

```typescript
// src/workers/ocr.worker.ts
// 在 Worker 中执行 OCR，避免阻塞主线程
```

### 7. 样式优化

**动态导入样式**:

```typescript
// src/main.ts
const stylePromises = [
  import('element-plus/theme-chalk/dark/css-vars.css'),
  import('@/styles/index.scss')
];

await Promise.all(stylePromises);
```

**CSS 作用域**:

```vue
<style scoped>
/* 组件样式 */
</style>
```

## 开发指南

### 1. 添加新功能

#### 步骤 1: 定义类型

在 `src/types/` 中定义相关类型：

```typescript
// src/types/models.ts
export interface MyFeature {
  id: string;
  name: string;
  // ...
}
```

#### 步骤 2: 创建 API

在 `src/api/` 中创建 API 函数：

```typescript
// src/api/my-feature.ts
import { invoke } from '@tauri-apps/api/core';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

export async function getMyFeature(id: string): Promise<MyFeature | null> {
  return await ErrorHandler.wrapAsync(
    async () => {
      const result = await invoke<MyFeature>('get_my_feature', { id });
      return result;
    },
    {
      type: ErrorType.DATABASE,
      context: 'getMyFeature',
      fallbackValue: null
    }
  );
}
```

#### 步骤 3: 创建 Composable

在 `src/hooks/` 中创建 Composable：

```typescript
// src/hooks/useMyFeature.ts
import { ref } from 'vue';
import { getMyFeature } from '@/api/my-feature';
import type { MyFeature } from '@/types/models';

/**
 * My Feature Composable
 * 
 * @returns {Object} My feature state and methods
 * 
 * @example
 * ```typescript
 * const { feature, loading, fetchFeature } = useMyFeature();
 * await fetchFeature('123');
 * ```
 */
export function useMyFeature() {
  const feature = ref<MyFeature | null>(null);
  const loading = ref(false);
  
  const fetchFeature = async (id: string): Promise<void> => {
    loading.value = true;
    try {
      feature.value = await getMyFeature(id);
    } finally {
      loading.value = false;
    }
  };
  
  return {
    feature,
    loading,
    fetchFeature
  };
}
```

#### 步骤 4: 创建组件

在 `src/components/` 或 `src/pages/` 中创建组件：

```vue
<!-- src/components/MyFeature/index.vue -->
<script setup lang="ts">
import { onMounted } from 'vue';
import { useMyFeature } from '@/hooks/useMyFeature';

interface MyFeatureProps {
  id: string;
}

const props = defineProps<MyFeatureProps>();

const { feature, loading, fetchFeature } = useMyFeature();

onMounted(() => {
  fetchFeature(props.id);
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="feature">
    {{ feature.name }}
  </div>
</template>
```

### 2. 添加 Rust 命令

#### 步骤 1: 定义 Rust 函数

```rust
// src-tauri/src/my_feature.rs
use tauri::command;

#[command]
pub async fn get_my_feature(id: String) -> Result<MyFeature, String> {
    // 实现逻辑
    Ok(MyFeature { id, name: "...".to_string() })
}
```

#### 步骤 2: 注册命令

```rust
// src-tauri/src/lib.rs
mod my_feature;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            my_feature::get_my_feature,
            // ...
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 3. 测试

#### 手动测试

1. 启动开发服务器: `pnpm dev`
2. 启动 Tauri: `pnpm tauri dev`
3. 测试功能

#### 类型检查

```bash
pnpm build  # 包含 vue-tsc --noEmit
```

#### 代码质量检查

```bash
# ESLint
pnpm lint

# Prettier
pnpm format

# Stylelint
pnpm lint:style
```

### 4. 提交代码

使用 Commitizen 提交：

```bash
pnpm commit
```

遵循 Conventional Commits 规范：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 构建/工具

## 最佳实践

### 1. 组件设计

- **单一职责**: 每个组件只负责一个功能
- **Props 验证**: 使用 TypeScript 接口定义 Props
- **事件命名**: 使用 `on` 前缀，如 `onUpdate`
- **插槽使用**: 提供灵活的内容定制
- **代码长度**: 组件不超过 300 行

### 2. Composables 设计

- **命名规范**: 使用 `use` 前缀
- **返回对象**: 返回对象而不是数组
- **类型定义**: 定义 Options 和 Return 接口
- **JSDoc 文档**: 包含使用示例
- **错误处理**: 使用 ErrorHandler

### 3. API 设计

- **类型安全**: 使用泛型和类型守卫
- **错误处理**: 使用 ErrorHandler.wrapAsync
- **用户友好**: 提供清晰的错误消息
- **JSDoc 文档**: 包含参数和返回值说明

### 4. 样式设计

- **Scoped 样式**: 使用 `<style scoped>`
- **Tailwind 优先**: 优先使用 Tailwind 类
- **CSS 变量**: 使用 CSS 变量定义主题
- **响应式设计**: 支持不同屏幕尺寸

### 5. 性能优化

- **懒加载**: 路由和组件懒加载
- **虚拟滚动**: 大列表使用虚拟滚动
- **防抖节流**: 频繁操作使用防抖/节流
- **缓存策略**: 合理使用缓存
- **代码分割**: 按需加载

### 6. 安全性

- **输入验证**: 验证所有用户输入
- **XSS 防护**: 转义 HTML 内容
- **权限检查**: 检查操作权限
- **敏感数据**: 不在前端存储敏感数据

## 常见问题

### 1. 如何添加新的路由？

在 `src/router/index.ts` 中添加路由配置：

```typescript
{
  path: '/my-page',
  component: () => import('@/pages/my-page/index.vue'),
  name: 'MyPage'
}
```

### 2. 如何添加新的 Pinia Store？

创建新的 store 文件：

```typescript
// src/store/my-store.ts
import { defineStore } from 'pinia';

export const useMyStore = defineStore('my-store', {
  state: () => ({ ... }),
  actions: { ... },
  persist: true  // 可选：持久化
});
```

### 3. 如何调用 Rust 命令？

使用 Tauri API：

```typescript
import { invoke } from '@tauri-apps/api/core';

const result = await invoke<ReturnType>('command_name', {
  param1: value1,
  param2: value2
});
```

### 4. 如何处理错误？

使用 ErrorHandler：

```typescript
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

const result = await ErrorHandler.wrapAsync(
  async () => {
    return await someOperation();
  },
  {
    type: ErrorType.NETWORK,
    context: 'operationName',
    showNotification: true,
    fallbackValue: null
  }
);
```

### 5. 如何添加国际化？

在 `src/i18n/locales/` 中添加翻译：

```typescript
// src/i18n/locales/zh-CN.ts
export default {
  myFeature: {
    title: '我的功能',
    description: '功能描述'
  }
};
```

在组件中使用：

```vue
<template>
  <div>{{ $t('myFeature.title') }}</div>
</template>
```

## 参考资源

### 官方文档

- [Vue 3](https://vuejs.org/)
- [Tauri](https://tauri.app/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [TipTap](https://tiptap.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### 项目文档

- [README.md](../README.md) - 项目说明
- [CONTRIBUTING.md](../CONTRIBUTING.md) - 贡献指南
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - 编码规范

### 相关规范

- [Conventional Commits](https://www.conventionalcommits.org/)
- [TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Vue Style Guide](https://vuejs.org/style-guide/)

---

**文档版本**: 1.0.0  
**最后更新**: 2026-02-08  
**维护者**: Snippets Code Team
