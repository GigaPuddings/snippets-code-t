import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  createPluginCapabilities,
  type PluginCapabilityHost
} from './capabilities';
import type { RegisteredPlugin } from './protocol';

const createPlugin = (permissions: string[] = []): RegisteredPlugin => ({
  id: 'capability-test',
  source: 'local',
  packagePath: 'C:/plugins/capability-test',
  manifest: {
    schemaVersion: 1,
    id: 'capability-test',
    version: '1.0.0',
    kind: 'local',
    name: {
      i18nKey: 'plugins.capabilityTest.name',
      fallback: 'Capability Test'
    },
    description: {
      i18nKey: 'plugins.capabilityTest.description',
      fallback: 'Capability test plugin'
    },
    category: 'automation',
    enabledByDefault: false,
    permissions
  },
  nameKey: 'plugins.capabilityTest.name',
  descriptionKey: 'plugins.capabilityTest.description',
  category: 'automation',
  enabledByDefault: false
});

const createHost = (): PluginCapabilityHost => ({
  invoke: vi.fn().mockResolvedValue(null),
  registerRoute: vi.fn(),
  registerSearchProvider: vi.fn(),
  registerWindowShortcut: vi.fn()
});

describe('plugin storage capability', () => {
  it('scopes storage operations to the current plugin id', async () => {
    const host = createHost();
    const capabilities = createPluginCapabilities(createPlugin(), host);

    await capabilities.storage.set('settings', { compact: true });
    await capabilities.storage.delete('settings');

    expect(host.invoke).toHaveBeenNthCalledWith(1, 'set_local_plugin_data', {
      pluginId: 'capability-test',
      key: 'settings',
      value: { compact: true }
    });
    expect(host.invoke).toHaveBeenNthCalledWith(2, 'delete_local_plugin_data', {
      pluginId: 'capability-test',
      key: 'settings'
    });
  });
});

describe('plugin workspace capability', () => {
  it('guards workspace operations behind the workspace capability', async () => {
    const allowedHost = createHost();
    const allowed = createPluginCapabilities(
      createPlugin(['capability:workspace']),
      allowedHost
    );

    await allowed.workspace.read('C:/workspace/a.md');
    await allowed.workspace.write('C:/workspace/a.md', {
      content: 'updated',
      metadata: { title: 'A' }
    });

    expect(allowedHost.invoke).toHaveBeenNthCalledWith(
      1,
      'read_markdown_file',
      { filePath: 'C:/workspace/a.md' }
    );
    expect(allowedHost.invoke).toHaveBeenNthCalledWith(
      2,
      'update_markdown_file',
      {
        filePath: 'C:/workspace/a.md',
        content: 'updated',
        metadata: { title: 'A' }
      }
    );

    const denied = createPluginCapabilities(createPlugin(), createHost());
    await expect(denied.workspace.getRoot()).rejects.toThrow(
      '插件 capability-test 没有使用 workspace:read 能力的权限'
    );
  });
});

describe('plugin network capability', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('guards network fetches with plugin network permissions', async () => {
    const response = new Response('ok');
    const fetchMock = vi.fn().mockResolvedValue(response);
    vi.stubGlobal('fetch', fetchMock);
    const capabilities = createPluginCapabilities(
      createPlugin(['network:https://api.frankfurter.dev']),
      createHost()
    );

    await expect(
      capabilities.network.fetch('https://api.frankfurter.dev/v2/rate/USD/CNY')
    ).resolves.toBe(response);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.frankfurter.dev/v2/rate/USD/CNY',
      undefined
    );

    await expect(
      capabilities.network.fetch('https://example.com/rate')
    ).rejects.toThrow(
      '插件 capability-test 没有访问网络地址 https://example.com/rate 的权限'
    );
  });
});

describe('plugin host registration capabilities', () => {
  it('delegates search and window registrations to the runtime host', () => {
    const host = createHost();
    const capabilities = createPluginCapabilities(createPlugin(), host);
    const search = vi.fn().mockResolvedValue([]);

    capabilities.search.registerProvider({
      source: 'capability-test',
      search
    });
    capabilities.window.create({
      path: '/capability-test',
      name: 'CapabilityTest',
      componentUrl: 'dist/window.js',
      shortcutLabel: 'capability_test'
    });

    expect(host.registerSearchProvider).toHaveBeenCalledWith({
      source: 'capability-test',
      search
    });
    expect(host.registerRoute).toHaveBeenCalledWith({
      path: '/capability-test',
      name: 'CapabilityTest',
      componentUrl: 'dist/window.js',
      target: 'window'
    });
    expect(host.registerWindowShortcut).toHaveBeenCalledWith({
      label: 'capability_test',
      closeCommandLabel: undefined
    });
  });
});
