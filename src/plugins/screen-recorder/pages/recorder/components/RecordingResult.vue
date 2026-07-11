<template>
  <div class="recording-result">
    <h3>{{ $t('screenRecorder.exportDone') }}</h3>
    <p>{{ result.width }} × {{ result.height }} · {{ sizeText }}</p>
    <p v-if="result.debugLogPath" class="debug-log">调试日志：{{ result.debugLogPath }}</p>
    <div class="actions">
      <el-button type="primary" @click="$emit('open')">{{ $t('screenRecorder.openFile') }}</el-button>
      <el-button @click="$emit('reveal')">{{ $t('screenRecorder.openFolder') }}</el-button>
      <el-button @click="$emit('recordAgain')">{{ $t('screenRecorder.recordAgain') }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RecordingExportResult } from '../core/types';

const props = defineProps<{
  result: RecordingExportResult;
}>();

defineEmits<{
  open: [];
  reveal: [];
  recordAgain: [];
}>();

const sizeText = computed(() => {
  const mb = props.result.sizeBytes / 1024 / 1024;
  if (mb >= 1) return `${mb.toFixed(2)} MB`;
  return `${(props.result.sizeBytes / 1024).toFixed(1)} KB`;
});
</script>

<style scoped lang="scss">
.recording-result {
  @apply fixed left-1/2 top-1/2 z-[14] p-[22px] rounded-lg shadow-recorder-overlay -translate-x-1/2 -translate-y-1/2;
  width: min(420px, calc(100vw - 32px));
  background: var(--recorder-overlay-bg);
  border: 1px solid var(--recorder-overlay-border);
  color: var(--recorder-text);

  h3 {
    @apply m-0 mb-2 text-lg;
  }

  p {
    @apply m-0 mb-[18px] text-recorder-muted;
  }

  .debug-log {
    @apply mt-[-8px] text-xs;
    overflow-wrap: anywhere;
  }
}

.actions {
  @apply flex flex-wrap gap-2;
}
</style>
