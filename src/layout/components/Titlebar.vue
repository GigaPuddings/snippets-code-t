<template>
  <main
    data-tauri-drag-region
    :class="[activeTabIndex !== 2 ? 'gradient titlebar' : 'titlebar']"
  >
    <!-- 左侧：品牌 + 版本号；宽屏时含导航 -->
    <div class="titlebar-left" data-tauri-drag-region>
      <img src="@/assets/128x128.png" alt="" class="titlebar-logo" data-tauri-drag-region />
      <span class="titlebar-app-name" data-tauri-drag-region>{{ state.appName }}</span>
      <!-- <span class="titlebar-app-version">{{ state.appVersion }}</span> -->
      <div v-show="!isNarrow" class="titlebar-nav">
        <SegmentedToggle
          v-model="activeTabIndex"
          :items="visibleTabs"
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

    <!-- 中间：快捷搜索入口 -->
    <div
      class="titlebar-center"
      :class="{ 'titlebar-center--drag-only': hideQuickSearch }"
      data-tauri-drag-region
    >
      <button
        v-show="!hideQuickSearch"
        class="titlebar-quick-search"
        type="button"
        :title="$t('titlebar.quickSearch')"
        :aria-label="$t('titlebar.quickSearch')"
        @mousedown.stop
        @click.stop="openConfigQuickSearch"
      >
        <search class="quick-search-icon" theme="outline" size="15" :strokeWidth="3" />
        <span class="quick-search-placeholder">{{ $t('titlebar.quickSearchPlaceholder') }}</span>
        <span class="quick-search-shortcut">Ctrl K</span>
      </button>
    </div>

    <!-- 右侧：插件动作、置顶窗口 + 更多；其余进更多面板 -->
    <div class="titlebar-right">
      <!-- 非窄屏时：显示插件动作、置顶 -->
      <template v-if="!isNarrow">
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
            <!-- 窄屏时更多里才显示插件动作 / 置顶 -->
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
  <ConfigQuickSearch v-model="quickSearchVisible" />
</template>

<script setup lang="ts">
import {
  Pushpin,
  Pin,
  Minus,
  SquareSmall,
  CloseSmall,
  UpdateRotation,
  SettingTwo,
  Me,
  MoreOne,
  Search,
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
import ConfigQuickSearch from '@/components/ConfigQuickSearch/index.vue';
import { useLayoutStore, usePluginStore } from '@/store';
import { configNavigationTabs } from '@/plugins/navigation';

const { t } = useI18n();
const layoutStore = useLayoutStore();
const pluginStore = usePluginStore();

/** 窄屏/最小窗口断点：小于等于此宽度时 左侧仅应用名+版本、导航居中、右侧仅折叠菜单+窗口控制 */
const TITLEBAR_NARROW_BREAKPOINT = 720;
const TITLEBAR_SEARCH_BREAKPOINT = 980;

const isNarrow = computed(() => layoutStore.windowWidth <= TITLEBAR_NARROW_BREAKPOINT);
const hideQuickSearch = computed(() => layoutStore.windowWidth <= TITLEBAR_SEARCH_BREAKPOINT);

// 窄屏下拉菜单 ref，用于在 isNarrow 变为 false 时主动关闭
const moreDropdownRef = ref();

// 窗口拉大时（isNarrow false），如果下拉菜单开着则关闭
watch(isNarrow, (narrow) => {
  if (!narrow && moreDropdownRef.value) {
    moreDropdownRef.value.hide?.();
  }
});

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
const quickSearchVisible = ref(false);

// 当前激活的tab索引
const activeTabIndex = ref(0);

const visibleTabs = computed(() => (
  configNavigationTabs.filter((tab) => !tab.pluginId || pluginStore.isEnabled(tab.pluginId))
));

// 根据当前路由设置激活的tab
const setActiveTabFromRoute = () => {
  const currentPath = router.currentRoute.value.path;
  const index = visibleTabs.value.findIndex((tab) => currentPath.startsWith(tab.path));
  if (index !== -1) {
    activeTabIndex.value = index;
  }
};

const navigateTo = (path: string) => {
  router.push(path).catch((error) => {
    console.warn('[Titlebar] navigation failed:', error);
  });
};

// 切换Tab并跳转路由
const handleTabChange = (index: number) => {
  if (visibleTabs.value[index]) {
    navigateTo(visibleTabs.value[index].path);
  }
};

const handleUpdateClick = async () => {
  if (hasUpdate.value) {
    await invoke('hotkey_update_command');
  } else {
    await invoke('check_update_manually');
  }
};

const openConfigQuickSearch = () => {
  quickSearchVisible.value = true;
};

const handleGlobalKeydown = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openConfigQuickSearch();
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
  navigateTo('/config/category/settings');
};

