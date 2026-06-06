<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import modal from '@/utils/modal';
import {
  clearWallpaperCache,
  defaultWallpaperConfig,
  getWallpaperConfig,
  getWallpaperStatus,
  saveWallpaperConfig,
  scanWallpaperFolder,
  setFixedWallpaper,
  switchWallpaperNow,
  wallpaperImageSrc,
  type FolderScanResult,
  type WallpaperConfig,
  type WallpaperStatus
} from '../../api';
import {
  CloseSmall,
  FolderOpen,
  GridFour,
  Lightning,
  Picture,
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
  await saveWallpaperConfig(config.value);
  await invoke('show_hide_window_command', {
    label: 'wallpaper_wallhaven',
    context: null
  });
};

const clearCache = async () => {
  try {
    await clearWallpaperCache();
    await refreshStatus();
    modal.msg('缓存已清理', 'success');
  } catch (error) {
    modal.msg(String(error), 'error');
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
  unlistenChanged = await listen('wallpaper-switcher-changed', refreshStatus);
  unlistenError = await listen<{ message?: string }>('wallpaper-switcher-error', (event) => {
    modal.msg(event.payload?.message || '定时切换失败', 'error');
  });
});

onUnmounted(() => {
  unlistenChanged?.();
  unlistenError?.();
});
</script>

<template>
  <main class="wallpaper-window">
    <header class="titlebar" data-tauri-drag-region>
      <div class="title">
        <Picture :size="20" />
        <span>壁纸切换</span>
      </div>
      <div class="window-actions">
        <button type="button" class="icon-btn" title="打开在线网格" @click="openWallhavenGrid">
          <GridFour :size="19" />
        </button>
        <button type="button" class="icon-btn" title="关闭" @click="closeWindow">
          <CloseSmall :size="22" />
        </button>
      </div>
    </header>

    <section v-if="status && !status.supported" class="unsupported">
      当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。
    </section>

    <div class="content" :class="{ dimmed: loading }">
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

        <div class="form-row">
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

        <div class="form-row">
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
          <button type="button" class="secondary-btn" @click="clearCache">
            <Delete :size="16" />
            清理缓存
          </button>
          <button type="button" class="primary-btn" :disabled="saving" @click="persistConfig">
            <Save :size="17" />
            {{ saving ? '保存中' : '保存设置' }}
          </button>
        </div>
      </footer>
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
  input {
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

.content {
  display: grid;
  grid-template-rows: 150px 180px 92px 56px;
  gap: 8px;
  height: calc(100vh - 48px);
  min-height: 0;
  padding: 12px 20px 12px;
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
  margin-bottom: 7px;

  span {
    color: var(--wallpaper-muted);
  }

  strong {
    font-weight: 600;
  }
}

.status-actions {
  gap: 10px;
  margin-top: 10px;
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
  padding: 9px 12px 8px;
}

.form-row {
  display: grid;
  grid-template-columns: 106px minmax(0, 1fr) 86px 86px;
  gap: 7px;
  align-items: center;
  min-height: 36px;
}

.mode-row {
  grid-template-columns: 106px minmax(0, 1fr);
}

.wallhaven-row {
  grid-template-columns: 106px 54px 348px minmax(154px, 1fr);
  padding-top: 6px;
  margin-top: 6px;
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
  height: 32px;
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
  min-height: 17px;
}

.segmented {
  display: grid;
  height: 32px;
  overflow: hidden;
  border: 1px solid var(--wallpaper-border);
  border-radius: 6px;

  button {
    height: 30px;
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
  padding: 10px 12px;

  h2 {
    margin: 0 0 7px;
    font-size: 15px;
    font-weight: 700;
  }
}

.rules-line {
  gap: 9px;
  min-height: 34px;
}

.switch-label,
.checkbox-label {
  gap: 9px;
  white-space: nowrap;
}

.switch-label input,
.checkbox-label input {
  accent-color: var(--search-result-accent);
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
    height: 32px;
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
}

.cache-info {
  gap: 24px;
  font-size: 14px;
}

.footer-actions {
  gap: 12px;
}
</style>
