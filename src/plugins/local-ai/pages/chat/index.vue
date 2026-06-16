<template>
  <main class="local-ai-chat-shell">
    <aside class="chat-sidebar panel-card">
      <header class="sidebar-header">
        <div class="sidebar-title-block">
          <h2>{{ t('localAi.chatTitle') }}</h2>
          <p>{{ t('localAi.chatSubtitle') }}</p>
        </div>
        <div class="sidebar-actions">
          <CustomButton class="icon-action-btn" size="small" plain :title="t('localAi.newChat')" @click="createNewChat">
            <Add theme="outline" size="16" />
          </CustomButton>
          <CustomButton class="icon-action-btn" size="small" plain :loading="refreshing" :title="t('plugins.refresh')" @click="refreshAll">
            <Refresh theme="outline" size="16" />
          </CustomButton>
        </div>
      </header>

      <div class="sidebar-search">
        <input v-model="searchQuery" class="search-input" :placeholder="t('localAi.searchHistory')" />
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
          <Message theme="outline" size="15" />
          <span>{{ prompt.text }}</span>
        </button>
      </section>

      <section class="sidebar-section recent-section">
        <div class="section-title">{{ t('localAi.recent') }}</div>
        <div v-if="filteredHistories.length" class="chat-list">
          <button
            v-for="history in filteredHistories"
            :key="history.id"
            type="button"
            :class="['chat-list-item', activeHistoryId === history.id ? 'active' : '']"
            @click="openHistory(history.id)"
          >
            <div class="chat-item-copy">
              <div class="chat-item-title">{{ history.title }}</div>
              <div class="chat-item-meta">{{ history.updatedAtLabel }}</div>
            </div>
            <button class="chat-item-delete" type="button" :title="t('common.delete')" @click.stop="deleteHistoryItem(history.id)">
              <Delete theme="outline" size="14" />
            </button>
          </button>
        </div>
        <div v-else class="sidebar-empty">{{ t('common.empty') }}</div>
      </section>
    </aside>

    <section class="chat-panel panel-card">
      <header class="chat-topbar">
        <div class="chat-topbar-main">
          <div class="chat-title-row">
            <h3>{{ activeHistory?.title ?? t('localAi.newChatTitle') }}</h3>
            <span :class="['status-pill', serviceStatus?.healthy ? 'ready' : serviceStatus?.running ? 'pending' : 'stopped']">
              {{ serviceStatusText }}
            </span>
          </div>
          <div class="chat-subtitle">
            <span>{{ serviceStatus?.baseUrl ?? t('localAi.serviceNotStarted') }}</span>
            <span class="meta-separator">/</span>
            <span>{{ t('localAi.onDemandHint') }}</span>
          </div>
        </div>
        <div class="chat-topbar-actions">
          <CustomButton size="small" plain @click="goSettings">
            <Back theme="outline" size="15" />
            {{ t('localAi.backToSettings') }}
          </CustomButton>
          <CustomButton size="small" plain @click="refreshAll">
            <Refresh theme="outline" size="15" />
            {{ t('plugins.refresh') }}
          </CustomButton>
        </div>
      </header>

      <div class="chat-status-row">
        <span class="info-chip">{{ t('localAi.serviceControl') }}: {{ serviceStatusText }}</span>
        <span class="info-chip">{{ t('localAi.modelRuntime') }}</span>
        <span class="info-chip">{{ t('localAi.generation') }}: {{ t('localAi.temperature') }} / {{ t('localAi.maxTokens') }}</span>
      </div>

      <div ref="messageListRef" class="message-list">
        <div v-if="!activeMessages.length" class="empty-state">
          <div class="empty-card">
            <Robot theme="outline" size="34" />
            <div>
              <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
              <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
            </div>
          </div>
        </div>

        <article v-for="message in activeMessages" :key="message.id" :class="['message-row', `message-row--${message.role}`]">
          <div class="message-avatar">
            <Robot v-if="message.role === 'assistant'" theme="outline" size="16" />
            <span v-else>{{ t('localAi.youShort') }}</span>
          </div>
          <div class="message-body">
            <div class="message-head">
              <span class="message-role">{{ message.role === 'user' ? t('localAi.you') : t('localAi.assistant') }}</span>
              <span v-if="message.role === 'assistant'" class="message-mini-meta">llama.cpp</span>
            </div>
            <div class="message-bubble">{{ message.content }}</div>
          </div>
        </article>

        <article v-if="sending" class="message-row message-row--assistant">
          <div class="message-avatar">
            <Robot theme="outline" size="16" />
          </div>
          <div class="message-body">
            <div class="message-head">
              <span class="message-role">{{ t('localAi.assistant') }}</span>
              <span class="message-mini-meta">{{ t('localAi.thinking') }}</span>
            </div>
            <div class="message-bubble loading-text">{{ t('localAi.thinking') }}</div>
          </div>
        </article>
      </div>

      <form class="chat-input-card" @submit.prevent="sendMessage">
        <textarea
          v-model="draft"
          class="chat-input"
          rows="4"
          :placeholder="t('localAi.chatPlaceholder')"
          @keydown.ctrl.enter.prevent="sendMessage"
        />
        <div class="input-toolbar">
          <div class="input-toolbar-left">
            <button class="tool-chip" type="button" @click="goSettings">
              <SettingTwo theme="outline" size="14" />
              {{ t('localAi.settings') }}
            </button>
            <button class="tool-chip" type="button" :disabled="sending || !activeMessages.length" @click="clearMessages">
              {{ t('common.clear') }}
            </button>
          </div>
          <div class="input-toolbar-right">
            <span class="input-hint">Ctrl + Enter</span>
            <CustomButton type="primary" size="small" class="send-btn" :loading="sending" :disabled="!canSend" @click="sendMessage">
              <Send theme="outline" size="15" />
              {{ t('localAi.send') }}
            </CustomButton>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Add, Back, Delete, Message, Refresh, Robot, Send, SettingTwo } from '@icon-park/vue-next';
