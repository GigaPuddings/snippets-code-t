import { marked } from 'marked';
import { useI18n, type ComposerTranslation } from 'vue-i18n';
import { sanitizeHtml } from '@/utils/html-sanitize';
import modal from '@/utils/modal';
import type { ChatMessage } from './types';

const MARKDOWN_CACHE_LIMIT = 64;
// Approximate UTF-16 storage for source keys and HTML; bound long replies too.
const MARKDOWN_CACHE_BYTES = 4 * 1024 * 1024;

interface MarkdownState {
  htmlCache: Map<string, string>;
  cacheBytes: number;
}

interface ChatMarkdownController {
  clearMarkdownState: () => void;
  handleMarkdownClick: (event: MouseEvent) => Promise<void>;
  messageAnswer: (value: string) => string;
  messageReasoning: (value: string) => string;
  recordReasoningProgress: (message: ChatMessage, delta: string) => void;
  renderCompleteMarkdown: (source: string) => string;
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
  t: ComposerTranslation
): string => {
  const cacheKey = `${t('common.copy')}\u0000${value}`;
  const cached = state.htmlCache.get(cacheKey);
  if (cached !== undefined) {
    state.htmlCache.delete(cacheKey);
    state.htmlCache.set(cacheKey, cached);
    return cached;
  }

  const parsed = sanitizeHtml(marked.parse(value, { async: false }) as string);
  const html = enhanceCodeBlocks(parsed, t);
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
    cacheBytes: 0
  };

  return {
    renderCompleteMarkdown: (source) => renderMarkdown(source, state, t),
    handleMarkdownClick: (event: MouseEvent): Promise<void> =>
      handleMarkdownClick(event, t),
    messageReasoning: (value: string): string =>
      splitReasoning(value).reasoning,
    messageAnswer: (value: string): string => splitReasoning(value).answer,
    recordReasoningProgress,
    clearMarkdownState: (): void => {
      state.htmlCache.clear();
      state.cacheBytes = 0;
    }
  };
};
