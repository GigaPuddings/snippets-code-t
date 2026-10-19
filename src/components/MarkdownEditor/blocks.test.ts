import { describe, expect, it } from 'vitest';
import { renderNoteMarkdown } from '@/utils/markdown';
import {
  createTable,
  parseTable,
  resizeTable,
  scaleImageSource,
  serializeTable,
  tableCellRanges,
  escapeTableCell,
  alignTable
} from './blocks';

describe('Markdown block editing', () => {
  it.each(['left', 'center', 'right'] as const)(
    'applies %s to the whole table and retains cell content in Markdown',
    (alignment) => {
      const table: NonNullable<ReturnType<typeof parseTable>> = {
        rows: [
          ['A', 'B', 'C'],
          ['a\\|b', '**bold**', '<br>']
        ],
        alignments: [null, 'center', 'right']
      };
      const aligned = alignTable(table, alignment);
      expect(aligned.alignments).toEqual([alignment, alignment, alignment]);
      expect(parseTable(serializeTable(aligned))).toEqual(aligned);
      expect(aligned.rows).toEqual(table.rows);
      expect(table.alignments).toEqual([null, 'center', 'right']);
    }
  );

  it('keeps other columns aligned independently after a whole-table operation', () => {
    const table = { rows: [['A', 'B', 'C']], alignments: [null, null, null] };
    const centered = alignTable(table, 'center');
    const aligned = alignTable(centered, 'right', 1);
    expect(aligned.alignments).toEqual(['center', 'right', 'center']);
    expect(centered.alignments).toEqual(['center', 'center', 'center']);
    expect(parseTable(serializeTable(aligned))).toEqual(aligned);
  });
  it.each([
    '| A | B |\n| --- | --- |\n| a\\|b |  |',
    'A | B\n--- | ---\na\\|b |  |',
    '| A | B |\n> | --- | --- |\n> | a\\|b |  |'
  ])('maps editable cells to exact source slices: %s', (source) => {
    const prefix = source.includes('> ') ? '> ' : '';
    const ranges = tableCellRanges(source, prefix);
    expect(
      ranges.map((row) => row.map((cell) => source.slice(cell.from, cell.to)))
    ).toEqual([
      ['A', 'B'],
      ['a\\|b', '']
    ]);
    const cell = ranges[1][0];
    const updated =
      source.slice(0, cell.from) + '修改\\|内容' + source.slice(cell.to);
    expect(parseTable(updated, prefix)?.rows).toEqual([
      ['A', 'B'],
      ['修改\\|内容', '']
    ]);
  });

  it('protects literal pipes and multiline paste without double escaping existing pipes', () => {
    expect(escapeTableCell('a|b\\|c\\\\|d\n下一行')).toBe(
      'a\\|b\\|c\\\\\\|d<br>下一行'
    );
    expect(escapeTableCell(escapeTableCell('a|b'))).toBe('a\\|b');
    expect(
      parseTable('| A |\n| --- |\n| ' + escapeTableCell('a|b\n下一行') + ' |')
        ?.rows[1]
    ).toEqual(['a\\|b<br>下一行']);
  });
  it('retains escaped pipes, inline code, alignment and existing cells when resizing', () => {
    const table = parseTable('| A | B |\n| --- | :---: |\n| a\\|b | `code` |');
    expect(table).toEqual({
      rows: [
        ['A', 'B'],
        ['a\\|b', '`code`']
      ],
      alignments: [null, 'center']
    });
    const resized = resizeTable(table!, 3, 3);
    expect(parseTable(serializeTable(resized))).toEqual(resized);
    expect(createTable(2, 2)).toBe('|  |  |\n| --- | --- |\n|  |  |');
  });

  it('updates scale without changing paths, alt text or unrelated image attributes', () => {
    // Rendering registers the application's marked extensions before resizing.
    expect(
      renderNoteMarkdown('![图](../assets/Java/image.png "说明")', '', '')
    ).toContain('<img');
    expect(
      scaleImageSource(
        '<img src="../assets/Java/image.png" alt="图" title="说明" width="200" data-image-scale="100">',
        75
      )
    ).toBe(
      '<img src="../assets/Java/image.png" alt="图" title="说明" data-image-scale="75">'
    );
    expect(
      scaleImageSource('![图](../assets/Java/image.png "说明")', 125)
    ).toBe(
      '<img src="../assets/Java/image.png" alt="图" data-image-scale="125" title="说明">'
    );
    expect(scaleImageSource('not an image', 125)).toBe('not an image');
  });

  it('replaces legacy pipe-width metadata without changing the image path', () => {
    expect(scaleImageSource('![图](../assets/Java/image.png|320)', 50)).toBe(
      '<img src="../assets/Java/image.png" alt="图" data-image-scale="50">'
    );
  });

  it('keeps identical image scales byte-for-byte without retaining conflicting dimensions', () => {
    const source = '<img src="a.png" data-image-scale="50" title="说明">';
    expect(scaleImageSource(source, 50)).toBe(source);
    expect(
      scaleImageSource(source.replace('>', ' width="300">'), 50)
    ).not.toContain('width=');
  });

  it('keeps blockquote prefixes when changing a nested table', () => {
    const source = '| A | B |\n> | --- | --- |\n> | a | b |';
    const table = parseTable(source, '> ');
    expect(table?.rows).toEqual([
      ['A', 'B'],
      ['a', 'b']
    ]);
    expect(serializeTable(resizeTable(table!, 3, 2), '> ')).toBe(
      source + '\n> |  |  |'
    );
  });
});
