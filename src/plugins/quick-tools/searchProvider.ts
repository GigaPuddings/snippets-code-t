import type { ContentType } from '@/types';
import type { SearchSourceProvider } from '../search';

type CurrencyCode = 'USD' | 'CNY' | 'EUR' | 'JPY' | 'HKD' | 'GBP';

const DEFAULT_CURRENCY_TARGET: CurrencyCode = 'CNY';
const NUMBER_PATTERN = '[\\d.]+|[零〇一二两三四五六七八九十百千万]+';

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

type UnitDefinition = {
  base: string;
  factor: number;
  label: string;
  defaultTarget?: string;
};

const UNIT_ALIASES: Record<string, UnitDefinition> = {
  t: { base: 'g', factor: 1000000, label: '吨', defaultTarget: 'kg' },
  ton: { base: 'g', factor: 1000000, label: '吨', defaultTarget: 'kg' },
  tonne: { base: 'g', factor: 1000000, label: '吨', defaultTarget: 'kg' },
  吨: { base: 'g', factor: 1000000, label: '吨', defaultTarget: 'kg' },
  公吨: { base: 'g', factor: 1000000, label: '吨', defaultTarget: 'kg' },
  kg: { base: 'g', factor: 1000, label: '千克', defaultTarget: 'g' },
  千克: { base: 'g', factor: 1000, label: '千克', defaultTarget: 'g' },
  公斤: { base: 'g', factor: 1000, label: '千克', defaultTarget: 'g' },
  g: { base: 'g', factor: 1, label: '克', defaultTarget: 'kg' },
  克: { base: 'g', factor: 1, label: '克', defaultTarget: 'kg' },
  mg: { base: 'g', factor: 0.001, label: '毫克', defaultTarget: 'g' },
  毫克: { base: 'g', factor: 0.001, label: '毫克', defaultTarget: 'g' },
  斤: { base: 'g', factor: 500, label: '斤', defaultTarget: 'kg' },
  兩: { base: 'g', factor: 50, label: '两', defaultTarget: 'g' },
  两: { base: 'g', factor: 50, label: '两', defaultTarget: 'g' },
  lb: { base: 'g', factor: 453.59237, label: '磅', defaultTarget: 'kg' },
  lbs: { base: 'g', factor: 453.59237, label: '磅', defaultTarget: 'kg' },
  磅: { base: 'g', factor: 453.59237, label: '磅', defaultTarget: 'kg' },
  km: { base: 'm', factor: 1000, label: '千米', defaultTarget: 'm' },
  千米: { base: 'm', factor: 1000, label: '千米', defaultTarget: 'm' },
  公里: { base: 'm', factor: 1000, label: '千米', defaultTarget: 'm' },
  m: { base: 'm', factor: 1, label: '米', defaultTarget: 'cm' },
  米: { base: 'm', factor: 1, label: '米', defaultTarget: 'cm' },
  dm: { base: 'm', factor: 0.1, label: '分米', defaultTarget: 'm' },
  分米: { base: 'm', factor: 0.1, label: '分米', defaultTarget: 'm' },
  cm: { base: 'm', factor: 0.01, label: '厘米', defaultTarget: 'm' },
  厘米: { base: 'm', factor: 0.01, label: '厘米', defaultTarget: 'm' },
  mm: { base: 'm', factor: 0.001, label: '毫米', defaultTarget: 'm' },
  毫米: { base: 'm', factor: 0.001, label: '毫米', defaultTarget: 'm' },
  um: { base: 'm', factor: 0.000001, label: '微米', defaultTarget: 'm' },
  'μm': { base: 'm', factor: 0.000001, label: '微米', defaultTarget: 'm' },
  'µm': { base: 'm', factor: 0.000001, label: '微米', defaultTarget: 'm' },
  微米: { base: 'm', factor: 0.000001, label: '微米', defaultTarget: 'm' },
  nm: { base: 'm', factor: 0.000000001, label: '纳米', defaultTarget: 'm' },
  纳米: { base: 'm', factor: 0.000000001, label: '纳米', defaultTarget: 'm' },
  l: { base: 'ml', factor: 1000, label: '升', defaultTarget: 'ml' },
  L: { base: 'ml', factor: 1000, label: '升', defaultTarget: 'ml' },
  升: { base: 'ml', factor: 1000, label: '升', defaultTarget: 'ml' },
  ml: { base: 'ml', factor: 1, label: '毫升', defaultTarget: 'L' },
  毫升: { base: 'ml', factor: 1, label: '毫升', defaultTarget: 'L' },
  km2: { base: 'm2', factor: 1000000, label: '平方千米', defaultTarget: '平方米' },
  'km²': { base: 'm2', factor: 1000000, label: '平方千米', defaultTarget: '平方米' },
  平方千米: { base: 'm2', factor: 1000000, label: '平方千米', defaultTarget: '平方米' },
  平方公里: { base: 'm2', factor: 1000000, label: '平方千米', defaultTarget: '平方米' },
  m2: { base: 'm2', factor: 1, label: '平方米', defaultTarget: 'cm2' },
  'm²': { base: 'm2', factor: 1, label: '平方米', defaultTarget: 'cm2' },
  '㎡': { base: 'm2', factor: 1, label: '平方米', defaultTarget: 'cm2' },
  平方: { base: 'm2', factor: 1, label: '平方米', defaultTarget: 'cm2' },
  平方米: { base: 'm2', factor: 1, label: '平方米', defaultTarget: 'cm2' },
  平米: { base: 'm2', factor: 1, label: '平方米', defaultTarget: 'cm2' },
  cm2: { base: 'm2', factor: 0.0001, label: '平方厘米', defaultTarget: '平方米' },
  'cm²': { base: 'm2', factor: 0.0001, label: '平方厘米', defaultTarget: '平方米' },
  平方厘米: { base: 'm2', factor: 0.0001, label: '平方厘米', defaultTarget: '平方米' },
  mm2: { base: 'm2', factor: 0.000001, label: '平方毫米', defaultTarget: '平方米' },
  'mm²': { base: 'm2', factor: 0.000001, label: '平方毫米', defaultTarget: '平方米' },
  平方毫米: { base: 'm2', factor: 0.000001, label: '平方毫米', defaultTarget: '平方米' },
  亩: { base: 'm2', factor: 666.6666666667, label: '亩', defaultTarget: '平方米' },
  公顷: { base: 'm2', factor: 10000, label: '公顷', defaultTarget: '平方米' },
  ha: { base: 'm2', factor: 10000, label: '公顷', defaultTarget: '平方米' }
};

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const UNIT_ALIAS_PATTERN = Object.keys(UNIT_ALIASES)
  .sort((a, b) => b.length - a.length)
  .map(escapeRegExp)
  .join('|');

