<template>
  <main class="local-ai-chat-shell">
    <aside class="chat-sidebar panel-card">
      <div class="sidebar-header">
        <div class="sidebar-title-block">
          <h2>{{ t('localAi.chatTitle') }}</h2>
          <p>{{ t('localAi.chatEmpty') }}</p>
        </div>
        <div class="sidebar-actions">
          <CustomButton class="icon-action-btn" size="small" plain @click="createNewChat">
            +
          </CustomButton>
          <CustomButton class="icon-action-btn" size="small" plain @click="refreshAll">
            ↻
          </CustomButton>
        </div>
      </div>

      <div class="sidebar-search">
        <input v-model="searchQuery" class="search-input" :placeholder="t('common.search')" />
      </div>

      <div class="sidebar-section">
        <div class="section-title">{{ t('common.quickStart') }}</div>
        <button class="chat-list-item chat-list-item--primary active" type="button" @click="createNewChat">
          <div class="chat-item-copy">
            <div class="chat-item-title">{{ t('localAi.chatEmpty') }}</div>
            <div class="chat-item-meta">{{ t('localAi.chatPlaceholder') }}</div>
          </div>
          <span class="chat-item-arrow">›</span>
        </button>
      </div>

      <div class="sidebar-section recent-section">
        <div class="section-title">{{ t('localAi.recent') }}</div>
        <div v-if="filteredHistories.length" class="chat-list">
          <button v-for="history in filteredHistories" :key="history.id" type="button"
            :class="['chat-list-item', activeHistoryId === history.id ? 'active' : '']"
            @click="openHistory(history.id)">
            <div class="chat-item-copy">
              <div class="chat-item-title">{{ history.title }}</div>
              <div class="chat-item-meta">{{ history.updatedAtLabel }}</div>
            </div>
            <span class="chat-item-delete" aria-hidden="true" @click.stop="deleteHistory(history.id)">×</span>
          </button>
        </div>
        <div v-else class="sidebar-empty">{{ t('common.empty') }}</div>
      </div>
    </aside>

    <section class="chat-panel panel-card">
      <header class="chat-topbar">
        <div class="chat-topbar-main">
          <div class="chat-title-row">
            <h3>{{ activeHistory?.title ?? t('localAi.chatEmpty') }}</h3>
            <span :class="['status-pill', serviceStatus?.healthy ? 'ready' : serviceStatus?.running ? 'pending' : 'stopped']">
              {{ serviceStatusText }}
            </span>
          </div>
          <div class="chat-subtitle">
            <span class="meta-dot" />
            <span>{{ serviceStatus?.baseUrl ?? '127.0.0.1' }}</span>
            <span class="meta-dot" />
            <span>{{ t('localAi.modelRuntime') }}</span>
          </div>
        </div>
        <div class="chat-topbar-actions">
          <CustomButton class="ghost-action-btn" size="small" plain @click="goSettings">{{ t('localAi.settings') }}</CustomButton>
          <CustomButton class="ghost-action-btn" size="small" plain @click="refreshAll">{{ t('plugins.refresh') }}</CustomButton>
        </div>
      </header>

      <div class="chat-chip-row">
        <span class="info-chip">{{ t('localAi.serviceControl') }} · {{ serviceStatusText }}</span>
        <span class="info-chip">{{ serviceStatus?.baseUrl ?? '127.0.0.1' }}</span>
        <span class="info-chip">{{ t('localAi.generation') }} · {{ t('localAi.generationDesc') }}</span>
      </div>

      <div ref="messageListRef" class="message-list">
        <div v-if="!activeMessages.length" class="empty-state">
          <div class="empty-card">
            <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
            <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
          </div>
        </div>

        <article v-for="message in activeMessages" :key="message.id" :class="['message-row', `message-row--${message.role}`]">
          <div class="message-head">
            <span class="message-role">{{ message.role === 'user' ? t('localAi.you') : t('localAi.assistant') }}</span>
            <span v-if="message.role === 'assistant'" class="message-mini-meta">qwen / local</span>
          </div>
          <div class="message-bubble">{{ message.content }}</div>
          <div v-if="message.role === 'assistant'" class="message-footer">
            <span class="message-mini-meta">{{ t('localAi.generationDesc') }}</span>
            <button class="message-action-link" type="button" @click="refreshStatus">{{ t('plugins.refresh') }}</button>
          </div>
        </article>

        <article v-if="sending" class="message-row message-row--assistant">
          <div class="message-head">
            <span class="message-role">{{ t('localAi.assistant') }}</span>
            <span class="message-mini-meta">{{ t('localAi.thinking') }}</span>
          </div>
          <div class="message-bubble loading-text">{{ t('localAi.thinking') }}</div>
        </article>
      </div>

      <form class="chat-input-card" @submit.prevent="sendMessage">
        <div class="chat-input-shell">
          <textarea v-model="draft" class="chat-input" rows="4" :placeholder="t('localAi.chatPlaceholder')"
            @keydown.ctrl.enter.prevent="sendMessage" />
        </div>
        <div class="input-toolbar">
          <div class="input-toolbar-left">
            <button class="tool-chip" type="button" @click="goSettings">{{ t('localAi.settings') }}</button>
            <button class="tool-chip" type="button">Vision</button>
            <button class="tool-chip" type="button" :disabled="sending || !activeMessages.length" @click="clearMessages">{{ t('common.clear') }}</button>
          </div>
          <div class="input-toolbar-right">
            <span class="input-hint">Ctrl + Enter</span>
            <CustomButton type="primary" size="small" class="send-btn" :loading="sending" :disabled="!draft.trim()" @click="sendMessage">
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
import { CustomButton } from '@/components/UI';
import { chatWithLocalAi, getLocalAiStatus, getLocalAiChatHistories, saveLocalAiChatHistory, deleteLocalAiChatHistory, type LocalAiMessage, type LocalAiServiceStatus } from '@/api/localAi';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';

