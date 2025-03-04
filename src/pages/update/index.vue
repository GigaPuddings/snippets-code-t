<template>
  <div class="update-container" data-tauri-drag-region>
    <div class="update-content">
      <div class="info-section">
        <h2 class="title">软件更新</h2>
        <p class="version-info">
          <span>当前版本：</span>
          <el-tag size="small" class="version-tag">{{ currentVersion }}</el-tag>
        </p>
        <p class="version-info">
          <span>最新版本：</span>
          <el-tag type="success" size="small" class="version-tag">
            {{ update.newVersion }}
          </el-tag>
        </p>
        <p class="release-date">发布时间：{{ update.releaseDate }}</p>
        <div v-if="!update.downloading" class="release-notes">
          <div class="notes-title">更新内容：</div>
          <el-scrollbar height="120px" class="notes-scrollbar">
            <div class="notes-content" v-html="update.releaseNotes"></div>
          </el-scrollbar>
        </div>
        <div v-else class="download-progress">
          <div class="progress-wrapper">
            <el-progress
              :stroke-width="16"
              :percentage="update.progress"
              :format="progressFormat"
              :status="update.progress === 100 ? 'success' : ''"
              class="progress-bar"
              :show-text="false"
            />
            <div class="progress-info">
              <span class="percentage">{{ update.progress }}%</span>
              <span class="status-text">
                {{ update.statusText || '获取数据中...' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button
        @click="handleCancel"
        v-if="!update.downloading"
        class="action-button cancel-button"
      >
        取消
      </el-button>
      <el-button
        type="primary"
        @click="handleUpdate"
        v-if="!update.downloading"
        class="action-button update-button"
      >
        立即更新
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAppWindow } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, emit } from '@tauri-apps/api/event';
import { relaunch } from '@tauri-apps/plugin-process';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { onMounted, onUnmounted, nextTick } from 'vue';

interface UpdateInfo {
  version: string;
  notes: string;
  pub_date: string;
}

const currentVersion = ref(import.meta.env.VITE_APP_VERSION || '0.0.1');

const update = reactive({
  downloading: false,
  progress: 0,
  statusText: '',
  newVersion: '',
  releaseDate: '',
  releaseNotes: '',
  contentLength: 0
});

const progressFormat = (percentage: number) => {
  return update.downloading ? `${percentage}%` : '';
};

const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

// 配置 dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Shanghai'); // 设置默认时区为中国

// 初始化更新信息
onMounted(async () => {
  const updateInfo: UpdateInfo = await invoke('get_update_info');
  if (updateInfo) {
    update.newVersion = updateInfo.version;
    update.releaseNotes = updateInfo.notes;
    update.releaseDate = updateInfo.pub_date
      ? dayjs(updateInfo.pub_date.replace(' +00:00:00', 'Z').replace('.0', ''))
          .tz()
          .format('YYYY-MM-DD HH:mm:ss')
      : '未知时间';
  }

  // 通知后端页面已就绪
  await emit('update-ready');

  // 监听下载进度
  const unListenProgress = await listen('download-progress', (event: any) => {
    const { event: eventType, data } = event.payload;

    switch (eventType) {
      case 'Started':
        update.contentLength = data.content_length || 0;
        update.statusText = `开始下载 (总大小: ${formatBytes(data.content_length || 0)})`;
        break;
      case 'Progress':
        if (data.content_length > 0) {
          const progress = Math.min(
            Math.round((data.total_downloaded / data.content_length) * 100),
            100
          );
          update.progress = progress;
          update.statusText = `正在下载: ${formatBytes(data.total_downloaded)} / ${formatBytes(data.content_length)}`;
        }
        break;
      case 'Finished':
        update.progress = 100;
        update.statusText = '下载完成，准备安装...';
        break;
    }
  });

  // 监听下载完成
  const unListenFinished = await listen('download-finished', () => {
    update.statusText = '安装中...';
  });

  onUnmounted(() => {
    unListenProgress();
    unListenFinished();
  });

  // 在页面加载完成后发送事件
  nextTick(() => {
    // 使用 emit 函数代替直接访问 window.__TAURI__
    emit('update-ready');
  });
});

const handleUpdate = async () => {
  try {
    update.downloading = true;
    update.statusText = '准备下载...';

    await invoke('perform_update');

    // 延迟重启
    setTimeout(async () => {
      await relaunch();
    }, 2000);
  } catch (error) {
    console.error('Update failed:', error);
    update.statusText = '更新失败';
    update.downloading = false;
  }
};

const handleCancel = () => {
  const window = getAppWindow('update');
  window.close();
};
</script>

<style scoped lang="scss">
.update-container {
  @apply w-full h-full bg-white px-6 py-4 scroll-py-24 flex flex-col items-center justify-between box-border border border-gray-200;

  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%); */

  /* backdrop-filter: blur(10px); */
  border-radius: 16px;

  /* box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); */
  animation: fadeIn 0.3s ease-out;

  .update-content {
    @apply w-full flex-1;

    .info-section {
      /* @apply space-y-1; */
      animation: slideUp 0.4s ease-out;

      .title {
        @apply text-2xl font-semibold mb-2 text-gray-800;

        text-align: center;
      }

      .version-info {
        @apply flex items-center gap-2 text-gray-600 mb-2;

        .version-tag {
          @apply transition-all duration-300;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .release-date {
        @apply text-gray-500 text-sm mt-3;
      }

      .release-notes {
        @apply mt-4 bg-gray-50 rounded-lg p-2 border border-gray-200;

        .notes-title {
          @apply font-medium text-gray-700 mb-2;
        }

        .notes-scrollbar {
          @apply bg-white rounded-md;
        }

        .notes-content {
          @apply p-3 text-gray-600;
        }
      }
    }

    .download-progress {
      @apply flex flex-col items-center justify-center space-y-4 py-6;

      animation: fadeIn 0.3s ease-out;

      .progress-wrapper {
        @apply w-full px-4 mt-10;

        .progress-bar {
          @apply mb-3;

          :deep(.el-progress-bar__outer) {
            background-color: rgb(154 121 255 / 10%);
            border-radius: 8px;
          }

          :deep(.el-progress-bar__inner) {
            background: linear-gradient(90deg, #9a79ff 0%, #c8b6ff 100%);
            border-radius: 8px;
            transition: width 0.3s ease-in-out;
          }
        }

        .progress-info {
          @apply flex items-center justify-between text-sm px-1;

          .percentage {
            @apply font-medium text-[#9A79FF];
          }

          .status-text {
            @apply text-gray-500;
          }
        }
      }
    }
  }

  .footer {
    @apply w-full mt-6 flex items-center justify-center gap-4;

    .action-button {
      @apply min-w-[100px] transition-all duration-300;

      &:hover {
        transform: translateY(-2px);
      }

      &.cancel-button {
        @apply hover:bg-gray-100;
      }

      &.update-button {
        @apply bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700;

        box-shadow: 0 2px 10px rgb(59 130 246 / 30%);
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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
