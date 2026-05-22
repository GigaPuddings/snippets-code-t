import type { Editor } from '@tiptap/vue-3';
import { toggleCodeBlockForSelection, toggleListForSelection } from '../utils/markdownCommands';
import type { SourceEditorExpose, ViewMode } from '../types';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type ClipboardReader = Pick<Clipboard, 'readText'>;

interface UseContextMenuCommandsOptions {
  getEditor: () => Editor | null | undefined;
  getSourceEditor: () => SourceEditorExpose | null | undefined;
  getViewMode: () => ViewMode;
  isMarkdownSyntaxDisabled: () => boolean;
  hide: () => void;
  promptUrl?: (message: string, defaultValue: string) => string | null;
  translate?: (key: string) => string;
  execCommand?: (commandId: string) => boolean;
  clipboard?: ClipboardReader;
}

const tableMarkdown = `| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
`;

const isSourceMode = (options: UseContextMenuCommandsOptions) => options.getViewMode() === 'source';

const runMarkdownCommand = (
  options: UseContextMenuCommandsOptions,
  sourceAction: (sourceEditor: SourceEditorExpose) => void,
  richTextAction?: (editor: Editor) => void
) => {
  if (options.isMarkdownSyntaxDisabled()) return;

  const sourceEditor = options.getSourceEditor();
  if (isSourceMode(options) && sourceEditor) {
    sourceAction(sourceEditor);
  } else {
    const editor = options.getEditor();
    if (editor && richTextAction) {
      richTextAction(editor);
    }
  }

  options.hide();
};

const focusInsertedCodeFence = (sourceEditor: SourceEditorExpose) => {
  const textarea = sourceEditor.getTextarea();
  if (!textarea) return;

  const pos = textarea.selectionStart;
  textarea.setSelectionRange(pos - 4, pos - 4);
  textarea.focus();
};

const focusInsideInsertedWikilink = (sourceEditor: SourceEditorExpose) => {
  const textarea = sourceEditor.getTextarea();
  if (!textarea) return;

  const pos = textarea.selectionStart;
  textarea.setSelectionRange(pos - 2, pos - 2);
  textarea.focus();
};

const insertSourceExternalLink = (sourceEditor: SourceEditorExpose) => {
  const textarea = sourceEditor.getTextarea();
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);

  if (selectedText) {
    sourceEditor.insertText(`[${selectedText}]()`);
    textarea.setSelectionRange(start + selectedText.length + 3, start + selectedText.length + 3);
  } else {
    sourceEditor.insertText('[]()');
    textarea.setSelectionRange(start + 1, start + 1);
  }
  textarea.focus();
};

