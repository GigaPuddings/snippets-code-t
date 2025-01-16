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
        <!-- @mouseenter="handleMouseEnter(item)" -->
        <div
          class="item"
          :class="{ active: item.id === store.id }"
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
          <template v-else-if="item.summarize === 'search'">
            <img
              v-if="item.icon"
              :src="item.icon"
              class="icon"
              @error="handleIconError"
            />
            <Search
              v-else
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
<script lang="ts" setup>
import {
  FileCode,
  ApplicationTwo,
  BookmarkOne,
  Search
} from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';

const store = useConfigurationStore();

const containerRef = ref<HTMLElement | null>(null);
const activeTab = ref<SummarizeType>('text');
const tabs = ref<{ label: string; value: SummarizeType }[]>([
  {
    label: '全部',
    value: 'text'
  },
  {
    label: '应用',
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

// 过滤结果
const filteredResults = computed(() => {
  let results = [];
  switch (activeTab.value) {
    case 'app':
      results = props.results.filter((item) => item.summarize === 'app');
      break;
    case 'bookmark':
      results = props.results.filter((item) => item.summarize === 'bookmark');
      break;
    default:
      results = props.results;
      break;
  }

  return results;
});

// 使用计算属性自动选中第一个结果
const selectedId = computed(() => {
  return filteredResults.value.length > 0 ? filteredResults.value[0].id : null;
});

// 然后监听 selectedId 的变化
watch(selectedId, (newId) => {
  if (newId) {
    store.id = newId;
  }
});

function switchTab(tab: SummarizeType) {
  activeTab.value = tab;
}

// 键盘事件处理
const handleKeyEvent = (e: KeyboardEvent) => {
  if (filteredResults.value.length === 0) return;

  // 只阻止上下键和回车键的默认行为和冒泡
  if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.code)) {
    e.preventDefault();
    e.stopPropagation();
  }

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
    // case 'ArrowRight':
    //   // 获取当前 tab 的索引
    //   const currentTabIndex = tabs.value.findIndex(tab => tab.value === activeTab.value);
    //   // 切换到下一个 tab
    //   if (currentTabIndex < tabs.value.length - 1) {
    //     switchTab(tabs.value[currentTabIndex + 1].value);
    //   }
    //   break;
    // case 'ArrowLeft':
    //   // 获取当前 tab 的索引
    //   const currentIndex = tabs.value.findIndex(tab => tab.value === activeTab.value);
    //   // 切换到上一个 tab
    //   if (currentIndex > 0) {
    //     switchTab(tabs.value[currentIndex - 1].value);
    //   }
    //   break;
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
    await invoke('open_app_command', { appPath: item.content });
  } else if (item.summarize === 'bookmark' || item.summarize === 'search') {
    // 浏览器书签搜索或搜索引擎搜索
    await invoke('open_url', { url: item.content });
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
// function handleMouseEnter(item: ContentType) {
//   store.id = item.id;
// }

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

// 添加图标加载失败处理
const handleIconError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.style.display = 'none';
  img.nextElementSibling?.removeAttribute('style');
};
</script>
<style lang="scss" scoped>
.result-container {
  @apply bg-search px-1 rounded-bl-lg rounded-br-lg;

  .tabs {
    @apply flex gap-2 py-2 border-search;

    .tab {
      @apply px-3 py-1 text-sm text-search cursor-pointer rounded-md;

      &.active {
        @apply bg-search-hover text-search;
      }
    }
  }

  .result {
    @apply max-h-[254px] overflow-y-auto;

    .item {
      @apply flex items-center gap-2 text-search px-2 py-1 rounded-lg cursor-pointer;

      &:hover,
      &.active {
        @apply bg-search-hover;
      }

      .content {
        @apply overflow-hidden;

        .title {
          @apply text-sm truncate font-sans font-semibold text-search;
        }

        .text {
          @apply text-xs truncate text-search-secondary;
        }
      }

      .icon {
        @apply w-6 h-6 object-contain;
      }
    }
  }
}
</style>
