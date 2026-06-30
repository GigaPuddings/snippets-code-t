# Translation Offline Runtime Package

This is a resource-only local plugin package for the built-in `translation`
plugin. It keeps the Transformers.js / ONNX runtime out of the core frontend
bundle. The model files are still downloaded into the browser cache on demand by
Transformers.js after this runtime package is installed.

Expected installed layout:

```text
translation-offline-runtime/
  plugin.json
  resources/
    transformers/
      transformers.min.js
```

The runtime file must export the same ESM API as `@huggingface/transformers`,
including `pipeline` and `env`.

At runtime the offline translator searches:

```text
<app-data>/plugins/translation-offline-runtime/resources/transformers/transformers.min.js
<app-data>/plugins/translation/resources/transformers/transformers.min.js
```
