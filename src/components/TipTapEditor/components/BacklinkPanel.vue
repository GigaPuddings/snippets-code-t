<template>
  <div class="backlink-sidebar" :class="{ 'dark': dark, 'is-visible': show }">
    <div class="backlink-sidebar-header">
      <div class="backlink-sidebar-actions">
        <!-- 搜索按钮 -->
        <button 
          class="backlink-action-btn" 
          @click="toggleSearch"
          :title="$t('noteEditor.search')"
          :class="{ 'is-active': showSearch }"
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
        </button>
        <button class="backlink-sidebar-close" @click="$emit('close')" :title="t('common.close')">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 搜索框 -->
    <div v-show="showSearch" class="backlink-search-box">
      <svg viewBox="0 0 24 24" width="14" height="14" class="search-icon">
        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
      <input 
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        class="search-input"
        :placeholder="t('backlinks.searchPlaceholder')"
      />
      <button 
        v-if="searchQuery"
        class="clear-search-btn"
        @click="clearSearch"
      >
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
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
            <span class="count-badge">{{ filteredLinkedReferences.length }}</span>
          </div>
          <div v-if="filteredLinkedReferences.length === 0 && !searchQuery" class="empty-state">
            {{ t('backlinks.noLinkedReferences') }}
          </div>
          <div v-else-if="filteredLinkedReferences.length === 0 && searchQuery" class="empty-state">
            {{ t('noteEditor.noSearchResults') }}
          </div>
          <div v-else class="backlink-list">
            <div
              v-for="item in filteredLinkedReferences"
              :key="item.id"
              class="backlink-item"
              @click="handleNavigate(item.id)"
            >
              <div class="item-header">
                <span class="item-title" v-html="highlightSearchText(item.title)"></span>
                <span class="item-count">{{ item.occurrences }}{{ t('backlinks.occurrences') }}</span>
              </div>
              <div class="item-preview" v-html="highlightSearchInPreview(highlightWikilink(item.preview, currentTitle))"></div>
            </div>
          </div>
        </div>

        <!-- 提及当前文件名 -->
        <div class="backlink-section">
          <div class="section-header">
            <h4 class="section-title">{{ t('backlinks.unlinkedMentions') }}</h4>
            <span class="count-badge">{{ filteredUnlinkedMentions.length }}</span>
          </div>
          <div v-if="filteredUnlinkedMentions.length === 0 && !searchQuery" class="empty-state">
            {{ t('backlinks.noUnlinkedMentions') }}
          </div>
          <div v-else-if="filteredUnlinkedMentions.length === 0 && searchQuery" class="empty-state">
            {{ t('noteEditor.noSearchResults') }}
          </div>
          <div v-else class="backlink-list">
            <div
              v-for="item in filteredUnlinkedMentions"
              :key="item.id"
              class="backlink-item"
              @click="handleNavigate(item.id)"
            >
              <div class="item-header">
                <span class="item-title" v-html="highlightSearchText(item.title)"></span>
                <span class="item-count">{{ item.occurrences }}{{ t('backlinks.occurrences') }}</span>
              </div>
              <div class="item-preview" v-html="highlightSearchInPreview(highlightMention(item.preview, currentTitle))"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
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
  return linkedReferences.value.filter(item => 
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
  return unlinkedMentions.value.filter(item => 
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
        const highlightedHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');
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
  return text.replace(regex, (match) => `<mark class="wikilink-highlight">${match}</mark>`);
};

const highlightMention = (text: string, title: string): string => {
  const escapedTitle = escapeRegExp(title);
  const wikilinkRegex = getCachedRegex(`\\[\\[${escapedTitle}\\]\\]`, 'gi');
  const titleRegex = getCachedRegex(escapedTitle, 'gi');
  
  const wikilinks: Array<{ placeholder: string; original: string }> = [];
  let textWithPlaceholders = text.replace(wikilinkRegex, (match) => {
    const placeholder = `___WIKILINK_${wikilinks.length}___`;
    wikilinks.push({ placeholder, original: match });
    return placeholder;
  });
  
  textWithPlaceholders = textWithPlaceholders.replace(titleRegex, (match) => 
    `<mark class="mention-highlight">${match}</mark>`
  );
  
  wikilinks.forEach(({ placeholder, original }) => {
    textWithPlaceholders = textWithPlaceholders.replace(placeholder, original);
  });
  
  return textWithPlaceholders;
};

const extractPreview = (content: string, title: string, isWikilink: boolean): string => {
  const plainText = htmlToText(content);
  const lines = plainText.split('\n');
  const escapedTitle = escapeRegExp(title);
  
  const wikilinkPattern = getCachedRegex(`\\[\\[${escapedTitle}\\]\\]`, 'i');
  const titlePattern = isWikilink ? wikilinkPattern : getCachedRegex(escapedTitle, 'i');
  
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

const formatPreview = (text: string, title: string, isWikilink: boolean, escapedTitle?: string): string => {
  const escaped = escapedTitle || escapeRegExp(title);
  const pattern = isWikilink 
    ? getCachedRegex(`\\[\\[${escaped}\\]\\]`, 'i')
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
    const wikilinkRegex = getCachedRegex(`\\[\\[${escapedTitle}\\]\\]`, 'gi');
    const titleRegex = getCachedRegex(escapedTitle, 'gi');
    
    const [backlinks, mentions] = await Promise.all([
      findBacklinks(props.currentTitle),
      findUnlinkedMentions(props.currentTitle)
    ]);
    
    linkedReferences.value = backlinks
      .filter(item => item.id !== props.currentFragmentId)
      .map(item => {
        const matches = (item.content || '').match(wikilinkRegex);
        return {
          id: item.id, // 保持原始 ID（文件路径）
          title: item.title,
          occurrences: matches ? matches.length : 0,
          preview: extractPreview(item.content || '', props.currentTitle, true)
        };
      });

    unlinkedMentions.value = mentions
      .filter(item => item.id !== props.currentFragmentId)
      .map(item => {
        const content = item.content || '';
        const allMatches = content.match(titleRegex);
        const wikilinkMatches = content.match(wikilinkRegex);
        const mentionOccurrences = (allMatches?.length || 0) - (wikilinkMatches?.length || 0);
        
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
watch(() => [props.show, props.currentTitle], () => {
  if (props.show && props.currentTitle) {
    loadBacklinks();
  }
}, { immediate: true });
</script>

<style lang="scss" scoped>
.backlink-sidebar {
  @apply bg-panel flex-shrink-0;
  width: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: width 0.25s ease;
  overflow: hidden;
  border-left: 0 solid transparent;

  &.is-visible {
    width: 320px;
    border-left: 1px solid var(--panel-border);
  }

  &.dark {
    background-color: var(--panel-bg);

    &.is-visible {
      border-color: var(--panel-border);
    }
  }
}

.backlink-sidebar-header {
  @apply flex items-center justify-between px-3 py-2;
  border-bottom: 1px solid var(--panel-border);
  flex-shrink: 0;
}

.backlink-sidebar-actions {
  @apply flex items-center gap-1 w-full justify-end;
}

.backlink-action-btn {
  @apply w-7 h-7 flex items-center justify-center rounded cursor-pointer;
  transition: all 0.15s ease;
  color: var(--panel-text-secondary);

  &:hover {
    background-color: var(--panel-hover-bg);
    color: var(--panel-text);
  }

  &.is-active {
    background-color: var(--categories-bg-tab-active);
    color: var(--el-color-primary);
  }

  svg {
    @apply text-current;
  }
}

.backlink-search-box {
  @apply flex items-center px-3 py-2 gap-2;
  border-bottom: 1px solid var(--panel-border);
  flex-shrink: 0;
}

.search-icon {
  @apply flex-shrink-0;
  color: var(--panel-text-secondary);
}

.search-input {
  @apply flex-1 bg-transparent border-none outline-none text-sm;
  color: var(--panel-text);

  &::placeholder {
    color: var(--panel-text-secondary);
  }
}

.clear-search-btn {
  @apply w-5 h-5 flex items-center justify-center rounded cursor-pointer flex-shrink-0;
  transition: background-color 0.15s ease;
  color: var(--panel-text-secondary);

  &:hover {
    background-color: var(--panel-hover-bg);
    color: var(--panel-text);
  }
}

.backlink-sidebar-close {
  @apply w-7 h-7 flex items-center justify-center rounded cursor-pointer;
  transition: background-color 0.15s ease;
  color: var(--panel-text-secondary);

  &:hover {
    background-color: var(--panel-hover-bg);
    color: var(--panel-text);
  }

  svg {
    @apply text-current;
  }
}

.backlink-sidebar-content {
  @apply overflow-y-auto flex-1 py-2 px-3;
  padding-bottom: 48px;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: 3px solid transparent;
    background-clip: padding-box;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  
  .dark & {
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.15);
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }
    }
  }
}

.loading-state {
  @apply flex flex-col items-center justify-center py-8 text-panel-text-secondary;
}

.spinner {
  @apply w-8 h-8 border-4 rounded-full animate-spin mb-2;
  border-color: var(--panel-border);
  border-top-color: var(--el-color-primary);
}

.backlink-sections {
  @apply space-y-6;
}

.backlink-section {
  @apply space-y-2;
}

.section-header {
  @apply flex items-center justify-between mb-2;
}

.section-title {
  @apply text-xs font-semibold uppercase tracking-wide;
  color: var(--panel-text-secondary);
}

.count-badge {
  @apply px-1.5 py-0.5 text-xs font-medium rounded;
  background-color: var(--editor-hover-bg);
  color: var(--panel-text-secondary);
}

.empty-state {
  @apply text-xs italic py-2;
  color: var(--panel-text-secondary);
}

.backlink-list {
  @apply space-y-1;
}

.backlink-item {
  @apply p-2 rounded cursor-pointer transition-all;
  
  &:hover {
    background-color: var(--categories-panel-bg-hover);
  }
  
  .dark & {
    &:hover {
      background-color: var(--categories-panel-bg-hover);
    }
  }
}

.item-header {
  @apply flex items-center justify-between mb-1;
}

.item-title {
  @apply text-sm font-medium text-panel truncate flex-1;

  :deep(.search-highlight) {
    @apply bg-blue-100 text-blue-700 px-0.5 rounded font-semibold;

    .dark & {
      @apply bg-blue-900 bg-opacity-30 text-blue-400;
    }
  }
}

.item-count {
  @apply text-xs text-panel-text-secondary ml-2 flex-shrink-0;
}

.item-preview {
  @apply text-xs text-panel-text-secondary line-clamp-2 leading-relaxed;

  :deep(.search-highlight) {
    @apply bg-blue-100 text-blue-700 px-0.5 rounded font-semibold;
    
    .dark & {
      @apply bg-blue-900 bg-opacity-30 text-blue-400;
    }
  }

  :deep(mark.wikilink-highlight) {
    @apply bg-purple-100 text-purple-700 px-0.5 rounded;
    
    .dark & {
      @apply bg-purple-900 bg-opacity-30 text-purple-400;
    }
  }

  :deep(mark.mention-highlight) {
    @apply bg-yellow-100 text-yellow-700 px-0.5 rounded;
    
    .dark & {
      @apply bg-yellow-900 bg-opacity-30 text-yellow-400;
    }
  }
}
</style>
