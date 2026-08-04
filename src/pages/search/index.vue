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
import { ArrowRight, Search } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { usePluginStore } from '@/store';
import aiChatSparkleIcon from '@/assets/ai-chat-sparkle-icon.png';
import {
  markPendingLocalAiPromptForNewChat,
  PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY,
  PENDING_LOCAL_AI_PROMPT_STORAGE_KEY
} from '@/plugins/local-ai/promptTransfer';

const { t } = useI18n();
const pluginStore = usePluginStore();
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
  await nextTick();
  requestAnimationFrame(() => searchInputRef.value?.focus());
};

const aiPrompt = computed(() => searchText.value.trim());
const showAiEntry = computed(
  () => pluginStore.isEnabled('local-ai') && Boolean(aiPrompt.value)
);

const openAiChat = async (): Promise<void> => {
  const prompt = aiPrompt.value;
  if (!prompt) return;

  try {
    markPendingLocalAiPromptForNewChat(localStorage, prompt);
    await invoke('show_hide_window_command', {
      label: 'local_ai_chat',
      context: prompt
    });
  } catch (error) {
    if (localStorage.getItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY) === prompt) {
      localStorage.removeItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY);
      localStorage.removeItem(PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY);
    }
    ErrorHandler.handle(
      error,
      {
        type: ErrorType.TAURI_COMMAND_ERROR,
        operation: 'openAiChat',
        timestamp: new Date()
      },
      {
        userMessage: '打开 AI 聊天失败'
      }
    );
  }
};

const handleAiChatShortcut = (event: KeyboardEvent): void => {
  const isEnter = event.key === 'Enter' || event.code === 'NumpadEnter';
  if (
    !isEnter ||
    (!event.ctrlKey && !event.metaKey) ||
    event.isComposing ||
    event.repeat ||
    !showAiEntry.value
  ) {
    return;
  }

  event.preventDefault();
  event.stopImmediatePropagation();
  void openAiChat();
};

const handleSearchKeyDown = async (event: Event): Promise<void> => {
  await handleKeyDown(event);
};

onMounted(async () => {
  // Capture the shortcut at window level so Element Plus input forwarding and
  // result-list keyboard listeners cannot consume Ctrl+Enter first.
  window.addEventListener('keydown', handleAiChatShortcut, true);

  // The webview can already be mounted while its window is hidden.
  // Focus explicitly so input works before a pointer-enter event occurs.
  void focusSearchWindow();

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
  window.removeEventListener('keydown', handleAiChatShortcut, true);
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
    <section class="search-command-surface">
      <section class="search transparent-input">
        <el-input
          ref="searchInputRef"
          class="input"
          v-model="searchText"
          @keydown="handleSearchKeyDown"
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
      <button
        v-if="showAiEntry"
        type="button"
        class="ai-chat-entry"
        @mousedown.prevent
        @click="openAiChat"
      >
        <span class="ai-chat-entry-icon" aria-hidden="true">
          <img :src="aiChatSparkleIcon" alt="" />
        </span>
        <span class="ai-chat-entry-copy">
          <span class="ai-chat-entry-title">{{ t('search.askAi') }}</span>
          <span class="ai-chat-entry-query">“{{ aiPrompt }}”</span>
        </span>
        <kbd class="ai-chat-entry-shortcut" aria-hidden="true">Ctrl Enter</kbd>
        <ArrowRight class="ai-chat-entry-arrow" theme="outline" size="18" />
      </button>
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

  .search-command-surface {
    @apply flex flex-col;
  }

  .ai-chat-entry {
    @apply flex h-11 w-full items-center gap-3 bg-search px-4 text-left text-search;

    transition:
      background-color 0.18s ease,
      border-color 0.18s ease,
      box-shadow 0.18s ease;

    &:focus-visible {
      @apply outline-none;

      box-shadow: 0 0 0 2px
        color-mix(in srgb, var(--search-result-accent) 28%, transparent);
    }
  }

  .ai-chat-entry-icon {
    @apply inline-flex h-5 w-5 flex-shrink-0 items-center justify-center;

    img {
      @apply block h-full w-full object-contain;
    }
  }

  .ai-chat-entry-copy {
    @apply flex min-w-0 flex-1 items-center gap-3 text-[13px] leading-none;
  }

  .ai-chat-entry-title {
    @apply flex-shrink-0 font-semibold text-search;
  }

  .ai-chat-entry-query {
    @apply truncate font-medium text-search-secondary;
  }

  .ai-chat-entry-shortcut {
    @apply inline-flex h-6 flex-shrink-0 items-center justify-center rounded-md border border-search bg-search-hover px-2 font-sans text-[10px] font-medium leading-none text-search-secondary;

    box-shadow: 0 1px 2px rgb(15 23 42 / 5%);
  }

  .ai-chat-entry-arrow {
    @apply ml-0.5 flex-shrink-0 text-search-secondary;
  }

  :deep(.hidden) {
    display: none;
  }
}
</style>
