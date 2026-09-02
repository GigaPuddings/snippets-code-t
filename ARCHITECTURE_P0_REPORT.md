# Architecture P0 Report

日期：2026-09-02

范围：本阶段仅执行 P0 架构稳定治理，不进入 P1，不新增产品功能，不重写核心模块，不迁移用户数据格式。

## 修改前

### P0-1 Plugin Manifest storage 契约

确认事实：

- `src/plugins/protocol.ts` 已定义 `PluginPackageManifest.storage?: PluginStorageContract`。
- `src/plugins/loader.ts` 的 `normalizePluginPackageManifest()` 只保留 manifest 的基础字段、entry、permissions、settings、storageDependencies 等字段，未运行时验证并保留 `storage`。
- Rust 侧 `src-tauri/src/app_config.rs` 在索引协议中读取 storage 相关版本字段，但本地插件 manifest 安装校验未校验 `storage.schemaVersion`、`storage.indexSchemaVersion`、`storage.extractorVersion`。

风险等级：高。插件包可能声明了 storage 迁移和索引契约，但前端加载阶段丢失该契约，后续迁移、索引和插件数据治理会缺少可靠输入。

### P0-2 插件数据生命周期

确认事实：

- 旧默认插件包目录为 `<data-root>/plugins/<plugin-id>`。
- 插件持久状态已经主要落在 `<data-root>/state/plugins/<plugin-id>`。
- 插件代码中仍存在需要缓存目录的功能，且文档中对 package、state、cache 的边界描述不一致。
- 普通卸载与“卸载并删除数据”的语义需要和文档统一。

风险等级：高。插件代码目录如果承载不可丢失数据，升级或卸载会变成数据破坏风险。

### P0-3 CI Quality Gate

确认事实：

- `.github/workflows/ci.yml` 中 ESLint、Stylelint、Rust Clippy 使用过 `continue-on-error: true`。
- `.github/workflows/publish.yml` 中 Clippy 使用过 `continue-on-error: true`。
- CI `paths-ignore` 覆盖了 `package.json`、Tauri/Cargo 配置等关键构建输入。
- Release 依赖安装未强制 frozen lockfile。

风险等级：高。质量门禁会变成提示而不是阻断，关键依赖或构建配置变化也可能绕过 CI。

### P0-4 插件安全

确认事实：

- 官方插件包中存在多处 `command:*`。
- 插件权限在前端 runtime 中通过 `src/plugins/permissions.ts` 做调用前校验。
- native-host 调用在 Rust 侧会检查插件启用状态、backend 路径、manifest permission 和 command 名称。
- marketplace 安装包在本次治理前没有 SHA-256 完整性字段和下载后校验。
- 插件包签名、可信发布者、native-host 签名尚未形成强制校验机制。

风险等级：高。无完整性校验的远程插件包下载会削弱 marketplace 安装链路的可信度；官方 wildcard 权限会增加权限收敛难度。

## 修改后

### P0-1 已完成

- 在 `src/plugins/loader.ts` 新增 `normalizePluginStorageContract()`。
- 对 `schemaVersion`、`indexSchemaVersion`、`extractorVersion` 做运行时验证，要求全部为合法非负整数。
- `normalizePluginPackageManifest()` 会保留合法 `storage`，拒绝非法 `storage`，同时保持缺失 `storage` 时仍兼容。
- 在 `src-tauri/src/app_config.rs` 中补充 Rust manifest storage 校验，安装本地包时同步拒绝非法 storage 契约。
- 新增 `src/plugins/loader.test.ts` 覆盖合法 storage、缺失 storage、三个非法字段、normalize 后字段不丢失。

兼容性影响：

- 未声明 `storage` 的旧插件仍可加载。
- 声明非法 `storage` 的插件会被拒绝，这是预期的契约收紧。

### P0-2 已完成

- 默认插件包目录调整为 `<data-root>/packages/plugins/<plugin-id>`。
- 保留对旧默认目录 `<data-root>/plugins/<plugin-id>` 的迁移兼容逻辑。
- 插件持久状态继续使用 `<data-root>/state/plugins/<plugin-id>`。
- 插件缓存统一通过 `<app-cache>/plugins/<plugin-id>` 获取。
- `screen-recorder` 和 `wallpaper-switcher` 的缓存目录改为使用统一插件缓存 helper。
- 普通卸载删除 package，默认保留 persistent state。
- 明确删除数据流程删除 state、index、cache。
- 同步修正 `docs/PLUGIN_SYSTEM.md` 和 `docs/DATA_MANAGEMENT.md` 中过期或冲突的描述。

