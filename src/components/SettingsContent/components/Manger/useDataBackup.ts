import { ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { open } from '@tauri-apps/plugin-dialog';
import { dirname } from '@tauri-apps/api/path';
import {
  activateRestoredBackup,
  collectBackupFrontendState,
  createFullBackup,
  restoreFullBackup,
  type BackupLocation
} from '@/api/backup';
import modal from '@/utils/modal';

type Translate = (key: string, values?: Record<string, string>) => string;
interface DataBackupState {
  backupBusy: Ref<boolean>;
  backupLocation: Ref<BackupLocation | null>;
  restoredLocation: Ref<BackupLocation | null>;
  showActivateDialog: Ref<boolean>;
}
export interface DataBackupController extends DataBackupState {
  exportBackup: () => Promise<void>;
  restoreBackup: () => Promise<void>;
  activateRecovery: () => Promise<void>;
}

async function selectDirectory(
  title: string,
  defaultPath?: string
): Promise<string | null> {
  const selected = await open({
    title,
    directory: true,
    multiple: false,
    ...(defaultPath ? { defaultPath } : {})
  });
  return typeof selected === 'string' ? selected : null;
}

function explainBackupError(error: unknown, t: Translate): string {
  const message = error instanceof Error ? error.message : String(error);
  const marker = 'BACKUP_DESTINATION_OVERLAP: ';
  const position = message.indexOf(marker);
  if (position >= 0) {
    try {
      const details = JSON.parse(message.slice(position + marker.length));
      if (
        typeof details.destination === 'string' &&
        typeof details.protectedPath === 'string'
      ) {
        return t('dataManager.backupDestinationOverlap', {
          destination: details.destination,
          protectedPath: details.protectedPath
        });
      }
    } catch {
      // Preserve unexpected backend errors for diagnosis.
    }
  }
  if (
    message.includes(
      'Destination must be separate from current data and backup directories'
    )
  ) {
    return t('dataManager.backupDestinationSeparate');
  }
  return message;
}
const newChild = (parent: string, prefix: string): string =>
  `${parent.replace(/[\\/]$/, '')}/${prefix}-${new Date().toISOString().replace(/[:.]/g, '-')}`;

async function exportBackup(
  state: DataBackupState,
  t: Translate
): Promise<void> {
  if (state.backupBusy.value) return;
  state.backupBusy.value = true;
  try {
    const parent = await selectDirectory(t('dataManager.backupParent'));
    if (!parent) return;
    state.backupLocation.value = await createFullBackup(
      newChild(parent, 'snippets-backup'),
      collectBackupFrontendState(localStorage)
    );
    modal.msg(t('dataManager.backupSuccess'));
  } catch (error) {
    modal.msg(
      `${t('dataManager.backupFailed')}: ${explainBackupError(error, t)}`,
      'error'
    );
  } finally {
    state.backupBusy.value = false;
  }
}

async function restoreBackup(
  state: DataBackupState,
  t: Translate
): Promise<void> {
  if (state.backupBusy.value) return;
  state.backupBusy.value = true;
  try {
    const source = await selectDirectory(t('dataManager.backupSource'));
    if (!source) return;
    const parent = await selectDirectory(
      t('dataManager.recoveryParent'),
      await dirname(source)
    );
    if (!parent) return;
    state.restoredLocation.value = await restoreFullBackup(
      source,
      newChild(parent, 'snippets-recovered')
    );
    modal.msg(t('dataManager.recoverySuccess'));
  } catch (error) {
    modal.msg(
      `${t('dataManager.recoveryFailed')}: ${explainBackupError(error, t)}`,
      'error'
    );
  } finally {
    state.backupBusy.value = false;
  }
}

async function activateRecovery(
  state: DataBackupState,
  t: Translate
): Promise<void> {
  if (!state.restoredLocation.value || state.backupBusy.value) return;
  state.backupBusy.value = true;
  try {
    await activateRestoredBackup(state.restoredLocation.value.root);
    state.showActivateDialog.value = false;
  } catch (error) {
    modal.msg(`${t('dataManager.recoveryFailed')}: ${error}`, 'error');
  } finally {
    state.backupBusy.value = false;
  }
}

export function useDataBackup(): DataBackupController {
  const { t } = useI18n();
  const state: DataBackupState = {
    backupBusy: ref(false),
    backupLocation: ref<BackupLocation | null>(null),
    restoredLocation: ref<BackupLocation | null>(null),
    showActivateDialog: ref(false)
  };
  return {
    ...state,
    exportBackup: () => exportBackup(state, t),
    restoreBackup: () => restoreBackup(state, t),
    activateRecovery: () => activateRecovery(state, t)
  };
}
