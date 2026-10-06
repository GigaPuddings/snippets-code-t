<template>
  <aside
    class="backlink-sidebar"
    :class="{ dark: dark, 'is-visible': show }"
    :aria-label="t('backlinks.title')"
    :aria-hidden="!show"
    :inert="!show"
  >
    <div class="backlink-sidebar-header">
      <h3 class="backlink-sidebar-title">{{ t('backlinks.title') }}</h3>
      <div class="backlink-sidebar-actions">
        <!-- 搜索按钮 -->
        <button
          class="ui-icon-button ui-icon-button--small shrink-0"
          type="button"
          @click="toggleSearch"
          :title="$t('noteEditor.search')"
          :aria-label="t('noteEditor.search')"
          :aria-pressed="showSearch"
        >
          <Search theme="outline" size="16" />
        </button>
        <button
          class="ui-icon-button ui-icon-button--small shrink-0"
          type="button"
          @click="$emit('close')"
          :title="t('common.close')"
          :aria-label="t('common.close')"
        >
          <CloseSmall theme="outline" size="18" />
        </button>
      </div>
    </div>

    <!-- 搜索框 -->
    <div v-show="showSearch" class="backlink-search-box">
      <Search class="search-icon" theme="outline" size="16" />
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        class="search-input"
        :placeholder="t('backlinks.searchPlaceholder')"
        :aria-label="t('backlinks.searchPlaceholder')"
      />
      <button
        v-if="searchQuery"
        type="button"
        class="ui-icon-button h-ui-control-sm w-ui-control-sm shrink-0"
        :aria-label="t('common.clear')"
        @click="clearSearch"
      >
        <CloseSmall theme="outline" size="16" />
      </button>
    </div>

    <div class="backlink-sidebar-content">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>{{ t('common.loading') }}</p>
      </div>

      <!-- 内容区域 -->
      <div v-else class="backlink-sections">
        <!-- 链接当前文件 -->
        <div class="backlink-section">
          <div class="section-header">
            <h4 class="section-title">{{ t('backlinks.linkedReferences') }}</h4>
            <span class="count-badge">
              {{ filteredLinkedReferences.length }}
            </span>
          </div>
          <div
            v-if="filteredLinkedReferences.length === 0 && !searchQuery"
            class="empty-state"
          >
            {{ t('backlinks.noLinkedReferences') }}
          </div>
          <div
            v-else-if="filteredLinkedReferences.length === 0 && searchQuery"
            class="empty-state"
          >
            {{ t('noteEditor.noSearchResults') }}
          </div>
          <div v-else class="backlink-list">
            <button
              v-for="item in filteredLinkedReferences"
              :key="item.id"
              class="backlink-item"
              type="button"
              @click="handleNavigate(item.id)"
            >
              <span class="item-header">
                <span
                  class="item-title"
                  v-html="highlightSearchText(item.title)"
                ></span>
                <span class="item-count">
                  {{ item.occurrences }}{{ t('backlinks.occurrences') }}
                </span>
              </span>
              <span
                class="item-preview"
                v-html="
                  highlightSearchInPreview(
                    highlightWikilink(item.preview, currentTitle)
                  )
                "
              ></span>
            </button>
          </div>
        </div>

        <!-- 提及当前文件名 -->
        <div class="backlink-section">
          <div class="section-header">
            <h4 class="section-title">{{ t('backlinks.unlinkedMentions') }}</h4>
            <span class="count-badge">
              {{ filteredUnlinkedMentions.length }}
            </span>
          </div>
          <div
            v-if="filteredUnlinkedMentions.length === 0 && !searchQuery"
            class="empty-state"
          >
            {{ t('backlinks.noUnlinkedMentions') }}
          </div>
          <div
            v-else-if="filteredUnlinkedMentions.length === 0 && searchQuery"
            class="empty-state"
          >
            {{ t('noteEditor.noSearchResults') }}
          </div>
          <div v-else class="backlink-list">
            <button
              v-for="item in filteredUnlinkedMentions"
              :key="item.id"
              class="backlink-item"
              type="button"
              @click="handleNavigate(item.id)"
            >
              <span class="item-header">
                <span
                  class="item-title"
                  v-html="highlightSearchText(item.title)"
                ></span>
                <span class="item-count">
                  {{ item.occurrences }}{{ t('backlinks.occurrences') }}
                </span>
              </span>
              <span
                class="item-preview"
                v-html="
                  highlightSearchInPreview(
                    highlightMention(item.preview, currentTitle)
                  )
                "
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CloseSmall, Search } from '@icon-park/vue-next';
import { findBacklinks, findUnlinkedMentions } from '@/utils/wikilink-updater';

