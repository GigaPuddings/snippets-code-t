# Official Plugin Packages

This directory keeps GitHub-installable package manifests for the official
feature plugins. A marketplace entry can point at the repository archive plus a
`packageSubdir` such as `docs/plugin-packages/screenshot`.

These packages intentionally describe plugin capabilities and optional
resources. Markdown, editor, and workspace behavior stay in the app core.

Run `pnpm plugins:package` to materialize these manifests into
`dist-plugin-packages/official/<plugin-id>` for local installation testing.
Run `pnpm plugins:build-official` to compile official frontend runtime entries
into each package's `dist/` directory and add `entry.frontend` metadata.
Run `pnpm plugins:verify-marketplace` before publishing marketplace changes to
confirm every installable GitHub entry points at a valid `plugin.json`.
