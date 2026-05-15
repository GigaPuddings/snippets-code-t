import type { BuiltinPlugin } from '../types';

export const gitSyncPlugin: BuiltinPlugin = {
  id: 'git-sync',
  nameKey: 'plugins.gitSync.name',
  descriptionKey: 'plugins.gitSync.description',
  category: 'sync',
  enabledByDefault: true,
  settingsTabs: ['gitSync']
};
