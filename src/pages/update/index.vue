<template>
  <div class="update-container" data-tauri-drag-region>
    <div class="update-header" data-tauri-drag-region>
      <div class="logo-container">
        <div class="logo-circle">
          <img src="@/assets/128x128.png" alt="Logo" class="app-logo" />
        </div>
      </div>
      <h2 class="title">软件更新</h2>
    </div>
    <div class="update-content">
      <div class="info-section">
        <div class="version-comparison">
          <div class="version-item">
            <div class="version-label">当前版本</div>
            <el-tag size="small" class="version-tag current">
              {{ update.appVersion }}
            </el-tag>
          </div>
          <div class="version-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          <div class="version-item">
            <div class="version-label">最新版本</div>
            <el-tag type="success" size="small" class="version-tag new">
              {{ update.newVersion }}
            </el-tag>
          </div>
        </div>
        <p class="release-date">发布时间：{{ update.releaseDate }}</p>
        <div v-if="!update.downloading" class="release-notes">
          <div class="notes-title">更新内容</div>
          <el-scrollbar height="86px" class="notes-scrollbar">
            <div class="notes-content" v-html="update.releaseNotes"></div>
          </el-scrollbar>
        </div>
        <div v-else class="download-progress">
          <div class="progress-status">
            <div
              class="status-icon"
              :class="{ completed: update.progress === 100 }"
            >
              <svg
                v-if="update.progress < 100"
                class="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <svg
                v-else
                class="check-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div class="status-text-container">
              <span class="status-text">
                {{ update.statusText || '获取数据中...' }}
              </span>
            </div>
          </div>
          <div class="progress-wrapper">
            <el-progress
              :stroke-width="8"
              :percentage="update.progress"
              :format="progressFormat"
              :status="update.progress === 100 ? 'success' : ''"
              class="progress-bar"
              :show-text="false"
            />
            <div class="progress-info">
              <span class="percentage">{{ update.progress }}%</span>
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
        稍后更新
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
import { appVersion, initEnv, getAppWindow } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, emit } from '@tauri-apps/api/event';
import { relaunch } from '@tauri-apps/plugin-process';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

interface UpdateInfo {
  version: string;
  notes: string;
  pub_date: string;
}

const update = reactive({
  downloading: false,
  progress: 0,
  statusText: '',
  appVersion: '',
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
  await initEnv();
  update.appVersion = appVersion;
  const updateInfo: UpdateInfo = await invoke('get_update_info');
  if (updateInfo) {
    update.newVersion = updateInfo.version;
    // 将 notes 中的 \n 替换为 <br />
    update.releaseNotes = updateInfo.notes.replace(/\n/g, '<br />');
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
  @apply w-full h-full bg-white px-6 py-4 scroll-py-24 flex flex-col items-center justify-between box-border border rounded-xl border-gray-200;

  animation: fadeIn 0.3s ease-out;

  .update-header {
    @apply w-full flex flex-col items-center justify-center mb-3;

    .logo-container {
      @apply mb-3;

      .logo-circle {
        @apply w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shadow-md;

        animation: pulse 2s infinite ease-in-out;

        .app-logo {
          @apply w-14 h-14 object-contain;

          animation: float 3s ease-in-out infinite;
        }
      }
    }

    .title {
      @apply text-2xl font-semibold text-gray-800;

      background: linear-gradient(90deg, #4f46e5, #7c3aed);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .update-content {
    @apply w-full flex-1;

    .info-section {
      /* @apply space-y-1; */
      animation: slideUp 0.4s ease-out;

      .version-comparison {
        @apply flex items-center justify-center gap-4 mb-2 bg-gray-50 p-3 rounded-xl;

        .version-item {
          @apply flex flex-col items-center;

          .version-label {
            @apply text-sm text-gray-500 mb-1;
          }

          .version-tag {
            @apply transition-all duration-300 px-3 py-1;

            &.current {
              @apply bg-blue-50 text-blue-600 border-blue-200;
            }

            &.new {
              @apply bg-green-50 text-green-600 border-green-200;
            }

            &:hover {
              box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
              transform: scale(1.05);
            }
          }
        }

        .version-arrow {
          @apply text-gray-400;

          animation: arrowPulse 1.5s infinite ease-in-out;
        }
      }

      .release-date {
        @apply text-gray-500 text-sm text-center;
      }

      .release-notes {
        @apply mt-3 rounded-lg px-3 py-1 border bg-white;

        box-shadow: inset 0 2px 4px rgb(0 0 0 / 2%);

        .notes-title {
          @apply font-medium text-gray-700 text-base;
        }

        /* .notes-scrollbar {
          @apply bg-white rounded-md;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
        } */

        .notes-content {
          @apply p-1 text-gray-600 text-sm;
        }
      }
    }

    .download-progress {
      @apply flex flex-col items-center justify-center space-y-4 py-6;

      animation: fadeIn 0.3s ease-out;

      .progress-status {
        @apply flex items-center justify-center mb-4 w-full;

        .status-icon {
          @apply w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3;

          &.completed {
            @apply bg-green-50;
          }

          .download-icon {
            @apply text-blue-500;

            animation: bounce 1s infinite alternate;
          }

          .check-icon {
            @apply text-green-500;

            animation: scaleIn 0.5s ease-out;
          }
        }

        .status-text-container {
          @apply flex-1;

          .status-text {
            @apply text-gray-600 font-medium;
          }
        }
      }

      .progress-wrapper {
        @apply w-full px-4 mt-2;

        .progress-bar {
          @apply mb-3;

          :deep(.el-progress-bar__outer) {
            background-color: rgb(59 130 246 / 10%);
            border-radius: 8px;
          }

          :deep(.el-progress-bar__inner) {
            background: linear-gradient(90deg, #3b82f6, #6366f1);
            border-radius: 8px;
            box-shadow: 0 1px 3px rgb(59 130 246 / 30%);
            transition: width 0.3s ease-in-out;
          }
        }

        .progress-info {
          @apply flex items-center justify-center text-sm px-1;

          .percentage {
            @apply font-medium text-blue-600 text-lg;
          }
        }
      }
    }
  }

  .footer {
    @apply w-full flex items-center justify-center gap-4;

    .action-button {
      @apply min-w-[120px] transition-all duration-300 rounded-lg py-2;

      &:hover {
        transform: translateY(-2px);
      }

      &.cancel-button {
        @apply hover:bg-gray-100 border border-gray-200 text-gray-700;
      }

      &.update-button {
        @apply bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium;

        box-shadow: 0 4px 14px rgb(59 130 246 / 30%);
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

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgb(79 70 229 / 20%);
  }

  70% {
    box-shadow: 0 0 0 10px rgb(79 70 229 / 0%);
  }

  100% {
    box-shadow: 0 0 0 0 rgb(79 70 229 / 0%);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes arrowPulse {
  0% {
    opacity: 0.6;
    transform: translateX(0);
  }

  50% {
    opacity: 1;
    transform: translateX(3px);
  }

  100% {
    opacity: 0.6;
    transform: translateX(0);
  }
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-3px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.update-dot {
  @apply absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full;

  animation: pulse 1.5s infinite;
}
</style>
