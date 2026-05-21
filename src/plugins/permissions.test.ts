import { describe, expect, it } from 'vitest';
import type { RegisteredPlugin } from './protocol';
import {
  assertCanInvokeBackendCommand,
  assertCanInvokeCommand,
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

describe('plugin permissions', () => {
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

  it('denies missing permission arrays by default', () => {
    const plugin = createPlugin(undefined);

    expect(canInvokeCommand(plugin, 'open_url')).toBe(false);
    expect(canInvokeBackendCommand(plugin, 'sync')).toBe(false);
  });

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
