import { marked } from 'marked';
import { sanitizeHtml } from '@/utils/html-sanitize';

/** Keep finished Markdown blocks mounted while the current block grows. */
export function createStreamingMarkdownRenderer() {
  const settled: string[] = [];
  let offset = 0;
  let previous = '';
  let needsWholeDocument = false;

  return (source: string): string[] => {
    if (!source.startsWith(previous)) {
      settled.length = 0;
      offset = 0;
      needsWholeDocument = false;
    }
    previous = source;
    if (needsWholeDocument) {
      return [sanitizeHtml(marked.parse(source, { async: false }))];
    }
    const tail = source.slice(offset);
    const tokens = marked.lexer(tail);
    // References can resolve earlier links, and raw HTML can span blocks.
    // Keep full-document parsing for those cases, including sanitization.
    if (
      Object.keys(tokens.links).length ||
      tokens.some((t) => t.type === 'html')
    ) {
      needsWholeDocument = true;
      settled.length = 0;
      return [sanitizeHtml(marked.parse(source, { async: false }))];
    }

    // Marked keeps nested lists, quotes and fences together. A heading
    // consumes its trailing newline, so a separate space token isn't required.
    let boundary = tokens.length - 1;
    while (boundary > 0 && tokens[boundary].type === 'space') boundary--;
    if (boundary > 0) {
      const remainder = tokens.slice(boundary);
      const raw = remainder.map((token) => token.raw).join('');
      // Marked normalizes some whitespace. Only advance at an exact offset.
      if (raw && tail.endsWith(raw)) {
        settled.push(sanitizeHtml(marked.parser(tokens.slice(0, boundary))));
        offset = source.length - raw.length;
        return [...settled, sanitizeHtml(marked.parser(remainder))];
      }
    }
    return [...settled, sanitizeHtml(marked.parser(tokens))];
  };
}
