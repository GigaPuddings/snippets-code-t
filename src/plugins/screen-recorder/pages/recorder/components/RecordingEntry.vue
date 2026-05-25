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
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 9px;
  height: 38px;
  padding: 5px 8px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(210, 217, 226, 0.9);
  border-radius: 6px;
  box-shadow: 0 10px 24px rgba(20, 35, 61, 0.16);
  backdrop-filter: blur(12px);
}

.dimension {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #2b3545;
  font-size: 12px;

  input {
    width: 54px;
    height: 26px;
    padding: 0 8px;
    color: #455064;
    background: #fff;
    border: 1px solid #dde4ee;
    border-radius: 5px;
    outline: none;
  }
}

select {
  height: 28px;
  padding: 0 24px 0 9px;
  color: #334057;
  background: #fff;
  border: 1px solid #dde4ee;
  border-radius: 5px;
  outline: none;
}

button {
  height: 28px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}

.primary {
  min-width: 92px;
  padding: 0 14px;
  color: #fff;
  background: #2f82ff;
  box-shadow: 0 5px 12px rgba(47, 130, 255, 0.28);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
}

.ghost {
  width: 28px;
  color: #4d596b;
  background: transparent;
  font-size: 22px;
  line-height: 1;
}
</style>
