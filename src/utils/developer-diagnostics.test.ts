import { describe, expect, it, vi } from 'vitest';
import {
  redactDiagnosticText,
  stringifyDiagnosticValue,
  summarizeBackendDiagnostics,
  summarizeFrontendDiagnostics
} from './developer-diagnostics';

describe('stringifyDiagnosticValue', () => {
  it('preserves nested error details', () => {
    const value = stringifyDiagnosticValue({
      command: 'screen_recorder_start',
      error: new Error('capture failed')
    });

    expect(value).toContain('"message": "capture failed"');
    expect(value).toContain('"stack":');
  });

  it('handles circular references and bigint values', () => {
    const value: { count: bigint; self?: unknown } = { count: 12n };
    value.self = value;

    expect(stringifyDiagnosticValue(value)).toBe(`{
  "count": "12",
  "self": "[Circular]"
}`);
  });

  it('redacts credentials before values are stored', () => {
    const value = stringifyDiagnosticValue({
      token: 'github_pat_12345678901234567890',
      remoteUrl: 'https://secret-value@github.com/example/repo',
      authorization: 'Bearer abc.def-123'
    });

    expect(value).not.toContain('github_pat_12345678901234567890');
    expect(value).not.toContain('secret-value');
    expect(value).not.toContain('abc.def-123');
    expect(value).toContain('[REDACTED]');
  });

  it('does not enumerate Vue component instances or execute diagnostic getters', () => {
    const ownKeys = vi.fn(() => {
      throw new Error('component state must not be traversed');
    });
    const component = new Proxy({ __isVue: true }, { ownKeys });
    const getter = vi.fn(() => 'expensive state');
    const value = {
      component,
      get state() {
        return getter();
      }
    };
    expect(stringifyDiagnosticValue(value)).toContain('[Vue Component]');
    expect(stringifyDiagnosticValue(value)).toContain('[Getter]');
    expect(ownKeys).not.toHaveBeenCalled();
    expect(getter).not.toHaveBeenCalled();
  });

  it('bounds long strings, arrays and deeply nested diagnostic objects', () => {
    const value = stringifyDiagnosticValue({
      text: 'x'.repeat(100_000),
      list: Array.from({ length: 10_000 }, (_, i) => ({ id: i })),
      deep: { a: { b: { c: { d: { e: { f: 'hidden' } } } } } }
    })!;
    expect(value.length).toBeLessThan(16_100);
    expect(value).toContain('[Truncated]');
    expect(value).not.toContain('hidden');
    expect(value).not.toContain('"id": 9999');
  });

  it('skips warning object traversal when developer mode is disabled', async () => {
    vi.resetModules();
    const ownKeys = vi.fn(() => ['expensive']);
    const data = new Proxy({ expensive: 'reactive graph' }, { ownKeys });
    const originalWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.stubGlobal('window', { addEventListener: vi.fn() });
    vi.stubGlobal('localStorage', { getItem: () => 'false' });
    try {
      const diagnostics = await import('./developer-diagnostics');
      diagnostics.setupGlobalDeveloperDiagnostics();
      console.warn('Failed to resolve component: CheckSmall', data);
      expect(ownKeys).not.toHaveBeenCalled();
      expect(originalWarn).toHaveBeenCalledWith(
        'Failed to resolve component: CheckSmall',
        data
      );
    } finally {
      originalWarn.mockRestore();
      vi.unstubAllGlobals();
    }
  });
});

describe('redactDiagnosticText', () => {
  it('redacts credentials embedded in query parameters', () => {
    expect(
      redactDiagnosticText(
        'https://example.com/callback?access_token=secret&mode=test'
      )
    ).toBe('https://example.com/callback?access_token=[REDACTED]&mode=test');
  });
});

describe('diagnostic summaries', () => {
  it('ignores the expected app initialization debounce warning', () => {
    const summary = summarizeFrontendDiagnostics([
      {
        timestamp: '2026-06-01T00:00:00.000Z',
        level: 'warn',
        windowLabel: 'config',
        message: '[AppInit] ⚠️ 检测到重复挂载或非最后窗口，跳过初始化'
      },
      {
        timestamp: '2026-06-01T00:00:01.000Z',
        level: 'warn',
        windowLabel: 'config',
        message: '[PluginStore] load failed'
      },
      {
        timestamp: '2026-06-01T00:00:02.000Z',
        level: 'error',
        windowLabel: 'config',
        message: '[Config] save failed'
      }
    ]);

    expect(summary).toEqual({
      errors: 1,
      warnings: 1,
      ignoredWarnings: 1,
      total: 2
    });
  });

  it('ignores expected console warnings stored in diagnostic data', () => {
    const summary = summarizeFrontendDiagnostics([
      {
        timestamp: '2026-06-01T00:00:00.000Z',
        level: 'warn',
        windowLabel: 'config',
        message: '[Console] warn',
        data: JSON.stringify([
          'IPC custom protocol failed, Tauri will now use the postMessage interface instead',
          { message: 'Failed to fetch' }
        ])
      },
      {
        timestamp: '2026-06-01T00:00:01.000Z',
        level: 'warn',
        windowLabel: 'screenshot',
        message: '[Console] warn',
        data: JSON.stringify([
          '[Vue Router warn]: Component "default" in record with path "/screenshot" is defined using "defineAsyncComponent()".'
        ])
      }
    ]);

    expect(summary).toEqual({
      errors: 0,
      warnings: 0,
      ignoredWarnings: 2,
      total: 0
    });
  });

  it('counts backend log levels while ignoring expected warnings', () => {
    const summary = summarizeBackendDiagnostics(`
[2026-06-01][08:02:30][tauri_app_lib::window][WARN] [Frontend] [AppInit] ⚠️ 检测到重复挂载或非最后窗口，跳过初始化
[2026-06-01][08:02:30][tauri_app_lib::app_config::package_paths][WARN] [Plugin] 迁移插件时目标已存在，跳过: C:\\snippets-code\\packages\\plugins\\todo
[2026-06-01][08:02:31][tauri_app_lib::window][WARN] recoverable warning
[2026-06-01][08:02:32][tauri_app_lib::window][ERROR] save failed
`);

    expect(summary).toEqual({
      errors: 1,
      warnings: 1,
      ignoredWarnings: 2,
      total: 2
    });
  });
});
