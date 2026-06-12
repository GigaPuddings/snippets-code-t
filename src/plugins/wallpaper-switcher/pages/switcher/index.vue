<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
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
  Delete
} from '@icon-park/vue-next';

const appWindow = getCurrentWindow();

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
const screenLabel = computed(() => {
  const width = status.value?.screenWidth || 2560;
  const height = status.value?.screenHeight || 1440;
  return `${width} × ${height}`;
});
const resolutionLabel = computed(() => status.value?.currentResolution || screenLabel.value);

const sourceLabel = computed(() => {
  if (config.value.mode === 'fixed') return '固定图片';
  if (config.value.mode === 'wallhaven') return 'Wallhaven';
  return '本地文件夹';
});

const nextSwitchLabel = computed(() => {
  const next = status.value?.nextSwitchAt;
  if (!next) return '18 分钟后';
  const seconds = Math.max(0, next - Math.floor(Date.now() / 1000));
  if (seconds < 60) return `${seconds} 秒后`;
  return `${Math.ceil(seconds / 60)} 分钟后`;
});

const cacheSizeLabel = computed(() => {
  const bytes = status.value?.cacheSizeBytes ?? 0;
  return formatBytes(bytes);
});

const folderCountLabel = computed(() => {
  if (!folderScan.value) return config.value.folderPath ? '尚未扫描文件夹' : '请选择本地壁纸文件夹';
  return `检测到 ${folderScan.value.count} 张可用图片`;
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
    modal.msg('壁纸设置已保存', 'success');
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
    modal.msg('已设置固定壁纸', 'success');
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
    modal.msg('请先选择壁纸文件夹', 'warning');
    return;
  }
  try {
    folderScan.value = await scanWallpaperFolder(config.value.folderPath);
    if (folderScan.value.count === 0) {
      modal.msg('文件夹中没有可用图片', 'warning');
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
    modal.msg('壁纸已切换', 'success');
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
    await saveWallpaperConfig(config.value);
    await applyCurrentWallpaperFit();
    await refreshStatus();
    modal.msg('适配模式已应用', 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    fitting.value = false;
  }
};

const setCurrentAsFixed = async () => {
  if (!status.value?.currentPath) {
    modal.msg('当前没有可固定的壁纸', 'warning');
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
    modal.msg('缓存已清理', 'success');
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
        <span>壁纸切换</span>
      </div>
      <div v-else class="title">
        <button type="button" class="flat-icon" title="返回" @click="backToSwitcher">
          <Back :size="20" />
        </button>
        <span>Wallhaven 壁纸</span>
      </div>
      <div v-if="activeView === 'switcher'" class="window-actions">
        <button type="button" class="icon-btn online-entry-btn" title="打开 Wallhaven 壁纸" @click="openWallhavenGrid">
          <PictureAlbum :size="18" />
        </button>
        <button type="button" class="icon-btn" title="关闭" @click="closeWindow">
          <CloseSmall :size="20" />
        </button>
      </div>
      <div v-else class="window-actions">
        <div class="source-toggle" role="tablist" aria-label="壁纸来源切换">
          <div
            class="seg-tab"
            :class="{ active: wallhavenSource === 'hot', disabled: wallhavenLoading }"
            role="tab"
            tabindex="0"
            @click="!wallhavenLoading && setWallhavenSource('hot')"
            @keydown.enter.prevent="!wallhavenLoading && setWallhavenSource('hot')"
          >
            热门
          </div>
          <div
            class="seg-tab"
            :class="{ active: wallhavenSource === 'toplist', disabled: wallhavenLoading }"
            role="tab"
            tabindex="0"
            @click="!wallhavenLoading && setWallhavenSource('toplist')"
            @keydown.enter.prevent="!wallhavenLoading && setWallhavenSource('toplist')"
          >
            排行榜
          </div>
        </div>
        <button type="button" class="icon-btn" title="关闭" @click="closeWindow">
          <CloseSmall :size="20" />
        </button>
      </div>
    </header>

    <section v-if="status && !status.supported" class="unsupported">
      当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。
    </section>

    <div v-if="activeView === 'switcher'" class="content" :class="{ dimmed: loading }">
      <section class="top-panel">
        <div class="preview">
          <img v-if="previewSrc" :src="previewSrc" alt="当前壁纸预览" />
          <div v-else class="preview-empty">
            <Picture :size="42" />
            <span>暂无当前壁纸</span>
          </div>
        </div>
        <div class="status-panel">
          <div class="status-row">
            <span>来源：</span>
            <strong>{{ sourceLabel }}</strong>
          </div>
          <div class="status-row">
            <span>分辨率：</span>
            <strong>{{ resolutionLabel }}</strong>
          </div>
          <div class="status-row">
            <span>下次切换：</span>
            <strong>{{ nextSwitchLabel }}</strong>
          </div>
          <div class="status-actions">
            <button type="button" class="primary-btn" :disabled="switching" @click="switchNow">
              <Lightning theme="outline" :size="14" />
              {{ switching ? '切换中' : '立即切换' }}
            </button>
            <button type="button" class="secondary-btn" @click="setCurrentAsFixed">
              <Pin theme="outline" :size="14" />
              设为固定
            </button>
          </div>
        </div>
      </section>

      <section class="card settings-card">
        <div class="form-row mode-row">
          <span class="row-label">模式</span>
          <div class="segmented three">
            <button type="button" :class="{ active: config.mode === 'fixed' }" @click="config.mode = 'fixed'">
              固定图片
            </button>
            <button type="button" :class="{ active: config.mode === 'folder' }" @click="config.mode = 'folder'">
              本地文件夹
            </button>
            <button type="button" :class="{ active: config.mode === 'wallhaven' }" @click="config.mode = 'wallhaven'">
              Wallhaven 在线
            </button>
          </div>
        </div>

        <div class="form-row fixed-row">
          <span class="row-label">固定图片</span>
          <input
            v-model="config.fixedImagePath"
            class="path-input"
            placeholder="E:\Wallpapers\city.png"
            spellcheck="false"
          />
          <button type="button" class="tool-btn" @click="chooseImage">
            <Picture :size="16" />
            选择图片
          </button>
        </div>

        <div class="form-row folder-row">
          <span class="row-label">本地文件夹</span>
          <input
            v-model="config.folderPath"
            class="path-input"
            placeholder="E:\Wallpapers"
            spellcheck="false"
          />
          <button type="button" class="tool-btn" @click="chooseFolder">
            <FolderOpen :size="16" />
            选择
          </button>
          <button type="button" class="tool-btn" @click="scanFolder">
            <Refresh :size="16" />
            扫描
          </button>
        </div>
        <div class="hint-row">{{ folderCountLabel }}</div>

        <div class="form-row wallhaven-row">
          <span class="row-label">Wallhaven</span>
          <span class="sub-label">来源</span>
          <div class="segmented source">
            <button type="button" :class="{ active: config.wallhavenSource === 'hot' }" @click="config.wallhavenSource = 'hot'">
              热门 Hot
            </button>
            <button type="button" :class="{ active: config.wallhavenSource === 'toplist' }" @click="config.wallhavenSource = 'toplist'">
              排行榜 Toplist
            </button>
          </div>
          <button type="button" class="tool-btn grid-open" @click="openWallhavenGrid">
            <Search :size="16" />
            打开在线网格
          </button>
        </div>
        <div class="hint-row">
          <span>屏幕匹配</span>
          <strong>{{ screenLabel }}</strong>
        </div>
      </section>

      <section class="card rules-card">
        <div class="rules-line">
          <span class="row-label">切换规则</span>
          <label class="switch-label">
            启用定时切换
            <input v-model="config.scheduleEnabled" type="checkbox" />
            <span class="switch-control"></span>
          </label>
          <label class="number-label">
            每
            <input v-model.number="config.intervalMinutes" type="number" min="1" max="1440" />
            分钟
          </label>
          <span class="sub-label">顺序</span>
          <div class="segmented mini">
            <button type="button" :class="{ active: config.order === 'random' }" @click="config.order = 'random'">
              随机
            </button>
            <button type="button" :class="{ active: config.order === 'sequential' }" @click="config.order = 'sequential'">
              顺序
            </button>
          </div>
        </div>
        <div class="rules-line">
          <span class="row-label compact">适配模式</span>
          <div class="segmented fit">
            <button type="button" :class="{ active: config.fitMode === 'fillCrop' }" :disabled="fitting" @click="setFitMode('fillCrop')">
              填充裁切
            </button>
            <button type="button" :class="{ active: config.fitMode === 'fit' }" :disabled="fitting" @click="setFitMode('fit')">
              适应
            </button>
            <button type="button" :class="{ active: config.fitMode === 'center' }" :disabled="fitting" @click="setFitMode('center')">
              居中
            </button>
          </div>
          <label class="checkbox-label">
            <input v-model="config.autoRestore" type="checkbox" />
            启动后自动恢复定时任务
          </label>
        </div>
      </section>

      <footer class="footer-card">
        <div class="cache-info">
          <strong>缓存</strong>
          <span>Wallhaven 缓存</span>
          <span>{{ cacheSizeLabel }}</span>
        </div>
        <div class="footer-actions">
          <button type="button" class="secondary-btn" :disabled="clearingCache" @click="clearCache">
            <Delete :size="16" />
            {{ clearingCache ? '清理中' : '清理缓存' }}
          </button>
          <button type="button" class="secondary-btn" :disabled="openingCache" @click="openCacheDir">
            <FolderOpen :size="16" />
            {{ openingCache ? '打开中' : '打开缓存' }}
          </button>
          <button type="button" class="primary-btn" :disabled="saving" @click="persistConfig">
            <Save :size="17" />
            {{ saving ? '保存中' : '保存设置' }}
          </button>
        </div>
      </footer>
    </div>

    <div v-else class="wallhaven-view">
      <section class="filters filters--preview-style">
        <div class="search-box wallhaven-search">
          <input v-model="wallhavenKeyword" type="text" placeholder="搜索关键词" @keydown.enter="refreshWallhaven" />
          <Search :size="16" class="search-icon" />
          <button v-if="wallhavenKeyword" type="button" class="clear-btn" title="清空" @click="wallhavenKeyword = ''">
            <CloseSmall :size="18" />
          </button>
        </div>

        <div class="wallhaven-tabs" role="tablist" aria-label="壁纸分类切换">
          <button type="button" :class="{ active: wallhavenCategory === 'general' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('general')">
            通用
          </button>
          <button type="button" :class="{ active: wallhavenCategory === 'anime' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('anime')">
            动漫
          </button>
          <button type="button" :class="{ active: wallhavenCategory === 'people' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('people')">
            人物
          </button>
          <button type="button" :class="{ active: wallhavenCategory === 'nature' }" :disabled="wallhavenLoading" @click="setWallhavenCategory('nature')">
            自然
          </button>
        </div>

        <div class="wallhaven-meta">
          <span>自动匹配 {{ screenLabel }}</span>
          <button type="button" class="refresh-btn wallhaven-refresh" title="刷新" @click="refreshWallhaven">
            <Refresh :size="14" :class="{ spinning: wallhavenLoading }" />
          </button>
        </div>
      </section>

      <section class="grid-wrap">
        <div v-if="wallhavenLoading && visibleWallpapers.length === 0" class="empty-state">正在加载 Wallhaven 壁纸...</div>
        <div v-else-if="wallhavenError" class="empty-state error-state">
          <span>{{ wallhavenError }}</span>
          <button type="button" @click="refreshWallhaven">重试</button>
        </div>
        <div v-else-if="visibleWallpapers.length === 0" class="empty-state">暂无可用壁纸</div>
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
              <button type="button" title="预览" @click="openPreview(wallpaper)">
                <PreviewOpen :size="16" />
                预览
              </button>
              <button type="button" title="设为壁纸" :disabled="workingIds.has(wallpaper.id)" @click="setWallpaperFromWallhaven(wallpaper)">
                <Computer :size="16" />
                {{ workingIds.has(wallpaper.id) ? '设置中' : '设为' }}
              </button>
              <button type="button" title="下载" :disabled="workingIds.has(wallpaper.id)" @click="downloadWallpaperFromWallhaven(wallpaper)">
                <Download :size="16" />
                下载
              </button>
            </div>
          </article>
        </div>
      </section>

      <footer class="pager">
        <span>第 {{ wallhavenPage }} 页</span>
        <span class="source-note">来源：{{ wallhavenSourceLabel }} · SFW</span>
        <div class="pager-actions">
          <button type="button" :disabled="wallhavenPage <= 1 || wallhavenLoading" @click="prevWallhavenPage">上一页</button>
          <button type="button" :disabled="wallhavenPage >= wallhavenLastPage || wallhavenLoading" @click="nextWallhavenPage">下一页</button>
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
            <span>加载预览...</span>
          </div>
          <div v-if="previewLoadFailed" class="preview-error">预览加载失败</div>
          <img
            :class="{ ready: !previewLoading && !previewLoadFailed }"
            :src="previewWallpaper.path"
            alt="壁纸预览"
            @load="markPreviewLoaded"
            @error="markPreviewFailed"
          />
        </div>
        <footer>
          <button type="button" class="secondary-btn" :disabled="workingIds.has(previewWallpaper.id)" @click="downloadWallpaperFromWallhaven(previewWallpaper)">
            下载缓存
          </button>
          <button type="button" class="primary-btn" :disabled="workingIds.has(previewWallpaper.id)" @click="setWallpaperFromWallhaven(previewWallpaper)">
            {{ workingIds.has(previewWallpaper.id) ? '设置中' : '设为壁纸' }}
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
  color-scheme: light dark;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: var(--wallpaper-text);
  font-size: 12px;
  background: var(--wallpaper-bg);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: 0 14px 0 20px;
  background: var(--wallpaper-bg);
  border-bottom: 1px solid var(--wallpaper-border);
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
  display: flex;
  align-items: center;
}

.title {
  gap: 10px;
  color: var(--wallpaper-text);
  font-size: 14px;
  font-weight: 700;

  svg {
    color: var(--wallpaper-primary);
  }
}

.window-actions {
  gap: 10px;
}

.icon-btn,
.flat-icon,
.tool-btn,
.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.14s ease, border-color 0.14s ease, color 0.14s ease;
}

.icon-btn {
  width: 28px;
  height: 28px;
  padding: 0;
  color: var(--wallpaper-text);
  background: transparent;
  line-height: 1;

  svg {
    display: block;
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
  width: 34px;
  height: 34px;
  color: var(--wallpaper-text);
  background: transparent;
  border: 0;

  &:hover {
    background: var(--wallpaper-hover);
  }
}

.content {
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 10px;
  height: calc(100vh - 40px);
  min-height: 0;
  padding: 12px 16px 12px;
  align-content: start;
  overflow: auto;
}

.dimmed {
  opacity: 0.72;
}

.unsupported {
  margin: 12px 18px 0;
  padding: 10px 12px;
  color: #b45309;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 6px;
}

.top-panel {
  position: relative;
  display: flex;
  justify-content: flex-end;
  min-height: 164px;
  overflow: hidden;
  background: #111827;
  border: 1px solid var(--wallpaper-border);
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 18%);

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background:
      linear-gradient(90deg, rgb(10 16 28 / 10%) 0%, rgb(10 16 28 / 38%) 48%, rgb(10 16 28 / 82%) 100%),
      linear-gradient(180deg, rgb(10 16 28 / 4%) 0%, rgb(10 16 28 / 26%) 100%);
    pointer-events: none;
  }
}

.preview {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #111827;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.preview-empty {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgb(255 255 255 / 74%);
}

.card,
.footer-card {
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
}

.status-panel {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(44%, 420px);
  min-width: 350px;
  min-height: 100%;
  padding: 18px 20px;
  color: #fff;
  background: linear-gradient(90deg, rgb(15 23 42 / 30%), rgb(15 23 42 / 54%));
  border-left: 1px solid rgb(255 255 255 / 16%);
  box-shadow: -22px 0 44px rgb(15 23 42 / 24%);
  backdrop-filter: blur(8px);

  h2 {
    margin: 0 0 5px;
    font-size: 15px;
    font-weight: 700;
  }
}

.status-row {
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  gap: 8px;
  margin-bottom: 3px;

  span {
    color: rgb(255 255 255 / 68%);
  }

  strong {
    color: #fff;
    font-weight: 700;
  }
}

.status-actions {
  gap: 10px;
  margin-top: 9px;

  .primary-btn,
  .secondary-btn {
    height: 32px;
    line-height: 32px;
  }

  .primary-btn {
    background: rgb(95 116 243 / 94%);
    border-color: rgb(255 255 255 / 16%);
    box-shadow: 0 8px 18px rgb(0 0 0 / 20%);
  }

  .secondary-btn {
    color: #fff;
    background: rgb(255 255 255 / 12%);
    border-color: rgb(255 255 255 / 16%);

    &:hover {
      background: rgb(255 255 255 / 18%);
    }
  }
}

.primary-btn,
.secondary-btn,
.tool-btn {
  justify-content: center;
  gap: 6px;
  height: 28px;
  line-height: 28px;
  padding: 0 13px;
  white-space: nowrap;
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
  cursor: not-allowed;
  opacity: 0.65;
}

.settings-card {
  min-height: 0;
  padding: 12px 12px 10px;
  overflow: hidden;
}

.form-row {
  display: grid;
  gap: 10px;
  align-items: center;
  min-height: 36px;
}

.mode-row {
  grid-template-columns: 96px minmax(0, 1fr);
}

.fixed-row {
  grid-template-columns: 96px minmax(0, 1fr) 128px;
}

.folder-row {
  grid-template-columns: 96px minmax(0, 1fr) 94px 94px;
}

.wallhaven-row {
  grid-template-columns: 96px 74px minmax(0, 1fr) 210px;
  gap: 10px;
  align-items: center;
  min-height: 44px;
  padding-top: 10px;
  margin-top: 8px;
  border-top: 1px solid var(--wallpaper-border);
}

.row-label,
.sub-label {
  font-weight: 600;
}

.row-label {
  color: var(--wallpaper-text);
}

.sub-label,
.hint-row {
  color: var(--wallpaper-muted);
}

.path-input {
  width: 100%;
  height: 30px;
  min-width: 0;
  padding: 0 11px;
  color: var(--wallpaper-text);
  background: var(--wallpaper-input);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  outline: none;

  &::placeholder {
    color: var(--wallpaper-muted);
    opacity: 1;
  }

  &:focus {
    border-color: var(--wallpaper-primary);
  }
}

.hint-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 0;
  font-size: 11px;
  min-height: 16px;
}

