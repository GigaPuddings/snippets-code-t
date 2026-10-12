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
            :disabled="alarmCards.length === 0 || saveBusy || deleteBusy"
            @click="handleEdit"
          />
        </el-tooltip>
        <el-tooltip
          effect="light"
          :content="$t('local.add')"
          placement="bottom"
        >
          <CustomButton
            :icon="Plus"
            :disabled="isEdit || saveBusy"
            @click="addAlarmCard"
          >
            {{ $t('alarm.addAlarm') }}
          </CustomButton>
        </el-tooltip>
      </div>
    </header>

    <section
      v-if="loadError"
      class="mb-3 flex items-center justify-between gap-3 rounded-ui border border-ui p-3 text-ui-muted"
      role="alert"
    >
      <span class="min-w-0 truncate" :title="loadError">
        {{ $t('alarm.loadFailed') }}
      </span>
      <CustomButton :loading="loading" @click="fetchAlarmCards">
        {{ $t('alarm.retry') }}
      </CustomButton>
    </section>
    <div v-if="alarmCards.length > 0" class="alarm-grid" :aria-busy="loading">
      <div
        class="ui-card alarm-card"
        v-for="item in alarmCards"
        :key="item.id"
        :class="reminderStatus(item)"
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
              <span>{{ reminderCountdown(item, t) }}</span>
            </div>
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="alarm-type">
              <span v-if="item.alarm_type === 'Daily'" class="type-badge">
                {{ $t('alarm.daily') }}
              </span>
              <span
                v-else-if="item.alarm_type === 'SpecificDate'"
                class="type-badge"
              >
                {{ formatSpecificDates(item.specific_dates) }}
              </span>
              <span v-else class="type-badge">
                {{ $t('alarm.weekly') }}
              </span>
            </div>
          </div>
          <div v-if="item.alarm_type === 'Weekly'" class="weekdays">
            <template v-for="weekday in weekdays" :key="weekday.value">
              <span
                :class="[
                  'weekday',
                  item.weekdays.includes(weekday.value) ? 'active-weekday' : ''
                ]"
              >
                {{ weekday.label }}
              </span>
            </template>
          </div>

          <div v-else-if="item.alarm_type === 'Daily'">
            <span class="daily-text">{{ $t('alarm.dailyRepeat') }}</span>
          </div>

          <div v-else-if="item.alarm_type === 'SpecificDate'">
            <span class="date-info">
              {{
                $t('alarm.totalDates', {
                  count: (item.specific_dates || []).length
                })
              }}
            </span>
          </div>
        </button>
        <div class="toggle">
          <el-switch
            v-if="!isEdit"
            :model-value="item.is_active"
            :disabled="pendingToggles.has(item.id)"
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
        {{
          $t(
            loading
              ? 'common.loading'
              : loadError
                ? 'alarm.loadFailed'
                : 'alarm.noAlarms'
          )
        }}
      </h2>
      <p
        v-if="!loading && !loadError"
        class="m-0 max-w-sm text-ui text-ui-muted"
      >
        {{ $t('alarm.noAlarmsDesc') }}
      </p>
      <CustomButton
        v-if="!loading && !loadError"
        class="mt-2"
        :icon="Plus"
        @click="addAlarmCard"
      >
        {{ $t('alarm.addAlarm') }}
      </CustomButton>
    </section>

    <alarm-edit-dialog
      ref="alarmEditDialogRef"
      :edit-data="currentEditCard"
      :save="handleAlarmSubmit"
      @delete="deleteAlarmCard"
    />

    <!-- 删除确认对话框 -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      :loading="deleteBusy"
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
import { WEEKDAYS, reminderStatus, reminderCountdown } from '../../reminders';
import { useReminderList } from './useReminderList';

const { t } = useI18n();

const { alarmCards, loading, loadError, fetchAlarmCards } = useReminderList();
const showDeleteDialog = ref(false);
const deleteTarget = ref<AlarmCard | null>(null);
const saveBusy = ref(false);
const deleteBusy = ref(false);
const pendingToggles = ref(new Set<string>());
const weekdays = computed(() =>
  WEEKDAYS.map((value) => ({
    value,
    label: t(`alarm.weekdays.${value.toLowerCase()}`)
  }))
);
const isEdit = ref(false);

// 格式化多个日期显示
const formatSpecificDates = (dates: string[] | null | undefined): string => {
  if (!dates || dates.length === 0) return t('alarm.notSet');
  if (dates.length === 1) return dates[0];
  if (dates.length <= 3) return dates.join(', ');
  return t('alarm.totalDates', { count: dates.length });
};
const currentEditCard = ref<AlarmCard | null>(null);
const alarmEditDialogRef = ref<InstanceType<typeof AlarmEditDialog> | null>(
  null
);
watch(
  () => alarmCards.value.length,
  (count) => {
    if (!count) isEdit.value = false;
  }
);
const handleEdit = (): void => {
  if (alarmCards.value.length === 0) return;
  isEdit.value = !isEdit.value;
};

const addAlarmCard = async (): Promise<void> => {
  if (isEdit.value || saveBusy.value || deleteBusy.value) return;
  currentEditCard.value = null;
  await nextTick();
  alarmEditDialogRef.value?.open();
};

const editAlarmCard = async (item: AlarmCard): Promise<void> => {
  if (isEdit.value || saveBusy.value || deleteBusy.value) return;
  currentEditCard.value = item;
  await nextTick();
  alarmEditDialogRef.value?.open();
};

const handleAlarmSubmit = async (
  formData: Partial<AlarmCard>
): Promise<void> => {
  if (saveBusy.value) return;
  saveBusy.value = true;
  try {
    if (currentEditCard.value) {
      await invoke('update_alarm_card', {
        card: { ...currentEditCard.value, ...formData }
      });
    } else {
      await invoke('add_alarm_card', { card: formData });
    }
    await fetchAlarmCards();
  } finally {
    saveBusy.value = false;
  }
};

const deleteAlarmCard = (item: AlarmCard): void => {
  if (deleteBusy.value) return;
  deleteTarget.value = item;
  showDeleteDialog.value = true;
};

const confirmDelete = async (): Promise<void> => {
  if (!deleteTarget.value || deleteBusy.value) return;
  deleteBusy.value = true;

  try {
    await invoke('delete_alarm_card', { id: deleteTarget.value.id });
    modal.success(t('alarm.deleteSuccess'));
    await fetchAlarmCards();
    showDeleteDialog.value = false;
    deleteTarget.value = null;
    alarmEditDialogRef.value?.close();
  } catch (error) {
    console.error('Failed to delete alarm card:', error);
    modal.error(`${t('alarm.deleteFailed')}: ${String(error)}`);
  } finally {
    deleteBusy.value = false;
  }
};

const toggleAlarmCard = async (item: AlarmCard): Promise<void> => {
  if (pendingToggles.value.has(item.id)) return;
  pendingToggles.value.add(item.id);
  try {
    await invoke('toggle_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    modal.error(`${t('alarm.toggleFailed')}: ${String(error)}`);
  } finally {
    pendingToggles.value.delete(item.id);
  }
};

const closePageDialogs = (): void => {
  showDeleteDialog.value = false;
  deleteTarget.value = null;
  currentEditCard.value = null;
  alarmEditDialogRef.value?.close?.();
};
onDeactivated(closePageDialogs);
onUnmounted(closePageDialogs);
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
