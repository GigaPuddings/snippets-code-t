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
        <kbd>Ctrl K</kbd>
      </div>

      <section class="sidebar-section">
        <div class="section-title">{{ t('common.quickStart') }}</div>
        <button
          v-for="prompt in quickPrompts"
          :key="prompt.key"
          class="quick-prompt"
          type="button"
          @click="applyQuickPrompt(prompt.text)"
        >
          <Message theme="outline" size="16" />
          <span>{{ prompt.text }}</span>
        </button>
      </section>

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
              {{ t('localAi.modelLabel') }}: {{ t('localAi.localModel') }}
            </span>
            <span>
              {{ t('localAi.contextLabel') }}: {{ t('localAi.defaultContext') }}
            </span>
            <span>{{ t('localAi.temperature') }}: 0.7</span>
            <span>{{ t('localAi.maxTokens') }}: 2048</span>
          </div>
        </div>
        <div class="chat-topbar-actions">
          <button class="topbar-btn" type="button" @click="goSettings">
            <SettingTwo theme="outline" size="16" />
            <span>{{ t('localAi.settings') }}</span>
          </button>
          <button
            class="topbar-btn topbar-btn--icon"
            type="button"
            :title="t('common.more')"
            @click="showMoreMenu"
          >
            <More theme="outline" size="18" />
          </button>
        </div>
      </header>

      <div ref="messageListRef" class="message-list">
        <div class="date-divider">
          <span>{{ t('localAi.today') }}</span>
        </div>

        <div v-if="!activeMessages.length" class="empty-state">
          <Robot theme="outline" size="30" />
          <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
          <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
        </div>

        <article
          v-for="(message, index) in activeMessages"
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
                <span>{{ t('localAi.localModel') }}</span>
                <small>
                  {{
                    t('localAi.thoughtFor', {
                      seconds: messageMeta(message, index).seconds
                    })
                  }}
                </small>
              </div>
              <div class="assistant-card">
                <div class="message-content">{{ message.content }}</div>
                <time>{{ messageTime(message) }}</time>
              </div>
              <div class="message-actions">
                <button
                  type="button"
                  :title="t('common.copy')"
                  @click="copyMessage(message)"
                >
                  <Copy theme="outline" size="15" />
                </button>
                <button
                  type="button"
                  :title="t('localAi.regenerate')"
                  @click="regenerateMessage(message.id)"
                >
                  <Refresh theme="outline" size="15" />
                </button>
                <button
                  type="button"
                  :title="t('localAi.like')"
                  @click="markFeedback"
                >
                  <Like theme="outline" size="15" />
                </button>
                <button
                  type="button"
                  :title="t('localAi.dislike')"
                  @click="markFeedback"
                >
                  <Dislike theme="outline" size="15" />
                </button>
                <button
                  type="button"
                  :title="t('common.edit')"
                  @click="editMessage(message)"
                >
                  <Edit theme="outline" size="15" />
                </button>
                <button
                  type="button"
                  :title="t('common.delete')"
                  @click="deleteMessage(message.id)"
                >
                  <Delete theme="outline" size="15" />
                </button>
              </div>
              <div class="token-row">
                <span>
                  {{
                    t('localAi.totalTokens', {
                      count: messageMeta(message, index).total
                    })
                  }}
                </span>
                <span>
                  {{
                    t('localAi.inputTokens', {
                      count: messageMeta(message, index).input
                    })
                  }}
                </span>
                <span>
                  {{
                    t('localAi.outputTokens', {
                      count: messageMeta(message, index).output
                    })
                  }}
                </span>
                <span>
                  {{
                    t('localAi.elapsedSeconds', {
                      seconds: messageMeta(message, index).seconds
                    })
                  }}
                </span>
              </div>
            </template>
          </div>
        </article>

        <article v-if="sending" class="message-row message-row--assistant">
          <div class="message-avatar">
            <Robot theme="outline" size="18" />
          </div>
          <div class="message-body">
            <div class="assistant-head">
              <span>{{ t('localAi.localModel') }}</span>
              <small>{{ t('localAi.thinking') }}</small>
            </div>
            <div class="assistant-card loading-text">
              {{ t('localAi.thinking') }}
            </div>
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
              :title="t('localAi.attachment')"
            >
              <Picture theme="outline" size="17" />
            </button>
            <button
              class="composer-tool-btn"
              type="button"
              :title="t('localAi.settings')"
              @click="goSettings"
            >
              <SettingTwo theme="outline" size="17" />
            </button>
            <label class="model-select-shell">
              <select v-model="selectedModelName">
                <option value="local">{{ t('localAi.localModel') }}</option>
              </select>
              <Down theme="outline" size="14" />
            </label>
            <span class="vision-pill">Vision</span>
            <button
              class="clear-link"
              type="button"
              :disabled="sending || !activeMessages.length"
              @click="clearMessages"
            >
              {{ t('common.clear') }}
            </button>
          </div>
          <div class="input-toolbar-right">
            <span class="input-hint">Ctrl + Enter</span>
            <button class="send-btn" type="submit" :disabled="!canSend">
              <Send theme="outline" size="17" />
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
  Picture,
  Refresh,
  Right,
  Robot,
  Search,
  Send,
  SettingTwo
} from '@icon-park/vue-next';
import {
  chatWithLocalAi,
  deleteLocalAiChatHistory,
  getLocalAiChatHistories,
  getLocalAiStatus,
  saveLocalAiChatHistory,
  type LocalAiMessage,
  type LocalAiServiceStatus
} from '@/api/localAi';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';

