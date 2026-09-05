# Plugin System Refactor

This document describes the built-in plugin architecture refactor.

## Goals

- Keep the core app focused on workspace, Markdown storage, editors, base search, settings, and window lifecycle.
- Move personalized tools behind explicit feature boundaries.
- Preserve current behavior by enabling all built-in plugins by default.
- Keep heavy resources such as RapidOCR and offline translation models outside the core installer and load them on demand.

## Official Feature Plugins

Official feature plugins are distributed as installable packages. The core app
keeps the registry, marketplace, loader, permissions, and bridge protocol.

| Plugin | Scope |
| --- | --- |
| `translation` | Translate window, selection translation, screenshot translation, offline model settings |
| `screenshot` | Screenshot, annotation, OCR entry points, pin windows |
| `todo` | Reminder cards, alarm service, notification windows |
| `system-theme` | Auto dark mode, theme schedule, system theme hotkey |
| `local-launcher` | Local apps and bookmarks management/search |
| `desktop-files` | Desktop file index, watcher, and search results |
| `search-engines` | Custom search engines and web search shortcuts |
| `screen-recorder` | Custom area screen recording and MP4/GIF export |
| `git-sync` | Git settings, status, auto sync, conflict handling |
| `attachments` | Note attachment settings and cleanup tools |

## Boundary Contract

The product boundary is intentionally split into a small core shell and optional
official feature plugins.

Core shell owns:

- workspace selection, Markdown storage, file watching, attachment persistence,
  and frontmatter metadata
- the snippet and note editors, including Markdown conversion, wikilinks,
  backlinks, outline, search inside editor, and snippet copy formats
- base search over snippets and notes, plus the plugin search-provider registry
- settings navigation, plugin marketplace UI, plugin state persistence, hotkey
  registration, window lifecycle, and Tauri permission/CSP defaults
- the plugin bridge: manifest validation, install/update/uninstall, frontend
  runtime loading, permission-gated `invoke`, native-host backend dispatch, and
  resource path lookup

Official feature plugins own:

- feature pages, settings tabs, route records, titlebar actions, optional
  hotkeys, search sources, and runtime cleanup for their own feature
- feature-specific state machines such as Git conflict dialogs, auto sync
  lifecycle, screenshot capture flow, translation runtime state, reminder
  services, and theme scheduling
- user-facing copy and resource hints for installable feature packages

Resource-only plugins own large optional assets:

- `screenshot-rapidocr` provides RapidOCR runtime/model files for screenshot OCR
- `screen-recorder-ffmpeg` provides FFmpeg for MP4/GIF screen recording export
- `translation-offline-runtime` provides the Transformers.js runtime used by
  offline translation

Compatibility Rust modules can remain in the main binary while a feature is
being externalized, but new feature behavior should enter through the plugin
adapter modules under `src-tauri/src/plugins/*`. Once an official native-host
package reaches parity, the corresponding fallback implementation can be
removed from the main binary without changing the frontend plugin contract.

## Frontend

- Registry: `src/plugins/registry.ts`
- Package protocol: `src/plugins/protocol.ts`
- Package loader: `src/plugins/loader.ts`
- Settings panels: `src/plugins/settings.ts`
- Types: `src/plugins/types.ts`
- Routes: `src/plugins/routes.ts`
- Store: `src/store/plugins.ts`
- Settings UI: `src/components/SettingsContent/components/Plugins/index.vue`

The router checks `route.meta.pluginId` and redirects disabled plugin routes to the plugin settings page.

Search sources are gated in `src/hooks/useSearch.ts`.

Each built-in plugin now owns a colocated manifest. Plugins with pages also own their route records and plugin-owned page entry points, while plugin-owned settings panels are registered through `src/plugins/settings.ts`:

```text
src/plugins/<plugin-id>/
  manifest.ts
  routes.ts
  pages/
  settings/
  index.ts
```

The central registry is now a thin aggregation layer. This keeps plugin metadata, routes, hotkeys, settings tabs, and search sources under the same feature boundary before moving heavier view and command code.

## Local Plugin Package Protocol

