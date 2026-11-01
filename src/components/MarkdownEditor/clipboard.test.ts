import { describe, expect, it } from 'vitest';
import {
  createTurndownService,
  htmlToMarkdown,
  markdownToHtml,
  shouldPreferMarkdownClipboardText
} from '@/utils/markdown';
import { markdownClipboardText } from './clipboard';

function renderClipboardHtml(html: string): string {
  return markdownToHtml(
    markdownClipboardText({
      getData: (type) => (type === 'text/html' ? html : '')
    })
  );
}

describe('rich clipboard conversion', () => {
  const tableSource = [
    '| 修饰对象 | 作用 | 是否允许修改/扩展 |',
    '| ---- | ---------- | ----------- |',
    '| 成员变量 | 只能赋值一次 | 不能重新赋值 |',
    '| 引用变量 | 不能重新指向其他对象 | 对象内部状态仍可能修改 |'
  ].join('\n');

  it('keeps valid Markdown tables when the clipboard also supplies an HTML flavor', () => {
    const source = `### final 使用规则总结\n\n${tableSource}`;
    const actual = markdownClipboardText({
      getData: (type) =>
        type === 'text/plain'
          ? source
          : type === 'text/html'
            ? '<p>' + source.replace(/\n/g, '<br>') + '</p>'
            : ''
    });
    expect(actual).toBe(source);
    expect(markdownToHtml(actual)).toContain('<table>');
  });

  it.each(['th', 'td'])(
    'creates a delimiter for HTML tables with %s cells but no thead',
    (cell) => {
      const markdown = markdownClipboardText({
        getData: (type) =>
          type === 'text/html'
            ? `<table><tbody><tr><${cell}>修饰对象</${cell}><${cell}>作用</${cell}></tr><tr><td>成员变量</td><td>只能赋值一次</td></tr></tbody></table>`
            : ''
      });
      expect(markdown).toBe(
        '| 修饰对象 | 作用 |\n| --- | --- |\n| 成员变量 | 只能赋值一次 |'
      );
      expect(markdownToHtml(markdown)).toContain('<table>');
    }
  );

  it('preserves every row across multiple tbody sections and the footer', () => {
    const html = renderClipboardHtml(
      '<table><thead><tr><th>名称</th><th>值</th></tr></thead><tbody><tr><td>甲</td><td>1</td></tr></tbody><tbody><tr><td>乙</td><td>2</td></tr></tbody><tfoot><tr><td>合计</td><td>3</td></tr></tfoot></table>'
    );
    expect(html.match(/<tr>/g)).toHaveLength(4);
    expect(html).toContain('合计');
  });

  it('keeps table-looking code verbatim and leaves incomplete plain-text tables unchanged', () => {
    const code = `\`\`\`md\n${tableSource}\n\`\`\``;
    expect(shouldPreferMarkdownClipboardText(code, '<pre>code</pre>')).toBe(
      false
    );
    expect(
      markdownClipboardText(
        { getData: (type) => (type === 'text/plain' ? tableSource : '') },
        true
      )
    ).toBe(tableSource);
    const incomplete = '| A | B |\n| C | D |';
    expect(
      markdownClipboardText({
        getData: (type) => (type === 'text/plain' ? incomplete : '')
      })
    ).toBe(incomplete);
  });

  it('prefers escaped Markdown tag examples over a simultaneous rich HTML flavor', () => {
    const text = [
      '**2.表单元素的内容操作**',
      '表单元素：\\<input>元素、\\<select>元素、\\<option>元素、\\<textarea>元素。',
      '表单元素的内容操作使用value。'
    ].join('\n');

    expect(
      shouldPreferMarkdownClipboardText(
        text,
        '<p><strong>2.表单元素的内容操作</strong></p>'
      )
    ).toBe(true);
    expect(
      shouldPreferMarkdownClipboardText(
        '**普通富文本**',
        '<p><strong>普通富文本</strong></p>'
      )
    ).toBe(false);

    const html = markdownToHtml(text);
    expect(html).toContain('<strong>2.表单元素的内容操作</strong>');
    expect(html).toContain(
      '&lt;input&gt;元素、&lt;select&gt;元素、&lt;option&gt;元素、&lt;textarea&gt;元素。'
    );
    expect(html).not.toContain('&lt;/p&gt;');
  });

  it('renders unsupported raw form controls as text when a clipboard drops Markdown escapes', () => {
    const text = [
      '**2.表单元素的内容操作**',
      '表单元素：<input>元素、<select>元素、<option>元素、<textarea>元素。',
      '表单元素的内容操作使用value。'
    ].join('\n');

    expect(
      shouldPreferMarkdownClipboardText(text, '<p><strong>富文本</strong></p>')
    ).toBe(true);

    const html = markdownToHtml(text);
    expect(html).toContain(
      '&lt;input&gt;元素、&lt;select&gt;元素、&lt;option&gt;元素、&lt;textarea&gt;元素。'
    );
    expect(html).toContain('表单元素的内容操作使用value。');
    expect(html).not.toContain('&lt;/p&gt;');
  });

  it('preserves table alignment when converting rich HTML to Markdown', () => {
    const markdown = htmlToMarkdown(
      '<table><thead><tr><th align="left">左</th><th align="center">中</th><th align="right">右</th></tr></thead></table>',
      createTurndownService()
    );

    expect(markdown).toContain('| :--- | :---: | ---: |');
  });

  it('keeps rendered HTML tag examples as text without corrupting following blocks', () => {
    const source = [
      '<h4>2.表单元素的属性操作</h4>',
      '<p>表单元素：&lt;input&gt;元素、&lt;select&gt;元素、&lt;option&gt;元素、&lt;textarea&gt;元素。<br>',
      '常见属性列举：type、disabled、checked、selected、readOnly....</p>',
      '<pre><code class="language-js">1.获取元素对象的属性值：元素对象.属性名\n',
      '2.设置元素对象的属性值：元素对象.属性名 = 值;\n',
      '注：disabled、checked、selected这些属性的值是布尔型。</code></pre>',
      '<p><strong>练习</strong>：<br>密码的明文与密文之间的切换。</p>'
    ].join('');

    const markdown = htmlToMarkdown(source, createTurndownService());
    const html = markdownToHtml(markdown);

    expect(markdown).toContain(
      '\\<input>元素、\\<select>元素、\\<option>元素、\\<textarea>元素。'
    );
    expect(html).toContain(
      '&lt;input&gt;元素、&lt;select&gt;元素、&lt;option&gt;元素、&lt;textarea&gt;元素。'
    );
    expect(html).toContain('<pre><code class="language-js">');
    expect(html).toContain('<strong>练习</strong>');
    expect(html).not.toContain('&lt;/p&gt;');
  });

  it('normalizes the rendered TipTap code-block NodeView structure', () => {
    const html = renderClipboardHtml(
      [
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
      ].join('')
    );

    expect(html.match(/<pre>/g)).toHaveLength(1);
    expect(html).toContain(
      '<pre><code class="language-plaintext">CPU\n↓\n关联的句柄\n</code></pre>'
    );
    expect(html.match(/<li>/g)).toHaveLength(2);
    expect(html).not.toContain('Plain Text');
    expect(html).not.toContain('copy-language-button');
  });

  it('removes editor NodeView chrome and fixed image wrappers from copied notes', () => {
    const html = renderClipboardHtml(
      [
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
      ].join('')
    );

    expect(html).toContain('<h1 id="响应式笔记">响应式笔记</h1>');
    expect(html).toContain(
      '<pre><code class="language-plaintext">const value = 1;\n</code></pre>'
    );
    expect(html.match(/<img/g)).toHaveLength(1);
    expect(html).toContain(
      '<img src="https://example.com/preview.png" alt="preview">'
    );
    expect(html).not.toMatch(
      /image-wrapper|image-controls|ProseMirror-|width=|style=/
    );
    expect(html).not.toContain('100%');
  });

  it('drops empty presentation code blocks and keeps the real code block', () => {
    const html = renderClipboardHtml(
      [
        '<p>进入：</p>',
        '<pre aria-hidden="true"><code>\u200b</code></pre>',
        '<pre><code data-language="text">CPU<br>↓<br>关联的句柄</code></pre>',
        '<p>右侧搜索框输入：</p>',
        '<pre><code></code></pre>',
        '<pre><code>.codex</code></pre>'
      ].join('')
    );

    expect(html.match(/<pre>/g)).toHaveLength(2);
    expect(html).toContain(
      '<code class="language-text">CPU\n↓\n关联的句柄\n</code>'
    );
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
    const html = renderClipboardHtml(
      '<pre class="lang-shell"><span class="line">pnpm typecheck</span><span class="line">pnpm test</span></pre>'
    );

    expect(html).toContain(
      '<pre><code class="language-shell">pnpm typecheck\npnpm test\n</code></pre>'
    );
  });

  it('canonicalizes loose rich-text lists without blank list paragraphs', () => {
    const html = renderClipboardHtml(
      [
        '<p>如果看到：</p>',
        '<ul>',
        '  <li>\n<p><br>codex.exe</p>\n</li>',
        '  <li>\n<p>node.exe</p>\n</li>',
        '  <li>\n<p>Code.exe</p>\n</li>',
        '</ul>',
        '<p>右键结束对应进程。</p>'
      ].join('')
    );

    expect(html).toContain('<ul>');
    expect(html.match(/<li>/g)).toHaveLength(3);
    expect(html).not.toMatch(/<li>\s*<p>\s*<br>/);
    expect(html).not.toMatch(/<li>\s*<p>\s*<\/p>/);
  });

  it('preserves the other rich-text structures supported by the note editor', () => {
    const html = renderClipboardHtml(
      [
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
      ].join('')
    );

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
