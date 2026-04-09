import { ref, computed, type Ref, type ComputedRef } from 'vue';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getGitStatus, type GitStatus } from '@/api/git';
import { getGitSettings } from '@/api/appConfig';
import type { GitSettings } from '@/types/models';
import { logger } from '@/utils/logger';

/**
 * Git 同步状态类型
 */
export type GitSyncState = 'idle' | 'syncing' | 'synced' | 'has_changes' | 'error' | 'disabled';

/**
 * Git 状态返回接口
 */
export interface UseGitStatusReturn {
  /** 当前 Git 同步状态 */
  syncState: Ref<GitSyncState>;
  /** Git 状态详情 */
  gitStatus: Ref<GitStatus | null>;
  /** 待同步文件数量 */
  pendingFilesCount: ComputedRef<number>;
  /** 最后同步时间 */
  lastSyncTime: Ref<string | null>;
  /** Git 设置 */
  gitSettings: Ref<GitSettings | null>;
  /** 是否正在加载 */
  isLoading: Ref<boolean>;
  /** 刷新 Git 状态 */
  refreshStatus: () => Promise<void>;
  /** 刷新 Git 设置 */
  refreshSettings: () => Promise<void>;
  /** 格式化显示最后同步时间 */
  formattedLastSyncTime: ComputedRef<string>;
  /** 状态描述 */
  stateDescription: ComputedRef<string>;
  /** 设置同步状态（内部使用） */
  _setSyncState: (state: GitSyncState) => void;
  /** 设置最后同步时间（内部使用） */
  _setLastSyncTime: (time: string) => void;
}

// 全局单例状态
const syncState = ref<GitSyncState>('disabled');
const gitStatus = ref<GitStatus | null>(null);
const lastSyncTime = ref<string | null>(null);
const gitSettings = ref<GitSettings | null>(null);
const isLoading = ref(false);
/** 防抖定时器 ID（用于 git-workspace-changed 事件） */
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
/** 防抖定时器 ID（用于 git-sync-complete 事件） */
let syncCompleteDebounceTimer: ReturnType<typeof setTimeout> | null = null;
/** 待刷新标记（用于显示"有变化待刷新"状态） */
const pendingRefresh = ref(false);
/** 统计：收到的事件总数 */
let eventCount = 0;
/** 统计：实际执行的请求总数 */
let requestCount = 0;
/** 统计：合并的事件数（eventCount - requestCount） */
const statsDebouncedCount = computed(() => Math.max(0, eventCount - requestCount));
/** 用于触发 formattedLastSyncTime 周期性更新的 tick（因为 computed 依赖的 new Date() 不是响应式的） */
const formatTick = ref(0);
/** 统一的“当前时间”快照，避免不同组件在边界秒数上出现显示不一致 */
const formatNowMs = ref(Date.now());

// 定时器 ID
let refreshTimer: ReturnType<typeof setInterval> | null = null;
let formatTickTimer: ReturnType<typeof setInterval> | null = null;
let unlistenPull: UnlistenFn | null = null;
let unlistenPush: UnlistenFn | null = null;
let unlistenSyncComplete: UnlistenFn | null = null;
let unlistenWorkspaceChanged: UnlistenFn | null = null;

/**
 * Git 状态管理组合式函数
 * 管理标题栏 Git 同步状态显示
 * 
 * @returns Git 状态相关的状态和方法
 * 
 * @example
 * ```typescript
 * const { syncState, pendingFilesCount, formattedLastSyncTime, refreshStatus } = useGitStatus();
 * ```
 */
