import { describe, expect, it } from 'vitest';
import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

describe('AI reply saving translations', () => {
  it.each(['zh-CN', 'en-US'])('compiles save-only messages in %s', (locale) => {
    const i18n = createI18n({
      legacy: false,
      locale,
      messages: { 'zh-CN': zhCN, 'en-US': enUS }
    });
    for (const key of [
      'saveReply',
      'openSaved',
      'savedReply',
      'inbox',
      'unknownModel',
      'savedNoteMissing',
      'workspaceChanged'
    ]) {
      expect(i18n.global.t(`localAi.savedNotes.${key}`)).not.toContain(
        'localAi.'
      );
    }
    expect(
      i18n.global.t('localAi.savedNotes.saved', { folder: 'Inbox' })
    ).toContain('Inbox');
    expect(
      i18n.global.t('localAi.savedNotes.attribution', {
        model: 'Test model',
        date: '2026-10-07'
      })
    ).toContain('2026-10-07');
    expect(i18n.global.t('localAi.chatPlaceholder')).not.toContain('@');
    expect(
      i18n.global.t('localAi.showEarlierMessages', { count: 40 })
    ).toContain('40');
    expect(i18n.global.t('localAi.contextTooLarge')).not.toContain('localAi.');
    expect(i18n.global.te('localAi.knowledge')).toBe(false);
  });
});
