import { invoke } from '@tauri-apps/api/core';
import type { ContentType } from '@/types';
import { isContentType } from '@/utils/type-guards';
import type { SearchSourceProvider } from '../search';

export const desktopFilesSearchProvider: SearchSourceProvider = {
  pluginId: 'desktop-files',
  source: 'desktop-files',
  async search(query) {
    const desktopFileResults = await invoke<ContentType[]>('search_desktop_files', { query });

    return [
      {
        source: 'file',
        items: Array.isArray(desktopFileResults)
          ? desktopFileResults.filter(isContentType)
          : []
      }
    ];
  }
};
