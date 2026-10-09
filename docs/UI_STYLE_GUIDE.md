# 公共 UI 样式维护

## 配置分层

| 层级 | 文件 | 职责 |
| --- | --- | --- |
| 基础变量 | `src/styles/theme.scss` | 字体、字号、控件尺寸、圆角、交互颜色、阴影及浅色/深色值 |
| Tailwind 映射 | `tailwind.config.js` | 把变量映射为 `text-ui`、`h-ui-control`、`rounded-ui` 等 utility |
| 构建配置 | `postcss.config.js` | 按配置文件自身的位置加载 Tailwind，避免受启动目录影响 |
| 公共外观 | `src/styles/components.scss` | 操作按钮、菜单项、卡片、列表行、设置卡片及悬浮菜单 |
| 图标外观 | `src/styles/icons.scss` | SVG 对齐、统一描边、实心状态及旧插件样式兼容 |
| 插件页面外观 | `src/styles/plugin-config.scss` | 插件页面布局及中性表单控件，同时供主应用和独立插件包编译 |
| Markdown 排版 | `src/styles/markdown.scss` | 正文、标题、列表、引用、表格与代码块的共享 mixin |
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
<script setup lang="ts">
import ArrowLeft from '~icons/lucide/arrow-left';
</script>

<template>
<button type="button" class="ui-icon-button" aria-label="返回" :disabled="!canGoBack">
  <ArrowLeft width="18" height="18" />
</button>
</template>

<button type="button" class="ui-card grid items-center gap-2 px-3 py-2">
  <!-- 业务内容 -->
