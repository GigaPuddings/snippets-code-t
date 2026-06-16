<template>
  <main class="local-ai-chat-shell">
    <header class="local-ai-hero panel-card">
      <div class="hero-main">
        <div class="hero-title-row">
          <h2>{{ t('localAi.chatTitle') }}</h2>
          <span :class="['status-pill', serviceStatus?.healthy ? 'ready' : '']">
            {{ serviceStatusText }}
          </span>
        </div>
        <p class="hero-desc">
          {{ t('localAi.chatEmpty') }}
        </p>
      </div>
      <div class="hero-actions">
        <CustomButton size="small" plain @click="goSettings">
          {{ t('localAi.settings') }}
        </CustomButton>
        <CustomButton size="small" plain :loading="refreshing" @click="refreshStatus">
          {{ t('plugins.refresh') }}
        </CustomButton>
      </div>
    </header>

    <section class="chat-panel panel-card">
      <div class="chat-status-row">
        <div class="chat-status-item">
          <span class="chat-status-label">{{ t('localAi.serviceControl') }}</span>
          <span class="chat-status-value">{{ serviceStatusText }}</span>
        </div>
        <div class="chat-status-item">
          <span class="chat-status-label">{{ t('localAi.modelRuntime') }}</span>
          <span class="chat-status-value">{{ serviceStatus?.baseUrl ?? '127.0.0.1' }}</span>
        </div>
        <div class="chat-status-item">
          <span class="chat-status-label">{{ t('localAi.generation') }}</span>
          <span class="chat-status-value">{{ t('localAi.generationDesc') }}</span>
        </div>
      </div>

      <div ref="messageListRef" class="message-list">
        <div v-if="!messages.length" class="empty-state">
          <div class="empty-card">
            <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
            <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
          </div>
        </div>
        <article
          v-for="message in messages"
          :key="message.id"
          :class="['message-row', `message-row--${message.role}`]"
        >
          <div class="message-meta">
            {{ message.role === 'user' ? t('localAi.you') : t('localAi.assistant') }}
          </div>
          <div class="message-bubble">{{ message.content }}</div>
        </article>
        <article v-if="sending" class="message-row message-row--assistant">
          <div class="message-meta">{{ t('localAi.assistant') }}</div>
          <div class="message-bubble loading-text">{{ t('localAi.thinking') }}</div>
        </article>
      </div>

      <form class="chat-input-card" @submit.prevent="sendMessage">
        <textarea
          v-model="draft"
          class="chat-input"
          rows="4"
          :placeholder="t('localAi.chatPlaceholder')"
          @keydown.ctrl.enter.prevent="sendMessage"
        ></textarea>
        <div class="input-actions">
          <div class="input-hint">Ctrl + Enter</div>
          <div class="input-buttons">
            <CustomButton size="small" plain :disabled="sending || !messages.length" @click="clearMessages">
              {{ t('common.clear') }}
            </CustomButton>
            <CustomButton type="primary" size="small" :loading="sending" :disabled="!draft.trim()" @click="sendMessage">
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
import { chatWithLocalAi, getLocalAiStatus, type LocalAiMessage, type LocalAiServiceStatus } from '@/api/localAi';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';

defineOptions({
  name: 'LocalAiChat'
});

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const { t } = useI18n();
const router = useRouter();
const messages = ref<ChatMessage[]>([]);
const draft = ref('');
const sending = ref(false);
const refreshing = ref(false);
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const messageListRef = ref<HTMLElement | null>(null);
let statusTimer: ReturnType<typeof setInterval> | null = null;

const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});

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

const toApiMessages = (): LocalAiMessage[] => messages.value.map((message) => ({
  role: message.role,
  content: message.content
}));

const sendMessage = async () => {
  const content = draft.value.trim();
  if (!content || sending.value) return;

  messages.value.push({
    id: `${Date.now()}-user`,
    role: 'user',
    content
  });
  draft.value = '';
  sending.value = true;
  await scrollToBottom();

  try {
    const response = await chatWithLocalAi({ messages: toApiMessages() });
    messages.value.push({
      id: `${Date.now()}-assistant`,
      role: 'assistant',
      content: response.content
    });
    await refreshStatus();
  } catch (error) {
    modal.msg(`${t('localAi.chatFailed')}: ${error}`, 'error');
    messages.value.push({
      id: `${Date.now()}-assistant-error`,
      role: 'assistant',
      content: String(error)
    });
  } finally {
    sending.value = false;
    await scrollToBottom();
  }
};

const clearMessages = () => {
  messages.value = [];
};

const goSettings = () => {
  router.push('/config/local-ai/settings');
};

onMounted(async () => {
  await refreshStatus();
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
  @apply flex h-full min-h-0 flex-col gap-3 bg-content p-3 text-panel;
}

.panel-card {
  @apply rounded-lg border border-panel bg-panel shadow-sm;
}

.local-ai-hero {
  @apply flex items-center justify-between gap-4 px-4 py-3;
}

.hero-main {
  @apply min-w-0;
}

.hero-title-row {
  @apply flex items-center gap-3;

  h2 {
    @apply truncate text-base font-semibold text-panel;
  }
}

.hero-desc {
  @apply mt-1 text-sm text-panel-text-secondary;
}

.hero-actions {
  @apply flex shrink-0 items-center gap-2;
}

.status-pill {
  @apply rounded-full border border-panel bg-hover px-2 py-0.5 text-xs text-panel-text-secondary;

  &.ready {
    @apply border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300;
  }
}

.chat-panel {
  @apply flex min-h-0 flex-1 flex-col gap-3 p-4;
}

.chat-status-row {
  @apply grid gap-2;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.chat-status-item {
  @apply rounded-md border border-panel bg-hover px-3 py-2;
}

.chat-status-label {
  @apply block text-xs text-panel-text-secondary;
}

.chat-status-value {
  @apply mt-1 block truncate text-sm text-panel;
}

.message-list {
  @apply min-h-0 flex-1 overflow-y-auto pr-1;
}

.empty-state {
  @apply flex h-full items-center justify-center;
}

.empty-card {
  @apply rounded-lg border border-dashed border-panel bg-hover px-6 py-8 text-center;
}

.empty-title {
  @apply text-sm font-medium text-panel;
}

.empty-desc {
  @apply mt-1 text-xs text-panel-text-secondary;
}

.message-row {
  @apply mb-4 max-w-[82%];

  &--user {
    @apply ml-auto text-right;

    .message-bubble {
      @apply bg-primary text-white;
    }
  }

  &--assistant {
    @apply mr-auto;

    .message-bubble {
      @apply border border-panel bg-hover text-panel;
    }
  }
}

.message-meta {
  @apply mb-1 text-xs text-panel-text-secondary;
}

.message-bubble {
  @apply whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm;
  word-break: break-word;
}

.loading-text {
  @apply text-panel-text-secondary;
}

.chat-input-card {
  @apply rounded-lg border border-panel bg-panel p-3 shadow-sm;
}

.chat-input {
  @apply block min-h-24 w-full resize-none rounded-md border border-panel bg-hover px-3 py-2 text-sm leading-6 text-panel outline-none;

  &:focus {
    box-shadow: inset 0 0 0 1px var(--el-color-primary-light-3);
  }
}

.input-actions {
  @apply mt-3 flex items-center justify-between gap-3;
}

.input-hint {
  @apply text-xs text-panel-text-secondary;
}

.input-buttons {
  @apply flex items-center gap-2;
}

@media (max-width: 960px) {
  .chat-status-row {
    grid-template-columns: 1fr;
  }

  .message-row {
    @apply max-w-full;
  }
}
</style>