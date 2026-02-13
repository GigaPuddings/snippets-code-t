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
    <pre><code :class="codeClass" :data-language="props.node.attrs.language || 'plaintext'"><node-view-content /></code></pre>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3';
import { computed, ref } from 'vue';

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
  @apply relative my-3 rounded-md bg-gray-50 overflow-hidden;

  .dark & {
    @apply bg-[#1e1e1e];
  }
}

.copy-language-button {
  @apply absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded cursor-pointer outline-none transition-all duration-150 z-10;
  border: none;

  .language-text {
    font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
    letter-spacing: 0.3px;
  }

  .copy-icon,
  .check-icon {
    @apply flex-shrink-0;
  }

  &:hover {
    @apply bg-gray-200;
  }

  &:active {
    @apply bg-gray-300;
  }

  .dark & {
    @apply text-gray-400 bg-[#1e1e1e];

    &:hover {
      @apply bg-[#2d2d2d];
    }

    &:active {
      @apply bg-[#3a3a3a];
    }
  }
}

pre {
  @apply m-0 pt-10 px-4 pb-4 overflow-x-auto bg-transparent;
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
    @apply block p-0 bg-transparent border-none text-gray-900;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    white-space: pre;
    tab-size: 2;

    .dark & {
      @apply text-gray-100;
    }
  }
}
</style>
