# 数据存储、清理与索引管理方案

> 状态：v1/P1-C 已落地（安全清理、数据契约、增量桌面索引、本地图标批量读取、严格同步边界、数据库物理拆分）；图标文件化列入后续演进
> 适用版本：snippets-code 2.1.61
> 更新日期：2026-09-03
> 范围：核心数据、Markdown 工作区、官方插件、检索索引、图标、缓存、备份与迁移

跨设备 GitHub/Git 同步的数据白名单、配置投影、新设备恢复与冲突策略，见 [跨设备数据同步方案](./DATA_SYNC.md)。

## 1. 结论

本项目不应把“统一存储”理解为把 SQL、JSON 和二进制全部改成一种格式。推荐统一的是数据目录、数据所有权、生命周期、版本和清理协议；具体介质仍按数据特征选择：

- 用户内容以 Markdown、Frontmatter 和附件文件为唯一事实源，保持可读、可迁移、可用 Git 同步。
- 小型配置使用有 schema 版本的 JSON。
- 搜索历史、用户快捷项、插件持久状态等结构化持久数据使用 SQLite。
- 应用、书签、桌面文件和 Markdown 元数据索引属于可重建索引，放入独立的索引数据库。
- 图标、缩略图、壁纸、录屏中间文件等二进制缓存以文件保存，数据库只存键、相对路径和指纹。
- 插件代码、插件用户数据和插件缓存必须分开，更新插件不得删除用户数据。

对本次四个问题的直接回答：

1. 清理应用、书签或图标缓存时，不应同步清理访问历史。历史是用户个性化数据，不是缓存。只有用户明确执行“清除使用历史”“卸载并删除插件数据”或“恢复出厂设置”时才删除历史。
2. 采用“工作区事实源 + 应用持久状态 + 可重建索引 + OS 缓存 + 插件包”的分层目录，而不是强制统一成一种文件格式。
3. 应用或插件版本变化本身不应触发全量检索。只有索引损坏、不可迁移的索引 schema 变化、提取规则发生不兼容变化，或用户主动重建时才全量扫描；其他情况应迁移或差量更新。
4. Windows 应用和本地文件直接通过 `IShellItemImageFactory` 获取图标，优先命中系统缓存；浏览器书签批量读取本地 favicon 数据库。批量扫描不再依赖网络。图标文件化和可见项优先队列仍是下一阶段优化。

### 1.1 v1 实施状态

| 能力 | 状态 | 当前实现 |
| --- | --- | --- |
| GitHub 同步边界 | 已完成 | 只暂存 Markdown、受管附件和同步协议文件；本机索引、数据库、历史、图标、路径和秘密禁止同步 |
| JSON 与数据布局 | 已完成 | 原子写入；数据根 `manifest.json`；插件 `data.json` 迁至 `state/plugins/<id>` |
| SQLite 安全 | 已完成 | `schema_migrations`、`index_meta`、`PRAGMA user_version`；WAL 数据通过 SQLite Backup API 生成一致备份 |
| 数据目录迁移 | 已完成 | 迁移完整数据根并使用 staging 提交；旧目录保留为回滚来源 |
| 清理边界 | 已完成 | 图标缓存、来源索引和分来源访问历史分别清理；缓存清理不级联历史 |
| 手动项保护 | 已完成 | app/bookmark 增加 `source_kind`；重建只替换扫描项并保留手动项和用户编辑项 |
| 插件更新重检索 | 已完成 | manifest 声明 storage/index/extractor 版本；只有索引契约变化才重建对应来源 |
| 桌面文件增量索引 | 已完成 | watcher 按变化路径 UPSERT/DELETE；启动校验复用 mtime/size 未变化记录 |
| 本地图标 | 已完成 v1 | Windows Shell 本地提取、浏览器 favicon 按数据库批量读取、30 天 TTL、独立清理入口 |
| `core.db`/`search.db` 物理拆分 | 已完成 P1-C | 旧 `snippets.db` 首次启动迁移为核心库和可重建搜索库；旧库保留为回滚参考 |
| PNG 文件化图标缓存 | 待演进 | 当前仍兼容 Base64 数据库缓存；后续迁为按 hash 的文件缓存以继续降低 DB/IPC 成本 |
| 浏览器/应用来源 watcher | 待演进 | 当前避免无条件重扫；后续可按 profile、Start Menu 和注册表快照进一步差量化 |

## 2. 改造前基线盘点

> 本节保留实施前审计结果，用于说明问题来源；当前运行行为以第 1.1、3、6、7 节为准。

### 2.1 当前事实源和持久化介质

