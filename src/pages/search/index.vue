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
import SearchInputIcon from '~icons/lucide/search';
import Search from '~icons/lucide/search';
import { useI18n } from 'vue-i18n';
import { usePluginStore } from '@/store';
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
  isSearching,
  degradedSources,
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
  <main ref="searchRef" data-tauri-drag-region class="search-window-canvas">
    <section class="main">
      <section class="search-command-surface">
        <section class="search">
          <SearchInputIcon
            class="ml-2 shrink-0 text-search-secondary"
            width="20"
            height="20"
          />
          <el-input
            ref="searchInputRef"
            class="input"
            v-model="searchText"
            :placeholder="t('search.globalPlaceholder')"
            aria-controls="quick-search-results"
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
            <Search width="16" height="16" />
          </button>
          <button
            type="button"
            class="home"
            :aria-label="t('search.openConfig')"
            @click="handleGoConfig"
          >
            <img
              src="@tauri/icons/icon.png"
              class="h-6 w-6 object-contain"
              alt=""
            />
          </button>
        </section>
      </section>
      <p
        v-if="isSearching && !hasResults"
        class="px-3 py-2 text-ui-caption text-search-secondary"
        role="status"
      >
        {{ t('search.loadingSources') }}
      </p>
      <p
        v-if="degradedSources.length"
        class="px-3 py-1 text-ui-caption text-search-secondary"
        role="status"
      >
        {{ t('search.partialResults') }}
      </p>
      <p
        v-if="searchText.trim() && !isSearching && !hasResults"
        class="px-3 py-4 text-ui-caption text-search-secondary"
      >
        {{ t('search.noResults') }}
      </p>
      <Result
        ref="resultRef"
        :results="searchResults"
        :searchQuery="searchText"
        :onClearSearch="clearSearch"
        :class="{ hidden: !hasResults }"
        @back-to-search="handleBackToSearch"
        @close="getCurrentWindow().hide()"
      >
        <template #aiAction>
          <button
            v-if="showAiEntry"
            type="button"
            class="ml-auto inline-flex min-w-0 items-center gap-1"
            @mousedown.prevent
            @click="openAiChat"
          >
            <kbd
              class="rounded border border-search px-1 py-0.5 font-ui text-[10px]"
            >
              Ctrl Enter
            </kbd>
            <span class="truncate">{{ t('search.askAiShort') }}</span>
          </button>
        </template>
      </Result>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.search-window-canvas {
  @apply bg-transparent p-2;
}

.main {
  @apply relative box-border rounded-ui-lg border border-ui bg-search p-3 font-ui shadow-toast;
}

.search-command-surface {
  @apply flex flex-col;
}

.search {
  @apply flex h-11 items-center gap-1 rounded-ui border border-search bg-[var(--search-input-bg)];
}

.input {
  @apply min-w-0 flex-1 text-ui text-search;
}

.input :deep(.el-input__wrapper) {
  @apply bg-transparent shadow-none;
}

.input :deep(.el-input__inner) {
  font-size: var(--app-ui-font-size);
  color: var(--search-text-color);
}

.deep-search-toggle,
.home {
  @apply flex h-8 w-8 shrink-0 items-center justify-center rounded-ui bg-transparent text-search-secondary;
}

.deep-search-toggle:hover,
.deep-search-toggle.active,
.home:hover {
  @apply bg-search-hover text-search;
}

.main :deep(.hidden) {
  display: none;
}
</style>
