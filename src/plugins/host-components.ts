import type { Component } from 'vue';
import type { PluginId } from './types';

export type PluginHostComponentTarget = 'config';

export interface ConfigHostContext {
  shouldInit: boolean | null;
  isPluginEnabled(pluginId: PluginId | string): boolean;
  navigateTo(path: string): unknown | Promise<unknown>;
}

export interface PluginHostComponent {
  id: string;
  pluginId: PluginId | string;
  target: PluginHostComponentTarget;
  component: Component;
}

export const pluginHostComponents: PluginHostComponent[] = [];
