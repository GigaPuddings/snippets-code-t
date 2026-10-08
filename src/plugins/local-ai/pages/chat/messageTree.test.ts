import { describe, expect, it } from 'vitest';
import {
  appendMessageNode,
  collectDescendantIds,
  deleteMessageBranch,
  getDisplayMessages,
  getVisibleMessages,
  findLeafNodeId,
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
  it('does not repeatedly scan the complete tree for every visible sibling', () => {
    let idReads = 0;
    const messages: ChatMessage[] = Array.from({ length: 1000 }, (_, i) => ({
      ...message(
        String(i),
        i === 0 ? 'system' : i % 2 ? 'user' : 'assistant',
        'text'
      ),
      get id() {
        idReads++;
        return String(i);
      },
      type: i === 0 ? 'root' : 'text',
      parentId: i ? String(i - 1) : null,
      childIds: i < 999 ? [String(i + 1)] : []
    }));
    const history: ChatHistoryView = {
      id: 'long',
      title: '',
      createdAt: '',
      updatedAt: '',
      updatedAtLabel: '',
      currentNodeId: '999',
      messages
    };
    const visible = getDisplayMessages(history);
    expect(visible).toHaveLength(999);
    expect(visible[0].siblingLeafNodeIds).toEqual(['999']);
    expect(visible.at(-1)?.message.id).toBe('999');
    expect(idReads).toBeLessThan(20_000);
  });
  it('retains dangling-child and cycle fallbacks without looping', () => {
    const nodes: ChatMessage[] = [
      { ...message('a', 'assistant', ''), childIds: ['b'] },
      { ...message('b', 'assistant', ''), childIds: ['a'] },
      { ...message('dangling', 'assistant', ''), childIds: ['missing'] }
    ];
    expect(findLeafNodeId(nodes, 'a')).toBe('a');
    expect(findLeafNodeId(nodes, 'b')).toBe('b');
    expect(findLeafNodeId(nodes, 'dangling')).toBeNull();
    expect(findLeafNodeId(nodes, null)).toBeNull();
  });
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

describe('local AI chat message deletion', () => {
  it('removes a user branch and its attachment-bearing messages completely', () => {
    const root: ChatMessage = {
      ...message('root', 'system', ''),
      type: 'root',
      parentId: null,
      childIds: ['user-1']
    };
    const user: ChatMessage = {
      ...message('user-1', 'user', 'inspect this'),
      parentId: 'root',
      childIds: ['ai-1'],
      attachments: [
        {
          id: 'image-1',
          name: 'screen.png',
          type: 'image',
          mime: 'image/png',
          size: 128,
          status: 'parsed',
          dataUrl: 'data:image/png;base64,AAAA'
        }
      ]
    };
    const assistant: ChatMessage = {
      ...message('ai-1', 'assistant', 'answer'),
      parentId: 'user-1',
      childIds: []
    };

    const result = deleteMessageBranch(
      [root, user, assistant],
      'ai-1',
      'user-1'
    );

    expect(result?.messages).toEqual([
      expect.objectContaining({ id: 'root', childIds: [] })
    ]);
    expect(result?.currentNodeId).toBe('root');
    expect(result?.deletedIds).toEqual(new Set(['user-1', 'ai-1']));
  });
});
