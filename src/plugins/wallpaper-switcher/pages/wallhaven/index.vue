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

const screenLabel = computed(() => {
  const current = status.value;
  return current ? `${current.screenWidth}×${current.screenHeight}` : '自动匹配';
});

const sourceLabel = computed(() => (source.value === 'hot' ? 'Hot' : 'Toplist'));

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

    <section class="filters">
      <div class="search-box">
        <input v-model="keyword" type="search" placeholder="搜索关键词" @keydown.enter="refresh" />
        <button type="button" title="搜索" @click="refresh">
          <Search :size="18" />
        </button>
      </div>
      <label class="resolution">
        <span>分辨率</span>
        <strong>自动匹配 {{ screenLabel }}</strong>
      </label>
      <div class="chips">
        <button type="button" :class="{ active: category === 'general' }" @click="setCategory('general')">通用</button>
        <button type="button" :class="{ active: category === 'anime' }" @click="setCategory('anime')">动漫</button>
        <button type="button" :class="{ active: category === 'people' }" @click="setCategory('people')">人物</button>
      </div>
      <label class="source-select">
        <span>源</span>
        <select v-model="source" @change="refresh">
          <option value="hot">Hot</option>
          <option value="toplist">Toplist</option>
        </select>
      </label>
      <button type="button" class="refresh-btn" title="刷新" @click="refresh">
        <Refresh :size="18" :class="{ spinning: loading }" />
      </button>
    </section>

    <section class="grid-wrap">
      <div v-if="loading && wallpapers.length === 0" class="empty-state">正在加载 Wallhaven 壁纸...</div>
      <div v-else-if="wallpapers.length === 0" class="empty-state">暂无可用壁纸</div>
      <div v-else class="wallpaper-grid">
        <article v-for="wallpaper in wallpapers" :key="wallpaper.id" class="wallpaper-card">
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: var(--search-text-color);
  background: var(--search-bg-color);
  border: 1px solid var(--search-border-color);
  border-radius: 8px;
}

.titlebar,
.title,
.top-actions,
.filters,
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
  height: 52px;
  padding: 0 16px;
  border-bottom: 1px solid var(--search-border-color);
}

.title {
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
}

.top-actions {
  gap: 16px;
}

.flat-icon,
.refresh-btn,
.search-box button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--search-text-color);
  background: transparent;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: var(--search-result-hover);
  }
}

.flat-icon,
.refresh-btn {
  width: 34px;
  height: 34px;
}

.source-toggle {
  border: 1px solid var(--search-border-color);
  border-radius: 7px;
  overflow: hidden;

  button {
    width: 82px;
    height: 34px;
    color: var(--search-text-color);
    background: transparent;
    border-right: 1px solid var(--search-border-color);
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }

    &.active {
      color: var(--search-result-accent);
      background: var(--search-result-active);
      box-shadow: inset 0 0 0 1px var(--search-result-accent);
    }
  }
}

.filters {
  gap: 12px;
  height: 72px;
  padding: 12px 16px;
}

.search-box {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 36px;
  width: 214px;
  height: 38px;
  overflow: hidden;
  background: var(--search-input-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 6px;

  input {
    min-width: 0;
    padding: 0 12px;
    color: var(--search-text-color);
    background: transparent;
    border: 0;
    outline: none;
  }
}

.resolution,
.source-select {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  span {
    color: var(--search-info-text-color);
  }
}

.resolution strong,
.source-select select {
  height: 38px;
  padding: 0 14px;
  font-weight: 500;
  color: var(--search-text-color);
  background: var(--search-input-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 6px;
}

.chips {
  border: 1px solid var(--search-border-color);
  border-radius: 6px;
  overflow: hidden;

  button {
    width: 68px;
    height: 38px;
    color: var(--search-text-color);
    background: transparent;
    border-right: 1px solid var(--search-border-color);
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }

    &.active {
      color: var(--search-result-accent);
      background: var(--search-result-active);
      box-shadow: inset 0 0 0 1px var(--search-result-accent);
    }
  }
}

.source-select select {
  width: 150px;
}

.refresh-btn {
  border: 1px solid var(--search-border-color);
}

.spinning {
  animation: spin 0.8s linear infinite;
}

.grid-wrap {
  height: calc(100vh - 52px - 72px - 68px);
  padding: 0 16px;
  overflow-y: auto;
}

.wallpaper-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.wallpaper-card {
  overflow: hidden;
  background: var(--search-card-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 8px;
}

.thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1.42;
  overflow: hidden;
  cursor: pointer;
  background: var(--search-soft-bg);
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
  height: 40px;

  button {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: var(--search-text-color);
    background: transparent;
    border: 0;
    border-right: 1px solid var(--search-border-color);
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }

    &:hover:not(:disabled) {
      color: var(--search-result-accent);
      background: var(--search-result-hover);
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
  color: var(--search-info-text-color);
}

.pager {
  justify-content: space-between;
  height: 68px;
  padding: 0 22px;
}

.source-note {
  color: var(--search-info-text-color);
}

.pager-actions {
  gap: 12px;

  button {
    width: 92px;
    height: 38px;
    color: var(--search-text-color);
    background: transparent;
    border: 1px solid var(--search-border-color);
    border-radius: 6px;
    cursor: pointer;

    &:hover:not(:disabled) {
      color: var(--search-result-accent);
      background: var(--search-result-hover);
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
  background: var(--search-card-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 8px;
  box-shadow: var(--dialog-shadow);

  header,
  footer {
    justify-content: space-between;
    height: 48px;
    padding: 0 12px 0 16px;
  }

  img {
    display: block;
    width: 100%;
    max-height: 430px;
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
  background: var(--search-result-accent);
  border: 1px solid var(--search-result-accent);
}

.secondary-btn {
  color: var(--search-text-color);
  background: transparent;
  border: 1px solid var(--search-border-color);
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
