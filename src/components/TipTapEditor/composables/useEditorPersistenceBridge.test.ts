import { nextTick, ref } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  type EditorPersistenceBridgeEditor,
  useEditorPersistenceBridge
} from './useEditorPersistenceBridge';

const createEditor = (overrides: Partial<EditorPersistenceBridgeEditor> = {}) => {
  const setContent = vi.fn();

  return {
    editor: {
      getJSON: vi.fn(() => ({
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [{ type: 'text', text: 'Hello persistence' }]
          }
        ]
      })),
      getHTML: vi.fn(() => '<p>old</p>'),
      getText: vi.fn(() => 'Hello persistence'),
      commands: {
        setContent
      },
      ...overrides
    } as EditorPersistenceBridgeEditor,
    setContent
  };
};

const createBridge = () => {
  const sourceContent = ref('');
  const workspaceRoot = ref('');
  const emitContentChange = vi.fn();
  const updateStats = vi.fn();
  const refreshSourceOutline = vi.fn();
  const handleError = vi.fn();
  const outlineVisible = ref(false);

  const bridge = useEditorPersistenceBridge({
    sourceContent,
    workspaceRoot,
    emitContentChange,
    updateStats,
    isOutlineVisible: () => outlineVisible.value,
    refreshSourceOutline,
    handleError,
    debounceMs: 10
  });

  return {
    ...bridge,
    sourceContent,
    workspaceRoot,
    emitContentChange,
    updateStats,
    refreshSourceOutline,
    handleError,
    outlineVisible
  };
};

afterEach(() => {
  vi.useRealTimers();
});

describe('useEditorPersistenceBridge', () => {
  it('emits Markdown from TipTap JSON after editor updates', async () => {
    vi.useFakeTimers();
    const bridge = createBridge();
    const { editor } = createEditor();

    bridge.handleEditorUpdate(editor);

    expect(bridge.isInternalUpdate.value).toBe(true);
    expect(bridge.updateStats).toHaveBeenCalledWith('Hello persistence');

    await vi.advanceTimersByTimeAsync(10);
    await nextTick();

    expect(bridge.emitContentChange.mock.calls[0][0]).toContain('Hello persistence');
    expect(bridge.lastEmittedContent.value).toContain('Hello persistence');
    expect(bridge.isInternalUpdate.value).toBe(false);
  });

  it('emits source content immediately and refreshes source outline when visible', () => {
    const bridge = createBridge();
    bridge.outlineVisible.value = true;

    bridge.emitSourceContentChange('# Button');

    expect(bridge.sourceContent.value).toBe('# Button');
    expect(bridge.refreshSourceOutline).toHaveBeenCalledTimes(1);
    expect(bridge.emitContentChange).toHaveBeenCalledWith('# Button');
  });

  it('applies source Markdown to the editor without triggering TipTap updates', async () => {
    const bridge = createBridge();
    const { editor, setContent } = createEditor();
    bridge.sourceContent.value = '# Button';

    bridge.applySourceContentToEditor(editor);
    await nextTick();

    expect(setContent).toHaveBeenCalledWith(expect.stringContaining('<h1'), {
      emitUpdate: false
    });
    expect(bridge.lastEmittedContent.value).toContain('<h1');
    expect(bridge.emitContentChange).toHaveBeenCalledWith('# Button');
  });

  it('allows empty source content to clear the rich-text editor', async () => {
    const bridge = createBridge();
    const { editor, setContent } = createEditor();

    bridge.applySourceContentToEditor(editor);
    await nextTick();

    expect(setContent).toHaveBeenCalledWith('<p></p>', { emitUpdate: false });
    expect(bridge.emitContentChange).toHaveBeenCalledWith('');
  });

  it('syncs external content into the editor when it differs from the last emitted value', () => {
    const bridge = createBridge();
    const { editor, setContent } = createEditor();

    bridge.syncIncomingContent('<p>new</p>', editor);

    expect(setContent).toHaveBeenCalledWith('<p>new</p>', { emitUpdate: false });
    expect(bridge.lastEmittedContent.value).toBe('<p>new</p>');
    expect(bridge.updateStats).toHaveBeenCalledWith('Hello persistence');
  });

  it('skips external sync while an internal update is in progress', () => {
    const bridge = createBridge();
    const { editor, setContent } = createEditor();
    bridge.isInternalUpdate.value = true;

    bridge.syncIncomingContent('<p>new</p>', editor);

    expect(setContent).not.toHaveBeenCalled();
  });

  it('does not sync content into an editor whose view has already been destroyed', () => {
    const bridge = createBridge();
    const { editor, setContent } = createEditor({ isDestroyed: true });

    bridge.syncIncomingContent('<p>new</p>', editor);

    expect(setContent).not.toHaveBeenCalled();
    expect(bridge.handleError).not.toHaveBeenCalled();
  });

  it('cancels a pending persistence update when the editor bridge is disposed', async () => {
    vi.useFakeTimers();
    const bridge = createBridge();
    const { editor } = createEditor();

    bridge.handleEditorUpdate(editor);
    bridge.dispose();
    await vi.advanceTimersByTimeAsync(10);

    expect(bridge.emitContentChange).not.toHaveBeenCalled();
    expect(bridge.isInternalUpdate.value).toBe(false);
  });
});
