import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  getContentReadyEvent,
  hasDedicatedReadiness,
  prepareWindowReadiness,
  waitForFirstPaint
} from './window-readiness';

afterEach(() => vi.unstubAllGlobals());

function createWindow(label: string) {
  const handlers = new Map<string, (event: { payload: unknown }) => unknown>();
  const cleanup = vi.fn();
  const appWindow = {
    label,
    listen: vi.fn(async (event: string, handler) => {
      handlers.set(event, handler);
      return cleanup;
    }),
    emit: vi.fn(async () => {})
  };
  return { appWindow, handlers, cleanup };
}

describe('window readiness', () => {
  it('waits for DOM updates and two animation frames', async () => {
    const frames: Array<() => void> = [];
    vi.stubGlobal('requestAnimationFrame', (callback: () => void) => {
      frames.push(callback);
      return frames.length;
    });
    let painted = false;
    const paint = waitForFirstPaint().then(() => {
      painted = true;
    });
    await Promise.resolve();
    expect(frames).toHaveLength(1);
    frames.shift()?.();
    await Promise.resolve();
    expect(painted).toBe(false);
    frames.shift()?.();
    await paint;
    expect(painted).toBe(true);
  });

  it('does not expose a window until its asynchronous route and paint finish', async () => {
    let resolveRoute!: () => void;
    let resolvePaint!: () => void;
    const router = {
      isReady: () =>
        new Promise<void>((resolve) => {
          resolveRoute = resolve;
        })
    };
    const paint = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolvePaint = resolve;
        })
    );
    const { appWindow } = createWindow('main');
    const report = await prepareWindowReadiness(router, appWindow, paint);
    const reported = report();
    expect(appWindow.emit).not.toHaveBeenCalled();
    resolveRoute();
    await vi.waitFor(() => expect(paint).toHaveBeenCalledOnce());
    expect(appWindow.emit).not.toHaveBeenCalled();
    resolvePaint();
    await reported;
    expect(appWindow.emit).toHaveBeenCalledExactlyOnceWith(
      'window-first-paint',
      { label: 'main' }
    );
  });

  it('captures a fast plugin ready event before mount and cleans up the listener', async () => {
    const { appWindow, handlers, cleanup } = createWindow('translate');
    const paint = vi.fn(async () => {});
    const report = await prepareWindowReadiness(
      { isReady: async () => {} },
      appWindow,
      paint
    );
    handlers.get('translate_ready')?.({ payload: null });
    await report();
    expect(paint).toHaveBeenCalledOnce();
    expect(appWindow.emit).toHaveBeenCalledOnce();
    expect(cleanup).toHaveBeenCalledOnce();
  });

  it('ignores a notification ready event from another window', async () => {
    const { appWindow, handlers } = createWindow('notification_a');
    const paint = vi.fn(async () => {});
    const report = await prepareWindowReadiness(
      { isReady: async () => {} },
      appWindow,
      paint
    );
    const reported = report();
    handlers.get('notification-ready')?.({
      payload: { label: 'notification_b' }
    });
    await Promise.resolve();
    await Promise.resolve();
    expect(paint).not.toHaveBeenCalled();
    handlers.get('notification-ready')?.({
      payload: { label: 'notification_a' }
    });
    await reported;
    expect(appWindow.emit).toHaveBeenCalledExactlyOnceWith(
      'window-first-paint',
      { label: 'notification_a' }
    );
  });

  it('keeps a pin hidden until its own image arrives and finishes decoding', async () => {
    let imagePresent = false;
    let resolveDecode!: () => void;
    const decode = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveDecode = resolve;
        })
    );
    vi.stubGlobal('document', {
      querySelector: () => (imagePresent ? {} : null),
      images: [{ decode }]
    });
    const { appWindow, handlers } = createWindow('pin_a');
    const paint = vi.fn(async () => {});
    const report = await prepareWindowReadiness(
      { isReady: async () => {} },
      appWindow,
      paint
    );
    const reported = report();
    await handlers.get('pin-window-ready')?.({ payload: null });
    expect(decode).not.toHaveBeenCalled();
    imagePresent = true;
    await handlers.get('pin-window-ready')?.({ payload: null });
    await vi.waitFor(() => expect(decode).toHaveBeenCalledOnce());
    expect(paint).not.toHaveBeenCalled();
    resolveDecode();
    await reported;
    expect(paint).toHaveBeenCalledOnce();
  });

  it.each(['config', 'screenshot', 'screen_recorder'])(
    'preserves the dedicated protocol for %s',
    async (label) => {
      const { appWindow } = createWindow(label);
      const paint = vi.fn(async () => {});
      const report = await prepareWindowReadiness(
        { isReady: async () => {} },
        appWindow,
        paint
      );
      await report();
      expect(appWindow.listen).not.toHaveBeenCalled();
      expect(appWindow.emit).not.toHaveBeenCalled();
      expect(paint).not.toHaveBeenCalled();
      expect(hasDedicatedReadiness(label)).toBe(true);
    }
  );

  it('covers the existing setup, update, theme and multi-instance events', () => {
    expect(getContentReadyEvent('setup')).toBe('setup_ready');
    expect(getContentReadyEvent('update')).toBe('update-ready');
    expect(getContentReadyEvent('dark_mode')).toBe('dark_mode_ready');
    expect(getContentReadyEvent('pin_id')).toBe('pin-window-ready');
    expect(getContentReadyEvent('notification_id')).toBe('notification-ready');
    expect(getContentReadyEvent('plugin_custom')).toBeUndefined();
  });
});
