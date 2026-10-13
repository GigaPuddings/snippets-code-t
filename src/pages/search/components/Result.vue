<template>
  <div class="result-layout">
    <section class="top-bar glass-content">
      <div class="tabs-group">
        <button
          v-for="item in primaryTabs"
          :key="item.value"
          class="tab"
          :class="{ active: item.value === activeTab }"
          type="button"
          @click="switchTab(item.value)"
        >
          {{ item.label }}
        </button>
        <el-dropdown trigger="click" @command="switchTab">
          <button
            type="button"
            class="tab"
            :class="{
              active: !primaryTabs.some((tab) => tab.value === activeTab)
            }"
          >
            {{ moreLabel }}
            <ChevronDown width="14" height="14" />
          </button>
          <template #dropdown>
            <el-dropdown-menu
              class="max-h-[min(240px,calc(100vh_-_160px))] overflow-y-auto"
            >
              <el-dropdown-item
                v-for="item in moreTabs"
                :key="item.value"
                :command="item.value"
              >
                {{ item.label }}
                <span class="ml-3 text-ui-caption text-[var(--settings-muted)]">
                  {{ item.count }}
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="top-bar-right">
        <span v-if="activeTabCount > 0" class="result-count">
          {{ activeTabCount }} {{ t('searchResult.total') }}
        </span>
        <button
          class="search-option-toggle"
          type="button"
          :class="{ active: deepSearchEnabled }"
          :title="
            deepSearchEnabled
              ? t('search.deepSearchOn')
              : t('search.deepSearchOff')
          "
          :aria-label="t('search.deepSearch')"
          :aria-pressed="deepSearchEnabled"
          @mousedown.prevent
          @keydown.enter.stop
          @keydown.space.stop
          @click="emit('toggleDeepSearch')"
        >
          <ScanSearch width="16" height="16" />
        </button>
        <button
          class="search-option-toggle"
          type="button"
          :class="{ active: previewPanelVisible }"
          :title="
            previewPanelVisible
              ? t('searchPreview.hidePanel')
              : t('searchPreview.showPanel')
          "
          :aria-label="
            previewPanelVisible
              ? t('searchPreview.hidePanel')
              : t('searchPreview.showPanel')
          "
          :aria-pressed="previewPanelVisible"
          @mousedown.prevent
          @keydown.enter.stop
          @keydown.space.stop
          @click="togglePreviewPanel"
        >
          <PreviewOpen v-if="previewPanelVisible" width="15" height="15" />
          <PreviewCloseOne v-else width="15" height="15" />
        </button>
      </div>
    </section>
    <slot name="status"></slot>

    <transition name="result-drawer">
      <div v-if="results.length" class="result-container">
        <section
          class="result-pane"
          :class="{ expanded: !previewPanelVisible }"
        >
          <ResultList
            ref="resultListRef"
            :results="results"
            :search-query="searchQuery"
            :on-clear-search="onClearSearch"
            @back-to-search="emit('backToSearch')"
            @selection-change="handleSelectionChange"
            @tab-change="handleTabChange"
            @primary-action="handlePrimaryAction"
            @preview-toggle="handlePreviewToggle"
            @page-change="pagination = $event"
          />
        </section>
        <section
          class="preview-pane"
          :class="{ collapsed: !previewPanelVisible }"
          :aria-hidden="!previewPanelVisible"
        >
          <InlinePreview
            ref="inlinePreviewRef"
            :item="selectedItem"
            @primary-action="handlePrimaryAction"
          />
        </section>
      </div>
    </transition>
    <footer
      v-if="results.length"
      class="search-keyboard-footer"
      @keydown.enter.stop
      @keydown.space.stop
    >
      <div class="footer-navigation-hints">
        <span class="footer-hint">
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          {{ t('searchResult.select') }}
        </span>
        <span class="footer-hint">
          <kbd>↵</kbd>
          {{ t('searchResult.open') }}
        </span>
      </div>
      <nav
        v-if="pagination.total > 0"
        class="search-pagination"
        :aria-label="t('searchResult.pagination')"
        @keydown.enter.stop
        @keydown.space.stop
      >
        <CustomButton
          unstyled
          class="pagination-button"
          :disabled="pagination.index === 0"
          :aria-label="t('searchResult.previousPage')"
          :title="t('searchResult.previousPage')"
          @mousedown.prevent
          @click="resultListRef?.changePage(-1)"
        >
          <ChevronLeft width="14" height="14" />
        </CustomButton>
        <span
          class="whitespace-nowrap font-medium tabular-nums text-search-heading"
          role="status"
          :aria-label="t('searchResult.pageStatus', pagination)"
        >
          {{ t('searchResult.pageRange', pagination) }}
        </span>
        <CustomButton
          unstyled
          class="pagination-button"
          :disabled="pagination.index + 1 >= pagination.count"
          :aria-label="t('searchResult.nextPage')"
          :title="t('searchResult.nextPage')"
          @mousedown.prevent
          @click="resultListRef?.changePage(1)"
        >
          <ChevronRight width="14" height="14" />
        </CustomButton>
      </nav>
      <div class="footer-actions">
        <slot name="aiAction"></slot>
        <button type="button" class="footer-close" @click="emit('close')">
          <kbd>Esc</kbd>
          {{ t('searchResult.close') }}
        </button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import ResultList from './ResultList.vue';