| 数据 | 当前介质与位置 | 当前属性 | 主要实现 |
| --- | --- | --- | --- |
| 数据目录指针 | `app_data_dir/path.json` | 启动引导信息 | `json_config.rs` |
| 全局应用配置 | `<data-root>/.snippets-code/app.json` | 持久用户配置，同时混有运行时标记 | `app_config.rs`、`json_config.rs` |
| Markdown 内容 | `<workspace>/**/*.md` + YAML Frontmatter | 用户内容事实源 | `src-tauri/src/markdown` |
| 附件 | 工作区内 `assets/...` | 用户内容事实源、二进制文件 | `attachment.rs` |
| 工作区布局 | `<workspace>/.snippets-code/workspace.json` | 设备/工作区状态 | `markdown/workspace.rs` |
| Markdown 元数据缓存 | `<workspace>/.snippets-code/cache.json` | 可重建索引 | `markdown/cache_manager.rs` |
| 核心用户 SQL | `<data-root>/core.db` | 搜索历史、Git 设置、插件用户状态、手动/legacy launcher 项 | `db/init.rs`、`db/connection.rs` |
| 搜索索引 SQL | `<data-root>/search.db` | 可重建来源索引、桌面文件缓存、图标缓存、索引版本元数据 | `db/init.rs`、`db/connection.rs` |
| 插件包 | `<data-root>/packages/plugins/<plugin-id>/...` | 可重新安装的代码和资源；旧 `<data-root>/plugins/<plugin-id>` 仅作为兼容迁移来源 | `app_config.rs` |
| 通用插件 KV | 改造前为 `<data-root>/plugins/<plugin-id>/data.json` | v1 已迁移到 `<data-root>/state/plugins/<plugin-id>/data.json`，后续不得写回插件包目录 | `app_config.rs` |
| 本地 AI 配置/历史 | 改造前为 `<data-root>/.snippets-code/local-ai*.json` | v1 已迁至 `<data-root>/state/plugins/local-ai/`；服务日志迁至平台日志目录 | `plugins/local_ai.rs` |
| 图标缓存 | `search.db.icon_cache` 和 search 侧实体的 `icon` 字段 | Base64 文本形式的可重建缓存 | `icon.rs`、`db/icon_cache.rs` |
| 壁纸与录屏中间数据 | `app_cache_dir/<plugin-id>/...` | 可清理缓存/临时数据 | `wallpaper_switcher.rs`、`screen_recorder.rs` |
| 日志 | `app_log_dir` | 诊断数据，当前保留 7 天 | `app_setup.rs` |
| 前端状态 | WebView `localStorage` | 同时包含配置副本、Pinia 状态、导航临时态、诊断日志 | `src/store`、`developer-diagnostics.ts` |

当前仓库没有发现作为一等用户状态使用的 `.bin` 文件。项目中的二进制主要是附件、图片、录屏、模型、OCR/FFmpeg/llama 等插件资源或运行时缓存。它们需要统一目录和生命周期，但不适合放进 JSON 或 SQLite 文本列。

### 2.2 当前 SQLite 表的实际性质

| 表 | 所有者 | 建议分类 | 是否可直接重建 |
| --- | --- | --- | --- |
| `apps` | local-launcher | `core.db` 保存 user/legacy，`search.db` 保存 scanner | scanner 可重建 |
| `bookmarks` | local-launcher | `core.db` 保存 user/legacy，`search.db` 保存 scanner | scanner 可重建 |
| `desktop_file_cache` | desktop-files | `search.db` 派生索引 | 是 |
| `icon_cache` | 核心图标服务 | `search.db` 派生缓存 | 是 |
| `index_meta` | 索引契约 | `search.db` 索引版本元数据 | 是 |
| `search_history` | 核心搜索 | `core.db` 用户个性化状态 | 否 |
| `user_settings` | 核心/Git | `core.db` 用户配置，且与 `app.json` 有职责重叠 | 否 |
| `search_engines` | search-engines | `core.db` 插件用户配置 | 否 |
| `alarm_cards` | todo | `core.db` 插件用户内容 | 否 |

当前已通过物理拆库区分不可丢失的持久数据和可重建索引。清理命令仍必须按数据域执行，避免把“缓存清理”重新扩展为不透明的整目录删除。

### 2.3 当前检索和更新行为

#### 应用与书签

`icon::init_app_and_bookmark_icons` 在应用表和书签表都非空、且没有重置标记时不会重新扫描，只加载缺失图标。因此从当前代码看，单纯更新主应用不会必然全量重扫应用和书签；更新后只额外设置了启动延迟标记。

但以下情况会全量扫描：

- local-launcher 插件安装或覆盖更新后，`refresh_search_plugin_index_feedback` 会清空 `apps`、`bookmarks` 后重新扫描。
- local-launcher 从禁用切换为启用时也会走相同的完整反馈流程。
- 用户执行应用、书签或全部重置。
- 任一表为空时，启动逻辑会扫描对应来源。

插件更新当前无索引 schema 或 extractor 版本判断，所以即使只改前端 UI，也会重扫系统应用和全部浏览器书签。此逻辑安全但代价过高，不适合作为长期默认策略。

#### 桌面文件

desktop-files 在每次启用运行时时都会调用 `refresh_desktop_files_cache`，启动时实际执行全量目录遍历。文件监听器收到创建或修改事件后也调用全量刷新，而不是按变化路径更新。现有监听器已经收集 `changed_ids` 和 `removed_ids`，具备改为差量更新的基础。

主启动流程目前有两个位置会调用 `apply_enabled_plugin_runtime_change("desktop-files")`：Markdown 索引完成后一次、顺序初始化资源阶段一次。在两个异步初始化分支均完成的启动中，桌面目录可能被重复全量扫描。