The second stage introduces a package manifest protocol. Built-in plugins are normalized through the same manifest shape that local plugin packages will use later. The runtime registry now consumes `RegisteredPlugin` records produced by `loadPluginRegistry()` instead of directly consuming TypeScript manifest objects.

Current package manifest shape:

```json
{
  "schemaVersion": 1,
  "id": "example-plugin",
  "version": "1.0.0",
  "kind": "local",
  "name": {
    "i18nKey": "plugins.example.name",
    "fallback": "Example Plugin"
  },
  "description": {
    "i18nKey": "plugins.example.description",
    "fallback": "Adds an example feature."
  },
  "category": "automation",
  "enabledByDefault": false,
  "capabilities": {
    "routeNames": ["Example"],
    "settingsTabs": ["example"],
    "hotkeys": ["example_hotkey"],
    "searchSources": ["example-source"],
    "aiProviders": ["example-ai"],
    "aiContextProviders": ["example-ai-context"],
    "titlebarActions": [],
    "trayItems": [],
    "windows": []
  },
  "resources": {
    "hintKey": "plugins.example.resourceHint",
    "bundled": false,
    "sizeBytes": 1048576
  },
  "entry": {
    "frontend": "dist/frontend.js",
    "backend": "dist/backend.exe",
    "backendKind": "native-host"
  },
  "storage": {
    "schemaVersion": 1,
    "indexSchemaVersion": 1,
    "extractorVersion": 1
  },
  "permissions": ["network:https://api.example.com", "workspace:read", "backend:*"],
  "dependencies": ["example-runtime-resource"],
  "compatibleAppVersion": ">=1.5.6"
}
```

`storage` is optional for plugins that do not own persistent data or search
indexes. When it is present, `schemaVersion`, `indexSchemaVersion`, and
`extractorVersion` must all be non-negative integers. Invalid storage contracts
are rejected during manifest normalization and package installation.

Default local package directory:

```text
<data-root>/packages/plugins/<plugin-id>/
```

Custom install roots continue to use `<custom-root>/plugins/<plugin-id>` so
existing user-selected package roots remain compatible.

Package contents:

```text
plugin-id/
  plugin.json
  dist/
    frontend.js
    backend.wasm
  resources/
    optional-resource/
  assets/
```

The first loader implementation validates manifest shape and deduplicates plugins by id. The backend now scans `<data-root>/packages/plugins`, reads each `plugin.json`, and passes `{ manifest, packagePath }` records into the frontend registry loader.

Local package installation currently accepts either an unpacked directory that contains `plugin.json` or a `.zip` package whose root, or single top-level directory, contains `plugin.json`. The installer copies it into the package directory under its manifest `id`; uninstall removes that package directory and clears the saved enabled state. It can execute local frontend entries for enabled plugins, and native-host backend entries run only through the permission-gated `context.api.invokeBackend` bridge.

Frontend local plugin entries now use `entry.frontend`. When an enabled local plugin is initialized, the runtime loads that module from the installed package directory and calls `activate(context)`.

The activation context exposes stable Snippets Code capability namespaces:

- `context.workspace.getRoot`, `context.workspace.read`, and
  `context.workspace.write`
- `context.storage.get`, `context.storage.set`, and
  `context.storage.delete`
- `context.search.registerProvider`
- `context.network.fetch`
- `context.clipboard.read` and `context.clipboard.write`
- `context.notification.show`
- `context.window.create` and `context.window.registerShortcut`

The older root-level registration methods remain available as a compatibility
layer for existing packages:

- `registerRoute`
- `registerSettingsTab`
- `registerSearchProvider`
- `registerAiProvider`
- `registerAiContextProvider`
- `registerTitlebarAction`
- `registerWindowShortcut`

It also exposes `context.ui.h` and `context.ui.defineComponent` so simple local plugins can register Vue components without bundling their own copy of Vue.

Search providers registered with `registerSearchProvider` run in the `results`
phase by default. Providers can opt into `phase: 'preflight'` for short-circuit
results that should run after URL detection but before indexed search, or
`phase: 'append'` for fallback items that should appear after ranked results.
Preflight providers may return a `SearchSourceResult` with `exclusive: true` and
an `intent` such as `engine-shortcut` to stop the rest of Universal Search.

