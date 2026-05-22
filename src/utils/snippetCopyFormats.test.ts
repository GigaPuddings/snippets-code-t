import { describe, expect, it } from 'vitest';
import { formatSnippetForCopy } from './snippetCopyFormats';

describe('formatSnippetForCopy', () => {
  it('returns raw content with normalized newlines', () => {
    expect(formatSnippetForCopy('raw', {
      title: 'Use Fetch',
      content: 'const a = 1\r\nconst b = 2'
    })).toBe('const a = 1\nconst b = 2');
  });

  it('wraps content as markdown fenced code with language alias', () => {
    expect(formatSnippetForCopy('markdown', {
      title: 'Use Fetch',
      language: 'typescript',
      content: 'const a = 1'
    })).toBe('```ts\nconst a = 1\n```');
  });

  it('creates VS Code snippet JSON', () => {
    expect(JSON.parse(formatSnippetForCopy('vscode', {
      title: 'Use Fetch',
      content: 'const loading = true\nreturn loading'
    }))).toEqual({
      'Use Fetch': {
        prefix: 'use-fetch',
        body: [
          'const loading = true',
          'return loading'
        ],
        description: 'Use Fetch'
      }
    });
  });

  it('uses stable defaults for untitled snippets', () => {
    expect(JSON.parse(formatSnippetForCopy('vscode', {
      title: '',
      content: 'console.log(1)'
    }))).toEqual({
      'Untitled Snippet': {
        prefix: 'untitled-snippet',
        body: ['console.log(1)'],
        description: 'Untitled Snippet'
      }
    });
  });
});
