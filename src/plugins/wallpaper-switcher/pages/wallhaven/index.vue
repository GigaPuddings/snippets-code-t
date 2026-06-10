<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import modal from '@/utils/modal';
import {
  downloadWallhavenWallpaper,
  fetchWallhaven,
  getWallpaperConfig,
  getWallpaperStatus,
  saveWallpaperConfig,
  setWallhavenWallpaper,
  type WallhavenSource,
  type WallhavenWallpaper,
  type WallpaperConfig,
  type WallpaperStatus,
  defaultWallpaperConfig
} from '../../api';
import {
  Back,
  CloseSmall,
  Computer,
  Download,
  PreviewOpen,
  Refresh,
  Search
} from '@icon-park/vue-next';

const appWindow = getCurrentWindow();

const config = ref<WallpaperConfig>(defaultWallpaperConfig());
const status = ref<WallpaperStatus | null>(null);
const wallpapers = ref<WallhavenWallpaper[]>([]);
const page = ref(1);
const lastPage = ref(1);
const loading = ref(false);
const keyword = ref('');
const category = ref('general');
const source = ref<WallhavenSource>('hot');
const previewWallpaper = ref<WallhavenWallpaper | null>(null);
const workingIds = ref(new Set<string>());

const screenLabel = computed(() => '2560×1440');

const sourceLabel = computed(() => (source.value === 'hot' ? 'Hot' : 'Toplist'));
const visibleWallpapers = computed(() => wallpapers.value.slice(0, 8));

const setWorking = (id: string, working: boolean) => {
  const next = new Set(workingIds.value);
  if (working) {
    next.add(id);
  } else {
    next.delete(id);
  }
  workingIds.value = next;
};

const loadBootstrap = async () => {
  const [nextConfig, nextStatus] = await Promise.all([
    getWallpaperConfig(),
    getWallpaperStatus()
  ]);
  config.value = nextConfig;
  status.value = nextStatus;
  keyword.value = nextConfig.wallhavenQuery ?? '';
  category.value = nextConfig.wallhavenCategory || 'general';
  source.value = nextConfig.wallhavenSource;
};

const persistWallhavenPrefs = async () => {
  config.value.wallhavenQuery = keyword.value.trim() || null;
  config.value.wallhavenCategory = category.value;
  config.value.wallhavenSource = source.value;
  config.value.mode = 'wallhaven';
  await saveWallpaperConfig(config.value);
};

const fetchData = async (targetPage = page.value) => {
  loading.value = true;
  try {
    await persistWallhavenPrefs();
    const result = await fetchWallhaven({
      source: source.value,
      page: targetPage,
      query: keyword.value.trim() || null,
      category: category.value
    });
    wallpapers.value = result.data;
    page.value = result.page;
    lastPage.value = Math.max(1, result.lastPage);
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    loading.value = false;
  }
};

const refresh = () => fetchData(1);

const setSource = async (next: WallhavenSource) => {
  source.value = next;
  await fetchData(1);
};

const setCategory = async (next: string) => {
  category.value = next;
  await fetchData(1);
};

