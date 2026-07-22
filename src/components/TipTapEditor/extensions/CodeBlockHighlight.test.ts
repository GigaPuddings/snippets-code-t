import { describe, expect, it, vi } from 'vitest';

vi.mock('./CodeBlockHighlightComponent.vue', () => ({ default: {} }));

import { detectLanguage, resolveCodeBlockLang } from './CodeBlockHighlight';

describe('code block language detection', () => {
  it.each([
    ['mysqldump --opt test > mysql.test', 'bash'],
    ['mysqlimport -u root -p database file.txt', 'bash'],
    ['说明文字\nuse test;\nload data local infile "file.txt" into table users;', 'sql']
  ])('detects database command blocks for syntax highlighting', (code, language) => {
    expect(detectLanguage(code)).toBe(language);
    expect(resolveCodeBlockLang(null, code)).toBe(language);
  });

  it('keeps an explicitly selected language above auto detection', () => {
    expect(resolveCodeBlockLang('python', 'mysqldump --opt test')).toBe('python');
  });
});
