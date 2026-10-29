import { beforeEach, describe, expect, it, vi } from 'vitest';
import { updateMarkdownFile } from './markdown';
const invoke = vi.hoisted(() => vi.fn());
vi.mock('@tauri-apps/api/core', () => ({ invoke }));

describe('protected markdown save IPC', () => {
  beforeEach(() => {
    invoke.mockReset();
  });
  it('keeps the legacy path/null result and omits additional parameters', async () => {
    invoke.mockResolvedValue('new.md');
    expect(await updateMarkdownFile('old.md', 'body', { title: 'new' })).toBe(
      'new.md'
    );
    expect(invoke).toHaveBeenCalledWith('update_markdown_file', {
      filePath: 'old.md',
      content: 'body',
      metadata: { title: 'new' }
    });
  });
  it('passes the original revision and workspace and returns the committed revision', async () => {
    invoke.mockResolvedValue({ newPath: null, contentRevision: 'r2' });
    expect(
      await updateMarkdownFile('note.md', '', undefined, {
        expectedRevision: 'r1',
        expectedWorkspaceRoot: 'workspace'
      })
    ).toEqual({ newPath: null, contentRevision: 'r2' });
    expect(invoke).toHaveBeenCalledWith('update_markdown_file', {
      filePath: 'note.md',
      content: '',
      metadata: undefined,
      expectedRevision: 'r1',
      expectedWorkspaceRoot: 'workspace'
    });
  });
  it('propagates a conflict instead of retrying without protection', async () => {
    invoke.mockRejectedValue('MARKDOWN_SAVE_CONFLICT');
    await expect(
      updateMarkdownFile('note.md', 'draft', undefined, {
        expectedRevision: 'r1',
        expectedWorkspaceRoot: 'workspace'
      })
    ).rejects.toThrow('MARKDOWN_SAVE_CONFLICT');
    expect(invoke).toHaveBeenCalledTimes(1);
  });
});