AI providers registered with `registerAiProvider` may implement optional `streamChat` and `cancelChatStream` methods. Application code should call `streamChatWithAi` and `cancelAiChatStream` rather than binding directly to a provider-specific transport; non-streaming providers fall back to ordinary `chat`.

AI context providers registered with `registerAiContextProvider` are collected by application services such as `chatWithAi` and `translateWithAi` only when the caller passes `contextCollection`. The built-in collection input supports explicit selection text, selection metadata, current workspace content metadata, and workspace search queries; plugin providers receive the same normalized collection request.

Each local plugin has an isolated JSON data file exposed through `context.storage.get`, `context.storage.set`, and `context.storage.delete`. Persistent state is stored under `<data-root>/state/plugins/<plugin-id>/data.json`, not inside the plugin package directory. Updating, disabling, or ordinary uninstalling a plugin preserves this state; only the explicit "uninstall and delete data" path removes plugin state, index data, and cache.

Plugin packages and marketplace entries may declare `dependencies`. The plugin
settings page installs missing dependencies first. This is used by
`screenshot`: the feature plugin stays small, while the required RapidOCR
runtime and model files live in `screenshot-rapidocr` and are installed
automatically with the screenshot/OCR plugin.

Marketplace entries with `packageUrl` also declare `sizeBytes` and, for stable
published packages, `sha256`. The settings page shows the package size before install and listens for
`plugin-install-progress` events while downloading, extracting, and installing
remote packages. Installer, registry refresh, enable/disable, uninstall, and
hotkey activation paths all emit plugin-prefixed logs so failed installs or
silent shortcut issues can be traced from the app log.

Remote package installation validates SHA-256 when the marketplace entry
provides `sha256`. Mutable development branch archives that require
`packageSubdir` are allowed without `sha256` only for local development
examples; published official packages must pin immutable release artifacts or
tags and provide integrity metadata.

Capability APIs are permission-gated when they cross data or system boundaries.
For example, workspace calls require `workspace:read`, `workspace:write`,
`workspace:*`, `capability:workspace`, or `capability:*`; network calls require
`network`, `network:<origin>`, `network:<url-prefix>`, `network:*`,
`capability:network`, or `capability:*`.

`context.api.invoke` is the legacy escape hatch and remains permission-gated. A local plugin must declare `command:<tauri-command-name>` or `command:*` in `permissions` before it can call a Tauri command through the provided context API.

`context.api.invokeBackend(command, payload)` calls the plugin's own native
host backend declared by `entry.backend`. A local plugin must declare
`backend:<command>` or `backend:*` before this call is allowed. This is the
boundary for official plugin backends that need independent fixes: the main app
ships only the loader, permission check, and protocol bridge; the plugin package
ships the executable backend.

Third-party plugins must not receive `command:*` or `backend:*` by default.
Existing official packages that still declare wildcard command permissions are
treated as compatibility debt and should be replaced by explicit command lists
as their backend and frontend boundaries stabilize.

Native host backend protocol:

- `entry.backendKind` is optional and defaults to `native-host`.
- The backend path must be a safe relative path inside the installed package.
- The host executable is started with the plugin package directory as its
  working directory.
- The app writes one JSON request to stdin:

```json
{
  "schemaVersion": 1,
  "pluginId": "screenshot",
  "command": "capture-screen",
  "payload": {
    "monitorId": 1
  }
}
```

- The backend writes one JSON response to stdout:

```json
{
  "ok": true,
  "result": {
    "imagePath": "..."
  }
}
```

Failure responses use `{ "ok": false, "error": "message" }`. Non-zero process
exit status is treated as a backend failure and stderr is surfaced to the app.

`backendKind: "wasm"` and `backendKind: "script"` are reserved in the manifest
schema, but the current runtime executes only `native-host`. That keeps the
first backend split practical for screenshot/OCR, Git, and local search, while
leaving room for sandboxed WASM or script workers later.

Runtime-registered routes are added to Vue Router after the plugin registry initializes. Runtime settings tabs, titlebar actions, search providers, and window shortcuts are merged with the built-in registries and still respect the plugin enabled state.

See `plugin-registry/examples/hello-local-plugin` for a minimal installable package.

