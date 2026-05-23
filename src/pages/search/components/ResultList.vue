<template>
  <main class="result-list glass-content" :class="{ 'has-results': hasVisibleResults }">
    <div v-if="!hasVisibleResults" class="empty-state">
      <div class="empty-state-content">
        <p class="empty-title">{{ t('search.noResults') }}</p>
        <p class="empty-text">{{ t('search.suggestRelax') }}</p>
      </div>
    </div>
    <div v-if="hasVisibleResults" class="result-section-header">
      <span>Best Match</span>
      <span>Enter 执行</span>
    </div>
    <RecycleScroller v-if="hasVisibleResults" ref="scrollerRef" class="result" :key="activeTab" :items="filteredResults" :item-size="itemSize"
      :buffer="itemSize" key-field="__rowKey" @update="handleScrollerUpdate" v-slot="{ item, index }">
      <div class="item" :class="{ active: item.id === activeItemId }" @click="handleItemClick(item)"
        @dblclick="handleItemDoubleClick(item)">
        <!-- 图标，用于显示结果的图标 -->
        <div class="icon-wrapper">
          <div v-if="item.summarize === 'file' && !item.icon" class="file-type-icon" :class="getFileIconClass(item)">
            <component v-if="getFileIconComponent(item)" :is="getFileIconComponent(item)"
              class="file-type-icon-svg" />
            <span v-else class="file-type-icon-text">{{ getFileIconText(item) }}</span>
          </div>
          <template v-else>
            <img v-if="getIconState(item).src" :src="getIconState(item).src" class="icon"
              :class="getImageIconClass(item)"
              @error="handleIconError(item)" loading="eager" decoding="async" />
            <div v-else class="text-fallback-icon" :class="`type-${getIconState(item).typeClass || 'default'}`">
              {{ getIconState(item).fallbackText }}
            </div>
          </template>
        </div>
        <div class="content">
          <div class="title-row">
            <!-- 标题，用于显示结果的标题 -->
            <div class="title" v-html="getDisplayTitle(item)"></div>
            <!-- 当类型选项卡为全部才显示类型标签，用于区分不同的结果类型 -->
            <span v-if="activeTab === 'text'" class="type-badge">{{ getTypeLabel(item) }}</span>
          </div>
          <p class="text" v-html="getDisplayContentHighlighted(item)"></p>
          <!-- 内容，用于显示结果的文本内容 -->
        </div>
        <!-- 操作按钮，用于显示结果的操作按钮 -->
        <div class="item-actions">
          <button
            v-if="canCopySnippet(item)"
            class="copy-action"
            type="button"
            :title="t('searchResult.copyCode')"
            :aria-label="t('searchResult.copyCode')"
            @click.stop="handleCopySnippet(item)"
            @dblclick.stop
          >
            <Copy class="copy-action-icon" theme="outline" size="14" />
          </button>
          <div v-if="index >= visibleShortcutStart && index < visibleShortcutStart + visibleShortcutCount" class="shortcut-key">
            <Command class="shortcut-key-icon" theme="outline" size="12" />
            <span class="shortcut-key-text">{{ index - visibleShortcutStart + 1 }}</span>
          </div>
        </div>
      </div>
    </RecycleScroller>
  </main>
</template>

<script lang="ts" setup>
import { useConfigurationStore } from '@/store';
import { Command, Copy } from '@icon-park/vue-next';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchResultActions } from '../composables/useSearchResultActions';
import { useSearchResultDisplay } from '../composables/useSearchResultDisplay';
import { getSearchResultIcon } from '../composables/useSearchResultIcon';
import { useSearchResultKeyboard } from '../composables/useSearchResultKeyboard';
import { useSearchResultState } from '../composables/useSearchResultState';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const store = useConfigurationStore();
const { currentMode, isSearchMode, isListMode, isTabMode, setMode, setCanSwitchToList } = useFocusMode();

