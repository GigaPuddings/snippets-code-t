import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';

export interface LocalAiConfig {
  modelDir: string;
  modelPath?: string | null;
  mmprojPath?: string | null;
  runtimePath?: string | null;
  host: string;
  port: number;
  ctxSize: number;
  gpuLayers: number;
  mainGpu: number;
  threads: number;
  batchSize: number;
  ubatchSize: number;
  flashAttn: boolean;
  kvOffload: boolean;
  mmap: boolean;
  autoStartOnRequest: boolean;
  idleTimeoutMinutes: number;
  keepAlive: boolean;
  temperature: number;
  topP: number;
  topK: number;
  minP: number;
  repeatPenalty: number;
  repeatLastN: number;
  maxTokens: number;
  requestTimeoutSecs: number;
}

export interface LocalAiRuntimeStatus {
  available: boolean;
  path?: string;
  source?: string;
  searchedPaths: string[];
  message?: string;
}

export interface LocalAiModelScan {
  modelDir: string;
  exists: boolean;
  mainModels: string[];
  mmprojModels: string[];
  selectedModelPath?: string;
  selectedMmprojPath?: string;
  message?: string;
}

export interface LocalAiServiceStatus {
  running: boolean;
  healthy: boolean;
  pid?: number;
  baseUrl: string;
  modelPath?: string;
  runtimePath?: string;
  ctxSize: number;
  commandLine?: string;
  activeRequests: number;
  idleTimeoutMinutes: number;
  keepAlive: boolean;
  lastError?: string;
}

export interface LocalAiMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LocalAiChatRequest {
  messages: LocalAiMessage[];
  temperature?: number;
  enableThinking?: boolean;
  maxTokens?: number;
}

export interface LocalAiChatTurn {
  id: string;
  role: string;
  content: string;
  createdAt: string;
}

export interface LocalAiChatHistory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  turns: LocalAiChatTurn[];
}

export interface LocalAiChatResponse {
  content: string;
}

export interface LocalAiChatStreamStats {
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
  generationTimeMs?: number;
  tokensPerSecond?: number;
  finishReason?: string;
}

export interface LocalAiChatStreamEvent {
  requestId: string;
  event: 'delta' | 'stats' | 'done' | 'error';
  content?: string;
  error?: string;
  stats?: LocalAiChatStreamStats;
}

export interface LocalAiChatStreamOptions {
  requestId?: string;
  onStats?: (stats: LocalAiChatStreamStats) => void;
}

export async function getLocalAiConfig(): Promise<LocalAiConfig> {
  return await invoke<LocalAiConfig>('local_ai_get_config');
}

export async function saveLocalAiConfig(
  config: LocalAiConfig
): Promise<LocalAiConfig> {
  return await invoke<LocalAiConfig>('local_ai_save_config', { config });
}

export async function scanLocalAiModels(
  config?: LocalAiConfig
): Promise<LocalAiModelScan> {
  return await invoke<LocalAiModelScan>('local_ai_scan_models', {
    config: config ?? null
  });
}

export async function getLocalAiRuntimeStatus(): Promise<LocalAiRuntimeStatus> {
  return await invoke<LocalAiRuntimeStatus>('local_ai_get_runtime_status');
}

export async function getLocalAiStatus(): Promise<LocalAiServiceStatus> {
  return await invoke<LocalAiServiceStatus>('local_ai_get_status');
}

export async function startLocalAiService(
  config?: LocalAiConfig
): Promise<LocalAiServiceStatus> {
  return await invoke<LocalAiServiceStatus>('local_ai_start_service', {
    config: config ?? null
  });
}

export async function restartLocalAiService(): Promise<LocalAiServiceStatus> {
  return await invoke<LocalAiServiceStatus>('local_ai_restart_service');
}

export async function stopLocalAiService(): Promise<void> {
  await invoke('local_ai_stop_service');
}

export async function chatWithLocalAi(
  request: LocalAiChatRequest
): Promise<LocalAiChatResponse> {
  return await invoke<LocalAiChatResponse>('local_ai_chat', { request });
}

export function createLocalAiStreamRequestId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export async function streamChatWithLocalAi(
  request: LocalAiChatRequest,
  onDelta: (content: string) => void,
  options: LocalAiChatStreamOptions = {}
): Promise<LocalAiChatResponse> {
  const requestId = options.requestId ?? createLocalAiStreamRequestId();
  const unlisten = await listen<LocalAiChatStreamEvent>(
    'local-ai-chat-stream',
    (event) => {
      const payload = event.payload;
      if (payload.requestId !== requestId) return;
      if (payload.event === 'delta' && payload.content) {
        onDelta(payload.content);
      } else if (payload.event === 'stats' && payload.stats) {
        options.onStats?.(payload.stats);
      }
    }
  );

  try {
    return await invoke<LocalAiChatResponse>('local_ai_chat_stream', {
      request,
      requestId
    });
  } finally {
    unlisten();
  }
}

export async function cancelLocalAiChatStream(
  requestId: string
): Promise<boolean> {
  return await invoke<boolean>('local_ai_cancel_chat_stream', { requestId });
}

export async function getLocalAiChatHistories(): Promise<LocalAiChatHistory[]> {
  return await invoke<LocalAiChatHistory[]>('local_ai_get_chat_histories');
}

export async function saveLocalAiChatHistory(
  history: LocalAiChatHistory
): Promise<LocalAiChatHistory[]> {
  return await invoke<LocalAiChatHistory[]>('local_ai_save_chat_history', {
    history
  });
}

export async function deleteLocalAiChatHistory(
  historyId: string
): Promise<LocalAiChatHistory[]> {
  return await invoke<LocalAiChatHistory[]>('local_ai_delete_chat_history', {
    historyId
  });
}

export async function translateWithLocalAi(
  text: string,
  from: string,
  to: string
): Promise<string> {
  return await invoke<string>('local_ai_translate', { text, from, to });
}