defineOptions({ name: 'LocalAiChat' });

interface ChatMessage { id: string; role: 'user' | 'assistant'; content: string; }
interface ChatHistoryView { id: string; title: string; updatedAt: string; updatedAtLabel: string; messages: ChatMessage[]; }

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

const serviceStatusText = computed(() => serviceStatus.value?.healthy ? t('localAi.serviceHealthy') : serviceStatus.value?.running ? t('localAi.serviceStarting') : t('localAi.serviceStopped'));
const activeHistory = computed(() => histories.value.find((item) => item.id === activeHistoryId.value) ?? null);
const activeMessages = computed(() => activeHistory.value?.messages ?? []);
const filteredHistories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return histories.value.filter((item) => !query || item.title.toLowerCase().includes(query) || item.messages.some((message) => message.content.toLowerCase().includes(query))).slice().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
});

const scrollToBottom = async () => { await nextTick(); const list = messageListRef.value; if (list) list.scrollTop = list.scrollHeight; };
const refreshStatus = async () => { refreshing.value = true; try { serviceStatus.value = await getLocalAiStatus(); } catch (error) { logger.warn('[LocalAI] refresh chat status failed', error); } finally { refreshing.value = false; } };
const refreshHistories = async () => { try { const loaded = await getLocalAiChatHistories(); histories.value = loaded.map((history) => ({ id: history.id, title: history.title, updatedAt: history.updatedAt, updatedAtLabel: new Date(history.updatedAt).toLocaleString(), messages: history.turns.map((turn) => ({ id: turn.id, role: turn.role as 'user' | 'assistant', content: turn.content })) })); if (!activeHistoryId.value && histories.value[0]) activeHistoryId.value = histories.value[0].id; } catch (error) { logger.warn('[LocalAI] refresh histories failed', error); } };
const refreshAll = async () => { await Promise.all([refreshStatus(), refreshHistories()]); };
const persistActiveHistory = async () => { const current = activeHistory.value; if (!current) return; await saveLocalAiChatHistory({ id: current.id, title: current.title, createdAt: current.updatedAt, updatedAt: current.updatedAt, turns: current.messages.map((message) => ({ id: message.id, role: message.role, content: message.content, createdAt: current.updatedAt })) }); };
const createNewChat = () => { const id = `chat-${Date.now()}`; histories.value.unshift({ id, title: 'New Chat', updatedAt: new Date().toISOString(), updatedAtLabel: 'now', messages: [] }); activeHistoryId.value = id; };
const openHistory = (id: string) => { activeHistoryId.value = id; };
const deleteHistory = async (id: string) => { histories.value = histories.value.filter((item) => item.id !== id); await deleteLocalAiChatHistory(id); if (activeHistoryId.value === id) activeHistoryId.value = histories.value[0]?.id ?? ''; };
const toApiMessages = (): LocalAiMessage[] => activeMessages.value.map((message) => ({ role: message.role, content: message.content }));
const sendMessage = async () => { const content = draft.value.trim(); if (!content || sending.value) return; if (!activeHistory.value) createNewChat(); activeHistory.value?.messages.push({ id: `${Date.now()}-user`, role: 'user', content }); draft.value = ''; sending.value = true; await scrollToBottom(); try { const response = await chatWithLocalAi({ messages: toApiMessages() }); activeHistory.value?.messages.push({ id: `${Date.now()}-assistant`, role: 'assistant', content: response.content }); if (activeHistory.value) { activeHistory.value.title = activeHistory.value.title === 'New Chat' ? content.slice(0, 24) : activeHistory.value.title; activeHistory.value.updatedAt = new Date().toISOString(); activeHistory.value.updatedAtLabel = new Date(activeHistory.value.updatedAt).toLocaleString(); await persistActiveHistory(); } await refreshStatus(); } catch (error) { modal.msg(`${t('localAi.chatFailed')}: ${error}`, 'error'); activeHistory.value?.messages.push({ id: `${Date.now()}-assistant-error`, role: 'assistant', content: String(error) }); } finally { sending.value = false; await scrollToBottom(); } };
const clearMessages = async () => { if (activeHistory.value) activeHistory.value.messages = []; await persistActiveHistory(); };
const goSettings = () => { router.push('/config/local-ai/settings'); };

