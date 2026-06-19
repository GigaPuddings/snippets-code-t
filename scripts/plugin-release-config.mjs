import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
export const OWNER = 'GigaPuddings';
export const MARKETPLACE_PATH = resolve(ROOT, 'docs/plugin-marketplace/marketplace.json');

export const pluginRepositories = [
  {
    id: 'screenshot',
    repo: 'snippets-code-plugin-screenshot',
    sourceDir: 'docs/plugin-packages/screenshot',
    kind: 'feature'
  },
  {
    id: 'translation',
    repo: 'snippets-code-plugin-translation',
    sourceDir: 'docs/plugin-packages/translation',
    kind: 'feature'
  },
  {
    id: 'todo',
    repo: 'snippets-code-plugin-todo',
    sourceDir: 'docs/plugin-packages/todo',
    kind: 'feature'
  },
  {
    id: 'system-theme',
    repo: 'snippets-code-plugin-system-theme',
    sourceDir: 'docs/plugin-packages/system-theme',
    kind: 'feature'
  },
  {
    id: 'local-launcher',
    repo: 'snippets-code-plugin-local-launcher',
    sourceDir: 'docs/plugin-packages/local-launcher',
    kind: 'feature'
  },
  {
    id: 'desktop-files',
    repo: 'snippets-code-plugin-desktop-files',
    sourceDir: 'docs/plugin-packages/desktop-files',
    kind: 'feature'
  },
  {
    id: 'search-engines',
    repo: 'snippets-code-plugin-search-engines',
    sourceDir: 'docs/plugin-packages/search-engines',
    kind: 'feature'
  },
  {
    id: 'quick-tools',
    repo: 'snippets-code-plugin-quick-tools',
    sourceDir: 'docs/plugin-packages/quick-tools',
    kind: 'feature'
  },
  {
    id: 'screen-recorder',
    repo: 'snippets-code-plugin-screen-recorder',
    sourceDir: 'docs/plugin-packages/screen-recorder',
    kind: 'feature'
  },
  {
    id: 'screen-recorder-ffmpeg',
    repo: 'snippets-code-plugin-screen-recorder-ffmpeg',
    sourceDir: 'docs/examples/screen-recorder-ffmpeg-resource',
    resourceSourceDir: 'dist-plugin-packages/screen-recorder-ffmpeg',
    kind: 'resource',
    requiresExplicitResource: true,
    includeFlag: 'includeFfmpegResource',
    includeFlagName: '--include-ffmpeg-resource',
    packageCommand: 'pnpm ffmpeg:package'
  },
  {
    id: 'git-sync',
    repo: 'snippets-code-plugin-git-sync',
    sourceDir: 'docs/plugin-packages/git-sync',
    kind: 'feature'
  },
  {
    id: 'wallpaper-switcher',
    repo: 'snippets-code-plugin-wallpaper-switcher',
    sourceDir: 'docs/plugin-packages/wallpaper-switcher',
    kind: 'feature'
  },
  {
    id: 'local-ai',
    repo: 'snippets-code-plugin-local-ai',
    sourceDir: 'docs/plugin-packages/local-ai',
    kind: 'feature'
  },
  {
    id: 'local-ai-llama-runtime',
    repo: 'snippets-code-plugin-local-ai-llama-runtime',
    sourceDir: 'docs/plugin-packages/local-ai-llama-runtime',
    kind: 'resource',
    requiresExplicitResource: true,
    includeFlag: 'includeLocalAiLlamaRuntime',
    includeFlagName: '--include-local-ai-llama-runtime'
  },
  {
    id: 'local-ai-agent-reach-runtime',
    repo: 'snippets-code-plugin-local-ai-agent-reach-runtime',
    sourceDir: 'docs/plugin-packages/local-ai-agent-reach-runtime',
    resourceSourceDir: 'dist-plugin-packages/local-ai-agent-reach-runtime',
    kind: 'resource',
    requiresExplicitResource: true,
    includeFlag: 'includeLocalAiAgentReachRuntime',
    includeFlagName: '--include-local-ai-agent-reach-runtime',
    packageCommand: 'pnpm agent-reach:package'
  },
  {
    id: 'screenshot-rapidocr',
    repo: 'snippets-code-plugin-screenshot-rapidocr',
    sourceDir: 'docs/examples/screenshot-rapidocr-resource',
    resourceSourceDir: 'dist-plugin-packages/screenshot-rapidocr',
    kind: 'resource',
    requiresExplicitResource: true,
    includeFlag: 'includeRapidOcrResource',
    includeFlagName: '--include-rapidocr-resource',
    packageCommand: 'pnpm rapidocr:package'
  },
  {
    id: 'translation-offline-runtime',
    repo: 'snippets-code-plugin-translation-offline-runtime',
    sourceDir: 'docs/examples/translation-offline-runtime',
    kind: 'resource'
  }
];
