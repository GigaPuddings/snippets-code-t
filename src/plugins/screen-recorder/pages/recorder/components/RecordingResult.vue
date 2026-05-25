<template>
  <div class="recording-result">
    <h3>{{ $t('screenRecorder.exportDone') }}</h3>
    <p>{{ result.width }} × {{ result.height }} · {{ sizeText }}</p>
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
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 14;
  width: min(420px, calc(100vw - 32px));
  padding: 22px;
  color: #1f2937;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(210, 217, 226, 0.9);
  border-radius: 8px;
  box-shadow: 0 18px 42px rgba(20, 35, 61, 0.22);
  transform: translate(-50%, -50%);

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  p {
    margin: 0 0 18px;
    color: #5a6678;
  }
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
