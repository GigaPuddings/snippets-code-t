<template>
  <main ref="containerRef" class="result-container glass-content">
    <div v-if="props.results.length !== 0" class="tabs">
      <!-- 分类 -->
      <template v-for="item in tabs" :key="item">
        <div
          class="tab"
          :class="{ active: item.value === activeTab }"
          @click="switchTab(item.value)"
        >
          {{ item.label }}
        </div>
      </template>

      <!-- 分类排序 -->
    </div>
    <div class="result">
      <template v-for="item in filteredResults" :key="item.id">
        <!-- @mouseenter="handleMouseEnter(item)" -->
        <div
          class="item"
          :class="{ active: item.id === store.id }"
          @click="selectItem(item)"
        >
          <div class="icon-wrapper">
            <img
              v-if="item.icon"
              :src="item.icon"
              class="icon"
              @error="handleIconError(item)"
              loading="lazy"
            />
            <template v-else>
              <img
                v-if="item.summarize === 'app'"
                src="@/assets/svg/app.svg"
                class="icon"
                loading="lazy"
              />
              <img
                v-else-if="item.summarize === 'bookmark'"
                src="@/assets/svg/bookmark.svg"
                class="icon"
                loading="lazy"
              />
              <img
                v-else-if="item.summarize === 'search'"
                src="@/assets/svg/search.svg"
                class="icon"
                loading="lazy"
              />
              <img
                v-else
                src="@/assets/svg/code.svg"
                class="icon"
                loading="lazy"
              />
            </template>
          </div>
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
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';

const store = useConfigurationStore();

const props = defineProps<{
  results: ContentType[];
  onClearSearch: () => void;
}>();

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

// 添加一个变量来追踪是否应该控制 tabs
const shouldControlTabs = ref(false);

// 修改键盘事件处理函数
const handleKeyEvent = (e: KeyboardEvent) => {
  // 检查当前焦点元素是否为输入框
  const isInputFocused = document.activeElement?.tagName === 'INPUT';

  // 如果是输入框且光标不在开始或结束位置，让输入框处理左右键
  if (isInputFocused && !shouldControlTabs.value) {
    const input = document.activeElement as HTMLInputElement;
    if (e.code === 'ArrowLeft' && input.selectionStart !== 0) {
      return;
    }
    if (e.code === 'ArrowRight' && input.selectionEnd !== input.value.length) {
      return;
    }
  }

  // 只阻止方向键和回车键的默认行为和冒泡
  if (
    ['ArrowDown', 'ArrowUp', 'Enter', 'ArrowRight', 'ArrowLeft'].includes(
      e.code
    )
  ) {
    e.preventDefault();
    e.stopPropagation();
  }

  // 对于上下键和回车键的操作，检查是否有结果
  if (
    ['ArrowDown', 'ArrowUp', 'Enter'].includes(e.code) &&
    filteredResults.value.length === 0
  ) {
    return;
  }

  // 处理左右键切换 tabs 的逻辑
  if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
    if (e.code === 'ArrowRight') {
      const nextTabIndex = tabs.value.findIndex(
        (tab) => tab.value === activeTab.value
      );
      const nextTab = tabs.value[(nextTabIndex + 1) % tabs.value.length];
      switchTab(nextTab.value);
      shouldControlTabs.value = true;
    } else if (e.code === 'ArrowLeft') {
      const currentIndex = tabs.value.findIndex(
        (tab) => tab.value === activeTab.value
      );
      const prevTab =
        tabs.value[(currentIndex - 1 + tabs.value.length) % tabs.value.length];
      switchTab(prevTab.value);
      shouldControlTabs.value = true;
    }
    return;
  }

  // 重置 shouldControlTabs
  shouldControlTabs.value = false;

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

  // 只在有结果且进行上下移动时才处理滚动
  if (
    ['ArrowDown', 'ArrowUp'].includes(e.code) &&
    nextIndex !== index &&
    containerRef.value
  ) {
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
      resultContainer.scrollTop += bottom - containerBottom;
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
  props.onClearSearch();
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

// 修改图标错误处理函数
const handleIconError = (item: ContentType) => {
  item.icon = undefined;
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyEvent);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyEvent);
  shouldControlTabs.value = false;
});

defineExpose({
  switchTab
});
</script>
<style lang="scss" scoped>
.result-container {
  @apply bg-search px-1 rounded-bl-lg rounded-br-lg;

  .tabs {
    @apply flex gap-2 pt-2 pb-1 border-search;

    .tab {
      @apply px-3 py-1 text-sm text-search cursor-pointer rounded-md;

      &.active {
        @apply bg-search-hover text-search;
      }
    }
  }

  .result {
    @apply max-h-[218px] overflow-y-auto;

    .item {
      @apply flex items-center gap-2 text-search px-2 py-1 rounded-lg cursor-pointer;

      &:hover,
      &.active {
        @apply bg-search-hover;
      }

      .icon-wrapper {
        @apply flex items-center justify-center w-6 h-6 flex-shrink-0;

        .icon {
          @apply w-6 h-6 object-contain;
        }
      }

      .content {
        @apply flex-grow overflow-hidden;

        .title {
          @apply text-sm truncate font-sans text-search;
        }

        .text {
          @apply text-xs truncate text-search-secondary;
        }
      }
    }
  }
}
</style>
