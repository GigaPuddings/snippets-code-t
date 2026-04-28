<template>
  <node-view-wrapper class="code-block-wrapper code-block" data-component="code-block">
    <div class="code-toolbar" contenteditable="false">
      <button
        class="language-button"
        @click="showLanguageDialog = true"
        :title="`当前语言：${displayLanguage}（点击修改）`"
        :aria-label="`修改代码语言，当前为 ${displayLanguage}`"
        type="button"
      >
        <span class="language-text">{{ displayLanguage }}</span>
      </button>

      <button
        class="copy-language-button"
        @click="copyCode"
        :title="`复制 ${displayLanguage} 代码`"
        :aria-label="copied ? '已复制' : `复制 ${displayLanguage} 代码`"
        type="button"
      >
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
    </div>
    <pre class="code-block-pre"><code :class="codeClass" :data-language="displayLangKey" spellcheck="false"><node-view-content class="code-block-content" /></code></pre>

    <PromptDialog
      v-model="showLanguageDialog"
      :title="$t('codeBlock.editLanguageTitle')"
      :message="$t('codeBlock.editLanguageMessage')"
      :placeholder="$t('codeBlock.editLanguagePlaceholder')"
      :initial-value="currentLanguage"
      :max-length="32"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :validator="validateLanguage"
      @confirm="handleLanguageConfirm"
    />
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import { PromptDialog } from '@/components/UI';
import { resolveCodeBlockLang } from './CodeBlockHighlight';

const props = defineProps(nodeViewProps);
const { t } = useI18n();

const copied = ref(false);
const showLanguageDialog = ref(false);

const languageMap: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  dart: 'Dart',
  flutter: 'Flutter',
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

const currentLanguage = computed(() => ((props.node.attrs.language as string | null) || '').trim());

const languagePattern = /^[a-zA-Z0-9#+._-]*$/;
const validateLanguage = (value: string) => {
  if (!value) return { valid: true };
  if (!languagePattern.test(value)) {
    return { valid: false, message: t('codeBlock.invalidLanguage') };
  }
  return { valid: true };
};

const handleLanguageConfirm = (value: string) => {
  const nextLanguage = String(value ?? '').trim();
  props.updateAttributes({
    language: nextLanguage || null,
  });
  showLanguageDialog.value = false;
};

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
    modal.error('复制失败，请重试');
  }
};
</script>

<style lang="scss" scoped>
.code-block-wrapper {
  @apply relative my-3 rounded-lg overflow-hidden;
  border: 1px solid var(--panel-border, rgba(0, 0, 0, 0.12));
  background: var(--code-block-bg, #f6f8fa);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);

  .dark & {
    border-color: rgba(255, 255, 255, 0.1);
    background: var(--code-block-bg-dark, #161b22);
  }
}

.code-toolbar {
  @apply absolute top-2 right-2 flex items-center gap-1.5 z-10;
}

.language-button,
.copy-language-button {
  @apply flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-panel-text-secondary rounded cursor-pointer outline-none transition-all duration-150;
  border: none;
  background: var(--code-block-toolbar-bg, rgba(255, 255, 255, 0.85));
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);

  &:hover {
    @apply bg-panel-hover-bg;
  }

  &:active {
    @apply bg-panel;
  }

  .dark & {
    background: var(--code-block-toolbar-bg, rgba(255, 255, 255, 0.08));
    color: var(--panel-text-secondary, #9ca3af);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);

    &:hover {
      background: var(--panel-hover-bg, rgba(255, 255, 255, 0.12));
    }

    &:active {
      background: var(--panel-bg, rgba(255, 255, 255, 0.06));
    }
  }
}

.language-button .language-text {
  font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
  letter-spacing: 0.3px;
}

.copy-language-button {
  @apply px-2;
}

.copy-icon,
.check-icon {
  @apply flex-shrink-0;
}

.code-block-pre {
  @apply m-0 pt-4 px-4 pb-4 overflow-x-auto;
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

/* Shiki token 颜色映射（通过 class + CSS 变量实现，避免 inline style） */
.code-block-wrapper {
  --shiki-fg-default: #24292e;
  --shiki-red: #cf222e;
  --shiki-blue: #0969da;
  --shiki-purple: #8250df;
  --shiki-cyan: #1b7c83;
  --shiki-comment: #57606a;
  --shiki-yellow: #9a6700;
  --shiki-green: #116329;
  --shiki-orange: #953800;
}

.dark .code-block-wrapper,
.dark-theme .code-block-wrapper,
.code-block-wrapper.dark-theme {
  --shiki-fg-default: #c9d1d9;
  --shiki-red: #ff7b72;
  --shiki-blue: #a5d6ff;
  --shiki-purple: #d2a8ff;
  --shiki-cyan: #79c0ff;
  --shiki-comment: #8b949e;
  --shiki-yellow: #f2cc60;
  --shiki-green: #7ee787;
  --shiki-orange: #ffa657;
}

.code-block-pre :deep(.shiki-token) {
  color: var(--shiki-color, var(--shiki-fg-default)) !important;
}

/* fallback 正则高亮仍保留 */
.code-block-pre :deep(.hljs-keyword) {
  color: #a626a4 !important;
  font-weight: 700;
}

.code-block-pre :deep(.hljs-string) {
  color: #22863a !important;
}

.code-block-pre :deep(.hljs-number) {
  color: #b76e00 !important;
}

.code-block-pre :deep(.hljs-comment) {
  color: #6a737d !important;
  font-style: italic;
}

.dark .code-block-pre :deep(.hljs-keyword) {
  color: #c792ea !important;
}

.dark .code-block-pre :deep(.hljs-string) {
  color: #c3e88d !important;
}

.dark .code-block-pre :deep(.hljs-number) {
  color: #f78c6c !important;
}

.dark .code-block-pre :deep(.hljs-comment) {
  color: #8b949e !important;
}
</style>
