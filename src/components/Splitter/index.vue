<template>
  <main class="splitter-container" ref="splitterRef">
    <div class="splitter-panel first-panel" :style="{ width: effectiveFirstWidth, minWidth: effectiveFirstWidth }">
      <slot name="first"></slot>
    </div>
    <div
      v-if="!firstCollapsed"
      class="splitter-divider"
      @mousedown="startResize"
      :style="{ left: effectiveFirstWidth }"
    >
      <div class="splitter-divider-line"></div>
    </div>
    <div class="splitter-panel second-panel">
      <slot name="second"></slot>
    </div>
  </main>
</template>

<script setup lang="ts">

defineOptions({
  name: 'Splitter'
});

interface Props {
  defaultSize?: number | string;
  minSize?: number | string;
  maxSize?: number | string;
  /** 为 true 时第一栏固定为 48px，隐藏分隔条，用于折叠片段列表 */
  firstCollapsed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultSize: '0%',
  minSize: '0%',
  maxSize: '100%',
  firstCollapsed: false
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

// 折叠时第一栏宽度为 0，不再显示边条/箭头
const effectiveFirstWidth = computed(() => {
  if (props.firstCollapsed) return '0px';
  return computedWidth.value;
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
  if (!splitterRef.value || props.firstCollapsed) return;

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
  @apply h-full overflow-hidden transition-[width,min-width] duration-200 ease-out;
}

.first-panel {
  flex-shrink: 0;
}

.second-panel {
  @apply flex-1;
}

.splitter-divider {
  @apply absolute w-[1px] h-[98%] top-[6px] bg-panel cursor-col-resize z-10 hover:bg-blue-200;
}

.splitter-divider-line {
  @apply absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[1px] w-[2px] h-4 bg-panel cursor-col-resize z-10 hover:bg-blue-200;
}
</style>
