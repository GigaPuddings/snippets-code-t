import type { BuiltinPlugin } from '../types';

export const attachmentsPlugin: BuiltinPlugin = {
  id: 'attachments',
  nameKey: 'plugins.attachments.name',
  descriptionKey: 'plugins.attachments.description',
  category: 'editor',
  enabledByDefault: true,
  settingsTabs: ['attachment']
};
