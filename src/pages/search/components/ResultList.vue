<template>
  <main
    class="result-list glass-content"
    :class="{ 'has-results': hasVisibleResults }"
  >
    <div v-if="!hasVisibleResults" class="empty-state">
      <p class="text-ui font-medium text-search">{{ t('search.noResults') }}</p>
      <p class="mt-2 text-ui-caption text-search-secondary">
        {{ t('search.suggestRelax') }}
      </p>
    </div>
    <RecycleScroller
      v-else
      ref="scrollerRef"
      id="quick-search-results"
      class="result"
      :key="activeTab"
      :items="renderRows"
      size-field="size"
      type-field="kind"
      :buffer="itemSize * 2"
      :emit-update="true"
      key-field="__rowKey"
      role="listbox"
      :aria-label="t('searchResult.all')"
      @scroll.passive="syncShortcutWindowFromScroll"
      @update="handleScrollerUpdate"
      v-slot="{ item: row }"
    >
      <h2 v-if="row.kind === 'heading'" class="result-group-heading">
        {{ t(row.labelKey) }}
      </h2>
      <div
        v-else
        class="item"
        :class="{ active: row.item.id === activeItemId }"
        role="option"
        :aria-selected="row.item.id === activeItemId"
        :id="`quick-result-${encodeURIComponent(String(row.item.id))}`"
        @click="handleItemClick(row.item)"
      >
        <div class="icon-wrapper">
          <component
            v-if="row.item.summarize === 'file' && !row.item.icon"
            :is="getFileIconComponent(row.item)"
            class="icon text-search-secondary"
          />
          <component
            v-else-if="getIconState(row.item).component"
            :is="getIconState(row.item).component"
            class="icon text-search-secondary"
          />
          <img
            v-else-if="getIconState(row.item).src"
            :src="getIconState(row.item).src"
            class="icon"
            alt=""
            @error="handleIconError(row.item)"
            loading="eager"
            decoding="async"
          />
          <span v-else class="text-ui-caption text-search-secondary">
            {{ getIconState(row.item).fallbackText }}
          </span>
        </div>
        <div class="content">
          <div class="title" v-html="getDisplayTitle(row.item)"></div>
          <p class="text" v-html="getDisplayContentHighlighted(row.item)"></p>
        </div>
        <div class="item-actions">
          <span
            v-if="
              row.item.searchAction?.kind === 'new-chat' &&
              row.item.id === activeItemId
            "
            class="text-ui-caption text-search-secondary"
          >
            {{ t('searchResult.newChatAction') }}
          </span>
          <kbd
            v-else-if="
              row.index >= visibleShortcutStart &&
              row.index < visibleShortcutEnd
            "
            class="shortcut-key"
          >
            Alt {{ row.index - visibleShortcutStart + 1 }}
          </kbd>
          <ChevronRight
            v-else-if="row.item.searchAction"
            class="text-search-secondary"
            width="15"
            height="15"
          />
        </div>
      </div>
    </RecycleScroller>
  </main>
</template>
<script lang="ts" setup>
import { useConfigurationStore } from '@/store';
import ChevronRight from '~icons/lucide/chevron-right';
import { buildSearchRenderRows } from '@/search/resultGroups';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchResultActions } from '../composables/useSearchResultActions';
import { useSearchResultDisplay } from '../composables/useSearchResultDisplay';
import { getSearchResultIcon } from '../composables/useSearchResultIcon';
import { useSearchResultKeyboard } from '../composables/useSearchResultKeyboard';
import { useSearchResultState } from '../composables/useSearchResultState';
import { useI18n } from 'vue-i18n';
import {
  refreshRecycleScroller,
  type RecycleScrollerInstance
} from '@/utils/recycleScroller';

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
  itemSize?: number;
}>();

const emit = defineEmits<{
  backToSearch: [];
  selectionChange: [item: ContentType | null];
  tabChange: [tab: SummarizeType];
  primaryAction: [item: ContentType];
  previewToggle: [];
}>();

interface ResultScrollerRef extends RecycleScrollerInstance {
  $el: HTMLElement;
  scrollToPosition: (position: number) => void;
}

const scrollerRef = ref<ResultScrollerRef | null>(null);
const visibleShortcutStart = ref(0);
const visibleResultRows = 6;
const visibleShortcutEnd = ref(visibleResultRows);
const itemSize = computed(() => props.itemSize ?? 52);
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
  preserveSelection: () => !isSearchMode.value,
  onSelectionAutoChange: (item) => {
    store.id = item?.id ? String(item.id) : '';
    emit('selectionChange', item);
  }
});

const renderRows = computed(() =>
  buildSearchRenderRows(
    tabResults.value,
    activeTab.value === 'text',
    !props.searchQuery?.trim(),
    itemSize.value
  )
);
const filteredResults = computed(() =>
  renderRows.value.flatMap((row) => (row.kind === 'result' ? [row.item] : []))
);

const { getDisplayTitle, getDisplayContentHighlighted, getFileIconComponent } =
  useSearchResultDisplay(() => props.searchQuery, t);

const { showHideWindow, runPrimaryAction } = useSearchResultActions({
  onClearSearch: props.onClearSearch,
  copySuccessMessage: t('searchResult.copySuccess'),
  copyFailedMessage: t('searchResult.copyFailed')
});

const activeItemId = computed(() => selectedItemId.value ?? store.id);

const emitSelectionChangeById = (id: string | number) => {
  emit('selectionChange', selectItemById(id));
};

watch(
  [filteredResults, itemSize],
  async () => {
    syncSelectionWithResults(store.id);

    await nextTick();
    refreshRecycleScroller(scrollerRef.value);
    syncShortcutWindowFromScroll();
  },
  { immediate: true }
);

