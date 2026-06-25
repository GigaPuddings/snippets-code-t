<template>
  <el-dialog
    :model-value="modelValue"
    top="0"
    width="auto"
    class="ai-assist-dialog"
    :close-on-click-modal="!isGenerating"
    :close-on-press-escape="!isGenerating"
    @update:model-value="handleDialogVisibility"
  >
    <template #header>
      <div class="dialog-title">
        <span class="dialog-title__mark">✦</span>
        <span>AI 辅助</span>
      </div>
    </template>

    <p class="dialog-description">使用本地 AI 处理当前{{ fragmentType === 'code' ? '代码片段' : '笔记' }}。结果生成后需由你确认才会写入。</p>

    <!-- 知识库问答输入区 -->
    <div v-if="activeAction === 'ask' || !activeAction" class="rag-input-area">
      <el-input
        v-model="ragQuestion"
        type="textarea"
        :rows="2"
        :autosize="{ minRows: 2, maxRows: 3 }"
        maxlength="280"
        show-word-limit
        resize="none"
        placeholder="输入问题，AI 将从你的知识库中检索相关片段并回答…"
        :disabled="isGenerating || isRagSearching"
        @keydown.shift.enter.prevent="handleSubmitAsk"
        @keydown.ctrl.enter.prevent="handleSubmitAsk"
      />
      <div v-if="ragSources.length > 0" class="rag-sources">
        <span class="rag-sources__label">引用来源：</span>
        <span
          v-for="(src, i) in ragSources"
          :key="i"
          class="rag-sources__tag"
        >{{ src.title }}</span>
      </div>
    </div>

    <div class="action-grid" role="group" aria-label="AI 辅助操作">
      <CustomButton
        v-for="action in actions"
        :key="action.id"
        class="action-card"
        :class="[
          { active: activeAction === action.id },
          `action-card--${action.id}`
        ]"
        :disabled="isGenerating"
        type="default"
        @click="runAction(action.id)"
      >
        <span class="action-card__icon">{{ action.icon }}</span>
        <span>
          <strong>{{ action.label }}</strong>
          <small>{{ action.description }}</small>
        </span>
      </CustomButton>
    </div>

    <section class="result-section" aria-live="polite">
      <div class="result-heading">
        <span>{{ activeActionLabel || '生成结果' }}</span>
        <span v-if="isGenerating" class="generating">正在生成…</span>
      </div>
      <div class="result-box" :class="{ empty: !result && !isGenerating }">
        <span v-if="!result && !isGenerating">{{ activeAction === 'ask' ? '输入问题后点击“知识库问答”开始。' : '选择一个操作开始。AI 只会读取当前内容。' }}</span>
        <div v-else class="markdown-body">
          <div
            v-for="block in stablePreviewBlocks"
            :key="block.id"
            class="markdown-body__stable"
            v-html="block.html"
          ></div>
          <div v-if="previewTailHtml" class="markdown-body__tail" v-html="previewTailHtml"></div>
        </div>
      </div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </section>

    <template #footer>
      <div class="dialog-footer">
        <CustomButton :disabled="isGenerating || !result.trim()" @click="copyResult">复制结果</CustomButton>
        <CustomButton v-if="canContinue" :disabled="isGenerating" @click="continueGeneration">继续生成</CustomButton>
        <CustomButton :disabled="!activeAction || isGenerating" @click="regenerate">重新回答</CustomButton>
        <CustomButton v-if="activeAction === 'ask'" :disabled="isGenerating || isRagSearching || !ragQuestion.trim()" type="primary" @click="runAction('ask')">
          {{ isRagSearching ? '检索中…' : '提问' }}
        </CustomButton>
        <CustomButton v-else :disabled="!canApply || isGenerating" type="primary" @click="applyResult">
          {{ applyLabel }}
        </CustomButton>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import modal from '@/utils/modal';
import { CustomButton } from '@/components/UI';
import { markdownToHtml, normalizeAiMarkdown, resolvePreviewImageUrls } from '@/components/TipTapEditor/utils/markdown';
import {
  createLocalAiStreamRequestId,
  cancelLocalAiChatStream,
  getLocalAiConfig,
  streamChatWithLocalAi,
  type LocalAiMessage
} from '@/api/localAi';
import { useFragmentRag } from '@/composables/useFragmentRag';

type AssistAction = 'summarize' | 'rewrite' | 'title' | 'tags' | 'explain-code' | 'search' | 'ask';

