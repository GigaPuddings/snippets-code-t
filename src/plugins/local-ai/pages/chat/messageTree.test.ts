import { describe, expect, it } from 'vitest';
import {
  appendMessageNode,
  collectDescendantIds,
  getDisplayMessages,
  getVisibleMessages,
  normalizeMessagesToTree
} from './messageTree';
import type { ChatHistoryView, ChatMessage } from './types';

const message = (
  id: string,
  role: ChatMessage['role'],
  content: string
): ChatMessage => ({
  id,
  role,
  content,
  createdAt: '2026-07-20T10:00:00.000Z'
});

describe('local AI chat message tree', () => {
  it('migrates legacy linear messages into a rooted tree', () => {
    const normalized = normalizeMessagesToTree(
      [
        message('user-1', 'user', 'question'),
        message('ai-1', 'assistant', 'answer')
      ],
      '2026-07-20T10:00:00.000Z'
    );

    expect(normalized.messages).toHaveLength(3);
    expect(normalized.messages[0]).toMatchObject({
      role: 'system',
      type: 'root',
      parentId: null
    });
    expect(normalized.messages[1].parentId).toBe(normalized.messages[0].id);
    expect(normalized.messages[2].parentId).toBe('user-1');
    expect(normalized.currentNodeId).toBe('ai-1');
  });
});

describe('local AI chat message branches', () => {
  it('keeps sibling assistant versions addressable from the visible branch', () => {
    const history: ChatHistoryView = {
      id: 'chat-1',
      title: 'Chat',
      createdAt: '2026-07-20T10:00:00.000Z',
      updatedAt: '2026-07-20T10:00:00.000Z',
      updatedAtLabel: '',
      currentNodeId: 'ai-2',
      messages: [
        {
          ...message('root', 'system', ''),
          type: 'root',
          parentId: null,
          childIds: ['user-1']
        },
        {
          ...message('user-1', 'user', 'question'),
          type: 'text',
          parentId: 'root',
          childIds: ['ai-1', 'ai-2']
        },
        {
          ...message('ai-1', 'assistant', 'first answer'),
          type: 'text',
          parentId: 'user-1',
          childIds: []
        },
        {
          ...message('ai-2', 'assistant', 'second answer'),
          type: 'text',
          parentId: 'user-1',
          childIds: []
        }
      ]
    };

    expect(getVisibleMessages(history).map((item) => item.id)).toEqual([
      'user-1',
      'ai-2'
    ]);
    expect(getDisplayMessages(history).at(-1)).toMatchObject({
      siblingLeafNodeIds: ['ai-1', 'ai-2'],
      siblingCurrentIndex: 1
    });
  });
});

describe('local AI chat message mutations', () => {
  it('appends nodes and collects their complete descendant branch', () => {
    const history: ChatHistoryView = {
      id: 'chat-1',
      title: 'Chat',
      createdAt: '2026-07-20T10:00:00.000Z',
      updatedAt: '2026-07-20T10:00:00.000Z',
      updatedAtLabel: '',
      currentNodeId: 'root',
      messages: [
        {
          ...message('root', 'system', ''),
          type: 'root',
          parentId: null,
          childIds: []
        }
      ]
    };

    appendMessageNode(history, message('user-1', 'user', 'question'));
    appendMessageNode(history, message('ai-1', 'assistant', 'answer'));

    expect(history.currentNodeId).toBe('ai-1');
    expect(collectDescendantIds(history.messages, 'user-1')).toEqual(
      new Set(['user-1', 'ai-1'])
    );
  });
});
