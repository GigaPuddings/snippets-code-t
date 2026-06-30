# RapidOCR Runtime

This directory is a development fallback for the optional RapidOCR resource
package. It is no longer bundled into the core Tauri installer.

Run this before building a test package:

```bash
pnpm rapidocr:install
```

The script downloads `RapidOCR-json_v0.2.0.7z` from
`hiroi-sora/RapidOCR-json` and extracts `RapidOCR-json.exe` plus its models and
runtime files here.

For release builds, package the downloaded runtime as a local plugin resource
using the layout documented in
`plugin-registry/examples/screenshot-rapidocr-resource/README.md`.

The application searches installed plugin resource directories first, then this
development directory. You can still override the executable path with:

```bash
SNIPPETS_RAPIDOCR_PATH=C:\path\to\RapidOCR-json.exe
```