import ChevronDown from '~icons/lucide/chevron-down';
import ChevronLeft from '~icons/lucide/chevron-left';
import ChevronRight from '~icons/lucide/chevron-right';
import ScanSearch from '~icons/lucide/scan-search';
import { CustomButton } from '@/components/UI';
import {
  QUICK_SEARCH_PAGE_SIZE,
  type SearchResultPage
} from '../composables/useSearchResultPagination';
import InlinePreview from './InlinePreview.vue';
import { useSearchResultTabs } from '../composables/useSearchResultTabs';
import { useI18n } from 'vue-i18n';
import PreviewCloseOne from '~icons/lucide/panel-right-open';
import PreviewOpen from '~icons/lucide/panel-right-close';
import {
  getQuickSearchPreviewVisible,
  setQuickSearchPreviewVisible
} from '@/api/appConfig';
import modal from '@/utils/modal';

const { t } = useI18n();

const props = defineProps<{
  results: ContentType[];
  searchQuery?: string;
  deepSearchEnabled: boolean;
  onClearSearch: () => void;
}>();

const emit = defineEmits<{
  backToSearch: [];
  close: [];
  toggleDeepSearch: [];
}>();

const resultListRef = ref<InstanceType<typeof ResultList> | null>(null);
const inlinePreviewRef = ref<InstanceType<typeof InlinePreview> | null>(null);
const activeTab = ref<SummarizeType>('text');
const selectedItem = ref<ContentType | null>(null);
const previewPanelVisible = ref(false);
const pagination = ref<SearchResultPage>({
  index: 0,
  count: 0,
  size: QUICK_SEARCH_PAGE_SIZE,
  start: 0,
  end: 0,
  total: 0
});
let previewVisibilityRevision = 0;
let previewVisibilityPersistence = Promise.resolve();
const {
  tabs: resultTabs,
  primaryTabs,
  moreTabs,
  getTabCount,
  getTabResults
} = useSearchResultTabs(() => props.results, t);
const activeTabCount = computed(() => getTabCount(activeTab.value));
const activeTabResults = computed(() => getTabResults(activeTab.value));

const moreLabel = computed(
  () =>
    moreTabs.value.find((tab) => tab.value === activeTab.value)?.label ??
    t('searchResult.more')
);
onMounted(async (): Promise<void> => {
  const revisionAtLoad = previewVisibilityRevision;
  try {
    const persistedVisible = await getQuickSearchPreviewVisible();
    if (revisionAtLoad === previewVisibilityRevision) {
      previewPanelVisible.value = persistedVisible;
    }
  } catch (error) {
    console.error('[快速搜索] 读取预览面板状态失败:', error);
  }
});

function togglePreviewPanel(): void {
  const visible = !previewPanelVisible.value;
  previewPanelVisible.value = visible;
  previewVisibilityRevision += 1;
  previewVisibilityPersistence = previewVisibilityPersistence
    .then(() => setQuickSearchPreviewVisible(visible))
    .catch((error) => {
      console.error('[快速搜索] 保存预览面板状态失败:', error);
      modal.error(t('searchPreview.saveVisibilityFailed'));
    });
}

watch(
  resultTabs,
  (tabs) => {
    if (!tabs.some((tab) => tab.value === activeTab.value)) {
      switchTab('text');
    }
  },
  { immediate: true }
);

function switchTab(tab: SummarizeType) {
  activeTab.value = tab;
  resultListRef.value?.switchTab(tab);
}

