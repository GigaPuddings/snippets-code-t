import type { ContentType } from '@/types';
import type { SearchSourceProvider } from '../search';

type CurrencyCode = 'USD' | 'CNY' | 'EUR' | 'JPY' | 'HKD' | 'GBP';

const DEFAULT_CURRENCY_TARGET: CurrencyCode = 'CNY';

const CURRENCY_ALIASES: Record<string, CurrencyCode> = {
  usd: 'USD',
  dollar: 'USD',
  dollars: 'USD',
  美元: 'USD',
  美金: 'USD',
  cny: 'CNY',
  rmb: 'CNY',
  yuan: 'CNY',
  人民币: 'CNY',
  元: 'CNY',
  eur: 'EUR',
  euro: 'EUR',
  欧元: 'EUR',
  jpy: 'JPY',
  yen: 'JPY',
  日元: 'JPY',
  hkd: 'HKD',
  港币: 'HKD',
  gbp: 'GBP',
  pound: 'GBP',
  英镑: 'GBP'
};

const UNIT_ALIASES: Record<string, { base: string; factor: number }> = {
  kg: { base: 'g', factor: 1000 },
  千克: { base: 'g', factor: 1000 },
  公斤: { base: 'g', factor: 1000 },
  g: { base: 'g', factor: 1 },
  克: { base: 'g', factor: 1 },
  斤: { base: 'g', factor: 500 },
  兩: { base: 'g', factor: 50 },
  两: { base: 'g', factor: 50 },
  lb: { base: 'g', factor: 453.59237 },
  lbs: { base: 'g', factor: 453.59237 },
  磅: { base: 'g', factor: 453.59237 },
  km: { base: 'm', factor: 1000 },
  千米: { base: 'm', factor: 1000 },
  公里: { base: 'm', factor: 1000 },
  m: { base: 'm', factor: 1 },
  米: { base: 'm', factor: 1 },
  cm: { base: 'm', factor: 0.01 },
  厘米: { base: 'm', factor: 0.01 },
  mm: { base: 'm', factor: 0.001 },
  毫米: { base: 'm', factor: 0.001 },
  l: { base: 'ml', factor: 1000 },
  L: { base: 'ml', factor: 1000 },
  升: { base: 'ml', factor: 1000 },
  ml: { base: 'ml', factor: 1 },
  毫升: { base: 'ml', factor: 1 }
};

const formatNumber = (value: number): string =>
  Number.isInteger(value)
    ? String(value)
    : value.toLocaleString('zh-CN', { maximumFractionDigits: 6 });

const createResult = (
  id: string,
  title: string,
  content: string,
  query: string,
  extra: Record<string, unknown> = {}
): ContentType => ({
  id,
  title,
  content,
  summarize: 'tool',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIi8+PGxpbmUgeDE9IjgiIHkxPSI2IiB4Mj0iMTYiIHkyPSI2Ii8+PGxpbmUgeDE9IjgiIHkxPSIxMCIgeDI9IjgiIHkyPSIxMCIvPjxsaW5lIHgxPSIxMiIgeTE9IjEwIiB4Mj0iMTIiIHkyPSIxMCIvPjxsaW5lIHgxPSIxNiIgeTE9IjEwIiB4Mj0iMTYiIHkyPSIxMCIvPjxsaW5lIHgxPSI4IiB5MT0iMTQiIHgyPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iMTIiIHkxPSIxNCIgeDI9IjEyIiB5Mj0iMTQiLz48bGluZSB4MT0iMTYiIHkxPSIxNCIgeDI9IjE2IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIxOCIvPjwvc3ZnPg==',
  metadata: {
    source: 'quick-tools',
    query,
    ...extra
  }
});

const normalizeMathExpression = (query: string): string | null => {
  const normalized = query
    .trim()
    .replace(/（/g, '(')
    .replace(/）/g, ')')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/＝/g, '=')
    .replace(/^calc(?:ulate)?\s*/i, '')
    .replace(/^计算\s*/, '')
    .replace(/=$/, '')
    .trim();

  if (!/[0-9]/.test(normalized)) return null;
  if (!/^[\d+\-*/%().\s]+$/.test(normalized)) return null;
  if (!/[+\-*/%]/.test(normalized)) return null;
  return normalized;
};

