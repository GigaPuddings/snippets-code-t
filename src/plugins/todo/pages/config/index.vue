<template>
  <div class="todo-container">
    <div class="todo-toolbar">
      <div class="todo-toolbar__summary">
        <Remind theme="outline" size="18" :strokeWidth="3" />
        <span>{{ $t('plugins.todo.name') }}</span>
        <strong>{{ alarmCards.length }}</strong>
      </div>
      <div class="todo-toolbar__actions">
        <el-tooltip effect="light" :content="isEdit ? $t('local.done') : $t('local.edit')" placement="bottom">
          <button
            class="todo-icon-button"
            type="button"
            :class="{ active: isEdit }"
            :disabled="alarmCards.length === 0"
            @click="handleEdit"
          >
            <write v-if="!isEdit" theme="outline" size="18" :strokeWidth="3" />
            <check-small v-else theme="outline" size="18" :strokeWidth="3" />
          </button>
        </el-tooltip>
        <el-tooltip effect="light" :content="$t('local.add')" placement="bottom">
          <button
            class="todo-icon-button todo-icon-button--primary"
            type="button"
            :disabled="isEdit"
            @click="addAlarmCard"
          >
            <plus theme="outline" size="20" :strokeWidth="3" />
          </button>
        </el-tooltip>
      </div>
    </div>

    <div v-if="alarmCards.length > 0" class="alarm-grid">
      <div
        class="alarm-card"
        v-for="item in alarmCards"
        :key="item.id"
        :class="getCardClass(item)"
      >
        <div :class="{ 'is-edit': isEdit }" @click="editAlarmCard(item)">
          <div class="time">{{ item.time }}</div>
          <div class="info">
            <div class="time-left">
              <remind theme="outline" size="14" :strokeWidth="3" />
              <span>{{ item.time_left }}</span>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="alarm-type">
              <span
                v-if="(item as any).alarm_type === 'Daily'"
                class="type-badge daily"
              >
                {{ $t('alarm.daily') }}
              </span>
              <span
                v-else-if="(item as any).alarm_type === 'SpecificDate'"
                class="type-badge specific"
              >
                {{ formatSpecificDates((item as any).specific_dates) }}
              </span>
              <span v-else class="type-badge weekly">{{ $t('alarm.weekly') }}</span>
            </div>
          </div>
          <div v-if="(item as any).alarm_type === 'Weekly'" class="weekdays">
            <template v-for="weekday in weekdays" :key="weekday">
              <span
                :class="[
                  'weekday',
                  item.weekdays.includes(weekday) ? 'active-weekday' : ''
                ]"
              >
                {{ weekday }}
              </span>
            </template>
          </div>

          <div
            v-else-if="(item as any).alarm_type === 'Daily'"
            class="daily-indicator"
          >
            <span class="daily-text">{{ $t('alarm.dailyRepeat') }}</span>
          </div>

          <div
            v-else-if="(item as any).alarm_type === 'SpecificDate'"
            class="specific-date-info"
          >
            <span class="date-info">
              {{ $t('alarm.totalDates', { count: ((item as any).specific_dates || []).length }) }}
            </span>
          </div>
        </div>
        <div class="toggle">
          <el-switch
            v-if="!isEdit"
            v-model="item.is_active"
            @change="toggleAlarmCard(item)"
          />
          <delete
            v-else
            class="cursor-pointer text-red-500"
            theme="outline"
            size="20"
            :strokeWidth="3"
            @click="deleteAlarmCard(item)"
          />
        </div>
      </div>
    </div>
    <div v-else class="alarm-no-data">
      <remind theme="outline" size="28" :strokeWidth="3" />
      <div class="alarm-no-title">{{ $t('alarm.noAlarms') }}</div>
      <div class="alarm-no-description">{{ $t('alarm.noAlarmsDesc') }}</div>
    </div>

    <alarm-edit-dialog
      ref="alarmEditDialogRef"
      :edit-data="currentEditCard"
      @submit="handleAlarmSubmit"
      @delete="deleteAlarmCard"
    />

    <!-- 删除确认对话框 -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      @confirm="confirmDelete"
    >
      <div>{{ $t('alarm.deleteConfirm', { name: deleteTarget?.title || '' }) }}</div>
    </ConfirmDialog>
  </div>
</template>

<script setup lang="ts">
import { Write, Plus, CheckSmall, Delete, Remind } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import AlarmEditDialog from './components/AlarmEditDialog.vue';
import { invoke } from '@tauri-apps/api/core';
import { ConfirmDialog } from '@/components/UI';
import modal from '@/utils/modal';

