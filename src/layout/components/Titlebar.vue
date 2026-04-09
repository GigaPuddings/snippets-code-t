<template>
  <main
    data-tauri-drag-region
    :class="[activeTabIndex !== 2 ? 'gradient titlebar' : 'titlebar']"
  >
    <!-- 左侧：品牌 + 版本号；宽屏时含导航 -->
    <div class="titlebar-left">
      <img src="@/assets/128x128.png" alt="" class="titlebar-logo" />
      <span class="titlebar-app-name">{{ state.appName }}</span>
      <!-- <span class="titlebar-app-version">{{ state.appVersion }}</span> -->
      <div v-show="!isNarrow" class="titlebar-nav">
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

    <!-- 中间：仅宽屏显示面包屑；窄屏/最小宽度(≤720) 不显示中间导航（与左侧导航二选一已取消，窄屏仅保留拖拽区） -->
    <div class="titlebar-center" data-tauri-drag-region>
      <div v-show="!isNarrow" class="titlebar-center-inner">
        <slot></slot>
      </div>
    </div>

    <!-- 右侧：仅保留 Git 同步、置顶窗口 + 更多；其余进更多面板 -->
    <div class="titlebar-right">
      <!-- 非窄屏时：仅显示 Git、置顶 -->
      <template v-if="!isNarrow">
        <div
          v-if="showGitIndicator"
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
          <branch v-else class="icon" theme="outline" size="16" :strokeWidth="3" />
          <span v-if="syncState === 'has_changes'" class="git-badge">{{ pendingFilesCount }}</span>
          <span v-if="formattedLastSyncTime && syncState !== 'syncing'" class="git-time">{{ formattedLastSyncTime }}</span>
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
      </template>

      <!-- 面板折叠控制按钮：仅在 config 且窗口足够宽时显示，分类/列表按钮分别按宽度阈值显示，避免窄屏时可见却无法展开 -->
      <!-- <div v-if="showPanelToggle" class="panel-toggle-group">
        <div
          v-if="layoutStore.isWideEnoughForCategoryPanel"
          class="titlebar-button"
          :title="layoutStore.categoryPanelCollapsed ? $t('titlebar.expandFolders') : $t('titlebar.collapseFolders')"
          :aria-label="layoutStore.categoryPanelCollapsed ? $t('titlebar.expandFolders') : $t('titlebar.collapseFolders')"
          @click="layoutStore.toggleCategoryPanel()"
        >
          <menu-fold-one
            v-if="!layoutStore.categoryPanelCollapsed"
            class="icon"
            theme="outline"
            size="16"
            :strokeWidth="3"
          />
          <menu-unfold-one
            v-else
            class="icon"
            theme="outline"
            size="16"
            :strokeWidth="3"
          />
        </div>
        <div
          v-if="layoutStore.isWideEnoughForContentListPanel"
          class="titlebar-button"
          :title="layoutStore.contentListPanelCollapsed ? $t('titlebar.expandSnippetList') : $t('titlebar.collapseSnippetList')"
          :aria-label="layoutStore.contentListPanelCollapsed ? $t('titlebar.expandSnippetList') : $t('titlebar.collapseSnippetList')"
          @click="layoutStore.toggleContentListPanel()"
        >
          <view-list class="icon" theme="outline" size="16" :strokeWidth="3" />
        </div>
      </div> -->

      <!-- 更多选项：非窄屏=个人中心/检查更新/设置；窄屏=全部 5 项 -->
      <el-dropdown
        ref="moreDropdownRef"
        trigger="click"
        placement="bottom-end"
        :teleported="true"
        @command="handleMoreMenuCommand"
      >
        <div
          class="titlebar-button titlebar-button--more"
          :title="$t('titlebar.more')"
          :aria-label="$t('titlebar.more')"
        >
          <more-one class="icon" theme="outline" size="18" :strokeWidth="3" />
          <span v-if="hasUpdate" class="update-dot"></span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="userCenter">
              <me theme="outline" size="16" :strokeWidth="3" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.userCenter') }}</span>
            </el-dropdown-item>
            <!-- 窄屏时更多里才显示 Git / 置顶 -->
            <el-dropdown-item v-if="showGitIndicator && isNarrow" command="gitSettings">
              <branch theme="outline" size="16" :strokeWidth="3" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.gitSync') }}</span>
              <span v-if="syncState === 'has_changes'" class="git-badge ml-1">{{ pendingFilesCount }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="checkUpdate">
              <update-rotation theme="outline" size="16" :strokeWidth="3" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.checkUpdate') }}</span>
              <span v-if="hasUpdate" class="update-dot-inline"></span>
            </el-dropdown-item>
            <el-dropdown-item v-if="isNarrow" command="pinWindow">
              <component :is="isAlwaysOnTop ? Pushpin : Pin" theme="outline" size="16" :strokeWidth="3" class="align-middle" />
              <span class="ml-2">{{ isAlwaysOnTop ? $t('titlebar.unpinWindow') : $t('titlebar.pinWindow') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="settings">
              <setting-two theme="outline" size="16" :strokeWidth="3" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.settings') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

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
  Loading,
  MoreOne,
  // ViewList,
  // MenuFoldOne,
  // MenuUnfoldOne
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, UnlistenFn } from '@tauri-apps/api/event';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SegmentedToggle from '@/components/SegmentedToggle/index.vue';
import { useGitStatus, setupGitStatusListener, initWorkspaceChangeListener, cleanupGitStatusListener } from '@/hooks/useGitStatus';
import { useLayoutStore } from '@/store';

const { t } = useI18n();
const layoutStore = useLayoutStore();

/** 窄屏/最小窗口断点：小于等于此宽度时 左侧仅应用名+版本、导航居中、右侧仅折叠菜单+窗口控制 */
const TITLEBAR_NARROW_BREAKPOINT = 720;

const isNarrow = computed(() => layoutStore.windowWidth <= TITLEBAR_NARROW_BREAKPOINT);

// 窄屏下拉菜单 ref，用于在 isNarrow 变为 false 时主动关闭
const moreDropdownRef = ref();

// 窗口拉大时（isNarrow false），如果下拉菜单开着则关闭
watch(isNarrow, (narrow) => {
  if (!narrow && moreDropdownRef.value) {
    moreDropdownRef.value.hide?.();
  }
});

// Git 状态
const {
  syncState,
  pendingFilesCount,
  formattedLastSyncTime,
  refreshStatus,
  refreshSettings,
  stateDescription,
  gitSettings
} = useGitStatus();

/** 启用 Git 同步时显示标题栏指示器；仅在有错误时隐藏，其余状态（就绪/空闲/已同步/有变更/同步中）均显示 */
const showGitIndicator = computed(
  () => !!gitSettings.value?.enabled && syncState.value !== 'error'
);

/** 仅在配置页面（/config）且窗口非窄屏时显示面板折叠区域；单个按钮再按宽度阈值显示，避免窄屏时按钮可见却无法展开 */
// const showPanelToggle = computed(
//   () =>
//     router.currentRoute.value.path.startsWith('/config') &&
//     !isNarrow.value &&
//     (layoutStore.isWideEnoughForCategoryPanel || layoutStore.isWideEnoughForContentListPanel)
// );

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

/** 窄屏折叠菜单命令 */
const handleMoreMenuCommand = (command: string) => {
  switch (command) {
    case 'userCenter':
      goToUserCenter();
      break;
    case 'gitSettings':
      goToGitSettings();
      break;
    case 'checkUpdate':
      handleUpdateClick();
      break;
    case 'pinWindow':
      handleTitlebar('isAlwaysOnTop');
      break;
    case 'settings':
      openSettingsDialog();
      break;
  }
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

  // 初始化 Git 状态监听
  // setupGitStatusListener() 会监听 pull/push/sync-complete 事件
  // initWorkspaceChangeListener() 监听工作区变化，文件修改时自动刷新 Git 状态
  setupGitStatusListener();
  initWorkspaceChangeListener(refreshStatus);
  await refreshSettings();
  await refreshStatus();
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
});
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply relative flex items-center rounded-t-md w-full h-10 leading-10 select-none pr-1 gap-1;

  z-index: 50;
  min-width: 0; /* 允许 flex 子项收缩 */
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

/* 左侧：品牌 + 导航，不收缩 */
.titlebar-left {
  @apply flex items-center gap-2 text-slate-800 dark:text-panel pl-1 flex-shrink-0;
  text-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.titlebar-logo {
  @apply w-6 h-6 flex-shrink-0;
}

.titlebar-app-name {
  @apply text-lg flex-shrink-0;
}

.titlebar-app-version {
  @apply text-sm text-stone-300 mt-1 flex-shrink-0;
}

.titlebar-nav {
  @apply flex items-center flex-shrink-0 ml-2;
}

/* 中间：当前页标签/面包屑，占据剩余空间并可收缩省略 */
.titlebar-center {
  flex: 1 1 0;
  min-width: 0;
  @apply flex items-center justify-center overflow-hidden;
}

.titlebar-center-inner {
  @apply overflow-hidden text-ellipsis whitespace-nowrap max-w-full;
  min-width: 0;
  color: rgba(var(--categories-text-color-rgb), 0.85);
  font-size: 13px;
}

/* 右侧：操作按钮 + 窗口控制，不收缩 */
.titlebar-right {
  @apply flex h-full items-center flex-shrink-0;
  gap: 4px;
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

.panel-toggle-group {
  @apply flex items-center;
  gap: 2px;
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

/* 窄屏（≤880px）：缩小间距，Git 仅显示图标与角标 */
@media (max-width: 880px) {
  .titlebar {
    gap: 2px;
  }

  .titlebar-left {
    gap: 6px;
  }

  .titlebar-nav {
    margin-left: 6px;
  }

  .titlebar-right {
    gap: 2px;
  }

  .git-status-indicator .git-time {
    display: none;
  }

  .git-status-indicator {
    padding-left: 6px;
    padding-right: 6px;
    min-width: 28px;
    justify-content: center;
  }
}

/* 极窄屏（≤640px）：应用名可截断；窄屏布局由 isNarrow 控制，此处仅保留版本号 */
@media (max-width: 640px) {
  .titlebar-app-name {
    max-width: 7em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* 下拉菜单内更新角标 */
.update-dot-inline {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 4px;
  border-radius: 50%;
  background-color: #5d6dfd;
  vertical-align: middle;
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
