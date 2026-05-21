import { describe, expect, it, vi } from 'vitest';
import { useConfigLifecycle } from './useConfigLifecycle';

describe('useConfigLifecycle', () => {
  it('starts config startup before navigation listeners', async () => {
    const calls: string[] = [];
    const lifecycle = useConfigLifecycle({
      startup: {
        start: vi.fn(async () => {
          calls.push('startup');
          return { shouldInit: true };
        })
      },
      navigationEvents: {
        setup: vi.fn(async () => {
          calls.push('navigation');
        }),
        cleanup: vi.fn(),
        checkPendingNavigation: vi.fn(),
        checkPendingSnippetOpen: vi.fn(),
        checkPendingNavigationRequests: vi.fn()
      },
      logger: {
        info: vi.fn()
      }
    });

    await lifecycle.start();

    expect(calls).toEqual(['startup', 'navigation']);
  });

  it('cleans navigation listeners with config logs', () => {
    const navigationEvents = {
      setup: vi.fn(async () => undefined),
      cleanup: vi.fn(),
      checkPendingNavigation: vi.fn(),
      checkPendingSnippetOpen: vi.fn(),
      checkPendingNavigationRequests: vi.fn()
    };
    const logger = {
      info: vi.fn()
    };
    const lifecycle = useConfigLifecycle({
      startup: {
        start: vi.fn(async () => ({ shouldInit: true }))
      },
      navigationEvents,
      logger
    });

    lifecycle.cleanup();

    expect(navigationEvents.cleanup).toHaveBeenCalled();
    expect(logger.info).toHaveBeenCalledWith('[Config] 🧹 开始清理 Config 页面资源...');
    expect(logger.info).toHaveBeenCalledWith('[Config] ✅ Config 页面资源清理完成');
  });
});