export function useContextMenuCommands(options: UseContextMenuCommandsOptions) {
  const hide = options.hide;
  const translate = options.translate ?? ((key: string) => key);
  const promptUrl = options.promptUrl ?? ((message, defaultValue) => window.prompt(message, defaultValue));
  const execCommand = options.execCommand ?? ((commandId: string) => document.execCommand(commandId));
  const clipboard = options.clipboard ?? navigator.clipboard;

  const toggleBold = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.wrapSelection('**', '**'),
    editor => editor.chain().focus().toggleBold().run()
  );

  const toggleItalic = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.wrapSelection('*', '*'),
    editor => editor.chain().focus().toggleItalic().run()
  );

  const toggleStrike = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.wrapSelection('~~', '~~'),
    editor => editor.chain().focus().toggleStrike().run()
  );

  const toggleCode = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.wrapSelection('`', '`'),
    editor => editor.chain().focus().toggleCode().run()
  );

  const clearFormat = () => runMarkdownCommand(
    options,
    () => undefined,
    editor => editor.chain().focus().clearNodes().unsetAllMarks().run()
  );

  const toggleBulletList = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertLinePrefix('- '),
    editor => toggleListForSelection(editor, 'bulletList')
  );

  const toggleOrderedList = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertLinePrefix('1. '),
    editor => toggleListForSelection(editor, 'orderedList')
  );

  const toggleTaskList = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertLinePrefix('- [ ] '),
    editor => toggleListForSelection(editor, 'taskList')
  );

  const setHeading = (level: HeadingLevel) => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertLinePrefix(`${'#'.repeat(level)} `),
    editor => editor.chain().focus().setHeading({ level }).run()
  );

  const setParagraph = () => runMarkdownCommand(
    options,
    () => undefined,
    editor => editor.chain().focus().setParagraph().run()
  );

  const toggleBlockquote = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertLinePrefix('> '),
    editor => editor.chain().focus().toggleBlockquote().run()
  );

  const insertTable = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertText(tableMarkdown),
    editor => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  );

  const insertCodeBlock = () => runMarkdownCommand(
    options,
    sourceEditor => {
      sourceEditor.insertText('```\n\n```');
      focusInsertedCodeFence(sourceEditor);
    },
    editor => toggleCodeBlockForSelection(editor)
  );

  const insertHorizontalRule = () => runMarkdownCommand(
    options,
    sourceEditor => sourceEditor.insertText('\n---\n'),
    editor => editor.chain().focus().setHorizontalRule().run()
  );

  const handleAddLink = () => {
    const sourceEditor = options.getSourceEditor();
    if (isSourceMode(options) && sourceEditor) {
      sourceEditor.insertText('[[]]');
      focusInsideInsertedWikilink(sourceEditor);
    } else {
      const editor = options.getEditor();
      if (editor) {
        const { from, to } = editor.state.selection;
        const selectedText = editor.state.doc.textBetween(from, to, ' ');

        if (selectedText && selectedText.trim()) {
          const url = promptUrl(translate('contextMenu.enterUrl'), '');
          if (url && url.trim()) {
            editor.chain().focus().setLink({ href: url.trim() }).run();
          }
        } else {
          editor.chain().focus().insertContent('[[]]').setTextSelection(from + 2).run();
        }
      }
    }
    hide();
  };

  const handleAddExternalLink = () => {
    const sourceEditor = options.getSourceEditor();
    if (isSourceMode(options) && sourceEditor) {
      insertSourceExternalLink(sourceEditor);
    } else {
      const editor = options.getEditor();
      if (editor) {
        const { from, to } = editor.state.selection;
        const selectedText = editor.state.doc.textBetween(from, to, ' ');

        if (selectedText && selectedText.trim()) {
          editor.chain().focus()
            .insertContent(`[${selectedText}]()`)
            .setTextSelection(from + selectedText.length + 3)
            .run();
        } else {
          editor.chain().focus()
            .insertContent('[]()')
            .setTextSelection(from + 1)
            .run();
        }
      }
    }
    hide();
  };

  const handlePaste = () => {
    const sourceEditor = options.getSourceEditor();
    if (isSourceMode(options) && sourceEditor) {
      sourceEditor.focus();
    } else {
      options.getEditor()?.chain().focus().run();
    }
    execCommand('paste');
    hide();
  };

  const handlePasteAsPlainText = () => {
    const sourceEditor = options.getSourceEditor();
    if (isSourceMode(options) && sourceEditor) {
      sourceEditor.focus();
      clipboard.readText().then(text => {
        options.getSourceEditor()?.insertText(text);
      });
    } else {
      options.getEditor()?.chain().focus().run();
      clipboard.readText().then(text => {
        options.getEditor()?.chain().focus().insertContent(text).run();
      });
    }
    hide();
  };

  const handleSelectAll = () => {
    const sourceEditor = options.getSourceEditor();
    if (isSourceMode(options) && sourceEditor) {
      sourceEditor.selectAll();
    } else {
      options.getEditor()?.chain().focus().selectAll().run();
    }
    hide();
  };

  return {
    toggleBold,
    toggleItalic,
    toggleStrike,
    toggleCode,
    clearFormat,
    toggleBulletList,
    toggleOrderedList,
    toggleTaskList,
    setHeading,
    setParagraph,
    toggleBlockquote,
    insertTable,
    insertCodeBlock,
    insertHorizontalRule,
    handleAddLink,
    handleAddExternalLink,
    handlePaste,
    handlePasteAsPlainText,
    handleSelectAll
  };
}