onMounted(async () => { await refreshAll(); statusTimer = setInterval(() => { refreshStatus().catch((error) => logger.warn('[LocalAI] status timer failed', error)); }, 8000); });
onUnmounted(() => { if (statusTimer) clearInterval(statusTimer); });
</script>

<style scoped lang="scss">
.local-ai-chat-shell {
  @apply relative flex h-full min-h-0 gap-2 rounded-md border border-search bg-search p-2 box-border text-search;
}

.panel-card {
  @apply rounded-md border border-search bg-search shadow-none;
}

.chat-sidebar {
  @apply flex w-72 min-w-72 max-w-80 flex-col gap-3 p-3;
}

.sidebar-header {
  @apply flex items-start justify-between gap-2 border-b border-search pb-2;
}

.sidebar-title-block h2 {
  @apply text-base font-semibold text-search;
}

.sidebar-title-block p {
  @apply mt-1 text-xs text-search-secondary;
}

.sidebar-actions {
  @apply flex gap-2;
}

.icon-action-btn {
  @apply h-8 w-8 rounded-md border border-transparent bg-transparent p-0 text-sm text-search-secondary;
}

.icon-action-btn:hover {
  @apply bg-search-hover border-search text-search;
}

.sidebar-search {
  @apply px-1;
}

.search-input {
  @apply h-9 w-full rounded-sm border border-search bg-search-input px-3 text-sm text-search outline-none;
}

.search-input:focus {
  box-shadow: 0 0 0 1px var(--categories-text-color-active);
}

.sidebar-section {
  @apply flex flex-col gap-2;
}

.section-title {
  @apply px-1 text-xs font-medium text-search-secondary;
}

.chat-list {
  @apply flex flex-col gap-1 overflow-y-auto;
}

.chat-list-item {
  @apply flex items-start justify-between gap-3 rounded-md border border-transparent bg-search-hover px-3 py-2 text-left transition;
}

.chat-list-item:hover {
  border-color: var(--categories-text-color-active);
}

.chat-list-item.active {
  background-color: var(--search-input-bg);
  border-color: var(--categories-text-color-active);
}

.chat-list-item--primary {
  background-color: var(--search-input-bg);
  border-color: var(--categories-text-color-active);
}

.chat-item-copy {
  @apply min-w-0 flex-1;
}

.chat-item-title {
  @apply truncate text-sm font-medium text-search;
}

.chat-item-meta {
  @apply mt-0.5 truncate text-xs text-search-secondary;
}

