import { afterEach, describe, expect, it, vi } from 'vitest';
import { useConfigStartup } from './useConfigStartup';

const uninstallCleanupPathReport = {
  executablePath: 'C:\\Program Files\\snippets-code\\snippets-code.exe',
  dataDir: 'D:\\snippets-code',
  workspaceDir: 'D:\\workspace',
  pluginDir: 'D:\\snippets-code\\packages\\plugins'
};

interface StartupOverrides {
  emitError?: Error;
  refreshError?: Error;
  shouldInit?: boolean;
  measureValues?: number[];
  useDefaultNextRender?: boolean;
}

const createStartup = (overrides: StartupOverrides = {}) => {
  const measureValues = [...(overrides.measureValues ?? [100, 125, 160])];
  const window = {
    emit: vi.fn(async () => {
      if (overrides.emitError) {
        throw overrides.emitError;
      }
    })
  };
  const deps = {
    initializePlugins: vi.fn(async () => undefined),
    onReadyNavigationCheck: vi.fn(),
    onShouldInit: vi.fn(),
    logger: {
      info: vi.fn(),
      warn: vi.fn()
    },
    getWindow: vi.fn(() => window),
    now: vi.fn(() => 1234),
    measureNow: vi.fn(() => measureValues.shift() ?? 160),
    nextRender: overrides.useDefaultNextRender
      ? undefined
      : vi.fn((callback: () => void) => {
          callback();
        }),
    refreshUninstallCleanupPaths: vi.fn(() =>
      overrides.refreshError
        ? Promise.reject(overrides.refreshError)
        : Promise.resolve(uninstallCleanupPathReport)
    ),
    checkShouldInitialize: vi.fn(async () => overrides.shouldInit ?? true),
    initCleanupCache: vi.fn(async () => undefined)
  };

  return {
    startup: useConfigStartup(deps),
    deps,
    window
  };
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useConfigStartup', () => {
  it('waits for the first screen to paint before reporting readiness', async () => {
    const frames: Array<() => void> = [];
    vi.stubGlobal('requestAnimationFrame', (callback: () => void) => {
      frames.push(callback);
      return frames.length;
    });
    const { startup, deps, window } = createStartup({
      useDefaultNextRender: true
    });

    await startup.start();
    expect(window.emit).not.toHaveBeenCalled();
    expect(deps.onReadyNavigationCheck).not.toHaveBeenCalled();

    frames.shift()?.();
    expect(window.emit).not.toHaveBeenCalled();

    frames.shift()?.();
    await vi.waitFor(() => {
      expect(window.emit).toHaveBeenCalledExactlyOnceWith('config_ready');
      expect(deps.onReadyNavigationCheck).toHaveBeenCalledOnce();
    });
  });

  it('emits config ready, initializes plugins, cleans cache, and reports shouldInit', async () => {
    const { startup, deps, window } = createStartup({
      shouldInit: true
    });

    await expect(startup.start()).resolves.toEqual({
      shouldInit: true
    });

    expect(deps.nextRender).toHaveBeenCalled();
    expect(window.emit).toHaveBeenCalledWith('config_ready');
    expect(deps.onReadyNavigationCheck).toHaveBeenCalled();
    expect(deps.initializePlugins).toHaveBeenCalled();
    expect(deps.checkShouldInitialize).toHaveBeenCalled();
    expect(deps.initCleanupCache).toHaveBeenCalled();
    expect(deps.onShouldInit).toHaveBeenCalledWith(true);
    expect(deps.logger.info).toHaveBeenCalledWith(
      '[Config] ========== Config 页面初始化完成 ==========',
      {
        initCostMs: 60,
        ts: 1234
      }
    );
  });

  it('skips cache cleanup when startup debounce says no', async () => {
    const { startup, deps } = createStartup({
      shouldInit: false
    });

    await expect(startup.start()).resolves.toEqual({
      shouldInit: false
    });

    expect(deps.initCleanupCache).not.toHaveBeenCalled();
    expect(deps.onShouldInit).toHaveBeenCalledWith(false);
  });

  it('logs config ready emit failures without blocking startup', async () => {
    const { startup, deps } = createStartup({
      emitError: new Error('emit failed'),
      shouldInit: false
    });

    await expect(startup.start()).resolves.toEqual({
      shouldInit: false
    });

    expect(deps.logger.warn).toHaveBeenCalledWith(
      '[Config] config_ready emit failed',
      expect.objectContaining({
        error: 'emit failed'
      })
    );
    expect(deps.onReadyNavigationCheck).toHaveBeenCalled();
  });
});

describe('uninstall cleanup path startup refresh', () => {
  it('logs failures without blocking startup', async () => {
    const { startup, deps } = createStartup({
      refreshError: new Error('registry denied'),
      shouldInit: false
    });

    await expect(startup.start()).resolves.toEqual({
      shouldInit: false
    });

    expect(deps.logger.warn).toHaveBeenCalledWith(
      '[Config] 卸载清理路径刷新失败',
      expect.objectContaining({
        error: 'registry denied'
      })
    );
    expect(deps.initializePlugins).toHaveBeenCalledOnce();
  });
});
