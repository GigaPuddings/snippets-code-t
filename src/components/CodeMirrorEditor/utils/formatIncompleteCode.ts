function countStructuralBraces(line: string): { opening: number; closing: number } {
  let opening = 0;
  let closing = 0;
  let quote: '"' | "'" | '`' | null = null;
  let escaped = false;

  for (let index = 0; index < line.length; index++) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === '\\') {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
      continue;
    }

    if (character === '/' && nextCharacter === '/') break;
    if (character === '"' || character === "'" || character === '`') {
      quote = character;
      continue;
    }
    if (character === '{') opening++;
    if (character === '}') closing++;
  }

  return { opening, closing };
}

function countLeadingClosingBraces(line: string): number {
  const match = line.match(/^}+/);
  return match?.[0].length ?? 0;
}

function normalizeFragmentLine(line: string): string {
  return line.replace(/\)\s*\{\s*$/, ') {');
}

/**
 * 为无法独立解析的 JS/TS 代码片段提供无损的缩进回退。
 * 不重排语句或改写标记，只依据大括号恢复阅读友好的层级。
 */
export function formatIncompleteJavaScript(code: string, tabSize = 2): string {
  const normalizedCode = code.replace(/\r\n?/g, '\n');
  const indentation = ' '.repeat(Math.max(1, tabSize));
  let level = 0;

  const formattedLines = normalizedCode.split('\n').map((rawLine) => {
    const line = normalizeFragmentLine(rawLine.trim());
    if (!line) return '';

    const leadingClosures = countLeadingClosingBraces(line);
    level = Math.max(0, level - leadingClosures);
    const result = `${indentation.repeat(level)}${line}`;
    const { opening, closing } = countStructuralBraces(line);
    level = Math.max(0, level + opening - Math.max(0, closing - leadingClosures));
    return result;
  });

  const formatted = formattedLines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd();
  return normalizedCode.endsWith('\n') ? `${formatted}\n` : formatted;
}
