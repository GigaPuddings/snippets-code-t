import {
  ref,
  onMounted,
  onActivated,
  onDeactivated,
  onUnmounted,
  type Ref
} from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { normalizeWeekdays } from '../../reminders';

export interface ReminderList {
  alarmCards: Ref<AlarmCard[]>;
  loading: Ref<boolean>;
  loadError: Ref<string>;
  fetchAlarmCards: () => Promise<void>;
}

export function useReminderList(): ReminderList {
  const alarmCards = ref<AlarmCard[]>([]);
  const loading = ref(false);
  const loadError = ref('');
  let active = false;
  let disposed = false;
  let revision = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let unlisten: UnlistenFn | undefined;
  const isCurrent = (request: number): boolean =>
    active && !disposed && request === revision;

  const fetchAlarmCards = async (): Promise<void> => {
    if (!active || disposed) return;
    const request = ++revision;
    loading.value = true;
    try {
      const cards = await invoke<AlarmCard[]>('get_alarm_cards');
      if (isCurrent(request)) {
        alarmCards.value = cards.map((card) => ({
          ...card,
          weekdays: normalizeWeekdays(card.weekdays)
        }));
        loadError.value = '';
      }
    } catch (error) {
      if (isCurrent(request)) loadError.value = String(error);
    } finally {
      if (request === revision) loading.value = false;
    }
  };

  const scheduleRefresh = (): void => {
    timer = setTimeout(
      () => {
        if (!active || disposed) return;
        void fetchAlarmCards();
        scheduleRefresh();
      },
      60_000 - (Date.now() % 60_000) + 100
    );
  };
  const activate = (): void => {
    if (active || disposed) return;
    active = true;
    void fetchAlarmCards();
    scheduleRefresh();
  };
  const deactivate = (): void => {
    active = false;
    revision += 1;
    loading.value = false;
    clearTimeout(timer);
  };

  onMounted(() => {
    activate();
    void listen('todo-reminders-updated', () => {
      if (active && !disposed) void fetchAlarmCards();
    })
      .then((stop) => {
        if (disposed) stop();
        else unlisten = stop;
      })
      .catch((error) =>
        console.error('Register reminder updates failed:', error)
      );
  });
  onActivated(activate);
  onDeactivated(deactivate);
  onUnmounted(() => {
    disposed = true;
    deactivate();
    unlisten?.();
  });

  return { alarmCards, loading, loadError, fetchAlarmCards };
}
