import { nextTick } from 'vue';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { checkShouldInitialize as defaultCheckShouldInitialize, initCleanupCache as defaultInitCleanupCache } from '@/utils/app-init';
import { logger as defaultLogger } from '@/utils/logger';

type ConfigStartupLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
};

type ConfigStartupWindow = {
  emit: (event: string, payload?: unknown) => Promise<void>;
};

export interface ConfigStartupDeps {
  initializePlugins: () => Promise<void>;
  onReadyNavigationCheck: () => void;
  onShouldInit: (shouldInit: boolean) => void;
  logger?: ConfigStartupLogger;
  getWindow?: () => ConfigStartupWindow;
  now?: () => number;
  measureNow?: () => number;
  nextRender?: (callback: () => void) => void;
  checkShouldInitialize?: () => Promise<boolean>;
  initCleanupCache?: () => Promise<void>;
}

export function useConfigStartup(deps: ConfigStartupDeps) {
  const logger = deps.logger ?? defaultLogger;
  const getWindow = deps.getWindow ?? getCurrentWindow;
  const now = deps.now ?? Date.now;
  const measureNow = deps.measureNow ?? (() => performance.now());
  const nextRender = deps.nextRender ?? nextTick;
  const checkShouldInitialize = deps.checkShouldInitialize ?? defaultCheckShouldInitialize;
  const initCleanupCache = deps.initCleanupCache ?? defaultInitCleanupCache;

  const start = async () => {
    const initStart = measureNow();
    logger.info('[Config] ========== Config 页面初始化开始 ==========', {
      ts: now()
    });

    nextRender(() => {
      logger.info('[Config] emit config_ready after first render', {
        initCostMs: Math.round(measureNow() - initStart),
        ts: now()
      });
      void getWindow().emit('config_ready');
      deps.onReadyNavigationCheck();
    });

    await deps.initializePlugins();

    const shouldInit = await checkShouldInitialize();
    if (shouldInit) {
      await initCleanupCache();
    }
    deps.onShouldInit(shouldInit);

    logger.info('[Config] ========== Config 页面初始化完成 ==========', {
      initCostMs: Math.round(measureNow() - initStart),
      ts: now()
    });

    return {
      shouldInit
    };
  };

  return {
    start
  };
}

export type ConfigStartup = ReturnType<typeof useConfigStartup>;