import { CustomButton } from '@/components/UI';
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

const { t } = useI18n();
const router = useRouter();
const searchQuery = ref('');
const histories = ref<ChatHistoryView[]>([]);
const activeHistoryId = ref<string>('');
const draft = ref('');
const sending = ref(false);
const refreshing = ref(false);
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const messageListRef = ref<HTMLElement | null>(null);
let statusTimer: ReturnType<typeof setInterval> | null = null;

const quickPrompts = computed(() => [
  { key: 'summary', text: t('localAi.quickPromptSummary') },
  { key: 'translate', text: t('localAi.quickPromptTranslate') },
  { key: 'code', text: t('localAi.quickPromptCode') }
]);
const canSend = computed(() => Boolean(draft.value.trim()) && !sending.value);
const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});
const activeHistory = computed(() => histories.value.find((item) => item.id === activeHistoryId.value) ?? null);
const activeMessages = computed(() => activeHistory.value?.messages ?? []);
const filteredHistories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return histories.value
    .filter((item) => !query || item.title.toLowerCase().includes(query) || item.messages.some((message) => message.content.toLowerCase().includes(query)))
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
const toApiMessages = (): LocalAiMessage[] => activeMessages.value.map((message) => ({
  role: message.role,
  content: message.content
}));
const sendMessage = async () => {
  const content = draft.value.trim();
  if (!content || sending.value) return;
  ensureActiveHistory();
  activeHistory.value?.messages.push({ id: `${Date.now()}-user`, role: 'user', content });
  draft.value = '';
  sending.value = true;
  await scrollToBottom();

  try {
    const response = await chatWithLocalAi({ messages: toApiMessages() });
    activeHistory.value?.messages.push({ id: `${Date.now()}-assistant`, role: 'assistant', content: response.content });
    if (activeHistory.value) {
      activeHistory.value.title = activeHistory.value.title === t('localAi.newChatTitle') ? content.slice(0, 28) : activeHistory.value.title;
      activeHistory.value.updatedAt = new Date().toISOString();
      activeHistory.value.updatedAtLabel = new Date(activeHistory.value.updatedAt).toLocaleString();
      await persistActiveHistory();
    }
    await refreshStatus();
  } catch (error) {
    modal.msg(`${t('localAi.chatFailed')}: ${error}`, 'error');
    activeHistory.value?.messages.push({ id: `${Date.now()}-assistant-error`, role: 'assistant', content: String(error) });
  } finally {
    sending.value = false;
    await scrollToBottom();
  }
};
const clearMessages = async () => {
  if (activeHistory.value) {
    activeHistory.value.messages = [];
    activeHistory.value.updatedAt = new Date().toISOString();
    activeHistory.value.updatedAtLabel = new Date(activeHistory.value.updatedAt).toLocaleString();
  }
  await persistActiveHistory();
};
const goSettings = () => {
  router.push({ path: '/config/category/settings', query: { tab: 'localAi' } });
};