兼容性影响：

- 自定义插件安装根目录仍保持 `<custom-root>/plugins/<plugin-id>` 行为。
- 默认路径迁移只针对旧默认 package 目录，不改变已有 state 数据格式。

### P0-3 已完成

- 移除 CI 中 ESLint、Stylelint、Rust Clippy 的 `continue-on-error: true`。
- 移除 Release quality gate 中 Rust Clippy 的 `continue-on-error: true`。
- Release 安装依赖改为 `pnpm install --frozen-lockfile`。
- CI `paths-ignore` 不再忽略 `package.json`、`pnpm-lock.yaml`、`Cargo.toml`、`Cargo.lock`、`tauri.conf.json` 等关键构建输入。
- 为保证 Rust Clippy 在 `-D warnings` 下可以真实通过，同步修正了少量低风险既有 Clippy 问题：`&PathBuf` 参数、可折叠 `else if`、不必要 `return`、`or_default()`，并将两个超过参数数量阈值的 Tauri command 改为 request payload。

兼容性影响：

- 后续 lint、stylelint、clippy 失败会真实阻断 CI。
- 依赖锁文件不一致会在 Release 阶段暴露，而不是被静默修正。

### P0-4 已完成

- `plugin-registry/marketplace/marketplace.json` 为稳定官方 installable package 增加 `sha256`。
- `src-tauri/src/app_config.rs` 在插件包下载完成后、安装前执行 SHA-256 校验；不匹配会删除临时文件并中止该下载源。
- `src/api/plugins.ts`、`src/store/plugins.ts` 和直接安装入口传递 marketplace `sha256`。
- `scripts/verify-plugin-marketplace.mjs` 强制稳定 installable package 声明合法 SHA-256；开发分支加 `packageSubdir` 的示例包保持豁免。
- `scripts/sync-plugin-repositories.mjs` 在发布同步时为固定 tag 或 release asset 包计算并写入 SHA-256。
- 在协议层预留 `signature`、`publisher`、`nativeHost.signature` 字段，但本阶段不强制签名，避免破坏现有官方插件安装流程。
- 未新增任何 `command:*` 或 `backend:*` wildcard 权限。

兼容性影响：

- marketplace 中声明 `sha256` 的包必须与下载字节一致。
- 无签名包仍可安装；签名校验留到 P1/P2 渐进启用。

## 架构决策

确认事实：

- 当前仓库仍然是 Vue 3 + Tauri 2 单仓库架构，Core、Application、Infrastructure、Plugin Host 还没有完全物理分层。
- 插件平台已经具备 manifest、runtime、permissions、marketplace、package install、native-host 的雏形。

本阶段决策：

- 只稳定契约和边界，不重排目录、不拆大模块、不迁移用户数据格式。
- 将插件 package、persistent state、cache 的生命周期边界先在代码和文档中统一，为后续拆分 Plugin Host 做准备。
- 对 marketplace 安装链路先引入 SHA-256 完整性校验；签名、可信发布者和 native-host 签名只做兼容协议预留。
- 不把 `command:*` 在本阶段一次性替换成细粒度权限，以免破坏官方插件；但将其明确标注为技术债务。
- Core 继续围绕 Workspace、Content、Markdown、Metadata、Attachment、Search Contract、Plugin Contract、Configuration Contract 保持稳定；Wallpaper、Screen Recorder、Local AI、OCR、Translation、Todo 等能力继续按 Capability / Plugin 方向收敛。

## 安全审计

### 1. command:* 使用位置

确认事实：当前官方插件包 manifest 中以下插件使用 `command:*`：

- `plugin-registry/packages/desktop-files/plugin.json`
- `plugin-registry/packages/git-sync/plugin.json`
- `plugin-registry/packages/local-ai/plugin.json`
- `plugin-registry/packages/local-launcher/plugin.json`
- `plugin-registry/packages/screen-recorder/plugin.json`
- `plugin-registry/packages/screenshot/plugin.json`
- `plugin-registry/packages/search-engines/plugin.json`
- `plugin-registry/packages/system-theme/plugin.json`
- `plugin-registry/packages/todo/plugin.json`
- `plugin-registry/packages/translation/plugin.json`
- `plugin-registry/packages/wallpaper-switcher/plugin.json`

