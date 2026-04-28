<template>
  <div class="progress-content">
    <div class="notification-header">
      <div class="header-left">
        <div class="icon-wrapper" :class="{ completed: state.completed }">
          <Loading v-if="!state.completed" theme="outline" size="18" fill="#5d6dfd" :strokeWidth="3" />
          <CheckOne v-else theme="filled" size="18" fill="#10b981" :strokeWidth="2" />
        </div>
        <h2 class="title">{{ state.completed ? $t('progress.completed') : $t('progress.title') }}</h2>
      </div>
      <button class="close-btn" @click="closeWindow" :title="$t('common.close')">
        <CloseSmall theme="outline" size="16" fill="currentColor" />
      </button>
    </div>
    
    <div class="progress-body">
      <div class="progress-info">
        <span class="progress-stage">{{ state.stage }}</span>
        <span class="progress-percent">{{ state.percent }}%</span>
      </div>
      
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: state.percent + '%' }"></div>
      </div>
      
      <div class="progress-detail" v-if="state.total > 0">
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
  stage: string;
  current: number;
  total: number;
  percent: number;
  currentItem: string;
  completed: boolean;
}

interface BackendProgressState {
  stage: string;
  current: number;
  total: number;
  current_item: string;
  completed: boolean;
  apps_count: number;
  bookmarks_count: number;
  desktop_files_count: number;
}

const state = reactive<ProgressState>({
  stage: t('progress.preparing'),
  current: 0,
  total: 0,
  percent: 0,
  currentItem: '',
  completed: false
});

let unlistenProgress: UnlistenFn | null = null;
let unlistenComplete: UnlistenFn | null = null;
let pollTimer: any = null;

onMounted(async () => {
  state.stage = t('progress.preparing');

  // 1. 启动轮询（作为兜底方案）
  pollTimer = setInterval(async () => {
    try {
      const backendState = await invoke<BackendProgressState>('get_scan_progress_state');
      // console.log('[ProgressContent] 轮询状态:', backendState);
      
      if (backendState.completed) {
        if (!state.completed) {
            handleComplete(backendState.apps_count, backendState.bookmarks_count, backendState.desktop_files_count);
        }
      } else if (backendState.total > 0) {
        // 更新进度
        state.stage = backendState.stage;
        state.current = backendState.current;
        state.total = backendState.total;
        state.currentItem = backendState.current_item;
        state.percent = Math.round((backendState.current / backendState.total) * 100);
      }
    } catch (e) {
      console.error('获取进度状态失败:', e);
    }
  }, 100);

  // 2. 同时也保留事件监听，以获得更流畅的体验（如果工作的话）
  unlistenProgress = await listen<{
    stage: string;
    current: number;
    total: number;
    currentItem: string;
  }>('scan-progress', (event) => {
    // console.log('[ProgressContent] 收到进度事件', event.payload);
    state.stage = event.payload.stage;
    state.current = event.payload.current;
    state.total = event.payload.total;
    state.currentItem = event.payload.currentItem || '';
    state.percent = event.payload.total > 0 ? Math.round((event.payload.current / event.payload.total) * 100) : 0;
  });

  unlistenComplete = await listen<{
    appsCount: number;
    bookmarksCount: number;
    desktopFilesCount: number;
  }>('scan-complete', (event) => {
    // console.log('[ProgressContent] 收到完成事件', event.payload);
    handleComplete(event.payload.appsCount, event.payload.bookmarksCount, event.payload.desktopFilesCount);
  });
});

const handleComplete = (appsCount: number, bookmarksCount: number, desktopFilesCount: number) => {
    if (state.completed) return;
    
    state.completed = true;
    state.percent = 100;
    state.total = 0; // 隐藏进度详情
    state.stage = t('progress.scanComplete', {
      apps: appsCount,
      bookmarks: bookmarksCount,
      desktopFiles: desktopFilesCount
    });
    state.currentItem = '';
    
    // 停止轮询
    if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
    }
    // 由用户自主关闭窗口
};

onUnmounted(() => {
  unlistenProgress?.();
  unlistenComplete?.();
  if (pollTimer) {
      clearInterval(pollTimer);
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
  background: var(--el-fill-color-light);
  color: var(--el-color-primary);
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
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.title {
  @apply text-sm font-semibold;
  color: var(--el-text-color-primary);
}

.close-btn {
  @apply flex items-center justify-center w-6 h-6 rounded-lg transition-all;
  color: var(--el-text-color-secondary);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;

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
  @apply text-xs truncate;
  color: var(--el-text-color-secondary);
  max-width: 180px;
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
</style>
