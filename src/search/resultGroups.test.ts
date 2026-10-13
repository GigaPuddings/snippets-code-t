import { describe, expect, it } from 'vitest';
import { orderSearchResults } from './resultGroups';
import type { ContentType } from '@/types';

const item = (
  id: string,
  summarize: ContentType['summarize'],
  type?: 'code' | 'note'
): ContentType => ({ id, title: id, content: '', summarize, type });
describe('grouped quick search rows', () => {
  it('does not duplicate the best match and keyboard order follows visual groups', () => {
    const input = [
      item('chat', 'conversation'),
      item('note', 'note', 'note'),
      item('settings', 'settings'),
      item('page', 'navigation')
    ];
    const results = orderSearchResults(input, true);
    expect(results.map((entry) => entry.id)).toEqual([
      'chat',
      'page',
      'settings',
      'note'
    ]);
    expect(results).toHaveLength(input.length);
  });
  it('keeps files and applications out of document groups even with legacy code types', () => {
    const results = orderSearchResults(
      [
        item('page', 'navigation'),
        item('file', 'file', 'code'),
        item('app', 'app', 'code')
      ],
      true
    );
    expect(results.map((entry) => entry.id)).toEqual(['page', 'app', 'file']);
  });
  it('keeps the category view in its original order without heading rows', () => {
    const input = [item('note', 'note', 'note'), item('page', 'navigation')];
    expect(orderSearchResults(input, false)).toEqual(input);
    expect(orderSearchResults([], true)).toEqual([]);
  });

  it('retains every result when the query spans many groups', () => {
    const input = Array.from({ length: 69 }, (_, index) =>
      item(String(index), index % 2 ? 'settings' : 'note', 'note')
    );
    const results = orderSearchResults(input, true);
    expect(results[0]).toBe(input[0]);
    expect(new Set(results.map((entry) => entry.id)).size).toBe(69);
    expect(results).toHaveLength(69);
  });
});
