import type { BuiltinPlugin } from '../types';

export const screenshotPlugin: BuiltinPlugin = {
  id: 'screenshot',
  nameKey: 'plugins.screenshot.name',
  descriptionKey: 'plugins.screenshot.description',
  category: 'capture',
  enabledByDefault: true,
  routeNames: ['Screenshot', 'Pin'],
  hotkeys: ['screenshot'],
  trayItems: ['screenshot'],
  dependencies: ['screenshot-rapidocr', 'translation'],
  resourceHintKey: 'plugins.screenshot.resourceHint'
};
