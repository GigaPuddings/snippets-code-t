import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { invoke } from '@tauri-apps/api/core';
import { openNewLocalAiChat } from './localAi';
import {
  PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY,
  PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE,
  PENDING_LOCAL_AI_PROMPT_STORAGE_KEY
} from '@/plugins/local-ai/promptTransfer';

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
afterEach(() => vi.unstubAllGlobals());

beforeEach(() => {
  vi.resetAllMocks();
  const values = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key)
  });
});

describe('open a new local AI conversation', () => {
  it('requests a fresh native conversation on every entry, including repeated prompts', async () => {
    await openNewLocalAiChat();
    await openNewLocalAiChat('  explain this code  ');
    await openNewLocalAiChat('explain this code');

    expect(invoke).toHaveBeenNthCalledWith(1, 'show_hide_window_command', {
      label: 'local_ai_chat'
    });
    expect(invoke).toHaveBeenNthCalledWith(2, 'show_hide_window_command', {
      label: 'local_ai_chat',
      context: 'explain this code'
    });
    expect(invoke).toHaveBeenCalledTimes(3);
    expect(localStorage.getItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY)).toBe(
      'explain this code'
    );
    expect(localStorage.getItem(PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY)).toBe(
      PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE
    );
  });

  it('clears its transferred prompt on failure and reports the backend error', async () => {
    vi.mocked(invoke).mockRejectedValueOnce(new Error('Plugin is disabled'));
    await expect(openNewLocalAiChat('question')).rejects.toThrow(
      'Plugin is disabled'
    );
    expect(
      localStorage.getItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY)
    ).toBeNull();
    expect(
      localStorage.getItem(PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY)
    ).toBeNull();
  });

  it('preserves a newer prompt if an earlier request fails', async () => {
    let reject!: (error: Error) => void;
    vi.mocked(invoke).mockReturnValueOnce(
      new Promise((_, fail) => {
        reject = fail;
      })
    );
    const first = openNewLocalAiChat('first');
    const failure = expect(first).rejects.toThrow('unavailable');
    await openNewLocalAiChat('newer');
    reject(new Error('unavailable'));
    await failure;
    expect(localStorage.getItem(PENDING_LOCAL_AI_PROMPT_STORAGE_KEY)).toBe(
      'newer'
    );
    expect(localStorage.getItem(PENDING_LOCAL_AI_PROMPT_MODE_STORAGE_KEY)).toBe(
      PENDING_LOCAL_AI_PROMPT_NEW_CHAT_MODE
    );
  });
});
