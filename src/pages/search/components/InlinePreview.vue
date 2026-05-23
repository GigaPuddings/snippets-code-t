<template>
  <aside class="preview-panel glass-content">
    <div v-if="item" class="preview-body">
      <template v-if="isQuickToolResult">
        <div class="quick-tool-preview">
          <div class="quick-tool-header">
            <div class="quick-tool-title-wrap">
              <div class="quick-tool-icon">
                <img v-if="heroIconSrc" :src="heroIconSrc" :alt="quickToolTitle" />
                <span v-else>{{ heroFallbackText }}</span>
              </div>
              <div class="quick-tool-heading">
                <div class="quick-tool-title">{{ quickToolTitle }}</div>
                <div class="quick-tool-subtitle">quick-tools 根据当前查询直接生成答案</div>
              </div>
            </div>
            <div class="quick-tool-actions">
              <button class="quick-tool-icon-button" type="button" title="复制结果" aria-label="复制结果"
                @click="copyQuickToolResult">
                <Copy theme="outline" size="15" />
              </button>
            </div>
          </div>

          <div class="quick-tool-answer">
            <div class="quick-tool-answer-label">转换结果</div>
            <div class="quick-tool-answer-value">
              <span class="quick-tool-number">{{ quickToolOutputValue }}</span>
              <span v-if="quickToolOutputUnit" class="quick-tool-unit">{{ quickToolOutputUnit }}</span>
            </div>
            <div class="quick-tool-source">{{ quickToolSourceText }}</div>
          </div>

          <div class="quick-tool-rows">
            <div v-for="row in quickToolRows" :key="`${row.label}-${row.value}`" class="quick-tool-row">
              <span class="quick-tool-row-label">{{ row.label }}</span>
              <span class="quick-tool-row-value">{{ row.value }}</span>
            </div>
          </div>

          <div class="quick-tool-command-strip">
            <button class="quick-tool-command" type="button" @click="copyQuickToolResult">
              <span class="quick-tool-key">↵</span>
              <span>复制结果</span>
            </button>
            <button class="quick-tool-command" type="button" @click="copyQuickToolDetails">
              <span class="quick-tool-key">⌘C</span>
              <span>复制明细</span>
            </button>
          </div>

          <footer class="quick-tool-status">
            <span>{{ quickToolFooterLeft }}</span>
            <span>{{ quickToolFooterRight }}</span>
          </footer>
        </div>
      </template>

      <template v-else-if="!isPreviewVisible">
        <!-- 是否预览 -->
        <div v-if="canPreview" class="preview-header-actions">
          <!-- <button v-if="canOpenInConfig" class="preview-config-button" type="button" @click="openInConfig"
            :aria-label="t('searchPreview.openInConfig')" :title="t('searchPreview.openInConfig')">
            <internal-expansion theme="outline" size="14" />
          </button> -->
          <button class="preview-config-button" type="button" @click="togglePreviewVisible"
            :aria-label="t('searchPreview.expandPreview')" :title="t('searchPreview.expandPreview')">
            <preview-close-one theme="outline" size="14" />
          </button>
        </div>

        <div class="info-header">
          <div class="info-icon" :class="infoIconClass">
            <img v-if="heroIconSrc" :src="heroIconSrc" :alt="previewTitle" />
            <span v-else>{{ heroFallbackText }}</span>
          </div>
          <div class="header-meta">
            <div class="title" :title="previewTitle">{{ previewTitle }}</div>
            <div class="subtitle" :title="previewSubtitle">{{ previewSubtitle }}</div>
          </div>
        </div>
        <div v-if="item.summarize === 'file'" class="action-panel">
          <div class="meta-grid">
            <div class="meta-row meta-row-created" :title="fileCreatedText">
              <span class="meta-label">{{ t('searchPreview.createdAt') }}</span>
              <span class="meta-value">{{ fileCreatedText }}</span>
            </div>
            <div class="meta-row meta-row-size" :title="fileSizeText">
              <span class="meta-label">{{ t('searchPreview.category') }}</span>
              <span class="meta-value">{{ fileSizeText }}</span>
            </div>
          </div>
        </div>

        <div v-if="item.summarize === 'code' || item.summarize === 'note'" class="action-panel">
          <div class="info">
            <div :class="[displayTags.length ? ' justify-start' : 'justify-center', 'meta-grid']">
              <div class="meta-row meta-row-created" :title="displayTypeText">
                <span class="meta-label">{{ t('searchPreview.type') }}</span>
                <span class="meta-value">{{ displayTypeText }}</span>
              </div>
              <div class="meta-row meta-row-size" :title="displayCategoryText">
                <span class="meta-label">{{ t('searchPreview.category') }}</span>
                <span class="meta-value">{{ displayCategoryText }}</span>
              </div>
            </div>

            <div v-if="displayTags.length" class="detail-row" :title="displayTagsText">
              <span class="detail-key">{{ t('searchPreview.tags') }}</span>
              <span class="detail-text">{{ displayTagsText }}</span>
            </div>
          </div>
        </div>
        <div v-if="hasSpecialActions" class="action-panel mt-1">
          <div class="special-action-list" :aria-label="t('searchPreview.availableActions')">
            <button v-for="action in specialActions" :key="action.key" type="button" class="special-action-button"
              :class="{ 'special-action-button-primary': action.primary }" :disabled="action.disabled"
              @click="action.run">
              <div class="flex items-center gap-2">
                <span class="file-action-icon">
                  <component :is="action.icon" theme="outline" size="16" />
                </span>
                <span class="file-action-text">{{ action.label }}</span>
              </div>
              <span class="file-action-shortcut">{{ action.shortcut }}</span>
            </button>
          </div>
        </div>
      </template>

      <!-- 预览内容 -->
      <template v-else>
        <div v-if="canPreview" class="preview-expanded-header">
          <div class="expanded-title-wrap">
            <div class="expanded-title">{{ displayTitle }}</div>
          </div>

          <button class="preview-toggle preview-toggle-expanded" type="button" @click="togglePreviewVisible"
            :aria-label="t('searchPreview.collapsePreview')">
            <PreviewOpen theme="outline" size="14" />
          </button>
        </div>
        <div v-if="canPreview" class="preview-content-area">
          <div v-if="isImageFile" class="preview-visual preview-image-area preview-shell">
            <img v-if="filePreviewUrl" :src="filePreviewUrl" :alt="displayTitle" class="preview-image" />
            <div v-else class="preview-empty-inline">{{ t('searchPreview.imagePreviewFailed') }}</div>
          </div>

          <div v-else-if="isTextFile" class="preview-visual preview-text-area preview-shell preview-scroll-area">
            <CodeMirrorEditor :code="displayContent" :dark="isDark" :disabled="true" :autoDestroy="true"
              :codeStyle="{ height: '100%' }" :background="isDark ? '#363636' : '#f0eeee'"
              :status-background="isDark ? '#363636' : undefined" />
          </div>
          <div v-else-if="isCodePreview" class="preview-visual preview-code-area preview-shell preview-scroll-area">
            <CodeMirrorEditor :code="displayContent" :dark="isDark" :disabled="true" :autoDestroy="true"
              :codeStyle="{ height: '100%' }" :background="isDark ? '#363636' : '#f0eeee'"
              :status-background="isDark ? '#363636' : undefined" />
          </div>

          <div v-else-if="isNotePreview" class="preview-visual preview-note-area preview-shell preview-scroll-area"
            v-html="noteHtml"></div>

          <div v-else class="preview-visual preview-text-area preview-shell preview-scroll-area">
            {{ displayContent }}
          </div>
        </div>
      </template>
    </div>

    <div v-else class="preview-empty-state">
      <div class="preview-empty-icon">⌘</div>
      <p class="preview-empty-title">{{ t('searchPreview.noPreviewItem') }}</p>
      <p class="preview-empty-description">{{ t('searchPreview.selectResultHint') }}</p>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import {
  PreviewCloseOne,
  PreviewOpen,
  ArrowRight,
  Home,
  More,
  Copy,
  Search,
  LinkTwo,
  Share,
  FolderOpen,
  Permissions
} from '@icon-park/vue-next';
import { convertFileSrc, invoke } from '@tauri-apps/api/core';
import { openFileWithDefaultApp, openFileWithOtherWays, revealFileInFolder } from '@/utils/file-system';
import { closeWindowByLabel } from '@/utils/window-shortcuts';
import { useI18n } from 'vue-i18n';
import { useConfigurationStore } from '@/store';
import { extractPlainText } from '@/utils/text';
import { markdownToHtml, resolvePreviewImageUrls } from '@/components/TipTapEditor/utils/markdown';
import type { ContentType } from '@/types/models';
import CodeMirrorEditor from '@/components/CodeMirrorEditor/index.vue';
import { getSearchResultIcon } from '../composables/useSearchResultIcon';
import {
  getSearchResultDisplayPath,
  getSearchResultLaunchPath,
  toDisplayText
} from '../composables/useSearchResultPaths';
import { logger } from '@/utils/logger';
import { formatSnippetForCopy, type SnippetCopyFormat } from '@/utils/snippetCopyFormats';

