<template>
  <main
    ref="splitterRef"
    class="splitter-container"
    :class="{ 'cursor-col-resize select-none': isResizing }"
  >
    <div
      class="splitter-panel first-panel"
      :style="{ width: effectiveFirstWidth, minWidth: effectiveFirstWidth }"
    >
      <slot name="first"></slot>
    </div>
    <div
      v-if="!firstCollapsed && !secondCollapsed"
      class="splitter-divider"
      :style="{ left: effectiveFirstWidth }"
      role="separator"
      aria-orientation="vertical"
      :aria-label="label"
      :aria-valuemin="bounds.min"
      :aria-valuemax="bounds.max"
      :aria-valuenow="Math.round(firstWidthPixels)"
      :title="label"
      tabindex="0"
      :class="{ 'splitter-divider--resizing': isResizing }"
      @pointerdown="startResize"
      @lostpointercapture="stopResize"
      @keydown="handleKeydown"
      @dblclick="resetSize"
    >
      <div class="splitter-divider-line"></div>
    </div>
    <div v-if="!secondCollapsed" class="splitter-panel second-panel">
      <slot name="second"></slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSplitter, type SplitterOptions } from './useSplitter';

defineOptions({ name: 'Splitter' });

const props = withDefaults(
  defineProps<Partial<SplitterOptions> & { label?: string }>(),
  {
    defaultSize: '0%',
    minSize: '0%',
    maxSize: '100%',
    minSecondSize: 0,
    firstCollapsed: false,
    secondCollapsed: false
  }
);

const emit = defineEmits<{
  'update:modelValue': [size: number | string];
  /** 拖拽结束、键盘调整或重置时触发，适合保存宽度偏好。 */
  'resize-end': [size: number | string];
}>();
const {
  splitterRef,
  isResizing,
  bounds,
  firstWidthPixels,
  effectiveFirstWidth,
  startResize,
  stopResize,
  handleKeydown,
  resetSize
} = useSplitter(
  props,
  (size) => emit('update:modelValue', size),
  (size) => emit('resize-end', size)
);
</script>

<style scoped>
.splitter-container {
  @apply relative flex h-full w-full min-w-0 max-w-full overflow-hidden;
}

.splitter-panel {
  @apply h-full min-w-0 max-w-full overflow-hidden;
}

.first-panel {
  flex-shrink: 0;
}

.second-panel {
  @apply flex-1 min-w-0 max-w-full;
}

.splitter-divider {
  @apply absolute inset-y-0 z-10 w-2 -translate-x-1/2 cursor-col-resize touch-none outline-none;
}

.splitter-divider-line {
  @apply pointer-events-none mx-auto h-full w-px bg-[var(--workspace-nav-accent)] opacity-0 transition-opacity;
}

.splitter-divider:hover .splitter-divider-line,
.splitter-divider:focus-visible .splitter-divider-line,
.splitter-divider--resizing .splitter-divider-line {
  @apply opacity-40;
}
</style>
