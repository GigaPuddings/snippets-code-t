<template>
  <el-tooltip
    effect="light"
    :content="statusTitle"
    placement="top"
  >
    <button
      class="category-sync-status"
      :class="[
        `category-sync-status--${syncState}`,
        { 'category-sync-status--clickable': canOpenGitSettings }
      ]"
      type="button"
      @click="handleStatusClick"
    >
      <span class="category-sync-status__dot"></span>
      <span class="category-sync-status__label">{{ statusLabel }}</span>
      <span class="category-sync-status__badge">{{ statusBadge }}</span>
    </button>
  </el-tooltip>
</template>

<script setup lang="ts">
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getGitSettings } from '@/api/appConfig';
import { getGitStatus, type GitStatus } from '@/api/gitSync';
import { usePluginStore } from '@/store';
import { useRouter } from 'vue-router';
import type { GitSettings } from '@/types/models';

defineOptions({
  name: 'CategorySyncStatus'
});

type GitSyncState = 'idle' | 'syncing' | 'synced' | 'has_changes' | 'error' | 'disabled';

const syncState = ref<GitSyncState>('disabled');
const gitStatus = ref<GitStatus | null>(null);
const gitSettings = ref<GitSettings | null>(null);
const lastSyncTime = ref<string | null>(null);
const formatNowMs = ref(Date.now());
let formatTickTimer: ReturnType<typeof setInterval> | null = null;
let refreshTimer: ReturnType<typeof setTimeout> | null = null;
let unlistenHandlers: UnlistenFn[] = [];
let lifecycleRunId = 0;

const router = useRouter();
const pluginStore = usePluginStore();
const isGitPluginEnabled = computed(() => pluginStore.isEnabled('git-sync'));
const pendingFilesCount = computed(() => gitStatus.value?.changed_files.length ?? 0);

const formattedLastSyncTime = computed(() => {
  if (!lastSyncTime.value) return '';

  const syncTime = new Date(lastSyncTime.value);
  const diffMs = formatNowMs.value - syncTime.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMinutes < 1) return '刚刚';
  if (diffMinutes < 60) return `${diffMinutes} 分钟前`;
  if (diffHours < 24) return `${diffHours} 小时前`;
  if (diffDays < 7) return `${diffDays} 天前`;
  return syncTime.toLocaleDateString('zh-CN');
});

const stateDescription = computed(() => {
  if (!gitSettings.value?.enabled) return 'Git 同步已禁用';
  if (pendingFilesCount.value > 0) return `${pendingFilesCount.value} 个文件待同步`;
  if (syncState.value === 'syncing') return '同步中...';
  if (syncState.value === 'error') return '同步出错';
  return formattedLastSyncTime.value || '已同步';
});

const isGitUnavailableError = (error: unknown): boolean => {
  const message = error instanceof Error ? error.message : String(error);
  const normalized = message.toLowerCase();
  return [
    '工作区未设置',
    'workspace not set',
    "插件 'git-sync' 未启用",
    'plugin disabled'
  ].some((keyword) => normalized.includes(keyword.toLowerCase()));
};

async function refreshSettings(): Promise<void> {
  try {
    const settings = await getGitSettings();
    gitSettings.value = settings;
    lastSyncTime.value = settings.last_sync_time ?? lastSyncTime.value;
    syncState.value = settings.enabled ? 'idle' : 'disabled';
  } catch {
    syncState.value = 'disabled';
  }
}

async function refreshStatus(): Promise<void> {
  if (!isGitPluginEnabled.value || !gitSettings.value?.enabled) {
    gitStatus.value = null;
    syncState.value = 'disabled';
    return;
  }

  try {
    const status = await getGitStatus();
    gitStatus.value = status;
    syncState.value =
      status.is_repo && status.has_changes
        ? 'has_changes'
        : status.is_repo
          ? 'synced'
          : 'disabled';
  } catch (error) {
    if (isGitUnavailableError(error)) {
      gitStatus.value = null;
      syncState.value = 'disabled';
      return;
    }
    syncState.value = 'error';
  }
}

function scheduleRefresh(): void {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
  }
  refreshTimer = setTimeout(() => {
    refreshTimer = null;
    void refreshStatus();
  }, 300);
}

async function setupGitStatusListener(): Promise<void> {
  if (unlistenHandlers.length > 0) return;

  if (!formatTickTimer) {
    formatTickTimer = setInterval(() => {
      formatNowMs.value = Date.now();
    }, 60000);
  }

  try {
    unlistenHandlers = await Promise.all([
      listen('git-pull-start', () => {
        syncState.value = 'syncing';
      }),
      listen('git-push-start', () => {
        syncState.value = 'syncing';
      }),
      listen<{ success: boolean; last_sync_time?: string }>('git-sync-complete', (event) => {
        if (event.payload.success) {
          lastSyncTime.value = event.payload.last_sync_time ?? lastSyncTime.value;
          scheduleRefresh();
        } else {
          syncState.value = 'error';
        }
      }),
      listen('git-workspace-changed', scheduleRefresh),
      listen('git-settings-changed', () => {
        void refreshGitStatusLifecycle();
      })
    ]);
  } catch (error) {
    cleanupGitStatusListener();
    throw error;
  }
}

function cleanupGitStatusListener(): void {
  if (formatTickTimer) {
    clearInterval(formatTickTimer);
    formatTickTimer = null;
  }
  if (refreshTimer) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
  unlistenHandlers.forEach((unlisten) => {
    try {
      unlisten();
    } catch {
      // ignore stale listener cleanup
    }
  });
  unlistenHandlers = [];
}

async function refreshGitStatusLifecycle(): Promise<void> {
  const runId = ++lifecycleRunId;

  await refreshSettings();
  if (runId !== lifecycleRunId) return;

  if (!isGitPluginEnabled.value) {
    cleanupGitStatusListener();
    gitStatus.value = null;
    syncState.value = 'disabled';
    return;
  }

  await setupGitStatusListener();
  if (runId !== lifecycleRunId) return;

  await refreshStatus();
}

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
  await refreshGitStatusLifecycle();
});

watch(
  () => [pluginStore.runtimeRevision, isGitPluginEnabled.value],
  () => {
    void refreshGitStatusLifecycle();
  }
);

onUnmounted(() => {
  lifecycleRunId += 1;
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
