import type { Component } from 'vue';
import type { PluginId } from './types';

export interface TitlebarPluginAction {
  id: string;
  pluginId?: PluginId;
  component: Component;
}

export const titlebarPluginActions: TitlebarPluginAction[] = [];