const setWallpaper = async (wallpaper: WallhavenWallpaper) => {
  setWorking(wallpaper.id, true);
  try {
    await setWallhavenWallpaper(wallpaper);
    modal.msg('壁纸已设置', 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    setWorking(wallpaper.id, false);
  }
};

const downloadWallpaper = async (wallpaper: WallhavenWallpaper) => {
  setWorking(wallpaper.id, true);
  try {
    await downloadWallhavenWallpaper(wallpaper);
    modal.msg('壁纸已下载到缓存', 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
  } finally {
    setWorking(wallpaper.id, false);
  }
};

const prevPage = async () => {
  if (page.value <= 1) return;
  await fetchData(page.value - 1);
};

const nextPage = async () => {
  if (page.value >= lastPage.value) return;
  await fetchData(page.value + 1);
};

const closeWindow = async () => {
  await appWindow.close();
};

onMounted(async () => {
  try {
    await loadBootstrap();
    await fetchData(1);
  } catch (error) {
    modal.msg(String(error), 'error');
  }
});
</script>

<template>
  <main class="wallhaven-window">
    <header class="titlebar" data-tauri-drag-region>
      <div class="title">
        <button type="button" class="flat-icon" title="返回" @click="closeWindow">
          <Back :size="22" />
        </button>
        <span>Wallhaven 壁纸</span>
      </div>
      <div class="top-actions">
        <div class="source-toggle">
          <button type="button" :class="{ active: source === 'hot' }" @click="setSource('hot')">热门</button>
          <button type="button" :class="{ active: source === 'toplist' }" @click="setSource('toplist')">排行榜</button>
        </div>
        <button type="button" class="flat-icon" title="关闭" @click="closeWindow">
          <CloseSmall :size="23" />
        </button>
      </div>
    </header>

    <section class="filters-panel">
      <div class="filter-card filter-card--search">
        <div class="filter-label">搜索</div>
        <div class="search-box">
          <Search :size="18" class="search-icon" />
          <input v-model="keyword" type="search" placeholder="搜索关键词" @keydown.enter="refresh" />
          <button type="button" title="搜索" @click="refresh">搜索</button>
        </div>
      </div>

      <div class="filter-card filter-card--category">
        <div class="filter-header">
          <div>
            <div class="filter-label">分类标签</div>
            <div class="filter-hint">选择你想看的壁纸类型</div>
          </div>
        </div>
        <div class="chips chips--tabs">
          <button type="button" :class="{ active: category === 'general' }" @click="setCategory('general')">通用</button>
          <button type="button" :class="{ active: category === 'anime' }" @click="setCategory('anime')">动漫</button>
          <button type="button" :class="{ active: category === 'people' }" @click="setCategory('people')">人物</button>
        </div>
      </div>

      <div class="filter-card filter-card--meta">
        <div class="meta-row">
          <label class="resolution">
            <span>分辨率</span>
            <strong>自动匹配 {{ screenLabel }}</strong>
          </label>
          <button type="button" class="refresh-btn" title="刷新" @click="refresh">
            <Refresh :size="18" :class="{ spinning: loading }" />
          </button>
        </div>
      </div>
    </section>

    <section class="grid-wrap">
      <div v-if="loading && visibleWallpapers.length === 0" class="empty-state">正在加载 Wallhaven 壁纸...</div>
      <div v-else-if="visibleWallpapers.length === 0" class="empty-state">暂无可用壁纸</div>
      <div v-else class="wallpaper-grid">
        <article v-for="wallpaper in visibleWallpapers" :key="wallpaper.id" class="wallpaper-card">
          <button type="button" class="thumb" @click="previewWallpaper = wallpaper">
            <img :src="wallpaper.thumbs.large" :alt="wallpaper.resolution" loading="lazy" />
            <span>{{ wallpaper.resolution }}</span>
          </button>
          <div class="card-actions">
            <button type="button" title="预览" @click="previewWallpaper = wallpaper">
              <PreviewOpen :size="16" />
              预览
            </button>
            <button type="button" title="设为壁纸" :disabled="workingIds.has(wallpaper.id)" @click="setWallpaper(wallpaper)">
              <Computer :size="16" />
              设为
            </button>
            <button type="button" title="下载" :disabled="workingIds.has(wallpaper.id)" @click="downloadWallpaper(wallpaper)">
              <Download :size="16" />
              下载
            </button>
          </div>
        </article>
      </div>
    </section>

    <footer class="pager">
      <span>第 {{ page }} 页</span>
      <span class="source-note">来源：{{ sourceLabel }} · SFW</span>
      <div class="pager-actions">
        <button type="button" :disabled="page <= 1 || loading" @click="prevPage">上一页</button>
        <button type="button" :disabled="page >= lastPage || loading" @click="nextPage">下一页</button>
      </div>
    </footer>

    <div v-if="previewWallpaper" class="preview-modal" @click.self="previewWallpaper = null">
      <div class="preview-dialog">
        <header>
          <strong>{{ previewWallpaper.resolution }}</strong>
          <button type="button" class="flat-icon" @click="previewWallpaper = null">
            <CloseSmall :size="23" />
          </button>
        </header>
        <img :src="previewWallpaper.thumbs.original || previewWallpaper.thumbs.large" alt="壁纸预览" />
        <footer>
          <button type="button" class="secondary-btn" @click="downloadWallpaper(previewWallpaper)">下载缓存</button>
          <button type="button" class="primary-btn" @click="setWallpaper(previewWallpaper)">设为壁纸</button>
        </footer>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wallhaven-window {
  --wallhaven-bg: #fbfcff;
  --wallhaven-panel: #ffffff;
  --wallhaven-soft: #f3f7fd;
  --wallhaven-border: #d9e2ef;
  --wallhaven-text: #111827;
  --wallhaven-muted: #7b8798;
  --wallhaven-primary: #5f74f3;
  --wallhaven-primary-soft: #eef3ff;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 0;
  overflow: hidden;
  color: var(--wallhaven-text);
  font-size: 14px;
  line-height: 1.3;
  background: var(--wallhaven-bg);
  border: 1px solid var(--wallhaven-border);
  border-radius: 8px;
  box-sizing: border-box;
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

.titlebar,
.title,
.top-actions,
.chips,
.source-toggle,
.card-actions,
.pager,
.pager-actions,
.preview-dialog header,
.preview-dialog footer {
  display: flex;
  align-items: center;
}

.titlebar {
  justify-content: space-between;
  height: 48px;
  padding: 0 14px 0 18px;
  background: rgb(255 255 255 / 78%);
  border-bottom: 1px solid var(--wallhaven-border);
  flex: 0 0 auto;
}

.title {
  gap: 10px;
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
}

.top-actions {
  gap: 12px;
}

.flat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--wallhaven-text);
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f3f7fd;
  }
}

