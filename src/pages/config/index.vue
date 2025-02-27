<template>
  <div class="config">
    <div class="config-nav-wrapper">
      <div class="config-nav">
        <router-link
          v-for="(tab, index) in tabs"
          :key="index"
          :to="tab.path"
          :class="[
            'config-nav-item mb-4',
            { 'config-nav-item-active': $route.path.startsWith(tab.path) }
          ]"
        >
          <component
            :is="tab.icon"
            class="config-nav-item-icon"
            theme="outline"
            size="20"
            :strokeWidth="3"
          />
          <div class="config-nav-item-text">{{ tab.title }}</div>
        </router-link>
      </div>

      <div class="app-update">
        <update-rotation
          theme="outline"
          size="24"
          :strokeWidth="3"
          @click="checkUpdate"
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

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  BookOpen,
  SettingOne,
  MessageSearch,
  Notepad,
  UpdateRotation
} from '@icon-park/vue-next';

import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { info } from '@tauri-apps/plugin-log';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';

defineOptions({
  name: 'Config'
});

const tabs = [
  {
    icon: BookOpen,
    title: '片段',
    path: '/config/category/contentList'
  },
  {
    icon: MessageSearch,
    title: '检索',
    path: '/config/retrieve'
  },
  {
    icon: Notepad,
    title: '事项',
    path: '/config/todo'
  },
  {
    icon: SettingOne,
    title: '配置',
    path: '/config/summarize'
  }
];

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

    const update = await check();
    if (!update) return;

    await info('Starting update download...');

    await update.downloadAndInstall((event) => {
      switch (event.event) {
        case 'Started':
          updateDialog.value.contentLength = event.data.contentLength ?? 0;
          updateDialog.value.statusText = `开始下载 (总大小: ${formatBytes(event.data.contentLength ?? 0)})`;
          info(
            `Update download started: ${formatBytes(event.data.contentLength ?? 0)}`
          );
          break;
        case 'Progress':
          const downloaded = event.data.chunkLength ?? 0;
          updateDialog.value.progress = Math.round(
            (downloaded / updateDialog.value.contentLength) * 100
          );
          updateDialog.value.statusText = `正在下载: ${formatBytes(downloaded)} / ${formatBytes(updateDialog.value.contentLength)}`;
          info(`Update download progress: ${updateDialog.value.progress}%`);
          break;
        case 'Finished':
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
  }
};

const checkUpdate = async () => {
  try {
    console.log('Checking for updates...');
    const update = await check();
    console.log('Update check result:', update);
    if (update) {
      await info(`Found update: ${update.version}, released at ${update.date}`);

      updateDialog.value.newVersion = update.version;
      updateDialog.value.releaseDate = dayjs(update.date).format(
        'YYYY-MM-DD HH:mm:ss'
      );
      updateDialog.value.releaseNotes =
        update.body?.replace(/\n/g, '<br>') || '暂无更新说明';
      updateDialog.value.visible = true;
    } else {
      console.log('No updates available');
    }
  } catch (error) {
    console.error('Update check error details:', error);
    await info(`Check update failed: ${error}`);
    console.error('Check update failed:', error);
  }
};
</script>

<style scoped lang="scss">
.config {
  @apply h-full w-full flex justify-start;

  .config-nav-wrapper {
    @apply flex justify-between items-center flex-col;

    .app-update {
      @apply flex justify-center items-center flex-col mb-6 mr-2;

      &:hover {
        @apply cursor-pointer animate-spin;
      }
    }
  }

  .config-nav {
    @apply flex flex-col mr-2 pb-2;

    .config-nav-item.config-nav-item-active {
      @apply bg-tab-active text-primary;
    }

    .config-nav-item {
      @apply bg-white dark:bg-panel w-12 flex flex-col py-1 text-sm rounded-md;

      .config-nav-item-icon {
        @apply m-auto;
      }

      .config-nav-item-text {
        @apply text-center;
      }
    }
  }
}

.update-content {
  padding: 10px;

  .version-info {
    @apply flex items-center mb-3;

    span {
      @apply mr-2;
    }
  }

  .release-date {
    @apply text-gray-500 mb-3 text-sm;
  }

  .release-notes {
    @apply bg-gray-50 rounded p-3;

    .notes-title {
      @apply font-medium mb-2;
    }

    .notes-content {
      @apply text-sm text-gray-600 whitespace-pre-wrap;
    }
  }

  .download-progress {
    @apply py-4;

    .progress-text {
      @apply text-sm text-gray-500 mt-2 text-center;
    }
  }
}

.dialog-footer {
  @apply flex justify-end gap-2;
}
</style>
