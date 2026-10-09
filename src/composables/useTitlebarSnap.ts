import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import type { UnlistenFn } from '@tauri-apps/api/event';
import { type as osType } from '@tauri-apps/plugin-os';

/** 用真实 DOM 几何定位原生命中区域，避免按钮间距或 DPI 改变后错位。 */
export function useTitlebarSnap(
  button: Ref<HTMLElement | null>,
  enabled: Ref<boolean>
): { hovered: Ref<boolean> } {
  const hovered = ref(false);
  let disposed = false;
  let nativeAvailable = false;
  let observer: ResizeObserver | undefined;
  let unlisten: UnlistenFn | undefined;
  let frame = 0;
  let lastBounds = '';
  type Bounds = {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
  } | null;
  let latestBounds: Bounds = null;
  let dirty = false;
  let updating = false;
  // IPC 串行且合并连续缩放，只提交最新坐标，避免堆积或过期坐标覆盖新坐标。
  let pending = Promise.resolve();

  const syncBounds = (): void => {
    frame = 0;
    if (!nativeAvailable || disposed) return;
    const rect = enabled.value
      ? button.value?.getBoundingClientRect()
      : undefined;
    const bounds =
      rect && rect.width > 0 && rect.height > 0
        ? {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            scale: window.devicePixelRatio
          }
        : null;
    const key = JSON.stringify(bounds);
    if (key === lastBounds) return;
    lastBounds = key;
    latestBounds = bounds;
    dirty = true;
    if (updating) return;
    updating = true;
    pending = (async (): Promise<void> => {
      while (dirty && !disposed) {
        dirty = false;
        try {
          await invoke('set_titlebar_maximize_bounds', {
            bounds: latestBounds
          });
        } catch (error) {
          lastBounds = '';
          console.warn('[Titlebar] native snap region update failed:', error);
        }
      }
      updating = false;
    })();
  };
  const scheduleSync = (): void => {
    if (nativeAvailable && !frame && !disposed)
      frame = requestAnimationFrame(syncBounds);
  };
  watch(enabled, scheduleSync, { flush: 'post' });
  onMounted(async () => {
    // 此能力只服务可调整大小的配置窗口；搜索浮窗保留原来的行为。
    if (osType() !== 'windows' || getCurrentWindow().label !== 'config') return;
    try {
      const stop = await getCurrentWindow().listen<boolean>(
        'titlebar-maximize-hover',
        (event) => {
          if (!disposed) hovered.value = event.payload;
        }
      );
      if (disposed) {
        stop();
        return;
      }
      unlisten = stop;
      nativeAvailable = true;
      observer = new ResizeObserver(scheduleSync);
      if (button.value) observer.observe(button.value);
      if (button.value?.parentElement)
        observer.observe(button.value.parentElement);
      window.addEventListener('resize', scheduleSync);
      scheduleSync();
    } catch (error) {
      console.warn('[Titlebar] native snap initialization failed:', error);
    }
  });
  onUnmounted(() => {
    disposed = true;
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', scheduleSync);
    observer?.disconnect();
    unlisten?.();
    if (nativeAvailable) {
      void pending
        .then(() => invoke('set_titlebar_maximize_bounds', { bounds: null }))
        .catch((error) =>
          console.warn('[Titlebar] native snap region cleanup failed:', error)
        );
    }
  });
  return { hovered };
}
