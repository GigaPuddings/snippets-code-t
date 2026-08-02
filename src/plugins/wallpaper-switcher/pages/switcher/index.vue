<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import {
  clearWallpaperCache,
  defaultWallpaperConfig,
  getWallpaperConfig,
  getWallpaperStatus,
  openWallpaperCacheDir,
  saveWallpaperConfig,
  scanWallpaperFolder,
  setFixedWallpaper,
  switchWallpaperNow,
  wallpaperImageSrc,
  type FolderScanResult,
  type WallpaperConfig,
  type WallpaperStatus
} from '../../api';
import { useWallhaven } from '../../composables/useWallhaven';
import SwitcherHome from './components/SwitcherHome.vue';
import SwitcherTitlebar from './components/SwitcherTitlebar.vue';
import WallhavenView from './components/WallhavenView.vue';
import WallpaperPreviewModal from './components/WallpaperPreviewModal.vue';

const appWindow = getCurrentWindow();
const { t } = useI18n();

const config = ref<WallpaperConfig>(defaultWallpaperConfig());
const status = ref<WallpaperStatus | null>(null);
const folderScan = ref<FolderScanResult | null>(null);
const loading = ref(false);
const saving = ref(false);
const switching = ref(false);
const clearingCache = ref(false);
const openingCache = ref(false);
const previewRevision = ref(0);
let statusRefreshPending = false;
let statusTimer: number | null = null;
let unlistenFocus: (() => void) | null = null;

const refreshStatus = async (silent = false) => {
  if (statusRefreshPending) return;
  statusRefreshPending = true;
  try {
    const nextStatus = await getWallpaperStatus();
    if (
      nextStatus.currentPath !== status.value?.currentPath ||
      nextStatus.lastSwitchedAt !== status.value?.lastSwitchedAt
    ) {
      previewRevision.value += 1;
    }
    status.value = nextStatus;
  } catch (error) {
    if (!silent) modal.msg(String(error), 'error');
  } finally {
    statusRefreshPending = false;
  }
};

const wallhaven = useWallhaven({
  config,
  refreshStatus: async () => {
    await refreshStatus();
  }
});

const {
  activeView,
  wallhavenPage,
  wallhavenLastPage,
  wallhavenLoading,
  wallhavenError,
  wallhavenKeyword,
  wallhavenCategory,
  wallhavenSource,
  previewWallpaper,
  previewLoading,
  previewLoadFailed,
  workingActions,
  downloadProgress,
  loadedThumbIds,
  wallhavenSourceLabel,
  visibleWallpapers,
  openWallhavenGrid,
  backToSwitcher,
  openPreview,
  closePreview,
  markPreviewLoaded,
  markPreviewFailed,
  markThumbLoaded,
  setThumbRef,
  refreshWallhaven,
  setWallhavenSource,
  setWallhavenCategory,
  setWallpaperFromWallhaven,
  downloadWallpaperFromWallhaven,
  prevWallhavenPage,
  nextWallhavenPage,
  setupListeners
} = wallhaven;

const previewSrc = computed(() => {
  const path = status.value?.currentPath || config.value.lastAppliedPath;
  const source = wallpaperImageSrc(path);
  if (!source) return '';
  const separator = source.includes('?') ? '&' : '?';
  return `${source}${separator}wallpaperRevision=${previewRevision.value}`;
});
const currentWallpaperName = computed(() => {
  const path = status.value?.currentPath || config.value.lastAppliedPath;
  if (!path) return t('wallpaperSwitcher.noCurrentWallpaper');
  return path.split(/[\\/]/).pop() || path;
});
const screenLabel = computed(() => {
  const width = status.value?.screenWidth || 2560;
  const height = status.value?.screenHeight || 1440;
  return `${width} × ${height}`;
});
const resolutionLabel = computed(
  () => status.value?.currentResolution || screenLabel.value
);

const formatBytes = (value: number): string => {
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  if (value < 1024 * 1024 * 1024)
    return `${(value / 1024 / 1024).toFixed(1)} MB`;
  return `${(value / 1024 / 1024 / 1024).toFixed(1)} GB`;
};

