import { defineAsyncComponent, markRaw, type Component } from 'vue';
import { isBundledOfficialPluginsMode } from './official-mode';
import type { PluginId } from './types';

export interface TitlebarPluginAction {
  id: string;
  pluginId?: PluginId;
  component: Component;
}

export const titlebarPluginActions: TitlebarPluginAction[] = isBundledOfficialPluginsMode
  ? [
      {
        id: 'git-sync-status',
        pluginId: 'git-sync',
        component: markRaw(defineAsyncComponent(() => import('./git-sync/components/TitlebarGitStatus.vue')))
      }
    ]
  : [];