结论：这些是官方插件的既有技术债务，本阶段没有新增 wildcard。第三方插件原则上禁止默认授予 `command:*`。

### 2. backend:* 使用位置

确认事实：当前 `plugin-registry/packages` 和 `plugin-registry/examples` 的 `plugin.json` 未发现 `backend:*`。文档中仅作为权限语义示例和安全说明出现。

结论：本阶段没有新增 `backend:*`。

### 3. native-host 如何启动

确认事实：

- Rust 入口为 `src-tauri/src/app_config.rs` 中的 `try_invoke_local_plugin_backend()`。
- 启动前会读取已安装 manifest，校验 plugin id、backend kind、backend path 和 package dir。
- backend path 会 canonicalize，并要求位于 package dir 内。
- 调用前会执行 `require_plugin_enabled()`。
- 调用前会执行 `manifest_allows_backend_command()`，要求 manifest 声明 `backend:<command>` 或 `backend:*`。
- 最终通过 `Command::new(&backend_path)` 启动进程，并设置 `current_dir(&package_dir)`。

结论：native-host 具备 Rust 侧二次权限校验和路径边界校验。

### 4. plugin package 是否验证 hash

修改前：不验证。

修改后：验证。marketplace installable package 支持 `sha256`，Rust 下载后安装前校验 SHA-256。

### 5. plugin package 是否验证 signature

修改前：不验证。

修改后：仍不强制验证。本阶段只预留 `signature`、`publisher`、`nativeHost.signature` 协议字段。

结论：签名属于剩余安全能力，不应在 P0 中强行启用，以免破坏现有官方包发布流程。

### 6. marketplace package 下载是否有完整性验证

修改前：无完整性验证。

修改后：当 marketplace item 声明 `sha256` 时，安装链路会对下载字节做完整性校验；稳定官方包在 marketplace 校验脚本中强制声明 SHA-256。

### 7. frontend permission 与 Rust backend permission 是否双重校验

确认事实：

- 前端 `src/plugins/runtime.ts` 提供给插件的 `context.api.invoke` 和 `context.api.invokeBackend` 会走 `src/plugins/permissions.ts` 校验。
- native-host 的 `invokeBackend` 在 Rust 侧再次校验插件启用状态和 `backend:<command>` / `backend:*`。
- 通用 Tauri command 的 `command:*` / `command:<name>` 目前主要依赖插件 runtime 入口校验；不是每个 Rust command 都内置插件身份和 manifest 权限校验。

结论：

- native-host 已形成前后端双重校验。
- 普通 Tauri command 仍需在 P1 通过 Capability Registry / Command Adapter 逐步收敛，避免插件长期依赖大量裸命令。

## 代码健康检查

本阶段只做审计，不直接拆分。

### src-tauri/src/git_sync.rs

- 当前规模：4720 行。
- 职责：Git CLI 调用、仓库状态、分支/提交/冲突、自动同步、历史记录、插件命令入口。
- 依赖：Git CLI、文件系统、AppConfig、Tauri state/event、工作区路径和缓存。
- 共享状态：Git 状态缓存、操作锁、自动同步管理器。
- Tauri Command：Git 同步相关命令集中暴露。
- 内部 Service：建议抽出 git process service、sync service、conflict service、history service。
- Infrastructure：Git 命令执行、路径解析、文件系统读写。
- 可独立测试部分：Git 输出解析、冲突解析、状态转换、配置 merge。
- 推荐拆分目录：`src-tauri/src/git_sync/{commands.rs, service.rs, git_cli.rs, conflicts.rs, auto_sync.rs, history.rs, config.rs}`。

### src-tauri/src/window.rs

- 当前规模：3606 行。
- 职责：窗口显示隐藏、置顶、截图、监视器信息、进度状态、标题栏和窗口事件。
- 依赖：Tauri window API、系统窗口 API、剪贴板/截图相关基础设施。
- 共享状态：窗口状态、截图缓存、进度状态。
- Tauri Command：窗口控制、截图、置顶、进度相关命令。
- 内部 Service：建议抽出 window service、screenshot service、pin service、progress service。
- Infrastructure：平台窗口 API、截图实现。
- 可独立测试部分：窗口状态转换、缓存 key、参数验证。
- 推荐拆分目录：`src-tauri/src/window/{commands.rs, core.rs, screenshot.rs, pin.rs, progress.rs, platform.rs}`。