const props = defineProps<{
  item: ContentType | null;
}>();

const { t } = useI18n();
const store = useConfigurationStore();
const isPreviewVisible = ref(false);

type QuickToolRow = {
  label: string;
  value: string;
};

const isDark = computed(() => store.effectiveDark);
const itemMetadata = computed<Record<string, unknown>>(() => props.item?.metadata ?? {});
const displayTitle = computed(() => props.item?.title?.trim() || getFallbackTitle(props.item));
const displayBookmarkUrl = computed(() => props.item?.content?.trim() || '');
const displayTypeText = computed(() => {
  const item = props.item;
  if (!item) return '';
  if (item.type === 'code') return t('searchResult.code');
  if (item.type === 'note') return t('searchResult.notes');
  if (item.summarize === 'file') return t('searchResult.files');
  if (item.summarize === 'search') return t('searchResult.search');
  return item.summarize || '';
});
const previewTitle = computed(() => displayTitle.value || filePreviewTitle.value);
const previewSubtitle = computed(() => displayPath.value || fileSubtitle.value || displayBookmarkUrl.value || displayTypeText.value);
const appLaunchPath = computed(() => getSearchResultLaunchPath(props.item));
const canOpenApp = computed(() => Boolean(appLaunchPath.value));
const canOpenAppAsAdmin = computed(() => Boolean(appLaunchPath.value));
const canRevealAppFolder = computed(() => Boolean(appLaunchPath.value || displayPath.value));
const canOpenBookmark = computed(() => Boolean(displayBookmarkUrl.value));
const canCopyBookmarkUrl = computed(() => Boolean(displayBookmarkUrl.value));
const canSearchBookmark = computed(() => Boolean(displayTitle.value || displayBookmarkUrl.value));
const canOpenFile = computed(() => Boolean(displayPath.value));
const canRevealFile = computed(() => Boolean(displayPath.value));
const canOpenFileWithOtherWays = computed(() => Boolean(displayPath.value));
const canOpenInConfig = computed(() => Boolean(displayPath.value));
const canCopyCodeSnippet = computed(() => props.item?.type === 'code' && Boolean(normalizedContent.value));
const hasSpecialActions = computed(() => specialActions.value.length > 0);
const displayTagsText = computed(() => displayTags.value.join(', '));
const fileName = computed(() => {
  const content = props.item?.content ?? '';
  const segments = content.split(/[\\/]/).filter(Boolean);
  return segments.at(-1) || displayTitle.value;
});
const fileExtension = computed(() => fileName.value.split('.').pop()?.toLowerCase() || '');
const isFilePreview = computed(() => props.item?.summarize === 'file');
const isImageFile = computed(() => ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg'].includes(fileExtension.value));
const isTextFile = computed(() => ['txt', 'md', 'markdown', 'json', 'log', 'csv', 'toml', 'yaml', 'yml', 'xml', 'html', 'css', 'scss', 'less', 'js', 'ts', 'tsx', 'jsx', 'vue', 'py', 'rs', 'go', 'java', 'c', 'cc', 'cpp', 'h', 'hpp', 'sql', 'sh', 'bash', 'ini', 'env'].includes(fileExtension.value));
const isNotePreview = computed(() => props.item?.type === 'note');
const isAppOrBookmark = computed(() => props.item?.summarize === 'app' || props.item?.summarize === 'bookmark');
const canPreview = computed(() => !isAppOrBookmark.value && !!props.item && (isImageFile.value || isTextFile.value || isNotePreview.value || isCodePreview.value));
const isCodePreview = computed(() => props.item?.type === 'code' || (!isFilePreview.value && !isNotePreview.value && props.item?.summarize !== 'app' && props.item?.summarize !== 'bookmark' && props.item?.summarize !== 'search'));
const displayTags = computed(() => props.item?.tags?.filter(Boolean) ?? []);
const displayPath = computed(() => getSearchResultDisplayPath(props.item));
const fileSubtitle = computed(() => {
  if (!props.item || props.item.summarize !== 'file') return '';
  const path = displayPath.value;
  const name = displayTitle.value;
  return path && name && path !== name ? path : path || name;
});
const filePreviewTitle = computed(() => displayTitle.value || fileSubtitle.value || '文件');
const fileCreatedText = computed(() => {
  const metadata = props.item?.metadata as Record<string, unknown> | undefined;
  const raw = metadata?.created_at || metadata?.created || props.item?.created_at;
  return formatDateText(raw);
});
const fileSizeText = computed(() => {
  const metadata = props.item?.metadata as Record<string, unknown> | undefined;
  const rawSize = metadata?.size;
  if (typeof rawSize === 'number') return formatFileSize(rawSize);
  if (typeof rawSize === 'string' && rawSize.trim()) {
    const parsed = Number(rawSize);
    return Number.isFinite(parsed) ? formatFileSize(parsed) : rawSize;
  }
  return '';
});

const displayCategoryText = computed(() => {
  const item = props.item;
  if (!item) return '';
  const category = toDisplayText(item.category_name);
  if (category) return category;
  const categoryId = item.category_id;
  return categoryId === undefined || categoryId === null ? '' : String(categoryId);
});

const specialActions = computed(() => {
  if (!props.item) return [];

  const actionSets: Record<string, Array<{ key: string; label: string; shortcut: string; icon: any; disabled: boolean; primary?: boolean; run: () => Promise<void> }>> = {
    app: [
      { key: 'open', label: t('searchPreview.openApp'), shortcut: 'Enter', icon: Share, disabled: !canOpenApp.value, primary: true, run: openApp },
      { key: 'admin', label: t('searchPreview.openAppAsAdmin'), shortcut: 'F1', icon: Permissions, disabled: !canOpenAppAsAdmin.value, run: openAppAsAdmin },
      { key: 'folder', label: t('searchPreview.openAppFolder'), shortcut: 'F2', icon: FolderOpen, disabled: !canRevealAppFolder.value, run: revealAppFolder }
    ],
    bookmark: [
      { key: 'open', label: t('searchPreview.openWebpage'), shortcut: 'Enter', icon: LinkTwo, disabled: !canOpenBookmark.value, primary: true, run: openBookmark },
      { key: 'copy', label: t('searchPreview.copyUrl'), shortcut: 'F1', icon: Copy, disabled: !canCopyBookmarkUrl.value, run: copyBookmarkUrl },
      { key: 'search', label: t('searchPreview.search'), shortcut: 'F2', icon: Search, disabled: !canSearchBookmark.value, run: searchBookmark }
    ],
    file: [
      { key: 'open', label: t('searchPreview.open'), shortcut: 'Enter', icon: ArrowRight, disabled: !canOpenFile.value, run: openFile },
      { key: 'reveal', label: t('searchPreview.revealFileLocation'), shortcut: 'F1', icon: Home, disabled: !canRevealFile.value, run: revealFile },
      { key: 'other', label: t('searchPreview.openWithOtherWays'), shortcut: 'F2', icon: More, disabled: !canOpenFileWithOtherWays.value, run: openFileWithOtherWaysAction }
    ],
    code: [
      { key: 'copyRaw', label: t('searchPreview.copyRawCode'), shortcut: 'Enter', icon: Copy, disabled: !canCopyCodeSnippet.value, primary: true, run: () => copySnippetAs('raw') },
      { key: 'copyMarkdown', label: t('searchPreview.copyMarkdownCode'), shortcut: 'F1', icon: Copy, disabled: !canCopyCodeSnippet.value, run: () => copySnippetAs('markdown') },
      { key: 'copyVsCode', label: t('searchPreview.copyVsCodeSnippet'), shortcut: 'F2', icon: Copy, disabled: !canCopyCodeSnippet.value, run: () => copySnippetAs('vscode') },
      { key: 'openInConfig', label: t('searchPreview.openInConfig'), shortcut: 'F3', icon: Home, disabled: !canOpenInConfig.value, run: openInConfig }
    ],
    note: [
      { key: 'openInConfig', label: t('searchPreview.openInConfig'), shortcut: 'Enter', icon: Home, disabled: !canOpenInConfig.value, primary: true, run: openInConfig }
    ]
  };

  return actionSets[props.item.summarize ?? ''] ?? [];
});

const actionButtonRefs = ref<Array<HTMLElement | null>>([]);
const activeActionIndex = ref(-1);
const desktopPreviewText = ref('');
const desktopPreviewMessage = ref('');
const desktopPreviewLoading = ref(false);

const normalizedContent = computed(() => {
  const item = props.item;
  if (!item) return '';

  if (item.summarize === 'file') {
    return desktopPreviewText.value.replace(/\r\n/g, '\n').trim();
  }

  if (!item.content) return '';
  if (item.type === 'note' && item.format === 'html') return extractPlainText(item.content).replace(/\r\n/g, '\n').trim();
  return item.content.replace(/\r\n/g, '\n').trim();
});

const displayContent = computed(() => {
  if (desktopPreviewLoading.value) return t('searchPreview.loading');

  const normalized = normalizedContent.value;
  if (normalized) return normalized.length > 1600 ? `${normalized.slice(0, 1600)}…` : normalized;

  if (props.item?.summarize === 'file') return desktopPreviewMessage.value || t('searchPreview.noPreviewContent');
  return t('searchPreview.noContent');
});

const isQuickToolResult = computed(() => {
  const source = itemMetadata.value.source;
  return props.item?.summarize === 'tool' && source === 'quick-tools';
});

const quickToolTitle = computed(() => toDisplayText(itemMetadata.value.toolName) || displayTypeText.value || 'Quick Tool');
const quickToolOutputValue = computed(() => toDisplayText(itemMetadata.value.outputValue) || normalizedContent.value || displayTitle.value);
const quickToolOutputUnit = computed(() => toDisplayText(itemMetadata.value.outputUnit));
const quickToolInput = computed(() => toDisplayText(itemMetadata.value.input) || toDisplayText(itemMetadata.value.query));
const quickToolProvider = computed(() => toDisplayText(itemMetadata.value.provider));
const quickToolDate = computed(() => toDisplayText(itemMetadata.value.date));
const quickToolRows = computed<QuickToolRow[]>(() => {
  const rows = itemMetadata.value.rows;
  if (Array.isArray(rows)) {
    return rows
      .map((row) => {
        if (!row || typeof row !== 'object') return null;
        const sourceRow = row as Record<string, unknown>;
        const label = toDisplayText(sourceRow.label);
        const value = toDisplayText(sourceRow.value);
        return label && value ? { label, value } : null;
      })
      .filter((row): row is QuickToolRow => Boolean(row));
  }

  return [
    { label: '原始输入', value: quickToolInput.value || displayTitle.value },
    { label: '工具类型', value: quickToolTitle.value },
    { label: '展示策略', value: '结果列表显示摘要，右侧展示结构化答案' }
  ];
});
const quickToolSourceText = computed(() => {
  const parts = [
    quickToolInput.value,
    quickToolDate.value ? `日期 ${quickToolDate.value}` : '',
    quickToolProvider.value ? `数据由 ${quickToolProvider.value} 提供` : '数据由 quick-tools 提供'
  ].filter(Boolean);

  return parts.join(' · ');
});
const quickToolFooterLeft = computed(() => '结果 1 / 1');
const quickToolFooterRight = computed(() => '已缓存');

const getQuickToolResultText = (): string => {
  const value = [quickToolOutputValue.value, quickToolOutputUnit.value].filter(Boolean).join(' ');
  return value || props.item?.content || '';
};

async function copyQuickToolResult() {
  const text = getQuickToolResultText();
  if (!text) return;
  await navigator.clipboard.writeText(text);
}

async function copyQuickToolDetails() {
  const lines = [
    `${quickToolTitle.value}: ${getQuickToolResultText()}`,
    quickToolSourceText.value,
    ...quickToolRows.value.map((row) => `${row.label}: ${row.value}`)
  ].filter(Boolean);

  await navigator.clipboard.writeText(lines.join('\n'));
}

const noteHtml = computed(() => {
  if (!props.item || props.item.type !== 'note' || !props.item.content) return '';

  const notePath = displayPath.value || props.item.file_path || (props.item.metadata as Record<string, unknown> | undefined)?.file_path;
  if (typeof notePath !== 'string' || !notePath.trim()) {
    return markdownToHtml(props.item.content);
  }

  try {
    const html = markdownToHtml(props.item.content);
    return resolvePreviewImageUrls(html, '', notePath);
  } catch (error) {
    console.warn('[搜索预览] 笔记内容预览渲染失败:', error);
    return `<div class="note-fallback">${displayContent.value}</div>`;
  }
});

const filePreviewUrl = computed(() => {
  if (!props.item?.content || !isImageFile.value) return '';
  try {
    return convertFileSrc(props.item.content);
  } catch {
    return '';
  }
});

watch(
  () => props.item,
  async (item) => {
    desktopPreviewText.value = '';
    desktopPreviewMessage.value = '';
    desktopPreviewLoading.value = false;

    if (!item || item.summarize !== 'file') return;
    const path = displayPath.value;
    if (!path) return;

    desktopPreviewLoading.value = true;
    try {
      const preview = await invoke<any>('preview_desktop_file', { filePath: path });
      desktopPreviewText.value = typeof preview?.textContent === 'string' ? preview.textContent : '';
      desktopPreviewMessage.value = typeof preview?.message === 'string' ? preview.message : '';
    } catch {
      desktopPreviewMessage.value = t('searchPreview.previewLoadFailed');
    } finally {
      desktopPreviewLoading.value = false;
    }
  },
  { immediate: true }
);

const heroIconState = computed(() => getSearchResultIcon(props.item));
const heroIconSrc = computed(() => heroIconState.value.src);

const infoIconClass = computed(() => {
  if (props.item?.summarize !== 'file') return '';
  return 'file-preview-icon';
});

const heroFallbackText = computed(() => {
  if (props.item?.summarize === 'file') return 'F';
  return heroIconState.value.fallbackText || '∎';
});

async function closeAndRun(action: () => Promise<void> | void) {
  if (!props.item) return;
  await closeWindowByLabel('main');
  await action();
}

async function openApp() {
  if (!canOpenApp.value || !appLaunchPath.value) return;
  await closeAndRun(() => invoke('open_app_command', { appPath: appLaunchPath.value }));
}

async function openAppAsAdmin() {
  if (!canOpenAppAsAdmin.value || !appLaunchPath.value) return;
  await closeAndRun(() => invoke('open_app_as_admin_command', { appPath: appLaunchPath.value }));
}

async function revealAppFolder() {
  const targetPath = appLaunchPath.value || displayPath.value;
  if (!canRevealAppFolder.value || !targetPath) return;
  await closeAndRun(() => invoke('open_app_file_location_command', { appPath: targetPath }));
}

async function openBookmark() {
  if (!canOpenBookmark.value || !displayBookmarkUrl.value) return;
  await closeAndRun(() => invoke('open_url', { url: displayBookmarkUrl.value }));
}

async function openFile() {
  if (!canOpenFile.value || !displayPath.value) return;
  await closeAndRun(() => openFileWithDefaultApp(displayPath.value));
}

async function revealFile() {
  if (!canRevealFile.value || !displayPath.value) return;
  await closeAndRun(() => revealFileInFolder(displayPath.value));
}

async function openFileWithOtherWaysAction() {
  if (!canOpenFileWithOtherWays.value || !displayPath.value) return;
  await closeAndRun(() => openFileWithOtherWays(displayPath.value));
}

async function copySnippetAs(format: SnippetCopyFormat) {
  if (!canCopyCodeSnippet.value || !props.item) return;

  try {
    const text = formatSnippetForCopy(format, {
      title: displayTitle.value,
      content: normalizedContent.value
    });
    await navigator.clipboard.writeText(text);
  } catch (error) {
    logger.error('[搜索预览] 复制代码片段失败:', error);
  }
}

async function copyBookmarkUrl() {
  if (!canCopyBookmarkUrl.value || !displayBookmarkUrl.value) return;
  await navigator.clipboard.writeText(displayBookmarkUrl.value);
}

async function searchBookmark() {
  if (!canSearchBookmark.value) return;
  const keyword = (displayTitle.value || displayBookmarkUrl.value).trim();
  if (!keyword) return;
  await invoke('open_url', { url: `https://www.google.com/search?q=${encodeURIComponent(keyword)}` });
}

async function openInConfig() {
  if (!canOpenInConfig.value || !props.item) return;

  try {
    if (props.item.type === 'note') {
      const navigationData = {
        fragmentId: props.item.id,
        categoryId: props.item.category_id, 
        timestamp: Date.now()
      };
      localStorage.setItem('pendingNavigation', JSON.stringify(navigationData));
    } else {
      const snippetData = {
        fragmentId: props.item.id,
        content: props.item.content,
        categoryId: props.item.category_id,
        timestamp: Date.now()
      };
      localStorage.setItem('pendingSnippetOpen', JSON.stringify(snippetData));
    }

    await closeWindowByLabel('main');

    const { WebviewWindow } = await import('@tauri-apps/api/webviewWindow');
    const configWindow = await WebviewWindow.getByLabel('config');

    if (configWindow) {
      await configWindow.show();
      await configWindow.setFocus();
      await configWindow.emit('check-pending-navigation', {});
      await configWindow.emit('check-pending-snippet-open', {});
    } else {
      await invoke('hotkey_config_command');
    }
  } catch (err) {
    localStorage.removeItem('pendingNavigation');
    localStorage.removeItem('pendingSnippetOpen');
    console.error('[搜索预览] 打开 config 失败:', err);
  }
}

function togglePreviewVisible() {
  isPreviewVisible.value = !isPreviewVisible.value;
}

function handleActionShortcut(event: KeyboardEvent) {
  if (!props.item) return;

  if (event.key === 'Enter') {
    if (!isAppOrBookmark.value && !isFilePreview.value) return;
    event.preventDefault();
    event.stopPropagation();
    specialActions.value[0]?.run();
    return;
  }

  if (event.key === 'F1') {
    event.preventDefault();
    event.stopPropagation();
    specialActions.value[1]?.run();
    return;
  }

  if (event.key === 'F2') {
    event.preventDefault();
    event.stopPropagation();
    specialActions.value[2]?.run();
    return;
  }

  if (event.key === 'F3') {
    event.preventDefault();
    event.stopPropagation();
    specialActions.value[3]?.run();
    return;
  }
}

function handlePreviewToggleShortcut(event: KeyboardEvent) {
  if (!props.item) return;
  if (event.type !== 'keyup') return;
  if (event.key !== ' ' && event.code !== 'Space') return;
  if (!canPreview.value || props.item.summarize === 'app' || props.item.summarize === 'bookmark') return;

  event.preventDefault();
  event.stopPropagation();
  togglePreviewVisible();
}

watch(
  () => props.item,
  () => {
    activeActionIndex.value = -1;
    actionButtonRefs.value = [];
  }
);

onMounted(() => {
  window.addEventListener('keydown', handleActionShortcut, true);
  window.addEventListener('keyup', handlePreviewToggleShortcut, true);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleActionShortcut, true);
  window.removeEventListener('keyup', handlePreviewToggleShortcut, true);
});

