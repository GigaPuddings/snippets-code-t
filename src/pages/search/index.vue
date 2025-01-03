<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { Home } from '@icon-park/vue-next';
import useSetIgnoreCursorEvents from '@/hooks/useSetIgnoreCursorEvents';
import { useSearch } from '@/hooks/useSearch';
import { listen } from '@tauri-apps/api/event';

const { searchText, searchResults } = useSearch();

const mainRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLElement | null>(null);

const handleGoConfig = async () => {
  try {
    await invoke('hotkey_config_command');
    console.log('配置窗口创建成功');
  } catch (error) {
    console.error('创建窗口失败:', error);
  }
};

onMounted(async () => {
  // if (mainRef.value) {
  //   useSetIgnoreCursorEvents(mainRef.value);
  // }
  listen('windowFocused', () => {
    console.log('窗口获得焦点');
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
.main {
  @apply bg-slate-50 rounded-lg shadow-inner ring-1 ring-black/5 dark:bg-[#22282c] p-3;

  .search {
    @apply rounded-lg flex items-center;

    .input {
      @apply dark:bg-[#282d32] dark:text-stone-300 ml-1 mr-2 font-semibold text-[17px] text-zinc-700;
    }

    .home {
      @apply p-1 hover:opacity-80 rounded-md dark:text-stone-300 text-zinc-600 cursor-pointer;
    }
  }
}
</style>
