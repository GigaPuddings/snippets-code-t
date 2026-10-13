import { defineAsyncComponent, type Component } from 'vue';
import FileImage from '~icons/lucide/file-image';
import Data from '~icons/lucide/database';
import Keyboard from '~icons/lucide/keyboard';
import Settings from '~icons/lucide/settings';
import Brain from '~icons/lucide/brain';
import Puzzle from '~icons/lucide/puzzle';
import Terminal from '~icons/lucide/square-terminal';
import Workbench from '~icons/lucide/layout-dashboard';
import type { RegisteredPlugin } from './protocol';

export interface PluginSettingsMenuItem {
  id: string;
  pluginId?: string;
  labelKey: string;
  label?: string;
  icon: Component;
}

export const coreSettingsMenuItems: PluginSettingsMenuItem[] = [
  { id: 'workbench', labelKey: 'settings.workbench.menu', icon: Workbench },
  { id: 'general', labelKey: 'settings.general', icon: Settings },
  { id: 'ai', labelKey: 'settings.ai.menu', icon: Brain },
  { id: 'plugins', labelKey: 'plugins.title', icon: Puzzle },
  { id: 'shortcut', labelKey: 'shortcut.title', icon: Keyboard },
  { id: 'data', labelKey: 'dataManager.title', icon: Data },
  { id: 'developer', labelKey: 'settings.developer.menu', icon: Terminal }
];

export const getVisibleSettingsMenuItems = (
  plugins: RegisteredPlugin[],
  isEnabled: (pluginId: string) => boolean
): PluginSettingsMenuItem[] =>
  [...coreSettingsMenuItems, ...pluginSettingsMenuItems].flatMap((item) => {
    const owner = coreSettingsMenuItems.some((core) => core.id === item.id)
      ? undefined
      : (item.pluginId ??
        plugins.find((plugin) => plugin.settingsTabs?.includes(item.id))?.id);
    if (owner && !isEnabled(String(owner))) return [];
    return [{ ...item, ...(owner ? { pluginId: String(owner) } : {}) }];
  });

export const pluginSettingsMenuItems: PluginSettingsMenuItem[] = [
  { id: 'attachment', labelKey: 'settings.attachment.menu', icon: FileImage }
];

export const pluginSettingsComponents: Record<string, Component> = {
  attachment: defineAsyncComponent(
    () => import('./attachments/settings/index.vue')
  )
};
