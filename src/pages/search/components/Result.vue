<template>
  <div
    class="result-layout"
    :class="{ empty: !results.length }"
    :style="{ height: results.length ? `${listHeight + 74}px` : '0px' }"
  >
    <section v-if="results.length" class="top-bar glass-content">
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
          class="preview-panel-toggle"
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
          @click="togglePreviewPanel"
        >
          <PreviewOpen v-if="previewPanelVisible" width="15" height="15" />
          <PreviewCloseOne v-else width="15" height="15" />
        </button>
      </div>
    </section>

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
            :item-size="52"
            @back-to-search="emit('backToSearch')"
            @selection-change="handleSelectionChange"
            @tab-change="handleTabChange"
            @primary-action="handlePrimaryAction"
            @preview-toggle="handlePreviewToggle"
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
    <footer v-if="results.length" class="search-keyboard-footer">
      <span class="inline-flex items-center gap-1">
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        {{ t('searchResult.select') }}
      </span>
      <span class="inline-flex items-center gap-1">
        <kbd>↵</kbd>
        {{ t('searchResult.open') }}
      </span>
      <slot name="aiAction"></slot>
      <button
        type="button"
        class="ml-auto inline-flex items-center gap-1"
        @click="emit('close')"
      >
        <kbd>Esc</kbd>
        {{ t('searchResult.close') }}
      </button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import ResultList from './ResultList.vue';
import ChevronDown from '~icons/lucide/chevron-down';
import { buildSearchRenderRows } from '@/search/resultGroups';
import InlinePreview from './InlinePreview.vue';
import { useSearchResultTabs } from '../composables/useSearchResultTabs';
import { useI18n } from 'vue-i18n';
import PreviewCloseOne from '~icons/lucide/panel-right-open';
import PreviewOpen from '~icons/lucide/panel-right-close';
import {
  getQuickSearchPreviewVisible,
  setQuickSearchPreviewVisible
} from '@/api/appConfig';

const { t } = useI18n();

const props = defineProps<{
  results: ContentType[];
  searchQuery?: string;
  onClearSearch: () => void;
}>();

const emit = defineEmits<{
  backToSearch: [];
  close: [];
}>();

const resultListRef = ref<InstanceType<typeof ResultList> | null>(null);
const inlinePreviewRef = ref<InstanceType<typeof InlinePreview> | null>(null);
const activeTab = ref<SummarizeType>('text');
const selectedItem = ref<ContentType | null>(null);
const previewPanelVisible = ref(false);
let previewVisibilityRevision = 0;
let previewVisibilityPersistence = Promise.resolve();
const {
  tabs: resultTabs,
  getTabCount,
  getTabResults
} = useSearchResultTabs(() => props.results, t);
const activeTabCount = computed(() => getTabCount(activeTab.value));
const activeTabResults = computed(() => getTabResults(activeTab.value));

const primaryTabs = computed(() =>
  resultTabs.value.filter((tab) =>
    ['text', 'navigation', 'settings', 'content'].includes(tab.value)
  )
);
const moreTabs = computed(() =>
  resultTabs.value.filter((tab) => !primaryTabs.value.includes(tab))
);
const moreLabel = computed(
  () =>
    moreTabs.value.find((tab) => tab.value === activeTab.value)?.label ??
    t('searchResult.more')
);
const maximumListHeight = Math.min(
  450,
  Math.max(220, window.screen.availHeight - 180)
);
const listHeight = computed(() => {
  const rows = buildSearchRenderRows(
    activeTabResults.value,
    activeTab.value === 'text',
    !props.searchQuery?.trim()
  );
  const last = rows.at(-1);
  return Math.min(
    maximumListHeight,
    Math.max(
      previewPanelVisible.value ? 300 : 104,
      last ? last.offset + last.size : 104
    )
  );
});

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

  selectedItem.value = tabResults[0] ?? results[0] ?? null;
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
  @apply flex min-h-0 flex-col;

  transition: height 0.15s ease;
}

.result-layout.empty {
  @apply pointer-events-none overflow-hidden opacity-0;
}

.top-bar {
  @apply flex h-10 shrink-0 items-center justify-between gap-2 px-1;
}

.tabs-group {
  @apply flex min-w-0 items-center gap-1;
}

.top-bar-right {
  @apply flex shrink-0 items-center gap-2;
}

.tab {
  @apply inline-flex items-center gap-1 whitespace-nowrap rounded-ui border-0 bg-transparent px-2.5 py-1.5 font-ui text-ui text-search-secondary;
}

.tab:hover,
.tab.active {
  @apply bg-search-hover text-search;
}

.preview-panel-toggle {
  @apply flex h-7 w-7 items-center justify-center rounded-ui bg-transparent text-search-secondary;
}

.preview-panel-toggle:hover,
.preview-panel-toggle.active {
  @apply bg-search-hover text-search;
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
  @apply mt-1 flex h-8 shrink-0 items-center gap-3 border-t border-search px-1 text-ui-caption text-search-secondary;
}

kbd {
  @apply rounded border border-search px-1 py-0.5 font-ui text-[10px];
}
</style>
