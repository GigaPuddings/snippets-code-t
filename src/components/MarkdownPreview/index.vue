<template>
  <div
    ref="host"
    class="markdown-preview md-rendered"
    :style="{ '--markdown-line-height': String(lineHeight) }"
    @click="handleClick"
    v-html="html"
  ></div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { defaultHighlightStyle } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { getWorkspaceRoot } from '@/api/markdown';
import {
  DEFAULT_ATTACHMENT_CONFIG,
  ATTACHMENT_CONFIG_UPDATED_EVENT,
  getAttachmentConfig
} from '@/plugins/attachments/api';
import type { AttachmentConfig } from '@/types/models';
import {
  createTurndownService,
  htmlToMarkdown,
  renderNoteMarkdown
} from '@/utils/markdown';
import modal from '@/utils/modal';
import { configurePreviewImage, highlightCodeElement } from './rendering';

const props = withDefaults(
  defineProps<{
    content: string;
    format?: 'plain' | 'markdown' | 'html';
    workspaceRoot?: string;
    noteFilePath?: string;
    attachmentConfig?: AttachmentConfig;
    dark?: boolean;
    lineHeight?: number;
  }>(),
  { format: 'markdown', noteFilePath: '', dark: false, lineHeight: 1.6 }
);
const emit = defineEmits<{ 'wikilink-click': [title: string] }>();
const { t, locale } = useI18n();
const host = ref<HTMLElement>();
const root = ref('');
const config = ref({ ...DEFAULT_ATTACHMENT_CONFIG });
const effectiveConfig = computed(() => props.attachmentConfig ?? config.value);
const html = computed(() =>
  renderNoteMarkdown(
    props.format === 'html'
      ? htmlToMarkdown(props.content, createTurndownService())
      : props.content,
    props.workspaceRoot ?? root.value,
    props.noteFilePath
  )
);

watch(
  [html, effectiveConfig, locale, () => props.dark],
  async (_, __, onCleanup) => {
    let cancelled = false;
    const cleanups: Array<() => void> = [];
    onCleanup(() => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
    });
    await nextTick();
    if (cancelled || !host.value) return;
    host.value.querySelectorAll('pre').forEach((pre) => {
      const code = pre.querySelector('code');
      if (!code) return;
      highlightCodeElement(
        code,
        props.dark ? oneDarkHighlightStyle : defaultHighlightStyle
      );
      let copy = pre.querySelector<HTMLButtonElement>('.md-reading-code-copy');
      if (!copy) {
        copy = document.createElement('button');
        copy.type = 'button';
        copy.className = 'md-reading-code-copy';
        pre.append(copy);
      }
      copy.textContent = t('common.copy');
      copy.setAttribute('aria-label', t('common.copy'));
    });
    host.value.querySelectorAll('img').forEach((image) =>
      cleanups.push(
        configurePreviewImage(image, {
          imageScale: effectiveConfig.value.defaultImageScalePercent,
          responsiveImages: effectiveConfig.value.responsiveImages
        })
      )
    );
  },
  { immediate: true, flush: 'post' }
);

async function handleClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const copy = target.closest('.md-reading-code-copy');
  if (copy) {
    try {
      await navigator.clipboard.writeText(
        copy.parentElement?.querySelector('code')?.textContent || ''
      );
      modal.success(t('content.copySuccess'));
    } catch {
      modal.error(t('content.copyFailed'));
    }
    return;
  }
  const link = target.closest<HTMLElement>('a');
  if (!link) return;
  event.preventDefault();
  if (link.dataset.noteName) {
    emit('wikilink-click', link.dataset.noteName);
    return;
  }
  const href = link.getAttribute('href') || '';
  if (href.startsWith('#')) {
    let anchor = href.slice(1);
    try {
      anchor = decodeURIComponent(anchor);
    } catch {
      // Keep malformed percent characters as literal heading text.
    }
    Array.from(
      host.value?.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,h6') || []
    )
      .find(
        (heading) => heading.id === anchor || heading.textContent === anchor
      )
      ?.scrollIntoView({ block: 'start' });
    return;
  }
  if (/^https?:\/\//i.test(href)) {
    const { openUrl } = await import('@tauri-apps/plugin-opener');
    await openUrl(href).catch((error) => modal.error(String(error)));
  }
}

let configChanged = false;
function onAttachmentConfig(event: Event) {
  configChanged = true;
  config.value = {
    ...DEFAULT_ATTACHMENT_CONFIG,
    ...(event as CustomEvent<AttachmentConfig>).detail
  };
}
let disposed = false;
onMounted(async () => {
  if (props.attachmentConfig === undefined)
    window.addEventListener(
      ATTACHMENT_CONFIG_UPDATED_EVENT,
      onAttachmentConfig
    );
  const [workspace, attachments] = await Promise.all([
    props.workspaceRoot === undefined ? getWorkspaceRoot().catch(() => '') : '',
    props.attachmentConfig === undefined
      ? getAttachmentConfig().catch(() => DEFAULT_ATTACHMENT_CONFIG)
      : DEFAULT_ATTACHMENT_CONFIG
  ]);
  if (disposed) return;
  root.value = workspace;
  if (!configChanged) config.value = attachments;
});
onBeforeUnmount(() => {
  disposed = true;
  window.removeEventListener(
    ATTACHMENT_CONFIG_UPDATED_EVENT,
    onAttachmentConfig
  );
});
defineExpose({ getElement: () => host.value });
</script>

<style lang="scss">
@use '@/styles/markdown';

.md-rendered {
  @include markdown.rendered;
}

.markdown-preview {
  .md-reading-code-copy {
    @apply absolute right-2 top-2 z-10 flex items-center gap-1 rounded border px-2 text-xs;

    height: 26px;
    font-family: var(--app-ui-font-family);
    line-height: 1;
    color: var(--markdown-muted);
    background: var(--code-block-toolbar-bg);
    border-color: var(--code-block-toolbar-border);
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  pre:hover .md-reading-code-copy,
  .md-reading-code-copy:focus-visible {
    opacity: 1;
  }
}
</style>
