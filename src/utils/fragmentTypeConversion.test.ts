import { describe, expect, it } from 'vitest';
import { convertFragmentContent } from './fragmentTypeConversion';

describe('convertFragmentContent', () => {
  it('wraps a snippet in a fenced Markdown block with its language', () => {
    expect(
      convertFragmentContent('const value = 1;', 'code', 'note', 'ts')
    ).toBe('```ts\nconst value = 1;\n```');
  });

  it('uses a longer fence when the snippet already contains backtick fences', () => {
    expect(convertFragmentContent('```\nvalue\n```', 'code', 'note')).toBe(
      '````\n```\nvalue\n```\n````'
    );
  });

  it('converts Markdown notes to plain text snippets', () => {
    expect(
      convertFragmentContent('# Title\n\n**Hello** world', 'note', 'code')
    ).toBe('Title\n\nHello world');
  });

  it('does not change content when source and target types match', () => {
    expect(convertFragmentContent('raw content', 'code', 'code')).toBe(
      'raw content'
    );
  });
});
