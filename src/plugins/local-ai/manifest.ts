import type { BuiltinPlugin } from '../types';

export const localAiPlugin: BuiltinPlugin = {
  id: 'local-ai',
  nameKey: 'plugins.localAi.name',
  descriptionKey: 'plugins.localAi.description',
  category: 'automation',
  enabledByDefault: true,
  routeNames: ['LocalAiChat'],
  settingsTabs: ['localAi'],
  dependencies: ['local-ai-llama-runtime'],
  resourceHintKey: 'plugins.localAi.resourceHint'
};
