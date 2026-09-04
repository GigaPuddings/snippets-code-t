import { expect, it, vi } from 'vitest';
import type { MarkdownFile } from '@/types';
import { AiContextProviderRegistry } from './contextRegistry';
import {
  ensureBuiltinAiContextProvidersRegistered,
  SEARCH_AI_CONTEXT_PROVIDER_ID,
  SELECTION_AI_CONTEXT_PROVIDER_ID,
  WORKSPACE_AI_CONTEXT_PROVIDER_ID
} from './builtinContextProviders';

const markdownFile = (overrides: Partial<MarkdownFile> = {}): MarkdownFile => ({
  id: 'notes/router.md',
  title: 'Router Notes',
  content: 'Vue router guard and plugin route examples',
  categoryId: 1,
  categoryName: 'Frontend',
  tags: ['vue'],
  created: '2026-01-01T00:00:00.000Z',
  modified: '2026-01-01T00:00:00.000Z',
  type: 'note',
  favorite: false,
  filePath: 'notes/router.md',
  score: 0.92,
  ...overrides
});

it('registers stable core providers only once', () => {
  const registry = new AiContextProviderRegistry();

  ensureBuiltinAiContextProvidersRegistered(registry);
  ensureBuiltinAiContextProvidersRegistered(registry);

  expect(registry.list().map((provider) => provider.id)).toEqual([
    SELECTION_AI_CONTEXT_PROVIDER_ID,
    WORKSPACE_AI_CONTEXT_PROVIDER_ID,
    SEARCH_AI_CONTEXT_PROVIDER_ID
  ]);
});

it('collects explicit selection context input', async () => {
  const registry = new AiContextProviderRegistry();
  ensureBuiltinAiContextProvidersRegistered(registry);

  await expect(
    registry.collect({
      kind: 'selection',
      input: {
        selectionText: '  const answer = 42  ',
        selectionSource: 'editor',
        selectionFilePath: 'src/App.vue',
        selectionStartLine: 12,
        selectionEndLine: 14,
        selectionMetadata: {
          retry: false
        }
      }
    })
  ).resolves.toEqual({
    items: [
      {
        kind: 'selection',
        title: 'Current selection',
        source: 'editor',
        content: 'const answer = 42',
        metadata: {
          retry: false,
          filePath: 'src/App.vue',
          startLine: 12,
          endLine: 14
        }
      }
    ]
  });
});

it('collects current workspace content and root metadata', async () => {
  const registry = new AiContextProviderRegistry();
  ensureBuiltinAiContextProvidersRegistered(registry, {
    getWorkspaceRoot: vi.fn(async () => 'E:\\Workspace')
  });

  await expect(
    registry.collect({
      kind: 'workspace',
      input: {
        currentTitle: 'Current Note',
        currentContent: '  current body  ',
        currentFilePath: 'notes/current.md',
        currentType: 'note'
      }
    })
  ).resolves.toMatchObject({
    items: [
      {
        kind: 'workspace',
        title: 'Current Note',
        source: 'notes/current.md',
        content: 'current body',
        metadata: {
          filePath: 'notes/current.md',
          type: 'note'
        }
      },
      {
        kind: 'workspace',
        title: 'Workspace root',
        source: 'workspace.root',
        content: 'Workspace root: E:\\Workspace'
      }
    ]
  });
});

it('collects bounded search context from markdown search', async () => {
  const registry = new AiContextProviderRegistry();
  const searchMarkdownFiles = vi.fn(async () => [
    markdownFile(),
    markdownFile({
      id: 'notes/empty.md',
      title: 'Empty',
      content: '   ',
      filePath: 'notes/empty.md'
    })
  ]);
  ensureBuiltinAiContextProvidersRegistered(registry, {
    searchMarkdownFiles
  });

  const context = await registry.collect({
    kind: 'search',
    input: { query: 'router' }
  });

  expect(searchMarkdownFiles).toHaveBeenCalledWith('router');
  expect(context).toEqual({
    items: [
      {
        kind: 'search',
        title: 'Router Notes',
        source: 'notes/router.md',
        content: 'Vue router guard and plugin route examples',
        metadata: {
          filePath: 'notes/router.md',
          category: 'Frontend',
          type: 'note',
          score: 0.92
        }
      }
    ]
  });
});
