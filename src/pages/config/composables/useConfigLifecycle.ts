import type { ConfigNavigationEvents } from './useConfigNavigationEvents';
import type { ConfigStartup } from './useConfigStartup';
import { logger as defaultLogger } from '@/utils/logger';

type ConfigLifecycleLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
};

export interface ConfigLifecycleDeps {
  startup: ConfigStartup;
  navigationEvents: ConfigNavigationEvents;
  logger?: ConfigLifecycleLogger;
}

export function useConfigLifecycle(deps: ConfigLifecycleDeps) {
  const logger = deps.logger ?? defaultLogger;

  const start = async () => {
    // 后端会在 config_ready 后立即发送导航请求，必须先建立监听，避免
    // 首次打开配置窗口时丢失插件管理或插件设置页跳转。
    await deps.navigationEvents.setup();
    await deps.startup.start();
  };

  const cleanup = () => {
    logger.info('[Config] 🧹 开始清理 Config 页面资源...');
    deps.navigationEvents.cleanup();
    logger.info('[Config] ✅ Config 页面资源清理完成');
  };

  return {
    start,
    cleanup
  };
}

export type ConfigLifecycle = ReturnType<typeof useConfigLifecycle>;