### src-tauri/src/app_config.rs

- 当前规模：3757 行。
- 职责：应用配置、配置迁移、插件包生命周期、marketplace 下载、manifest 校验、native-host、插件状态与数据清理。
- 依赖：文件系统、HTTP 下载、zip 解包、数据库路径、快捷键/托盘/窗口配置、插件模块。
- 共享状态：配置 manager、插件安装任务、插件锁、安装进度事件。
- Tauri Command：配置读写、插件安装/卸载/状态/native-host 等命令。
- 内部 Service：建议抽出 config manager、plugin package service、marketplace downloader、integrity verifier、native-host service。
- Infrastructure：文件系统、网络下载、压缩包处理、hash 计算。
- 可独立测试部分：manifest validation、路径策略、hash 校验、迁移策略、package 清理策略。
- 推荐拆分目录：`src-tauri/src/config/{schema.rs, manager.rs, migration.rs}` 与 `src-tauri/src/plugins/{manifest.rs, packages.rs, marketplace.rs, integrity.rs, lifecycle.rs, native_host.rs}`。

### src-tauri/src/lib.rs

- 当前规模：949 行。
- 职责：Tauri 启动、state 注册、插件初始化、窗口/托盘/快捷键初始化、command registry。
- 依赖：几乎所有后端模块和 Tauri setup 生命周期。
- 共享状态：应用级 manager、运行态 state。
- Tauri Command：集中注册大量命令。
- 内部 Service：建议仅保留 bootstrap orchestration。
- Infrastructure：Tauri Builder、plugin setup、系统托盘/窗口初始化。
- 可独立测试部分：较少，主要应通过拆分后的 setup helpers 做集成测试。
- 推荐拆分目录：`src-tauri/src/bootstrap/{state.rs, plugins.rs, tray.rs, commands.rs}`。

### src-tauri/src/plugins/screen_recorder.rs

- 当前规模：3012 行。
- 职责：录屏会话、区域选择、FFmpeg 发现和调用、导出、音频/窗口信息、缓存。
- 依赖：FFmpeg、系统窗口/屏幕 API、Tauri event、插件缓存目录。
- 共享状态：录制会话、导出进度、临时缓存。
- Tauri Command：screen-recorder 插件命令集中暴露。
- 内部 Service：建议抽出 recorder service、ffmpeg service、export service、window capture service。
- Infrastructure：FFmpeg 进程、平台屏幕 API、文件系统缓存。
- 可独立测试部分：FFmpeg 参数生成、导出状态机、路径策略、资源检测。
- 推荐拆分目录：`src-tauri/src/plugins/screen_recorder/{commands.rs, service.rs, ffmpeg.rs, capture.rs, export.rs, windows.rs, audio.rs, cache.rs}`。

### src-tauri/src/plugins/local_ai.rs

- 当前规模：1969 行。
- 职责：本地 AI 配置、模型扫描、服务启动停止、聊天流式输出、翻译、附件、历史。
- 依赖：llama runtime、文件系统、HTTP streaming、Tauri event、配置状态。
- 共享状态：运行服务状态、模型缓存、聊天/翻译会话状态。
- Tauri Command：local-ai 插件命令集中暴露。
- 内部 Service：建议抽出 runtime service、model service、chat service、translation service、history service。
- Infrastructure：本地进程、HTTP client、模型文件扫描。
- 可独立测试部分：模型发现、配置校验、请求 payload 构建、历史格式。
- 推荐拆分目录：`src-tauri/src/plugins/local_ai/{commands.rs, config.rs, runtime.rs, service.rs, chat.rs, streaming.rs, history.rs, attachments.rs}`。

### src/plugins/runtime.ts

