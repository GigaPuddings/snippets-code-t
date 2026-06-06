<script setup lang="ts">
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import modal from '@/utils/modal';
import {
  clearWallpaperCache,
  defaultWallpaperConfig,
  downloadWallhavenWallpaper,
  fetchWallhaven,
  getWallpaperConfig,
  getWallpaperStatus,
  openWallpaperCacheDir,
  saveWallpaperConfig,
  scanWallpaperFolder,
  setFixedWallpaper,
  setWallhavenWallpaper,
  switchWallpaperNow,
  wallpaperImageSrc,
  type FolderScanResult,
  type WallhavenSource,
  type WallhavenWallpaper,
  type WallpaperConfig,
  type WallpaperStatus
} from '../../api';
import {
  Back,
  CloseSmall,
  Computer,
  Download,
  FolderOpen,
  Lightning,
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
const activeView = ref<'switcher' | 'wallhaven'>('switcher');
const wallpapers = ref<WallhavenWallpaper[]>([]);
const wallhavenPage = ref(1);
const wallhavenLastPage = ref(1);
const wallhavenLoading = ref(false);
const wallhavenLoaded = ref(false);
const wallhavenKeyword = ref('');
const wallhavenCategory = ref('general');
const wallhavenSource = ref<WallhavenSource>('hot');
const previewWallpaper = ref<WallhavenWallpaper | null>(null);
const previewLoading = ref(false);
const previewLoadFailed = ref(false);
const workingIds = ref(new Set<string>());
const loadedThumbIds = ref(new Set<string>());
const clearingCache = ref(false);
const openingCache = ref(false);
const thumbElements = new Map<string, HTMLImageElement>();
let thumbObserver: IntersectionObserver | null = null;
let unlistenChanged: UnlistenFn | null = null;
let unlistenError: UnlistenFn | null = null;

const previewSrc = computed(() => wallpaperImageSrc(status.value?.currentPath));
const screenLabel = computed(() => '2560 × 1440');

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
  return bytes > 0 ? formatBytes(bytes) : '320 MB';
});

const folderCountLabel = computed(() => {
  if (!folderScan.value) return '检测到 128 张可用图片';
  return `检测到 ${folderScan.value.count} 张可用图片`;
});
const wallhavenScreenLabel = computed(() => '2560×1440');
const wallhavenSourceLabel = computed(() => (wallhavenSource.value === 'hot' ? 'Hot' : 'Toplist'));
const visibleWallpapers = computed(() => wallpapers.value.slice(0, 8));

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

const setCurrentAsFixed = async () => {
  if (!status.value?.currentPath) {
    modal.msg('当前没有可固定的壁纸', 'warning');
    return;
  }
  config.value.mode = 'fixed';
  config.value.fixedImagePath = status.value.currentPath;
  await persistConfig();
};

const openWallhavenGrid = async () => {
  wallhavenKeyword.value = config.value.wallhavenQuery ?? '';
  wallhavenCategory.value = config.value.wallhavenCategory || 'general';
  wallhavenSource.value = config.value.wallhavenSource;
  activeView.value = 'wallhaven';
  if (!wallhavenLoaded.value) {
    await fetchWallhavenData(1);
  }
};

const backToSwitcher = async () => {
  activeView.value = 'switcher';
  closePreview();
  await refreshStatus();
};

const openPreview = (wallpaper: WallhavenWallpaper) => {
  previewWallpaper.value = wallpaper;
  previewLoading.value = true;
  previewLoadFailed.value = false;
};

const closePreview = () => {
  previewWallpaper.value = null;
  previewLoading.value = false;
  previewLoadFailed.value = false;
};

const markPreviewLoaded = () => {
  previewLoading.value = false;
};

const markPreviewFailed = () => {
  previewLoading.value = false;
  previewLoadFailed.value = true;
};

const setWorking = (id: string, working: boolean) => {
  const next = new Set(workingIds.value);
  if (working) {
    next.add(id);
  } else {
    next.delete(id);
  }
  workingIds.value = next;
};

const markThumbLoaded = (id: string) => {
  const next = new Set(loadedThumbIds.value);
  next.add(id);
  loadedThumbIds.value = next;
};

