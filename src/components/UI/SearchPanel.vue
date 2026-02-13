<template>
  <div v-if="show" class="search-panel" :class="{ 'dark-theme': dark }">
    <div class="search-input-wrapper">
      <svg class="search-icon" viewBox="0 0 24 24" width="16" height="16">
        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        class="search-input"
        :placeholder="$t('editor.searchPlaceholder')"
        @keydown.enter.prevent="handleEnter"
        @keydown.esc="close"
      />
      <div class="search-controls">
        <span v-if="totalMatches > 0" class="match-count">
          {{ currentMatchIndex + 1 }} / {{ totalMatches }}
        </span>
        <button
          class="search-btn"
          :disabled="totalMatches === 0"
          :title="$t('editor.previousMatch')"
          @click="findPrevious"
        >
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
        </button>
        <button
          class="search-btn"
          :disabled="totalMatches === 0"
          :title="$t('editor.nextMatch')"
          @click="findNext"
        >
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
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
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

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

watch(() => props.show, (show) => {
  if (show) {
    nextTick(() => {
      searchInputRef.value?.focus();
      searchInputRef.value?.select();
    });
  }
});

watch([searchQuery, matchCase], () => {
  if (searchQuery.value) {
    emits('search', searchQuery.value, matchCase.value);
  }
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
  @apply absolute top-2 right-2 z-20 bg-white border border-gray-300 rounded-lg shadow-lg;
  animation: slideDown 0.2s ease-out;

  &.dark-theme {
    @apply bg-[#2a2a2a] border-[#3a3a3a];

    .search-input {
      @apply bg-[#1e1e1e] text-gray-200 border-[#3a3a3a];

      &::placeholder {
        @apply text-gray-500;
      }

      &:focus {
        @apply border-[#5d6dfd];
      }
    }

    .search-icon {
      @apply text-gray-400;
    }

    .match-count {
      @apply text-gray-400;
    }

    .search-btn {
      @apply text-gray-400;

      &:hover:not(:disabled) {
        @apply bg-[#3a3a3a] text-gray-200;
      }

      &:disabled {
        @apply text-gray-600;
      }

      &.active {
        @apply bg-[#5d6dfd] text-white;
      }
    }
  }
}

.search-input-wrapper {
  @apply flex items-center gap-2 p-2;
}

.search-icon {
  @apply flex-shrink-0 text-gray-500;
}

.search-input {
  @apply flex-1 px-2 py-1 text-sm bg-white border border-gray-300 rounded outline-none;
  min-width: 200px;
  transition: border-color 0.2s ease;

  &::placeholder {
    @apply text-gray-400;
  }

  &:focus {
    @apply border-blue-500;
  }
}

.search-controls {
  @apply flex items-center gap-1;
}

.match-count {
  @apply text-xs text-gray-600 px-2;
  min-width: 50px;
  text-align: center;
}

.search-btn {
  @apply flex items-center justify-center w-7 h-7 text-gray-600 rounded cursor-pointer border-none bg-transparent;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    @apply bg-gray-100 text-gray-800;
  }

  &:disabled {
    @apply text-gray-400 cursor-not-allowed opacity-50;
  }

  &.match-case-btn {
    @apply text-xs font-semibold;
    font-family: ui-monospace, 'SF Mono', 'Monaco', 'Consolas', monospace;

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
