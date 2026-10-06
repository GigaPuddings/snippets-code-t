import { reactive } from 'vue';
import { useConfigurationStore } from '@/store';
import { getFragmentContent } from '@/api/fragment';
import { toggleFavorite } from '@/api/markdown';
import { logger } from '@/utils/logger';
import modal from '@/utils/modal';

export interface FavoriteChangeDetail {
  source: 'favorite-change';
  id: string;
  favorite: boolean;
  updated_at?: string;
}

interface UseContentFavoritesReturn {
  toggleContentFavorite: (content: ContentType) => Promise<void>;
  isFavoritePending: (id: string | number) => boolean;
}

// Shared by the document toolbar and sidebar context menus.
const pendingFavorites = reactive(new Set<string>());
const fileId = (id: string | number): string => String(id).replace(/\\/g, '/');

/** Apply only persisted metadata; an open editor can contain unsaved text. */
export function applyFavoriteChange(
  content: ContentType | null,
  change: FavoriteChangeDetail
): void {
  if (!content || fileId(content.id) !== fileId(change.id)) return;
  content.favorite = change.favorite;
  if (change.updated_at) content.updated_at = change.updated_at;
}

export function useContentFavorites(): UseContentFavoritesReturn {
  const store = useConfigurationStore();
  const isFavoritePending = (id: string | number): boolean =>
    pendingFavorites.has(fileId(id));

  const toggleContentFavorite = async (content: ContentType): Promise<void> => {
    const id = fileId(content.id);
    if (pendingFavorites.has(id)) return;
    pendingFavorites.add(id);
    try {
      const listed = store.contents.find((item) => fileId(item.id) === id);
      const favorite = !(listed?.favorite ?? content.favorite ?? false);
      await toggleFavorite(id, favorite);

      const change: FavoriteChangeDetail = {
        source: 'favorite-change',
        id,
        favorite
      };
      try {
        // The backend also updates modified time. Never replace editor text.
        const saved = await getFragmentContent(id);
        change.updated_at = saved?.updated_at;
      } catch (error) {
        logger.warn('收藏已保存，但读取修改日期失败:', error);
      }
      // A filesystem refresh may already include this write while metadata is
      // being read. Adjust only for membership not yet reflected by that list.
      const alreadyListed = store.contents.some(
        (item) => fileId(item.id) === id && item.favorite
      );
      store.contents.forEach((item) => applyFavoriteChange(item, change));
      applyFavoriteChange(content, change);
      if (store.favoriteCount !== null) {
        store.favoriteCount = Math.max(
          0,
          store.favoriteCount + Number(favorite) - Number(alreadyListed)
        );
      }
      window.dispatchEvent(new CustomEvent('refresh-data', { detail: change }));
    } catch (error) {
      modal.error(error instanceof Error ? error.message : String(error));
    } finally {
      pendingFavorites.delete(id);
    }
  };

  return { toggleContentFavorite, isFavoritePending };
}
