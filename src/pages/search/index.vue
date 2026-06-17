<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useFitWindowToElement } from '@/hooks/useFitWindowToElement';
import { useSearch } from '@/hooks/useSearch';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchKeyboard } from './composables/useSearchKeyboard';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import Result from './components/Result.vue';
import { Search } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const {
  searchText,
  searchResults,
  deepSearchEnabled,
  hasResults,
  handleEnterSearch,
  clearSearch,
  toggleDeepSearch
} = useSearch();
const { isSearchMode, setMode, canSwitchToList } = useFocusMode();

const searchRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const resultRef = ref<InstanceType<typeof Result> | null>(null);
let unlistenWindowFocused: UnlistenFn | null = null;
let unlistenResetSearchState: UnlistenFn | null = null;

useFitWindowToElement(searchRef);

// 使用键盘导航 composable
const { handleKeyDown } = useSearchKeyboard({
  searchInputRef,
  resultRef,
  isSearchMode,
  canSwitchToList,
  searchResultsLength: computed(() => searchResults.value.length),
  handleEnterSearch
});

/**
 * 搜索框获得焦点时，切换到搜索模式
 */
const handleInputFocus = (): void => {
  setMode('SEARCH');
};

/**
 * 从结果列表返回到搜索框
 */
const handleBackToSearch = (): void => {
  setMode('SEARCH');
  searchInputRef.value?.focus();
};

/**
 * 打开配置窗口
 */
const handleGoConfig = async (): Promise<void> => {
  try {
    await invoke('hotkey_config_command');
  } catch (error) {
    ErrorHandler.handle(
      error,
      {
        type: ErrorType.TAURI_COMMAND_ERROR,
        operation: 'handleGoConfig',
        timestamp: new Date()
      },
      {
        userMessage: '打开配置窗口失败'
      }
    );
  }
};
const focusSearchWindow = async (): Promise<void> => {
  await getCurrentWindow()
    .setFocus()
    .catch(() => undefined);
  setMode('SEARCH');
  searchInputRef.value?.focus();
};

onMounted(async () => {
  unlistenWindowFocused = await listen('windowFocused', () => {
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

  // 监听重置搜索状态事件（当窗口被其他操作关闭时）
  unlistenResetSearchState = await listen('reset-search-state', () => {
    // 清除搜索内容和结果
    clearSearch();
    // 重置到搜索模式
    setMode('SEARCH');
  });
});

onUnmounted(() => {
  unlistenWindowFocused?.();
  unlistenResetSearchState?.();
  unlistenWindowFocused = null;
  unlistenResetSearchState = null;
});
</script>

<template>
  <main
    ref="searchRef"
    data-tauri-drag-region
    class="main"
    @mouseenter="focusSearchWindow"
  >
    <section class="search transparent-input">
      <el-input
        ref="searchInputRef"
        class="input"
        v-model="searchText"
        @keydown="handleKeyDown"
        @focus="handleInputFocus"
      />
      <button
        type="button"
        class="deep-search-toggle"
        :class="{ active: deepSearchEnabled }"
        :title="
          deepSearchEnabled
            ? t('search.deepSearchOn')
            : t('search.deepSearchOff')
        "
        :aria-label="t('search.deepSearch')"
        :aria-pressed="deepSearchEnabled"
        @mousedown.prevent
        @click="toggleDeepSearch"
      >
        <Search theme="outline" size="16" />
      </button>
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
      :searchQuery="searchText"
      :onClearSearch="clearSearch"
      :class="{ hidden: !hasResults }"
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
  @apply relative bg-search rounded-md p-2 border-[0.1rem] border-search box-border;

  .search {
    @apply flex items-center border-b border-search;

    .input {
      @apply rounded-sm mr-2 py-[2px] text-base text-search;
    }

    .deep-search-toggle {
      @apply flex items-center justify-center w-8 h-8 mr-2 rounded-md text-search-secondary bg-transparent border border-transparent cursor-pointer;
      transition:
        color 0.18s ease,
        background-color 0.18s ease,
        border-color 0.18s ease;

      &:hover,
      &.active {
        @apply bg-search-hover text-search border-search;
      }
    }

    .home {
      @apply p-1 w-9 h-9 rounded-md opacity-90 hover:opacity-100 cursor-pointer;
    }
  }

  :deep(.hidden) {
    display: none;
  }
}
</style>
