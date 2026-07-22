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
          <rect x="9" y="9" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8" />
          <path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="14" height="14" class="check-icon" aria-hidden="true">
          <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <pre ref="codeBlockPreRef" class="code-block-pre"><code :class="codeClass" :data-language="displayLangKey" spellcheck="false"><node-view-content class="code-block-content" /></code></pre>

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
import { requestSelectionScrollAfterLayout } from '../utils/editorLayout';

const props = defineProps(nodeViewProps);
const { t } = useI18n();

const copied = ref(false);
const showLanguageDialog = ref(false);
const codeBlockPreRef = ref<HTMLElement | null>(null);

onMounted(() => {
  requestSelectionScrollAfterLayout(props.editor, {
    // 转换前的旧段落坐标可能位于图片上方；代码块挂载后的校正只向下滚动，
    // 避免旧坐标把视图再次拉回图片顶部。
    allowScrollUp: false,
    targetElement: () => codeBlockPreRef.value,
    // onMounted 可能早于最终选区映射，因此要在两帧布局完成后再判断。
    shouldScroll: () => {
      const nodePosition = props.getPos();
      if (typeof nodePosition !== 'number') return false;

      const { from, to } = props.editor.state.selection;
      const contentFrom = nodePosition + 1;
      const contentTo = nodePosition + props.node.nodeSize - 1;
      return from >= contentFrom && to <= contentTo;
    }
  });
});

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
  @apply relative my-3 box-border w-full min-w-0 max-w-full overflow-hidden;

  border: 1px solid var(--code-block-border, var(--editor-border));
  border-radius: 7px;
  background: var(--code-block-bg, var(--editor-hover-bg));
  box-shadow: 0 1px 2px rgb(15 23 42 / 4%);
  transition: border-color 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    border-color: var(--code-block-hover-border, var(--editor-border));
    box-shadow: 0 3px 10px rgb(15 23 42 / 6%);
  }

  &:focus-within {
    border-color: color-mix(in srgb, var(--el-color-primary) 48%, var(--code-block-border));
  }

  ::selection {
    background: var(--code-block-selection);
  }
}

.code-toolbar {
  @apply absolute right-2 top-2 z-10 flex items-center overflow-hidden rounded border;
  height: 26px;
  color: var(--panel-text-secondary);
  background: var(--code-block-toolbar-bg, var(--panel-bg));
  border-color: var(--code-block-toolbar-border, var(--panel-border));
  box-shadow: 0 1px 3px rgb(15 23 42 / 8%);
  backdrop-filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-2px);
  transition: opacity 0.15s ease, transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.code-block-wrapper:hover .code-toolbar,
.code-block-wrapper:focus-within .code-toolbar {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.language-button,
.copy-language-button {
  @apply flex h-full items-center justify-center border-0 bg-transparent px-2 text-[11px] font-medium outline-none transition-colors duration-150;
  border: none;
  color: inherit;

  &:hover {
    background: var(--panel-hover-bg);
    color: var(--panel-text);
  }

  &:active {
    background: color-mix(in srgb, var(--panel-hover-bg) 78%, var(--panel-text-secondary));
  }
}

.language-button .language-text {
  @apply max-w-28 overflow-hidden text-ellipsis;
  font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.copy-language-button {
  @apply w-7 px-0;
  border-left: 1px solid var(--code-block-toolbar-border, var(--panel-border));
}

.copy-icon,
.check-icon {
  @apply flex-shrink-0;
}

.code-block-pre {
  @apply m-0 box-border w-full min-w-0 max-w-full overflow-x-auto;

  margin: 0 !important;
  padding: 14px 16px;
  font-family: ui-monospace, 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
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
  white-space: pre-wrap !important;
  word-break: normal;
  tab-size: 2;
  background: transparent !important;
  color: var(--panel-text, inherit);
  min-height: 1.6em;
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
