import { expect, it, vi } from 'vitest';
import {
  AiContextProviderRegistry,
  collectAiRequestContext,
  createAiContextProviderRegistry
} from './contextRegistry';

it('registers context providers with priority ordering', () => {
  const registry = new AiContextProviderRegistry();
  registry.register({
    id: 'workspace',
    kinds: ['workspace'],
    priority: 10,
    collect: vi.fn()
  });
  registry.register({
    id: 'selection',
    kinds: ['selection'],
    priority: 100,
    collect: vi.fn()
  });

  expect(registry.list().map((provider) => provider.id)).toEqual([
    'selection',
    'workspace'
  ]);
});

it('filters providers by kind, capability, and plugin enabled state', () => {
  const registry = new AiContextProviderRegistry();
  registry.register({
    id: 'enabled-selection',
    pluginId: 'enabled',
    kinds: ['selection'],
    capabilities: ['chat'],
    collect: vi.fn()
  });
  registry.register({
    id: 'disabled-workspace',
    pluginId: 'disabled',
    kinds: ['workspace'],
    capabilities: ['translation'],
    collect: vi.fn()
  });

  expect(
    registry
      .list({
        kind: 'selection',
        capability: 'chat',
        isPluginEnabled: (pluginId) => pluginId === 'enabled'
      })
      .map((provider) => provider.id)
  ).toEqual(['enabled-selection']);
});

it('collects and normalizes context from registered providers', async () => {
  const registry = createAiContextProviderRegistry();
  registry.register({
    id: 'selection',
    kinds: ['selection'],
    collect: vi.fn(() => ({
      kind: 'selection' as const,
      content: '  selected text  ',
      source: 'editor'
    }))
  });
  registry.register({
    id: 'workspace',
    kinds: ['workspace'],
    collect: vi.fn(() => ({
      items: [
        {
          kind: 'workspace' as const,
          content: 'workspace note'
        }
      ]
    }))
  });

  await expect(collectAiRequestContext({}, registry)).resolves.toEqual({
    items: [
      {
        kind: 'selection',
        content: 'selected text',
        source: 'editor'
      },
      {
        kind: 'workspace',
        content: 'workspace note'
      }
    ]
  });
});

it('passes collection request metadata to providers', async () => {
  const registry = new AiContextProviderRegistry();
  const collect = vi.fn(() => null);
  registry.register({
    id: 'search',
    kinds: ['search'],
    capabilities: ['chat'],
    collect
  });

  await registry.collect({
    kind: 'search',
    capability: 'chat',
    operation: 'chat',
    providerId: 'local-ai',
    input: { query: 'routes' }
  });

  expect(collect).toHaveBeenCalledWith({
    kind: 'search',
    capability: 'chat',
    operation: 'chat',
    providerId: 'local-ai',
    input: { query: 'routes' }
  });
});

it('removes plugin-owned context providers', () => {
  const registry = new AiContextProviderRegistry();
  registry.register({
    id: 'selection',
    pluginId: 'selection-plugin',
    kinds: ['selection'],
    collect: vi.fn()
  });

  registry.unregisterPlugin('selection-plugin');

  expect(registry.list()).toEqual([]);
});

it('rejects invalid provider metadata and results', async () => {
  const registry = new AiContextProviderRegistry();
  expect(() =>
    registry.register({ id: ' ', kinds: ['selection'], collect: vi.fn() })
  ).toThrow('缺少稳定 id');
  expect(() =>
    registry.register({ id: 'bad', kinds: [], collect: vi.fn() })
  ).toThrow('缺少有效 kind');

  registry.register({
    id: 'bad-result',
    kinds: ['selection'],
    collect: vi.fn(() => ({ bad: true }) as never)
  });
  await expect(registry.collect()).rejects.toThrow('返回无效上下文');
});
