import { describe, expect, it, vi } from 'vitest';
vi.mock('@tauri-apps/api/core', () => ({
  convertFileSrc: (path: string) =>
    'https://asset.localhost/' + encodeURIComponent(path.replace(/\\/g, '/'))
}));
import { renderNoteMarkdown } from '@/utils/markdown';

describe('note reading paths', () => {
  it('keeps image titles out of file paths while supporting legacy pipe widths', () => {
    const html = renderNoteMarkdown(
      '![图](images/a.png "说明")\n\n![旧图](../assets/QA/old.png|320)',
      'C:/Workspace',
      '分类/note.md'
    );
    expect(html).toContain(
      encodeURIComponent('C:/Workspace/分类/images/a.png')
    );
    expect(html).toContain('title="说明"');
    expect(html).toContain('data-original-path="images/a.png"');
    expect(html).toContain(
      encodeURIComponent('C:/Workspace/assets/QA/old.png')
    );
    expect(html).toContain('width="320"');
  });

  it('resolves standard relative images against the note directory and legacy assets against the workspace', () => {
    const source =
      '![local](images/图.png)\n\n<img src="../assets/Java/图.png" data-image-scale="75">';
    const html = renderNoteMarkdown(
      source,
      'C:/Workspace',
      '分类/子分类/Java.md'
    );
    expect(html).toContain(
      encodeURIComponent('C:/Workspace/分类/子分类/images/图.png')
    );
    expect(html).toContain(
      encodeURIComponent('C:/Workspace/assets/Java/图.png')
    );
    expect(html).toContain('data-image-scale="75"');
    expect(html).toContain('data-original-path="../assets/Java/图.png"');
  });

  it('retains malformed percent characters in filenames and escapes HTML attributes', () => {
    expect(() =>
      renderNoteMarkdown(
        '<img src="images/100%.png">',
        'C:/Workspace',
        'Java.md'
      )
    ).not.toThrow();
    const html = renderNoteMarkdown(
      '<img src="images/a.png" onerror="alert(1)"><script>alert(1)</script>',
      'C:/Workspace',
      'Java.md'
    );
    expect(html).not.toContain('onerror');
    expect(html).not.toContain('<script');
  });
});
