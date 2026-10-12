import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  mounted: [] as Array<() => unknown>,
  handlers: new Map<string, (event: { payload: unknown }) => unknown>(),
  invoke: vi.fn(),
  info: vi.fn(),
  msg: vi.fn()
}));
vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  onMounted: (callback: () => unknown): void => {
    mocks.mounted.push(callback);
  },
  onUnmounted: vi.fn()
}));
vi.mock('vue-i18n', () => ({
  useI18n: () => ({ t: (key: string): string => key })
}));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/api/event', () => ({
  listen: vi.fn(
    async (
      event: string,
      handler: (event: { payload: unknown }) => unknown
    ) => {
      mocks.handlers.set(event, handler);
      return vi.fn();
    }
  )
}));
vi.mock('@/utils/modal', () => ({
  default: { info: mocks.info, msg: mocks.msg }
}));
vi.mock('@/api/markdown', () => ({ rebuildSearchIndex: vi.fn() }));

import { useIndexMaintenance } from './useIndexMaintenance';

describe('source index maintenance progress', () => {
  beforeEach(() => {
    mocks.mounted.length = 0;
    mocks.handlers.clear();
    mocks.invoke.mockReset();
    mocks.info.mockClear();
    mocks.msg.mockClear();
    mocks.invoke.mockResolvedValue([]);
  });

  it('keeps the button busy until indexing ends and treats later icon work separately', async () => {
    const controller = useIndexMaintenance();
    await mocks.mounted[0]();
    await controller.handleIndexConfirm('apps');
    expect(mocks.info).toHaveBeenCalledWith('dataManager.indexAppsSuccess');
    expect(mocks.msg).not.toHaveBeenCalled();
    const progress = mocks.handlers.get('scan-progress');
    const complete = mocks.handlers.get('scan-complete');
    progress?.({
      payload: {
        owner: 'local-launcher',
        task: 'index',
        stage: 'saving',
        current: 3,
        total: 4
      }
    });
    expect(controller.localIndexLoading.value).toBe(true);
    complete?.({
      payload: { owner: 'local-launcher', task: 'index', status: 'partial' }
    });
    expect(controller.localIndexLoading.value).toBe(false);
    progress?.({
      payload: {
        owner: 'local-launcher',
        task: 'icons',
        stage: 'icons',
        current: 1,
        total: 10
      }
    });
    expect(controller.backgroundIndexBusy.value).toBe(true);
    expect(controller.localIndexLoading.value).toBe(false);
    mocks.handlers.get('scan-cancelled')?.({
      payload: { owner: 'local-launcher' }
    });
    expect(controller.backgroundIndexBusy.value).toBe(false);
  });
});