defineOptions({ name: 'LocalAiChat' });

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatHistoryView {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  updatedAtLabel: string;
  messages: ChatMessage[];
}

interface MessageMeta {
  input: number;
  output: number;
  total: number;
  seconds: string;
}

const { t } = useI18n();
const searchQuery = ref('');
const histories = ref<ChatHistoryView[]>([]);
const activeHistoryId = ref<string>('');
const draft = ref('');
const sending = ref(false);
const refreshing = ref(false);
const selectedModelName = ref('local');
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const messageListRef = ref<HTMLElement | null>(null);
let statusTimer: ReturnType<typeof setInterval> | null = null;

const quickPrompts = computed(() => [
  { key: 'summary', text: t('localAi.quickPromptSummary') },
  { key: 'translate', text: t('localAi.quickPromptTranslate') },
  { key: 'code', text: t('localAi.quickPromptCode') },
  { key: 'regex', text: t('localAi.quickPromptRegex') }
]);
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
        content: turn.content
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
  await Promise.all([refreshStatus(), refreshHistories()]);
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
      createdAt: current.updatedAt
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
const applyQuickPrompt = (prompt: string) => {
  ensureActiveHistory();
  draft.value = prompt;
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
  activeMessages.value.map((message) => ({
    role: message.role,
    content: message.content
  }));
const sendMessage = async () => {
  const content = draft.value.trim();
  if (!content || sending.value) return;
  ensureActiveHistory();
  activeHistory.value?.messages.push({
    id: `${Date.now()}-user`,
    role: 'user',
    content
  });
  draft.value = '';
  sending.value = true;
  await scrollToBottom();

  try {
    const response = await chatWithLocalAi({ messages: toApiMessages() });
    activeHistory.value?.messages.push({
      id: `${Date.now()}-assistant`,
      role: 'assistant',
      content: response.content
    });
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
    activeHistory.value?.messages.push({
      id: `${Date.now()}-assistant-error`,
      role: 'assistant',
      content: String(error)
    });
  } finally {
    sending.value = false;
    await scrollToBottom();
  }
};
const clearMessages = async () => {
  if (activeHistory.value) {
    activeHistory.value.messages = [];
    activeHistory.value.updatedAt = new Date().toISOString();
    activeHistory.value.updatedAtLabel = new Date(
      activeHistory.value.updatedAt
    ).toLocaleString();
  }
  await persistActiveHistory();
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
  const raw = Number(message.id.split('-')[0]);
  return Number.isFinite(raw)
    ? new Date(raw)
    : new Date(activeHistory.value?.updatedAt ?? Date.now());
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
const estimateTokens = (value: string): number =>
  Math.max(1, Math.ceil(value.length / 2.2));
const messageMeta = (message: ChatMessage, index: number): MessageMeta => {
  const previousUser = activeMessages.value
    .slice(0, index)
    .reverse()
    .find((item) => item.role === 'user');
  const input = estimateTokens(previousUser?.content ?? '');
  const output = estimateTokens(message.content);
  const seconds = (Math.min(900, output) / 60 + 0.8).toFixed(2);
  return {
    input,
    output,
    total: input + output,
    seconds
  };
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
  sending.value = true;
  await scrollToBottom();
  try {
    const response = await chatWithLocalAi({ messages: toApiMessages() });
    current.messages.push({
      id: `${Date.now()}-assistant`,
      role: 'assistant',
      content: response.content
    });
    current.updatedAt = new Date().toISOString();
    current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
    await persistActiveHistory();
  } catch (error) {
    modal.msg(`${t('localAi.chatFailed')}: ${error}`, 'error');
    current.messages.push({
      id: `${Date.now()}-assistant-error`,
      role: 'assistant',
      content: String(error)
    });
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
  --chat-bg: #eef5ff;
  --chat-panel: rgba(255, 255, 255, 0.92);
  --chat-border: #d7e3f4;
  --chat-primary: var(--categories-text-color-active, #7867ee);
  --chat-primary-soft: rgba(120, 103, 238, 0.12);
  --chat-muted: #6f7d90;
  --chat-pill-bg: #edf4fc;

  display: grid;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 4px;
  color: #172033;
  background: var(--chat-bg);
  grid-template-columns: minmax(340px, 380px) minmax(0, 1fr);
  gap: 8px;
}

.chat-sidebar,
.chat-panel {
  min-height: 0;
  background: var(--chat-panel);
  border: 1px solid var(--chat-border);
  border-radius: 8px;
  box-shadow: 0 10px 28px rgba(40, 72, 120, 0.06);
}

.chat-sidebar {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 26px 24px;
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
  gap: 16px;
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
  margin: 6px 0 0;
  color: var(--chat-muted);
  font-size: 14px;
}

.sidebar-actions,
.chat-topbar-actions {
  gap: 10px;
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
  background: rgba(255, 255, 255, 0.88);
  transition:
    border-color 0.16s ease,
    color 0.16s ease,
    background-color 0.16s ease,
    transform 0.16s ease;
}

.icon-action-btn {
  width: 42px;
  height: 42px;
  border-radius: 10px;
}

.icon-action-btn--primary {
  color: var(--chat-primary);
  border-color: rgba(120, 103, 238, 0.42);
  box-shadow: 0 6px 16px rgba(120, 103, 238, 0.08);
}

.icon-action-btn:hover,
.topbar-btn:hover,
.composer-tool-btn:hover,
.message-actions button:hover {
  color: var(--chat-primary);
  background: var(--chat-primary-soft);
  border-color: rgba(120, 103, 238, 0.42);
}

.sidebar-search {
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 12px;
  color: var(--chat-muted);
  background: #f4f8ff;
  border: 1px solid var(--chat-border);
  border-radius: 11px;
  gap: 10px;
}

.sidebar-search input {
  min-width: 0;
  flex: 1;
  color: #273449;
  font-size: 15px;
  background: transparent;
  border: 0;
  outline: none;
}

.sidebar-search kbd {
  padding: 2px 8px;
  color: #728094;
  font-size: 12px;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid var(--chat-border);
  border-radius: 7px;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recent-section {
  min-height: 0;
  flex: 1;
}

.section-title {
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
}

.quick-prompt,
.chat-list-item {
  display: flex;
  align-items: center;
  min-height: 44px;
  border-radius: 9px;
  color: #44536a;
  font-size: 14px;
  text-align: left;
  transition:
    background-color 0.16s ease,
    color 0.16s ease,
    transform 0.16s ease;
}

.quick-prompt {
  padding: 0 14px;
  background: #edf5ff;
  border: 1px solid transparent;
  gap: 12px;
}

.quick-prompt:hover {
  background: #e5effd;
  color: #25324a;
}

.chat-list {
  min-height: 0;
  flex: 1;
  padding-right: 2px;
  overflow-y: auto;
}

.chat-list-item {
  position: relative;
  gap: 10px;
  padding: 0 12px;
  cursor: pointer;
}

.chat-list-item:hover {
  background: #f0f6ff;
}

.chat-list-item.active {
  color: #fff;
  background: linear-gradient(135deg, #7568f0, #8b6cf0);
  box-shadow: 0 10px 20px rgba(120, 103, 238, 0.16);
}

.chat-item-title {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chat-item-time {
  color: inherit;
  opacity: 0.76;
  font-size: 13px;
}

.chat-item-delete {
  display: none;
  position: absolute;
  right: 8px;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  color: inherit;
  background: rgba(255, 255, 255, 0.16);
}

.chat-list-item:hover .chat-item-delete {
  display: inline-flex;
}

.sidebar-empty {
  padding: 28px 12px;
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
  height: 42px;
  margin-top: 8px;
  color: #44536a;
  background: #fff;
  border: 1px solid var(--chat-border);
  border-radius: 9px;
  box-shadow: 0 6px 16px rgba(40, 72, 120, 0.05);
  gap: 10px;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  padding: 28px 30px 26px;
  overflow: hidden;
}

.chat-topbar {
  align-items: flex-start;
}

.chat-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
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
  padding: 0 12px;
  color: #7f1d1d;
  font-size: 13px;
  background: #fff1f3;
  border: 1px solid #ffd9df;
  border-radius: 999px;
  gap: 7px;
}

.status-pill i {
  width: 8px;
  height: 8px;
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
  margin-top: 10px;
  color: #66758d;
  font-size: 14px;
}

.chat-meta-pills {
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;
  gap: 10px;
}

.chat-meta-pills span,
.token-row span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 12px;
  color: #536175;
  font-size: 13px;
  background: var(--chat-pill-bg);
  border: 1px solid var(--chat-border);
  border-radius: 9px;
}

.topbar-btn {
  height: 42px;
  padding: 0 16px;
  border-radius: 10px;
  font-size: 14px;
  gap: 8px;
}

.topbar-btn--icon {
  width: 42px;
  padding: 0;
}

.message-list {
  min-height: 0;
  flex: 1;
  padding: 22px 2px 24px;
  overflow-y: auto;
}

.date-divider {
  display: flex;
  align-items: center;
  margin: 6px 0 34px;
  color: #94a3b8;
  font-size: 13px;
  gap: 16px;
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
  width: 260px;
  margin: 14vh auto 0;
  flex-direction: column;
  align-items: center;
  padding: 18px 20px;
  color: var(--chat-muted);
  text-align: center;
  background: rgba(240, 246, 255, 0.72);
  border: 1px dashed var(--chat-border);
  border-radius: 14px;
  gap: 8px;
}

.empty-title {
  color: #1f2937;
  font-size: 15px;
  font-weight: 600;
}

.empty-desc {
  font-size: 13px;
}

.message-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 26px;
  gap: 14px;
}

.message-row--user {
  flex-direction: row-reverse;
}

.message-avatar {
  display: flex;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #536175;
  font-size: 13px;
  font-weight: 700;
  background: #f0f6ff;
  border: 1px solid var(--chat-border);
  border-radius: 999px;
}

.message-row--user .message-avatar {
  color: #fff;
  background: linear-gradient(135deg, #7568f0, #8b6cf0);
  border-color: transparent;
  box-shadow: 0 8px 18px rgba(120, 103, 238, 0.18);
}

.message-body {
  min-width: 0;
  max-width: 78%;
}

.message-row--user .message-body {
  max-width: 42%;
}

.user-bubble {
  padding: 16px 18px 10px;
  color: #1f2937;
  font-size: 15px;
  line-height: 1.7;
  background: linear-gradient(180deg, #f7f7ff, #f2f5ff);
  border: 1px solid rgba(120, 103, 238, 0.42);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(120, 103, 238, 0.08);
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
  flex-direction: column;
  margin-bottom: 8px;
  color: #64748b;
  font-size: 14px;
  gap: 4px;
}

.assistant-head small {
  color: #8a96a8;
  font-size: 12px;
}

.assistant-card {
  padding: 18px 20px;
  color: #172033;
  font-size: 15px;
  line-height: 1.8;
  background: #fff;
  border: 1px solid var(--chat-border);
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(40, 72, 120, 0.07);
}

.message-content {
  white-space: pre-wrap;
  word-break: break-word;
}

.message-actions {
  display: flex;
  margin-top: 8px;
  gap: 6px;
}

.message-actions button {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}

.token-row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 7px;
}

.token-row span {
  min-height: 24px;
  padding: 0 9px;
  font-size: 12px;
}

.loading-text {
  color: var(--chat-muted);
}

.chat-input-card {
  flex: 0 0 auto;
  padding: 16px 18px;
  background: #fff;
  border: 1px solid rgba(120, 103, 238, 0.38);
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(66, 93, 142, 0.08);
}

.chat-input-card:focus-within {
  border-color: rgba(120, 103, 238, 0.72);
  box-shadow: 0 0 0 3px rgba(120, 103, 238, 0.08);
}

.chat-input {
  display: block;
  width: 100%;
  min-height: 58px;
  max-height: 96px;
  resize: none;
  color: #1f2937;
  font-size: 15px;
  line-height: 1.7;
  background: transparent;
  border: 0;
  outline: none;
}

.input-toolbar {
  margin-top: 12px;
}

.input-toolbar-left,
.input-toolbar-right {
  gap: 10px;
}

.composer-tool-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
}

.model-select-shell {
  display: inline-flex;
  height: 36px;
  align-items: center;
  padding: 0 10px;
  color: #344054;
  background: #fff;
  border: 1px solid var(--chat-border);
  border-radius: 10px;
  gap: 8px;
}

.model-select-shell select {
  width: 88px;
  color: inherit;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: 0;
  appearance: none;
}

.vision-pill {
  display: inline-flex;
  height: 30px;
  align-items: center;
  padding: 0 13px;
  color: #946b24;
  font-size: 13px;
  background: #fff6df;
  border-radius: 999px;
}

.clear-link {
  color: #8a96a8;
  font-size: 13px;
}

.clear-link:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.input-hint {
  color: #7c8799;
  font-size: 13px;
}

.send-btn {
  display: inline-flex;
  height: 42px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  color: #fff;
  font-size: 15px;
  background: linear-gradient(135deg, #7b6df1, #8d75f4);
  border: 0;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(120, 103, 238, 0.2);
  gap: 8px;
}

.send-btn:disabled {
  cursor: not-allowed;
  background: #c9c4f8;
  box-shadow: none;
}

@media (max-width: 1280px) {
  .local-ai-chat-shell {
    grid-template-columns: 330px minmax(0, 1fr);
  }

  .chat-sidebar,
  .chat-panel {
    padding: 22px;
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
