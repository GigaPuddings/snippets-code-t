# Local AI Agent-Reach Runtime

Resource package for the `local-ai` plugin.

This package ships the Agent-Reach internet capability runtime used by Local
AI. The app first checks this installed resource package, then falls back to a
system install and finally to a managed app-data virtual environment if the
packaged runtime is not present or not ready.

Expected runtime layout for packaged releases:

```text
local-ai-agent-reach-runtime/
  plugin.json
  resources/
    agent-reach/
      bin/
        agent-reach(.cmd)
        mcporter(.cmd)
      node/
        node_modules/
          mcporter/
      node-runtime/
        node.exe
        node
      venv/
        Scripts/python.exe
        bin/python
      runtime.json
```

The package is published as a resource dependency of `local-ai`, so marketplace
installations can fetch it before users enable web access in Local AI chat.

Build the distributable runtime package with:

```bash
pnpm agent-reach:package
```

Publish it to the synced plugin repository with:

```bash
pnpm agent-reach:release
```
