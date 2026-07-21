<template>
  <main
    :class="[
      'local-ai-chat-shell',
      sidebarCollapsed ? 'local-ai-chat-shell--sidebar-collapsed' : '',
      sending ? 'local-ai-chat-shell--sending' : ''
    ]"
  >
    <aside
      :class="[
        'chat-sidebar',
        sidebarCollapsed ? 'chat-sidebar--collapsed' : ''
      ]"
    >
      <header class="sidebar-header">
        <div class="sidebar-title-block">
          <h2>{{ t('localAi.chatTitle') }}</h2>
        </div>
        <button
          class="icon-action-btn sidebar-collapse-btn"
          type="button"
          :title="
            sidebarCollapsed
              ? t('localAi.expandSidebar')
              : t('localAi.collapseSidebar')
          "
          :aria-pressed="sidebarCollapsed"
          @click="sidebarCollapsed = !sidebarCollapsed"
        >
          <LeftBar theme="outline" size="17" />
        </button>
      </header>

      <div class="sidebar-nav">
        <button
          class="sidebar-nav-item"
          type="button"
          :disabled="sending"
          @click="createNewChat"
        >
          <Edit theme="outline" size="18" />
          <span>{{ t('localAi.newChat') }}</span>
        </button>
        <label class="sidebar-nav-item sidebar-nav-item--search">
          <Search theme="outline" size="18" />
          <input
            v-model="searchQuery"
            :placeholder="t('localAi.searchHistory')"
          />
        </label>
      </div>

      <section class="sidebar-section recent-section">
        <div class="section-title-row">
          <div class="section-title">{{ t('localAi.recent') }}</div>
          <button
            class="icon-action-btn"
            type="button"
            :title="t('plugins.refresh')"
            :disabled="sending || refreshing"
            @click="refreshAll"
          >
            <Refresh
              :class="{ 'animate-spin': refreshing }"
              theme="outline"
              size="14"
            />
          </button>
        </div>
        <div v-if="filteredHistories.length" class="chat-list">
          <div
            v-for="history in filteredHistories"
            :key="history.id"
            :class="[
              'chat-list-item',
              activeHistoryId === history.id ? 'active' : '',
              sending ? 'disabled' : ''
            ]"
            role="button"
            :tabindex="sending ? -1 : 0"
            :aria-disabled="sending"
            @click="openHistory(history.id)"
            @keydown.enter.prevent="openHistory(history.id)"
          >
            <span class="chat-item-title">{{ history.title }}</span>
            <span class="chat-item-time">
              {{ formatHistoryTime(history.updatedAt) }}
            </span>
            <button
              class="chat-item-delete"
              type="button"
              :title="t('common.delete')"
              :disabled="sending"
              @click.stop="deleteHistoryItem(history.id)"
            >
              <Delete theme="outline" size="13" />
            </button>
          </div>
        </div>
        <div v-else class="sidebar-empty">{{ t('common.empty') }}</div>
      </section>

      <footer class="sidebar-service">
        <button class="sidebar-settings-btn" type="button" @click="goSettings">
          <SettingTwo theme="outline" size="16" />
          <span>{{ t('localAi.settings') }}</span>
        </button>
        <div class="sidebar-service-row">
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
      </footer>
    </aside>

    <section class="chat-panel">
      <button
        v-if="sidebarCollapsed"
        class="panel-sidebar-toggle"
        type="button"
        :title="t('localAi.expandSidebar')"
        @click="sidebarCollapsed = false"
      >
        <LeftBar theme="outline" size="17" />
      </button>

      <div
        ref="messageListRef"
        class="message-list"
        @scroll="handleMessageScroll"
        @wheel.passive="handleMessageWheel"
        @pointerdown="handleMessagePointerDown"
        @touchstart.passive="handleMessageTouchStart"
        @touchmove.passive="handleMessageTouchMove"
        @touchend="handleMessageTouchEnd"
      >
        <div v-if="!activeMessages.length" class="empty-state">
          <Robot theme="outline" size="28" />
          <div class="empty-title">{{ t('localAi.chatEmpty') }}</div>
          <div class="empty-desc">{{ t('localAi.chatPlaceholder') }}</div>
        </div>

        <template
          v-for="(display, displayIndex) in displayMessages"
          :key="display.message.id"
        >
          <div v-if="shouldShowDateDivider(displayIndex)" class="date-divider">
            <span>{{ messageDateDivider(display.message) }}</span>
          </div>

          <article
            :class="['message-row', `message-row--${display.message.role}`]"
          >
            <div class="message-avatar">
              <Robot
                v-if="display.message.role === 'assistant'"
                theme="outline"
                size="18"
              />
              <span v-else>{{ t('localAi.youShort') }}</span>
            </div>

            <div class="message-body">
              <template v-if="display.message.role === 'user'">
                <div class="user-bubble">
                  <div v-if="display.message.content" class="user-message-text">
                    {{ display.message.content }}
                  </div>
                  <div
                    v-if="display.message.attachments?.length"
                    class="message-attachment-list"
                  >
                    <div
                      v-for="attachment in display.message.attachments"
                      :key="attachment.id"
                      :class="[
                        'message-attachment-chip',
                        attachment.type === 'image' && attachment.dataUrl
                          ? 'message-attachment-chip--image'
                          : ''
                      ]"
                    >
                      <figure
                        v-if="attachment.type === 'image' && attachment.dataUrl"
                        :title="attachment.name"
                      >
                        <img :src="attachment.dataUrl" :alt="attachment.name" />
                      </figure>
                      <span v-else class="attachment-file-icon">
                        {{ attachment.type === 'text' ? 'TXT' : 'FILE' }}
                      </span>
                      <span
                        v-if="
                          !(attachment.type === 'image' && attachment.dataUrl)
                        "
                      >
                        {{ attachment.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div v-if="!display.message.streaming" class="message-actions">
                  <button
                    type="button"
                    :title="t('common.copy')"
                    @click="copyMessage(display.message)"
                  >
                    <Copy theme="outline" size="14" />
                  </button>
                  <button
                    type="button"
                    :title="t('common.edit')"
                    @click="editMessage(display.message)"
                  >
                    <Edit theme="outline" size="14" />
                  </button>
                  <button
                    type="button"
                    :title="t('common.delete')"
                    @click="deleteMessage(display.message.id)"
                  >
                    <Delete theme="outline" size="14" />
                  </button>
                </div>
              </template>

              <template v-else>
                <div class="assistant-head">
                  <span>{{ currentModelDisplay }}</span>
                  <small v-if="display.message.streaming">
                    {{ messageActivityLabel(display.message) }}
                  </small>
                </div>
                <div
                  class="assistant-card"
                  :class="{
                    'assistant-card--streaming': display.message.streaming
                  }"
                >
                  <div
                    v-if="display.message.content"
                    class="assistant-content-stack"
                  >
                    <details
                      v-if="
                        display.message.allowThinking &&
                        messageReasoning(display.message.content)
                      "
                      class="reasoning-panel"
                      :open="
                        display.message.streaming &&
                        isReasoningActive(display.message)
                      "
                    >
                      <summary>
                        <span class="reasoning-summary-title">
                          <Brain theme="outline" size="14" />
                          {{ messageReasoningLabel(display.message) }}
                        </span>
                        <small v-if="display.message.streaming">
                          {{
                            isReasoningActive(display.message)
                              ? t('localAi.thinking')
                              : t('localAi.generating')
                          }}
                        </small>
                      </summary>
                      <div
                        class="message-content markdown-body"
                        @click="handleMarkdownClick"
                        v-html="
                          renderMessageMarkdown(display.message, 'reasoning')
                        "
                      ></div>
                    </details>
                    <template v-if="messageAnswer(display.message.content)">
                      <div
                        class="message-content markdown-body"
                        @click="handleMarkdownClick"
                        v-html="
                          renderMessageMarkdown(display.message, 'answer')
                        "
                      ></div>
                    </template>
                  </div>
                  <div
                    v-else
                    :class="[
                      'message-content',
                      display.message.stopped ? '' : 'loading-text'
                    ]"
                  >
                    {{
                      display.message.stopped
                        ? t('localAi.generationStopped')
                        : assistantMessagePendingText(display.message)
                    }}
                  </div>
                </div>
                <div
                  v-if="display.message.verifiedSources?.length"
                  class="verified-source-panel"
                >
                  <div class="verified-source-panel__header">
                    <span>{{ t('localAi.verifiedSourcesUsed') }}</span>
                  </div>
                  <a
                    v-for="(source, index) in display.message.verifiedSources"
                    :key="`${source.url}-${index}`"
                    class="verified-source"
                    :href="source.url"
                    target="_blank"
                    rel="noreferrer"
                    :title="source.url"
                  >
                    <span>[{{ index + 1 }}]</span>
                    <strong>{{ source.title }}</strong>
                    <em>{{ source.source }}</em>
                  </a>
                </div>
                <div v-if="display.message.content" class="message-stats">
                  <span class="message-stats__context">
                    {{ t('localAi.contextLabel') }}:
                    {{ messageStats(display.message).context }}/{{
                      messageStats(display.message).contextMax
                    }}
                    ({{ messageStats(display.message).contextPercent }}%)
                  </span>
                  <span class="message-stats__output">
                    {{ t('localAi.outputLabel') }}:
                    {{ messageStats(display.message).output }}/{{
                      messageStats(display.message).outputMax
                    }}
                  </span>
                  <span class="message-stats__elapsed">
                    {{ messageStats(display.message).seconds }}s
                  </span>
                  <span class="message-stats__speed">
                    {{ messageStats(display.message).speed }} t/s
                  </span>
                  <span
                    v-if="!display.message.streaming"
                    class="message-stats-time"
                  >
                    {{ messageTime(display.message) }}
                  </span>
                </div>
                <div
                  v-if="messageWarningText(display.message)"
                  class="message-warning"
                >
                  {{ messageWarningText(display.message) }}
                </div>
                <div v-if="!display.message.streaming" class="message-actions">
                  <div
                    v-if="display.siblingLeafNodeIds.length > 1"
                    class="message-version-switcher"
                    :title="messageVersionLabel(display)"
                    :aria-label="messageVersionLabel(display)"
                  >
                    <button
                      type="button"
                      :disabled="display.siblingCurrentIndex <= 0"
                      :title="t('localAi.previousVersion')"
                      @click="changeMessageVersion(display, -1)"
                    >
                      ‹
                    </button>
                    <span>
                      {{ display.siblingCurrentIndex + 1 }} /
                      {{ display.siblingLeafNodeIds.length }}
                    </span>
                    <button
                      type="button"
                      :disabled="
                        display.siblingCurrentIndex >=
                        display.siblingLeafNodeIds.length - 1
                      "
                      :title="t('localAi.nextVersion')"
                      @click="changeMessageVersion(display, 1)"
                    >
                      ›
                    </button>
                  </div>
                  <button
                    type="button"
                    :title="t('common.copy')"
                    @click="copyMessage(display.message)"
                  >
                    <Copy theme="outline" size="14" />
                  </button>
                  <button
                    v-if="display.message.role === 'assistant'"
                    type="button"
                    :title="t('localAi.regenerate')"
                    @click="regenerateMessage(display.message.id)"
                  >
                    <Refresh theme="outline" size="14" />
                  </button>
                  <button
                    v-if="display.message.role === 'assistant'"
                    type="button"
                    :title="t('localAi.branchChat')"
                    @click="forkFromMessage(display.message.id)"
                  >
                    <Fork theme="outline" size="14" />
                  </button>
                  <button
                    type="button"
                    :title="t('common.edit')"
                    @click="editMessage(display.message)"
                  >
                    <Edit theme="outline" size="14" />
                  </button>
                  <button
                    type="button"
                    :title="t('common.delete')"
                    @click="deleteMessage(display.message.id)"
                  >
                    <Delete theme="outline" size="14" />
                  </button>
                </div>
              </template>
            </div>
          </article>
        </template>
      </div>

      <button
        v-if="showJumpToBottom"
        class="scroll-bottom-btn"
        type="button"
        :title="t('localAi.jumpToLatest')"
        @click="forceScrollToBottom"
      >
        <Down theme="outline" size="15" />
        <span>{{ t('localAi.jumpToLatest') }}</span>
      </button>

      <form
        :class="[
          'chat-input-card',
          composerFocused ? 'chat-input-card--focused' : ''
        ]"
        @dragover.prevent
        @drop.prevent="handleAttachmentDrop"
        @submit.prevent="sendMessage"
        @focusin="composerFocused = true"
        @focusout="composerFocused = false"
      >
        <input
          ref="fileInputRef"
          class="attachment-input"
          type="file"
          multiple
          accept=".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx"
          @change="handleAttachmentInput"
        />
        <div v-if="attachments.length" class="attachment-preview-list">
          <div
            v-for="attachment in attachments"
            :key="attachment.id"
            :class="[
              'attachment-preview-item',
              `attachment-preview-item--${attachment.status}`
            ]"
          >
            <img
              v-if="attachment.type === 'image' && attachment.dataUrl"
              :src="attachment.dataUrl"
              :alt="attachment.name"
            />
            <span v-else class="attachment-file-icon">
              {{ attachment.type === 'text' ? 'TXT' : 'FILE' }}
            </span>
            <span class="attachment-meta">
              <strong>{{ attachment.name }}</strong>
              <small>
                {{ formatFileSize(attachment.size) }} ·
                {{ attachmentStatusText(attachment) }}
              </small>
            </span>
            <button
              type="button"
              :title="t('common.delete')"
              @click="removeAttachment(attachment.id)"
            >
              <Delete theme="outline" size="12" />
            </button>
          </div>
        </div>
        <textarea
          v-model="draft"
          class="chat-input"
          rows="2"
          :placeholder="t('localAi.chatPlaceholder')"
          @keydown="handleComposerKeydown"
          @paste="handleComposerPaste"
        ></textarea>
        <div class="input-toolbar">
          <div class="input-toolbar-left">
            <button
              class="composer-tool-btn"
              type="button"
              :title="t('localAi.addAttachment')"
              @click="openAttachmentPicker"
            >
              <Link theme="outline" size="16" />
            </button>
            <label class="model-select-shell">
              <select
                v-model="selectedChatModelPath"
                :disabled="sending || !availableChatModels.length"
                @change="changeChatModel"
              >
                <option
                  v-for="path in availableChatModels"
                  :key="path"
                  :value="path"
                >
                  {{ fileName(path) }}
                </option>
                <option v-if="!availableChatModels.length" value="">
                  {{ currentModelDisplay }}
                </option>
              </select>
              <Down theme="outline" size="14" />
            </label>
            <button
              :class="[
                'composer-tool-btn',
                'composer-tool-btn--wide',
                verifiedSourcesEnabled ? 'composer-tool-btn--active' : ''
              ]"
              type="button"
              :title="
                verifiedSourcesEnabled
                  ? t('localAi.verifiedSourcesEnabled')
                  : t('localAi.verifiedSourcesDisabled')
              "
              :aria-pressed="verifiedSourcesEnabled"
              @click="toggleVerifiedSources"
            >
              <Search theme="outline" size="15" />
              <span>{{ t('localAi.verifiedSourcesTitle') }}</span>
            </button>
            <button
              v-if="modelSupportsThinking"
              :class="[
                'composer-tool-btn',
                'composer-tool-btn--wide',
                thinkingEnabled ? 'composer-tool-btn--active' : ''
              ]"
              type="button"
              :title="
                thinkingEnabled
                  ? t('localAi.thinkingEnabled')
                  : t('localAi.thinkingDisabled')
              "
              :aria-pressed="thinkingEnabled"
              @click="thinkingEnabled = !thinkingEnabled"
            >
              <Brain theme="outline" size="15" />
              <span>{{ t('localAi.reasoningTitle') }}</span>
            </button>
          </div>
          <div class="input-toolbar-right">
            <span class="input-hint">Enter · Shift + Enter</span>
            <button
              v-if="currentStreamRequestId"
              class="send-btn send-btn--stop"
              :class="{ 'send-btn--stopping': stopRequested }"
              type="button"
              :disabled="stopRequested"
              :title="
                stopRequested
                  ? t('localAi.stoppingGeneration')
                  : t('localAi.stopGenerating')
              "
              :aria-label="
                stopRequested
                  ? t('localAi.stoppingGeneration')
                  : t('localAi.stopGenerating')
              "
              @click="stopGeneration"
            >
              <Refresh
                v-if="stopRequested"
                class="animate-spin"
                theme="outline"
                size="15"
              />
              <Square v-else theme="filled" size="11" />
            </button>
            <button
              v-else
              class="send-btn"
              type="submit"
              :disabled="!canSend"
              :title="t('localAi.send')"
              :aria-label="t('localAi.send')"
            >
              <Send theme="outline" size="15" />
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
  Brain,
  Copy,
  Square,
  Delete,
  Down,
  Edit,
  Refresh,
  Robot,
  Search,
  Send,
  SettingTwo,
  Link,
  Fork,
  LeftBar
} from '@icon-park/vue-next';
import {
  cancelLocalAiChatStream,
  createLocalAiStreamRequestId,
  deleteLocalAiChatHistory,
  getLocalAiConfig,
  getLocalAiChatHistories,
  getLocalAiStatus,
  restartLocalAiService,
  saveLocalAiChatHistory,
  saveLocalAiConfig,
  scanLocalAiModels,
  searchVerifiedSourcesWithLocalAi,
  streamChatWithLocalAi,
  type LocalAiConfig,
  type LocalAiMessage,
  type LocalAiModelScan,
  type LocalAiServiceStatus
} from '@/api/localAi';
import { formatFileSize } from '@/utils/localAiAttachments';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import {
  apiUserMessageContent,
  compactMessagesForBudget,
  createRuntimeContextMessage,
  createVerifiedSourceContextMessage,
  estimateChatTokens,
  estimateStreamingOutputTokens,
  estimateTokens,
  mergeSystemMessages
} from './chatContext';
import {
  appendMessageNode,
  collectDescendantIds,
  createMessageId,
  findLeafNodeId,
  findRootMessage,
  getDisplayMessages,
  getPathToNode,
  getVisibleMessages,
  isRootMessage,
  normalizeMessagesToTree
} from './messageTree';
import type {
  ChatDisplayMessage,
  ChatHistoryView,
  ChatMessage,
  PersistedChatHistory
} from './types';
import { useChatAttachments } from './useChatAttachments';
import { useChatMarkdown } from './useChatMarkdown';

