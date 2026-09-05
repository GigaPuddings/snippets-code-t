import { expect, it, vi } from 'vitest';
import {
  cancelAiChatStream,
  createAiChatStreamRequestId,
  streamChatWithAi
} from './index';
import { AiContextProviderRegistry } from './contextRegistry';
import {
  AiProviderRegistry,
  type AiProvider,
  type AiProviderCapability
} from './providerRegistry';

const provider = (overrides: {
  id: string;
  capabilities?: AiProviderCapability[];
  streamChat?: AiProvider['streamChat'];
  cancelChatStream?: AiProvider['cancelChatStream'];
}): AiProvider => ({
  id: overrides.id,
  label: overrides.id,
  capabilities: overrides.capabilities ?? ['chat'],
  chat: vi.fn(async () => ({
    providerId: overrides.id,
    content: `${overrides.id} response`
  })),
  streamChat: overrides.streamChat,
  cancelChatStream: overrides.cancelChatStream
});

it('creates stable stream request ids', () => {
  const first = createAiChatStreamRequestId();
  const second = createAiChatStreamRequestId();

  expect(first).toBeTruthy();
  expect(second).toBeTruthy();
  expect(first).not.toBe(second);
});

it('routes stream chat through the selected provider', async () => {
  const registry = new AiProviderRegistry();
  const onDelta = vi.fn();
  const onStats = vi.fn();
  const streamChat = vi.fn(async (request, onProviderDelta, options) => {
    onProviderDelta('partial ');
    options?.onStats?.({ finishReason: 'stop' });
    return {
      providerId: 'stream-ai',
      content: `${request.messages[0].role}: done`
    };
  }) satisfies AiProvider['streamChat'];
  registry.register(provider({ id: 'stream-ai', streamChat }));

  const response = await streamChatWithAi(
    { messages: [{ role: 'user', content: 'hello' }] },
    onDelta,
    {
      registry,
      providerId: 'stream-ai',
      requestId: 'request-1',
      onStats
    }
  );

  expect(streamChat).toHaveBeenCalledWith(
    { messages: [{ role: 'user', content: 'hello' }] },
    onDelta,
    { requestId: 'request-1', onStats }
  );
  expect(onDelta).toHaveBeenCalledWith('partial ');
  expect(onStats).toHaveBeenCalledWith({ finishReason: 'stop' });
  expect(response).toEqual({
    providerId: 'stream-ai',
    content: 'user: done'
  });
});

it('collects requested context before streaming', async () => {
  const registry = new AiProviderRegistry();
  const contextRegistry = new AiContextProviderRegistry();
  const streamChat = vi.fn(async () => ({
    providerId: 'stream-ai',
    content: 'done'
  })) satisfies AiProvider['streamChat'];
  registry.register(provider({ id: 'stream-ai', streamChat }));
  contextRegistry.register({
    id: 'workspace-search',
    kinds: ['search'],
    collect: vi.fn((request) => ({
      kind: 'search' as const,
      content: String(request.input?.query),
      source: request.providerId
    }))
  });

  await streamChatWithAi(
    { messages: [{ role: 'user', content: 'router guard' }] },
    vi.fn(),
    {
      registry,
      contextRegistry,
      providerId: 'stream-ai',
      contextCollection: { kind: 'search' }
    }
  );

  expect(streamChat).toHaveBeenCalledWith(
    {
      messages: [{ role: 'user', content: 'router guard' }],
      context: {
        items: [
          {
            kind: 'search',
            content: 'router guard',
            source: 'stream-ai'
          }
        ]
      }
    },
    expect.any(Function),
    { requestId: undefined, onStats: undefined }
  );
});

it('falls back to non-streaming chat providers', async () => {
  const registry = new AiProviderRegistry();
  const onDelta = vi.fn();
  const syncProvider = provider({ id: 'sync-ai' });
  registry.register(syncProvider);

  const response = await streamChatWithAi(
    { messages: [{ role: 'user', content: 'hello' }] },
    onDelta,
    { registry, providerId: 'sync-ai' }
  );

  expect(syncProvider.chat).toHaveBeenCalledOnce();
  expect(onDelta).toHaveBeenCalledWith('sync-ai response');
  expect(response).toEqual({
    providerId: 'sync-ai',
    content: 'sync-ai response'
  });
});

it('routes stream cancellation through the selected provider', async () => {
  const registry = new AiProviderRegistry();
  const cancelChatStream = vi.fn(async () => true);
  registry.register(provider({ id: 'stream-ai', cancelChatStream }));

  await expect(
    cancelAiChatStream('request-1', { registry, providerId: 'stream-ai' })
  ).resolves.toBe(true);

  expect(cancelChatStream).toHaveBeenCalledWith('request-1');
});

it('returns false when the selected provider cannot cancel streams', async () => {
  const registry = new AiProviderRegistry();
  registry.register(provider({ id: 'sync-ai' }));

  await expect(
    cancelAiChatStream('request-1', { registry, providerId: 'sync-ai' })
  ).resolves.toBe(false);
});
