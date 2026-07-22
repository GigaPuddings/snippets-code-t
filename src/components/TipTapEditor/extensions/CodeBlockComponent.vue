<template>
  <node-view-wrapper class="code-block-wrapper">
    <button
      class="copy-language-button"
      contenteditable="false"
      @click="copyCode"
      :title="`复制 ${displayLanguage} 代码`"
      :aria-label="copied ? '已复制' : `复制 ${displayLanguage} 代码`"
      type="button"
    >
      <span class="language-text">{{ displayLanguage }}</span>
      <svg v-if="!copied" viewBox="0 0 24 24" width="14" height="14" class="copy-icon" aria-hidden="true">
        <rect x="9" y="9" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8" />
        <path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
      <svg v-else viewBox="0 0 24 24" width="14" height="14" class="check-icon" aria-hidden="true">
        <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <pre><code :class="codeClass" :data-language="props.node.attrs.language || 'plaintext'"><node-view-content /></code></pre>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3';

const props = defineProps(nodeViewProps);

const copied = ref(false);

// 语言映射表
const languageMap: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  rust: 'Rust',
  php: 'PHP',
  ruby: 'Ruby',
  swift: 'Swift',
  kotlin: 'Kotlin',
  html: 'HTML',
  css: 'CSS',
  scss: 'SCSS',
  sass: 'Sass',
  less: 'Less',
  json: 'JSON',
  xml: 'XML',
  yaml: 'YAML',
  yml: 'YAML',
  markdown: 'Markdown',
  md: 'Markdown',
  sql: 'SQL',
  bash: 'Shell',
  sh: 'Shell',
  shell: 'Shell',
  powershell: 'PowerShell',
  dockerfile: 'Dockerfile',
  vue: 'Vue',
  jsx: 'JSX',
  tsx: 'TSX',
  js: 'JavaScript',
  ts: 'TypeScript',
  py: 'Python',
  rs: 'Rust',
  rb: 'Ruby',
  graphql: 'GraphQL',
  gql: 'GraphQL',
  toml: 'TOML',
  ini: 'INI',
  conf: 'Config',
  nginx: 'Nginx',
  apache: 'Apache',
};

const displayLanguage = computed(() => {
  const lang = props.node.attrs.language;
  if (!lang) return 'Plain Text';
  return languageMap[lang.toLowerCase()] || lang;
});

const codeClass = computed(() => {
  const lang = props.node.attrs.language;
  return lang ? `language-${lang}` : '';
});

const copyCode = async () => {
  const code = props.node.textContent;
  try {
    await navigator.clipboard.writeText(code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch (err) {
    console.error('复制失败:', err);
    // 降级方案：使用传统的复制方法
    try {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 1500);
    } catch (fallbackErr) {
      console.error('降级复制也失败:', fallbackErr);
    }
  }
};
</script>

<style lang="scss" scoped>
.code-block-wrapper {
  @apply relative my-3 overflow-hidden;
  border: 1px solid var(--code-block-border, var(--editor-border));
  border-radius: 7px;
  background: var(--code-block-bg, var(--editor-hover-bg));
}

.copy-language-button {
  @apply absolute right-2 top-2 z-10 flex h-7 items-center gap-1.5 rounded border px-2 text-[11px] font-medium outline-none transition-all duration-150;
  color: var(--panel-text-secondary);
  background: var(--code-block-toolbar-bg, var(--panel-bg));
  border-color: var(--code-block-toolbar-border, var(--panel-border));
  opacity: 0;
  pointer-events: none;
  transform: translateY(-2px);

  .language-text {
    font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
    letter-spacing: 0.3px;
  }

  .copy-icon,
  .check-icon {
    @apply flex-shrink-0;
  }

  &:hover {
    @apply bg-panel-hover-bg opacity-100;
  }

  &:active {
    @apply bg-panel;
  }
}

.code-block-wrapper:hover .copy-language-button,
.code-block-wrapper:focus-within .copy-language-button {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

pre {
  @apply m-0 overflow-x-auto bg-transparent px-4 py-3.5;
  font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', monospace;
  font-size: 13.5px;
  line-height: 1.65;

  &::-webkit-scrollbar {
    @apply h-2;
  }

  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded bg-black/15;

    &:hover {
      @apply bg-black/25;
    }
  }

  .dark & {
    &::-webkit-scrollbar-thumb {
      @apply bg-white/15;

      &:hover {
        @apply bg-white/25;
      }
    }
  }

  code {
    @apply block p-0 bg-transparent border-none text-panel;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    white-space: pre;
    tab-size: 2;
  }
}
</style>
