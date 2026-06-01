const DEVELOPER_MODE_KEY = 'snippets-code:developer-mode';
const FRONTEND_LOG_KEY = 'snippets-code:frontend-diagnostics';
const MAX_FRONTEND_ENTRIES = 240;

export type FrontendDiagnosticLevel = 'debug' | 'info' | 'warn' | 'error';

export interface FrontendDiagnosticEntry {
  timestamp: string;
  level: FrontendDiagnosticLevel;
  windowLabel: string;
  message: string;
  data?: string;
}

let listenersInstalled = false;

const stringifyValue = (value: unknown): string | undefined => {
  if (value === undefined) return undefined;
  if (value instanceof Error) {
    return `${value.name}: ${value.message}\n${value.stack || ''}`.trim();
  }
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};

const currentWindowLabel = (): string => {
  try {
    return (globalThis as typeof globalThis & {
      __TAURI_INTERNALS__?: { metadata?: { currentWindow?: { label?: string } } };
    }).__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? 'webview';
  } catch {
    return 'webview';
  }
};

const readEntries = (): FrontendDiagnosticEntry[] => {
  if (typeof localStorage === 'undefined') return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(FRONTEND_LOG_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const isDeveloperModeEnabled = (): boolean => {
  if (typeof localStorage === 'undefined') return false;
  try {
    return localStorage.getItem(DEVELOPER_MODE_KEY) === 'true';
  } catch {
    return false;
  }
};

export const setDeveloperModeEnabled = (enabled: boolean): void => {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(DEVELOPER_MODE_KEY, String(enabled));
  } catch {
    // Diagnostics must not affect the application when storage is unavailable.
  }
};

export const appendFrontendDiagnostic = (
  level: FrontendDiagnosticLevel,
  message: string,
  data?: unknown
): void => {
  if (!isDeveloperModeEnabled() && level !== 'warn' && level !== 'error') return;
  if (typeof localStorage === 'undefined') return;

  const entries = readEntries();
  entries.push({
    timestamp: new Date().toISOString(),
    level,
    windowLabel: currentWindowLabel(),
    message,
    data: stringifyValue(data)
  });
  try {
    localStorage.setItem(
      FRONTEND_LOG_KEY,
      JSON.stringify(entries.slice(-MAX_FRONTEND_ENTRIES))
    );
  } catch {
    // Ignore storage quota or browser policy errors while collecting logs.
  }
};

export const getFrontendDiagnostics = (): FrontendDiagnosticEntry[] =>
  readEntries();

export const clearFrontendDiagnostics = (): void => {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(FRONTEND_LOG_KEY);
  } catch {
    // Keep the settings page usable when storage is unavailable.
  }
};

export const formatFrontendDiagnostics = (
  entries = getFrontendDiagnostics()
): string =>
  entries
    .map((entry) => {
      const suffix = entry.data ? `\n${entry.data}` : '';
      return `[${entry.timestamp}] [${entry.level.toUpperCase()}] [${entry.windowLabel}] ${entry.message}${suffix}`;
    })
    .join('\n\n');

export const setupGlobalDeveloperDiagnostics = (): void => {
  if (listenersInstalled) return;
  listenersInstalled = true;

  window.addEventListener('error', (event) => {
    appendFrontendDiagnostic('error', '[Window] uncaught error', {
      message: event.message,
      filename: event.filename,
      line: event.lineno,
      column: event.colno,
      error: stringifyValue(event.error)
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    appendFrontendDiagnostic(
      'error',
      '[Window] unhandled promise rejection',
      event.reason
    );
  });

  const originalError = console.error.bind(console);
  const originalWarn = console.warn.bind(console);
  console.error = (...args: unknown[]) => {
    appendFrontendDiagnostic('error', '[Console] error', args);
    originalError(...args);
  };
  console.warn = (...args: unknown[]) => {
    appendFrontendDiagnostic('warn', '[Console] warn', args);
    originalWarn(...args);
  };
};
