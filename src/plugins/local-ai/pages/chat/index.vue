<template>
  <main class="local-ai-chat-shell">
    <aside class="chat-sidebar">
      <header class="sidebar-header">
        <div class="sidebar-title-block">
          <h2>{{ t('localAi.chatTitle') }}</h2>
          <p>{{ t('localAi.chatPrivacySubtitle') }}</p>
        </div>
        <div class="sidebar-actions">
          <button
            class="icon-action-btn icon-action-btn--primary"
            type="button"
            :title="t('localAi.newChat')"
            @click="createNewChat"
          >
            <Add theme="outline" size="16" />
          </button>
          <button
            class="icon-action-btn"
            type="button"
            :title="t('plugins.refresh')"
            @click="refreshAll"
          >
            <Refresh theme="outline" size="16" />
          </button>
        </div>
      </header>

      <div class="sidebar-search">
        <Search theme="outline" size="17" />
        <input
          v-model="searchQuery"
          :placeholder="t('localAi.searchHistory')"
        />
      </div>

      <section class="sidebar-section recent-section">
        <div class="section-title">{{ t('localAi.recent') }}</div>
        <div v-if="filteredHistories.length" class="chat-list">
          <div
            v-for="history in filteredHistories"
            :key="history.id"
            :class="[
              'chat-list-item',
              activeHistoryId === history.id ? 'active' : ''
            ]"
            role="button"
            tabindex="0"
            @click="openHistory(history.id)"
            @keydown.enter.prevent="openHistory(history.id)"
          >
            <Message theme="outline" size="16" />
            <span class="chat-item-title">{{ history.title }}</span>
            <span class="chat-item-time">
              {{ formatHistoryTime(history.updatedAt) }}
            </span>
            <button
              class="chat-item-delete"
              type="button"
              :title="t('common.delete')"
              @click.stop="deleteHistoryItem(history.id)"
            >
              <Delete theme="outline" size="13" />
            </button>
          </div>
        </div>
        <div v-else class="sidebar-empty">{{ t('common.empty') }}</div>
        <button
          class="view-all-btn"
          type="button"
          @click="viewAllConversations"
        >
          <span>{{ t('localAi.viewAllChats') }}</span>
          <Right theme="outline" size="15" />
        </button>
      </section>
    </aside>

    <section class="chat-panel">
      <header class="chat-topbar">
        <div class="chat-topbar-main">
          <div class="chat-title-row">
            <h3>{{ activeHistory?.title ?? t('localAi.newChatTitle') }}</h3>
            <span
              :class="[
                'status-pill',
                serviceStatus?.healthy ? 'ready' : 'stopped'
              ]"
            >
              <i></i>
              {{ serviceStatusText }}
            </span>
          </div>
          <div class="service-url">
            {{ serviceStatus?.baseUrl ?? 'http://127.0.0.1:39281' }}
          </div>
          <div class="chat-meta-pills">
            <span>
              {{ t('localAi.modelLabel') }}: {{ currentModelDisplay }}
            </span>
            <span>
              {{ t('localAi.contextLabel') }}: {{ currentContextDisplay }}
            </span>
            <span>{{ t('localAi.temperature') }}: {{ currentTemperature }}</span>
            <span>{{ t('localAi.maxTokens') }}: {{ currentMaxTokens }}</span>
          </div>
        </div>
        <div class="chat-topbar-actions">
          <CustomButton size="small" plain class="topbar-custom-btn" @click="goSettings">
            <SettingTwo theme="outline" size="16" />
            <span>{{ t('localAi.settings') }}</span>
          </CustomButton>
          <button
            class="topbar-btn topbar-btn--icon"
            type="button"
            :title="t('common.more')"
            @click="showMoreMenu"
          >
            <More theme="outline" size="17" />
          </button>
        </div>
      </header>

      <div ref="messageListRef" class="message-list">
        <div class="date-divider">
          <span>{{ t('localAi.today') }}</span>
        </div>

        <div v-if="!activeMessages.length" class="empty-state">
          <Robot theme="outline" size="28" />
          <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
          <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
        </div>

        <article
          v-for="message in activeMessages"
          :key="message.id"
          :class="['message-row', `message-row--${message.role}`]"
        >
          <div class="message-avatar">
            <Robot
              v-if="message.role === 'assistant'"
              theme="outline"
              size="18"
            />
            <span v-else>{{ t('localAi.youShort') }}</span>
          </div>

          <div class="message-body">
            <template v-if="message.role === 'user'">
              <div class="user-bubble">
                <div>{{ message.content }}</div>
                <time>{{ messageTime(message) }}</time>
              </div>
            </template>

            <template v-else>
              <div class="assistant-head">
                <span>{{ currentModelDisplay }}</span>
                <small>
                  {{ message.streaming ? t('localAi.thinking') : messageTime(message) }}
                </small>
              </div>
              <div class="assistant-card" :class="{ 'assistant-card--streaming': message.streaming }">
                <div
                  v-if="message.content"
                  class="message-content markdown-body"
                  v-html="renderMarkdown(message.content)"
                ></div>
                <div v-else class="message-content loading-text">
                  {{ t('localAi.thinking') }}
                </div>
              </div>
              <div v-if="!message.streaming" class="message-actions">
                <button
                  type="button"
                  :title="t('common.copy')"
                  @click="copyMessage(message)"
                >
                  <Copy theme="outline" size="14" />
                </button>
                <button
                  type="button"
                  :title="t('localAi.regenerate')"
                  @click="regenerateMessage(message.id)"
                >
                  <Refresh theme="outline" size="14" />
                </button>
                <button
                  type="button"
                  :title="t('localAi.like')"
                  @click="markFeedback"
                >
                  <Like theme="outline" size="14" />
                </button>
                <button
                  type="button"
                  :title="t('localAi.dislike')"
                  @click="markFeedback"
                >
                  <Dislike theme="outline" size="14" />
                </button>
                <button
                  type="button"
                  :title="t('common.edit')"
                  @click="editMessage(message)"
                >
                  <Edit theme="outline" size="14" />
                </button>
                <button
                  type="button"
                  :title="t('common.delete')"
                  @click="deleteMessage(message.id)"
                >
                  <Delete theme="outline" size="14" />
                </button>
              </div>
            </template>
          </div>
        </article>
      </div>

      <form class="chat-input-card" @submit.prevent="sendMessage">
        <textarea
          v-model="draft"
          class="chat-input"
          rows="3"
          :placeholder="t('localAi.chatPlaceholder')"
          @keydown.ctrl.enter.prevent="sendMessage"
        ></textarea>
        <div class="input-toolbar">
          <div class="input-toolbar-left">
            <button
              class="composer-tool-btn"
              type="button"
              :title="t('localAi.settings')"
              @click="goSettings"
            >
              <SettingTwo theme="outline" size="16" />
            </button>
            <label class="model-select-shell">
              <select :value="currentModelDisplay" disabled>
                <option :value="currentModelDisplay">{{ currentModelDisplay }}</option>
              </select>
              <Down theme="outline" size="14" />
            </label>
          </div>
          <div class="input-toolbar-right">
            <span class="input-hint">Ctrl + Enter</span>
            <button class="send-btn" type="submit" :disabled="!canSend">
              <Send theme="outline" size="16" />
              <span>{{ t('localAi.send') }}</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { marked } from 'marked';
