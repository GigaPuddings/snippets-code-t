export const PENDING_LOCAL_AI_PROMPT_STORAGE_KEY =
  'snippets.localAi.pendingPrompt';

export const PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY =
  'snippets.localAi.pendingPromptMode';

export const PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE = 'new-chat';

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
