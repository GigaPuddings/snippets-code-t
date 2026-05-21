import { describe, expect, it } from 'vitest';
import {
  filterToSearchText,
  parseSearchText,
  validateSearchSyntax
} from './searchParser';

describe('searchParser', () => {
  it('parses frontend semantic filters and keeps remaining text', () => {
    expect(
      parseSearchText('modal type:code lang:TS framework:Vue kind:Component')
    ).toEqual({
      text: 'modal',
      type: 'code',
      language: 'ts',
      framework: 'vue',
      kind: 'component'
    });
  });

  it('supports language alias and keeps the last repeated semantic filter', () => {
    expect(parseSearchText('language:vue lang:tsx framework:react')).toEqual({
      language: 'tsx',
      framework: 'react'
    });
  });

  it('parses tags and date presets', () => {
    expect(parseSearchText('tag:vue tag:modal created:week updated:month')).toEqual({
      tags: ['vue', 'modal'],
      createdPreset: 'week',
      updatedPreset: 'month'
    });
  });

  it('round-trips semantic filters to canonical search text', () => {
    expect(
      filterToSearchText({
        text: 'button',
        type: 'code',
        tags: ['ui'],
        language: 'tsx',
        framework: 'react',
        kind: 'component'
      })
    ).toBe('button type:code tag:ui lang:tsx framework:react kind:component');
  });

  it('validates malformed dates', () => {
    expect(validateSearchSyntax('created:2026-99-99')).toEqual({
      valid: false,
      errors: ['Invalid date format: 2026-99-99']
    });
  });
});