const CHINESE_DIGITS: Record<string, number> = {
  零: 0,
  '〇': 0,
  一: 1,
  二: 2,
  两: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
};

const CHINESE_UNITS: Record<string, number> = {
  十: 10,
  百: 100,
  千: 1000,
  万: 10000
};

const formatNumber = (value: number): string =>
  Number.isInteger(value)
    ? String(value)
    : value.toLocaleString('zh-CN', { maximumFractionDigits: 12 });

const parseChineseInteger = (value: string): number | null => {
  let total = 0;
  let section = 0;
  let number = 0;

  for (const char of value) {
    if (char in CHINESE_DIGITS) {
      number = CHINESE_DIGITS[char];
      continue;
    }

    const unit = CHINESE_UNITS[char];
    if (!unit) return null;
    if (unit === 10000) {
      section = (section + number) * unit;
      total += section;
      section = 0;
      number = 0;
      continue;
    }
    section += (number || 1) * unit;
    number = 0;
  }

  return total + section + number;
};

const parseAmount = (value: string): number => {
  if (/^[\d.]+$/.test(value)) return Number(value);
  return parseChineseInteger(value) ?? Number.NaN;
};

const resolveUnit = (value: string): UnitDefinition | undefined =>
  UNIT_ALIASES[value.trim()] ?? UNIT_ALIASES[value.trim().toLowerCase()];

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
  const normalized = query.trim();
  const match = normalized.match(
    new RegExp(
      `^(${NUMBER_PATTERN})\\s*(${UNIT_ALIAS_PATTERN})\\s*(?:=|to|转|换算(?:成)?|是多少|等于多少|等于)?\\s*(${UNIT_ALIAS_PATTERN})$`,
      'i'
    )
  );
  const shortMatch = normalized.match(new RegExp(`^(${NUMBER_PATTERN})\\s*(${UNIT_ALIAS_PATTERN})$`, 'i'));

  if (match) {
    const amount = parseAmount(match[1]);
    const from = resolveUnit(match[2]);
    const to = resolveUnit(match[3]);
    if (Number.isFinite(amount) && from && to && from.base === to.base) {
      const value = amount * from.factor / to.factor;
      return {
        amount,
        fromLabel: from.label,
        toLabel: to.label,
        value
      };
    }
  }

  if (!shortMatch) return null;

  const amount = parseAmount(shortMatch[1]);
  const from = resolveUnit(shortMatch[2]);
  const to = from?.defaultTarget ? resolveUnit(from.defaultTarget) : undefined;
  if (!Number.isFinite(amount) || !from || !to || from.base !== to.base) return null;

  const value = amount * from.factor / to.factor;
  return {
    amount,
    fromLabel: from.label,
    toLabel: to.label,
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
