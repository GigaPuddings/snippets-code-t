import { describe, expect, it } from 'vitest';
import {
  clampImageScalePercent,
  resolveImageScalePercent
} from './imageSizing';

describe('image sizing', () => {
  it('clamps configured scale to the supported range', () => {
    expect(clampImageScalePercent(5)).toBe(25);
    expect(clampImageScalePercent(74.6)).toBe(75);
    expect(clampImageScalePercent(500)).toBe(200);
  });

  it('prefers the stored relative scale', () => {
    expect(resolveImageScalePercent({ 'data-image-scale': 80, width: 320 }, 640, 100)).toBe(80);
  });

  it('migrates a legacy pixel width using the natural image width', () => {
    expect(resolveImageScalePercent({ width: 320 }, 640, 100)).toBe(50);
  });

  it('falls back to the configured default for an unsized image', () => {
    expect(resolveImageScalePercent({}, 640, 65)).toBe(65);
  });
});
