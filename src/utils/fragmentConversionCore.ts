const HTML_ENTITIES: Record<string, string> = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"'
};

function decodeHtmlEntities(value: string): string {
  return value.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (entity, code: string) => {
    if (code.startsWith('#x')) {
      return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    }
    if (code.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    }
    return HTML_ENTITIES[code.toLowerCase()] ?? entity;
  });
}

/** 将代码正文包装为 Markdown 围栏代码块。 */
export function convertCodeToNote(content: string, language?: string): string {
  const longestFence = Math.max(
    2,
    ...Array.from(content.matchAll(/`{3,}/g), (match) => match[0].length)
  );
  const fence = '`'.repeat(longestFence + 1);
  return `${fence}${language || ''}\n${content}\n${fence}`;
}

/** 将笔记 HTML 去除格式并保留可读的段落换行。 */
export function convertNoteHtmlToCode(htmlContent: string): string {
  const withLineBreaks = htmlContent
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(
      /<\/(?:address|article|aside|blockquote|div|h[1-6]|li|p|pre|section|tr)>/gi,
      '\n'
    );
  const withoutTags = withLineBreaks.replace(/<[^>]*>/g, '');

  return decodeHtmlEntities(withoutTags)
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