function handleTabChange(tab: SummarizeType) {
  activeTab.value = tab;
  if (getTabCount(tab) === 0) {
    selectedItem.value = null;
  }
}

function handleSelectionChange(item: ContentType | null) {
  selectedItem.value = item;
}

const ensurePreviewSelection = () => {
  const results = props.results;
  if (results.length === 0) {
    selectedItem.value = null;
    activeTab.value = 'text';
    return;
  }

  const tabResults = activeTabResults.value;
  const selectedId = selectedItem.value?.id;
  const currentSelection = tabResults.find((item) => item.id === selectedId);
  if (currentSelection) {
    selectedItem.value = currentSelection;
    return;
  }

  selectedItem.value = tabResults[0] ?? null;
};

watch(() => props.results, ensurePreviewSelection, { immediate: true });
watch(activeTab, ensurePreviewSelection);

async function handlePrimaryAction(item: ContentType) {
  await resultListRef.value?.runPrimaryAction(item);
}

async function runSelectedPrimaryAction(): Promise<void> {
  const item = selectedItem.value;
  if (item) {
    await handlePrimaryAction(item);
  }
}

function handlePreviewToggle(): void {
  inlinePreviewRef.value?.togglePreview();
}

defineExpose({
  switchTab: (tab: SummarizeType) => switchTab(tab),
  runSelectedPrimaryAction,
  enterListMode: (selectLast = false) =>
    resultListRef.value?.enterListMode(selectLast),
  enterTabMode: () => resultListRef.value?.enterTabMode(),
  backToSearchMode: () => resultListRef.value?.backToSearchMode()
});
</script>

<style lang="scss" scoped>
.result-layout {
  @apply flex min-h-0 flex-1 flex-col overflow-hidden;
}

.top-bar {
  @apply mb-1 flex h-11 shrink-0 items-center justify-between gap-2 px-1;
}

.tabs-group {
  @apply flex min-w-0 items-center gap-1;
}

.top-bar-right {
  @apply flex shrink-0 items-center gap-2;
}

.tab {
  @apply inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-ui border border-transparent bg-transparent px-2.5 font-ui text-ui font-medium text-search-secondary;
}

.tab:hover {
  @apply bg-search-hover text-search;
}

.tab.active {
  @apply border-search-active bg-search-active text-search-accent;
}

.search-option-toggle {
  @apply flex h-7 w-7 items-center justify-center rounded-ui bg-transparent text-search-secondary;
}

.search-option-toggle:hover {
  @apply bg-search-hover text-search;
}

.search-option-toggle.active {
  @apply bg-search-active text-search-accent;
}

.result-count {
  @apply whitespace-nowrap text-ui-caption text-search-secondary;
}

.result-container {
  @apply flex min-h-0 flex-1 overflow-hidden;
}

.result-pane {
  @apply min-h-0 min-w-0 flex-1 overflow-hidden;
}

.preview-pane {
  @apply min-h-0 overflow-hidden border-l border-search;

  flex: 0 0 48%;
}

.preview-pane.collapsed {
  @apply hidden;
}

.search-keyboard-footer {
  @apply mt-1 grid h-10 shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 border-t border-search bg-search-footer px-1 text-ui-caption leading-none text-search-secondary;
}

.footer-navigation-hints {
  @apply flex min-w-0 items-center gap-3;
}

.footer-actions {
  @apply flex min-w-0 items-center justify-end gap-3;
}

.footer-close {
  @apply inline-flex h-6 shrink-0 items-center gap-1 border-l border-search pl-3;
}

.footer-close:hover {
  @apply text-search-heading;
}

.footer-hint {
  @apply inline-flex h-6 shrink-0 items-center gap-1 whitespace-nowrap;
}

.search-pagination {
  @apply inline-flex shrink-0 items-center justify-self-center gap-1;
}

.pagination-button {
  @apply flex h-6 w-6 items-center justify-center rounded-ui bg-transparent text-search-secondary;

  &:hover:not(:disabled) {
    @apply bg-search-hover text-search;
  }

  &:disabled {
    @apply cursor-default opacity-40;
  }

  &:focus-visible {
    @apply outline outline-1 outline-offset-1 outline-[var(--search-result-accent)];
  }
}

.search-keyboard-footer :deep(kbd) {
  @apply inline-flex h-5 shrink-0 items-center justify-center rounded border border-search px-1 font-ui text-[10px] leading-none;
}
</style>
