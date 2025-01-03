<script lang="ts" setup>
import { FileCode, ApplicationTwo, BookmarkOne } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';

const store = useConfigurationStore();

const containerRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  results: ContentType[];
}>();

const handleKeyEvent = (e: KeyboardEvent) => {
  if (props.results.length === 0) return;
  const index = props.results.findIndex((item) => item.id === store.id);
  let nextIndex = index;

  switch (e.code) {
    case 'ArrowDown':
      nextIndex = (index + 1) % props.results.length;
      store.id = props.results[nextIndex].id;
      break;
    case 'ArrowUp':
      nextIndex = (index - 1 + props.results.length) % props.results.length;
      store.id = props.results[nextIndex].id;
      break;
    case 'Enter':
      // 选中 copy 或 打开应用
      selectItem(props.results[nextIndex]);
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
  if (item.summarize === 'app') {
    // 打开第三方应用程序
    invoke('open_app_command', { appPath: item.content });
  } else if (item.summarize === 'bookmark') {
    // 浏览器书签搜索
    invoke('open_url', { url: item.content });
  } else {
    // copy 代码片段
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

// function getFavicon(url: string) {
//   try {
//     const urlObj = new URL(url);
//     return `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`;
//   } catch {
//     return '';
//   }
// }

// function handleImageError(event: Event) {
//   const img = event.target as HTMLImageElement;
//   img.style.display = 'none';
// }
</script>
<template>
  <main
    ref="containerRef"
    :class="[props.results.length !== 0 ? 'mt-7' : '', 'result']"
  >
    <template v-for="item in props.results" :key="item.id">
      <div class="item" :class="{ active: item.id === store.id }">
        <template v-if="item.summarize === 'app'">
          <application-two
            class="icon"
            theme="outline"
            size="24"
            :strokeWidth="3"
          />
        </template>
        <template v-else-if="item.summarize === 'bookmark'">
          <bookmark-one
            class="icon"
            theme="outline"
            size="24"
            :strokeWidth="3"
          />
        </template>
        <template v-else>
          <file-code class="icon" theme="outline" size="24" :strokeWidth="3" />
        </template>
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