export function useGitStatus(): UseGitStatusReturn {
  // 待同步文件数量
  const pendingFilesCount = computed(() => {
    if (!gitStatus.value || !gitStatus.value.is_repo) return 0;
    return gitStatus.value.changed_files.length;
  });

  // 格式化最后同步时间（依赖 formatTick 以便随时间自动更新显示，否则会一直显示「刚刚」）
  const formattedLastSyncTime = computed(() => {
    void formatTick.value; // 依赖 tick，每分钟触发更新（同时会更新 formatNowMs）
    if (!lastSyncTime.value) return '';
    
    const syncTime = new Date(lastSyncTime.value);
    const diffMs = formatNowMs.value - syncTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return '刚刚';
    if (diffMins < 60) return `${diffMins}分钟前`;
    if (diffHours < 24) return `${diffHours}小时前`;
    if (diffDays < 7) return `${diffDays}天前`;
    
    // 超过一周显示具体日期
    return syncTime.toLocaleDateString('zh-CN');
  });

  // 状态描述
  const stateDescription = computed(() => {
    const settings = gitSettings.value;
    if (!settings || !settings.enabled) {
      return 'Git 同步已禁用';
    }

    // 优先显示待同步文件数量
    if (pendingFilesCount.value > 0) {
      return `${pendingFilesCount.value} 个文件待同步`;
    }

    switch (syncState.value) {
      case 'syncing':
        return '同步中...';
      case 'synced':
        return formattedLastSyncTime.value || '已同步';
      case 'has_changes':
        return `${pendingFilesCount.value} 个文件待同步`;
      case 'error':
        return '同步出错';
      default:
        return formattedLastSyncTime.value || '已同步';
    }
  });

  // 刷新 Git 状态
  const refreshStatus = async (): Promise<void> => {
    // 如果正在加载或正在同步，先标记待刷新，等当前操作完成
    if (isLoading.value || syncState.value === 'syncing') {
      pendingRefresh.value = true;
      logger.debug('[GitStatus] 正在加载/同步中，标记待刷新');
      return;
    }

    isLoading.value = true;
    try {
      const status = await getGitStatus();
      gitStatus.value = status;

      // 根据状态更新同步状态
      if (!status.is_repo || !gitSettings.value?.enabled) {
        syncState.value = 'disabled';
      } else if (status.has_changes) {
        syncState.value = 'has_changes';
      } else {
        syncState.value = 'synced';
      }
    } catch (error) {
      logger.error('[GitStatus] 获取 Git 状态失败', error);
      syncState.value = 'error';
    } finally {
      isLoading.value = false;

      // 处理待刷新请求（如果在等待期间有新的变化）
      if (pendingRefresh.value) {
        pendingRefresh.value = false;
        logger.debug('[GitStatus] 执行待刷新请求');
        // 使用 setTimeout 避免立即递归，确保状态已更新
        setTimeout(() => refreshStatus(), 100);
      }
    }
  };

  // 刷新 Git 设置
  const refreshSettings = async (): Promise<void> => {
    try {
      const settings = await getGitSettings();
      gitSettings.value = settings;
      
      if (settings.enabled) {
        // 如果启用且没有正在同步，设置为 idle
        if (syncState.value === 'disabled') {
          syncState.value = 'idle';
        }
        // 保存最后同步时间
        if (settings.last_sync_time) {
          lastSyncTime.value = settings.last_sync_time;
        }
      } else {
        syncState.value = 'disabled';
      }
    } catch (error) {
      logger.error('[GitStatus] 获取 Git 设置失败', error);
    }
  };

  // 设置同步状态
  const setSyncState = (state: GitSyncState): void => {
    syncState.value = state;
  };

  // 设置最后同步时间
  const setLastSyncTime = (time: string): void => {
    lastSyncTime.value = time;
  };

  return {
    syncState,
    gitStatus,
    pendingFilesCount,
    lastSyncTime,
    gitSettings,
    isLoading,
    refreshStatus,
    refreshSettings,
    formattedLastSyncTime,
    stateDescription,
    // 导出内部方法供外部调用
    _setSyncState: setSyncState,
    _setLastSyncTime: setLastSyncTime,
  };
}

/**
 * 启动 Git 状态监听
 * 监听 Git 同步事件并自动更新状态
 *
 * @example
 * ```typescript
 * // 在应用入口调用
 * setupGitStatusListener();
 * ```
 */
export function setupGitStatusListener(): void {
  // 每分钟更新 formatTick，使 formattedLastSyncTime（如「刚刚」→「1分钟前」）能随时间正确更新
  if (!formatTickTimer) {
    formatTickTimer = setInterval(() => {
      formatNowMs.value = Date.now();
      formatTick.value += 1;
    }, 60000);
  }

  // 监听 pull 开始
  listen('git-pull-start', () => {
    syncState.value = 'syncing';
  }).then(unlisten => {
    unlistenPull = unlisten;
  });

  // 监听 push 开始
  listen('git-push-start', () => {
    syncState.value = 'syncing';
  }).then(unlisten => {
    unlistenPush = unlisten;
  });

  // 监听同步完成（带防抖，避免与 workspace-changed 同时触发）
  listen<{ success: boolean; last_sync_time?: string }>('git-sync-complete', (event) => {
    if (event.payload.success) {
      syncState.value = 'syncing';
      if (event.payload.last_sync_time) {
        lastSyncTime.value = event.payload.last_sync_time;
      }
    } else {
      syncState.value = 'error';
    }

    // 清除之前的防抖定时器
    if (syncCompleteDebounceTimer !== null) {
      clearTimeout(syncCompleteDebounceTimer);
    }

    // 防抖 1 秒后刷新状态（避免与 workspace-changed 事件同时触发）
    syncCompleteDebounceTimer = setTimeout(() => {
      syncCompleteDebounceTimer = null;
      logger.debug('[GitStatus] git-sync-complete 防抖时间到，刷新状态');
      getGitStatus().then(status => {
        gitStatus.value = status;
        if (status.has_changes) {
          syncState.value = 'has_changes';
        } else {
          syncState.value = 'synced';
        }
      }).catch(error => {
        logger.error('[GitStatus] git-sync-complete 后刷新状态失败', error);
        syncState.value = 'error';
      });
    }, 1000);
  }).then(unlisten => {
    unlistenSyncComplete = unlisten;
  });

  // 监听工作区文件变化（后端 FileWatcher 触发），刷新 Git 状态
  // 这里暂时引用不到 refreshStatus，在 useGitStatus() 内部处理
}

