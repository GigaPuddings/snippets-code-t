import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  getEditorSettings: vi.fn(),
  updateEditorSettings: vi.fn()
}));

vi.mock('@/api/appConfig', () => mocks);
vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
vi.mock('@/utils/logger', () => ({ logger: { error: vi.fn() } }));
vi.mock('./hotkeys', () => ({
  useHotkeyStore: () => ({ initialize: async () => undefined })
}));
vi.mock('./theme', () => ({
  useThemeStore: () => ({ theme: 'auto', systemPrefersDark: false })
}));
vi.mock('./plugins', () => ({ usePluginStore: vi.fn() }));
vi.mock('./layout', () => ({ useLayoutStore: vi.fn() }));

import { useConfigurationStore } from './index';

beforeEach(() => {
  vi.resetAllMocks();
  setActivePinia(createPinia());
  mocks.getEditorSettings.mockResolvedValue({
    lineNumbers: false,
    lineHeight: 1.6
  });
  mocks.updateEditorSettings.mockResolvedValue(undefined);
});

describe('editor display settings', () => {
  it('defaults sticky headings to false for new and legacy settings', async () => {
    const store = useConfigurationStore();
    expect(store.editorStickyHeadings).toBe(false);

    store.editorStickyHeadings = true;
    await store.initialize();
    expect(store.editorStickyHeadings).toBe(false);
  });

  it('loads a saved sticky heading preference', async () => {
    mocks.getEditorSettings.mockResolvedValue({
      lineNumbers: false,
      lineHeight: 1.8,
      stickyHeadings: true
    });
    const store = useConfigurationStore();

    await store.initialize();

    expect(store.editorStickyHeadings).toBe(true);
    expect(store.editorLineHeight).toBe(1.8);
  });

  it('preserves sticky headings when saving line height and height when toggling', async () => {
    const store = useConfigurationStore();
    await store.updateEditorStickyHeadings(true);
    await store.updateEditorLineHeight(1.85);
    await store.updateEditorStickyHeadings(false);

    expect(
      mocks.updateEditorSettings.mock.calls.map(([settings]) => settings)
    ).toEqual([
      { lineNumbers: false, lineHeight: 1.6, stickyHeadings: true },
      { lineNumbers: false, lineHeight: 1.85, stickyHeadings: true },
      { lineNumbers: false, lineHeight: 1.85, stickyHeadings: false }
    ]);
    expect(store.editorLineHeight).toBe(1.85);
    expect(store.editorStickyHeadings).toBe(false);
  });

  it('restores the sticky heading state after a failed save and permits retry', async () => {
    const store = useConfigurationStore();
    mocks.updateEditorSettings.mockRejectedValueOnce(new Error('disk full'));

    await expect(store.updateEditorStickyHeadings(true)).rejects.toThrow(
      'disk full'
    );

    expect(store.editorStickyHeadings).toBe(false);
    expect(store.editorSettingsSaving).toBe(false);
    await store.updateEditorStickyHeadings(true);
    expect(store.editorStickyHeadings).toBe(true);
  });

  it('restores line height without changing sticky headings after a failed save', async () => {
    const store = useConfigurationStore();
    store.editorStickyHeadings = true;
    mocks.updateEditorSettings.mockRejectedValueOnce(new Error('disk full'));

    await expect(store.updateEditorLineHeight(1.9)).rejects.toThrow(
      'disk full'
    );

    expect(store.editorLineHeight).toBe(1.6);
    expect(store.editorStickyHeadings).toBe(true);
    expect(store.editorSettingsSaving).toBe(false);
  });

  it.each(['height', 'sticky'] as const)(
    'blocks overlapping saves while %s is being persisted',
    async (first) => {
      const store = useConfigurationStore();
      let finishSave!: () => void;
      mocks.updateEditorSettings.mockImplementationOnce(
        () => new Promise<void>((resolve) => (finishSave = resolve))
      );
      const saving =
        first === 'height'
          ? store.updateEditorLineHeight(1.9)
          : store.updateEditorStickyHeadings(true);
      expect(store.editorSettingsSaving).toBe(true);

      const overlapping =
        first === 'height'
          ? store.updateEditorStickyHeadings(true)
          : store.updateEditorLineHeight(1.9);
      await expect(overlapping).rejects.toThrow();
      expect(mocks.updateEditorSettings).toHaveBeenCalledTimes(1);

      finishSave();
      await saving;
      expect(store.editorSettingsSaving).toBe(false);
      expect(store.editorLineHeight).toBe(first === 'height' ? 1.9 : 1.6);
      expect(store.editorStickyHeadings).toBe(first === 'sticky');
    }
  );
});
