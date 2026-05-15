import { invoke } from '@tauri-apps/api/core';
import type { PluginStateMap, PluginId } from '@/plugins/types';

export async function getPluginStates(): Promise<Partial<PluginStateMap>> {
  return await invoke<Partial<PluginStateMap>>('get_plugin_states');
}

export async function setPluginEnabled(pluginId: PluginId, enabled: boolean): Promise<void> {
  await invoke('set_plugin_enabled', { pluginId, enabled });
}
