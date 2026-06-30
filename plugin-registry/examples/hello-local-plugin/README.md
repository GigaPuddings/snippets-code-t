# Hello Local Plugin

This is the smallest local plugin package for validating the plugin protocol.

Install it from Settings > Plugins > Install Local Plugin and select this directory. After enabling it, the frontend runtime loads `dist/frontend.js` and registers:

- a settings tab
- a layout route at `/hello-local-plugin`
- a search provider that responds to `hello`

The package can also be zipped with `plugin.json` at the zip root, then installed through Settings > Plugins > Install Package.
