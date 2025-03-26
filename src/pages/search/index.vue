<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { useSetIgnoreCursorEvents } from '@/hooks/useSetIgnoreCursorEvents';
import { useSearch } from '@/hooks/useSearch';
import { listen } from '@tauri-apps/api/event';
import { onMounted } from 'vue';

const { searchText, searchResults, handleEnterSearch, clearSearch } =
  useSearch();

const searchRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);

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
    // 如果输入框有值选中文本，没有则聚焦
    if (searchText.value) {
      searchInputRef.value?.select();
    } else {
      searchInputRef.value?.focus();
    }
  });
});

// 添加键盘事件处理
const handleKeyDown = async (e: Event) => {
  if (!(e instanceof KeyboardEvent)) return;
  if (e.key === 'Enter' && !e.isComposing) {
    // 如果没有搜索结果，执行搜索
    if (searchResults.value.length === 0) {
      await handleEnterSearch();
    }
  }
};
</script>

<template>
  <main ref="searchRef" data-tauri-drag-region class="main">
    <section class="search">
      <el-input
        ref="searchInputRef"
        class="input"
        autofocus
        v-model="searchText"
        @keydown="handleKeyDown"
      />
      <img
        src="@/assets/svg/home.svg"
        class="home"
        loading="lazy"
        @click="handleGoConfig"
      />
    </section>
    <Result :results="searchResults" :onClearSearch="clearSearch" />
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
  @apply bg-search rounded-md p-3 border border-panel box-border;

  .search {
    @apply flex items-center border-b border-search;

    .input {
      @apply rounded-sm mr-2 py-[2px] text-base text-search;
    }

    .home {
      @apply p-1 w-9 h-9 rounded-md opacity-60 hover:opacity-100 cursor-pointer;
    }
  }
}
</style>