defineOptions({ name: 'LocalAiChat' });

const { t } = useI18n();
const {
  attachments,
  attachmentStatusText,
  handleAttachmentDrop,
  handleAttachmentInput,
  handleComposerPaste,
  openAttachmentPicker,
  removeAttachment
} = useChatAttachments();
const {
  clearMarkdownState,
  discardStreamingMarkdown,
  handleMarkdownClick,
  messageAnswer,
  messageReasoning,
  recordReasoningProgress,
  renderMessageMarkdown
} = useChatMarkdown();
const searchQuery = ref('');
const histories = ref<ChatHistoryView[]>([]);
const activeHistoryId = ref<string>('');
const sidebarCollapsed = ref(false);
const draft = ref('');
const sending = ref(false);
const refreshing = ref(false);
const stopRequested = ref(false);
const thinkingEnabled = ref(false);
const VERIFIED_SOURCES_ENABLED_STORAGE_KEY =
  'snippets.localAi.verifiedSourcesEnabled';
const loadVerifiedSourcesEnabled = (): boolean => {
  try {
    return (
      localStorage.getItem(VERIFIED_SOURCES_ENABLED_STORAGE_KEY) === 'true'
    );
  } catch {
    return false;
  }
};
const verifiedSourcesEnabled = ref(loadVerifiedSourcesEnabled());
const composerFocused = ref(false);
const autoFollowMessages = ref(true);
const showJumpToBottom = ref(false);
const currentStreamRequestId = ref<string | null>(null);
const currentStreamingMessage = shallowRef<ChatMessage | null>(null);
const config = ref<LocalAiConfig | null>(null);
const modelScan = ref<LocalAiModelScan | null>(null);
const selectedChatModelPath = ref('');
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const messageListRef = ref<HTMLElement | null>(null);
const statsTick = ref(Date.now());
let statusTimer: ReturnType<typeof setInterval> | null = null;
let statsTimer: ReturnType<typeof setInterval> | null = null;
let scrollFrameId: number | null = null;
let scrollFrameForce = false;
let streamingResizeObserver: ResizeObserver | null = null;
let observedStreamingCard: Element | null = null;
let scrollbarPointerActive = false;
let lastMessageScrollTop = 0;
let lastMessageTouchY: number | null = null;
const MESSAGE_BOTTOM_THRESHOLD = 96;
const MIN_RESPONSE_RESERVE_TOKENS = 4096;
const STREAM_PUMP_INTERVAL_MS = 90;
const STREAM_STATS_TICK_MS = 1000;