import {
  Add,
  Copy,
  Delete,
  Dislike,
  Down,
  Edit,
  Like,
  Message,
  More,
  Refresh,
  Right,
  Robot,
  Search,
  Send,
  SettingTwo
} from '@icon-park/vue-next';
import { CustomButton } from '@/components/UI';
import {
  deleteLocalAiChatHistory,
  getLocalAiConfig,
  getLocalAiChatHistories,
  getLocalAiStatus,
  saveLocalAiChatHistory,
  streamChatWithLocalAi,
  type LocalAiConfig,
  type LocalAiMessage,
  type LocalAiServiceStatus
} from '@/api/localAi';
import { sanitizeHtml } from '@/utils/html-sanitize';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';

defineOptions({ name: 'LocalAiChat' });

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
  streaming?: boolean;
  elapsedMs?: number;
}

interface ChatHistoryView {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  updatedAtLabel: string;
  messages: ChatMessage[];
}

const { t } = useI18n();
const searchQuery = ref('');
const histories = ref<ChatHistoryView[]>([]);
const activeHistoryId = ref<string>('');
const draft = ref('');
const sending = ref(false);
const refreshing = ref(false);
const config = ref<LocalAiConfig | null>(null);
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const messageListRef = ref<HTMLElement | null>(null);
let statusTimer: ReturnType<typeof setInterval> | null = null;
const markdownCache = new Map<string, string>();