.segmented {
  display: grid;
  overflow: hidden;
  border: 1px solid var(--wallpaper-border);
  border-radius: 4px;

  button {
    height: 26px;
    line-height: 26px;
    padding: 0 12px;
    color: var(--wallpaper-text);
    background: transparent;
    border: 0;
    border-right: 1px solid var(--wallpaper-border);
    cursor: pointer;

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
  grid-template-columns: repeat(3, 1fr);
}

.fit {
  grid-template-columns: repeat(3, 1fr);
}

.source {
  grid-template-columns: repeat(2, 1fr);
}

.mini {
  grid-template-columns: repeat(2, 1fr);
  width: 224px;
}

.grid-open {
  width: 100%;
  min-width: 154px;
  grid-column: 4;
}

.rules-card {
  min-height: 0;
  padding: 10px 12px 10px;
  overflow: hidden;

  h2 {
    margin: 0 0 8px;
    font-size: 12px;
    font-weight: 700;
  }
}

.rules-line {
  gap: 12px;
  min-height: 36px;
}

.switch-label,
.checkbox-label {
  gap: 9px;
  white-space: nowrap;
}

.switch-label input,
.checkbox-label input {
  accent-color: var(--wallpaper-primary);
}

.switch-label input {
  display: none;
}

.switch-control {
  position: relative;
  width: 44px;
  height: 22px;
  background: var(--wallpaper-active);
  border: 1px solid var(--wallpaper-border);
  border-radius: 999px;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
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
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 78px;
    height: 30px;
    padding: 0 10px;
    color: var(--wallpaper-text);
    background: var(--wallpaper-input);
    border: 1px solid var(--wallpaper-border);
    border-radius: 6px;
  }
}

