import { beforeEach, describe, expect, it, vi } from 'vitest';
import { invoke } from '@tauri-apps/api/core';
import { canCopySearchResultSnippet, useSearchResultActions } from './useSearchResultActions';

vi.mock('@tauri-apps/api/core', () => ({
  invoke: vi.fn()
}));

vi.mock('@/utils/logger', () => ({
  logger: {
    error: vi.fn()
  }
}));

vi.mock('@/utils/modal', () => ({
  modal: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

describe('useSearchResultActions', () => {
  beforeEach(() => {
    vi.mocked(invoke).mockReset();
    vi.mocked(invoke).mockResolvedValue(undefined);
  });

  it('allows quick copy for code snippets only', () => {
    expect(canCopySearchResultSnippet({
      id: 1,
      title: 'snippet',
      content: 'const a = 1',
      type: 'code'
    })).toBe(true);

    expect(canCopySearchResultSnippet({
      id: 2,
      title: 'note',
      content: 'notes',
      type: 'note'
    })).toBe(false);

    expect(canCopySearchResultSnippet({
      id: 3,
      title: 'file',
      content: 'C:/tmp/a.ts',
      type: 'code',
      summarize: 'file'
    })).toBe(false);
  });

  it('copies raw snippet content to clipboard', async () => {
    const writeText = vi.fn(async () => undefined);
    const actions = useSearchResultActions({
      onClearSearch: vi.fn(),
      clipboard: { writeText },
      copySuccessMessage: 'copied'
    });

    const copied = await actions.copySnippetToClipboard({
      id: 1,
      title: 'snippet',
      content: 'const a = 1',
      type: 'code'
    });

    expect(copied).toBe(true);
    expect(writeText).toHaveBeenCalledWith('const a = 1');
  });

  it('does not copy unsupported search result types', async () => {
    const writeText = vi.fn(async () => undefined);
    const actions = useSearchResultActions({
      onClearSearch: vi.fn(),
      clipboard: { writeText }
    });

    const copied = await actions.copySnippetToClipboard({
      id: 1,
      title: 'bookmark',
      content: 'https://example.com',
      type: 'code',
      summarize: 'bookmark'
    });

    expect(copied).toBe(false);
    expect(writeText).not.toHaveBeenCalled();
  });

  it('copies template-looking text without prompting or processing it', async () => {
    const writeText = vi.fn(async () => undefined);
    const actions = useSearchResultActions({
      onClearSearch: vi.fn(),
      clipboard: { writeText }
    });

    const copied = await actions.copySnippetToClipboard({
      id: 1,
      title: 'snippet',
      content: 'const {{input:name}} = 1',
      type: 'code'
    });

    expect(copied).toBe(true);
    expect(writeText).toHaveBeenCalledWith('const {{input:name}} = 1');
  });

  it('returns false when clipboard writing fails', async () => {
    const writeText = vi.fn(async () => {
      throw new Error('denied');
    });
    const actions = useSearchResultActions({
      onClearSearch: vi.fn(),
      clipboard: { writeText },
      copyFailedMessage: 'failed'
    });

    const copied = await actions.copySnippetToClipboard({
      id: 1,
      title: 'snippet',
      content: 'const a = 1',
      type: 'code'
    });

    expect(copied).toBe(false);
  });

  it('uses the native paste command for the primary snippet action', async () => {
    const writeText = vi.fn(async () => undefined);
    const onClearSearch = vi.fn();
    const actions = useSearchResultActions({
      onClearSearch,
      clipboard: { writeText }
    });

    await actions.runPrimaryAction({
      id: 1,
      title: 'snippet',
      content: 'const a = 1',
      type: 'code'
    });

    expect(onClearSearch).toHaveBeenCalled();
    expect(writeText).not.toHaveBeenCalled();
    expect(invoke).toHaveBeenCalledWith('insert_text_to_last_window', {
      text: 'const a = 1'
    });
    expect(invoke).not.toHaveBeenCalledWith('show_hide_window_command', expect.anything());
  });

  it('opens desktop files with the default app instead of the URL opener', async () => {
    const actions = useSearchResultActions({
      onClearSearch: vi.fn(),
      clipboard: { writeText: vi.fn(async () => undefined) }
    });

    await actions.runPrimaryAction({
      id: 'desktop-file:C:/Users/test/Desktop/example.text',
      title: 'example.text',
      content: 'C:/Users/test/Desktop/example.text',
      metadata: { file_path: 'C:/Users/test/Desktop/example.text' },
      type: 'code',
      summarize: 'file'
    });

    expect(invoke).toHaveBeenCalledWith('open_file_with_default_app', {
      filePath: 'C:/Users/test/Desktop/example.text'
    });
    expect(invoke).not.toHaveBeenCalledWith('open_url', expect.anything());
  });
});
