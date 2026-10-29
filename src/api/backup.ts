import { invoke } from '@tauri-apps/api/core';

export interface BackupLocation {
  root: string;
  workspace: string;
  appData: string;
  recovery: string;
}

export function collectBackupFrontendState(storage: Storage): string {
  const state: Record<string, string> = Object.create(null);
  // Recovery-only: retain raw values, especially draft keys/revisions. They
  // must never be rebased or replayed into a different workspace automatically.
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (
      !key ||
      key.startsWith('pending') ||
      key.startsWith('developer-') ||
      key === 'snippets-code:frontend-diagnostics'
    )
      continue;
    const value = storage.getItem(key);
    if (value !== null) state[key] = value;
  }
  return JSON.stringify(state);
}

export const createFullBackup = (
  destination: string,
  frontendState: string
): Promise<BackupLocation> =>
  invoke<BackupLocation>('create_full_backup', { destination, frontendState });
export const restoreFullBackup = (
  source: string,
  destination: string
): Promise<BackupLocation> =>
  invoke<BackupLocation>('restore_full_backup', { source, destination });
export const activateRestoredBackup = (root: string): Promise<void> =>
  invoke<void>('activate_restored_backup', { root });
