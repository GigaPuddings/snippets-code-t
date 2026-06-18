<template>
  <main
    :class="[
      'local-ai-chat-shell',
      sidebarCollapsed ? 'local-ai-chat-shell--sidebar-collapsed' : ''
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
        <button class="sidebar-nav-item" type="button" @click="createNewChat">
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
            @click="refreshAll"
          >
            <Refresh theme="outline" size="14" />
          </button>
        </div>
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
                      <pre
                        v-if="display.message.streaming"
                        class="message-content streaming-text"
                        v-text="messageReasoning(display.message.content)"
                      ></pre>
                      <div
                        v-else
                        class="message-content markdown-body"
                        @click="handleMarkdownClick"
                        v-html="
                          renderMarkdown(
                            messageReasoning(display.message.content)
                          )
                        "
                      ></div>
                    </details>
                    <template v-if="messageAnswer(display.message.content)">
                      <pre
                        v-if="display.message.streaming"
                        class="message-content streaming-text"
                        v-text="messageAnswer(display.message.content)"
                      ></pre>
                      <div
                        v-else
                        class="message-content markdown-body"
                        @click="handleMarkdownClick"
                        v-html="
                          renderMarkdown(messageAnswer(display.message.content))
                        "
                      ></div>
                    </template>
                  </div>
                  <div v-else class="message-content loading-text">
                    {{ assistantMessagePendingText(display.message) }}
                  </div>
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
              v-if="sending"
              class="send-btn send-btn--stop"
              type="button"
              :title="t('localAi.stopGenerating')"
              :aria-label="t('localAi.stopGenerating')"
              @click="stopGeneration"
            >
              <Square theme="filled" size="11" />
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
import { marked } from 'marked';
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
  streamChatWithLocalAi,
  type LocalAiConfig,
  type LocalAiChatHistory,
  type LocalAiChatStreamStats,
  type LocalAiContentPart,
  type LocalAiMessage,
  type LocalAiModelScan,
  type LocalAiServiceStatus
} from '@/api/localAi';
import {
  buildPromptWithFileAttachments,
  fileToDataUrl,
  fileToText,
  formatFileSize,
  isImageFile,
  isTextFile,
  isUnsupportedKnownFile,
  LOCAL_AI_MAX_ATTACHMENTS,
  LOCAL_AI_MAX_IMAGE_BYTES,
  LOCAL_AI_MAX_TEXT_BYTES,
  type LocalAiAttachment
} from '@/utils/localAiAttachments';
import { sanitizeHtml } from '@/utils/html-sanitize';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';

defineOptions({ name: 'LocalAiChat' });

interface ChatMessage {
  id: string;
  role: 'system' | 'user' | 'assistant';
  type?: 'root' | 'text';
  content: string;
  createdAt: string;
  attachments?: LocalAiAttachment[];
  parentId?: string | null;
  childIds?: string[];
  streaming?: boolean;
  elapsedMs?: number;
  promptTokens?: number;
  contextSize?: number;
  stats?: LocalAiChatStreamStats;
  stopped?: boolean;
  interrupted?: boolean;
  repetitionStopped?: boolean;
  allowThinking?: boolean;
  reasoningStartedAt?: number;
  reasoningEndedAt?: number;
  error?: string;
}

interface ChatDisplayMessage {
  message: ChatMessage;
  siblingLeafNodeIds: string[];
  siblingCurrentIndex: number;
}

interface ChatHistoryView {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  updatedAtLabel: string;
  currentNodeId: string | null;
  messages: ChatMessage[];
}

type PersistedChatHistory = LocalAiChatHistory & {
  currentNodeId?: string | null;
  messages?: ChatMessage[];
};

const { t } = useI18n();
const searchQuery = ref('');
const histories = ref<ChatHistoryView[]>([]);
const activeHistoryId = ref<string>('');
const sidebarCollapsed = ref(false);
const draft = ref('');
const attachments = ref<LocalAiAttachment[]>([]);
const sending = ref(false);
const refreshing = ref(false);
const stopRequested = ref(false);
const thinkingEnabled = ref(false);
const composerFocused = ref(false);
const autoFollowMessages = ref(true);
const showJumpToBottom = ref(false);
const currentStreamRequestId = ref<string | null>(null);
const config = ref<LocalAiConfig | null>(null);
const modelScan = ref<LocalAiModelScan | null>(null);
const selectedChatModelPath = ref('');
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const messageListRef = ref<HTMLElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const statsTick = ref(Date.now());
let statusTimer: ReturnType<typeof setInterval> | null = null;
let statsTimer: ReturnType<typeof setInterval> | null = null;
let scrollFrameId: number | null = null;
let scrollFrameForce = false;
const markdownCache = new Map<string, string>();
const markdownCodeCache = new Map<string, string>();
const MESSAGE_BOTTOM_THRESHOLD = 96;
const MIN_RESPONSE_RESERVE_TOKENS = 4096;
const MIN_ASSISTANT_TAIL_TOKENS = 160;
const STREAM_PUMP_INTERVAL_MS = 64;
const STREAM_STATS_TICK_MS = 1000;

const createMessageId = (role: ChatMessage['role'] | 'root'): string =>
  `${Date.now()}-${role}-${Math.random().toString(16).slice(2, 8)}`;