const { t } = useI18n();

const alarmCards = ref<AlarmCard[]>([]);
const showDeleteDialog = ref(false);
const deleteTarget = ref<AlarmCard | null>(null);
const weekdays = computed(() => [
  t('alarm.weekdays.mon'),
  t('alarm.weekdays.tue'),
  t('alarm.weekdays.wed'),
  t('alarm.weekdays.thu'),
  t('alarm.weekdays.fri'),
  t('alarm.weekdays.sat'),
  t('alarm.weekdays.sun')
]);
const isEdit = ref(false);

// 格式化多个日期显示
const formatSpecificDates = (dates: string[] | undefined) => {
  if (!dates || dates.length === 0) return t('alarm.notSet');
  if (dates.length === 1) return dates[0];
  if (dates.length <= 3) return dates.join(', ');
  return t('alarm.totalDates', { count: dates.length });
};
const currentEditCard = ref<AlarmCard | null>(null);
const alarmEditDialogRef = ref();
let timer: number | null = null;

const startTimer = () => {
  const now = new Date();
  const nextMinute = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes() + 1,
    0,
    0
  );
  const delay = nextMinute.getTime() - now.getTime();

  setTimeout(() => {
    fetchAlarmCards();
    timer = window.setInterval(fetchAlarmCards, 60000);
  }, delay);
};

const fetchAlarmCards = async () => {
  try {
    alarmCards.value = await invoke('get_alarm_cards');
  } catch (error) {
    console.error('Failed to fetch alarm cards:', error);
  }
};

const handleEdit = () => {
  if (alarmCards.value.length === 0) return;
  isEdit.value = !isEdit.value;
};

const addAlarmCard = () => {
  if (isEdit.value) return;
  currentEditCard.value = null;
  alarmEditDialogRef.value?.open();
};

const editAlarmCard = (item: AlarmCard) => {
  if (isEdit.value) return;
  currentEditCard.value = item;
  alarmEditDialogRef.value?.open();
};

const handleAlarmSubmit = async (formData: Partial<AlarmCard>) => {
  try {
    if (currentEditCard.value) {
      await invoke('update_alarm_card', {
        card: { ...currentEditCard.value, ...formData }
      });
    } else {
      await invoke('add_alarm_card', { card: formData });
    }
    await fetchAlarmCards();
  } catch (error: any) {
    console.error('Failed to save alarm card:', error);
    modal.error(`${t('alarm.saveFailed')}: ${error?.message || error}`);
  }
};

const deleteAlarmCard = (item: AlarmCard) => {
  deleteTarget.value = item;
  showDeleteDialog.value = true;
};

const confirmDelete = async () => {
  if (!deleteTarget.value) return;
  
  try {
    await invoke('delete_alarm_card', { id: deleteTarget.value.id });
    modal.success(t('alarm.deleteSuccess'));
    await fetchAlarmCards();
    showDeleteDialog.value = false;
    deleteTarget.value = null;
  } catch (error: any) {
    console.error('Failed to delete alarm card:', error);
    modal.error(`${t('alarm.deleteFailed')}: ${error?.message || error}`);
  }
};

const toggleAlarmCard = async (item: AlarmCard) => {
  try {
    await invoke('toggle_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    console.error('Failed to toggle alarm card:', error);
  }
};

const getCardClass = (item: AlarmCard) => {
  const classes = [];

  if (!item.is_active) {
    classes.push('disabled');
  }

  if ((item as any).alarm_type === 'SpecificDate') {
    const specificDate = (item as any).specific_date;
    if (specificDate) {
      const date = new Date(specificDate);
      const now = new Date();
      const [hour, minute] = item.time.split(':').map(Number);
      const targetDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hour,
        minute
      );

      if (targetDateTime < now) {
        classes.push('expired');
      } else {
        const timeDiff = targetDateTime.getTime() - now.getTime();
        if (timeDiff <= 60 * 60 * 1000) {
          classes.push('urgent');
        }
      }
    }
  }

  return classes;
};

onMounted(() => {
  fetchAlarmCards();
  startTimer();
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  showDeleteDialog.value = false;
  deleteTarget.value = null;
  currentEditCard.value = null;
  alarmEditDialogRef.value?.close?.();
});
</script>