const props = withDefaults(defineProps<{
  modelValue: boolean;
  content: string;
  title: string;
  tags: string[];
  fragmentType: 'note' | 'code';
  workspaceRoot?: string;
  noteFilePath?: string;
  selectionMode?: boolean;
  autoRun?: boolean;
}>(), {
  tags: () => []
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'apply-content': [value: string];
  'apply-title': [value: string];
  'apply-tags': [value: string[]];
  'apply-selection': [value: string];
}>();

const activeAction = ref<AssistAction | null>(null);
const result = ref('');
const isGenerating = ref(false);
const errorMessage = ref('');
const finishReason = ref('');
const currentRequestId = ref<string | null>(null);
let generationEpoch = 0;
const stablePreviewBlocks = ref<Array<{ id: number; html: string }>>([]);
const previewTailHtml = ref('');
let stablePreviewEnd = 0;
let previewBlockId = 0;
let previewRenderTimer: ReturnType<typeof setTimeout> | null = null;
const STREAM_PREVIEW_INTERVAL_MS = 80;

// RAG 知识库问答
const ragQuestion = ref('');
const ragSources = ref<Array<{ title: string; category: string }>>([]);
const { retrieveContext, isSearching: isRagSearching } = useFragmentRag();

const actions = computed(() => {
  const shared = [
    { id: 'summarize' as const, icon: '≡', label: '总结内容', description: '提炼重点和结论' },
    { id: 'rewrite' as const, icon: '✎', label: '改写润色', description: '保留 Markdown 结构' },
    { id: 'title' as const, icon: 'T', label: '生成标题', description: '给出准确简洁的标题' },
    { id: 'tags' as const, icon: '#', label: '提取标签', description: '推荐便于检索的标签' },
    { id: 'search' as const, icon: '⌕', label: '搜索辅助', description: '生成可直接检索的关键词' },
    { id: 'ask' as const, icon: '✦', label: '知识库问答', description: '基于已有片段回答问题' }
  ];
  if (props.selectionMode) return [shared[1]];
  return props.fragmentType === 'code'
    ? [...shared.slice(0, 4), { id: 'explain-code' as const, icon: '</>', label: '解释代码', description: '说明逻辑、输入和风险' }, shared[4], shared[5]]
    : shared;
});

const activeActionLabel = computed(() =>
  actions.value.find((action) => action.id === activeAction.value)?.label ?? ''
);
const canApply = computed(() => Boolean(result.value.trim() && activeAction.value));
const canContinue = computed(() =>
  Boolean(result.value.trim()) && ['length', 'max_tokens'].includes(finishReason.value)
);
const applyLabel = computed(() => {
  if (activeAction.value === 'title') return '应用标题';
  if (activeAction.value === 'tags') return '应用标签';
  if (activeAction.value === 'search') return '复制关键词';
  if (activeAction.value === 'ask') return '复制回答';
  return props.selectionMode ? '替换选区' : '替换当前内容';
});

const renderMarkdownPreview = (markdown: string) => {
  const html = markdownToHtml(normalizeAiMarkdown(markdown), props.workspaceRoot);
  return props.noteFilePath
    ? resolvePreviewImageUrls(html, props.workspaceRoot ?? '', props.noteFilePath)
    : html;
};

const resetPreview = () => {
  stablePreviewBlocks.value = [];
  previewTailHtml.value = '';
  stablePreviewEnd = 0;
  previewBlockId = 0;
};

const syncPreview = () => {
  previewRenderTimer = null;
  const source = result.value;
  if (!source) {
    resetPreview();
    return;
  }
  if (source.length < stablePreviewEnd) resetPreview();

  // 图片 Markdown 完整闭合后便移入稳定区。后续流式文本仅更新尾部，已加载图片不会被 v-html 反复销毁重建。
  const imagePattern = /!\[[^\]]*\]\((?:\\.|[^)])*\)|<img\b[^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = imagePattern.exec(source))) {
    const end = match.index + match[0].length;
    if (end <= stablePreviewEnd) continue;
    stablePreviewBlocks.value.push({
      id: ++previewBlockId,
      html: renderMarkdownPreview(source.slice(stablePreviewEnd, end))
    });
    stablePreviewEnd = end;
  }
  previewTailHtml.value = renderMarkdownPreview(source.slice(stablePreviewEnd));
};

