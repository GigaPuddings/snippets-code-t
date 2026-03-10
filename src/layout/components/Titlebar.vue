<template>
  <main
    data-tauri-drag-region
    :class="[activeTabIndex !== 2 ? 'gradient titlebar' : 'titlebar']"
  >
    <div class="titlebar-title">
      <div class="flex items-center gap-2">
        <img src="@/assets/128x128.png" alt="" class="w-6 h-6" />
        <div class="text-lg -ml-1">{{ state.appName }}</div>
        <span class="text-sm text-stone-300 -ml-1 mt-1">{{ state.appVersion }}</span>
        <!-- 导航栏 -->
        <div class="nav-bar-wrapper">
          <SegmentedToggle
            v-model="activeTabIndex"
            :items="tabs"
            @change="handleTabChange"
          >
            <template #item="scope">
              <component
                :is="scope.item.icon"
                class="text-panel"
                theme="outline"
                size="18"
                :strokeWidth="3"
              />
            </template>
          </SegmentedToggle>
        </div>
      </div>
      <slot></slot>
    </div>
    <!-- 标题栏按钮 -->
    <div class="titlebar-list">
      <!-- 个人中心 -->
      <div
        class="titlebar-button"
        @click="goToUserCenter"
        :title="$t('titlebar.userCenter')"
        :aria-label="$t('titlebar.userCenter')"
      >
        <me
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
      </div>

      <div class="titlebar-divider"></div>

      <!-- Git 同步状态指示器 -->
      <div
        v-if="syncState !== 'disabled'"
        class="git-status-indicator"
        :class="`git-status-${syncState}`"
        :title="stateDescription"
        @click="goToGitSettings"
      >
        <loading
          v-if="syncState === 'syncing'"
          class="icon git-sync-icon"
          theme="outline"
          size="16"
          :strokeWidth="3"
        />
        <branch
          v-else
          class="icon"
          theme="outline"
          size="16"
          :strokeWidth="3"
        />
        <span v-if="syncState === 'has_changes'" class="git-badge">
          {{ pendingFilesCount }}
        </span>
        <span v-if="formattedLastSyncTime && syncState !== 'syncing'" class="git-time">
          {{ formattedLastSyncTime }}
        </span>
      </div>
      
      <div 
        class="titlebar-button titlebar-button--update" 
        @click="handleUpdateClick" 
        :title="$t('titlebar.checkUpdate')" 
        :aria-label="$t('titlebar.checkUpdate')"
      >
        <update-rotation
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
        <div v-if="hasUpdate" class="update-dot"></div>
      </div>
      
      <div
        class="titlebar-button"
        @click="handleTitlebar('isAlwaysOnTop')"
        :title="isAlwaysOnTop ? $t('titlebar.unpinWindow') : $t('titlebar.pinWindow')"
        :aria-label="$t('titlebar.pinWindow')"
      >
        <component
          :is="isAlwaysOnTop ? Pushpin : Pin"
          class="icon"
          :class="{ 'icon-active': isAlwaysOnTop }"
          size="18"
          :strokeWidth="3"
          theme="outline"
          strokeLinecap="butt"
        />
      </div>
      
      <div
        class="titlebar-button"
        @click="openSettingsDialog"
        :title="$t('titlebar.settings')"
        :aria-label="$t('titlebar.settings')"
      >
        <setting-two
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      
      <div class="titlebar-divider titlebar-divider--thick"></div>
      
      <div
        class="titlebar-button titlebar-button--window"
        @click="handleTitlebar('minimize')"
        :title="$t('titlebar.minimize')"
        :aria-label="$t('titlebar.minimize')"
      >
        <minus
          class="icon !p-[2px]"
          theme="outline"
          size="20"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="titlebar-button titlebar-button--window"
        @click="handleTitlebar('maximize')"
        :title="title"
        :aria-label="title"
      >
        <square-small
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="titlebar-button titlebar-button--close"
        @click="handleTitlebar('close')"
        :title="$t('titlebar.close')"
        :aria-label="$t('titlebar.close')"
      >
        <close-small
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  Pushpin,
  Pin,
  Minus,
  SquareSmall,
  CloseSmall,
  UpdateRotation,
  BookOpen,
  SettingTwo,
  MessageSearch,
  Notepad,
  Application,
  Me,
  Branch,
  Loading
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, UnlistenFn } from '@tauri-apps/api/event';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SegmentedToggle from '@/components/SegmentedToggle/index.vue';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useGitStatus, setupGitStatusListener, initWorkspaceChangeListener, cleanupGitStatusListener } from '@/hooks/useGitStatus';
import { logger } from '@/utils/logger';

