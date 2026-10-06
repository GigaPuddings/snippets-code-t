import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { getFavoriteFragments, getFragmentList } from '@/api/fragment';
import { applySorting } from '@/utils/filterEngine';
import { useContentFavorites } from '@/composables/useContentFavorites';
import modal from '@/utils/modal';

export interface UseContentListReturn {
  contents: ComputedRef<ContentType[]>;
  queryFragments: (cid?: string) => Promise<void>;
  toggleContentFavorite: (content: ContentType) => Promise<void>;
}

/**
 * Loads the compact quick-access list. Search and advanced filters live in the
 * global quick-search surface, so this sidebar only reflects its active scope.
 */
export function useContentList(): UseContentListReturn {
  const route = useRoute();
  const store = useConfigurationStore();
  let latestQueryId = 0;
  const { toggleContentFavorite } = useContentFavorites();
  let loadedFavorites = false;

  const contents = computed<ContentType[]>(() =>
    applySorting(
      route.query.view === 'favorites'
        ? store.contents.filter((content) => content.favorite)
        : store.contents,
      'updated',
      'desc'
    )
  );

  const queryFragments = async (cid?: string): Promise<void> => {
    const queryId = ++latestQueryId;
    const favorites = route.query.view === 'favorites';
    if (!favorites || !loadedFavorites) store.favoriteCount = null;
    if (!favorites) loadedFavorites = false;
    if (route.query.view === 'trash') {
      store.contents = [];
      return;
    }

    try {
      const categoryId = cid ? Number(cid) : undefined;
      const result = favorites
        ? await getFavoriteFragments()
        : await getFragmentList(categoryId, '');

      if (queryId === latestQueryId) {
        store.contents = result as ContentType[];
        store.favoriteCount = favorites ? result.length : null;
        loadedFavorites = favorites;
      }
    } catch (error) {
      if (queryId === latestQueryId) {
        store.contents = [];
        store.favoriteCount = null;
        loadedFavorites = false;
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

  return { contents, queryFragments, toggleContentFavorite };
}
