<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { Home } from '@icon-park/vue-next';
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
        size="large"
        v-model="searchText"
        @keydown="handleKeyDown"
      />
      <home
        class="home"
        theme="outline"
        size="22"
        :strokeWidth="4"
        strokeLinecap="butt"
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
  @apply bg-search rounded-md p-3 border border-black/10 box-border;

  .search {
    @apply rounded-lg flex items-center;

    .input {
      @apply bg-search-input rounded-sm ml-1 mr-2 font-semibold text-[17px] text-search;
    }

    .home {
      @apply p-1 hover:opacity-80 rounded-md text-search cursor-pointer;
    }
  }
}
</style>
