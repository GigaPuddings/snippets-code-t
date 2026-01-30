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

// 显示的语言名称
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
  position: relative;
  margin: 8px 0;
  border-radius: 8px;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: #afb8c1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);

    .copy-language-button {
      opacity: 1;
    }
  }

  .dark & {
    background: #22272e;
    border-color: #444c56;

    &:hover {
      border-color: #636e7b;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
    }
  }
}

.copy-language-button {
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  color: #6e7781;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(27, 31, 36, 0.15);
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  backdrop-filter: blur(8px);
  z-index: 10;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  .language-text {
    font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
    letter-spacing: 0.5px;
    font-size: 9px;
  }

  .copy-icon,
  .check-icon {
    flex-shrink: 0;
    opacity: 0.8;
  }

  &:hover {
    opacity: 1 !important;
    color: #ffffff;
    background: #5d6dfd;
    border-color: #5d6dfd;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(93, 109, 253, 0.3);

    .copy-icon,
    .check-icon {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(93, 109, 253, 0.3);
  }

  .dark & {
    color: #adbac7;
    background: rgba(34, 39, 46, 0.95);
    border-color: rgba(99, 110, 123, 0.4);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

    &:hover {
      color: #ffffff;
      background: #7c8aff;
      border-color: #7c8aff;
      box-shadow: 0 4px 12px rgba(124, 138, 255, 0.4);
    }
  }
}

pre {
  margin: 0;
  padding: 12px 16px;
  padding-top: 32px;
  overflow-x: visible;
  font-family: 'SF Mono', 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  background: transparent;

  code {
    display: block;
    padding: 0;
    background: transparent !important;
    border: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    color: #24292f !important;

    .dark & {
      color: #e5e7eb !important;
    }
  }
}
</style>
