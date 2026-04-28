import { computed, type MaybeRefOrGetter, toValue } from 'vue';
import type { ComposerTranslation } from 'vue-i18n';

type SearchResultTabValue = SummarizeType;

type SearchResultTabMatcher = (item: ContentType) => boolean;

export interface SearchResultTab {
  label: string;
  value: SearchResultTabValue;
  count: number;
  matcher?: SearchResultTabMatcher;
}

interface SearchResultTabDefinition {
  labelKey: string;
  value: SearchResultTabValue;
  matcher?: SearchResultTabMatcher;
}

const SEARCH_RESULT_TAB_DEFINITIONS: SearchResultTabDefinition[] = [
  {
    labelKey: 'searchResult.all',
    value: 'text'
  },
  {
    labelKey: 'searchResult.apps',
    value: 'app',
    matcher: (item) => item.summarize === 'app'
  },
  {
    labelKey: 'searchResult.bookmarks',
    value: 'bookmark',
    matcher: (item) => item.summarize === 'bookmark'
  },
  {
    labelKey: 'searchResult.files',
    value: 'file',
    matcher: (item) => item.summarize === 'file'
  },
  {
    labelKey: 'searchResult.code',
    value: 'code',
    matcher: (item) => item.type === 'code'
  },
  {
    labelKey: 'searchResult.notes',
    value: 'note',
    matcher: (item) => item.type === 'note'
  }
];

const getRowKey = (item: ContentType, index: number) => `${String(item.id)}-${item.summarize ?? 'text'}-${index}`;

export function useSearchResultTabs(results: MaybeRefOrGetter<ContentType[]>, t: ComposerTranslation) {
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

  const tabs = computed<SearchResultTab[]>(() => SEARCH_RESULT_TAB_DEFINITIONS.map((definition) => ({
    label: t(definition.labelKey),
    value: definition.value,
    count: tabEntries.value.get(definition.value)?.length ?? 0,
    matcher: definition.matcher
  })));

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
