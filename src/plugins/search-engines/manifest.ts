import type { BuiltinPlugin } from '../types';

export const searchEnginesPlugin: BuiltinPlugin = {
  id: 'search-engines',
  nameKey: 'plugins.searchEngines.name',
  descriptionKey: 'plugins.searchEngines.description',
  category: 'search',
  enabledByDefault: true,
  routeNames: ['Retrieve'],
  settingsTabs: ['retrieve'],
  searchSources: ['web-search']
};
