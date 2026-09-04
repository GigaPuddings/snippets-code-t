import { expect, it, vi } from 'vitest';
import { chatWithAi, createSelectionAiContext, translateWithAi } from './index';
import { AiContextProviderRegistry } from './contextRegistry';
import {
  AiProviderRegistry,
  type AiProvider,
  type AiProviderCapability
} from './providerRegistry';

const provider = (overrides: {
  id: string;
  capabilities?: AiProviderCapability[];
}): AiProvider => ({
  id: overrides.id,
  label: overrides.id,
  capabilities: overrides.capabilities ?? ['chat'],
  chat: vi.fn(async () => ({
    providerId: overrides.id,
    content: `${overrides.id} response`
  }))
});

it('does not collect context unless requested by the caller', async () => {
  const registry = new AiProviderRegistry();
  const contextRegistry = new AiContextProviderRegistry();
  const collect = vi.fn(() => ({
    kind: 'search' as const,
    content: 'workspace hit'
  }));
  const selected = provider({ id: 'local-ai' });
  registry.register(selected);
  contextRegistry.register({
    id: 'workspace-search',
    kinds: ['search'],
    collect
  });

  await chatWithAi(
    { messages: [{ role: 'user', content: 'router' }] },
    { registry, contextRegistry }
  );

  expect(collect).not.toHaveBeenCalled();
  expect(selected.chat).toHaveBeenCalledWith({
    messages: [{ role: 'user', content: 'router' }]
  });
});

it('collects requested context before routing chat requests', async () => {
  const registry = new AiProviderRegistry();
  const contextRegistry = new AiContextProviderRegistry();
  const selected = provider({ id: 'local-ai' });
  registry.register(selected);
  contextRegistry.register({
    id: 'workspace-search',
    kinds: ['search'],
    collect: vi.fn((request) => ({
      kind: 'search' as const,
      content: String(request.input?.query),
      source: request.providerId
    }))
  });

  await chatWithAi(
    {
      messages: [{ role: 'user', content: 'router guard' }],
      context: createSelectionAiContext('selected code')
    },
    {
      registry,
      contextRegistry,
      contextCollection: { kind: 'search' }
    }
  );

  expect(selected.chat).toHaveBeenCalledWith({
    messages: [{ role: 'user', content: 'router guard' }],
    context: {
      items: [
        { kind: 'selection', content: 'selected code' },
        {
          kind: 'search',
          content: 'router guard',
          source: 'local-ai'
        }
      ]
    }
  });
});

it('collects requested context before routing translation requests', async () => {
  const registry = new AiProviderRegistry();
  const contextRegistry = new AiContextProviderRegistry();
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
  contextRegistry.register({
    id: 'selection',
    kinds: ['selection'],
    capabilities: ['translation'],
    collect: vi.fn((request) => ({
      kind: 'selection' as const,
      content: String(request.input?.selectionText),
      source: request.operation
    }))
  });

  await translateWithAi(
    { text: 'hello', from: 'en', to: 'zh' },
    {
      registry,
      contextRegistry,
      contextCollection: { kind: 'selection' }
    }
  );

  expect(selected.translate).toHaveBeenCalledWith({
    text: 'hello',
    from: 'en',
    to: 'zh',
    context: {
      items: [
        {
          kind: 'selection',
          content: 'hello',
          source: 'translation'
        }
      ]
    }
  });
});
