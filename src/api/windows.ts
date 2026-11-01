import { invoke } from '@tauri-apps/api/core';

/** Open and focus config through the native first-paint gate on every call. */
export async function activateConfigWindow(): Promise<void> {
  await invoke('activate_config_window_command');
}
