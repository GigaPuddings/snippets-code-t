<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { useSetIgnoreCursorEvents } from '@/hooks/useSetIgnoreCursorEvents';
import { useSearch } from '@/hooks/useSearch';
import { useFocusMode } from '@/hooks/useFocusMode';
import { listen } from '@tauri-apps/api/event';
import { onMounted, ref } from 'vue';
import Result from './components/Result.vue';
const { searchText, searchResults, handleEnterSearch, clearSearch } =
  useSearch();
const { isSearchMode, setMode, canSwitchToList } = useFocusMode();

const searchRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const resultRef = ref<InstanceType<typeof Result> | null>(null);

// 搜索框获得焦点时，切换到搜索模式
const handleInputFocus = () => {
  setMode('SEARCH');
};

// 从结果列表返回到搜索框
const handleBackToSearch = () => {
  setMode('SEARCH');
  searchInputRef.value?.focus();
};

const handleGoConfig = async () => {
  try {
    await invoke('hotkey_config_command');
  } catch (error) {
    console.error('创建窗口失败:', error);
  }
};

onMounted(async () => {
  if (searchRef.value) {
    useSetIgnoreCursorEvents(searchRef.value);
  }
  
  listen('windowFocused', () => {
    // 窗口聚焦时，重置到搜索框模式
    setMode('SEARCH');
    // 如果输入框有值选中文本，没有则聚焦
    if (searchText.value) {
      resultRef.value?.switchTab('text');
      searchInputRef.value?.select();
    } else {
      searchInputRef.value?.focus();
    }
  });
});


// 搜索框键盘事件处理
const handleKeyDown = async (e: Event) => {
  if (!(e instanceof KeyboardEvent)) return;
  
  // 只在搜索框模式下处理键盘事件
  if (!isSearchMode.value) return;

  const input = searchInputRef.value;
  if (!input) return;

  switch (e.code) {
    case 'Enter':
      if (!e.isComposing) {
        // 如果没有搜索结果，执行搜索
        if (searchResults.value.length === 0) {
          await handleEnterSearch();
        } else {
          // 如果有搜索结果，进入列表模式
          e.preventDefault();
          resultRef.value?.enterListMode();
        }
      }
      break;
    
    case 'ArrowDown':
      // 下键进入列表模式
      if (canSwitchToList.value) {
        e.preventDefault();
        resultRef.value?.enterListMode();
      }
      break;
    
    case 'ArrowLeft':
    case 'ArrowRight':
      // 当光标在边界时，可以用左右键切换到分类标签
      const inputValue = input.value || '';
      const atStart = input.selectionStart === 0;
      const atEnd = input.selectionEnd === inputValue.length;
      
      // 边界检测：光标在开头按左键，或在结尾按右键
      if ((e.code === 'ArrowLeft' && atStart) || (e.code === 'ArrowRight' && atEnd)) {
        // 即使没有结果也允许进入分类标签模式（用于切换分类）
        e.preventDefault();
        resultRef.value?.enterTabMode();
      }
      break;
    
    case 'Tab':
      e.preventDefault();
      // Shift+Tab：如果有结果直接进入列表模式
      if (e.shiftKey && canSwitchToList.value) {
        resultRef.value?.enterListMode();
      } else {
        // Tab 键：进入分类标签模式（即使没有结果也可以切换分类）
        resultRef.value?.enterTabMode();
      }
      break;
  }
};
</script>

<template>
  <main ref="searchRef" data-tauri-drag-region class="main">
    <section class="search transparent-input">
      <el-input
        ref="searchInputRef"
        class="input"
        autofocus
        v-model="searchText"
        @keydown="handleKeyDown"
        @focus="handleInputFocus"
      />
      <img
        src="@tauri/icons/icon.png"
        class="home"
        loading="eager"
        @click="handleGoConfig"
      />
    </section>
    <Result
      ref="resultRef"
      :results="searchResults"
      :onClearSearch="clearSearch"
      @back-to-search="handleBackToSearch"
    />
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  background-color: var(--search-input-bg);
  box-shadow: none;

  &.is-focus {
    box-shadow: 0 0 0 1px var(--categories-text-color-active);
  }
}

:deep(.el-input__inner) {
  color: var(--search-text);

  &::placeholder {
    color: var(--search-placeholder);
  }
}

.main {
  /* 拖拽手势 */
  @apply relative bg-search rounded-md p-3 border-[0.1rem] border-zinc-300 dark:border-black box-border;

  .search {
    @apply flex items-center border-b border-search;

    .input {
      @apply rounded-sm mr-2 py-[2px] text-base text-search;
    }

    .home {
      @apply p-1 w-9 h-9 rounded-md opacity-90 hover:opacity-100 cursor-pointer;
    }
  }
}
</style>
