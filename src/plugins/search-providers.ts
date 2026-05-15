import type { SearchSourceProvider } from './search';
import { localLauncherSearchProvider } from './local-launcher/searchProvider';
import { desktopFilesSearchProvider } from './desktop-files/searchProvider';

export const searchSourceProviders: SearchSourceProvider[] = [
  localLauncherSearchProvider,
  desktopFilesSearchProvider
];
