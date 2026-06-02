import { invoke } from '@tauri-apps/api/core';

export interface DiagnosticWindow {
  label: string;
  visible: boolean;
  url: string;
}

export interface DiagnosticLogFile {
  path: string;
  sizeBytes: number;
  modifiedAt?: string;
}

export interface DeveloperDiagnostics {
  generatedAt: string;
  appVersion: string;
  buildMode: string;
  os: string;
  arch: string;
  diagnosticLogsEnabled: boolean;
  logDir: string;
  dataDir: string;
  pluginDir?: string;
  windows: DiagnosticWindow[];
  logFiles: DiagnosticLogFile[];
  recentBackendLogs: string;
}

export const getDeveloperDiagnostics = (
  includeLogs = false
): Promise<DeveloperDiagnostics> =>
  invoke('get_developer_diagnostics', { includeLogs });

export const openDeveloperLogDir = (): Promise<void> =>
  invoke('open_developer_log_dir');
