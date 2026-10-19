import { describe, expect, it } from 'vitest';
import { markdownToHtml, renderNoteMarkdown } from '@/utils/markdown';

describe('Markdown reading view', () => {
  it('renders navigable wiki links without changing the legacy importer', () => {
    const source = '[[Java]] and `[[literal]]`\n\n```\n[[code]]\n```';
    const html = renderNoteMarkdown(source, '', '');
    expect(html).toContain('data-note-name="Java"');
    expect(html).not.toContain('data-note-name="literal"');
    expect(html).not.toContain('data-note-name="code"');
    expect(markdownToHtml('[[Java]]')).not.toContain('data-note-name');
    expect(markdownToHtml('[[Java]]')).toContain('[[Java]]');
  });

  it('escapes wiki link titles and leaves escaped markers as text', () => {
    const html = renderNoteMarkdown('[[A" & <B>]] \\[[plain]]', '', '');
    expect(html).toContain('data-note-name="A&quot; &amp; &lt;B&gt;"');
    expect(html).not.toContain('data-note-name="plain"');
    expect(html).not.toContain('<B>');
  });

  it('renders one disabled checkbox per loose task item', () => {
    const html = renderNoteMarkdown('- [ ] one\n\n- [x] two', '', '');
    expect(html.match(/type="checkbox"/g)).toHaveLength(2);
    expect(html.match(/type="checkbox" disabled/g)).toHaveLength(2);
    expect(html).toContain('checked');
  });
});