.compact {
  width: 96px;
}

.footer-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  min-height: 0;
  padding: 8px 12px;
  overflow: hidden;
}

.cache-info {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 12px 18px;
  min-width: 0;
  font-size: 14px;
}

.footer-actions {
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
}

.footer-actions .secondary-btn {
  min-width: 108px;
}

.footer-actions .primary-btn {
  min-width: 112px;
}

.source-toggle {
  display: flex;
  align-items: center;
  gap: 18px;
  height: 30px;
  min-width: auto;
  padding: 0 2px;
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.seg-tab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 30px;
  padding: 0 2px;
  color: var(--wallpaper-muted);
  background: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  line-height: 1;

  &.active {
    color: var(--wallpaper-primary);
    font-weight: 800;
    background: transparent;
    box-shadow: none;
  }

  &.active::after {
    position: absolute;
    right: 1px;
    bottom: 1px;
    left: 1px;
    height: 2px;
    content: '';
    background: var(--wallpaper-primary);
    border-radius: 999px;
  }

  &.disabled {
    cursor: wait;
    opacity: 0.72;
  }
}

.wallhaven-view {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  height: calc(100vh - 40px);
  min-height: 0;
  overflow: hidden;
  background: var(--wallpaper-bg);
}

.filters {
  padding: 10px 12px 8px;
  overflow: hidden;
}

