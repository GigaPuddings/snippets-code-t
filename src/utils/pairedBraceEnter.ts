export interface PairedBraceEnterEdit {
  insert: string;
  cursorOffset: number;
}

const PAIRS: Record<string, string> = {
  '{': '}',
  '[': ']',
  '(': ')'
};

const VOID_HTML_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]);

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getLineIndent(line: string): string {
  return line.match(/^[ \t]*/)?.[0] ?? '';
}

function getOpeningTagName(lineBeforeCursor: string): string | null {
  const trimmed = lineBeforeCursor.trimEnd();
  if (trimmed.endsWith('/>')) return null;
  if (trimmed.endsWith('<>')) return '';

  const match = trimmed.match(/<([A-Za-z][\w:.-]*)(?:\s[^<>]*)?>$/);
  if (!match) return null;

  const tagName = match[1];
  if (VOID_HTML_TAGS.has(tagName.toLowerCase())) return null;
  return tagName;
}

function startsWithClosingTag(lineAfterCursor: string, tagName: string): boolean {
  const trimmed = lineAfterCursor.trimStart();
  if (tagName === '') return trimmed.startsWith('</>');
  return new RegExp(`^</\\s*${escapeRegExp(tagName)}\\s*>`).test(trimmed);
}

function getOpeningDelimiter(lineBeforeCursor: string): string | null {
  const lastNonWhitespace = lineBeforeCursor.trimEnd().at(-1);
  return lastNonWhitespace && PAIRS[lastNonWhitespace] ? lastNonWhitespace : null;
}

export function createPairedBraceEnterEdit(
  text: string,
  cursor: number,
  indentText: string
): PairedBraceEnterEdit | null {
  if (cursor < 0 || cursor > text.length) return null;

  const leftText = text.slice(0, cursor);
  const rightText = text.slice(cursor);
  const lineStart = leftText.lastIndexOf('\n') + 1;
  const nextLineBreak = rightText.indexOf('\n');
  const lineBeforeCursor = leftText.slice(lineStart);
  const lineAfterCursor =
    nextLineBreak >= 0 ? rightText.slice(0, nextLineBreak) : rightText;
  const baseIndent = getLineIndent(lineBeforeCursor);
  const innerIndent = `${baseIndent}${indentText}`;

  const openingTagName = getOpeningTagName(lineBeforeCursor);
  if (openingTagName !== null) {
    const pairedTag = startsWithClosingTag(lineAfterCursor, openingTagName);
    return {
      insert: pairedTag ? `\n${innerIndent}\n${baseIndent}` : `\n${innerIndent}`,
      cursorOffset: 1 + innerIndent.length
    };
  }

  const openingDelimiter = getOpeningDelimiter(lineBeforeCursor);
  if (!openingDelimiter) return null;

  const pairedDelimiter =
    lineAfterCursor.trimStart().startsWith(PAIRS[openingDelimiter]);

  return {
    insert: pairedDelimiter ? `\n${innerIndent}\n${baseIndent}` : `\n${innerIndent}`,
    cursorOffset: 1 + innerIndent.length
  };
}
