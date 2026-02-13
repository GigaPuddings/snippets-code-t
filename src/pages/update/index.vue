n<template>
  <div class="update-container" data-tauri-drag-region>
    <div class="update-header" data-tauri-drag-region>
      <div class="logo-container">
        <div class="logo-circle">
          <img src="@/assets/128x128.png" alt="Logo" class="app-logo" />
        </div>
      </div>
      <h2 class="title">{{ $t('update.title') }}</h2>
    </div>

    <div class="update-content">
      <div class="info-section">
        <div class="version-comparison">
          <div class="version-item">
            <div class="version-label">{{ $t('update.currentVersion') }}</div>
            <el-tag size="default" class="version-tag current">
              {{ update.appVersion }}
            </el-tag>
          </div>
          <div class="version-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            <div class="version-label">{{ $t('update.newVersion') }}</div>
            <el-tag type="success" size="default" class="version-tag new">
              {{ update.newVersion }}
            </el-tag>
          </div>
        </div>

        <p class="release-date">{{ $t('update.releaseDate') }}{{ update.releaseDate }}</p>

        <div v-if="!update.downloading" class="release-notes">
          <div class="notes-title">{{ $t('update.releaseNotes') }}</div>
          <el-scrollbar class="notes-scrollbar" :view-style="{ height: '100%' }">
            <div class="notes-content" v-html="update.releaseNotes"></div>
          </el-scrollbar>
        </div>

        <div v-else class="download-progress">
          <div class="progress-status">
            <div
              class="status-icon"
              :class="{ 
                completed: update.progress === 100 && !update.error,
                error: update.error
              }"
            >
              <svg
                v-if="!update.error && update.progress < 100"
                class="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
                v-else-if="!update.error"
                class="check-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
              <svg
                v-else
                class="error-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div class="status-text-container">
              <span class="status-text" :class="{ error: update.error }">
                {{ update.statusText || $t('update.gettingData') }}
              </span>
            </div>
          </div>
          <div v-if="!update.error" class="progress-wrapper">
            <el-progress
              :stroke-width="6"
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
          <div v-else class="error-message">
            <div class="error-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <span>{{ $t('update.installFailed') }}</span>
            </div>
            <pre class="error-content">{{ update.error }}</pre>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <el-button
        @click="handleCancel"
        v-if="!update.downloading || update.error"
        class="action-button cancel-button"
      >
        {{ update.error ? $t('update.close') : $t('update.updateLater') }}
      </el-button>
      <el-button
        type="primary"
        @click="handleUpdate"
        v-if="!update.downloading || update.error"
        class="action-button update-button"
      >
        {{ update.error && update.downloadComplete ? $t('update.retryInstall') : $t('update.updateNow') }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { appVersion, initEnv, getAppWindow } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, emit } from '@tauri-apps/api/event';
import { relaunch } from '@tauri-apps/plugin-process';
import { useI18n } from 'vue-i18n';
import { formatBytes, formatPercentage } from '@/utils/format';
import { marked } from 'marked';

const { t } = useI18n();
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { logger } from '@/utils/logger';

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
  contentLength: 0,
  error: '',
  downloadComplete: false
});

const progressFormat = (percentage: number) => {
  return update.downloading ? formatPercentage(percentage) : '';
};

