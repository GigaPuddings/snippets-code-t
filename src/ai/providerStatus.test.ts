import { afterEach, expect, it, vi } from 'vitest';
import {
  getAiProviderStatusSnapshots,
  listAiProviders
} from './providerStatus';
import {
  AiProviderRegistry,
  type AiProvider,
  type AiProviderCapability,
  type AiProviderStatus
} from './providerRegistry';

afterEach(() => {
  vi.useRealTimers();
});

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

it.each(['resolve', 'reject'] as const)(
  'isolates a stalled probe and ignores its late %s',
  async (settlement) => {
    vi.useFakeTimers();
    const registry = new AiProviderRegistry();
    let resolveProbe!: (status: AiProviderStatus) => void;
    let rejectProbe!: (error: Error) => void;
    const probe = new Promise<AiProviderStatus>((resolve, reject) => {
      resolveProbe = resolve;
      rejectProbe = reject;
    });
    registry.register(provider({ id: 'stalled-ai', getStatus: () => probe }));
    registry.register(
      provider({
        id: 'healthy-ai',
        getStatus: async () => ({ providerId: 'healthy-ai', available: true })
      })
    );

    const snapshotsPromise = getAiProviderStatusSnapshots({}, registry);
    await vi.advanceTimersByTimeAsync(5000);
    const snapshots = await snapshotsPromise;
    expect(snapshots).toEqual([
      expect.objectContaining({
        id: 'healthy-ai',
        status: { providerId: 'healthy-ai', available: true }
      }),
      expect.objectContaining({
        id: 'stalled-ai',
        status: {
          providerId: 'stalled-ai',
          available: false,
          healthy: false,
          lastError: expect.stringContaining('timed out')
        }
      })
    ]);
    if (settlement === 'resolve') {
      resolveProbe({ providerId: 'stalled-ai', available: true });
    } else {
      rejectProbe(new Error('late failure'));
    }
    await vi.advanceTimersByTimeAsync(0);
    expect(snapshots[1].status.available).toBe(false);
    expect(vi.getTimerCount()).toBe(0);
  }
);

it.each(['success', 'sync failure', 'async failure'])(
  'clears probe timers after %s',
  async (outcome) => {
    vi.useFakeTimers();
    const registry = new AiProviderRegistry();
    registry.register(
      provider({
        id: 'test-ai',
        getStatus: () => {
          if (outcome === 'sync failure') throw new Error('sync failure');
          if (outcome === 'async failure')
            return Promise.reject(new Error('async failure'));
          return Promise.resolve({ providerId: 'test-ai', available: true });
        }
      })
    );
    const snapshots = await getAiProviderStatusSnapshots({}, registry);
    expect(snapshots[0].status.available).toBe(outcome === 'success');
    expect(vi.getTimerCount()).toBe(0);
  }
);
