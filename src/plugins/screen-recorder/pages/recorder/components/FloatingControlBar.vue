<template>
  <div class="floating-control">
    <span class="record-dot" :class="{ paused }"></span>
    <span class="time">{{ timeText }}</span>
    <button @click="togglePause">
      {{ paused ? $t('screenRecorder.resume') : $t('screenRecorder.pause') }}
    </button>
    <button class="danger" @click="$emit('stop')">{{ $t('screenRecorder.stop') }}</button>
    <button class="ghost" @click="$emit('cancel')">{{ $t('screenRecorder.cancel') }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  elapsedMs: number;
  paused?: boolean;
}>();

const emit = defineEmits<{
  pause: [];
  resume: [];
  stop: [];
  cancel: [];
}>();

const timeText = computed(() => {
  const totalSeconds = Math.floor(props.elapsedMs / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});

const togglePause = () => {
  if (props.paused) {
    emit('resume');
  } else {
    emit('pause');
  }
};
</script>

<style scoped lang="scss">
.floating-control {
  position: fixed;
  left: 50%;
  bottom: 32px;
  z-index: 8;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 42px;
  padding: 0 12px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(210, 217, 226, 0.9);
  border-radius: 7px;
  box-shadow: 0 12px 28px rgba(20, 35, 61, 0.18);
  transform: translateX(-50%);
}

.record-dot {
  width: 10px;
  height: 10px;
  background: #f04444;
  border-radius: 50%;

  &.paused {
    background: #f4a51c;
  }
}

.time {
  min-width: 45px;
  color: #182131;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

button {
  height: 28px;
  padding: 0 12px;
  color: #344258;
  background: #f3f6fa;
  border: 1px solid #dfe6ef;
  border-radius: 5px;
  cursor: pointer;
}

.danger {
  color: #fff;
  background: #ec4b4b;
  border-color: #ec4b4b;
}

.ghost {
  background: transparent;
}
</style>
