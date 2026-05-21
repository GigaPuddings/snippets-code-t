import { describe, expect, it } from 'vitest';
import {
  extractWikilinkTitles,
  hasWikilinks,
  parseWikilinks,
  renderWikilinksToHtml,
  replaceWikilinkTitle
} from './wikilink-parser';

describe('wikilink-parser', () => {
  it('parses wikilinks with positions and trimmed titles', () => {
    const text = 'before [[  Vue Hooks  ]] after [[React]]';

    expect(parseWikilinks(text)).toEqual([
      {
        fullMatch: '[[  Vue Hooks  ]]',
        title: 'Vue Hooks',
        startIndex: 7,
        endIndex: 24
      },
      {
        fullMatch: '[[React]]',
        title: 'React',
        startIndex: 31,
        endIndex: 40
      }
    ]);
  });

  it('deduplicates extracted titles', () => {
    expect(extractWikilinkTitles('[[Vue]] [[React]] [[Vue]]')).toEqual([
      'Vue',
      'React'
    ]);
  });

  it('does not leak global regex state across repeated checks', () => {
    expect(hasWikilinks('[[One]]')).toBe(true);
    expect(hasWikilinks('plain text')).toBe(false);
    expect(hasWikilinks('[[Two]]')).toBe(true);
  });

  it('replaces exact wikilink titles and escapes regex characters', () => {
    const text = '[[Vue 3.5+]] and [[Vue 3x]]';

    expect(replaceWikilinkTitle(text, 'Vue 3.5+', 'Vue 3')).toBe(
      '[[Vue 3]] and [[Vue 3x]]'
    );
  });

  it('renders existing and missing links with escaped HTML', () => {
    const html = renderWikilinksToHtml(
      '[[Vue]] [[<script>]]',
      undefined,
      new Set(['Vue'])
    );

    expect(html).toContain('<a href="#" class="wikilink" >Vue</a>');
    expect(html).toContain(
      '<a href="#" class="wikilink wikilink-broken" >&lt;script&gt;</a>'
    );
  });

  it('adds data attributes when a click callback is supplied', () => {
    const html = renderWikilinksToHtml('[[A&B]]', () => undefined);

    expect(html).toBe(
      '<a href="#" class="wikilink" data-wikilink="A&amp;B">A&amp;B</a>'
    );
  });
});
