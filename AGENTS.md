# AGENTS.md

## 项目定位

这是一个 Vue 3 + Tauri 2 的桌面应用项目，前端、Tauri 后端、官方插件、插件市场和本地资源包都在同一个仓库中维护。任何代码修改都必须基于真实项目文件、真实报错、真实截图和真实需求，不允许脱离现有实现凭猜测重写。

## 开发前必须先做的事

- 先阅读相关目录和已有实现，再决定怎么改。
- 新增功能前必须先搜索是否已有相同或相近能力，优先复用已有组件、composable、store、API、Tauri command、插件桥和脚本。
- 不要因为不知道已有代码位置就重新创建一套同名功能、同类组件、重复工具函数或重复后端命令。
- 只有确认现有实现无法承载新需求时，才新增模块；新增时也要沿用项目命名、目录边界、类型和交互方式。
- 修改用户界面前，先检查 `src/components`、`src/components/UI`、`src/layout`、`src/pages` 中是否已有可复用组件或布局模式。

## 技术栈和样式规范

- 前端使用 Vue 3、TypeScript、Vite、Element Plus、TailwindCSS。
- 项目已经配置 TailwindCSS，样式优先使用 Tailwind utility class 和 `tailwind.config.js` 中绑定的主题 token。
- 不要在 Vue 文件里随意写大段原生 CSS 来实现常规布局、间距、颜色、边框、阴影和状态样式。
- 只有在 Tailwind 难以表达、需要第三方组件深度覆盖、动画关键帧、复杂伪元素或现有文件已经使用同一局部样式模式时，才写 scoped CSS/SCSS。
- 新增颜色、背景、文本色、边框色、阴影时，优先复用 Tailwind token 和 CSS 变量，不要硬编码孤立色值。
- 现有主题变量入口包括 `src/styles/theme.scss`、`src/styles/index.scss` 和 `tailwind.config.js`。涉及主题的新需求必须同时考虑浅色、深色、系统主题/自动主题，以及 Element Plus 变量联动。

## UI 复用规则

- 通用对话框、按钮、开关、确认框、搜索面板等先看 `src/components/UI`。
- 编辑器相关先看 `CodeMirrorEditor`、`TipTapEditor`、`AiAssistDialog`、`AiSelectionToolbar`。
- 分类、内容、标签、快捷导航、分割面板、搜索语法等先看 `src/components` 下已有目录。
- 不要新增和 `CustomButton`、`CustomSwitch`、`CommonDialog`、`ConfirmDialog`、`SearchPanel` 等职责重叠的组件。
- 新 UI 必须和现有布局密度、圆角、颜色、暗色模式、hover/active/disabled 状态保持一致。
- 如果新增组件是通用能力，需要放在合适的公共目录并导出；如果只是页面私有能力，应放在对应页面/插件范围内。

## 插件系统规范

- 插件相关需求必须先检查 `src/plugins`、`src/api/plugins.ts`、`src-tauri/src/plugins`、`src-tauri/src/app_config.rs`、`plugin-registry` 和 `scripts/plugin-*.mjs`。
- 官方插件前端源码在 `src/plugins/<plugin-id>`，不要为已有官方插件另建并行实现。
- 插件协议、运行时注册、路由、设置页、搜索源、热键、标题栏动作、权限等能力优先复用 `src/plugins/runtime.ts`、`registry.ts`、`protocol.ts`、`permissions.ts`、`loader.ts`、`routes.ts`、`settings.ts`、`search.ts`、`hotkeys.ts` 等现有机制。
- 插件包、示例包和插件市场索引属于 `plugin-registry`，不要放回 `docs`。
- `plugin-registry/packages` 存放官方插件包 manifest 和构建后的 runtime。
- `plugin-registry/examples` 存放示例包和资源包模板。
- `plugin-registry/marketplace/marketplace.json` 是应用读取的插件市场索引。
- 涉及官方插件发布、版本、marketplace、资源包时，必须同步检查 `scripts/plugin-release-config.mjs`、`scripts/plugin-tag.mjs`、`scripts/package-official-plugins.mjs`、`scripts/verify-plugin-marketplace.mjs`。
- 大体积 runtime 资源、模型、OCR、FFmpeg、llama 等二进制不应提交到主仓库，应走资源包或 Release asset。
- 插件新增能力如果需要后端支持，必须同步检查 Tauri 权限、插件启用状态门禁、后端白名单和禁用时行为。

## 主题和系统主题要求

- 任何主题、颜色、暗色模式、自动主题、系统主题相关需求，都必须检查 `system-theme` 插件和 Tauri 后端主题配置。
- 前端主题改动不能只改一个页面，要确认全局 CSS 变量、Tailwind token、Element Plus 变量和暗色 class 是否一致。
- 插件 UI 也必须遵循主应用主题变量，不允许写死只适配浅色或只适配深色的样式。
- 新增主题配置项时，要同步考虑配置持久化、默认值、迁移旧配置、插件启用/禁用状态和 i18n 文案。

## 文档和目录边界

- `docs` 只放架构、规范、产品评审、插件系统说明等 Markdown 文档。
- 插件市场、插件包、示例包放 `plugin-registry`。
- 脚本放 `scripts`。
- Tauri 后端代码放 `src-tauri/src`，本地开发资源说明放 `src-tauri/resources/*/README.md`。
- 不要把临时文件、下载缓存、构建输出、调试日志、二进制资源放进文档目录或源码目录。

## 清理和验证要求

- 任务完成前检查是否产生无关文件、临时文件、空文件夹、构建输出或本地资源残留。
- 常见残留包括 `_tmp`、`dist-plugin-packages`、`src-tauri/target`、下载的 OCR/FFmpeg/llama 二进制、临时日志和自动生成的无关配置。
- 修改插件 marketplace 或插件包后，优先运行 `node scripts/verify-plugin-marketplace.mjs --local`。
- 修改官方插件打包路径后，运行 `node scripts/package-official-plugins.mjs` 验证路径可读，验证后清理生成的 `dist-plugin-packages`。
- 修改前端通用逻辑后，按风险运行 `pnpm typecheck`、`pnpm lint` 或更小范围的项目脚本；如果 `pnpm` 因本机依赖审批失败无法运行，要明确说明。
- 提交前用 `git status --short` 确认只包含本次需求相关文件。

## 工作方式

- 优先小范围、可验证修改，避免顺手重构无关模块。
- 遇到已有实现不清楚时，继续查代码，不要靠记忆补全。
- 如果需求会影响插件、主题、i18n、配置迁移、快捷键或后端权限，必须同步检查这些链路。
- 不要删除用户已有改动；工作区不干净时，只处理和当前任务相关的文件。
