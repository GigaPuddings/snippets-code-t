export const PENDING_LOCAL_AI_PROMPT_STORAGE_KEY =
  'snippets.localAi.pendingPrompt';

export const PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY =
  'snippets.localAi.pendingPromptMode';

export const PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE = 'new-chat';

export const PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY =
  'snippets.localAi.pendingNewChatAt';

export const PENDING_LOCAL_AI_NEW_CHAT_MAX_AGE_MS = 10_000;

export const markPendingLocalAiPromptForNewChat = (
  storage: Pick<Storage, 'setItem'>,
  prompt: string
): void => {
  storage.setItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY, prompt);
  storage.setItem(
    PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY,
    PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE
  );
};

export const pendingLocalAiPromptRequiresNewChat = (
  storage: Pick<Storage, 'getItem'>
): boolean =>
  storage.getItem(PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY) ===
  PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE;

export const markPendingLocalAiNewChat = (
  storage: Pick<Storage, 'setItem'>,
  now = Date.now()
): void => {
  storage.setItem(PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY, String(now));
};

export const hasPendingLocalAiNewChat = (
  storage: Pick<Storage, 'getItem' | 'removeItem'>,
  now = Date.now()
): boolean => {
  const storedRequestedAt = storage.getItem(
    PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY
  );
  if (storedRequestedAt === null) return false;

  const requestedAt = Number(storedRequestedAt);
  const age = now - requestedAt;
  if (
    !Number.isFinite(requestedAt) ||
    age < 0 ||
    age > PENDING_LOCAL_AI_NEW_CHAT_MAX_AGE_MS
  ) {
    storage.removeItem(PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY);
    return false;
  }
  return true;
};

export const clearPendingLocalAiNewChat = (
  storage: Pick<Storage, 'removeItem'>
): void => {
  storage.removeItem(PENDING_LOCAL_AI_NEW_CHAT_STORAGE_KEY);
};
