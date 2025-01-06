<script lang="ts" setup>
import { FileCode, ApplicationTwo, BookmarkOne } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';

const store = useConfigurationStore();

const containerRef = ref<HTMLElement | null>(null);
const activeTab = ref<TabType>('text');
const tabs = ref<{ label: string; value: TabType }[]>([
  {
    label: '所有结果',
    value: 'text'
  },
  {
    label: '软件',
    value: 'app'
  },
  {
    label: '书签',
    value: 'bookmark'
  }
]);

const props = defineProps<{
  results: ContentType[];
}>();

// 过滤并展示前10项
const filteredResults = computed(() => {
  switch (activeTab.value) {
    case 'app':
      return props.results.filter((item) => item.summarize === 'app').slice(0, 10);
    case 'bookmark':
      return props.results.filter((item) => item.summarize === 'bookmark').slice(0, 10);
    default:
      return props.results.slice(0, 10);
  }
});

function switchTab(tab: TabType) {
  activeTab.value = tab;
  if (filteredResults.value.length > 0) {
    store.id = filteredResults.value[0].id;
  }
}

const handleKeyEvent = (e: KeyboardEvent) => {
  if (filteredResults.value.length === 0) return;
  const index = filteredResults.value.findIndex((item) => item.id === store.id);
  let nextIndex = index;

  switch (e.code) {
    case 'ArrowDown':
      nextIndex = (index + 1) % filteredResults.value.length;
      store.id = filteredResults.value[nextIndex].id;
      break;
    case 'ArrowUp':
      nextIndex =
        (index - 1 + filteredResults.value.length) %
        filteredResults.value.length;
      store.id = filteredResults.value[nextIndex].id;
      break;
    case 'Enter':
      selectItem(filteredResults.value[nextIndex]);
      break;
    case 'Escape':
      showHideWindow();
      break;
  }

  // 内容过多时，滚动条需要同步滚动
  if (nextIndex !== index && containerRef.value) {
    // 获取 .result 容器下的所有 .item 元素
    const resultContainer = containerRef.value.querySelector('.result');
    if (!resultContainer) return;

    const items = resultContainer.querySelectorAll('.item');
    const targetItem = items[nextIndex] as HTMLElement;
    if (!targetItem) return;

    const { top, bottom } = targetItem.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } =
      resultContainer.getBoundingClientRect();

    // 检查目标项是否在容器内
    if (bottom > containerBottom) {
      resultContainer.scrollTop += bottom - containerBottom + 10;
    } else if (top < containerTop) {
      resultContainer.scrollTop -= containerTop - top;
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

// 鼠标悬停处理
function handleMouseEnter(item: ContentType) {
  store.id = item.id;
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
  <main ref="containerRef" class="result-container">
    <div v-if="props.results.length !== 0" class="tabs">
      <template v-for="item in tabs" :key="item">
        <div
          class="tab"
          :class="{ active: item.value === activeTab }"
          @click="switchTab(item.value)"
        >
          {{ item.label }}
        </div>
      </template>
    </div>
    <div class="result">
      <template v-for="item in filteredResults" :key="item.id">
        <div
          class="item"
          :class="{ active: item.id === store.id }"
          @mouseenter="handleMouseEnter(item)"
          @click="selectItem(item)"
        >
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
            <file-code
              class="icon"
              theme="outline"
              size="24"
              :strokeWidth="3"
            />
          </template>
          <div class="content">
            <div class="title">
              {{ item.title || item.content.split('/')[2] }}
            </div>
            <p class="text">{{ item.content }}</p>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.result-container {
  @apply bg-[#faf7f5] dark:bg-[#22282c] px-1 rounded-bl-lg rounded-br-lg;

  .tabs {
    @apply flex gap-2 py-2 border-gray-200 dark:border-gray-700;

    .tab {
      @apply px-3 py-1 text-sm text-gray-600 dark:text-gray-400 cursor-pointer rounded-md;

      &.active {
        @apply bg-[#e6e1de] dark:bg-gray-700 text-gray-900 dark:text-white;
      }
    }
  }

  .result {
    @apply max-h-[254px] overflow-y-auto;
    .item {
      @apply flex items-center gap-2 text-slate-700 px-2 py-1 rounded-lg cursor-pointer;

      &.active {
        @apply bg-[#e6e1de] dark:bg-[#5977cb];

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

    /* .icon {
      @apply p-1 bg-neutral-300 rounded-md text-zinc-600;
    } */

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
}
</style>
