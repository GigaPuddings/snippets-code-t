import { ref } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';

export function useStartupRecovery() {
  const failed = ref(false);
  const busy = ref(false);
  const actionError = ref(false);
  let active = false;
  let unlisten: UnlistenFn | undefined;
  let revision = 0;

  const stop = () => {
    active = false;
    unlisten?.();
    unlisten = undefined;
  };

  const start = async () => {
    if (active) return;
    active = true;
    try {
      const cleanup = await listen('config-startup-failed', () => {
        if (!active) return;
        revision++;
        failed.value = true;
      });
      if (!active) {
        cleanup();
        return;
      }
      unlisten = cleanup;
      const readingRevision = revision;
      const status = await invoke<boolean>('get_config_startup_failed');
      if (active && revision === readingRevision) failed.value = status;
    } catch {
      if (active) {
        failed.value = true;
        actionError.value = true;
      }
    }
  };

  const retry = async () => {
    if (busy.value || !failed.value) return;
    busy.value = true;
    actionError.value = false;
    failed.value = false;
    revision++;
    try {
      await invoke('retry_config_startup');
    } catch {
      failed.value = true;
      actionError.value = true;
    } finally {
      busy.value = false;
    }
  };

  const openLogs = async () => {
    actionError.value = false;
    try {
      await invoke('open_developer_log_dir');
    } catch {
      actionError.value = true;
    }
  };

  return { failed, busy, actionError, start, stop, retry, openLogs };
}
