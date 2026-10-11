# Browser bookmark bridge

This directory holds shared extension sources and the Chromium/Firefox manifests. It is not directly loadable: the host's **Prepare connection and export extension** action copies the shared files alongside the selected manifest into `%LOCALAPPDATA%\SnippetsCode\BookmarkBridge\chromium` and `firefox`.

Load the exported directory in Chrome/Edge/Brave, or temporarily load the exported Firefox manifest. Enable the connection in the extension popup and bind the correct browser profile in the launcher settings. Firefox permanent distribution requires a signed add-on.

ShuangHe can use the Chromium export when the browser supports Chromium Native Messaging. Select `ShuangHe` in the popup; the host registers the Chromium registry location as well as Chrome/Edge/Brave locations. Actual compatibility with a browser fork still requires a live connection check. Other scanned browsers have no original-bookmark deletion support yet.

Reading bookmarks does not need this extension. An empty connection list means no matching extension has connected. Prepare/export first, load the extension separately in each browser profile, click Connect, and then pair it in the launcher. The popup updates status continuously, including native-host errors. Re-prepare after moving the app or updating these extension sources, and reload the extension in the browser.

Permissions are limited to `bookmarks`, `nativeMessaging`, and `storage`. There are no content scripts or website host permissions. The extension only removes individually confirmed bookmark nodes after checking their identity, original URL/title and request expiry. It never removes folders.

The Chromium manifest public key fixes its ID to `ekedlagmngafnfdpkbolakefpgjgnpam`; Firefox uses `bookmark-bridge@snippets-code.app`. The native host allowlist and regression test must be updated together if either identity changes.

See the main repository's `docs/plugins/launcher-discovery-and-bookmark-bridge.md` for the implementation and manual verification procedure. Regression tests are included in `pnpm test`.
