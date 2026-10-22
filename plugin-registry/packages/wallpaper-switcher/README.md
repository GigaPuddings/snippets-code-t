# Wallpaper Switcher

Windows desktop wallpaper switching plugin for Snippets Code.

## Features

- Set a single local image as a fixed wallpaper.
- Rotate wallpapers from a local folder on a timer.
- Browse Wallspic desktop albums with Latest and Popular sorting, native categories. Portrait and square results remain excluded.
- Use a compact, wrapping filter bar without a search input; stale saved keywords
  are cleared when the library opens.
- Browse Wallhaven with Relevance, Random, Latest, Views, Favorites, Toplist, or Hot
  sorting. Toplist has seven time ranges, from one day to one year.
- Combine Wallhaven General, Anime, and People categories. An optional Asian women
  preset is available when only People is selected; it is not applied to Wallspic.
- Filter Nature wallpapers by tag across General and Anime, with saved preferences
  shared by browsing and automatic rotation.
- Click a type for single selection; Ctrl/Command-click toggles multiple types.
  Nature alone highlights only Nature, while keeping its General + Anime search
  scope. Explicit combinations are saved and restored.
- Load more images by scrolling, with deduplication, retry, and virtualized rows.
  Random Wallhaven listings keep one seed across pages.
- Wallhaven searches retain primary-screen resolution matching with a 1080p fallback.
  The resolution badge and ranking explanations have been removed from the library.
- Cache downloaded and fitted wallpapers locally.
- Switch to the next wallpaper directly from the tray menu, open the full
  workspace from the tray, or bind an optional global hotkey.
- Fit wallpapers to the desktop using the existing fill-crop pipeline.

## Notes

The current implementation targets Windows desktop wallpaper APIs. Other operating systems display an unsupported-platform notice.

New configurations use Wallhaven. Existing configurations keep their saved
provider until the user changes it in the home panel, online library, or tray menu. Cached files
and rotation history are separated by provider.

Provider-specific filters and the Wallspic source require the corresponding updated Snippets Code
backend. Build the host and plugin together when testing this source checkout;
replacing only the plugin runtime on a released host does not add the backend capabilities.

## Local build and import

Run these commands from the repository root in PowerShell:

```powershell
node scripts/build-official-plugin-runtimes.mjs wallpaper-switcher
node scripts/verify-plugin-marketplace.mjs --local
```

A ZIP is not required. In the application's plugin manager, uninstall the old
wallpaper plugin package, choose **Install Local Plugin**, and select this exact
directory, which contains `plugin.json`:

```text
E:\Project\Tauri\snippets-code-t\plugin-registry\packages\wallpaper-switcher
```

Do not select the parent `packages` directory. Keep plugin settings/data when
uninstalling if you want to retain your configuration. Close and reopen the
wallpaper window after reinstalling; restart the application if an older runtime
remains loaded.

The plugin directory does not contain the Rust backend or the host's translation
catalogs. When testing changes to either, first build the host from the same
checkout:

```powershell
pnpm tauri build
```

The default Windows NSIS installer is generated under
`src-tauri/target/release/bundle/nsis`. Install the updated host manually,
then import the local plugin package. A previously released host with the same
version string may still lack unreleased backend changes; use the build from
the matching source checkout.