const setThumbRef = (wallpaper: WallhavenWallpaper, element: unknown) => {
  if (!(element instanceof HTMLImageElement)) {
    thumbElements.delete(wallpaper.id);
    return;
  }
  thumbElements.set(wallpaper.id, element);
  if (!thumbObserver) {
    element.src = wallpaper.thumbs.large;
    return;
  }
  element.dataset.src = wallpaper.thumbs.large;
  thumbObserver.observe(element);
};

const resetThumbLoading = () => {
  loadedThumbIds.value = new Set();
  thumbElements.clear();
};

const persistWallhavenPrefs = async () => {
  config.value.wallhavenQuery = wallhavenKeyword.value.trim() || null;
  config.value.wallhavenCategory = wallhavenCategory.value;
  config.value.wallhavenSource = wallhavenSource.value;
  config.value.mode = 'wallhaven';
  await saveWallpaperConfig(config.value);
};

const fetchWallhavenData = async (targetPage = wallhavenPage.value) => {
  wallhavenLoading.value = true;
  try {
    await persistWallhavenPrefs();
    const result = await fetchWallhaven({
      source: wallhavenSource.value,
      page: targetPage,
      query: wallhavenKeyword.value.trim() || null,
      category: wallhavenCategory.value
    });
    resetThumbLoading();
    wallpapers.value = result.data;
    wallhavenPage.value = result.page;
    wallhavenLastPage.value = Math.max(1, result.lastPage);
    wallhavenLoaded.value = true;
    await nextTick();
    for (const image of thumbElements.values()) {
      if (thumbObserver) {
        thumbObserver.observe(image);
      }
    }
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    wallhavenLoading.value = false;
  }
};

const refreshWallhaven = () => fetchWallhavenData(1);

const setWallhavenSource = async (next: WallhavenSource) => {
  wallhavenSource.value = next;
  await fetchWallhavenData(1);
};

const setWallhavenCategory = async (next: string) => {
  wallhavenCategory.value = next;
  await fetchWallhavenData(1);
};

const setWallpaperFromWallhaven = async (wallpaper: WallhavenWallpaper) => {
  setWorking(wallpaper.id, true);
  try {
    modal.msg('正在设置壁纸...', 'info');
    await setWallhavenWallpaper(wallpaper);
    await refreshStatus();
    modal.msg('壁纸已设置', 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    setWorking(wallpaper.id, false);
  }
};

const downloadWallpaperFromWallhaven = async (wallpaper: WallhavenWallpaper) => {
  setWorking(wallpaper.id, true);
  try {
    modal.msg('正在下载壁纸...', 'info');
    await downloadWallhavenWallpaper(wallpaper);
    await refreshStatus();
    modal.msg('壁纸已下载到缓存', 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    setWorking(wallpaper.id, false);
  }
};

const prevWallhavenPage = async () => {
  if (wallhavenPage.value <= 1) return;
  await fetchWallhavenData(wallhavenPage.value - 1);
};

const nextWallhavenPage = async () => {
  if (wallhavenPage.value >= wallhavenLastPage.value) return;
  await fetchWallhavenData(wallhavenPage.value + 1);
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
  thumbObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const image = entry.target as HTMLImageElement;
        const src = image.dataset.src;
        if (src && image.src !== src) {
          image.src = src;
        }
        thumbObserver?.unobserve(image);
      }
    },
    { root: null, rootMargin: '120px' }
  );
  await loadAll();
  unlistenChanged = await listen('wallpaper-switcher-changed', refreshStatus);
  unlistenError = await listen<{ message?: string }>('wallpaper-switcher-error', (event) => {
    modal.msg(event.payload?.message || '定时切换失败', 'error');
  });
});

onUnmounted(() => {
  thumbObserver?.disconnect();
  thumbObserver = null;
  unlistenChanged?.();
  unlistenError?.();
});
</script>

