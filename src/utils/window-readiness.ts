import { nextTick } from 'vue';
import { getCurrentWindow } from '@tauri-apps/api/window';

/** DOM 更新后的下一帧仍在绘制前；再等一帧才报告首屏就绪。 */
export async function waitForFirstPaint(): Promise<void> {
  await nextTick();
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

type ReadyWindow = Pick<
  ReturnType<typeof getCurrentWindow>,
  'label' | 'listen' | 'emit'
>;

const CONTENT_READY_EVENTS: Record<string, string> = {
  translate: 'translate_ready',
  update: 'update-ready',
  dark_mode: 'dark_mode_ready',
  setup: 'setup_ready'
};

export function getContentReadyEvent(label: string): string | undefined {
  if (label.startsWith('pin_')) return 'pin-window-ready';
  if (label.startsWith('notification_')) return 'notification-ready';
  return CONTENT_READY_EVENTS[label];
}

// 这些窗口已有独立的首屏/捕获资源就绪协议，不能由通用路由挂载信号提前显示。
export function hasDedicatedReadiness(label: string): boolean {
  return ['config', 'screenshot', 'screen_recorder'].includes(label);
}

/** 必须在 app.mount 前安装内容就绪监听，兼容独立发布的既有插件。 */
export async function prepareWindowReadiness(
  router: { isReady: () => Promise<void> },
  appWindow: ReadyWindow = getCurrentWindow(),
  paint: () => Promise<void> = waitForFirstPaint
): Promise<() => Promise<void>> {
  if (hasDedicatedReadiness(appWindow.label)) return async () => undefined;

  let unlisten: (() => void) | undefined;
  const readyEvent = getContentReadyEvent(appWindow.label);
  let resolveContent!: () => void;
  const contentReady = new Promise<void>((resolve) => {
    resolveContent = resolve;
  });
  // 完成原生监听注册后才允许挂载页面，避免快速页面先发送 ready。
  if (readyEvent) {
    unlisten = await appWindow.listen<{ label?: string }>(
      readyEvent,
      async (event) => {
        if (event.payload?.label && event.payload.label !== appWindow.label)
          return;
        if (appWindow.label.startsWith('pin_')) {
          // 旧插件的 ready 没有携带 label。只接受本窗口已收到图片的数据。
          await nextTick();
          if (!document.querySelector('.pin-container img[src]')) return;
        }
        resolveContent();
      }
    );
  } else {
    resolveContent();
  }

  return async () => {
    try {
      await router.isReady();
      await contentReady;
      if (appWindow.label.startsWith('pin_')) {
        await Promise.all(
          Array.from(document.images).map((image) =>
            image.decode().catch(() => undefined)
          )
        );
      }
      await paint();
      await appWindow.emit('window-first-paint', { label: appWindow.label });
    } finally {
      unlisten?.();
    }
  };
}