/**
 * 初始化工作区变化监听（内部使用，在 useGitStatus 中调用）
 * 必须在 useGitStatus() 返回的函数准备好后调用
 *
 * @param refreshFn - 刷新函数
 * @param debounceMs - 防抖延迟（毫秒），默认 500ms
 */
export function initWorkspaceChangeListener(
  refreshFn: () => Promise<void>,
  debounceMs: number = 300
): void {
  listen('git-workspace-changed', () => {
    eventCount++; // 统计：收到事件
    logger.debug(`[GitStatus] 收到 git-workspace-changed 事件（累计: ${eventCount}），防抖刷新`);

    // 清除之前的定时器
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }

    // 设置新的定时器
    debounceTimer = setTimeout(async () => {
      debounceTimer = null;
      requestCount++; // 统计：执行请求
      const merged = eventCount - requestCount;
      if (merged > 0) {
        logger.debug(`[GitStatus] 防抖时间到，执行刷新（合并了 ${merged} 个事件，累计收到 ${eventCount}，已执行 ${requestCount}）`);
      } else {
        logger.debug('[GitStatus] 防抖时间到，执行刷新');
      }
      await refreshFn();
    }, debounceMs);
  }).then(unlisten => {
    unlistenWorkspaceChanged = unlisten;
  });
}

/**
 * 停止 Git 状态监听
 *
 * @example
 * ```typescript
 * // 在应用退出时调用
 * cleanupGitStatusListener();
 * ```
 */
export function cleanupGitStatusListener(): void {
  if (formatTickTimer) {
    clearInterval(formatTickTimer);
    formatTickTimer = null;
  }
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  if (syncCompleteDebounceTimer) {
    clearTimeout(syncCompleteDebounceTimer);
    syncCompleteDebounceTimer = null;
  }
  if (unlistenPull) {
    unlistenPull();
    unlistenPull = null;
  }
  if (unlistenPush) {
    unlistenPush();
    unlistenPush = null;
  }
  if (unlistenSyncComplete) {
    unlistenSyncComplete();
    unlistenSyncComplete = null;
  }
  if (unlistenWorkspaceChanged) {
    unlistenWorkspaceChanged();
    unlistenWorkspaceChanged = null;
  }
}

/**
 * 获取 Git 状态统计信息（用于调试）
 */
export function getGitStatusStats(): { eventCount: number; requestCount: number; mergedCount: number } {
  return {
    eventCount,
    requestCount,
    mergedCount: Math.max(0, eventCount - requestCount),
  };
}

/**
 * 重置 Git 状态统计信息
 */
export function resetGitStatusStats(): void {
  eventCount = 0;
  requestCount = 0;
  logger.debug('[GitStatus] 统计信息已重置');
}

/**
 * 启动定时刷新 Git 状态
 * 
 * @param intervalMs - 刷新间隔（毫秒），默认 30 秒
 * 
 * @example
 * ```typescript
 * // 每分钟刷新一次
 * startGitStatusPolling(60000);
 * ```
 */
export function startGitStatusPolling(intervalMs: number = 30000): void {
  if (refreshTimer) return;
  
  // 先立即刷新一次
  useGitStatus().refreshStatus();
  
  // 设置定时刷新
  refreshTimer = setInterval(() => {
    useGitStatus().refreshStatus();
  }, intervalMs);
}

/**
 * 停止定时刷新 Git 状态
 * 
 * @example
 * ```typescript
 * stopGitStatusPolling();
 * ```
 */
export function stopGitStatusPolling(): void {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
  }
}
