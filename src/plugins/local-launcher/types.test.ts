import { describe, expect, it } from 'vitest';
import {
  bookmarkProfiles,
  bookmarkSourceKey,
  bookmarkSourceLabel,
  browserBridgeClients,
  supportsBrowserBridge,
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
  it('retains distinct profiles while coalescing multiple nodes in one profile for binding', () => {
    const profiles = bookmarkProfiles([
      {
        id: 'one',
        title: 'Docs',
        content: '',
        summarize: 'bookmark',
        usage_count: 0,
        sources: [
          source('Default'),
          source('Default', '43'),
          source('Profile 12')
        ]
      },
      {
        id: 'legacy',
        title: 'Old',
        content: '',
        summarize: 'bookmark',
        usage_count: 0
      }
    ]);
    expect(profiles.map((item) => item.profile)).toEqual([
      'Default',
      'Profile 12'
    ]);
  });

  it('node identity includes its profile and labels expose browser and logical folder path', () => {
    expect(bookmarkSourceKey(source('Default'))).not.toBe(
      bookmarkSourceKey(source('Profile 12'))
    );
    expect(bookmarkSourceLabel(source('Default'))).toBe(
      'Chrome · Default · Bookmarks bar / Work'
    );
  });

  it('only offers connections for the matching browser and preserves legacy host support', () => {
    const bridge = {
      clients: [
        { id: 'chrome', browser: 'Chrome', label: 'Default' },
        { id: 'shuanghe', browser: 'ShuangHe', label: 'Default' }
      ],
      bindings: {},
      supported_browsers: ['Chrome', 'Edge', 'Brave', 'Firefox', 'ShuangHe']
    };
    expect(browserBridgeClients('Edge', bridge)).toEqual([]);
    expect(
      browserBridgeClients('ShuangHe', bridge).map((client) => client.id)
    ).toEqual(['shuanghe']);
    expect(supportsBrowserBridge('ShuangHe', bridge)).toBe(true);
    expect(supportsBrowserBridge('QQBrowser', bridge)).toBe(false);
    expect(
      supportsBrowserBridge('ShuangHe', { clients: [], bindings: {} })
    ).toBe(false);
    expect(supportsBrowserBridge('Chrome', { clients: [], bindings: {} })).toBe(
      true
    );
  });
});
