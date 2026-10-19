import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import type { MarkdownConfig } from '@lezer/markdown';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { json } from '@codemirror/lang-json';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

// The parser recognizes links only in Markdown inline content, never in code.
const wikilinks: MarkdownConfig = {
  defineNodes: ['WikiLink'],
  parseInline: [
    {
      name: 'WikiLink',
      before: 'Link',
      parse(cx, next, pos) {
        if (next !== 91 || cx.char(pos + 1) !== 91) return -1;
        const end = cx.text.indexOf(']]', pos + 2 - cx.offset);
        if (end < 0) return -1;
        const to = cx.offset + end + 2;
        if (cx.slice(pos, to).includes('\n')) return -1;
        return cx.addElement(cx.elt('WikiLink', pos, to));
      }
    }
  ]
};

export function markdownLanguageSupport() {
  return markdown({
    base: markdownLanguage,
    extensions: [wikilinks],
    addKeymap: false,
    codeLanguages: (name) => {
      if (/^(js|jsx|ts|tsx|javascript|typescript)$/i.test(name))
        return javascript({ typescript: true, jsx: true }).language;
      if (/^java$/i.test(name)) return java().language;
      if (/^json$/i.test(name)) return json().language;
      if (/^html$/i.test(name)) return html().language;
      if (/^(css|scss)$/i.test(name)) return css().language;
      return null;
    }
  });
}
