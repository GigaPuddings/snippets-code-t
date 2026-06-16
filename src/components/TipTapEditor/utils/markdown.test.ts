import { describe, expect, it } from 'vitest';
import { jsonToMarkdown, markdownToHtml } from './markdown';

describe('jsonToMarkdown', () => {
  it('serializes headings, paragraphs, and marks', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Vue Pattern' }]
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'useModal',
              marks: [{ type: 'code' }]
            },
            { type: 'text', text: ' with ' },
            {
              type: 'text',
              text: 'docs',
              marks: [{ type: 'link', attrs: { href: 'https://vuejs.org' } }]
            }
          ]
        }
      ]
    });

    expect(markdown).toBe('## Vue Pattern\n\n`useModal` with [docs](https://vuejs.org)\n');
  });

  it('serializes task lists and checked state', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'taskList',
          content: [
            {
              type: 'taskItem',
              attrs: { checked: true },
              content: [
                {
                  type: 'paragraph',
                  content: [{ type: 'text', text: 'Done' }]
                }
              ]
            },
            {
              type: 'taskItem',
              attrs: { checked: false },
              content: [
                {
                  type: 'paragraph',
                  content: [{ type: 'text', text: 'Todo' }]
                }
              ]
            }
          ]
        }
      ]
    });

    expect(markdown).toBe('- [x] Done\n- [ ] Todo\n');
  });

  it('serializes code blocks with language and trims trailing line breaks', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'codeBlock',
          attrs: { language: 'ts' },
          content: [{ type: 'text', text: 'const value = 1;\n' }]
        }
      ]
    });

    expect(markdown).toBe('```ts\nconst value = 1;\n```\n');
  });

  it('uses a longer code fence when code contains backticks', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'codeBlock',
          attrs: { language: 'md' },
          content: [{ type: 'text', text: '```js\nconst value = 1;\n```' }]
        }
      ]
    });

    expect(markdown).toBe('````md\n```js\nconst value = 1;\n```\n````\n');
  });

  it('escapes table cell pipes and line breaks', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'table',
          content: [
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableHeader',
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'A|B' }] }]
                },
                {
                  type: 'tableHeader',
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'C' }] }]
                }
              ]
            },
            {
              type: 'tableRow',
              content: [
                {
                  type: 'tableCell',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        { type: 'text', text: 'one' },
                        { type: 'hardBreak' },
                        { type: 'text', text: 'two|three' }
                      ]
                    }
                  ]
                },
                {
                  type: 'tableCell',
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'ok' }] }]
                }
              ]
            }
          ]
        }
      ]
    });

    expect(markdown).toContain('| A\\|B | C |');
    expect(markdown).toContain('| one<br>two\\|three | ok |');
  });

  it('uses original image path when available', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'localImage',
          attrs: {
            src: 'https://asset.localhost/image.png',
            alt: 'Preview',
            'data-original-path': '../assets/image.png'
          }
        }
      ]
    });

    expect(markdown).toBe('![Preview](../assets/image.png)');
  });
});

describe('markdownToHtml', () => {
  it('removes unsafe raw HTML and event handlers', () => {
    const html = markdownToHtml('<script>alert(1)</script><img src="x" onerror="alert(1)">');

    expect(html).not.toContain('<script');
    expect(html).not.toContain('onerror');
  });

  it('removes javascript URLs from links', () => {
    const html = markdownToHtml('[bad](javascript:alert(1))');

    expect(html).not.toContain('<a');
    expect(html).not.toContain('href=');
  });

  it('renders project path links as readable anchors', () => {
    const html = markdownToHtml(
      '[src/plugins/translation/pages/translate/index.vue](src/plugins/translation/pages/translate/index.vue)'
    );

    expect(html).toContain('<a href="src/plugins/translation/pages/translate/index.vue"');
    expect(html).toContain('>src/plugins/translation/pages/translate/index.vue</a>');
    expect(html).not.toContain('invalid-link-text');
  });

  it('renders local absolute path links as readable anchors', () => {
    const html = markdownToHtml(
      '[src-tauri/src/plugins/translation.rs](E:/Project/Tauri/snippets-code-t/src-tauri/src/plugins/translation.rs)'
    );

    expect(html).toContain('<a href="src-tauri/src/plugins/translation.rs"');
    expect(html).toContain('>src-tauri/src/plugins/translation.rs</a>');
    expect(html).not.toContain('invalid-link-text');
  });

  it('parses alternate GFM task list markers', () => {
    const html = markdownToHtml('* [X] Done\n+ [ ] Todo');

    expect(html).toContain('data-type="taskList"');
    expect(html).toContain('data-checked="true"');
    expect(html).toContain('data-checked="false"');
  });

  it('parses Chinese ordered markers and loose bold spacing', () => {
    const html = markdownToHtml('1、** AI 翻译增强**\n2、** AI 聊天 / 问答**');

    expect(html).toContain('<ol>');
    expect(html).toContain('<strong>AI 翻译增强</strong>');
    expect(html).toContain('<strong>AI 聊天 / 问答</strong>');
  });

});
