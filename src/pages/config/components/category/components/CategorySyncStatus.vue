<template>
  <button
    class="category-sync-status"
    :class="[
      `category-sync-status--${syncState}`,
      { 'category-sync-status--clickable': canOpenGitSettings }
    ]"
    type="button"
    :title="statusTitle"
    @click="handleStatusClick"
  >
    <span class="category-sync-status__dot"></span>
    <span class="category-sync-status__label">{{ statusLabel }}</span>
    <span class="category-sync-status__badge">{{ statusBadge }}</span>
  </button>
</template>

<script setup lang="ts">
import {
  cleanupGitStatusListener,
  initWorkspaceChangeListener,
  setupGitStatusListener,
  useGitStatus
} from '@/plugins/git-sync/useGitStatus';
import { usePluginStore } from '@/store';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'CategorySyncStatus'
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

const router = useRouter();
const pluginStore = usePluginStore();
const isGitPluginEnabled = computed(() => pluginStore.isEnabled('git-sync'));

const canOpenGitSettings = computed(() => (
  isGitPluginEnabled.value &&
  gitSettings.value?.enabled === true &&
  ['has_changes', 'error', 'syncing'].includes(syncState.value)
));

const statusLabel = computed(() => {
  if (!isGitPluginEnabled.value) return '本地库';
  if (!gitSettings.value?.enabled) return '本地库';
  if (syncState.value === 'syncing') return '正在同步';
  if (syncState.value === 'has_changes') return '有待同步';
  if (syncState.value === 'error') return '同步异常';
  return '本地库已同步';
});

const statusBadge = computed(() => {
  if (!isGitPluginEnabled.value) return 'LOCAL';
  if (!gitSettings.value?.enabled) return 'LOCAL';
  if (syncState.value === 'syncing') return 'SYNC';
  if (syncState.value === 'has_changes') return String(pendingFilesCount.value);
  if (syncState.value === 'error') return 'ERR';
  return 'ONLINE';
});

const statusTitle = computed(() => {
  if (!isGitPluginEnabled.value) return 'Git 插件未启用';
  if (!gitSettings.value?.enabled) return 'Git 同步未启用';
  if (canOpenGitSettings.value) return `${stateDescription.value}，点击查看 Git 配置`;
  if (formattedLastSyncTime.value && syncState.value !== 'has_changes') {
    return `上次同步：${formattedLastSyncTime.value}`;
  }
  return stateDescription.value;
});

function handleStatusClick(): void {
  if (!canOpenGitSettings.value) return;
  router.push({ path: '/config/category/settings', query: { tab: 'gitSync' } });
}

onMounted(async () => {
  await pluginStore.initialize();
  await refreshSettings();
  if (!isGitPluginEnabled.value) {
    return;
  }
  setupGitStatusListener();
  initWorkspaceChangeListener(refreshStatus);
  await refreshStatus();
});

onUnmounted(() => {
  cleanupGitStatusListener();
});
</script>

<style scoped lang="scss">
.category-sync-status {
  @apply flex items-center w-full rounded-md border bg-panel text-left;
  height: 32px;
  gap: 7px;
  padding: 0 8px;
  cursor: default;
  border-color: rgba(var(--categories-border-color-rgb), 0.45);
  color: var(--categories-info-text-color);
}

.category-sync-status--clickable {
  cursor: pointer;

  &:hover {
    border-color: var(--search-result-active-border);
    background: var(--search-result-active);
  }
}

.category-sync-status__dot {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 999px;
  background: #94a3b8;
}

.category-sync-status__label {
  @apply truncate;
  flex: 1;
  min-width: 0;
  font-size: 11px;
}

.category-sync-status__badge {
  flex-shrink: 0;
  color: #16a34a;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.category-sync-status--synced,
.category-sync-status--idle {
  .category-sync-status__dot {
    background: #22c55e;
  }
}

.category-sync-status--syncing {
  .category-sync-status__dot {
    background: #3b82f6;
    animation: pulse 1.2s ease-in-out infinite;
  }

  .category-sync-status__badge {
    color: #2563eb;
  }
}

.category-sync-status--has_changes {
  .category-sync-status__dot {
    background: #f59e0b;
  }

  .category-sync-status__badge {
    color: #d97706;
  }
}

.category-sync-status--error {
  .category-sync-status__dot {
    background: #ef4444;
  }

  .category-sync-status__badge {
    color: #dc2626;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.55;
    transform: scale(1.25);
  }
}
</style>
