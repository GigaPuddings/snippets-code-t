import { beforeEach, expect, it, vi } from 'vitest';
import {
  cancelLocalAiChatStream,
  chatWithLocalAi,
  getLocalAiStatus,
  startLocalAiService,
  streamChatWithLocalAi,
  translateWithLocalAi,
  type LocalAiServiceStatus
} from '@/api/localAi';
import { createSelectionAiContext } from './context';
import { LOCAL_AI_PROVIDER_ID, localAiProvider } from './localAiProvider';

vi.mock('@/api/localAi', () => ({
  cancelLocalAiChatStream: vi.fn(),
  chatWithLocalAi: vi.fn(),
  getLocalAiStatus: vi.fn(),
  startLocalAiService: vi.fn(),
  streamChatWithLocalAi: vi.fn(),
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

it('combines prompt enhancement instructions and selection context into one leading system message', async () => {
  vi.mocked(chatWithLocalAi).mockResolvedValue({ content: 'enhanced prompt' });
  const messages = [
    {
      role: 'system' as const,
      content: 'Improve the prompt. Return Chinese only.'
    },
    { role: 'user' as const, content: '分析代码' }
  ];
  await localAiProvider.chat({
    messages,
    context: createSelectionAiContext('分析代码', {
      source: 'local-ai.prompt-enhancement'
    }),
    temperature: 0.1,
    enableThinking: false,
    maxTokens: 256
  });
  const request = vi.mocked(chatWithLocalAi).mock.calls[0][0];
  expect(request.messages).toHaveLength(2);
  expect(request.messages[0]).toEqual({
    role: 'system',
    content: expect.stringMatching(
      /^Improve the prompt\. Return Chinese only\.[\s\S]*local-ai\.prompt-enhancement/
    )
  });
  expect(request).toMatchObject({
    temperature: 0.1,
    enableThinking: false,
    maxTokens: 256
  });
  expect(messages[0].content).toBe('Improve the prompt. Return Chinese only.');
});

it('normalizes misplaced system messages for streaming without losing multimodal content or conversation order', async () => {
  vi.mocked(streamChatWithLocalAi).mockResolvedValue({ content: 'answer' });
  const image = {
    type: 'image_url' as const,
    image_url: { url: 'data:image/png;base64,test' }
  };
  await localAiProvider.streamChat?.(
    {
      messages: [
        { role: 'user', content: [{ type: 'text', text: 'Question' }, image] },
        { role: 'system', content: 'Instructions' },
        { role: 'assistant', content: 'Previous answer' },
        {
          role: 'system',
          content: [{ type: 'text', text: 'Additional instructions' }]
        }
      ]
    },
    vi.fn()
  );
  const request = vi.mocked(streamChatWithLocalAi).mock.calls[0][0];
  expect(request.messages).toEqual([
    {
      role: 'system',
      content: [
        { type: 'text', text: 'Instructions' },
        { type: 'text', text: '\n\n' },
        { type: 'text', text: 'Additional instructions' }
      ]
    },
    { role: 'user', content: [{ type: 'text', text: 'Question' }, image] },
    { role: 'assistant', content: 'Previous answer' }
  ]);
});

it('streams chat requests through the local AI stream API', async () => {
  vi.mocked(streamChatWithLocalAi).mockImplementation(
    async (_request, onDelta, options) => {
      onDelta('partial');
      options?.onStats?.({ finishReason: 'stop' });
      return { content: 'partial answer' };
    }
  );
  const onDelta = vi.fn();
  const onStats = vi.fn();

  await expect(
    localAiProvider.streamChat?.(
      { messages: [{ role: 'user', content: 'hello' }] },
      onDelta,
      { requestId: 'request-1', onStats }
    )
  ).resolves.toEqual({
    providerId: LOCAL_AI_PROVIDER_ID,
    content: 'partial answer'
  });

  expect(streamChatWithLocalAi).toHaveBeenCalledWith(
    { messages: [{ role: 'user', content: 'hello' }] },
    onDelta,
    {
      requestId: 'request-1',
      onStats: expect.any(Function)
    }
  );
  expect(onDelta).toHaveBeenCalledWith('partial');
  expect(onStats).toHaveBeenCalledWith({ finishReason: 'stop' });
});

it('cancels local AI streams through the existing API', async () => {
  vi.mocked(cancelLocalAiChatStream).mockResolvedValue(true);

  await expect(localAiProvider.cancelChatStream?.('request-1')).resolves.toBe(
    true
  );

  expect(cancelLocalAiChatStream).toHaveBeenCalledWith('request-1');
});
