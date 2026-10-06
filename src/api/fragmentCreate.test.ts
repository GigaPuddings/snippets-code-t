import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  getCategories: vi.fn(),
  createMarkdownFile: vi.fn()
}));
vi.mock('./markdown', () => mocks);
vi.mock('@/utils/error-handler', () => ({
  ErrorHandler: { handle: vi.fn() },
  ErrorType: { API_ERROR: 'API_ERROR' }
}));
vi.mock('@/plugins/attachments/api', () => ({
  syncAttachmentsOnRename: vi.fn()
}));
vi.mock('@/utils/filterEngine', () => ({
  applyFilter: (items: unknown[]) => items
}));
vi.mock('@/utils/searchParser', () => ({ parseSearchText: () => ({}) }));
vi.mock('@/utils/logger', () => ({
  logger: { debug: vi.fn(), error: vi.fn() }
}));

import { addFragment } from './fragment';

beforeEach(() => {
  vi.clearAllMocks();
  mocks.getCategories.mockResolvedValue([{ id: '12', name: '工作' }]);
  mocks.createMarkdownFile.mockResolvedValue('工作/New Fragment.md');
});

describe('creation API category validation', () => {
  it('resolves numeric folder IDs instead of treating them as folder names', async () => {
    await addFragment({
      categoryId: 12,
      fragmentType: 'note',
      metadata: { title: 'New Fragment' }
    });
    expect(mocks.createMarkdownFile).toHaveBeenCalledWith(
      '工作',
      expect.objectContaining({ type: 'note', content: '' })
    );
  });

  it('refuses an explicit folder that disappeared before the write', async () => {
    await expect(
      addFragment({
        categoryId: 99,
        fragmentType: 'code',
        metadata: { title: 'New Fragment' }
      })
    ).rejects.toThrow('Category with id 99 not found');
    expect(mocks.createMarkdownFile).not.toHaveBeenCalled();
  });

  it('keeps system category 0 mapped to Uncategorized', async () => {
    await addFragment({
      categoryId: 0,
      fragmentType: 'code',
      metadata: { title: 'New Fragment' }
    });
    expect(mocks.createMarkdownFile).toHaveBeenCalledWith(
      '未分类',
      expect.objectContaining({ type: 'code' })
    );
  });
});
