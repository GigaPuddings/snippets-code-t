# Official Plugin Packages

This directory keeps source package manifests for the official feature plugins.
The published marketplace points at one GitHub repository per installable
plugin, for example `GigaPuddings/snippets-code-plugin-screenshot`.

These packages intentionally describe plugin capabilities and optional
resources. Markdown, editor, and workspace behavior stay in the app core.

Run `pnpm plugins:build-official` to compile official frontend runtime entries
into each package's `dist/` directory and add `entry.frontend` metadata.
Run `pnpm plugins:sync-repos --pin-marketplace-tags` to publish the resulting
package root to the matching `snippets-code-plugin-*` repository and create the
matching Git tag. `pnpm plugins:release` runs build, sync, local package
generation, and marketplace verification as one release chain.

The main app package is `private`, so plugin package publication is GitHub
repository/tag based rather than npm registry based.

Before adding or releasing a new official plugin, follow the checklist in
`docs/OFFICIAL_PLUGIN_DEVELOPMENT.md`. It covers the common display and runtime
failures caused by missing package repositories, stale marketplace entries, or
unbuilt runtime files.
