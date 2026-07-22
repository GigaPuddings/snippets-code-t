import { describe, expect, it } from 'vitest';
import {
  createTurndownService,
  htmlToMarkdown,
  jsonToMarkdown,
  markdownToHtml,
  normalizeAiMarkdown,
  richHtmlToEditorHtml
} from './markdown';

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

  it('round-trips combined bold and italic marks in a stable order', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: '重点',
              marks: [{ type: 'italic' }, { type: 'bold' }]
            }
          ]
        }
      ]
    });

    expect(markdown).toBe('***重点***\n');
    const html = markdownToHtml(markdown);
    expect(html).toContain('<em><strong>重点</strong></em>');
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

  it('serializes table column alignment into GFM separators', () => {
    const headers = [
      { text: '左', textAlign: 'left' },
      { text: '中', textAlign: 'center' },
      { text: '右', textAlign: 'right' }
    ];
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [{
        type: 'table',
        content: [{
          type: 'tableRow',
          content: headers.map(header => ({
            type: 'tableHeader',
            attrs: { textAlign: header.textAlign },
            content: [{ type: 'paragraph', content: [{ type: 'text', text: header.text }] }]
          }))
        }]
      }]
    });

    expect(markdown).toContain('| :--- | :---: | ---: |');
  });

  it('keeps a table and the following item inside one ordered list', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'orderedList',
          attrs: { start: 1 },
          content: [
            {
              type: 'listItem',
              content: [
                { type: 'paragraph', content: [{ type: 'text', text: '第一项' }] },
                {
                  type: 'table',
                  content: [
                    {
                      type: 'tableRow',
                      content: [
                        {
                          type: 'tableHeader',
                          content: [{ type: 'paragraph', content: [{ type: 'text', text: '标题' }] }]
                        }
                      ]
                    },
                    {
                      type: 'tableRow',
                      content: [
                        {
                          type: 'tableCell',
                          content: [{ type: 'paragraph', content: [{ type: 'text', text: '内容' }] }]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: 'listItem',
              content: [{ type: 'paragraph', content: [{ type: 'text', text: '第二项' }] }]
            }
          ]
        }
      ]
    });

    expect(markdown).toContain('1. 第一项');
    expect(markdown).toContain('2. 第二项');
    const html = markdownToHtml(markdown);
    expect(html.match(/<ol/g)).toHaveLength(1);
    expect(html).toContain('<table>');
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

  it('preserves responsive image scale metadata', () => {
    const markdown = jsonToMarkdown({
      type: 'doc',
      content: [
        {
          type: 'localImage',
          attrs: {
            src: 'https://asset.localhost/image.png',
            alt: 'Preview',
            'data-original-path': '../assets/image.png',
            'data-image-scale': 75
          }
        }
      ]
    });

    expect(markdown).toBe('<img src="../assets/image.png" alt="Preview" data-image-scale="75">');
    expect(markdownToHtml(markdown)).toContain('data-image-scale="75"');
  });
});

describe('markdownToHtml', () => {
  it('keeps ordinary soft and paragraph line breaks', () => {
    const html = markdownToHtml('第一行\n第二行\n\n第三段');

    expect(html).toContain('第一行<br>第二行');
    expect(html).toContain('</p>\n<p>第三段</p>');
  });

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

  it('keeps Chinese ordered markers as plain text while parsing inline bold', () => {
    const html = markdownToHtml('1、** AI 翻译增强**\n2、** AI 聊天 / 问答**');

    expect(html).not.toContain('<ol>');
    expect(html).toContain('1、');
    expect(html).toContain('2、');
    expect(html).toContain('<strong>AI 翻译增强</strong>');
    expect(html).toContain('<strong>AI 聊天 / 问答</strong>');
  });

  it('normalizes a trailing space before an inline bold closing delimiter', () => {
    const html = markdownToHtml('AI 辅助新增**知识库问答（RAG） **模式');

    expect(html).toContain('AI 辅助新增<strong>知识库问答（RAG）</strong>模式');
    expect(html).not.toContain('**知识库问答（RAG） **');
  });

  it('normalizes AI label bold markers with a space before the closing delimiter', () => {
    const html = markdownToHtml([
      '## 2025.2-2025.3 | 采购平台小程序开发（微信小程序）',
      '',
      '**描述: **面向企业内部采购流程管理的专用系统。',
      '',
      '**关键技术: **',
      '',
      '1. 严格遵循微信官方 WXML、WXSS、JavaScript 规范进行开发。'
    ].join('\n'));

    expect(html).toContain('<h2');
    expect(html).toContain('<strong>描述:</strong><br>面向企业内部采购流程管理的专用系统。');
    expect(html).toContain('<strong>关键技术:</strong>');
    expect(html).not.toContain('**描述: **');
  });

  it('preserves line breaks between consecutive AI labels and their content', () => {
    const normalized = normalizeAiMarkdown([
      '**描述: **面向企业内部采购流程管理的专用系统。（Vue2 + TDesign） **关键技术: **',
      '1. 严格遵循微信官方 WXML、WXSS、JavaScript 规范进行开发。'
    ].join('\n'));
    const html = markdownToHtml(normalized);

    expect(normalized).toContain('**描述: **\n面向企业内部采购流程管理的专用系统。（Vue2 + TDesign）\n\n**关键技术: **');
    expect(html).toContain('<strong>描述:</strong><br>面向企业内部采购流程管理的专用系统。');
    expect(html).toContain('<strong>关键技术:</strong>');
  });

  it('keeps an AI-generated Markdown document structurally intact for the rich-text editor', () => {
    const html = markdownToHtml([
      '# 项目经历',
      '',
      '负责 **前端架构**，并完成 [发布说明](https://example.com/release)。',
      '',
      '- [x] 完成需求梳理',
      '- [ ] 补充验收用例',
      '',
      '```ts',
      'const result = await generate();',
      '```',
      '',
      '| 指标 | 结果 |',
      '| --- | --- |',
      '| 性能 | 提升 30% |'
    ].join('\n'));

    expect(html).toContain('<h1');
    expect(html).toContain('<strong>前端架构</strong>');
    expect(html).toContain('<a href="https://example.com/release"');
    expect(html).toContain('data-type="taskList"');
    expect(html).toContain('<pre><code class="language-ts">');
    expect(html).toContain('<table>');
  });

  it('renders bold when Chinese full-width parenthesis precedes the closing delimiter', () => {
    // CommonMark 的右侧重边距判定：）是 Unicode 标点，当 ** 后面紧跟非标点字符时，
    // ** 不会被识别为结束分隔符。预处理阶段在标点与 ** 之间插入零宽空格来修复。
    const html = markdownToHtml('AI辅助新增**知识库问答（RAG）**模式');

    expect(html).toContain('<strong>知识库问答（RAG）</strong>');
    expect(html).not.toContain('**');
    expect(html).not.toContain('\u200B');
  });

  it('renders bold in list items when Chinese parenthesis precedes the closing delimiter', () => {
    const html = markdownToHtml('- 支持**知识库问答（RAG）**功能');

    expect(html).toContain('<strong>知识库问答（RAG）</strong>');
    expect(html).not.toContain('**');
  });

  it('renders multiple bold segments on the same line with Chinese parenthesis', () => {
    const html = markdownToHtml('支持**知识库问答（RAG）**和**AI聊天**功能');

    expect(html).toContain('<strong>知识库问答（RAG）</strong>');
    expect(html).toContain('<strong>AI聊天</strong>');
    // 确保“和”不在 <strong> 标签内（marked 不应产生错误嵌套）
    expect(html).not.toContain('<strong>和</strong>');
    expect(html).not.toContain('**');
  });

  it('renders bold in headings when Chinese parenthesis precedes the closing delimiter', () => {
    const html = markdownToHtml('## 标题中的**知识库问答（RAG）**功能');

    expect(html).toContain('<strong>知识库问答（RAG）</strong>');
    expect(html).not.toContain('**');
  });

  it('renders bold with half-width parenthesis followed by Chinese character', () => {
    const html = markdownToHtml('支持**知识库问答(RAG)**功能');

    expect(html).toContain('<strong>知识库问答(RAG)</strong>');
    expect(html).not.toContain('**');
  });

});

describe('rich clipboard conversion', () => {
  it('preserves table alignment when converting rich HTML to Markdown', () => {
    const markdown = htmlToMarkdown(
      '<table><thead><tr><th align="left">左</th><th align="center">中</th><th align="right">右</th></tr></thead></table>',
      createTurndownService()
    );

    expect(markdown).toContain('| :--- | :---: | ---: |');
  });

  it('normalizes the rendered TipTap code-block NodeView structure', () => {
    const html = richHtmlToEditorHtml([
      '<p>按：</p>',
      '<div class="code-block-wrapper code-block" data-node-view-wrapper>',
      '<div class="code-toolbar" contenteditable="false">',
      '<button class="language-button"><span class="language-text">Plain Text</span></button>',
      '<button class="copy-language-button"><svg aria-hidden="true"></svg></button>',
      '</div>',
      '<pre class="code-block-pre"><code class="language-plaintext" data-language="plaintext">',
      '<div data-node-view-content class="code-block-content">',
      '<span class="shiki-token">CPU</span>\n',
      '<span class="shiki-token">↓</span>\n',
      '<span class="shiki-token">关联的句柄</span>\n',
      '<br class="ProseMirror-trailingBreak">',
      '</div></code></pre>',
      '</div>',
      '<p>如果看到：</p>',
      '<ul><li><p>codex.exe</p></li><li><p>node.exe</p></li></ul>'
    ].join(''));

    expect(html.match(/<pre>/g)).toHaveLength(1);
    expect(html).toContain(
      '<pre><code class="language-plaintext">CPU\n↓\n关联的句柄\n</code></pre>'
    );
    expect(html.match(/<li>/g)).toHaveLength(2);
    expect(html).not.toContain('Plain Text');
    expect(html).not.toContain('copy-language-button');
  });

  it('removes editor NodeView chrome and fixed image wrappers from copied notes', () => {
    const html = richHtmlToEditorHtml([
      '<div class="editor-content-body">',
      '<div contenteditable="true" class="tiptap ProseMirror tiptap-editor">',
      '<h1>响应式笔记</h1>',
      '<div class="code-block-wrapper" data-node-view-wrapper data-component="code-block">',
      '<div class="code-toolbar"><button>Plain Text</button></div>',
      '<pre><code data-language="plaintext"><div data-node-view-content>const value = 1;<br class="ProseMirror-trailingBreak"></div></code></pre>',
      '</div>',
      '<p><span class="image-wrapper" data-node-view-wrapper style="width: 1071px">',
      '<span class="image-container"><img src="https://example.com/preview.png" alt="preview" style="width: 100%"></span>',
      '<span class="image-controls"><input type="range"><output>100%</output></span>',
      '</span><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
      '</div></div>'
    ].join(''));

    expect(html).toContain('<h1 id="响应式笔记">响应式笔记</h1>');
    expect(html).toContain('<pre><code class="language-plaintext">const value = 1;\n</code></pre>');
    expect(html.match(/<img/g)).toHaveLength(1);
    expect(html).toContain('<img src="https://example.com/preview.png" alt="preview">');
    expect(html).not.toMatch(/image-wrapper|image-controls|ProseMirror-|width=|style=/);
    expect(html).not.toContain('100%');
  });

  it('drops empty presentation code blocks and keeps the real code block', () => {
    const html = richHtmlToEditorHtml([
      '<p>进入：</p>',
      '<pre aria-hidden="true"><code>\u200b</code></pre>',
      '<pre><code data-language="text">CPU<br>↓<br>关联的句柄</code></pre>',
      '<p>右侧搜索框输入：</p>',
      '<pre><code></code></pre>',
      '<pre><code>.codex</code></pre>'
    ].join(''));

    expect(html.match(/<pre>/g)).toHaveLength(2);
    expect(html).toContain('<code class="language-text">CPU\n↓\n关联的句柄\n</code>');
    expect(html).toContain('<pre><code>.codex\n</code></pre>');
  });

  it('removes code block controls without adding their labels to the note', () => {
    const markdown = htmlToMarkdown(
      '<pre><button>Copy code</button><code class="language-powershell">Get-Process</code></pre>',
      createTurndownService()
    );

    expect(markdown).toBe('```powershell\nGet-Process\n```');
    expect(markdown).not.toContain('Copy code');
  });

  it('supports pre blocks without a code wrapper and line container spans', () => {
    const html = richHtmlToEditorHtml(
      '<pre class="lang-shell"><span class="line">pnpm typecheck</span><span class="line">pnpm test</span></pre>'
    );

    expect(html).toContain(
      '<pre><code class="language-shell">pnpm typecheck\npnpm test\n</code></pre>'
    );
  });

  it('canonicalizes loose rich-text lists without blank list paragraphs', () => {
    const html = richHtmlToEditorHtml([
      '<p>如果看到：</p>',
      '<ul>',
      '  <li>\n<p><br>codex.exe</p>\n</li>',
      '  <li>\n<p>node.exe</p>\n</li>',
      '  <li>\n<p>Code.exe</p>\n</li>',
      '</ul>',
      '<p>右键结束对应进程。</p>'
    ].join(''));

    expect(html).toContain('<ul>');
    expect(html.match(/<li>/g)).toHaveLength(3);
    expect(html).not.toMatch(/<li>\s*<p>\s*<br>/);
    expect(html).not.toMatch(/<li>\s*<p>\s*<\/p>/);
  });

  it('preserves the other rich-text structures supported by the note editor', () => {
    const html = richHtmlToEditorHtml([
      '<h2>排查步骤</h2>',
      '<p><strong>注意</strong>：保留 <em>Markdown</em> 结构。</p>',
      '<blockquote><p>先备份配置。</p></blockquote>',
      '<ol><li>第一步</li><li>第二步</li></ol>',
      '<ul class="task-list">',
      '<li class="task-item"><input type="checkbox" checked><div><p>已完成</p></div></li>',
      '<li class="task-item"><input type="checkbox"><div><p>待处理</p></div></li>',
      '</ul>',
      '<table><thead><tr><th>进程</th><th>状态</th></tr></thead>',
      '<tbody><tr><td>codex.exe</td><td>运行中</td></tr></tbody></table>'
    ].join(''));

    expect(html).toContain('<h2');
    expect(html).toContain('<strong>注意</strong>');
    expect(html).toContain('<em>Markdown</em>');
    expect(html).toContain('<blockquote>');
    expect(html).toContain('<ol>');
    expect(html).toContain('data-type="taskList"');
    expect(html).toContain('data-checked="true"');
    expect(html).toContain('data-checked="false"');
    expect(html).toContain('<table>');
  });
});
