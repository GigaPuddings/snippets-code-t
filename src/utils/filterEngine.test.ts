import { describe, expect, it } from 'vitest';
import { applyFilter, matchesFilter } from './filterEngine';

const createFragment = (overrides: Partial<ContentType>): ContentType => ({
  id: overrides.id ?? 'item',
  title: overrides.title ?? 'Untitled',
  content: overrides.content ?? '',
  type: overrides.type ?? 'code',
  tags: overrides.tags ?? [],
  category_name: overrides.category_name,
  metadata: overrides.metadata,
  created_at: overrides.created_at,
  updated_at: overrides.updated_at
});

describe('filterEngine', () => {
  it('matches language, framework, and kind from metadata', () => {
    const fragment = createFragment({
      metadata: {
        language: 'tsx',
        framework: 'react',
        kind: 'component'
      }
    });

    expect(
      matchesFilter(fragment, {
        language: 'tsx',
        framework: 'react',
        kind: 'component'
      })
    ).toBe(true);
  });

  it('uses tags and category as semantic filter fallbacks', () => {
    const fragment = createFragment({
      tags: ['vue', 'component'],
      category_name: 'vue'
    });

    expect(
      matchesFilter(fragment, {
        framework: 'vue',
        kind: 'component'
      })
    ).toBe(true);
  });

  it('rejects fragments that miss semantic filters', () => {
    const fragment = createFragment({
      metadata: {
        language: 'ts',
        framework: 'vue',
        kind: 'hook'
      }
    });

    expect(matchesFilter(fragment, { framework: 'react' })).toBe(false);
    expect(matchesFilter(fragment, { kind: 'component' })).toBe(false);
  });

  it('applies text, type, tag, and semantic filters together', () => {
    const fragments = [
      createFragment({
        id: 'match',
        title: 'use modal',
        type: 'code',
        tags: ['ui'],
        metadata: {
          language: 'ts',
          framework: 'vue',
          kind: 'hook'
        }
      }),
      createFragment({
        id: 'wrong-framework',
        title: 'use modal',
        type: 'code',
        tags: ['ui'],
        metadata: {
          language: 'ts',
          framework: 'react',
          kind: 'hook'
        }
      }),
      createFragment({
        id: 'wrong-type',
        title: 'use modal',
        type: 'note',
        tags: ['ui'],
        metadata: {
          language: 'ts',
          framework: 'vue',
          kind: 'hook'
        }
      })
    ];

    expect(
      applyFilter(fragments, {
        text: 'modal',
        type: 'code',
        tags: ['ui'],
        language: 'ts',
        framework: 'vue',
        kind: 'hook'
      }).map((fragment) => fragment.id)
    ).toEqual(['match']);
  });

  it('sorts filtered results by updated time', () => {
    const fragments = [
      createFragment({
        id: 'old',
        title: 'Button',
        updated_at: '2026-01-01T00:00:00.000Z'
      }),
      createFragment({
        id: 'new',
        title: 'Button',
        updated_at: '2026-02-01T00:00:00.000Z'
      })
    ];

    expect(
      applyFilter(fragments, {
        text: 'button',
        sortBy: 'updated',
        sortOrder: 'desc'
      }).map((fragment) => fragment.id)
    ).toEqual(['new', 'old']);
  });
});