- 当前规模：1162 行。
- 职责：插件资源 URL、模块重写、共享模块 shim、插件 context、注册/卸载、样式注入。
- 依赖：Vue、Element Plus、Tauri API、权限系统、插件 registry、loader。
- 共享状态：插件 runtime registry、共享模块、样式节点、注册 cleanup。
- Tauri Command：通过 `context.api.invoke` 转发。
- 内部 Service：建议抽出 asset resolver、module loader、context factory、registration manager、style manager。
- Infrastructure：动态 import、Blob URL、Tauri invoke。
- 可独立测试部分：URL 重写、权限包装、注册清理、共享模块解析。
- 推荐拆分目录：`src/plugins/runtime/{assets.ts, modules.ts, context.ts, registrations.ts, styles.ts, lifecycle.ts}`。

### src/store/plugins.ts

- 当前规模：791 行。
- 职责：插件状态 store、marketplace 安装、依赖安装、进度、资源状态、runtime reconcile。
- 依赖：Pinia、插件 API、runtime、registry、marketplace 数据。
- 共享状态：installed/enabled/runtime/resource/progress 状态。
- Tauri Command：通过 API 层间接调用安装、卸载、启用、禁用命令。
- 内部 Service：建议抽出 install service、resource status service、runtime reconciler。
- Infrastructure：Tauri invoke API、marketplace 下载进度事件。
- 可独立测试部分：依赖安装顺序、状态合并、进度状态、资源状态映射。
- 推荐拆分目录：`src/store/plugins.ts` 保留 store facade，新增 `src/plugins/services/{installService.ts, resourceStatus.ts, runtimeReconciler.ts}`。

## 剩余问题

确认事实：

- 官方插件仍广泛使用 `command:*`。
- 插件包签名、可信发布者和 native-host 签名字段已预留，但未执行强制验证。
- 普通 Tauri command 还没有完整的 Rust 侧插件身份与细粒度权限二次校验。
- 多个 Rust 和前端插件模块仍明显过大。
- 全仓 `pnpm lint` 当前退出码为 0，但仍有 1889 warnings，主要是历史 TypeScript 复杂度、函数长度、显式类型和 `any` 债务。
- 全仓 `pnpm lint:style` 当前退出码为 0。

推断：

- 当前 `command:*` 主要是历史包兼容与插件能力快速迁移的结果；直接移除会破坏官方插件。
- 如果不引入 Capability Registry，插件会继续通过裸 Tauri command 穿透 Core / Infrastructure 边界。

## P1 推荐任务

- 建立 Plugin Capability Registry，将 `context.workspace`、`context.storage`、`context.search`、`context.clipboard`、`context.network`、`context.notification`、`context.ai` 作为插件优先调用面。
- 为官方插件逐个替换 `command:*`，生成最小 `command:<name>` 权限清单。
- 为普通 Tauri command 增加插件身份上下文或 command adapter，逐步形成 Rust 侧二次校验。
- 实现 signed plugin package、trusted publisher、native-host signature 的验证策略和迁移开关。
- 按本报告的拆分建议优先拆 `app_config.rs`、`git_sync.rs`、`window.rs`，每次只拆一个边界并补充测试。
- 将插件 storage/index/extractor version 纳入迁移策略和兼容矩阵。
- 继续单独治理剩余 ESLint warnings，并在 warnings 清零或明确分级后评估是否恢复 `--max-warnings 0`。

## 验证结果

通过：

- `pnpm typecheck`
- `pnpm test`：77 files / 429 tests passed
- `pnpm lint`：0 errors / 1889 warnings，退出码 0
- `pnpm lint:style`：退出码 0
- `pnpm plugins:verify-marketplace -- --local`：16 entries / 16 installable packages
- `pnpm plugins:verify-marketplace`：16 entries / 16 installable packages
- `cargo test --manifest-path src-tauri\Cargo.toml`：16 passed
- `cargo clippy --manifest-path src-tauri\Cargo.toml --all-targets -- -D warnings`
- `pnpm tauri build --debug --no-bundle`：生成 `src-tauri/target/debug/snippets-code.exe`
- 改动相关前端文件局部 ESLint：`src/plugins/loader.ts`、`src/plugins/loader.test.ts`、`src/plugins/protocol.ts`、`src/api/plugins.ts`、`src/plugins/screen-recorder/pages/recorder/core/recordingApi.ts`

说明：

- 本阶段已经把 CI / Release 工作流中的 ESLint、Stylelint、Clippy 改为真正 gate。
- 当前仓库的完整本地验证已通过；ESLint warnings 仍作为后续质量债务保留，不阻断当前脚本退出码。