watch(
  () => props.searchQuery,
  () => {
    void resetShortcutViewport();
  }
);

watch(
  () => props.results.length,
  (length) => {
    setCanSwitchToList(length > 0);
  },
  { immediate: true }
);

function switchTab(tab: SummarizeType) {
  setActiveTab(tab);
  emit('tabChange', tab);

  if (!isTabMode.value && !isListMode.value) {
    setMode('TAB');
  }

  if (isListMode.value && filteredResults.value.length > 0) {
    void resetShortcutViewport();
  }
}

const visibleShortcutItems = computed(() =>
  filteredResults.value.slice(
    visibleShortcutStart.value,
    visibleShortcutEnd.value
  )
);

function syncShortcutWindowFromScroll(): void {
  const scroller = scrollerRef.value?.$el;
  const resultCount = filteredResults.value.length;
  if (!scroller) {
    visibleShortcutStart.value = 0;
    visibleShortcutEnd.value = Math.min(resultCount, visibleResultRows);
    return;
  }

  const viewportStart = scroller.scrollTop;
  const viewportEnd = viewportStart + scroller.clientHeight;
  const visible = renderRows.value.filter(
    (row) =>
      row.kind === 'result' &&
      row.offset + row.size - 2 > viewportStart &&
      row.offset + 2 < viewportEnd
  );
  const indices = visible.flatMap((row) =>
    row.kind === 'result' ? [row.index] : []
  );
  visibleShortcutStart.value = indices[0] ?? 0;
  visibleShortcutEnd.value = Math.min(
    (indices.at(-1) ?? -1) + 1,
    visibleShortcutStart.value + 9
  );
}

function handleScrollerUpdate(): void {
  syncShortcutWindowFromScroll();
}

async function resetShortcutViewport(): Promise<void> {
  visibleShortcutStart.value = 0;
  visibleShortcutEnd.value = Math.min(
    filteredResults.value.length,
    visibleResultRows
  );

  await nextTick();
  const scroller = scrollerRef.value;
  if (!scroller) return;

  scroller.scrollToPosition(0);
  scroller.$el.scrollTop = 0;
  refreshRecycleScroller(scroller);
  await nextTick();
  syncShortcutWindowFromScroll();
}

function ensureItemVisible(index: number): void {
  const scrollerInstance = scrollerRef.value;
  if (!scrollerInstance) return;

  nextTick(() => {
    const scroller = scrollerInstance.$el;
    if (!scroller || index < 0) return;

    const row = renderRows.value.find(
      (row) => row.kind === 'result' && row.index === index
    );
    if (!row) return;
    const targetTop = row.offset;
    const targetBottom = targetTop + row.size;
    const viewportTop = scroller.scrollTop;
    const viewportBottom = viewportTop + scroller.clientHeight;

    if (targetBottom > viewportBottom) {
      scroller.scrollTop = targetBottom - scroller.clientHeight;
    } else if (targetTop < viewportTop) {
      scroller.scrollTop = targetTop;
    }

    refreshRecycleScroller(scrollerInstance);
    syncShortcutWindowFromScroll();
  });
}

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
  primaryAction: (item) => emit('primaryAction', item),
  togglePreview: () => emit('previewToggle')
});

function handleItemClick(item: ContentType) {
  if (!isListMode.value) {
    setMode('LIST');
  }
  syncSelectedItem(item);
  emit('selectionChange', item);
  void runPrimaryAction(item);
}

function syncSelectedItem(item: ContentType) {
  store.id = item.id;
  selectItemById(item.id);
}

const handleIconError = (item: ContentType) => {
  item.icon = undefined;
};

const getIconState = getSearchResultIcon;

const enterListMode = (selectLast = false) => {
  ensureValidTab();
  if (filteredResults.value.length > 0 || props.results.length > 0) {
    setMode('LIST');
    if (selectLast && filteredResults.value.length > 0) {
      const lastIndex = filteredResults.value.length - 1;
      const lastItem = filteredResults.value[lastIndex];
      syncSelectedItem(lastItem);
      emit('selectionChange', lastItem);
      ensureItemVisible(lastIndex);
    }
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
  @apply relative flex h-full min-h-0 flex-col overflow-hidden bg-search px-1;
}

.empty-state {
  @apply flex min-h-0 flex-1 flex-col items-center justify-center p-4 text-center;
}

.result {
  @apply min-h-0 flex-1 overflow-y-auto;
}

.result-group-heading {
  @apply m-0 flex h-7 items-end px-2 pb-1 text-ui-caption font-medium text-search-secondary;
}

.item {
  @apply mx-0.5 my-0.5 grid h-12 min-w-0 cursor-pointer grid-cols-[28px_minmax(0,1fr)_64px] items-center gap-3 rounded-ui px-2 text-search transition-colors;

  width: calc(100% - 4px);

  &:hover {
    @apply bg-search-hover;
  }

  &.active {
    background-color: var(--search-result-active);
  }
}

.icon-wrapper {
  @apply flex h-7 w-7 items-center justify-center;
}

.icon {
  @apply h-[22px] w-[22px] object-contain;
}

.content {
  @apply min-w-0 overflow-hidden;
}

.title {
  @apply truncate font-ui text-ui font-medium text-search;
}

.text {
  @apply mt-0.5 truncate text-ui-caption text-search-secondary;
}

.item-actions {
  @apply flex items-center justify-end;
}

.shortcut-key {
  @apply whitespace-nowrap rounded border border-search bg-transparent px-1 py-0.5 font-ui text-[10px] text-search-secondary;
}

.title :deep(.highlight),
.text :deep(.highlight) {
  @apply rounded-sm font-medium;

  color: var(--workspace-nav-heading);
  background-color: var(--workspace-nav-selected);
}
</style>
