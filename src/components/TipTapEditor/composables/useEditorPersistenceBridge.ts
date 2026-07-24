import { nextTick, ref, type Ref } from 'vue';
import { jsonToMarkdown, markdownToHtml } from '../utils/markdown';

export interface EditorPersistenceBridgeEditor {
  isDestroyed?: boolean;
  getJSON: () => unknown;
  getHTML: () => string;
  getText: () => string;
  commands: {
    setContent: (content: string, options?: { emitUpdate?: boolean }) => void;
  };
}

interface UseEditorPersistenceBridgeOptions {
  sourceContent: Ref<string>;
  workspaceRoot: Ref<string>;
  emitContentChange: (value: string) => void;
  updateStats: (text: string) => void;
  isOutlineVisible: () => boolean;
  refreshSourceOutline: () => void;
  handleError: (error: unknown, context: string) => void;
  debounceMs?: number;
}

type DebouncedFunction<TArgs extends unknown[]> = ((...args: TArgs) => void) & {
  cancel: () => void;
};

function debounce<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  wait: number
): DebouncedFunction<TArgs> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: TArgs) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
      timeout = null;
    }, wait);
  };

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

export function useEditorPersistenceBridge(options: UseEditorPersistenceBridgeOptions) {
  const isInternalUpdate = ref(false);
  const lastEmittedContent = ref('');
  let isDisposed = false;

  const isEditorAvailable = (
    editorInstance?: EditorPersistenceBridgeEditor | null
  ): editorInstance is EditorPersistenceBridgeEditor => {
    return Boolean(editorInstance && editorInstance.isDestroyed !== true);
  };

  const debouncedEmitUpdate = debounce((editorInstance: EditorPersistenceBridgeEditor) => {
    if (isDisposed || !isEditorAvailable(editorInstance)) return;

    try {
      const markdown = jsonToMarkdown(editorInstance.getJSON());
      options.emitContentChange(markdown);
      lastEmittedContent.value = markdownToHtml(markdown, options.workspaceRoot.value);
    } catch (error) {
      options.handleError(error, 'jsonToMarkdown on emit');
    }
  }, options.debounceMs ?? 150);

  const handleEditorUpdate = (editorInstance: EditorPersistenceBridgeEditor) => {
    if (isDisposed || !isEditorAvailable(editorInstance)) return;

    isInternalUpdate.value = true;
    options.updateStats(editorInstance.getText());
    debouncedEmitUpdate(editorInstance);

    nextTick(() => {
      if (!isDisposed) {
        isInternalUpdate.value = false;
      }
    });
  };

  const emitSourceContentChange = (value: string) => {
    options.sourceContent.value = value;

    if (options.isOutlineVisible()) {
      options.refreshSourceOutline();
    }

    options.emitContentChange(value);
  };

  const applySourceContentToEditor = (editorInstance?: EditorPersistenceBridgeEditor | null) => {
    if (isDisposed || !isEditorAvailable(editorInstance)) return;

    try {
      debouncedEmitUpdate.cancel();
      const html = markdownToHtml(options.sourceContent.value, options.workspaceRoot.value);
      editorInstance.commands.setContent(html || '<p></p>', { emitUpdate: false });
      lastEmittedContent.value = html;
      nextTick(() => {
        if (!isDisposed) {
          options.emitContentChange(options.sourceContent.value);
        }
      });
    } catch (error) {
      console.error('Failed to parse Markdown:', error);
      options.handleError(error, 'Markdown to HTML conversion');
    }
  };

  const syncIncomingContent = (
    newContent: string,
    editorInstance?: EditorPersistenceBridgeEditor | null
  ) => {
    if (
      isDisposed ||
      !isEditorAvailable(editorInstance) ||
      isInternalUpdate.value ||
      lastEmittedContent.value === newContent
    ) {
      return;
    }

    try {
      if (editorInstance.getHTML() !== newContent) {
        debouncedEmitUpdate.cancel();
        editorInstance.commands.setContent(newContent, { emitUpdate: false });
        lastEmittedContent.value = newContent;
        options.updateStats(editorInstance.getText());
      }
    } catch (error) {
      options.handleError(error, 'TipTap content update');
    }
  };

  const dispose = () => {
    isDisposed = true;
    isInternalUpdate.value = false;
    debouncedEmitUpdate.cancel();
  };

  return {
    isInternalUpdate,
    lastEmittedContent,
    handleEditorUpdate,
    emitSourceContentChange,
    applySourceContentToEditor,
    syncIncomingContent,
    dispose
  };
}