function getFallbackTitle(item: ContentType | null): string {
  if (!item) return '预览';
  const content = toDisplayText(item.content);
  return content.split('/')[2] || content || '未命名';
}

function formatFileSize(size: number): string {
  if (!Number.isFinite(size) || size < 0) return '';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let value = size;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const precision = value >= 10 || unitIndex === 0 ? 0 : 1;
  return `${value.toFixed(precision)} ${units[unitIndex]}`;
}

function formatDateText(value: unknown): string {
  const raw = toDisplayText(value);
  if (!raw) return '';

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;

  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, '0');
  const day = String(parsed.getDate()).padStart(2, '0');
  const hour = String(parsed.getHours()).padStart(2, '0');
  const minute = String(parsed.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hour}:${minute}`;
}

</script>

<style lang="scss" scoped>
.preview-panel {
  @apply bg-search px-5 py-4 h-full min-h-0 flex flex-col border-l border-search overflow-hidden;

  .preview-body {
    @apply relative flex-1 min-h-0 flex flex-col overflow-hidden;
  }

  .quick-tool-preview {
    @apply flex flex-col h-full min-h-0 overflow-hidden;
  }

  .quick-tool-header {
    @apply flex items-start justify-between gap-4 flex-shrink-0;
  }

  .quick-tool-title-wrap {
    @apply flex items-center gap-3 min-w-0;
  }

  .quick-tool-icon {
    @apply flex items-center justify-center w-11 h-11 flex-shrink-0 rounded-xl border border-search bg-search-hover text-sm font-semibold text-search-secondary overflow-hidden shadow-sm;

    img {
      @apply w-full h-full object-contain p-2;
    }
  }

  .quick-tool-heading {
    @apply min-w-0;
  }

  .quick-tool-title {
    @apply text-2xl leading-tight font-bold text-search truncate;
  }

  .quick-tool-subtitle {
    @apply mt-1 text-sm leading-5 text-search-secondary truncate;
  }

  .quick-tool-actions {
    @apply flex items-center gap-2 flex-shrink-0;
  }

  .quick-tool-icon-button {
    @apply flex items-center justify-center w-9 h-9 rounded-lg bg-search-hover text-search-secondary border border-search hover:text-search transition-colors;
  }

  .quick-tool-answer {
    @apply mt-4 rounded-xl border border-search bg-search-hover;
    padding: 18px 20px;
  }

  .quick-tool-answer-label {
    @apply text-sm font-semibold text-search-secondary;
  }

  .quick-tool-answer-value {
    @apply mt-2 flex items-baseline gap-3 min-w-0;
  }

  .quick-tool-number {
    @apply text-search font-bold leading-none;
    font-size: 40px;
    letter-spacing: 0;
  }

  .quick-tool-unit {
    @apply text-xl font-bold text-search-secondary;
  }

  .quick-tool-source {
    @apply mt-3 text-sm text-search-secondary truncate;
  }

  .quick-tool-rows {
    @apply mt-4 overflow-hidden rounded-xl border border-search flex-shrink-0;
  }

  .quick-tool-row {
    @apply grid grid-cols-[122px_minmax(0,1fr)] items-center bg-search border-b border-search text-sm;
    min-height: 40px;
    padding: 0 14px;

    &:last-child {
      @apply border-b-0;
    }
  }

  .quick-tool-row-label {
    @apply text-search-secondary;
  }

  .quick-tool-row-value {
    @apply text-search font-semibold truncate;
  }

  .quick-tool-command-strip {
    @apply mt-4 flex flex-wrap gap-2 flex-shrink-0;
  }

  .quick-tool-command {
    @apply inline-flex items-center gap-2 h-8 px-3 rounded-lg border border-search bg-search text-sm font-semibold text-search-secondary hover:text-search hover:bg-search-hover transition-colors;
  }

  .quick-tool-key {
    @apply inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded border border-search bg-search-hover text-xs text-search-secondary;
  }

  .quick-tool-status {
    @apply mt-auto flex items-center justify-between border-t border-search text-sm text-search-secondary flex-shrink-0;
    padding-top: 9px;
  }

  .preview-header-actions {
    @apply absolute right-0 top-0 z-10 flex items-center gap-2;
  }

  .preview-config-button {
    @apply flex items-center justify-center w-9 h-9 rounded-lg bg-search-hover text-search-secondary border border-search flex-shrink-0 hover:text-search transition-colors;
  }

  .special-action-button,
  .file-action-button {
    &:focus-visible {
      @apply outline-none;
    }
  }

  .special-action-button.active,
  .file-action-button.active {
    @apply bg-search-hover text-search border-search;
  }

  .info-header {
    @apply relative flex items-center gap-3 flex-shrink-0 min-w-0;
    min-height: 44px;
    padding-right: 46px;

    .info-icon {
      @apply w-11 h-11 rounded-xl bg-search-hover border border-search flex items-center justify-center text-sm font-semibold text-search-secondary overflow-hidden shadow-sm flex-shrink-0;

      img {
        @apply w-full h-full object-contain p-2;
      }

      &.file-preview-icon {
        @apply bg-search-hover border-search shadow-sm text-search-secondary rounded-xl;
      }
    }

    .header-meta {
      @apply flex flex-col gap-1 min-w-0;

      .title {
        @apply w-full text-2xl leading-tight font-bold text-search overflow-hidden whitespace-nowrap text-ellipsis;
      }

      .subtitle {
        @apply w-full text-sm leading-5 text-search-secondary overflow-hidden whitespace-nowrap text-ellipsis;
      }
    }
  }

  .special-chip {
    @apply inline-flex items-center h-8 rounded-full px-3 text-sm text-search border border-search bg-search-hover;
  }

  .special-actions,
  .special-action-list {
    @apply flex flex-wrap gap-2;
  }

  .special-action-button {
    @apply inline-flex items-center justify-between gap-3 h-8 rounded-lg bg-search text-sm font-semibold text-search-secondary transition-colors hover:bg-search-hover hover:text-search border border-search px-3;
    max-width: 100%;

    .file-action-text {
      @apply truncate;
    }

    .file-action-shortcut,
    .shortcut {
      @apply inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded border border-search bg-search-hover;
      @apply text-search-secondary text-xs;
    }
  }

  .special-action-button-primary {
    @apply bg-search text-search border-search hover:bg-search-hover;

    .shortcut {
      @apply text-search-secondary;
    }
  }

  .special-action-button:disabled {
    @apply opacity-40 cursor-not-allowed hover:bg-search-hover;
  }

  .action-button {
    @apply flex-1 inline-flex items-center justify-center h-8 rounded-md bg-search-hover text-[11px] text-search-secondary transition-colors hover:text-search hover:bg-search border border-search px-2;
  }

  .action-button:disabled {
    @apply opacity-40 cursor-not-allowed hover:bg-search-hover hover:text-search-secondary;
  }

  .expanded-title-wrap {
    @apply flex items-start gap-3 min-w-0 pr-9;
  }

  .preview-expanded-header {
    @apply relative flex items-center justify-between gap-3 flex-shrink-0 mb-4;
    min-height: 36px;
  }

  .expanded-title {
    @apply text-lg font-bold text-search truncate;
  }

  .preview-toggle {
    @apply absolute right-0 top-0 z-10 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-search-hover text-search-secondary border border-search flex-shrink-0 hover:text-search transition-colors;
  }

  .action-panel {
    @apply flex flex-col gap-3 flex-shrink-0;
    margin-top: 16px;

    .info {
      @apply flex flex-col gap-0;
    }

    .meta-grid {
      @apply grid gap-0 overflow-hidden rounded-xl border border-search bg-search;
    }

    .meta-row {
      @apply grid grid-cols-[122px_minmax(0,1fr)] items-center gap-0 min-w-0 border-b border-search;
      min-height: 40px;
      padding: 0 14px;

      &:last-child {
        @apply border-b-0;
      }
    }

    .meta-label {
      @apply text-sm text-search-secondary whitespace-nowrap;
    }

    .meta-value {
      @apply min-w-0 text-sm leading-5 text-search font-semibold truncate;
    }

    .meta-row-created {
      @apply col-span-1;
    }

    .meta-row-size {
      @apply col-span-1;
    }

    .detail-row {
      @apply grid grid-cols-[122px_minmax(0,1fr)] items-center min-w-0 border border-search border-t-0 bg-search;
      min-height: 40px;
      padding: 0 14px;

      .detail-key {
        @apply text-sm text-search-secondary whitespace-nowrap;
      }

      .detail-text {
        @apply min-w-0 text-sm leading-5 text-search font-semibold truncate;
      }
    }

    .action-list {
      @apply grid gap-2;
    }

    .action-button {
      @apply w-full inline-flex items-center gap-3 rounded-xl border border-search bg-search-hover px-4 py-2 text-left text-sm text-search transition-colors hover:bg-search;

      &:focus-visible {
        @apply outline-none ring-2 ring-blue-400/60;
      }
    }

    .action-button-primary {
      @apply bg-search-hover border-search text-search hover:bg-search;
    }

    .action-icon {
      @apply w-5 text-base leading-none opacity-90 flex-shrink-0;
    }

    .action-text {
      @apply flex-1 min-w-0;
    }

    .action-shortcut {
      @apply text-xs text-search-secondary flex-shrink-0 whitespace-nowrap;
    }
  }

  .preview-content-area {
    @apply flex-1 min-h-0 rounded-xl border border-search bg-search-hover p-2 overflow-hidden flex flex-col;
  }

  .preview-shell,
  .preview-visual {
    @apply min-h-0 overflow-auto flex-1;
  }

  .preview-image-area {
    @apply flex items-center justify-center;
  }

  .preview-image {
    @apply max-w-full max-h-full object-contain rounded-md;
  }

  .preview-text-area,
  .preview-note-area,
  .preview-scroll-area {
    @apply text-xs leading-5 text-search whitespace-pre-wrap break-words overflow-auto;
  }

  .preview-note-area :deep(.note-fallback) {
    @apply whitespace-pre-wrap break-words text-xs leading-5 text-search;
  }

  .preview-text-area {
    @apply max-h-full;
  }

  .preview-code-area {
    @apply min-h-0;

    :deep(.cm-editor),
    :deep(.cm-scroller) {
      @apply h-full;
    }
  }

  .preview-empty-inline {
    @apply text-xs text-search-secondary;
  }

  .preview-empty-state {
    @apply flex-1 flex flex-col items-center justify-center text-center px-4;

    .preview-empty-icon {
      @apply w-10 h-10 rounded-full bg-search-hover text-search flex items-center justify-center text-lg mb-3;
    }

    .preview-empty-title {
      @apply text-sm font-medium text-search mb-2;
    }

    .preview-empty-description {
      @apply text-xs leading-5 text-search-secondary max-w-[220px];
    }
  }
}

.preview-fade-enter-active,
.preview-fade-leave-active {
  transition: all 0.15s ease;
}

.preview-fade-enter-from,
.preview-fade-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>
