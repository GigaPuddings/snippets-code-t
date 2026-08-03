import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  type ComputedRef,
  type Ref
} from 'vue';
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import modal from '@/utils/modal';
import { rebuildSearchIndex } from '@/api/markdown';
import {
  createIndexOptions,
  type DataManagerOption
} from './dataManagerOptions';

type Translate = (key: string) => string;

export interface BackgroundIndexTask {
  owner: string;
  task: string;
  stage: string;
  current: number;
  total: number;
  current_item?: string;
  currentItem?: string;
  completed?: boolean;
}

interface BackgroundIndexTerminalPayload {
  owner: string;
}

export interface IndexMaintenanceController {
  localIndexLoading: Ref<boolean>;
  markdownIndexLoading: Ref<boolean>;
  showIndexDialog: Ref<boolean>;
  indexOptions: ComputedRef<DataManagerOption[]>;
  backgroundIndexTasks: Ref<BackgroundIndexTask[]>;
  backgroundIndexBusy: ComputedRef<boolean>;
  handleIndexConfirm: (value: string | number) => Promise<void>;
  handleMarkdownIndexRebuild: () => Promise<void>;
}

async function rebuildLocalIndex(
  value: string | number,
  loading: Ref<boolean>,
  dialog: Ref<boolean>,
  t: Translate
): Promise<void> {
  loading.value = true;
  try {
    await invoke('reset_software', { resetType: String(value) });
    const successKeys: Record<string, string> = {
      apps: 'dataManager.indexAppsSuccess',
      bookmarks: 'dataManager.indexBookmarksSuccess',
      desktopFiles: 'dataManager.indexDesktopFilesSuccess',
      all: 'dataManager.indexAllSuccess'
    };
    modal.msg(t(successKeys[String(value)] || successKeys.all));
    dialog.value = false;
  } catch (error) {
    modal.msg(`${t('dataManager.indexFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
}

async function rebuildMarkdownIndex(
  loading: Ref<boolean>,
  t: Translate
): Promise<void> {
  loading.value = true;
  try {
    await rebuildSearchIndex();
    modal.msg(t('dataManager.markdownIndexSuccess'));
  } catch (error) {
    modal.msg(`${t('dataManager.markdownIndexFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
}

export function useIndexMaintenance(): IndexMaintenanceController {
  const { t } = useI18n();
  const localIndexLoading = ref(false);
  const markdownIndexLoading = ref(false);
  const showIndexDialog = ref(false);
  const backgroundIndexTasks = ref<BackgroundIndexTask[]>([]);
  const backgroundIndexBusy = computed(
    () => backgroundIndexTasks.value.length > 0
  );
  let eventVersion = 0;
  let disposed = false;
  let unlisteners: UnlistenFn[] = [];

  const applyProgress = (payload: BackgroundIndexTask): void => {
    if (!payload.owner || !payload.stage || payload.completed) return;
    const normalized = {
      ...payload,
      current: Math.max(0, payload.current || 0),
      total: Math.max(0, payload.total || 0)
    };
    const next = backgroundIndexTasks.value.filter(
      (task) => task.owner !== payload.owner
    );
    next.push(normalized);
    next.sort((left, right) => left.owner.localeCompare(right.owner));
    backgroundIndexTasks.value = next;
  };

  const removeProgress = (owner: string): void => {
    backgroundIndexTasks.value = backgroundIndexTasks.value.filter(
      (task) => task.owner !== owner
    );
  };

  onMounted(async () => {
    const listeners = await Promise.all([
      listen<BackgroundIndexTask>('scan-progress', (event) => {
        eventVersion += 1;
        applyProgress(event.payload);
      }),
      listen<BackgroundIndexTerminalPayload>('scan-complete', (event) => {
        eventVersion += 1;
        removeProgress(event.payload.owner);
      }),
      listen<BackgroundIndexTerminalPayload>('scan-cancelled', (event) => {
        eventVersion += 1;
        removeProgress(event.payload.owner);
      })
    ]);
    if (disposed) {
      listeners.forEach((unlisten) => unlisten());
      return;
    }
    unlisteners = listeners;

    const versionBeforeHydration = eventVersion;
    try {
      const states = await invoke<BackgroundIndexTask[]>(
        'get_scan_progress_states'
      );
      if (!disposed && versionBeforeHydration === eventVersion) {
        backgroundIndexTasks.value = states.filter(
          (state) => !state.completed && Boolean(state.stage)
        );
      }
    } catch (error) {
      console.error('获取后台索引状态失败:', error);
    }
  });

  onUnmounted(() => {
    disposed = true;
    unlisteners.forEach((unlisten) => unlisten());
    unlisteners = [];
  });

  return {
    localIndexLoading,
    markdownIndexLoading,
    showIndexDialog,
    backgroundIndexTasks,
    backgroundIndexBusy,
    indexOptions: computed(() => createIndexOptions(t)),
    handleIndexConfirm: (value) =>
      rebuildLocalIndex(value, localIndexLoading, showIndexDialog, t),
    handleMarkdownIndexRebuild: () =>
      rebuildMarkdownIndex(markdownIndexLoading, t)
  };
}
