import { describe, expect, it } from 'vitest';
import { effectScope, ref } from 'vue';
import { useChatMessageWindow } from './useChatMessageWindow';
import type { ChatDisplayMessage } from './types';

const messages = (count: number): ChatDisplayMessage[] =>
  Array.from({ length: count }, (_, i) => ({
    message: {
      id: String(i),
      role: 'assistant',
      content: `Reply ${i}`,
      createdAt: ''
    },
    siblingLeafNodeIds: [String(i)],
    siblingCurrentIndex: 0
  }));

describe('chat history render window', () => {
  it('initially mounts the latest 20, loads earlier pages and preserves all messages', () => {
    const scope = effectScope();
    const all = ref(messages(65));
    const historyId = ref('first');
    const state = scope.run(() => useChatMessageWindow(all, historyId))!;
    expect(state.messages.value.map((item) => item.message.id)).toEqual(
      Array.from({ length: 20 }, (_, i) => String(45 + i))
    );
    expect(state.earlierCount.value).toBe(45);
    state.showEarlier();
    expect(state.messages.value[0].message.id).toBe('25');
    state.showEarlier();
    state.showEarlier();
    expect(state.earlierCount.value).toBe(0);
    expect(state.messages.value).toHaveLength(65);
    expect(all.value).toHaveLength(65);
    all.value.push(
      ...messages(1).map((item) => ({
        ...item,
        message: { ...item.message, id: 'new-reply' }
      }))
    );
    expect(state.messages.value.at(-1)?.message.id).toBe('new-reply');
    historyId.value = 'second';
    expect(state.messages.value).toHaveLength(20);
    expect(state.earlierCount.value).toBe(46);
    scope.stop();
  });
  it('keeps short and empty chats fully visible', () => {
    const scope = effectScope();
    const all = ref(messages(2));
    const state = scope.run(() => useChatMessageWindow(all, ref('first')))!;
    expect(state.messages.value).toHaveLength(2);
    expect(state.earlierCount.value).toBe(0);
    all.value = [];
    expect(state.messages.value).toEqual([]);
    expect(state.earlierCount.value).toBe(0);
    scope.stop();
  });
});
