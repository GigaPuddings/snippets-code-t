# Plugin System Refactor

This document describes the built-in plugin architecture refactor.

## Goals

- Keep the core app focused on workspace, Markdown storage, editors, base search, settings, and window lifecycle.
- Move personalized tools behind explicit feature boundaries.
- Preserve current behavior by enabling all built-in plugins by default.
- Prepare heavy resources such as RapidOCR and offline translation models for on-demand installation.

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

Planned local package directory:

```text
plugin-id/
  plugin.json
  dist/
    frontend.js
    backend.wasm
  assets/
```

The first loader implementation validates manifest shape and deduplicates plugins by id. It intentionally does not execute local plugin code yet. The next backend step is to scan an application-data plugin directory, read `plugin.json`, and pass those manifests into the frontend registry loader.

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
- `set_plugin_enabled`

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

## Next Steps

1. Add backend commands to scan the local plugin directory and return validated `plugin.json` manifests.
2. Wire frontend plugin store initialization to merge backend-provided local manifests into the registry.
3. Add plugin lifecycle hooks: install, enable, disable, uninstall, migrate.
4. Replace bundled RapidOCR/offline translation resources with on-demand plugin resources.
5. Enforce plugin permissions before executing third-party frontend or backend entries.
