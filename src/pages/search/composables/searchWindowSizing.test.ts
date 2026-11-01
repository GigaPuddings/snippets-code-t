import { describe, expect, it } from 'vitest';
import { getQuickSearchWindowHeight } from './searchWindowSizing';

describe('quick search result window height', () => {
  it('keeps an empty query at the input-only height', () => {
    expect(getQuickSearchWindowHeight(false, 720)).toBe(58);
    expect(getQuickSearchWindowHeight(false, 350)).toBe(58);
  });

  it('fits six rows and the footer on normal and larger screens', () => {
    expect(getQuickSearchWindowHeight(true, 720)).toBe(442);
    expect(getQuickSearchWindowHeight(true, 1080)).toBe(442);
  });

  it('reserves the screen edge and collapses again after clearing', () => {
    expect(getQuickSearchWindowHeight(true, 350)).toBe(334);
    expect(getQuickSearchWindowHeight(false, 350)).toBe(58);
    expect(getQuickSearchWindowHeight(true, 40)).toBe(58);
  });
});
