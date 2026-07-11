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
  @apply fixed left-1/2 bottom-8 z-[8] flex items-center gap-2.5 h-[42px] px-3 rounded-md shadow-recorder-overlay -translate-x-1/2;
  background: var(--recorder-overlay-bg);
  border: 1px solid var(--recorder-overlay-border);
}

.record-dot {
  @apply w-2.5 h-2.5 rounded-full bg-recorder-red-bright;

  &.paused {
    @apply bg-recorder-amber;
  }
}

.time {
  @apply min-w-[45px] font-semibold text-recorder;
  font-variant-numeric: tabular-nums;
}

button {
  @apply h-7 px-3 rounded-[5px] cursor-pointer;
  color: var(--recorder-text);
  background: var(--recorder-soft-bg);
  border: 1px solid var(--recorder-border);
}

.danger {
  @apply text-white bg-recorder-red border-recorder-red;
}

.ghost {
  background: transparent;
}
</style>
