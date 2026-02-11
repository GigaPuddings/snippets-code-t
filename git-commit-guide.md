# Git 提交指南

本文档包含按功能模块分组的 Git 提交命令，请按顺序执行。

---

## 提交 1: 配置文件更新（工具链配置）

**说明**：更新代码质量工具配置，启用严格的 TypeScript 和 ESLint 规则

```bash
git add .eslintignore
git add .eslintrc.cjs
git add .gitignore
git add .prettierignore
git add .stylelintignore
git add tsconfig.json
git commit -m "chore: 更新代码质量工具配置，启用严格的 TypeScript 和 ESLint 规则"
```

---

## 提交 2: 类型系统重构

**说明**：新增和修改类型定义文件，添加类型守卫和验证器

```bash
git add src/types/api.ts
git add src/types/components.ts
git add src/types/database.ts
git add src/types/index.ts
git add src/types/models.ts
git add src/types/components.d.ts
git add src/types/global.d.ts
git add src/utils/type-guards.ts
git add src/utils/validators.ts
git commit -m "refactor: 重构类型系统，添加类型守卫和验证器"
```

---

## 提交 3: 错误处理系统重构

**说明**：实现统一的错误处理系统，替换旧的 errorHandler

```bash
# 添加新的错误处理文件
git add src/utils/error-handler.ts
git add src/utils/error-messages.ts

# 删除旧的错误处理文件
git rm src/utils/errorHandler.ts

# 更新使用错误处理的文件
git add src/api/fragment.ts
git add src/api/github.ts
git add src/utils/logger.ts
git add src/utils/ocr.ts
git add src/workers/ocr.worker.ts

git commit -m "refactor: 重构错误处理系统，使用统一的 ErrorHandler

- 新增 ErrorHandler 类和 ErrorType 枚举
- 添加用户友好的错误消息
- 更新所有 API 调用使用新的错误处理
- 删除旧的 errorHandler.ts"
```

---

## 提交 4: Backlink（反向链接）功能

**说明**：完整的反向链接功能实现，支持 Wikilink 和 Markdown 链接

```bash
# 新增 Backlink 相关组件
git add src/components/TipTapEditor/components/BacklinkPanel.vue
git add src/components/UI/BacklinkUpdateDialog.vue

# 新增扩展和工具
git add src/components/TipTapEditor/extensions/Wikilink.ts
git add src/components/TipTapEditor/extensions/MarkdownLinkHandler.ts
git add src/utils/wikilink-updater.ts

# 更新编辑器相关文件
git add src/components/TipTapEditor/index.vue
git add src/components/TipTapEditor/components/EditorStatusBar.vue
git add src/components/TipTapEditor/TipTapContextMenu.vue
git add src/components/TipTapEditor/config/extensions.ts
git add src/components/TipTapEditor/utils/markdown.ts
git add src/components/TipTapEditor/types.ts

git commit -m "feat: 添加 Backlink（反向链接）功能

- 新增 BacklinkPanel 组件显示反向链接列表
- 新增 BacklinkUpdateDialog 处理链接更新
- 实现 Wikilink 扩展支持 [[链接]] 语法
- 实现 MarkdownLinkHandler 处理 Markdown 链接
- 添加 wikilink-updater 工具处理链接重命名
- 在编辑器状态栏显示反向链接数量"
```

---

## 提交 5: LivePreview 功能

**说明**：编辑器实时预览功能

```bash
git add src/components/TipTapEditor/extensions/LivePreview.ts

git commit -m "feat: 添加编辑器实时预览功能

- 实现 LivePreview 扩展
- 支持 Markdown 语法实时渲染预览"
```

---

## 提交 6: 分类管理重构

**说明**：分类管理页面的组件拆分和重构，提取 composables

```bash
# 新增分类管理组件
git add src/pages/config/components/category/components/CategoryHeader.vue
git add src/pages/config/components/category/components/CategoryListView.vue

# 新增 composables
git add src/pages/config/components/category/composables/

# 更新主组件
git add src/pages/config/components/category/index.vue
git add src/pages/config/components/category/components/content/index.vue
git add src/components/CategoryItem/index.vue

git commit -m "refactor: 重构分类管理页面

- 拆分 CategoryHeader 和 CategoryListView 组件
- 提取 useCategoryManagement composable
- 优化组件结构，提高代码可维护性
- 更新 CategoryItem 组件"
```

---

## 提交 7: 内容列表重构

**说明**：内容列表的组件拆分和逻辑提取

```bash
# 新增内容列表组件
git add src/pages/config/components/category/components/contentList/components/

# 新增 composables
git add src/pages/config/components/category/components/contentList/composables/

# 更新主组件
git add src/pages/config/components/category/components/contentList/FilterPanel.vue
git add src/pages/config/components/category/components/contentList/index.vue
git add src/components/ContentItem/index.vue
git add src/components/TagInput/index.vue

git commit -m "refactor: 重构内容列表

- 拆分 ContentListView 和 ContentSearchBar 组件
- 提取 useContentList 和 useContentDialogs composables
- 优化 FilterPanel 组件
- 更新 ContentItem 和 TagInput 组件"
```