onMounted(async () => {
  await refreshAll();
  statusTimer = setInterval(() => {
    refreshStatus().catch((error) => logger.warn('[LocalAI] status timer failed', error));
  }, 8000);
});
onUnmounted(() => {
  if (statusTimer) clearInterval(statusTimer);
});
</script>

<style scoped lang="scss">
.local-ai-chat-shell {
  @apply grid h-full min-h-0 w-full max-w-none gap-3 bg-content p-3 text-search;
  grid-template-columns: 300px minmax(0, 1fr);
}

.panel-card {
  @apply rounded-md border border-panel bg-panel shadow-sm;
}

.chat-sidebar {
  @apply flex min-h-0 flex-col gap-3 overflow-hidden p-3;
}

.sidebar-header,
.chat-topbar,
.input-toolbar {
  @apply flex items-center justify-between gap-3;
}

.sidebar-title-block h2 {
  @apply text-base font-semibold text-panel;
}

.sidebar-title-block p,
.chat-subtitle,
.input-hint,
.message-mini-meta {
  @apply text-xs text-panel-text-secondary;
}

.sidebar-actions,
.chat-topbar-actions,
.input-toolbar-left,
.input-toolbar-right {
  @apply flex items-center gap-2;
}

.icon-action-btn {
  @apply h-8 w-8 p-0;
}

.search-input {
  @apply h-9 w-full rounded-md border border-panel bg-hover px-3 text-sm text-panel outline-none;
}

.search-input:focus,
.chat-input:focus {
  box-shadow: 0 0 0 1px var(--categories-text-color-active);
}

.sidebar-section {
  @apply flex flex-col gap-2;
}

.recent-section {
  @apply min-h-0 flex-1;
}

.section-title {
  @apply px-1 text-xs font-medium text-panel-text-secondary;
}

.quick-prompt,
.chat-list-item {
  @apply flex w-full items-center gap-2 rounded-md border border-transparent px-3 py-2 text-left text-sm transition;
}

.quick-prompt {
  @apply bg-hover text-panel-text-secondary;
}

.quick-prompt:hover,
.chat-list-item:hover {
  border-color: var(--search-result-active-border);
  background-color: var(--search-result-active);
  color: var(--categories-text-color);
}

.chat-list {
  @apply min-h-0 flex-1 space-y-1 overflow-y-auto pr-1;
}

.chat-list-item {
  @apply justify-between bg-transparent text-panel;
}

.chat-list-item.active {
  border-color: var(--search-result-active-border);
  background-color: var(--search-result-active);
}

.chat-item-copy {
  @apply min-w-0 flex-1;
}

.chat-item-title {
  @apply truncate text-sm font-medium;
}

.chat-item-meta {
  @apply mt-0.5 truncate text-xs text-panel-text-secondary;
}

.chat-item-delete {
  @apply flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-panel-text-secondary transition hover:bg-hover hover:text-panel;
}

.sidebar-empty {
  @apply rounded-md border border-dashed border-panel bg-hover px-3 py-6 text-center text-xs text-panel-text-secondary;
}