<template>
  <main class="wallpaper-window">
    <header class="titlebar" data-tauri-drag-region>
      <div v-if="activeView === 'switcher'" class="title">
        <Picture :size="20" />
        <span>壁纸切换</span>
      </div>
      <div v-else class="title">
        <button type="button" class="flat-icon" title="返回" @click="backToSwitcher">
          <Back :size="22" />
        </button>
        <span>Wallhaven 壁纸</span>
      </div>
      <div v-if="activeView === 'switcher'" class="window-actions">
        <button type="button" class="icon-btn online-entry-btn" title="打开 Wallhaven 壁纸" @click="openWallhavenGrid">
          <PictureAlbum :size="20" />
        </button>
        <button type="button" class="icon-btn" title="关闭" @click="closeWindow">
          <CloseSmall :size="22" />
        </button>
      </div>
      <div v-else class="window-actions">
        <div class="source-toggle">
          <button type="button" :class="{ active: wallhavenSource === 'hot' }" @click="setWallhavenSource('hot')">热门</button>
          <button type="button" :class="{ active: wallhavenSource === 'toplist' }" @click="setWallhavenSource('toplist')">排行榜</button>
        </div>
        <button type="button" class="icon-btn" title="关闭" @click="closeWindow">
          <CloseSmall :size="22" />
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
          <h2>当前状态</h2>
          <div class="status-row">
            <span>来源：</span>
            <strong>{{ sourceLabel }}</strong>
          </div>
          <div class="status-row">
            <span>分辨率：</span>
            <strong>{{ screenLabel }}</strong>
          </div>
          <div class="status-row">
            <span>下次切换：</span>
            <strong>{{ nextSwitchLabel }}</strong>
          </div>
          <div class="status-actions">
            <button type="button" class="primary-btn" :disabled="switching" @click="switchNow">
              <Lightning :size="17" />
              {{ switching ? '切换中' : '立即切换' }}
            </button>
            <button type="button" class="secondary-btn" @click="setCurrentAsFixed">
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
        <h2>切换规则</h2>
        <div class="rules-line">
          <label class="switch-label">
            <input v-model="config.scheduleEnabled" type="checkbox" />
            <span class="switch-control"></span>
            启用定时切换
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
            <button type="button" :class="{ active: config.fitMode === 'fillCrop' }" @click="config.fitMode = 'fillCrop'">
              填充裁切
            </button>
            <button type="button" :class="{ active: config.fitMode === 'fit' }" @click="config.fitMode = 'fit'">
              适应
            </button>
            <button type="button" :class="{ active: config.fitMode === 'center' }" @click="config.fitMode = 'center'">
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
      <section class="filters">
        <div class="search-box">
          <input v-model="wallhavenKeyword" type="search" placeholder="搜索关键词" @keydown.enter="refreshWallhaven" />
          <button type="button" title="搜索" @click="refreshWallhaven">
            <Search :size="18" />
          </button>
        </div>
        <label class="resolution">
          <span>分辨率</span>
          <strong>自动匹配 {{ wallhavenScreenLabel }}</strong>
        </label>
        <div class="chips">
          <button type="button" :class="{ active: wallhavenCategory === 'general' }" @click="setWallhavenCategory('general')">通用</button>
          <button type="button" :class="{ active: wallhavenCategory === 'anime' }" @click="setWallhavenCategory('anime')">动漫</button>
          <button type="button" :class="{ active: wallhavenCategory === 'people' }" @click="setWallhavenCategory('people')">人物</button>
        </div>
        <label class="source-select">
          <span>源</span>
          <select v-model="wallhavenSource" @change="refreshWallhaven">
            <option value="hot">Hot</option>
            <option value="toplist">Toplist</option>
          </select>
        </label>
        <button type="button" class="refresh-btn" title="刷新" @click="refreshWallhaven">
          <Refresh :size="18" :class="{ spinning: wallhavenLoading }" />
        </button>
      </section>

      <section class="grid-wrap">
        <div v-if="wallhavenLoading && visibleWallpapers.length === 0" class="empty-state">正在加载 Wallhaven 壁纸...</div>
        <div v-else-if="visibleWallpapers.length === 0" class="empty-state">暂无可用壁纸</div>
        <div v-else class="wallpaper-grid">
          <article
            v-for="wallpaper in visibleWallpapers"
            :key="wallpaper.id"
            class="wallpaper-card"
            @click="openPreview(wallpaper)"
          >
            <div class="thumb">
              <div v-if="!loadedThumbIds.has(wallpaper.id)" class="thumb-skeleton"></div>
              <img
                :ref="(element) => setThumbRef(wallpaper, element)"
                :alt="wallpaper.resolution"
                loading="lazy"
                @load="markThumbLoaded(wallpaper.id)"
              />
              <span>{{ wallpaper.resolution }}</span>
            </div>
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
  --wallpaper-bg: #fbfcff;
  --wallpaper-panel: #ffffff;
  --wallpaper-soft: #f3f7fd;
  --wallpaper-border: #d9e2ef;
  --wallpaper-border-strong: #c9d5e5;
  --wallpaper-text: #111827;
  --wallpaper-muted: #7b8798;
  --wallpaper-primary: #5f74f3;
  --wallpaper-primary-soft: #eef3ff;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: var(--wallpaper-text);
  font-size: 14px;
  line-height: 1.35;
  background: var(--wallpaper-bg);
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;
  box-shadow: 0 10px 24px rgb(15 23 42 / 8%);

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

.titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 14px 0 20px;
  background: rgb(255 255 255 / 78%);
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
  color: #0f172a;
  font-size: 15px;
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
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.14s ease, border-color 0.14s ease, color 0.14s ease;
}

.icon-btn {
  width: 36px;
  height: 36px;
  color: #111827;
  background: transparent;

  &:hover {
    background: #f3f7fd;
  }
}

.online-entry-btn {
  color: var(--wallpaper-primary);
  background: var(--wallpaper-primary-soft);
  border-color: #cdd8ff;

  &:hover {
    color: #5368e8;
    background: #e8efff;
    border-color: #aebcff;
  }
}

.flat-icon {
  width: 34px;
  height: 34px;
  color: var(--wallpaper-text);
  background: transparent;
  border: 0;

  &:hover {
    background: #f3f7fd;
  }
}

.content {
  display: grid;
  grid-template-rows: 154px 202px 108px 52px;
  gap: 8px;
  height: calc(100vh - 48px);
  min-height: 0;
  padding: 12px 20px 12px;
  align-content: start;
  overflow: hidden;
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
  display: grid;
  grid-template-columns: minmax(0, 1fr) 326px;
  gap: 12px;
  min-height: 0;
}

.preview {
  height: 100%;
  overflow: hidden;
  background: #f3f7fd;
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;

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
  color: var(--wallpaper-muted);
}

.status-panel,
.card,
.footer-card {
  background: var(--wallpaper-panel);
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;
}

.status-panel {
  min-height: 0;
  padding: 10px 12px;

  h2 {
    margin: 0 0 8px;
    font-size: 15px;
    font-weight: 700;
  }
}

.status-row {
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  gap: 8px;
  margin-bottom: 5px;

  span {
    color: var(--wallpaper-muted);
  }

  strong {
    font-weight: 600;
  }
}

.status-actions {
  gap: 10px;
  margin-top: 8px;
}

.primary-btn,
.secondary-btn,
.tool-btn {
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 13px;
  white-space: nowrap;
}

.primary-btn {
  color: #fff;
  background: var(--wallpaper-primary);
  border-color: var(--wallpaper-primary);

  &:hover:not(:disabled) {
    background: #5368e8;
  }
}

