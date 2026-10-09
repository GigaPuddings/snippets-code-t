import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import {
  defaultToolPreferences,
  loadToolPreferences,
  saveToolPreferences
} from './toolPreferences';

beforeEach(() => {
  const values = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value)
  });
});
afterEach(() => vi.unstubAllGlobals());

it('restores drawing preferences across screenshot sessions', () => {
  const saved = {
    currentStyle: { color: '#123abc', lineWidth: 8, opacity: 0.5 },
    textSize: 24,
    mosaicSize: 20,
    selectionCornerRadius: 32
  };
  saveToolPreferences(saved);
  expect(loadToolPreferences()).toEqual(saved);
});

it('ignores corrupt and out-of-range preferences while retaining valid fields', () => {
  localStorage.setItem('screenshot.tool-preferences.v1', '{invalid');
  expect(loadToolPreferences()).toEqual(defaultToolPreferences());
  localStorage.setItem(
    'screenshot.tool-preferences.v1',
    JSON.stringify({
      currentStyle: { color: 'url(invalid)', lineWidth: -1, opacity: 10 },
      textSize: 10000,
      mosaicSize: 12,
      selectionCornerRadius: -5
    })
  );
  expect(loadToolPreferences()).toEqual({
    ...defaultToolPreferences(),
    mosaicSize: 12
  });
});

it('keeps screenshot tools usable when storage is blocked', () => {
  vi.stubGlobal('localStorage', {
    getItem: () => {
      throw new Error('denied');
    },
    setItem: () => {
      throw new Error('quota');
    }
  });
  expect(loadToolPreferences()).toEqual(defaultToolPreferences());
  expect(() => saveToolPreferences(defaultToolPreferences())).not.toThrow();
});
