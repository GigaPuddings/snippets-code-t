# 官方插件开发

官方功能插件默认以外部可安装包的形式发布。一个新的官方插件只有在应用源码、插件包源码、插件市场条目和独立 GitHub 插件仓库都接好之后，才算完整。

## 必需文件

可以把 `quick-tools` 当作最小可运行的搜索插件示例。

```text
src/plugins/<plugin-id>/
  manifest.ts
  runtime-entry.ts
  index.ts
  searchProvider.ts

plugin-registry/packages/<plugin-id>/
  plugin.json
  README.md
  dist/frontend.js
```

运行时入口必须调用与 manifest 能力匹配的插件桥注册方法。以快速搜索工具为例，`plugin.json` 需要在 `capabilities.searchSources` 中声明搜索来源，`runtime-entry.ts` 需要调用 `context.registerSearchProvider(...)`。

## 应用接入清单

- 在 `src/plugins/<plugin-id>` 下添加插件源码。
- 只有插件需要保持内置开发兼容时，才把插件 manifest 加到 `src/plugins/loader.ts`。
- 当核心应用有类型化引用时，把插件 ID 加到 `src/plugins/types.ts`。
- 只有官方插件需要核心侧命令、热键或启动服务时，才在 `src-tauri/src/app_config.rs` 添加后端白名单或状态门禁。
- 在 `scripts/build-official-plugin-runtimes.mjs` 添加条目，确保能生成 `dist/frontend.js`。
- 在 `scripts/plugin-release-config.mjs` 添加条目，并填写对应的 `GigaPuddings/snippets-code-plugin-<plugin-id>` 仓库名。
- 运行同步脚本前，先创建独立 GitHub 插件仓库。
- 在 `plugin-registry/marketplace/marketplace.json` 添加插件市场条目。
- 在 `plugin-registry/packages/<plugin-id>/README.md` 添加插件包文档。

已发布的官方 marketplace 包应该直接指向插件仓库的 tag 归档，例如：

```text
https://github.com/GigaPuddings/snippets-code-plugin-quick-tools/archive/refs/tags/2.0.6.zip
```

正式发布到独立官方插件仓库时，不要使用 `packageSubdir`。它只适合开发归档或多包示例。

应用会从主仓库读取插件市场列表：

```text
https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json
```

只发布独立插件仓库并不会让插件自动出现在应用里。插件包 tag 可用后，还需要提交并推送主仓库中更新后的 marketplace manifest。

纯资源包需要和它的父功能插件双向关联：

- 父级 marketplace 条目声明 `dependencies`，例如 `screen-recorder` 依赖 `screen-recorder-ffmpeg`。
- 资源 marketplace 条目声明 `resourceFor`，例如 `screen-recorder-ffmpeg` 设置 `resourceFor: "screen-recorder"`。

设置页会把纯资源包展示在父功能插件下面，所以资源插件不一定会作为单独的顶层 marketplace 行出现。

## 构建与发布

如果只是修复插件本身，只升级插件包版本；除非插件依赖新的应用桥 API，否则保持 `minAppVersion` 不变。

```powershell
pnpm plugins:tag
```

桌面应用版本与插件版本相互独立。发布桌面应用时使用 `pnpm tag`，该命令不会重建、同步或重置插件版本。只有需要发布插件更新时才运行 `pnpm plugins:tag`。

这个交互工具会列出所有官方插件，展示当前 marketplace 版本。终端支持交互时，可以用 `↑/↓` 移动、`Space` 多选、`Enter` 确认；非交互终端可输入多个序号或 ID（空格或逗号分隔），也可以输入 `changed` 选择检测到本地相关文件有改动的插件。随后为每个插件输入新的插件版本号，工具会再次展示发布摘要并要求确认。确认后它会自动执行匹配的构建或打包步骤，同步独立插件仓库，创建或更新插件 tag，把 marketplace 的 `packageUrl` 固定到该 tag 归档，重新生成本地插件包元数据，校验 marketplace，然后执行 `git add -A`、提交主仓库变更并 `git push origin main`。只有在插件仓库的同名 tag 已存在时，工具才会额外询问是否覆盖。