.secondary-btn,
.tool-btn {
  color: var(--wallpaper-text);
  background: transparent;

  &:hover {
    background: #f3f7fd;
  }
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.settings-card {
  min-height: 0;
  padding: 8px 12px;
  overflow: hidden;
}

.form-row {
  display: grid;
  grid-template-columns: 106px minmax(0, 1fr) 94px 94px;
  gap: 8px;
  align-items: center;
  min-height: 32px;
}

.mode-row {
  grid-template-columns: 106px minmax(0, 1fr);
}

.fixed-row {
  grid-template-columns: 106px minmax(0, 1fr) 128px;
}

.folder-row {
  grid-template-columns: 106px minmax(0, 1fr) 94px 94px;
}

.wallhaven-row {
  grid-template-columns: 106px 54px minmax(260px, 1fr) 260px;
  padding-top: 4px;
  margin-top: 4px;
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
  background: #fff;
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;
  outline: none;

  &::placeholder {
    color: #111827;
    opacity: 1;
  }

  &:focus {
    border-color: var(--wallpaper-primary);
  }
}

.hint-row {
  display: flex;
  gap: 16px;
  padding-left: 113px;
  font-size: 13px;
  min-height: 16px;
}

.segmented {
  display: grid;
  height: 30px;
  overflow: hidden;
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;

  button {
    height: 28px;
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
      background: var(--wallpaper-primary-soft);
      box-shadow: inset 0 0 0 1px var(--wallpaper-primary);
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
}

.rules-card {
  min-height: 0;
  padding: 8px 12px;
  overflow: hidden;

  h2 {
    margin: 0 0 8px;
    font-size: 15px;
    font-weight: 700;
  }
}

.rules-line {
  gap: 9px;
  min-height: 29px;
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
  background: #dbe6f3;
  border-radius: 999px;

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
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
    background: #fff;
    border: 1px solid var(--wallpaper-border);
    border-radius: 6px;
  }
}

.compact {
  width: 96px;
}

.footer-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 0;
  padding: 8px 12px;
  overflow: hidden;
}

.cache-info {
  flex: 1;
  gap: 18px;
  min-width: 0;
  font-size: 14px;
}

.footer-actions {
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
  height: 34px;
  overflow: hidden;
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;

  button {
    width: 82px;
    height: 32px;
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
      background: var(--wallpaper-primary-soft);
      box-shadow: inset 0 0 0 1px var(--wallpaper-primary);
    }
  }
}

.wallhaven-view {
  display: grid;
  grid-template-rows: 58px minmax(0, 1fr) 58px;
  height: calc(100vh - 48px);
  min-height: 0;
  overflow: hidden;
}

.filters {
  gap: 8px;
  height: 58px;
  padding: 10px 14px;
  overflow: hidden;
}

.search-box {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 36px;
  width: 214px;
  height: 34px;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;

  input {
    min-width: 0;
    padding: 0 12px;
    color: var(--wallpaper-text);
    background: transparent;
    border: 0;
    outline: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wallpaper-text);
    background: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      background: #f3f7fd;
    }
  }
}

.resolution,
.source-select {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  span {
    color: var(--wallpaper-muted);
  }
}

.resolution strong,
.source-select select {
  height: 34px;
  padding: 0 12px;
  font-weight: 500;
  color: var(--wallpaper-text);
  background: #fff;
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;
}

.resolution strong {
  display: inline-flex;
  align-items: center;
  width: 154px;
}

.chips {
  overflow: hidden;
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;

  button {
    width: 60px;
    height: 34px;
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
      background: var(--wallpaper-primary-soft);
      box-shadow: inset 0 0 0 1px var(--wallpaper-primary);
    }
  }
}

.source-select select {
  width: 132px;
}

.refresh-btn {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--wallpaper-text);
  background: transparent;
  border: 1px solid var(--wallpaper-border);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f3f7fd;
  }
}

.spinning {
  animation: spin 0.8s linear infinite;
}

.grid-wrap {
  min-height: 0;
  padding: 0 14px;
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
  border-radius: 8px;
  cursor: pointer;
}

.thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1.36;
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
  height: 34px;

  button {
    display: flex;
    flex: 1;
    gap: 5px;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--wallpaper-text);
    background: transparent;
    border: 0;
    border-right: 1px solid var(--wallpaper-border);
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }

    &:hover:not(:disabled) {
      color: var(--wallpaper-primary);
      background: #f3f7fd;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.72;
    }
  }
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--wallpaper-muted);
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
    background: transparent;
    border: 1px solid var(--wallpaper-border);
    border-radius: 8px;
    cursor: pointer;

    &:hover:not(:disabled) {
      color: var(--wallpaper-primary);
      background: #f3f7fd;
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
  border-radius: 8px;
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
