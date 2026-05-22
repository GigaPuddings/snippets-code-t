import type { SearchSourceProvider } from './search';
import { isBundledOfficialPluginsMode } from './official-mode';

export const searchSourceProviders: SearchSourceProvider[] = isBundledOfficialPluginsMode
  ? [
      {
        pluginId: 'local-launcher',
        source: 'local-launcher',
        async search(query) {
          const { localLauncherSearchProvider } = await import('./local-launcher/searchProvider');
          return localLauncherSearchProvider.search(query);
        }
      },
      {
        pluginId: 'desktop-files',
        source: 'desktop-files',
        async search(query) {
          const { desktopFilesSearchProvider } = await import('./desktop-files/searchProvider');
          return desktopFilesSearchProvider.search(query);
        }
      },
      {
        pluginId: 'quick-tools',
        source: 'quick-tools',
        async search(query) {
          const { quickToolsSearchProvider } = await import('./quick-tools/searchProvider');
          return quickToolsSearchProvider.search(query);
        }
      }
    ]
  : [];
