import { defineAsyncComponent, type Component } from 'vue';

export const pluginSettingsComponents: Record<string, Component> = {
  attachment: defineAsyncComponent(() => import('./attachments/settings/index.vue')),
  gitSync: defineAsyncComponent(() => import('./git-sync/settings/index.vue')),
  translation: defineAsyncComponent(() => import('./translation/settings/index.vue'))
};
