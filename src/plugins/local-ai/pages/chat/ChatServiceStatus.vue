<template>
  <button
    class="ui-action w-full justify-start gap-2 px-3"
    type="button"
    @click="$emit('settings')"
  >
    <Settings class="size-4 shrink-0" aria-hidden="true" />
    <span>{{ globalText('localAi.settings') }}</span>
    <span
      class="ml-auto flex min-w-0 items-center gap-1.5 text-ui-caption text-ui-muted"
      role="status"
      :title="t(state)"
    >
      <span
        class="size-1.5 shrink-0 rounded-full bg-current"
        :class="{
          'text-chat-success': state === 'ready',
          'text-primary': state === 'starting',
          'text-chat-error': state === 'error'
        }"
        aria-hidden="true"
      ></span>
      <span class="truncate">{{ t(state) }}</span>
    </span>
    <ChevronRight class="size-3.5 shrink-0 text-ui-muted" aria-hidden="true" />
  </button>
  <details
    v-if="state === 'error'"
    class="mx-3 mt-1 text-ui-caption text-ui-muted"
  >
    <summary class="cursor-pointer rounded-ui focus-visible:outline-primary">
      {{ t('showError') }}
    </summary>
    <p class="mt-1 max-h-24 overflow-y-auto whitespace-pre-wrap break-words">
      {{ status?.lastError }}
    </p>
  </details>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Settings from '~icons/lucide/settings';
import ChevronRight from '~icons/lucide/chevron-right';
import type { LocalAiServiceStatus } from '@/api/localAi';

const props = defineProps<{
  status: LocalAiServiceStatus | null;
  autoStart?: boolean;
}>();
defineEmits<{ settings: [] }>();
const { t: globalText } = useI18n({ useScope: 'global' });
// The plugin also runs on installed hosts with an older global message catalog.
const { t } = useI18n({
  useScope: 'local',
  messages: {
    'zh-CN': {
      unknown: '服务状态待确认',
      ready: '服务运行中',
      starting: '正在加载模型',
      error: '本地服务异常',
      manual: '待机 · 请在设置中启动',
      idle: '待机 · 发送时启动',
      showError: '查看原因'
    },
    'en-US': {
      unknown: 'Service status unavailable',
      ready: 'Service running',
      starting: 'Loading model',
      error: 'Local service error',
      manual: 'Standby · Start in Settings',
      idle: 'Standby · Starts when you send',
      showError: 'Show details'
    }
  }
});
const state = computed(() => {
  if (!props.status) return 'unknown';
  if (props.status.healthy) return 'ready';
  if (props.status.running) return 'starting';
  if (props.status.lastError) return 'error';
  if (props.autoStart === undefined) return 'unknown';
  return props.autoStart ? 'idle' : 'manual';
});
</script>
