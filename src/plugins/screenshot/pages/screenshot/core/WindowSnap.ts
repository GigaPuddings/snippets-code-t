import type { Point } from './types';

export interface SnappableWindow {
  x: number;
  y: number;
  width: number;
  height: number;
  display_order: number;
  is_fullscreen: boolean;
}

export function hasIntentionalPointerMovement(
  origin: Point,
  current: Point,
  threshold: number
): boolean {
  return Math.hypot(current.x - origin.x, current.y - origin.y) >= threshold;
}

export function findNearbyWindow<T extends SnappableWindow>(
  windows: T[],
  mousePos: Point,
  snapThreshold: number
): T | null {
  const candidates = windows
    .map((window) => {
      const distanceX = Math.max(
        window.x - mousePos.x,
        0,
        mousePos.x - (window.x + window.width)
      );
      const distanceY = Math.max(
        window.y - mousePos.y,
        0,
        mousePos.y - (window.y + window.height)
      );

      return {
        window,
        distance: Math.hypot(distanceX, distanceY),
        containsPointer: distanceX === 0 && distanceY === 0
      };
    })
    .filter(({ distance }) => distance <= snapThreshold);

  if (candidates.length === 0) return null;

  candidates.sort((left, right) => {
    const containmentOrder =
      Number(right.containsPointer) - Number(left.containsPointer);
    if (containmentOrder !== 0) return containmentOrder;

    if (left.containsPointer) {
      return left.window.display_order - right.window.display_order;
    }

    const distanceOrder = left.distance - right.distance;
    if (distanceOrder !== 0) return distanceOrder;

    const displayOrder = left.window.display_order - right.window.display_order;
    if (displayOrder !== 0) return displayOrder;

    return (
      Number(right.window.is_fullscreen) - Number(left.window.is_fullscreen)
    );
  });

  return candidates[0].window;
}