<style scoped lang="scss">
.todo-container {
  @apply w-full h-full flex flex-col overflow-hidden p-4 pt-2;
  color: var(--categories-text-color);

  .todo-toolbar {
    @apply flex items-center justify-between gap-3 px-3 py-2 mb-3 rounded-md bg-panel border border-panel;

    .todo-toolbar__summary {
      @apply flex items-center gap-2 min-w-0 text-sm font-semibold text-panel;

      strong {
        @apply inline-flex items-center justify-center min-w-6 h-6 px-1 rounded-md text-xs;
        color: var(--search-result-accent);
        background: var(--search-card-bg);
      }
    }

    .todo-toolbar__actions {
      @apply flex items-center gap-2;
    }

    .todo-icon-button {
      @apply inline-flex w-8 h-8 items-center justify-center rounded-md border border-transparent text-panel-text-secondary cursor-pointer transition-colors;
      background: transparent;

      &:hover:not(:disabled),
      &.active {
        color: var(--search-result-accent);
        background: var(--search-result-active);
        border-color: var(--search-result-active-border);
      }

      &:disabled {
        @apply cursor-not-allowed opacity-45;
      }
    }

    .todo-icon-button--primary {
      color: var(--search-result-accent);
      background: var(--search-card-bg);
      border-color: var(--search-result-active-border);
    }
  }

  .alarm-grid {
    @apply grid grid-cols-3 gap-3 overflow-y-auto pr-1;
  }

  .alarm-card {
    @apply min-h-[150px] border border-panel bg-panel rounded-md p-3 relative cursor-pointer select-none transition-colors;

    &:hover {
      background: var(--search-result-active);
      border-color: var(--search-result-active-border);
    }

    &.disabled {
      @apply opacity-60 bg-content;
    }

    &.expired {
      border-color: rgba(239, 68, 68, 0.35);
      background: rgba(239, 68, 68, 0.08);

      .time {
        @apply text-red-600 dark:text-red-400;
      }
    }

    &.urgent {
      border-color: rgba(245, 158, 11, 0.4);
      background: rgba(245, 158, 11, 0.1);

      .time {
        @apply text-orange-600 dark:text-orange-400;
      }
    }

    .time {
      @apply text-4xl font-bold mb-2;
      color: var(--categories-text-color);
    }

    .info {
      @apply mb-3;

      .title {
        @apply text-sm font-semibold mb-1 truncate;
        color: var(--categories-text-color);
      }

      .time-left {
        @apply flex items-center gap-2 text-xs text-panel-text-secondary mb-2;
      }

      .alarm-type {
        @apply mt-2;

        .type-badge {
          @apply text-xs px-2 py-1 rounded-md border;

          &.daily {
            color: #2563eb;
            background: rgba(59, 130, 246, 0.1);
            border-color: rgba(59, 130, 246, 0.18);
          }

          &.weekly {
            color: #16a34a;
            background: rgba(34, 197, 94, 0.1);
            border-color: rgba(34, 197, 94, 0.18);
          }

          &.specific {
            color: #7c3aed;
            background: rgba(124, 58, 237, 0.1);
            border-color: rgba(124, 58, 237, 0.18);
          }
        }
      }
    }

    .weekdays {
      @apply flex flex-wrap gap-1.5 mb-3;

      .weekday {
        @apply text-xs text-panel px-2 py-1 rounded-md border border-panel;
        background: var(--search-card-bg);
      }

      .active-weekday {
        color: var(--search-result-accent);
        background: var(--search-result-active);
        border-color: var(--search-result-active-border);
      }
    }

    .toggle {
      @apply absolute top-3 right-3;
    }

    .daily-indicator {
      @apply flex gap-2 mb-4;

      .daily-text {
        @apply text-xs text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md border;
        background: rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.18);
      }
    }

    .specific-date-info {
      @apply flex gap-2 mb-4;

      .date-info {
        @apply text-xs text-purple-600 dark:text-purple-400 px-2 py-1 rounded-md border;
        background: rgba(124, 58, 237, 0.1);
        border-color: rgba(124, 58, 237, 0.18);
      }
    }
  }

  .is-edit {
    @apply opacity-65;
  }

  .alarm-no-data {
    @apply flex flex-col items-center justify-center flex-1 select-none rounded-md border border-panel bg-panel;

    .alarm-no-title {
      @apply text-lg font-medium mb-2;
    }

    .alarm-no-description {
      @apply text-sm text-panel-text-secondary;
    }
  }
}
</style>