const props = defineProps<{
  results: ContentType[];
  searchQuery?: string;
  onClearSearch: () => void;
  itemSize?: number;
}>();

const emit = defineEmits<{
  backToSearch: [];
  selectionChange: [item: ContentType | null];
  tabChange: [tab: SummarizeType];
  primaryAction: [item: ContentType];
}>();

const scrollerRef = ref<any>(null);
const visibleShortcutStart = ref(0);
const visibleShortcutCount = 6;
const itemSize = computed(() => props.itemSize ?? 52);
const {
  tabs,
  activeTab,
  currentTabIndex,
  filteredResults,
  selectedItemId,
  switchTab: setActiveTab,
  selectItemById,
  ensureValidTab,
  syncSelectionWithResults
} = useSearchResultState(() => props.results, t, {
  onSelectionAutoChange: (item) => {
    store.id = item?.id ? String(item.id) : '';
    emit('selectionChange', item);
  }
});

const {
  getDisplayTitle,
  getDisplayContentHighlighted,
  getTypeLabel,
  getFileIconComponent,
  getFileIconText,
  getFileIconClass
} = useSearchResultDisplay(() => props.searchQuery, t);

const {
  showHideWindow,
  runPrimaryAction,
  canCopySnippet,
  copySnippetToClipboard
} = useSearchResultActions({
  onClearSearch: props.onClearSearch,
  copySuccessMessage: t('searchResult.copySuccess'),
  copyFailedMessage: t('searchResult.copyFailed')
});

const activeItemId = computed(() => selectedItemId.value ?? store.id);

const emitSelectionChangeById = (id: string | number) => {
  emit('selectionChange', selectItemById(id));
};

watch(filteredResults, async () => {
  visibleShortcutStart.value = 0;
  syncSelectionWithResults(store.id);

  await nextTick();
  syncShortcutWindowFromScroll();
}, { immediate: true });

watch(() => props.results.length, (length) => {
  setCanSwitchToList(length > 0);
}, { immediate: true });

function switchTab(tab: SummarizeType) {
  setActiveTab(tab);
  emit('tabChange', tab);

  if (!isTabMode.value && !isListMode.value) {
    setMode('TAB');
  }

  if (isListMode.value && filteredResults.value.length > 0) {
    ensureItemVisible(0);
  }
}

const visibleShortcutItems = computed(() => filteredResults.value.slice(visibleShortcutStart.value, visibleShortcutStart.value + visibleShortcutCount));

const getVisibleStartFromScrollTop = (scrollTop: number) => Math.max(0, Math.floor(scrollTop / itemSize.value));

const syncShortcutWindowFromScroll = () => {
  const scroller = scrollerRef.value?.$el as HTMLElement | undefined;
  if (!scroller) return;

  visibleShortcutStart.value = getVisibleStartFromScrollTop(scroller.scrollTop);
};

const handleScrollerUpdate = () => {
  syncShortcutWindowFromScroll();
};

const ensureItemVisible = (index: number) => {
  if (!scrollerRef.value) return;

  nextTick(() => {
    const scroller = scrollerRef.value.$el as HTMLElement | undefined;
    if (!scroller || index < 0) return;

    const targetTop = index * itemSize.value;
    const targetBottom = targetTop + itemSize.value;
    const viewportTop = scroller.scrollTop;
    const viewportBottom = viewportTop + scroller.clientHeight;

    if (targetBottom > viewportBottom) {
      scroller.scrollTop = targetBottom - scroller.clientHeight;
    } else if (targetTop < viewportTop) {
      scroller.scrollTop = targetTop;
    }

    visibleShortcutStart.value = getVisibleStartFromScrollTop(scroller.scrollTop);
  });
};


