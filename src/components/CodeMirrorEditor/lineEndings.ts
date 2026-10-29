/** Keep the document's existing convention; new documents use LF. */
export function documentLineSeparator(content: string): string {
  return content.match(/\r\n|\n|\r/)?.[0] || '\n';
}
