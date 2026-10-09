import { createRenderer, defineComponent, nextTick, reactive } from 'vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useSplitter, type SplitterOptions } from './useSplitter';

interface TestNode {
  type: string;
  children: TestNode[];
  parent: TestNode | null;
  props: Record<string, unknown>;
  clientWidth: number;
  setPointerCapture: ReturnType<typeof vi.fn>;
  hasPointerCapture: ReturnType<typeof vi.fn>;
  releasePointerCapture: ReturnType<typeof vi.fn>;
}

const node = (type: string): TestNode => ({
  type,
  children: [],
  parent: null,
  props: {},
  clientWidth: 1000,
  setPointerCapture: vi.fn(),
  hasPointerCapture: vi.fn(() => true),
  releasePointerCapture: vi.fn()
});
const renderer = createRenderer<TestNode, TestNode>({
  patchProp: (element, key, _previous, value) => {
    element.props[key] = value;
  },
  insert: (child, parent, anchor) => {
    child.parent = parent;
    const index = anchor ? parent.children.indexOf(anchor) : -1;
    if (index < 0) parent.children.push(child);
    else parent.children.splice(index, 0, child);
  },
  remove: (child) => {
    const siblings = child.parent?.children;
    if (siblings) siblings.splice(siblings.indexOf(child), 1);
  },
  createElement: node,
  createText: () => node('text'),
  createComment: () => node('comment'),
  setText: () => undefined,
  setElementText: () => undefined,
  parentNode: (child) => child.parent,
  nextSibling: (child) => {
    const siblings = child.parent?.children ?? [];
    return siblings[siblings.indexOf(child) + 1] ?? null;
  }
});

const listeners = new Map<string, (event: PointerEvent) => void>();
const unmounts: Array<() => void> = [];
let resize: () => void;
const disconnect = vi.fn();
beforeEach(() => {
  listeners.clear();
  disconnect.mockClear();
  vi.stubGlobal('window', {
    addEventListener: (type: string, handler: (event: PointerEvent) => void) =>
      listeners.set(type, handler),
    removeEventListener: (type: string) => listeners.delete(type)
  });
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn();
      disconnect = disconnect;
      constructor(callback: () => void) {
        resize = callback;
      }
    }
  );
});
afterEach(() => {
  unmounts.splice(0).forEach((unmount) => unmount());
  vi.unstubAllGlobals();
});

const mount = async (options: Partial<SplitterOptions> = {}) => {
  const props = reactive({
    modelValue: 292 as number | string,
    defaultSize: 292 as number | string,
    minSize: 240 as number | string,
    maxSize: 480 as number | string,
    minSecondSize: 360,
    firstCollapsed: false,
    secondCollapsed: false,
    ...options
  });
  const committed = vi.fn();
  const updated = vi.fn();
  const container = node('main');
  const divider = node('div');
  let layout: ReturnType<typeof useSplitter>;
  const app = renderer.createApp(
    defineComponent({
      setup() {
        layout = useSplitter(props, updated, committed);
        layout.splitterRef.value = container as unknown as HTMLElement;
        return () => null;
      }
    })
  );
  const root = node('root');
  app.mount(root);
  unmounts.push(() => app.unmount());
  await nextTick();
  return {
    props,
    committed,
    updated,
    container,
    divider,
    layout: layout!,
    width: () => layout.effectiveFirstWidth.value,
    app
  };
};
const pointer = (clientX: number, target?: TestNode, type = 'pointermove') =>
  ({
    type,
    pointerId: 1,
    button: 0,
    isPrimary: true,
    clientX,
    currentTarget: target,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn()
  }) as unknown as PointerEvent;
const start = (view: Awaited<ReturnType<typeof mount>>, clientX = 292) =>
  view.layout.startResize(pointer(clientX, view.divider));

describe('Splitter resizing', () => {
  it('updates continuously while dragging and commits only when released', async () => {
    const view = await mount();
    const divider = view.divider;
    start(view);
    listeners.get('pointermove')!(pointer(372));
    await nextTick();
    expect(view.width()).toBe('372px');
    expect(view.committed).not.toHaveBeenCalled();
    listeners.get('pointerup')!(pointer(380, divider, 'pointerup'));
    await nextTick();
    expect(view.width()).toBe('380px');
    expect(view.committed).toHaveBeenCalledExactlyOnceWith(380);
    expect(divider.releasePointerCapture).toHaveBeenCalledWith(1);
    expect(listeners.size).toBe(0);
  });

  it('keeps content space in narrow containers without losing the preferred width', async () => {
    const view = await mount({ modelValue: 480 });
    view.container.clientWidth = 700;
    resize();
    await nextTick();
    expect(view.width()).toBe('340px');
    expect(view.committed).not.toHaveBeenCalled();
    view.container.clientWidth = 1000;
    resize();
    await nextTick();
    expect(view.width()).toBe('480px');
    start(view, 480);
    listeners.get('pointermove')!(pointer(-1000));
    await nextTick();
    expect(view.width()).toBe('240px');
    listeners.get('pointermove')!(pointer(2000));
    await nextTick();
    expect(view.width()).toBe('480px');
  });

  it('preserves percentage sizing used by the screenshot plugin', async () => {
    const view = await mount({
      modelValue: undefined,
      defaultSize: '44%',
      minSize: '26%',
      maxSize: '72%',
      minSecondSize: 0
    });
    start(view, 440);
    listeners.get('pointerup')!(pointer(600, view.divider, 'pointerup'));
    await nextTick();
    expect(view.committed).toHaveBeenCalledExactlyOnceWith('60%');
    view.container.clientWidth = 800;
    resize();
    await nextTick();
    expect(view.width()).toBe('480px');
  });

  it('supports keyboard bounds and resets to the default width', async () => {
    const view = await mount({ modelValue: 372 });
    const keydown = view.layout.handleKeydown;
    keydown({
      key: 'End',
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as KeyboardEvent);
    await nextTick();
    expect(view.width()).toBe('480px');
    view.layout.resetSize();
    await nextTick();
    expect(view.width()).toBe('292px');
    expect(view.committed).toHaveBeenLastCalledWith(292);
  });

  it('cleans up a drag when the sidebar collapses or the view unmounts', async () => {
    const view = await mount();
    start(view);
    view.props.firstCollapsed = true;
    await nextTick();
    expect(view.width()).toBe('0px');
    expect(listeners.size).toBe(0);
    view.props.firstCollapsed = false;
    await nextTick();
    start(view);
    view.app.unmount();
    expect(listeners.size).toBe(0);
    expect(disconnect).toHaveBeenCalled();
  });
});
