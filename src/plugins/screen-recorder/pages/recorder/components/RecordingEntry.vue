<template>
  <div class="recording-entry" :style="style">
    <label class="dimension">
      <span>{{ $t('screenRecorder.width') }}</span>
      <input :value="width" readonly />
    </label>
    <label class="dimension">
      <span>{{ $t('screenRecorder.height') }}</span>
      <input :value="height" readonly />
    </label>
    <select v-model="localFps">
      <option :value="15">15 FPS</option>
      <option :value="24">24 FPS</option>
      <option :value="30">30 FPS</option>
      <option :value="60">60 FPS</option>
    </select>
    <select v-model="localFormat">
      <option value="mp4">MP4</option>
      <option value="gif">GIF</option>
    </select>
    <button class="primary" :disabled="disabled" @click="$emit('start')">
      {{ $t('screenRecorder.start') }}
    </button>
    <button class="ghost" @click="$emit('cancel')">×</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RecordingFormat } from '../core/types';

const props = defineProps<{
  width: number;
  height: number;
  top: number;
  left: number;
  fps: number;
  format: RecordingFormat;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  start: [];
  cancel: [];
  'update:fps': [value: 15 | 24 | 30 | 60];
  'update:format': [value: RecordingFormat];
}>();

const localFps = computed({
  get: () => props.fps,
  set: (value) => emit('update:fps', Number(value) as 15 | 24 | 30 | 60)
});

const localFormat = computed({
  get: () => props.format,
  set: (value) => emit('update:format', value as RecordingFormat)
});

const style = computed(() => ({
  left: `${props.left}px`,
  top: `${props.top}px`
}));
</script>

<style scoped lang="scss">
.recording-entry {
  @apply fixed z-[5] flex items-center gap-[9px] h-[38px] py-[5px] px-2 rounded-md shadow-recorder-overlay;
  background: var(--recorder-overlay-bg);
  border: 1px solid var(--recorder-overlay-border);
  backdrop-filter: blur(12px);
}

.dimension {
  @apply flex items-center gap-[5px] text-xs text-recorder;

  input {
    @apply w-[54px] h-[26px] px-2 rounded-[5px] outline-none;
    background: var(--recorder-overlay-input-bg);
    border: 1px solid var(--recorder-overlay-input-border);
    color: var(--recorder-text);
  }
}

select {
  @apply h-7 pl-[9px] pr-6 rounded-[5px] outline-none text-xs;
  background: var(--recorder-overlay-input-bg);
  border: 1px solid var(--recorder-overlay-input-border);
  color: var(--recorder-text);
}

button {
  @apply h-7 border-0 rounded-[5px] cursor-pointer;
}

.primary {
  @apply min-w-[92px] px-3.5 text-white bg-recorder-blue cursor-pointer;
  box-shadow: 0 5px 12px color-mix(in srgb, var(--recorder-blue) 28%, transparent);

  &:disabled {
    @apply cursor-not-allowed opacity-[0.55];
  }
}

.ghost {
  @apply w-7 text-recorder-muted text-[22px] leading-none;
  background: transparent;
}
</style>
