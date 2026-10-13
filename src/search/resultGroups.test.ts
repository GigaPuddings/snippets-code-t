import { describe, expect, it } from 'vitest';
import { buildSearchRenderRows } from './resultGroups';
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
    const rows = buildSearchRenderRows(input, true, false);
    const results = rows.flatMap((row) => (row.kind === 'result' ? [row] : []));
    expect(results.map((row) => row.item.id)).toEqual([
      'chat',
      'page',
      'settings',
      'note'
    ]);
    expect(results.map((row) => row.index)).toEqual([0, 1, 2, 3]);
    expect(rows[0].offset).toBe(0);
    for (let i = 1; i < rows.length; i++)
      expect(rows[i].offset).toBe(rows[i - 1].offset + rows[i - 1].size);
  });
  it('keeps files and applications out of document groups even with legacy code types', () => {
    const rows = buildSearchRenderRows(
      [
        item('page', 'navigation'),
        item('file', 'file', 'code'),
        item('app', 'app', 'code')
      ],
      true,
      false
    );
    expect(
      rows.flatMap((row) => (row.kind === 'heading' ? [row.labelKey] : []))
    ).toEqual([
      'searchResult.bestMatch',
      'searchResult.apps',
      'searchResult.files'
    ]);
  });
  it('renders one recent-actions heading for an empty query', () => {
    expect(
      buildSearchRenderRows([item('page', 'navigation')], true, true).filter(
        (row) => row.kind === 'heading'
      )
    ).toHaveLength(1);
  });
});
