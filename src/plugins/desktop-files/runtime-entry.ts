import type { ContentType } from '@/types';
import { isContentType } from '@/utils/type-guards';
import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerSearchProvider({
    source: 'desktop-files',
    async search(query) {
      const desktopFileResults = await context.api.invoke<ContentType[]>('search_desktop_files', { query });

      return [
        {
          source: 'file',
          items: Array.isArray(desktopFileResults)
            ? desktopFileResults.filter(isContentType)
            : []
        }
      ];
    }
  });
};

