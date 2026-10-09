<template>
  <div v-if="show" class="search-panel" :class="{ 'dark-theme': dark }">
    <div class="search-input-wrapper">
      <UiSearch class="search-icon" width="16" height="16" />
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        class="search-input"
        :placeholder="$t('editor.searchPlaceholder')"
        @keydown.enter.prevent="handleEnter"
        @keydown.esc="close"
        @keydown.left.stop
        @keydown.right.stop
        @keydown.home.stop
        @keydown.end.stop
      />
      <div class="search-controls">
        <span v-if="totalMatches > 0" class="match-count">
          {{ currentMatchIndex === -1 ? '-' : currentMatchIndex + 1 }} /
          {{ totalMatches }}
        </span>
        <button
          class="search-btn"
          :disabled="totalMatches === 0"
          :title="$t('editor.previousMatch')"
          @click="findPrevious"
        >
          <UiChevronUp width="16" height="16" />
        </button>
        <button
          class="search-btn"
          :disabled="totalMatches === 0"
          :title="$t('editor.nextMatch')"
          @click="findNext"
        >
          <UiChevronDown width="16" height="16" />
        </button>
        <button
          class="search-btn match-case-btn"
          :class="{ active: matchCase }"
          :title="$t('editor.matchCase')"
          @click="matchCase = !matchCase"
        >
          Aa
        </button>
        <button
          class="search-btn"
          :title="$t('editor.closeSearch')"
          @click="close"
        >
          <UiX width="16" height="16" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiX from '~icons/lucide/x';
import UiChevronDown from '~icons/lucide/chevron-down';
import UiChevronUp from '~icons/lucide/chevron-up';
import UiSearch from '~icons/lucide/search';
interface Props {
  show: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false
});

const emits = defineEmits<{
  close: [];
  search: [query: string, matchCase: boolean];
  next: [];
  previous: [];
}>();

const searchInputRef = ref<HTMLInputElement | null>(null);
const searchQuery = ref('');
const matchCase = ref(false);
const currentMatchIndex = ref(0);
const totalMatches = ref(0);

// 防抖定时器
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
const DEBOUNCE_DELAY = 150; // 减少防抖延迟

const debounceSearch = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    if (searchQuery.value) {
      emits('search', searchQuery.value, matchCase.value);
    }
  }, DEBOUNCE_DELAY);

  // 立即触发一次搜索（防抖期间也更新高亮）
  if (searchQuery.value) {
    emits('search', searchQuery.value, matchCase.value);
  }
};

onUnmounted(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
});

watch(
  () => props.show,
  (show) => {
    if (show) {
      nextTick(() => {
        searchInputRef.value?.focus();
        searchInputRef.value?.select();
      });
    }
  }
);

// 移除直接监听 searchQuery 和 matchCase，改为使用防抖搜索
// watch([searchQuery, matchCase], () => {
//   if (searchQuery.value) {
//     emits('search', searchQuery.value, matchCase.value);
//   }
// });

// 监听输入和大小写切换，使用防抖
watch([searchQuery, matchCase], () => {
  debounceSearch();
});

const handleEnter = (event: KeyboardEvent) => {
  event.shiftKey ? findPrevious() : findNext();
};

const findNext = () => {
  if (totalMatches.value > 0) {
    emits('next');
  }
};

const findPrevious = () => {
  if (totalMatches.value > 0) {
    emits('previous');
  }
};

const close = () => {
  searchQuery.value = '';
  currentMatchIndex.value = 0;
  totalMatches.value = 0;
  emits('close');
};

const updateMatchInfo = (current: number, total: number) => {
  currentMatchIndex.value = current;
  totalMatches.value = total;
};

defineExpose({
  updateMatchInfo,
  focus: () => searchInputRef.value?.focus()
});
</script>

<style lang="scss" scoped>
.search-panel {
  @apply absolute top-2 right-2 z-20 border rounded-lg shadow-lg;

  background-color: var(--panel-bg);
  border-color: var(--panel-border);
  animation: slideDown 0.2s ease-out;

  &.dark-theme {
    .search-input {
      color: var(--editor-text);
      background-color: var(--editor-bg);
      border-color: var(--panel-border);

      &::placeholder {
        color: var(--panel-text-secondary);
      }

      &:focus {
        border-color: var(--el-color-primary);
      }
    }

    .search-icon {
      color: var(--panel-text-secondary);
    }

    .match-count {
      color: var(--panel-text-secondary);
    }

    .search-btn {
      color: var(--panel-text-secondary);

      &:hover:not(:disabled) {
        color: var(--panel-text);
        background-color: var(--panel-hover-bg);
      }

      &:disabled {
        color: var(--panel-text-secondary);
        opacity: 0.5;
      }

      &.active {
        color: white;
        background-color: var(--el-color-primary);
      }
    }
  }
}

.search-input-wrapper {
  @apply flex items-center gap-2 p-2;
}

.search-icon {
  @apply flex-shrink-0;

  color: var(--panel-text-secondary);
}

.search-input {
  @apply flex-1 px-2 py-1 text-sm rounded outline-none;

  min-width: 200px;
  color: var(--panel-text);
  background-color: var(--panel-bg);
  border: 1px solid var(--panel-border);
  transition: border-color 0.2s ease;

  &::placeholder {
    color: var(--panel-text-secondary);
  }

  &:focus {
    border-color: var(--el-color-primary);
  }
}

.search-controls {
  @apply flex items-center gap-1;
}

.match-count {
  @apply text-xs px-2;

  min-width: 50px;
  color: var(--panel-text-secondary);
  text-align: center;
}

.search-btn {
  @apply flex items-center justify-center w-7 h-7 rounded cursor-pointer border-none bg-transparent;

  color: var(--panel-text-secondary);
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    color: var(--panel-text);
    background-color: var(--panel-hover-bg);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.match-case-btn {
    @apply text-xs font-semibold;

    font-family: ui-monospace, 'SF Mono', Monaco, Consolas, monospace;

    &.active {
      @apply bg-blue-600 text-white;
    }
  }

  svg {
    @apply flex-shrink-0;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
