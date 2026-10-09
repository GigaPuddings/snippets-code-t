import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { getCurrentWindow } from '@tauri-apps/api/window';
import type { UnlistenFn } from '@tauri-apps/api/event';

type ControlWindow = Pick<
  ReturnType<typeof getCurrentWindow>,
  | 'isMaximized'
  | 'isMaximizable'
  | 'isMinimizable'
  | 'isResizable'
  | 'isAlwaysOnTop'
  | 'setAlwaysOnTop'
  | 'onResized'
  | 'toggleMaximize'
  | 'minimize'
  | 'close'
>;
export type WindowAction = 'isAlwaysOnTop' | 'minimize' | 'maximize' | 'close';
type WindowControls = Record<
  | 'isMaximized'
  | 'isMaximizable'
  | 'isMinimizable'
  | 'isAlwaysOnTop'
  | 'isChangingState',
  Ref<boolean>
> & { performAction: (action: WindowAction) => Promise<void> };

/** 标题栏始终控制当前 WebView 所属窗口，并跟随原生窗口状态变化。 */
export function useWindowControls(
  appWindow: ControlWindow = getCurrentWindow()
): WindowControls {
  const isMaximized = ref(false);
  const isMaximizable = ref(false);
  const isMinimizable = ref(false);
  const isAlwaysOnTop = ref(false);
  const isChangingState = ref(false);
  let disposed = false;
  let revision = 0;
  let unlistenResize: UnlistenFn | undefined;

  const syncMaximized = async (): Promise<void> => {
    const currentRevision = ++revision;
    const value = await appWindow.isMaximized();
    if (!disposed && currentRevision === revision) isMaximized.value = value;
  };
  const performAction = async (action: WindowAction): Promise<void> => {
    if (isChangingState.value || disposed) return;
    isChangingState.value = true;
    try {
      switch (action) {
        case 'minimize':
          if (isMinimizable.value) await appWindow.minimize();
          break;
        case 'maximize':
          if (isMaximizable.value) {
            await appWindow.toggleMaximize();
            await syncMaximized();
          }
          break;
        case 'isAlwaysOnTop': {
          const next = !isAlwaysOnTop.value;
          await appWindow.setAlwaysOnTop(next);
          isAlwaysOnTop.value = next;
          break;
        }
        case 'close':
          await appWindow.close();
      }
    } finally {
      isChangingState.value = false;
    }
  };

  onMounted(async () => {
    const results = await Promise.allSettled([
      syncMaximized(),
      Promise.all([appWindow.isMaximizable(), appWindow.isResizable()]).then(
        ([maximizable, resizable]) => {
          if (!disposed) isMaximizable.value = maximizable && resizable;
        }
      ),
      appWindow.isMinimizable().then((value) => {
        if (!disposed) isMinimizable.value = value;
      }),
      appWindow.isAlwaysOnTop().then((value) => {
        if (!disposed) isAlwaysOnTop.value = value;
      }),
      appWindow
        .onResized(() => {
          void syncMaximized().catch((error) =>
            console.warn('[Titlebar] window state sync failed:', error)
          );
        })
        .then((unlisten) => {
          if (disposed) unlisten();
          else unlistenResize = unlisten;
        })
    ]);
    for (const result of results) {
      if (result.status === 'rejected')
        console.warn(
          '[Titlebar] window controls initialization failed:',
          result.reason
        );
    }
  });
  onUnmounted(() => {
    disposed = true;
    ++revision;
    unlistenResize?.();
  });
  return {
    isMaximized,
    isMaximizable,
    isMinimizable,
    isAlwaysOnTop,
    isChangingState,
    performAction
  };
}