const sourceLabel = computed(() => {
  if (status.value?.currentSource === 'System')
    return t('wallpaperSwitcher.systemSettings');
  if (config.value.mode === 'fixed') return t('wallpaperSwitcher.fixedImage');
  if (config.value.mode === 'wallhaven') return 'Wallhaven';
  return t('wallpaperSwitcher.localFolder');
});

const nextSwitchLabel = computed(() => {
  if (
    config.value.mode === 'fixed' ||
    !config.value.scheduleEnabled ||
    !status.value?.schedulerRunning
  ) {
    return '—';
  }
  const next = status.value?.nextSwitchAt;
  if (!next) return '—';
  const seconds = Math.max(0, next - Math.floor(Date.now() / 1000));
  if (seconds < 60)
    return t('wallpaperSwitcher.time.secondsLater', { count: seconds });
  return t('wallpaperSwitcher.time.minutesLater', {
    count: Math.ceil(seconds / 60)
  });
});

const cacheSizeLabel = computed(() => {
  const bytes = status.value?.cacheSizeBytes ?? 0;
  return formatBytes(bytes);
});

const folderCountLabel = computed(() => {
  if (!folderScan.value) {
    return config.value.folderPath
      ? t('wallpaperSwitcher.folderStatus.notScanned')
      : t('wallpaperSwitcher.folderStatus.selectFirst');
  }
  return t('wallpaperSwitcher.folderStatus.detected', {
    count: folderScan.value.count
  });
});
const loadAll = async () => {
  loading.value = true;
  try {
    const [nextConfig, nextStatus] = await Promise.all([
      getWallpaperConfig(),
      getWallpaperStatus()
    ]);
    config.value = nextConfig;
    status.value = nextStatus;
    if (nextConfig.folderPath) {
      try {
        folderScan.value = await scanWallpaperFolder(nextConfig.folderPath);
      } catch {
        folderScan.value = null;
      }
    }
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    loading.value = false;
  }
};