const canSend = computed(() => Boolean(draft.value.trim()) && !sending.value);
const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});
const activeHistory = computed(
  () =>
    histories.value.find((item) => item.id === activeHistoryId.value) ?? null
);
const activeMessages = computed(() => activeHistory.value?.messages ?? []);
const fileName = (path?: string | null): string => {
  if (!path) return '';
  return path.split(/[\\/]+/).pop() ?? path;
};
const currentModelDisplay = computed(
  () =>
    fileName(serviceStatus.value?.modelPath) ||
    fileName(config.value?.modelPath) ||
    t('localAi.localModel')
);
const currentContextDisplay = computed(() =>
  config.value?.ctxSize ? String(config.value.ctxSize) : t('localAi.defaultContext')
);
const currentTemperature = computed(() =>
  config.value?.temperature ?? 0.3
);
const currentMaxTokens = computed(() => config.value?.maxTokens ?? 1024);
const filteredHistories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return histories.value
    .filter(
      (item) =>
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.messages.some((message) =>
          message.content.toLowerCase().includes(query)
        )
    )
    .slice()
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
});

const nowLabel = () => t('localAi.now');
const createHistory = (): ChatHistoryView => {
  const now = new Date().toISOString();
  return {
    id: `chat-${Date.now()}`,
    title: t('localAi.newChatTitle'),
    createdAt: now,
    updatedAt: now,
    updatedAtLabel: nowLabel(),
    messages: []
  };
};
const scrollToBottom = async () => {
  await nextTick();
  const list = messageListRef.value;
  if (list) list.scrollTop = list.scrollHeight;
};
const refreshConfig = async () => {
  try {
    config.value = await getLocalAiConfig();
  } catch (error) {
    logger.warn('[LocalAI] refresh chat config failed', error);
  }
};
const refreshStatus = async () => {
  refreshing.value = true;
  try {
    serviceStatus.value = await getLocalAiStatus();
  } catch (error) {
    logger.warn('[LocalAI] refresh chat status failed', error);
  } finally {
    refreshing.value = false;
  }
};
const refreshHistories = async () => {
  try {
    const loaded = await getLocalAiChatHistories();
    histories.value = loaded.map((history) => ({
      id: history.id,
      title: history.title,
      createdAt: history.createdAt,
      updatedAt: history.updatedAt,
      updatedAtLabel: new Date(history.updatedAt).toLocaleString(),
      messages: history.turns.map((turn) => ({
        id: turn.id,
        role: turn.role as 'user' | 'assistant',
        content: turn.content,
        createdAt: turn.createdAt
      }))
    }));
    if (!activeHistoryId.value && histories.value[0]) {
      activeHistoryId.value = histories.value[0].id;
    }
  } catch (error) {
    logger.warn('[LocalAI] refresh histories failed', error);
  }
};
const refreshAll = async () => {
  await Promise.all([refreshConfig(), refreshStatus(), refreshHistories()]);
};
const persistActiveHistory = async () => {
  const current = activeHistory.value;
  if (!current) return;
  await saveLocalAiChatHistory({
    id: current.id,
    title: current.title,
    createdAt: current.createdAt,
    updatedAt: current.updatedAt,
    turns: current.messages.map((message) => ({
      id: message.id,
      role: message.role,
      content: message.content,
      createdAt: message.createdAt
    }))
  });
};
const createNewChat = () => {
  const next = createHistory();
  histories.value.unshift(next);
  activeHistoryId.value = next.id;
  draft.value = '';
};
const ensureActiveHistory = () => {
  if (activeHistory.value) return;
  createNewChat();
};
const openHistory = (id: string) => {
  activeHistoryId.value = id;
  scrollToBottom();
};
const deleteHistoryItem = async (id: string) => {
  histories.value = histories.value.filter((item) => item.id !== id);
  await deleteLocalAiChatHistory(id);
  if (activeHistoryId.value === id) {
    activeHistoryId.value = histories.value[0]?.id ?? '';
  }
};
const toApiMessages = (): LocalAiMessage[] =>
  activeMessages.value
    .filter((message) => !message.streaming)
    .map((message) => ({
      role: message.role,
      content: message.content
    }));
