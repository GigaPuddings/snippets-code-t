import { describe, expect, it } from 'vitest';
import { formatIncompleteJavaScript } from './formatIncompleteCode';

describe('formatIncompleteJavaScript', () => {
  it('formats a lifecycle-method fragment without requiring an outer object', () => {
    const source = [
      'history.pushState(state, "title", document.URL);',
      "window.addEventListener('popstate', this.handleback);",
      '},',
      'onUnload(){',
      'setTimeout(() => {',
      "window.removeEventListener('popstate', this.handleback);",
      '}, 100);',
      '}'
    ].join('\n');

    expect(formatIncompleteJavaScript(source)).toBe([
      'history.pushState(state, "title", document.URL);',
      "window.addEventListener('popstate', this.handleback);",
      '},',
      'onUnload() {',
      '  setTimeout(() => {',
      "    window.removeEventListener('popstate', this.handleback);",
      '  }, 100);',
      '}'
    ].join('\n'));
  });

  it('does not count braces in strings or line comments as structure', () => {
    expect(formatIncompleteJavaScript('const label = "}";\n// {\nif (ok) {\nrun();\n}')).toBe([
      'const label = "}";',
      '// {',
      'if (ok) {',
      '  run();',
      '}'
    ].join('\n'));
  });
});
