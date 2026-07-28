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

const ENHANCEMENT_PROMPTS = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
} as const;

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

export const buildPromptEnhancementRequest = (
  source: string,
  retryForChinese = false
) => {
  const sourceIsChinese = requiresChineseEnhancedPrompt(source);
  const languageRetry =
    sourceIsChinese && retryForChinese
      ? '\n上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。'
      : '';

  return {
    systemPrompt: `${
      sourceIsChinese ? ENHANCEMENT_PROMPTS.zh : ENHANCEMENT_PROMPTS.en
    }${languageRetry}`,
    userPrompt: sourceIsChinese
      ? `改写以下原文：\n<原文>\n${source}\n</原文>`
      : `Rewrite the following source:\n<source>\n${source}\n</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(source.length * 1.4)))
  };
};

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
