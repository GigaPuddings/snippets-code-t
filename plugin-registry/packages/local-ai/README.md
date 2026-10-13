# Local AI

Local AI feature plugin for chat, translation, and future editor assistance.

The plugin manages a local llama.cpp server process through app backend commands.
It starts the model only when requested, keeps the service warm while it is being
used, and stops it after the configured idle timeout.

Web-search mode is optional per chat. It launches Microsoft Playwright MCP
(`npx --yes @playwright/mcp@latest --headless --isolated`), opens the built-in
search entry, reads the first results, extracts page text through the browser,
and instructs the local model to summarize and cite only evidence returned for
that turn.

Model paths are not preconfigured. Open **Settings → Local AI**, choose the local
directory containing your GGUF models, select the main model and optional mmproj,
then save the configuration. Existing saved paths are preserved when upgrading.

Configuration is stored in `state/plugins/local-ai/local-ai.json` under the app's
configured data directory. The default loopback host and port are fallbacks for
these settings; lifecycle intervals, parallel slots, and attachment limits are
internal resource policies.

Runtime resources:

- `local-ai-llama-runtime` provides llama-server and CUDA runtime files.
