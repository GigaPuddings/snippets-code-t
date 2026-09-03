import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  aiProviderRegistry,
  LOCAL_AI_PROVIDER_ID,
  type AiProviderCapability
} from '@/ai';
import {
  registerPluginAiProvider,
  unregisterAiProvidersForPlugin,
  type RuntimeAiProviderRegistration
} from './ai-providers';

const provider = (overrides: {
  id: string;
  capabilities?: AiProviderCapability[];
}): RuntimeAiProviderRegistration => ({
  id: overrides.id,
  label: overrides.id,
  capabilities: overrides.capabilities ?? ['chat'],
  getStatus: vi.fn(async () => ({
    providerId: 'wrong-provider',
    available: true,
    healthy: true
  })),
  start: vi.fn(async () => ({
    providerId: 'wrong-provider',
    available: true,
    running: true
  })),
  chat: vi.fn(async () => ({
    providerId: 'wrong-provider',
    content: `${overrides.id} response`
  })),
  translate: vi.fn(async () => ({
    providerId: 'wrong-provider',
    text: `${overrides.id} translated`
  }))
});

describe('plugin AI providers', () => {
  beforeEach(() => {
    aiProviderRegistry.clear();
    vi.clearAllMocks();
  });

  it('registers plugin-owned providers without replacing the builtin provider', async () => {
    const registered = provider({
      id: 'remote-ai',
      capabilities: ['chat', 'translation']
    });

    registerPluginAiProvider('remote-ai-plugin', registered);

    const stored = aiProviderRegistry.require('remote-ai');
    expect(stored.pluginId).toBe('remote-ai-plugin');
    expect(aiProviderRegistry.get(LOCAL_AI_PROVIDER_ID)?.pluginId).toBe(
      'local-ai'
    );
    await expect(stored.getStatus?.()).resolves.toMatchObject({
      providerId: 'remote-ai',
      healthy: true
    });
    await expect(
      stored.chat({ messages: [{ role: 'user', content: 'hello' }] })
    ).resolves.toMatchObject({
      providerId: 'remote-ai',
      content: 'remote-ai response'
    });
    await expect(
      stored.translate?.({ text: 'hello', from: 'en', to: 'zh' })
    ).resolves.toMatchObject({
      providerId: 'remote-ai',
      text: 'remote-ai translated'
    });
  });

  it('clears plugin-owned providers while keeping builtin providers', () => {
    registerPluginAiProvider('remote-ai-plugin', provider({ id: 'remote-ai' }));

    unregisterAiProvidersForPlugin('remote-ai-plugin');

    expect(aiProviderRegistry.get('remote-ai')).toBeUndefined();
    expect(aiProviderRegistry.get(LOCAL_AI_PROVIDER_ID)?.pluginId).toBe(
      'local-ai'
    );
  });

  it('rejects plugin providers that collide with builtin provider ids', () => {
    expect(() =>
      registerPluginAiProvider(
        'remote-ai-plugin',
        provider({ id: LOCAL_AI_PROVIDER_ID })
      )
    ).toThrow('已由 local-ai 注册');
  });
});