const isRootMessage = (message: ChatMessage): boolean =>
  message.type === 'root';
const messageNodeMap = (messages: ChatMessage[]): Map<string, ChatMessage> =>
  new Map(messages.map((message) => [message.id, message]));
const findRootMessage = (messages: ChatMessage[]): ChatMessage | undefined =>
  messages.find(isRootMessage);
const findLeafNodeId = (
  messages: ChatMessage[],
  nodeId: string | null | undefined
): string | null => {
  if (!nodeId) return null;
  const nodes = messageNodeMap(messages);
  let current = nodes.get(nodeId);
  const visited = new Set<string>();
  while (current?.childIds?.length) {
    if (visited.has(current.id)) break;
    visited.add(current.id);
    current = nodes.get(current.childIds[current.childIds.length - 1]);
  }
  return current?.id ?? null;
};
const normalizeMessagesToTree = (
  messages: ChatMessage[],
  createdAt: string
): { messages: ChatMessage[]; currentNodeId: string | null } => {
  if (messages.some(isRootMessage)) {
    const normalized = messages.map((message) => ({
      ...message,
      type: message.type ?? 'text',
      parentId: message.parentId ?? null,
      childIds: message.childIds ?? []
    }));
    const root = findRootMessage(normalized);
    return {
      messages: normalized,
      currentNodeId:
        findLeafNodeId(normalized, normalized.at(-1)?.id) ?? root?.id ?? null
    };
  }

  const root: ChatMessage = {
    id: createMessageId('root'),
    role: 'system',
    type: 'root',
    content: '',
    createdAt,
    parentId: null,
    childIds: []
  };
  const normalized: ChatMessage[] = [root];
  let parentId = root.id;
  for (const message of messages) {
    const node: ChatMessage = {
      ...message,
      role: message.role === 'system' ? 'assistant' : message.role,
      type: 'text',
      parentId,
      childIds: []
    };
    const parent = normalized.find((item) => item.id === parentId);
    parent?.childIds?.push(node.id);
    normalized.push(node);
    parentId = node.id;
  }
  return { messages: normalized, currentNodeId: parentId };
};
const getPathToNode = (
  messages: ChatMessage[],
  nodeId: string | null | undefined
): ChatMessage[] => {
  if (!nodeId) return [];
  const nodes = messageNodeMap(messages);
  const path: ChatMessage[] = [];
  const visited = new Set<string>();
  let current = nodes.get(nodeId);
  while (current && !visited.has(current.id)) {
    visited.add(current.id);
    path.unshift(current);
    current = current.parentId ? nodes.get(current.parentId) : undefined;
  }
  return path;
};
const getVisibleMessages = (history: ChatHistoryView | null): ChatMessage[] => {
  if (!history) return [];
  const leafId =
    history.currentNodeId ??
    findLeafNodeId(history.messages, findRootMessage(history.messages)?.id);
  return getPathToNode(history.messages, leafId).filter(
    (message) => !isRootMessage(message)
  );
};
const getDisplayMessages = (
  history: ChatHistoryView | null
): ChatDisplayMessage[] => {
  if (!history) return [];
  const nodes = messageNodeMap(history.messages);
  const findLeaf = (nodeId: string): string =>
    findLeafNodeId(history.messages, nodeId) ?? nodeId;
  return getVisibleMessages(history).map((message) => {
    const parent = message.parentId ? nodes.get(message.parentId) : undefined;
    const siblingIds = parent?.childIds ?? [message.id];
    return {
      message,
      siblingLeafNodeIds: siblingIds.map(findLeaf),
      siblingCurrentIndex: Math.max(0, siblingIds.indexOf(message.id))
    };
  });
};
const appendMessageNode = (
  history: ChatHistoryView,
  message: Omit<ChatMessage, 'type' | 'parentId' | 'childIds'> & {
    parentId?: string | null;
  }
): ChatMessage => {
  const root = findRootMessage(history.messages);
  const parentId =
    message.parentId ?? history.currentNodeId ?? root?.id ?? null;
  const node: ChatMessage = {
    ...message,
    type: 'text',
    parentId,
    childIds: []
  };
  history.messages.push(node);
  if (parentId) {
    const parent = history.messages.find((item) => item.id === parentId);
    if (parent) parent.childIds = [...(parent.childIds ?? []), node.id];
  }
  history.currentNodeId = node.id;
  return node;
};

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
const syncMessageScrollState = () => {
  const nearBottom = isMessageListNearBottom();
  autoFollowMessages.value = nearBottom;
  showJumpToBottom.value = !nearBottom;
};
const handleMessageScroll = () => {
  syncMessageScrollState();
};
const scrollToBottom = async (options: { force?: boolean } = {}) => {
  await nextTick();
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
  await Promise.all([refreshConfig(), refreshStatus(), refreshHistories()]);
};
const persistActiveHistory = async () => {
  const current = activeHistory.value;
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
  histories.value = histories.value.filter((item) => item.id !== id);
  await deleteLocalAiChatHistory(id);
  if (activeHistoryId.value === id) {
    activeHistoryId.value = histories.value[0]?.id ?? '';
  }
};
const openAttachmentPicker = () => {
  fileInputRef.value?.click();
};
const createAttachmentShell = (
  file: File,
  type: LocalAiAttachment['type']
): LocalAiAttachment => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: file.name,
  type,
  mime: file.type || 'application/octet-stream',
  size: file.size,
  status: 'pending'
});
const parseAttachmentFile = async (file: File): Promise<LocalAiAttachment> => {
  if (isImageFile(file)) {
    const attachment = createAttachmentShell(file, 'image');
    if (file.size > LOCAL_AI_MAX_IMAGE_BYTES) {
      return {
        ...attachment,
        status: 'error',
        error: t('localAi.imageTooLarge')
      };
    }
    try {
      return {
        ...attachment,
        status: 'parsed',
        dataUrl: await fileToDataUrl(file)
      };
    } catch (error) {
      return { ...attachment, status: 'error', error: String(error) };
    }
  }

  if (isTextFile(file)) {
    const attachment = createAttachmentShell(file, 'text');
    if (file.size > LOCAL_AI_MAX_TEXT_BYTES) {
      return {
        ...attachment,
        status: 'error',
        error: t('localAi.textFileTooLarge')
      };
    }
    try {
      const parsed = await fileToText(file);
      return {
        ...attachment,
        status: 'parsed',
        text: parsed.text,
        error: parsed.truncated ? 'truncated' : undefined
      };
    } catch (error) {
      return { ...attachment, status: 'error', error: String(error) };
    }
  }

  const unsupported = createAttachmentShell(file, 'unsupported');
  return {
    ...unsupported,
    status: 'error',
    error: isUnsupportedKnownFile(file)
      ? t('localAi.unsupportedDocument')
      : t('localAi.unsupportedAttachment')
  };
};
const addAttachmentFiles = async (files: FileList | File[]) => {
  const incoming = Array.from(files);
  const room = LOCAL_AI_MAX_ATTACHMENTS - attachments.value.length;
  if (room <= 0) {
    modal.msg(t('localAi.attachmentLimit'), 'warning');
    return;
  }
  if (incoming.length > room) {
    modal.msg(t('localAi.attachmentLimit'), 'warning');
  }
  const selected = incoming.slice(0, room);
  const pending = selected.map((file) =>
    createAttachmentShell(
      file,
      isImageFile(file) ? 'image' : isTextFile(file) ? 'text' : 'unsupported'
    )
  );
  attachments.value.push(...pending);

  await Promise.all(
    selected.map(async (file, index) => {
      const parsed = await parseAttachmentFile(file);
      const targetIndex = attachments.value.findIndex(
        (attachment) => attachment.id === pending[index].id
      );
      if (targetIndex >= 0) attachments.value[targetIndex] = parsed;
    })
  );
};
const handleAttachmentInput = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files?.length) await addAttachmentFiles(input.files);
  input.value = '';
};
const handleAttachmentDrop = async (event: DragEvent) => {
  if (event.dataTransfer?.files.length) {
    await addAttachmentFiles(event.dataTransfer.files);
  }
};
const handleComposerPaste = async (event: ClipboardEvent) => {
  const files = Array.from(event.clipboardData?.files ?? []);
  if (!files.length) return;
  const imageFiles = files.filter(isImageFile);
  if (!imageFiles.length) return;
  event.preventDefault();
  await addAttachmentFiles(imageFiles);
};
const removeAttachment = (id: string) => {
  attachments.value = attachments.value.filter(
    (attachment) => attachment.id !== id
  );
};
const attachmentStatusText = (attachment: LocalAiAttachment): string => {
  if (attachment.status === 'pending') return t('localAi.attachmentPending');
  if (attachment.status === 'error') return attachment.error ?? '';
  if (attachment.error === 'truncated') return t('localAi.attachmentTruncated');
  return t('localAi.attachmentParsed');
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
const codeBlockId = (code: string): string => {
  let hash = 0;
  for (let index = 0; index < code.length; index += 1) {
    hash = (hash * 31 + code.charCodeAt(index)) >>> 0;
  }
  return `code-${code.length}-${hash.toString(16)}`;
};
const enhanceCodeBlocks = (html: string): string => {
  if (!html.includes('<pre>')) return html;
  return html.replace(
    /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
    (_match, className: string | undefined, codeHtml: string) => {
      const template = document.createElement('textarea');
      template.innerHTML = codeHtml;
      const code = template.value;
      const id = codeBlockId(code);
      markdownCodeCache.set(id, code);
      const codeClass = className ? ` class="${className}"` : '';
      return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${id}" title="${t('common.copy')}">${t('common.copy')}</button><pre><code${codeClass}>${codeHtml}</code></pre></div>`;
    }
  );
};
const renderMarkdown = (value: string): string => {
  const cached = markdownCache.get(value);
  if (cached) return cached;
  const html = enhanceCodeBlocks(
    sanitizeHtml(marked.parse(value, { async: false }) as string)
  );
  markdownCache.set(value, html);
  if (markdownCache.size > 80) {
    const firstKey = markdownCache.keys().next().value;
    if (typeof firstKey === 'string') markdownCache.delete(firstKey);
  }
  return html;
};
const handleMarkdownClick = async (event: MouseEvent) => {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>('.code-copy-btn');
  const id = button?.dataset.codeId;
  if (!id) return;
  const code = markdownCodeCache.get(id);
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code);
    modal.msg(t('localAi.codeCopied'));
  } catch (error) {
    modal.msg(`${t('common.copy')}: ${error}`, 'error');
  }
};
const splitReasoning = (
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
const messageReasoning = (value: string): string =>
  splitReasoning(value).reasoning;
const messageAnswer = (value: string): string => splitReasoning(value).answer;
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
  if (message.allowThinking && !message.reasoningEndedAt)
    return t('localAi.thinking');
  return t('localAi.generating');
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
const estimateTokens = (value: string): number => {
  const text = value.trim();
  if (!text) return 0;
  const cjkCount = (text.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const rest = text.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, ' ');
  const pieces = rest.match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? [];
  const latinTokens = pieces.reduce((total, piece) => {
    if (/^[A-Za-z0-9_]+$/.test(piece)) {
      return total + Math.max(1, Math.ceil(piece.length / 4));
    }
    return total + 1;
  }, 0);
  return Math.max(1, Math.ceil(cjkCount + latinTokens));
};
const contentText = (content: LocalAiMessage['content']): string =>
  Array.isArray(content)
    ? content
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('\n')
    : content;
const apiUserMessageContent = (
  message: ChatMessage
): LocalAiMessage['content'] => {
  const parsedAttachments =
    message.attachments?.filter(
      (attachment) => attachment.status === 'parsed'
    ) ?? [];
  const text = buildPromptWithFileAttachments(
    message.content,
    parsedAttachments
  );
  const imageAttachments = parsedAttachments.filter(
    (attachment) => attachment.type === 'image' && attachment.dataUrl
  );
  if (!imageAttachments.length) return text;

  const parts: LocalAiContentPart[] = [{ type: 'text', text }];
  for (const attachment of imageAttachments) {
    parts.push({
      type: 'image_url',
      image_url: {
        url: attachment.dataUrl ?? ''
      }
    });
  }
  return parts;
};
const estimateChatTokens = (messages: LocalAiMessage[]): number =>
  estimateTokens(
    messages
      .map((message) => {
        const content = contentText(message.content);
        return `${message.role}: ${content}`;
      })
      .join('\n')
  );
const truncateContentForBudget = (content: string, budgetTokens: number) => {
  const maxChars = Math.max(240, budgetTokens * 4);
  if (content.length <= maxChars) return content;
  return `${t('localAi.previousAnswerTail')}\n\n${content.slice(-maxChars)}`;
};
const compactMessagesForBudget = (
  messages: LocalAiMessage[],
  tokenBudget: number
): LocalAiMessage[] => {
  const compacted: LocalAiMessage[] = [];
  let usedTokens = 0;

  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    const messageTokens = estimateChatTokens([message]);

    if (usedTokens + messageTokens <= tokenBudget || compacted.length === 0) {
      compacted.unshift(message);
      usedTokens += messageTokens;
      continue;
    }

    const remainingTokens = tokenBudget - usedTokens;
    if (
      message.role !== 'assistant' ||
      typeof message.content !== 'string' ||
      remainingTokens < MIN_ASSISTANT_TAIL_TOKENS
    ) {
      continue;
    }

    let tailBudget = remainingTokens;
    let truncatedMessage = {
      ...message,
      content: truncateContentForBudget(message.content, tailBudget)
    };
    let truncatedTokens = estimateChatTokens([truncatedMessage]);
    while (
      truncatedTokens > remainingTokens &&
      tailBudget > MIN_ASSISTANT_TAIL_TOKENS
    ) {
      tailBudget = Math.max(
        MIN_ASSISTANT_TAIL_TOKENS,
        Math.floor(tailBudget * 0.7)
      );
      truncatedMessage = {
        ...message,
        content: truncateContentForBudget(message.content, tailBudget)
      };
      truncatedTokens = estimateChatTokens([truncatedMessage]);
    }
    if (usedTokens + truncatedTokens <= tokenBudget) {
      compacted.unshift(truncatedMessage);
      usedTokens += truncatedTokens;
    }
  }

  return compacted;
};
const toApiMessages = (): LocalAiMessage[] =>
  compactMessagesForBudget(
    activeMessages.value
      .filter((message) => !message.streaming && message.role !== 'system')
      .map((message) => ({
        role: message.role as 'user' | 'assistant',
        content:
          message.role === 'user'
            ? apiUserMessageContent(message)
            : message.content
      })),
    requestContextBudget.value
  );
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
const messageStats = (message: ChatMessage) => {
  const now = statsTick.value;
  const promptTokens = message.stats?.promptTokens ?? message.promptTokens ?? 0;
  const output =
    message.stats?.completionTokens ?? estimateTokens(message.content);
  const contextMax = messageContextLimit(message);
  const context = Math.min(promptTokens, contextMax);
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
const messageWarningText = (message: ChatMessage): string => {
  if (message.repetitionStopped) return t('localAi.repetitionStopped');
  if (message.interrupted) return t('localAi.streamInterrupted');
  if (message.stopped) return t('localAi.generationStopped');
  const estimatedContext =
    message.stats?.totalTokens ??
    (message.promptTokens ?? 0) +
      (message.stats?.completionTokens ?? estimateTokens(message.content));
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
const streamAssistantMessage = async (assistantMessage: ChatMessage) => {
  const startedAt = performance.now();
  const requestId = createLocalAiStreamRequestId();
  const messages = toApiMessages();
  let queuedContent = '';
  let pumpTimer: number | null = null;
  let drainResolver: (() => void) | null = null;
  let receivedDelta = false;
  let repetitionStopRequested = false;
  currentStreamRequestId.value = requestId;
  stopRequested.value = false;
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
      ? 480
      : queuedContent.length > 900
        ? 180
        : queuedContent.length > 240
          ? 96
          : 32;
    assistantMessage.content += queuedContent.slice(0, take);
    queuedContent = queuedContent.slice(take);
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
  assistantMessage.streaming = false;
  assistantMessage.elapsedMs = performance.now() - startedAt;
  assistantMessage.stopped = stopRequested.value;
  assistantMessage.interrupted = false;
  assistantMessage.error = '';
  statsTick.value = Date.now();
  currentStreamRequestId.value = null;
};
const stopGeneration = async () => {
  const requestId = currentStreamRequestId.value;
  if (!sending.value || !requestId || stopRequested.value) return;
  stopRequested.value = true;
  try {
    await cancelLocalAiChatStream(requestId);
  } catch (error) {
    logger.warn('[LocalAI] cancel stream failed', error);
  }
};
const handleComposerKeydown = (event: KeyboardEvent) => {
  if (event.isComposing || event.keyCode === 229) return;
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    void sendMessage();
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
    contextSize: effectiveContextLimit.value,
    promptTokens: estimateChatTokens(toApiMessages())
  });
  draft.value = '';
  attachments.value = [];
  sending.value = true;
  startStatsTicker();
  await scrollToBottom({ force: true });
  const startedAt = performance.now();

  try {
    await streamAssistantMessage(assistantMessage);
    if (activeHistory.value) {
      activeHistory.value.title =
        activeHistory.value.title === t('localAi.newChatTitle')
          ? titleSource.slice(0, 28)
          : activeHistory.value.title;
      activeHistory.value.updatedAt = new Date().toISOString();
      activeHistory.value.updatedAtLabel = new Date(
        activeHistory.value.updatedAt
      ).toLocaleString();
      await persistActiveHistory();
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
      if (activeHistory.value) {
        activeHistory.value.title =
          activeHistory.value.title === t('localAi.newChatTitle')
            ? titleSource.slice(0, 28)
            : activeHistory.value.title;
        activeHistory.value.updatedAt = new Date().toISOString();
        activeHistory.value.updatedAtLabel = new Date(
          activeHistory.value.updatedAt
        ).toLocaleString();
        await persistActiveHistory();
      }
    }
    assistantMessage.streaming = false;
    assistantMessage.elapsedMs = performance.now() - startedAt;
  } finally {
    sending.value = false;
    currentStreamRequestId.value = null;
    stopStatsTicker();
    await scrollToBottom();
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
const collectDescendantIds = (
  messages: ChatMessage[],
  messageId: string
): Set<string> => {
  const nodes = messageNodeMap(messages);
  const ids = new Set<string>([messageId]);
  const visit = (id: string) => {
    const node = nodes.get(id);
    for (const childId of node?.childIds ?? []) {
      ids.add(childId);
      visit(childId);
    }
  };
  visit(messageId);
  return ids;
};
const deleteMessage = async (messageId: string) => {
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
  await persistActiveHistory();
};
const editMessage = (message: ChatMessage) => {
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
  await persistActiveHistory();
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
    promptTokens: estimateChatTokens(toApiMessages())
  });
  sending.value = true;
  startStatsTicker();
  await scrollToBottom({ force: true });
  const startedAt = performance.now();
  try {
    await streamAssistantMessage(assistantMessage);
    current.updatedAt = new Date().toISOString();
    current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
    await persistActiveHistory();
  } catch (error) {
    if (!stopRequested.value) {
      const chatError = formatChatError(error);
      modal.msg(`${t('localAi.chatFailed')}: ${chatError}`, 'error');
      assistantMessage.error = chatError;
      assistantMessage.interrupted = Boolean(assistantMessage.content.trim());
      if (!assistantMessage.interrupted) assistantMessage.content = chatError;
      current.updatedAt = new Date().toISOString();
      current.updatedAtLabel = new Date(current.updatedAt).toLocaleString();
      await persistActiveHistory();
    }
    assistantMessage.streaming = false;
    assistantMessage.elapsedMs = performance.now() - startedAt;
  } finally {
    sending.value = false;
    currentStreamRequestId.value = null;
    stopStatsTicker();
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
watch(modelSupportsThinking, (supported) => {
  if (!supported) thinkingEnabled.value = false;
});
onUnmounted(() => {
  if (statusTimer) clearInterval(statusTimer);
  if (scrollFrameId !== null) {
    window.cancelAnimationFrame(scrollFrameId);
    scrollFrameId = null;
  }
  if (currentStreamRequestId.value) {
    void cancelLocalAiChatStream(currentStreamRequestId.value);
  }
  stopStatsTicker();
});
</script>

<style scoped lang="scss">
.local-ai-chat-shell {
  --chat-bg: #f7f8fb;
  --chat-panel: #fff;
  --chat-surface: #f8fafb;
  --chat-border: #dfe5ee;
  --chat-primary: var(--categories-bg-active, #5f74f3);
  --chat-primary-hover: var(--el-color-primary-dark-2, #4d63dd);
  --chat-primary-soft: rgba(95, 116, 243, 0.12);
  --chat-muted: #707988;
  --chat-pill-bg: #f1f5fa;
  --chat-readable-width: 980px;
  --chat-sidebar-width: 260px;

  display: grid;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 4px;
  color: var(--categories-text-color, #111827);
  background: var(--chat-bg);
  grid-template-columns: var(--chat-sidebar-width, 260px) minmax(0, 1fr);
  gap: 6px;
  transition: grid-template-columns 0.18s ease;
}

.local-ai-chat-shell--sidebar-collapsed {
  grid-template-columns: minmax(0, 1fr);
}

.chat-sidebar,
.chat-panel {
  min-height: 0;
  background: var(--chat-panel);
  border: 0;
  border-radius: 8px;
  box-shadow: none;
}

.chat-sidebar {
  display: flex;
  width: var(--chat-sidebar-width, 260px);
  min-width: 0;
  max-width: var(--chat-sidebar-width, 260px);
  flex-direction: column;
  gap: 14px;
  padding: 8px;
  overflow: hidden;
  transition:
    width 0.18s ease,
    max-width 0.18s ease,
    padding 0.18s ease;
}

.chat-sidebar--collapsed {
  display: none;
}

.sidebar-header,
.input-toolbar,
.sidebar-actions,
.input-toolbar-left,
.input-toolbar-right {
  display: flex;
  align-items: center;
}

.sidebar-header,
.input-toolbar {
  justify-content: space-between;
  gap: 12px;
}

.sidebar-title-block h2,
.sidebar-nav-item {
  margin: 0;
  color: #111827;
  letter-spacing: 0;
}

.sidebar-title-block h2 {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
}

.sidebar-title-block p {
  margin: 4px 0 0;
  color: var(--chat-muted);
  font-size: 13px;
}

.sidebar-actions,
.sidebar-service-row {
  gap: 8px;
}

.icon-action-btn,
.composer-tool-btn,
.message-actions button,
.sidebar-settings-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  font-family: inherit;
  background: transparent;
  border: 1px solid transparent;
  transition:
    border-color 0.16s ease,
    color 0.16s ease,
    background-color 0.16s ease,
    transform 0.16s ease;
}

.icon-action-btn {
  width: 32px;
  height: 32px;
  border-radius: 9px;
}

.icon-action-btn:hover,
.composer-tool-btn:hover,
.message-actions button:hover,
.sidebar-settings-btn:hover {
  color: #111827;
  background: #eef0f2;
  border-color: #eef0f2;
}

.sidebar-nav {
  display: grid;
  gap: 6px;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  padding: 0 4px;
  width: 100%;
  min-height: 34px;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  line-height: 1;
  text-align: left;
  background: transparent;
  border: 0;
  border-radius: 9px;
  gap: 10px;
  cursor: pointer;
}

.sidebar-nav-item:hover,
.sidebar-nav-item:focus-within {
  background: #eef0f2;
}

.sidebar-nav-item--search input {
  min-width: 0;
  flex: 1;
  color: #111827;
  font: inherit;
  font-weight: inherit;
  background: transparent;
  border: 0;
  outline: none;
}

.sidebar-nav-item--search input::placeholder {
  color: #111827;
  opacity: 1;
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
  font-weight: 400;
}

.section-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.chat-list {
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  padding-right: 2px;
  overflow-y: auto;
  gap: 5px;
}

.chat-list-item {
  position: relative;
  display: flex;
  min-height: 34px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 9px;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  transition:
    background-color 0.16s ease,
    color 0.16s ease,
    border-color 0.16s ease;
  gap: 8px;
  padding: 0 12px;
  cursor: pointer;
}

.chat-list-item:hover {
  background: #f0f1f2;
}

.chat-list-item.active {
  background: #eef0f2;
  border-color: transparent;
}

.chat-item-title {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chat-item-time {
  display: block;
}

.chat-item-delete {
  display: none;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.chat-list-item:hover .chat-item-delete {
  display: block;
}

.chat-list-item:hover .chat-item-time {
  display: none;
}

.sidebar-empty {
  padding: 22px 10px;
  color: var(--chat-muted);
  font-size: 13px;
  text-align: center;
  background: #f4f5f6;
  border: 0;
  border-radius: 10px;
}

.sidebar-service,
.sidebar-service-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-settings-btn {
  height: 32px;
  justify-content: flex-start;
  padding: 0 10px;
  border-radius: 9px;
  font-size: 13px;
  gap: 8px;
}

.chat-panel {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0 24px 16px;
  overflow: hidden;
}

.panel-sidebar-toggle {
  display: inline-flex;
  position: absolute;
  z-index: 8;
  top: 18px;
  left: 14px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  color: #111827;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #e5e7eb;
  border-radius: 9px;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    transform 0.16s ease;
}

.panel-sidebar-toggle:hover {
  background: #eef0f2;
  border-color: #eef0f2;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 9px;
  color: #7f1d1d;
  font-size: 12px;
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
  min-width: 0;
  overflow: hidden;
  color: #66758d;
  font-size: 12px;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-list {
  min-height: 0;
  flex: 1;
  padding: 14px 0 18px;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
}

.date-divider {
  display: flex;
  width: min(100%, var(--chat-readable-width));
  align-items: center;
  margin: 2px auto 22px;
  color: #94a3b8;
  font-size: 12px;
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
  width: min(420px, 92%);
  min-height: 150px;
  margin: 10vh auto 0;
  flex-direction: column;
  align-items: center;
  padding: 22px 20px;
  color: var(--chat-muted);
  text-align: center;
  background: var(--chat-surface);
  border: 1px dashed var(--chat-border);
  border-radius: 18px;
  gap: 7px;
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
  width: min(100%, var(--chat-readable-width));
  align-items: flex-start;
  margin: 0 auto 22px;
  gap: 0;
}

.message-row--user {
  flex-direction: row-reverse;
}

.message-avatar {
  display: none;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #536175;
  font-size: 12px;
  font-weight: 700;
  background: #f0f6ff;
  border: 1px solid var(--chat-border);
  border-radius: 50%;
}

.message-row--user .message-avatar {
  color: #fff;
  background: var(--chat-primary);
  border-color: transparent;
  box-shadow: none;
}

.message-body {
  min-width: 0;
  max-width: 100%;
}

.message-row--user .message-body {
  display: flex;
  max-width: min(58%, 620px);
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
}

.user-bubble {
  padding: 10px 12px;
  color: #1f2937;
  font-size: 14px;
  line-height: 1.6;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
}

.user-message-text {
  white-space: pre-wrap;
  word-break: break-word;
}

.message-attachment-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 8px;
}

.message-attachment-chip {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  padding: 4px 7px;
  overflow: hidden;
  color: #475569;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid #dce5f2;
  border-radius: 10px;
  gap: 7px;
}

.message-attachment-chip--image {
  display: inline-flex;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
}

.message-attachment-chip figure {
  width: 100%;
  height: 100%;
  margin: 0;
}

.message-attachment-chip img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #eef2f7;
}

.message-attachment-chip span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.attachment-file-icon {
  display: inline-flex;
  width: 34px;
  height: 26px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #5f74f3;
  font-size: 10px;
  font-weight: 700;
  background: rgba(95, 116, 243, 0.12);
  border: 1px solid rgba(95, 116, 243, 0.24);
  border-radius: 6px;
}

.assistant-head {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #64748b;
  font-size: 12px;
  gap: 8px;
}

.assistant-head small {
  color: #8a96a8;
  font-size: 12px;
}

.assistant-card {
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  padding: 14px;
  color: #172033;
  font-size: 14px;
  line-height: 1.68;
  background: var(--chat-surface);
  border: 1px solid var(--chat-border);
  border-radius: 18px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.05);
}

.assistant-card--streaming {
  border-color: rgba(95, 116, 243, 0.34);
}

.message-content {
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.streaming-text {
  margin: 0;
  color: inherit;
  font: inherit;
  line-height: inherit;
  white-space: pre-wrap;
}

.assistant-content-stack {
  display: grid;
  gap: 10px;
}

.reasoning-panel {
  overflow: hidden;
  color: #475569;
  background: #fff;
  border: 1px solid #dfe7f1;
  border-radius: 14px;
}

.reasoning-panel summary {
  display: flex;
  min-height: 34px;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
  cursor: pointer;
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid transparent;
}

.reasoning-summary-title {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 6px;
}

.reasoning-panel[open] summary {
  color: #334155;
  background: #f1f5f9;
  border-bottom-color: #dfe7f1;
}

.reasoning-panel .message-content {
  padding: 10px 12px;
  color: #5b6677;
  font-size: 12px;
  line-height: 1.65;
}

.markdown-body {
  max-width: 100%;
  color: inherit;
  overflow-wrap: anywhere;
}

.markdown-body :deep(p) {
  margin: 0 0 10px;
  overflow-wrap: anywhere;
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

.markdown-body :deep(li) {
  overflow-wrap: anywhere;
}

.markdown-body :deep(code) {
  padding: 2px 5px;
  color: #334155;
  font-size: 12px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
}

.markdown-body :deep(pre) {
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  background: transparent;
  border: 0;
}

.markdown-body :deep(.code-block-shell) {
  position: relative;
  margin: 12px 0;
  padding: 12px;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: #f6f8fa;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.markdown-body :deep(.code-copy-btn) {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  display: inline-flex;
  height: 24px;
  align-items: center;
  padding: 0 8px;
  color: #536174;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #d7e1ee;
  border-radius: 6px;
}

.markdown-body :deep(.code-copy-btn:hover) {
  color: var(--chat-primary);
  border-color: rgba(95, 116, 243, 0.38);
}

.markdown-body :deep(pre code) {
  display: block;
  width: max-content;
  min-width: 100%;
  padding: 24px 0 0;
  color: #1f2937;
  font-size: 12px;
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
  max-width: 100%;
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
  align-items: center;
  margin-top: 8px;
  gap: 5px;
}

.message-version-switcher {
  display: inline-flex;
  height: 26px;
  align-items: center;
  padding: 0 3px;
  color: #64748b;
  font-size: 12px;
  background: #f8fafc;
  border: 1px solid var(--chat-border);
  border-radius: 8px;
  gap: 4px;
}

.message-version-switcher button {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 6px;
  background: transparent;
}

.message-version-switcher button:disabled {
  cursor: not-allowed;
  color: #cbd5e1;
}

.message-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 18px;
  margin-top: 8px;
  color: #7c8799;
  font-size: 12px;
  line-height: 18px;
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
  gap: 14px;
}

.message-stats span {
  flex: 0 0 auto;
  white-space: nowrap;
}

.message-stats__context {
  min-width: 156px;
}

.message-stats__output {
  min-width: 86px;
}

.message-stats__elapsed {
  min-width: 48px;
  text-align: right;
}

.message-stats__speed {
  min-width: 58px;
  text-align: right;
}

.message-stats-time {
  margin-left: auto;
  text-align: right;
}

.message-warning {
  display: inline-flex;
  margin-top: 7px;
  padding: 5px 8px;
  color: #9a5b00;
  font-size: 12px;
  background: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 7px;
}

.message-actions button {
  width: 28px;
  height: 28px;
  border-radius: 9px;
}

.loading-text {
  display: inline-flex;
  align-items: center;
  color: var(--chat-muted);
  gap: 8px;
}

.loading-text::before {
  width: 7px;
  height: 7px;
  background: var(--chat-primary);
  border-radius: 999px;
  animation: local-ai-pulse 1.2s ease-in-out infinite;
  content: '';
}

.scroll-bottom-btn {
  position: absolute;
  right: max(28px, calc((100% - var(--chat-readable-width)) / 2 + 28px));
  bottom: 128px;
  z-index: 3;
  display: inline-flex;
  height: 30px;
  align-items: center;
  padding: 0 10px;
  color: #42526b;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid var(--chat-border);
  border-radius: 999px;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.1);
  gap: 6px;
  transition:
    border-color 0.16s ease,
    color 0.16s ease,
    transform 0.16s ease;
}

.scroll-bottom-btn:hover {
  color: var(--chat-primary);
  border-color: rgba(95, 116, 243, 0.34);
  transform: translateY(-1px);
}

.chat-input-card {
  width: min(100%, var(--chat-readable-width));
  flex: 0 0 auto;
  margin: 0 auto;
  padding: 10px 14px 10px;
  background: #fff;
  border: 1px solid #dfe5ee;
  border-radius: 20px;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
}

.chat-input-card:focus-within,
.chat-input-card--focused {
  border-color: rgba(95, 116, 243, 0.56);
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.1);
}

.attachment-input {
  display: none;
}

.attachment-preview-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  gap: 8px;
}

.attachment-preview-item {
  display: inline-flex;
  max-width: min(260px, 100%);
  align-items: center;
  padding: 4px 6px 4px 4px;
  color: #334155;
  background: #f8fbff;
  border: 1px solid #dbe5f2;
  border-radius: 10px;
  gap: 7px;
}

.attachment-preview-item--error {
  background: #fff7ed;
  border-color: #fed7aa;
}

.attachment-preview-item img {
  width: 56px;
  height: 56px;
  flex: 0 0 auto;
  object-fit: cover;
  border-radius: 8px;
}

.attachment-meta {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.attachment-meta strong,
.attachment-meta small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.attachment-meta strong {
  color: #263244;
  font-size: 12px;
  font-weight: 600;
}

.attachment-meta small {
  color: #7a879a;
  font-size: 11px;
}

.attachment-preview-item button {
  display: inline-flex;
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #64748b;
  background: #fff;
  border: 1px solid #dbe5f2;
  border-radius: 6px;
}

.attachment-preview-item button:hover {
  color: #ef4444;
  border-color: #fecaca;
}

.chat-input {
  display: block;
  width: 100%;
  min-height: 30px;
  max-height: 88px;
  resize: none;
  color: #1f2937;
  font-size: 16px;
  line-height: 1.45;
  background: transparent;
  border: 0;
  outline: none;
}

.chat-input-card--focused .chat-input {
  max-height: 132px;
}

.input-toolbar {
  margin-top: 2px;
}

.input-toolbar-left,
.input-toolbar-right {
  gap: 8px;
}

.composer-tool-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
}

.composer-tool-btn--wide {
  width: auto;
  padding: 0 9px;
  color: #526071;
  font-size: 12px;
  gap: 6px;
}

.composer-tool-btn--active {
  color: var(--chat-primary);
  background: var(--chat-primary-soft);
  border-color: rgba(95, 116, 243, 0.34);
}

.model-select-shell {
  display: inline-flex;
  height: 28px;
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
  font-size: 12px;
  background: transparent;
  border: 0;
  outline: 0;
  appearance: none;
}

.input-hint {
  color: #7c8799;
  font-size: 12px;
}

.send-btn {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #fff;
  background: #111827;
  border: 0;
  border-radius: 999px;
  box-shadow: none;
  transition:
    background-color 0.16s ease,
    opacity 0.16s ease,
    transform 0.16s ease;
}

.send-btn:not(:disabled):active {
  transform: scale(0.96);
}

.send-btn:not(:disabled):hover {
  background: #020617;
}

.send-btn:disabled {
  cursor: not-allowed;
  color: #7c8799;
  background: #eef2f7;
  box-shadow: none;
}

.send-btn--stop {
  color: #fff;
  background: #111827;
}

.send-btn--stop:hover {
  background: #020617;
}

@keyframes local-ai-pulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(0.82);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 1280px) {
  .local-ai-chat-shell {
    --chat-sidebar-width: 244px;
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
