<template>
  <main data-tauri-drag-region class="titlebar">
    <div class="titlebar-title">
      <div class="flex items-center gap-2">
        <img src="@/assets/128x128.png" alt="" class="w-6 h-6" />
        <div class="text-lg">{{ state.appName }}</div>
        <span class="text-sm text-stone-300">{{ state.appVersion }}</span>
      </div>
      <slot></slot>
    </div>
    <div class="titlebar-list">
      <div class="app-update relative">
        <update-rotation
          class="icon"
          theme="outline"
          size="20"
          :strokeWidth="3"
          @click="handleUpdateClick"
        />
        <div v-if="hasUpdate" class="update-dot"></div>
      </div>
      <div class="titlebar-button" @click="handleTitlebar('isAlwaysOnTop')">
        <component
          :is="isAlwaysOnTop ? Pushpin : Pin"
          class="icon"
          size="18"
          :strokeWidth="3"
          theme="outline"
          strokeLinecap="butt"
        />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('minimize')">
        <minus
          class="icon"
          theme="outline"
          size="17"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('maximize')">
        <square-small
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('close')">
        <close-small
          class="icon !p-0"
          theme="outline"
          size="24"
          :strokeWidth="2"
          strokeLinecap="butt"
        />
      </div>
    </div>

    <el-dialog
      v-model="updateDialog.visible"
      :title="updateDialog.title"
      width="400px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
    >
      <div class="update-content">
        <div v-if="!updateDialog.downloading">
          <p class="version-info">
            <span>当前版本：</span>
            <el-tag size="small">{{ currentVersion }}</el-tag>
          </p>
          <p class="version-info">
            <span>最新版本：</span>
            <el-tag type="success" size="small">
              {{ updateDialog.newVersion }}
            </el-tag>
          </p>
          <p class="release-date">发布时间：{{ updateDialog.releaseDate }}</p>
          <div class="release-notes">
            <div class="notes-title">更新内容：</div>
            <el-scrollbar height="120px">
              <div
                class="notes-content"
                v-html="updateDialog.releaseNotes"
              ></div>
            </el-scrollbar>
          </div>
        </div>
        <div v-else class="download-progress">
          <el-progress
            :percentage="updateDialog.progress"
            :format="progressFormat"
            status="success"
          />
          <p class="progress-text">{{ updateDialog.statusText }}</p>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click="updateDialog.visible = false"
            v-if="!updateDialog.downloading"
          >
            取消
          </el-button>
          <el-button
            type="primary"
            @click="handleUpdate"
            v-if="!updateDialog.downloading"
          >
            立即更新
          </el-button>
        </span>
      </template>
    </el-dialog>
  </main>
</template>

