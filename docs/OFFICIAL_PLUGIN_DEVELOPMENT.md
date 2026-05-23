# Official Plugin Development

Official feature plugins are external installable packages by default. A new
official plugin is not complete until the app source, package source,
marketplace entry, and independent GitHub plugin repository are all wired
together.

## Required Files

Use `quick-tools` as the smallest working search plugin example.

```text
src/plugins/<plugin-id>/
  manifest.ts
  runtime-entry.ts
  index.ts
  searchProvider.ts

docs/plugin-packages/<plugin-id>/
  plugin.json
  README.md
  dist/frontend.js
```

The runtime entry must call the plugin bridge registration method that matches
the manifest capabilities. For quick search tools, `plugin.json` must include
the search source in `capabilities.searchSources`, and `runtime-entry.ts` must
call `context.registerSearchProvider(...)`.

## App Integration Checklist

- Add the source plugin under `src/plugins/<plugin-id>`.
- Add the plugin manifest to `src/plugins/loader.ts` only if the plugin also
  needs bundled development compatibility.
- Add the plugin id to `src/plugins/types.ts` when the core app has typed
  references to it.
- Add backend whitelist or state gates in `src-tauri/src/app_config.rs` only for
  official plugins that need core-side commands, hotkeys, or startup services.
- Add an entry in `scripts/build-official-plugin-runtimes.mjs` so
  `dist/frontend.js` is generated.
- Add an entry in `scripts/sync-plugin-repositories.mjs` with the matching
  `GigaPuddings/snippets-code-plugin-<plugin-id>` repository name.
- Create the independent GitHub repository before running the sync script.
- Add a marketplace item in `docs/plugin-marketplace/marketplace.json`.
- Add package documentation in `docs/plugin-packages/<plugin-id>/README.md`.

Published official marketplace packages should point directly at the plugin
repository tag archive, for example:

```text
https://github.com/GigaPuddings/snippets-code-plugin-quick-tools/archive/refs/tags/2.0.6.zip
```

Do not use `packageSubdir` for a published official plugin repository. That is
only for development archives or multi-package examples.

## Build And Release

For a plugin-only fix, bump only the plugin package version and keep
`minAppVersion` unchanged unless the plugin needs a new app bridge API.

```powershell
pnpm plugins:build-official <plugin-id>
pnpm plugins:sync-repos --only <plugin-id> --version <plugin-version> --pin-marketplace-tags
pnpm plugins:package
pnpm plugins:verify-marketplace
pnpm build
```

After build and sync, update the marketplace `sizeBytes` value from the package
directory size if the plugin package contents changed.

## Quick Search Plugin Checklist

- The manifest declares `capabilities.searchSources`.
- The runtime entry imports the search provider and registers it through
  `context.registerSearchProvider`.
- The marketplace version is newer than the user-installed package version, so
  the plugin settings page offers an update.
- The installed plugin is enabled.
- The search tab filter is not hiding the source. Quick search shows tool
  results under `全部` and `工具`.
- Query examples are documented in the plugin README. Users should not have to
  guess the syntax.

## Common Failure Modes

- Plugin does not show in marketplace: missing or stale marketplace item, wrong
  branch/tag URL, or the marketplace branch was not pushed.
- Plugin install fails: package URL returns 404, repository was not created, tag
  was not pushed, archive root does not contain `plugin.json`, or package size
  metadata is stale.
- Plugin shows but does not work: `dist/frontend.js` was not rebuilt, the
  runtime entry does not register the capability, manifest capabilities do not
  match the runtime registration, or the installed local package is still an old
  version.
- Official plugin works only in development: source files were changed but
  `pnpm plugins:build-official` and `pnpm plugins:sync-repos` were not run.
- Backend command is blocked: the plugin is disabled, the command permission is
  missing, or the app-side official plugin whitelist/state gate does not include
  the plugin id.

When debugging, start from the installed package in the app data plugin
directory and verify `plugin.json`, `dist/frontend.js`, version, enabled state,
and app logs in that order.