const canSend = computed(
  () =>
    (Boolean(draft.value.trim()) || attachments.value.length > 0) &&
    !sending.value
);
const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});
const activeHistory = computed(
  () =>
    histories.value.find((item) => item.id === activeHistoryId.value) ?? null
);
const activeMessages = computed(() => getVisibleMessages(activeHistory.value));
const displayMessages = computed(() => getDisplayMessages(activeHistory.value));
const fileName = (path?: string | null): string => {
  if (!path) return '';
  return path.split(/[\\/]+/).pop() ?? path;
};
const currentModelDisplay = computed(
  () =>
    fileName(selectedChatModelPath.value) ||
    fileName(serviceStatus.value?.modelPath) ||
    fileName(config.value?.modelPath) ||
    t('localAi.localModel')
);
const availableChatModels = computed(() => modelScan.value?.mainModels ?? []);
const visionAvailable = computed(() => Boolean(config.value?.mmprojPath));
const effectiveContextLimit = computed(
  () => config.value?.ctxSize ?? serviceStatus.value?.ctxSize ?? 4096
);
const responseReserveTokens = computed(() => {
  const contextLimit = effectiveContextLimit.value;
  const configuredMaxTokens = config.value?.maxTokens ?? 0;
  if (configuredMaxTokens > 0) {
    return Math.min(
      Math.max(configuredMaxTokens, 512),
      Math.max(512, contextLimit - 512)
    );
  }
  return Math.min(
    Math.max(MIN_RESPONSE_RESERVE_TOKENS, Math.floor(contextLimit * 0.5)),
    Math.max(512, contextLimit - 512)
  );
});
const requestContextBudget = computed(() =>
  Math.max(512, effectiveContextLimit.value - responseReserveTokens.value)
);
const modelSupportsThinking = computed(() => {
  const name = currentModelDisplay.value.toLowerCase();
  return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(name);
});
const filteredHistories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return histories.value
    .filter(
      (item) =>
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.messages.some(
          (message) =>
            !isRootMessage(message) &&
            message.content.toLowerCase().includes(query)
        )
    )
    .slice()
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
});

