# Local AI

Local AI feature plugin for chat, translation, and future editor assistance.

The plugin manages a local llama.cpp server process through app backend commands.
It starts the model only when requested, keeps the service warm while it is being
used, and stops it after the configured idle timeout.

Default model directory:

```text
E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive
```

Runtime resources:

- `local-ai-llama-runtime` provides llama-server and CUDA runtime files.
- `local-ai-agent-reach-runtime` provides the Agent-Reach web capability runtime.

If the Agent-Reach runtime resource is unavailable, the app falls back to a
managed app-data Python virtual environment and installs Agent-Reach
automatically.
