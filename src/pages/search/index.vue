<script lang="ts" setup>
import { activateConfigWindow } from '@/api/windows';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useFitWindowToElement } from '@/hooks/useFitWindowToElement';
import { useSearch } from '@/hooks/useSearch';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useSearchKeyboard } from './composables/useSearchKeyboard';
import { getQuickSearchWindowHeight } from './composables/searchWindowSizing';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import Result from './components/Result.vue';
import Sparkles from '~icons/lucide/sparkles';
import { useI18n } from 'vue-i18n';
import { usePluginStore } from '@/store';
import { openNewLocalAiChat } from '@/api/localAi';

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
} = useSearch({ showRecentActionsOnEmpty: false });
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
    await activateConfigWindow();
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
const hasSearchQuery = computed(() => Boolean(aiPrompt.value));
const searchWindowHeight = computed(() => {
  const availableTop =
    (window.screen as Screen & { availTop?: number }).availTop ?? 0;
  const availableHeight =
    window.screen.availHeight - Math.max(0, window.screenY - availableTop);
  return getQuickSearchWindowHeight(hasSearchQuery.value, availableHeight);
});
const showAiEntry = computed(
  () => pluginStore.isEnabled('local-ai') && Boolean(aiPrompt.value)
);

const openAiChat = async (): Promise<void> => {
  const prompt = aiPrompt.value;
  if (!prompt) return;

  try {
    await openNewLocalAiChat(prompt);
  } catch (error) {
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
  <main data-tauri-drag-region class="search-window-canvas">
    <section
      ref="searchRef"
      data-tauri-drag-region
      class="main"
      :class="{ 'has-query': hasSearchQuery }"
      :style="{ height: `${searchWindowHeight}px` }"
    >
      <section class="search-command-surface" data-tauri-drag-region>
        <!-- Tauri matches direct targets; decorative icons forward hits here. -->
        <section class="search" data-tauri-drag-region>
          <el-input
            ref="searchInputRef"
            class="input transparent-input"
            v-model="searchText"
            :aria-label="t('search.globalPlaceholder')"
            aria-controls="quick-search-results"
            @keydown="handleSearchKeyDown"
            @focus="handleInputFocus"
          />
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
      <Result
        ref="resultRef"
        :results="searchResults"
        :searchQuery="searchText"
        :deep-search-enabled="deepSearchEnabled"
        :onClearSearch="clearSearch"
        :class="{ hidden: !hasSearchQuery }"
        @toggle-deep-search="toggleDeepSearch"
        @back-to-search="handleBackToSearch"
        @close="getCurrentWindow().hide()"
      >
        <template #status>
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
            v-if="hasSearchQuery && !isSearching && !hasResults"
            class="px-3 py-4 text-ui-caption text-search-secondary"
          >
            {{ t('search.noResults') }}
          </p>
        </template>
        <template #aiAction>
          <button
            v-if="showAiEntry"
            type="button"
            class="inline-flex h-6 min-w-0 items-center gap-1 font-medium leading-none hover:text-search-heading"
            @mousedown.prevent
            @click="openAiChat"
          >
            <Sparkles width="13" height="13" class="text-search-accent" />
            <kbd>Ctrl Enter</kbd>
            <span class="truncate">{{ t('search.askAiShort') }}</span>
          </button>
        </template>
      </Result>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.search-window-canvas {
  @apply h-full w-full overflow-hidden rounded-[var(--workspace-window-radius)] bg-search;
}

.main {
  @apply relative box-border flex w-full flex-col overflow-hidden rounded-[var(--workspace-window-radius)] border border-ui bg-search p-2 font-ui;
}

.main.has-query {
  @apply pb-0;
}

.search-command-surface {
  @apply flex h-10 shrink-0 flex-col border-b border-search;
}

.search {
  @apply flex h-full items-center gap-1;
}

.input {
  @apply min-w-0 flex-1 text-ui text-search;
}

.input :deep(.el-input__inner) {
  @apply text-base font-medium text-search-heading;
}

.home {
  @apply flex h-8 w-8 shrink-0 items-center justify-center rounded-ui bg-transparent text-search-secondary;
}

.home:hover {
  @apply bg-search-hover text-search;
}

.main :deep(.hidden) {
  display: none;
}
</style>
