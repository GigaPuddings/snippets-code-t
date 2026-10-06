import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';

const hasUpdate = ref(false);
let initialization: Promise<void> | null = null;

async function initializeUpdateAvailability(): Promise<void> {
  if (initialization) return initialization;

  initialization = (async (): Promise<void> => {
    const results = await Promise.allSettled([
      invoke<boolean>('get_update_status').then((available) => {
        hasUpdate.value = available;
      }),
      listen<boolean>('update-available', (event) => {
        hasUpdate.value = event.payload;
      })
    ]);

    for (const result of results) {
      if (result.status === 'rejected') {
        console.warn(
          '[UpdateAvailability] initialization failed:',
          result.reason
        );
      }
    }
  })();

  return initialization;
}

export function useUpdateAvailability(): {
  hasUpdate: Readonly<Ref<boolean>>;
  checkForUpdates: () => Promise<void>;
} {
  void initializeUpdateAvailability();

  const checkForUpdates = async (): Promise<void> => {
    await invoke(
      hasUpdate.value ? 'hotkey_update_command' : 'check_update_manually'
    );
  };

  return {
    hasUpdate: readonly(hasUpdate),
    checkForUpdates
  };
}