#### Markdown

`cache.json` 仅在为空时全量重建，但进程启动时 `IndexManager::build_index` 仍会读取工作区 Markdown 并重新构造内存倒排索引。运行期间的文件 watcher 已支持增删改更新，因此可以进一步将倒排索引持久化，并在启动时做指纹校验和增量恢复。

### 2.4 当前图标链路

当前实现已经包含本地系统图标能力：

- 应用图标：通过 Windows `SHCreateItemFromParsingName` + `IShellItemImageFactory::GetImage` 获取 48×48 系统图标。
- 桌面文件：优先走同一个 Windows Shell 图标提取，失败后才回退到按扩展名显示 Emoji。
- Chromium/Firefox 书签：扫描时尝试读取浏览器本地 favicon SQLite。
- 本地 favicon 缺失：手动或特定加载流程可回退 Google、Yandex 或目标站点网络图标。

性能问题主要来自实现方式：

1. 每个书签都可能复制一次完整的浏览器 `Favicons`/`places.sqlite` 到固定临时文件，再打开数据库查询；复杂度和磁盘 I/O 很高，固定临时文件还会产生并发冲突。
2. 图标以 Base64 写入 `apps.icon`、`bookmarks.icon`、`desktop_file_cache.icon` 和 `icon_cache.data`，存在重复存储、约 33% 的 Base64 体积膨胀及 IPC/JSON 编解码成本。
3. `load_icon_cache` 启动时会逐项 Base64 解码验证。
4. 桌面文件扫描同步执行 Shell 图标提取，文本索引完成时间被图标 I/O 拖慢。
5. `extract_app_icon_with_timeout` 超时后工作线程不会被取消，连续超时可能积累后台线程。
6. `cleanup_missing_desktop_file_icons` 当前忽略传入的 `current_paths`，会遍历并删除全部 `desktop-file-icon:` 缓存键。
7. 内存 LRU 上限为 500，但持久 `icon_cache` 没有启用过期清理，数据库可持续增长。
8. 应用/书签实体内已有图标，`icon_cache` 中又可能保存同一内容，缺少单一图标引用模型。

## 3. v1 清理边界

### 3.1 `reset_software` 的实际级联

| 操作 | 删除/替换 | 明确保留 |
| --- | --- | --- |
| 重建应用 | 事务替换 `source_kind='scanner'` 的应用行 | 手动/用户编辑项、`search_history`、配置、工作区内容 |
| 重建书签 | 事务替换 `source_kind='scanner'` 的书签行 | 手动/用户编辑项、`search_history`、配置、工作区内容 |
| 重建桌面文件 | 事务替换或按 watcher 事件增量更新桌面索引 | `search_history`、配置、工作区内容 |
| 清理图标缓存 | 删除 `icon_cache`，将实体图标引用置空并后台补齐 | 来源索引文本、所有访问历史、手动项、配置和内容 |
| 清理某来源历史 | 仅删除 `app:path:*`、`bookmark:url:*`、`file:path:*` 或 `markdown:path:*` | 索引、图标、配置和内容 |
| 重置全部检索来源 | 重建 app/bookmark/desktop 扫描项 | 访问历史、手动项、插件配置、Markdown 内容 |
| 禁用或普通卸载插件 | 停止运行时；卸载只删除插件包 | 插件持久状态、插件数据库、用户配置、历史和现有索引 |

`search_history` 使用规范化路径或 URL 作为稳定键，索引重建后继续参与 frecency 排序。设置页已经将“重建检索数据”“清理使用历史”“清理图标缓存”拆为三个独立动作，并在确认文案中说明保留边界。

后续仍可补充：

- 孤立历史的保留期与垃圾回收。
- 单条结果的“清除此项使用记录”入口。
- 扫描项被用户删除后的稳定隐藏覆盖；v1 已保护手动添加和用户编辑项，但未引入独立 `launcher_overrides` 表。

### 3.2 危险通用清理已移除

原 `src-tauri/src/cache.rs` 会遍历删除整个 `app_data_dir` 和 `app_cache_dir`，其边界无法满足数据安全要求。v1 已删除该未注册模块，改用 `clear_icon_cache`、`clear_search_history` 和来源索引重建等明确命令。

任何新增清理命令都必须声明数据域，不得重新引入“删除整个应用数据目录”的模糊缓存语义。

### 3.3 已处理与剩余边界

- 已处理：扫描项和用户项分型；`core.db`/`search.db` 物理拆分；重建事务化；插件状态与插件包分离；JSON 原子写入；SQLite 一致性备份；迁移版本记录；完整数据根迁移。
- 已处理：插件覆盖更新不删除持久状态，普通卸载也默认保留状态和现有本地数据。
- 待演进：把当前 launcher 的 user/legacy 表进一步收敛为 `user_launcher_items`，并引入独立 `launcher_overrides`。
- 待演进：把 Base64 图标正文迁到按内容 hash 去重的文件缓存。

## 4. 目标数据架构

### 4.1 设计原则