.refresh-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wallhaven-primary);
  background: #eef3ff;
  border: 1px solid #dbe4ff;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #e3ebff;
  }
}

.source-toggle {
  display: flex;
  align-items: center;
  border: 1px solid var(--wallhaven-border);
  border-radius: 8px;
  overflow: hidden;

  button {
    width: 82px;
    height: 32px;
    color: var(--wallhaven-text);
    background: transparent;
    border: 0;
    border-right: 1px solid var(--wallhaven-border);
    cursor: pointer;
    line-height: 1;

    &:last-child {
      border-right: 0;
    }

    &.active {
      color: var(--wallhaven-primary);
      background: var(--wallhaven-primary-soft);
      box-shadow: inset 0 0 0 1px var(--wallhaven-primary);
    }
  }
}

.filters-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(220px, 0.72fr);
  gap: 12px;
  padding: 10px 14px 6px;
  flex: 0 0 auto;
}

.filter-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  padding: 14px;
  background: linear-gradient(180deg, rgb(255 255 255 / 98%), rgb(247 250 255 / 98%));
  border: 1px solid var(--wallhaven-border);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgb(15 23 42 / 4%);
}

.filter-label {
  color: var(--wallhaven-muted);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.filter-hint {
  margin-top: 4px;
  color: var(--wallhaven-muted);
  font-size: 12px;
  line-height: 1.2;
}

.filter-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.search-box {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 12px;
  background: #fff;
  border: 1px solid var(--wallhaven-border);
  border-radius: 12px;

  .search-icon {
    flex: 0 0 auto;
    width: 18px;
    height: 18px;
    color: var(--wallhaven-muted);
  }

  input {
    min-width: 0;
    padding: 0;
    color: var(--wallhaven-text);
    background: transparent;
    border: 0;
    outline: none;
    line-height: 1;
  }

  button {
    height: 30px;
    padding: 0 14px;
    color: #fff;
    background: var(--wallhaven-primary);
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    line-height: 1;

    &:hover {
      filter: brightness(1.02);
    }
  }
}

.resolution {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  line-height: 1;

  span {
    color: var(--wallhaven-muted);
  }

  strong {
    display: inline-flex;
    align-items: center;
    min-height: 38px;
    padding: 0 12px;
    color: var(--wallhaven-text);
    background: #fff;
    border: 1px solid var(--wallhaven-border);
    border-radius: 10px;
  }
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.chips {
  display: flex;
  width: 100%;
  padding: 4px;
  background: #f1f5ff;
  border: 1px solid #dbe4ff;
  border-radius: 14px;
  overflow: hidden;

  button {
    flex: 1;
    min-width: 0;
    height: 38px;
    padding: 0 10px;
    color: var(--wallhaven-text);
    background: transparent;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    line-height: 1;
    transition: background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;

    &:hover {
      background: rgb(255 255 255 / 72%);
    }

    &.active {
      color: var(--wallhaven-primary);
      background: #fff;
      box-shadow: 0 8px 18px rgb(95 116 243 / 16%);
    }
  }
}

.chips--tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.source-select {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  line-height: 1;

  span {
    color: var(--wallhaven-muted);
  }

  select {
    width: 132px;
    height: 36px;
    padding: 0 12px;
    font-weight: 500;
    color: var(--wallhaven-text);
    background: #fff;
    border: 1px solid var(--wallhaven-border);
    border-radius: 10px;
  }
}

.refresh-btn {
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  color: var(--wallhaven-primary);
  background: #eef3ff;
  border: 1px solid #dbe4ff;
  border-radius: 12px;
}

.spinning {
  animation: spin 0.8s linear infinite;
}

.grid-wrap {
  flex: 1;
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
  background: var(--wallhaven-panel);
  border: 1px solid var(--wallhaven-border);
  border-radius: 8px;
}

.thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1.36;
  overflow: hidden;
  cursor: pointer;
  background: var(--wallhaven-soft);
  border: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  span {
    position: absolute;
    left: 10px;
    bottom: 10px;
    padding: 3px 7px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    background: rgb(0 0 0 / 62%);
    border-radius: 4px;
  }
}

.card-actions {
  height: 34px;

  button {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: var(--wallhaven-text);
    background: transparent;
    border: 0;
    border-right: 1px solid var(--wallhaven-border);
    cursor: pointer;
    line-height: 1;

    &:last-child {
      border-right: 0;
    }

    &:hover:not(:disabled) {
      color: var(--wallhaven-primary);
      background: #f3f7fd;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--wallhaven-muted);
}

.pager {
  justify-content: space-between;
  height: 44px;
  padding: 0 20px;
  flex: 0 0 auto;
  line-height: 1;
}

.source-note {
  color: var(--wallhaven-muted);
}

.pager-actions {
  gap: 12px;

  button {
    width: 88px;
    height: 34px;
    color: var(--wallhaven-text);
    background: transparent;
    border: 1px solid var(--wallhaven-border);
    border-radius: 8px;
    cursor: pointer;

    &:hover:not(:disabled) {
      color: var(--wallhaven-primary);
      background: #f3f7fd;
    }

    &:disabled {
      opacity: 0.55;
      cursor: not-allowed;
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
  background: var(--wallhaven-panel);
  border: 1px solid var(--wallhaven-border);
  border-radius: 8px;
  box-shadow: var(--dialog-shadow);

  header,
  footer {
    justify-content: space-between;
    height: 48px;
    padding: 0 12px 0 16px;
    line-height: 1;
  }

  img {
    display: block;
    width: 100%;
    max-height: min(430px, calc(100vh - 160px));
    object-fit: contain;
    background: #111827;
  }
}

.primary-btn,
.secondary-btn {
  height: 34px;
  padding: 0 14px;
  border-radius: 6px;
  cursor: pointer;
}

.primary-btn {
  color: #fff;
  background: var(--wallhaven-primary);
  border: 1px solid var(--wallhaven-primary);
}

.secondary-btn {
  color: var(--wallhaven-text);
  background: transparent;
  border: 1px solid var(--wallhaven-border);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