// 配置 marked
marked.setOptions({
  breaks: true, // 支持 GitHub 风格的换行
  gfm: true, // 启用 GitHub 风格的 Markdown
});

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
    // 使用 marked 渲染 Markdown
    update.releaseNotes = marked(updateInfo.notes) as string;
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
        update.statusText = `${t('update.startDownload')} (${formatBytes(data.content_length || 0)})`;
        break;
      case 'Progress':
        if (data.content_length > 0) {
          const progress = Math.min(
            Math.round((data.total_downloaded / data.content_length) * 100),
            100
          );
          update.progress = progress;
          update.statusText = `${t('update.downloading')}: ${formatBytes(data.total_downloaded)} / ${formatBytes(data.content_length)}`;
        }
        break;
      case 'Finished':
        update.progress = 100;
        update.downloadComplete = true;
        update.statusText = t('update.downloadComplete');
        break;
    }
  });

  // 监听下载完成
  const unListenFinished = await listen('download-finished', () => {
    update.statusText = t('update.installing');
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
    // 如果是重试安装，重置状态
    if (update.error) {
      update.error = '';
      update.progress = 0;
      update.downloadComplete = false;
    }
    
    update.downloading = true;
    update.statusText = t('update.preparing');

    await invoke('perform_update');

    // 如果到达这里说明安装成功，准备重启
    update.statusText = t('update.installSuccess');

    // 延迟重启
    setTimeout(async () => {
      await relaunch();
    }, 2000);
  } catch (error: any) {
    logger.error('Update failed:', error);
    
    // 统一错误处理：直接使用后端返回的错误信息
    const errorMsg = typeof error === 'string' ? error : (error.message || '更新失败');
    update.error = errorMsg;
    
    // 设置状态文本
    if (update.downloadComplete) {
      update.statusText = t('update.installFailed');
    } else {
      update.statusText = t('update.downloadFailed');
      update.downloading = false;
    }
  }
};

const handleCancel = () => {
  const window = getAppWindow('update');
  window.close();
};
</script>

