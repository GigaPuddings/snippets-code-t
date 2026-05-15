# Plugin System Refactor

This document describes the first-stage built-in plugin architecture.

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
- Types: `src/plugins/types.ts`
- Store: `src/store/plugins.ts`
- Settings UI: `src/components/SettingsContent/components/Plugins/index.vue`

The router checks `route.meta.pluginId` and redirects disabled plugin routes to the plugin settings page.

Search sources are gated in `src/hooks/useSearch.ts`.

## Backend

Plugin states are stored in `.snippets-code/app.json` under `plugins`.

Commands:

- `get_plugin_states`
- `set_plugin_enabled`

Startup now checks plugin states before starting optional services such as reminders, Auto Dark Mode scheduling, desktop file watching, and desktop file cache refresh.

## Next Steps

1. Move each built-in plugin into its own frontend folder under `src/plugins/<plugin-id>`.
2. Split Rust commands by plugin under `src-tauri/src/plugins/<plugin-id>`.
3. Replace bundled RapidOCR with an on-demand plugin resource installer.
4. Add a permission manifest before supporting third-party plugins.
