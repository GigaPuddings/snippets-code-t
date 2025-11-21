<template>
  <main ref="containerRef" class="result-container glass-content">
    <div v-if="props.results.length !== 0" class="tabs">
      <!-- 分类 -->
      <div class="tabs-group">
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
      <!-- 返回提示 -->
      <div v-if="!isSearchMode" class="return-hint">
        <span class="hint-key">Tab</span>
        <span class="hint-text">返回搜索</span>
      </div>
    </div>
    <RecycleScroller
      ref="scrollerRef"
      class="result"
      :items="filteredResults"
      :item-size="44"
      :buffer="100"
      key-field="id"
      v-slot="{ item }"
    >
      <div
        class="item"
        :class="{ active: item.id === store.id }"
        @click="handleItemClick(item)"
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
        <div v-if="getItemRealIndex(item) < 5" class="shortcut-key">
          <command class="shortcut-key-icon" theme="outline" size="12" />
          <span class="shortcut-key-text">{{ getItemRealIndex(item) + 1 }}</span>
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
import { useFocusMode } from '@/hooks/useFocusMode';
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const store = useConfigurationStore();
const { currentMode, isSearchMode, isListMode, isTabMode, setMode, setCanSwitchToList } = useFocusMode();

const props = defineProps<{
  results: ContentType[];
  onClearSearch: () => void;
}>();

const emit = defineEmits<{
  backToSearch: [];
}>();

const containerRef = ref<HTMLElement | null>(null);
const scrollerRef = ref<any>(null); // RecycleScroller 组件引用
const activeTab = ref<SummarizeType>('text');
const currentTabIndex = ref(0); // 当前分类索引
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

// 获取item在filteredResults中的真实索引位置
const getItemRealIndex = (item: ContentType): number => {
  return filteredResults.value.findIndex(r => r.id === item.id);
};

// 使用计算属性自动选中第一个结果
const selectedId = computed(() => {
  return filteredResults.value.length > 0 ? filteredResults.value[0].id : null;
});

// 然后监听 selectedId 的变化
watch(selectedId, (newId) => {
  if (newId) {
    store.id = newId;
    // 切换分类后，确保第一项在视口内
    nextTick(() => {
      if (isListMode.value) {
        scrollToItem(0);
      }
    });
  }
});

// 监听结果变化，更新是否可以切换到列表
watch(() => filteredResults.value.length, (length) => {
  setCanSwitchToList(length > 0);
}, { immediate: true });

function switchTab(tab: SummarizeType) {
  activeTab.value = tab;
  currentTabIndex.value = tabs.value.findIndex(t => t.value === tab);
  
  // 鼠标点击分类时，切换到TAB模式（显示返回提示）
  if (!isTabMode.value && !isListMode.value) {
    setMode('TAB');
  }
  
  // 切换分类后，如果在列表模式，滚动到第一项
  if (isListMode.value && filteredResults.value.length > 0) {
    nextTick(() => {
      scrollToItem(0);
    });
  }
}

// 键盘事件处理函数
const handleKeyEvent = (e: KeyboardEvent) => {
  // 全局快捷键：数字键 1-5 快速选择（任何模式下都可用）
  if (/^Digit[1-5]$/.test(e.code) || /^Numpad[1-5]$/.test(e.code)) {
    e.preventDefault();
    e.stopPropagation();
    const num = parseInt(e.code.replace('Digit', '').replace('Numpad', ''));
    if (filteredResults.value.length >= num) {
      selectItem(filteredResults.value[num - 1]);
    }
    return;
  }

  // Escape 键：隐藏窗口（任何模式下都可用）
  if (e.code === 'Escape') {
    e.preventDefault();
    e.stopPropagation();
    showHideWindow();
    return;
  }

  // 如果在搜索框模式，不处理键盘事件，让搜索框自己处理
  // 除了 Tab 键可以用来切换模式
  if (isSearchMode.value) {
    // 只处理 Tab 键，即使没有结果也允许切换到 TAB 模式（用于切换分类）
    if (e.code === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      setMode('TAB');
    }
    // 其他键让搜索框处理，不阻止
    return;
  }

  // 处理 Tab 键：从分类标签或列表模式返回搜索框
  if (e.code === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    e.stopPropagation();
    // 无论在分类模式还是列表模式，Tab键都返回搜索框
    if (isTabMode.value || isListMode.value) {
      emit('backToSearch');
    }
    return;
  }

  // 根据当前焦点模式处理键盘事件
  if (isListMode.value) {
    handleListModeKeys(e);
  } else if (isTabMode.value) {
    handleTabModeKeys(e);
  }
};