Resource-only local plugins are supported by omitting `entry`. The first
resource-only packages cover the RapidOCR runtime required by screenshot OCR
and screenshot translation, the FFmpeg executable required by custom screen
recording export, plus the offline translation runtime; see
`plugin-registry/examples/screenshot-rapidocr-resource`,
`plugin-registry/examples/screen-recorder-ffmpeg-resource`, and
`plugin-registry/examples/translation-offline-runtime`.

## Hotkeys

Core app hotkeys remain outside plugins:

- `search`
- `config`

Optional hotkeys are declared by plugin manifests:

- `translation`: `translate`, `selection_translate`
- `screenshot`: `screenshot`
- `system-theme`: `dark_mode`

The shortcut settings page uses the active plugin registry to decide whether a
hotkey should be visible. The Rust hotkey registration path performs the same
plugin-state check before registering optional hotkeys, and installing,
enabling, disabling, or uninstalling a plugin refreshes the affected global
shortcuts immediately.

## Backend

Plugin states are stored in `.snippets-code/app.json` under `plugins`.

Commands:

- `get_plugin_states`
- `get_installed_plugin_manifests`
- `install_local_plugin_package`
- `uninstall_local_plugin_package`
- `get_local_plugin_data`
- `set_local_plugin_data`
- `delete_local_plugin_data`
- `get_local_plugin_resource_path`
- `invoke_plugin_backend`
- `set_plugin_enabled`
- `get_rapidocr_resource_status`

Startup now checks plugin states before starting optional services such as reminders, Auto Dark Mode scheduling, desktop file watching, and desktop file cache refresh.

Runtime plugin toggles also apply side effects immediately:

- Tray menu is rebuilt after a plugin is enabled or disabled.
- Tray actions re-check plugin state before executing optional features.
- Frontend windows listen for `plugin-state-changed` and update their local plugin store.
- `system-theme` stops or starts the dark-mode scheduler.
- `todo` stops or starts the reminder service.
- `desktop-files` stops or starts the desktop watcher and refreshes its cache when enabled.
- `git-sync` stops or starts auto sync according to its saved Git settings.
- `local-launcher` refreshes app and bookmark icons when re-enabled.

Optional Tauri command entry points must also check plugin state. The first guarded set covers translation, reminders, search engines, desktop files, and local launcher open/search actions. This protects stale windows and direct `invoke` calls after a plugin has been disabled.

Rust command registration now goes through plugin adapter modules under `src-tauri/src/plugins/*`. The adapters preserve existing frontend `invoke` command names while delegating to the current implementation modules. This gives each built-in plugin an explicit backend command boundary before moving the implementation code itself.

The first implementation moves are also in place: `translation`, `search-engines`, `desktop-files`, `todo`, `system-theme`, local launcher app/bookmark management/search, screenshot command adapters, and shared URL opening now live under the Rust plugin modules instead of the older broad implementation modules.

Screenshot adapters now try the installed `screenshot` plugin native host
backend first, using the existing Tauri command name as the backend command
name. If the installed plugin package has no backend entry, the adapter falls
back to the bundled implementation. This keeps current installations working
while allowing a future screenshot package to override capture, OCR, clipboard,
save, and pin-window backend behavior through a plugin-only release.

## Plugin Resources

RapidOCR is no longer listed in `tauri.conf.json` bundle resources, so the core
installer does not carry the OCR runtime and model files. The OCR backend now
searches application-data plugin resource roots first:

```text
<data-root>/packages/plugins/screenshot/resources/rapidocr
<data-root>/packages/plugins/screenshot-rapidocr/resources/rapidocr
```

Development fallback paths such as `src-tauri/resources/rapidocr` still work for
local testing, and `SNIPPETS_RAPIDOCR_PATH` / `RAPIDOCR_PATH` can override the
executable location.

The plugin settings page installs `screenshot-rapidocr` as a required dependency
of `screenshot`, then calls `get_rapidocr_resource_status` and shows whether the
resource is installed.

For development and release packaging, run `pnpm rapidocr:install` to download
the local RapidOCR runtime, then `pnpm rapidocr:package` to generate an
installable `dist-plugin-packages/screenshot-rapidocr` resource package. To
publish that generated resource package to the RapidOCR plugin repository and
create the matching Git tag, run `pnpm rapidocr:release`.