.filter-row {
  display: grid;
  align-items: center;
  min-width: 0;
  gap: 10px;
}

.filter-main {
  grid-template-columns: 170px minmax(0, 1fr) 34px;
  min-height: 54px;
  padding: 8px 10px;
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 10px;
}

.compact-search {
  width: 170px;
  height: 34px;
}

.compact-search input {
  color: var(--wallpaper-text);
}

.compact-chips {
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
}

.chip-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 8px;
  color: var(--wallpaper-text);
  background: transparent;
  border-right: 1px solid var(--wallpaper-border);
  cursor: pointer;
  user-select: none;
  font-size: 13px;
  line-height: 1;

  &:last-child {
    border-right: 0;
  }

  &.active {
    color: var(--wallpaper-primary);
    background: var(--wallpaper-active);
  }

  &.disabled {
    cursor: wait;
    opacity: 0.72;
  }
}

.refresh-btn {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: var(--wallpaper-text);
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgb(15 23 42 / 4%);

  &:hover {
    background: var(--wallpaper-hover);
  }
}

.filters--preview-style {
  display: grid;
  grid-template-columns: minmax(195px,1fr) minmax(222px,1.1fr) minmax(202px, auto);
  align-items: center;
  gap: 12px;
  padding: 10px 14px 8px;
  overflow: hidden;
}