</button>
```

卡片与按钮的默认/hover 配色在主题变量中集中配置，不在各页面复制浅色、深色两套背景组合。

## 图标和主题

- 主 UI 图标集为 **Lucide**，通过 `~icons/lucide/<名称>` 静态导入。品牌图标使用 `~icons/simple-icons/<名称>` 或已有品牌资产，不混用其他 UI 图标集。
- 主应用 Vite 使用 `scripts/icon-config.mjs`。`unplugin-icons` 从本地 Iconify JSON 数据按需生成 Vue 3 SVG 组件；禁用自动安装，运行时不请求 Iconify API，也不打包整个图标集。图标构建工具要求 Node.js 20.19.x 或 22.12 及更新版本。
- 默认尺寸为 `1em`；使用 `width`、`height` 或现有尺寸 class 设置 16/18/20/24px 等大小，颜色继承 `currentColor`。移除旧 `theme`、`size`、`strokeWidth` 属性。旋转用 `animate-spin`，收藏星等实心状态用 `app-icon--filled`。
- 列表类型图标用 16px，标题栏和文档工具栏用 18px，主导航用 20px；点击区域由按钮控制，不在 SVG 上添加按钮尺寸或内边距。工作区入口统一用 `library`，笔记类型用 `notebook`，代码片段用 `file-code`；阅读模式保留 `book-open`。拖拽预览克隆已渲染的类型 SVG，避免开发服务无法加载的原始图标虚拟导入。
- `src/styles/icons.scss` 中的全局规则适用于弹出层；Lucide 的 24px 网格描边统一取 `--app-icon-stroke`。品牌图标、进度环和图表保留自己的绘制规则。
- 动态菜单和导航继续传递 Vue `Component`，通过静态导入配置；不引入完整图标名称注册表。普通 SVG 图标同样改用生成的组件。
- 仅产品专属 SVG 放在 `src/assets/icons`，通过 `~icons/app/<文件名>` 编译；规范见该目录 README。保留现有应用图标、品牌图标、用户文件图标和功能性 SVG 图形。
- 官方插件的图标迁移和构建脚本另行提交、发布。迁移时复用 `scripts/icon-config.mjs`，入口导入同一份图标样式，再单独构建、安装对应插件。少量 `.i-icon` 布局、旋转兼容规则用于尚未更新的已安装插件；`@icon-park/vue-next` 暂时保留为开发依赖，供尚未迁移的插件源码使用。主应用自有 UI 已迁移；工作区仍复用 Git 插件的贡献组件，因此该组件的旧图标暂时也会进入主应用构建。
- 图标许可证在 `public/licenses/icons.txt`，主应用构建自动携带该文件。插件迁移时也应把许可证带入独立包。新增第三方图标须检查对应图标集及品牌许可。
- 主色取 `--el-color-primary`；主色 hover 取 `--el-color-primary-dark-2`。不要在按钮中填写固定蓝色。
- 自动主题继续由 `src/store/theme.ts`、`src/utils/theme-sync.ts` 和 `system-theme` 插件控制。样式变量不新增持久化配置。

## 页面可以保留的差异

### 图标语义约定

同一功能在主导航、工作台快捷入口、列表和搜索结果中使用相同的图标含义。图标表示对象或动作；状态通过选中背景、实心标记和 `aria-pressed` 表达，不另换成含义不同的图案。

| 功能 | Lucide 图标 | 含义 |
| --- | --- | --- |
| 工作台 / 工作区 | `layout-dashboard` / `library` | 总览 / 知识集合 |
| 启动器 / 网络搜索 / 待办 | `app-window` / `globe` / `list-todo` | 打开应用 / 网络检索 / 任务清单 |
| 笔记 / 代码片段 / 未分类 | `notebook` / `file-code` / `inbox` | 文档类型 / 代码文件 / 待整理内容 |
| 插件 / AI 能力 / 开发者模式 | `puzzle` / `brain` / `square-terminal` | 扩展 / 智能能力 / 调试工具 |
| 编辑器与附件 | `file-image` | 文档及图片附件设置 |
| 阅读 / 编辑 / 源码 | `book-open` / `square-pen` / `code` | 文档模式 |
| 预览 / 隐藏预览 | `eye` / `eye-off` | 查看内容；折叠侧栏仍使用 `panel-left` 或 `panel-right-close` |
| 链接 / 附件 / 类型转换 | `link` / `paperclip` / `replace` | 链接地址 / 附加文件 / 替换内容类型 |
| 截图选择 / 画笔 / OCR | `mouse-pointer-2` / `pencil` / `scan-text` | 选择与标注 / 文本识别 |
| 置顶 / 取消置顶 / 检查更新 | `pin` / `pin-off` / `refresh-cw` | 置顶开关用同一个 `pin`；`pin-off` 仅用于明确的取消置顶菜单操作 |

文字提示和可访问名称继续描述实际动作，例如“打开已存笔记”“显示预览”，不使用图标库的名称。

文件树缩进、拖放提示、编辑器专用覆盖、动画和复杂响应式布局属于页面职责。附件设置的滑块需要在较宽断点换行，因此保留专用断点，但设置行的基础内边距与分隔线复用公共规则。

插件专用的搜索、聊天、录屏等语义 token 继续保留。只有确认用途和状态一致时才合并变量，避免把不同语义的颜色强制绑定。

启动器、搜索引擎、待办使用 `plugin-config-page` 和已有 `ui-*` 类。插件页内的 Element Plus 输入框与选择器通过公共规则统一尺寸、描边和焦点；表格列宽、虚拟列表行高及提醒的过期/紧急状态属于各插件。`plugin-config.scss` 由主应用公共样式加载，也由这三个插件的 `runtime-entry.ts` 导入，让独立插件更新携带页面样式。样式源码只维护一份，更新后重新构建对应插件。

Local AI 对话页采用独立的双栏布局，标题、图标按钮、列表操作和快捷提示卡片复用同一套公共类；其 `runtime-entry.ts` 同样导入 `plugin-config.scss`。`chat.scss` 仅维护聊天布局、Markdown、输入框和响应式规则，聊天背景与文字通过页面内变量引用公共主题 token，服务状态和警告继续使用聊天语义色。正文 14px、辅助信息 12px，消息与输入框共享最大阅读宽度；模型选择的悬浮菜单直接使用全局主题变量，避免 teleport 后丢失页面变量。

## Markdown 排版维护

- `theme.scss` 中的 `--markdown-*` 变量定义字号、字重、段间距、列表缩进、代码字号与浅色／深色颜色。
- TipTap 正文使用 `markdown.typography` mixin；代码块 node view 复用同一组变量。编辑器行距仍由用户配置覆盖。
- 聊天插件可在独立更新时接入同一 mixin；代码复制按钮、消息布局、编辑器 node view 等交互仍由各自组件维护。
- 修改共享样式后验证工作区正文与代码块，不要重新复制一套页面私有标题、列表和引用规则。

## 修改后的验证

1. 对修改文件执行 Prettier、ESLint、Stylelint，并运行 `pnpm typecheck`。
2. 变更 Tailwind 映射或 `@apply` 时验证 Vite 编译，确认公共类能生成。
3. 在实际 config 窗口检查工作台、菜单、设置、文档工具栏及悬浮菜单的浅色/深色显示。
4. 检查 hover、键盘焦点、禁用状态、长标题省略及窄窗口滚动行为。
5. 图标构建改动运行 `pnpm exec vitest run scripts/icon-config.test.mjs`，这组测试也包含在 `pnpm test` 中。官方插件的独立构建验证随插件迁移进行；主应用提交不改写插件包和 manifest。
