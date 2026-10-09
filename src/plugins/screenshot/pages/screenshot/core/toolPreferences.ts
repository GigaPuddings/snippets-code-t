import type { AnnotationStyle } from './types';

const STORAGE_KEY = 'screenshot.tool-preferences.v1';

export interface ScreenshotToolPreferences {
  currentStyle: AnnotationStyle & { opacity: number };
  textSize: number;
  mosaicSize: number;
  selectionCornerRadius: number;
}

export const defaultToolPreferences = (): ScreenshotToolPreferences => ({
  currentStyle: { color: '#ff4444', lineWidth: 3, opacity: 1 },
  textSize: 16,
  mosaicSize: 8,
  selectionCornerRadius: 0
});

const numberInRange = (
  value: unknown,
  fallback: number,
  min: number,
  max: number
): number =>
  typeof value === 'number' &&
  Number.isFinite(value) &&
  value >= min &&
  value <= max
    ? value
    : fallback;

export function loadToolPreferences(): ScreenshotToolPreferences {
  const defaults = defaultToolPreferences();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return defaults;
    return {
      currentStyle: {
        color:
          typeof saved.currentStyle?.color === 'string' &&
          /^#[\da-f]{6}$/i.test(saved.currentStyle.color)
            ? saved.currentStyle.color
            : defaults.currentStyle.color,
        lineWidth: numberInRange(
          saved.currentStyle?.lineWidth,
          defaults.currentStyle.lineWidth,
          1,
          32
        ),
        opacity: numberInRange(
          saved.currentStyle?.opacity,
          defaults.currentStyle.opacity,
          0.1,
          1
        )
      },
      textSize: numberInRange(saved.textSize, defaults.textSize, 8, 96),
      mosaicSize: numberInRange(saved.mosaicSize, defaults.mosaicSize, 1, 64),
      selectionCornerRadius: numberInRange(
        saved.selectionCornerRadius,
        defaults.selectionCornerRadius,
        0,
        120
      )
    };
  } catch {
    // Storage can be unavailable or contain older/corrupt data; capture still works.
    return defaults;
  }
}

export function saveToolPreferences(
  preferences: ScreenshotToolPreferences
): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Preference persistence must never interrupt a screenshot.
  }
}
