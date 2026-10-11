import { describe, expect, it } from 'vitest';
import {
  bookmarkSourceKey,
  bookmarkSourceLabel,
  type BookmarkSource
} from './types';

const source = (profile: string, node = '42'): BookmarkSource => ({
  browser: 'Chrome',
  profile,
  profile_key: `key-${profile}`,
  node_id: node,
  folder_path: ['Bookmarks bar', 'Work'],
  storage_path: `C:/Chrome/${profile}/Bookmarks`,
  url: 'https://example.com/',
  title: 'Docs'
});

describe('launcher bookmark provenance', () => {
  it('node identity includes its profile and labels expose browser and logical folder path', () => {
    expect(bookmarkSourceKey(source('Default'))).not.toBe(
      bookmarkSourceKey(source('Profile 12'))
    );
    expect(bookmarkSourceLabel(source('Default'))).toBe(
      'Chrome · Default · Bookmarks bar / Work'
    );
  });
});
