import { invoke } from '@tauri-apps/api/core';

export interface UninstallCleanupPathReport {
  executablePath: string;
  dataDir: string;
  workspaceDir: string | null;
  pluginDir: string;
}

export const refreshUninstallCleanupPaths =
  (): Promise<UninstallCleanupPathReport> =>
    invoke<UninstallCleanupPathReport>('refresh_uninstall_cleanup_paths');