// 跳转到个人中心
const goToUserCenter = () => {
  navigateTo('/config/category/contentList/user');
};

/** 窄屏折叠菜单命令 */
const handleMoreMenuCommand = (command: string) => {
  switch (command) {
    case 'userCenter':
      goToUserCenter();
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
  await pluginStore.initialize();
  state.appName = appName;
  state.appVersion = appVersion;

  // 检查是否有更新
  hasUpdate.value = await invoke('get_update_status');
  window.addEventListener('keydown', handleGlobalKeydown);

  // 监听更新状态变化
  unListen = await listen('update-available', (event: any) => {
    hasUpdate.value = event.payload;
  });

  // 设置初始激活的tab
  setActiveTabFromRoute();

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
  window.removeEventListener('keydown', handleGlobalKeydown);
});
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply relative flex items-center justify-between rounded-t-md w-full h-10 leading-10 select-none pr-1 gap-1;

  z-index: 50;
  min-width: 0; /* 允许 flex 子项收缩 */
  cursor: grab;
  background-color: rgba(var(--categories-panel-bg-rgb), 0.9);
  border-bottom: 1px solid rgba(var(--categories-border-color-rgb), 0.3);
  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);

  &:active {
    cursor: grabbing;
  }
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

/* 左侧：品牌 + 导航，可在小窗口内让应用名收缩 */
.titlebar-left {
  @apply flex items-center gap-2 text-slate-800 dark:text-panel pl-1;
  flex: 0 1 auto;
  min-width: 0;
  text-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.titlebar-logo {
  @apply w-6 h-6 flex-shrink-0;
}

.titlebar-app-name {
  @apply text-lg;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.titlebar-app-version {
  @apply text-sm text-stone-300 mt-1 flex-shrink-0;
}

.titlebar-nav {
  @apply flex items-center flex-shrink-0 ml-2;
  cursor: default;
}

/* 中间：快捷搜索入口，占据剩余空间并可收缩 */
.titlebar-center {
  @apply flex items-center justify-center overflow-hidden;

  flex: 0 1 360px;
  min-width: 0;
  max-width: 34vw;

  &--drag-only {
    flex: 1 1 96px;
    align-self: stretch;
    min-width: 48px;
  }
}

.titlebar-quick-search {
  @apply inline-flex items-center rounded-md border bg-panel px-3;
  width: 100%;
  max-width: 360px;
  height: 30px;
  min-width: 0;
  cursor: text;
  border-color: rgba(var(--categories-border-color-rgb), 0.72);
  box-shadow: 0 1px 2px rgb(15 23 42 / 4%);
  color: rgba(var(--categories-text-color-rgb), 0.7);
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    background-color 0.16s ease;

  &:hover {
    border-color: var(--search-result-active-border);
    background-color: var(--search-soft-bg);
    box-shadow: 0 0 0 2px rgb(95 116 243 / 8%);
  }
}

.quick-search-icon {
  flex-shrink: 0;
  color: rgba(var(--categories-text-color-rgb), 0.5);
}

.quick-search-placeholder {
  @apply truncate text-left;
  flex: 1;
  min-width: 0;
  margin-left: 8px;
  font-size: 12px;
  color: var(--categories-info-text-color);
}

.quick-search-shortcut {
  @apply flex-shrink-0 rounded;
  margin-left: 10px;
  padding: 1px 5px;
  color: var(--categories-info-text-color);
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  background-color: rgba(var(--categories-border-color-rgb), 0.28);
}

/* 右侧：操作按钮 + 窗口控制，不收缩 */
.titlebar-right {
  @apply flex h-full items-center;
  flex: 0 0 auto;
  gap: 4px;
  padding-right: 4px;
}

.titlebar-button {
  @apply leading-4 relative flex items-center justify-center rounded-md overflow-hidden;
  min-width: 32px;
  min-height: 32px;
  cursor: pointer;
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

/* 窄屏（≤880px）：缩小间距 */
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

  .titlebar-center {
    flex-basis: 280px;
    max-width: 30vw;
  }

  .quick-search-shortcut {
    display: none;
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
