# Local AI

Local AI feature plugin for chat, translation, and future editor assistance.

The plugin manages a local llama.cpp server process through app backend commands.
It starts the model only when requested, keeps the service warm while it is being
used, and stops it after the configured idle timeout.

Verified-source mode is optional per chat. It queries Wikipedia, Crossref, and
OpenAlex directly through the Rust backend, shows the returned source links,
and instructs the local model to cite only evidence returned for that turn.
It does not bundle or start a separate search runtime.

Default model directory:

```text
E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive
```

Runtime resources:

- `local-ai-llama-runtime` provides llama-server and CUDA runtime files.
