import { defineAsyncComponent, type Component } from 'vue';
import { FolderOpen, Github, Translate } from '@icon-park/vue-next';
import { isBundledOfficialPluginsMode } from './official-mode';

export interface PluginSettingsMenuItem {
  id: string;
  pluginId?: string;
  labelKey: string;
  label?: string;
  icon: Component;
}

export const pluginSettingsMenuItems: PluginSettingsMenuItem[] = [
  { id: 'attachment', labelKey: 'settings.attachment.menu', icon: FolderOpen },
  ...(isBundledOfficialPluginsMode
    ? [
        { id: 'gitSync', pluginId: 'git-sync', labelKey: 'settings.gitSync.menu', icon: Github },
        { id: 'translation', pluginId: 'translation', labelKey: 'translation.title', icon: Translate }
      ]
    : [])
];

export const pluginSettingsComponents: Record<string, Component> = {
  attachment: defineAsyncComponent(() => import('./attachments/settings/index.vue')),
  ...(isBundledOfficialPluginsMode
    ? {
        gitSync: defineAsyncComponent(() => import('./git-sync/settings/index.vue')),
        translation: defineAsyncComponent(() => import('./translation/settings/index.vue'))
      }
    : {})
};
