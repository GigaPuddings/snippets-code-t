import {
  createTurndownService,
  htmlToMarkdown,
  shouldPreferMarkdownClipboardText
} from '@/utils/markdown';
import { sanitizeHtml } from '@/utils/html-sanitize';

/** Preserve Markdown sources and code; keep rich formatting from browser copies. */
export function markdownClipboardText(
  data: Pick<DataTransfer, 'getData'>,
  inCode = false
): string {
  const explicit = data.getData('text/markdown');
  const text = data.getData('text/plain');
  if (inCode) return text || explicit;
  if (explicit.trim()) return explicit;
  const html = data.getData('text/html');
  if (!html || shouldPreferMarkdownClipboardText(text, html)) return text;
  const fragment =
    html.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i)?.[1] ||
    html;
  return (
    htmlToMarkdown(sanitizeHtml(fragment), createTurndownService()) || text
  );
}
