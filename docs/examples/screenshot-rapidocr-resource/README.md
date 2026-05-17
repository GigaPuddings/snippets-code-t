# Screenshot RapidOCR Resource Package

This is a resource-only local plugin package for the built-in `screenshot`
plugin. It keeps the heavy RapidOCR runtime out of the core app installer while
still allowing OCR to be installed on demand.

Expected installed layout:

```text
screenshot-rapidocr/
  plugin.json
  resources/
    rapidocr/
      RapidOCR-json.exe
      models/
        ch_PP-OCRv4_det_infer.onnx
        rec_ch_PP-OCRv4_infer.onnx
        ...
```

During development, `pnpm rapidocr:install` still prepares
`src-tauri/resources/rapidocr` as a local dev fallback. To generate an
installable resource package directory, run:

```bash
pnpm rapidocr:package
```

The package is written to `dist-plugin-packages/screenshot-rapidocr`. Install
that directory from the app's plugin settings page. To publish the generated
package to `GigaPuddings/snippets-code-plugin-screenshot-rapidocr` and create
the matching plugin repository tag, run:

```bash
pnpm rapidocr:release
```

The app release script does not upload the large RapidOCR binaries implicitly;
resource publishing is explicit so normal app tags do not unexpectedly push
large OCR model files.

At runtime the OCR backend searches these plugin resource roots first:

```text
<app-data>/plugins/screenshot/resources/rapidocr
<app-data>/plugins/screenshot-rapidocr/resources/rapidocr
```