<style scoped lang="scss">
.update-container {
  @apply w-full h-full bg-white px-6 py-5 flex flex-col box-border border rounded-xl border-gray-200;
  min-height: 0;
  animation: fadeIn 0.3s ease-out;

  .update-header {
    @apply w-full flex flex-row items-center justify-center gap-3 mb-4;

    .logo-container {
      .logo-circle {
        @apply w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shadow-sm;

        animation: pulse 2s infinite ease-in-out;

        .app-logo {
          @apply w-7 h-7 object-contain;

          animation: float 3s ease-in-out infinite;
        }
      }
    }

    .title {
      @apply text-lg font-semibold text-gray-800;

      background: linear-gradient(90deg, #4f46e5, #7c3aed);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .update-content {
    @apply w-full flex-1 flex flex-col overflow-hidden;
    min-height: 0;

    .info-section {
      @apply w-full flex-1 flex flex-col;
      min-height: 0;
      animation: slideUp 0.4s ease-out;

      .version-comparison {
        @apply flex items-center justify-center gap-4 mb-3 bg-gradient-to-br from-gray-50 to-blue-50/30 p-3 rounded-lg flex-shrink-0;

        .version-item {
          @apply flex flex-col items-center gap-1.5;

          .version-label {
            @apply text-xs text-gray-500 font-medium;
          }

          .version-tag {
            @apply transition-all duration-300 px-3 py-1 font-medium text-sm;

            &.current {
              @apply bg-blue-50 text-blue-600 border-blue-200;
            }

            &.new {
              @apply bg-green-50 text-green-600 border-green-200;
            }

            &:hover {
              box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
              transform: scale(1.05);
            }
          }
        }

        .version-arrow {
          @apply text-gray-400 flex items-center;

          animation: arrowPulse 1.5s infinite ease-in-out;
        }
      }

      .release-date {
        @apply text-gray-500 text-xs text-center mb-3 flex-shrink-0;
      }

      .release-notes {
        @apply rounded-lg px-3 py-2.5 border bg-white/80 flex-1 flex flex-col overflow-hidden;

        box-shadow: inset 0 2px 4px rgb(0 0 0 / 3%);
        min-height: 0;

        .notes-title {
          @apply font-medium text-gray-700 text-sm mb-2 flex-shrink-0;
        }

        .notes-scrollbar {
          @apply rounded-md flex-1;
          height: 0;
          min-height: 0;

          :deep(.el-scrollbar__wrap) {
            max-height: 100%;
          }

          :deep(.el-scrollbar__view) {
            height: auto !important;
          }
        }

        .notes-content {
          @apply pr-2 text-gray-600 text-sm leading-relaxed;

          // Markdown 样式
          :deep(h1),
          :deep(h2),
          :deep(h3),
          :deep(h4) {
            @apply font-semibold text-gray-800 mt-4 mb-2;
          }

          :deep(h1) {
            @apply text-lg;
          }

          :deep(h2) {
            @apply text-base;
          }

          :deep(h3) {
            @apply text-sm;
          }

          :deep(h4) {
            @apply text-sm;
          }

          :deep(p) {
            @apply mb-2;
          }

          :deep(ul),
          :deep(ol) {
            @apply pl-5 mb-2;
          }

          :deep(li) {
            @apply mb-1;
          }

          :deep(strong) {
            @apply font-semibold text-gray-800;
          }

          :deep(em) {
            @apply italic;
          }

          :deep(code) {
            @apply bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-gray-800;
          }

          :deep(pre) {
            @apply bg-gray-100 p-3 rounded-lg mb-2 overflow-x-auto;

            code {
              @apply bg-transparent p-0;
            }
          }

          :deep(blockquote) {
            @apply border-l-4 border-blue-300 pl-3 py-1 my-2 text-gray-600 italic;
          }

          :deep(a) {
            @apply text-blue-600 hover:text-blue-700 underline;
          }

          :deep(hr) {
            @apply my-3 border-gray-200;
          }
        }
      }
    }

    .download-progress {
      @apply flex flex-col items-center justify-center space-y-4 py-6 w-full;

      animation: fadeIn 0.3s ease-out;

      .progress-status {
        @apply flex items-center justify-start gap-3 w-full;

        .status-icon {
          @apply w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0;

          &.completed {
            @apply bg-green-50;
          }

          &.error {
            @apply bg-red-50;
          }

          .download-icon {
            @apply text-blue-500;

            animation: bounce 1s infinite alternate;
          }

          .check-icon {
            @apply text-green-500;

            animation: scaleIn 0.5s ease-out;
          }

          .error-icon {
            @apply text-red-500;

            animation: shake 0.5s ease-out;
          }
        }

        .status-text-container {
          @apply flex-1;

          .status-text {
            @apply text-gray-700 font-medium text-sm;
            
            &.error {
              @apply text-red-600;
            }
          }
        }
      }

      .progress-wrapper {
        @apply w-full;

        .progress-bar {
          @apply mb-3;

          :deep(.el-progress-bar__outer) {
            background-color: rgb(59 130 246 / 10%);
            border-radius: 10px;
          }

          :deep(.el-progress-bar__inner) {
            background: linear-gradient(90deg, #3b82f6, #6366f1);
            border-radius: 10px;
            box-shadow: 0 2px 4px rgb(59 130 246 / 25%);
            transition: width 0.3s ease-in-out;
          }
        }

        .progress-info {
          @apply flex items-center justify-center text-sm;

          .percentage {
            @apply font-semibold text-blue-600 text-base;
          }
        }
      }
      
      .error-message {
        @apply w-full mt-3 p-4 bg-red-50 border border-red-200 rounded-lg;
        
        .error-title {
          @apply flex items-center gap-2 mb-3 pb-3 border-b border-red-200;
          
          svg {
            @apply text-red-500;
          }
          
          span {
            @apply font-semibold text-red-700 text-base;
          }
        }
        
        .error-content {
          @apply text-sm text-red-600 leading-relaxed m-0 font-normal whitespace-pre-wrap;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
        }
      }
    }
  }

  .footer {
    @apply w-full flex items-center justify-center gap-3 mt-4 pt-4;

    .action-button {
      @apply min-w-[120px] transition-all duration-300 rounded-lg py-2 font-medium text-sm;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgb(0 0 0 / 8%);
      }

      &.cancel-button {
        @apply hover:bg-gray-100 border border-gray-200 text-gray-700;
      }

      &.update-button {
        @apply bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium;

        box-shadow: 0 4px 14px rgb(59 130 246 / 35%);
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

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

.update-dot {
  @apply absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full;

  animation: pulse 1.5s infinite;
}
</style>
