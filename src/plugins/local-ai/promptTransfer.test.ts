import { describe, expect, it } from 'vitest';

import {
  clearPendingLocalAiNewChat,
  hasPendingLocalAiNewChat,
  markPendingLocalAiNewChat,
  markPendingLocalAiPromptForNewChat,
  PENDING_LOCAL_AI_NEW_CHAT_MAX_AGE_MS,
  PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY,
  pendingLocalAiPromptRequiresNewChat,
  PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY,
  PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE,
  PENDING_LOCAL_AI_PROMPT_STORAGE_KEY
} from './promptTransfer';

const createStorage = (): Pick<
  Storage,
  'getItem' | 'setItem' | 'removeItem'
> => {
  const values = new Map<string, string>();

  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value): void => {
      values.set(key, value);
    },
    removeItem: (key): void => {
      values.delete(key);
    }
  };
};

describe('local AI prompt transfer', () => {
  it('marks a transferred prompt as requiring a new chat', () => {
    const storage = createStorage();

    markPendingLocalAiPromptForNewChat(storage, '解释这段代码');

    expect(storage.getItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY)).toBe(
      '解释这段代码'
    );
    expect(storage.getItem(PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY)).toBe(
      PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE
    );
    expect(pendingLocalAiPromptRequiresNewChat(storage)).toBe(true);
  });

  it('does not require a new chat without the transfer marker', () => {
    const storage = createStorage();

    expect(pendingLocalAiPromptRequiresNewChat(storage)).toBe(false);
  });

  it('keeps a recent new-chat request available across a component remount', () => {
    const storage = createStorage();
    const requestedAt = 1_000;

    markPendingLocalAiNewChat(storage, requestedAt);

    expect(storage.getItem(PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY)).toBe(
      String(requestedAt)
    );
    expect(hasPendingLocalAiNewChat(storage, requestedAt + 500)).toBe(true);

    clearPendingLocalAiNewChat(storage);
    expect(hasPendingLocalAiNewChat(storage, requestedAt + 500)).toBe(false);
  });

  it('discards an expired new-chat request', () => {
    const storage = createStorage();
    const requestedAt = 1_000;
    markPendingLocalAiNewChat(storage, requestedAt);

    expect(
      hasPendingLocalAiNewChat(
        storage,
        requestedAt + PENDING_LOCAL_AI_NEW_CHAT_MAX_AGE_MS + 1
      )
    ).toBe(false);
    expect(storage.getItem(PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY)).toBeNull();
  });
});
