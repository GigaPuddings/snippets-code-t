import type {
  LocalAiChatHistory,
  LocalAiChatStreamStats,
  LocalAiVerifiedSource
} from '@/api/localAi';
import type { LocalAiAttachment } from '@/utils/localAiAttachments';

export interface ChatMessage {
  id: string;
  role: 'system' | 'user' | 'assistant';
  type?: 'root' | 'text';
  content: string;
  createdAt: string;
  attachments?: LocalAiAttachment[];
  parentId?: string | null;
  childIds?: string[];
  streaming?: boolean;
  elapsedMs?: number;
  promptTokens?: number;
  estimatedCompletionTokens?: number;
  contextSize?: number;
  stats?: LocalAiChatStreamStats;
  stopped?: boolean;
  interrupted?: boolean;
  repetitionStopped?: boolean;
  allowThinking?: boolean;
  reasoningStartedAt?: number;
  reasoningEndedAt?: number;
  verifiedSourcesStatus?: 'searching' | 'done' | 'failed';
  verifiedSources?: LocalAiVerifiedSource[];
  error?: string;
}

export interface ChatDisplayMessage {
  message: ChatMessage;
  siblingLeafNodeIds: string[];
  siblingCurrentIndex: number;
}

export interface ChatHistoryView {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  updatedAtLabel: string;
  currentNodeId: string | null;
  messages: ChatMessage[];
}

export type PersistedChatHistory = LocalAiChatHistory & {
  currentNodeId?: string | null;
  messages?: ChatMessage[];
};
