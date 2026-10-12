import { ref, onMounted, onActivated, onUnmounted, type Ref } from 'vue';
import { invoke } from '@tauri-apps/api/core';

interface ReminderSoundControls {
  enabled: Ref<boolean>;
  ready: Ref<boolean>;
  busy: Ref<boolean>;
  previewing: Ref<boolean>;
  error: Ref<string>;
  load: () => Promise<void>;
  change: (value: boolean) => Promise<void>;
  preview: () => Promise<void>;
}

export function useReminderSound(): ReminderSoundControls {
  const enabled = ref(true);
  const ready = ref(false);
  const busy = ref(false);
  const previewing = ref(false);
  const error = ref('');
  let revision = 0;
  let disposed = false;
  const load = async (): Promise<void> => {
    if (disposed || busy.value) return;
    const request = ++revision;
    try {
      const value = await invoke<boolean>('get_todo_sound_enabled');
      if (!disposed && request === revision) {
        enabled.value = value;
        ready.value = true;
        error.value = '';
      }
    } catch (cause) {
      if (!disposed && request === revision) {
        ready.value = false;
        error.value = String(cause);
      }
    }
  };
  const change = async (value: boolean): Promise<void> => {
    if (!ready.value || busy.value || disposed) return;
    ++revision;
    busy.value = true;
    try {
      await invoke('set_todo_sound_enabled', { enabled: value });
      if (!disposed) {
        enabled.value = value;
        error.value = '';
      }
    } catch (cause) {
      if (!disposed) error.value = String(cause);
    } finally {
      busy.value = false;
    }
  };
  const preview = async (): Promise<void> => {
    if (
      !ready.value ||
      !enabled.value ||
      busy.value ||
      previewing.value ||
      disposed
    )
      return;
    previewing.value = true;
    try {
      await invoke('preview_todo_sound');
      if (!disposed) error.value = '';
    } catch (cause) {
      if (!disposed) error.value = String(cause);
    } finally {
      previewing.value = false;
    }
  };
  onMounted(load);
  onActivated(load);
  onUnmounted(() => {
    disposed = true;
    revision += 1;
  });
  return { enabled, ready, busy, previewing, error, load, change, preview };
}
