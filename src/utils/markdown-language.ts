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

// Lezer applies CommonMark's punctuation boundary rule to emphasis. In prose
// such as 前**（文本）**后 it leaves the whole span literal, while the note's HTML
// renderer already supports this syntax. Keep live preview in sync.
const fullwidthParenthesisStrong: MarkdownConfig = {
  parseInline: [
    {
      name: 'FullwidthParenthesisStrong',
      before: 'Emphasis',
      parse(cx, next, pos) {
        if (next !== 42 || cx.char(pos + 1) !== 42 || cx.char(pos + 2) === 42)
          return -1;
        const close = cx.text.indexOf('**', pos + 2 - cx.offset);
        if (close < 0) return -1;
        const to = cx.offset + close + 2;
        const content = cx.slice(pos + 2, to - 2);
        if (
          !content ||
          content !== content.trim() ||
          !/（[^\n]*）/u.test(content)
        )
          return -1;
        return cx.addElement(
          cx.elt('StrongEmphasis', pos, to, [
            cx.elt('EmphasisMark', pos, pos + 2),
            ...cx.parser.parseInline(content, pos + 2),
            cx.elt('EmphasisMark', to - 2, to)
          ])
        );
      }
    }
  ]
};

export function markdownLanguageSupport() {
  return markdown({
    base: markdownLanguage,
    extensions: [wikilinks, fullwidthParenthesisStrong],
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
