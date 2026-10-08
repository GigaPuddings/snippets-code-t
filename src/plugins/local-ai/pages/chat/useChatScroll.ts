import { nextTick, onScopeDispose, ref, watch, type Ref } from 'vue';

const BOTTOM_EPSILON = 2;

/** One scroll owner for restored messages, streaming Markdown and composer resizing. */
export function useChatScroll(
  list: Ref<HTMLElement | null>,
  content: Ref<HTMLElement | null>
) {
  const showJumpToBottom = ref(false);
  let following = true;
  let disposed = false;
  let intentVersion = 0;
  let frame: number | null = null;
  const waiters: (() => void)[] = [];
  let pointerActive = false;
  let lastTop = 0;
  let touchY: number | null = null;
  const atBottom = (): boolean =>
    !list.value ||
    list.value.scrollHeight - list.value.clientHeight - list.value.scrollTop <=
      BOTTOM_EPSILON;
  const sync = (): void => {
    showJumpToBottom.value = !atBottom() && !following;
  };
  const settle = (): void => {
    waiters.splice(0).forEach((resolve) => resolve());
  };
  const pause = (): void => {
    intentVersion++;
    following = false;
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    settle();
    sync();
  };
  const scrollToBottom = async (
    options: { force?: boolean } = {}
  ): Promise<void> => {
    if (disposed) return;
    if (options.force) {
      intentVersion++;
      following = true;
    }
    const version = intentVersion;
    await nextTick();
    if (disposed || version !== intentVersion || !following || !list.value)
      return;
    return new Promise<void>((resolve) => {
      waiters.push(resolve);
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        const target = list.value;
        if (!disposed && following && target) {
          // Read the current layout, including the full completed Markdown.
          target.scrollTop = Math.max(
            0,
            target.scrollHeight - target.clientHeight
          );
          lastTop = target.scrollTop;
          sync();
        }
        settle();
      });
    });
  };
  const forceScrollToBottom = (): void => {
    void scrollToBottom({ force: true });
  };
  const preserveScrollPosition = async (update: () => void): Promise<void> => {
    pause();
    const target = list.value;
    const top = target?.scrollTop ?? 0;
    const height = target?.scrollHeight ?? 0;
    const version = intentVersion;
    update();
    await nextTick();
    // A conversation switch or user scroll takes precedence over this prepend.
    if (
      disposed ||
      version !== intentVersion ||
      !target ||
      target !== list.value
    )
      return;
    target.scrollTop = Math.max(0, top + target.scrollHeight - height);
    lastTop = target.scrollTop;
    sync();
  };
  const handleMessageScroll = (): void => {
    const target = list.value;
    const top = target?.scrollTop ?? 0;
    // Native scrollbar events may not deliver pointerdown. Distinguish an upward
    // scroll from the browser clamping scrollTop after content becomes shorter.
    const previousTop = target
      ? Math.min(
          lastTop,
          Math.max(0, target.scrollHeight - target.clientHeight)
        )
      : 0;
    if (top < previousTop - 1) pause();
    else if (!pointerActive && top > lastTop && atBottom()) following = true;
    lastTop = top;
    sync();
  };
  const handleMessageWheel = (event: WheelEvent): void => {
    if (event.deltaY < 0) pause();
    else if (event.deltaY > 0 && atBottom()) following = true;
  };
  const handleMessagePointerDown = (event: PointerEvent): void => {
    const target = list.value;
    if (!target) return;
    const gutter = Math.max(12, target.offsetWidth - target.clientWidth);
    if (event.clientX < target.getBoundingClientRect().right - gutter) return;
    pointerActive = true;
    lastTop = target.scrollTop;
    pause();
  };
  const finishMessagePointerScroll = (): void => {
    if (!pointerActive) return;
    pointerActive = false;
    following = atBottom();
    sync();
  };
  const handleMessageTouchStart = (event: TouchEvent): void => {
    touchY = event.touches[0]?.clientY ?? null;
  };
  const handleMessageTouchMove = (event: TouchEvent): void => {
    const nextY = event.touches[0]?.clientY;
    if (nextY === undefined || touchY === null) return;
    if (nextY > touchY) pause();
    touchY = nextY;
  };
  const handleMessageTouchEnd = (): void => {
    touchY = null;
    sync();
  };
  const handleMessageKeydown = (event: KeyboardEvent): void => {
    if (['ArrowUp', 'PageUp', 'Home'].includes(event.key)) pause();
  };

  const resizeObserver =
    typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(() => {
          sync();
          if (following) void scrollToBottom();
        });
  watch(
    [list, content],
    ([viewport, body]) => {
      resizeObserver?.disconnect();
      if (viewport) resizeObserver?.observe(viewport);
      if (body) resizeObserver?.observe(body);
      if (following) void scrollToBottom();
    },
    { flush: 'post', immediate: true }
  );
  const handleWindowResize = (): void => {
    sync();
    if (following) void scrollToBottom();
  };
  window.addEventListener('pointerup', finishMessagePointerScroll);
  window.addEventListener('pointercancel', finishMessagePointerScroll);
  window.addEventListener('resize', handleWindowResize);
  window.addEventListener('focus', handleWindowResize);
  onScopeDispose(() => {
    disposed = true;
    pause();
    resizeObserver?.disconnect();
    window.removeEventListener('pointerup', finishMessagePointerScroll);
    window.removeEventListener('pointercancel', finishMessagePointerScroll);
    window.removeEventListener('resize', handleWindowResize);
    window.removeEventListener('focus', handleWindowResize);
  });
  return {
    showJumpToBottom,
    scrollToBottom,
    forceScrollToBottom,
    preserveScrollPosition,
    handleMessageScroll,
    handleMessageWheel,
    handleMessagePointerDown,
    handleMessageTouchStart,
    handleMessageTouchMove,
    handleMessageTouchEnd,
    handleMessageKeydown
  };
}
