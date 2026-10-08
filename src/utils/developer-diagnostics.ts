import { invoke } from '@tauri-apps/api/core';

const DEVELOPER_MODE_KEY = 'snippets-code:developer-mode';
const FRONTEND_LOG_KEY = 'snippets-code:frontend-diagnostics';
const MAX_FRONTEND_ENTRIES = 240;
const REDACTED_VALUE = '[REDACTED]';
const MAX_DIAGNOSTIC_DEPTH = 5;
const MAX_DIAGNOSTIC_ITEMS = 40;
const MAX_DIAGNOSTIC_NODES = 240;
const MAX_DIAGNOSTIC_TEXT = 2000;
const MAX_DIAGNOSTIC_OUTPUT = 16000;

const BENIGN_WARNING_PATTERNS = [
  /IPC custom protocol failed, Tauri will now use the postMessage interface instead/i,
  /defined using \\?"defineAsyncComponent\(\)\\?"/i,
  /检测到重复挂载或非最后窗口，跳过初始化/,
  /迁移插件时目标已存在，跳过/,
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

const forwardDiagnosticToBackend = (
  level: FrontendDiagnosticLevel,
  message: string,
  data?: unknown
): void => {
  // Release builds stay quiet by default. Detailed console diagnostics are
  // intentionally available only after the user explicitly enables developer mode.
  if (level !== 'error' && !isDeveloperModeEnabled()) return;
  invoke('frontend_log', {
    level,
    message: `[${currentWindowLabel()}] ${message}`,
    data: data === undefined ? null : stringifyDiagnosticValue(data)
  }).catch(() => {});
};

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
  const boundedText = (text: string, limit = MAX_DIAGNOSTIC_TEXT): string => {
    const redacted = redactDiagnosticText(text);
    return redacted.length > limit
      ? `${redacted.slice(0, limit)}… [Truncated]`
      : redacted;
  };
  if (typeof value === 'string') return boundedText(value);
  const seen = new WeakSet<object>();
  let remainingNodes = MAX_DIAGNOSTIC_NODES;
  const snapshot = (nestedValue: unknown, depth: number): unknown => {
    if (typeof nestedValue === 'string') return boundedText(nestedValue);
    if (typeof nestedValue === 'bigint') return nestedValue.toString();
    if (typeof nestedValue !== 'object' || nestedValue === null)
      return nestedValue;
    if (seen.has(nestedValue)) return '[Circular]';
    if (depth >= MAX_DIAGNOSTIC_DEPTH || remainingNodes-- <= 0)
      return '[Truncated]';
    seen.add(nestedValue);
    // Vue exposes this marker specifically for inspection. Enumerating its
    // public instance walks component state and can itself produce warnings.
    if ((nestedValue as { __isVue?: boolean }).__isVue === true)
      return '[Vue Component]';
    if (typeof Node !== 'undefined' && nestedValue instanceof Node)
      return '[DOM Node]';
    if (nestedValue instanceof Error) {
      return snapshot(
        {
          name: nestedValue.name,
          message: nestedValue.message,
          stack: nestedValue.stack,
          cause: nestedValue.cause
        },
        depth + 1
      );
    }
    if (nestedValue instanceof Date) return nestedValue.toJSON();
    if (Array.isArray(nestedValue)) {
      const items = nestedValue
        .slice(0, MAX_DIAGNOSTIC_ITEMS)
        .map((item) => snapshot(item, depth + 1));
      if (nestedValue.length > MAX_DIAGNOSTIC_ITEMS) items.push('[Truncated]');
      return items;
    }
    const result: Record<string, unknown> = Object.create(null);
    const keys = Object.keys(nestedValue);
    for (const key of keys.slice(0, MAX_DIAGNOSTIC_ITEMS)) {
      const descriptor = Object.getOwnPropertyDescriptor(nestedValue, key);
      // Logging should never execute application getters.
      result[boundedText(key)] = descriptor?.get
        ? '[Getter]'
        : snapshot(descriptor?.value, depth + 1);
    }
    if (keys.length > MAX_DIAGNOSTIC_ITEMS) result['[Truncated]'] = true;
    return result;
  };
  try {
    const serialized = JSON.stringify(snapshot(value, 0), null, 2);
    return serialized === undefined
      ? undefined
      : boundedText(serialized, MAX_DIAGNOSTIC_OUTPUT);
  } catch {
    return '[Unserializable diagnostic value]';
  }
};

export const isBenignDiagnosticWarning = (message: string): boolean =>
  BENIGN_WARNING_PATTERNS.some((pattern) => pattern.test(message));

const frontendDiagnosticSearchText = (entry: FrontendDiagnosticEntry): string =>
  `${entry.message}\n${entry.data ?? ''}`;

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
      if (isBenignDiagnosticWarning(frontendDiagnosticSearchText(entry))) {
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
    return (
      (
        globalThis as typeof globalThis & {
          __TAURI_INTERNALS__?: {
            metadata?: { currentWindow?: { label?: string } };
          };
        }
      ).__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? 'webview'
    );
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
    const payload = {
      message: event.message,
      filename: event.filename,
      line: event.lineno,
      column: event.colno,
      error: stringifyDiagnosticValue(event.error)
    };
    appendFrontendDiagnostic('error', '[Window] uncaught error', payload);
    forwardDiagnosticToBackend('error', '[Window] uncaught error', payload);
  });

  window.addEventListener('unhandledrejection', (event) => {
    appendFrontendDiagnostic(
      'error',
      '[Window] unhandled promise rejection',
      event.reason
    );
    forwardDiagnosticToBackend(
      'error',
      '[Window] unhandled promise rejection',
      event.reason
    );
  });

  const originalError = console.error.bind(console);
  const originalWarn = console.warn.bind(console);
  console.error = (...args: unknown[]) => {
    appendFrontendDiagnostic('error', '[Console] error', args);
    forwardDiagnosticToBackend('error', '[Console] error', args);
    originalError(...args);
  };
  console.warn = (...args: unknown[]) => {
    if (isDeveloperModeEnabled()) {
      // Warning classification needs only the message, never a traversal of
      // Vue's component trace or the entire reactive application graph.
      const warningText = args
        .filter((arg): arg is string => typeof arg === 'string')
        .join(' ');
      if (!isBenignDiagnosticWarning(warningText)) {
        appendFrontendDiagnostic('warn', '[Console] warn', args);
        forwardDiagnosticToBackend('warn', '[Console] warn', args);
      }
    }
    originalWarn(...args);
  };
};
