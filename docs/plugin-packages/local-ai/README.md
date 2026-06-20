# Local AI

Local AI feature plugin for chat, translation, and future editor assistance.

The plugin manages a local llama.cpp server process through app backend commands.
It starts the model only when requested, keeps the service warm while it is being
used, and stops it after the configured idle timeout.

SearXNG web-search mode is optional per chat. It queries the configured SearXNG
JSON endpoint, shows the returned source links, and instructs the local model to
summarize and cite only evidence returned for that turn. The default endpoint is
`http://127.0.0.1:8080`; run SearXNG separately, then change its address in the
Local AI settings if needed.

Default model directory:

```text
E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive
```

Runtime resources:

- `local-ai-llama-runtime` provides llama-server and CUDA runtime files.
