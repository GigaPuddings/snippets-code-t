# Official Plugin Packages

This directory keeps source package manifests for the official feature plugins.
The published marketplace points at one GitHub repository per installable
plugin, for example `GigaPuddings/snippets-code-plugin-screenshot`.

These packages intentionally describe plugin capabilities and optional
resources. Markdown, editor, and workspace behavior stay in the app core.

Run `pnpm plugins:build-official` to compile official frontend runtime entries
into each package's `dist/` directory and add `entry.frontend` metadata.
Publish the resulting package root to the matching `snippets-code-plugin-*`
repository.
Run `pnpm plugins:verify-marketplace` before publishing marketplace changes to
confirm every installable GitHub entry points at a valid `plugin.json`.