Custom screen recording keeps FFmpeg outside the core installer as
`screen-recorder-ffmpeg`. The recorder backend searches plugin resources,
bundled resource roots, development resource folders, and finally `PATH`:

```text
<data-root>/packages/plugins/screen-recorder/resources/ffmpeg/ffmpeg.exe
<data-root>/packages/plugins/screen-recorder-ffmpeg/resources/ffmpeg/ffmpeg.exe
src-tauri/resources/ffmpeg/ffmpeg.exe
PATH:ffmpeg
```

For development and release packaging, run `pnpm ffmpeg:install` to download
the local Windows FFmpeg runtime, then run `pnpm ffmpeg:package` to generate
`dist-plugin-packages/screen-recorder-ffmpeg`. To publish that generated
resource package and create the matching Git tag, run `pnpm ffmpeg:release`.
The installer uses the shared BtbN GPL Windows build and packages its required
DLLs with `ffmpeg.exe`; the packaging step rejects oversized static binaries
that would exceed GitHub's 100 MB per-file limit.

Offline translation no longer statically imports `@huggingface/transformers`.
Instead, it loads the ESM runtime from an installed local plugin resource:

```text
<data-root>/packages/plugins/translation-offline-runtime/resources/transformers/transformers.min.js
<data-root>/packages/plugins/translation/resources/transformers/transformers.min.js
```

If the runtime package is not installed, offline translation fails with an
installation prompt instead of pulling the runtime into the core app bundle.

## GitHub Marketplace

The app can now read a remote plugin marketplace manifest and install packages
directly from GitHub-hosted archives. The current official manifest lives at:

```text
plugin-registry/marketplace/marketplace.json
```

Official package manifests live under:

```text
plugin-registry/packages/<plugin-id>/plugin.json
```

Published official packages live in one GitHub repository per plugin, such as:

```text
https://github.com/GigaPuddings/snippets-code-plugin-screenshot
https://github.com/GigaPuddings/snippets-code-plugin-translation
https://github.com/GigaPuddings/snippets-code-plugin-quick-tools
https://github.com/GigaPuddings/snippets-code-plugin-git-sync
https://github.com/GigaPuddings/snippets-code-plugin-screenshot-rapidocr
https://github.com/GigaPuddings/snippets-code-plugin-translation-offline-runtime
```

Marketplace entries use schema version `1`:

```json
{
  "schemaVersion": 1,
  "plugins": [
    {
      "id": "screenshot",
      "version": "1.5.6",
      "category": "capture",
      "packageUrl": "https://github.com/GigaPuddings/snippets-code-plugin-screenshot/archive/refs/tags/v1.5.6.zip",
      "sizeBytes": 694267,
      "sha256": "64 hex characters",
      "dependencies": ["screenshot-rapidocr"],
      "status": "included"
    }
  ]
}
```

`packageUrl` must be HTTPS, except for local development URLs under
`http://localhost`, `http://127.0.0.1`, or `http://[::1]`. A per-plugin
repository archive should contain a single root directory with `plugin.json`.
`packageSubdir` is still supported for development and multi-package archives.
The installer downloads the archive, verifies SHA-256 when declared, extracts it
to a temporary directory, locates `plugin.json`, and installs that package into
`<data-root>/packages/plugins/<plugin-id>`.

The plugin settings page fetches this manifest through
`fetch_plugin_marketplace`, supports keyword search across plugin metadata, and
installs available entries through `install_plugin_package_from_url`.

Application and plugin releases are separate:

```bash
pnpm tag
pnpm plugins:tag
```

`pnpm tag` updates and tags only the desktop application. It does not change
plugin manifests, plugin repositories, or marketplace versions.

`pnpm plugins:tag` publishes one or more selected plugins independently: it
builds each matching runtime, updates each manifest and marketplace entry,
synchronizes the matching `snippets-code-plugin-*` repositories, writes their
Obsidian-style `versions.json` files, creates the matching `<version>` tags, and
verifies the marketplace. Use `pnpm plugins:tag -- --check-updates` to list
plugins with related local changes before publishing.

