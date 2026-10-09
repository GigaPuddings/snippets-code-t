import {
  computed,
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
  ref,
  watch,
  type ComputedRef,
  type Ref
} from 'vue';

export interface SplitterOptions {
  modelValue?: number | string;
  defaultSize: number | string;
  minSize: number | string;
  maxSize: number | string;
  /** 第二栏保留的最小宽度，防止侧栏占满可用空间。 */
  minSecondSize: number | string;
  /** 折叠时第一栏宽度为 0；第二栏折叠时第一栏占满。 */
  firstCollapsed: boolean;
  secondCollapsed: boolean;
}

interface SplitterState {
  splitterRef: Ref<HTMLElement | null>;
  isResizing: Ref<boolean>;
  bounds: ComputedRef<{ min: number; max: number }>;
  firstWidthPixels: ComputedRef<number>;
  effectiveFirstWidth: ComputedRef<string>;
  startResize: (event: PointerEvent) => void;
  stopResize: () => void;
  handleKeydown: (event: KeyboardEvent) => void;
  resetSize: () => void;
}

export const useSplitter = (
  props: SplitterOptions,
  onUpdate: (size: number | string) => void,
  onCommit: (size: number | string) => void
): SplitterState => {
  const splitterRef = ref<HTMLElement | null>(null);
  const containerWidth = ref(0);
  const firstPanelSize = ref(props.modelValue ?? props.defaultSize);
  const isResizing = ref(false);
  const isPercentageValue = (value: number | string): boolean =>
    typeof value === 'string' && value.endsWith('%');
  const toPixels = (value: number | string): number => {
    const amount = typeof value === 'number' ? value : parseFloat(value);
    if (!Number.isFinite(amount)) return 0;
    return isPercentageValue(value)
      ? (amount * containerWidth.value) / 100
      : amount;
  };
  const bounds = computed(() => {
    const max = Math.max(
      0,
      Math.min(
        toPixels(props.maxSize),
        containerWidth.value - toPixels(props.minSecondSize)
      )
    );
    return { min: Math.min(Math.max(0, toPixels(props.minSize)), max), max };
  });
  const clampWidth = (width: number): number =>
    Math.max(bounds.value.min, Math.min(bounds.value.max, width));
  const firstWidthPixels = computed(() =>
    clampWidth(toPixels(firstPanelSize.value))
  );
  const effectiveFirstWidth = computed(() => {
    if (props.firstCollapsed) return '0px';
    if (props.secondCollapsed) return '100%';
    // 首次测量前保留初始宽度，避免侧栏闪烁。
    if (!containerWidth.value) {
      return isPercentageValue(firstPanelSize.value)
        ? String(firstPanelSize.value)
        : `${toPixels(firstPanelSize.value)}px`;
    }
    return `${firstWidthPixels.value}px`;
  });

  watch(
    () => props.modelValue,
    (size) => {
      if (size !== undefined) firstPanelSize.value = size;
    }
  );

  let pointerId: number | null = null;
  let dragTarget: HTMLElement | null = null;
  let startX = 0;
  let startWidth = 0;
  let resizeObserver: ResizeObserver | undefined;
  const measureContainer = (): void => {
    containerWidth.value = splitterRef.value?.clientWidth ?? 0;
  };
  const setWidth = (pixels: number): void => {
    if (!containerWidth.value) return;
    const width = clampWidth(pixels);
    firstPanelSize.value = isPercentageValue(firstPanelSize.value)
      ? `${(width / containerWidth.value) * 100}%`
      : width;
    onUpdate(firstPanelSize.value);
  };
  const commitSize = (): void => onCommit(firstPanelSize.value);

  const startResize = (event: PointerEvent): void => {
    if (
      event.button !== 0 ||
      event.isPrimary === false ||
      props.firstCollapsed ||
      props.secondCollapsed
    )
      return;
    event.preventDefault();
    event.stopPropagation();
    measureContainer();
    if (!containerWidth.value) return;
    isResizing.value = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startWidth = firstWidthPixels.value;
    dragTarget = event.currentTarget as HTMLElement;
    dragTarget.setPointerCapture(event.pointerId);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', finishPointerResize);
    window.addEventListener('pointercancel', finishPointerResize);
    window.addEventListener('blur', stopResize);
  };
  const handlePointerMove = (event: PointerEvent): void => {
    if (!isResizing.value || event.pointerId !== pointerId) return;
    event.preventDefault();
    setWidth(startWidth + event.clientX - startX);
  };
  const stopResize = (): void => {
    if (!isResizing.value) return;
    isResizing.value = false;
    const finishedPointer = pointerId;
    pointerId = null;
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', finishPointerResize);
    window.removeEventListener('pointercancel', finishPointerResize);
    window.removeEventListener('blur', stopResize);
    if (
      finishedPointer !== null &&
      dragTarget?.hasPointerCapture(finishedPointer)
    ) {
      dragTarget.releasePointerCapture(finishedPointer);
    }
    dragTarget = null;
    commitSize();
  };
  const finishPointerResize = (event: PointerEvent): void => {
    if (event.pointerId !== pointerId) return;
    if (event.type === 'pointerup') handlePointerMove(event);
    stopResize();
  };
  const handleKeydown = (event: KeyboardEvent): void => {
    const step = event.shiftKey ? 32 : 8;
    const widths: Record<string, number> = {
      ArrowLeft: firstWidthPixels.value - step,
      ArrowRight: firstWidthPixels.value + step,
      Home: bounds.value.min,
      End: bounds.value.max
    };
    if (!(event.key in widths)) return;
    event.preventDefault();
    event.stopPropagation();
    setWidth(widths[event.key]);
    commitSize();
  };
  const resetSize = (): void => {
    setWidth(toPixels(props.defaultSize));
    commitSize();
  };

  watch(
    () => props.firstCollapsed || props.secondCollapsed,
    (collapsed) => {
      if (collapsed) stopResize();
    }
  );
  onMounted(() => {
    measureContainer();
    resizeObserver = new ResizeObserver(measureContainer);
    if (splitterRef.value) resizeObserver.observe(splitterRef.value);
  });
  onActivated(() => {
    measureContainer();
    if (splitterRef.value) resizeObserver?.observe(splitterRef.value);
  });
  onDeactivated(() => {
    stopResize();
    resizeObserver?.disconnect();
  });

  onUnmounted(() => {
    stopResize();
    resizeObserver?.disconnect();
  });
  return {
    splitterRef,
    isResizing,
    bounds,
    firstWidthPixels,
    effectiveFirstWidth,
    startResize,
    stopResize,
    handleKeydown,
    resetSize
  };
};
