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
      <div class="app-update relative" title="检查更新" aria-label="检查更新">
        <update-rotation
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          @click="handleUpdateClick"
        />
        <div v-if="hasUpdate" class="update-dot"></div>
      </div>
      <div
        class="titlebar-button"
        @click="handleTitlebar('isAlwaysOnTop')"
        title="置顶窗口"
        aria-label="置顶窗口"
      >
        <component
          :is="isAlwaysOnTop ? Pushpin : Pin"
          class="icon"
          size="18"
          :strokeWidth="3"
          theme="outline"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="titlebar-button"
        @click="openSettingsDialog"
        title="设置"
        aria-label="设置"
      >
        <setting-two
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="titlebar-button"
        @click="handleTitlebar('minimize')"
        title="最小化窗口"
        aria-label="最小化窗口"
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
        class="titlebar-button"
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
        class="titlebar-button"
        @click="handleTitlebar('close')"
        title="关闭窗口"
        aria-label="关闭窗口"
      >
        <close-small
          class="icon !p-0"
          theme="outline"
          size="24"
          :strokeWidth="2"
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
  BookmarkOne,
  Application
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, UnlistenFn } from '@tauri-apps/api/event';
import { useRouter } from 'vue-router';
import SegmentedToggle from '@/components/SegmentedToggle/index.vue';
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
  return isMaximized.value ? '还原窗口' : '最大化窗口';
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
  unListen();
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
  @apply flex h-full items-center gap-3;
}

.titlebar-button {
  @apply leading-4;
}

.app-update {
  @apply flex justify-center items-center flex-col;

  &:hover {
    @apply cursor-pointer;

    .icon {
      @apply animate-spin !bg-transparent;
    }
  }

  .update-dot {
    @apply absolute top-1 -right-1 w-[6px] h-[6px] bg-red-500 rounded-full animate-pulse;
  }
}

.icon {
  @include commonIcon;

  @apply text-[20px] p-1;

  color: rgba(var(--categories-text-color-rgb), 0.85);
  transition: all 0.2s ease;

  &:hover {
    color: var(--categories-text-color);
    background-color: rgba(var(--categories-panel-bg-hover-rgb), 0.6);
  }
}

.nav-bar-wrapper {
  @apply ml-4 flex items-center;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgb(239 68 68 / 70%);
    transform: scale(0.95);
  }

  70% {
    box-shadow: 0 0 0 6px rgb(239 68 68 / 0%);
    transform: scale(1);
  }

  100% {
    box-shadow: 0 0 0 0 rgb(239 68 68 / 0%);
    transform: scale(0.95);
  }
}
</style>
