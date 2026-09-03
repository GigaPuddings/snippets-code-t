import { expect, it, vi } from 'vitest';
import {
  getAiProviderStatusSnapshots,
  listAiProviders
} from './providerStatus';
import {
  AiProviderRegistry,
  type AiProvider,
  type AiProviderCapability
} from './providerRegistry';

const provider = (overrides: {
  id: string;
  pluginId?: string;
  capabilities?: AiProviderCapability[];
  priority?: number;
  getStatus?: AiProvider['getStatus'];
  start?: AiProvider['start'];
}): AiProvider => ({
  id: overrides.id,
  label: overrides.id,
  pluginId: overrides.pluginId,
  capabilities: overrides.capabilities ?? ['chat'],
  priority: overrides.priority,
  getStatus: overrides.getStatus,
  start: overrides.start,
  chat: vi.fn(async () => ({
    providerId: overrides.id,
    content: `${overrides.id} response`
  }))
});

it('lists provider descriptors with start capability', () => {
  const registry = new AiProviderRegistry();
  registry.register(
    provider({
      id: 'local-ai',
      capabilities: ['chat', 'translation'],
      start: vi.fn()
    })
  );

  expect(listAiProviders({}, registry)).toEqual([
    expect.objectContaining({
      id: 'local-ai',
      capabilities: ['chat', 'translation'],
      canStart: true
    })
  ]);
});

it('reads provider status snapshots and defaults providers without status probes', async () => {
  const registry = new AiProviderRegistry();
  registry.register(
    provider({
      id: 'remote-ai',
      getStatus: vi.fn(async () => ({
        providerId: 'remote-ai',
        available: true,
        healthy: true,
        modelName: 'remote-model'
      }))
    })
  );
  registry.register(provider({ id: 'basic-ai', priority: 1 }));

  await expect(getAiProviderStatusSnapshots({}, registry)).resolves.toEqual([
    expect.objectContaining({
      id: 'basic-ai',
      status: {
        providerId: 'basic-ai',
        available: true,
        healthy: true
      }
    }),
    expect.objectContaining({
      id: 'remote-ai',
      status: expect.objectContaining({
        providerId: 'remote-ai',
        modelName: 'remote-model'
      })
    })
  ]);
});

it('normalizes failed provider status probes into unavailable snapshots', async () => {
  const registry = new AiProviderRegistry();
  registry.register(
    provider({
      id: 'broken-ai',
      getStatus: vi.fn(async () => {
        throw new Error('offline');
      })
    })
  );

  await expect(getAiProviderStatusSnapshots({}, registry)).resolves.toEqual([
    expect.objectContaining({
      id: 'broken-ai',
      status: {
        providerId: 'broken-ai',
        available: false,
        healthy: false,
        lastError: 'offline'
      }
    })
  ]);
});

it('filters status snapshots by enabled plugin providers', async () => {
  const registry = new AiProviderRegistry();
  registry.register(
    provider({ id: 'local-ai', pluginId: 'local-ai', priority: 100 })
  );
  registry.register(
    provider({ id: 'remote-ai', pluginId: 'remote-ai', priority: 90 })
  );

  await expect(
    getAiProviderStatusSnapshots(
      { isPluginEnabled: (pluginId) => pluginId === 'remote-ai' },
      registry
    )
  ).resolves.toEqual([
    expect.objectContaining({
      id: 'remote-ai'
    })
  ]);
});
