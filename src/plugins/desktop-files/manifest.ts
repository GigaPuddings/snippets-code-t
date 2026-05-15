import type { BuiltinPlugin } from '../types';

export const desktopFilesPlugin: BuiltinPlugin = {
  id: 'desktop-files',
  nameKey: 'plugins.desktopFiles.name',
  descriptionKey: 'plugins.desktopFiles.description',
  category: 'search',
  enabledByDefault: true,
  searchSources: ['desktop-files']
};
