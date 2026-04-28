<template>
  <main class="result-list glass-content" :class="{ 'has-results': hasVisibleResults }">
    <div v-if="!hasVisibleResults" class="empty-state">
      <div class="empty-state-content">
        <p class="empty-title">{{ t('search.noResults') }}</p>
        <p class="empty-text">{{ t('search.suggestRelax') }}</p>
      </div>
    </div>
    <RecycleScroller v-else ref="scrollerRef" class="result" :key="activeTab" :items="filteredResults" :item-size="itemSize"
      :buffer="itemSize" key-field="__rowKey" @update="handleScrollerUpdate" v-slot="{ item, index }">
      <div class="item" :class="{ active: item.id === store.id }" @click="handleItemClick(item)"
        @dblclick="handleItemDoubleClick(item)">
        <!-- 图标，用于显示结果的图标 -->
        <div class="icon-wrapper">
          <img v-if="item.icon" :src="item.icon" class="icon" @error="handleIconError(item)" loading="lazy" />
          <template v-else>
            <!-- <img v-if="item.summarize === 'app'" src="@/assets/svg/app.svg" class="icon" loading="lazy" />
            <img v-else-if="item.summarize === 'bookmark'" src="@/assets/svg/bookmark.svg" class="icon"
              loading="lazy" />
            <img v-else-if="item.summarize === 'search'" src="@/assets/svg/search.svg" class="icon" loading="lazy" /> -->
            <div v-if="item.summarize === 'file'" class="file-type-icon" :class="getFileIconClass(item)">
              <component v-if="getFileIconComponent(item)" :is="getFileIconComponent(item)"
                class="file-type-icon-svg" />
              <span v-else class="file-type-icon-text">{{ getFileIconText(item) }}</span>
            </div>
            <img v-else-if="item.type === 'note'" src="@/assets/svg/note.svg" class="icon type-icon note"
              loading="lazy" />
            <img v-else src="@/assets/svg/code.svg" class="icon type-icon code" loading="lazy" />
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
import { Command } from '@icon-park/vue-next';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchResultActions } from '../composables/useSearchResultActions';
import { useSearchResultDisplay } from '../composables/useSearchResultDisplay';
import { useSearchResultKeyboard } from '../composables/useSearchResultKeyboard';
import { useSearchResultState } from '../composables/useSearchResultState';
import { useI18n } from 'vue-i18n';
// import appIcon from '@/assets/svg/app.svg';
// import bookmarkIcon from '@/assets/svg/bookmark.svg';
// import searchIcon from '@/assets/svg/search.svg';
// import noteIcon from '@/assets/svg/note.svg';
// import codeIcon from '@/assets/svg/code.svg';

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
const itemSize = computed(() => props.itemSize ?? 58);
const {
  tabs,
  activeTab,
  currentTabIndex,
  filteredResults,
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

const { showHideWindow, runPrimaryAction } = useSearchResultActions({
  onClearSearch: props.onClearSearch
});

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

const handleIconError = (item: ContentType) => {
  item.icon = undefined;
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

// const copyKeepWindow = async (item: ContentType) => {
//   if (item.summarize === 'app' || item.summarize === 'bookmark' || item.summarize === 'search' || item.summarize === 'file') return;

//   const result = await processTemplate(item.content);
//   try {
//     await navigator.clipboard.writeText(result.content);
//   } catch (err) {
//     logger.error('[代码片段] 复制失败:', err);
//   }
// };

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
  // --result-row-height: 51.33px;
  // --result-visible-rows: 6;

  @apply bg-search px-1 rounded-bl-lg relative h-full min-h-0 flex flex-col overflow-hidden;

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
    @apply min-h-0 mt-2 overflow-y-auto;
    height: 100%;
    max-height: 100%;

    :deep(.vue-recycle-scroller__item-wrapper) {
      @apply w-full;
    }

    .item {
      @apply grid grid-cols-[32px_minmax(0,1fr)_auto] items-start gap-3 text-search px-2 py-[6px] box-border rounded-lg cursor-pointer relative min-w-0;

      &:hover,
      &.active {
        @apply bg-search-hover;
      }

      .item-actions {
        @apply flex items-center gap-2 pt-1;
      }

      .shortcut-key {
        @apply flex items-center justify-center gap-1 text-panel-text-secondary text-xs font-medium opacity-80;
      }

      &:focus-visible {
        @apply outline-none ring-2 ring-blue-400/60;
      }

      .icon-wrapper {
        @apply flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-lg bg-search-hover;

        .icon {
          @apply w-6 h-6 object-contain;

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
      }

      .content {
        @apply min-w-0 overflow-hidden;

        .title-row {
          @apply flex items-center gap-2 min-w-0;

          .title {
            @apply min-w-0 text-sm truncate font-sans text-search flex-1;

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
