<template>
	<main data-tauri-drag-region class="titlebar">
		<div class="titlebar-title"><slot /></div>
    <div class="titlebar-list">
      <div class="titlebar-button" @click="handleTitlebar('minimize')">
        <minus class="icon" theme="outline" size="17" :strokeWidth="3" strokeLinecap="butt"/>
      </div>
      <div class="titlebar-button" @click="handleTitlebar('maximize')">
        <square-small class="icon" theme="outline" size="18" :strokeWidth="3" strokeLinecap="butt" />
      </div>
      <div class="titlebar-button" @click="handleTitlebar('close')">
        <close-small class="icon !p-0" theme="outline" size="24" :strokeWidth="2" strokeLinecap="butt" />
      </div>
    </div>
	</main>
</template>

<script setup lang="ts">
import { Minus, SquareSmall, CloseSmall } from '@icon-park/vue-next'
import { Window } from '@tauri-apps/api/window';

defineOptions({
  name: 'Titlebar'
})

const appWindow = new Window('config');

const handleTitlebar = async (type: string) => {
  switch (type) {
    case 'minimize':
      appWindow.minimize()
      break;
    case 'maximize':
      await appWindow.isMaximized() ? appWindow.unmaximize() : appWindow.toggleMaximize() 
      break;
    case 'close':
      appWindow.close()
      break;
  }
}
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-slate-700 hover:bg-neutral-300 dark:hover:bg-[--mantine-color-default-hover] hover:rounded;
}

.titlebar {
  @apply bg-[#e6e1de] dark:bg-[#282d32]  flex justify-between items-center px-2 w-full h-[40px];
}

.titlebar-title {
  @apply text-slate-800 dark:text-[#999b9d] pl-1;
}

.titlebar-list {
  @apply flex h-full items-center gap-3;
}

.titlebar-button {
  @apply leading-4;
}

.icon {
  @include commonIcon;
  @apply text-[20px] p-1 dark:text-[#999b9d];
}
</style>
