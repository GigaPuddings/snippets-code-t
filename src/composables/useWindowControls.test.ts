import { createRenderer, defineComponent, nextTick, ref } from 'vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useWindowControls } from './useWindowControls';
import { useTitlebarSnap } from './useTitlebarSnap';

const mocks = vi.hoisted(() => ({
  current: vi.fn(),
  invoke: vi.fn(),
  os: vi.fn()
}));
vi.mock('@tauri-apps/api/window', () => ({ getCurrentWindow: mocks.current }));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/plugin-os', () => ({ type: mocks.os }));

type Node = { children: Node[] };
const renderer = createRenderer<Node, Node>({
  patchProp: () => undefined,
  insert: (child, parent) => {
    parent.children.push(child);
  },
  remove: () => undefined,
  createElement: () => ({ children: [] }),
  createText: () => ({ children: [] }),
  createComment: () => ({ children: [] }),
  setText: () => undefined,
  setElementText: () => undefined,
  parentNode: () => null,
  nextSibling: () => null
});
const cleanups: (() => void)[] = [];
function mount<T>(setup: () => T) {
  let result!: T;
  const app = renderer.createApp(
    defineComponent({
      setup() {
        result = setup();
        return () => null;
      }
    })
  );
  app.mount({ children: [] });
  const unmount = () => app.unmount();
  cleanups.push(unmount);
  return { result, unmount };
}
async function settle() {
  await nextTick();
  for (let i = 0; i < 8; i++) await Promise.resolve();
}
function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((done) => {
    resolve = done;
  });
  return { resolve, promise };
}
function windowMock() {
  return {
    label: 'config',
    isMaximized: vi.fn(async () => false),
    isMaximizable: vi.fn(async () => true),
    isMinimizable: vi.fn(async () => true),
    isResizable: vi.fn(async () => true),
    isAlwaysOnTop: vi.fn(async () => false),
    setAlwaysOnTop: vi.fn(async (_value: boolean) => undefined),
    onResized: vi.fn(async (_callback: () => void) => vi.fn()),
    toggleMaximize: vi.fn(async (): Promise<void> => undefined),
    minimize: vi.fn(async () => undefined),
    close: vi.fn(async () => undefined),
    listen: vi.fn(
      async (_name: string, _callback: (event: { payload: boolean }) => void) =>
        vi.fn()
    )
  };
}
beforeEach(() => {
  vi.clearAllMocks();
  mocks.current.mockReturnValue(windowMock());
  mocks.invoke.mockResolvedValue(true);
  mocks.os.mockReturnValue('windows');
});
afterEach(() => {
  cleanups.splice(0).forEach((unmount) => unmount());
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('titlebar window controls', () => {
  it('controls the actual current window and initializes restored state', async () => {
    const current = windowMock();
    current.label = 'another-window';
    current.isMaximized.mockResolvedValue(true);
    mocks.current.mockReturnValue(current);
    const { result } = mount(() => useWindowControls());
    await settle();
    expect(result.isMaximized.value).toBe(true);
    await result.performAction('minimize');
    expect(current.minimize).toHaveBeenCalledOnce();
  });
  it('follows native resizing/restore instead of an optimistic icon state', async () => {
    const current = windowMock();
    const { result } = mount(() => useWindowControls(current));
    await settle();
    current.isMaximized.mockResolvedValue(true);
    current.onResized.mock.calls[0][0]();
    await settle();
    expect(result.isMaximized.value).toBe(true);
    current.isMaximized.mockResolvedValue(false);
    await result.performAction('maximize');
    expect(current.toggleMaximize).toHaveBeenCalledOnce();
    expect(result.isMaximized.value).toBe(false);
  });
  it('awaits action errors and keeps the previous state', async () => {
    const current = windowMock();
    const { result } = mount(() => useWindowControls(current));
    await settle();
    current.toggleMaximize.mockRejectedValue(new Error('denied'));
    await expect(result.performAction('maximize')).rejects.toThrow('denied');
    expect(result.isMaximized.value).toBe(false);
    expect(result.isChangingState.value).toBe(false);
  });
  it('prevents overlapping toggles and disables maximize for fixed-size windows', async () => {
    const current = windowMock();
    const pending = deferred<void>();
    current.toggleMaximize.mockReturnValue(pending.promise);
    const { result } = mount(() => useWindowControls(current));
    await settle();
    const first = result.performAction('maximize');
    await result.performAction('maximize');
    expect(current.toggleMaximize).toHaveBeenCalledOnce();
    pending.resolve();
    await first;
    current.isResizable.mockResolvedValue(false);
    const fixed = mount(() => useWindowControls(current)).result;
    await settle();
    await fixed.performAction('maximize');
    expect(fixed.isMaximizable.value).toBe(false);
    expect(current.toggleMaximize).toHaveBeenCalledOnce();
  });
  it('cleans up a resize subscription that arrives after unmount', async () => {
    const current = windowMock();
    const stop = vi.fn();
    const late = deferred<typeof stop>();
    current.onResized.mockReturnValue(late.promise);
    const { unmount } = mount(() => useWindowControls(current));
    unmount();
    late.resolve(stop);
    await settle();
    expect(stop).toHaveBeenCalledOnce();
  });
});

describe('Windows native snap region', () => {
  function snapHarness() {
    let frame: FrameRequestCallback | undefined;
    const browser = {
      devicePixelRatio: 1.5,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    };
    vi.stubGlobal('window', browser);
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((callback: FrameRequestCallback) => {
        frame = callback;
        return 1;
      })
    );
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe = vi.fn();
        disconnect = vi.fn();
      }
    );
    const rect = { x: 900, y: 4, width: 32, height: 32 };
    const button = ref({
      getBoundingClientRect: () => rect,
      parentElement: {}
    } as HTMLElement);
    const enabled = ref(true);
    const mounted = mount(() => useTitlebarSnap(button, enabled));
    return {
      ...mounted,
      enabled,
      rect,
      browser,
      frame: () => {
        const callback = frame;
        frame = undefined;
        callback?.(0);
      }
    };
  }
  it('submits DOM geometry with DPI, synchronizes hover, and removes the region on unmount', async () => {
    const current = mocks.current();
    const harness = snapHarness();
    await settle();
    harness.frame();
    await settle();
    expect(mocks.invoke).toHaveBeenCalledWith('set_titlebar_maximize_bounds', {
      bounds: { x: 900, y: 4, width: 32, height: 32, scale: 1.5 }
    });
    current.listen.mock.calls[0][1]({ payload: true });
    expect(harness.result.hovered.value).toBe(true);
    harness.unmount();
    await settle();
    expect(mocks.invoke).toHaveBeenLastCalledWith(
      'set_titlebar_maximize_bounds',
      { bounds: null }
    );
  });
  it('coalesces resize updates while IPC is pending and keeps the newest position', async () => {
    const busy = deferred<boolean>();
    mocks.invoke.mockReturnValueOnce(busy.promise);
    const harness = snapHarness();
    await settle();
    harness.frame();
    const resize = harness.browser.addEventListener.mock.calls[0][1];
    harness.rect.x = 1000;
    resize();
    harness.frame();
    harness.rect.x = 1100;
    resize();
    harness.frame();
    expect(mocks.invoke).toHaveBeenCalledTimes(1);
    busy.resolve(true);
    await settle();
    expect(mocks.invoke).toHaveBeenCalledTimes(2);
    expect(mocks.invoke.mock.calls[1][1].bounds.x).toBe(1100);
  });
  it('removes the hit region when maximizing is disabled', async () => {
    const harness = snapHarness();
    await settle();
    harness.frame();
    await settle();
    harness.enabled.value = false;
    await settle();
    harness.frame();
    await settle();
    expect(mocks.invoke).toHaveBeenLastCalledWith(
      'set_titlebar_maximize_bounds',
      { bounds: null }
    );
  });
  it('keeps fixed search windows out of the native bridge', async () => {
    mocks.current().label = 'main';
    const harness = snapHarness();
    await settle();
    harness.frame();
    expect(mocks.invoke).not.toHaveBeenCalled();
    expect(mocks.current().listen).not.toHaveBeenCalled();
  });
  it('falls back to HTML controls if the native hover subscription fails', async () => {
    const warning = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => undefined);
    mocks.current().listen.mockRejectedValue(new Error('unavailable'));
    const harness = snapHarness();
    await settle();
    harness.frame();
    expect(mocks.invoke).not.toHaveBeenCalled();
    expect(warning).toHaveBeenCalled();
  });
});
