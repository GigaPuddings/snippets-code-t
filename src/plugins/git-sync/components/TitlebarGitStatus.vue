<template>
  <div
    v-if="visible && variant === 'inline'"
    class="git-status-indicator"
    :class="`git-status-${syncState}`"
    :title="stateDescription"
    @click="goToGitSettings"
  >
    <loading
      v-if="syncState === 'syncing'"
      class="icon git-sync-icon"
      theme="outline"
      size="16"
      :strokeWidth="3"
    />
    <branch v-else class="icon" theme="outline" size="16" :strokeWidth="3" />
    <span v-if="syncState === 'has_changes'" class="git-badge">{{ pendingFilesCount }}</span>
    <span v-if="formattedLastSyncTime && syncState !== 'syncing'" class="git-time">
      {{ formattedLastSyncTime }}
    </span>
  </div>

  <el-dropdown-item v-else-if="visible" @click="goToGitSettings">
    <branch theme="outline" size="16" :strokeWidth="3" class="align-middle" />
    <span class="ml-2">{{ $t('titlebar.gitSync') }}</span>
    <span v-if="syncState === 'has_changes'" class="git-badge ml-1">{{ pendingFilesCount }}</span>
  </el-dropdown-item>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { Branch, Loading } from '@icon-park/vue-next';
import {
  cleanupGitStatusListener,
  initWorkspaceChangeListener,
  setupGitStatusListener,
  useGitStatus
} from '../useGitStatus';

withDefaults(defineProps<{
  variant?: 'inline' | 'dropdown';
}>(), {
  variant: 'inline'
});

const {
  syncState,
  pendingFilesCount,
  formattedLastSyncTime,
  refreshStatus,
  refreshSettings,
  stateDescription,
  gitSettings
} = useGitStatus();

const visible = computed(() => !!gitSettings.value?.enabled && syncState.value !== 'error');

const goToGitSettings = () => {
  window.location.hash = '#/config/category/settings?tab=gitSync';
};

onMounted(async () => {
  setupGitStatusListener();
  initWorkspaceChangeListener(refreshStatus);
  await refreshSettings();
  await refreshStatus();
});

onUnmounted(() => {
  cleanupGitStatusListener();
});
</script>

<style lang="scss" scoped>
.icon {
  @apply flex items-center justify-center min-w-[32px] min-h-[32px] p-1.5 cursor-pointer;
  color: rgba(var(--categories-text-color-rgb), 0.85);
  transition: all 0.2s ease;

  &:hover {
    @apply text-primary;
    background-color: rgba(93, 109, 253, 0.08);
  }
}

.git-status-indicator {
  @apply flex min-h-[28px] items-center gap-1 py-1 px-2 rounded text-xs cursor-pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(93, 109, 253, 0.08);
  }

  .git-sync-icon {
    animation: spin 1s linear infinite;
  }

  .git-time {
    color: rgba(var(--categories-text-color-rgb), 0.6);
    @apply text-xs;
  }

  &.git-status-syncing {
    @apply text-blue-500;
  }

  &.git-status-synced {
    @apply text-emerald-500;
  }

  &.git-status-has_changes {
    @apply text-amber-500;
  }

  &.git-status-error {
    @apply text-red-500;
  }

  &.git-status-idle {
    color: rgba(var(--categories-text-color-rgb), 0.7);
  }
}

.git-badge {
  @apply inline-flex min-w-[18px] h-[18px] items-center justify-center py-0.5 px-1.5 rounded-full bg-amber-500 text-white text-xs font-medium leading-none;
}

@media (max-width: 880px) {
  .git-status-indicator {
    @apply min-w-[28px] justify-center pr-1.5 pl-1.5;

    .git-time {
      @apply hidden;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
