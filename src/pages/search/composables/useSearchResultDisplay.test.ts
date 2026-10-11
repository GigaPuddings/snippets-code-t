import { describe, expect, it } from 'vitest';
import type { ComposerTranslation } from 'vue-i18n';
import { getBookmarkResultContent } from './useSearchResultDisplay';

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
