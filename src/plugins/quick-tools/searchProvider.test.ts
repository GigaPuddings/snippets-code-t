import { describe, expect, it } from 'vitest';

import { quickToolsSearchProvider } from './searchProvider';

const searchTitle = async (query: string) => {
  const [source] = await quickToolsSearchProvider.search(query);
  return source.items[0]?.title;
};

describe('quickToolsSearchProvider', () => {
  it('supports natural Chinese unit conversion queries', async () => {
    await expect(searchTitle('一吨等于多少千克')).resolves.toBe('1 吨 = 1000 千克');
    await expect(searchTitle('1纳米')).resolves.toBe('1 纳米 = 0.000000001 米');
    await expect(searchTitle('1厘米')).resolves.toBe('1 厘米 = 0.01 米');
    await expect(searchTitle('1平方')).resolves.toBe('1 平方米 = 10000 平方厘米');
  });
});