interface BacklinkItem {
  id: number | string; // 支持数字 ID 和文件路径
  title: string;
  occurrences: number;
  preview: string;
}

interface Props {
  show: boolean;
  dark?: boolean;
  currentTitle: string;
  currentFragmentId?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  currentFragmentId: undefined
});

const emit = defineEmits<{
  close: [];
  navigate: [id: number | string, searchTitle: string];
}>();

const { t } = useI18n();

const loading = ref(false);
const linkedReferences = ref<BacklinkItem[]>([]);
const unlinkedMentions = ref<BacklinkItem[]>([]);
const searchQuery = ref('');
const showSearch = ref(false);
const searchInputRef = ref<HTMLInputElement | null>(null);

const regexCache = new Map<string, RegExp>();

// 搜索功能
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    nextTick(() => searchInputRef.value?.focus());
  } else {
    searchQuery.value = '';
  }
};

const clearSearch = () => {
  searchQuery.value = '';
};

// 过滤反向链接
const filteredLinkedReferences = computed(() => {
  if (!searchQuery.value.trim()) {
    return linkedReferences.value;
  }

  const query = searchQuery.value.toLowerCase();
  return linkedReferences.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.preview.toLowerCase().includes(query)
  );
});

// 过滤未链接提及
const filteredUnlinkedMentions = computed(() => {
  if (!searchQuery.value.trim()) {
    return unlinkedMentions.value;
  }

  const query = searchQuery.value.toLowerCase();
  return unlinkedMentions.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.preview.toLowerCase().includes(query)
  );
});

