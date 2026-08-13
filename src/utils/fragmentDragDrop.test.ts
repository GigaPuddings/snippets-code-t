import { describe, expect, it } from 'vitest';
import {
  FRAGMENT_DRAG_MIME,
  getActiveFragmentDrag,
  hasFragmentDragType,
  parseFragmentDragPayload,
  serializeFragmentDragPayload,
  setActiveFragmentDrag
} from './fragmentDragDrop';

describe('fragment drag payload', () => {
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
