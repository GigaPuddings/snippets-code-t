<template>
  <node-view-wrapper class="code-block-wrapper code-block" data-component="code-block">
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
        <path
          fill="currentColor"
          d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        />
      </svg>
      <svg v-else viewBox="0 0 24 24" width="14" height="14" class="check-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        />
      </svg>
    </button>
    <pre class="code-block-pre"><code :class="codeClass" :data-language="displayLangKey" spellcheck="false"><node-view-content class="code-block-content" /></code></pre>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3';
import { computed, ref } from 'vue';
import { resolveCodeBlockLang } from './CodeBlockHighlight';

const props = defineProps(nodeViewProps);

const copied = ref(false);

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
  plaintext: 'Plain Text',
};

const displayLangKey = computed(() => {
  const raw = (props.node.attrs.language as string | null) || '';
  if (raw.trim()) return raw;
  return resolveCodeBlockLang(null, props.node.textContent) || 'plaintext';
});

const displayLanguage = computed(() => {
  const key = displayLangKey.value.toLowerCase();
  return languageMap[key] || props.node.attrs.language || 'Plain Text';
});

const codeClass = computed(() => {
  const lang = displayLangKey.value;
  return lang && lang !== 'plaintext' ? `language-${lang}` : 'language-plaintext';
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
  @apply relative my-3 rounded-lg overflow-hidden;
  border: 1px solid var(--panel-border, rgba(0, 0, 0, 0.1));
  background: var(--editor-hover-bg, rgba(0, 0, 0, 0.04));
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.copy-language-button {
  @apply absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-panel-text-secondary rounded cursor-pointer outline-none transition-all duration-150 z-10;
  border: none;
  background: var(--code-block-toolbar-bg, rgba(255, 255, 255, 0.85));

  .language-text {
    font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
    letter-spacing: 0.3px;
  }

  .copy-icon,
  .check-icon {
    @apply flex-shrink-0;
  }

  &:hover {
    @apply bg-panel-hover-bg;
  }

  &:active {
    @apply bg-panel;
  }

  .dark & {
    background: var(--code-block-toolbar-bg, rgba(255, 255, 255, 0.08));
    color: var(--panel-text-secondary, #9ca3af);

    &:hover {
      background: var(--panel-hover-bg, rgba(255, 255, 255, 0.12));
    }

    &:active {
      background: var(--panel-bg, rgba(255, 255, 255, 0.06));
    }
  }
}

.code-block-pre {
  @apply m-0 pt-10 px-4 pb-4 overflow-x-auto;
  margin: 0 !important;
  font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', monospace;
  font-size: 13.5px;
  line-height: 1.65;
  background: transparent;

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
}

.code-block-pre code,
.code-block-pre :deep(.code-block-content) {
  @apply block p-0 border-none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  white-space: pre !important;
  word-break: normal;
  tab-size: 2;
  background: transparent !important;
  color: var(--panel-text, inherit);
}
</style>
