import { nextTick, ref, type Ref } from 'vue';
import { jsonToMarkdown, markdownToHtml } from '../utils/markdown';

export interface EditorPersistenceBridgeEditor {
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

function debounce<T extends (...args: Parameters<T>) => void>(fn: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
      timeout = null;
    }, wait);
  };
}

export function useEditorPersistenceBridge(options: UseEditorPersistenceBridgeOptions) {
  const isInternalUpdate = ref(false);
  const lastEmittedContent = ref('');

  const debouncedEmitUpdate = debounce((editorInstance: EditorPersistenceBridgeEditor) => {
    try {
      const markdown = jsonToMarkdown(editorInstance.getJSON());
      options.emitContentChange(markdown);
      lastEmittedContent.value = markdownToHtml(markdown, options.workspaceRoot.value);
    } catch (error) {
      options.handleError(error, 'jsonToMarkdown on emit');
    }
  }, options.debounceMs ?? 150);

  const handleEditorUpdate = (editorInstance: EditorPersistenceBridgeEditor) => {
    isInternalUpdate.value = true;
    options.updateStats(editorInstance.getText());
    debouncedEmitUpdate(editorInstance);

    nextTick(() => {
      isInternalUpdate.value = false;
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
    if (!editorInstance) return;

    try {
      const html = markdownToHtml(options.sourceContent.value, options.workspaceRoot.value);
      editorInstance.commands.setContent(html || '<p></p>', { emitUpdate: false });
      lastEmittedContent.value = html;
      nextTick(() => {
        options.emitContentChange(options.sourceContent.value);
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
    if (isInternalUpdate.value || lastEmittedContent.value === newContent) {
      return;
    }

    try {
      if (editorInstance && editorInstance.getHTML() !== newContent) {
        editorInstance.commands.setContent(newContent, { emitUpdate: false });
        lastEmittedContent.value = newContent;
        options.updateStats(editorInstance.getText());
      }
    } catch (error) {
      options.handleError(error, 'TipTap content update');
    }
  };

  return {
    isInternalUpdate,
    lastEmittedContent,
    handleEditorUpdate,
    emitSourceContentChange,
    applySourceContentToEditor,
    syncIncomingContent
  };
}
