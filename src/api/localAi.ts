import { invoke } from '@tauri-apps/api/core';

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
  maxTokens?: number;
}

export interface LocalAiChatResponse {
  content: string;
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

export async function translateWithLocalAi(
  text: string,
  from: string,
  to: string
): Promise<string> {
  return await invoke<string>('local_ai_translate', { text, from, to });
}
