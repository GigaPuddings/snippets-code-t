import { createRenderer, defineComponent, nextTick, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { useGitSyncRuntimeMount } from './useGitSyncRuntimeMount';
import type {
  GitRuntimeWindow,
  GitSyncRuntimeFacade
} from './useGitSyncRuntimeFacade';

interface TestNode {
  type: string;
  children: TestNode[];
  text?: string;
}

const renderer = createRenderer<TestNode, TestNode>({
  patchProp: () => undefined,
  insert: (child, parent) => {
    parent.children.push(child);
  },
  remove: () => undefined,
  createElement: (type) => ({ type, children: [] }),
  createText: (text) => ({ type: 'text', text, children: [] }),
  createComment: (text) => ({ type: 'comment', text, children: [] }),
  setText: (node, text) => {
    node.text = text;
  },
  setElementText: (node, text) => {
    node.text = text;
  },
  parentNode: () => null,
  nextSibling: () => null
});

const createRuntime = () =>
  ({
    setupAndRestore: vi.fn(async () => true),
    cleanup: vi.fn(async () => undefined)
  }) as unknown as GitSyncRuntimeFacade;

const createWindow = (): GitRuntimeWindow => ({
  listen: vi.fn(async () => vi.fn()),
  isVisible: vi.fn(async () => true)
});

const mountHarness = (
  runtime: GitSyncRuntimeFacade,
  shouldInit = ref<boolean | null>(null),
  autoSyncWindow = createWindow()
) => {
  const getAutoSyncWindow = vi.fn(() => autoSyncWindow);
  const root: TestNode = { type: 'root', children: [] };
  const app = renderer.createApp(
    defineComponent({
      setup() {
        useGitSyncRuntimeMount({
          runtime,
          shouldInit,
          getAutoSyncWindow
        });
        return () => null;
      }
    })
  );

  app.mount(root);

  return {
    shouldInit,
    autoSyncWindow,
    getAutoSyncWindow,
    unmount: () => app.unmount()
  };
};

describe('useGitSyncRuntimeMount', () => {
  it('waits for startup decision before setting up runtime', async () => {
    const runtime = createRuntime();
    const harness = mountHarness(runtime);

    await nextTick();

    expect(runtime.setupAndRestore).not.toHaveBeenCalled();
    expect(harness.getAutoSyncWindow).not.toHaveBeenCalled();

    harness.shouldInit.value = true;
    await nextTick();
    await nextTick();

    expect(runtime.setupAndRestore).toHaveBeenCalledWith({
      shouldInit: true,
      autoSyncWindow: harness.autoSyncWindow
    });
    expect(harness.getAutoSyncWindow).toHaveBeenCalledTimes(1);

    harness.unmount();
  });

  it('sets up only once when startup decision changes later', async () => {
    const runtime = createRuntime();
    const harness = mountHarness(runtime, ref(false));

    await nextTick();
    await nextTick();
    harness.shouldInit.value = true;
    await nextTick();
    await nextTick();

    expect(runtime.setupAndRestore).toHaveBeenCalledTimes(1);
    expect(runtime.setupAndRestore).toHaveBeenCalledWith({
      shouldInit: false,
      autoSyncWindow: harness.autoSyncWindow
    });

    harness.unmount();
  });

  it('cleans up runtime on unmount', async () => {
    const runtime = createRuntime();
    const harness = mountHarness(runtime, ref(true));

    await nextTick();
    harness.unmount();

    expect(runtime.cleanup).toHaveBeenCalledTimes(1);
  });
});
