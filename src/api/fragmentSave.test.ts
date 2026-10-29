import { beforeEach, describe, expect, it, vi } from 'vitest';
const mocks = vi.hoisted(() => ({
  readMarkdownFile: vi.fn(),
  updateMarkdownFile: vi.fn(),
  getCategories: vi.fn(),
  moveMarkdownFile: vi.fn(),
  syncAttachmentsOnRename: vi.fn()
}));
vi.mock('./markdown', () => mocks);
vi.mock('@/plugins/attachments/api', () => ({
  syncAttachmentsOnRename: mocks.syncAttachmentsOnRename
}));
vi.mock('@/utils/error-handler', () => ({
  ErrorHandler: { handle: vi.fn() },
  ErrorType: {}
}));
import { editFragment, convertFragmentType } from './fragment';

describe('protected editor writes', () => {
  beforeEach(() => vi.resetAllMocks());
  it('type conversion uses the body committed after an attachment rename', async () => {
    mocks.readMarkdownFile.mockResolvedValueOnce({
      id: 'old.md',
      filePath: 'old.md',
      title: 'old',
      content: '![image](assets/old/pixel.png)',
      tags: [],
      type: 'code',
      favorite: false,
      contentRevision: 'r1'
    });
    mocks.updateMarkdownFile.mockResolvedValueOnce({
      newPath: 'new.md',
      contentRevision: 'r2',
      content: '![image](assets/new/pixel.png)',
      attachmentRenames: [{ from: 'assets/old/', to: 'assets/new/' }]
    });
    const result = await convertFragmentType(
      'old.md',
      'note',
      { title: 'new' },
      {
        expectedRevision: 'r1',
        expectedWorkspaceRoot: 'ws'
      }
    );
    expect(result.content).toBe('![image](assets/new/pixel.png)');
    expect(result.contentRevision).toBe('r2');
  });

  it('does not move categories or attachments before a conflicting save', async () => {
    mocks.updateMarkdownFile.mockRejectedValueOnce(
      new Error('MARKDOWN_SAVE_CONFLICT')
    );
    await expect(
      editFragment(
        {
          id: 'old.md',
          title: 'renamed',
          content: 'draft',
          category_id: 1,
          fragmentType: 'note'
        },
        { expectedRevision: 'r1', expectedWorkspaceRoot: 'ws' }
      )
    ).rejects.toThrow('MARKDOWN_SAVE_CONFLICT');
    expect(mocks.readMarkdownFile).not.toHaveBeenCalled();
    expect(mocks.moveMarkdownFile).not.toHaveBeenCalled();
    expect(mocks.syncAttachmentsOnRename).not.toHaveBeenCalled();
  });

  it('type conversion preserves the committed token without reading a later external version', async () => {
    mocks.readMarkdownFile.mockResolvedValueOnce({
      id: 'old.md',
      filePath: 'old.md',
      title: 'old',
      content: 'body',
      tags: [],
      type: 'code',
      favorite: false,
      contentRevision: 'r1'
    });
    mocks.updateMarkdownFile.mockResolvedValueOnce({
      newPath: 'new.md',
      contentRevision: 'r2'
    });
    const result = await convertFragmentType(
      'old.md',
      'note',
      {
        title: 'new',
        content: 'draft'
      },
      { expectedRevision: 'r1', expectedWorkspaceRoot: 'ws' }
    );
    expect(result).toMatchObject({
      id: 'new.md',
      title: 'new',
      content: 'draft',
      contentRevision: 'r2'
    });
    expect(mocks.readMarkdownFile).toHaveBeenCalledTimes(1);
    expect(mocks.syncAttachmentsOnRename).not.toHaveBeenCalled();
  });
});