const { t } = useI18n();

// Git 状态
const {
  syncState,
  pendingFilesCount,
  formattedLastSyncTime,
  refreshStatus,
  refreshSettings,
  stateDescription
} = useGitStatus();

defineOptions({
  name: 'Titlebar'
});

const router = useRouter();
const isMaximized = ref(false);
type WindowAction = 'isAlwaysOnTop' | 'minimize' | 'maximize' | 'close';

const isAlwaysOnTop = ref<boolean>(false);

const state = reactive({
  appName: '',
  appVersion: ''
});

const hasUpdate = ref(false);

// 当前激活的tab索引
const activeTabIndex = ref(0);

interface TabItem {
  icon: any;
  path: string;
}

const tabs: TabItem[] = [
  // 片段
  {
    icon: BookOpen,
    path: '/config/category/contentList'
  },
  // 本地应用、浏览器书签
  {
    icon: Application,
    path: '/config/local'
  },
  // 引擎搜索
  {
    icon: MessageSearch,
    path: '/config/retrieve'
  },
  // 待办
  {
    icon: Notepad,
    path: '/config/todo'
  }
];

// 根据当前路由设置激活的tab
const setActiveTabFromRoute = () => {
  const currentPath = router.currentRoute.value.path;
  const index = tabs.findIndex((tab) => currentPath.startsWith(tab.path));
  if (index !== -1) {
    activeTabIndex.value = index;
  }
};

// 切换Tab并跳转路由
const handleTabChange = (index: number) => {
  if (tabs[index]) {
    router.push(tabs[index].path);
  }
};

const handleUpdateClick = async () => {
  if (hasUpdate.value) {
    await invoke('hotkey_update_command');
  } else {
    // 手动检查更新
    const hasNewUpdate = await invoke('check_update_manually');
    if (hasNewUpdate) {
      await invoke('hotkey_update_command');
    }
  }
};

// 最大化按钮标题
const title = computed(() => {
  return isMaximized.value ? t('titlebar.restore') : t('titlebar.maximize');
});

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
    isMaximized.value = !maximized;
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

// 打开设置页面
const openSettingsDialog = () => {
  router.push('/config/category/settings');
};

// 跳转到个人中心
const goToUserCenter = () => {
  router.push('/config/category/contentList/user');
};

// 跳转到 Git 设置页面
const goToGitSettings = () => {
  router.push('/config/category/settings?tab=gitSync');
};

let unListen: UnlistenFn;

onMounted(async () => {
  await initEnv();
  state.appName = appName;
  state.appVersion = appVersion;

  // 检查是否有更新
  hasUpdate.value = await invoke('get_update_status');

  // 监听更新状态变化
  unListen = await listen('update-available', (event: any) => {
    hasUpdate.value = event.payload;
  });

  // 设置初始激活的tab
  setActiveTabFromRoute();

  // 获取当前窗口 label
  const winLabel = getCurrentWindow().label;
  logger.info('[Titlebar] 当前窗口 label', { winLabel });

  // 初始化 Git 状态监听
  // setupGitStatusListener() 会监听 pull/push/sync-complete 事件
  // initWorkspaceChangeListener() 监听工作区变化，文件修改时自动刷新 Git 状态
  logger.info('[Titlebar] 开始初始化 Git 状态监听', {
    initialSyncState: syncState.value,
  });
  setupGitStatusListener();
  initWorkspaceChangeListener(refreshStatus);
  await refreshSettings();
  logger.info('[Titlebar] refreshSettings 完成', {
    syncState: syncState.value,
  });
  await refreshStatus();
  logger.info('[Titlebar] refreshStatus 完成', {
    syncState: syncState.value,
  });
});

// 监听路由变化，同步更新activeTabIndex
watch(
  () => router.currentRoute.value.path,
  () => {
    setActiveTabFromRoute();
  },
  { immediate: true }
);

