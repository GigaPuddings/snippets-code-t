import type { BuiltinPlugin } from '../types';

export const localLauncherPlugin: BuiltinPlugin = {
  id: 'local-launcher',
  nameKey: 'plugins.localLauncher.name',
  descriptionKey: 'plugins.localLauncher.description',
  category: 'search',
  enabledByDefault: true,
  routeNames: ['Local'],
  settingsTabs: ['local'],
  searchSources: ['apps', 'bookmarks']
};
