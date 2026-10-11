# Browser bookmark bridge

This directory holds shared extension sources and the Chromium/Firefox manifests. It is not directly loadable: the host's **Prepare connection and export extension** action copies the shared files alongside the selected manifest into `%LOCALAPPDATA%\SnippetsCode\BookmarkBridge\chromium` and `firefox`.

Load the exported directory in Chrome/Edge/Brave, or temporarily load the exported Firefox manifest. Enable the connection in the extension popup and bind the correct browser profile in the launcher settings. Firefox permanent distribution requires a signed add-on.

Permissions are limited to `bookmarks`, `nativeMessaging`, and `storage`. There are no content scripts or website host permissions. The extension only removes individually confirmed bookmark nodes after checking their identity, original URL/title and request expiry. It never removes folders.

The Chromium manifest public key fixes its ID to `ekedlagmngafnfdpkbolakefpgjgnpam`; Firefox uses `bookmark-bridge@snippets-code.app`. The native host allowlist and regression test must be updated together if either identity changes.

See the main repository's `docs/plugins/launcher-discovery-and-bookmark-bridge.md` for the implementation and manual verification procedure. Regression tests are included in `pnpm test`.
