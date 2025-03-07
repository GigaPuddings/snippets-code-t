<template>
  <main data-tauri-drag-region class="titlebar">
    <div class="titlebar-title">
      <div class="flex items-center gap-2">
        <img src="@/assets/128x128.png" alt="" class="w-6 h-6" />
        <div class="text-lg">{{ state.appName }}</div>
        <span class="text-sm text-stone-300">{{ state.appVersion }}</span>
      </div>
      <slot></slot>
    </div>
    <div class="titlebar-list">
      <div class="app-update relative" title="检查更新" aria-label="检查更新">
        <update-rotation
          class="icon"
          theme="outline"
          size="20"
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
        @click="handleTitlebar('minimize')"
        title="最小化窗口"
        aria-label="最小化窗口"
      >
        <minus
          class="icon"
          theme="outline"
          size="17"
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
  UpdateRotation
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { onMounted, onUnmounted } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { listen, UnlistenFn } from '@tauri-apps/api/event';

defineOptions({
  name: 'Titlebar'
});

const isMaximized = ref(false);
type WindowAction = 'isAlwaysOnTop' | 'minimize' | 'maximize' | 'close';

const isAlwaysOnTop = ref<boolean>(false);

const state = reactive({
  appName: '',
  appVersion: ''
});

const hasUpdate = ref(false);

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
});

onUnmounted(() => {
  unListen();
});
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply bg-content dark:bg-content flex justify-between items-center w-full h-8 leading-8 pr-1 select-none;
}

.titlebar-title {
  @apply text-slate-800 dark:text-panel pl-1 flex items-center;
}

.titlebar-list {
  @apply flex h-full items-center gap-3;
}

.titlebar-button {
  @apply leading-4;
}

.app-update {
  @apply flex justify-center items-center flex-col ml-2;

  &:hover {
    @apply cursor-pointer;

    .icon {
      @apply animate-spin bg-transparent;
    }
  }

  .update-dot {
    @apply absolute top-1 -right-1 w-[6px] h-[6px] bg-red-500 rounded-full animate-pulse;
  }
}

.icon {
  @include commonIcon;

  @apply text-[20px] p-1 dark:text-panel;
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
