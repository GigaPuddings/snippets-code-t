import { describe, expect, it } from 'vitest';
import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

function leafKeys(value: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(value).flatMap(([key, entry]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return entry !== null && typeof entry === 'object'
      ? leafKeys(entry as Record<string, unknown>, path)
      : [path];
  });
}

describe('AI assistance translations', () => {
  it('provides the same message keys in Chinese and English', () => {
    expect(leafKeys(zhCN.aiAssist).sort()).toEqual(
      leafKeys(enUS.aiAssist).sort()
    );
  });

  it('updates visible messages when the locale changes', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'zh-CN',
      messages: { 'zh-CN': zhCN, 'en-US': enUS }
    });

    expect(i18n.global.t('aiAssist.description', { type: '笔记' })).toContain(
      '笔记'
    );
    i18n.global.locale.value = 'en-US';
    expect(i18n.global.t('aiAssist.description', { type: 'note' })).toBe(
      'Use local AI to work on this note. Review the result before applying it.'
    );
    expect(i18n.global.t('aiAssist.actions.ask.label')).toBe(
      'Knowledge base Q&A'
    );

    for (const locale of ['zh-CN', 'en-US'] as const) {
      i18n.global.locale.value = locale;
      for (const key of leafKeys(zhCN.aiAssist)) {
        const path = `aiAssist.${key}`;
        expect(
          i18n.global.t(path, {
            type: 'note',
            title: 'Example',
            category: 'Category',
            tags: 'tag',
            content: 'content',
            context: 'context',
            message: 'error'
          })
        ).not.toBe(path);
      }
    }
  });
});