const renderMarkdown = (value: string): string => {
  const cached = markdownCache.get(value);
  if (cached) return cached;
  const html = sanitizeHtml(marked.parse(value, { async: false }) as string);
  markdownCache.set(value, html);
  if (markdownCache.size > 80) {
    const firstKey = markdownCache.keys().next().value;
    if (typeof firstKey === 'string') markdownCache.delete(firstKey);
  }
  return html;
};
const streamAssistantMessage = async (assistantMessage: ChatMessage) => {
  const startedAt = performance.now();
  let pendingContent = '';
  let flushTimer: number | null = null;

  const flush = async () => {
    if (!pendingContent) {
      flushTimer = null;
      return;
    }
    assistantMessage.content += pendingContent;
    pendingContent = '';
    flushTimer = null;
    await scrollToBottom();
  };

  const scheduleFlush = () => {
    if (flushTimer !== null) return;
    flushTimer = window.setTimeout(() => {
      flush().catch((error) =>
        logger.warn('[LocalAI] stream flush failed', error)
      );
    }, 48);
  };

  const response = await streamChatWithLocalAi(
    { messages: toApiMessages() },
    (delta) => {
      pendingContent += delta;
      scheduleFlush();
    }
  );
  if (flushTimer !== null) {
    window.clearTimeout(flushTimer);
    flushTimer = null;
  }
  if (pendingContent) await flush();
  assistantMessage.content = response.content || assistantMessage.content;
  assistantMessage.streaming = false;
  assistantMessage.elapsedMs = performance.now() - startedAt;
};
const sendMessage = async () => {
  const content = draft.value.trim();
  if (!content || sending.value) return;
  ensureActiveHistory();
  const createdAt = new Date().toISOString();
  activeHistory.value?.messages.push({
    id: `${Date.now()}-user`,
    role: 'user',
    content,
    createdAt
  });
  const assistantMessage: ChatMessage = {
    id: `${Date.now()}-assistant`,
    role: 'assistant',
    content: '',
    createdAt: new Date().toISOString(),
    streaming: true
  };
  activeHistory.value?.messages.push(assistantMessage);
  draft.value = '';
  sending.value = true;
  await scrollToBottom();

  try {
    await streamAssistantMessage(assistantMessage);
    if (activeHistory.value) {
      activeHistory.value.title =
        activeHistory.value.title === t('localAi.newChatTitle')
          ? content.slice(0, 28)
          : activeHistory.value.title;
      activeHistory.value.updatedAt = new Date().toISOString();
      activeHistory.value.updatedAtLabel = new Date(
        activeHistory.value.updatedAt
      ).toLocaleString();
      await persistActiveHistory();
    }
    await refreshStatus();
  } catch (error) {
    modal.msg(`${t('localAi.chatFailed')}: ${error}`, 'error');
    assistantMessage.streaming = false;
    assistantMessage.content = String(error);
  } finally {
    sending.value = false;
    await scrollToBottom();
  }
};
const goSettings = () => {
  window.location.hash = '#/config/category/settings?tab=localAi';
};
const viewAllConversations = () => {
  searchQuery.value = '';
};
const showMoreMenu = () => {
  modal.msg(t('localAi.moreComingSoon'));
};
const messageTimestamp = (message: ChatMessage): Date => {
  return new Date(message.createdAt || activeHistory.value?.updatedAt || Date.now());
};
const messageTime = (message: ChatMessage): string => {
  return messageTimestamp(message).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};
