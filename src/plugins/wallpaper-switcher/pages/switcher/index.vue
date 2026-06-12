<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import {
  applyCurrentWallpaperFit,
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
  type WallpaperFitMode,
  type WallpaperStatus
} from '../../api';
import { useWallhaven } from '../../composables/useWallhaven';
import {
  Back,
  CloseSmall,
  Computer,
  Download,
  FolderOpen,
  Lightning,
  Pin,
  Picture,
  PictureAlbum,
  PreviewOpen,
  Refresh,
  Save,
  Search,
  Delete,
  Time
} from '@icon-park/vue-next';

const appWindow = getCurrentWindow();
const { t } = useI18n();

const config = ref<WallpaperConfig>(defaultWallpaperConfig());
const status = ref<WallpaperStatus | null>(null);
const folderScan = ref<FolderScanResult | null>(null);
const loading = ref(false);
const saving = ref(false);
const switching = ref(false);
const fitting = ref(false);
const clearingCache = ref(false);
const openingCache = ref(false);
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
  workingIds,
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

const previewSrc = computed(() => wallpaperImageSrc(status.value?.currentPath || config.value.lastAppliedPath));
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
const resolutionLabel = computed(() => status.value?.currentResolution || screenLabel.value);

const sourceLabel = computed(() => {
  if (config.value.mode === 'fixed') return t('wallpaperSwitcher.fixedImage');
  if (config.value.mode === 'wallhaven') return 'Wallhaven';
  return t('wallpaperSwitcher.localFolder');
});

