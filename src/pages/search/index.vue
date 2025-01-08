<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { Home } from '@icon-park/vue-next';
// import useSetIgnoreCursorEvents from '@/hooks/useSetIgnoreCursorEvents';
import { useSearch } from '@/hooks/useSearch';
import { listen } from '@tauri-apps/api/event';
import { onMounted } from 'vue';
import { initTheme } from '@/utils/theme';

const { searchText, searchResults } = useSearch();

const mainRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLElement | null>(null);

const handleGoConfig = async () => {
  try {
    await invoke('hotkey_config_command');
  } catch (error) {
    console.error('创建窗口失败:', error);
  }
};

onMounted(async () => {
  // 初始化主题
  initTheme();

  // 监听主题变化事件
  await listen('theme-changed', (event: any) => {
    const { isDark } = event.payload;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  });

  // if (mainRef.value) {
  //   useSetIgnoreCursorEvents(mainRef.value);
  // }
  listen('windowFocused', () => {
    // 输入框聚焦
    searchInputRef.value?.focus();
  });
});
</script>

<template>
  <main ref="mainRef" data-tauri-drag-region class="main">
    <section class="search">
      <el-input
        ref="searchInputRef"
        class="input"
        autofocus
        size="large"
        v-model="searchText"
      />
      <home
        class="home"
        theme="outline"
        size="24"
        :strokeWidth="3"
        @click="handleGoConfig"
      />
    </section>
    <Result :results="searchResults" />
  </main>
</template>

<style lang="scss" scoped>
.search-container {
  // 如果有背景色相关的样式，移除它们
  // 使用 Tailwind 的 bg-search 类替代
}

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
  @apply bg-search rounded-md shadow-inner ring-1 ring-black/5 p-3;

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