const schedulePreviewSync = (immediate = false) => {
  if (previewRenderTimer !== null) {
    if (!immediate) return;
    clearTimeout(previewRenderTimer);
  }
  if (immediate) {
    syncPreview();
    return;
  }
  previewRenderTimer = setTimeout(syncPreview, STREAM_PREVIEW_INTERVAL_MS);
};

const cancelGeneration = async () => {
  const requestId = currentRequestId.value;
  // 递增 epoch 可阻止已取消请求的异步回调覆盖下一次生成结果。
  generationEpoch += 1;
  currentRequestId.value = null;
  isGenerating.value = false;
  if (!requestId) return;

  try {
    await cancelLocalAiChatStream(requestId);
  } catch {
    // 窗口正在销毁时 invoke 可能来不及送达；后端窗口销毁兜底会负责取消。
  }
};

const handleDialogVisibility = (visible: boolean) => {
  if (!visible) void cancelGeneration();
  emit('update:modelValue', visible);
};

watch(() => props.modelValue, (visible) => {
  if (!visible) {
    void cancelGeneration();
    return;
  }
  activeAction.value = null;
  result.value = '';
  resetPreview();
  errorMessage.value = '';
  finishReason.value = '';
  if (props.autoRun) void runAction('rewrite');
});

watch(result, () => schedulePreviewSync());

onBeforeUnmount(() => {
  if (previewRenderTimer !== null) clearTimeout(previewRenderTimer);
  void cancelGeneration();
});

const estimateTokens = (text: string): number => {
  const normalized = text.trim();
  if (!normalized) return 0;
  const cjk = (normalized.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const rest = normalized.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, ' ');
  const pieces = rest.match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? [];
  return Math.max(1, Math.ceil(cjk + pieces.reduce(
    (total, piece) => total + (/^[A-Za-z0-9_]+$/.test(piece) ? Math.max(1, Math.ceil(piece.length / 4)) : 1),
    0
  )));
};

const truncateForContext = (content: string, tokenBudget: number): { content: string; truncated: boolean } => {
  if (estimateTokens(content) <= tokenBudget) return { content, truncated: false };
  const maxChars = Math.max(480, tokenBudget * 3);
  const headSize = Math.floor(maxChars * 0.6);
  const tailSize = Math.floor(maxChars * 0.4);
  return {
    content: `${content.slice(0, headSize)}\n\n[……内容过长，已省略中间部分……]\n\n${content.slice(-tailSize)}`,
    truncated: true
  };
};

const stripRepeatedContinuation = (previous: string, continuation: string): string => {
  const next = continuation.trim();
  if (!next) return '';
  if (next.startsWith(previous)) return next.slice(previous.length).trimStart();

  const maxPrefix = Math.min(previous.length, next.length);
  for (let length = maxPrefix; length >= 32; length -= 1) {
    const prefix = next.slice(0, length);
    if (previous.includes(prefix)) return next.slice(length).trimStart();
  }
  return next;
};

const getInstruction = (action: AssistAction): string => {
  switch (action) {
    case 'summarize':
      return '总结内容，使用简洁 Markdown，保留关键事实、待办和结论。不要编造未出现的信息。不要添加标题、摘要标签或开场白，直接从第一个要点或段落开始。';
    case 'rewrite':
      return '润色并改写内容，使表达更清晰自然。必须保留原有 Markdown 的标题层级、列表、链接、代码块与含义；只输出改写后的完整内容，不要添加“润色结果”等额外标题或开场白。';
    case 'title':
      return '根据内容生成一个准确、简洁的标题。只输出标题文字，不要引号、序号或解释。';
    case 'tags':
      return '提取 3 到 8 个有区分度的检索标签。只输出以英文逗号分隔的标签，不要 #、说明或重复项。';
    case 'explain-code':
      return '解释这段代码的作用、关键流程、输入输出、边界情况与潜在风险。用简洁 Markdown 分段，不要编造代码中没有的行为。';
    case 'search':
      return '基于内容生成 3 条可直接用于全文检索或网页检索的查询，每条一行。关键词要具体，覆盖主题、技术名词和可能的问题。不要添加解释。';
    case 'ask':
      return ''; // ask 模式使用独立的 RAG 提示构建逻辑
  }
};

/** 处理提问输入框的 Enter 提交 */
const handleSubmitAsk = () => {
  if (!ragQuestion.value.trim() || isGenerating.value || isRagSearching.value) return;
  void runAction('ask');
};