useSearchResultKeyboard({
  tabs,
  activeTabIndex: currentTabIndex,
  filteredResults,
  visibleShortcutItems,
  isSearchMode,
  isListMode,
  isTabMode,
  selectedId: computed({
    get: () => store.id,
    set: (id) => {
      store.id = id;
    }
  }),
  switchTab,
  setMode,
  ensureItemVisible,
  emitSelectionChangeById,
  runPrimaryAction,
  showHideWindow,
  backToSearch: () => emit('backToSearch'),
  primaryAction: (item) => emit('primaryAction', item)
});

function handleItemClick(item: ContentType) {
  if (!isListMode.value) {
    setMode('LIST');
  }
  store.id = item.id;
  emit('selectionChange', item);
  ensureItemVisible(filteredResults.value.findIndex((result) => result.id === item.id));
}

function handleItemDoubleClick(item: ContentType) {
  if (item.summarize === 'app' || item.summarize === 'bookmark' || item.summarize === 'search') {
    store.id = item.id;
    emit('primaryAction', item);
  }
}

async function handleCopySnippet(item: ContentType) {
  await copySnippetToClipboard(item);
}

const handleIconError = (item: ContentType) => {
  item.icon = undefined;
};

const getIconState = getSearchResultIcon;
const getImageIconClass = (item: ContentType) => {
  const icon = getIconState(item);
  return {
    'default-type-icon': icon.isDefaultTypeIcon,
    'type-icon': Boolean(icon.typeClass),
    [icon.typeClass]: Boolean(icon.typeClass)
  };
};

const enterListMode = () => {
  ensureValidTab();
  if (filteredResults.value.length > 0 || props.results.length > 0) {
    setMode('LIST');
  }
};

const enterTabMode = () => {
  setMode('TAB');
};

const backToSearchMode = () => {
  setMode('SEARCH');
};

const hasVisibleResults = computed(() => filteredResults.value.length > 0);

defineExpose({
  switchTab,
  enterListMode,
  enterTabMode,
  backToSearchMode,
  runPrimaryAction,
  currentMode,
  tabs,
  activeTab
});
</script>

