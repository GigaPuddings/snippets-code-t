import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { getFragmentList } from '@/api/fragment';
import { applySorting } from '@/utils/filterEngine';
import { parseTags } from '@/utils/fragment';
import modal from '@/utils/modal';

export interface TagGroup {
  tag: string;
  contents: ContentType[];
}

export interface UseContentListReturn {
  contents: ComputedRef<ContentType[]>;
  tagGroups: ComputedRef<TagGroup[]>;
  queryFragments: (cid?: string) => Promise<void>;
}

/**
 * Loads the compact quick-access list and applies the active sidebar scope.
 */
export function useContentList(): UseContentListReturn {
  const route = useRoute();
  const store = useConfigurationStore();
  let latestQueryId = 0;

  const contents = computed(() =>
    applySorting(store.contents, 'created', 'desc')
  );
  const tagGroups = computed<TagGroup[]>(() => {
    if (route.query.view !== 'tags') return [];
    const groups = new Map<string, TagGroup>();
    for (const item of contents.value) {
      for (const tag of new Set(parseTags(item.tags))) {
        let group = groups.get(tag);
        if (!group) {
          group = { tag, contents: [] };
          groups.set(tag, group);
        }
        group.contents.push(item);
      }
    }
    return [...groups.values()].sort((a, b) => a.tag.localeCompare(b.tag));
  });

  const queryFragments = async (cid?: string): Promise<void> => {
    const queryId = ++latestQueryId;
    if (route.query.view === 'trash') {
      store.contents = [];
      return;
    }

    try {
      const categoryId =
        cid && route.query.view !== 'tags' ? Number(cid) : undefined;
      const result = await getFragmentList(categoryId, '');

      if (queryId === latestQueryId) {
        store.contents = result as ContentType[];
      }
    } catch (error) {
      if (queryId === latestQueryId) {
        store.contents = [];
        modal.error(error instanceof Error ? error.message : String(error));
      }
    }
  };

  watch(
    [() => route.params.cid, () => route.query.view],
    ([cid]) => {
      void queryFragments(cid as string | undefined);
    },
    { immediate: true }
  );

  return {
    contents,
    tagGroups,
    queryFragments
  };
}
