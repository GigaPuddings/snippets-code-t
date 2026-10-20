# Wallpaper Switcher

Windows desktop wallpaper switching plugin for Snippets Code.

## Features

- Set a single local image as a fixed wallpaper.
- Rotate wallpapers from a local folder on a timer.
- Browse Wallspic desktop wallpapers, with Latest and Hot sorting.
- Browse Wallhaven Latest, Hot, monthly Toplist, and Most Favorited results.
- Load more images by scrolling, with deduplication, retry, and virtualized rows.
- Exclude portrait and square assets from Wallspic desktop results. Wallhaven
  searches use the current primary screen resolution, with lower-resolution fallback.
- Filter the people category to Asian women using source tags. Wallspic verifies
  each candidate's complete tags; unverified images are excluded, so results may be empty.
- Switch an empty Wallspic people search to Wallhaven explicitly, keeping the
  category and keyword. Hot results also provide a shortcut to the monthly toplist.
- Cache downloaded and fitted wallpapers locally.
- Switch to the next wallpaper directly from the tray menu, open the full
  workspace from the tray, or bind an optional global hotkey.
- Fit wallpapers to the desktop using the existing fill-crop pipeline.

## Notes

The current implementation targets Windows desktop wallpaper APIs. Other operating systems display an unsupported-platform notice.

New configurations use Wallspic. Existing configurations retain Wallhaven until
the user changes the website in the online library or tray menu. Cached files
and rotation history are separated by provider.

The Wallspic and Latest features require the corresponding updated Snippets Code
backend. Build the host and plugin together when testing this source checkout;
replacing only the plugin runtime on a released host does not add the backend capabilities.

## Local build and import

Run these commands from the repository root in PowerShell:

```powershell
# Build only this plugin's frontend runtime.
node scripts/build-official-plugin-runtimes.mjs wallpaper-switcher
node scripts/verify-plugin-marketplace.mjs --local

# Optional: create a ZIP with plugin.json at its root.
New-Item -ItemType Directory -Force .\dist-plugin-packages\local | Out-Null
Compress-Archive -Path .\plugin-registry\packages\wallpaper-switcher\* -DestinationPath .\dist-plugin-packages\local\wallpaper-switcher-local.zip -Force
```

In the application's plugin manager, choose the local import action and select
the ZIP, or import the `plugin-registry/packages/wallpaper-switcher` directory
directly. If this version is already installed, choose overwrite when prompted,
then close and reopen the wallpaper window. Restart the application if an older
runtime is still loaded.

This plugin ZIP does not contain the Rust backend or the host's translation
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
