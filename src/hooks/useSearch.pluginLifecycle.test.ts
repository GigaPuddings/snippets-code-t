import { describe, expect, it, vi } from 'vitest';
import type { ContentType } from '@/types/models';
import { removeDisabledPluginResults } from './useSearch';

vi.mock('@/utils', () => ({
  debounce: vi.fn()
}));

vi.mock('@/utils/error-handler', () => ({
  ErrorHandler: {},
  ErrorType: {}
}));

const result = (
  id: string,
  source: string,
  summarize: ContentType['summarize']
): ContentType => ({
  id,
  title: id,
  content: id,
  summarize,
  metadata: { source }
});

describe('useSearch plugin lifecycle', () => {
  it('drops stale app and bookmark results after local-launcher is disabled', () => {
    const results = [
      result('app', 'app', 'app'),
      result('bookmark', 'bookmark', 'bookmark'),
      result('file', 'file', 'file'),
      result('note', 'workspace', 'text')
    ];

    expect(removeDisabledPluginResults(results, () => false)).toEqual([
      results[2],
      results[3]
    ]);
  });

  it('keeps local-launcher results while the plugin remains enabled', () => {
    const results = [result('app', 'app', 'app')];

    expect(removeDisabledPluginResults(results, () => true)).toEqual(results);
  });
});
