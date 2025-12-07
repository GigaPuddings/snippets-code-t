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
import { reactive, onMounted, onUnmounted } from 'vue';
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
  console.log('[ProgressContent] 组件已挂载，开始监听事件');
  state.stage = t('progress.preparing');

  // 1. 启动轮询（作为兜底方案）
  pollTimer = setInterval(async () => {
    try {
      const backendState = await invoke<BackendProgressState>('get_scan_progress_state');
      // console.log('[ProgressContent] 轮询状态:', backendState);
      
      if (backendState.completed) {
        if (!state.completed) {
            handleComplete(backendState.apps_count, backendState.bookmarks_count);
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
  }>('scan-complete', (event) => {
    // console.log('[ProgressContent] 收到完成事件', event.payload);
    handleComplete(event.payload.appsCount, event.payload.bookmarksCount);
  });
});

const handleComplete = (appsCount: number, bookmarksCount: number) => {
    if (state.completed) return;
    
    state.completed = true;
    state.percent = 100;
    state.total = 0; // 隐藏进度详情
    state.stage = t('progress.scanComplete', {
      apps: appsCount,
      bookmarks: bookmarksCount
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
  background: linear-gradient(135deg, rgb(93 109 253 / 15%) 0%, rgb(147 51 234 / 15%) 100%);
  
  :deep(svg) {
    animation: spin 1.2s linear infinite;
  }
  
  &.completed {
    background: linear-gradient(135deg, rgb(16 185 129 / 15%) 0%, rgb(52 211 153 / 15%) 100%);
    
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
  @apply text-sm font-semibold text-gray-800 dark:text-gray-100;
}

.close-btn {
  @apply flex items-center justify-center w-6 h-6 rounded-lg transition-all;
  @apply text-gray-400 hover:text-gray-600 hover:bg-gray-100;
  @apply dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700/50;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.progress-body {
  @apply space-y-2;
}

.progress-info {
  @apply flex justify-between items-center;
}

.progress-stage {
  @apply text-xs text-gray-500 dark:text-gray-400 truncate;
  max-width: 180px;
}

.progress-percent {
  @apply text-sm font-bold;
  background: linear-gradient(135deg, #5d6dfd 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.progress-bar-container {
  @apply w-full h-2 bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.progress-bar {
  @apply h-full rounded-full transition-all duration-500 ease-out;
  background: linear-gradient(90deg, #5d6dfd 0%, #9333ea 50%, #ec4899 100%);
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.progress-detail {
  @apply flex justify-end text-xs text-gray-400 dark:text-gray-500;
}

.item-count {
  @apply flex-shrink-0 font-medium;
}
</style>
