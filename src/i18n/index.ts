import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

export type LocaleType = 'zh-CN' | 'en-US';

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
};

// 从 localStorage 获取持久化的语言设置
function getStoredLanguage(): LocaleType {
  try {
    const stored = localStorage.getItem('configuration');
    if (stored) {
      const config = JSON.parse(stored);
      if (config.language && (config.language === 'zh-CN' || config.language === 'en-US')) {
        return config.language;
      }
    }
  } catch (e) {
    console.warn('Failed to get stored language:', e);
  }
  return 'zh-CN'; // 默认中文
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getStoredLanguage(),
  fallbackLocale: 'zh-CN',
  messages,
  globalInjection: true // 允许在模板中使用 $t
});

// 切换语言
export function setLocale(locale: LocaleType) {
  i18n.global.locale.value = locale;
}

// 获取当前语言
export function getLocale(): LocaleType {
  return i18n.global.locale.value as LocaleType;
}

export default i18n;
