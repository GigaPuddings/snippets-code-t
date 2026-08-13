import { describe, expect, it } from 'vitest';
import type { MarkdownFile } from '@/types/models';
import { buildFragmentTypeConversionUpdate } from './fragmentTypeConversion';

const currentFile: MarkdownFile = {
  id: 'fragment-id',
  title: 'Current title',
  content: 'current content',
  categoryId: 1,
  categoryName: 'Code',
  tags: ['vue'],
  created: '2026-01-01T00:00:00.000Z',
  modified: '2026-01-01T00:00:00.000Z',
  type: 'code',
  language: 'typescript',
  framework: 'vue',
  kind: 'component',
  favorite: true,
  filePath: 'Code/Current title.md'
};

describe('buildFragmentTypeConversionUpdate', () => {
  it('changes the type while preserving disk metadata', () => {
    expect(buildFragmentTypeConversionUpdate(currentFile, 'note')).toEqual({
      content: 'current content',
      metadata: {
        title: 'Current title',
        tags: ['vue'],
        type: 'note',
        language: 'typescript',
        framework: 'vue',
        kind: 'component',
        favorite: true
      }
    });
  });

  it('uses unsaved editor fields without dropping untouched metadata', () => {
    expect(
      buildFragmentTypeConversionUpdate(currentFile, 'note', {
        title: 'Draft title',
        content: '```ts\nconst value = 1;\n```',
        tags: ['draft'],
        metadata: { language: 'tsx' }
      })
    ).toEqual({
      content: '```ts\nconst value = 1;\n```',
      metadata: {
        title: 'Draft title',
        tags: ['draft'],
        type: 'note',
        language: 'tsx',
        framework: 'vue',
        kind: 'component',
        favorite: true
      }
    });
  });
});
