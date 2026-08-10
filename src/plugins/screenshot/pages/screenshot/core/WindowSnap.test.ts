import { describe, expect, it } from 'vitest';
import {
  findNearbyWindow,
  hasIntentionalPointerMovement,
  type SnappableWindow
} from './WindowSnap';

const createWindow = (
  overrides: Partial<SnappableWindow> = {}
): SnappableWindow => ({
  x: 0,
  y: 0,
  width: 800,
  height: 600,
  display_order: 1,
  is_fullscreen: false,
  ...overrides
});

describe('findNearbyWindow', () => {
  it('selects the top window inside the overlapping region', () => {
    const lowerWindow = createWindow();
    const topWindow = createWindow({
      x: 200,
      y: 100,
      width: 240,
      height: 180,
      display_order: 0
    });

    expect(
      findNearbyWindow([topWindow, lowerWindow], { x: 250, y: 150 }, 30)
    ).toBe(topWindow);
  });

  it('selects a lower large window from its exposed region', () => {
    const lowerWindow = createWindow();
    const topWindow = createWindow({
      x: 200,
      y: 100,
      width: 240,
      height: 180,
      display_order: 0
    });

    expect(
      findNearbyWindow([topWindow, lowerWindow], { x: 190, y: 150 }, 30)
    ).toBe(lowerWindow);
  });

  it('does not snap to a distant diagonal window', () => {
    const distantWindow = createWindow({
      x: 500,
      y: 500,
      width: 200,
      height: 200
    });

    expect(
      findNearbyWindow([distantWindow], { x: 500, y: 100 }, 30)
    ).toBeNull();
  });
});

describe('hasIntentionalPointerMovement', () => {
  it('requires the pointer to cross the configured movement threshold', () => {
    const origin = { x: 100, y: 100 };

    expect(hasIntentionalPointerMovement(origin, { x: 107, y: 108 }, 12)).toBe(
      false
    );
    expect(hasIntentionalPointerMovement(origin, { x: 112, y: 100 }, 12)).toBe(
      true
    );
  });
});