.wallhaven-search {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  height: 32px;
  gap: 10px;
  padding: 0 10px 0 16px;
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  box-shadow: none;
}

.wallhaven-search .search-icon {
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  color: var(--wallpaper-muted);
}

.wallhaven-search input {
  flex: 1;
  align-self: center;
  min-width: 0;
  height: 100%;
  padding: 0;
  color: var(--wallpaper-text);
  font-weight: 600;
  line-height: 40px;
  background: transparent;
  border: 0;
  outline: 0;
}

.wallhaven-search input::placeholder {
  color: var(--wallpaper-muted);
  font-weight: 500;
}

.clear-btn {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: var(--wallpaper-muted);
  background: var(--wallpaper-soft);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.16s ease, background 0.16s ease;

  &:hover {
    color: var(--wallpaper-primary);
    background: var(--wallpaper-hover);
  }
}

.clear-btn :deep(svg) {
  width: 12px;
  height: 12px;
}

.wallhaven-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
  min-width: 0;
  height: 32px;
  padding: 0;
  overflow: hidden;
  background: var(--wallpaper-soft);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  box-shadow: none;
}

.wallhaven-tabs button {
  position: relative;
  min-width: 0;
  height: 32px;
  color: var(--wallpaper-text);
  font-weight: 500;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--wallpaper-hover);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.7;
  }
}