const nowLabel = () => t('localAi.now');
const createHistory = (): ChatHistoryView => {
  const now = new Date().toISOString();
  const root: ChatMessage = {
    id: createMessageId('root'),
    role: 'system',
    type: 'root',
    content: '',
    createdAt: now,
    parentId: null,
    childIds: []
  };
  return {
    id: `chat-${Date.now()}`,
    title: t('localAi.newChatTitle'),
    createdAt: now,
    updatedAt: now,
    updatedAtLabel: nowLabel(),
    currentNodeId: root.id,
    messages: [root]
  };
};
const isMessageListNearBottom = (): boolean => {
  const list = messageListRef.value;
  if (!list) return true;
  return (
    list.scrollHeight - list.scrollTop - list.clientHeight <=
    MESSAGE_BOTTOM_THRESHOLD
  );
};
const syncMessageScrollState = (): void => {
  const nearBottom = isMessageListNearBottom();
  if (nearBottom) autoFollowMessages.value = true;
  showJumpToBottom.value = !nearBottom && !autoFollowMessages.value;
};
const cancelPendingAutoScroll = (): void => {
  if (scrollFrameId === null || scrollFrameForce) return;
  window.cancelAnimationFrame(scrollFrameId);
  scrollFrameId = null;
};
const pauseAutoFollow = (): void => {
  autoFollowMessages.value = false;
  showJumpToBottom.value = !isMessageListNearBottom();
  cancelPendingAutoScroll();
};
const handleMessageScroll = (): void => {
  const list = messageListRef.value;
  if (list) {
    if (scrollbarPointerActive && list.scrollTop < lastMessageScrollTop - 1) {
      pauseAutoFollow();
    }
    lastMessageScrollTop = list.scrollTop;
  }
  syncMessageScrollState();
};
const handleMessageWheel = (event: WheelEvent): void => {
  if (event.deltaY >= 0) return;
  pauseAutoFollow();
  window.requestAnimationFrame(syncMessageScrollState);
};
const handleMessagePointerDown = (event: PointerEvent): void => {
  const list = messageListRef.value;
  if (!list) return;
  const bounds = list.getBoundingClientRect();
  const scrollbarWidth = Math.max(12, list.offsetWidth - list.clientWidth);
  if (event.clientX < bounds.right - scrollbarWidth) return;
  scrollbarPointerActive = true;
  lastMessageScrollTop = list.scrollTop;
  cancelPendingAutoScroll();
};
const finishMessagePointerScroll = (): void => {
  scrollbarPointerActive = false;
  syncMessageScrollState();
};
const handleMessageTouchStart = (event: TouchEvent): void => {
  lastMessageTouchY = event.touches[0]?.clientY ?? null;
};
const handleMessageTouchMove = (event: TouchEvent): void => {
  const nextY = event.touches[0]?.clientY;
  if (nextY === undefined || lastMessageTouchY === null) return;
  if (nextY > lastMessageTouchY) pauseAutoFollow();
  lastMessageTouchY = nextY;
};
const handleMessageTouchEnd = (): void => {
  lastMessageTouchY = null;
  syncMessageScrollState();
};
const syncStreamingResizeTarget = (): void => {
  if (!streamingResizeObserver) return;
  const nextCard =
    messageListRef.value?.querySelector('.assistant-card--streaming') ?? null;
  if (nextCard === observedStreamingCard) return;
  if (observedStreamingCard) {
    streamingResizeObserver.unobserve(observedStreamingCard);
  }
  observedStreamingCard = nextCard;
  if (observedStreamingCard) {
    streamingResizeObserver.observe(observedStreamingCard);
  }
};
const scrollToBottom = async (options: { force?: boolean } = {}) => {
  await nextTick();
  syncStreamingResizeTarget();
  const list = messageListRef.value;
  if (!list || (!options.force && !autoFollowMessages.value)) return;
  scrollFrameForce = scrollFrameForce || options.force === true;
  if (scrollFrameId !== null) return;

  scrollFrameId = window.requestAnimationFrame(() => {
    scrollFrameId = null;
    const target = messageListRef.value;
    const force = scrollFrameForce;
    scrollFrameForce = false;
    if (!target || (!force && !autoFollowMessages.value)) return;
    const nextTop = Math.max(0, target.scrollHeight - target.clientHeight);
    if (Math.abs(target.scrollTop - nextTop) > 1) {
      target.scrollTop = nextTop;
    }
    syncMessageScrollState();
  });
};
const forceScrollToBottom = () => {
  autoFollowMessages.value = true;
  void scrollToBottom({ force: true });
};
const refreshConfig = async () => {
  try {
    config.value = await getLocalAiConfig();
    selectedChatModelPath.value = config.value.modelPath ?? '';
    modelScan.value = await scanLocalAiModels(config.value);
    if (!modelSupportsThinking.value) thinkingEnabled.value = false;
  } catch (error) {
    logger.warn('[LocalAI] refresh chat config failed', error);
  }
};
const refreshStatus = async () => {
  if (refreshing.value) return;
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
    const loaded = (await getLocalAiChatHistories()) as PersistedChatHistory[];
    histories.value = loaded.map((history) => {
      const sourceMessages = history.messages?.length
        ? history.messages
        : history.turns.map((turn) => ({
            id: turn.id,
            role: turn.role as 'user' | 'assistant',
            content: turn.content,
            createdAt: turn.createdAt
          }));
      const normalized = normalizeMessagesToTree(
        sourceMessages,
        history.createdAt
      );
      return {
        id: history.id,
        title: history.title,
        createdAt: history.createdAt,
        updatedAt: history.updatedAt,
        updatedAtLabel: new Date(history.updatedAt).toLocaleString(),
        currentNodeId: history.currentNodeId ?? normalized.currentNodeId,
        messages: normalized.messages
      };
    });
    if (!activeHistoryId.value && histories.value[0]) {
      activeHistoryId.value = histories.value[0].id;
    }
  } catch (error) {
    logger.warn('[LocalAI] refresh histories failed', error);
  }
};
const refreshAll = async () => {
  if (sending.value) return;
  await Promise.all([refreshConfig(), refreshStatus(), refreshHistories()]);
};
const persistHistory = async (current: ChatHistoryView | null) => {
  if (!current) return;
  const visibleTurns = getVisibleMessages(current).map((message) => ({
    id: message.id,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt
  }));
  await saveLocalAiChatHistory({
    id: current.id,
    title: current.title,
    createdAt: current.createdAt,
    updatedAt: current.updatedAt,
    turns: visibleTurns,
    currentNodeId: current.currentNodeId,
    messages: current.messages
  } as PersistedChatHistory);
};
const createNewChat = () => {
  if (sending.value) return;
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
  if (sending.value) return;
  activeHistoryId.value = id;
  const current = activeHistory.value;
  if (current && !current.currentNodeId) {
    current.currentNodeId =
      findLeafNodeId(current.messages, findRootMessage(current.messages)?.id) ??
      null;
  }
  autoFollowMessages.value = true;
  scrollToBottom({ force: true });
};
const deleteHistoryItem = async (id: string) => {
  if (sending.value) return;
  histories.value = histories.value.filter((item) => item.id !== id);
  await deleteLocalAiChatHistory(id);
  if (activeHistoryId.value === id) {
    activeHistoryId.value = histories.value[0]?.id ?? '';
  }
};
const changeChatModel = async () => {
  if (!config.value || !selectedChatModelPath.value) return;
  config.value.modelPath = selectedChatModelPath.value;
  try {
    config.value = await saveLocalAiConfig(config.value);
    if (serviceStatus.value?.running) {
      serviceStatus.value = await restartLocalAiService();
    }
    modal.msg(t('localAi.modelChanged'));
  } catch (error) {
    modal.msg(`${t('localAi.configSaveFailed')}: ${error}`, 'error');
  }
};
const messageHasAnswer = (message: ChatMessage): boolean =>
  Boolean(messageAnswer(message.content));