.chat-panel {
  @apply flex min-h-0 min-w-0 flex-col gap-3 overflow-hidden p-4;
}

.chat-topbar {
  @apply border-b border-panel pb-3;
}

.chat-title-row {
  @apply flex min-w-0 flex-wrap items-center gap-2;
}

.chat-title-row h3 {
  @apply max-w-full truncate text-lg font-semibold text-panel;
}

.chat-subtitle {
  @apply mt-1 flex flex-wrap items-center gap-2;
}

.meta-separator {
  @apply text-panel-text-secondary;
}

.status-pill,
.info-chip {
  @apply rounded-md border border-panel bg-hover px-2 py-0.5 text-xs text-panel-text-secondary;
}

.status-pill.ready {
  border-color: rgba(34, 197, 94, 0.35);
  background-color: rgba(34, 197, 94, 0.08);
  color: #16a34a;
}

.status-pill.pending {
  border-color: rgba(245, 158, 11, 0.35);
  background-color: rgba(245, 158, 11, 0.08);
  color: #b45309;
}

.chat-status-row {
  @apply flex flex-wrap gap-2;
}

.message-list {
  @apply min-h-0 flex-1 overflow-y-auto pr-1;
}

.empty-state {
  @apply flex h-full items-center justify-center;
}

.empty-card {
  @apply flex max-w-md items-center gap-4 rounded-md border border-dashed border-panel bg-hover px-6 py-5 text-panel;
}

.empty-title {
  @apply text-sm font-semibold text-panel;
}

.empty-desc {
  @apply mt-1 text-xs text-panel-text-secondary;
}

.message-row {
  @apply mb-5 flex items-start gap-3;
}

.message-row--user {
  @apply flex-row-reverse;
}

.message-avatar {
  @apply flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-panel bg-hover text-xs font-semibold text-panel-text-secondary;
}

.message-body {
  @apply max-w-[76%] min-w-0;
}

.message-row--user .message-body {
  @apply text-right;
}

.message-head {
  @apply mb-1 flex items-center gap-2;
}

.message-row--user .message-head {
  @apply justify-end;
}

.message-role {
  @apply text-xs font-medium text-panel-text-secondary;
}

.message-bubble {
  @apply whitespace-pre-wrap rounded-md px-4 py-3 text-sm leading-6 shadow-sm;
  word-break: break-word;
}

.message-row--assistant .message-bubble {
  @apply border border-panel bg-hover text-panel;
}

.message-row--user .message-bubble {
  background-color: var(--categories-text-color-active);
  color: #fff;
}

.loading-text {
  @apply text-panel-text-secondary;
}

.chat-input-card {
  @apply rounded-md border border-panel bg-panel p-3 shadow-sm;
}

.chat-input {
  @apply block min-h-[104px] max-h-[180px] w-full resize-none rounded-md border border-panel bg-hover p-3 text-sm leading-6 text-panel outline-none;
}

.tool-chip {
  @apply flex items-center gap-1 rounded-md border border-transparent bg-transparent px-3 py-1 text-xs text-panel-text-secondary transition;
}

.tool-chip:hover:not(:disabled) {
  @apply bg-hover text-panel;
  border-color: var(--search-result-active-border);
}

.tool-chip:disabled {
  @apply cursor-not-allowed opacity-50;
}

.send-btn {
  @apply h-8 rounded-md px-4;
}

@media (max-width: 1100px) {
  .local-ai-chat-shell {
    grid-template-columns: 1fr;
  }

  .chat-sidebar {
    @apply max-h-72;
  }

  .message-body {
    @apply max-w-[88%];
  }
}

@media (max-width: 760px) {
  .chat-topbar,
  .input-toolbar {
    @apply items-stretch;
    flex-direction: column;
  }

  .chat-topbar-actions,
  .input-toolbar-right {
    @apply justify-end;
  }

  .message-body {
    @apply max-w-full;
  }
}
</style>
