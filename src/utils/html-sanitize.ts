import DOMPurify from 'dompurify';

const sanitizerConfig = {
  ADD_ATTR: [
    'checked',
    'class',
    'data-checked',
    'data-original-path',
    'data-type',
    'data-code-id',
    'id',
    'rel',
    'target',
    'title',
    'type',
    'width'
  ],
  FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
  FORBID_ATTR: ['style']
};

export function sanitizeHtml(html: string): string {
  if (!html) return '';

  if (typeof window === 'undefined') {
    return html
      .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
      .replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
      .replace(
        /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
        ''
      );
  }

  return DOMPurify.sanitize(html, sanitizerConfig);
}
