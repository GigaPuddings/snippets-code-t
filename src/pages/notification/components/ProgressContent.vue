<template>
  <div class="progress-content">
    <div class="notification-header">
      <div class="header-left">
        <div class="icon-wrapper" :class="{ completed: state.completed }">
          <Loading
            v-if="!state.completed"
            theme="outline"
            size="18"
            fill="#5d6dfd"
            :strokeWidth="3"
          />
          <CheckOne
            v-else
            theme="filled"
            size="18"
            fill="#10b981"
            :strokeWidth="2"
          />
        </div>
        <h2 class="title">
          {{
            state.completed ? $t('progress.completed') : $t('progress.title')
          }}
        </h2>
      </div>
      <button
        class="close-btn"
        @click="closeWindow"
        :title="$t('common.close')"
      >
        <CloseSmall theme="outline" size="16" fill="currentColor" />
      </button>
    </div>

    <div class="progress-body" :class="{ completed: state.completed }">
      <div class="progress-info">
        <span class="progress-stage">{{ state.stage }}</span>
        <span class="progress-percent">{{ state.percent }}%</span>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: state.percent + '%' }"></div>
      </div>

      <div v-if="!state.completed && state.total > 0" class="progress-detail">
        <span class="item-count">{{ state.current }} / {{ state.total }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loading, CheckOne, CloseSmall } from '@icon-park/vue-next';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 关闭窗口
const closeWindow = async () => {
  try {
    await getCurrentWindow().close();
  } catch (e) {
    console.error('关闭窗口失败:', e);
  }
};

interface ProgressState {
  owner: string;
  task: string;
  stage: string;
  current: number;
  total: number;
  percent: number;
  currentItem: string;
  completed: boolean;
}

interface BackendProgressState {
  owner: string;
  task: string;
  stage: string;
  current: number;
  total: number;
  current_item: string;
  completed: boolean;
  apps_count: number;
  bookmarks_count: number;
  desktop_files_count: number;
}

interface ProgressPayload {
  owner: string;
  task: string;
  stage: string;
  current: number;
  total: number;
  currentItem?: string;
}

interface CompletePayload {
  owner: string;
  appsCount: number;
  bookmarksCount: number;
  desktopFilesCount: number;
}

const state = reactive<ProgressState>({
  owner: '',
  task: '',
  stage: t('progress.preparing'),
  current: 0,
  total: 0,
  percent: 0,
  currentItem: '',
  completed: false
});

let unlistenProgress: UnlistenFn | null = null;
let unlistenComplete: UnlistenFn | null = null;
let unlistenCancelled: UnlistenFn | null = null;
let pollTimer: ReturnType<typeof setInterval> | null = null;
let progressEventVersion = 0;

const getLocalizedStage = (stage: string, task: string) => {
  if (task === 'icons') return t('progress.loadingIcons');

  const normalized = stage.toLocaleLowerCase();
  if (normalized.includes('保存') || normalized.includes('saving')) {
    return t('progress.savingToDatabase');
  }
  if (normalized.includes('书签') || normalized.includes('bookmark')) {
    return t('progress.scanningBookmarks');
  }
  if (normalized.includes('应用') || normalized.includes('application')) {
    return t('progress.scanningApps');
  }
  if (normalized.includes('桌面') || normalized.includes('desktop')) {
    return t('progress.scanningDesktopFiles');
  }
  return stage || t('progress.preparing');
};

const applyProgress = (payload: ProgressPayload) => {
  state.owner = payload.owner;
  state.task = payload.task;
  state.completed = false;
  state.stage = getLocalizedStage(payload.stage, payload.task);
  state.current = Math.max(0, payload.current);
  state.total = Math.max(0, payload.total);
  state.currentItem = payload.currentItem || '';
  state.percent =
    payload.total > 0
      ? Math.min(
          100,
          Math.max(0, Math.round((payload.current / payload.total) * 100))
        )
      : 0;
};

const handleComplete = (
  owner: string,
  appsCount: number,
  bookmarksCount: number,
  desktopFilesCount: number
) => {
  if (!state.completed && state.owner && owner && state.owner !== owner) {
    return;
  }

  const wasDesktopFileScan =
    desktopFilesCount > 0 && appsCount === 0 && bookmarksCount === 0;
  state.owner = owner;
  state.completed = true;
  state.percent = 100;
  state.current = 0;
  state.total = 0;
  state.stage = wasDesktopFileScan
    ? t('progress.desktopScanComplete', { desktopFiles: desktopFilesCount })
    : t('progress.scanComplete', {
        apps: appsCount,
        bookmarks: bookmarksCount,
        desktopFiles: desktopFilesCount
      });
  state.currentItem = '';
};