1. 事实源唯一：同一数据不能在 Markdown、JSON、SQL 中各保存一份可编辑副本。
2. 可重建数据可整区删除：删除索引数据库或缓存目录后不影响用户内容和个性化状态。
3. 插件包不可拥有用户数据：插件更新只替换代码和资源。
4. 清理按数据域和生命周期执行，不使用模糊的“全部缓存”。
5. 所有持久格式有独立 schema 版本和迁移程序。
6. 所有破坏性操作可预览范围，内容数据与应用状态分开确认。
7. 搜索文本先可用，图标和预览异步补齐。

### 4.2 推荐目录

保留平台 `app_data_dir/path.json` 作为自定义数据根目录的最小引导文件。目标数据根建议为：

```text
<data-root>/
├─ manifest.json                    # 数据布局版本、实例 ID、迁移状态
├─ config/
│  └─ app.json                     # 全局应用设置，不存临时运行标记
├─ state/
│  ├─ core.db                      # 搜索历史、用户快捷项、全局持久状态
│  ├─ runtime.json                 # 可丢弃的启动/更新标记
│  ├─ vaults/<vault-id>/
│  │  └─ workspace.json            # 设备本地布局状态
│  └─ plugins/<plugin-id>/
│     ├─ data.json                 # 小型插件配置，可选
│     └─ data.db                   # 大型/关系型插件状态，可选
├─ indexes/
│  ├─ search.db                    # 应用、书签、桌面、Markdown 派生索引
│  └─ vaults/<vault-id>.db         # 可选：按工作区隔离
├─ packages/
│  └─ plugins/<plugin-id>/...      # 可重新安装的插件代码和资源
└─ backups/
   └─ ...                          # 用户明确创建的备份
```

以下目录继续使用 Tauri 的平台路径，不进入用户备份：

```text
<app-cache-dir>/
├─ icons/ab/<sha256>.png
├─ thumbnails/ab/<sha256>.webp
└─ plugins/<plugin-id>/...

<app-log-dir>/
└─ *.log
```

Markdown 工作区保持 Obsidian 风格的本地事实源：

```text
<workspace>/
├─ <category>/*.md
├─ assets/...
└─ .snippets-code/
   ├─ sync.json                    # 唯一同步配置：ID、版本和可移植设置
   ├─ workspace.json               # 本机布局和 Git 开关（忽略）
   └─ cache.json                   # 本机派生索引（忽略）
```

`cache.json` 应迁出工作区，避免 Git/云盘同步派生索引产生冲突。`workspace.json` 如果继续放在工作区，必须默认加入 `.gitignore`；更推荐按 vault ID 放到设备本地 `state/vaults`。

`sync.json` 是唯一的远端协议文件，内部按 `preferences`、`hotkeys`、`vaultSettings` 和 `desiredPlugins` 分组，并保留字段级合并时钟。完整 `app.json`、本机布局、Git 凭证和设备来源索引不得进入工作区 Git 仓库。

### 4.3 数据库边界

#### `core.db`：不可因重建索引而删除

建议包含：

- `schema_migrations`
- `search_history`
- `user_launcher_items`
- `launcher_overrides`
- `user_settings`
- 必须由核心统一提供的持久状态

`user_launcher_items` 保存手动添加的应用和书签。`launcher_overrides` 以稳定 `source_key` 保存扫描项的自定义标题、隐藏、固定、替换图标等覆盖值。系统扫描不再直接修改这些用户数据。

#### `search.db`：可以整体重建

建议包含：

- `source_items`
- `index_meta`
- `source_snapshots`
- Markdown 倒排索引或 FTS5 表
- 图标元数据引用，不保存 Base64 图片正文

核心字段示例：

```sql
CREATE TABLE source_items (
  source TEXT NOT NULL,
  source_key TEXT NOT NULL,
  title TEXT NOT NULL,
  target TEXT NOT NULL,
  metadata_json TEXT,
  icon_key TEXT,
  source_fingerprint TEXT NOT NULL,
  scan_generation INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (source, source_key)
);

CREATE TABLE index_meta (
  source TEXT PRIMARY KEY,
  storage_schema_version INTEGER NOT NULL,
  extractor_version INTEGER NOT NULL,
  fingerprint_version INTEGER NOT NULL,
  last_scan_generation INTEGER,
  last_source_cursor TEXT,
  last_success_at INTEGER,
  last_error TEXT
);
```

稳定键建议：

- 应用：规范化可执行路径、`.lnk` 身份或 UWP AUMID。
- 书签：规范化 URL；如未来要展示浏览器/配置档案维度，再增加浏览器 profile 和书签 GUID。
- 桌面文件：规范化绝对路径；Windows 上处理大小写和分隔符。
- Markdown：Frontmatter UUID，路径作为可变属性。

### 4.4 插件数据协议

插件 manifest 的 `schemaVersion` 只表示 manifest 结构，不能代替数据 schema。建议增加：

```json
{
  "storage": {
    "schemaVersion": 3,
    "indexSchemaVersion": 2,
    "extractorVersion": 5,
    "migrationEntry": "dist/migrations.js"
  }
}
```

规则：