.chat-item-arrow {
  @apply text-lg leading-none text-search-secondary;
}

.chat-item-delete {
  @apply mt-0.5 shrink-0 text-sm leading-none text-search-secondary;
}

.sidebar-empty {
  @apply rounded-md border border-dashed border-search bg-search-hover px-3 py-6 text-center text-xs text-search-secondary;
}

.chat-panel {
  @apply flex min-w-0 flex-1 flex-col gap-3 p-4;
}

.chat-topbar {
  @apply flex items-start justify-between gap-3 border-b border-search pb-2;
}

.chat-title-row {
  @apply flex flex-wrap items-center gap-2;
}

.chat-title-row h3 {
  @apply truncate text-lg font-semibold text-search;
}

.chat-subtitle {
  @apply flex items-center gap-2 text-xs text-search-secondary;
}

.meta-dot {
  @apply h-1 w-1 rounded-full;
  background-color: rgba(160, 174, 192, 0.55);
}

.status-pill {
  @apply rounded-md border border-search bg-search-hover px-2 py-0.5 text-xs text-search-secondary;

  &.ready {
    box-shadow: 0 0 0 1px var(--categories-text-color-active) inset;
    color: var(--categories-text-color-active);
  }

  &.pending {
    border-color: rgba(180, 83, 9, 0.25);
    background-color: rgba(180, 83, 9, 0.08);
    color: #b45309;
  }

  &.stopped {
    @apply border-search bg-search-hover text-search-secondary;
  }
}

.chat-chip-row {
  @apply flex flex-wrap gap-2;
}

.info-chip {
  @apply rounded-md border border-search bg-search-hover px-3 py-1 text-xs text-search-secondary;
}

.message-list {
  @apply min-h-0 flex-1 overflow-y-auto pr-1;
}

.empty-state {
  @apply flex h-full items-center justify-center;
}

.empty-card {
  @apply max-w-sm rounded-md border border-dashed border-search bg-search-hover px-6 py-8 text-center;
}

.empty-title {
  @apply text-sm font-medium text-search;
}

.empty-desc {
  @apply mt-1 text-xs text-search-secondary;
}

.message-row {
  @apply mb-4 max-w-[78%];

  &--user {
    @apply ml-auto text-right;

    .message-bubble {
      background-color: var(--categories-text-color-active);
      color: #fff;
    }

    .message-head,
    .message-footer {
      @apply justify-end;
    }
  }

  &--assistant {
    @apply mr-auto;

    .message-bubble {
      @apply border border-search bg-search-hover text-search;
    }
  }
}

.message-head,
.message-footer {
  @apply mb-1 flex items-center gap-2;
}

.message-role {
  @apply text-xs font-medium text-search-secondary;
}

.message-mini-meta {
  @apply text-xs text-search-secondary;
}

.message-action-link {
  @apply text-xs text-search-secondary transition hover:text-search;
}

.message-bubble {
  @apply whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm;
  word-break: break-word;
}

.loading-text {
  @apply text-search-secondary;
}

.chat-input-card {
  @apply rounded-md border border-search bg-search p-3 shadow-none;
}

.chat-input-shell {
  @apply rounded-md border border-search bg-search-input p-3;
}

.chat-input {
  @apply block min-h-[96px] max-h-[120px] w-full resize-none border-none bg-transparent p-0 text-sm leading-6 text-search outline-none;
}

.input-toolbar {
  @apply mt-3 flex items-center justify-between gap-3;
}

.input-toolbar-left,
.input-toolbar-right {
  @apply flex items-center gap-2;
}

.tool-chip {
  @apply rounded-md border border-transparent bg-transparent px-3 py-1 text-xs text-search-secondary transition;
}

.tool-chip:hover {
  @apply bg-search-hover text-search;
  border-color: var(--categories-text-color-active);
}

.input-hint {
  @apply text-xs text-search-secondary;
}

.send-btn {
  @apply h-8 rounded-md px-4;
}

@media (max-width: 1100px) {
  .local-ai-chat-shell {
    @apply flex-col;
  }

  .chat-sidebar {
    @apply w-full min-w-0 max-w-none;
  }

  .message-row {
    @apply max-w-full;
  }
}
</style>
