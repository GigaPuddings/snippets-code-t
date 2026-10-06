import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { MarkdownFile } from '@/types/models';

const mocks = vi.hoisted(() => ({ invoke: vi.fn() }));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));

import { getFavoriteFiles, toggleFavorite } from './markdown';

beforeEach(() => vi.clearAllMocks());

describe('Markdown favorites API', () => {
  it('lists favorited notes and snippets through the registered workspace command', async () => {
    const files = [
      { id: 'Docs/note.md', type: 'note', favorite: true },
      { id: 'Code/snippet.md', type: 'code', favorite: true },
      { id: 'Docs/other.md', type: 'note', favorite: false }
    ] as MarkdownFile[];
    mocks.invoke.mockResolvedValue(files);

    expect(await getFavoriteFiles()).toEqual(files.slice(0, 2));
    expect(mocks.invoke).toHaveBeenCalledExactlyOnceWith(
      'get_files_by_category',
      { category: null }
    );
  });

  it('returns an empty list when nothing is favorited', async () => {
    mocks.invoke.mockResolvedValue([{ favorite: false }]);
    expect(await getFavoriteFiles()).toEqual([]);
  });

  it('propagates listing errors instead of presenting them as empty success', async () => {
    mocks.invoke.mockRejectedValue(new Error('disk unavailable'));
    await expect(getFavoriteFiles()).rejects.toThrow('disk unavailable');
  });

  it('writes both favorite states and propagates failed writes', async () => {
    mocks.invoke.mockResolvedValue(undefined);
    await toggleFavorite('Code/snippet.md', true);
    expect(mocks.invoke).toHaveBeenLastCalledWith('toggle_favorite', {
      filePath: 'Code/snippet.md',
      favorite: true
    });
    await toggleFavorite('Code/snippet.md', false);
    expect(mocks.invoke).toHaveBeenLastCalledWith('toggle_favorite', {
      filePath: 'Code/snippet.md',
      favorite: false
    });
    mocks.invoke.mockRejectedValue(new Error('read only'));
    await expect(toggleFavorite('Code/snippet.md', true)).rejects.toThrow(
      'read only'
    );
  });
});
