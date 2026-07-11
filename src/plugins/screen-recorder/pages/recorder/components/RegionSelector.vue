<template>
  <div class="region-selector" @mousedown="handleMouseDown">
    <div class="grid-layer"></div>
    <div v-if="!rect" class="selection-hint">
      {{ $t('screenRecorder.dragToSelect') }}
    </div>
    <div v-if="rect" class="selected-region" :style="rectStyle">
      <span v-for="handle in handles" :key="handle" class="resize-handle" :class="handle"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const props = defineProps<{
  modelValue: Rect | null;
  locked?: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: Rect | null];
  complete: [value: Rect];
}>();

const startPoint = ref<{ x: number; y: number } | null>(null);
const draftRect = ref<Rect | null>(null);
const handles = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

const rect = computed(() => draftRect.value ?? props.modelValue);

const rectStyle = computed(() => {
  if (!rect.value) return {};
  return {
    left: `${rect.value.x}px`,
    top: `${rect.value.y}px`,
    width: `${rect.value.width}px`,
    height: `${rect.value.height}px`
  };
});

const normalizeRect = (left: number, top: number, right: number, bottom: number): Rect => ({
  x: Math.min(left, right),
  y: Math.min(top, bottom),
  width: Math.abs(right - left),
  height: Math.abs(bottom - top)
});

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const handleMouseDown = (event: MouseEvent) => {
  if (props.locked || event.button !== 0) return;
  const target = event.target as HTMLElement;
  if (target.closest('.selected-region')) return;

  startPoint.value = { x: event.clientX, y: event.clientY };
  draftRect.value = { x: event.clientX, y: event.clientY, width: 0, height: 0 };
  emit('update:modelValue', null);

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp, { once: true });
};

const handleMouseMove = (event: MouseEvent) => {
  if (!startPoint.value) return;
  const x = clamp(event.clientX, 0, window.innerWidth);
  const y = clamp(event.clientY, 0, window.innerHeight);
  draftRect.value = normalizeRect(startPoint.value.x, startPoint.value.y, x, y);
};

const handleMouseUp = () => {
  window.removeEventListener('mousemove', handleMouseMove);
  const finalRect = draftRect.value;
  draftRect.value = null;
  startPoint.value = null;

  if (!finalRect || finalRect.width < 20 || finalRect.height < 20) {
    emit('update:modelValue', null);
    return;
  }

  const normalized = {
    ...finalRect,
    x: Math.round(finalRect.x),
    y: Math.round(finalRect.y),
    width: Math.round(finalRect.width),
    height: Math.round(finalRect.height)
  };
  emit('update:modelValue', normalized);
  emit('complete', normalized);
};
</script>

<style scoped lang="scss">
.region-selector {
  @apply fixed inset-0 overflow-hidden cursor-crosshair select-none;
}

.grid-layer {
  @apply absolute inset-0;
  background-image:
    linear-gradient(rgb(31 113 255 / 8%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(31 113 255 / 8%) 1px, transparent 1px);
  background-size: 18px 18px;
}

.selection-hint {
  @apply fixed left-1/2 top-[44%] py-2.5 px-3.5 rounded-md text-[13px] shadow-recorder-overlay -translate-x-1/2 -translate-y-1/2;
  background: var(--recorder-overlay-bg);
  border: 1px solid var(--recorder-overlay-border);
  color: var(--recorder-text);
}

.selected-region {
  @apply absolute cursor-default;
  background: rgb(255 255 255 / 2%);
  border: 2px dashed var(--recorder-blue);
  box-shadow: 0 0 0 9999px rgb(255 255 255 / 18%);
}

.resize-handle {
  @apply absolute w-2.5 h-2.5 rounded-full;
  background: #fff;
  border: 2px solid var(--recorder-blue);
  box-shadow: 0 1px 4px rgb(28 69 135 / 22%);
}

.nw { left: -6px; top: -6px; }
.n { left: 50%; top: -6px; transform: translateX(-50%); }
.ne { right: -6px; top: -6px; }
.e { right: -6px; top: 50%; transform: translateY(-50%); }
.se { right: -6px; bottom: -6px; }
.s { left: 50%; bottom: -6px; transform: translateX(-50%); }
.sw { left: -6px; bottom: -6px; }
.w { left: -6px; top: 50%; transform: translateY(-50%); }
</style>
