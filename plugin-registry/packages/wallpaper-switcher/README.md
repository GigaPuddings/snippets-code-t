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
