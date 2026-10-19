import { describe, expect, it, vi } from 'vitest';
import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

function flatten(
  value: Record<string, unknown>,
  prefix = ''
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(value).flatMap(([key, entry]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      return entry && typeof entry === 'object'
        ? Object.entries(flatten(entry as Record<string, unknown>, path))
        : [[path, String(entry)]];
    })
  );
}
const chinese = flatten(zhCN);
const english = flatten(enUS);
const parameters = (message: string) =>
  [
    ...new Set(
      Array.from(message.matchAll(/\{([a-zA-Z_]\w*)\}/g), (match) => match[1])
    )
  ].sort();

describe('application message catalogs', () => {
  it('provides matching Chinese and English keys and interpolation parameters', () => {
    expect(Object.keys(english).sort()).toEqual(Object.keys(chinese).sort());
    for (const key of Object.keys(chinese)) {
      expect(english[key].trim(), key).not.toBe('');
      expect(parameters(english[key]), key).toEqual(parameters(chinese[key]));
    }
  });

  it.each(['zh-CN', 'en-US'] as const)(
    'compiles every message in %s without falling back',
    (locale) => {
      const errors = vi
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);
      const i18n = createI18n({
        legacy: false,
        locale,
        fallbackLocale: false,
        messages: { 'zh-CN': zhCN, 'en-US': enUS }
      });
      try {
        const catalog = locale === 'zh-CN' ? chinese : english;
        for (const [key, message] of Object.entries(catalog)) {
          const args = Object.fromEntries(
            parameters(message).map((name) => [
              name,
              name === 'count' ? 2 : `sample-${name}`
            ])
          );
          expect(i18n.global.te(key, locale), key).toBe(true);
          expect(i18n.global.t(key, args), key).not.toBe(key);
        }
        expect(errors.mock.calls).toEqual([]);
        expect(i18n.global.t('category.invalidNameChars')).toContain('|');
      } finally {
        errors.mockRestore();
      }
    }
  );
});
