import type { PluginId } from './types';

export interface PluginWindowShortcut {
  label: string;
  pluginId: PluginId;
  closeCommandLabel?: string;
}

export const pluginWindowShortcuts: PluginWindowShortcut[] = [];
