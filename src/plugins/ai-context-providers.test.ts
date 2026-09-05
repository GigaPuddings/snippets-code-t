import { beforeEach, expect, it, vi } from 'vitest';
import { aiContextProviderRegistry } from '@/ai';
import {
  registerPluginAiContextProvider,
  unregisterAiContextProvidersForPlugin
} from './ai-context-providers';

beforeEach(() => {
  aiContextProviderRegistry.clear();
});

it('registers plugin-owned AI context providers', async () => {
  const collect = vi.fn(() => ({
    kind: 'selection' as const,
    content: 'selected text'
  }));

  registerPluginAiContextProvider('selection-plugin', {
    id: 'selection-context',
    kinds: ['selection'],
    capabilities: ['chat'],
    collect
  });

  expect(aiContextProviderRegistry.list()[0]).toMatchObject({
    id: 'selection-context',
    pluginId: 'selection-plugin',
    kinds: ['selection'],
    capabilities: ['chat']
  });
  await expect(aiContextProviderRegistry.collect()).resolves.toEqual({
    items: [{ kind: 'selection', content: 'selected text' }]
  });
});

it('clears plugin-owned AI context providers', () => {
  registerPluginAiContextProvider('selection-plugin', {
    id: 'selection-context',
    kinds: ['selection'],
    collect: vi.fn()
  });

  unregisterAiContextProvidersForPlugin('selection-plugin');

  expect(aiContextProviderRegistry.list()).toEqual([]);
});