const runAction = async (action: AssistAction, options: { continue?: boolean } = {}) => {
  // ask 模式不依赖当前片段内容，但需要用户输入问题
  if (action === 'ask' && !options.continue && !ragQuestion.value.trim()) {
    errorMessage.value = '请先输入问题';
    return;
  }
  // 非 ask 模式需要当前片段内容
  const source = props.content.trim();
  if (action !== 'ask' && !source) {
    errorMessage.value = '当前内容为空，先写一点内容再使用 AI 辅助。';
    return;
  }

  activeAction.value = action;
  const previousResult = options.continue ? result.value.trim() : '';
  let continuationDelta = '';
  if (!options.continue) {
    result.value = '';
    resetPreview();
  }
  errorMessage.value = '';
  finishReason.value = '';
  isGenerating.value = true;
  const requestId = createLocalAiStreamRequestId();
  const requestEpoch = ++generationEpoch;
  currentRequestId.value = requestId;
  try {
    const config = await getLocalAiConfig();
    if (requestEpoch !== generationEpoch) return;
    const contextLimit = Math.max(1024, config.ctxSize || 4096);
    // 与 AI 聊天页使用同一套上下文分配：先为输出预留空间，再压缩请求内容。
    const responseReserve = config.maxTokens > 0
      ? Math.min(Math.max(config.maxTokens, 512), Math.max(512, contextLimit - 512))
      : Math.min(Math.max(4096, Math.floor(contextLimit * 0.5)), Math.max(512, contextLimit - 512));
    const requestContextBudget = Math.max(512, contextLimit - responseReserve);
    let messages: LocalAiMessage[];

    if (action === 'ask') {
      // ask 模式：执行 RAG 检索，将知识库上下文注入 AI
      const ragResult = await retrieveContext(ragQuestion.value.trim());
      if (requestEpoch !== generationEpoch) return;

      const systemPrompt = ragResult.context
        ? `你是 Snippets Code 的知识库问答助手。回答使用与用户内容一致的语言。\n\n${ragResult.context}${ragResult.truncated ? '\n\n（注：部分检索结果因长度限制已被截断）' : ''}`
        : '你是 Snippets Code 的知识库问答助手。回答使用与用户内容一致的语言。如果知识库中没有相关信息，请基于你的通用知识回答，并说明该回答未来自知识库。';

      // 更新引用来源 UI
      ragSources.value = ragResult.sources;

      messages = [
        { role: 'system' as const, content: systemPrompt },
        { role: 'user' as const, content: ragQuestion.value.trim() }
      ];
    } else {
      // 其他模式：基于当前片段内容的原有逻辑
      const instruction = getInstruction(action);
      const continuationContext = options.continue
        ? previousResult.slice(-Math.max(1600, Math.floor(requestContextBudget * 3)))
        : '';
      const promptOverhead = estimateTokens(`${instruction}\n标题：${props.title}\n已有标签：${props.tags.join(', ')}\n${continuationContext}`);
      const sourceBudget = Math.max(384, requestContextBudget - promptOverhead - 96);
      const boundedSource = truncateForContext(source, sourceBudget);
      if (boundedSource.truncated) {
        errorMessage.value = '内容较长，已保留开头和结尾后发送，以避免本地模型上下文溢出。';
      }
      messages = [
        {
          role: 'system' as const,
          content: '你是 Snippets Code 的本地写作与代码助手。回答使用与用户内容一致的语言；遵循用户请求的输出格式。'
        },
        {
          role: 'user' as const,
          content: options.continue
            ? `${instruction}\n\n上一段回复在下方最后一个字符处停止。只输出紧接在其后的新内容；不要使用"好的"、标题、前言，也绝不能重述已有句子。\n\n--- 回复末尾上下文 ---\n${continuationContext}\n--- 上下文结束 ---`
            : `${instruction}\n\n标题：${props.title || '未命名'}\n已有标签：${props.tags.join(', ') || '无'}\n内容类型：${props.fragmentType === 'code' ? '代码片段' : 'Markdown 笔记'}\n\n--- 内容开始 ---\n${boundedSource.content}\n--- 内容结束 ---`
        }
      ];
    }
    const requestMaxTokens = config.maxTokens > 0
      ? config.maxTokens
      : Math.max(256, contextLimit - estimateTokens(messages.map((message) => `${message.role}: ${message.content}`).join('\n')) - 128);
    const response = await streamChatWithLocalAi({
      temperature: action === 'rewrite' ? 0.45 : 0.2,
      maxTokens: requestMaxTokens,
      messages
    }, (delta) => {
      if (requestEpoch !== generationEpoch) return;
      if (options.continue) {
        continuationDelta += delta;
      } else {
        result.value += delta;
      }
    }, {
      requestId,
      onStats: (stats) => {
        if (requestEpoch !== generationEpoch) return;
        if (stats.finishReason) finishReason.value = stats.finishReason;
      }
    });
    if (requestEpoch !== generationEpoch) return;
    // Tauri 的流式事件有时会在最终事件前结束；用命令返回的完整内容覆盖预览，避免半截回复。
    const completed = response.content.trim() || continuationDelta.trim();
    if (completed) {
      if (options.continue && previousResult) {
        const uniqueContinuation = stripRepeatedContinuation(previousResult, completed);
        if (!uniqueContinuation) {
          errorMessage.value = '模型重复了已有回复，未追加重复内容；可点击“重新回答”重新生成。';
          result.value = previousResult;
        } else {
          result.value = `${previousResult}\n${uniqueContinuation}`;
        }
      } else {
        result.value = completed;
      }
    }
    schedulePreviewSync(true);
  } catch (error) {
    if (requestEpoch !== generationEpoch) return;
    errorMessage.value = `本地 AI 请求失败：${error instanceof Error ? error.message : String(error)}。请确认“本地 AI”插件已启用且模型已配置。`;
  } finally {
    if (requestEpoch === generationEpoch) {
      currentRequestId.value = null;
      isGenerating.value = false;
    }
  }
};

