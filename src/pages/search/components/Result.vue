<script lang="ts" setup>
import { FileCode } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';

const store = useConfigurationStore();

const containerRef = ref<HTMLElement | null>(null);

const handleKeyEvent = (e: KeyboardEvent) => {
  if (store.data.length === 0) return;
  const index = store.data.findIndex((item) => item.id === store.id);
  let nextIndex = index;

  switch (e.code) {
    case 'ArrowDown':
      nextIndex = (index + 1) % store.data.length;
      store.id = store.data[nextIndex].id;
      break;
    case 'ArrowUp':
      nextIndex = (index - 1 + store.data.length) % store.data.length;
      store.id = store.data[nextIndex].id;
      break;
    case 'Enter':
      // 选中 copy 或 打开应用
      selectItem(store.data[nextIndex]);
      break;
    case 'Escape':
      showHideWindow();
      break;
  }

  // 内容过多时，滚动条需要同步滚动
  if (nextIndex !== index && containerRef.value) {
    const targetItem = containerRef.value.children[nextIndex] as HTMLElement;
    const { top, bottom } = targetItem.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } =
      containerRef.value.getBoundingClientRect();

    // 检查目标项是否在容器内
    if (bottom > containerBottom) {
      containerRef.value.scrollTop += bottom - containerBottom + 10;
    } else if (top < containerTop) {
      containerRef.value.scrollTop -= containerTop - top;
    }
  }
};

// 选中代码行
async function selectItem(item: ContentType) {
  store.id = item.id;
  if (item.type === 'app') {
    invoke('open_app_command', { appPath: item.content });
  } else if (item.type === 'bookmark') {
    invoke('open_url', { url: item.content });
  } else {
    // copy
    await navigator.clipboard.writeText(item.content);
  }
  // 隐藏窗口
  showHideWindow();
}

// 显示隐藏窗口
function showHideWindow() {
  invoke('show_hide_window_command', { label: 'search' });
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyEvent);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyEvent);
});
</script>
<template>
  <main
    ref="containerRef"
    :class="[store.data.length !== 0 ? 'mt-7' : '', 'result']"
  >
    <template v-for="item in store.data" :key="item.id">
      <div class="item" :class="{ active: item.id === store.id }">
        <!-- <svg-icon class="icon" icon-class="code" size="32" /> -->
        <file-code class="icon" theme="outline" size="24" :strokeWidth="3" />
        <div class="content" @click="() => (store.id = item.id)">
          <div class="title">{{ item.title }}</div>
          <p class="text">{{ item.content }}</p>
        </div>
      </div>
    </template>
  </main>
</template>
<style lang="scss" scoped>
.result {
  @apply bg-slate-50 dark:bg-[#22282c] px-1 rounded-bl-lg rounded-br-lg max-h-[270px] overflow-y-auto;

  .item {
    @apply flex items-center gap-2 text-slate-700 px-2 py-1 rounded-lg cursor-pointer;

    &.active {
      @apply bg-zinc-200 dark:bg-[#5977cb];

      .title {
        @apply dark:text-slate-800;
      }

      .text {
        @apply dark:text-gray-700;
      }

      .icon {
        @apply dark:bg-slate-300 dark:text-slate-800;
      }
    }
  }

  .icon {
    @apply p-1 bg-neutral-300 rounded-md text-zinc-600;
  }

  .content {
    @apply overflow-hidden;

    .title {
      @apply text-sm truncate font-sans font-semibold dark:text-neutral-200;
    }

    .text {
      @apply text-xs truncate dark:text-[#aeb1b6];
    }
  }
}
</style>
