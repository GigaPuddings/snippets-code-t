import type { BuiltinPlugin } from '../types';

export const translationPlugin: BuiltinPlugin = {
  id: 'translation',
  nameKey: 'plugins.translation.name',
  descriptionKey: 'plugins.translation.description',
  category: 'automation',
  enabledByDefault: true,
  routeNames: ['Translate'],
  settingsTabs: ['translation'],
  hotkeys: ['translate', 'selection_translate'],
  searchSources: [],
  resourceHintKey: 'plugins.translation.resourceHint'
};
