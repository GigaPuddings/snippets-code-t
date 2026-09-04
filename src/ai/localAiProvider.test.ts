import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  chatWithLocalAi,
  getLocalAiStatus,
  startLocalAiService,
  translateWithLocalAi,
  type LocalAiServiceStatus
} from '@/api/localAi';
import { createSelectionAiContext } from './context';
import { LOCAL_AI_PROVIDER_ID, localAiProvider } from './localAiProvider';

vi.mock('@/api/localAi', () => ({
  chatWithLocalAi: vi.fn(),
  getLocalAiStatus: vi.fn(),
  startLocalAiService: vi.fn(),
  translateWithLocalAi: vi.fn()
}));

const serviceStatus = (
  overrides: Partial<LocalAiServiceStatus> = {}
): LocalAiServiceStatus => ({
  running: true,
  healthy: true,
  pid: 100,
  baseUrl: 'http://127.0.0.1:8080',
  modelPath: 'D:\\models\\qwen.gguf',
  runtimePath: 'D:\\runtime\\llama-server.exe',
  ctxSize: 8192,
  commandLine: 'llama-server.exe',
  activeRequests: 0,
  idleTimeoutMinutes: 10,
  keepAlive: false,
  lastError: undefined,
  ...overrides
});

describe('localAiProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('maps local AI service status into provider status', async () => {
    vi.mocked(getLocalAiStatus).mockResolvedValue(serviceStatus());

    await expect(localAiProvider.getStatus?.()).resolves.toMatchObject({
      providerId: LOCAL_AI_PROVIDER_ID,
      available: true,
      running: true,
      healthy: true,
      modelName: 'qwen.gguf'
    });
  });

  it('returns unavailable status when local AI status fails', async () => {
    vi.mocked(getLocalAiStatus).mockRejectedValue(new Error('disabled'));

    await expect(localAiProvider.getStatus?.()).resolves.toMatchObject({
      providerId: LOCAL_AI_PROVIDER_ID,
      available: false,
      healthy: false,
      lastError: 'disabled'
    });
  });

  it('starts the local AI service through the existing API', async () => {
    vi.mocked(startLocalAiService).mockResolvedValue(
      serviceStatus({ running: true, healthy: true })
    );

    await expect(localAiProvider.start?.()).resolves.toMatchObject({
      running: true,
      healthy: true
    });
    expect(startLocalAiService).toHaveBeenCalledOnce();
  });

  it('routes chat and translation requests through the existing API', async () => {
    vi.mocked(chatWithLocalAi).mockResolvedValue({ content: 'hello' });
    vi.mocked(translateWithLocalAi).mockResolvedValue('你好');

    await expect(
      localAiProvider.chat({
        messages: [{ role: 'user', content: 'hello' }]
      })
    ).resolves.toEqual({
      providerId: LOCAL_AI_PROVIDER_ID,
      content: 'hello'
    });
    await expect(
      localAiProvider.translate?.({ text: 'hello', from: 'en', to: 'zh' })
    ).resolves.toEqual({
      providerId: LOCAL_AI_PROVIDER_ID,
      text: '你好'
    });

    expect(chatWithLocalAi).toHaveBeenCalledWith({
      messages: [{ role: 'user', content: 'hello' }]
    });
    expect(translateWithLocalAi).toHaveBeenCalledWith('hello', 'en', 'zh');
  });

  it('injects request context into local AI chat messages', async () => {
    vi.mocked(chatWithLocalAi).mockResolvedValue({ content: 'answer' });

    await localAiProvider.chat({
      messages: [{ role: 'user', content: 'explain it' }],
      context: createSelectionAiContext('const value = 1;', {
        title: 'Current selection',
        source: 'editor'
      })
    });

    expect(chatWithLocalAi).toHaveBeenCalledWith({
      messages: [
        expect.objectContaining({
          role: 'system',
          content: expect.stringContaining(
            '### 1. Selection - Current selection (editor)'
          )
        }),
        { role: 'user', content: 'explain it' }
      ]
    });
  });

  it('uses contextual chat for translation requests with context', async () => {
    vi.mocked(chatWithLocalAi).mockResolvedValue({ content: '你好' });

    await expect(
      localAiProvider.translate?.({
        text: 'hello',
        from: 'en',
        to: 'zh',
        context: createSelectionAiContext('hello', { source: 'translation' })
      })
    ).resolves.toEqual({
      providerId: LOCAL_AI_PROVIDER_ID,
      text: '你好'
    });

    expect(translateWithLocalAi).not.toHaveBeenCalled();
    expect(chatWithLocalAi).toHaveBeenCalledWith({
      temperature: 0.2,
      enableThinking: false,
      messages: [
        expect.objectContaining({
          role: 'system',
          content: expect.stringContaining(
            'Use the Snippets Code request context only to resolve ambiguity.'
          )
        }),
        { role: 'user', content: 'hello' }
      ]
    });
  });
});
