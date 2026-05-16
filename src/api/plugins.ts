import { invoke } from '@tauri-apps/api/core';
import type { PluginStateMap, PluginId } from '@/plugins/types';
import type { LocalPluginPackage } from '@/plugins/protocol';

export interface PluginResourceStatus {
  pluginId: string;
  resourceId: string;
  available: boolean;
  source?: string;
  path?: string;
  searchedPaths: string[];
}

export async function getPluginStates(): Promise<Partial<PluginStateMap>> {
  return await invoke<Partial<PluginStateMap>>('get_plugin_states');
}

export async function getInstalledPluginManifests(): Promise<LocalPluginPackage[]> {
  return await invoke<LocalPluginPackage[]>('get_installed_plugin_manifests');
}

export async function installLocalPluginPackage(sourcePath: string, overwrite = false): Promise<LocalPluginPackage> {
  return await invoke<LocalPluginPackage>('install_local_plugin_package', { sourcePath, overwrite });
}

export async function uninstallLocalPluginPackage(pluginId: PluginId | string): Promise<void> {
  await invoke('uninstall_local_plugin_package', { pluginId });
}

export async function setPluginEnabled(pluginId: PluginId | string, enabled: boolean): Promise<void> {
  await invoke('set_plugin_enabled', { pluginId, enabled });
}

export async function getRapidOcrResourceStatus(): Promise<PluginResourceStatus> {
  return await invoke<PluginResourceStatus>('get_rapidocr_resource_status');
}

export async function getLocalPluginResourcePath(
  pluginId: PluginId | string,
  relativePath: string
): Promise<string | null> {
  return await invoke<string | null>('get_local_plugin_resource_path', { pluginId, relativePath });
}
