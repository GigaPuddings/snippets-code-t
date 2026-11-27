import type {
  LocalAiChatStreamStats,
  LocalAiContentPart,
  LocalAiMessage
} from '@/api/localAi';
import { buildPromptWithFileAttachments } from '@/utils/localAiAttachments';
import type { ChatMessage } from './types';

export const estimateTokens = (value: string): number => {
  const text = value.trim();
  if (!text) return 0;
  const cjkCount = (text.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const rest = text.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, ' ');
  const pieces = rest.match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? [];
  const latinTokens = pieces.reduce((total, piece) => {
    if (/^[A-Za-z0-9_]+$/.test(piece)) {
      return total + Math.max(1, Math.ceil(piece.length / 4));
    }
    return total + 1;
  }, 0);
  return Math.max(1, Math.ceil(cjkCount + latinTokens));
};

export const estimateStreamingOutputTokens = (value: string): number =>
  Math.max(0, Math.ceil(value.length / 4));

export const resolveRequestContextBudget = (
  contextLimit: number,
  configuredMaxTokens: number
): number => {
  const responseReserve =
    configuredMaxTokens > 0
      ? configuredMaxTokens
      : Math.floor(contextLimit / 2);
  // Leave room for template delimiters and the model's special tokens.
  const margin = Math.min(256, Math.ceil(contextLimit * 0.02));
  const minimumInput = Math.min(512, Math.floor(contextLimit / 2));
  return Math.max(minimumInput, contextLimit - responseReserve) - margin;
};

export const markAssistantMessageFailed = (
  message: ChatMessage,
  error: string
): void => {
  message.streaming = false;
  message.error = error;
  message.interrupted = Boolean(message.content.trim());
};

export const mergeChatStreamStats = (
  current: LocalAiChatStreamStats | undefined,
  incoming: Partial<{
    [Key in keyof LocalAiChatStreamStats]: LocalAiChatStreamStats[Key] | null;
  }>
): LocalAiChatStreamStats => {
  const definedEntries = Object.entries(incoming).filter(
    ([, value]) => value !== undefined && value !== null
  );
  return {
    ...current,
    ...Object.fromEntries(definedEntries)
  };
};

const contentText = (content: LocalAiMessage['content']): string =>
  Array.isArray(content)
    ? content
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('\n')
    : content;

export const apiUserMessageContent = (
  message: ChatMessage
): LocalAiMessage['content'] => {
  const parsedAttachments =
    message.attachments?.filter(
      (attachment) => attachment.status === 'parsed'
    ) ?? [];
  const text = buildPromptWithFileAttachments(
    message.content,
    parsedAttachments
  );
  const imageAttachments = parsedAttachments.filter(
    (attachment) => attachment.type === 'image' && attachment.dataUrl
  );
  if (!imageAttachments.length) return text;

  const parts: LocalAiContentPart[] = [{ type: 'text', text }];
  for (const attachment of imageAttachments) {
    parts.push({
      type: 'image_url',
      image_url: { url: attachment.dataUrl ?? '' }
    });
  }
  return parts;
};

export const estimateChatTokens = (messages: LocalAiMessage[]): number =>
  messages.reduce((sum, message) => {
    // Text tokenizers cannot measure vision embeddings. Reserve space per image
    // when a model-specific vision count is unavailable.
    const images = Array.isArray(message.content)
      ? message.content.filter((part) => part.type === 'image_url').length
      : 0;
    return (
      sum + 4 + estimateTokens(contentText(message.content)) + images * 1024
    );
  }, 0);

const padDatePart = (value: number): string => String(value).padStart(2, '0');

const localDateParts = (
  date = new Date()
): {
  isoDate: string;
  localTime: string;
  timeZone: string;
  weekday: string;
} => {
  const offsetHours = -date.getTimezoneOffset() / 60;
  const timeZone =
    Intl.DateTimeFormat().resolvedOptions().timeZone ||
    `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}`;
  const isoDate = [
    date.getFullYear(),
    padDatePart(date.getMonth() + 1),
    padDatePart(date.getDate())
  ].join('-');
  const localTime = [
    padDatePart(date.getHours()),
    padDatePart(date.getMinutes()),
    padDatePart(date.getSeconds())
  ].join(':');
  const weekday = date.toLocaleDateString('zh-CN', { weekday: 'long' });
  return { isoDate, localTime, timeZone, weekday };
};

export const createRuntimeContextMessage = (
  date = new Date()
): LocalAiMessage => {
  const { isoDate, localTime, timeZone, weekday } = localDateParts(date);
  return {
    role: 'system',
    content: [
      'Current runtime context is authoritative.',
      `Current local date: ${isoDate}`,
      `Current local weekday: ${weekday}`,
      `Current local time: ${localTime}`,
      `Current timezone: ${timeZone}`,
      'For questions involving today, the current date, or the current time, use this runtime context as the source of truth rather than model memory.'
    ].join('\n')
  };
};
