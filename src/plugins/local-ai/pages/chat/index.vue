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
        <div class="sidebar-brand">
          <div class="sidebar-title-block">
            <h2>{{ t('localAi.chatTitle') }}</h2>
            <p>{{ t('localAi.chatPrivacySubtitle') }}</p>
          </div>
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
          class="sidebar-new-chat-btn"
          type="button"
          :disabled="navigationLocked"
          @click="createNewChat"
        >
          <Edit theme="outline" size="18" />
          <span>{{ t('localAi.newChat') }}</span>
          <span class="sidebar-new-chat-shortcut">Ctrl N</span>
        </button>
        <label class="sidebar-search">
          <Search theme="outline" size="16" />
          <input
            v-model="searchQuery"
            :placeholder="t('localAi.searchHistory')"
          />
          <span v-if="searchQuery" class="sidebar-search-count">
            {{ filteredHistories.length }}
          </span>
        </label>
      </div>

      <section class="sidebar-section recent-section">
        <div class="section-title-row">
          <div class="section-title">{{ t('localAi.recent') }}</div>
          <button
            class="icon-action-btn"
            type="button"
            :title="t('plugins.refresh')"
            :disabled="navigationLocked || refreshing"
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
              navigationLocked ? 'disabled' : ''
            ]"
            role="button"
            :tabindex="navigationLocked ? -1 : 0"
            :aria-disabled="navigationLocked"
            @click="openHistory(history.id)"
            @keydown.enter.prevent="openHistory(history.id)"
          >
            <span class="chat-item-copy">
              <span class="chat-item-title">{{ history.title }}</span>
              <span class="chat-item-time">
                {{ formatHistoryTime(history.updatedAt) }}
              </span>
            </span>
            <button
              class="chat-item-delete"
              type="button"
              :title="t('common.delete')"
              :disabled="navigationLocked"
              @click.stop="deleteHistoryItem(history.id)"
            >
              <Delete theme="outline" size="13" />
            </button>
          </div>
        </div>
        <div v-else class="sidebar-empty">{{ t('common.empty') }}</div>
      </section>

      <footer class="sidebar-service">
        <div class="sidebar-service-card">
          <span class="sidebar-service-icon">
            <Robot theme="outline" size="15" />
          </span>
          <span class="sidebar-service-copy">
            <strong>{{ serviceStatusText }}</strong>
            <small>
              {{
                serviceStatus?.healthy
                  ? currentModelDisplay
                  : t('localAi.onDemandHint')
              }}
            </small>
          </span>
          <span
            :class="[
              'service-status-dot',
              serviceStatus?.healthy ? 'ready' : 'stopped'
            ]"
          ></span>
        </div>
        <button class="sidebar-settings-btn" type="button" @click="goSettings">
          <SettingTwo theme="outline" size="16" />
          <span>{{ t('localAi.settings') }}</span>
          <Right theme="outline" size="14" />
        </button>
      </footer>
    </aside>

    <section class="chat-panel">
      <header class="chat-panel-header">
        <div class="chat-panel-heading">
          <button
            v-if="sidebarCollapsed"
            class="panel-sidebar-toggle"
            type="button"
            :title="t('localAi.expandSidebar')"
            @click="sidebarCollapsed = false"
          >
            <LeftBar theme="outline" size="17" />
          </button>
          <div class="chat-context-mark">
            <Robot theme="outline" size="18" />
          </div>
          <div class="chat-context-copy">
            <span>{{ t('localAi.chatSubtitle') }}</span>
            <h1>{{ activeHistoryTitle }}</h1>
          </div>
        </div>
      </header>

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
        <section v-if="!activeMessages.length" class="empty-state">
          <div class="empty-hero">
            <div class="empty-hero-mark">
              <RobotOne theme="outline" size="30" />
            </div>
            <span class="empty-eyebrow">
              <i></i>
              {{ t('localAi.privateWorkspace') }}
            </span>
            <h2>{{ t('localAi.chatWelcomeTitle') }}</h2>
            <p>{{ t('localAi.chatWelcomeDesc') }}</p>
          </div>
          <div class="quick-prompt-section">
            <div class="quick-prompt-heading">
              <span>{{ t('localAi.quickStart') }}</span>
              <small>{{ t('localAi.quickStartHint') }}</small>
            </div>
            <div class="quick-prompt-grid">
              <button
                v-for="item in quickPrompts"
                :key="item.title"
                class="quick-prompt-card"
                type="button"
                @click="applyQuickPrompt(item.title)"
              >
                <span class="quick-prompt-icon">
                  <component :is="item.icon" theme="outline" size="17" />
                </span>
                <span class="quick-prompt-copy">
                  <strong>{{ t(item.title) }}</strong>
                  <small>{{ t(item.description) }}</small>
                </span>
                <Right theme="outline" size="14" />
              </button>
            </div>
          </div>
        </section>

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

      <div class="composer-dock">
        <form
          :class="[
            'chat-input-card',
            composerFocused ? 'chat-input-card--focused' : '',
            promptEnhancing ? 'chat-input-card--enhancing' : ''
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
            ref="composerInputRef"
            v-model="draft"
            class="chat-input"
            rows="1"
            :placeholder="t('localAi.chatPlaceholder')"
            :readonly="promptEnhancing"
            :aria-busy="promptEnhancing"
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
              <button
                :class="[
                  'composer-tool-btn',
                  'composer-tool-btn--wide',
                  'composer-tool-btn--enhance',
                  promptEnhancing ? 'composer-tool-btn--active' : ''
                ]"
                type="button"
                :disabled="!canEnhancePrompt"
                :title="
                  draft.trim()
                    ? t('localAi.enhancePromptDesc')
                    : t('localAi.enhanceNeedsPrompt')
                "
                @click="enhancePrompt"
              >
                <Refresh
                  v-if="promptEnhancing"
                  class="animate-spin"
                  theme="outline"
                  size="14"
                />
                <MagicWand v-else theme="outline" size="15" />
                <span>{{ t('localAi.enhancePrompt') }}</span>
              </button>
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
              <label class="model-select-shell">
                <Cube theme="outline" size="14" />
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
                <Down theme="outline" size="13" />
              </label>
              <span class="input-hint">{{ t('localAi.inputHint') }}</span>
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
      </div>
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
  LeftBar,
  Right,
  Cube,
  RobotOne,
  MagicWand,
  FileText,
  Translate,
  Code
} from '@icon-park/vue-next';
import {
  cancelLocalAiChatStream,
  chatWithLocalAi,
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
  mergeChatStreamStats,
  resolveRequestMaxTokens,
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
import {
  countOrderedPromptItems,
  hasRequiredEnhancedPromptLanguage,
  normalizeEnhancedPrompt,
  requiresChineseEnhancedPrompt
} from './promptEnhancement';

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
const composerInputRef = ref<HTMLTextAreaElement | null>(null);
const promptEnhancing = ref(false);
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
const quickPrompts = [
  {
    title: 'localAi.quickPromptSummary',
    description: 'localAi.quickPromptSummaryDesc',
    icon: FileText
  },
  {
    title: 'localAi.quickPromptTranslate',
    description: 'localAi.quickPromptTranslateDesc',
    icon: Translate
  },
  {
    title: 'localAi.quickPromptCode',
    description: 'localAi.quickPromptCodeDesc',
    icon: Code
  },
  {
    title: 'localAi.quickPromptRegex',
    description: 'localAi.quickPromptRegexDesc',
    icon: MagicWand
  }
] as const;
const PROMPT_ENHANCEMENT_SYSTEM_PROMPT = `
You are a concise prompt editor. Refine the user's rough prompt for another AI
without expanding, explaining, or re-planning it.

Rules:
1. Preserve the user's intent, facts, constraints, tone, and original language.
2. Preserve the original top-level task structure and item boundaries exactly.
   When the source is numbered, return the same number of concise numbered items.
3. Keep each item short and directly actionable; do not merge items into prose.
4. Correct ambiguous, misspelled, or malformed technical terms inline.
5. Retain only requirements stated in the source. Do not add inferred requirements,
   rationale, acceptance criteria, risk notes, or implementation suggestions.
6. Do not answer the prompt. Return only the refined prompt as plain text.
7. Do not use headings, bold, tables, code fences, labels, prefaces, explanations,
   notes, or correction summaries. Ordered items such as "1、" are required when
   the source uses ordered items.
8. Never translate the prompt. Keep all natural-language text in the same language as
   the original prompt.
9. If the original prompt contains Chinese, all natural-language output must be in
   Simplified Chinese. English is allowed only for proper names, code, paths, or
   technical identifiers that should remain unchanged.
`.trim();

const CHINESE_PROMPT_ENHANCEMENT_SYSTEM_PROMPT = `
你是一名简洁的提示词编辑。请将用户的原始提示词整理为可直接交给另一个 AI 的版本，
不要扩写、解释或重新规划任务。

规则：
1. 保留用户的意图、事实、约束、语气和原始语言。
2. 完整保留原始顶层任务结构与条目边界。原文有编号时，必须返回相同数量的简洁编号条目。
3. 每条保持简短、可执行，不得合并为长段落。
4. 直接修正含糊、拼写错误或格式错误的技术术语。
5. 仅保留原文已提出的要求。不得新增推断出的要求、理由、验收标准、风险说明或实现建议。
6. 不要回答原始问题。只输出整理后的纯文本提示词。
7. 不要使用标题、粗体、表格、代码围栏、标签、前言、解释、备注或修正摘要；原文有编号时，
   必须使用“1、”等编号。
8. 不得翻译提示词；所有自然语言必须与原文保持相同语言。
9. 原始提示词包含中文时，所有自然语言输出必须为简体中文；专有名称、代码、路径和技术标识符除外。
`.trim();

const canSend = computed(
  () =>
    (Boolean(draft.value.trim()) || attachments.value.length > 0) &&
    !sending.value &&
    !promptEnhancing.value
);
const canEnhancePrompt = computed(
  () =>
    Boolean(draft.value.trim()) &&
    !sending.value &&
    !promptEnhancing.value &&
    !currentStreamRequestId.value
);
const navigationLocked = computed(() => sending.value || promptEnhancing.value);
const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});
const activeHistory = computed(
  () =>
    histories.value.find((item) => item.id === activeHistoryId.value) ?? null
);
const activeHistoryTitle = computed(
  () => activeHistory.value?.title || t('localAi.newChatTitle')
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

const resizeComposerInput = (): void => {
  const input = composerInputRef.value;
  if (!input) return;
  input.style.height = 'auto';
  const contentHeight = input.scrollHeight;
  const computedMaxHeight = Number.parseFloat(
    window.getComputedStyle(input).maxHeight
  );
  const maxHeight = Number.isFinite(computedMaxHeight)
    ? computedMaxHeight
    : contentHeight;
  input.style.height = `${Math.min(contentHeight, maxHeight)}px`;
  input.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
};
const focusComposer = async (): Promise<void> => {
  await nextTick();
  resizeComposerInput();
  composerInputRef.value?.focus();
};
watch(draft, resizeComposerInput, { flush: 'post' });
const applyQuickPrompt = (key: string): void => {
  draft.value = t(key);
  void focusComposer();
};
const requestEnhancedPrompt = async (
  source: string,
  retryForChinese: boolean
): Promise<string> => {
  const sourceIsChinese = requiresChineseEnhancedPrompt(source);
  const orderedItemCount = countOrderedPromptItems(source);
  const languageInstruction = sourceIsChinese
    ? retryForChinese
      ? '强制重试：上一次结果未满足语言要求。必须仅使用简体中文输出完整提示词；不得输出英文句子。'
      : '语言要求：原始提示词包含中文。必须仅使用简体中文输出；不得将中文句子翻译成英文。'
    : 'Keep the natural language of the original prompt unchanged.';
  const structureInstruction = orderedItemCount
    ? sourceIsChinese
      ? `结构要求：原始提示词共有 ${orderedItemCount} 条编号任务。输出必须恰好保留这 ${orderedItemCount} 条，按原顺序使用“1、”“2、”等编号；不得合并、拆分、新增或省略任务。每条只改写为一句简洁、可执行的要求。`
      : `Structure requirement: the source has ${orderedItemCount} numbered tasks. Return exactly ${orderedItemCount} concise numbered items in the same order. Do not merge, split, add, or omit tasks.`
    : sourceIsChinese
      ? '结构要求：保留原有条目边界。每条任务只改写为一句简洁、可执行的要求；不要扩写成长段，不要新增推断。'
      : 'Preserve the original task boundaries. Keep each task concise and actionable without adding inferences.';
  const originalPromptInstruction = sourceIsChinese
    ? `${structureInstruction}\n\n原始提示词如下。请仅使用简体中文重写：\n---\n${source}\n---`
    : `${structureInstruction}\n\nOriginal prompt:\n---\n${source}\n---`;
  const response = await chatWithLocalAi({
    messages: [
      {
        role: 'system',
        content: `${
          sourceIsChinese
            ? CHINESE_PROMPT_ENHANCEMENT_SYSTEM_PROMPT
            : PROMPT_ENHANCEMENT_SYSTEM_PROMPT
        }\n\n${languageInstruction}`
      },
      { role: 'user', content: originalPromptInstruction }
    ],
    temperature: retryForChinese ? 0.05 : 0.1,
    enableThinking: false,
    maxTokens: Math.min(
      1200,
      Math.max(384, Math.floor(effectiveContextLimit.value / 4))
    )
  });
  return normalizeEnhancedPrompt(response.content);
};
const enhancePrompt = async (): Promise<void> => {
  const source = draft.value.trim();
  if (!source || !canEnhancePrompt.value) return;
  promptEnhancing.value = true;
  try {
    let normalized = await requestEnhancedPrompt(source, false);
    if (!hasRequiredEnhancedPromptLanguage(source, normalized)) {
      normalized = await requestEnhancedPrompt(source, true);
    }
    if (!normalized) throw new Error(t('localAi.enhancePromptEmpty'));
    if (!hasRequiredEnhancedPromptLanguage(source, normalized)) {
      throw new Error(t('localAi.enhancePromptLanguageMismatch'));
    }
    draft.value = normalized;
    await focusComposer();
  } catch (error) {
    modal.msg(`${t('localAi.enhancePromptFailed')}: ${String(error)}`, 'error');
  } finally {
    promptEnhancing.value = false;
  }
};

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
  if (navigationLocked.value) return;
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
  if (navigationLocked.value) return;
  const next = createHistory();
  histories.value.unshift(next);
  activeHistoryId.value = next.id;
  draft.value = '';
  void focusComposer();
};
const ensureActiveHistory = () => {
  if (activeHistory.value) return;
  createNewChat();
};
const openHistory = (id: string) => {
  if (navigationLocked.value) return;
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
  if (navigationLocked.value) return;
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
const requestMaxTokens = (): number | undefined =>
  resolveRequestMaxTokens(config.value?.maxTokens ?? 0);
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
  if (message.stats?.finishReason === 'length') {
    const estimatedContext =
      message.stats?.totalTokens ?? messageStats(message).context;
    return estimatedContext >= messageContextLimit(message) - 8
      ? t('localAi.contextLimitReached')
      : t('localAi.outputLimitReached');
  }
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
const markMessageStopped = (message: ChatMessage, elapsedMs?: number): void => {
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
      maxTokens: requestMaxTokens(),
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
        const mergedStats = mergeChatStreamStats(assistantMessage.stats, stats);
        assistantMessage.stats = mergedStats;
        if (mergedStats.ctxSize) {
          assistantMessage.contextSize = mergedStats.ctxSize;
        }
        if (mergedStats.completionTokens !== undefined) {
          assistantMessage.estimatedCompletionTokens =
            mergedStats.completionTokens;
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
  if (navigationLocked.value || !validateBeforeSend()) return;
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
const handleGlobalKeydown = (event: KeyboardEvent): void => {
  if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === 'n' &&
    !event.shiftKey &&
    !event.altKey
  ) {
    event.preventDefault();
    createNewChat();
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
  void focusComposer();
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
  resizeComposerInput();
  if (typeof ResizeObserver !== 'undefined') {
    streamingResizeObserver = new ResizeObserver(() => {
      if (autoFollowMessages.value) void scrollToBottom();
    });
  }
  window.addEventListener('pointerup', finishMessagePointerScroll);
  window.addEventListener('pointercancel', finishMessagePointerScroll);
  window.addEventListener('keydown', handleGlobalKeydown);
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
  window.removeEventListener('keydown', handleGlobalKeydown);
  if (currentStreamRequestId.value) {
    void cancelLocalAiChatStream(currentStreamRequestId.value);
  }
  clearMarkdownState();
  stopStatsTicker();
});
</script>

<style scoped lang="scss" src="./chat.scss"></style>