// 高亮搜索文本
const highlightSearchText = (text: string): string => {
  if (!searchQuery.value.trim()) return text;

  const regex = new RegExp(`(${escapeRegExp(searchQuery.value)})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
};

// 在预览中高亮搜索文本（保留已有的高亮）
const highlightSearchInPreview = (html: string): string => {
  if (!searchQuery.value.trim()) return html;

  // 创建临时 div 来解析 HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // 递归处理文本节点
  const highlightTextNodes = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (text.toLowerCase().includes(searchQuery.value.toLowerCase())) {
        const regex = new RegExp(`(${escapeRegExp(searchQuery.value)})`, 'gi');
        const highlightedHTML = text.replace(
          regex,
          '<mark class="search-highlight">$1</mark>'
        );
        const span = document.createElement('span');
        span.innerHTML = highlightedHTML;
        node.parentNode?.replaceChild(span, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // 跳过已经高亮的 mark 元素
      if ((node as Element).tagName !== 'MARK') {
        Array.from(node.childNodes).forEach(highlightTextNodes);
      }
    }
  };

  highlightTextNodes(tempDiv);
  return tempDiv.innerHTML;
};

const getCachedRegex = (pattern: string, flags: string = 'gi'): RegExp => {
  const key = `${pattern}_${flags}`;
  if (!regexCache.has(key)) {
    regexCache.set(key, new RegExp(pattern, flags));
  }
  return regexCache.get(key)!;
};

const handleNavigate = (fragmentId: number | string) => {
  emit('navigate', fragmentId, props.currentTitle);
};

const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const htmlToText = (() => {
  const tempDiv = document.createElement('div');
  return (html: string): string => {
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    tempDiv.innerHTML = '';
    return text;
  };
})();

const highlightWikilink = (text: string, title: string): string => {
  const regex = getCachedRegex(`\\[\\[${escapeRegExp(title)}\\]\\]`, 'gi');
  return text.replace(
    regex,
    (match) => `<mark class="wikilink-highlight">${match}</mark>`
  );
};

const highlightMention = (text: string, title: string): string => {
  const escapedTitle = escapeRegExp(title);
  const wikilinkRegex = getCachedRegex(
    `\\[\\[\\s*${escapedTitle}\\s*\\]\\]`,
    'gi'
  );
  const titleRegex = getCachedRegex(escapedTitle, 'gi');

  const wikilinks: Array<{ placeholder: string; original: string }> = [];
  let textWithPlaceholders = text.replace(wikilinkRegex, (match) => {
    const placeholder = `___WIKILINK_${wikilinks.length}___`;
    wikilinks.push({ placeholder, original: match });
    return placeholder;
  });

  textWithPlaceholders = textWithPlaceholders.replace(
    titleRegex,
    (match) => `<mark class="mention-highlight">${match}</mark>`
  );

  wikilinks.forEach(({ placeholder, original }) => {
    textWithPlaceholders = textWithPlaceholders.replace(placeholder, original);
  });

  return textWithPlaceholders;
};

const extractPreview = (
  content: string,
  title: string,
  isWikilink: boolean
): string => {
  const plainText = htmlToText(content);
  const lines = plainText.split('\n');
  const escapedTitle = escapeRegExp(title);

  const wikilinkPattern = getCachedRegex(
    `\\[\\[\\s*${escapedTitle}\\s*\\]\\]`,
    'i'
  );
  const titlePattern = isWikilink
    ? wikilinkPattern
    : getCachedRegex(escapedTitle, 'i');

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;

    if (isWikilink) {
      if (wikilinkPattern.test(trimmed)) {
        return formatPreview(trimmed, title, true, escapedTitle);
      }
    } else {
      if (titlePattern.test(trimmed)) {
        if (wikilinkPattern.test(trimmed)) {
          const withoutWikilinks = trimmed.replace(wikilinkPattern, '');
          if (titlePattern.test(withoutWikilinks)) {
            return formatPreview(trimmed, title, false, escapedTitle);
          }
          continue;
        } else {
          return formatPreview(trimmed, title, false, escapedTitle);
        }
      }
    }
  }

  const trimmed = plainText.trim();
  return trimmed.substring(0, 100) + (trimmed.length > 100 ? '...' : '');
};

const formatPreview = (
  text: string,
  title: string,
  isWikilink: boolean,
  escapedTitle?: string
): string => {
  const escaped = escapedTitle || escapeRegExp(title);
  const pattern = isWikilink
    ? getCachedRegex(`\\[\\[\\s*${escaped}\\s*\\]\\]`, 'i')
    : getCachedRegex(escaped, 'i');

  const match = text.match(pattern);
  if (!match || match.index === undefined) return text;

  if (text.length <= 100) return text;

  const matchIndex = match.index;
  const matchLength = match[0].length;
  const start = Math.max(0, matchIndex - 30);
  const end = Math.min(text.length, matchIndex + matchLength + 30);

  let preview = text.substring(start, end);
  if (start > 0) preview = '...' + preview;
  if (end < text.length) preview = preview + '...';

  return preview;
};

const loadBacklinks = async () => {
  if (!props.currentTitle || !props.show) return;

  loading.value = true;
  try {
    const escapedTitle = escapeRegExp(props.currentTitle);
    const wikilinkRegex = getCachedRegex(
      `\\[\\[\\s*${escapedTitle}\\s*\\]\\]`,
      'gi'
    );
    const titleRegex = getCachedRegex(escapedTitle, 'gi');

    const [backlinks, mentions] = await Promise.all([
      findBacklinks(props.currentTitle),
      findUnlinkedMentions(props.currentTitle)
    ]);

    linkedReferences.value = backlinks
      .filter((item) => item.id !== props.currentFragmentId)
      .map((item) => {
        const matches = (item.content || '').match(wikilinkRegex);
        return {
          id: item.id, // 保持原始 ID（文件路径）
          title: item.title,
          occurrences: matches ? matches.length : 0,
          preview: extractPreview(item.content || '', props.currentTitle, true)
        };
      });

    unlinkedMentions.value = mentions
      .filter((item) => item.id !== props.currentFragmentId)
      .map((item) => {
        const content = item.content || '';
        const textWithoutWikilinks = content.replace(wikilinkRegex, '');
        const allMatches = textWithoutWikilinks.match(titleRegex);
        const mentionOccurrences = allMatches?.length || 0;

        return {
          id: item.id, // 保持原始 ID（文件路径）
          title: item.title,
          occurrences: mentionOccurrences,
          preview: extractPreview(item.content || '', props.currentTitle, false)
        };
      });
  } catch (error) {
    console.error('Failed to load backlinks:', error);
  } finally {
    loading.value = false;
  }
};

// 监听显示状态和标题变化
watch(
  () => [props.show, props.currentTitle],
  () => {
    if (props.show && props.currentTitle) {
      loadBacklinks();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.backlink-sidebar {
  @apply flex h-full min-h-0 shrink-0 flex-col overflow-hidden font-ui text-ui;

  width: 0;
  color: var(--workspace-nav-text);
  background: var(--workspace-nav-bg);
  border-left: 0 solid var(--workspace-nav-border);
  transition: width 0.2s ease;

  &.is-visible {
    width: var(--workspace-sidebar-width);
    max-width: 45%;
    border-left-width: 1px;
  }
}

.backlink-sidebar-header {
  @apply flex h-10 shrink-0 items-center justify-between gap-2 px-4;
}

.backlink-sidebar-title {
  @apply min-w-0 truncate text-ui font-semibold;

  color: var(--workspace-nav-heading);
}

.backlink-sidebar-actions {
  @apply flex shrink-0 items-center gap-1;
}

.backlink-search-box {
  @apply mx-4 mb-2 flex h-8 shrink-0 items-center gap-2 rounded-lg bg-hover px-2;
}

.search-icon {
  @apply shrink-0;

  color: var(--workspace-nav-muted);
}

.search-input {
  @apply min-w-0 flex-1 border-0 bg-transparent text-ui outline-none;

  color: var(--workspace-nav-text);

  &::placeholder {
    color: var(--workspace-nav-muted);
  }
}

.backlink-sidebar-content {
  @apply min-h-0 flex-1 overflow-y-auto px-3 pb-4 pt-2;
}

.loading-state {
  @apply flex flex-col items-center justify-center py-8 text-ui-caption;

  color: var(--workspace-nav-muted);
}

.spinner {
  @apply mb-2 h-6 w-6 animate-spin rounded-full border-2;

  border-color: var(--workspace-nav-border);
  border-top-color: var(--el-color-primary);
}

.backlink-sections {
  @apply space-y-5;
}

.backlink-section {
  @apply space-y-2;
}

.section-header {
  @apply flex items-center justify-between gap-2 px-1;
}

.section-title {
  @apply min-w-0 text-ui-caption font-medium;

  color: var(--workspace-nav-text);
}

.count-badge {
  @apply min-w-5 shrink-0 rounded-full bg-hover px-1.5 text-center text-ui-caption tabular-nums;

  color: var(--workspace-nav-muted);
}

.empty-state {
  @apply px-1 py-2 text-ui-caption leading-5;

  color: var(--workspace-nav-muted);
}

.backlink-list {
  @apply space-y-1;
}

.backlink-item {
  @apply block w-full min-w-0 rounded-lg border-0 bg-transparent p-2 text-left transition-colors hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary;
}

.item-header {
  @apply mb-1 flex min-w-0 items-start justify-between gap-2;
}

.item-title {
  @apply min-w-0 flex-1 truncate text-ui font-medium;

  color: var(--workspace-nav-heading);
}

.item-count {
  @apply shrink-0 text-ui-caption;

  color: var(--workspace-nav-muted);
}

.item-preview {
  @apply line-clamp-2 text-ui-caption leading-5;

  color: var(--workspace-nav-muted);
}

.item-title,
.item-preview {
  :deep(mark) {
    @apply rounded bg-hover px-0.5 font-medium;

    color: var(--workspace-nav-heading);
  }
}

@media (prefers-reduced-motion: reduce) {
  .backlink-sidebar {
    transition: none;
  }
}
</style>
