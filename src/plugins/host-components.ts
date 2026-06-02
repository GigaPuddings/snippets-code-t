import type { Component } from 'vue';
import type { PluginId } from './types';

export type PluginHostComponentTarget = 'config';

export interface PluginHostComponent {
  id: string;
  pluginId: PluginId | string;
  target: PluginHostComponentTarget;
  component: Component;
}

export const pluginHostComponents: PluginHostComponent[] = [];
