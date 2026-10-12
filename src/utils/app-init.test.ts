import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  eventHandlers: new Map<string, (event: { payload: unknown }) => unknown>(),
  getAppConfig: vi.fn(),
  getAttachmentConfig: vi.fn(),
  initializeStore: vi.fn(),
  applyTheme: vi.fn(),
  setLocale: vi.fn(),
  dispatchEvent: vi.fn(),
  showMessage: vi.fn()
}));

vi.mock('@tauri-apps/api/core', () => ({
  invoke: vi.fn()
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
  useConfigurationStore: (): {
    initialize: typeof mocks.initializeStore;
    theme: string;
    applyTheme: typeof mocks.applyTheme;
  } => ({
    initialize: mocks.initializeStore,
    theme: 'auto',
    applyTheme: mocks.applyTheme
  })
}));

vi.mock('@/utils/logger', () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn()
  }
}));

import { setupBaseEventListeners } from './app-init';

describe('portable config runtime refresh', () => {
  beforeEach(() => {
    mocks.eventHandlers.clear();
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

  it('reloads the configuration store after a sync import', async () => {
    mocks.getAppConfig.mockResolvedValue({
      language: 'zh-CN',
      theme: 'dark'
    });
    mocks.getAttachmentConfig.mockResolvedValue({ pathTemplate: 'assets' });

    await setupBaseEventListeners();
    const handler = mocks.eventHandlers.get('portable-config-imported');
    expect(handler).toBeTypeOf('function');

    await handler?.({ payload: {} });

    expect(mocks.initializeStore).toHaveBeenCalledOnce();
    expect(mocks.setLocale).toHaveBeenCalledWith('zh-CN');
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