<style lang="scss" scoped>
.result-list {
  // --result-row-height: 52px;
  // --result-visible-rows: 6;

  @apply bg-search rounded-bl-lg relative h-full min-h-0 flex flex-col overflow-hidden;
  padding: 8px 8px 8px 10px;

  .empty-state {
    @apply flex-1 min-h-0 flex items-center justify-center overflow-y-auto p-4;
  }

  .empty-state-content {
    @apply flex flex-col items-center justify-center text-center;
  }

  .empty-title {
    @apply text-sm font-semibold text-search;
  }

  .empty-text {
    @apply mt-2 text-xs leading-5 text-search-secondary max-w-xs;
  }

  &.has-results {
    @apply overflow-hidden;
  }

  .result-section-header {
    @apply flex items-center justify-between flex-shrink-0;
    padding: 0 8px 6px 2px;
    color: var(--search-info-text-color);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .tabs {
    @apply flex items-center justify-between gap-3 pt-2 pb-1 border-search flex-shrink-0;

    .tabs-group {
      @apply flex items-center gap-2 min-w-0 overflow-x-auto overflow-y-hidden flex-nowrap;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .tab {
      @apply inline-flex items-center gap-2 px-3 py-1.5 text-sm text-search-secondary cursor-pointer rounded-md bg-transparent border border-transparent whitespace-nowrap shrink-0;

      &.active {
        @apply bg-search-hover text-search border-search;
      }
    }

    .tab-shortcut {
      @apply text-[11px] text-search-secondary hidden sm:inline;
    }

    .return-hint {
      @apply flex items-center gap-1 ml-2 text-xs cursor-pointer whitespace-nowrap shrink-0;
      animation: fadeIn 0.3s ease-in-out;

      .hint-key {
        @apply px-1.5 py-0.5 rounded font-medium border;
        transition: all 0.2s ease;
      }

      .hint-text {
        @apply text-panel-text-secondary;
      }

      &:hover .hint-key {
        transform: scale(1.05);
      }
    }
  }

  .result {
    @apply min-h-0 overflow-y-auto;
    height: 100%;
    max-height: 100%;

    :deep(.vue-recycle-scroller__item-wrapper) {
      @apply w-full;
    }

    .item {
      @apply grid grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-2.5 text-search box-border rounded-lg cursor-pointer relative min-w-0 border border-transparent;
      width: calc(100% - 4px);
      height: 48px;
      margin: 2px 4px 2px 0;
      padding: 5px 8px 5px 9px;
      background-color: transparent;
      transition:
        background-color 0.15s ease,
        border-color 0.15s ease,
        box-shadow 0.15s ease;

      &:hover {
        @apply bg-search-hover;
      }

      &.active {
        background-color: var(--search-result-active);
        border-color: var(--search-result-active-border);
      }

      &.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 7px;
        bottom: 7px;
        width: 3px;
        border-radius: 0 999px 999px 0;
        background: var(--search-result-accent);
        pointer-events: none;
      }

      .item-actions {
        @apply flex items-center justify-end text-right;
        min-width: 30px;
      }

      .copy-action {
        @apply flex items-center justify-center w-7 h-7 rounded-md border border-transparent bg-transparent text-search-secondary cursor-pointer opacity-0;
        transition:
          opacity 0.15s ease,
          color 0.15s ease,
          background-color 0.15s ease,
          border-color 0.15s ease;

        &:hover,
        &:focus-visible {
          @apply opacity-100 text-search bg-search border-search outline-none;
        }
      }

      &:hover,
      &.active {
        .copy-action {
          @apply opacity-100;
        }
      }

      .shortcut-key {
        @apply flex items-center justify-center gap-1 text-search-secondary text-xs font-medium opacity-85;
      }

      &:focus-visible {
        @apply outline-none ring-2 ring-blue-400/60;
      }

      .icon-wrapper {
        // 统一配置图标大小和默认类型图标的缩放比例
        --result-icon-size: 22px;
        --default-type-icon-scale: 1.14;

        @apply flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-lg;
        background-color: var(--search-card-bg);
        box-shadow: 0 4px 14px rgb(15 23 42 / 8%);

        .icon {
          width: var(--result-icon-size);
          height: var(--result-icon-size);

          @apply object-contain;

          &.default-type-icon {
            transform: scale(var(--default-type-icon-scale));
            transform-origin: center;
          }

          &.type-icon {
            @apply opacity-80;

            &.code {
              @apply opacity-70;
            }

            &.note {
              @apply opacity-80;
            }
          }
        }

        .text-fallback-icon {
          @apply flex items-center justify-center w-6 h-6 rounded-md text-xs font-semibold text-blue-700 bg-blue-100 dark:text-blue-100 dark:bg-blue-500/30;
        }
      }

      .content {
        @apply min-w-0 overflow-hidden;

        .title-row {
          @apply flex items-center gap-2 min-w-0;

          .title {
            @apply min-w-0 text-sm truncate font-sans text-search flex-1 font-semibold;

            :deep(.highlight) {
              @apply text-blue-600 dark:text-blue-300 font-semibold bg-blue-100 dark:bg-blue-500/20 rounded-sm px-0.5;
            }
          }

          .type-badge {
            @apply shrink-0 px-2 py-0.5 rounded-full text-[11px] leading-4 text-search-secondary bg-search border border-search;
          }
        }

        .text {
          @apply mt-0.5 text-xs truncate text-search-secondary;

          :deep(.highlight) {
            @apply text-blue-600 dark:text-blue-300 font-semibold bg-blue-100 dark:bg-blue-500/20 rounded-sm px-0.5;
          }

          :deep(.url-display) {
            @apply text-blue-600 dark:text-blue-400 font-mono;
          }
        }

        .meta {
          @apply mt-1 text-[11px] leading-4 text-search-secondary truncate max-w-full;
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
