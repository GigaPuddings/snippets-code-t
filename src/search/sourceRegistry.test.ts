import { describe, expect, it, vi } from 'vitest';
import { SearchSourceRegistry } from './sourceRegistry';

const provider = (overrides: {
  pluginId: string;
  source: string;
  priority?: number;
  timeoutMs?: number;
}) => ({
  pluginId: overrides.pluginId,
  source: overrides.source,
  priority: overrides.priority,
  timeoutMs: overrides.timeoutMs,
  search: vi.fn(async () => [])
});

describe('SearchSourceRegistry', () => {
  it('registers providers with catalog metadata and priority ordering', () => {
    const registry = new SearchSourceRegistry();
    registry.register(provider({ pluginId: 'desktop-files', source: 'file' }));
    registry.register(
      provider({ pluginId: 'quick-tools', source: 'quick-tools' })
    );

    expect(registry.list().map((item) => item.source)).toEqual([
      'quick-tools',
      'file'
    ]);
    expect(registry.getState('desktop-files', 'file')).toMatchObject({
      domain: 'files',
      priority: 40,
      health: 'idle'
    });
  });

  it('replaces an existing provider for the same plugin and source', () => {
    const registry = new SearchSourceRegistry();
    const first = provider({ pluginId: 'quick-tools', source: 'quick-tools' });
    const second = provider({
      pluginId: 'quick-tools',
      source: 'quick-tools',
      priority: 120
    });

    registry.register(first);
    registry.register(second);

    expect(registry.list()).toHaveLength(1);
    expect(registry.list()[0]).toMatchObject({
      pluginId: 'quick-tools',
      source: 'quick-tools',
      priority: 120
    });
    expect(registry.list()[0].search).toBe(second.search);
    expect(registry.getState('quick-tools', 'quick-tools')).toMatchObject({
      priority: 120
    });
  });

  it('lists only enabled plugin providers', () => {
    const registry = new SearchSourceRegistry();
    registry.register(provider({ pluginId: 'local-launcher', source: 'app' }));
    registry.register(provider({ pluginId: 'desktop-files', source: 'file' }));

    expect(
      registry
        .listEnabled((pluginId) => pluginId === 'desktop-files')
        .map((item) => item.source)
    ).toEqual(['file']);
  });

  it('removes providers and runtime state when a plugin is unregistered', () => {
    const registry = new SearchSourceRegistry();
    const registered = provider({
      pluginId: 'local-launcher',
      source: 'local-launcher'
    });
    registry.register(registered);
    registry.markFailure(registered, new Error('failed'), 10, 20);

    registry.unregisterPlugin('local-launcher');

    expect(registry.list()).toEqual([]);
    expect(registry.getStates()).toEqual([]);
  });

  it('records search health transitions', () => {
    const registry = new SearchSourceRegistry();
    const registered = provider({
      pluginId: 'quick-tools',
      source: 'quick-tools'
    });
    registry.register(registered);

    registry.markSearching(registered, 10);
    expect(registry.getState('quick-tools', 'quick-tools')).toMatchObject({
      health: 'searching',
      lastSearchedAt: 10
    });

    registry.markSuccess(registered, 10, 25);
    expect(registry.getState('quick-tools', 'quick-tools')).toMatchObject({
      health: 'healthy',
      lastSuccessfulAt: 25,
      lastDurationMs: 15
    });

    registry.markFailure(registered, new Error('timeout'), 30, 45);
    expect(registry.getState('quick-tools', 'quick-tools')).toMatchObject({
      health: 'failed',
      lastFailedAt: 45,
      lastDurationMs: 15,
      lastError: 'timeout'
    });
  });

  it('rejects providers without a stable source id', () => {
    const registry = new SearchSourceRegistry();

    expect(() =>
      registry.register(provider({ pluginId: 'bad-plugin', source: ' ' }))
    ).toThrow('缺少 source');
  });
});
