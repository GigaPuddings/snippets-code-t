import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  eventHandlers: new Map<string, (event: { payload: unknown }) => unknown>(),
  invoke: vi.fn(),
  getAppConfig: vi.fn(),
  getAttachmentConfig: vi.fn(),
  initializeStore: vi.fn(),
  applyTheme: vi.fn(),
  setLocale: vi.fn(),
  dispatchEvent: vi.fn(),
  showMessage: vi.fn(),
  store: { language: 'zh-CN', theme: 'auto' }
}));

vi.mock('@tauri-apps/api/core', () => ({
  invoke: mocks.invoke
}));

vi.mock('@tauri-apps/api/event', () => ({
  listen: vi.fn(
    async (
      event: string,
      handler: (event: { payload: unknown }) => unknown
    ): Promise<ReturnType<typeof vi.fn>> => {
      mocks.eventHandlers.set(event, handler);
      return vi.fn();
    }
  )
}));

vi.mock('@tauri-apps/api/window', () => ({
  getCurrentWindow: (): { label: string } => ({ label: 'main' })
}));

vi.mock('@/i18n', () => ({
  setLocale: mocks.setLocale,
  default: { global: { t: (key: string): string => key } }
}));
vi.mock('@/utils/modal', () => ({ default: { message: mocks.showMessage } }));

vi.mock('@/api/markdown', () => ({
  cleanupCache: vi.fn()
}));

vi.mock('@/api/appConfig', () => ({
  getAppConfig: mocks.getAppConfig
}));

vi.mock('@/plugins/attachments/api', () => ({
  ATTACHMENT_CONFIG_UPDATED_EVENT: 'attachment-config-updated',
  getAttachmentConfig: mocks.getAttachmentConfig
}));

vi.mock('@/store', () => ({
  useConfigurationStore: () =>
    Object.assign(mocks.store, {
      initialize: mocks.initializeStore,
      applyTheme: mocks.applyTheme
    })
}));

vi.mock('@/utils/logger', () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn()
  }
}));

import { cleanupBaseEventListeners, setupBaseEventListeners } from './app-init';

describe('base application events', () => {
  beforeEach(() => {
    mocks.eventHandlers.clear();
    mocks.invoke.mockReset().mockResolvedValue('zh-CN');
    mocks.store.language = 'zh-CN';
    mocks.store.theme = 'auto';
    mocks.getAppConfig.mockReset();
    mocks.getAttachmentConfig.mockReset();
    mocks.initializeStore.mockReset();
    mocks.applyTheme.mockReset();
    mocks.setLocale.mockReset();
    mocks.dispatchEvent.mockReset();
    mocks.showMessage.mockReset();
    vi.stubGlobal('window', {
      dispatchEvent: mocks.dispatchEvent
    });
    vi.stubGlobal(
      'CustomEvent',
      class TestCustomEvent {
        constructor(
          public type: string,
          public init: { detail: unknown }
        ) {}
      }
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('hydrates a newly opened window from the saved backend language', async () => {
    mocks.invoke.mockResolvedValue('en-US');

    await setupBaseEventListeners();

    expect(mocks.invoke).toHaveBeenCalledWith('get_language');
    expect(mocks.store.language).toBe('en-US');
    expect(mocks.setLocale).toHaveBeenLastCalledWith('en-US');
  });

  it.each(['en-US', 'zh-CN'])(
    'synchronizes the settings selection and locale for a %s tray event',
    async (language) => {
      await setupBaseEventListeners();
      mocks.eventHandlers.get('language-changed')?.({ payload: { language } });

      expect(mocks.store.language).toBe(language);
      expect(mocks.setLocale).toHaveBeenLastCalledWith(language);
      // Applying a notification must not save or rebroadcast it.
      expect(mocks.invoke).toHaveBeenCalledTimes(1);
    }
  );

  it('does not overwrite a newer tray selection with an in-flight startup read', async () => {
    let resolveLanguage!: (language: string) => void;
    mocks.invoke.mockImplementation(
      () => new Promise<string>((resolve) => (resolveLanguage = resolve))
    );
    const setup = setupBaseEventListeners();
    await vi.waitFor(() => expect(resolveLanguage).toBeTypeOf('function'));

    mocks.eventHandlers.get('language-changed')?.({
      payload: { language: 'en-US' }
    });
    resolveLanguage('zh-CN');
    await setup;

    expect(mocks.store.language).toBe('en-US');
    expect(mocks.setLocale).toHaveBeenCalledExactlyOnceWith('en-US');
  });

  it('ignores unsupported or malformed language notifications', async () => {
    await setupBaseEventListeners();
    mocks.setLocale.mockClear();
    const handler = mocks.eventHandlers.get('language-changed');
    handler?.({ payload: { language: 'fr-FR' } });
    handler?.({ payload: null });

    expect(mocks.store.language).toBe('zh-CN');
    expect(mocks.setLocale).not.toHaveBeenCalled();
  });

  it('keeps event synchronization available if the initial language read fails', async () => {
    mocks.invoke.mockRejectedValue(new Error('read failed'));
    await setupBaseEventListeners();
    mocks.eventHandlers.get('language-changed')?.({
      payload: { language: 'en-US' }
    });

    expect(mocks.store.language).toBe('en-US');
    expect(mocks.setLocale).toHaveBeenLastCalledWith('en-US');
    expect(mocks.eventHandlers.has('portable-config-imported')).toBe(true);
  });

  it('cleans up the language listener when a window is unmounted', async () => {
    const listeners = await setupBaseEventListeners();
    cleanupBaseEventListeners(listeners);
    expect(listeners.languageChange).toHaveBeenCalledOnce();
  });

  it('reloads the configuration store after a sync import', async () => {
    mocks.getAppConfig.mockResolvedValue({
      language: 'en-US',
      theme: 'dark'
    });
    mocks.getAttachmentConfig.mockResolvedValue({ pathTemplate: 'assets' });

    await setupBaseEventListeners();
    const handler = mocks.eventHandlers.get('portable-config-imported');
    expect(handler).toBeTypeOf('function');

    await handler?.({ payload: {} });

    expect(mocks.initializeStore).toHaveBeenCalledOnce();
    expect(mocks.setLocale).toHaveBeenLastCalledWith('en-US');
    expect(mocks.store.language).toBe('en-US');
    expect(mocks.applyTheme).toHaveBeenCalledOnce();
    expect(mocks.dispatchEvent).toHaveBeenCalledOnce();
  });

  it('shows one manual result in the selected foreground window and ignores background jobs', async () => {
    await setupBaseEventListeners();
    const handler = mocks.eventHandlers.get('local-launcher-index-finished');
    const payload = {
      generation: 5,
      status: 'partial',
      appsCount: 10,
      bookmarksCount: 0,
      errors: ['One browser could not be read'],
      manual: true,
      notificationWindow: 'main',
      notificationError: null
    };
    await handler?.({ payload: { ...payload, manual: false } });
    await handler?.({ payload: { ...payload, notificationWindow: 'config' } });
    expect(mocks.showMessage).not.toHaveBeenCalled();
    await handler?.({ payload });
    await handler?.({ payload });
    expect(mocks.showMessage).toHaveBeenCalledOnce();
    expect(mocks.showMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'warning',
        message: expect.stringContaining(payload.errors[0])
      })
    );
  });
});
