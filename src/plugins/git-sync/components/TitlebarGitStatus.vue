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
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  padding: 6px;
  color: rgba(var(--categories-text-color-rgb), 0.85);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #5d6dfd;
    background-color: rgba(93, 109, 253, 0.08);
  }
}

.git-status-indicator {
  display: flex;
  min-height: 28px;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(93, 109, 253, 0.08);
  }

  .git-sync-icon {
    animation: spin 1s linear infinite;
  }

  .git-time {
    color: rgba(var(--categories-text-color-rgb), 0.6);
    font-size: 12px;
  }

  &.git-status-syncing {
    color: #3b82f6;
  }

  &.git-status-synced {
    color: #10b981;
  }

  &.git-status-has_changes {
    color: #f59e0b;
  }

  &.git-status-error {
    color: #ef4444;
  }

  &.git-status-idle {
    color: rgba(var(--categories-text-color-rgb), 0.7);
  }
}

.git-badge {
  display: inline-flex;
  min-width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 999px;
  background-color: #f59e0b;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

@media (max-width: 880px) {
  .git-status-indicator {
    min-width: 28px;
    justify-content: center;
    padding-right: 6px;
    padding-left: 6px;

    .git-time {
      display: none;
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
