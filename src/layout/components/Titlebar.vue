<template>
  <main data-tauri-drag-region class="titlebar">
    <div class="titlebar-title"><slot></slot></div>
    <div class="titlebar-list">
      <div class="titlebar-button" @click="handleTitlebar('isAlwaysOnTop')">
        <component
          :is="isAlwaysOnTop ? Pushpin : Pin"
          class="icon"
          size="18"
          :strokeWidth="3"
          theme="outline"
          strokeLinecap="butt"
        />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('minimize')">
        <minus
          class="icon"
          theme="outline"
          size="17"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('maximize')">
        <square-small
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('close')">
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
  CloseSmall
} from '@icon-park/vue-next';
import { getAppWindow } from '@/utils/env';
defineOptions({
  name: 'Titlebar'
});

type WindowAction = 'isAlwaysOnTop' | 'minimize' | 'maximize' | 'close';

const isAlwaysOnTop = ref<boolean>(false);

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
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply bg-content dark:bg-content  flex justify-between items-center w-full h-8 leading-8 pr-1;
}

.titlebar-title {
  @apply text-slate-800 dark:text-panel pl-1;
}

.titlebar-list {
  @apply flex h-full items-center gap-3;
}

.titlebar-button {
  @apply leading-4;
}

.icon {
  @include commonIcon;

  @apply text-[20px] p-1 dark:text-panel;
}
</style>
