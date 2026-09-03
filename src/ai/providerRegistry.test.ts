import { describe, expect, it, vi } from 'vitest';
import { chatWithAi, translateWithAi } from './index';
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
}): AiProvider => ({
  id: overrides.id,
  label: overrides.id,
  pluginId: overrides.pluginId,
  capabilities: overrides.capabilities ?? ['chat'],
  priority: overrides.priority,
  chat: vi.fn(async () => ({
    providerId: overrides.id,
    content: `${overrides.id} response`
  }))
});

describe('AiProviderRegistry', () => {
  it('registers providers with capability and priority ordering', () => {
    const registry = new AiProviderRegistry();
    registry.register(provider({ id: 'remote-ai', priority: 10 }));
    registry.register(provider({ id: 'local-ai', priority: 100 }));

    expect(registry.list().map((item) => item.id)).toEqual([
      'local-ai',
      'remote-ai'
    ]);
  });

  it('replaces existing providers by id', () => {
    const registry = new AiProviderRegistry();
    registry.register(provider({ id: 'local-ai', priority: 10 }));
    registry.register(provider({ id: 'local-ai', priority: 50 }));

    expect(registry.list()).toHaveLength(1);
    expect(registry.require('local-ai').priority).toBe(50);
  });

  it('rejects providers that collide with another owner', () => {
    const registry = new AiProviderRegistry();
    registry.register(provider({ id: 'local-ai', pluginId: 'local-ai' }));

    expect(() =>
      registry.register(provider({ id: 'local-ai', pluginId: 'remote-ai' }))
    ).toThrow('已由 local-ai 注册');
  });

  it('filters providers by plugin enabled state', () => {
    const registry = new AiProviderRegistry();
    registry.register(
      provider({ id: 'local-ai', pluginId: 'local-ai', priority: 100 })
    );
    registry.register(
      provider({ id: 'remote-ai', pluginId: 'remote-ai', priority: 90 })
    );

    expect(
      registry
        .list({ isPluginEnabled: (pluginId) => pluginId === 'remote-ai' })
        .map((item) => item.id)
    ).toEqual(['remote-ai']);
  });

  it('selects a default provider by requested capability', () => {
    const registry = new AiProviderRegistry();
    registry.register(provider({ id: 'text-ai', capabilities: ['chat'] }));
    registry.register(
      provider({
        id: 'vision-ai',
        capabilities: ['chat', 'vision'],
        priority: 5
      })
    );

    expect(registry.getDefault({ capability: 'vision' })?.id).toBe('vision-ai');
  });

  it('routes chat requests through the selected provider', async () => {
    const registry = new AiProviderRegistry();
    const selected = provider({
      id: 'vision-ai',
      capabilities: ['chat', 'vision']
    });
    registry.register(selected);

    const response = await chatWithAi(
      {
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: 'read this' },
              {
                type: 'image_url',
                image_url: { url: 'data:image/png;base64,' }
              }
            ]
          }
        ]
      },
      { registry }
    );

    expect(selected.chat).toHaveBeenCalledOnce();
    expect(response).toMatchObject({
      providerId: 'vision-ai',
      content: 'vision-ai response'
    });
  });

  it('routes translation requests through providers with translation capability', async () => {
    const registry = new AiProviderRegistry();
    const selected = {
      ...provider({
        id: 'translate-ai',
        capabilities: ['chat', 'translation']
      }),
      translate: vi.fn(async () => ({
        providerId: 'translate-ai',
        text: '你好'
      }))
    };
    registry.register(selected);

    const response = await translateWithAi(
      { text: 'hello', from: 'en', to: 'zh' },
      { registry }
    );

    expect(selected.translate).toHaveBeenCalledWith({
      text: 'hello',
      from: 'en',
      to: 'zh'
    });
    expect(response).toEqual({
      providerId: 'translate-ai',
      text: '你好'
    });
  });

  it('unregisters plugin-owned providers', () => {
    const registry = new AiProviderRegistry();
    registry.register(provider({ id: 'local-ai', pluginId: 'local-ai' }));

    registry.unregisterPlugin('local-ai');

    expect(registry.list()).toEqual([]);
  });

  it('rejects invalid provider metadata', () => {
    const registry = new AiProviderRegistry();

    expect(() => registry.register(provider({ id: ' ' }))).toThrow(
      '缺少稳定 id'
    );
    expect(() =>
      registry.register(provider({ id: 'empty-ai', capabilities: [] }))
    ).toThrow('缺少 capability');
  });
});
