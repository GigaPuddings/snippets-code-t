import { convertFileSrc, invoke } from '@tauri-apps/api/core';
import { appCacheDir, join } from '@tauri-apps/api/path';
import { openPath } from '@tauri-apps/plugin-opener';

export type WallpaperMode = 'fixed' | 'folder' | 'wallhaven';
export type WallpaperOrder = 'random' | 'sequential';
export type WallpaperFitMode = 'fillCrop' | 'fit' | 'center';
export type WallhavenSource = 'hot' | 'toplist' | 'favorites';

export interface WallpaperConfig {
  mode: WallpaperMode;
  fixedImagePath: string | null;
  folderPath: string | null;
  scheduleEnabled: boolean;
  intervalMinutes: number;
  order: WallpaperOrder;
  fitMode: WallpaperFitMode;
  autoRestore: boolean;
  wallhavenSource: WallhavenSource;
  wallhavenCategory: string;
  wallhavenQuery: string | null;
  lastFolderIndex: number;
  lastAppliedPath: string | null;
}

export interface WallpaperStatus {
  supported: boolean;
  currentPath: string | null;
  currentSource: string | null;
  currentResolution: string | null;
  schedulerRunning: boolean;
  lastSwitchedAt: number | null;
  nextSwitchAt: number | null;
  screenWidth: number;
  screenHeight: number;
  cacheSizeBytes: number;
}

export interface FolderScanResult {
  path: string;
  count: number;
  images: string[];
}

export interface WallhavenThumbs {
  large: string;
  original: string;
  small: string;
}

export interface WallhavenWallpaper {
  id: string;
  url: string;
  shortUrl?: string | null;
  path: string;
  thumbs: WallhavenThumbs;
  resolution: string;
  dimensionX: number;
  dimensionY: number;
  fileType: string;
  category?: string | null;
}

export interface WallhavenPage {
  data: WallhavenWallpaper[];
  page: number;
  lastPage: number;
}

export interface WallhavenFetchParams {
  source: WallhavenSource;
  page?: number;
  query?: string | null;
  category?: string | null;
}

export const defaultWallpaperConfig = (): WallpaperConfig => ({
  mode: 'folder',
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: false,
  intervalMinutes: 30,
  order: 'random',
  fitMode: 'fillCrop',
  autoRestore: true,
  wallhavenSource: 'hot',
  wallhavenCategory: 'general',
  wallhavenQuery: null,
  lastFolderIndex: 0,
  lastAppliedPath: null
});

export const wallpaperImageSrc = (path: string | null | undefined): string => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return convertFileSrc(path);
};

export const getWallpaperConfig = (): Promise<WallpaperConfig> =>
  invoke<WallpaperConfig>('wallpaper_get_config');

export const saveWallpaperConfig = (config: WallpaperConfig): Promise<void> =>
  invoke('wallpaper_save_config', { config });

export const getWallpaperStatus = (): Promise<WallpaperStatus> =>
  invoke<WallpaperStatus>('wallpaper_get_status');

export const scanWallpaperFolder = (path: string): Promise<FolderScanResult> =>
  invoke<FolderScanResult>('wallpaper_scan_folder', { path });

export const setFixedWallpaper = (path: string): Promise<string> =>
  invoke<string>('wallpaper_set_fixed_image', { path });

export const switchWallpaperNow = (): Promise<string> =>
  invoke<string>('wallpaper_switch_now');

export const applyCurrentWallpaperFit = (
  fitMode?: WallpaperFitMode
): Promise<string> =>
  invoke<string>('wallpaper_apply_current_fit', { fitMode });

export const fetchWallhaven = (
  params: WallhavenFetchParams
): Promise<WallhavenPage> =>
  invoke<WallhavenPage>('wallpaper_fetch_wallhaven', { params });

export const setWallhavenWallpaper = (
  wallpaper: WallhavenWallpaper
): Promise<string> =>
  invoke<string>('wallpaper_set_wallhaven_image', { wallpaper });

export const downloadWallhavenWallpaper = (
  wallpaper: WallhavenWallpaper
): Promise<string> =>
  invoke<string>('wallpaper_download_wallhaven_image', { wallpaper });

export const clearWallpaperCache = (): Promise<void> =>
  invoke('wallpaper_clear_cache');

const isCommandNotFound = (error: unknown, command: string): boolean =>
  new RegExp(`Command\\s+${command}\\s+not\\s+found`, 'i').test(String(error));

export const openWallpaperCacheDir = async (): Promise<void> => {
  try {
    await invoke('wallpaper_open_cache_dir');
    return;
  } catch (error) {
    if (!isCommandNotFound(error, 'wallpaper_open_cache_dir')) {
      throw error;
    }
  }

  const appCache = await appCacheDir();
  const wallpaperCache = await join(appCache, 'wallpaper-switcher');
  try {
    await openPath(wallpaperCache);
  } catch {
    await openPath(appCache);
  }
};
