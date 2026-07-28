import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
import modal from '@/utils/modal';
import { rebuildSearchIndex } from '@/api/markdown';
import {
  createIndexOptions,
  type DataManagerOption
} from './dataManagerOptions';

type Translate = (key: string) => string;

export interface IndexMaintenanceController {
  localIndexLoading: Ref<boolean>;
  markdownIndexLoading: Ref<boolean>;
  showIndexDialog: Ref<boolean>;
  indexOptions: ComputedRef<DataManagerOption[]>;
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
  return {
    localIndexLoading,
    markdownIndexLoading,
    showIndexDialog,
    indexOptions: computed(() => createIndexOptions(t)),
    handleIndexConfirm: (value) =>
      rebuildLocalIndex(value, localIndexLoading, showIndexDialog, t),
    handleMarkdownIndexRebuild: () =>
      rebuildMarkdownIndex(markdownIndexLoading, t)
  };
}
