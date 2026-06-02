const DEVELOPER_MODE_KEY = 'snippets-code:developer-mode';
const FRONTEND_LOG_KEY = 'snippets-code:frontend-diagnostics';
const MAX_FRONTEND_ENTRIES = 240;
const REDACTED_VALUE = '[REDACTED]';

const BENIGN_WARNING_PATTERNS = [
  /检测到重复挂载或非最后窗口，跳过初始化/,
  /duplicate mount or non-last window.+skip initialization/i
];

export type FrontendDiagnosticLevel = 'debug' | 'info' | 'warn' | 'error';

export interface FrontendDiagnosticEntry {
  timestamp: string;
  level: FrontendDiagnosticLevel;
  windowLabel: string;
  message: string;
  data?: string;
}

export interface DiagnosticIssueSummary {
  errors: number;
  warnings: number;
  ignoredWarnings: number;
  total: number;
}

let listenersInstalled = false;

export const redactDiagnosticText = (value: string): string =>
  value
    .replace(
      /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
      `$1"${REDACTED_VALUE}"`
    )
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${REDACTED_VALUE}`)
    .replace(
      /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
      REDACTED_VALUE
    )
    .replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${REDACTED_VALUE}@`)
    .replace(
      /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
      `$1${REDACTED_VALUE}`
    );

export const stringifyDiagnosticValue = (
  value: unknown
): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'string') return redactDiagnosticText(value);
  const seen = new WeakSet<object>();
  try {
    return redactDiagnosticText(
      JSON.stringify(
        value,
        (_key, nestedValue: unknown) => {
          if (nestedValue instanceof Error) {
            return {
              name: nestedValue.name,
              message: nestedValue.message,
              stack: nestedValue.stack,
              cause: nestedValue.cause
            };
          }
          if (typeof nestedValue === 'bigint') return nestedValue.toString();
          if (typeof nestedValue === 'object' && nestedValue !== null) {
            if (seen.has(nestedValue)) return '[Circular]';
            seen.add(nestedValue);
          }
          return nestedValue;
        },
        2
      )
    );
  } catch {
    return redactDiagnosticText(String(value));
  }
};

export const isBenignDiagnosticWarning = (message: string): boolean =>
  BENIGN_WARNING_PATTERNS.some((pattern) => pattern.test(message));

export const summarizeFrontendDiagnostics = (
  entries: FrontendDiagnosticEntry[]
): DiagnosticIssueSummary => {
  let errors = 0;
  let warnings = 0;
  let ignoredWarnings = 0;

  entries.forEach((entry) => {
    if (entry.level === 'error') {
      errors += 1;
    } else if (entry.level === 'warn') {
      if (isBenignDiagnosticWarning(entry.message)) {
        ignoredWarnings += 1;
      } else {
        warnings += 1;
      }
    }
  });

  return {
    errors,
    warnings,
    ignoredWarnings,
    total: errors + warnings
  };
};

export const summarizeBackendDiagnostics = (
  logText = ''
): DiagnosticIssueSummary => {
  let errors = 0;
  let warnings = 0;
  let ignoredWarnings = 0;

  logText.split('\n').forEach((line) => {
    const match = line.match(/\[(ERROR|WARN)\]/);
    if (!match) return;
    if (match[1] === 'ERROR') {
      errors += 1;
    } else if (isBenignDiagnosticWarning(line)) {
      ignoredWarnings += 1;
    } else {
      warnings += 1;
    }
  });

  return {
    errors,
    warnings,
    ignoredWarnings,
    total: errors + warnings
  };
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
    if (!enabled) {
      localStorage.removeItem(FRONTEND_LOG_KEY);
    }
  } catch {
    // Diagnostics must not affect the application when storage is unavailable.
  }
};

export const appendFrontendDiagnostic = (
  level: FrontendDiagnosticLevel,
  message: string,
  data?: unknown
): void => {
  if (!isDeveloperModeEnabled()) return;
  if (typeof localStorage === 'undefined') return;

  const entries = readEntries();
  entries.push({
    timestamp: new Date().toISOString(),
    level,
    windowLabel: currentWindowLabel(),
    message: redactDiagnosticText(message),
    data: stringifyDiagnosticValue(data)
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
      return redactDiagnosticText(
        `[${entry.timestamp}] [${entry.level.toUpperCase()}] [${entry.windowLabel}] ${entry.message}${suffix}`
      );
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
      error: stringifyDiagnosticValue(event.error)
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
