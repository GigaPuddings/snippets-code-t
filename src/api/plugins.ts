import { invoke } from '@tauri-apps/api/core';
import type { PluginCategory, PluginStateMap, PluginId } from '@/plugins/types';
import type {
  LocalPluginPackage,
  PluginI18nText,
  PluginPackageManifest
} from '@/plugins/protocol';

export interface PluginResourceStatus {
  pluginId: string;
  resourceId: string;
  available: boolean;
  source?: string;
  path?: string;
  searchedPaths: string[];
}

export interface FfmpegResourceStatus {
  available: boolean;
  source?: string;
  path?: string;
  searchedPaths: string[];
  message?: string;
}

export interface PluginMarketplaceItem {
  id: string;
  version: string;
  name: PluginI18nText;
  description: PluginI18nText;
  category: PluginCategory;
  packageUrl?: string;
  /** 镜像下载地址列表（GitHub 代理），当 packageUrl 下载失败或超时时自动尝试 */
  mirrorUrls?: string[];
  packageSubdir?: string;
  minAppVersion?: string;
  compatibleAppVersion?: string;
  manifest?: PluginPackageManifest;
  repository?: string;
  homepage?: string;
  releaseUrl?: string;
  tags?: string[];
  dependencies?: string[];
  builtinPluginId?: string;
  resourceFor?: string;
  sizeBytes?: number;
  status?: 'available' | 'included' | 'planned';
}

export interface PluginMarketplaceIndex {
  schemaVersion: 1;
  updatedAt?: string;
  source?: string;
  plugins: PluginMarketplaceItem[];
}

export interface PluginInstallProgress {
  packageUrl: string;
  phase: 'downloading' | 'downloaded' | 'extracting' | 'installed' | string;
  downloadedBytes: number;
  totalBytes?: number;
  progress?: number;
}

export const DEFAULT_PLUGIN_MARKETPLACE_URL =
  'https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/docs/plugin-marketplace/marketplace.json';

/** GitHub 代理前缀，用于在国内加速大文件下载 */
export const GITHUB_MIRROR_PREFIX = 'https://ghfast.top/';

/**
 * 为 GitHub 下载 URL 生成镜像地址
 * https://github.com/... → https://ghfast.top/https://github.com/...
 */
export function buildMirrorUrl(githubUrl: string): string {
  if (githubUrl.startsWith('https://github.com/')) {
    return `${GITHUB_MIRROR_PREFIX}${githubUrl}`;
  }
  return githubUrl;
}

export async function getPluginStates(): Promise<Partial<PluginStateMap>> {
  return await invoke<Partial<PluginStateMap>>('get_plugin_states');
}

export async function getInstalledPluginManifests(): Promise<
  LocalPluginPackage[]
> {
  return await invoke<LocalPluginPackage[]>('get_installed_plugin_manifests');
}

export async function getPluginInstallDir(): Promise<string> {
  return await invoke<string>('get_plugin_install_dir');
}

export async function setPluginInstallDir(path?: string | null): Promise<void> {
  await invoke('set_plugin_install_dir', { path: path || null });
}

export async function installLocalPluginPackage(
  sourcePath: string,
  overwrite = false
): Promise<LocalPluginPackage> {
  return await invoke<LocalPluginPackage>('install_local_plugin_package', {
    sourcePath,
    overwrite
  });
}

export async function installPluginPackageFromUrl(
  packageUrl: string,
  overwrite = false,
  packageSubdir?: string,
  expectedSizeBytes?: number,
  mirrorUrls?: string[]
): Promise<LocalPluginPackage> {
  return await invoke<LocalPluginPackage>('install_plugin_package_from_url', {
    expectedSizeBytes,
    packageUrl,
    packageSubdir,
    overwrite,
    mirrorUrls: mirrorUrls ?? []
  });
}

const withMarketplaceRefreshParam = (marketplaceUrl: string): string => {
  try {
    const url = new URL(marketplaceUrl);
    url.searchParams.set('_sc_refresh', `${Date.now()}`);
    return url.toString();
  } catch {
    return marketplaceUrl;
  }
};

export async function fetchPluginMarketplace(
  marketplaceUrl: string
): Promise<PluginMarketplaceIndex> {
  return await invoke<PluginMarketplaceIndex>('fetch_plugin_marketplace', {
    marketplaceUrl: withMarketplaceRefreshParam(marketplaceUrl)
  });
}

export async function uninstallLocalPluginPackage(
  pluginId: PluginId | string
): Promise<void> {
  await invoke('uninstall_local_plugin_package', { pluginId });
}

export async function setPluginEnabled(
  pluginId: PluginId | string,
  enabled: boolean
): Promise<void> {
  await invoke('set_plugin_enabled', { pluginId, enabled });
}

export async function getRapidOcrResourceStatus(): Promise<PluginResourceStatus> {
  return await invoke<PluginResourceStatus>('get_rapidocr_resource_status');
}

export async function getScreenRecorderFfmpegStatus(): Promise<FfmpegResourceStatus> {
  return await invoke<FfmpegResourceStatus>('screen_recorder_get_ffmpeg_status');
}

export async function getLocalPluginResourcePath(
  pluginId: PluginId | string,
  relativePath: string
): Promise<string | null> {
  return await invoke<string | null>('get_local_plugin_resource_path', {
    pluginId,
    relativePath
  });
}

export async function installTranslationOfflineRuntimeResources(): Promise<void> {
  await invoke('install_translation_offline_runtime_resources');
}

export async function invokePluginBackend<T = unknown>(
  pluginId: PluginId | string,
  command: string,
  payload: unknown = null
): Promise<T> {
  return await invoke<T>('invoke_plugin_backend', {
    pluginId,
    command,
    payload
  });
}