.wallhaven-tabs button.active {
  color: var(--wallpaper-primary);
  font-weight: 800;
}

.wallhaven-tabs button.active::after {
  position: absolute;
  right: 16px;
  bottom: 5px;
  left: 16px;
  height: 2px;
  content: '';
  background: var(--wallpaper-primary);
  border-radius: 999px;
}

.wallhaven-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  min-width: 0;
  height: 32px;
  line-height: 32px;
  color: var(--wallpaper-muted);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.wallhaven-refresh {
  width: 30px;
  height: 30px;
  color: var(--wallpaper-text);
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  box-shadow: none;
}

.spinning {
  animation: spin 0.8s linear infinite;
}

.grid-wrap {
  min-height: 0;
  padding: 12px;
  overflow: hidden;
}

.wallpaper-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  align-content: start;
}

.wallpaper-card {
  overflow: hidden;
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  cursor: pointer;
}

.thumb {
  position: relative;
  display: block;
  width: 100%;
  height: 152px;
  aspect-ratio: 1.2;
  overflow: hidden;
  background: var(--wallpaper-soft);
  border: 0;

  img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.16s ease;
  }

  img[src] {
    opacity: 1;
  }

  span {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 2;
    padding: 3px 7px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    background: rgb(0 0 0 / 62%);
    border-radius: 4px;
  }
}

