<template>
  <main class="result-list glass-content">
    <div v-if="!hasVisibleResults" class="empty-state">
      <p class="text-ui font-medium text-search">{{ t('search.noResults') }}</p>
      <p class="mt-2 text-ui-caption text-search-secondary">
        {{ t('search.suggestRelax') }}
      </p>
    </div>
    <div
      v-else
      ref="listViewportRef"
      id="quick-search-results"
      class="result"
      role="listbox"
      :aria-label="t('searchResult.all')"
      @wheel="handleWheel"
    >
      <div
        v-for="(item, index) in pageItems"
        :key="getResultKey(item)"
        class="item"
        :class="{ active: item.id === activeItemId }"
        role="option"
        :aria-selected="item.id === activeItemId"
        :id="'quick-result-' + encodeURIComponent(String(item.id))"
        @click="handleItemClick(item)"
      >
        <div class="icon-wrapper">
          <component
            v-if="item.summarize === 'file' && !item.icon"
            :is="getFileIconComponent(item)"
            class="icon text-search-secondary"
          />
          <component
            v-else-if="getIconState(item).component"
            :is="getIconState(item).component"
            class="icon text-search-secondary"
          />
          <img
            v-else-if="getIconState(item).src"
            :src="getIconState(item).src"
            class="icon"
            alt=""
            @error="handleIconError(item)"
            loading="eager"
            decoding="async"
          />
          <span v-else class="text-ui-caption text-search-secondary">
            {{ getIconState(item).fallbackText }}
          </span>
        </div>
        <div class="content">
          <div class="title" v-html="getDisplayTitle(item)"></div>
          <p class="text">
            <span>{{ getTypeLabel(item) }}</span>
            <template v-if="getDisplayContentHighlighted(item, false)">
              <span class="mx-1">·</span>
              <span v-html="getDisplayContentHighlighted(item, false)"></span>
            </template>
          </p>
        </div>
        <div class="item-actions">
          <span
            v-if="activeTab === 'text' && page.index === 0 && index === 0"
            class="best-match"
          >
            {{ t('searchResult.bestMatch') }}
          </span>
          <kbd class="shortcut-key">Alt {{ index + 1 }}</kbd>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useConfigurationStore } from '@/store';
import { orderSearchResults } from '@/search/resultGroups';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchResultActions } from '../composables/useSearchResultActions';
import { useSearchResultDisplay } from '../composables/useSearchResultDisplay';
import { getSearchResultIcon } from '../composables/useSearchResultIcon';
import { useSearchResultKeyboard } from '../composables/useSearchResultKeyboard';
import { useSearchResultState } from '../composables/useSearchResultState';
import {
  useSearchResultPagination,
  type SearchResultPage
} from '../composables/useSearchResultPagination';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useConfigurationStore();
const {
  currentMode,
  isSearchMode,
  isListMode,
  isTabMode,
  setMode,
  setCanSwitchToList
} = useFocusMode();

const props = defineProps<{
  results: ContentType[];
  searchQuery?: string;
  onClearSearch: () => void;
}>();

const emit = defineEmits<{
  backToSearch: [];
  selectionChange: [item: ContentType | null];
  tabChange: [tab: SummarizeType];
  primaryAction: [item: ContentType];
  previewToggle: [];
  pageChange: [page: SearchResultPage];
}>();

const listViewportRef = ref<HTMLElement | null>(null);
const hasNavigatedResults = ref(false);
const {
  tabs,
  activeTab,
  currentTabIndex,
  filteredResults: tabResults,
  selectedItemId,
  switchTab: setActiveTab,
  selectItemById,
  ensureValidTab,
  syncSelectionWithResults
} = useSearchResultState(() => props.results, t, {
  preserveSelection: () => !isSearchMode.value || hasNavigatedResults.value,
  onSelectionAutoChange: (item) => {
    store.id = item?.id ?? '';
    emit('selectionChange', item);
  }
});

const filteredResults = computed(() =>
  orderSearchResults(tabResults.value, activeTab.value === 'text')
);
const activeItemId = computed(() => selectedItemId.value ?? store.id);
const {
  getDisplayTitle,
  getDisplayContentHighlighted,
  getTypeLabel,
  getFileIconComponent
} = useSearchResultDisplay(() => props.searchQuery, t);
const { showHideWindow, runPrimaryAction } = useSearchResultActions({
  onClearSearch: props.onClearSearch,
  copySuccessMessage: t('searchResult.copySuccess'),
  copyFailedMessage: t('searchResult.copyFailed')
});
const pagination = useSearchResultPagination(
  filteredResults,
  activeItemId,
  (item) => {
    store.id = item?.id ?? '';
    if (item) selectItemById(item.id);
    emit('selectionChange', item);
  }
);
const { page, pageItems, ensureItemVisible } = pagination;