---

## 提交 8: 截图功能优化

**说明**：截图功能的代码结构优化

```bash
# 更新注释组件
git add src/pages/screenshot/annotations/ArrowAnnotation.ts
git add src/pages/screenshot/annotations/MosaicAnnotation.ts
git add src/pages/screenshot/annotations/PenAnnotation.ts
git add src/pages/screenshot/annotations/RectangleAnnotation.ts

# 更新核心模块
git add src/pages/screenshot/core/CoordinateSystem.ts
git add src/pages/screenshot/core/DrawingEngine.ts
git add src/pages/screenshot/core/EventHandler.ts
git add src/pages/screenshot/core/ScreenshotManager.ts

# 新增工具函数
git add src/pages/screenshot/utils/

git commit -m "refactor: 优化截图功能代码结构

- 优化注释组件代码
- 改进坐标系统和绘图引擎
- 提取工具函数到 utils 目录
- 提高代码可读性和可维护性"
```

---

## 提交 9: 搜索功能优化

**说明**：搜索功能的优化，提取 composables

```bash
# 新增搜索 composables
git add src/pages/search/composables/

# 更新搜索页面和 hooks
git add src/pages/search/index.vue
git add src/hooks/useSearch.ts

git commit -m "refactor: 优化搜索功能

- 提取 useSearchKeyboard composable
- 优化搜索页面代码结构
- 改进 useSearch hook"
```

---

## 提交 10: UI 组件和工具函数更新

**说明**：各种小的优化和更新

```bash
# 更新 UI 组件
git add src/components/UI/index.ts

# 更新 hooks
git add src/hooks/useContextMenu.ts
git add src/hooks/useFocusMode.ts
git add src/hooks/useSetIgnoreCursorEvents.ts

# 更新工具函数
git add src/utils/fragment.ts
git add src/utils/index.ts

# 更新路由和布局
git add src/router/index.ts
git add src/layout/components/AppMain.vue

# 更新样式
git add src/styles/reset.scss

git commit -m "refactor: 优化 UI 组件和工具函数

- 更新 UI 组件导出
- 优化各种 hooks
- 改进工具函数
- 更新路由配置和布局组件
- 优化全局样式"
```

---

## 提交 11: 国际化更新

**说明**：更新国际化文本

```bash
git add src/i18n/locales/en-US.ts
git add src/i18n/locales/zh-CN.ts

git commit -m "chore: 更新国际化文本

- 添加新功能的翻译文本
- 更新现有文本翻译"
```

---

## 提交 12: 文档更新

**说明**：README 添加代码质量标准说明

```bash
git add README.md

git commit -m "docs: 添加代码质量标准和贡献指南

- 添加 TypeScript 类型安全标准
- 添加代码文档要求
- 添加错误处理规范
- 添加代码组织原则
- 添加代码风格指南"
```

---

## 完成后检查

执行完所有提交后，运行以下命令检查是否还有未提交的文件：

```bash
git status
```

如果还有遗漏的文件，可以根据具体情况决定是否需要补充提交。

---

## 推送到远程仓库

所有提交完成后，推送到远程仓库：

```bash
git push origin main
```

---

## 注意事项

1. **按顺序执行**：建议按照文档顺序执行提交，因为有些提交之间存在依赖关系
2. **检查每次提交**：每次提交前可以用 `git diff --cached` 检查暂存的更改
3. **提交信息规范**：遵循 Conventional Commits 规范
   - `feat`: 新功能
   - `refactor`: 重构
   - `chore`: 构建/工具链更新
   - `docs`: 文档更新
4. **如果出错**：如果某次提交出错，可以用 `git reset HEAD~1` 撤销最后一次提交（保留更改）

---

## 快速执行脚本（可选）

如果你想一次性执行所有提交，可以将以下内容保存为 `commit-all.sh`（需要谨慎使用）：

```bash
#!/bin/bash

# 提交 1: 配置文件
git add .eslintignore .eslintrc.cjs .gitignore .prettierignore .stylelintignore tsconfig.json
git commit -m "chore: 更新代码质量工具配置，启用严格的 TypeScript 和 ESLint 规则"

# 提交 2: 类型系统
git add src/types/api.ts src/types/components.ts src/types/database.ts src/types/index.ts src/types/models.ts src/types/components.d.ts src/types/global.d.ts src/utils/type-guards.ts src/utils/validators.ts
git commit -m "refactor: 重构类型系统，添加类型守卫和验证器"

# 提交 3: 错误处理
git add src/utils/error-handler.ts src/utils/error-messages.ts
git rm src/utils/errorHandler.ts
git add src/api/fragment.ts src/api/github.ts src/utils/logger.ts src/utils/ocr.ts src/workers/ocr.worker.ts
git commit -m "refactor: 重构错误处理系统，使用统一的 ErrorHandler"

# ... 其他提交命令 ...

echo "所有提交完成！"
git status
```

但建议还是手动逐个执行，这样可以更好地控制提交过程。
