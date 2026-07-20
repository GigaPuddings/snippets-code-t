import { describe, expect, it } from 'vitest';
import type { LocalAiMessage } from '@/api/localAi';
import {
  compactMessagesForBudget,
  createRuntimeContextMessage,
  estimateChatTokens,
  estimateTokens,
  mergeSystemMessages
} from './chatContext';

describe('local AI chat context helpers', () => {
  it('estimates mixed CJK and latin content without returning zero', () => {
    expect(estimateTokens('你好 local-ai')).toBeGreaterThan(2);
    expect(estimateTokens('')).toBe(0);
  });

  it('merges pinned system messages before the conversation', () => {
    const messages: LocalAiMessage[] = [
      { role: 'system', content: 'runtime' },
      { role: 'user', content: 'question' },
      { role: 'system', content: 'sources' }
    ];

    expect(mergeSystemMessages(messages)).toEqual([
      { role: 'system', content: 'runtime\n\n---\n\nsources' },
      { role: 'user', content: 'question' }
    ]);
  });

  it('keeps the latest message and truncates an older assistant tail', () => {
    const messages: LocalAiMessage[] = [
      { role: 'assistant', content: 'older '.repeat(1000) },
      { role: 'user', content: 'latest question' }
    ];
    const compacted = compactMessagesForBudget(messages, 250, 'Previous tail');

    expect(compacted.at(-1)).toEqual(messages.at(-1));
    expect(compacted[0].content).toContain('Previous tail');
    expect(estimateChatTokens(compacted)).toBeLessThanOrEqual(250);
  });

  it('creates a runtime system message with local date metadata', () => {
    const runtime = createRuntimeContextMessage();

    expect(runtime.role).toBe('system');
    expect(runtime.content).toContain('Current local date:');
    expect(runtime.content).toContain('Current timezone:');
  });
});