watch(activeTab, (tab) => emit('tabChange', tab), { immediate: true });
watch(page, (value) => emit('pageChange', value), { immediate: true });
watch(
  [pageItems, activeItemId],
  async () => {
    await nextTick();
    listViewportRef.value
      ?.querySelector('.item.active')
      ?.scrollIntoView({ block: 'nearest' });
  },
  { flush: 'post' }
);
watch(filteredResults, () => syncSelectionWithResults(store.id), {
  immediate: true
});
watch(
  () => props.searchQuery,
  () => {
    hasNavigatedResults.value = false;
    pagination.resetPage();
  }
);
watch(
  () => props.results.length,
  (length) => setCanSwitchToList(length > 0),
  { immediate: true }
);

function changePage(direction: 1 | -1): void {
  if (pagination.changePage(direction)) hasNavigatedResults.value = true;
}

function handleWheel(event: WheelEvent): void {
  const viewport = listViewportRef.value;
  // Short windows scroll within the six-item page; the footer still turns pages.
  if (viewport && viewport.scrollHeight > viewport.clientHeight) return;
  const previousPage = page.value.index;
  pagination.handleWheel(event);
  if (page.value.index !== previousPage) hasNavigatedResults.value = true;
}

function switchTab(tab: SummarizeType): void {
  setActiveTab(tab);
  hasNavigatedResults.value = false;
  pagination.resetPage();
  if (!isTabMode.value && !isListMode.value) setMode('TAB');
}

const emitSelectionChangeById = (id: string | number) => {
  emit('selectionChange', selectItemById(id));
};

useSearchResultKeyboard({
  tabs,
  activeTabIndex: currentTabIndex,
  filteredResults,
  visibleShortcutItems: pageItems,
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
  primaryAction: (item) => emit('primaryAction', item),
  togglePreview: () => emit('previewToggle'),
  changePage
});

function handleItemClick(item: ContentType): void {
  setMode('LIST');
  store.id = item.id;
  emitSelectionChangeById(item.id);
}

const getIconState = getSearchResultIcon;
const handleIconError = (item: ContentType) => {
  item.icon = undefined;
};
const getResultKey = (item: ContentType) =>
  String(item.metadata?.plugin_id ?? 'core') + ':' + String(item.id);
const enterListMode = (selectLast = false) => {
  ensureValidTab();
  if (!filteredResults.value.length) return;
  setMode('LIST');
  const index = selectLast
    ? filteredResults.value.length - 1
    : page.value.start - 1;
  const item = filteredResults.value[index];
  store.id = item.id;
  emitSelectionChangeById(item.id);
  ensureItemVisible(index);
};
const enterTabMode = () => setMode('TAB');
const backToSearchMode = () => setMode('SEARCH');
const hasVisibleResults = computed(() => filteredResults.value.length > 0);

defineExpose({
  switchTab,
  enterListMode,
  enterTabMode,
  backToSearchMode,
  runPrimaryAction,
  changePage,
  currentMode,
  tabs,
  activeTab
});
</script>

<style lang="scss" scoped>
.result-list {
  @apply relative flex h-full min-h-0 flex-col overflow-hidden bg-search px-1;
}

.empty-state {
  @apply flex min-h-0 flex-1 flex-col items-center justify-center p-4 text-center;
}

.result {
  @apply flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain;
}

.item {
  @apply relative mx-0.5 my-px grid h-12 min-w-0 shrink-0 cursor-pointer grid-cols-[32px_minmax(0,1fr)_64px] items-center gap-3 rounded-ui border border-transparent px-2.5 text-search transition-colors;

  width: calc(100% - 4px);

  &:hover {
    @apply bg-search-hover;
  }

  &.active {
    @apply border-search-active bg-search-active;
  }

  &.active::before {
    @apply absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-[var(--search-result-accent)];

    content: '';
  }
}

.icon-wrapper {
  @apply flex h-8 w-8 items-center justify-center rounded-ui border border-search bg-search-icon shadow-search-icon;
}

.icon {
  @apply h-6 w-6 object-contain;
}

.content {
  @apply min-w-0 overflow-hidden;
}

.title {
  @apply min-w-0 truncate font-ui text-ui font-semibold text-search-heading;
}

.best-match {
  @apply shrink-0 whitespace-nowrap text-[10px] font-medium leading-none text-search-accent;
}

.text {
  @apply mt-0.5 truncate text-ui-caption text-search-secondary;
}

.item-actions {
  @apply flex h-full flex-col items-end justify-center gap-1;
}

.shortcut-key {
  @apply whitespace-nowrap px-1 font-ui text-[10px] leading-none text-search-secondary;
}

.title :deep(.highlight),
.text :deep(.highlight) {
  @apply rounded-sm bg-search-highlight font-semibold text-search-accent;
}
</style>