.thumb-skeleton {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent, rgb(255 255 255 / 54%), transparent),
    #edf3fb;
  background-size: 180% 100%;
  animation: shimmer 1.1s linear infinite;
}

.card-actions {
  height: 36px;
  background: var(--wallpaper-card-actions-bg);
  border-top: 1px solid var(--wallpaper-card-actions-border);

  button {
    display: flex;
    flex: 1;
    gap: 5px;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--wallpaper-card-actions-text);
    background: transparent;
    border: 0;
    border-right: 1px solid var(--wallpaper-card-actions-border);
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }

    &:hover:not(:disabled) {
      color: var(--wallpaper-card-actions-text);
      background: var(--wallpaper-card-actions-hover);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  text-align: center;
  color: var(--wallpaper-muted);
}

.error-state {
  color: #b45309;

  button {
    height: 32px;
    padding: 0 18px;
    color: var(--wallpaper-text);
    background: var(--wallpaper-panel);
    border: 1px solid var(--wallpaper-border);
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      color: var(--wallpaper-primary);
      background: var(--wallpaper-hover);
    }
  }
}

.pager {
  justify-content: space-between;
  height: 58px;
  padding: 0 20px;
}

.source-note {
  color: var(--wallpaper-muted);
}

.pager-actions {
  gap: 12px;

  button {
    width: 88px;
    height: 34px;
    color: var(--wallpaper-text);
    background: var(--wallpaper-panel);
    border: 1px solid var(--wallpaper-border);
    border-radius: 6px;
    cursor: pointer;

    &:hover:not(:disabled) {
      color: var(--wallpaper-primary);
      background: var(--wallpaper-hover);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }
  }
}

.preview-modal {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(15 23 42 / 34%);
}

.preview-dialog {
  width: min(720px, calc(100vw - 56px));
  overflow: hidden;
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  box-shadow: 0 18px 42px rgb(15 23 42 / 18%);

  header,
  footer {
    justify-content: space-between;
    height: 48px;
    padding: 0 12px 0 16px;
  }
}

.preview-image-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  min-height: 360px;
  max-height: min(430px, calc(100vh - 160px));
  overflow: hidden;
  background: #111827;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    transition: opacity 0.18s ease;
  }

  img.ready {
    opacity: 1;
  }
}

.preview-skeleton,
.preview-error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
    padding: 6px 10px;
    background: rgb(15 23 42 / 62%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 6px;
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
