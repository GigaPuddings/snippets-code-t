import { marked } from 'marked';
import { useI18n, type ComposerTranslation } from 'vue-i18n';
import { sanitizeHtml } from '@/utils/html-sanitize';
import modal from '@/utils/modal';
import type { ChatMessage } from './types';

const MARKDOWN_CACHE_LIMIT = 64;
// Approximate UTF-16 storage for source keys and HTML; bound long replies too.
const MARKDOWN_CACHE_BYTES = 4 * 1024 * 1024;
const STREAM_RENDER_INTERVAL_MS = 420;
const STREAM_LONG_RENDER_INTERVAL_MS = 1200;
const STREAM_LONG_CONTENT_CHARS = 24000;
const STREAM_RENDER_CHAR_DELTA = 1800;
const STREAM_LONG_CHAR_DELTA = 5200;

type MarkdownSection = 'reasoning' | 'answer';

interface StreamingMarkdownSnapshot {
  source: string;
  reasoning: string;
  answer: string;
  reasoningHtml?: string;
  answerHtml?: string;
  updatedAt: number;
}

interface MarkdownState {
  htmlCache: Map<string, string>;
  cacheBytes: number;
  streamingSnapshots: Map<string, StreamingMarkdownSnapshot>;
}

interface ChatMarkdownController {
  clearMarkdownState: () => void;
  discardStreamingMarkdown: (messageId: string) => void;
  handleMarkdownClick: (event: MouseEvent) => Promise<void>;
  messageAnswer: (value: string) => string;
  messageReasoning: (value: string) => string;
  recordReasoningProgress: (message: ChatMessage, delta: string) => void;
  renderMessageMarkdown: (
    message: ChatMessage,
    section: MarkdownSection
  ) => string;
}

export const splitReasoning = (
  value: string
): { reasoning: string; answer: string } => {
  const match = value.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!match || match.index === undefined) {
    return { reasoning: '', answer: value };
  }

  const before = value.slice(0, match.index).trim();
  const matchedText = match[0];
  const after = value.slice(match.index + matchedText.length).trim();
  return {
    reasoning: (match[1] ?? '').trim(),
    answer: [before, after].filter(Boolean).join('\n\n')
  };
};

const enhanceCodeBlocks = (html: string, t: ComposerTranslation): string => {
  if (!html.includes('<pre>')) return html;
  return html.replace(
    /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
    (_match, className: string | undefined, codeHtml: string) => {
      const codeClass = className ? ` class="${className}"` : '';
      const copyLabel = t('common.copy');
      return `<div class="code-block-shell"><button type="button" class="code-copy-btn" title="${copyLabel}">${copyLabel}</button><pre><code${codeClass}>${codeHtml}</code></pre></div>`;
    }
  );
};

const renderMarkdown = (
  value: string,
  state: MarkdownState,
  t: ComposerTranslation,
  options: {
    cache?: boolean;
    enhanceCodeBlocks?: boolean;
  } = {}
): string => {
  const shouldCache = options.cache !== false;
  const cacheKey = `${t('common.copy')}\u0000${value}`;
  const cached = shouldCache ? state.htmlCache.get(cacheKey) : undefined;
  if (cached !== undefined) {
    state.htmlCache.delete(cacheKey);
    state.htmlCache.set(cacheKey, cached);
    return cached;
  }

  const parsed = sanitizeHtml(marked.parse(value, { async: false }) as string);
  const html =
    options.enhanceCodeBlocks === false ? parsed : enhanceCodeBlocks(parsed, t);
  if (!shouldCache) return html;
  const bytes = (cacheKey.length + html.length) * 2;
  if (bytes > MARKDOWN_CACHE_BYTES) return html;
  state.htmlCache.set(cacheKey, html);
  state.cacheBytes += bytes;
  while (
    state.htmlCache.size > MARKDOWN_CACHE_LIMIT ||
    state.cacheBytes > MARKDOWN_CACHE_BYTES
  ) {
    const oldest = state.htmlCache.entries().next().value;
    if (!oldest) break;
    state.cacheBytes -= (oldest[0].length + oldest[1].length) * 2;
    state.htmlCache.delete(oldest[0]);
  }
  return html;
};

