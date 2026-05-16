import { defineAsyncComponent, markRaw, type Component } from 'vue';
import type { PluginId } from './types';

export interface TitlebarPluginAction {
  id: string;
  pluginId?: PluginId;
  component: Component;
}

export const titlebarPluginActions: TitlebarPluginAction[] = [
  {
    id: 'git-sync-status',
    pluginId: 'git-sync',
    component: markRaw(defineAsyncComponent(() => import('./git-sync/components/TitlebarGitStatus.vue')))
  }
];
