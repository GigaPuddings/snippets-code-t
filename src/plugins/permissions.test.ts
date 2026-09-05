import { describe, expect, it } from 'vitest';
import type { RegisteredPlugin } from './protocol';
import {
  assertCanFetchUrl,
  assertCanInvokeBackendCommand,
  assertCanInvokeCommand,
  assertCanUseCapability,
  canFetchUrl,
  canUseCapability,
  canInvokeBackendCommand,
  canInvokeCommand
} from './permissions';

const createPlugin = (permissions?: string[]): RegisteredPlugin => ({
  id: 'test-plugin',
  source: 'local',
  packagePath: 'C:/plugins/test-plugin',
  manifest: {
    schemaVersion: 1,
    id: 'test-plugin',
    version: '1.0.0',
    kind: 'local',
    name: {
      i18nKey: 'plugins.test.name',
      fallback: 'Test Plugin'
    },
    description: {
      i18nKey: 'plugins.test.description',
      fallback: 'Test plugin'
    },
    category: 'automation',
    enabledByDefault: false,
    permissions
  },
  nameKey: 'plugins.test.name',
  descriptionKey: 'plugins.test.description',
  category: 'automation',
  enabledByDefault: false
});

describe('plugin command permissions', () => {
  it('allows exact Tauri command permissions', () => {
    const plugin = createPlugin(['command:open_url']);

    expect(canInvokeCommand(plugin, 'open_url')).toBe(true);
    expect(canInvokeCommand(plugin, 'read_file')).toBe(false);
  });

  it('allows wildcard Tauri command permissions', () => {
    const plugin = createPlugin(['command:*']);

    expect(canInvokeCommand(plugin, 'open_url')).toBe(true);
    expect(canInvokeCommand(plugin, 'read_file')).toBe(true);
  });

  it('does not treat backend permissions as Tauri command permissions', () => {
    const plugin = createPlugin(['backend:sync']);

    expect(canInvokeCommand(plugin, 'sync')).toBe(false);
  });

  it('allows exact backend command permissions', () => {
    const plugin = createPlugin(['backend:sync']);

    expect(canInvokeBackendCommand(plugin, 'sync')).toBe(true);
    expect(canInvokeBackendCommand(plugin, 'delete_all')).toBe(false);
  });

  it('allows wildcard backend command permissions', () => {
    const plugin = createPlugin(['backend:*']);

    expect(canInvokeBackendCommand(plugin, 'sync')).toBe(true);
    expect(canInvokeBackendCommand(plugin, 'delete_all')).toBe(true);
  });

  it('denies missing command permission arrays by default', () => {
    const plugin = createPlugin(undefined);

    expect(canInvokeCommand(plugin, 'open_url')).toBe(false);
    expect(canInvokeBackendCommand(plugin, 'sync')).toBe(false);
  });
});

describe('plugin command permission errors', () => {
  it('throws actionable errors for denied frontend command calls', () => {
    const plugin = createPlugin(['command:open_url']);

    expect(() => assertCanInvokeCommand(plugin, 'read_file')).toThrow(
      '插件 test-plugin 没有调用命令 read_file 的权限'
    );
  });

  it('throws actionable errors for denied backend command calls', () => {
    const plugin = createPlugin(['backend:sync']);

    expect(() => assertCanInvokeBackendCommand(plugin, 'delete_all')).toThrow(
      '插件 test-plugin 没有调用后端命令 delete_all 的权限'
    );
  });
});

describe('plugin capability permissions', () => {
  it('allows explicit and wildcard capability permissions', () => {
    const plugin = createPlugin(['capability:workspace', 'clipboard:*']);

    expect(canUseCapability(plugin, 'workspace')).toBe(true);
    expect(canUseCapability(plugin, 'clipboard')).toBe(true);
    expect(canUseCapability(plugin, 'network')).toBe(false);
  });

  it('supports action-scoped capability permissions', () => {
    const plugin = createPlugin(['workspace:read', 'network']);

    expect(canUseCapability(plugin, 'workspace', 'read')).toBe(true);
    expect(canUseCapability(plugin, 'workspace', 'write')).toBe(false);
    expect(canFetchUrl(plugin, 'https://example.com/resource.json')).toBe(true);
  });

  it('allows network access by origin and wildcard URL rules', () => {
    const plugin = createPlugin([
      'network:https://api.frankfurter.dev',
      'network:https://*.example.com/public/*'
    ]);

    expect(
      canFetchUrl(plugin, 'https://api.frankfurter.dev/v2/rate/USD/CNY')
    ).toBe(true);
    expect(canFetchUrl(plugin, 'https://cdn.example.com/public/icon.png')).toBe(
      true
    );
    expect(
      canFetchUrl(plugin, 'https://cdn.example.com/private/icon.png')
    ).toBe(false);
  });

  it('denies missing capability permission arrays by default', () => {
    const plugin = createPlugin(undefined);

    expect(canUseCapability(plugin, 'workspace')).toBe(false);
    expect(canFetchUrl(plugin, 'https://api.frankfurter.dev')).toBe(false);
  });

  it('throws actionable errors for denied capability and network calls', () => {
    const plugin = createPlugin([]);

    expect(() => assertCanUseCapability(plugin, 'workspace')).toThrow(
      '插件 test-plugin 没有使用 workspace 能力的权限'
    );
    expect(() => assertCanFetchUrl(plugin, 'https://example.com')).toThrow(
      '插件 test-plugin 没有访问网络地址 https://example.com 的权限'
    );
  });
});
