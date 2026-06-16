# Local AI llama.cpp Runtime

Resource package for the `local-ai` plugin.

Expected layout:

```text
local-ai-llama-runtime/
  plugin.json
  resources/
    llama/
      llama-server.exe
      llama-server-impl.dll
      llama.dll
      ggml-cuda.dll
      cudart64_13.dll
      cublas64_13.dll
      cublasLt64_13.dll
      ...
```

The current resource files were extracted from:

- `llama-b9296-bin-win-cuda-13.1-x64.zip`
- `cudart-llama-bin-win-cuda-13.1-x64.zip`

Both packages are official llama.cpp Windows CUDA runtime archives. The plugin
starts `resources/llama/llama-server.exe` with `resources/llama` as the working
directory so the bundled DLLs are resolved next to the launcher.