const nextSwitchLabel = computed(() => {
  const next = status.value?.nextSwitchAt;
  if (!next) return t('wallpaperSwitcher.time.minutesLater', { count: 18 });
  const seconds = Math.max(0, next - Math.floor(Date.now() / 1000));
  if (seconds < 60) return t('wallpaperSwitcher.time.secondsLater', { count: seconds });
  return t('wallpaperSwitcher.time.minutesLater', { count: Math.ceil(seconds / 60) });
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
  return t('wallpaperSwitcher.folderStatus.detected', { count: folderScan.value.count });
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

const refreshStatus = async () => {
  try {
    status.value = await getWallpaperStatus();
  } catch (error) {
    modal.msg(String(error), 'error');
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
    filters: [{ name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'webp', 'bmp'] }]
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

const chooseFolder = async () => {
  const selected = await open({ multiple: false, directory: true });
  if (typeof selected !== 'string') return;
  config.value.folderPath = selected;
  config.value.mode = 'folder';
  await scanFolder();
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

const setFitMode = async (fitMode: WallpaperFitMode) => {
  config.value.fitMode = fitMode;
  fitting.value = true;
  try {
    await applyCurrentWallpaperFit(fitMode);
    await refreshStatus();
    config.value = await getWallpaperConfig();
    modal.msg(t('wallpaperSwitcher.messages.fitApplied'), 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    fitting.value = false;
  }
};

const setCurrentAsFixed = async () => {
  if (!status.value?.currentPath) {
    modal.msg(t('wallpaperSwitcher.messages.noCurrentToFix'), 'warning');
    return;
  }
  config.value.mode = 'fixed';
  config.value.fixedImagePath = status.value.currentPath;
  await persistConfig();
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

const closeWindow = async () => {
  await appWindow.close();
};

const formatBytes = (value: number): string => {
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  if (value < 1024 * 1024 * 1024) return `${(value / 1024 / 1024).toFixed(1)} MB`;
  return `${(value / 1024 / 1024 / 1024).toFixed(1)} GB`;
};

onMounted(async () => {
  await loadAll();
  await setupListeners();
});

onUnmounted(() => {
  // cleanup handled in composable
});
</script>

<template>
  <main class="wallpaper-window">
    <header class="titlebar" data-tauri-drag-region>
      <div v-if="activeView === 'switcher'" class="title">
        <Picture :size="18" />
        <span>{{ t('wallpaperSwitcher.title') }}</span>
      </div>
      <div v-else class="title">
        <button type="button" class="flat-icon" :title="t('wallpaperSwitcher.back')" @click="backToSwitcher">
          <Back :size="20" />
        </button>
        <span>{{ t('wallpaperSwitcher.wallhavenTitle') }}</span>
      </div>
      <div v-if="activeView === 'switcher'" class="window-actions">
        <button type="button" class="icon-btn online-entry-btn" :title="t('wallpaperSwitcher.openWallhaven')" @click="openWallhavenGrid">
          <PictureAlbum :size="18" />
        </button>
        <button type="button" class="icon-btn" :title="t('wallpaperSwitcher.close')" @click="closeWindow">
          <CloseSmall :size="20" />
        </button>
      </div>
      <div v-else class="window-actions">
        <div class="source-toggle" role="tablist" :aria-label="t('wallpaperSwitcher.sourceToggle')">
          <div
            class="seg-tab"
            :class="{ active: wallhavenSource === 'hot', disabled: wallhavenLoading }"
            role="tab"
            tabindex="0"
            @click="!wallhavenLoading && setWallhavenSource('hot')"
            @keydown.enter.prevent="!wallhavenLoading && setWallhavenSource('hot')"
          >
            {{ t('wallpaperSwitcher.hot') }}
          </div>
          <div
            class="seg-tab"
            :class="{ active: wallhavenSource === 'toplist', disabled: wallhavenLoading }"
            role="tab"
            tabindex="0"
            @click="!wallhavenLoading && setWallhavenSource('toplist')"
            @keydown.enter.prevent="!wallhavenLoading && setWallhavenSource('toplist')"
          >
            {{ t('wallpaperSwitcher.toplist') }}
          </div>
        </div>
        <button type="button" class="icon-btn" :title="t('wallpaperSwitcher.close')" @click="closeWindow">
          <CloseSmall :size="20" />
        </button>
      </div>
    </header>

    <section v-if="status && !status.supported" class="unsupported">
      {{ t('wallpaperSwitcher.unsupported') }}
    </section>

    <div v-if="activeView === 'switcher'" class="content" :class="{ dimmed: loading }">
      <section class="top-panel">
        <div class="preview">
          <img v-if="previewSrc" :src="previewSrc" :alt="t('wallpaperSwitcher.currentPreviewAlt')" />
          <div v-else class="preview-empty">
            <Picture :size="42" />
            <span>{{ t('wallpaperSwitcher.noCurrentWallpaper') }}</span>
          </div>
        </div>
        <div class="status-panel">
          <div class="status-copy">
            <div class="wallpaper-name">
              <span>{{ t('wallpaperSwitcher.currentWallpaper') }}</span>
              <strong>{{ currentWallpaperName }}</strong>
            </div>
            <div class="status-list">
              <div class="status-row">
                <FolderOpen :size="16" />
                <span>{{ t('wallpaperSwitcher.source') }}</span>
                <strong>{{ sourceLabel }}</strong>
              </div>
              <div class="status-row">
                <Computer :size="16" />
                <span>{{ t('wallpaperSwitcher.resolution') }}</span>
                <strong>{{ resolutionLabel }}</strong>
              </div>
              <div class="status-row">
                <Time :size="16" />
                <span>{{ t('wallpaperSwitcher.nextSwitch') }}</span>
                <strong>{{ nextSwitchLabel }}</strong>
              </div>
            </div>
          </div>
          <div class="status-actions">
            <button type="button" class="primary-btn" :disabled="switching" @click="switchNow">
              <Lightning theme="outline" :size="14" />
              {{ switching ? t('wallpaperSwitcher.switching') : t('wallpaperSwitcher.switchNow') }}
            </button>
            <button type="button" class="secondary-btn" @click="setCurrentAsFixed">
              <Pin theme="outline" :size="14" />
              {{ t('wallpaperSwitcher.setFixed') }}
            </button>
          </div>
        </div>
      </section>

      <section class="card settings-card">
        <div class="form-row mode-row">
          <span class="row-label">{{ t('wallpaperSwitcher.mode') }}</span>
          <div class="segmented three">
            <button type="button" :class="{ active: config.mode === 'fixed' }" @click="config.mode = 'fixed'">
              {{ t('wallpaperSwitcher.fixedImage') }}
            </button>
            <button type="button" :class="{ active: config.mode === 'folder' }" @click="config.mode = 'folder'">
              {{ t('wallpaperSwitcher.localFolder') }}
            </button>
            <button type="button" :class="{ active: config.mode === 'wallhaven' }" @click="config.mode = 'wallhaven'">
              {{ t('wallpaperSwitcher.wallhavenOnline') }}
            </button>
          </div>
        </div>

        <div class="form-row fixed-row">
          <span class="row-label">{{ t('wallpaperSwitcher.fixedImage') }}</span>
          <input
            v-model="config.fixedImagePath"
            class="path-input"
            :placeholder="t('wallpaperSwitcher.placeholders.fixedImage')"
            spellcheck="false"
          />
          <button type="button" class="tool-btn" @click="chooseImage">
            <Picture :size="16" />
            {{ t('wallpaperSwitcher.selectImage') }}
          </button>
        </div>

        <div class="form-row folder-row">
          <span class="row-label">{{ t('wallpaperSwitcher.localFolder') }}</span>
          <input
            v-model="config.folderPath"
            class="path-input"
            :placeholder="t('wallpaperSwitcher.placeholders.folder')"
            spellcheck="false"
          />
          <button type="button" class="tool-btn" @click="chooseFolder">
            <FolderOpen :size="16" />
            {{ t('wallpaperSwitcher.select') }}
          </button>
          <button type="button" class="tool-btn" @click="scanFolder">
            <Refresh :size="16" />
            {{ t('wallpaperSwitcher.scan') }}
          </button>
        </div>
        <div class="hint-row">{{ folderCountLabel }}</div>

        <div class="form-row wallhaven-row">
          <span class="row-label">Wallhaven</span>
          <span class="sub-label">{{ t('wallpaperSwitcher.sourceShort') }}</span>
          <div class="segmented source">
            <button type="button" :class="{ active: config.wallhavenSource === 'hot' }" @click="config.wallhavenSource = 'hot'">
              {{ t('wallpaperSwitcher.hotWithLabel') }}
            </button>
            <button type="button" :class="{ active: config.wallhavenSource === 'toplist' }" @click="config.wallhavenSource = 'toplist'">
              {{ t('wallpaperSwitcher.toplistWithLabel') }}
            </button>
          </div>
          <button type="button" class="tool-btn grid-open" @click="openWallhavenGrid">
            <Search :size="16" />
            {{ t('wallpaperSwitcher.openOnlineGrid') }}
          </button>
        </div>
        <div class="hint-row">
          <span>{{ t('wallpaperSwitcher.screenMatch') }}</span>
          <strong>{{ screenLabel }}</strong>
        </div>
      </section>

      <section class="card rules-card">
        <div class="rules-line">
          <span class="row-label">{{ t('wallpaperSwitcher.switchRules') }}</span>
          <label class="switch-label">
            {{ t('wallpaperSwitcher.enableSchedule') }}
            <input v-model="config.scheduleEnabled" type="checkbox" />
            <span class="switch-control"></span>
          </label>
          <label class="number-label">
            {{ t('wallpaperSwitcher.every') }}
            <input v-model.number="config.intervalMinutes" type="number" min="1" max="1440" />
            {{ t('wallpaperSwitcher.minutes') }}
          </label>
          <span class="sub-label">{{ t('wallpaperSwitcher.type') }}</span>
          <div class="segmented mini">
            <button type="button" :class="{ active: config.wallhavenSource === 'hot' }" @click="config.wallhavenSource = 'hot'">
              {{ t('wallpaperSwitcher.hot') }}
            </button>
            <button type="button" :class="{ active: config.wallhavenSource === 'toplist' }" @click="config.wallhavenSource = 'toplist'">
              {{ t('wallpaperSwitcher.toplist') }}
            </button>
          </div>
        </div>
        <div class="rules-line">
          <span class="row-label compact">{{ t('wallpaperSwitcher.fitMode') }}</span>
          <div class="segmented fit">
            <button type="button" :class="{ active: config.fitMode === 'fillCrop' }" :disabled="fitting" @click="setFitMode('fillCrop')">
              {{ t('wallpaperSwitcher.fitFillCrop') }}
            </button>
            <button type="button" :class="{ active: config.fitMode === 'fit' }" :disabled="fitting" @click="setFitMode('fit')">
              {{ t('wallpaperSwitcher.fitContain') }}
            </button>
            <button type="button" :class="{ active: config.fitMode === 'center' }" :disabled="fitting" @click="setFitMode('center')">
              {{ t('wallpaperSwitcher.fitCenter') }}
            </button>
          </div>
          <label class="checkbox-label">
            <input v-model="config.autoRestore" type="checkbox" />
            {{ t('wallpaperSwitcher.autoRestore') }}
          </label>
        </div>
      </section>

      <footer class="footer-card">
        <div class="cache-info">
          <strong>{{ t('wallpaperSwitcher.cache') }}</strong>
          <span>{{ t('wallpaperSwitcher.wallhavenCache') }}</span>
          <span>{{ cacheSizeLabel }}</span>
        </div>
        <div class="footer-actions">
          <button type="button" class="secondary-btn" :disabled="clearingCache" @click="clearCache">
            <Delete :size="16" />
            {{ clearingCache ? t('wallpaperSwitcher.clearing') : t('wallpaperSwitcher.clearCache') }}
          </button>
          <button type="button" class="secondary-btn" :disabled="openingCache" @click="openCacheDir">
            <FolderOpen :size="16" />
            {{ openingCache ? t('wallpaperSwitcher.opening') : t('wallpaperSwitcher.openCache') }}
          </button>
          <button type="button" class="primary-btn" :disabled="saving" @click="persistConfig">
            <Save :size="17" />
            {{ saving ? t('wallpaperSwitcher.saving') : t('wallpaperSwitcher.saveSettings') }}
          </button>
        </div>
      </footer>
    </div>

    <div v-else class="wallhaven-view">
      <section class="filters filters--preview-style">
        <div class="search-box wallhaven-search">
          <input v-model="wallhavenKeyword" type="text" :placeholder="t('wallpaperSwitcher.searchPlaceholder')" @keydown.enter="refreshWallhaven" />
          <Search :size="16" class="search-icon" />
          <button v-if="wallhavenKeyword" type="button" class="clear-btn" :title="t('wallpaperSwitcher.clear')" @click="wallhavenKeyword = ''">
            <CloseSmall :size="18" />
          </button>
        </div>

        <div class="wallhaven-tabs" role="tablist" :aria-label="t('wallpaperSwitcher.categoryToggle')">
          <button type="button" :class="{ active: wallhavenCategory === 'general' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('general')">
            {{ t('wallpaperSwitcher.categories.general') }}
          </button>
          <button type="button" :class="{ active: wallhavenCategory === 'anime' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('anime')">
            {{ t('wallpaperSwitcher.categories.anime') }}
          </button>
          <button type="button" :class="{ active: wallhavenCategory === 'people' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('people')">
            {{ t('wallpaperSwitcher.categories.people') }}
          </button>
          <button type="button" :class="{ active: wallhavenCategory === 'nature' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('nature')">
            {{ t('wallpaperSwitcher.categories.nature') }}
          </button>
        </div>

        <div class="wallhaven-meta">
          <span>{{ t('wallpaperSwitcher.autoMatch', { resolution: screenLabel }) }}</span>
          <button type="button" class="refresh-btn wallhaven-refresh" :title="t('wallpaperSwitcher.refresh')" @click="refreshWallhaven">
            <Refresh :size="14" :class="{ spinning: wallhavenLoading }" />
          </button>
        </div>
      </section>

      <section class="grid-wrap">
        <div v-if="wallhavenLoading && visibleWallpapers.length === 0" class="empty-state">{{ t('wallpaperSwitcher.loadingWallhaven') }}</div>
        <div v-else-if="wallhavenError" class="empty-state error-state">
          <span>{{ wallhavenError }}</span>
          <button type="button" @click="refreshWallhaven">{{ t('wallpaperSwitcher.retry') }}</button>
        </div>
        <div v-else-if="visibleWallpapers.length === 0" class="empty-state">{{ t('wallpaperSwitcher.noWallpapers') }}</div>
        <div v-else class="wallpaper-grid">
          <article v-for="wallpaper in visibleWallpapers" :key="wallpaper.id" class="wallpaper-card">
            <button type="button" class="thumb" @click="openPreview(wallpaper)">
              <div v-if="!loadedThumbIds.has(wallpaper.id)" class="thumb-skeleton"></div>
              <img
                :ref="(element) => setThumbRef(wallpaper, element)"
                :alt="wallpaper.resolution"
                loading="lazy"
                @load="markThumbLoaded(wallpaper.id)"
              />
              <span>{{ wallpaper.resolution }}</span>
            </button>
            <div class="card-actions" @click.stop>
              <button type="button" :title="t('wallpaperSwitcher.preview')" @click="openPreview(wallpaper)">
                <PreviewOpen :size="16" />
                {{ t('wallpaperSwitcher.preview') }}
              </button>
              <button type="button" :title="t('wallpaperSwitcher.setWallpaper')" :disabled="workingIds.has(wallpaper.id)" @click="setWallpaperFromWallhaven(wallpaper)">
                <Computer :size="16" />
                {{ workingIds.has(wallpaper.id) ? t('wallpaperSwitcher.setting') : t('wallpaperSwitcher.set') }}
              </button>
              <button type="button" :title="t('wallpaperSwitcher.download')" :disabled="workingIds.has(wallpaper.id)" @click="downloadWallpaperFromWallhaven(wallpaper)">
                <Download :size="16" />
                {{ t('wallpaperSwitcher.download') }}
              </button>
            </div>
          </article>
        </div>
      </section>

      <footer class="pager">
        <span>{{ t('wallpaperSwitcher.page', { page: wallhavenPage }) }}</span>
        <span class="source-note">{{ t('wallpaperSwitcher.sourceNote', { source: wallhavenSourceLabel }) }}</span>
        <div class="pager-actions">
          <button type="button" :disabled="wallhavenPage <= 1 || wallhavenLoading" @click="prevWallhavenPage">{{ t('wallpaperSwitcher.prevPage') }}</button>
          <button type="button" :disabled="wallhavenPage >= wallhavenLastPage || wallhavenLoading" @click="nextWallhavenPage">{{ t('wallpaperSwitcher.nextPage') }}</button>
        </div>
      </footer>
    </div>

    <div v-if="previewWallpaper" class="preview-modal" @click.self="closePreview">
      <div class="preview-dialog">
        <header>
          <strong>{{ previewWallpaper.resolution }}</strong>
          <button type="button" class="flat-icon" @click="closePreview">
            <CloseSmall :size="23" />
          </button>
        </header>
        <div class="preview-image-wrap">
          <div v-if="previewLoading" class="preview-skeleton">
            <span>{{ t('wallpaperSwitcher.loadingPreview') }}</span>
          </div>
          <div v-if="previewLoadFailed" class="preview-error">{{ t('wallpaperSwitcher.previewLoadFailed') }}</div>
          <img
            :class="{ ready: !previewLoading && !previewLoadFailed }"
            :src="previewWallpaper.path"
            :alt="t('wallpaperSwitcher.wallpaperPreviewAlt')"
            @load="markPreviewLoaded"
            @error="markPreviewFailed"
          />
        </div>
        <footer>
          <button type="button" class="secondary-btn" :disabled="workingIds.has(previewWallpaper.id)" @click="downloadWallpaperFromWallhaven(previewWallpaper)">
            {{ t('wallpaperSwitcher.downloadCache') }}
          </button>
          <button type="button" class="primary-btn" :disabled="workingIds.has(previewWallpaper.id)" @click="setWallpaperFromWallhaven(previewWallpaper)">
            {{ workingIds.has(previewWallpaper.id) ? t('wallpaperSwitcher.setting') : t('wallpaperSwitcher.setWallpaper') }}
          </button>
        </footer>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wallpaper-window {
  --wallpaper-bg: var(--search-bg-color, #fafbfd);
  --wallpaper-panel: var(--search-card-bg, #ffffff);
  --wallpaper-soft: var(--search-soft-bg, #f6f9fe);
  --wallpaper-border: var(--panel-border, var(--search-border-color, #d9e2ef));
  --wallpaper-border-strong: var(--search-result-active-border, #c9d8ff);
  --wallpaper-hover: var(--search-result-hover, #f3f7ff);
  --wallpaper-active: var(--search-result-active, #edf4ff);
  --wallpaper-text: var(--search-text-color, #111827);
  --wallpaper-muted: var(--search-info-text-color, #7b8494);
  --wallpaper-primary: var(--search-result-accent, #5f74f3);
  --wallpaper-input: var(--search-input-bg, #fbfcff);
  --wallpaper-card-actions-bg: var(--search-card-bg, #ffffff);
  --wallpaper-card-actions-border: var(--wallpaper-border);
  --wallpaper-card-actions-hover: var(--wallpaper-hover);
  --wallpaper-card-actions-text: var(--wallpaper-text);
}

.wallpaper-window {
  @apply w-screen h-screen overflow-hidden text-xs rounded-[6px];

  color-scheme: light dark;
  color: var(--wallpaper-text);
  background: var(--wallpaper-bg);
  border: 1px solid var(--wallpaper-border);
  box-shadow: 0 8px 20px rgb(15 23 42 / 6%);

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button,
  input,
  select {
    font: inherit;
  }
}

:global(html.dark) .wallpaper-window,
:global(.dark) .wallpaper-window,
.wallpaper-window.dark {
  --wallpaper-bg: var(--search-bg-color, #202020);
  --wallpaper-panel: var(--search-card-bg, #242424);
  --wallpaper-soft: var(--search-soft-bg, #292929);
  --wallpaper-border: var(--panel-border, var(--search-border, #363636));
  --wallpaper-border-strong: var(--search-result-active-border, #5266d9);
  --wallpaper-hover: var(--search-result-hover, #363636);
  --wallpaper-active: var(--search-result-active, #24304a);
  --wallpaper-text: var(--search-text-color, #fcfcfc);
  --wallpaper-muted: var(--search-info-text-color, #949494);
  --wallpaper-primary: var(--search-result-accent, #7d91f6);
  --wallpaper-input: var(--search-input-bg, #2c2c2c);
  --wallpaper-card-actions-bg: var(--search-card-bg, #242424);
  --wallpaper-card-actions-border: var(--wallpaper-border);
  --wallpaper-card-actions-hover: var(--wallpaper-hover);
  --wallpaper-card-actions-text: var(--wallpaper-text);
}

.titlebar {
  @apply flex items-center justify-between h-[38px] py-0 pr-[14px] pl-5 border-b;

  background: var(--wallpaper-bg);
  border-color: var(--wallpaper-border);
}

.title,
.window-actions,
.status-actions,
.footer-actions,
.cache-info,
.rules-line,
.switch-label,
.checkbox-label,
.filters,
.chips,
.source-toggle,
.card-actions,
.pager,
.pager-actions,
.preview-dialog header,
.preview-dialog footer,
.tool-btn,
.primary-btn,
.secondary-btn {
  @apply flex items-center;
}

.title {
  @apply gap-2.5 text-sm font-bold;

  color: var(--wallpaper-text);

  svg {
    color: var(--wallpaper-primary);
  }
}

.window-actions {
  @apply gap-2.5;
}

.icon-btn,
.flat-icon,
.tool-btn,
.primary-btn,
.secondary-btn {
  @apply inline-flex items-center justify-center rounded-md cursor-pointer;

  transition: background 0.14s ease, border-color 0.14s ease, color 0.14s ease;
}

.icon-btn {
  @apply w-7 h-7 p-0 leading-none;

  color: var(--wallpaper-text);
  background: transparent;

  svg {
    @apply block;
  }

  &:hover {
    background: var(--wallpaper-hover);
  }
}

.online-entry-btn {
  color: var(--wallpaper-primary);
  background: var(--wallpaper-active);
  border-color: var(--wallpaper-border-strong);

  &:hover {
    color: var(--wallpaper-primary);
    background: var(--wallpaper-hover);
    border-color: var(--wallpaper-border-strong);
  }
}

.flat-icon {
  @apply w-[34px] h-[34px] border-0;

  color: var(--wallpaper-text);
  background: transparent;

  &:hover {
    background: var(--wallpaper-hover);
  }
}

.content {
  @apply grid grid-rows-[auto_auto_auto_auto] gap-2.5 min-h-0 content-start overflow-auto pt-3 px-4 pb-3;

  height: calc(100vh - 40px);
}

.dimmed {
  @apply opacity-[0.72];
}

.unsupported {
  @apply mt-3 mx-[18px] mb-0 py-2.5 px-3 text-amber-700 bg-amber-100 border border-amber-200 rounded-md;

  color: #b45309;
  background: #fef3c7;
  border-color: #fde68a;
}

.top-panel {
  @apply relative flex min-h-44 pt-[22px] px-7 pb-5 overflow-hidden rounded-md border;

  background: #111827;
  border-color: var(--wallpaper-border);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 18%);

  &::after {
    @apply absolute inset-0 z-[1] pointer-events-none;

    content: '';
    background:
      linear-gradient(90deg, rgb(4 10 20 / 58%) 0%, rgb(4 10 20 / 38%) 34%, rgb(4 10 20 / 12%) 66%, rgb(4 10 20 / 28%) 100%),
      linear-gradient(180deg, rgb(4 10 20 / 10%) 0%, rgb(4 10 20 / 30%) 100%);
  }
}

.preview {
  @apply absolute inset-0 overflow-hidden;

  background: #111827;
  border-radius: inherit;

  img {
    @apply block w-full h-full object-cover;

    border-radius: inherit;
    filter: saturate(1.04) contrast(0.98);
  }
}

.preview-empty {
  @apply h-full flex flex-col items-center justify-center gap-2;

  color: rgb(255 255 255 / 74%);
}

.card,
.footer-card {
  @apply rounded-md border;

  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
}

.status-panel {
  @apply relative z-[2] flex justify-between w-full min-w-0 border-0;

  color: #fff;
  background: transparent;
  text-shadow: 0 2px 8px rgb(0 0 0 / 48%);

  h2 {
    @apply mt-0 mx-0 mb-[5px] text-[15px] font-bold;
  }
}

.status-copy {
  @apply flex flex-col justify-between min-w-0;
}

.wallpaper-name {
  @apply flex items-baseline gap-2.5 max-w-[620px] mb-[22px] text-sm font-semibold;

  color: rgb(255 255 255 / 74%);

  strong {
    @apply min-w-0 overflow-hidden text-[15px] font-bold text-ellipsis whitespace-nowrap;

    color: #fff;
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace;
  }
}

.status-list {
  @apply grid gap-3;
}

.status-row {
  @apply flex items-center gap-[9px] min-h-5 text-[13px] font-medium;

  color: rgb(255 255 255 / 76%);

  svg {
    @apply flex-none;

    color: rgb(255 255 255 / 72%);
    filter: drop-shadow(0 2px 7px rgb(0 0 0 / 38%));
  }

  span {
    color: rgb(255 255 255 / 68%);
  }

  strong {
    color: #fff;
    font-weight: 650;
  }
}

.status-actions {
  @apply self-end gap-2 ml-6;

  .primary-btn {
    @apply h-[34px] leading-[34px];

    background: rgb(95 116 243 / 94%);
    border-color: rgb(255 255 255 / 16%);
    box-shadow: 0 14px 26px rgb(0 0 0 / 24%);
  }

  .secondary-btn {
    @apply h-[34px] leading-[34px];

    color: rgb(255 255 255 / 86%);
    background: rgb(15 23 42 / 24%);
    border-color: rgb(255 255 255 / 10%);
    backdrop-filter: blur(8px);

    &:hover {
      color: #fff;
      background: rgb(255 255 255 / 16%);
    }
  }
}

.primary-btn,
.secondary-btn,
.tool-btn {
  @apply justify-center gap-1.5 h-7 leading-7 py-0 px-[13px] whitespace-nowrap;
}

.primary-btn {
  color: #fff;
  background: var(--wallpaper-primary);
  border-color: var(--wallpaper-primary);

  &:hover:not(:disabled) {
    background: var(--wallpaper-primary);
    filter: brightness(0.96);
  }
}

.secondary-btn,
.tool-btn {
  color: var(--wallpaper-text);
  background: transparent;

  &:hover {
    background: var(--wallpaper-hover);
  }
}

button:disabled {
  @apply cursor-not-allowed opacity-[0.65];
}

.settings-card {
  @apply min-h-0 pt-3 px-3 pb-2.5 overflow-hidden;
}

.form-row {
  @apply grid items-center gap-2.5 min-h-9;
}

.mode-row {
  @apply grid-cols-[96px_minmax(0,1fr)];
}

.fixed-row {
  @apply grid-cols-[96px_minmax(0,1fr)_128px];
}

.folder-row {
  @apply grid-cols-[96px_minmax(0,1fr)_94px_94px];
}

.wallhaven-row {
  @apply grid-cols-[96px_74px_minmax(0,1fr)_210px] items-center gap-2.5 min-h-11 pt-2.5 mt-2 border-t;

  border-color: var(--wallpaper-border);
}

.row-label,
.sub-label {
  @apply font-semibold;
}

.row-label {
  color: var(--wallpaper-text);
}

.sub-label,
.hint-row {
  color: var(--wallpaper-muted);
}

.path-input {
  @apply w-full h-[30px] min-w-0 py-0 px-[11px] rounded-md outline-none border;

  color: var(--wallpaper-text);
  background: var(--wallpaper-input);
  border-color: var(--wallpaper-border);

  &::placeholder {
    color: var(--wallpaper-muted);
    opacity: 1;
  }

  &:focus {
    border-color: var(--wallpaper-primary);
  }
}

.hint-row {
  @apply flex items-center gap-4 pl-0 text-[11px] min-h-4;
}

.segmented {
  @apply grid overflow-hidden border rounded;

  border-color: var(--wallpaper-border);

  button {
    @apply h-[26px] leading-[26px] py-0 px-3 border-0 border-r cursor-pointer;

    color: var(--wallpaper-text);
    background: transparent;
    border-color: var(--wallpaper-border);

    &:last-child {
      border-right: 0;
    }

    &.active {
      color: var(--wallpaper-primary);
      background: var(--wallpaper-active);
    }
  }
}

.three {
  @apply grid-cols-3;
}

.fit {
  @apply grid-cols-3;
}

.source {
  @apply grid-cols-2;
}

.mini {
  @apply grid-cols-2 w-56;
}

.grid-open {
  @apply w-full min-w-[154px] col-start-4;
}

.rules-card {
  @apply min-h-0 py-2.5 px-3 overflow-hidden;

  h2 {
    @apply mt-0 mx-0 mb-2 text-xs font-bold;
  }
}

.rules-line {
  @apply gap-3 min-h-9;
}

.switch-label,
.checkbox-label {
  @apply gap-[9px] whitespace-nowrap;
}

.switch-label input,
.checkbox-label input {
  accent-color: var(--wallpaper-primary);
}

.switch-label input {
  display: none;
}

.switch-control {
  @apply relative w-11 h-[22px] rounded-full border;

  background: var(--wallpaper-active);
  border-color: var(--wallpaper-border);

  &::after {
    @apply absolute top-0.5 left-0.5 w-4 h-4 rounded-full;

    content: '';
    background: #fff;
    transition: transform 0.16s ease;
  }
}

.switch-label input:checked + .switch-control {
  background: var(--wallpaper-primary);

  &::after {
    transform: translateX(22px);
  }
}

.number-label {
  @apply flex items-center gap-2;

  input {
    @apply w-[78px] h-[30px] py-0 px-2.5 rounded-md border;

    color: var(--wallpaper-text);
    background: var(--wallpaper-input);
    border-color: var(--wallpaper-border);
  }
}

.compact {
  @apply w-24;
}

.footer-card {
  @apply grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 min-h-0 py-2 px-3 overflow-hidden;
}

.cache-info {
  @apply flex flex-wrap flex-1 gap-y-3 gap-x-[18px] min-w-0 text-sm;
}

.footer-actions {
  @apply flex flex-none gap-2;
}

.footer-actions .secondary-btn {
  @apply min-w-[108px];
}

.footer-actions .primary-btn {
  @apply min-w-28;
}

.source-toggle {
  @apply flex items-center gap-[18px] h-[30px] min-w-0 py-0 px-0.5 overflow-visible border-0 rounded-none shadow-none;

  background: transparent;
}

.seg-tab {
  @apply relative flex items-center justify-center min-w-0 h-[30px] py-0 px-0.5 border-0 rounded-none cursor-pointer select-none font-semibold leading-none;

  color: var(--wallpaper-muted);
  background: transparent;

  &.active {
    @apply font-extrabold shadow-none;

    color: var(--wallpaper-primary);
    background: transparent;
  }

  &.active::after {
    @apply absolute right-px bottom-px left-px h-0.5 rounded-full;

    content: '';
    background: var(--wallpaper-primary);
  }

  &.disabled {
    @apply cursor-wait opacity-[0.72];
  }
}

.wallhaven-view {
  @apply grid grid-rows-[auto_minmax(0,1fr)_auto] min-h-0 overflow-hidden;

  height: calc(100vh - 40px);
  background: var(--wallpaper-bg);
}

.filters {
  @apply pt-2.5 px-3 pb-2 overflow-hidden;
}

.filter-row {
  @apply grid items-center min-w-0 gap-2.5;
}

.filter-main {
  @apply grid-cols-[170px_minmax(0,1fr)_34px] min-h-[54px] py-2 px-2.5 rounded-[10px] border;

  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
}

.compact-search {
  @apply w-[170px] h-[34px];
}

.compact-search input {
  color: var(--wallpaper-text);
}

.compact-chips {
  @apply w-full rounded-md overflow-hidden;
}

.chip-tab {
  @apply flex items-center justify-center min-h-[34px] py-0 px-2 cursor-pointer select-none text-[13px] leading-none;

  color: var(--wallpaper-text);
  background: transparent;
  border-right: 1px solid var(--wallpaper-border);

  &:last-child {
    border-right: 0;
  }

  &.active {
    color: var(--wallpaper-primary);
    background: var(--wallpaper-active);
  }

  &.disabled {
    @apply cursor-wait opacity-[0.72];
  }
}

.refresh-btn {
  @apply flex flex-none items-center justify-center w-[34px] h-[34px] rounded-md border cursor-pointer;

  color: var(--wallpaper-text);
  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
  cursor: pointer;
  box-shadow: 0 2px 6px rgb(15 23 42 / 4%);

  &:hover {
    background: var(--wallpaper-hover);
  }
}

.filters--preview-style {
  @apply grid items-center gap-3 pt-2.5 px-[14px] pb-2 overflow-hidden;

  grid-template-columns: minmax(195px, 1fr) minmax(222px, 1.1fr) minmax(202px, auto);
}

.wallhaven-search {
  @apply flex items-center w-full min-w-0 h-8 gap-2.5 py-0 pr-2.5 pl-4 rounded-md border shadow-none;

  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
}

.wallhaven-search .search-icon {
  @apply flex-none w-[22px] h-[22px];

  color: var(--wallpaper-muted);
}

.wallhaven-search input {
  @apply flex-1 self-center min-w-0 h-full p-0 font-semibold bg-transparent border-0 outline-0;

  color: var(--wallpaper-text);
  line-height: 40px;
}

.wallhaven-search input::placeholder {
  color: var(--wallpaper-muted);
  font-weight: 500;
}

.clear-btn {
  @apply flex flex-none items-center justify-center w-[22px] h-[22px] border-0 rounded-full cursor-pointer;

  color: var(--wallpaper-muted);
  background: var(--wallpaper-soft);
  transition: color 0.16s ease, background 0.16s ease;

  &:hover {
    color: var(--wallpaper-primary);
    background: var(--wallpaper-hover);
  }
}

.clear-btn :deep(svg) {
  @apply w-3 h-3;
}

.wallhaven-tabs {
  @apply grid grid-cols-4 w-full min-w-0 h-8 p-0 overflow-hidden rounded-md border shadow-none;

  background: var(--wallpaper-soft);
  border-color: var(--wallpaper-border);
}

.wallhaven-tabs button {
  @apply relative min-w-0 h-8 border-0 cursor-pointer font-medium;

  color: var(--wallpaper-text);
  background: transparent;

  &:hover:not(:disabled) {
    background: var(--wallpaper-hover);
  }

  &:disabled {
    @apply cursor-wait opacity-70;
  }
}

.wallhaven-tabs button.active {
  @apply font-extrabold;

  color: var(--wallpaper-primary);
}

.wallhaven-tabs button.active::after {
  @apply absolute right-4 bottom-[5px] left-4 h-0.5 rounded-full;

  content: '';
  background: var(--wallpaper-primary);
}

.wallhaven-meta {
  @apply flex items-center justify-end gap-10 min-w-0 h-8 leading-8 text-xs font-semibold whitespace-nowrap;

  color: var(--wallpaper-muted);
}

.wallhaven-refresh {
  @apply w-[30px] h-[30px] rounded-md border shadow-none;

  color: var(--wallpaper-text);
  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
}

.spinning {
  animation: spin 0.8s linear infinite;
}

.grid-wrap {
  @apply min-h-0 p-3 overflow-hidden;
}

.wallpaper-grid {
  @apply grid grid-cols-4 gap-3 content-start;
}

.wallpaper-card {
  @apply overflow-hidden rounded-md border cursor-pointer;

  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
}

.thumb {
  @apply relative block w-full h-[152px] overflow-hidden border-0;

  aspect-ratio: 1.2;
  background: var(--wallpaper-soft);

  img {
    @apply relative z-[1] block w-full h-full object-cover opacity-0;

    transition: opacity 0.16s ease;
  }

  img[src] {
    @apply opacity-100;
  }

  span {
    @apply absolute bottom-2.5 left-2.5 z-[2] py-[3px] px-[7px] text-white text-sm font-bold rounded;

    background: rgb(0 0 0 / 62%);
  }
}

.thumb-skeleton {
  @apply absolute inset-0;

  background:
    linear-gradient(90deg, transparent, rgb(255 255 255 / 54%), transparent),
    #edf3fb;
  background-size: 180% 100%;
  animation: shimmer 1.1s linear infinite;
}

.card-actions {
  @apply h-9 border-t;

  background: var(--wallpaper-card-actions-bg);
  border-color: var(--wallpaper-card-actions-border);

  button {
    @apply flex flex-1 items-center justify-center gap-[5px] h-full border-0 border-r cursor-pointer;

    color: var(--wallpaper-card-actions-text);
    background: transparent;
    border-color: var(--wallpaper-card-actions-border);

    &:last-child {
      border-right: 0;
    }

    &:hover:not(:disabled) {
      color: var(--wallpaper-card-actions-text);
      background: var(--wallpaper-card-actions-hover);
    }

    &:disabled {
      @apply cursor-not-allowed opacity-[0.55];
    }
  }
}

.empty-state {
  @apply flex flex-col items-center justify-center gap-2.5 h-full p-6 text-center;

  color: var(--wallpaper-muted);
}

.error-state {
  color: #b45309;

  button {
    @apply h-8 py-0 px-[18px] rounded-md border cursor-pointer;

    color: var(--wallpaper-text);
    background: var(--wallpaper-panel);
    border-color: var(--wallpaper-border);

    &:hover {
      color: var(--wallpaper-primary);
      background: var(--wallpaper-hover);
    }
  }
}

.pager {
  @apply justify-between h-[58px] py-0 px-5;
}

.source-note {
  color: var(--wallpaper-muted);
}

.pager-actions {
  @apply gap-3;

  button {
    @apply w-[88px] h-[34px] rounded-md border cursor-pointer;

    color: var(--wallpaper-text);
    background: var(--wallpaper-panel);
    border-color: var(--wallpaper-border);

    &:hover:not(:disabled) {
      color: var(--wallpaper-primary);
      background: var(--wallpaper-hover);
    }

    &:disabled {
      @apply cursor-not-allowed opacity-[0.55];
    }
  }
}

.preview-modal {
  @apply fixed inset-0 z-20 flex items-center justify-center;

  background: rgb(15 23 42 / 34%);
}

.preview-dialog {
  @apply overflow-hidden rounded-md border;

  width: min(720px, calc(100vw - 56px));
  background: var(--wallpaper-panel);
  border-color: var(--wallpaper-border);
  box-shadow: 0 18px 42px rgb(15 23 42 / 18%);

  header,
  footer {
    @apply justify-between h-12 py-0 pr-3 pl-4;
  }
}

.preview-image-wrap {
  @apply relative flex items-center justify-center overflow-hidden;

  aspect-ratio: 16 / 9;
  min-height: 360px;
  max-height: min(430px, calc(100vh - 160px));
  background: #111827;

  img {
    @apply block w-full h-full object-contain opacity-0;

    transition: opacity 0.18s ease;
  }

  img.ready {
    @apply opacity-100;
  }
}

.preview-skeleton,
.preview-error {
  @apply absolute inset-0 flex items-center justify-center;
}

.preview-skeleton {
  z-index: 1;
  color: #cbd5e1;
  background:
    linear-gradient(90deg, transparent, rgb(255 255 255 / 8%), transparent),
    #111827;
  background-size: 180% 100%;
  animation: shimmer 1.1s linear infinite;

  span {
    @apply py-1.5 px-2.5 rounded-md border;

    background: rgb(15 23 42 / 62%);
    border-color: rgb(255 255 255 / 10%);
  }
}

.preview-error {
  z-index: 2;
  color: #dbe3ee;
  background: #111827;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shimmer {
  from {
    background-position: 180% 0;
  }
  to {
    background-position: -180% 0;
  }
}
</style>
