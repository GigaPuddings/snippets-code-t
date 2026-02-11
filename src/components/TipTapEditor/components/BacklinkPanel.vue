<template>
  <div class="backlink-sidebar" :class="{ 'dark': dark, 'is-visible': show }">
    <div class="backlink-sidebar-header">
      <h3 class="backlink-sidebar-title">{{ t('backlinks.title') }}</h3>
      <button class="backlink-sidebar-close" @click="$emit('close')" :title="t('common.close')">
        <svg viewBox="0 0 24 24" width="16" height="16">
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
            <span class="count-badge">{{ linkedReferences.length }}</span>
          </div>
          <div v-if="linkedReferences.length === 0" class="empty-state">
            {{ t('backlinks.noLinkedReferences') }}
          </div>
          <div v-else class="backlink-list">
            <div
              v-for="item in linkedReferences"
              :key="item.id"
              class="backlink-item"
              @click="handleNavigate(item.id)"
            >
              <div class="item-header">
                <span class="item-title">{{ item.title }}</span>
                <span class="item-count">{{ item.occurrences }}{{ t('backlinks.occurrences') }}</span>
              </div>
              <div class="item-preview" v-html="highlightWikilink(item.preview, currentTitle)"></div>
            </div>
          </div>
        </div>

        <!-- 提及当前文件名 -->
        <div class="backlink-section">
          <div class="section-header">
            <h4 class="section-title">{{ t('backlinks.unlinkedMentions') }}</h4>
            <span class="count-badge">{{ unlinkedMentions.length }}</span>
          </div>
          <div v-if="unlinkedMentions.length === 0" class="empty-state">
            {{ t('backlinks.noUnlinkedMentions') }}
          </div>
          <div v-else class="backlink-list">
            <div
              v-for="item in unlinkedMentions"
              :key="item.id"
              class="backlink-item"
              @click="handleNavigate(item.id)"
            >
              <div class="item-header">
                <span class="item-title">{{ item.title }}</span>
                <span class="item-count">{{ item.occurrences }}{{ t('backlinks.occurrences') }}</span>
              </div>
              <div class="item-preview" v-html="highlightMention(item.preview, currentTitle)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { findBacklinks, findUnlinkedMentions } from '@/utils/wikilink-updater';

interface BacklinkItem {
  id: number;
  title: string;
  occurrences: number;
  preview: string;
}

interface Props {
  show: boolean;
  dark?: boolean;
  currentTitle: string;
  currentFragmentId?: number;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  currentFragmentId: undefined
});

const emit = defineEmits<{
  close: [];
  navigate: [id: number, searchTitle: string];
}>();

const { t } = useI18n();

const loading = ref(false);
const linkedReferences = ref<BacklinkItem[]>([]);
const unlinkedMentions = ref<BacklinkItem[]>([]);

const regexCache = new Map<string, RegExp>();

const getCachedRegex = (pattern: string, flags: string = 'gi'): RegExp => {
  const key = `${pattern}_${flags}`;
  if (!regexCache.has(key)) {
    regexCache.set(key, new RegExp(pattern, flags));
  }
  return regexCache.get(key)!;
};

const handleNavigate = (fragmentId: number) => {
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
          id: typeof item.id === 'string' ? parseInt(item.id, 10) : item.id,
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
          id: typeof item.id === 'string' ? parseInt(item.id, 10) : item.id,
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
  @apply bg-white flex-shrink-0;
  width: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: width 0.25s ease;
  overflow: hidden;
  border-left: 0 solid transparent;
  
  &.is-visible {
    width: 320px;
    @apply border-l border-gray-200;
  }
  
  &.dark {
    @apply bg-[#1e1e1e];
    
    &.is-visible {
      @apply border-[#2a2a2a];
    }
  }
}

.backlink-sidebar-header {
  @apply flex items-center justify-between px-3 py-2 border-b border-gray-200;
  flex-shrink: 0;
  
  .dark & {
    @apply border-[#2a2a2a];
  }
}

.backlink-sidebar-title {
  @apply text-sm font-semibold text-gray-900;
  
  .dark & {
    @apply text-[#CECFD0];
  }
}

.backlink-sidebar-close {
  @apply w-7 h-7 flex items-center justify-center rounded cursor-pointer;
  transition: background-color 0.15s ease;
  color: #999;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #666;
  }
  
  svg {
    @apply text-current;
  }
  
  .dark & {
    color: #8a8a8a;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
      color: #b3b3b3;
    }
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
  @apply flex flex-col items-center justify-center py-8 text-gray-500;
  
  .dark & {
    @apply text-[#9ca3af];
  }
}

.spinner {
  @apply w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-2;
  
  .dark & {
    @apply border-[#2a2a2a] border-t-blue-500;
  }
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
  @apply text-xs font-semibold text-gray-600 uppercase tracking-wide;
  
  .dark & {
    @apply text-[#8a8a8a];
  }
}

.count-badge {
  @apply px-1.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded;
  
  .dark & {
    @apply bg-[#2a2a2a] text-[#8a8a8a];
  }
}

.empty-state {
  @apply text-xs text-gray-400 italic py-2;
  
  .dark & {
    @apply text-[#666];
  }
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
  @apply text-sm font-medium text-gray-900 truncate flex-1;
  
  .dark & {
    @apply text-[#ccc];
  }
}

.item-count {
  @apply text-xs text-gray-400 ml-2 flex-shrink-0;
  
  .dark & {
    @apply text-[#666];
  }
}

.item-preview {
  @apply text-xs text-gray-600 line-clamp-2 leading-relaxed;
  
  .dark & {
    @apply text-[#999];
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
