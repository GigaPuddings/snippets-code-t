<template>
  <main class="local-ai-chat">
    <header class="chat-header">
      <div class="chat-title">
        <h2>{{ t('localAi.chatTitle') }}</h2>
        <span :class="['status-pill', serviceStatus?.healthy ? 'ready' : '']">
          {{ serviceStatusText }}
        </span>
      </div>
      <div class="chat-actions">
        <CustomButton size="small" plain @click="goSettings">
          {{ t('localAi.settings') }}
        </CustomButton>
        <CustomButton size="small" plain :loading="refreshing" @click="refreshStatus">
          {{ t('plugins.refresh') }}
        </CustomButton>
      </div>
    </header>

    <section ref="messageListRef" class="message-list">
      <div v-if="!messages.length" class="empty-state">
        {{ t('localAi.chatEmpty') }}
      </div>
      <article
        v-for="message in messages"
        :key="message.id"
        :class="['message-row', `message-row--${message.role}`]"
      >
        <div class="message-meta">
          {{ message.role === 'user' ? t('localAi.you') : t('localAi.assistant') }}
        </div>
        <div class="message-bubble">
          {{ message.content }}
        </div>
      </article>
      <article v-if="sending" class="message-row message-row--assistant">
        <div class="message-meta">{{ t('localAi.assistant') }}</div>
        <div class="message-bubble loading-text">{{ t('localAi.thinking') }}</div>
      </article>
    </section>

    <form class="chat-input-bar" @submit.prevent="sendMessage">
      <textarea
        v-model="draft"
        class="chat-input"
        rows="3"
        :placeholder="t('localAi.chatPlaceholder')"
        @keydown.ctrl.enter.prevent="sendMessage"
      ></textarea>
      <div class="input-actions">
        <CustomButton size="small" plain :disabled="sending || !messages.length" @click="clearMessages">
          {{ t('common.clear') }}
        </CustomButton>
        <CustomButton type="primary" size="small" :loading="sending" :disabled="!draft.trim()" @click="sendMessage">
          {{ t('localAi.send') }}
        </CustomButton>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { CustomButton } from '@/components/UI';
import {
  chatWithLocalAi,
  getLocalAiStatus,
  type LocalAiMessage,
  type LocalAiServiceStatus
} from '@/api/localAi';
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
  if (list) {
    list.scrollTop = list.scrollHeight;
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

const toApiMessages = (): LocalAiMessage[] => (
  messages.value.map((message) => ({
    role: message.role,
    content: message.content
  }))
);

const sendMessage = async () => {
  const content = draft.value.trim();
  if (!content || sending.value) return;

  const userMessage: ChatMessage = {
    id: `${Date.now()}-user`,
    role: 'user',
    content
  };
  messages.value.push(userMessage);
  draft.value = '';
  sending.value = true;
  await scrollToBottom();

  try {
    const response = await chatWithLocalAi({
      messages: toApiMessages()
    });
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
  router.push({
    path: '/config/category/settings',
    query: { tab: 'localAi' }
  });
};

onMounted(async () => {
  await refreshStatus();
  statusTimer = setInterval(() => {
    refreshStatus().catch((error) => logger.warn('[LocalAI] status timer failed', error));
  }, 8000);
});

onUnmounted(() => {
  if (statusTimer) {
    clearInterval(statusTimer);
    statusTimer = null;
  }
});
</script>

<style scoped lang="scss">
.local-ai-chat {
  @apply flex h-full min-h-0 flex-col bg-panel text-panel;
}

.chat-header {
  @apply flex shrink-0 items-center justify-between gap-3 border-b border-panel px-4 py-3;
}

.chat-title {
  @apply flex min-w-0 items-center gap-3;

  h2 {
    @apply truncate text-base font-semibold text-panel;
  }
}

.status-pill {
  @apply rounded border border-panel bg-hover px-2 py-0.5 text-xs text-panel-text-secondary;

  &.ready {
    @apply border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300;
  }
}

.chat-actions {
  @apply flex shrink-0 items-center gap-2;
}

.message-list {
  @apply flex-1 overflow-y-auto px-4 py-4;
}

.empty-state {
  @apply flex h-full items-center justify-center text-sm text-panel-text-secondary;
}

.message-row {
  @apply mb-4 max-w-[86%];

  &--user {
    @apply ml-auto;

    .message-meta {
      @apply text-right;
    }

    .message-bubble {
      @apply bg-active text-white;
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
  @apply whitespace-pre-wrap rounded-md px-3 py-2 text-sm leading-6 shadow-sm;
  word-break: break-word;
}

.loading-text {
  @apply text-panel-text-secondary;
}

.chat-input-bar {
  @apply shrink-0 border-t border-panel bg-panel p-3;
}

.chat-input {
  @apply block min-h-20 w-full resize-none rounded border border-panel bg-hover px-3 py-2 text-sm leading-6 text-panel outline-none;

  &:focus {
    box-shadow: inset 0 0 0 1px var(--el-color-primary-light-3);
  }
}

.input-actions {
  @apply mt-2 flex justify-end gap-2;
}
</style>
