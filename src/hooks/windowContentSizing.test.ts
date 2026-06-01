import { describe, expect, it } from 'vitest';
import {
  normalizeWindowContentHeight,
  shouldUpdateWindowHeight
} from './windowContentSizing';

describe('windowContentSizing', () => {
  it('rounds content height up so the bottom border is not clipped', () => {
    expect(normalizeWindowContentHeight(56.1)).toBe(57);
  });

  it('keeps invalid or collapsed measurements above zero', () => {
    expect(normalizeWindowContentHeight(0)).toBe(1);
    expect(normalizeWindowContentHeight(Number.NaN)).toBe(1);
  });

  it('expands immediately but ignores one-pixel shrink jitter', () => {
    expect(shouldUpdateWindowHeight(56, 57)).toBe(true);
    expect(shouldUpdateWindowHeight(57, 56)).toBe(false);
    expect(shouldUpdateWindowHeight(58, 56)).toBe(true);
  });
});
