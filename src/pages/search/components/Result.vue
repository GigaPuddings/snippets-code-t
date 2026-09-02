<template>
  <div class="result-layout" :class="{ empty: !results.length }">
    <section v-if="results.length" class="top-bar glass-content">
      <div class="tabs-group">
        <template v-for="item in resultTabs" :key="item.value">
          <button
            class="tab"
            :class="{ active: item.value === activeTab }"
            type="button"
            @click="switchTab(item.value)"
          >
            <span>{{ item.label }}</span>
          </button>
        </template>
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
          <PreviewOpen v-if="previewPanelVisible" theme="outline" size="15" />
          <PreviewCloseOne v-else theme="outline" size="15" />
        </button>
        <button class="return-hint" type="button" @click="emit('backToSearch')">
          <span class="hint-key">Tab</span>
          <span class="hint-text">
            {{
              isListMode
                ? t('searchResult.backToResults')
                : t('searchResult.backToSearch')
            }}
          </span>
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
          />
        </section>
        <section
          class="preview-pane"
          :class="{ collapsed: !previewPanelVisible }"
          :aria-hidden="!previewPanelVisible"
        >
          <InlinePreview :item="selectedItem" />
        </section>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import ResultList from './ResultList.vue';
import InlinePreview from './InlinePreview.vue';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchResultTabs } from '../composables/useSearchResultTabs';
import { useI18n } from 'vue-i18n';
import { PreviewCloseOne, PreviewOpen } from '@icon-park/vue-next';
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
}>();

const { isListMode } = useFocusMode();

const resultListRef = ref<InstanceType<typeof ResultList> | null>(null);
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
  if (selectedId != null && tabResults.some((item) => item.id === selectedId)) {
    return;
  }

  selectedItem.value = tabResults[0] ?? results[0] ?? null;
};

watch(() => props.results, ensurePreviewSelection, { immediate: true });
watch(activeTab, ensurePreviewSelection);

async function handlePrimaryAction(item: ContentType) {
  await resultListRef.value?.runPrimaryAction(item);
}

defineExpose({
  switchTab: (tab: SummarizeType) => switchTab(tab),
  enterListMode: () => resultListRef.value?.enterListMode(),
  enterTabMode: () => resultListRef.value?.enterTabMode(),
  backToSearchMode: () => resultListRef.value?.backToSearchMode()
});
</script>

<style lang="scss" scoped>
.result-layout {
  @apply flex flex-col min-h-0;

  height: 404px;
  transition:
    height 0.18s ease,
    min-height 0.18s ease,
    opacity 0.18s ease;

  &.empty {
    height: 0;
    min-height: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
  }
}

.result-drawer-enter-active,
.result-drawer-leave-active {
  transition: all 0.18s ease;
}

.result-drawer-enter-from,
.result-drawer-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-8px);
}

// 7px
.top-bar {
  @apply flex items-center justify-between px-3 pb-[0.4375rem] rounded-tl-lg rounded-tr-lg border-b border-search flex-shrink-0;

  .tabs-group {
    @apply flex items-center gap-2 min-w-0 overflow-x-auto overflow-y-hidden flex-nowrap;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .top-bar-right {
    @apply flex items-center gap-3 shrink-0;
  }

  .preview-panel-toggle {
    @apply inline-flex h-7 w-7 items-center justify-center rounded-md border border-transparent bg-transparent text-search-secondary;

    transition:
      color 0.18s ease,
      background-color 0.18s ease,
      border-color 0.18s ease;

    &:hover,
    &.active {
      @apply border-search bg-search-hover text-search;
    }

    &:focus-visible {
      @apply outline-none;

      box-shadow: 0 0 0 2px
        color-mix(in srgb, var(--search-result-accent) 28%, transparent);
    }
  }

  .result-count {
    @apply text-xs text-search-secondary whitespace-nowrap;
  }

  .tab {
    @apply inline-flex items-center gap-2 px-3 py-1.5 text-sm text-search-secondary cursor-pointer rounded-md bg-transparent border border-transparent whitespace-nowrap flex-none;

    .tab-count {
      @apply text-[11px] px-1.5 py-0.5 rounded bg-search text-search-secondary;

      border: 1px solid var(--search-secondary);
    }

    &.active {
      @apply bg-search-hover border-search;

      color: var(--search-result-accent);

      .tab-count {
        @apply bg-search text-search;

        border-color: var(--search-text);
      }
    }
  }

  .tab-shortcut {
    @apply text-[11px] text-search-secondary hidden sm:inline;
  }

  .return-hint {
    @apply flex items-center gap-1 text-xs cursor-pointer bg-transparent border-0 p-0;

    .hint-key {
      @apply px-1.5 py-0.5 rounded font-medium border;
    }

    .hint-text {
      @apply text-panel-text-secondary;
    }
  }
}

.result-container {
  @apply flex gap-0 min-h-0 flex-1 overflow-hidden;

  .result-pane {
    @apply min-h-0 min-w-0 overflow-hidden;

    flex: 1 1 50%;
    transition: flex-basis 0.22s ease;

    &.expanded {
      flex-basis: 100%;
    }
  }

  .preview-pane {
    @apply relative min-h-0 overflow-hidden;

    flex: 0 0 50%;
    max-width: 50%;
    opacity: 1;
    transition:
      flex-basis 0.22s ease,
      max-width 0.22s ease,
      opacity 0.16s ease,
      transform 0.22s ease;
    transform: translateX(0);

    &.collapsed {
      flex-basis: 0;
      max-width: 0;
      pointer-events: none;
      opacity: 0;
      transform: translateX(12px);
    }
  }
}
</style>
