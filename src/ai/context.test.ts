import { expect, it } from 'vitest';
import {
  createAiRequestContext,
  createSearchAiContext,
  createSelectionAiContext,
  createWorkspaceAiContext,
  mergeAiRequestContexts,
  normalizeAiRequestContext,
  withAiRequestContext
} from './context';

it('normalizes context items and drops empty content', () => {
  expect(
    createAiRequestContext([
      {
        kind: 'selection',
        content: '  selected text  ',
        title: '  Current selection  ',
        source: '  editor  ',
        metadata: { line: 12 }
      },
      {
        kind: 'workspace',
        content: '  '
      }
    ])
  ).toEqual({
    items: [
      {
        kind: 'selection',
        content: 'selected text',
        title: 'Current selection',
        source: 'editor',
        metadata: { line: 12 }
      }
    ]
  });
});

it('limits context item count and content length', () => {
  expect(
    createAiRequestContext(
      [
        { kind: 'selection', content: '1234567890' },
        { kind: 'search', content: 'keep' }
      ],
      { maxItemLength: 6, maxItems: 1 }
    )
  ).toEqual({
    items: [
      {
        kind: 'selection',
        content: '123456'
      }
    ]
  });
});

it('creates kind-specific request contexts', () => {
  expect(createSelectionAiContext('selection', { source: 'editor' })).toEqual({
    items: [{ kind: 'selection', content: 'selection', source: 'editor' }]
  });
  expect(createWorkspaceAiContext('workspace')).toEqual({
    items: [{ kind: 'workspace', content: 'workspace' }]
  });
  expect(createSearchAiContext('query')).toEqual({
    items: [{ kind: 'search', content: 'query' }]
  });
});

it('normalizes and merges contexts', () => {
  const first = createSelectionAiContext('selected text');
  const second = createWorkspaceAiContext('workspace note');

  expect(mergeAiRequestContexts([first, undefined, second])).toEqual({
    items: [
      { kind: 'selection', content: 'selected text' },
      { kind: 'workspace', content: 'workspace note' }
    ]
  });
  expect(normalizeAiRequestContext({ items: [] })).toBeUndefined();
});

it('appends request context without mutating the original request', () => {
  const request = {
    text: 'hello',
    from: 'en',
    to: 'zh',
    context: createSearchAiContext('previous query')
  };

  expect(
    withAiRequestContext(request, createSelectionAiContext('hello'))
  ).toEqual({
    text: 'hello',
    from: 'en',
    to: 'zh',
    context: {
      items: [
        { kind: 'search', content: 'previous query' },
        { kind: 'selection', content: 'hello' }
      ]
    }
  });
  expect(request.context).toEqual(createSearchAiContext('previous query'));
});

it('omits empty context fields from merged requests', () => {
  expect(
    withAiRequestContext(
      {
        messages: [{ role: 'user', content: 'hello' }]
      },
      undefined
    )
  ).toStrictEqual({
    messages: [{ role: 'user', content: 'hello' }]
  });
});