const shouldRefreshSnapshot = (
  message: ChatMessage,
  snapshot: StreamingMarkdownSnapshot | undefined,
  reasoning: string,
  answer: string,
  now: number
): boolean => {
  if (!snapshot) return true;
  const isLong = message.content.length >= STREAM_LONG_CONTENT_CHARS;
  const interval = isLong
    ? STREAM_LONG_RENDER_INTERVAL_MS
    : STREAM_RENDER_INTERVAL_MS;
  const charDelta = isLong ? STREAM_LONG_CHAR_DELTA : STREAM_RENDER_CHAR_DELTA;
  return (
    now - snapshot.updatedAt >= interval ||
    message.content.length - snapshot.source.length >= charDelta ||
    (!snapshot.reasoning && Boolean(reasoning)) ||
    (!snapshot.answer && Boolean(answer))
  );
};

const messageMarkdownSource = (
  message: ChatMessage,
  section: MarkdownSection,
  state: MarkdownState
): string => {
  const { reasoning, answer } = splitReasoning(message.content);
  if (!message.streaming) {
    state.streamingSnapshots.delete(message.id);
    return section === 'reasoning' ? reasoning : answer;
  }

  const now = Date.now();
  const snapshot = state.streamingSnapshots.get(message.id);
  if (shouldRefreshSnapshot(message, snapshot, reasoning, answer, now)) {
    state.streamingSnapshots.set(message.id, {
      source: message.content,
      reasoning,
      answer,
      updatedAt: now
    });
    return section === 'reasoning' ? reasoning : answer;
  }
  return section === 'reasoning'
    ? (snapshot?.reasoning ?? reasoning)
    : (snapshot?.answer ?? answer);
};

const renderMessageMarkdown = (
  message: ChatMessage,
  section: MarkdownSection,
  state: MarkdownState,
  t: ComposerTranslation
): string => {
  const source = messageMarkdownSource(message, section, state);
  if (!message.streaming) return renderMarkdown(source, state, t);

  const snapshot = state.streamingSnapshots.get(message.id);
  const htmlKey = section === 'reasoning' ? 'reasoningHtml' : 'answerHtml';
  const sourceKey = section === 'reasoning' ? 'reasoning' : 'answer';
  if (snapshot?.[sourceKey] === source && snapshot[htmlKey]) {
    return snapshot[htmlKey];
  }
  const html = renderMarkdown(source, state, t, {
    cache: false,
    enhanceCodeBlocks: false
  });
  if (snapshot?.[sourceKey] === source) snapshot[htmlKey] = html;
  return html;
};

const handleMarkdownClick = async (
  event: MouseEvent,
  t: ComposerTranslation
): Promise<void> => {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>('.code-copy-btn');
  // Read the displayed code: it survives HTML cache eviction and history switches.
  const code = button
    ?.closest('.code-block-shell')
    ?.querySelector('pre code')?.textContent;
  if (code === null || code === undefined) return;
  try {
    await navigator.clipboard.writeText(code);
    modal.msg(t('localAi.codeCopied'));
  } catch (error) {
    modal.msg(`${t('common.copy')}: ${error}`, 'error');
  }
};

const recordReasoningProgress = (message: ChatMessage, delta: string): void => {
  if (!message.allowThinking) return;
  if (delta.includes('<think>') && !message.reasoningStartedAt) {
    message.reasoningStartedAt = Date.now();
  }
  if (delta.includes('</think>') && !message.reasoningEndedAt) {
    message.reasoningEndedAt = Date.now();
  }
};

export const useChatMarkdown = (): ChatMarkdownController => {
  const { t } = useI18n();
  const state: MarkdownState = {
    htmlCache: new Map<string, string>(),
    cacheBytes: 0,
    streamingSnapshots: new Map<string, StreamingMarkdownSnapshot>()
  };

  return {
    renderMessageMarkdown: (
      message: ChatMessage,
      section: MarkdownSection
    ): string => renderMessageMarkdown(message, section, state, t),
    handleMarkdownClick: (event: MouseEvent): Promise<void> =>
      handleMarkdownClick(event, t),
    messageReasoning: (value: string): string =>
      splitReasoning(value).reasoning,
    messageAnswer: (value: string): string => splitReasoning(value).answer,
    recordReasoningProgress,
    discardStreamingMarkdown: (messageId: string): void => {
      state.streamingSnapshots.delete(messageId);
    },
    clearMarkdownState: (): void => {
      state.htmlCache.clear();
      state.cacheBytes = 0;
      state.streamingSnapshots.clear();
    }
  };
};