onUnmounted(() => {
  if (unListen) {
    unListen();
  }
  // 清理 Git 状态监听
  cleanupGitStatusListener();
  logger.info('[Titlebar] 已卸载并清理 Git 状态监听');
});
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply relative flex justify-between items-center rounded-t-md w-full h-10 leading-10 select-none pr-1;

  z-index: 50;
  background-color: rgba(var(--categories-panel-bg-rgb), 0.9);
  border-bottom: 1px solid rgba(var(--categories-border-color-rgb), 0.3);
  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
}

.gradient {
  &::after {
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;
    height: 8px;
    pointer-events: none;
    content: '';
    background: linear-gradient(
      to bottom,
      rgba(var(--categories-panel-bg-rgb), 0.9),
      transparent
    );
  }
}

.titlebar-title {
  @apply text-slate-800 dark:text-panel pl-1 flex items-center;

  text-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.titlebar-list {
  @apply flex h-full items-center;
  gap: 6px;
  padding-right: 4px;
}

.titlebar-button {
  @apply leading-4 relative flex items-center justify-center rounded-md overflow-hidden;
  min-width: 32px;
  min-height: 32px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(93, 109, 253, 0.08);
    
    .icon {
      color: #5d6dfd;
      background-color: transparent !important;
    }
  }
  
  &--update {
    &:hover .icon {
      @apply animate-spin;
      animation-duration: 1s;
      color: #5d6dfd;
      background-color: transparent !important;
    }
  }
  
  &--window {
    &:hover {
      background-color: rgba(93, 109, 253, 0.08);
      
      .icon {
        color: #5d6dfd;
        background-color: transparent !important;
      }
    }
  }
  
  &--close {
    &:hover {
      background-color: rgba(239, 68, 68, 0.1);
      
      .icon {
        color: #ef4444;
        background-color: transparent !important;
      }
    }
  }
  
  &:hover {
    .update-dot {
      @apply animate-none;
    }
  }
}

.titlebar-divider {
  @apply h-5 mx-1;
  width: 1px;
  background: rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
  
  &--thick {
    width: 1px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.15);
  }
}

// 暗色模式下的分隔线
.dark .titlebar-divider {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.05);
  
  &--thick {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.08);
  }
}

.icon {
  @include commonIcon;

  @apply p-1.5;
  font-size: 18px;
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(var(--categories-text-color-rgb), 0.85);
  transition: all 0.2s ease;

  &:hover {
    color: #5d6dfd;
    background-color: rgba(93, 109, 253, 0.08);
  }
  
  &.icon-active {
    color: #5d6dfd;
    background-color: rgba(93, 109, 253, 0.1);
    
    &:hover {
      background-color: rgba(93, 109, 253, 0.15);
    }
  }
}

.update-dot {
  @apply absolute top-0.5 right-0.5 w-[6px] h-[6px] rounded-full;
  background-color: #5d6dfd;
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.nav-bar-wrapper {
  @apply ml-4 flex items-center;
}

// Git 状态指示器样式
.git-status-indicator {
  @apply flex items-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-all;
  min-height: 28px;
  font-size: 12px;
  
  &:hover {
    background-color: rgba(93, 109, 253, 0.08);
  }
  
  .git-sync-icon {
    animation: spin 1s linear infinite;
  }
  
  .git-badge {
    @apply px-1.5 py-0.5 rounded-full text-white text-xs font-medium;
    background-color: #f59e0b;
  }
  
  .git-time {
    @apply text-xs;
    color: rgba(var(--categories-text-color-rgb), 0.6);
  }
  
  // 不同状态的样式
  &.git-status-syncing {
    color: #3b82f6;
    
    .git-sync-icon {
      animation: spin 1s linear infinite;
    }
  }
  
  &.git-status-synced {
    color: #10b981;
  }
  
  &.git-status-has_changes {
    color: #f59e0b;
    
    .git-badge {
      @apply flex items-center justify-center;
      min-width: 18px;
      height: 18px;
    }
  }
  
  &.git-status-error {
    color: #ef4444;
  }
  
  &.git-status-idle {
    color: rgba(var(--categories-text-color-rgb), 0.7);
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
    box-shadow: 0 0 0 0 rgba(93, 109, 253, 0.7);
    transform: scale(0.95);
  }

  70% {
    box-shadow: 0 0 0 6px rgba(93, 109, 253, 0);
    transform: scale(1);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(93, 109, 253, 0);
    transform: scale(0.95);
  }
}
</style>
