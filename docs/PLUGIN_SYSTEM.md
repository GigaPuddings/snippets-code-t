# Plugin System Refactor

This document describes the built-in plugin architecture refactor.

## Goals

- Keep the core app focused on workspace, Markdown storage, editors, base search, settings, and window lifecycle.
- Move personalized tools behind explicit feature boundaries.
- Preserve current behavior by enabling all built-in plugins by default.
- Keep heavy resources such as RapidOCR and offline translation models outside the core installer and load them on demand.

## Built-in Plugins

The first stage does not move feature files yet. Instead, it introduces a registry and feature gates.

| Plugin | Scope |
| --- | --- |
| `translation` | Translate window, selection translation, screenshot translation, offline model settings |
| `screenshot` | Screenshot, annotation, OCR entry points, pin windows |
| `todo` | Reminder cards, alarm service, notification windows |
| `system-theme` | Auto dark mode, theme schedule, system theme hotkey |
| `local-launcher` | Local apps and bookmarks management/search |
| `desktop-files` | Desktop file index, watcher, and search results |
| `search-engines` | Custom search engines and web search shortcuts |
| `git-sync` | Git settings, status, auto sync, conflict handling |
| `attachments` | Note attachment settings and cleanup tools |

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
    "backend": "dist/backend.wasm"
  },
  "permissions": ["network", "workspace:read"],
  "compatibleAppVersion": ">=1.5.6"
}
```

Local package directory:

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

The first loader implementation validates manifest shape and deduplicates plugins by id. The backend now scans the application-data `plugins` directory, reads each `plugin.json`, and passes `{ manifest, packagePath }` records into the frontend registry loader.

Local package installation currently accepts either an unpacked directory that contains `plugin.json` or a `.zip` package whose root, or single top-level directory, contains `plugin.json`. The installer copies it into the application-data plugin directory under its manifest `id`; uninstall removes that directory and clears the saved enabled state. It can execute local frontend entries for enabled plugins, but local backend entries are still not executed.

Frontend local plugin entries now use `entry.frontend`. When an enabled local plugin is initialized, the runtime loads that module from the installed package directory and calls `activate(context)`.

The activation context exposes these registration methods:

- `registerRoute`
- `registerSettingsTab`
- `registerSearchProvider`
- `registerTitlebarAction`
- `registerWindowShortcut`

It also exposes `context.ui.h` and `context.ui.defineComponent` so simple local plugins can register Vue components without bundling their own copy of Vue.

Each local plugin has an isolated JSON data file exposed through `context.storage.get`, `context.storage.set`, and `context.storage.delete`. Data is stored under the installed package directory and is removed with the plugin package.

`context.api.invoke` is permission-gated. A local plugin must declare `command:<tauri-command-name>` or `command:*` in `permissions` before it can call a Tauri command through the provided context API.

Runtime-registered routes are added to Vue Router after the plugin registry initializes. Runtime settings tabs, titlebar actions, search providers, and window shortcuts are merged with the built-in registries and still respect the plugin enabled state.

See `docs/examples/hello-local-plugin` for a minimal installable package.

Resource-only local plugins are supported by omitting `entry`. The first
resource-only packages cover the optional RapidOCR runtime and the offline
translation runtime; see `docs/examples/screenshot-rapidocr-resource` and
`docs/examples/translation-offline-runtime`.

## Hotkeys

Core app hotkeys remain outside plugins:

- `search`
- `config`

Optional hotkeys are declared by plugin manifests:

- `translation`: `translate`, `selection_translate`
- `screenshot`: `screenshot`
- `system-theme`: `dark_mode`

The shortcut settings page uses the registry to decide whether a hotkey should be visible. The Rust hotkey registration path performs the same plugin-state check before registering optional hotkeys.

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

## Optional Resources

RapidOCR is no longer listed in `tauri.conf.json` bundle resources, so the core
installer does not carry the OCR runtime and model files. The OCR backend now
searches application-data plugin resource roots first:

```text
<app-data>/plugins/screenshot/resources/rapidocr
<app-data>/plugins/screenshot-rapidocr/resources/rapidocr
```

Development fallback paths such as `src-tauri/resources/rapidocr` still work for
local testing, and `SNIPPETS_RAPIDOCR_PATH` / `RAPIDOCR_PATH` can override the
executable location.

The plugin settings page calls `get_rapidocr_resource_status` and shows whether
the optional resource is installed.

For development and release packaging, run `pnpm rapidocr:install` to download
the local RapidOCR runtime, then `pnpm rapidocr:package` to generate an
installable `dist-plugin-packages/screenshot-rapidocr` resource package.

Offline translation no longer statically imports `@huggingface/transformers`.
Instead, it loads the ESM runtime from an installed local plugin resource:

```text
<app-data>/plugins/translation-offline-runtime/resources/transformers/transformers.min.js
<app-data>/plugins/translation/resources/transformers/transformers.min.js
```

If the runtime package is not installed, offline translation fails with an
installation prompt instead of pulling the runtime into the core app bundle.

## Next Steps

1. Add backend plugin runtime entry points or sandboxed WASM/native host boundaries.
2. Add plugin lifecycle hooks: enable, disable, migrate, before-uninstall cleanup.
3. Move offline translation model cache/status behind the same optional resource protocol.
4. Add signed plugin package metadata before enabling remote marketplace installation.
