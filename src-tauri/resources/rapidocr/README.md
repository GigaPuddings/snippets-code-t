# RapidOCR Runtime

This directory is bundled into the Tauri app as `resources/rapidocr`.

Run this before building a test package:

```bash
pnpm rapidocr:install
```

The script downloads `RapidOCR-json_v0.2.0.7z` from
`hiroi-sora/RapidOCR-json` and extracts `RapidOCR-json.exe` plus its models and
runtime files here.

The application searches this directory first in development and packaged
builds. You can still override the executable path with:

```bash
SNIPPETS_RAPIDOCR_PATH=C:\path\to\RapidOCR-json.exe
```
