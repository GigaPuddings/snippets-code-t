import type { BuiltinPlugin } from '../types';

export const quickToolsPlugin: BuiltinPlugin = {
  id: 'quick-tools',
  nameKey: 'plugins.quickTools.name',
  descriptionKey: 'plugins.quickTools.description',
  category: 'search',
  enabledByDefault: true,
  searchSources: ['quick-tools']
};
