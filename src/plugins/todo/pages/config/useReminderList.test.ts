import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  mounted: [] as Array<() => unknown>,
  activated: [] as Array<() => unknown>,
  deactivated: [] as Array<() => unknown>,
  unmounted: [] as Array<() => unknown>,
  invoke: vi.fn(),
  stop: vi.fn(),
  handler: undefined as undefined | (() => void)
}));
vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  onMounted: (fn: () => unknown): void => {
    mocks.mounted.push(fn);
  },
  onActivated: (fn: () => unknown): void => {
    mocks.activated.push(fn);
  },
  onDeactivated: (fn: () => unknown): void => {
    mocks.deactivated.push(fn);
  },
  onUnmounted: (fn: () => unknown): void => {
    mocks.unmounted.push(fn);
  }
}));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/api/event', () => ({
  listen: vi.fn(async (_name: string, fn: () => void) => {
    mocks.handler = fn;
    return mocks.stop;
  })
}));
import { useReminderList } from './useReminderList';
const flush = async (): Promise<void> => {
  await Promise.resolve();
  await Promise.resolve();
};

describe('reminder list lifecycle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mocks.mounted.length =
      mocks.activated.length =
      mocks.deactivated.length =
      mocks.unmounted.length =
        0;
    mocks.invoke.mockReset().mockResolvedValue([]);
    mocks.stop.mockClear();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it('stops refresh timers while hidden and reloads on activation without duplicating timers', async () => {
    useReminderList();
    mocks.mounted[0]();
    mocks.activated[0]();
    await flush();
    expect(mocks.invoke).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(1);
    mocks.deactivated[0]();
    expect(vi.getTimerCount()).toBe(0);
    mocks.handler?.();
    expect(mocks.invoke).toHaveBeenCalledTimes(1);
    mocks.activated[0]();
    await flush();
    expect(mocks.invoke).toHaveBeenCalledTimes(2);
    mocks.unmounted[0]();
    expect(mocks.stop).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });
  it('exposes a failed load and allows retry instead of falsely showing a successful empty result', async () => {
    mocks.invoke.mockRejectedValueOnce('storage unavailable');
    const controller = useReminderList();
    mocks.mounted[0]();
    await flush();
    expect(controller.loadError.value).toBe('storage unavailable');
    await controller.fetchAlarmCards();
    expect(controller.loadError.value).toBe('');
    mocks.unmounted[0]();
  });
  it('does not overwrite newer data or write state after leaving the page', async () => {
    let resolveOld!: (value: unknown) => void;
    mocks.invoke.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveOld = resolve;
      })
    );
    const controller = useReminderList();
    mocks.mounted[0]();
    const latest = { id: 'new', weekdays: ['一'] };
    mocks.invoke.mockResolvedValueOnce([latest]);
    await controller.fetchAlarmCards();
    resolveOld([{ id: 'old', weekdays: [] }]);
    await flush();
    expect(controller.alarmCards.value[0]).toMatchObject({
      id: 'new',
      weekdays: ['Mon']
    });
    mocks.deactivated[0]();
    await controller.fetchAlarmCards();
    expect(controller.alarmCards.value[0].id).toBe('new');
    mocks.unmounted[0]();
  });
});
