import { invoke } from '@tauri-apps/api/core';
import type { SearchSourceRuntimeState } from '@/search/sourceRegistry';

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
  backendLogsIncomplete: boolean;
}

export interface SearchDiagnosticResult {
  pluginId: string;
  source: string;
  startedAt: number;
  completedAt: number;
  outcome: 'success' | 'timeout' | 'failed';
}

export interface SearchDiagnosticEntry extends SearchDiagnosticResult {
  windowLabel: string;
}

export const mergeSearchDiagnostics = (
  sources: SearchSourceRuntimeState[],
  entries: SearchDiagnosticEntry[]
) => {
  const bySource = new Map(
    entries.map((entry) => [`${entry.pluginId}:${entry.source}`, entry])
  );
  return sources.map((source) => {
    const result = bySource.get(source.key);
    if (!result || (source.lastSearchedAt ?? 0) > result.startedAt) {
      return { ...source, result: undefined };
    }
    const health = result.outcome === 'success' ? 'healthy' : 'failed';
    return {
      ...source,
      health,
      lastDurationMs: result.completedAt - result.startedAt,
      lastError:
        source.lastSearchedAt === result.startedAt
          ? source.lastError
          : undefined,
      result
    } as const;
  });
};

export const recordSearchDiagnostic = (
  result: SearchDiagnosticResult
): Promise<void> => invoke('record_search_diagnostic', { result });

export const getSearchDiagnostics = (): Promise<SearchDiagnosticEntry[]> =>
  invoke('get_search_diagnostics');

export const getDeveloperDiagnostics = (
  includeLogs = false
): Promise<DeveloperDiagnostics> =>
  invoke('get_developer_diagnostics', { includeLogs });

export const openDeveloperLogDir = (): Promise<void> =>
  invoke('open_developer_log_dir');

export const getDeveloperLogDir = (): Promise<string> =>
  invoke('get_developer_log_dir');
