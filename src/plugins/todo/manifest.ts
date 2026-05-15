import type { BuiltinPlugin } from '../types';

export const todoPlugin: BuiltinPlugin = {
  id: 'todo',
  nameKey: 'plugins.todo.name',
  descriptionKey: 'plugins.todo.description',
  category: 'automation',
  enabledByDefault: true,
  routeNames: ['Todo'],
  settingsTabs: ['todo']
};
