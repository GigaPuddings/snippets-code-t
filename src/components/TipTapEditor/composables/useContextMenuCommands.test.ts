import { describe, expect, it, vi } from 'vitest';
import { useContextMenuCommands } from './useContextMenuCommands';
import type { SourceEditorExpose } from '../types';

const createTextarea = (value = '', start = 0, end = start) => ({
  value,
  selectionStart: start,
  selectionEnd: end,
  setSelectionRange: vi.fn(),
  focus: vi.fn()
}) as unknown as HTMLTextAreaElement;

const createSourceEditor = (textarea: HTMLTextAreaElement | null = null): SourceEditorExpose => ({
  getTextarea: vi.fn(() => textarea),
  focus: vi.fn(),
  selectAll: vi.fn(),
  scrollToLine: vi.fn(),
  insertText: vi.fn(),
  wrapSelection: vi.fn(),
  insertLinePrefix: vi.fn()
});

const createChain = () => {
  const chain: Record<string, any> = {};
  [
    'focus',
    'toggleBold',
    'toggleItalic',
    'toggleStrike',
    'toggleCode',
    'clearNodes',
    'unsetAllMarks',
    'setHeading',
    'setParagraph',
    'toggleBlockquote',
    'setHorizontalRule',
    'setLink',
    'insertContent',
    'setTextSelection',
    'selectAll'
  ].forEach(method => {
    chain[method] = vi.fn(() => chain);
  });
  chain.run = vi.fn(() => true);
  return chain;
};

const createEditor = (selectedText = '', from = 3, to = 3) => {
  const chain = createChain();
  const editor = {
    chain: vi.fn(() => chain),
    isActive: vi.fn(() => true),
    state: {
      selection: { from, to },
      doc: {
        textBetween: vi.fn(() => selectedText)
      }
    }
  };
  return { editor: editor as any, chain };
};

describe('useContextMenuCommands', () => {
  it('wraps source selections for inline formatting', () => {
    const hide = vi.fn();
    const sourceEditor = createSourceEditor();
    const commands = useContextMenuCommands({
      getEditor: () => null,
      getSourceEditor: () => sourceEditor,
      getViewMode: () => 'source',
      isMarkdownSyntaxDisabled: () => false,
      hide
    });

    commands.toggleBold();

    expect(sourceEditor.wrapSelection).toHaveBeenCalledWith('**', '**');
    expect(hide).toHaveBeenCalledTimes(1);
  });

  it('does not run markdown commands when syntax is disabled', () => {
    const hide = vi.fn();
    const sourceEditor = createSourceEditor();
    const commands = useContextMenuCommands({
      getEditor: () => null,
      getSourceEditor: () => sourceEditor,
      getViewMode: () => 'source',
      isMarkdownSyntaxDisabled: () => true,
      hide
    });

    commands.toggleItalic();

    expect(sourceEditor.wrapSelection).not.toHaveBeenCalled();
    expect(hide).not.toHaveBeenCalled();
  });

  it('inserts a source external link around the selected text and moves caret into parentheses', () => {
    const textarea = createTextarea('selected', 0, 8);
    const sourceEditor = createSourceEditor(textarea);
    const commands = useContextMenuCommands({
      getEditor: () => null,
      getSourceEditor: () => sourceEditor,
      getViewMode: () => 'source',
      isMarkdownSyntaxDisabled: () => false,
      hide: vi.fn()
    });

    commands.handleAddExternalLink();

    expect(sourceEditor.insertText).toHaveBeenCalledWith('[selected]()');
    expect(textarea.setSelectionRange).toHaveBeenCalledWith(11, 11);
    expect(textarea.focus).toHaveBeenCalledTimes(1);
  });

  it('inserts an empty wikilink in rich text mode when no text is selected', () => {
    const { editor, chain } = createEditor('', 5, 5);
    const commands = useContextMenuCommands({
      getEditor: () => editor,
      getSourceEditor: () => null,
      getViewMode: () => 'preview',
      isMarkdownSyntaxDisabled: () => false,
      hide: vi.fn()
    });

    commands.handleAddLink();

    expect(chain.insertContent).toHaveBeenCalledWith('[[]]');
    expect(chain.setTextSelection).toHaveBeenCalledWith(7);
    expect(chain.run).toHaveBeenCalledTimes(1);
  });

  it('prompts and sets a link in rich text mode when text is selected', () => {
    const { editor, chain } = createEditor('OpenAI', 2, 8);
    const promptUrl = vi.fn(() => ' https://openai.com ');
    const commands = useContextMenuCommands({
      getEditor: () => editor,
      getSourceEditor: () => null,
      getViewMode: () => 'preview',
      isMarkdownSyntaxDisabled: () => false,
      hide: vi.fn(),
      promptUrl,
      translate: key => key
    });

    commands.handleAddLink();

    expect(promptUrl).toHaveBeenCalledWith('contextMenu.enterUrl', '');
    expect(chain.setLink).toHaveBeenCalledWith({ href: 'https://openai.com' });
    expect(chain.run).toHaveBeenCalledTimes(1);
  });

  it('reads plain text from clipboard into the active source editor', async () => {
    const sourceEditor = createSourceEditor();
    const clipboard = { readText: vi.fn(() => Promise.resolve('plain text')) };
    const commands = useContextMenuCommands({
      getEditor: () => null,
      getSourceEditor: () => sourceEditor,
      getViewMode: () => 'source',
      isMarkdownSyntaxDisabled: () => false,
      hide: vi.fn(),
      clipboard
    });

    commands.handlePasteAsPlainText();
    await Promise.resolve();

    expect(sourceEditor.focus).toHaveBeenCalledTimes(1);
    expect(sourceEditor.insertText).toHaveBeenCalledWith('plain text');
  });
});
