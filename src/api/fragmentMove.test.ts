import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { MarkdownFile } from '@/types/models';

const markdownMocks = vi.hoisted(() => ({
  getCategories: vi.fn(),
  moveMarkdownFile: vi.fn(),
  readMarkdownFile: vi.fn(),
  updateMarkdownFile: vi.fn()
}));

vi.mock('./markdown', () => markdownMocks);
vi.mock('@/utils/error-handler', () => ({
  ErrorHandler: {
    handle: vi.fn(),
    log: vi.fn()
  },
  ErrorType: {
    API_ERROR: 'API_ERROR'
  }
}));
vi.mock('@/utils/filterEngine', () => ({
  applyFilter: (items: unknown[]) => items
}));
vi.mock('@/utils/searchParser', () => ({
  parseSearchText: () => ({})
}));
vi.mock('@/utils/logger', () => ({
  logger: {
    debug: vi.fn(),
    error: vi.fn()
  }
}));
vi.mock('@/plugins/attachments/api', () => ({
  cleanupAttachmentsOnDelete: vi.fn(),
  syncAttachmentsOnRename: vi.fn()
}));

import { moveFragmentToCategory } from './fragment';

const movedNote: MarkdownFile = {
  id: 'note-id',
  title: 'Architecture',
  content: '# Architecture',
  categoryId: 9,
  categoryName: 'Docs',
  tags: ['design'],
  created: '2026-01-01T00:00:00.000Z',
  modified: '2026-01-02T00:00:00.000Z',
  type: 'note',
  favorite: true,
  filePath: 'C:\\Workspace\\Docs\\Architecture.md'
};

describe('moveFragmentToCategory', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    markdownMocks.getCategories.mockResolvedValue([
      { id: 42, name: '未分类', isSystem: true },
      { id: 9, name: 'Docs', isSystem: false }
    ]);
    markdownMocks.moveMarkdownFile.mockResolvedValue(movedNote.filePath);
    markdownMocks.readMarkdownFile.mockResolvedValue(movedNote);
  });

  it('moves a note without rewriting Front Matter or changing its type', async () => {
    const result = await moveFragmentToCategory(
      'C:\\Workspace\\未分类\\Architecture.md',
      9
    );

    expect(markdownMocks.moveMarkdownFile).toHaveBeenCalledWith(
      'C:\\Workspace\\未分类\\Architecture.md',
      'Docs'
    );
    expect(markdownMocks.updateMarkdownFile).not.toHaveBeenCalled();
    expect(result.type).toBe('note');
    expect(result.format).toBe('markdown');
    expect(result.category_id).toBe(9);
  });

  it('maps the UI uncategorized value 0 to the system category', async () => {
    await moveFragmentToCategory(movedNote.filePath, 0);

    expect(markdownMocks.moveMarkdownFile).toHaveBeenCalledWith(
      movedNote.filePath,
      ''
    );
  });
});
