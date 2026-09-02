function countStructuralBraces(line: string): {
  opening: number;
  closing: number;
} {
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

function countLeadingClosingGroups(line: string): number {
  const match = line.match(/^[)\]]+/);
  return match?.[0].length ?? 0;
}

const VOID_JSX_TAGS = new Set([
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

function countLeadingClosingTags(line: string): number {
  const match = line.match(/^(?:<\/(?:[A-Za-z][\w:.-]*|)>)+/);
  return match ? (match[0].match(/<\//g) ?? []).length : 0;
}

function countJsxTagDelta(line: string): number {
  const tagPattern = /<\/?([A-Za-z][\w:.-]*)\b[^<>]*>|<\/>|<>/g;
  let delta = 0;
  let match: RegExpExecArray | null;

  while ((match = tagPattern.exec(line)) !== null) {
    const tag = match[0];
    const tagName = match[1]?.toLowerCase() ?? '';

    if (tag === '<>') {
      delta++;
    } else if (tag === '</>' || tag.startsWith('</')) {
      delta--;
    } else if (!tag.endsWith('/>') && !VOID_JSX_TAGS.has(tagName)) {
      delta++;
    }
  }

  return delta;
}

function normalizeFragmentLine(line: string): string {
  return line.replace(/\)\s*\{\s*$/, ') {');
}

function opensExpressionContinuation(line: string): boolean {
  return /(?:\(|\[|=>)\s*$/.test(line);
}

function opensMultilineJsxExpression(line: string): boolean {
  return /^\{[\s\S]*(?:\(|=>)\s*$/.test(line);
}

function closesMultilineJsxExpression(line: string): boolean {
  return /^[)\]]+\s*\}/.test(line);
}

/**
 * 为无法独立解析的 JS/TS 代码片段提供无损的缩进回退。
 * 不重排语句或改写标记，只依据大括号和 JSX/HTML 标签恢复阅读友好的层级。
 */
export function formatIncompleteJavaScript(code: string, tabSize = 2): string {
  const normalizedCode = code.replace(/\r\n?/g, '\n');
  const indentation = ' '.repeat(Math.max(1, tabSize));
  let braceLevel = 0;
  let tagLevel = 0;
  let groupLevel = 0;

  const formattedLines = normalizedCode.split('\n').map((rawLine) => {
    const line = normalizeFragmentLine(rawLine.trim());
    if (!line) return '';

    const leadingClosures = countLeadingClosingBraces(line);
    const leadingGroupClosures = countLeadingClosingGroups(line);
    const leadingClosingTags = countLeadingClosingTags(line);
    braceLevel = Math.max(0, braceLevel - leadingClosures);
    groupLevel = Math.max(0, groupLevel - leadingGroupClosures);
    tagLevel = Math.max(0, tagLevel - leadingClosingTags);
    const level = braceLevel + tagLevel + groupLevel;
    const result = `${indentation.repeat(level)}${line}`;
    const { opening, closing } = countStructuralBraces(line);
    const jsxExpressionOpening = opensMultilineJsxExpression(line) ? 1 : 0;
    const jsxExpressionClosing = closesMultilineJsxExpression(line) ? 1 : 0;
    braceLevel = Math.max(
      0,
      braceLevel +
        Math.max(0, opening - jsxExpressionOpening) -
        Math.max(0, closing - leadingClosures - jsxExpressionClosing)
    );
    tagLevel = Math.max(
      0,
      tagLevel + countJsxTagDelta(line) + leadingClosingTags
    );
    groupLevel += opensExpressionContinuation(line) ? 1 : 0;
    return result;
  });

  const formatted = formattedLines
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd();
  return normalizedCode.endsWith('\n') ? `${formatted}\n` : formatted;
}
