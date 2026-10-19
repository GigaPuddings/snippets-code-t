import { parser, GFM } from '@lezer/markdown';
import { Marked } from 'marked';

const tableParser = parser.configure(GFM);
// Range edits need standard image tokens, independent of preview extensions.
const imageParser = new Marked();

function tableCells(line: string): string[] {
  const cells: string[] = [];
  let start = 0;
  let escaped = false;
  for (let index = 0; index < line.length; index++) {
    const character = line[index];
    if (character === '|' && !escaped) {
      cells.push(line.slice(start, index).trim());
      start = index + 1;
    }
    escaped = character === '\\' && !escaped;
  }
  cells.push(line.slice(start).trim());
  if (line.trimStart().startsWith('|')) cells.shift();
  if (line.trimEnd().endsWith('|') && cells.at(-1) === '') cells.pop();
  return cells;
}

export interface MarkdownTable {
  rows: string[][];
  alignments: Array<'left' | 'center' | 'right' | null>;
}

/** GFM stores alignment per column. An omitted column applies to the table. */
export function alignTable(
  table: MarkdownTable,
  alignment: NonNullable<MarkdownTable['alignments'][number]>,
  column?: number
): MarkdownTable {
  return {
    ...table,
    alignments: table.alignments.map((value, index) =>
      column === undefined || column === index ? alignment : value
    )
  };
}

/** Offsets include neither cell padding nor container prefixes. Escaped pipes
 * are content, not separators. Rows exclude the GFM delimiter line. */
export function tableCellRanges(source: string, prefix = '') {
  let offset = 0;
  return source.split('\n').flatMap((original, index) => {
    const indent = index && original.startsWith(prefix) ? prefix.length : 0;
    const line = original.slice(indent);
    const boundaries = [-1];
    let escaped = false;
    for (let position = 0; position < line.length; position++) {
      if (line[position] === '|' && !escaped) boundaries.push(position);
      escaped = line[position] === '\\' && !escaped;
    }
    boundaries.push(line.length);
    const cells = boundaries.slice(0, -1).map((start, cell) => {
      const end = boundaries[cell + 1];
      const text = line.slice(start + 1, end);
      if (!text.trim()) {
        const position =
          offset + indent + start + 1 + Math.floor(text.length / 2);
        return { from: position, to: position };
      }
      const from =
        offset + indent + start + 1 + (text.match(/^\s*/)?.[0].length || 0);
      return {
        from: Math.min(from, offset + indent + end),
        to: offset + indent + end - (text.match(/\s*$/)?.[0].length || 0)
      };
    });
    if (line.trimStart().startsWith('|')) cells.shift();
    if (
      line.trimEnd().endsWith('|') &&
      boundaries.at(-2) === line.trimEnd().length - 1
    )
      cells.pop();
    for (const cell of cells) cell.to = Math.max(cell.from, cell.to);
    offset += original.length + 1;
    return index === 1 ? [] : [cells];
  });
}

export function escapeTableCell(value: string) {
  return value
    .replace(/\r?\n/g, '<br>')
    .replace(/(\\*)\|/g, (match, slashes: string) =>
      slashes.length % 2 ? match : slashes + '\\|'
    );
}

/** Keep empty cells and escaped pipes while operating only on a parsed GFM table. */
export function parseTable(source: string, prefix = ''): MarkdownTable | null {
  if (prefix)
    source = source
      .split('\n')
      .map((line, index) =>
        index && line.startsWith(prefix) ? line.slice(prefix.length) : line
      )
      .join('\n');
  const table = tableParser.parse(source).topNode.getChild('Table');
  if (!table) return null;
  const rows: string[][] = [];
  let alignments: MarkdownTable['alignments'] = [];
  for (let node = table.firstChild; node; node = node.nextSibling) {
    if (node.name === 'TableHeader' || node.name === 'TableRow') {
      rows.push(tableCells(source.slice(node.from, node.to)));
    } else if (node.name === 'TableDelimiter') {
      alignments = source
        .slice(node.from, node.to)
        .trim()
        .replace(/^\||\|$/g, '')
        .split('|')
        .map((cell) => {
          const trimmed = cell.trim();
          return trimmed.startsWith(':') && trimmed.endsWith(':')
            ? 'center'
            : trimmed.endsWith(':')
              ? 'right'
              : trimmed.startsWith(':')
                ? 'left'
                : null;
        });
    }
  }
  return {
    rows: rows.map((row) =>
      Array.from({ length: alignments.length }, (_, index) => row[index] || '')
    ),
    alignments
  };
}

export function serializeTable(table: MarkdownTable, prefix = ''): string {
  const columns = Math.max(1, ...table.rows.map((row) => row.length));
  const line = (row: string[]) =>
    `| ${Array.from({ length: columns }, (_, index) => row[index] || '').join(' | ')} |`;
  const separator = Array.from({ length: columns }, (_, index) => {
    const alignment = table.alignments[index];
    return alignment
      ? { left: ':---', center: ':---:', right: '---:' }[alignment]
      : '---';
  });
  return [
    line(table.rows[0] || []),
    line(separator),
    ...table.rows.slice(1).map(line)
  ].join('\n' + prefix);
}

export function resizeTable(
  table: MarkdownTable,
  rows: number,
  columns: number
): MarkdownTable {
  return {
    rows: Array.from({ length: Math.max(1, rows) }, (_, row) =>
      Array.from(
        { length: Math.max(1, columns) },
        (_, column) => table.rows[row]?.[column] || ''
      )
    ),
    alignments: Array.from(
      { length: Math.max(1, columns) },
      (_, column) => table.alignments[column] || null
    )
  };
}

export function createTable(rows: number, columns: number) {
  return serializeTable(
    resizeTable({ rows: [], alignments: [] }, rows, columns)
  );
}

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function imageMarkdown(path: string, alt: string, scale: number) {
  return `<img src="${escapeAttribute(path)}" alt="${escapeAttribute(alt)}" data-image-scale="${Math.max(25, Math.min(200, Math.round(scale)))}">`;
}

/** Change only the selected image; never serialize the surrounding document. */
export function scaleImageSource(source: string, scale: number): string {
  const normalized = Math.max(25, Math.min(200, Math.round(scale)));
  if (/^<img\b/i.test(source)) {
    const current =
      /\sdata-image-scale\s*=\s*(?:"(\d+)"|'(\d+)'|(\d+)(?=[\s/>]))/i.exec(
        source
      );
    if (
      current &&
      Number(current[1] ?? current[2] ?? current[3]) === normalized &&
      !/\s(?:width|height)\s*=/i.test(source)
    )
      return source;
    let result = source.replace(
      /\s+(?:width|height|data-image-scale)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,
      ''
    );
    result = result.replace(
      /\s*\/?>(\s*)$/,
      ` data-image-scale="${normalized}">$1`
    );
    return result;
  }
  const image = imageParser.lexer(source)[0];
  if (image?.type !== 'paragraph') return source;
  const token = image.tokens?.find((token) => token.type === 'image');
  if (token?.type !== 'image') return source;
  const imageHtml = imageMarkdown(
    token.href.replace(/\|\d+$/, ''),
    token.text,
    normalized
  );
  return token.title
    ? imageHtml.replace(/>$/, ` title="${escapeAttribute(token.title)}">`)
    : imageHtml;
}