- `<data-root>/packages/plugins/<id>` 只读、可替换。
- `<state>/plugins/<id>` 是插件持久数据，更新时保留。
- `<app-cache>/plugins/<id>` 是可删除缓存。
- 插件禁用只停止运行时，不删除持久数据。
- 插件卸载默认删除包和可重建索引/缓存，保留持久数据，并在 UI 提供“同时删除插件数据”选项。
- 同时删除插件数据时，按插件声明的数据域清理状态、索引、缓存和对应历史前缀。

## 5. 清理和级联规范

### 5.1 数据分类

| 类别 | 示例 | 默认清理行为 |
| --- | --- | --- |
| 内容 | Markdown、附件、手动快捷项、Todo | 永不由缓存清理删除 |
| 配置 | app、vault、插件设置 | 仅重置设置或删除插件数据时删除 |
| 个性化 | 使用历史、固定、隐藏、覆盖标题 | 仅清历史或用户明确重置时删除 |
| 索引 | 应用、书签、桌面、Markdown FTS | 可按来源重建 |
| 缓存 | 图标、缩略图、壁纸 | 可按类型删除并懒加载恢复 |
| 临时/日志 | 录屏片段、下载临时文件、日志 | 按会话或 TTL 自动清理 |
| 包与模型 | 插件包、OCR/FFmpeg/llama | 由安装/卸载管理，不属于普通缓存 |

### 5.2 级联矩阵

| 用户动作 | 内容 | 配置 | 历史/覆盖 | 来源索引 | 图标缓存 | 包/模型 |
| --- | --- | --- | --- | --- | --- | --- |
| 清理内存缓存 | 保留 | 保留 | 保留 | 保留 | 保留 | 保留 |
| 清理图标缓存 | 保留 | 保留 | 保留 | 保留，清空 `icon_key` 可选 | 删除 | 保留 |
| 重建应用索引 | 保留手动项 | 保留 | 保留 | 仅重建 app | 可复用，按指纹失效 | 保留 |
| 重建书签索引 | 保留手动项 | 保留 | 保留 | 仅重建 bookmark | 可复用，按指纹失效 | 保留 |
| 重建桌面索引 | 保留 | 保留 | 保留 | 仅重建 file | 可复用，按指纹失效 | 保留 |
| 清除某来源使用历史 | 保留 | 保留 | 删除对应历史前缀 | 保留 | 保留 | 保留 |
| 禁用插件 | 保留 | 保留 | 保留 | 可保留或卸载内存 | 保留 | 保留 |
| 卸载插件，保留数据 | 保留 | 保留插件持久状态 | 保留 | 保留现有索引 | 保留插件缓存 | 删除包 |
| 卸载并删除数据 | 删除该插件持久状态 | 删除该插件配置 | 删除该插件历史/覆盖 | 删除该插件索引 | 删除该插件缓存 | 删除包 |
| 恢复应用出厂设置 | 默认不碰工作区 | 删除 | 删除 | 删除 | 删除 | 可选删除 |
| 删除工作区 | 单独二次确认 | 删除 vault 状态 | 删除 vault 历史 | 删除 vault 索引 | 删除 vault 缓存 | 不相关 |

### 5.3 访问历史策略

缓存和历史必须解耦：

- 索引重建后，只要稳定 `source_key` 不变，原历史继续参与 frecency 排序。
- 稳定键算法升级时写迁移映射，不能通过清空历史解决。
- 来源项暂时消失时历史进入孤立状态，不立即删除，便于应用重装、移动后恢复或书签重新添加。
- 建议每月清理“已孤立且 180 天未使用”的低频历史；高频记录可保留一年或由用户设置。
- 提供“全部历史、应用历史、书签历史、桌面文件历史、Markdown 历史”的独立清理入口。
- 提供“清除某条结果的使用记录”。
- 当前历史保存的是结果稳定标识和使用次数，不是搜索输入内容；如未来记录查询词，需要单独隐私开关和更短 TTL。

## 6. 更新与差量检索

### 6.1 触发决策

| 变化 | 应执行 |
| --- | --- |
| 主应用 UI/业务代码更新，索引协议未变 | 不扫描 |
| 插件前端或设置页更新，索引协议未变 | 不扫描 |
| 排序算法变化 | 重新查询或重建排序结构，不读取外部来源 |
| SQL schema 可迁移 | 事务迁移，不全量扫描 |
| 新字段可从现有索引行计算 | 后台回填 |
| extractor 规则兼容变化 | 对受影响来源做差量扫描 |
| extractor 规则不兼容且无法从旧行迁移 | 仅对该来源全量扫描 |
| 图标提取器版本变化 | 仅失效图标，不重建文本索引 |
| 索引缺失、校验失败或上次扫描未提交 | 仅重建损坏来源 |
| 用户点击“重建索引” | 明确显示范围后全量扫描 |

主应用版本、插件版本和索引版本必须分开记录，不能用 `plugin.version changed` 代替 `indexSchemaVersion changed`。

### 6.2 安全的扫描提交

v1 已不再使用“先清表、后逐条写入”的危险流程。应用、书签和桌面文件的全量结果通过单个事务替换，失败时回滚并继续使用旧索引；手动/用户编辑项不参与删除。`index_meta` 记录每个来源的 storage schema、extractor 版本和最后成功时间。

