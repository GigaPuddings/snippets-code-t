# Local AI

Local AI feature plugin for chat, translation, and future editor assistance.

The plugin manages a local llama.cpp server process through app backend commands.
It starts the model only when requested, keeps the service warm while it is being
used, and stops it after the configured idle timeout.

Web-search mode is optional per chat. It launches Microsoft Playwright MCP
(`npx --yes @playwright/mcp@latest --headless --isolated`), opens the configured
search page, reads the first results, extracts page text through the browser,
and instructs the local model to summarize and cite only evidence returned for
that turn. The default search page template is
`https://www.bing.com/search?q={query}`; change it in Local AI settings if you
prefer another searchable page that includes the `{query}` placeholder.

Default model directory:

```text
E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive
```

Runtime resources:

- `local-ai-llama-runtime` provides llama-server and CUDA runtime files.
