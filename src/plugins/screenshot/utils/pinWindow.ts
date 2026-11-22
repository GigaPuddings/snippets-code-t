import type { Rect } from '../pages/screenshot/core/types';

export const PIN_SHADOW_INSET = 20;

export function getPinWindowBounds(
  selection: Rect,
  screen: Rect,
  scaleFactor: number
): Rect {
  const inset = Math.round(PIN_SHADOW_INSET * scaleFactor);
  const fit = Math.min(
    1,
    (screen.width - 2 * inset) / selection.width,
    (screen.height - 2 * inset) / selection.height
  );
  const width = Math.max(1, Math.round(selection.width * fit)) + 2 * inset;
  const height = Math.max(1, Math.round(selection.height * fit)) + 2 * inset;

  return {
    x: Math.max(
      screen.x,
      Math.min(selection.x - inset, screen.x + screen.width - width)
    ),
    y: Math.max(
      screen.y,
      Math.min(selection.y - inset, screen.y + screen.height - height)
    ),
    width,
    height
  };
}
