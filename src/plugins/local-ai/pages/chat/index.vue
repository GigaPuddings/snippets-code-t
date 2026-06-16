<template>
  <main class="local-ai-chat-shell">
    <aside class="chat-sidebar panel-card">
      <div class="sidebar-header">
        <div>
          <h2>{{ t('localAi.chatTitle') }}</h2>
          <p>{{ t('localAi.chatEmpty') }}</p>
        </div>
        <div class="sidebar-actions">
          <CustomButton size="small" type="primary" @click="createNewChat">
            {{ t('common.add') }}
          </CustomButton>
          <CustomButton size="small" plain @click="refreshAll">
            {{ t('plugins.refresh') }}
          </CustomButton>
        </div>
      </div>

      <div class="sidebar-search">
        <input v-model="searchQuery" class="search-input" :placeholder="t('common.search')" />
      </div>

      <div class="sidebar-section">
        <div class="section-title">{{ t('common.quickStart') }}</div>
        <button class="chat-list-item active" type="button" @click="createNewChat">
          <div class="chat-item-title">{{ t('localAi.chatEmpty') }}</div>
          <div class="chat-item-meta">{{ t('localAi.chatPlaceholder') }}</div>
        </button>
      </div>

      <div class="sidebar-section recent-section">
        <div class="section-title">{{ t('localAi.recent') }}</div>
        <div v-if="filteredHistories.length" class="chat-list">
          <button
            v-for="history in filteredHistories"
            :key="history.id"
            type="button"
            :class="['chat-list-item', activeHistoryId === history.id ? 'active' : '']"
            @click="openHistory(history.id)"
          >
            <div class="chat-item-title">{{ history.title }}</div>
            <div class="chat-item-meta">{{ history.updatedAtLabel }}</div>
            <span class="chat-item-delete" @click.stop="deleteHistory(history.id)">×</span>
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
            <span :class="['status-pill', serviceStatus?.healthy ? 'ready' : '']">{{ serviceStatusText }}</span>
          </div>
          <div class="chat-subtitle">{{ serviceStatus?.baseUrl ?? '127.0.0.1' }}</div>
        </div>
        <div class="chat-topbar-actions">
          <CustomButton size="small" plain @click="goSettings">{{ t('localAi.settings') }}</CustomButton>
        </div>
      </header>

      <div class="chat-status-row">
        <div class="chat-status-item"><span>{{ t('localAi.serviceControl') }}</span><b>{{ serviceStatusText }}</b></div>
        <div class="chat-status-item"><span>{{ t('localAi.modelRuntime') }}</span><b>{{ serviceStatus?.baseUrl ?? '127.0.0.1' }}</b></div>
        <div class="chat-status-item"><span>{{ t('localAi.generation') }}</span><b>{{ t('localAi.generationDesc') }}</b></div>
      </div>

      <div ref="messageListRef" class="message-list">
        <div v-if="!activeMessages.length" class="empty-state">
          <div class="empty-card">
            <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
            <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
          </div>
        </div>
        <article v-for="message in activeMessages" :key="message.id" :class="['message-row', `message-row--${message.role}`]">
          <div class="message-meta">{{ message.role === 'user' ? t('localAi.you') : t('localAi.assistant') }}</div>
          <div class="message-bubble">{{ message.content }}</div>
        </article>
        <article v-if="sending" class="message-row message-row--assistant">
          <div class="message-meta">{{ t('localAi.assistant') }}</div>
          <div class="message-bubble loading-text">{{ t('localAi.thinking') }}</div>
        </article>
      </div>

      <form class="chat-input-card" @submit.prevent="sendMessage">
        <textarea v-model="draft" class="chat-input" rows="4" :placeholder="t('localAi.chatPlaceholder')" @keydown.ctrl.enter.prevent="sendMessage" />
        <div class="input-actions">
          <div class="input-hint">Ctrl + Enter</div>
          <div class="input-buttons">
            <CustomButton size="small" plain :disabled="sending || !activeMessages.length" @click="clearMessages">{{ t('common.clear') }}</CustomButton>
            <CustomButton type="primary" size="small" :loading="sending" :disabled="!draft.trim()" @click="sendMessage">{{ t('localAi.send') }}</CustomButton>
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
.local-ai-chat-shell { @apply flex h-full min-h-0 gap-3 bg-content p-3 text-panel; }
.panel-card { @apply rounded-xl border border-panel bg-panel shadow-sm; }
.chat-sidebar { @apply flex w-72 min-w-72 max-w-80 flex-col gap-3 p-3; }
.sidebar-header { @apply flex items-start justify-between gap-2; }
.sidebar-header h2 { @apply text-base font-semibold; }
.sidebar-header p { @apply text-xs text-panel-text-secondary; }
.sidebar-actions { @apply flex gap-2; }
.sidebar-search { @apply px-1; }
.search-input { @apply h-9 w-full rounded-md border border-panel bg-hover px-3 text-sm outline-none; }
.sidebar-section { @apply flex flex-col gap-2; }
.section-title { @apply px-1 text-xs font-medium text-panel-text-secondary; }
.chat-list { @apply flex flex-col gap-1 overflow-y-auto; }
.chat-list-item { @apply relative rounded-lg border border-transparent bg-hover px-3 py-2 text-left transition hover:border-panel; }
.chat-list-item.active { @apply border-primary bg-primary; }
.chat-item-title { @apply truncate text-sm font-medium; }
.chat-item-meta { @apply truncate text-xs text-panel-text-secondary; }
.chat-item-delete { @apply absolute right-2 top-1 text-lg text-panel-text-secondary; }
.sidebar-empty { @apply rounded-lg border border-dashed border-panel bg-hover px-3 py-6 text-center text-xs text-panel-text-secondary; }
.chat-panel { @apply flex min-w-0 flex-1 flex-col gap-3 p-4; }
.chat-topbar { @apply flex items-start justify-between gap-3; }
.chat-title-row { @apply flex items-center gap-3; }
.chat-title-row h3 { @apply truncate text-lg font-semibold; }
.chat-subtitle { @apply mt-1 text-xs text-panel-text-secondary; }
.status-pill { @apply rounded-full border border-panel bg-hover px-2 py-0.5 text-xs text-panel-text-secondary; &.ready { @apply border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300; } }
.chat-status-row { @apply grid gap-2; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.chat-status-item { @apply rounded-lg border border-panel bg-hover px-3 py-2; span { @apply block text-xs text-panel-text-secondary; } b { @apply mt-1 block text-sm; } }
.message-list { @apply min-h-0 flex-1 overflow-y-auto pr-1; }
.empty-state { @apply flex h-full items-center justify-center; }
.empty-card { @apply rounded-xl border border-dashed border-panel bg-hover px-6 py-8 text-center; }
.empty-title { @apply text-sm font-medium; }
.empty-desc { @apply mt-1 text-xs text-panel-text-secondary; }
.message-row { @apply mb-4 max-w-[78%]; &--user { @apply ml-auto text-right; .message-bubble { @apply bg-primary text-white; } } &--assistant { @apply mr-auto; .message-bubble { @apply border border-panel bg-hover text-panel; } } }
.message-meta { @apply mb-1 text-xs text-panel-text-secondary; }
.message-bubble { @apply whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm; word-break: break-word; }
.loading-text { @apply text-panel-text-secondary; }
.chat-input-card { @apply rounded-xl border border-panel bg-panel p-3 shadow-sm; }
.chat-input { @apply block min-h-24 w-full resize-none rounded-md border border-panel bg-hover px-3 py-2 text-sm leading-6 text-panel outline-none; }
.input-actions { @apply mt-3 flex items-center justify-between gap-3; }
.input-hint { @apply text-xs text-panel-text-secondary; }
.input-buttons { @apply flex items-center gap-2; }
@media (max-width: 1100px) { .local-ai-chat-shell { @apply flex-col; } .chat-sidebar { @apply w-full min-w-0 max-w-none; } .chat-status-row { grid-template-columns: 1fr; } .message-row { @apply max-w-full; } }
</style>
