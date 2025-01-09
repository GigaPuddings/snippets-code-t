<template>
  <main class="splitter-container" ref="splitterRef">
    <div class="splitter-panel" :style="{ width: computedWidth }">
      <slot name="first"></slot>
    </div>
    <div
      class="splitter-divider"
      @mousedown="startResize"
      :style="{ left: computedWidth }"
    >
      <div class="splitter-divider-line"></div>
    </div>
    <div class="splitter-panel second-panel">
      <slot name="second"></slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';

defineOptions({
  name: 'Splitter'
});

interface Props {
  defaultSize?: number | string;
  minSize?: number | string;
  maxSize?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  defaultSize: '0%',
  minSize: '0%',
  maxSize: '100%'
});

const splitterRef = ref<HTMLElement | null>(null);

// 判断是否为百分比值
const isPercentageValue = (value: number | string): boolean => {
  return typeof value === 'string' && value.includes('%');
};

// 转换输入值为数字（去除百分比符号）
const parseValue = (value: number | string): number => {
  if (typeof value === 'string') {
    return parseFloat(value.replace('%', ''));
  }
  return value;
};

const firstPanelWidth = ref(parseValue(props.defaultSize));
const isPercentage = computed(() => isPercentageValue(props.defaultSize));

// 计算最终显示的宽度值
const computedWidth = computed(() => {
  return isPercentage.value
    ? `${firstPanelWidth.value}%`
    : `${firstPanelWidth.value}px`;
});

let isResizing = false;
let startX = 0;
let startWidth = 0;

const getContainerWidth = (): number => {
  return splitterRef.value?.offsetWidth || 0;
};

const convertPixelToPercentage = (pixels: number): number => {
  const containerWidth = getContainerWidth();
  return (pixels / containerWidth) * 100;
};

const convertPercentageToPixel = (percentage: number): number => {
  const containerWidth = getContainerWidth();
  return (percentage * containerWidth) / 100;
};

const startResize = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if (!splitterRef.value) return;

  isResizing = true;
  startX = e.clientX;
  startWidth = isPercentage.value
    ? convertPercentageToPixel(firstPanelWidth.value)
    : firstPanelWidth.value;

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', stopResize);
};

const handleMouseMove = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if (!isResizing || !splitterRef.value) return;

  const diff = e.clientX - startX;
  let newWidth = startWidth + diff;

  // 转换最小和最大值为像素
  const minPixels = isPercentage.value
    ? convertPercentageToPixel(parseValue(props.minSize))
    : parseValue(props.minSize);

  const maxPixels = isPercentage.value
    ? convertPercentageToPixel(parseValue(props.maxSize))
    : parseValue(props.maxSize);

  // 限制拖动范围
  newWidth = Math.max(minPixels, Math.min(maxPixels, newWidth));

  // 如果使用百分比，转换像素为百分比
  firstPanelWidth.value = isPercentage.value
    ? convertPixelToPercentage(newWidth)
    : newWidth;
};

const stopResize = () => {
  isResizing = false;
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', stopResize);
};

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', stopResize);
});
</script>

<style scoped>
.splitter-container {
  @apply flex relative w-full h-full overflow-hidden;
}

.splitter-panel {
  @apply h-full overflow-hidden;
}

.second-panel {
  @apply flex-1;
}

.splitter-divider {
  @apply absolute w-[1px] h-full bg-gray-200 dark:bg-gray-800 cursor-col-resize z-10 hover:bg-blue-200;
}

.splitter-divider-line {
  @apply absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[1px] w-[2px] h-4 bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-col-resize z-10 hover:bg-blue-200;
}
</style>
