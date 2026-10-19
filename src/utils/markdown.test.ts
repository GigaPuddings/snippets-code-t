import { describe, expect, it } from 'vitest';
import {
  createTurndownService,
  htmlToMarkdown,
  markdownToHtml,
  normalizeAiMarkdown
} from './markdown';

describe('markdownToHtml', () => {
  it.each([
    '1. 问题\n2.\n',
    '<ol start="3"><li></li></ol>',
    '<ul><li> </li></ul>'
  ])('creates a valid paragraph inside an empty %s list item', (markdown) => {
    expect(markdownToHtml(markdown)).toContain('<li><p></p></li>');
  });

  it('preserves a nested list after a blank line and a multi-digit marker', () => {
    const html = markdownToHtml('10. 父条目\n\n    - 子条目');
    expect(html).toContain('<ol start="10">');
    expect(html).toContain('<ul>');
    expect(html).toMatch(/<li>[\s\S]*父条目[\s\S]*<ul>[\s\S]*子条目/);
    expect(html).not.toContain('&#32;');
  });

  it('preserves task paragraphs and child lists while keeping ordinary siblings unchecked', () => {
    const html = markdownToHtml(
      '- [x] 父任务\n\n  任务正文\n\n  - 子条目\n\n    - 孙条目\n\n- 普通条目'
    );

    expect(html).toContain('data-type="taskList"');
    expect(html).toContain('data-checked="true"');
    expect(html).toContain('<p>任务正文</p>');
    expect(html.match(/<ul>/g)).toHaveLength(3);
    expect(html).not.toContain('<pre>');
    expect(html).not.toContain('data-checked="false"');
  });

  it('keeps a task child list nested when rendering Markdown', () => {
    const markdown = '- [x] 父任务\n  - 子条目';
    const html = markdownToHtml(markdown);
    expect(html).toMatch(
      /data-type="taskItem"[\s\S]*父任务[\s\S]*<ul>[\s\S]*子条目/
    );
    expect(html).not.toContain('<pre>');
  });

  it('keeps ordinary soft and paragraph line breaks', () => {
    const html = markdownToHtml('第一行\n第二行\n\n第三段');

    expect(html).toContain('第一行<br>第二行');
    expect(html).toContain('</p>\n<p>第三段</p>');
  });

  it('protects plain-text indentation without changing Markdown block syntax', () => {
    const indentedText = markdownToHtml('    普通缩进文本');
    const heading = markdownToHtml('  ### 标题');
    const list = markdownToHtml('  - 列表项');
    const fencedCode = markdownToHtml('```text\n    code\n```');

    expect(indentedText).toContain('<p>&#32;&#32;&#32;&#32;普通缩进文本</p>');
    expect(indentedText).not.toContain('<pre>');
    expect(heading).toContain('<h3 id="标题">标题</h3>');
    expect(list).toContain('<li>列表项</li>');
    expect(fencedCode).toContain('<pre><code class="language-text">    code');
  });

  it('removes unsafe raw HTML and event handlers', () => {
    const html = markdownToHtml(
      '<script>alert(1)</script><img src="x" onerror="alert(1)">'
    );

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

    expect(html).toContain(
      '<a href="src/plugins/translation/pages/translate/index.vue"'
    );
    expect(html).toContain(
      '>src/plugins/translation/pages/translate/index.vue</a>'
    );
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
    const html = markdownToHtml(
      [
        '## 2025.2-2025.3 | 采购平台小程序开发（微信小程序）',
        '',
        '**描述: **面向企业内部采购流程管理的专用系统。',
        '',
        '**关键技术: **',
        '',
        '1. 严格遵循微信官方 WXML、WXSS、JavaScript 规范进行开发。'
      ].join('\n')
    );

    expect(html).toContain('<h2');
    expect(html).toContain(
      '<strong>描述:</strong><br>面向企业内部采购流程管理的专用系统。'
    );
    expect(html).toContain('<strong>关键技术:</strong>');
    expect(html).not.toContain('**描述: **');
  });

  it('preserves line breaks between consecutive AI labels and their content', () => {
    const normalized = normalizeAiMarkdown(
      [
        '**描述: **面向企业内部采购流程管理的专用系统。（Vue2 + TDesign） **关键技术: **',
        '1. 严格遵循微信官方 WXML、WXSS、JavaScript 规范进行开发。'
      ].join('\n')
    );
    const html = markdownToHtml(normalized);

    expect(normalized).toContain(
      '**描述: **\n面向企业内部采购流程管理的专用系统。（Vue2 + TDesign）\n\n**关键技术: **'
    );
    expect(html).toContain(
      '<strong>描述:</strong><br>面向企业内部采购流程管理的专用系统。'
    );
    expect(html).toContain('<strong>关键技术:</strong>');
  });

  it('keeps an AI-generated Markdown document structurally intact when rendered', () => {
    const html = markdownToHtml(
      [
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
      ].join('\n')
    );

    expect(html).toContain('<h1');
    expect(html).toContain('<strong>前端架构</strong>');
    expect(html).toContain('<a href="https://example.com/release"');
    expect(html).toContain('data-type="taskList"');
    expect(html).toContain('<pre><code class="language-ts">');
    expect(html).toContain('<table>');
  });

  it.each(['```', '~~~~'])(
    'keeps a list-nested %s code block intact across empty lines',
    (fence) => {
      const html = markdownToHtml(
        [
          '1.  **确保引入**：安装依赖。',
          '2.  **配置文件** (`vite.config.ts`):',
          `    ${fence}typescript`,
          "    import { defineConfig } from 'vite';",
          '',
          '',
          '    export default defineConfig({',
          '      plugins: [vue()],',
          '    });',
          `    ${fence}`,
          '',
          '3.  **构建后**：检查输出。'
        ].join('\n')
      );
      const code = html.match(
        /<pre><code class="language-typescript">([\s\S]*?)<\/code><\/pre>/
      )?.[1];

      expect(code).toContain(
        '\n\n\nexport default defineConfig({\n  plugins: [vue()],\n});\n'
      );
      expect(code).not.toContain('&amp;#32;');
      expect(code).not.toContain('&lt;p&gt;');
      expect(html.match(/<pre>/g)).toHaveLength(1);
      expect(html).toContain('<strong>构建后</strong>');
    }
  );

  it('keeps code inside nested quotes verbatim instead of applying prose formatting', () => {
    const html = markdownToHtml(
      [
        '> > ```text',
        '> > **label: **literal text',
        '> >',
        '> >',
        '> >     indented code',
        '> > ```',
        '',
        'After the code block.'
      ].join('\n')
    );
    const code = html.match(
      /<pre><code class="language-text">([\s\S]*?)<\/code><\/pre>/
    )?.[1];

    expect(code).toBe('**label: **literal text\n\n\n    indented code\n');
    expect(html).toContain('<p>After the code block.</p>');
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

describe('HTML empty paragraph compatibility', () => {
  it('keeps a legacy document containing only empty paragraphs empty', () => {
    const markdown = htmlToMarkdown(
      '<p><br></p><p><br></p>',
      createTurndownService()
    );

    expect(markdown).toBe('');
  });

  it('preserves a top-level empty paragraph when legacy HTML is converted', () => {
    const markdown = htmlToMarkdown(
      '<p>1、段落1</p><p><br></p><p>2、段落2</p>',
      createTurndownService()
    );

    expect(markdown).toBe('1、段落1\n\n\n2、段落2');
    expect(markdown).not.toContain('<p>');
    expect(markdownToHtml(markdown)).toBe(
      '<p>1、段落1</p><p></p><p>2、段落2</p>\n'
    );
  });

  it('does not promote an empty paragraph inside a list to document spacing', () => {
    const markdown = htmlToMarkdown(
      '<ul><li><p>列表项</p><p><br></p></li></ul><p>正文</p>',
      createTurndownService()
    );

    expect(markdown).not.toContain('<p></p>');
  });

  it('loads the previously persisted br marker as exactly one empty paragraph', () => {
    const html = markdownToHtml('1、段落\n\n<p><br></p>\n\n2、段落');

    expect(html).toBe('<p>1、段落</p><p></p><p>2、段落</p>\n');
    expect(html).not.toContain('<br>');
    expect(html).not.toMatch(/<p>\s+<\/p>/);
  });

  it('does not interpret consecutive blank code lines as editor paragraphs', () => {
    const html = markdownToHtml(
      '```ts\nconst first = 1;\n\n\nconst second = 2;\n```\n\n正文'
    );

    expect(html).toContain('const first = 1;\n\n\nconst second = 2;');
    expect(html).toContain('</code></pre>');
    expect(html).toContain('<p>正文</p>');
  });
});
