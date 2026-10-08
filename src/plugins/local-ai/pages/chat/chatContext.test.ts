import { describe, expect, it } from 'vitest';
import type { LocalAiMessage } from '@/api/localAi';
import {
  compactMessagesForBudget,
  createRuntimeContextMessage,
  estimateChatTokens,
  estimateTokens,
  mergeChatStreamStats,
  resolveRequestMaxTokens,
  resolveRequestContextBudget,
  markAssistantMessageFailed,
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
  it('can reuse a captured local date instead of taking a new clock reading', () => {
    const runtime = createRuntimeContextMessage(
      new Date(2026, 9, 7, 19, 30, 12)
    );
    expect(runtime.content).toContain('Current local date: 2026-10-07');
    expect(runtime.content).toContain('Current local time: 19:30:12');
  });

  it('keeps zero max tokens unlimited instead of deriving a context cap', () => {
    expect(resolveRequestMaxTokens(0)).toBeUndefined();
    expect(resolveRequestMaxTokens(2048)).toBe(2048);
  });

  it('reserves reply capacity at the default 4096-token context', () => {
    expect(resolveRequestContextBudget(4096, 0)).toBe(2048);
    expect(resolveRequestContextBudget(2048, 0)).toBe(1024);
    expect(resolveRequestContextBudget(8192, 0)).toBe(4096);
    expect(resolveRequestContextBudget(16384, 0)).toBe(8192);
    expect(resolveRequestContextBudget(4096, 1024)).toBe(3072);
    expect(resolveRequestMaxTokens(0)).toBeUndefined();
  });

  it('records a local failure without inventing an assistant answer', () => {
    const message = {
      id: 'answer',
      role: 'assistant' as const,
      createdAt: '',
      content: '',
      streaming: true
    };
    markAssistantMessageFailed(message, 'Request failed');
    expect(message).toMatchObject({
      content: '',
      error: 'Request failed',
      streaming: false,
      interrupted: false
    });
    message.content = 'A partial answer';
    markAssistantMessageFailed(message, 'Stream interrupted');
    expect(message).toMatchObject({
      content: 'A partial answer',
      error: 'Stream interrupted',
      interrupted: true
    });
  });

  it('preserves a stream finish reason when later stats omit it', () => {
    const withFinishReason = mergeChatStreamStats(undefined, {
      completionTokens: 3476,
      finishReason: 'length'
    });
    const withFinalUsage = mergeChatStreamStats(withFinishReason, {
      promptTokens: 360,
      totalTokens: 3836,
      finishReason: null
    });

    expect(withFinalUsage).toEqual({
      promptTokens: 360,
      completionTokens: 3476,
      totalTokens: 3836,
      finishReason: 'length'
    });
  });
});
