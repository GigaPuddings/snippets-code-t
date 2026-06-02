import { defineAsyncComponent, type Component } from 'vue';
import { FolderOpen } from '@icon-park/vue-next';

export interface PluginSettingsMenuItem {
  id: string;
  pluginId?: string;
  labelKey: string;
  label?: string;
  icon: Component;
}

export const pluginSettingsMenuItems: PluginSettingsMenuItem[] = [
  { id: 'attachment', labelKey: 'settings.attachment.menu', icon: FolderOpen }
];

export const pluginSettingsComponents: Record<string, Component> = {
  attachment: defineAsyncComponent(() => import('./attachments/settings/index.vue'))
};