const regenerate = async () => {
  if (activeAction.value) await runAction(activeAction.value);
};

const continueGeneration = async () => {
  if (activeAction.value && result.value.trim()) {
    await runAction(activeAction.value, { continue: true });
  }
};

const copyResult = async () => {
  if (!result.value.trim()) return;
  await navigator.clipboard.writeText(result.value.trim());
  modal.success('已复制到剪贴板');
};

const applyResult = async () => {
  const value = normalizeAiMarkdown(result.value);
  if (!value || !activeAction.value) return;

  if (activeAction.value === 'title') {
    emit('apply-title', value.replace(/\s+/g, ' ').slice(0, 160));
  } else if (activeAction.value === 'tags') {
    const tags = Array.from(new Set(value
      .split(/[,，\n]/)
      .map((tag) => tag.trim().replace(/^#+/, ''))
      .filter(Boolean)))
      .slice(0, 8);
    if (!tags.length) {
      errorMessage.value = '没有识别到可用标签，请重新生成。';
      return;
    }
    emit('apply-tags', tags);
  } else if (activeAction.value === 'search' || activeAction.value === 'ask') {
    await copyResult();
    return;
  } else if (props.selectionMode) {
    emit('apply-selection', value);
  } else {
    emit('apply-content', value);
  }
  emit('update:modelValue', false);
};
</script>

<style scoped lang="scss">
.dialog-title { display: flex; align-items: center; gap: 8px; font-weight: 650; }
.dialog-title__mark { color: var(--el-color-primary); font-size: 18px; }
.dialog-description { margin: 4px 0 12px; color: var(--el-text-color-secondary); font-size: 13px; line-height: 1.5; }
.action-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
.action-card { --card-accent: var(--el-color-primary); display: flex; align-items: center; justify-content: flex-start !important; width: 100%; height: 56px !important; min-height: 56px; gap: 7px; padding: 6px 9px; line-height: normal !important; text-align: left; border: 1px solid var(--el-border-color) !important; border-left: 3px solid var(--card-accent) !important; border-radius: 8px; color: inherit; background: linear-gradient(110deg, color-mix(in srgb, var(--card-accent) 6%, var(--el-bg-color)), var(--el-bg-color) 55%) !important; cursor: pointer; transition: .15s ease; }
.action-card:hover, .action-card.active { border-color: var(--card-accent) !important; background: linear-gradient(110deg, color-mix(in srgb, var(--card-accent) 14%, var(--el-bg-color)), var(--el-bg-color) 65%) !important; transform: translateY(-1px); }
.action-card:disabled { cursor: wait; opacity: .65; }
.action-card__icon { display: grid; place-items: center; flex: 0 0 24px; width: 24px; height: 24px; border-radius: 6px; color: var(--card-accent); background: color-mix(in srgb, var(--card-accent) 12%, white); font-size: 12px; font-weight: 700; }
.action-card > span:last-child { flex: 1; min-width: 0; text-align: left; }
.action-card strong, .action-card small { display: block; line-height: 1.3; }
.action-card strong { font-size: 13px; }
.action-card small { margin-top: 3px; overflow: hidden; color: var(--el-text-color-secondary); font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
.action-card--summarize, .action-card--rewrite, .action-card--title, .action-card--tags, .action-card--explain-code, .action-card--search { --card-accent: var(--el-color-primary); }
.result-section { margin-top: 10px; flex: 1; min-height: 0; display: flex; flex-direction: column; }
.result-heading { display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px; font-size: 13px; font-weight: 600; }
.generating { color: #6941c6; font-weight: 500; }
.result-box { flex: 1; min-height: 120px; overflow: auto; overflow-anchor: none; padding: 10px 12px; border-radius: 9px; background: var(--el-fill-color-light); border: 1px solid var(--el-border-color-lighter); }
.result-box.empty { display: grid; place-items: center; color: var(--el-text-color-secondary); font-size: 13px; }
.markdown-body { color: var(--el-text-color-primary); font-size: 13px; line-height: 1.65; overflow-wrap: anywhere; }
.markdown-body :deep(p) { margin: 0 0 10px; }
.markdown-body :deep(p:last-child), .markdown-body :deep(ul:last-child), .markdown-body :deep(ol:last-child), .markdown-body :deep(pre:last-child) { margin-bottom: 0; }
.markdown-body :deep(h1), .markdown-body :deep(h2), .markdown-body :deep(h3) { margin: 14px 0 8px; line-height: 1.35; }
.markdown-body :deep(h1) { font-size: 18px; }.markdown-body :deep(h2) { font-size: 16px; }.markdown-body :deep(h3) { font-size: 14px; }
.markdown-body :deep(ul), .markdown-body :deep(ol) { margin: 8px 0 12px; padding-left: 22px; }
.markdown-body :deep(li + li) { margin-top: 4px; }
.markdown-body :deep(code) { padding: 2px 5px; font-size: 12px; background: var(--el-fill-color); border: 1px solid var(--el-border-color-lighter); border-radius: 5px; }
.markdown-body :deep(pre) { max-width: 100%; margin: 10px 0; padding: 10px; overflow: auto; background: var(--el-fill-color-light); border: 1px solid var(--el-border-color-lighter); border-radius: 8px; }
.markdown-body :deep(pre code) { padding: 0; background: transparent; border: 0; }
.markdown-body :deep(img) { display: block; max-width: 100%; min-height: 48px; height: auto; margin: 10px 0; border-radius: 7px; background: var(--el-fill-color); object-fit: contain; }
.markdown-body :deep(blockquote) { margin: 10px 0; padding: 4px 0 4px 10px; color: var(--el-text-color-secondary); border-left: 3px solid var(--el-color-primary); }
.markdown-body :deep(table) { width: 100%; margin: 10px 0; border-collapse: collapse; }.markdown-body :deep(th), .markdown-body :deep(td) { padding: 6px 8px; border: 1px solid var(--el-border-color); }.markdown-body :deep(th) { background: var(--el-fill-color-light); }
.error-message { margin: 8px 0 0; color: var(--el-color-danger); font-size: 12px; line-height: 1.5; }
.rag-input-area { margin-bottom: 12px; }
.rag-sources { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; margin-top: 6px; font-size: 11px; }
.rag-sources__label { color: var(--el-text-color-secondary); }
.rag-sources__tag { padding: 1px 6px; border-radius: 4px; background: var(--el-fill-color-light); border: 1px solid var(--el-border-color-lighter); color: var(--el-text-color-regular); }
.dialog-footer { display: flex; justify-content: flex-end; gap: 8px; }
:global(.ai-assist-dialog) { --dialog-top: 2vh; --dialog-bottom: 2vh; --dialog-width: 720px; }
:global(.ai-assist-dialog .el-overlay-dialog) { display: flex; flex-direction: column; }
:global(.ai-assist-dialog.el-dialog) {
  display: flex !important;
  flex-direction: column !important;
  margin-top: var(--dialog-top) !important;
  margin-bottom: var(--dialog-bottom) !important;
  width: min(var(--dialog-width), calc(100vw - 32px)) !important;
  height: calc(100vh - var(--dialog-top) - var(--dialog-bottom)) !important;
}
:global(.ai-assist-dialog .el-dialog__body) {
  flex: 1;
  min-height: 0;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
}
:global(.ai-assist-dialog .el-dialog__footer) {
  flex-shrink: 0;
  padding-top: 12px;
  border-top: 1px solid var(--el-border-color-lighter);
}
</style>
