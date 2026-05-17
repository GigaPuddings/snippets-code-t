import { isBundledOfficialPluginsMode } from './official-mode';
import type { PluginId } from './types';

export interface PluginWindowShortcut {
  label: string;
  pluginId: PluginId;
  closeCommandLabel?: string;
}

export const pluginWindowShortcuts: PluginWindowShortcut[] = isBundledOfficialPluginsMode
  ? [
      {
        label: 'dark_mode',
        pluginId: 'system-theme'
      }
    ]
  : [];
