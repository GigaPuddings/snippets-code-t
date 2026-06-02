import { describe, expect, it } from 'vitest';
import type { ContentType } from '@/types';
import {
  calculateSearchRelevance,
  getSearchTokens,
  isRelevantSearchResult,
  rankSearchResults
} from './searchRanking';

const createItem = (overrides: Partial<ContentType>): ContentType => ({
  id: overrides.id ?? 'item',
  title: overrides.title ?? 'Untitled',
  content: overrides.content ?? '',
  summarize: overrides.summarize,
  file_path: overrides.file_path,
  category_name: overrides.category_name,
  tags: overrides.tags,
  metadata: overrides.metadata,
  score: overrides.score
});

describe('searchRanking', () => {
  it('normalizes compound queries into unique searchable tokens', () => {
    expect(getSearchTokens('Vue/use_Table.vue')).toEqual([
      'vue/use_table.vue',
      'vue',
      'use',
      'table'
    ]);
  });

  it('keeps shallow search scoped to titles', () => {
    const item = createItem({
      title: 'Button',
      content: 'useVirtualList implementation',
      tags: ['vue']
    });

    expect(
      isRelevantSearchResult(item, 'useVirtualList', { deepSearch: false })
    ).toBe(false);
    expect(
      isRelevantSearchResult(item, 'useVirtualList', { deepSearch: true })
    ).toBe(true);
  });

  it('ranks exact title matches above content-only matches', () => {
    const exactTitle = createItem({
      id: 'exact-title',
      title: 'useModal',
      content: ''
    });
    const contentOnly = createItem({
      id: 'content-only',
      title: 'Dialog helper',
      content: 'useModal'
    });

    const ranked = rankSearchResults(
      [contentOnly, exactTitle],
      'useModal',
      new Map(),
      { deepSearch: true }
    );

    expect(ranked.map((item) => item.id)).toEqual([
      'exact-title',
      'content-only'
    ]);
  });

  it('uses history as an explicit ranking signal', () => {
    const recentlyUsed = createItem({
      id: 'recent',
      title: 'Dialog helper',
      content: 'modal'
    });
    const comparableMatch = createItem({
      id: 'comparable',
      title: 'Dialog helper',
      content: 'modal'
    });

    const ranked = rankSearchResults(
      [comparableMatch, recentlyUsed],
      'modal',
      new Map([
        [
          'recent',
          {
            usage_count: 20,
            last_used_at: '2026-05-21T00:00:00.000Z'
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(ranked[0].id).toBe('recent');
    expect(ranked[0].metadata?.history_usage_count).toBe(20);
  });

  it('deduplicates repeated local launcher rows by path and URL', () => {
    const duplicatedApp = createItem({
      id: 'old-app-row',
      title: 'Windows App Cert Kit',
      content: 'C:\\Program Files (x86)\\Windows Kits\\10\\AppCertKit.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'old-app-row' }
    });
    const usedDuplicatedApp = createItem({
      id: 'new-app-row',
      title: 'Windows App Cert Kit',
      content: 'c:/program files (x86)/windows kits/10/AppCertKit.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'new-app-row' }
    });
    const duplicatedBookmark = createItem({
      id: 'bookmark-1',
      title: 'App Store 价格查询',
      content: 'https://app.vbr.me/',
      summarize: 'bookmark',
      metadata: { source: 'bookmark', raw_id: 'bookmark-1' }
    });
    const sameBookmark = createItem({
      id: 'bookmark-2',
      title: 'App Store 价格查询',
      content: 'https://APP.vbr.me',
      summarize: 'bookmark',
      metadata: { source: 'bookmark', raw_id: 'bookmark-2' }
    });

    const ranked = rankSearchResults(
      [duplicatedApp, usedDuplicatedApp, duplicatedBookmark, sameBookmark],
      'app',
      new Map([
        [
          'new-app-row',
          {
            usage_count: 1,
            last_used_at: '2026-05-21T00:00:00.000Z'
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(ranked.map((item) => item.id)).toEqual([
      'new-app-row',
      'bookmark-1'
    ]);
  });

  it('does not let history swamp an exact title match', () => {
    const recentlyUsed = createItem({
      id: 'recent',
      title: 'Dialog helper',
      content: 'modal'
    });
    const exactTitle = createItem({
      id: 'exact-title',
      title: 'modal',
      content: ''
    });

    const ranked = rankSearchResults(
      [exactTitle, recentlyUsed],
      'modal',
      new Map([
        [
          'recent',
          {
            usage_count: 20,
            last_used_at: '2026-05-21T00:00:00.000Z'
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(ranked[0].id).toBe('exact-title');
  });

  it('keeps generated quick tools results even when labels use aliases', () => {
    const unitConversion = createItem({
      id: 'quick-tools-unit',
      title: '1 千克 = 2 斤',
      content: '单位换算结果',
      summarize: 'tool',
      metadata: { source: 'quick-tools' }
    });

    expect(
      rankSearchResults([unitConversion], '1公斤=斤', new Map(), {
        deepSearch: false
      }).map((item) => item.id)
    ).toEqual(['quick-tools-unit']);
  });

  it('caps backend score so indexed results cannot swamp title relevance', () => {
    const highBackendScore = createItem({
      title: 'Other',
      content: 'button',
      score: 10_000
    });
    const exactTitle = createItem({
      title: 'button',
      content: '',
      score: 0
    });

    expect(
      calculateSearchRelevance(exactTitle, 'button', { deepSearch: true })
    ).toBeGreaterThan(
      calculateSearchRelevance(highBackendScore, 'button', {
        deepSearch: true
      })
    );
  });
});