后续数据量继续增长时，可在事务替换基础上引入 generation 标记：

1. 为来源创建新的 `scan_generation`。
2. 在事务中 UPSERT 本次看到的稳定键。
3. 复用指纹未变项的图标和用户覆盖。
4. 扫描成功后删除该来源中旧 generation 且非用户项的记录。
5. 更新 `index_meta.last_success_at` 后提交。
6. 失败则回滚，继续使用旧索引。

### 6.3 各来源增量方案

#### 本地应用

- 监听用户/公共 Start Menu 和 Desktop 快捷方式目录。
- 对卸载注册表使用变更通知或低频校验。
- UWP 使用 package family/AUMID 和 package version 做指纹。
- 每次启动只检查来源目录和注册表快照是否变化；变化时扫描对应来源，不扫描所有来源。
- 保留每日或每周低优先级一致性校验，修复漏事件。

#### 浏览器书签

- 为每个浏览器 profile 记录 Bookmarks 文件的路径、mtime、size 和可选快速 hash。
- 只解析变化的 profile 文件。
- Chromium 优先使用书签 GUID；没有 GUID 时使用规范化 URL。
- Firefox 记录 `places.sqlite` 的 mtime 和 profile 身份。
- 一个 profile 一次性复制/打开 favicon 数据库，批量查询所有 URL；禁止每个 URL 复制一次数据库。
- 扫描阶段只落文本和本地图标命中，网络缺失项进入独立低优先级队列。

#### 桌面文件

- 复用已有 `notify` watcher。
- Create/Modify：v1 已只读取变化路径并 UPSERT。
- Remove：v1 已按稳定键删除，并清理该项图标引用。
- Rename：在同一事务内更新稳定键和历史映射。
- 启动时加载持久索引并复用 mtime/size 未变化记录；同一进程只初始化一次，避免重复启动扫描。

#### Markdown

- Frontmatter UUID 为事实标识。
- 将 `cache.json` 的时间戳/大小/hash 迁入 vault 索引数据库。
- 持久化倒排/FTS 索引；启动时只读取新增、删除或指纹变化文件。
- watcher 继续承担运行期增量更新。

## 7. 本地图标方案

### 7.1 产品策略

搜索结果的可用性不能等待图标：

```text
搜索文本入库
    ↓
立即返回结果 + 类型占位图
    ↓
可见结果进入高优先级图标队列
    ↓
内存缓存 → 磁盘缓存 → 本地系统/浏览器提取
    ↓
必要且允许时网络回退
    ↓
局部更新对应结果
```

图标服务应独立于来源扫描器，统一返回 `icon_key`，而不是让每个来源把 Base64 存进自己的记录。

### 7.2 Windows 应用与文件

项目现有 `IShellItemImageFactory` 方案可以保留并增强：

1. 普通文件列表优先调用带 `SIIGBF_INCACHEONLY` 的 `IShellItemImageFactory::GetImage`，快速命中 Windows 缓存。
2. 未命中项放入后台 STA/COM worker 提取，不在扫描线程或 UI 线程执行。
3. 通用扩展名图标使用 `SHGetFileInfo(... SHGFI_USEFILEATTRIBUTES | SHGFI_SYSICONINDEX ...)`，按 ProgID/扩展名复用，避免每个 `.docx`、`.pdf` 都提取一次。
4. `.exe`、`.lnk`、自定义文件图标和 UWP AUMID 使用 `IShellItemImageFactory` 获取实例图标。
5. 搜索列表使用 32/48/64px PNG；大缩略图仅用于预览，不与图标索引混在一起。
6. worker 初始化和释放 COM，限制并发 2–4；取消过期队列任务，不以“每个图标一个不可取消线程”实现超时。

图标指纹示例：

- EXE/文件：规范路径 + mtime + size + extractorVersion + scale。
- LNK：快捷方式 mtime + 目标路径 + icon location。
- UWP：AUMID + package version + scale。
- 通用文件类型：扩展名 + ProgID + icon location + scale。

### 7.3 浏览器书签

优先级：

1. 本项目磁盘图标缓存。
2. 当前 profile 的本地 favicon 数据库（v1 已按 profile 快照一次打开、批量查询 URL）。
3. 同域名其他本地浏览器 profile 的 favicon。
4. 产品内置默认书签图标。
5. 用户允许时，对可见且仍缺图标的条目进行网络回退。

网络回退应：

- 默认不阻塞扫描和搜索。
- 按 origin/domain 合并请求。
- 设置并发、超时、响应体上限和 24 小时失败负缓存。
- 记录来源与获取时间。
- 提供“允许联网补全书签图标”的隐私开关。
- 不把完整浏览历史或全部书签域名一次性发送给第三方 favicon 服务。

### 7.4 存储与展示

建议把 PNG 二进制写入：

```text
<app-cache-dir>/icons/<hash-prefix>/<sha256>.png
```

SQLite 只保存：

```text
icon_key, relative_path, mime, width, height, byte_size,
source_kind, source_fingerprint, extractor_version,
created_at, last_accessed_at, failed_until
```

前端可复用当前已经启用的 Tauri asset protocol 和 `convertFileSrc` 显示本地文件，不需要将二进制通过 IPC 转成 Base64。内存 LRU 只缓存 `icon_key → asset URL` 和小量状态。

