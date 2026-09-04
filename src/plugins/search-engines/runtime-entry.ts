import type { PluginFrontendRuntimeContext } from '../runtime';
import type { SearchEngine } from '@/types';
import {
  createSearchEngineDefaultProvider,
  createSearchEngineShortcutProvider
} from './searchProvider';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  let cachedSearchEngines: SearchEngine[] | null = null;
  const loadSearchEngines = async (): Promise<SearchEngine[]> => {
    if (cachedSearchEngines) return cachedSearchEngines;

    const engines =
      await context.api.invoke<SearchEngine[]>('get_search_engines');
    cachedSearchEngines = Array.isArray(engines) ? engines : [];
    return cachedSearchEngines;
  };

  void context.api.listen<SearchEngine[]>('search-engines-updated', (event) => {
    cachedSearchEngines = Array.isArray(event.payload) ? event.payload : null;
  });

  context.registerRoute({
    target: 'config',
    path: 'retrieve',
    name: 'Retrieve',
    component: () => import('./pages/config/index.vue')
  });
  context.registerSearchProvider(
    createSearchEngineShortcutProvider({ loadSearchEngines })
  );
  context.registerSearchProvider(
    createSearchEngineDefaultProvider({ loadSearchEngines })
  );
};
