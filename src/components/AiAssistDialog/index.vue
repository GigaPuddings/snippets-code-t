<template>
  <el-dialog
    :model-value="modelValue"
    top="48px"
    width="min(720px, calc(100vw - 32px))"
    class="ai-assist-dialog"
    :close-on-click-modal="!isGenerating"
    :close-on-press-escape="!isGenerating"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #header>
      <div class="dialog-title">
        <span class="dialog-title__mark">✦</span>
        <span>AI 辅助</span>
      </div>
    </template>

    <p class="dialog-description">使用本地 AI 处理当前{{ fragmentType === 'code' ? '代码片段' : '笔记' }}。结果生成后需由你确认才会写入。</p>

    <div class="action-grid" role="group" aria-label="AI 辅助操作">
      <button
        v-for="action in actions"
        :key="action.id"
        class="action-card"
        :class="{ active: activeAction === action.id }"
        :disabled="isGenerating"
        type="button"
        @click="runAction(action.id)"
      >
        <span class="action-card__icon">{{ action.icon }}</span>
        <span>
          <strong>{{ action.label }}</strong>
          <small>{{ action.description }}</small>
        </span>
      </button>
    </div>

    <section class="result-section" aria-live="polite">
      <div class="result-heading">
        <span>{{ activeActionLabel || '生成结果' }}</span>
        <span v-if="isGenerating" class="generating">正在生成…</span>
      </div>
      <div class="result-box" :class="{ empty: !result && !isGenerating }">
        <span v-if="!result && !isGenerating">选择一个操作开始。AI 只会读取当前内容。</span>
        <pre v-else>{{ result || '正在思考…' }}</pre>
      </div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </section>

    <template #footer>
      <div class="dialog-footer">
        <el-button :disabled="isGenerating" @click="copyResult">复制结果</el-button>
        <el-button :disabled="!canApply || isGenerating" type="primary" @click="applyResult">
          {{ applyLabel }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import modal from '@/utils/modal';
import { createLocalAiStreamRequestId, streamChatWithLocalAi } from '@/api/localAi';

type AssistAction = 'summarize' | 'rewrite' | 'title' | 'tags' | 'explain-code' | 'search';

const props = withDefaults(defineProps<{
  modelValue: boolean;
  content: string;
  title: string;
  tags: string[];
  fragmentType: 'note' | 'code';
}>(), {
  tags: () => []
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'apply-content': [value: string];
  'apply-title': [value: string];
  'apply-tags': [value: string[]];
}>();

const activeAction = ref<AssistAction | null>(null);
const result = ref('');
const isGenerating = ref(false);
const errorMessage = ref('');

const actions = computed(() => {
  const shared = [
    { id: 'summarize' as const, icon: '≡', label: '总结内容', description: '提炼重点和结论' },
    { id: 'rewrite' as const, icon: '✎', label: '改写润色', description: '保留 Markdown 结构' },
    { id: 'title' as const, icon: 'T', label: '生成标题', description: '给出准确简洁的标题' },
    { id: 'tags' as const, icon: '#', label: '提取标签', description: '推荐便于检索的标签' },
    { id: 'search' as const, icon: '⌕', label: '搜索辅助', description: '生成可直接检索的关键词' }
  ];
  return props.fragmentType === 'code'
    ? [...shared.slice(0, 4), { id: 'explain-code' as const, icon: '</>', label: '解释代码', description: '说明逻辑、输入和风险' }, shared[4]]
    : shared;
});

const activeActionLabel = computed(() =>
  actions.value.find((action) => action.id === activeAction.value)?.label ?? ''
);
const canApply = computed(() => Boolean(result.value.trim() && activeAction.value));
const applyLabel = computed(() => {
  if (activeAction.value === 'title') return '应用标题';
  if (activeAction.value === 'tags') return '应用标签';
  if (activeAction.value === 'search') return '复制关键词';
  return '替换当前内容';
});

watch(() => props.modelValue, (visible) => {
  if (!visible) return;
  activeAction.value = null;
  result.value = '';
  errorMessage.value = '';
});

const getInstruction = (action: AssistAction): string => {
  switch (action) {
    case 'summarize':
      return '总结内容，使用简洁 Markdown，保留关键事实、待办和结论。不要编造未出现的信息。';
    case 'rewrite':
      return '润色并改写内容，使表达更清晰自然。必须保留原有 Markdown 的标题层级、列表、链接、代码块与含义；只输出改写后的完整内容。';
    case 'title':
      return '根据内容生成一个准确、简洁的标题。只输出标题文字，不要引号、序号或解释。';
    case 'tags':
      return '提取 3 到 8 个有区分度的检索标签。只输出以英文逗号分隔的标签，不要 #、说明或重复项。';
    case 'explain-code':
      return '解释这段代码的作用、关键流程、输入输出、边界情况与潜在风险。用简洁 Markdown 分段，不要编造代码中没有的行为。';
    case 'search':
      return '基于内容生成 3 条可直接用于全文检索或网页检索的查询，每条一行。关键词要具体，覆盖主题、技术名词和可能的问题。不要添加解释。';
  }
};

const runAction = async (action: AssistAction) => {
  const source = props.content.trim();
  if (!source) {
    errorMessage.value = '当前内容为空，先写一点内容再使用 AI 辅助。';
    return;
  }

  activeAction.value = action;
  result.value = '';
  errorMessage.value = '';
  isGenerating.value = true;
  const requestId = createLocalAiStreamRequestId();
  try {
    const response = await streamChatWithLocalAi({
      temperature: action === 'rewrite' ? 0.45 : 0.2,
      maxTokens: action === 'title' || action === 'tags' ? 160 : 1400,
      messages: [
        {
          role: 'system',
          content: '你是 Snippets Code 的本地写作与代码助手。回答使用与用户内容一致的语言；遵循用户请求的输出格式。'
        },
        {
          role: 'user',
          content: `${getInstruction(action)}\n\n标题：${props.title || '未命名'}\n已有标签：${props.tags.join(', ') || '无'}\n内容类型：${props.fragmentType === 'code' ? '代码片段' : 'Markdown 笔记'}\n\n--- 内容开始 ---\n${source}\n--- 内容结束 ---`
        }
      ]
    }, (delta) => {
      result.value += delta;
    }, { requestId });
    if (!result.value.trim()) result.value = response.content;
  } catch (error) {
    errorMessage.value = `本地 AI 请求失败：${error instanceof Error ? error.message : String(error)}。请确认“本地 AI”插件已启用且模型已配置。`;
  } finally {
    isGenerating.value = false;
  }
};

const copyResult = async () => {
  if (!result.value.trim()) return;
  await navigator.clipboard.writeText(result.value.trim());
  modal.success('已复制到剪贴板');
};

const applyResult = async () => {
  const value = result.value.trim();
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
  } else if (activeAction.value === 'search') {
    await copyResult();
    return;
  } else {
    emit('apply-content', value);
  }
  emit('update:modelValue', false);
};
</script>

<style scoped lang="scss">
.dialog-title { display: flex; align-items: center; gap: 8px; font-weight: 650; }
.dialog-title__mark { color: #7a5af8; font-size: 18px; }
.dialog-description { margin: -8px 0 16px; color: var(--el-text-color-secondary); font-size: 13px; }
.action-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.action-card { display: flex; align-items: center; min-height: 58px; gap: 9px; text-align: left; padding: 8px 10px; border: 1px solid var(--el-border-color); border-radius: 8px; color: inherit; background: var(--el-bg-color); cursor: pointer; transition: .15s ease; }
.action-card:hover, .action-card.active { border-color: #7a5af8; background: color-mix(in srgb, #7a5af8 8%, var(--el-bg-color)); }
.action-card:disabled { cursor: wait; opacity: .65; }
.action-card__icon { display: grid; place-items: center; flex: 0 0 26px; width: 26px; height: 26px; border-radius: 7px; color: #6941c6; background: #f4f3ff; font-size: 12px; font-weight: 700; }
.action-card strong, .action-card small { display: block; }
.action-card strong { font-size: 13px; }
.action-card small { margin-top: 3px; color: var(--el-text-color-secondary); font-size: 12px; }
.result-section { margin-top: 14px; }
.result-heading { display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px; font-size: 13px; font-weight: 600; }
.generating { color: #6941c6; font-weight: 500; }
.result-box { height: clamp(132px, 22vh, 220px); overflow: auto; padding: 10px 12px; border-radius: 9px; background: var(--el-fill-color-light); border: 1px solid var(--el-border-color-lighter); }
.result-box.empty { display: grid; place-items: center; color: var(--el-text-color-secondary); font-size: 13px; }
.result-box pre { margin: 0; white-space: pre-wrap; word-break: break-word; font: 13px/1.65 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; color: var(--el-text-color-primary); }
.error-message { margin: 8px 0 0; color: var(--el-color-danger); font-size: 12px; line-height: 1.5; }
.dialog-footer { display: flex; justify-content: flex-end; gap: 8px; }
:global(.ai-assist-dialog.el-dialog) { display: flex; flex-direction: column; max-height: calc(100vh - 72px); margin-bottom: 24px; }
:deep(.el-dialog__body) { min-height: 0; overflow: hidden; }
@media (max-width: 520px) { .action-grid { grid-template-columns: 1fr; } }
</style>