清理策略：

- 容量上限 + LRU，例如按总字节而不是固定条数。
- 未被任何来源记录引用且 30 天未访问的文件可删除。
- “清理图标缓存”删除文件和元数据，但不删除来源索引、用户覆盖和访问历史。
- 图标提取失败使用稳定类型图标，不反复请求。

### 7.5 与成熟产品的可验证对照

- Listary 官方索引文档将实时文件变化监控和自动刷新作为默认路径，“Rebuild Index”用于少数异常恢复场景；其更新日志也明确在图标加载失败时展示默认图标。这支持“增量索引 + 占位图 + 异常时全量重建”的产品模式。
- Fluent Search 官方文档允许在 Fluent 自身索引、Windows Search 和 Everything 之间选择，并使用 Windows 原生 preview handlers 做文件预览。这支持“索引器可替换、系统能力复用、索引与预览解耦”的模式。
- 两者公开文档没有披露完整图标提取内部实现，因此不能断言其具体调用了哪个 Win32 API。本项目的实现选择应以 Microsoft 官方 Shell API 约束和自身基准测试为依据，而不是反向猜测。

参考：

- [Obsidian: How Obsidian stores data](https://obsidian.md/help/data-storage)
- [Listary: Index](https://help.listary.com/options-index)
- [Listary: Changelog](https://help.listary.com/changelog)
- [Fluent Search: Files](https://fluentsearch.net/docs/Search%20apps/Files)
- [Fluent Search: Result preview](https://fluentsearch.net/docs/Search/Result%20preview)
- [Microsoft: IShellItemImageFactory::GetImage](https://learn.microsoft.com/en-us/windows/win32/api/shobjidl_core/nf-shobjidl_core-ishellitemimagefactory-getimage)
- [Microsoft: SHGetFileInfo](https://learn.microsoft.com/en-us/windows/win32/api/shellapi/nf-shellapi-shgetfileinfoa)
- [Microsoft: SHGetImageList](https://learn.microsoft.com/en-us/windows/win32/api/shellapi/nf-shellapi-shgetimagelist)

## 8. 迁移计划

### 阶段 0：先消除数据丢失风险（已完成）

- [x] 删除旧危险 `clear_cache`，提供分域图标/历史/索引操作。
- [x] 修正文案，使重置范围与真实级联一致。
- [x] 插件 `data.json` 迁出插件包目录，首次访问原子迁移旧文件。
- [x] 数据库备份改用 SQLite Backup API。
- [x] JSON 保存改为同目录临时文件、flush/sync、原子 rename。
- [x] 修复桌面图标清理忽略 `current_paths` 的问题。

### 阶段 1：建立数据契约（核心已完成）

- [x] 增加 `manifest.json`、稳定实例 ID 和数据布局版本。
- [x] SQLite 增加 `schema_migrations`、`index_meta` 和 `PRAGMA user_version`。
- [x] 官方检索插件 manifest 增加 storage/index/extractor 版本。
- [x] 插件更新按索引契约决定是否重建，普通版本变化不再触发扫描。
- [ ] 继续收敛所有历史模块自行拼接 `.snippets-code` 的路径。
- [ ] 将以下逻辑数据域提升为统一 `DataScope` 类型：
  - `content`
  - `settings`
  - `personalization`
  - `index`
  - `icon-cache`
  - `plugin-cache`
  - `temporary`
  - `logs`
  - `packages`

### 阶段 2：拆分事实数据和索引（部分完成）

- [x] 新建 `core.db` 和 `search.db`。
- [x] app/bookmark 使用稳定 content 键关联历史，并增加 `source_kind` 区分 scanner/user。
- [x] 重新扫描系统来源并做匹配：
  - 能匹配扫描来源的旧行迁入索引。
  - 无法匹配的旧行保守留在 `core.db` 的 user/legacy launcher 行，避免丢失用户手动数据。
- [x] 用户手动添加和编辑项在重建后保留。
- [ ] 用户隐藏/标题覆盖进一步迁为独立 `launcher_overrides`。
- [ ] 导出 Base64 图标为去重 PNG 文件，实体表改存 `icon_key`。
- [ ] 将 Markdown `cache.json` 迁入工作区索引；迁移成功后保留一次可回滚备份。

### 阶段 3：差量索引（部分完成）

- [x] desktop watcher 改成变化集 UPSERT/DELETE。
- [x] 浏览器 favicon 按 profile 数据库批量读取，批量扫描不走网络。
- [ ] 浏览器书签文本按 profile 指纹差量解析。
- [ ] 应用按来源快照和目录/注册表变化更新。
- [ ] Markdown 使用持久 FTS/倒排索引启动。
- [x] 插件更新根据 index/extractor 契约决定是否 source rescan。

### 阶段 4：数据管理 UI

新增“设置 → 数据与存储”：

- 显示 data root、workspace、cache、log、plugin packages 的真实路径。
- 按数据域显示条数和字节数。
- 分别提供清理图标、壁纸、临时录屏、日志、各来源索引和各来源历史。
- 每个动作显示“会删除”和“不会删除”。
- 提供验证索引、重建单一来源、导出诊断清单。
- 恢复出厂设置与删除工作区内容必须是两个独立入口。

## 9. 建议命令边界

不要继续扩展 `reset_software(reset_type: String)` 字符串分支。建议后端提供类型化命令：

```text
inspect_storage()
clear_cache(scope, plugin_id?)
clear_history(source?)
rebuild_index(source, reason)
verify_index(source?)
uninstall_plugin(plugin_id, delete_user_data)
factory_reset(delete_packages, delete_logs)
```

所有命令返回统一报告：

```json
{
  "operationId": "...",
  "scope": "icon-cache",
  "deletedRecords": 123,
  "deletedFiles": 117,
  "freedBytes": 8452331,
  "preserved": ["search-history", "launcher-overrides", "workspace-content"],
  "warnings": []
}
```

## 10. 验收标准

以下是完整目标验收表。v1/P1-C 已覆盖清理边界、事务重建、更新契约、本地离线图标、数据安全和数据库物理拆分；“图标数据库不保存 Base64 正文”和来源 watcher 属于后续剩余项。

### 清理

- 清理应用、书签、桌面或图标缓存前后，对应 `search_history` 条数和使用次数不变。
- 清除某来源历史只删除该来源稳定键，不改来源索引和图标。
- 任何名为“缓存清理”的操作都不能删除 `path.json`、`core.db`、插件持久数据或工作区内容。
- 手动添加的应用/书签和扫描项覆盖值在重建后仍存在。

### 更新与检索

- 主应用更新且索引协议未变时，不产生 full scan job。
- 插件仅 UI 更新时，不产生 full scan job。
- schema 可迁移时只执行 migration。
- 单个桌面文件变化只更新单条记录。
- 单个浏览器 profile 变化只解析该 profile。
- 全量扫描失败时旧索引仍可搜索。

### 图标

- 文本结果先展示，图标 I/O 不阻塞索引提交和首屏搜索。
- 应用和文件图标在断网时可正常显示。
- 书签断网时优先显示浏览器本地 favicon 或默认图标。
- 图标数据库不保存 Base64 正文。
- 清图标缓存后按可见项优先懒加载，不触发来源全量扫描。

### 数据安全

- 所有 SQLite 数据库有可验证迁移版本。
- WAL 模式备份可完整恢复。
- JSON 写入中断不会破坏上一个有效版本。
- 插件覆盖更新不会删除其持久数据。
- 数据目录迁移覆盖配置、状态、索引、插件数据和包，并能在提交前回滚。

## 11. 实施优先级

| 优先级 | 工作项 | 状态 |
| --- | --- | --- |
| P0 | 隔离插件包与插件数据 | 已完成 |
| P0 | 区分扫描项、手动项和用户编辑项 | 已完成；独立覆盖表待演进 |
| P0 | 替换危险 `clear_cache`、修复 WAL 备份 | 已完成 |
| P1 | schema migration + `index_meta` | 已完成 |
| P1 | `core.db`/`search.db` 物理拆分 | 已完成 |
| P1 | 浏览器 favicon 批量读取 | 已完成 |
| P1 | 图标文件化并与文本索引解耦 | 待演进 |
| P1 | desktop watcher 单项更新 | 已完成 |
| P2 | 应用/书签来源 watcher 与周期校验 | 待演进 |
| P2 | Markdown 持久 FTS/倒排索引 | 待演进 |
| P2 | 数据管理 UI 和容量统计 | 已完成清理入口；容量统计待演进 |

## 12. 源码核对点

- 数据根、`path.json`、`app.json` 和 workspace root：[json_config.rs](../src-tauri/src/json_config.rs)
- 应用配置、插件包更新、插件 `data.json` 和插件运行时刷新：[app_config.rs](../src-tauri/src/app_config.rs)
- SQLite 路径、WAL 参数、备份恢复和数据目录迁移：[db/connection.rs](../src-tauri/src/db/connection.rs)
- 核心/插件表创建与卸载清理：[db/init.rs](../src-tauri/src/db/init.rs)
- 应用、书签、稳定历史键 JOIN 和整表清理：[db/entity.rs](../src-tauri/src/db/entity.rs)
- 搜索历史写入及按来源清理：[db/search_history.rs](../src-tauri/src/db/search_history.rs)
- 设置页索引重置级联：[config.rs](../src-tauri/src/config.rs)
- Windows Shell 图标、Base64 缓存和书签网络回退：[icon.rs](../src-tauri/src/icon.rs)
- 浏览器书签与本地 favicon SQLite：[bookmarks.rs](../src-tauri/src/bookmarks.rs)
- 桌面文件事务校验、增量索引和图标缓存：[plugins/desktop_files.rs](../src-tauri/src/plugins/desktop_files.rs)
- 桌面文件 watcher：[desktop_watcher.rs](../src-tauri/src/desktop_watcher.rs)
- Markdown 文件元数据缓存：[markdown/cache_manager.rs](../src-tauri/src/markdown/cache_manager.rs)
- 跨设备同步白名单、配置投影和合并协议：[sync_data.rs](../src-tauri/src/sync_data.rs)
