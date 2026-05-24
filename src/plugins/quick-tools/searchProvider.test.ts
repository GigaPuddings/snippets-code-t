import { afterEach, describe, expect, it, vi } from 'vitest';

import { quickToolsSearchProvider } from './searchProvider';

const searchFirstItem = async (query: string) => {
  const [source] = await quickToolsSearchProvider.search(query);
  return source.items[0];
};

const searchTitle = async (query: string) => {
  return (await searchFirstItem(query))?.title;
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('quickToolsSearchProvider', () => {
  it('supports natural Chinese unit conversion queries', async () => {
    await expect(searchTitle('一吨等于多少千克')).resolves.toBe('1 吨 = 1000 千克');
    await expect(searchTitle('1纳米')).resolves.toBe('1 纳米 = 0.000000001 米');
    await expect(searchTitle('1厘米')).resolves.toBe('1 厘米 = 0.01 米');
    await expect(searchTitle('1平方')).resolves.toBe('1 平方米 = 10000 平方厘米');
  });

  it('keeps jin and gongjin aliases in explicit weight conversions', async () => {
    await expect(searchTitle('1公斤=斤')).resolves.toBe('1 公斤 = 2 斤');
    await expect(searchTitle('1公斤= 斤')).resolves.toBe('1 公斤 = 2 斤');
    await expect(searchTitle('1公斤 斤')).resolves.toBe('1 公斤 = 2 斤');
  });

  it('supports mixed Chinese and symbol unit conversions', async () => {
    await expect(searchTitle('1公斤=kg')).resolves.toBe('1 公斤 = 1 kg');
    await expect(searchTitle('1公斤 kg')).resolves.toBe('1 公斤 = 1 kg');
    await expect(searchTitle('1kg=斤')).resolves.toBe('1 kg = 2 斤');
  });

  it('supports Chinese currency names and explicit RMB conversions', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify({
      date: '2026-05-23',
      rate: 1.23
    }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })));

    const item = await searchFirstItem('1元=欧元');
    expect(item?.title).toBe('1 CNY = 1.23 EUR');
    expect(item?.metadata).toMatchObject({
      source: 'quick-tools',
      tool: 'currency-converter',
      toolName: '汇率转换',
      outputValue: '1.23',
      outputUnit: 'EUR'
    });
  });
});