// 列表模式的键盘事件处理
const handleListModeKeys = (e: KeyboardEvent) => {
  // 左右键切换分类，即使没有结果也允许切换
  if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
    e.preventDefault();
    e.stopPropagation();
    const direction = e.code === 'ArrowRight' ? 1 : -1;
    const newIndex = (currentTabIndex.value + direction + tabs.value.length) % tabs.value.length;
    currentTabIndex.value = newIndex;
    switchTab(tabs.value[newIndex].value);
    return;
  }

  // 其他键需要有结果才能操作
  if (filteredResults.value.length === 0) return;

  const index = filteredResults.value.findIndex((item) => item.id === store.id);
  let nextIndex = index;

  switch (e.code) {
    case 'ArrowDown':
      e.preventDefault();
      e.stopPropagation();
      nextIndex = (index + 1) % filteredResults.value.length;
      store.id = filteredResults.value[nextIndex].id;
      scrollToItem(nextIndex);
      break;
    case 'ArrowUp':
      e.preventDefault();
      e.stopPropagation();
      // 循环导航：从第一项到最后一项
      nextIndex = (index - 1 + filteredResults.value.length) % filteredResults.value.length;
      store.id = filteredResults.value[nextIndex].id;
      scrollToItem(nextIndex);
      break;
    case 'Enter':
      e.preventDefault();
      e.stopPropagation();
      if (filteredResults.value[index]) {
        selectItem(filteredResults.value[index]);
      }
      break;
  }
};

// 分类标签模式的键盘事件处理
const handleTabModeKeys = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowRight':
      e.preventDefault();
      e.stopPropagation();
      currentTabIndex.value = (currentTabIndex.value + 1) % tabs.value.length;
      switchTab(tabs.value[currentTabIndex.value].value);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      e.stopPropagation();
      currentTabIndex.value = (currentTabIndex.value - 1 + tabs.value.length) % tabs.value.length;
      switchTab(tabs.value[currentTabIndex.value].value);
      break;
    case 'ArrowDown':
      e.preventDefault();
      e.stopPropagation();
      // 从分类标签进入列表
      if (filteredResults.value.length > 0) {
        setMode('LIST');
      }
      break;
    case 'ArrowUp':
      e.preventDefault();
      e.stopPropagation();
      // 从分类标签返回搜索框
      emit('backToSearch');
      break;
    case 'Enter':
      e.preventDefault();
      e.stopPropagation();
      // 按下回车进入列表模式
      if (filteredResults.value.length > 0) {
        setMode('LIST');
      }
      break;
  }
};

// 滚动到指定项 - 使用虚拟滚动组件的 API
const scrollToItem = (index: number) => {
  if (!scrollerRef.value) return;
  
  // 使用 nextTick 确保 DOM 更新完成后再滚动
  nextTick(() => {
    // 获取滚动容器
    const scroller = scrollerRef.value.$el;
    if (!scroller) return;
    
    // 计算目标位置
    const itemHeight = 44; // 与 :item-size 保持一致
    const targetPosition = index * itemHeight;
    
    // 获取容器高度和当前滚动位置
    const containerHeight = scroller.clientHeight;
    const currentScroll = scroller.scrollTop;
    const itemTop = targetPosition;
    const itemBottom = targetPosition + itemHeight;
    
    // 检查项目是否在视口内
    const viewportTop = currentScroll;
    const viewportBottom = currentScroll + containerHeight;
    
    // 如果项目在视口下方，滚动到底部对齐
    if (itemBottom > viewportBottom) {
      scroller.scrollTop = itemBottom - containerHeight;
    }
    // 如果项目在视口上方，滚动到顶部对齐  
    else if (itemTop < viewportTop) {
      scroller.scrollTop = itemTop;
    }
  });
};

// 处理列表项点击
function handleItemClick(item: ContentType) {
  // 鼠标点击列表项时，切换到LIST模式（显示返回提示）
  if (!isListMode.value) {
    setMode('LIST');
  }
  selectItem(item);
}

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

// 进入列表模式
const enterListMode = () => {
  if (filteredResults.value.length > 0) {
    setMode('LIST');
  }
};

// 进入分类标签模式
const enterTabMode = () => {
  if (filteredResults.value.length > 0) {
    setMode('TAB');
  }
};

// 返回搜索框模式
const backToSearchMode = () => {
  setMode('SEARCH');
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyEvent);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyEvent);
});

defineExpose({
  switchTab,
  enterListMode,
  enterTabMode,
  backToSearchMode,
  currentMode
});
</script>
<style lang="scss" scoped>
.result-container {
  @apply bg-search px-1 rounded-bl-lg rounded-br-lg;

  .tabs {
    @apply flex items-center justify-between pt-2 pb-1 border-search;

    .tabs-group {
      @apply flex gap-2;
    }

    .tab {
      @apply px-3 py-1 text-sm text-search cursor-pointer rounded-md;

      &.active {
        @apply bg-search-hover text-search;
      }
    }

    .return-hint {
      @apply flex items-center gap-1 mr-2 text-xs cursor-pointer;
      animation: fadeIn 0.3s ease-in-out;
      
      .hint-key {
        @apply px-1.5 py-0.5 rounded font-medium border;
        transition: all 0.2s ease;
      }
      
      .hint-text {
        @apply text-gray-600 dark:text-gray-400;
      }
      
      &:hover .hint-key {
        transform: scale(1.05);
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
