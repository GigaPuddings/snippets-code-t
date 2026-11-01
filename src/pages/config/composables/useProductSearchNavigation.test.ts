import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useProductSearchNavigation } from './useProductSearchNavigation';
import { createRouter, createMemoryHistory, type Router } from 'vue-router';
const mocks = vi.hoisted(() => ({
  invoke: vi.fn(),
  initialize: vi.fn(),
  load: vi.fn(),
  enabled: vi.fn(),
  providers: vi.fn(),
  listen: vi.fn(),
  focus: vi.fn()
}));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/api/window', () => ({
  getCurrentWindow: () => ({
    listen: mocks.listen,
    onFocusChanged: mocks.focus
  })
}));
vi.mock('@/store', () => ({
  usePluginStore: () => ({
    plugins: [],
    initialize: mocks.initialize,
    loadEnabledPluginEntry: mocks.load,
    isEnabled: mocks.enabled
  })
}));
vi.mock('@/plugins/runtime', () => ({ installRuntimePluginRoutes: vi.fn() }));
vi.mock('@/plugins/settings', () => ({
  getVisibleSettingsMenuItems: () => [
    { id: 'general' },
    { id: 'localAi', pluginId: 'local-ai' }
  ]
}));
vi.mock('@/plugins/search-providers', () => ({
  getSearchSourceProviders: mocks.providers
}));

function router(owner?: string) {
  return {
    push: vi.fn(async () => undefined),
    hasRoute: () => true,
    resolve: (target: unknown) => ({
      ...(target as object),
      path: '/config/local-ai/chat',
      matched: [{ meta: { pluginId: owner } }]
    })
  } as unknown as Router;
}
describe('config search navigation receiver', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.providers.mockReturnValue([]);
    mocks.enabled.mockReturnValue(true);
    mocks.initialize.mockResolvedValue(undefined);
    mocks.load.mockResolvedValue(undefined);
    mocks.listen.mockResolvedValue(vi.fn());
    mocks.focus.mockResolvedValue(vi.fn());
  });
  it('consumes a cold-start settings request with null native plugin owner', async () => {
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId: '1',
            pluginId: null,
            action: { kind: 'settings', tabId: 'general' }
          }
        : undefined
    );
    const target = router();
    const controller = useProductSearchNavigation(target);
    await controller.setup();
    expect(target.push).toHaveBeenCalledWith({
      path: '/config/category/settings',
      query: { tab: 'general' }
    });
    expect(mocks.invoke).toHaveBeenCalledWith('finish_search_navigation', {
      requestId: '1',
      success: true,
      error: null
    });
    controller.cleanup();
  });
  it('rejects another plugin route even if the requested route name exists', async () => {
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId: '2',
            pluginId: 'extension',
            action: { kind: 'page', routeName: 'Other' }
          }
        : undefined
    );
    const target = router('different-owner');
    await useProductSearchNavigation(target).setup();
    expect(target.push).not.toHaveBeenCalled();
    expect(mocks.invoke).toHaveBeenCalledWith(
      'finish_search_navigation',
      expect.objectContaining({ success: false })
    );
  });
  it('keeps new-chat behavior available with an older AI package', async () => {
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? { requestId: '3', pluginId: 'local-ai', action: { kind: 'new-chat' } }
        : undefined
    );
    await useProductSearchNavigation(router('local-ai')).setup();
    expect(mocks.invoke).toHaveBeenCalledWith('show_hide_window_command', {
      label: 'local_ai_chat'
    });
    expect(mocks.invoke).toHaveBeenCalledWith(
      'finish_search_navigation',
      expect.objectContaining({ success: true })
    );
  });
  it('passes existing conversation IDs to the AI page without requesting a new chat', async () => {
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId: '4',
            pluginId: 'local-ai',
            action: { kind: 'conversation', conversationId: 'chat-1' }
          }
        : undefined
    );
    const target = router('local-ai');
    await useProductSearchNavigation(target).setup();
    expect(target.push).toHaveBeenCalledWith({
      name: 'LocalAiChat',
      query: { searchRequest: '4' }
    });
    expect(mocks.invoke).not.toHaveBeenCalledWith(
      'show_hide_window_command',
      expect.anything()
    );
    expect(mocks.load).not.toHaveBeenCalled();
  });
  it('opens the workspace root without inheriting the active folder parameter', async () => {
    const target = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/config/category/contentList/:cid?',
          name: 'Welcome',
          component: {}
        }
      ]
    });
    await target.push('/config/category/contentList/42');
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId: '5',
            pluginId: null,
            action: { kind: 'page', routeName: 'Welcome' }
          }
        : undefined
    );
    await useProductSearchNavigation(target).setup();
    expect(target.currentRoute.value.path).toBe('/config/category/contentList');
  });
  it('reports a failed lazy import and accepts another request after the resource recovers', async () => {
    const loadSettings = vi
      .fn()
      .mockRejectedValueOnce(
        new TypeError(
          'Failed to fetch dynamically imported module: /settings.vue'
        )
      )
      .mockResolvedValue({});
    const target = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/config/workbench', component: {} },
        {
          path: '/config/category/settings',
          name: 'Settings',
          component: loadSettings
        }
      ]
    });
    target.onError(vi.fn());
    await target.push('/config/workbench');
    let requestId = 'failed';
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId,
            pluginId: null,
            action: { kind: 'settings', tabId: 'general' }
          }
        : undefined
    );
    const controller = useProductSearchNavigation(target);
    await controller.setup();
    expect(target.currentRoute.value.path).toBe('/config/workbench');
    expect(mocks.invoke).toHaveBeenCalledWith('finish_search_navigation', {
      requestId: 'failed',
      success: false,
      error: expect.stringContaining(
        'Failed to fetch dynamically imported module'
      )
    });
    requestId = 'retry';
    await mocks.listen.mock.calls[0][1]();
    expect(target.currentRoute.value.name).toBe('Settings');
    expect(mocks.invoke).toHaveBeenCalledWith('finish_search_navigation', {
      requestId: 'retry',
      success: true,
      error: null
    });
    controller.cleanup();
  });
  it('does not acknowledge a guard-aborted navigation as successful', async () => {
    const target = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/config/category/settings', name: 'Settings', component: {} }
      ]
    });
    target.beforeEach(() => false);
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId: 'aborted',
            pluginId: null,
            action: { kind: 'settings', tabId: 'general' }
          }
        : undefined
    );
    const controller = useProductSearchNavigation(target);
    await controller.setup();
    expect(mocks.invoke).toHaveBeenCalledWith('finish_search_navigation', {
      requestId: 'aborted',
      success: false,
      error: expect.any(String)
    });
    controller.cleanup();
  });
  it('acknowledges an already-open settings tab so main can still close', async () => {
    const target = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/config/category/settings', name: 'Settings', component: {} }
      ]
    });
    await target.push({ name: 'Settings', query: { tab: 'general' } });
    mocks.invoke.mockImplementation(async (command) =>
      command === 'get_pending_search_navigation'
        ? {
            requestId: 'duplicate',
            pluginId: null,
            action: { kind: 'settings', tabId: 'general' }
          }
        : undefined
    );
    const controller = useProductSearchNavigation(target);
    await controller.setup();
    expect(mocks.invoke).toHaveBeenCalledWith('finish_search_navigation', {
      requestId: 'duplicate',
      success: true,
      error: null
    });
    controller.cleanup();
  });
});
