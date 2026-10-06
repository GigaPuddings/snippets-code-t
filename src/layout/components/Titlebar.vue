<template>
  <main
    data-tauri-drag-region
    class="titlebar ui-icon-scope"
    :class="{ 'titlebar--config': isConfigRoute }"
  >
    <nav
      v-if="isConfigRoute"
      class="flex h-full shrink-0 items-center gap-1 px-2"
      :aria-label="t('titlebar.navigation')"
      data-tauri-drag-region
    >
      <button
        type="button"
        class="ui-icon-button text-content disabled:opacity-30"
        :title="t('titlebar.back')"
        :aria-label="t('titlebar.back')"
        :disabled="!canGoBack"
        @click="router.back()"
      >
        <ArrowLeft theme="outline" size="18" />
      </button>
      <button
        type="button"
        class="ui-icon-button text-content disabled:opacity-30"
        :title="t('titlebar.forward')"
        :aria-label="t('titlebar.forward')"
        :disabled="!canGoForward"
        @click="router.forward()"
      >
        <ArrowRight theme="outline" size="18" />
      </button>
      <button
        v-if="showSidebarToggle"
        type="button"
        class="ui-icon-button text-content"
        :title="
          sidebarCollapsed
            ? t('titlebar.showSidebar')
            : t('titlebar.hideSidebar')
        "
        :aria-label="
          sidebarCollapsed
            ? t('titlebar.showSidebar')
            : t('titlebar.hideSidebar')
        "
        :aria-expanded="!sidebarCollapsed"
        @click="toggleSidebar"
      >
        <LeftBar theme="outline" size="18" />
      </button>
    </nav>
    <!-- 搜索窗口品牌 -->
    <div v-if="!isConfigRoute" class="titlebar-left" data-tauri-drag-region>
      <img
        src="@/assets/128x128.png"
        alt=""
        class="titlebar-logo"
        data-tauri-drag-region
      />
      <span class="titlebar-app-name" data-tauri-drag-region>
        {{ state.appName }}
      </span>
    </div>
    <div
      v-else
      class="flex min-w-0 flex-1 items-center gap-2 pr-3 text-ui font-medium text-[var(--workspace-nav-text)]"
      data-tauri-drag-region
    >
      <span
        class="min-w-0 max-w-[40vw] truncate"
        :title="activeTabTitle"
        data-tauri-drag-region
      >
        {{ activeTabTitle }}
      </span>
      <el-dropdown
        trigger="click"
        placement="bottom-start"
        popper-class="about-menu-popper"
        class="shrink-0"
        @command="handleAboutMenuCommand"
      >
        <button
          type="button"
          class="ui-action text-content"
          :title="t('titlebar.about')"
          :aria-label="t('titlebar.about')"
          @mousedown.stop
        >
          <span>{{ t('titlebar.about') }}</span>
          <span
            v-if="hasUpdate"
            class="h-1.5 w-1.5 rounded-full bg-workbench-warning"
            :title="t('titlebar.updateAvailable')"
          ></span>
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="aboutApp">
              <Info theme="outline" size="17" />
              <span>{{ t('titlebar.aboutApp') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="checkUpdate">
              <UpdateRotation theme="outline" size="17" />
              <span>{{ t('titlebar.checkUpdateMenu') }}</span>
              <span
                v-if="hasUpdate"
                class="ml-auto h-1.5 w-1.5 rounded-full bg-workbench-warning"
              ></span>
            </el-dropdown-item>
            <el-dropdown-item command="exitApp" divided>
              <Logout theme="outline" size="17" />
              <span>{{ t('titlebar.exitApp') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <!-- 中间：快捷搜索入口 -->
    <div
      v-if="!isConfigRoute"
      class="titlebar-center"
      :class="{
        'titlebar-center--drag-only': hideQuickSearch
      }"
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
        <search class="quick-search-icon" theme="outline" size="15" />
        <span class="quick-search-placeholder">
          {{ $t('titlebar.quickSearchPlaceholder') }}
        </span>
        <span class="quick-search-shortcut">Ctrl K</span>
      </button>
    </div>

    <!-- 窗口控制与搜索窗口操作 -->
    <div class="titlebar-right">
      <!-- 配置窗口始终保留置顶；窄搜索窗口将其放入更多菜单 -->
      <template v-if="!isNarrow || isConfigRoute">
        <button
          type="button"
          class="ui-icon-button titlebar-button"
          @click="handleTitlebar('isAlwaysOnTop')"
          :title="
            isAlwaysOnTop
              ? $t('titlebar.unpinWindow')
              : $t('titlebar.pinWindow')
          "
          :aria-label="
            isAlwaysOnTop
              ? $t('titlebar.unpinWindow')
              : $t('titlebar.pinWindow')
          "
          :aria-pressed="isAlwaysOnTop"
        >
          <component
            :is="isAlwaysOnTop ? Pushpin : Pin"
            class="icon"
            :class="{ 'icon-active': isAlwaysOnTop }"
            size="18"
            theme="outline"
            strokeLinecap="butt"
          />
        </button>
      </template>

      <!-- 搜索窗口的更多菜单；窄屏时合并导航入口 -->
      <el-dropdown
        v-if="!isConfigRoute"
        ref="moreDropdownRef"
        trigger="click"
        placement="bottom-end"
        :teleported="true"
        @command="handleMoreMenuCommand"
      >
        <button
          type="button"
          class="ui-icon-button titlebar-button titlebar-button--more"
          :title="$t('titlebar.more')"
          :aria-label="$t('titlebar.more')"
        >
          <more-one class="icon" theme="outline" size="18" />
          <span v-if="hasUpdate" class="update-dot"></span>
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-if="isNarrow">
              <el-dropdown-item
                v-for="tab in visibleTabs"
                :key="tab.id"
                :command="`navigate:${tab.id}`"
              >
                <component :is="tab.icon" theme="outline" size="16" />
                <span class="ml-2">{{ tab.label }}</span>
              </el-dropdown-item>
            </template>
            <el-dropdown-item v-if="hideQuickSearch" command="search">
              <Search theme="outline" size="16" />
              <span class="ml-2">{{ $t('titlebar.quickSearch') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="userCenter">
              <me theme="outline" size="16" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.userCenter') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="checkUpdate">
              <update-rotation theme="outline" size="16" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.checkUpdate') }}</span>
              <span v-if="hasUpdate" class="update-dot-inline"></span>
            </el-dropdown-item>
            <el-dropdown-item v-if="isNarrow" command="pinWindow">
              <component
                :is="isAlwaysOnTop ? Pushpin : Pin"
                theme="outline"
                size="16"
                class="align-middle"
              />
              <span class="ml-2">
                {{
                  isAlwaysOnTop
                    ? $t('titlebar.unpinWindow')
                    : $t('titlebar.pinWindow')
                }}
              </span>
            </el-dropdown-item>
            <el-dropdown-item command="settings">
              <setting-two theme="outline" size="16" class="align-middle" />
              <span class="ml-2">{{ $t('titlebar.settings') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div
        v-if="!isContentDetailRoute"
        class="titlebar-divider titlebar-divider--thick"
      ></div>

      <div
        class="ui-icon-button titlebar-button titlebar-button--window"
        @click="handleTitlebar('minimize')"
        :title="$t('titlebar.minimize')"
        :aria-label="$t('titlebar.minimize')"
      >
        <minus
          class="icon !p-[2px]"
          theme="outline"
          size="20"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="ui-icon-button titlebar-button titlebar-button--window"
        @click="handleTitlebar('maximize')"
        :title="title"
        :aria-label="title"
      >
        <square-small
          class="icon"
          theme="outline"
          size="18"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="ui-icon-button titlebar-button titlebar-button--close"
        @click="handleTitlebar('close')"
        :title="$t('titlebar.close')"
        :aria-label="$t('titlebar.close')"
      >
        <close-small
          class="icon"
          theme="outline"
          size="18"
          strokeLinecap="butt"
        />
      </div>
    </div>
  </main>
  <ConfigQuickSearch
    :model-value="quickSearchVisible"
    @update:model-value="setQuickSearchVisible"
  />
  <CommonDialog
    v-model="aboutVisible"
    :title="t('titlebar.aboutApp')"
    width="380px"
    custom-class="about-app-dialog"
  >
    <div class="flex items-center gap-4 py-2">
      <img src="@/assets/128x128.png" alt="" class="h-14 w-14 shrink-0" />
      <div class="min-w-0">
        <strong class="block text-ui-title font-semibold text-main">
          {{ state.appName || 'Snippets Code' }}
        </strong>
        <span class="mt-1 block text-ui-caption text-content">
          {{ t('titlebar.version', { version: state.appVersion }) }}
        </span>
      </div>
    </div>
    <p class="mt-3 text-ui leading-6 text-content">
      {{ t('userCenter.appDescription') }}
    </p>
  </CommonDialog>
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
  ArrowLeft,
  ArrowRight,
  LeftBar,
  Info,
  Logout
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import ConfigQuickSearch from '@/components/ConfigQuickSearch/index.vue';
import { CommonDialog } from '@/components/UI';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import { useUpdateAvailability } from '@/composables/useUpdateAvailability';
import { useLayoutStore, usePluginStore } from '@/store';
import {
  configNavigationTabs,
  getConfigTabLabelKey
} from '@/plugins/navigation';

const { t } = useI18n();
const layoutStore = useLayoutStore();
const pluginStore = usePluginStore();
const {
  visible: quickSearchVisible,
  open: openConfigQuickSearch,
  setVisible: setQuickSearchVisible
} = useConfigQuickSearch();
const { hasUpdate, checkForUpdates } = useUpdateAvailability();
const aboutVisible = ref(false);

/** 搜索窗口的操作收纳与快捷搜索显示断点。 */
const TITLEBAR_NARROW_BREAKPOINT = 720;
const TITLEBAR_SEARCH_BREAKPOINT = 980;

const isNarrow = computed(
  () => layoutStore.windowWidth <= TITLEBAR_NARROW_BREAKPOINT
);
const hideQuickSearch = computed(
  () => layoutStore.windowWidth <= TITLEBAR_SEARCH_BREAKPOINT
);

// 窄屏下拉菜单 ref，用于在 isNarrow 变为 false 时主动关闭
const moreDropdownRef = ref();

// 窗口拉大时（isNarrow false），如果下拉菜单开着则关闭
watch(isNarrow, (narrow) => {
  if (!narrow && moreDropdownRef.value) {
    moreDropdownRef.value.hide?.();
  }
});

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

const visibleTabs = computed(() =>
  configNavigationTabs
    .filter((tab) => !tab.pluginId || pluginStore.isEnabled(tab.pluginId))
    .map((tab) => ({ ...tab, label: t(tab.labelKey) }))
);
const isConfigRoute = computed(() =>
  router.currentRoute.value.path.startsWith('/config')
);
const activeTabTitle = computed(() => {
  const key = getConfigTabLabelKey(router.currentRoute.value.path);
  return key ? t(key) : state.appName || 'Snippets Code';
});
// Vue Router updates its history state before publishing the current route.
// Only follow in-app config entries; never navigate to another webview's root.
const canGoBack = computed(() => {
  router.currentRoute.value.fullPath;
  const target = router.options.history.state.back;
  return typeof target === 'string' && target.startsWith('/config');
});
const canGoForward = computed(() => {
  router.currentRoute.value.fullPath;
  const target = router.options.history.state.forward;
  return typeof target === 'string' && target.startsWith('/config');
});
const showSidebarToggle = computed(() =>
  router.currentRoute.value.path.startsWith('/config/category')
);
const sidebarCollapsed = computed(() =>
  router.currentRoute.value.name === 'Settings'
    ? layoutStore.categoryPanelCollapsed
    : layoutStore.effectiveCategoryCollapsed
);
const toggleSidebar = (): void => {
  if (router.currentRoute.value.name === 'Settings') {
    layoutStore.categoryPanelCollapsed = !layoutStore.categoryPanelCollapsed;
  } else {
    layoutStore.toggleCategoryPanel();
  }
};
const isContentDetailRoute = computed(
  () =>
    router.currentRoute.value.name === 'Content' &&
    Boolean(router.currentRoute.value.params.id)
);
const navigateTo = (path: string) => {
  router.push(path).catch((error) => {
    console.warn('[Titlebar] navigation failed:', error);
  });
};

const handleAboutMenuCommand = async (command: string): Promise<void> => {
  if (command === 'aboutApp') {
    aboutVisible.value = true;
  } else if (command === 'checkUpdate') {
    await checkForUpdates();
  } else if (command === 'exitApp') {
    await invoke('exit_application');
  }
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
    const next = !isAlwaysOnTop.value;
    await appWindow.setAlwaysOnTop(next);
    isAlwaysOnTop.value = next;
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

/** 窄屏折叠菜单命令 */
const handleMoreMenuCommand = (command: string) => {
  const tab = visibleTabs.value.find(
    (item) => command === `navigate:${item.id}`
  );
  if (tab) {
    navigateTo(tab.path);
    return;
  }
  switch (command) {
    case 'search':
      openConfigQuickSearch();
      break;
    case 'userCenter':
      navigateTo('/config/category/contentList/user');
      break;
    case 'checkUpdate':
      void checkForUpdates();
      break;
    case 'pinWindow':
      handleTitlebar('isAlwaysOnTop');
      break;
    case 'settings':
      navigateTo('/config/category/settings');
      break;
  }
};

onMounted(async () => {
  window.addEventListener('keydown', handleGlobalKeydown);
  const results = await Promise.allSettled([
    initEnv().then(() => {
      state.appName = appName;
      state.appVersion = appVersion;
    }),
    pluginStore.initialize(),
    appWindow.isAlwaysOnTop().then((value) => {
      isAlwaysOnTop.value = value;
    })
  ]);
  for (const result of results) {
    if (result.status === 'rejected') {
      console.warn('[Titlebar] initialization failed:', result.reason);
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
});
</script>

<style lang="scss" scoped>
.titlebar {
  @apply relative flex items-center justify-between rounded-t-md w-full h-10 leading-10 select-none pr-1 gap-1 font-ui;

  z-index: 50;
  min-width: 0; /* 允许 flex 子项收缩 */
  cursor: grab;
  background-color: var(--categories-panel-bg);
  box-shadow: none;

  &:active {
    cursor: grabbing;
  }
}

.titlebar--config {
  // The config shell supplies the rail color underneath this transparent bar,
  // allowing the main panel's upward shadow to remain visible.
  color: var(--workspace-nav-text);
  background-color: transparent;

  .icon,
  .titlebar-button:hover .icon {
    color: var(--workspace-nav-heading);
  }

  .titlebar-button--close:hover .icon {
    color: var(--el-color-danger);
  }
}

/* 搜索窗口品牌允许在窄窗口内收缩。 */
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
  min-width: 0;
  max-width: 360px;
  height: 30px;
  color: rgba(var(--categories-text-color-rgb), 0.7);
  cursor: text;
  border-color: rgba(var(--categories-border-color-rgb), 0.72);
  box-shadow: 0 1px 2px rgb(15 23 42 / 4%);
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    background-color 0.16s ease;

  &:hover {
    background-color: var(--search-soft-bg);
    border-color: var(--search-result-active-border);
    box-shadow: 0 0 0 2px var(--chat-primary-soft);
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

  padding: 1px 5px;
  margin-left: 10px;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  color: var(--categories-info-text-color);
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
  @apply leading-4 overflow-hidden;

  &:hover .update-dot {
    @apply animate-none;
  }

  &--close:hover .icon {
    color: var(--el-color-danger);
  }
}

.titlebar-divider {
  @apply h-5 mx-1;

  flex-shrink: 0;
  width: 1px;
  background: rgb(0 0 0 / 15%);
  box-shadow: 1px 0 0 rgb(255 255 255 / 10%);

  &--thick {
    width: 1px;
    background: rgb(0 0 0 / 20%);
    box-shadow: 1px 0 0 rgb(255 255 255 / 15%);
  }
}

// 暗色模式下的分隔线
.dark .titlebar-divider {
  background: rgb(255 255 255 / 10%);
  box-shadow: 1px 0 0 rgb(255 255 255 / 5%);

  &--thick {
    background: rgb(255 255 255 / 15%);
    box-shadow: 1px 0 0 rgb(255 255 255 / 8%);
  }
}

.icon {
  @apply flex min-h-ui-control min-w-ui-control items-center justify-center p-1.5;

  color: var(--workspace-nav-text);

  &.icon-active {
    color: var(--el-color-primary);
  }
}

.update-dot {
  @apply absolute top-0.5 right-0.5 w-[6px] h-[6px] rounded-full;

  background-color: var(--wb-warning);
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* 窄屏（≤880px）：缩小间距 */
@media (width <= 880px) {
  .titlebar {
    gap: 2px;
  }

  .titlebar-left {
    gap: 6px;
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

/* 极窄屏（≤640px）：应用名截断。 */
@media (width <= 640px) {
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
  vertical-align: middle;
  background-color: var(--wb-warning);
  border-radius: 50%;
}
</style>
