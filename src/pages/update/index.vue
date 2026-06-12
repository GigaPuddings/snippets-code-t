<template>
  <div class="update-container" data-tauri-drag-region>
    <div class="update-header" data-tauri-drag-region>
      <div class="header-title">
        <div class="logo-mark">
          <img src="@/assets/128x128.png" alt="Logo" class="app-logo" />
        </div>
        <h2 class="title">{{ $t('update.title') }}</h2>
      </div>
      <button class="close-button" type="button" aria-label="Close" @click="handleCancel">
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>

    <div class="update-content">
      <div class="info-section">
        <div class="version-summary">
          <div class="new-version">{{ formatVersionLabel(update.newVersion) }}</div>
          <p class="version-copy">
            {{ $t('update.currentVersion') }}
            {{ formatVersionLabel(update.appVersion) }} → {{ $t('update.newVersion') }}
            {{ formatVersionLabel(update.newVersion) }}
          </p>
          <p class="release-date">{{ $t('update.releaseDate') }}{{ update.releaseDate }}</p>
        </div>

        <div v-if="!update.downloading" class="status-banner" :class="{ error: update.error }">
          <svg
            v-if="!update.error"
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
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <svg
            v-else
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
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          <span>
            {{ update.error || readyText }}
          </span>
        </div>

        <div v-if="update.downloading" class="download-progress">
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
                <path d="M20 6 9 17l-5-5" />
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
          <div v-else class="error-message">
            <div class="error-title">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{{ $t('update.installFailed') }}</span>
            </div>
            <pre class="error-content">{{ update.error }}</pre>
          </div>
        </div>

        <div class="notes-divider"></div>

        <div class="release-notes">
          <div class="notes-heading">
            <div class="notes-title">{{ $t('update.releaseNotes') }}</div>
            <div v-if="update.releaseDate" class="notes-date">{{ update.releaseDate }}</div>
          </div>
          <el-scrollbar class="notes-scrollbar" :view-style="{ height: '100%' }">
            <div class="notes-content" v-html="update.releaseNotes"></div>
          </el-scrollbar>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M3 21v-5h5" />
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M16 8h5V3" />
        </svg>
        {{ update.error && update.downloadComplete ? $t('update.retryInstall') : $t('update.updateNow') }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { appVersion, initEnv, getAppWindow } from '@/utils/env';
import { sanitizeHtml } from '@/utils/html-sanitize';
import { invoke } from '@tauri-apps/api/core';
import { listen, emit } from '@tauri-apps/api/event';
import { relaunch } from '@tauri-apps/plugin-process';
import { useI18n } from 'vue-i18n';
import { formatBytes, formatPercentage } from '@/utils/format';
import { marked } from 'marked';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { logger } from '@/utils/logger';

interface UpdateInfo {
  version: string;
  notes: string;
  pub_date: string;
}

const { t } = useI18n();

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

const formatVersionLabel = (version: string) => {
  if (!version) {
    return 'v--';
  }

  return version.startsWith('v') ? version : `v${version}`;
};

const readyText = computed(() => {
  const version = formatVersionLabel(update.newVersion);

  if (t('update.readyToRestart') !== 'update.readyToRestart') {
    return t('update.readyToRestart', { version });
  }

  return `${version} 已就绪，重启后生效。`;
});

const progressFormat = (percentage: number) => {
  return update.downloading ? formatPercentage(percentage) : '';
};

marked.setOptions({
  breaks: true,
  gfm: true
});

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Shanghai');

onMounted(async () => {
  await initEnv();
  update.appVersion = appVersion;
  const updateInfo: UpdateInfo = await invoke('get_update_info');
  if (updateInfo) {
    update.newVersion = updateInfo.version;
    update.releaseNotes = sanitizeHtml(marked(updateInfo.notes) as string);
    update.releaseDate = updateInfo.pub_date
      ? dayjs(updateInfo.pub_date.replace(' +00:00:00', 'Z').replace('.0', ''))
          .tz()
          .format('YYYY-MM-DD HH:mm:ss')
      : 'Unknown';
  }

  await emit('update-ready');

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

  const unListenFinished = await listen('download-finished', () => {
    update.statusText = t('update.installing');
  });

  onUnmounted(() => {
    unListenProgress();
    unListenFinished();
  });

  nextTick(() => {
    emit('update-ready');
  });
});

const handleUpdate = async () => {
  try {
    if (update.error) {
      update.error = '';
      update.progress = 0;
      update.downloadComplete = false;
    }

    update.downloading = true;
    update.statusText = t('update.preparing');

    await invoke('perform_update');

    update.statusText = t('update.installSuccess');

    setTimeout(async () => {
      await relaunch();
    }, 2000);
  } catch (error: any) {
    logger.error('Update failed:', error);

    const errorMsg = typeof error === 'string' ? error : error.message || 'Update failed';
    update.error = errorMsg;

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
  @apply w-full h-full bg-panel flex flex-col box-border border rounded-xl border-panel overflow-hidden;

  --update-bg: var(--panel-bg, #fbfcff);
  --update-header-bg: linear-gradient(180deg, rgb(255 255 255 / 96%), rgb(248 250 252 / 90%));
  --update-footer-bg: rgb(248 250 252 / 92%);
  --update-card-bg: rgb(255 255 255 / 72%);
  --update-soft-bg: rgb(248 250 252 / 72%);
  --update-border: rgb(148 163 184 / 18%);
  --update-border-strong: rgb(148 163 184 / 26%);
  --update-text: var(--panel-text, #111827);
  --update-text-muted: var(--panel-text-secondary, #6b7280);
  --update-hover-bg: var(--panel-hover-bg, #f3f7ff);
  --update-shadow: 0 18px 48px rgb(15 23 42 / 12%);

  min-height: 0;
  animation: fadeIn 0.24s ease-out;
  color: var(--update-text);
  background: var(--update-bg);
  border-color: var(--update-border-strong);
  box-shadow: var(--update-shadow);

  .update-header {
    @apply w-full flex items-center justify-between px-5 py-2 flex-shrink-0;
    height: 54px;
    border-bottom: 1px solid var(--update-border);
    background: var(--update-header-bg);

    .header-title {
      @apply flex items-center gap-2;
    }

    .logo-mark {
      @apply relative w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0;
      background: rgb(95 116 243 / 12%);
      border: 1px solid var(--update-border);

      .app-logo {
        @apply relative z-10 w-6 h-6 object-contain;
      }
    }

    .title {
      @apply text-base font-semibold text-panel m-0;

      color: var(--update-text);
      letter-spacing: 0;
    }

    .close-button {
      @apply w-8 h-8 rounded-md flex items-center justify-center text-panel-text-secondary transition-all duration-200;

      color: var(--update-text-muted);

      &:hover {
        background: var(--update-hover-bg);
        color: var(--update-text);
      }
    }
  }

  .update-content {
    @apply w-full flex-1 flex flex-col overflow-hidden px-6 py-4;

    min-height: 0;

    .info-section {
      @apply w-full flex-1 flex flex-col;

      min-height: 0;
      animation: slideUp 0.28s ease-out;
    }

    .version-summary {
      @apply flex-shrink-0 grid gap-1;

      .new-version {
        @apply text-2xl font-bold;

        color: var(--el-color-primary);
      }

      .version-copy {
        @apply text-sm text-panel-text-secondary leading-snug m-0;
      }

      .release-date {
        @apply text-xs text-panel-text-secondary mt-0 mb-0;
      }
    }

    .status-banner {
      @apply flex items-center gap-2 mt-3 px-3 py-2 rounded-lg text-sm font-medium;

      color: #19c463;
      background: rgb(22 163 74 / 10%);

      &.error {
        color: #ef4444;
        background: rgb(239 68 68 / 10%);
      }

      svg {
        @apply flex-shrink-0;
      }
    }

    .notes-divider {
      @apply w-full flex-shrink-0 my-3;

      height: 1px;
      background: var(--update-border);
    }

    .release-notes {
      @apply flex-1 flex flex-col overflow-hidden;

      min-height: 0;

      .notes-heading {
        @apply flex items-center justify-between gap-4 mb-2 flex-shrink-0;
      }

      .notes-title {
        @apply text-sm font-semibold text-panel;

        color: var(--update-text);
      }

      .notes-date {
        @apply text-xs text-panel-text-secondary;

        color: var(--update-text-muted);
      }

      .notes-scrollbar {
        @apply flex-1 pr-1 rounded-lg;

        height: 0;
        min-height: 0;
        border: 1px solid var(--update-border);
        background: var(--update-card-bg);

        :deep(.el-scrollbar__wrap) {
          max-height: 100%;
        }

        :deep(.el-scrollbar__bar.is-vertical) {
          width: 8px;
        }

        :deep(.el-scrollbar__thumb) {
          background: rgb(148 163 184 / 46%);
        }
      }

      .notes-content {
        @apply px-4 py-3 text-panel-text-secondary text-sm leading-relaxed;

        color: var(--update-text-muted);

        :deep(h1),
        :deep(h2),
        :deep(h3),
        :deep(h4) {
          @apply font-semibold text-panel mt-3 mb-2;
        }

        :deep(h1) {
          @apply text-lg;
        }

        :deep(h2) {
          @apply text-base;
        }

        :deep(h3),
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
          @apply mb-1.5 pl-1;
        }

        :deep(li::marker) {
          color: var(--el-color-primary);
        }

        :deep(strong) {
          @apply font-bold text-panel;

          color: var(--update-text);
        }

        :deep(em) {
          @apply italic;
        }

        :deep(code) {
          @apply bg-content px-1.5 py-0.5 rounded text-sm font-mono text-panel;

          color: var(--update-text);
          background: var(--update-soft-bg);
        }

        :deep(pre) {
          @apply bg-content p-3 rounded-lg mb-2 overflow-x-auto;

          background: var(--update-soft-bg);

          code {
            @apply bg-transparent p-0;
          }
        }

        :deep(blockquote) {
          @apply border-l-4 pl-3 py-1 my-2 text-panel-text-secondary italic;

          border-color: var(--el-color-primary);
        }

        :deep(a) {
          @apply underline;

          color: var(--el-color-primary);
        }

        :deep(hr) {
          @apply my-3 border-panel;
        }
      }
    }

    .download-progress {
      @apply flex flex-col gap-3 mt-3 px-4 py-3 rounded-lg flex-shrink-0;

      background: rgb(59 130 246 / 8%);
      border: 1px solid rgb(59 130 246 / 18%);
      animation: fadeIn 0.24s ease-out;

      .progress-status {
        @apply flex items-center justify-start gap-3 w-full;

        .status-icon {
          @apply w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0;

          background: rgb(59 130 246 / 12%);

          &.completed {
            background: rgb(34 197 94 / 12%);
          }

          &.error {
            background: rgb(239 68 68 / 12%);
          }

          .download-icon {
            @apply text-blue-500;

            animation: bounce 1s infinite alternate;
          }

          .check-icon {
            @apply text-green-500;

            animation: scaleIn 0.32s ease-out;
          }

          .error-icon {
            @apply text-red-500;
          }
        }

        .status-text-container {
          @apply flex-1 min-w-0;

          .status-text {
            @apply text-panel font-medium text-xs break-words;

            color: var(--update-text);

            &.error {
              @apply text-red-600;
            }
          }
        }
      }

      .progress-wrapper {
        @apply w-full;

        .progress-bar {
          @apply mb-1;

          :deep(.el-progress-bar__outer) {
            background-color: rgb(59 130 246 / 12%);
            border-radius: 999px;
          }

          :deep(.el-progress-bar__inner) {
            background: linear-gradient(90deg, var(--el-color-primary), #2fb7ad);
            border-radius: 999px;
            box-shadow: 0 6px 14px rgb(59 130 246 / 24%);
            transition: width 0.3s ease-in-out;
          }
        }

        .progress-info {
          @apply flex items-center justify-end text-xs;

          .percentage {
            @apply font-bold;

            color: var(--el-color-primary);
          }
        }
      }

      .error-message {
        @apply w-full mt-1 p-3 border rounded-lg;

        background: rgb(239 68 68 / 10%);
        border-color: rgb(239 68 68 / 28%);

        .error-title {
          @apply flex items-center gap-2 mb-2 pb-2 border-b;

          border-color: rgb(239 68 68 / 24%);

          svg {
            @apply text-red-500;
          }

          span {
            @apply font-semibold text-red-700 text-sm;
          }
        }

        .error-content {
          @apply text-xs text-red-600 leading-relaxed m-0 font-normal whitespace-pre-wrap;

          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
        }
      }
    }
  }

  .footer {
    @apply w-full flex items-center justify-end gap-3 px-6 py-3 flex-shrink-0;

    background: var(--update-footer-bg);
    border-top: 1px solid var(--update-border);

    .action-button {
      @apply min-w-[112px] h-9 transition-all duration-200 rounded-lg;

      &:hover {
        transform: translateY(-1px);
      }

      &.cancel-button {
        @apply bg-panel border border-panel text-panel shadow-sm;

        color: var(--update-text);
        background: var(--update-card-bg);
        border-color: var(--update-border-strong);

        &:hover {
          background: var(--update-hover-bg);

          box-shadow: 0 10px 22px rgb(15 23 42 / 8%);
        }
      }

      &.update-button {
        :deep(span) {
          @apply flex items-center gap-2;
        }
      }
    }
  }
}

:global(html.dark .update-container),
:global(.dark .update-container) {
  --update-bg: var(--panel-bg, #1e1e1e);
  --update-header-bg: linear-gradient(180deg, rgb(42 42 42 / 96%), rgb(32 32 32 / 92%));
  --update-footer-bg: rgb(32 32 32 / 94%);
  --update-card-bg: rgb(36 36 36 / 96%);
  --update-soft-bg: rgb(42 42 42 / 92%);
  --update-border: rgb(255 255 255 / 8%);
  --update-border-strong: rgb(255 255 255 / 12%);
  --update-text: var(--panel-text, #e5e7eb);
  --update-text-muted: var(--panel-text-secondary, #9ca3af);
  --update-hover-bg: var(--panel-hover-bg, #2a2a2a);
  --update-shadow: 0 18px 48px rgb(0 0 0 / 34%);
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
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
