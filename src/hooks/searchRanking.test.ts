import { describe, expect, it } from 'vitest';
import type { ContentType } from '@/types';
import {
  calculateSearchRelevance,
  getHistoryRecencyFactor,
  getPrimarySearchHistoryKey,
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

  it('keeps backend pinyin initial matches in shallow title search', () => {
    const item = createItem({
      title: 'iOS自定义滚动条兼容',
      content: '-webkit-overflow-scrolling: touch;',
      metadata: { source: 'markdown' },
      score: 4
    });

    expect(isRelevantSearchResult(item, 'zdy', { deepSearch: false })).toBe(
      true
    );
    expect(
      rankSearchResults([item], 'zdy', new Map(), { deepSearch: false }).map(
        (result) => result.id
      )
    ).toEqual(['item']);
  });

  it('does not treat low backend content-only pinyin scores as shallow title matches', () => {
    const item = createItem({
      title: 'Button',
      content: '自定义滚动条兼容',
      metadata: { source: 'markdown' },
      score: 0.5
    });

    expect(isRelevantSearchResult(item, 'zdy', { deepSearch: false })).toBe(
      false
    );
    expect(isRelevantSearchResult(item, 'zdy', { deepSearch: true })).toBe(
      true
    );
  });

  it('does not locally match app install paths without a backend title match', () => {
    // 应用后端已限定为标题/拼音匹配，因此没有后端命中分时，前端也
    // 不能因为安装路径里的 "Install" 把 "tail" 视为结果。
    const youku = createItem({
      title: '优酷',
      content:
        'E:\\Lenovo\\Softstore\\Install\\youku_yulinling_zhengzhan\\youkuclient.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'youku-uuid' },
      score: 0
    });

    expect(isRelevantSearchResult(youku, 'tail', { deepSearch: false })).toBe(
      false
    );
    expect(isRelevantSearchResult(youku, 'tail', { deepSearch: true })).toBe(
      false
    );
  });

  it('still keeps apps whose title genuinely matches the query', () => {
    const code = createItem({
      title: 'Visual Studio Code',
      content:
        'C:\\Users\\me\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'code-uuid' },
      score: 100
    });

    expect(isRelevantSearchResult(code, 'code', { deepSearch: false })).toBe(
      true
    );
  });

  it('keeps backend-validated app pinyin initials matches', () => {
    const wechat = createItem({
      title: '微信',
      content: 'D:\\Program Files\\Tencent\\Weixin\\Weixin.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'wechat-uuid' },
      score: 100
    });

    expect(isRelevantSearchResult(wechat, 'wx', { deepSearch: false })).toBe(
      true
    );
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

  it('uses stable app path history when launcher IDs change', () => {
    const frequentApp = createItem({
      id: 'app:new-random-id',
      title: 'Visual Studio Code',
      content:
        'C:\\Users\\zero\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
      summarize: 'app',
      metadata: {
        source: 'app',
        raw_id: 'new-random-id'
      }
    });
    const comparableApp = createItem({
      id: 'app:other-random-id',
      title: 'Code Runner',
      content: 'C:\\Tools\\CodeRunner.exe',
      summarize: 'app',
      metadata: {
        source: 'app',
        raw_id: 'other-random-id'
      }
    });

    const historyKey = getPrimarySearchHistoryKey(frequentApp);
    const ranked = rankSearchResults(
      [comparableApp, frequentApp],
      'code',
      new Map([
        [
          historyKey,
          {
            usage_count: 8,
            last_used_at: '2026-05-21T00:00:00.000Z'
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(historyKey).toBe(
      'app:path:c:/users/zero/appdata/local/programs/microsoft vs code/code.exe'
    );
    expect(ranked[0].id).toBe('app:new-random-id');
    expect(ranked[0].metadata?.history_usage_count).toBe(8);
  });

  it('uses stable bookmark URL history when bookmark IDs change', () => {
    const frequentBookmark = createItem({
      id: 'bookmark:new-random-id',
      title: 'Vue Guide',
      content: 'https://vuejs.org/guide/',
      summarize: 'bookmark',
      metadata: {
        source: 'bookmark',
        raw_id: 'new-random-id'
      }
    });
    const comparableBookmark = createItem({
      id: 'bookmark:other-random-id',
      title: 'Vue API',
      content: 'https://example.com/vue-api',
      summarize: 'bookmark',
      metadata: {
        source: 'bookmark',
        raw_id: 'other-random-id'
      }
    });

    const historyKey = getPrimarySearchHistoryKey(frequentBookmark);
    const ranked = rankSearchResults(
      [comparableBookmark, frequentBookmark],
      'vue',
      new Map([
        [
          historyKey,
          {
            usage_count: 6,
            last_used_at: '2026-05-21T00:00:00.000Z'
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(historyKey).toBe('bookmark:url:https://vuejs.org/guide');
    expect(ranked[0].id).toBe('bookmark:new-random-id');
    expect(ranked[0].metadata?.history_usage_count).toBe(6);
  });

  it('uses stable markdown file path history for snippets and notes', () => {
    const frequentSnippet = createItem({
      id: 'markdown:new-id',
      title: 'Throttle helper',
      content: 'function throttle() {}',
      file_path: 'D:\\Snippets\\frontend\\throttle.md',
      type: 'code',
      summarize: 'code',
      metadata: {
        source: 'markdown',
        raw_id: 'new-id'
      }
    });
    const comparableSnippet = createItem({
      id: 'markdown:other-id',
      title: 'Throttle notes',
      content: 'throttle usage notes',
      file_path: 'D:\\Snippets\\frontend\\throttle-notes.md',
      type: 'note',
      summarize: 'note',
      metadata: {
        source: 'markdown',
        raw_id: 'other-id'
      }
    });

    const historyKey = getPrimarySearchHistoryKey(frequentSnippet);
    const ranked = rankSearchResults(
      [comparableSnippet, frequentSnippet],
      'throttle',
      new Map([
        [
          historyKey,
          {
            usage_count: 5,
            last_used_at: '2026-05-21T00:00:00.000Z'
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(historyKey).toBe('markdown:path:d:/snippets/frontend/throttle.md');
    expect(ranked[0].id).toBe('markdown:new-id');
    expect(ranked[0].metadata?.history_usage_count).toBe(5);
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

  it('decays history weight as usage ages', () => {
    const now = Date.parse('2026-07-25T00:00:00.000Z');

    expect(getHistoryRecencyFactor('2026-07-24T12:00:00.000Z', now)).toBe(1);
    expect(getHistoryRecencyFactor('2026-07-20T00:00:00.000Z', now)).toBe(0.85);
    expect(getHistoryRecencyFactor('2026-07-01T00:00:00.000Z', now)).toBe(0.6);
    expect(getHistoryRecencyFactor('2026-05-25T00:00:00.000Z', now)).toBe(0.35);
    expect(getHistoryRecencyFactor('2025-01-01T00:00:00.000Z', now)).toBe(0.15);
    expect(getHistoryRecencyFactor('', now)).toBe(0.5);
    expect(getHistoryRecencyFactor('2026-08-01T00:00:00.000Z', now)).toBe(1);
  });

  it('merges history records across legacy and stable keys', () => {
    const app = createItem({
      id: 'app:stable-id',
      title: 'Visual Studio Code',
      content: 'C:\\Users\\zero\\Code\\Code.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'legacy-id' }
    });
    const other = createItem({
      id: 'app:other-id',
      title: 'Code Writer',
      content: 'C:\\Tools\\CodeWriter.exe',
      summarize: 'app',
      metadata: { source: 'app', raw_id: 'other-id' }
    });

    const historyKey = getPrimarySearchHistoryKey(app);
    const ranked = rankSearchResults(
      [other, app],
      'code',
      new Map([
        [
          'legacy-id',
          { usage_count: 3, last_used_at: '2020-01-01T00:00:00.000Z' }
        ],
        [historyKey, { usage_count: 5, last_used_at: new Date().toISOString() }]
      ]),
      { deepSearch: true }
    );

    expect(ranked[0].id).toBe('app:stable-id');
    expect(ranked[0].metadata?.history_usage_count).toBe(8);
  });

  it('ranks recently used items above long-stale ones with higher lifetime usage', () => {
    const staleFrequent = createItem({
      id: 'stale',
      title: 'Modal helper',
      content: 'modal'
    });
    const recentlyUsed = createItem({
      id: 'recent',
      title: 'Modal helper',
      content: 'modal'
    });

    const ranked = rankSearchResults(
      [staleFrequent, recentlyUsed],
      'modal',
      new Map([
        [
          'stale',
          { usage_count: 20, last_used_at: '2020-01-01T00:00:00.000Z' }
        ],
        ['recent', { usage_count: 5, last_used_at: new Date().toISOString() }]
      ]),
      { deepSearch: true }
    );

    expect(ranked[0].id).toBe('recent');
  });

  it('ranks all history-backed results above stronger matches without history', () => {
    // 复刻 "icon" 搜索场景：Yesicon(4 次) 与 IconPark(1 次)、EsIcon(1 次) 都有记录，
    // iconfont/Iconify 相关性更强（startsWith 匹配）但无记录
    const iconPark = createItem({
      id: 'iconpark',
      title: 'IconPark',
      content: 'https://iconpark.oceanengine.com/official',
      summarize: 'bookmark',
      metadata: { source: 'bookmark', raw_id: 'iconpark' }
    });
    const iconfont = createItem({
      id: 'iconfont',
      title: 'iconfont-阿里巴巴矢量图标库',
      content: 'https://www.iconfont.cn/',
      summarize: 'bookmark',
      metadata: { source: 'bookmark', raw_id: 'iconfont' }
    });
    const yesicon = createItem({
      id: 'yesicon',
      title: 'Yesicon - 精选全球高品质图标库',
      content: 'https://yesicon.app/',
      summarize: 'bookmark',
      metadata: { source: 'bookmark', raw_id: 'yesicon' }
    });
    const esicon = createItem({
      id: 'esicon',
      title: 'EsIcon获取图标',
      content: 'https://favicon.vwood.xyz/',
      summarize: 'bookmark',
      metadata: { source: 'bookmark', raw_id: 'esicon' }
    });

    const now = Date.now();
    const ranked = rankSearchResults(
      [iconPark, iconfont, yesicon, esicon],
      'icon',
      new Map([
        [
          getPrimarySearchHistoryKey(iconPark),
          { usage_count: 1, last_used_at: new Date(now).toISOString() }
        ],
        [
          getPrimarySearchHistoryKey(yesicon),
          { usage_count: 4, last_used_at: new Date(now).toISOString() }
        ],
        [
          getPrimarySearchHistoryKey(esicon),
          { usage_count: 1, last_used_at: new Date(now).toISOString() }
        ]
      ]),
      { deepSearch: false }
    );

    // 有记录的条目全部最前；次数最多的 Yesicon 第一；
    // 同次数按相关性（IconPark startsWith 强于 EsIcon includes）；
    // 无记录的 iconfont 即使相关性更强也只能排在有记录之后
    expect(ranked.map((item) => item.id)).toEqual([
      'yesicon',
      'iconpark',
      'esicon',
      'iconfont'
    ]);
  });

  it('promotes a result to the history-backed tier after a single use', () => {
    const strongMatch = createItem({
      id: 'strong',
      title: 'code runner pro',
      content: ''
    });
    const usedOnce = createItem({
      id: 'used-once',
      title: 'my code notes',
      content: ''
    });

    const ranked = rankSearchResults(
      [strongMatch, usedOnce],
      'code',
      new Map([
        [
          'used-once',
          { usage_count: 1, last_used_at: new Date().toISOString() }
        ]
      ]),
      { deepSearch: true }
    );

    // 仅使用过一次也足以进入"有记录"档位，排在所有无记录条目之前
    expect(ranked[0].id).toBe('used-once');
  });

  it('prefers the most recently used entry when frequency scores tie', () => {
    const now = Date.now();
    const older = createItem({ id: 'older', title: 'modal twin', content: '' });
    const newer = createItem({ id: 'newer', title: 'modal twin', content: '' });

    const ranked = rankSearchResults(
      [older, newer],
      'modal twin',
      new Map([
        [
          'older',
          {
            usage_count: 2,
            last_used_at: new Date(now - 3_600_000).toISOString()
          }
        ],
        [
          'newer',
          {
            usage_count: 2,
            last_used_at: new Date(now - 60_000).toISOString()
          }
        ]
      ]),
      { deepSearch: true }
    );

    expect(ranked[0].id).toBe('newer');
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

  describe('history key contract after the full search pipeline', () => {
    // 与 src/hooks/useSearch.ts 的 withSourceId 保持一致
    const withSourceId = (
      item: ContentType,
      source: string,
      index = 0
    ): ContentType => ({
      ...item,
      id: `${source}:${String(item.id)}`,
      metadata: {
        ...(item.metadata ?? {}),
        raw_id: item.id,
        source,
        source_index: index
      }
    });

    it('keeps a stable app path key for plain apps without metadata', () => {
      const backendItem = {
        id: 'ac28c2a7-69e9-4734-a37b-cb628b43bad3',
        title: 'Everything 1.4.1.1032 (x64)',
        content: 'C:\\Program Files\\Everything\\Everything.exe',
        summarize: 'app' as const,
        icon: '',
        score: 120
      } as unknown as ContentType;

      const ranked = rankSearchResults(
        [withSourceId(backendItem, 'app', 0)],
        'everything',
        new Map(),
        { deepSearch: false }
      );

      expect(ranked).toHaveLength(1);
      expect(getPrimarySearchHistoryKey(ranked[0])).toBe(
        'app:path:c:/program files/everything/everything.exe'
      );
    });

    it('prefers launch_path over display_path for shell apps', () => {
      const backendItem = {
        id: 'uuid-shell',
        title: '计算器',
        content: 'C:\\Windows\\System32\\calc.exe',
        summarize: 'app' as const,
        icon: '',
        score: 100,
        metadata: {
          launch_path:
            'shell:AppsFolder\\Microsoft.WindowsCalculator_8wekyb3d8bbwe!App',
          display_path: 'C:\\Windows\\System32\\calc.exe'
        }
      } as unknown as ContentType;

      const ranked = rankSearchResults(
        [withSourceId(backendItem, 'app', 0)],
        'calc',
        new Map(),
        { deepSearch: false }
      );

      expect(getPrimarySearchHistoryKey(ranked[0])).toBe(
        'app:path:shell:appsfolder/microsoft.windowscalculator_8wekyb3d8bbwe!app'
      );
    });

    it('keeps a stable bookmark URL key after ranking', () => {
      const backendItem = {
        id: 'aaf54dc9-0cde-4547-a034-aeb312393279',
        title: 'bing',
        content: 'https://www.bing.com/?FORM=Z9FD1',
        summarize: 'bookmark' as const,
        icon: '',
        score: 90
      } as unknown as ContentType;

      const ranked = rankSearchResults(
        [withSourceId(backendItem, 'bookmark', 0)],
        'bing',
        new Map(),
        { deepSearch: false }
      );

      expect(getPrimarySearchHistoryKey(ranked[0])).toBe(
        'bookmark:url:https://www.bing.com/?form=z9fd1'
      );
    });
  });
});
