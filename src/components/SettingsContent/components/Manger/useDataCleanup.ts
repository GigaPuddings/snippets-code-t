import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
import modal from '@/utils/modal';
import { formatBytes } from '@/utils/format';
import { usePluginStore } from '@/store';
import {
  clearWallpaperCache,
  getWallpaperStatus,
  openWallpaperCacheDir
} from '@/plugins/wallpaper-switcher/api';
import {
  createHistoryOptions,
  type DataManagerOption
} from './dataManagerOptions';

type Translate = (key: string, named?: Record<string, unknown>) => string;

export interface DataCleanupController {
  historyLoading: Ref<boolean>;
  iconCacheLoading: Ref<boolean>;
  wallpaperCacheLoading: Ref<boolean>;
  wallpaperCacheOpening: Ref<boolean>;
  showHistoryDialog: Ref<boolean>;
  showIconCacheDialog: Ref<boolean>;
  showWallpaperCacheDialog: Ref<boolean>;
  wallpaperCacheAvailable: ComputedRef<boolean>;
  wallpaperCacheSizeLabel: ComputedRef<string>;
  historyOptions: ComputedRef<DataManagerOption[]>;
  loadWallpaperCacheInfo: () => Promise<void>;
  handleHistoryConfirm: (value: string | number) => Promise<void>;
  handleIconCacheConfirm: () => Promise<void>;
  handleOpenWallpaperCache: () => Promise<void>;
  handleWallpaperCacheConfirm: () => Promise<void>;
}

async function clearHistory(
  value: string | number,
  loading: Ref<boolean>,
  dialog: Ref<boolean>,
  t: Translate
): Promise<void> {
  loading.value = true;
  try {
    const count = await invoke<number>('clear_search_history', {
      scope: String(value)
    });
    modal.msg(t('dataManager.searchHistorySuccess', { count }));
    dialog.value = false;
  } catch (error) {
    modal.msg(`${t('dataManager.searchHistoryFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
}

async function clearIconCache(
  loading: Ref<boolean>,
  dialog: Ref<boolean>,
  t: Translate
): Promise<void> {
  loading.value = true;
  try {
    await invoke<number>('clear_icon_cache');
    modal.msg(t('dataManager.iconCacheSuccess'));
    dialog.value = false;
  } catch (error) {
    modal.msg(`${t('dataManager.iconCacheFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
}

async function loadWallpaperCacheInfo(
  available: ComputedRef<boolean>,
  size: Ref<number | null>
): Promise<void> {
  if (!available.value) {
    size.value = null;
    return;
  }
  try {
    size.value = (await getWallpaperStatus()).cacheSizeBytes;
  } catch {
    size.value = null;
  }
}

async function openWallpaperCache(
  loading: Ref<boolean>,
  t: Translate
): Promise<void> {
  loading.value = true;
  try {
    await openWallpaperCacheDir();
  } catch (error) {
    modal.msg(`${t('dataManager.openDirectoryFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
}

async function clearWallpaperFiles(
  loading: Ref<boolean>,
  dialog: Ref<boolean>,
  reload: () => Promise<void>,
  t: Translate
): Promise<void> {
  loading.value = true;
  try {
    await clearWallpaperCache();
    await reload();
    modal.msg(t('dataManager.wallpaperCacheSuccess'));
    dialog.value = false;
  } catch (error) {
    modal.msg(`${t('dataManager.wallpaperCacheFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
}

export function useDataCleanup(): DataCleanupController {
  const { t } = useI18n();
  const pluginStore = usePluginStore();
  const historyLoading = ref(false);
  const iconCacheLoading = ref(false);
  const wallpaperCacheLoading = ref(false);
  const wallpaperCacheOpening = ref(false);
  const showHistoryDialog = ref(false);
  const showIconCacheDialog = ref(false);
  const showWallpaperCacheDialog = ref(false);
  const wallpaperCacheSize = ref<number | null>(null);
  const wallpaperCacheAvailable = computed(() =>
    pluginStore.isEnabled('wallpaper-switcher')
  );
  const wallpaperCacheSizeLabel = computed(() =>
    wallpaperCacheSize.value === null
      ? t('dataManager.sizeUnknown')
      : formatBytes(wallpaperCacheSize.value, 1)
  );
  const reloadWallpaperCache = (): Promise<void> =>
    loadWallpaperCacheInfo(wallpaperCacheAvailable, wallpaperCacheSize);

  return {
    historyLoading,
    iconCacheLoading,
    wallpaperCacheLoading,
    wallpaperCacheOpening,
    showHistoryDialog,
    showIconCacheDialog,
    showWallpaperCacheDialog,
    wallpaperCacheAvailable,
    wallpaperCacheSizeLabel,
    historyOptions: computed(() => createHistoryOptions(t)),
    loadWallpaperCacheInfo: reloadWallpaperCache,
    handleHistoryConfirm: (value) =>
      clearHistory(value, historyLoading, showHistoryDialog, t),
    handleIconCacheConfirm: () =>
      clearIconCache(iconCacheLoading, showIconCacheDialog, t),
    handleOpenWallpaperCache: () =>
      openWallpaperCache(wallpaperCacheOpening, t),
    handleWallpaperCacheConfirm: () =>
      clearWallpaperFiles(
        wallpaperCacheLoading,
        showWallpaperCacheDialog,
        reloadWallpaperCache,
        t
      )
  };
}