<script setup lang="ts">
import {
  Pushpin,
  Pin,
  Minus,
  SquareSmall,
  CloseSmall,
  UpdateRotation
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { info } from '@tauri-apps/plugin-log';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

defineOptions({
  name: 'Titlebar'
});

type WindowAction = 'isAlwaysOnTop' | 'minimize' | 'maximize' | 'close';

const isAlwaysOnTop = ref<boolean>(false);

const state = reactive({
  appName: '',
  appVersion: ''
});

const currentVersion = ref(import.meta.env.VITE_APP_VERSION || '0.0.1');
const updateDialog = ref({
  visible: false,
  title: '发现新版本',
  downloading: false,
  progress: 0,
  statusText: '',
  newVersion: '',
  releaseDate: '',
  releaseNotes: '',
  contentLength: 0
});

const hasUpdate = ref(false);

const progressFormat = (percentage: number) => {
  return updateDialog.value.downloading ? `${percentage}%` : '';
};

const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

const handleUpdate = async () => {
  try {
    updateDialog.value.downloading = true;
    updateDialog.value.title = '正在更新';
    updateDialog.value.progress = 0;

    const update = await check();
    if (!update) return;

    await info('Starting update download...');

    await update.downloadAndInstall((event) => {
      switch (event.event) {
        case 'Started':
          updateDialog.value.contentLength = event.data.contentLength || 0;
          updateDialog.value.statusText = `开始下载 (总大小: ${formatBytes(event.data.contentLength || 0)})`;
          info(
            `Update download started: ${formatBytes(event.data.contentLength || 0)}`
          );
          break;
        case 'Progress':
          const downloaded = event.data.chunkLength || 0;
          const total = updateDialog.value.contentLength;
          if (total > 0) {
            const progress = Math.min(
              Math.round((downloaded / total) * 100),
              100
            );
            updateDialog.value.progress = progress;
            updateDialog.value.statusText = `正在下载: ${formatBytes(downloaded)} / ${formatBytes(total)}`;
            info(`Update download progress: ${progress}%`);
          }
          break;
        case 'Finished':
          updateDialog.value.progress = 100;
          updateDialog.value.statusText = '下载完成，准备安装...';
          info('Update download finished');
          break;
      }
    });

    await info('Update installed successfully');
    ElMessage.success('更新成功，即将重启应用');
    setTimeout(() => relaunch(), 1500);
  } catch (error) {
    await info(`Update failed: ${error}`);
    ElMessage.error('更新失败，请稍后重试');
    updateDialog.value.visible = false;
    updateDialog.value.downloading = false;
    updateDialog.value.progress = 0;
  }
};

const checkUpdate = async (showMessage = true) => {
  try {
    await info('Starting update check...');
    console.log('Checking for updates...');

    const update = await check({
      timeout: 60000,
      headers: {
        'User-Agent': 'snippets-code-updater'
      }
    });

    console.log('Update check result:', update);

    if (update) {
      await info(`Found update: ${update.version}, released at ${update.date}`);
      hasUpdate.value = true;

      // 更新对话框内容
      updateDialog.value.newVersion = update.version;
      const releaseDate = update.date
        ? dayjs(update.date).isValid()
          ? dayjs(update.date).format('YYYY-MM-DD HH:mm:ss')
          : '未知时间'
        : '未知时间';

      updateDialog.value.releaseDate = releaseDate;
      updateDialog.value.releaseNotes =
        update.body?.replace(/\n/g, '<br>') || '暂无更新说明';

      return true;
    } else {
      await info('No updates available');
      hasUpdate.value = false;
      if (showMessage) {
        ElMessage.success('当前已是最新版本');
      }
      return false;
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    await info(`Check update failed: ${errorMessage}`);
    console.error('Update check error:', {
      message: errorMessage,
      error
    });

    if (showMessage) {
      ElMessage.error({
        message: '检查更新失败，请检查网络连接后重试',
        duration: 5000
      });
    }
    return false;
  }
};

const handleUpdateClick = async () => {
  const hasNewUpdate = await checkUpdate(true); // 显示消息提示
  if (hasNewUpdate) {
    updateDialog.value.visible = true;
  }
};

const appWindow = getAppWindow('config');

// 操作映射对象
const actionHandlers: Record<WindowAction, () => Promise<void>> = {
  isAlwaysOnTop: async () => {
    isAlwaysOnTop.value = !isAlwaysOnTop.value;
    await appWindow.setAlwaysOnTop(isAlwaysOnTop.value);
  },
  minimize: async () => appWindow.minimize(),
  maximize: async () => {
    const maximized = await appWindow.isMaximized();
    maximized ? appWindow.unmaximize() : appWindow.maximize();
  },
  close: async () => appWindow.close()
};

const handleTitlebar = async (type: WindowAction) => {
  try {
    await actionHandlers[type]?.();
  } catch (error) {
    console.error('Window operation failed:', error);
  }
};

onMounted(async () => {
  await initEnv();
  state.appName = appName;
  state.appVersion = appVersion;

  await checkUpdate(false); // 初始检查不显示消息
});
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply bg-content dark:bg-content flex justify-between items-center w-full h-8 leading-8 pr-1;
}

.titlebar-title {
  @apply text-slate-800 dark:text-panel pl-1 flex items-center;
}

.titlebar-list {
  @apply flex h-full items-center gap-3;
}

.titlebar-button {
  @apply leading-4;
}

.app-update {
  @apply flex justify-center items-center flex-col ml-2;

  &:hover {
    @apply cursor-pointer;

    .icon {
      @apply animate-spin bg-transparent;
    }
  }

  .update-dot {
    @apply absolute top-1 -right-1 w-[6px] h-[6px] bg-red-500 rounded-full animate-pulse;
  }
}

.icon {
  @include commonIcon;

  @apply text-[20px] p-1 dark:text-panel;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgb(239 68 68 / 70%);
    transform: scale(0.95);
  }

  70% {
    box-shadow: 0 0 0 6px rgb(239 68 68 / 0%);
    transform: scale(1);
  }

  100% {
    box-shadow: 0 0 0 0 rgb(239 68 68 / 0%);
    transform: scale(0.95);
  }
}
</style>
