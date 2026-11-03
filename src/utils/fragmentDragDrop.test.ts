import { describe, expect, it } from 'vitest';
import {
  FRAGMENT_DRAG_MIME,
  getActiveFragmentDrag,
  hasFragmentDragType,
  parseFragmentDragPayload,
  serializeFragmentDragPayload,
  setActiveFragmentDrag,
  orderDroppedFragment
} from './fragmentDragDrop';

describe('fragment drag payload', () => {
  it('swaps non-adjacent notes without changing the middle note or the input array', () => {
    const paths = ['Docs/a.md', 'Docs/b.md', 'Docs/c.md'];
    expect(orderDroppedFragment(paths, 'Docs/a.md', 'Docs/c.md', true)).toEqual(
      ['Docs/c.md', 'Docs/b.md', 'Docs/a.md']
    );
    expect(paths).toEqual(['Docs/a.md', 'Docs/b.md', 'Docs/c.md']);
  });
  it('inserts a transferred note before, after or into an empty folder', () => {
    const paths = ['Docs/a.md', 'Docs/b.md'];
    expect(
      orderDroppedFragment(paths, 'Docs/c.md', 'Docs/b.md', false)
    ).toEqual(['Docs/a.md', 'Docs/c.md', 'Docs/b.md']);
    expect(
      orderDroppedFragment(paths, 'Docs/c.md', 'Docs/a.md', false, true)
    ).toEqual(['Docs/a.md', 'Docs/c.md', 'Docs/b.md']);
    expect(orderDroppedFragment([], 'Docs/c.md', undefined, false)).toEqual([
      'Docs/c.md'
    ]);
    expect(() =>
      orderDroppedFragment(paths, 'Docs/c.md', 'Docs/missing.md', false)
    ).toThrow();
  });
  it('round-trips a fragment without losing its category identity', () => {
    const serialized = serializeFragmentDragPayload({
      id: 'C:\\Workspace\\未分类\\note.md',
      title: 'note',
      categoryId: 0
    });

    expect(parseFragmentDragPayload(serialized)).toEqual({
      id: 'C:\\Workspace\\未分类\\note.md',
      title: 'note',
      categoryId: 0
    });
  });

  it('rejects malformed and incomplete payloads', () => {
    expect(parseFragmentDragPayload('not-json')).toBeNull();
    expect(
      parseFragmentDragPayload(JSON.stringify({ title: 'missing id' }))
    ).toBeNull();
  });

  it('recognizes the custom fragment drag type', () => {
    expect(hasFragmentDragType(['text/plain', FRAGMENT_DRAG_MIME])).toBe(true);
    expect(hasFragmentDragType(['text/plain'])).toBe(false);
  });

  it('tracks the active drag session for category feedback', () => {
    const payload = { id: 'note.md', title: 'Note', categoryId: 2 };
    setActiveFragmentDrag(payload);
    expect(getActiveFragmentDrag()).toEqual(payload);

    setActiveFragmentDrag(null);
    expect(getActiveFragmentDrag()).toBeNull();
  });
});
