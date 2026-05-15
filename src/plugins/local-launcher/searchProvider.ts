import { invoke } from '@tauri-apps/api/core';
import type { ContentType } from '@/types';
import { isContentType } from '@/utils/type-guards';
import type { SearchSourceProvider } from '../search';

export const localLauncherSearchProvider: SearchSourceProvider = {
  pluginId: 'local-launcher',
  async search(query) {
    const results = [];

    const appResults = await invoke<ContentType[]>('search_apps', { query });
    if (Array.isArray(appResults)) {
      results.push({
        source: 'app',
        items: appResults.filter(isContentType)
      });
    }

    const bookmarkResults = await invoke<ContentType[]>('search_bookmarks', { query });
    if (Array.isArray(bookmarkResults)) {
      results.push({
        source: 'bookmark',
        items: bookmarkResults.filter(isContentType).slice(0, 10)
      });
    }

    return results;
  }
};
