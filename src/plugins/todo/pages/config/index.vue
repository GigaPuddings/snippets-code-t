<template>
  <main class="plugin-config-page todo-container">
    <header class="plugin-config-header">
      <div class="flex min-w-0 items-center gap-2">
        <h1 class="plugin-config-title">{{ $t('plugins.todo.name') }}</h1>
        <span class="plugin-config-count">{{ alarmCards.length }}</span>
      </div>
      <div class="flex shrink-0 items-center gap-2">
        <el-tooltip
          effect="light"
          :content="isEdit ? $t('local.done') : $t('local.edit')"
          placement="bottom"
        >
          <CustomButton
            unstyled
            class="ui-icon-button ui-action--muted"
            :aria-label="isEdit ? $t('local.done') : $t('local.edit')"
            :aria-pressed="isEdit"
            :icon="isEdit ? CheckSmall : Write"
            :disabled="alarmCards.length === 0"
            @click="handleEdit"
          />
        </el-tooltip>
        <el-tooltip
          effect="light"
          :content="$t('local.add')"
          placement="bottom"
        >
          <CustomButton :icon="Plus" :disabled="isEdit" @click="addAlarmCard">
            {{ $t('alarm.addAlarm') }}
          </CustomButton>
        </el-tooltip>
      </div>
    </header>

    <div v-if="alarmCards.length > 0" class="alarm-grid">
      <div
        class="ui-card alarm-card"
        v-for="item in alarmCards"
        :key="item.id"
        :class="getCardClass(item)"
      >
        <button
          type="button"
          class="alarm-card-content"
          :class="{ 'is-edit': isEdit }"
          :disabled="isEdit"
          :aria-label="`${$t('alarm.editAlarm')}: ${item.title}`"
          @click="editAlarmCard(item)"
        >
          <div class="time">{{ item.time }}</div>
          <div class="info">
            <div class="time-left">
              <remind width="14" height="14" />
              <span>{{ item.time_left }}</span>
            </div>
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="alarm-type">
              <span
                v-if="(item as any).alarm_type === 'Daily'"
                class="type-badge"
              >
                {{ $t('alarm.daily') }}
              </span>
              <span
                v-else-if="(item as any).alarm_type === 'SpecificDate'"
                class="type-badge"
              >
                {{ formatSpecificDates((item as any).specific_dates) }}
              </span>
              <span v-else class="type-badge">
                {{ $t('alarm.weekly') }}
              </span>
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

          <div v-else-if="(item as any).alarm_type === 'Daily'">
            <span class="daily-text">{{ $t('alarm.dailyRepeat') }}</span>
          </div>

          <div v-else-if="(item as any).alarm_type === 'SpecificDate'">
            <span class="date-info">
              {{
                $t('alarm.totalDates', {
                  count: ((item as any).specific_dates || []).length
                })
              }}
            </span>
          </div>
        </button>
        <div class="toggle">
          <el-switch
            v-if="!isEdit"
            v-model="item.is_active"
            :aria-label="item.title"
            @change="toggleAlarmCard(item)"
          />
          <CustomButton
            v-else
            type="danger"
            text
            :icon="Delete"
            :aria-label="`${$t('local.delete')}: ${item.title}`"
            @click="deleteAlarmCard(item)"
          />
        </div>
      </div>
    </div>
    <section
      v-else
      class="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-4 pb-10 text-center"
    >
      <div
        class="mb-1 flex h-12 w-12 items-center justify-center rounded-ui-lg bg-ui-card text-ui-muted"
        aria-hidden="true"
      >
        <remind width="24" height="24" />
      </div>
      <h2 class="m-0 text-base font-medium text-ui-heading">
        {{ $t('alarm.noAlarms') }}
      </h2>
      <p class="m-0 max-w-sm text-ui text-ui-muted">
        {{ $t('alarm.noAlarmsDesc') }}
      </p>
      <CustomButton class="mt-2" :icon="Plus" @click="addAlarmCard">
        {{ $t('alarm.addAlarm') }}
      </CustomButton>
    </section>

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
      <div>
        {{ $t('alarm.deleteConfirm', { name: deleteTarget?.title || '' }) }}
      </div>
    </ConfirmDialog>
  </main>
</template>

<script setup lang="ts">
import Write from '~icons/lucide/square-pen';
import Plus from '~icons/lucide/plus';
import CheckSmall from '~icons/lucide/check';
import Delete from '~icons/lucide/trash-2';
import Remind from '~icons/lucide/bell';
import { useI18n } from 'vue-i18n';
import AlarmEditDialog from './components/AlarmEditDialog.vue';
import { invoke } from '@tauri-apps/api/core';
import { ConfirmDialog, CustomButton } from '@/components/UI';
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
  .alarm-grid {
    @apply grid min-h-0 gap-3 overflow-y-auto p-0.5;

    grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
  }

  .alarm-card {
    @apply relative min-w-0 select-none;

    &.disabled {
      @apply opacity-60;
    }

    &.expired {
      background: var(--el-color-danger-light-9);

      .time {
        color: var(--el-color-danger);
      }
    }

    &.urgent {
      background: var(--el-color-warning-light-9);

      .time {
        color: var(--el-color-warning);
      }
    }

    .alarm-card-content {
      @apply block h-full min-h-[160px] w-full rounded-ui border-0 bg-transparent p-4 text-left text-ui-main;

      &:focus-visible {
        outline: 2px solid var(--el-color-primary);
        outline-offset: -2px;
      }
    }

    .time {
      @apply mb-2 pr-14 text-2xl font-semibold tabular-nums text-ui-heading;
    }

    .info {
      @apply mb-3;

      .title {
        @apply mb-1 truncate text-ui font-medium text-ui-main;
      }

      .time-left {
        @apply mb-2 flex items-center gap-1.5 text-ui-caption text-ui-muted;
      }

      .alarm-type {
        @apply mt-2;
      }

      .type-badge {
        @apply text-ui-caption text-ui-muted;
      }
    }

    .weekdays {
      @apply flex flex-wrap gap-1;

      .weekday {
        @apply rounded-ui px-1.5 py-0.5 text-ui-caption text-ui-muted;
      }

      .active-weekday {
        @apply bg-ui-card-hover text-ui-main;
      }
    }

    .toggle {
      @apply absolute top-3 right-3;
    }

    .daily-text,
    .date-info {
      @apply text-ui-caption text-ui-muted;
    }
  }

  .is-edit {
    @apply opacity-65;
  }
}
</style>
