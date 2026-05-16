import { invoke } from '@tauri-apps/api/core';
import { pluginWindowShortcuts } from '@/plugins/windows';
import { usePluginStore } from '@/store';

const CORE_ESCAPE_CLOSE_WINDOWS = new Map<string, string>([
  ['main', 'search'],
  ['config', 'config']
]);

function getPluginWindowCloseCommand(label: string): string | null {
  const pluginWindow = pluginWindowShortcuts.find((windowShortcut) => windowShortcut.label === label);
  if (!pluginWindow) return null;

  const pluginStore = usePluginStore();
  if (!pluginStore.isEnabled(pluginWindow.pluginId)) return null;

  return pluginWindow.closeCommandLabel ?? pluginWindow.label;
}

export function shouldCloseWindowOnEscape(label: string): boolean {
  return CORE_ESCAPE_CLOSE_WINDOWS.has(label) || getPluginWindowCloseCommand(label) !== null;
}

export async function closeWindowByLabel(label: string): Promise<void> {
  const commandLabel = CORE_ESCAPE_CLOSE_WINDOWS.get(label) ?? getPluginWindowCloseCommand(label);
  if (!commandLabel) return;

  await invoke('show_hide_window_command', { label: commandLabel });
}