const isReasoningActive = (message: ChatMessage): boolean =>
  Boolean(
    message.streaming &&
      message.allowThinking &&
      message.reasoningStartedAt &&
      !message.reasoningEndedAt &&
      !messageHasAnswer(message)
  );
const messageReasoningSeconds = (message: ChatMessage): string => {
  if (!message.reasoningStartedAt) return '0.00';
  const end =
    message.reasoningEndedAt ??
    (message.streaming ? statsTick.value : Date.now());
  return Math.max(0, (end - message.reasoningStartedAt) / 1000).toFixed(2);
};
const messageReasoningLabel = (message: ChatMessage): string => {
  if (!message.reasoningStartedAt && message.streaming) {
    return t('localAi.reasoningTitle');
  }
  return t('localAi.thoughtFor', {
    seconds: messageReasoningSeconds(message)
  });
};
const messageTimestamp = (message: ChatMessage): Date => {
  return new Date(
    message.createdAt || activeHistory.value?.updatedAt || Date.now()
  );
};
const messageTime = (message: ChatMessage): string => {
  return messageTimestamp(message).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};
const isSameMessageDay = (left: ChatMessage, right: ChatMessage): boolean =>
  messageTimestamp(left).toDateString() ===
  messageTimestamp(right).toDateString();
const isTodayMessage = (message: ChatMessage): boolean =>
  messageTimestamp(message).toDateString() === new Date().toDateString();
const shouldShowDateDivider = (index: number): boolean => {
  const message = displayMessages.value[index]?.message;
  if (!message) return false;
  if (index === 0) return !isTodayMessage(message);

  const previous = displayMessages.value[index - 1]?.message;
  if (!previous) return false;
  if (!isSameMessageDay(previous, message)) return true;
  return (
    messageTimestamp(message).getTime() - messageTimestamp(previous).getTime() >
    30 * 60 * 1000
  );
};
const messageDateDivider = (message: ChatMessage): string => {
  const value = messageTimestamp(message);
  const date = value.toLocaleDateString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const time = value.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  return isTodayMessage(message) ? time : `${date} ${time}`;
};
const messageActivityLabel = (message: ChatMessage): string => {
  if (!message.streaming) return messageTime(message);
  if (isReasoningActive(message)) return t('localAi.thinking');
  return t('localAi.generating');
};
const assistantMessagePendingText = (message: ChatMessage): string => {
  if (message.verifiedSourcesStatus === 'searching')
    return t('localAi.verifiedSourcesSearching');
  if (message.allowThinking && !message.reasoningEndedAt)
    return t('localAi.thinking');
  return t('localAi.generating');
};
const toggleVerifiedSources = (): void => {
  verifiedSourcesEnabled.value = !verifiedSourcesEnabled.value;
  try {
    localStorage.setItem(
      VERIFIED_SOURCES_ENABLED_STORAGE_KEY,
      String(verifiedSourcesEnabled.value)
    );
  } catch (error) {
    logger.warn('[LocalAI] save verified source state failed', error);
  }
};
const toApiMessages = (
  history: ChatHistoryView | null = activeHistory.value
): LocalAiMessage[] => {
  const runtimeContext = createRuntimeContextMessage();
  const runtimeTokens = estimateChatTokens([runtimeContext]);
  const messageBudget = Math.max(
    512,
    requestContextBudget.value - runtimeTokens
  );
  return [
    runtimeContext,
    ...compactMessagesForBudget(
      getVisibleMessages(history)
        .filter((message) => !message.streaming && message.role !== 'system')
        .map((message) => ({
          role: message.role as 'user' | 'assistant',
          content:
            message.role === 'user'
              ? apiUserMessageContent(message)
              : message.content
        })),
      messageBudget,
      t('localAi.previousAnswerTail')
    )
  ];
};
const verifiedSourceQueryFor = (
  history: ChatHistoryView,
  assistantMessage: ChatMessage
): string => {
  const parent = history.messages.find(
    (message) => message.id === assistantMessage.parentId
  );
  return parent?.role === 'user' ? parent.content.trim() : '';
};
const withVerifiedSourceContext = async (
  messages: LocalAiMessage[],
  assistantMessage: ChatMessage,
  history: ChatHistoryView
): Promise<LocalAiMessage[]> => {
  if (assistantMessage.verifiedSourcesStatus !== 'searching') return messages;
  const query = verifiedSourceQueryFor(history, assistantMessage);
  if (!query) throw new Error(t('localAi.verifiedSourcesNoQuery'));

  const response = await searchVerifiedSourcesWithLocalAi({
    query,
    maxResults: 6
  });
  if (!response.results.length)
    throw new Error(t('localAi.verifiedSourcesEmpty'));
  assistantMessage.verifiedSources = response.results;
  assistantMessage.verifiedSourcesStatus = 'done';

  const sourceMessage = createVerifiedSourceContextMessage(response);
  const systemMessages = messages.filter(
    (message) => message.role === 'system'
  );
  const conversationMessages = messages.filter(
    (message) => message.role !== 'system'
  );
  const pinnedMessages = [...systemMessages, sourceMessage];
  const contextTokens = estimateChatTokens(pinnedMessages);
  return mergeSystemMessages([
    ...pinnedMessages,
    ...compactMessagesForBudget(
      conversationMessages,
      Math.max(512, requestContextBudget.value - contextTokens),
      t('localAi.previousAnswerTail')
    )
  ]);
};
const requestMaxTokens = (messages: LocalAiMessage[]): number | undefined => {
  const configuredMaxTokens = config.value?.maxTokens ?? 0;
  if (configuredMaxTokens > 0) return configuredMaxTokens;
  const promptTokens = estimateChatTokens(messages);
  return Math.max(256, effectiveContextLimit.value - promptTokens - 128);
};
const messageContextLimit = (message: ChatMessage): number =>
  Math.max(
    1,
    message.stats?.ctxSize ??
      message.contextSize ??
      config.value?.ctxSize ??
      serviceStatus.value?.ctxSize ??
      4096
  );
