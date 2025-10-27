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
    </div>
    <RecycleScroller
      class="result"
      :items="filteredResults"
      :item-size="52"
      :buffer="100"
      key-field="id"
      v-slot="{ item, index }"
    >
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
        <div v-if="index < 5" class="shortcut-key">
          <command class="shortcut-key-icon" theme="outline" size="12" />
          <span class="shortcut-key-text">{{ index + 1 }}</span>
        </div>
      </div>
    </RecycleScroller>
  </main>
</template>
<script lang="ts" setup>
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';
import { Command } from '@icon-park/vue-next';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

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

  if (/^Digit[1-5]$/.test(e.code) || /^Numpad[1-5]$/.test(e.code)) {
    e.preventDefault();
    e.stopPropagation();

    const num = parseInt(e.code.replace('Digit', '').replace('Numpad', ''));

    // 确保对应索引的结果存在
    if (filteredResults.value.length >= num) {
      selectItem(filteredResults.value[num - 1]);
    }
    return;
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

  if (
    ['ArrowDown', 'ArrowUp'].includes(e.code) &&
    nextIndex !== index &&
    containerRef.value
  ) {
    const resultContainer = containerRef.value.querySelector('.result .vue-recycle-scroller__item-view') || containerRef.value.querySelector('.result');
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
  invoke('add_search_history', { id: String(item.id) });

  // 清除搜索关键词
  props.onClearSearch();

  if (item.summarize === 'app') {
    // 打开第三方应用程序
    showHideWindow();
    await invoke('open_app_command', { appPath: item.content });
  } else if (item.summarize === 'bookmark' || item.summarize === 'search') {
    showHideWindow();
    await invoke('open_url', { url: item.content });
  } else {
    const codeContent = item.content;
    try {
      await navigator.clipboard.writeText(codeContent);
    } catch (err) {
      console.error('[代码片段] 直接复制到剪贴板失败:', err);
    }

    showHideWindow();

    setTimeout(async () => {
      try {
        await invoke('insert_text_to_last_window', { text: codeContent })
          .then(() => {
            console.log('[代码片段] 成功调用');
          })
          .catch((error) => {
            console.error('[代码片段] 插入文本失败:', error);
            alert('文本已复制到剪贴板，请手动粘贴 (Ctrl+V)');
          });
      } catch (error) {
        console.error('[代码片段] 执行插入文本命令异常:', error);
        console.log('[代码片段] 使用备份方法，请手动粘贴');
        alert('文本已复制到剪贴板，请手动粘贴 (Ctrl+V)');
      }
    }, 300);
  }
}

// 显示隐藏窗口
function showHideWindow() {
  invoke('show_hide_window_command', {
    label: 'search',
    context: 'selectItem'
  });
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
      @apply flex items-center gap-2 text-search px-2 py-1 rounded-lg cursor-pointer relative;

      &:hover,
      &.active {
        @apply bg-search-hover;
      }

      .shortcut-key {
        @apply flex items-center justify-center gap-1 text-gray-500 dark:text-gray-200 text-xs font-medium opacity-80;
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