const formatHistoryTime = (iso: string): string => {
  const value = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - value.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  if (value.toDateString() === now.toDateString()) {
    return value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  if (diffMs < oneDay * 2) return t('localAi.yesterday');
  if (diffMs < oneDay * 7)
    return t('localAi.daysAgo', {
      count: Math.max(2, Math.floor(diffMs / oneDay))
    });
  return t('localAi.weeksAgo', {
    count: Math.max(1, Math.floor(diffMs / (oneDay * 7)))
  });
};
const copyMessage = async (message: ChatMessage) => {
  try {
    await navigator.clipboard.writeText(message.content);
    modal.msg(t('localAi.copied'));
  } catch (error) {
    modal.msg(`${t('common.operationFailed')}: ${error}`, 'error');
  }
};
const deleteMessage = async (messageId: string) => {
  if (!activeHistory.value) return;
  activeHistory.value.messages = activeHistory.value.messages.filter(
    (message) => message.id !== messageId
  );
  activeHistory.value.updatedAt = new Date().toISOString();
  activeHistory.value.updatedAtLabel = new Date(
    activeHistory.value.updatedAt
  ).toLocaleString();
  await persistActiveHistory();
};
const editMessage = (message: ChatMessage) => {
  draft.value = message.content;
};
const markFeedback = () => {
  modal.msg(t('localAi.feedbackSaved'));
};
const regenerateMessage = async (messageId: string) => {
  const current = activeHistory.value;
  if (!current || sending.value) return;
  const index = current.messages.findIndex(
    (message) => message.id === messageId
  );
  const previousUser = current.messages
    .slice(0, index)
    .reverse()
    .find((message) => message.role === 'user');
  if (!previousUser) return;
  current.messages = current.messages.slice(0, index);
  const assistantMessage: ChatMessage = {
    id: `${Date.now()}-assistant`,
    role: 'assistant',
    content: '',
    createdAt: new Date().toISOString(),
    streaming: true
  };
  current.messages.push(assistantMessage);
  sending.value = true;
  await scrollToBottom();
  try {
    await streamAssistantMessage(assistantMessage);
    current.updatedAt = new Date().toISOString();
    current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
    await persistActiveHistory();
  } catch (error) {
    modal.msg(`${t('localAi.chatFailed')}: ${error}`, 'error');
    assistantMessage.streaming = false;
    assistantMessage.content = String(error);
  } finally {
    sending.value = false;
    await scrollToBottom();
  }
};

onMounted(async () => {
  await refreshAll();
  statusTimer = setInterval(() => {
    refreshStatus().catch((error) =>
      logger.warn('[LocalAI] status timer failed', error)
    );
  }, 8000);
});
onUnmounted(() => {
  if (statusTimer) clearInterval(statusTimer);
});
</script>

<style scoped lang="scss">
.local-ai-chat-shell {
  --chat-bg: var(--categories-content-bg, #f3f6fb);
  --chat-panel: var(--categories-panel-bg, #fbfcff);
  --chat-border: var(--categories-border-color, #d9e2ef);
  --chat-primary: var(--categories-bg-active, #5f74f3);
  --chat-primary-hover: var(--el-color-primary-dark-2, #4d63dd);
  --chat-primary-soft: rgba(95, 116, 243, 0.12);
  --chat-muted: var(--categories-info-text-color, #6b7280);
  --chat-pill-bg: var(--categories-panel-bg-hover, #edf4ff);

  display: grid;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 4px;
  color: var(--categories-text-color, #111827);
  background: var(--chat-bg);
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 6px;
}

.chat-sidebar,
.chat-panel {
  min-height: 0;
  background: var(--chat-panel);
  border: 1px solid var(--chat-border);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(30, 41, 59, 0.06);
}

.chat-sidebar {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px;
  overflow: hidden;
}

.sidebar-header,
.chat-topbar,
.input-toolbar,
.sidebar-actions,
.chat-topbar-actions,
.input-toolbar-left,
.input-toolbar-right {
  display: flex;
  align-items: center;
}

.sidebar-header,
.chat-topbar,
.input-toolbar {
  justify-content: space-between;
  gap: 12px;
}

.sidebar-title-block h2,
.chat-title-row h3 {
  margin: 0;
  color: #111827;
  font-weight: 700;
  letter-spacing: 0;
}

.sidebar-title-block h2 {
  font-size: 20px;
  line-height: 1.3;
}

.sidebar-title-block p {
  margin: 4px 0 0;
  color: var(--chat-muted);
  font-size: 14px;
}

.sidebar-actions,
.chat-topbar-actions {
  gap: 8px;
}

.icon-action-btn,
.topbar-btn,
.composer-tool-btn,
.message-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--chat-border);
  color: #435067;
  background: var(--chat-panel);
  transition:
    border-color 0.16s ease,
    color 0.16s ease,
    background-color 0.16s ease,
    transform 0.16s ease;
}

.icon-action-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.icon-action-btn--primary {
  color: var(--chat-primary);
  background: var(--chat-primary-soft);
  border-color: rgba(95, 116, 243, 0.28);
}

.icon-action-btn:hover,
.topbar-btn:hover,
.composer-tool-btn:hover,
.message-actions button:hover {
  color: var(--chat-primary);
  background: var(--chat-primary-soft);
  border-color: rgba(95, 116, 243, 0.34);
}

.sidebar-search {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  color: var(--chat-muted);
  background: var(--chat-pill-bg);
  border: 1px solid var(--chat-border);
  border-radius: 9px;
  gap: 8px;
}

.sidebar-search input {
  min-width: 0;
  flex: 1;
  color: #273449;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: none;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.recent-section {
  min-height: 0;
  flex: 1;
}

.section-title {
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
}

.chat-list-item {
  display: flex;
  align-items: center;
  min-height: 42px;
  border-radius: 8px;
  color: #44536a;
  font-size: 14px;
  text-align: left;
  transition:
    background-color 0.16s ease,
    color 0.16s ease,
    transform 0.16s ease;
}

.chat-list {
  min-height: 0;
  flex: 1;
  padding-right: 2px;
  overflow-y: auto;
}

.chat-list-item {
  position: relative;
  min-height: 40px;
  gap: 8px;
  padding: 0 10px;
  cursor: pointer;
}

.chat-list-item:hover {
  background: #f0f6ff;
}

.chat-list-item.active {
  color: #fff;
  background: var(--chat-primary);
  box-shadow: 0 6px 14px rgba(95, 116, 243, 0.16);
}

.chat-item-title {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chat-item-time {
  flex: 0 0 auto;
  color: inherit;
  opacity: 0.76;
  font-size: 12px;
}

.chat-item-delete {
  display: inline-flex;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: inherit;
  background: transparent;
  opacity: 0;
  transition:
    opacity 0.16s ease,
    background-color 0.16s ease;
}

.chat-list-item:hover .chat-item-delete,
.chat-item-delete:focus-visible {
  opacity: 1;
}

.chat-item-delete:hover {
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-empty {
  padding: 22px 10px;
  color: var(--chat-muted);
  font-size: 13px;
  text-align: center;
  background: #f0f6ff;
  border: 1px dashed var(--chat-border);
  border-radius: 9px;
}

.view-all-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  margin-top: 6px;
  color: #44536a;
  background: #fff;
  border: 1px solid var(--chat-border);
  border-radius: 8px;
  font-size: 14px;
  gap: 8px;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  padding: 24px;
  overflow: hidden;
}

.chat-topbar {
  align-items: flex-start;
}

.chat-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-title-row h3 {
  max-width: 56vw;
  overflow: hidden;
  font-size: 22px;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  color: #7f1d1d;
  font-size: 13px;
  background: #fff1f3;
  border: 1px solid #ffd9df;
  border-radius: 999px;
  gap: 6px;
}

.status-pill i {
  width: 7px;
  height: 7px;
  background: #ef5b69;
  border-radius: 999px;
}

.status-pill.ready {
  color: #166534;
  background: #ecfdf3;
  border-color: #bbf7d0;
}

.status-pill.ready i {
  background: #22c55e;
}

.service-url {
  margin-top: 8px;
  color: #66758d;
  font-size: 14px;
}

.chat-meta-pills {
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  gap: 8px;
}

.chat-meta-pills span,
.token-row span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  color: #536175;
  font-size: 13px;
  background: var(--chat-pill-bg);
  border: 1px solid var(--chat-border);
  border-radius: 8px;
}

.topbar-btn,
.topbar-custom-btn {
  height: 28px;
  border-radius: 6px;
  font-size: 14px;
  gap: 7px;
}

.topbar-btn--icon {
  width: 30px;
  padding: 0;
}

.message-list {
  min-height: 0;
  flex: 1;
  padding: 16px 2px 18px;
  overflow-y: auto;
}

.date-divider {
  display: flex;
  align-items: center;
  margin: 4px 0 24px;
  color: #94a3b8;
  font-size: 13px;
  gap: 12px;
}

.date-divider::before,
.date-divider::after {
  height: 1px;
  flex: 1;
  background: var(--chat-border);
  content: '';
}

.empty-state {
  display: flex;
  width: 300px;
  min-height: 118px;
  margin: 10vh auto 0;
  flex-direction: column;
  align-items: center;
  padding: 14px 16px;
  color: var(--chat-muted);
  text-align: center;
  background: rgba(240, 246, 255, 0.72);
  border: 1px dashed var(--chat-border);
  border-radius: 12px;
  gap: 7px;
}

.empty-title {
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
}

.empty-desc {
  font-size: 13px;
}

.message-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 22px;
  gap: 12px;
}

.message-row--user {
  flex-direction: row-reverse;
}

.message-avatar {
  display: flex;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #536175;
  font-size: 13px;
  font-weight: 700;
  background: #f0f6ff;
  border: 1px solid var(--chat-border);
  border-radius: 50%;
}

.message-row--user .message-avatar {
  color: #fff;
  background: var(--chat-primary);
  border-color: transparent;
  box-shadow: 0 8px 18px rgba(95, 116, 243, 0.18);
}

.message-body {
  min-width: 0;
  max-width: min(82%, 980px);
}

.message-row--user .message-body {
  max-width: min(56%, 720px);
}

.user-bubble {
  padding: 14px 16px 9px;
  color: #1f2937;
  font-size: 14px;
  line-height: 1.65;
  background: #f7f9ff;
  border: 1px solid rgba(95, 116, 243, 0.32);
  border-radius: 8px;
  box-shadow: 0 8px 18px rgba(95, 116, 243, 0.06);
}

.user-bubble time,
.assistant-card time {
  display: block;
  margin-top: 6px;
  color: #8996aa;
  font-size: 12px;
  text-align: right;
}

.assistant-head {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #64748b;
  font-size: 13px;
  gap: 8px;
}

.assistant-head small {
  color: #8a96a8;
  font-size: 12px;
}

.assistant-card {
  padding: 14px 16px;
  color: #172033;
  font-size: 14px;
  line-height: 1.7;
  background: #fff;
  border: 1px solid var(--chat-border);
  border-radius: 8px;
  box-shadow: none;
}

.assistant-card--streaming {
  border-color: rgba(95, 116, 243, 0.34);
}

.message-content {
  word-break: break-word;
}

.markdown-body {
  color: inherit;
}

.markdown-body :deep(p) {
  margin: 0 0 10px;
}

.markdown-body :deep(p:last-child),
.markdown-body :deep(ul:last-child),
.markdown-body :deep(ol:last-child),
.markdown-body :deep(pre:last-child) {
  margin-bottom: 0;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin: 8px 0 12px;
  padding-left: 22px;
}

.markdown-body :deep(li + li) {
  margin-top: 4px;
}

.markdown-body :deep(code) {
  padding: 2px 5px;
  color: #334155;
  font-size: 13px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
}

.markdown-body :deep(pre) {
  margin: 12px 0;
  padding: 12px;
  overflow-x: auto;
  background: #111827;
  border-radius: 8px;
}

.markdown-body :deep(pre code) {
  display: block;
  padding: 0;
  color: #e5e7eb;
  font-size: 13px;
  line-height: 1.65;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body :deep(blockquote) {
  margin: 12px 0;
  padding: 4px 0 4px 12px;
  color: #526071;
  border-left: 3px solid var(--chat-border);
}

.markdown-body :deep(table) {
  display: block;
  width: 100%;
  margin: 12px 0;
  overflow-x: auto;
  border-collapse: collapse;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  padding: 7px 9px;
  border: 1px solid var(--chat-border);
}

.markdown-body :deep(th) {
  background: var(--chat-pill-bg);
}

.message-actions {
  display: flex;
  margin-top: 7px;
  gap: 5px;
}

.message-actions button {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}

.loading-text {
  color: var(--chat-muted);
}

.chat-input-card {
  flex: 0 0 auto;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid rgba(95, 116, 243, 0.28);
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(66, 93, 142, 0.07);
}

.chat-input-card:focus-within {
  border-color: rgba(95, 116, 243, 0.72);
  box-shadow: 0 0 0 3px rgba(95, 116, 243, 0.08);
}

.chat-input {
  display: block;
  width: 100%;
  min-height: 48px;
  max-height: 74px;
  resize: none;
  color: #1f2937;
  font-size: 15px;
  line-height: 1.55;
  background: transparent;
  border: 0;
  outline: none;
}

.input-toolbar {
  margin-top: 10px;
}

.input-toolbar-left,
.input-toolbar-right {
  gap: 8px;
}

.composer-tool-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.model-select-shell {
  display: inline-flex;
  height: 34px;
  align-items: center;
  padding: 0 10px;
  color: #344054;
  background: #fff;
  border: 1px solid var(--chat-border);
  border-radius: 6px;
  gap: 7px;
}

.model-select-shell select {
  width: min(240px, 28vw);
  color: inherit;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: 0;
  appearance: none;
}

.input-hint {
  color: #7c8799;
  font-size: 13px;
}

.send-btn {
  display: inline-flex;
  width: 82px;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  color: #fff;
  font-size: 14px;
  background: var(--chat-primary);
  border: 0;
  border-radius: 6px;
  box-shadow: 0 8px 18px rgba(95, 116, 243, 0.18);
  gap: 7px;
}

.send-btn:not(:disabled):hover {
  background: var(--chat-primary-hover);
}

.send-btn:disabled {
  cursor: not-allowed;
  background: #b7c1fb;
  box-shadow: none;
}

@media (max-width: 1280px) {
  .local-ai-chat-shell {
    grid-template-columns: 310px minmax(0, 1fr);
  }

  .chat-sidebar,
  .chat-panel {
    padding: 20px;
  }
}

@media (max-width: 980px) {
  .local-ai-chat-shell {
    grid-template-columns: 1fr;
  }

  .chat-sidebar {
    max-height: 360px;
  }

  .message-row--user .message-body,
  .message-body {
    max-width: 92%;
  }
}
</style>