只想检测哪些插件可能需要发布更新时，可以运行：

```powershell
pnpm plugins:tag -- --check-updates
```

列表中的 `*` 表示检测到该插件源码、插件包目录或资源包目录有本地改动。

只有在插件仓库已经同步完成、但你需要把主仓库变更留在本地交接时，才使用：

```powershell
pnpm plugins:tag -- --no-push-main
```

带生成资源的纯资源包也走同一个流程。发布 `screenshot-rapidocr` 或 `screen-recorder-ffmpeg` 时，工具会先运行对应的资源打包步骤，并把必要的资源标志传给同步脚本，避免用空模板覆盖完整资源仓库。

`pnpm plugins:verify-marketplace` 默认执行远程严格校验，会拉取 marketplace 中每个 tag 对应的远程 `plugin.json`，确保应用实际下载到的插件包 manifest 可用。远程校验会访问 GitHub API，因此速度取决于网络和 GitHub 限额。

只想做本地快速检查时，可以运行：

```powershell
pnpm plugins:verify-marketplace -- --local
```

本地快速校验会读取本仓库中的官方插件包或已生成资源包，检查 marketplace 结构、版本一致性、依赖关系和本地入口文件，但不会确认远程 tag 已经可下载。

## 更新发布清单

发布官方插件更新、但不发布新的主应用版本时，按这个清单检查：

- 修改 `src/plugins/<plugin-id>` 下的源码，并让流程重建对应的 `plugin-registry/packages/<plugin-id>/dist/frontend.js`。
- 运行 `pnpm plugins:tag`，选择插件并输入新的插件版本号。除非运行时依赖新的应用命令、权限、路由桥或存储行为，否则保持 `minAppVersion` 不变。
- 在干净的应用数据目录里安装 marketplace 包，验证安装、启用、禁用、更新、卸载和重新安装。搜索提供器应在禁用时消失，重新启用后恢复，并且更新后不能产生重复的本地索引行。
- 插件仓库 tag 和主仓库 marketplace manifest 更新需要一起推送到远程。只有远程 marketplace 版本高于用户已安装包版本时，应用刷新后才会提示可更新。

## 快速搜索插件清单

- manifest 声明 `capabilities.searchSources`。
- 运行时入口导入搜索提供器，并通过 `context.registerSearchProvider` 注册。
- marketplace 版本高于用户已安装插件版本，这样插件设置页才会显示可更新。
- 已安装插件处于启用状态。
- 搜索页签过滤器没有隐藏该来源。Quick search 的工具结果应该出现在 `全部` 和 `工具` 下。
- 查询示例写在插件 README 中，用户不应该靠猜语法使用。

## 常见失败模式

- 插件没有出现在 marketplace 中：marketplace 条目缺失或过期、分支/tag URL 错误，或 marketplace 所在分支没有推送。
- 插件安装失败：package URL 返回 404、仓库未创建、tag 未推送、归档根目录不包含 `plugin.json`，或包大小元数据过期。
- 插件显示了但不能工作：没有重建 `dist/frontend.js`，运行时入口没有注册能力，manifest 能力和运行时注册不匹配，或已安装的本地包仍是旧版本。
- 官方插件只在开发环境工作：源码改了，但没有运行 `pnpm plugins:build-official` 和 `pnpm plugins:sync-repos`，或没有通过 `pnpm plugins:tag` 完整发布。
- 后端命令被拦截：插件被禁用，命令权限缺失，或应用侧官方插件白名单/状态门禁没有包含该插件 ID。

调试时，优先从应用数据目录里的已安装插件包开始，按顺序检查 `plugin.json`、`dist/frontend.js`、版本号、启用状态和应用日志。