const evaluateMath = (query: string): ContentType | null => {
  const expression = normalizeMathExpression(query);
  if (!expression) return null;

  try {
    const value = Function(`"use strict"; return (${expression})`)();
    if (typeof value !== 'number' || !Number.isFinite(value)) return null;
    const formatted = formatNumber(value);
    return createResult('quick-tools-calc', `${expression} = ${formatted}`, formatted, query, {
      tool: 'calculator'
    });
  } catch {
    return null;
  }
};

const parseUnitConversion = (query: string) => {
  const match = query.trim().match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  if (!match) return null;

  const amount = Number(match[1]);
  const from = UNIT_ALIASES[match[2]];
  const to = UNIT_ALIASES[match[3]];
  if (!Number.isFinite(amount) || !from || !to || from.base !== to.base) return null;

  const value = amount * from.factor / to.factor;
  return {
    amount,
    fromLabel: match[2],
    toLabel: match[3],
    value
  };
};

const convertUnit = (query: string): ContentType | null => {
  const conversion = parseUnitConversion(query);
  if (!conversion) return null;

  const result = formatNumber(conversion.value);
  return createResult(
    'quick-tools-unit',
    `${formatNumber(conversion.amount)} ${conversion.fromLabel} = ${result} ${conversion.toLabel}`,
    `${result} ${conversion.toLabel}`,
    query,
    { tool: 'unit-converter' }
  );
};

const resolveCurrency = (value: string): CurrencyCode | null =>
  CURRENCY_ALIASES[value.trim().toLowerCase()] ?? CURRENCY_ALIASES[value.trim()] ?? null;

const parseCurrencyConversion = (query: string) => {
  const normalized = query.trim();
  const match = normalized.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)\s*(?:=|to|转|换算(?:成)?|是多少)?\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);
  const shortMatch = normalized.match(/^([\d.]+)\s*([a-zA-Z]+|[\u4e00-\u9fa5]+)$/i);

  if (match) {
    const amount = Number(match[1]);
    const from = resolveCurrency(match[2]);
    const to = resolveCurrency(match[3]);
    if (Number.isFinite(amount) && from && to && from !== to) {
      return { amount, from, to };
    }
  }

  if (shortMatch) {
    const amount = Number(shortMatch[1]);
    const from = resolveCurrency(shortMatch[2]);
    if (!Number.isFinite(amount) || !from || from === DEFAULT_CURRENCY_TARGET) return null;
    return { amount, from, to: DEFAULT_CURRENCY_TARGET };
  }

  return null;
};

const convertCurrency = async (query: string): Promise<ContentType | null> => {
  const conversion = parseCurrencyConversion(query);
  if (!conversion) return null;

  try {
    const url = `https://api.frankfurter.dev/v2/rate/${conversion.from}/${conversion.to}`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json() as { date?: string; base?: string; quote?: string; rate?: number };
    const value = typeof data.rate === 'number' ? data.rate * conversion.amount : undefined;
    if (typeof value !== 'number') return null;
    const rateDate = data.date;

    const result = formatNumber(value);
    return createResult(
      'quick-tools-currency',
      `${formatNumber(conversion.amount)} ${conversion.from} = ${result} ${conversion.to}`,
      `${result} ${conversion.to}，汇率日期 ${rateDate ?? 'latest'}`,
      query,
      {
        tool: 'currency-converter',
        date: rateDate,
        provider: 'Frankfurter'
      }
    );
  } catch {
    return null;
  }
};

export const quickToolsSearchProvider: SearchSourceProvider = {
  pluginId: 'quick-tools',
  source: 'quick-tools',
  async search(query) {
    const items: ContentType[] = [];
    const unitResult = convertUnit(query);
    if (unitResult) items.push(unitResult);

    const mathResult = evaluateMath(query);
    if (mathResult) items.push(mathResult);

    const currencyResult = await convertCurrency(query);
    if (currencyResult) items.push(currencyResult);

    return [
      {
        source: 'quick-tools',
        items
      }
    ];
  }
};