const calculateMessageStats = (message: ChatMessage) => {
  const now = statsTick.value;
  const promptTokens = message.stats?.promptTokens ?? message.promptTokens ?? 0;
  const output =
    message.stats?.completionTokens ??
    message.estimatedCompletionTokens ??
    (message.streaming
      ? estimateStreamingOutputTokens(message.content)
      : estimateTokens(message.content));
  const contextMax = messageContextLimit(message);
  const context = Math.min(
    message.stats?.totalTokens ?? promptTokens + output,
    contextMax
  );
  const elapsedSeconds = Math.max(
    0,
    (message.stats?.generationTimeMs ??
      message.elapsedMs ??
      now - messageTimestamp(message).getTime()) / 1000
  );
  const speed =
    message.stats?.tokensPerSecond ??
    (elapsedSeconds > 0 ? output / elapsedSeconds : 0);

  return {
    context,
    contextMax,
    contextPercent: Math.min(100, Math.round((context / contextMax) * 100)),
    output,
    outputMax:
      (config.value?.maxTokens ?? 0) > 0
        ? String(config.value?.maxTokens)
        : '∞',
    seconds: elapsedSeconds.toFixed(1),
    speed: speed.toFixed(1)
  };
};
const messageStatsById = computed(() => {
  // One calculation per visible message and render tick. The template displays
  // several fields from the same stats object, so recomputing token estimates
  // for every interpolation is unnecessarily expensive on long conversations.
  statsTick.value;
  return new Map(
    displayMessages.value.map(({ message }) => [
      message.id,
      calculateMessageStats(message)
    ])
  );
});
const messageStats = (message: ChatMessage) =>
  messageStatsById.value.get(message.id) ?? calculateMessageStats(message);
