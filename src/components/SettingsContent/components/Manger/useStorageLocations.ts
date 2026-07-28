import { ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
import modal from '@/utils/modal';
import {
  getWorkspaceRoot,
  selectWorkspace,
  setWorkspaceRoot
} from '@/api/markdown';
import { getPluginInstallDir } from '@/api/plugins';
import { getDeveloperDiagnostics } from '@/api/developerDiagnostics';
import { openFolder } from '@/utils/file-system';

type Translate = (key: string) => string;

interface DataDirInfo {
  path: string;
}

interface StorageState {
  workspaceRoot: Ref<string>;
  dataRoot: Ref<string>;
  pluginDir: Ref<string>;
  logDir: Ref<string>;
  workspaceLoading: Ref<boolean>;
  pathLoading: Ref<boolean>;
  showPathDialog: Ref<boolean>;
}

export interface StorageLocationsController extends StorageState {
  loadDataLocations: () => Promise<void>;
  selectWorkspaceRoot: () => Promise<void>;
  openDataDirectory: (path: string) => Promise<void>;
  selectCustomPath: () => void;
  handlePathConfirm: () => Promise<void>;
}

async function loadDataLocations(state: StorageState): Promise<void> {
  const [workspace, data, plugins, diagnostics] = await Promise.allSettled([
    getWorkspaceRoot(),
    invoke<DataDirInfo>('get_data_dir_info'),
    getPluginInstallDir(),
    getDeveloperDiagnostics(false)
  ]);
  if (workspace.status === 'fulfilled')
    state.workspaceRoot.value = workspace.value;
  else console.error('Load workspace directory failed:', workspace.reason);
  if (data.status === 'fulfilled') state.dataRoot.value = data.value.path;
  else console.error('Load app data directory failed:', data.reason);
  if (plugins.status === 'fulfilled') state.pluginDir.value = plugins.value;
  else console.error('Load plugin directory failed:', plugins.reason);
  if (diagnostics.status === 'fulfilled')
    state.logDir.value = diagnostics.value.logDir;
  else console.error('Load log directory failed:', diagnostics.reason);
}

async function selectWorkspaceRoot(
  state: StorageState,
  t: Translate
): Promise<void> {
  state.workspaceLoading.value = true;
  try {
    const selected = await selectWorkspace();
    if (!selected) return;
    await setWorkspaceRoot(selected);
    state.workspaceRoot.value = selected;
    for (const type of ['refresh-categories', 'refresh-data']) {
      window.dispatchEvent(
        new CustomEvent(type, { detail: { source: 'workspace-root-changed' } })
      );
    }
    modal.msg(t('dataManager.workspaceSuccess'));
  } catch (error) {
    modal.msg(`${t('dataManager.workspaceFailed')}: ${error}`, 'error');
  } finally {
    state.workspaceLoading.value = false;
  }
}

async function openDataDirectory(path: string, t: Translate): Promise<void> {
  if (!path) return;
  try {
    await openFolder(path);
  } catch (error) {
    modal.msg(`${t('dataManager.openDirectoryFailed')}: ${error}`, 'error');
  }
}

async function handlePathConfirm(
  state: StorageState,
  t: Translate
): Promise<void> {
  try {
    state.dataRoot.value = await invoke<string>('set_custom_db_path');
    modal.msg(t('dataManager.pathSuccess'));
    state.showPathDialog.value = false;
  } catch (error) {
    modal.msg(`${t('dataManager.pathFailed')}: ${error}`, 'error');
  } finally {
    state.pathLoading.value = false;
  }
}

export function useStorageLocations(): StorageLocationsController {
  const { t } = useI18n();
  const state: StorageState = {
    workspaceRoot: ref(''),
    dataRoot: ref(''),
    pluginDir: ref(''),
    logDir: ref(''),
    workspaceLoading: ref(false),
    pathLoading: ref(false),
    showPathDialog: ref(false)
  };
  return {
    ...state,
    loadDataLocations: () => loadDataLocations(state),
    selectWorkspaceRoot: () => selectWorkspaceRoot(state, t),
    openDataDirectory: (path) => openDataDirectory(path, t),
    selectCustomPath: (): void => {
      state.pathLoading.value = true;
      state.showPathDialog.value = true;
    },
    handlePathConfirm: () => handlePathConfirm(state, t)
  };
}
