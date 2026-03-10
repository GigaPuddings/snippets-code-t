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
    if (isLoading.value) return;
    
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

  // 监听同步完成
  listen<{ success: boolean; last_sync_time?: string }>('git-sync-complete', (event) => {
    if (event.payload.success) {
      syncState.value = 'synced';
      if (event.payload.last_sync_time) {
        lastSyncTime.value = event.payload.last_sync_time;
      }
    } else {
      syncState.value = 'error';
    }
    // 同步完成后刷新状态
    getGitStatus().then(status => {
      gitStatus.value = status;
    }).catch(error => {
      logger.error('[GitStatus] git-sync-complete 后刷新状态失败', error);
    });
  }).then(unlisten => {
    unlistenSyncComplete = unlisten;
  });

  // 监听工作区文件变化（后端 FileWatcher 触发），刷新 Git 状态
  // 这里暂时引用不到 refreshStatus，在 useGitStatus() 内部处理
}

/**
 * 初始化工作区变化监听（内部使用，在 useGitStatus 中调用）
 * 必须在 useGitStatus() 返回的函数准备好后调用
 */
export function initWorkspaceChangeListener(refreshFn: () => Promise<void>): void {
  listen('git-workspace-changed', () => {
    logger.debug('[GitStatus] 收到 git-workspace-changed 事件，触发刷新');
    refreshFn();
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
