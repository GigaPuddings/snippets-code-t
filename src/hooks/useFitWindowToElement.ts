import { LogicalSize, getCurrentWindow } from '@tauri-apps/api/window';
import type { Ref } from 'vue';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import {
  normalizeWindowContentHeight,
  shouldUpdateWindowHeight
} from './windowContentSizing';

/**
 * Keeps a non-resizable Tauri window fitted to the visible content.
 *
 * The quick-search window uses this instead of a large transparent placeholder.
 * When results appear the native window grows; when they disappear it shrinks
 * back to the input box.
 */
export function useFitWindowToElement(elementRef: Ref<HTMLElement | null>): void {
  const appWindow = getCurrentWindow();
  let resizeObserver: ResizeObserver | null = null;
  let animationFrameId: number | null = null;
  let desiredHeight: number | null = null;
  let resizeInFlight = false;

  const flushResize = async (): Promise<void> => {
    if (resizeInFlight) return;

    resizeInFlight = true;
    try {
      while (desiredHeight !== null) {
        const targetHeight = desiredHeight;
        desiredHeight = null;

        if (!shouldUpdateWindowHeight(window.innerHeight, targetHeight)) {
          continue;
        }

        await appWindow.setSize(
          new LogicalSize(Math.max(1, window.innerWidth), targetHeight)
        );
      }
    } catch (error) {
      ErrorHandler.log(error, {
        type: ErrorType.TAURI_COMMAND_ERROR,
        operation: 'fitWindowToSearchContent',
        details: { desiredHeight },
        timestamp: new Date()
      });
    } finally {
      resizeInFlight = false;
      if (desiredHeight !== null) {
        void flushResize();
      }
    }
  };

  const measureAndResize = (): void => {
    animationFrameId = null;
    const element = elementRef.value;
    if (!element) return;

    desiredHeight = normalizeWindowContentHeight(
      element.getBoundingClientRect().height
    );
    void flushResize();
  };

  const scheduleResize = (): void => {
    if (animationFrameId !== null) return;
    animationFrameId = window.requestAnimationFrame(measureAndResize);
  };

  const observeElement = (
    currentElement: HTMLElement | null,
    previousElement?: HTMLElement | null
  ): void => {
    if (!resizeObserver) return;
    if (previousElement) {
      resizeObserver.unobserve(previousElement);
    }
    if (currentElement) {
      resizeObserver.observe(currentElement);
      scheduleResize();
    }
  };

  watch(elementRef, observeElement);

  onMounted(() => {
    resizeObserver = new ResizeObserver(scheduleResize);
    observeElement(elementRef.value);
    window.addEventListener('resize', scheduleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', scheduleResize);
    resizeObserver?.disconnect();
    resizeObserver = null;

    if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  });
}