const persistConfig = async () => {
  saving.value = true;
  try {
    await saveWallpaperConfig(config.value);
    await refreshStatus();
    modal.msg(t('wallpaperSwitcher.messages.settingsSaved'), 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    saving.value = false;
  }
};

const chooseImage = async () => {
  const selected = await open({
    multiple: false,
    directory: false,
    filters: [
      { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'webp', 'bmp'] }
    ]
  });
  if (typeof selected !== 'string') return;
  config.value.fixedImagePath = selected;
  config.value.mode = 'fixed';
  try {
    await setFixedWallpaper(selected);
    await loadAll();
    modal.msg(t('wallpaperSwitcher.messages.fixedSet'), 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  }
};

const scanFolder = async () => {
  if (!config.value.folderPath) {
    modal.msg(t('wallpaperSwitcher.messages.selectFolderFirst'), 'warning');
    return;
  }
  try {
    folderScan.value = await scanWallpaperFolder(config.value.folderPath);
    if (folderScan.value.count === 0) {
      modal.msg(t('wallpaperSwitcher.messages.noImagesInFolder'), 'warning');
    } else {
      modal.msg(folderCountLabel.value, 'success');
    }
  } catch (error) {
    modal.msg(String(error), 'error');
  }
};

const chooseFolder = async () => {
  const selected = await open({ multiple: false, directory: true });
  if (typeof selected !== 'string') return;
  config.value.folderPath = selected;
  config.value.mode = 'folder';
  await scanFolder();
};

const switchNow = async () => {
  switching.value = true;
  try {
    await saveWallpaperConfig(config.value);
    await switchWallpaperNow();
    await refreshStatus();
    modal.msg(t('wallpaperSwitcher.messages.wallpaperSwitched'), 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    switching.value = false;
  }
};

const setCurrentAsFixed = async () => {
  if (!status.value?.currentPath) {
    modal.msg(t('wallpaperSwitcher.messages.noCurrentToFix'), 'warning');
    return;
  }
  config.value.mode = 'fixed';
  config.value.fixedImagePath = status.value.currentPath;
  config.value.scheduleEnabled = false;
  try {
    await setFixedWallpaper(status.value.currentPath);
    await loadAll();
    modal.msg(t('wallpaperSwitcher.messages.fixedSet'), 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  }
};

const clearCache = async () => {
  clearingCache.value = true;
  try {
    await clearWallpaperCache();
    await refreshStatus();
    modal.msg(t('wallpaperSwitcher.messages.cacheCleared'), 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    clearingCache.value = false;
  }
};

const openCacheDir = async () => {
  openingCache.value = true;
  try {
    await openWallpaperCacheDir();
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    openingCache.value = false;
  }
};

const updateConfig = (nextConfig: WallpaperConfig) => {
  config.value = nextConfig;
};

const closeWindow = async () => {
  await appWindow.close();
};

onMounted(async () => {
  await loadAll();
  await setupListeners();
  unlistenFocus = await appWindow.onFocusChanged(({ payload: focused }) => {
    if (focused) void refreshStatus(true);
  });
  statusTimer = window.setInterval(() => {
    if (document.visibilityState === 'visible') void refreshStatus(true);
  }, 2500);
});

onUnmounted(() => {
  if (statusTimer !== null) window.clearInterval(statusTimer);
  unlistenFocus?.();
});
</script>

<template>
  <main class="wallpaper-window wallpaper-window--redesigned">
    <SwitcherTitlebar
      :active-view="activeView"
      :wallhaven-source="wallhavenSource"
      :wallhaven-loading="wallhavenLoading"
      :schedule-enabled="config.scheduleEnabled"
      :scheduler-running="Boolean(status?.schedulerRunning)"
      @back="backToSwitcher"
      @close="closeWindow"
      @open-wallhaven="openWallhavenGrid"
      @set-wallhaven-source="setWallhavenSource"
    />

    <section v-if="status && !status.supported" class="unsupported">
      {{ t('wallpaperSwitcher.unsupported') }}
    </section>

    <SwitcherHome
      v-if="activeView === 'switcher'"
      :config="config"
      :loading="loading"
      :preview-src="previewSrc"
      :current-wallpaper-name="currentWallpaperName"
      :source-label="sourceLabel"
      :resolution-label="resolutionLabel"
      :next-switch-label="nextSwitchLabel"
      :folder-count-label="folderCountLabel"
      :cache-size-label="cacheSizeLabel"
      :switching="switching"
      :clearing-cache="clearingCache"
      :opening-cache="openingCache"
      :saving="saving"
      @update-config="updateConfig"
      @choose-image="chooseImage"
      @choose-folder="chooseFolder"
      @scan-folder="scanFolder"
      @open-wallhaven-grid="openWallhavenGrid"
      @switch-now="switchNow"
      @set-current-as-fixed="setCurrentAsFixed"
      @clear-cache="clearCache"
      @open-cache-dir="openCacheDir"
      @persist-config="persistConfig"
    />

    <WallhavenView
      v-else
      v-model:keyword="wallhavenKeyword"
      :category="wallhavenCategory"
      :loading="wallhavenLoading"
      :error="wallhavenError"
      :wallpapers="visibleWallpapers"
      :loaded-thumb-ids="loadedThumbIds"
      :working-actions="workingActions"
      :download-progress="downloadProgress"
      :page="wallhavenPage"
      :last-page="wallhavenLastPage"
      :source-label="wallhavenSourceLabel"
      :screen-label="screenLabel"
      :set-thumb-ref="setThumbRef"
      @refresh="refreshWallhaven"
      @set-category="setWallhavenCategory"
      @open-preview="openPreview"
      @mark-thumb-loaded="markThumbLoaded"
      @set-wallpaper="setWallpaperFromWallhaven"
      @download-wallpaper="downloadWallpaperFromWallhaven"
      @prev-page="prevWallhavenPage"
      @next-page="nextWallhavenPage"
    />

    <WallpaperPreviewModal
      :wallpaper="previewWallpaper"
      :loading="previewLoading"
      :load-failed="previewLoadFailed"
      :working-actions="workingActions"
      :download-progress="downloadProgress"
      @close="closePreview"
      @loaded="markPreviewLoaded"
      @failed="markPreviewFailed"
      @download="downloadWallpaperFromWallhaven"
      @set-wallpaper="setWallpaperFromWallhaven"
    />
  </main>
</template>

<style lang="scss" src="./styles.scss"></style>