The app package is marked `private`, so there is no npm registry publish or npm
dist-tag update in this workflow. The synchronized release tag is GitHub-based:
the app repository keeps the `v<version>` tag convention, while plugin
repositories use `<version>` so the tag matches `plugin.json.version`.

For the step-by-step checklist used when adding or releasing an official
external plugin, see `docs/OFFICIAL_PLUGIN_DEVELOPMENT.md`.

The previously built-in feature modules are listed in the marketplace as
`included`, with independent GitHub package repositories prepared for external
mode installation:

- screenshot / OCR / pin windows
- translation / offline translation runtime
- reminders
- Auto Dark Mode
- apps / bookmarks / desktop file search / web search engines
- Git sync

Markdown, editor, and workspace behavior remain the application core and are not
marketplace candidates.

### Official Plugin Mode

Official feature plugins use the Obsidian-style external mode only:
screenshots, OCR, translation, reminders, theme automation, search extensions,
and Git sync must be installed from the marketplace before their entries,
hotkeys, windows, and backend commands are available. Markdown, editor, and
workspace behavior remain app core.

The settings marketplace treats `included` official entries that have
`packageUrl` as installable packages, then installs their manifest and compiled
frontend runtime into `<data-root>/packages/plugins/<plugin-id>`.

Official plugin routes, settings tabs, titlebar actions, host components, window
shortcuts, search providers, and AI providers are not statically registered. After a
matching official manifest package is installed, the runtime bridge loads the
official plugin entry and registers those capabilities for that installed
plugin id.

## Native Host Backend Split

Official plugins can now move backend implementation out of the main Tauri
binary by shipping a native host executable in their own package repository.
The app-level contract is intentionally small:

1. The marketplace installs or updates `<data-root>/packages/plugins/<plugin-id>`.
2. `plugin.json` declares `entry.backend`, `entry.backendKind: "native-host"`,
   and the required `backend:<command>` permissions.
3. The frontend calls `context.api.invokeBackend`.
4. The main app validates plugin enabled state, permissions, and package path,
   then runs the plugin's backend executable.

Current security checks:

- `context.api.invoke` is gated in the frontend by `command:<name>` or
  `command:*`.
- Capability APIs are gated in the frontend by capability permissions such as
  `workspace:read`, `workspace:write`, `network:<origin>`, or
  `capability:<name>`.
- `context.api.invokeBackend` is gated in the frontend and again in Rust by
  `backend:<name>` or `backend:*`.
- Rust re-reads the installed manifest before native-host execution, verifies
  the plugin is enabled, validates the backend relative path, canonicalizes both
  package and executable paths, and rejects executables outside the package.
- Remote marketplace installs verify package SHA-256 when `sha256` is declared.

Reserved security metadata:

```json
{
  "publisher": {
    "id": "publisher-id",
    "name": "Publisher",
    "publicKeyId": "minisign-key-id",
    "trusted": true
  },
  "signature": {
    "algorithm": "minisign",
    "keyId": "minisign-key-id",
    "value": "base64-or-armored-signature"
  },
  "nativeHost": {
    "signature": {
      "algorithm": "minisign",
      "keyId": "minisign-key-id",
      "value": "base64-or-armored-signature"
    }
  }
}
```

These fields are reserved for signed plugin packages, trusted publishers, and
native-host executable signatures. They are not enforced yet, so third-party
marketplace enablement must remain blocked or curated until signature
verification is implemented.

This means a screenshot backend bug can be fixed by publishing a new
`snippets-code-plugin-screenshot` tag and updating the marketplace entry. Users
update only that plugin package; the main app is rebuilt only when the bridge
protocol or core workspace/editor behavior changes.

For compatibility, the bundled screenshot Rust implementation remains as a
fallback until the official screenshot native host package reaches feature
parity. Once that package owns the commands completely, the fallback code can be
removed from the main app without changing the plugin protocol.

## Next Steps

1. Move each official backend command from compatibility adapters into native
   host packages, starting with screenshot/OCR/pin window capture.
2. Add plugin lifecycle hooks: enable, disable, migrate, before-uninstall cleanup.
3. Add long-running backend session support for plugins that need warm caches or
   streaming progress.
4. Add signed plugin package metadata before enabling third-party marketplace installation.
