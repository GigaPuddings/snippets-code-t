import { describe, expect, it } from 'vitest';

import {
  markPendingLocalAiPromptForNewChat,
  pendingLocalAiPromptRequiresNewChat,
  PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY,
  PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE,
  PENDING_LOCAL_AI_PROMPT_STORAGE_KEY
} from './promptTransfer';

const createStorage = (): Pick<Storage, 'getItem' | 'setItem'> => {
  const values = new Map<string, string>();

  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value): void => {
      values.set(key, value);
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
});
