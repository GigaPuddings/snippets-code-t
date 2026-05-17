import { defineAsyncComponent } from 'vue';
import type { ContentType } from '@/types';
import { isContentType } from '@/utils/type-guards';
import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'config',
    path: 'local',
    name: 'Local',
    component: defineAsyncComponent(() => import('./pages/config/index.vue'))
  });
  context.registerSearchProvider({
    source: 'local-launcher',
    async search(query) {
      const results = [];

      const appResults = await context.api.invoke<ContentType[]>('search_apps', { query });
      if (Array.isArray(appResults)) {
        results.push({
          source: 'app',
          items: appResults.filter(isContentType)
        });
      }

      const bookmarkResults = await context.api.invoke<ContentType[]>('search_bookmarks', { query });
      if (Array.isArray(bookmarkResults)) {
        results.push({
          source: 'bookmark',
          items: bookmarkResults.filter(isContentType).slice(0, 10)
        });
      }

      return results;
    }
  });
};