const messageWarningText = (message: ChatMessage): string => {
  if (message.repetitionStopped) return t('localAi.repetitionStopped');
  if (message.interrupted) return t('localAi.streamInterrupted');
  if (message.stopped) return t('localAi.generationStopped');
  const estimatedContext =
    message.stats?.totalTokens ?? messageStats(message).context;
  if (estimatedContext >= messageContextLimit(message) - 8)
    return t('localAi.contextLimitReached');
  if (message.stats?.finishReason === 'length')
    return t('localAi.outputLimitReached');
  return '';
};
const formatChatError = (error: unknown): string => {
  const message = String(error);
  if (/exceeds the available context size|exceed_context_size/i.test(message)) {
    return t('localAi.contextExceeded');
  }
  return message;
};
const hasRepetitionLoop = (value: string): boolean => {
  const text = value.replace(/\s+/g, ' ').trim();
  if (text.length < 900) return false;
  const tail = text.slice(-1800);
  const tokens =
    tail
      .match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)
      ?.map((token) => token.toLowerCase()) ?? [];
  if (tokens.length < 140) return false;

  const recent = tokens.slice(-120);
  const counts = new Map<string, number>();
  for (const token of recent) counts.set(token, (counts.get(token) ?? 0) + 1);
  const uniqueRatio = counts.size / recent.length;
  if (uniqueRatio < 0.12 && [...counts.values()].some((count) => count >= 56))
    return true;

  for (let size = 1; size <= 4; size += 1) {
    const pattern = tokens.slice(-size).join('\u0000');
    let repeats = 1;
    for (let index = tokens.length - size * 2; index >= 0; index -= size) {
      if (tokens.slice(index, index + size).join('\u0000') !== pattern) break;
      repeats += 1;
    }
    if (repeats >= Math.max(24, Math.ceil(72 / size))) return true;
  }

  return false;
};
const startStatsTicker = () => {
  if (statsTimer) return;
  statsTick.value = Date.now();
  statsTimer = setInterval(() => {
    statsTick.value = Date.now();
  }, STREAM_STATS_TICK_MS);
};
const stopStatsTicker = () => {
  if (!statsTimer) return;
  clearInterval(statsTimer);
  statsTimer = null;
  statsTick.value = Date.now();
};
const beginGeneration = (assistantMessage: ChatMessage): string => {
  const requestId = createLocalAiStreamRequestId();
  stopRequested.value = false;
  currentStreamRequestId.value = requestId;
  currentStreamingMessage.value = assistantMessage;
  return requestId;
};
const clearGeneration = (requestId?: string): void => {
  if (requestId && currentStreamRequestId.value !== requestId) return;
  currentStreamRequestId.value = null;
  currentStreamingMessage.value = null;
};
const markMessageStopped = (
  message: ChatMessage,
  elapsedMs?: number
): void => {
  message.streaming = false;
  message.stopped = true;
  message.interrupted = false;
  message.error = '';
  if (message.verifiedSourcesStatus === 'searching') {
    message.verifiedSourcesStatus = 'failed';
  }
  if (message.reasoningStartedAt && !message.reasoningEndedAt) {
    message.reasoningEndedAt = Date.now();
  }
  if (elapsedMs !== undefined) message.elapsedMs = elapsedMs;
  discardStreamingMarkdown(message.id);
  statsTick.value = Date.now();
};
const streamAssistantMessage = async (
  assistantMessage: ChatMessage,
  history: ChatHistoryView,
  requestId: string
) => {
  const startedAt = performance.now();
  let messages = toApiMessages(history);
  let queuedContent = '';
  let pumpTimer: number | null = null;
  let drainResolver: (() => void) | null = null;
  let receivedDelta = false;
  let repetitionStopRequested = false;
  if (stopRequested.value) {
    markMessageStopped(assistantMessage, performance.now() - startedAt);
    clearGeneration(requestId);
    return;
  }
  messages = await withVerifiedSourceContext(
    messages,
    assistantMessage,
    history
  );
  if (stopRequested.value) {
    markMessageStopped(assistantMessage, performance.now() - startedAt);
    clearGeneration(requestId);
    return;
  }
  messages = mergeSystemMessages(messages);
  assistantMessage.promptTokens = estimateChatTokens(messages);
  assistantMessage.contextSize = effectiveContextLimit.value;

  const pump = async () => {
    if (!queuedContent) {
      pumpTimer = null;
      drainResolver?.();
      drainResolver = null;
      return;
    }

    const take = stopRequested.value
      ? queuedContent.length
      : queuedContent.length > 4000
        ? 900
        : queuedContent.length > 1200
          ? 520
          : queuedContent.length > 240
            ? 180
            : 64;
    assistantMessage.content += queuedContent.slice(0, take);
    queuedContent = queuedContent.slice(take);
    assistantMessage.estimatedCompletionTokens = estimateStreamingOutputTokens(
      assistantMessage.content
    );
    if (
      !repetitionStopRequested &&
      !stopRequested.value &&
      hasRepetitionLoop(assistantMessage.content)
    ) {
      repetitionStopRequested = true;
      stopRequested.value = true;
      assistantMessage.repetitionStopped = true;
      void cancelLocalAiChatStream(requestId).catch((error) =>
        logger.warn('[LocalAI] repetition stop failed', error)
      );
    }
    await scrollToBottom();
    if (!queuedContent) {
      pumpTimer = null;
      drainResolver?.();
      drainResolver = null;
      return;
    }
    pumpTimer = window.setTimeout(() => {
      pump().catch((error) =>
        logger.warn('[LocalAI] stream pump failed', error)
      );
    }, STREAM_PUMP_INTERVAL_MS);
  };

  const enqueueContent = (value: string) => {
    if (!value) return;
    recordReasoningProgress(assistantMessage, value);
    queuedContent += value;
    if (pumpTimer !== null) return;
    pumpTimer = window.setTimeout(() => {
      pump().catch((error) =>
        logger.warn('[LocalAI] stream pump failed', error)
      );
    }, 32);
  };
  const waitForPumpDrain = async () => {
    if (!queuedContent && pumpTimer === null) return;
    await new Promise<void>((resolve) => {
      drainResolver = resolve;
    });
  };

  const response = await streamChatWithLocalAi(
    {
      messages,
      maxTokens: requestMaxTokens(messages),
      enableThinking: assistantMessage.allowThinking === true
    },
    (delta) => {
      if (stopRequested.value) return;
      receivedDelta = true;
      enqueueContent(delta);
    },
    {
      requestId,
      onStats: (stats) => {
        assistantMessage.stats = {
          ...(assistantMessage.stats ?? {}),
          ...stats
        };
        if (stats.ctxSize) assistantMessage.contextSize = stats.ctxSize;
        if (stats.completionTokens !== undefined) {
          assistantMessage.estimatedCompletionTokens = stats.completionTokens;
        }
        statsTick.value = Date.now();
      }
    }
  ).catch(async (error) => {
    await waitForPumpDrain();
    throw error;
  });

  if (!receivedDelta) {
    enqueueContent(response.content);
  } else if (!stopRequested.value) {
    const visibleLength =
      assistantMessage.content.length + queuedContent.length;
    if (response.content.length > visibleLength) {
      enqueueContent(response.content.slice(visibleLength));
    }
  }

  await waitForPumpDrain();

  if (
    !stopRequested.value &&
    response.content &&
    assistantMessage.content !== response.content
  ) {
    assistantMessage.content = response.content;
  }
  assistantMessage.estimatedCompletionTokens =
    assistantMessage.stats?.completionTokens ??
    estimateStreamingOutputTokens(assistantMessage.content);
  discardStreamingMarkdown(assistantMessage.id);
  assistantMessage.streaming = false;
  assistantMessage.elapsedMs = performance.now() - startedAt;
  assistantMessage.stopped = stopRequested.value;
  assistantMessage.interrupted = false;
  assistantMessage.error = '';
  statsTick.value = Date.now();
  clearGeneration(requestId);
};
const stopGeneration = async () => {
  const requestId = currentStreamRequestId.value;
  if (!sending.value || stopRequested.value) return;
  stopRequested.value = true;
  const streamingMessage = currentStreamingMessage.value;
  if (streamingMessage) {
    markMessageStopped(
      streamingMessage,
      Math.max(0, Date.now() - messageTimestamp(streamingMessage).getTime())
    );
  }
  if (!requestId) return;
  try {
    await cancelLocalAiChatStream(requestId);
  } catch (error) {
    logger.warn('[LocalAI] cancel stream failed', error);
  }
};
const validateBeforeSend = (): boolean => {
  if (!draft.value.trim() && !attachments.value.length) return false;
  const pending = attachments.value.find(
    (attachment) => attachment.status === 'pending'
  );
  if (pending) {
    modal.msg(t('localAi.attachmentPendingBlock'), 'warning');
    return false;
  }
  const failed = attachments.value.find(
    (attachment) =>
      attachment.status === 'error' || attachment.type === 'unsupported'
  );
  if (failed) {
    modal.msg(
      `${t('localAi.attachmentErrorBlock')}: ${failed.name}`,
      'warning'
    );
    return false;
  }
  const hasImages = attachments.value.some(
    (attachment) => attachment.type === 'image'
  );
  if (hasImages && !visionAvailable.value) {
    modal.msg(t('localAi.visionUnavailable'), 'warning');
    return false;
  }
  return true;
};
const sendMessage = async () => {
  const content = draft.value.trim();
  if (sending.value || !validateBeforeSend()) return;
  ensureActiveHistory();
  const createdAt = new Date().toISOString();
  const submittedAttachments = attachments.value.map((attachment) => ({
    ...attachment
  }));
  const titleSource = content || submittedAttachments[0]?.name || '';
  const current = activeHistory.value;
  if (!current) return;
  const userMessage = appendMessageNode(current, {
    id: createMessageId('user'),
    role: 'user',
    content,
    createdAt,
    attachments: submittedAttachments
  });
  const assistantMessage = appendMessageNode(current, {
    id: createMessageId('assistant'),
    role: 'assistant',
    content: '',
    createdAt: new Date().toISOString(),
    parentId: userMessage.id,
    streaming: true,
    allowThinking: thinkingEnabled.value && modelSupportsThinking.value,
    verifiedSourcesStatus: verifiedSourcesEnabled.value
      ? 'searching'
      : undefined,
    contextSize: effectiveContextLimit.value
  });
  draft.value = '';
  attachments.value = [];
  sending.value = true;
  const requestId = beginGeneration(assistantMessage);
  startStatsTicker();
  await scrollToBottom({ force: true });
  const startedAt = performance.now();

  try {
    await streamAssistantMessage(assistantMessage, current, requestId);
    if (current) {
      current.title =
        current.title === t('localAi.newChatTitle')
          ? titleSource.slice(0, 28)
          : current.title;
      current.updatedAt = new Date().toISOString();
      current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
      await persistHistory(current);
    }
    await refreshStatus();
  } catch (error) {
    if (!stopRequested.value) {
      draft.value = content;
      attachments.value = submittedAttachments;
      const chatError = formatChatError(error);
      modal.msg(`${t('localAi.chatFailed')}: ${chatError}`, 'error');
      assistantMessage.error = chatError;
      assistantMessage.interrupted = Boolean(assistantMessage.content.trim());
      if (!assistantMessage.interrupted) assistantMessage.content = chatError;
      if (current) {
        current.title =
          current.title === t('localAi.newChatTitle')
            ? titleSource.slice(0, 28)
            : current.title;
        current.updatedAt = new Date().toISOString();
        current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
        await persistHistory(current);
      }
    } else {
      current.title =
        current.title === t('localAi.newChatTitle')
          ? titleSource.slice(0, 28)
          : current.title;
      current.updatedAt = new Date().toISOString();
      current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
      await persistHistory(current);
    }
    assistantMessage.streaming = false;
    discardStreamingMarkdown(assistantMessage.id);
    assistantMessage.elapsedMs = performance.now() - startedAt;
  } finally {
    sending.value = false;
    clearGeneration(requestId);
    stopStatsTicker();
    await scrollToBottom();
  }
};
const handleComposerKeydown = (event: KeyboardEvent) => {
  if (event.isComposing || event.keyCode === 229) return;
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    void sendMessage();
  }
};
const goSettings = () => {
  window.location.hash = '#/config/category/settings?tab=localAi';
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
  if (sending.value) return;
  const current = activeHistory.value;
  if (!current) return;
  const target = current.messages.find((message) => message.id === messageId);
  if (!target || isRootMessage(target)) return;
  const deletedIds = collectDescendantIds(current.messages, messageId);
  current.messages = current.messages
    .filter((message) => !deletedIds.has(message.id))
    .map((message) => ({
      ...message,
      childIds: (message.childIds ?? []).filter((id) => !deletedIds.has(id))
    }));
  if (current.currentNodeId && deletedIds.has(current.currentNodeId)) {
    current.currentNodeId =
      findLeafNodeId(current.messages, target.parentId) ??
      findRootMessage(current.messages)?.id ??
      null;
  }
  current.updatedAt = new Date().toISOString();
  current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
  await persistHistory(current);
};
const editMessage = (message: ChatMessage) => {
  if (sending.value) return;
  draft.value = message.content;
  if (activeHistory.value && message.parentId) {
    activeHistory.value.currentNodeId = message.parentId;
  }
};
const messageVersionLabel = (display: ChatDisplayMessage): string =>
  t('localAi.messageVersion', {
    current: display.siblingCurrentIndex + 1,
    total: display.siblingLeafNodeIds.length
  });
