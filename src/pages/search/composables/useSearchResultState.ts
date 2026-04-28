import { computed, ref, watch, type MaybeRefOrGetter, toValue } from 'vue';
import type { ComposerTranslation } from 'vue-i18n';
import { useSearchResultTabs } from './useSearchResultTabs';

interface UseSearchResultStateOptions {
  onSelectionAutoChange?: (item: ContentType | null) => void;
}

export function useSearchResultState(
  results: MaybeRefOrGetter<ContentType[]>,
  t: ComposerTranslation,
  options: UseSearchResultStateOptions = {}
) {
  const activeTab = ref<SummarizeType>('text');
  const selectedItemId = ref<string | number | null>(null);
  const { tabs, getTabCount, getTabResults } = useSearchResultTabs(results, t);

  const currentTabIndex = computed(() => tabs.value.findIndex((item) => item.value === activeTab.value));
  const filteredResults = computed(() => getTabResults(activeTab.value));
  const activeTabCount = computed(() => getTabCount(activeTab.value));

  const selectedItem = computed(() => {
    if (activeTabCount.value === 0) {
      return null;
    }

    const tabResults = filteredResults.value;
    if (selectedItemId.value == null) {
      return tabResults[0] ?? null;
    }

    return tabResults.find((item) => item.id === selectedItemId.value) ?? tabResults[0] ?? null;
  });

  const switchTab = (tab: SummarizeType) => {
    activeTab.value = tab;
    selectedItemId.value = null;
  };

  const selectItem = (item: ContentType | null) => {
    selectedItemId.value = item?.id ?? null;
  };

  const selectItemById = (id: string | number) => {
    selectedItemId.value = id;
    return filteredResults.value.find((item) => item.id === id) ?? null;
  };

  const ensureValidTab = () => {
    if (filteredResults.value.length === 0 && toValue(results).length > 0) {
      switchTab('text');
    }
  };

  const syncSelectionWithResults = (currentSelectedId?: string | number) => {
    const firstResult = filteredResults.value[0] ?? null;
    const hasSelectedItemInResults = filteredResults.value.some((item) => item.id === currentSelectedId);

    if (hasSelectedItemInResults) {
      selectedItemId.value = currentSelectedId ?? null;
      return null;
    }

    selectItem(firstResult);
    options.onSelectionAutoChange?.(firstResult);
    return firstResult;
  };

  watch(filteredResults, (currentResults, previousResults) => {
    const firstResult = currentResults[0] ?? null;
    const previousFirstResultId = previousResults?.[0]?.id ?? null;

    if (firstResult?.id !== previousFirstResultId || !currentResults.some((item) => item.id === selectedItemId.value)) {
      selectItem(firstResult);
      options.onSelectionAutoChange?.(firstResult);
    }
  }, { immediate: true });

  return {
    tabs,
    activeTab,
    currentTabIndex,
    filteredResults,
    activeTabCount,
    selectedItem,
    selectedItemId,
    getTabCount,
    switchTab,
    selectItem,
    selectItemById,
    ensureValidTab,
    syncSelectionWithResults
  };
}
