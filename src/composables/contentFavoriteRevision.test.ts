import { describe, expect, it, vi } from 'vitest';
vi.mock('@/store', () => ({ useConfigurationStore: vi.fn() }));
vi.mock('@/api/fragment', () => ({ getFragmentContent: vi.fn() }));
vi.mock('@/api/markdown', () => ({ toggleFavorite: vi.fn() }));
vi.mock('@/utils/modal', () => ({ default: { error: vi.fn() } }));
import { applyFavoriteChange } from './useContentFavorites';

describe('favorite revision acknowledgement', () => {
  it('rebases only the exact baseline changed by the favorite write', () => {
    const content = {
      id: 'note.md',
      title: 'note',
      content: 'editor baseline',
      contentRevision: 'r1'
    };
    applyFavoriteChange(content, {
      source: 'favorite-change',
      id: 'note.md',
      favorite: true,
      previousRevision: 'r1',
      contentRevision: 'r2'
    });
    expect(content.contentRevision).toBe('r2');
    expect(content.content).toBe('editor baseline');
  });
  it('retains conflict protection when an external change preceded the favorite write', () => {
    const content = {
      id: 'note.md',
      title: 'note',
      content: 'original',
      contentRevision: 'r1'
    };
    applyFavoriteChange(content, {
      source: 'favorite-change',
      id: 'note.md',
      favorite: true,
      previousRevision: 'external-version',
      contentRevision: 'r3'
    });
    expect(content.contentRevision).toBe('r1');
  });
});
