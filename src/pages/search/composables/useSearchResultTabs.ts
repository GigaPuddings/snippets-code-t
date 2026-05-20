import { computed, type MaybeRefOrGetter, toValue } from 'vue';
import type { ComposerTranslation } from 'vue-i18n';
import { usePluginStore } from '@/store';

type SearchResultTabValue = SummarizeType;

type SearchResultTabMatcher = (item: ContentType) => boolean;

const getResultSource = (item: ContentType): string =>
  typeof item.metadata?.source === 'string'
    ? item.metadata.source
    : (item.summarize ?? 'text');

export interface SearchResultTab {
  label: string;
  value: SearchResultTabValue;
  count: number;
  matcher?: SearchResultTabMatcher;
  visible?: boolean;
}

interface SearchResultTabDefinition {
  labelKey: string;
  value: SearchResultTabValue;
  matcher?: SearchResultTabMatcher;
  alwaysVisible?: boolean;
  pluginId?: string;
}

const SEARCH_RESULT_TAB_DEFINITIONS: SearchResultTabDefinition[] = [
  {
    labelKey: 'searchResult.all',
    value: 'text',
    alwaysVisible: true
  },
  {
    labelKey: 'searchResult.apps',
    value: 'app',
    matcher: (item) => getResultSource(item) === 'app',
    pluginId: 'local-launcher'
  },
  {
    labelKey: 'searchResult.bookmarks',
    value: 'bookmark',
    matcher: (item) => getResultSource(item) === 'bookmark',
    pluginId: 'local-launcher'
  },
  {
    labelKey: 'searchResult.files',
    value: 'file',
    matcher: (item) => getResultSource(item) === 'file',
    pluginId: 'desktop-files'
  },
  {
    labelKey: 'searchResult.code',
    value: 'code',
    matcher: (item) => item.type === 'code',
    alwaysVisible: true
  },
  {
    labelKey: 'searchResult.notes',
    value: 'note',
    matcher: (item) => item.type === 'note',
    alwaysVisible: true
  }
];

const getRowKey = (item: ContentType, index: number) => `${String(item.id)}-${item.summarize ?? 'text'}-${index}`;

export function useSearchResultTabs(results: MaybeRefOrGetter<ContentType[]>, t: ComposerTranslation) {
  const pluginStore = usePluginStore();
  const tabEntries = computed(() => {
    const sourceResults = toValue(results);
    const groupedResults = new Map<SearchResultTabValue, Array<ContentType & { __rowKey: string }>>();

    for (const definition of SEARCH_RESULT_TAB_DEFINITIONS) {
      groupedResults.set(definition.value, []);
    }

    sourceResults.forEach((item, index) => {
      const resultWithKey = {
        ...item,
        __rowKey: getRowKey(item, index)
      };

      groupedResults.get('text')?.push(resultWithKey);

      for (const definition of SEARCH_RESULT_TAB_DEFINITIONS) {
        if (definition.value === 'text') continue;
        if (definition.matcher?.(item)) {
          groupedResults.get(definition.value)?.push(resultWithKey);
        }
      }
    });

    return groupedResults;
  });

  const tabs = computed<SearchResultTab[]>(() => SEARCH_RESULT_TAB_DEFINITIONS
    .map((definition) => ({
      label: t(definition.labelKey),
      value: definition.value,
      count: tabEntries.value.get(definition.value)?.length ?? 0,
      matcher: definition.matcher,
      visible:
        definition.alwaysVisible ||
        (definition.pluginId ? pluginStore.isEnabled(definition.pluginId) : false)
    }))
    .filter((tab) => tab.visible || tab.count > 0));

  const getTabResults = (tab: SearchResultTabValue) => tabEntries.value.get(tab) ?? [];
  const getTabCount = (tab: SearchResultTabValue) => tabEntries.value.get(tab)?.length ?? 0;
  const getTabIndex = (tab: SearchResultTabValue) => tabs.value.findIndex((item) => item.value === tab);

  return {
    tabs,
    tabEntries,
    getTabResults,
    getTabCount,
    getTabIndex
  };
}
