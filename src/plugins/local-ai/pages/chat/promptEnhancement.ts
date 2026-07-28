const PROMPT_LABEL =
  /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i;

const PROMPT_PREFACE =
  /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i;

const TRAILING_COMMENTARY =
  /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i;

const TRAILING_SUMMARY =
  /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i;

const isMarkdownTableSeparator = (value: string): boolean =>
  /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(value);

const ORDERED_PROMPT_ITEM = /^\s*(\d+)(?:[.)]\s+|、\s*)/;

const unwrapMarkdown = (value: string): string =>
  value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
    .replace(/`([^`\n]+)`/g, '$1')
    .replace(/\*\*([^*\n]+)\*\*/g, '$1')
    .replace(/__([^_\n]+)__/g, '$1')
    .replace(/~~([^~\n]+)~~/g, '$1')
    .replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, '$1$2')
    .replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, '$1$2');

const keepCorrectedTerms = (value: string): string =>
  value
    .replace(
      /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
      '$1'
    )
    .replace(
      /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
      '$1使用 $3'
    )
    .replace(
      /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
      '$1use $3'
    );

const normalizeMarkdownLine = (line: string): string => {
  const withoutBlockSyntax = line
    .replace(/^\s{0,3}#{1,6}\s+/, '')
    .replace(/^\s{0,3}>\s?/, '');
  const orderedItem = withoutBlockSyntax.match(ORDERED_PROMPT_ITEM);
  const orderedPrefix = orderedItem ? `${orderedItem[1]}、` : '';
  const withoutListSyntax = withoutBlockSyntax
    .replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, '')
    .replace(/^\s*[-+*]\s+/, '')
    .replace(ORDERED_PROMPT_ITEM, '');

  if (isMarkdownTableSeparator(withoutListSyntax)) {
    return '';
  }

  const tableCells = withoutListSyntax.trim();
  if (tableCells.startsWith('|') && tableCells.endsWith('|')) {
    return tableCells
      .slice(1, -1)
      .split('|')
      .map((cell) => cell.trim())
      .filter(Boolean)
      .join('；');
  }

  return `${orderedPrefix}${keepCorrectedTerms(
    unwrapMarkdown(withoutListSyntax)
  ).trimEnd()}`;
};

const isLeadingNoise = (line: string, hasContent: boolean): boolean => {
  if (hasContent) return false;
  return !line || PROMPT_PREFACE.test(line);
};

const isTrailingCommentary = (line: string, hasContent: boolean): boolean =>
  hasContent && TRAILING_COMMENTARY.test(line);

const normalizeFirstPromptLine = (line: string, hasContent: boolean): string =>
  (hasContent ? line : line.replace(PROMPT_LABEL, '')).trim();

const shouldAppendLine = (line: string, previous?: string): boolean =>
  Boolean(line || previous);

export const requiresChineseEnhancedPrompt = (source: string): boolean =>
  /[\u3400-\u9fff]/.test(source);

export const hasRequiredEnhancedPromptLanguage = (
  source: string,
  result: string
): boolean =>
  !requiresChineseEnhancedPrompt(source) ||
  requiresChineseEnhancedPrompt(result);

export const normalizeEnhancedPrompt = (value: string): string => {
  const withoutThinking = value
    .replace(/^[\s\S]*?<\/think>\s*/i, '')
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/^\s*```(?:markdown|md|text)?\s*$/gim, '')
    .replace(/^\s*```\s*$/gim, '')
    .replace(/\r\n?/g, '\n')
    .trim();

  const lines = withoutThinking.split('\n');
  const normalized: string[] = [];

  for (const rawLine of lines) {
    if (isMarkdownTableSeparator(rawLine)) continue;
    const plainLine = normalizeMarkdownLine(rawLine).trim();
    const hasContent = normalized.length > 0;
    if (isLeadingNoise(plainLine, hasContent)) continue;
    if (isTrailingCommentary(plainLine, hasContent)) break;
    if (TRAILING_SUMMARY.test(plainLine)) continue;

    const line = normalizeFirstPromptLine(plainLine, hasContent);
    if (shouldAppendLine(line, normalized.at(-1))) normalized.push(line);
  }

  return normalized
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};