const hydrateProgressState = async () => {
  const versionBeforeHydration = progressEventVersion;
  try {
    const backendState = await invoke<BackendProgressState>(
      'get_scan_progress_state'
    );
    if (versionBeforeHydration !== progressEventVersion) return;

    if (backendState.completed && backendState.owner) {
      handleComplete(
        backendState.owner,
        backendState.apps_count,
        backendState.bookmarks_count,
        backendState.desktop_files_count
      );
    } else if (backendState.owner && backendState.stage) {
      applyProgress({
        owner: backendState.owner,
        task: backendState.task,
        stage: backendState.stage,
        current: backendState.current,
        total: backendState.total,
        currentItem: backendState.current_item
      });
    }
  } catch (error) {
    console.error('获取进度状态失败:', error);
  }
};

const pollProgressState = async () => {
  try {
    const backendState = await invoke<BackendProgressState>(
      'get_scan_progress_state'
    );
    if (backendState.completed && backendState.owner) {
      handleComplete(
        backendState.owner,
        backendState.apps_count,
        backendState.bookmarks_count,
        backendState.desktop_files_count
      );
    } else if (backendState.owner && backendState.stage) {
      applyProgress({
        owner: backendState.owner,
        task: backendState.task,
        stage: backendState.stage,
        current: backendState.current,
        total: backendState.total,
        currentItem: backendState.current_item
      });
    }
  } catch (error) {
    console.error('获取进度状态失败:', error);
  }
};

onMounted(async () => {
  state.stage = t('progress.preparing');

  [unlistenProgress, unlistenComplete, unlistenCancelled] = await Promise.all([
    listen<ProgressPayload>('scan-progress', (event) => {
      progressEventVersion += 1;
      // 新任务开始时必须退出旧的完成态，避免“完成”标题搭配进行中正文。
      applyProgress(event.payload);
    }),
    listen<CompletePayload>('scan-complete', (event) => {
      progressEventVersion += 1;
      handleComplete(
        event.payload.owner,
        event.payload.appsCount,
        event.payload.bookmarksCount,
        event.payload.desktopFilesCount
      );
    }),
    listen<{ owner: string }>('scan-cancelled', (event) => {
      if (state.owner && state.owner !== event.payload.owner) return;
      progressEventVersion += 1;
      void closeWindow();
    })
  ]);

  // 先建立监听，再恢复后端快照，避免窗口创建期间漏掉状态变化。
  await hydrateProgressState();
  pollTimer = setInterval(pollProgressState, 500);
});

onUnmounted(() => {
  unlistenProgress?.();
  unlistenComplete?.();
  unlistenCancelled?.();
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
});
</script>

<style scoped lang="scss">
.progress-content {
  @apply flex-1;
}

.notification-header {
  @apply flex justify-between items-center mb-3;
}

.header-left {
  @apply flex items-center gap-2.5;
}

.icon-wrapper {
  @apply flex items-center justify-center rounded-lg p-1.5;

  color: var(--el-color-primary);
  background: var(--el-fill-color-light);
  border: 1px solid var(--el-border-color);

  :deep(svg) {
    animation: spin 1.2s linear infinite;
  }

  &.completed {
    color: var(--el-color-success);

    :deep(svg) {
      animation: none;
    }
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

.title {
  @apply text-sm font-semibold;

  color: var(--el-text-color-primary);
}

.close-btn {
  @apply flex items-center justify-center w-6 h-6 rounded-lg transition-all;

  padding: 0;
  color: var(--el-text-color-secondary);
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    color: var(--el-text-color-primary);
    background: var(--el-fill-color-light);
  }
}

.progress-body {
  @apply space-y-2;
}

.progress-info {
  @apply flex justify-between items-center;
}

.progress-stage {
  @apply min-w-0 flex-1 text-xs truncate;

  color: var(--el-text-color-secondary);
}

.progress-percent {
  @apply text-sm font-bold;

  color: var(--el-color-primary);
}

.progress-bar-container {
  @apply w-full h-2 rounded-full overflow-hidden;

  background: var(--el-fill-color-light);
  border: 1px solid var(--el-border-color);
}

.progress-bar {
  @apply h-full rounded-full transition-all duration-500 ease-out;

  background: var(--el-color-primary);
}

.progress-detail {
  @apply flex justify-end text-xs;

  color: var(--el-text-color-secondary);
}

.item-count {
  @apply flex-shrink-0 font-medium;
}

.progress-body.completed {
  .progress-stage {
    @apply whitespace-normal break-words leading-4;
  }
}
</style>
