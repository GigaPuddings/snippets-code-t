import { describe, expect, it } from 'vitest';
import { inferSnippetMetadata } from './snippetMetadataInference';

describe('inferSnippetMetadata', () => {
  it('infers Vue component metadata from title and category', () => {
    expect(inferSnippetMetadata({
      title: 'UserCard.vue',
      categoryName: 'Vue Components'
    })).toEqual({
      language: 'vue',
      framework: 'vue',
      kind: 'component'
    });
  });

  it('infers React hook metadata from use-prefixed title', () => {
    expect(inferSnippetMetadata({
      title: 'useVirtualList',
      categoryName: 'React hooks'
    })).toEqual({
      framework: 'react',
      kind: 'hook'
    });
  });

  it('prefers fenced code language when content is available', () => {
    expect(inferSnippetMetadata({
      title: 'Request helper',
      content: '```ts\nexport const request = () => {}\n```',
      categoryName: 'API'
    })).toEqual({
      language: 'ts',
      kind: 'api'
    });
  });

  it('infers style snippets from language or category', () => {
    expect(inferSnippetMetadata({
      title: 'button animation',
      categoryName: 'SCSS style'
    })).toEqual({
      language: 'scss',
      kind: 'style'
    });
  });

  it('infers command snippets from shell categories', () => {
    expect(inferSnippetMetadata({
      title: 'pnpm install command',
      categoryName: 'shell'
    })).toEqual({
      language: 'bash',
      kind: 'command'
    });
  });

  it('infers config snippets from ecosystem config names', () => {
    expect(inferSnippetMetadata({
      title: 'vite config',
      categoryName: 'Vue'
    })).toEqual({
      language: 'ts',
      framework: 'vue',
      kind: 'config'
    });
  });

  it('returns an empty object when there is no useful signal', () => {
    expect(inferSnippetMetadata({
      title: 'Daily notes',
      categoryName: 'Inbox'
    })).toEqual({});
  });
});
