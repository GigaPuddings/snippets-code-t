export type SnippetCopyFormat = 'raw' | 'markdown' | 'vscode';

interface SnippetCopyFormatInput {
  title: string;
  content: string;
  language?: string;
}

const normalizeLanguage = (language?: string): string => {
  const value = language?.trim().toLowerCase();
  if (!value) return '';
  if (value === 'typescript') return 'ts';
  if (value === 'javascript') return 'js';
  if (value === 'shell' || value === 'sh') return 'bash';
  return value;
};

const getSnippetPrefix = (title: string): string => {
  const prefix = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return prefix || 'snippet';
};

const createVsCodeSnippet = ({ title, content }: SnippetCopyFormatInput): string => {
  const snippetTitle = title.trim() || 'Untitled Snippet';
  return JSON.stringify({
    [snippetTitle]: {
      prefix: getSnippetPrefix(snippetTitle),
      body: content.replace(/\r\n/g, '\n').split('\n'),
      description: snippetTitle
    }
  }, null, 2);
};

export function formatSnippetForCopy(format: SnippetCopyFormat, input: SnippetCopyFormatInput): string {
  const content = input.content.replace(/\r\n/g, '\n');

  if (format === 'markdown') {
    const language = normalizeLanguage(input.language);
    return `\`\`\`${language}\n${content}\n\`\`\``;
  }

  if (format === 'vscode') {
    return createVsCodeSnippet({
      ...input,
      content
    });
  }

  return content;
}
