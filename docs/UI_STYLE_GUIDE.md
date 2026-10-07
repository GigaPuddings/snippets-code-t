# 公共 UI 样式维护

## 配置分层

| 层级 | 文件 | 职责 |
| --- | --- | --- |
| 基础变量 | `src/styles/theme.scss` | 字体、字号、控件尺寸、圆角、交互颜色、阴影及浅色/深色值 |
| Tailwind 映射 | `tailwind.config.js` | 把变量映射为 `text-ui`、`h-ui-control`、`rounded-ui` 等 utility |
| 构建配置 | `postcss.config.js` | 按配置文件自身的位置加载 Tailwind，避免受启动目录影响 |
| 公共外观 | `src/styles/components.scss` | 操作按钮、菜单项、卡片、列表行、设置卡片及悬浮菜单 |
| 插件页面外观 | `src/styles/plugin-config.scss` | 插件页面布局及中性表单控件，同时供主应用和独立插件包编译 |
| 样式入口 | `src/styles/index.scss` | 加载主题与公共规则，处理第三方组件覆盖、提示和弹窗 |
| 页面与组件 | 对应 Vue 文件 | 业务排列、私有响应式规则及必要的编辑器/拖放样式 |

`src/main.ts` 只加载 `index.scss`，不再单独加载 `theme.scss`。滚动条基础规则仍在 `reset.scss`，颜色引用主题变量。

## 常用规格

| 需求 | 使用方式 |
| --- | --- |
| UI 字体、正文、辅助文字、标题 | `font-ui`、`text-ui`、`text-ui-caption`、`text-ui-title` |
| 菜单行高与行间距 | `h-ui-row`、`mb-ui-row-gap` |
| 标准、小、大控件高度 | `h-ui-control`、`h-ui-control-sm`、`h-ui-control-lg` |
| 小图标按钮尺寸 | `ui-icon-button--small` |
| 普通与较大圆角 | `rounded-ui`、`rounded-ui-lg` |
| 主文字、标题、辅助文字 | `text-ui-main`、`text-ui-heading`、`text-ui-muted` |
| hover 与选中背景 | `bg-ui-hover`、`bg-ui-selected` |
| 设置卡片横向内边距 | `px-settings-card` |
| 设置行内边距与最小高度 | `py-settings-row`、`min-h-settings-row-height` |
| 设置分组间距 | `mt-settings-group` |

圆角、尺寸及设置密度在 `theme.scss` 修改；新增尺寸先确认已有规格是否足够。

## 公共交互外观

这些类放在 Tailwind `components` 层，页面可以用 utility 调整排列、宽度与内边距。

| 类 | 用途 |
| --- | --- |
| `ui-action` | 文本操作，统一高度、hover、键盘焦点及禁用状态 |
| `ui-icon-button` | 图标操作，继承 `ui-action`，统一方形尺寸 |
| `ui-action--muted` | 辅助操作的文字层级 |
| `ui-menu-item` | 快捷访问、文件夹、文档、设置菜单的行外观 |
| `ui-list-action` | 工作台与欢迎页列表，可配合 `flex` 或 `grid` |
| `ui-card` | 工作台统计与快捷入口卡片 |
| `ui-card--soft` | 欢迎页引导卡片的较轻背景 |
| `ui-section-heading` | 侧栏分组标题 |
| `plugin-config-page` | 官方插件页面的公共字体、内容背景、内边距与滚动边界 |
| `plugin-config-header` / `plugin-config-title` | 插件页标题和操作区，复用主界面标题规格 |
| `plugin-config-toolbar` | 插件筛选、Tab 和搜索工具栏，窄窗口允许换行 |
| `plugin-config-count` | 插件数量徽标，使用中性主题色 |

菜单选中由 `.active` 或 `aria-current="page"` 驱动；操作按钮切换状态用 `aria-pressed`。业务按钮继续复用 `CustomButton`，开关复用 `CustomSwitch`。

示例：

```vue
<button type="button" class="ui-icon-button" aria-label="返回" :disabled="!canGoBack">
  <ArrowLeft theme="outline" size="18" />
</button>

<button type="button" class="ui-card grid items-center gap-2 px-3 py-2">
  <!-- 业务内容 -->
</button>
```

卡片与按钮的默认/hover 配色在主题变量中集中配置，不在各页面复制浅色、深色两套背景组合。

## 图标和主题

- config 区域与标题栏使用 `ui-icon-scope`；Icon Park 的描边统一取 `--workspace-icon-stroke`。
- 头像菜单、关于菜单及应用对话框的图标也使用同一规则，覆盖 teleport 后失去父容器的情况。
- 这些区域不再逐个填写 `stroke-width`。自定义 SVG 图形与图表不受该规则影响。
- 主色取 `--el-color-primary`；主色 hover 取 `--el-color-primary-dark-2`。不要在按钮中填写固定蓝色。
- 自动主题继续由 `src/store/theme.ts`、`src/utils/theme-sync.ts` 和 `system-theme` 插件控制。样式变量不新增持久化配置。

## 页面可以保留的差异

文件树缩进、拖放提示、编辑器专用覆盖、动画和复杂响应式布局属于页面职责。附件设置的滑块需要在较宽断点换行，因此保留专用断点，但设置行的基础内边距与分隔线复用公共规则。

插件专用的搜索、聊天、录屏等语义 token 继续保留。只有确认用途和状态一致时才合并变量，避免把不同语义的颜色强制绑定。

启动器、搜索引擎、待办使用 `plugin-config-page` 和已有 `ui-*` 类。插件页内的 Element Plus 输入框与选择器通过公共规则统一尺寸、描边和焦点；表格列宽、虚拟列表行高及提醒的过期/紧急状态属于各插件。`plugin-config.scss` 由主应用公共样式加载，也由这三个插件的 `runtime-entry.ts` 导入，让独立插件更新携带页面样式。样式源码只维护一份，更新后重新构建对应插件。

## 修改后的验证

1. 对修改文件执行 Prettier、ESLint、Stylelint，并运行 `pnpm typecheck`。
2. 变更 Tailwind 映射或 `@apply` 时验证 Vite 编译，确认公共类能生成。
3. 在实际 config 窗口检查工作台、菜单、设置、文档工具栏及悬浮菜单的浅色/深色显示。
4. 检查 hover、键盘焦点、禁用状态、长标题省略及窄窗口滚动行为。
