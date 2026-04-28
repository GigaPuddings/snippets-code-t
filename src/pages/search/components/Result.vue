<template>
  <div class="result-layout" :class="{ empty: !results.length }">
    <section v-if="results.length" class="top-bar glass-content">
      <div class="tabs-group">
        <template v-for="item in resultTabs" :key="item.value">
          <button class="tab" :class="{ active: item.value === activeTab }" type="button"
            @click="switchTab(item.value)">
            <span>{{ item.label }}</span>
          </button>
        </template>
      </div>
      <div class="top-bar-right">
        <span v-if="activeTabCount > 0" class="result-count">{{ activeTabCount }} {{ t('searchResult.total')}}</span>
        <button class="return-hint" type="button" @click="emit('backToSearch')">
          <span class="hint-key">Tab</span>
          <span class="hint-text">{{ isListMode ? t('searchResult.backToResults') : t('searchResult.backToSearch') }}</span>
        </button>
      </div>
    </section>

    <transition name="result-drawer">
      <div v-if="results.length" class="result-container">
        <section class="result-pane">
          <ResultList ref="resultListRef" :results="results" :search-query="searchQuery"
            :on-clear-search="onClearSearch" :item-size="58" @back-to-search="emit('backToSearch')"
            @selection-change="handleSelectionChange" @tab-change="handleTabChange"
            @primary-action="handlePrimaryAction" />
        </section>
        <section class="preview-pane">
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
import { useSearchResultState } from '../composables/useSearchResultState';
import { useI18n } from 'vue-i18n';

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
const measureItemSize = () => {
};
const {
  tabs: resultTabs,
  activeTab,
  activeTabCount,
  selectedItem,
  getTabCount,
  switchTab: setActiveTab,
  selectItem
} = useSearchResultState(() => props.results, t);

function switchTab(tab: SummarizeType) {
  setActiveTab(tab);
  resultListRef.value?.switchTab(tab);
  nextTick(measureItemSize);
}

function handleTabChange(tab: SummarizeType) {
  activeTab.value = tab;
  if (getTabCount(tab) === 0) {
    selectItem(null);
  }
  nextTick(measureItemSize);
}

function handleSelectionChange(item: ContentType | null) {
  selectItem(item);
}

async function handlePrimaryAction(item: ContentType) {
  await resultListRef.value?.runPrimaryAction(item);
}

onMounted(() => {
  measureItemSize();
  window.addEventListener('resize', measureItemSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', measureItemSize);
});

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
  transition: height 0.18s ease, min-height 0.18s ease, opacity 0.18s ease;

  &.empty {
    height: 0;
    min-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
  }
}

.result-drawer-enter-active,
.result-drawer-leave-active {
  transition: all 0.18s ease;
}

.result-drawer-enter-from,
.result-drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

// 7px
.top-bar {
  @apply flex items-center justify-between px-3 py-[0.4375rem] rounded-tl-lg rounded-tr-lg border-b border-search flex-shrink-0;

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
      @apply bg-search-hover text-search border-search;

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

  .result-pane,
  .preview-pane {
    @apply w-1/2 min-h-0;
  }

  .result-pane {
    @apply overflow-hidden;
  }
}
</style>
