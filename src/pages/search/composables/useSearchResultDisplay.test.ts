import { describe, expect, it, vi } from 'vitest';
import type { ComposerTranslation } from 'vue-i18n';
import {
  getBookmarkResultContent,
  useSearchResultDisplay
} from './useSearchResultDisplay';

// Test display composition separately from the browser DOM encoder.
vi.mock('@/utils/text', () => ({
  escapeHtml: vi.fn((text: string) => 'escaped:' + text),
  highlightText: vi.fn((text: string) => 'highlighted:' + text)
}));

describe('bookmark search result provenance', () => {
  const t = ((key: string, values?: Record<string, number>) =>
    `${key}:${values?.count}`) as ComposerTranslation;
  it('formats browser/profile/folder as plain text without changing the original URL', () => {
    const item = {
      summarize: 'bookmark',
      content: 'https://example.com/',
      metadata: {
        sources: [
          { browser: 'Chrome', profile: 'Work', folder_path: ['<script>'] }
        ]
      }
    } as unknown as ContentType;
    expect(getBookmarkResultContent(item, t)).toBe(
      'Chrome · Work · <script> · https://example.com/'
    );
  });
  it('keeps legacy/manual bookmarks usable when provenance is absent or malformed', () => {
    for (const metadata of [
      undefined,
      { sources: 'invalid' },
      { sources: [null, 1] }
    ]) {
      expect(
        getBookmarkResultContent(
          {
            summarize: 'bookmark',
            content: 'https://example.com/',
            metadata
          } as ContentType,
          t
        )
      ).toBe('https://example.com/');
    }
  });
});

describe('inline result type labels', () => {
  const t = ((key: string) =>
    key === 'searchResult.settings' ? '设置' : key) as ComposerTranslation;
  it('removes only the known action prefix and escapes result details', () => {
    const display = useSearchResultDisplay(() => '', t);
    const item: ContentType = {
      id: 'settings',
      title: '通用设置',
      content: '设置 · 打开 <设置页>',
      summarize: 'settings',
      searchAction: { kind: 'settings', tabId: 'general' }
    };
    expect(display.getTypeLabel(item)).toBe('设置');
    expect(display.getDisplayContentHighlighted(item, false)).toBe(
      'escaped:打开 <设置页>'
    );
    expect(display.getDisplayContentHighlighted(item)).toBe(
      'escaped:设置 · 打开 <设置页>'
    );
    expect(
      display.getDisplayContentHighlighted(
        { ...item, content: '自定义说明' },
        false
      )
    ).toBe('escaped:自定义说明');
  });
});
