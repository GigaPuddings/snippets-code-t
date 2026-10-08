import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { invoke } from '@tauri-apps/api/core';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
import { openSearchResultInConfig } from './openConfigContent';

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
vi.mock('@tauri-apps/api/webviewWindow', () => ({
  WebviewWindow: { getByLabel: vi.fn() }
}));
vi.mock('@/utils/logger', () => ({ logger: { error: vi.fn() } }));

const item = {
  id: 'note.md',
  title: 'Note',
  category_id: 'work',
  content: '# Note'
} as ContentType;

describe('openSearchResultInConfig', () => {
  let storage: Map<string, string>;

  beforeEach(() => {
    vi.resetAllMocks();
    storage = new Map();
    vi.stubGlobal('localStorage', {
      setItem: (key: string, value: string) => storage.set(key, value),
      removeItem: (key: string) => storage.delete(key)
    });
    vi.mocked(invoke).mockResolvedValue(undefined);
    vi.mocked(WebviewWindow.getByLabel).mockResolvedValue(null);
  });

  afterEach(() => vi.unstubAllGlobals());

  it('keeps navigation pending while a new config waits for its first paint', async () => {
    const closeSearchWindow = vi.fn(async () => {
      expect(storage.has('pendingNavigation')).toBe(true);
    });
    await openSearchResultInConfig({ item, closeSearchWindow });

    expect(closeSearchWindow).toHaveBeenCalledOnce();
    expect(invoke).toHaveBeenCalledExactlyOnceWith(
      'activate_config_window_command'
    );
    expect(
      JSON.parse(storage.get('pendingNavigation') ?? 'null')
    ).toMatchObject({
      fragmentId: 'note.md',
      categoryId: 'work'
    });
  });

  it('reuses config through the native readiness gate and sends the preview request', async () => {
    const configWindow = { emit: vi.fn(async () => undefined), show: vi.fn() };
    vi.mocked(WebviewWindow.getByLabel).mockResolvedValue(
      configWindow as unknown as WebviewWindow
    );

    await openSearchResultInConfig({
      item,
      preview: true,
      closeSearchWindow: vi.fn(async () => undefined)
    });

    expect(invoke).toHaveBeenCalledExactlyOnceWith(
      'activate_config_window_command'
    );
    expect(configWindow.show).not.toHaveBeenCalled();
    expect(configWindow.emit).toHaveBeenCalledExactlyOnceWith(
      'navigate-to-config-content',
      { fragmentId: 'note.md', categoryId: 'work', preview: true }
    );
    expect(
      JSON.parse(storage.get('pendingSnippetOpen') ?? 'null')
    ).toMatchObject({
      fragmentId: 'note.md',
      content: '# Note'
    });
  });

  it('clears pending navigation when activation fails', async () => {
    const failure = new Error('window unavailable');
    vi.mocked(invoke).mockRejectedValueOnce(failure);

    await expect(
      openSearchResultInConfig({
        item,
        closeSearchWindow: vi.fn(async () => undefined)
      })
    ).rejects.toThrow(failure);
    expect(storage.size).toBe(0);
  });
});
