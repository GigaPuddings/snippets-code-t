<template>
  <div
    class="assistant-head mb-1 flex min-w-0 flex-wrap items-center gap-x-2 text-ui-caption text-ui-muted"
  >
    <span class="min-w-0 truncate" :title="model">
      {{ compactModelName(model) }}
    </span>
    <button
      v-if="hasReasoning"
      type="button"
      class="ui-action ui-action--muted min-h-6 gap-1 px-1.5 text-ui-caption"
      :aria-expanded="expanded"
      :aria-controls="panelId"
      @click="expanded = !expanded"
    >
      <Brain class="size-3.5" aria-hidden="true" />
      {{ label }}
      <ChevronDown
        class="size-3"
        :class="{ 'rotate-180': expanded }"
        aria-hidden="true"
      />
    </button>
    <span v-if="streaming && !thinking">{{ t('localAi.generating') }}</span>
  </div>
  <div
    v-if="hasReasoning"
    v-show="expanded"
    :id="panelId"
    class="mb-2 rounded-ui bg-ui-card-soft px-3 py-2 text-chat-secondary"
  >
    <slot v-if="expanded"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useId, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Brain from '~icons/lucide/brain';
import ChevronDown from '~icons/lucide/chevron-down';
import { compactModelName } from './modelLabel';

const props = defineProps<{
  model: string;
  hasReasoning: boolean;
  thinking: boolean;
  streaming?: boolean;
  startedAt?: number;
  endedAt?: number;
  now?: number;
}>();
const { t } = useI18n();
const { t: durationText } = useI18n({
  useScope: 'local',
  messages: {
    'zh-CN': {
      thinking: '思考中 · {seconds} 秒',
      seconds: '已思考 {seconds} 秒',
      minutes: '已思考 {minutes} 分 {seconds} 秒'
    },
    'en-US': {
      thinking: 'Thinking · {seconds}s',
      seconds: 'Thought for {seconds}s',
      minutes: 'Thought for {minutes}m {seconds}s'
    }
  }
});
const panelId = useId();
const expanded = ref(props.thinking);
watch(
  () => props.thinking,
  (active) => {
    expanded.value = active;
  }
);

const label = computed(() => {
  const end = props.thinking ? props.now : props.endedAt;
  if (props.startedAt === undefined || end === undefined)
    return t('localAi.reasoningTitle');
  const seconds = Math.max(0, Math.round((end - props.startedAt) / 1000));
  if (props.thinking) return durationText('thinking', { seconds });
  return seconds < 60
    ? durationText('seconds', { seconds })
    : durationText('minutes', {
        minutes: Math.floor(seconds / 60),
        seconds: seconds % 60
      });
});
</script>