const changeMessageVersion = (display: ChatDisplayMessage, delta: number) => {
  if (sending.value) return;
  const current = activeHistory.value;
  if (!current) return;
  const nextIndex = display.siblingCurrentIndex + delta;
  const nextLeafId = display.siblingLeafNodeIds[nextIndex];
  if (!nextLeafId) return;
  current.currentNodeId = nextLeafId;
  autoFollowMessages.value = true;
  void scrollToBottom({ force: true });
};
const forkFromMessage = async (messageId: string) => {
  const current = activeHistory.value;
  if (!current || sending.value) return;
  const source = current.messages.find((message) => message.id === messageId);
  if (!source || source.role !== 'assistant') return;

  const sourcePath = getPathToNode(current.messages, source.id);
  if (!sourcePath.length) return;

  const now = new Date().toISOString();
  const idMap = new Map<string, string>();
  const clonedMessages: ChatMessage[] = sourcePath.map((message, index) => {
    const nextId =
      index === 0 ? createMessageId('root') : createMessageId(message.role);
    idMap.set(message.id, nextId);
    return {
      ...message,
      id: nextId,
      parentId: message.parentId ? (idMap.get(message.parentId) ?? null) : null,
      childIds: [] as string[],
      streaming: false,
      attachments: message.attachments?.map((attachment) => ({ ...attachment }))
    } satisfies ChatMessage;
  });

  for (let index = 0; index < clonedMessages.length - 1; index += 1) {
    clonedMessages[index].childIds = [clonedMessages[index + 1].id];
  }

  const forked: ChatHistoryView = {
    id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: `${current.title} / ${t('localAi.branchChat')}`.slice(0, 48),
    createdAt: now,
    updatedAt: now,
    updatedAtLabel: nowLabel(),
    currentNodeId: clonedMessages.at(-1)?.id ?? null,
    messages: clonedMessages
  };

  histories.value.unshift(forked);
  activeHistoryId.value = forked.id;
  draft.value = '';
  attachments.value = [];
  autoFollowMessages.value = true;
  await persistHistory(forked);
  await scrollToBottom({ force: true });
  modal.msg(t('localAi.branchCreated'));
};
const regenerateMessage = async (messageId: string) => {
  const current = activeHistory.value;
  if (!current || sending.value) return;
  const source = current.messages.find((message) => message.id === messageId);
  if (!source || source.role !== 'assistant' || !source.parentId) return;
  current.currentNodeId = source.parentId;
  const assistantMessage = appendMessageNode(current, {
    id: createMessageId('assistant'),
    role: 'assistant',
    content: '',
    createdAt: new Date().toISOString(),
    parentId: source.parentId,
    streaming: true,
    allowThinking: thinkingEnabled.value && modelSupportsThinking.value,
    verifiedSourcesStatus: verifiedSourcesEnabled.value
      ? 'searching'
      : undefined
  });
  sending.value = true;
  const requestId = beginGeneration(assistantMessage);
  startStatsTicker();
  await scrollToBottom({ force: true });
  const startedAt = performance.now();
  try {
    await streamAssistantMessage(assistantMessage, current, requestId);
    current.updatedAt = new Date().toISOString();
    current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
    await persistHistory(current);
  } catch (error) {
    if (!stopRequested.value) {
      const chatError = formatChatError(error);
      modal.msg(`${t('localAi.chatFailed')}: ${chatError}`, 'error');
      assistantMessage.error = chatError;
      assistantMessage.interrupted = Boolean(assistantMessage.content.trim());
      if (!assistantMessage.interrupted) assistantMessage.content = chatError;
      current.updatedAt = new Date().toISOString();
      current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
      await persistHistory(current);
    } else {
      current.updatedAt = new Date().toISOString();
      current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
      await persistHistory(current);
    }
    assistantMessage.streaming = false;
    discardStreamingMarkdown(assistantMessage.id);
    assistantMessage.elapsedMs = performance.now() - startedAt;
  } finally {
    sending.value = false;
    clearGeneration(requestId);
    stopStatsTicker();
    await scrollToBottom();
  }
};

onMounted(async () => {
  if (typeof ResizeObserver !== 'undefined') {
    streamingResizeObserver = new ResizeObserver(() => {
      if (autoFollowMessages.value) void scrollToBottom();
    });
  }
  window.addEventListener('pointerup', finishMessagePointerScroll);
  window.addEventListener('pointercancel', finishMessagePointerScroll);
  await refreshAll();
  statusTimer = setInterval(() => {
    refreshStatus().catch((error) =>
      logger.warn('[LocalAI] status timer failed', error)
    );
  }, 8000);
});
watch(modelSupportsThinking, (supported) => {
  if (!supported) thinkingEnabled.value = false;
});
onUnmounted(() => {
  if (statusTimer) clearInterval(statusTimer);
  if (scrollFrameId !== null) {
    window.cancelAnimationFrame(scrollFrameId);
    scrollFrameId = null;
  }
  streamingResizeObserver?.disconnect();
  streamingResizeObserver = null;
  observedStreamingCard = null;
  window.removeEventListener('pointerup', finishMessagePointerScroll);
  window.removeEventListener('pointercancel', finishMessagePointerScroll);
  if (currentStreamRequestId.value) {
    void cancelLocalAiChatStream(currentStreamRequestId.value);
  }
  clearMarkdownState();
  stopStatsTicker();
});
</script>

<style scoped lang="scss" src="./chat.scss"></style>
