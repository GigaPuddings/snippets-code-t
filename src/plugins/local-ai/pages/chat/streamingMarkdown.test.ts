import { marked } from 'marked';
import { expect, it } from 'vitest';
import { createStreamingMarkdownRenderer } from './streamingMarkdown';

it('renders new text immediately and keeps completed Markdown blocks stable', () => {
  const render = createStreamingMarkdownRenderer();
  const start = '## 标题\n\n' + '长段落'.repeat(8000) + '\n\n';
  const first = render(start + '新');
  const next = render(start + '新文字');
  expect(next.slice(0, -1)).toEqual(first.slice(0, -1));
  expect(next.at(-1)).toBe('<p>新文字</p>\n');
});

it('preserves block boundaries and reference links as the reply arrives', () => {
  const render = createStreamingMarkdownRenderer();
  const reply = [
    '1. 一\n\n   子段落\n2. 二',
    '> 引用\n>\n> 续',
    '```js\nfirst()\n\nsecond()\n```',
    '| a | b |\n|---|---|\n| 2 | 3 |',
    '[文档][ref]',
    '[ref]: https://example.com/notes'
  ].join('\n\n');
  let visible = '';
  for (const char of reply) {
    visible += char;
    expect(render(visible).join('')).toBe(marked.parse(visible));
  }
  expect(render('重写后的回复').join('')).toBe(marked.parse('重写后的回复'));
});
