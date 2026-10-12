<template>
  <CommonDialog
    v-model="dialogVisible"
    :center="true"
    :show-close="false"
    width="min(420px, calc(100vw - 32px))"
    class="alarm-edit-dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="!saving"
  >
    <template #header>
      <div class="title-container">
        <span>
          {{ props.editData ? $t('alarm.editAlarm') : $t('alarm.addAlarm') }}
        </span>
        <delete
          v-if="props.editData && !saving"
          class="delete-icon"
          width="20"
          height="20"
          @click="handleDelete"
        />
      </div>
    </template>
    <div class="alarm-edit-form">
      <div class="time-picker mb-2">
        <div class="flex justify-center items-center gap-4">
          <div class="time-unit">
            <up
              class="cursor-pointer"
              width="20"
              height="20"
              @click="adjustTime('hour', 1)"
            />
            <div class="time-value">{{ formData.hour }}</div>
            <down
              class="cursor-pointer"
              width="20"
              height="20"
              @click="adjustTime('hour', -1)"
            />
          </div>
          <div class="text-2xl font-bold select-none">:</div>
          <div class="time-unit">
            <up
              class="cursor-pointer"
              width="20"
              height="20"
              @click="adjustTime('minute', 1)"
            />
            <div class="time-value">{{ formData.minute }}</div>
            <down
              class="cursor-pointer"
              width="20"
              height="20"
              @click="adjustTime('minute', -1)"
            />
          </div>
        </div>
      </div>

      <div class="alarm-title-input transparent-input">
        <edit-two width="20" height="20" />
        <el-tooltip effect="light" :content="$t('alarm.title')" placement="top">
          <el-input
            class="title-input"
            v-model="formData.title"
            :disabled="saving"
            :maxlength="200"
            :placeholder="$t('alarm.title')"
          />
        </el-tooltip>
      </div>

      <div class="alarm-type-selection">
        <span class="alarm-type-title">{{ $t('alarm.alarmType') }}</span>
        <div class="alarm-type-options">
          <button
            type="button"
            :disabled="saving"
            :aria-pressed="formData.alarmType === type.value"
            v-for="type in alarmTypes"
            :key="type.value"
            :class="[
              'type-item',
              formData.alarmType === type.value ? 'active' : ''
            ]"
            @click="formData.alarmType = type.value"
          >
            {{ type.label }}
          </button>
        </div>
      </div>

      <div
        v-if="formData.alarmType === 'SpecificDate'"
        class="alarm-date-picker"
      >
        <calendar width="20" height="20" />
        <el-config-provider :locale="datePickerLocale">
          <el-date-picker
            v-model="formData.specificDates"
            :disabled="saving"
            type="dates"
            :placeholder="$t('alarm.selectDates')"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            class="date-picker"
          />
        </el-config-provider>
      </div>

      <div v-if="formData.alarmType === 'Weekly'" class="alarm-repeat-section">
        <span class="repeat-section-title">
          {{ $t('alarm.repeatReminder') }}
        </span>
        <div class="repeat-section-weekdays">
          <button
            type="button"
            :disabled="saving"
            :aria-pressed="formData.weekdays.includes(day.value)"
            v-for="day in weekdays"
            :key="day.value"
            :class="[
              'day-item',
              formData.weekdays.includes(day.value) ? 'active' : ''
            ]"
            @click="toggleWeekday(day.value)"
          >
            {{ day.label }}
          </button>
        </div>
      </div>

      <div class="alarm-pause-time transparent-input">
        <alarm-clock width="20" height="20" />
        <el-tooltip
          effect="light"
          :content="$t('alarm.pauseTime')"
          placement="top"
        >
          <el-select
            v-model="formData.reminderTime"
            :disabled="saving"
            class="reminder-time-select"
            :placeholder="$t('alarm.pauseTime')"
          >
            <el-option :label="`5 ${$t('alarm.minutes')}`" value="5" />
            <el-option :label="`10 ${$t('alarm.minutes')}`" value="10" />
            <el-option :label="`15 ${$t('alarm.minutes')}`" value="15" />
            <el-option :label="`30 ${$t('alarm.minutes')}`" value="30" />
          </el-select>
        </el-tooltip>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <CustomButton type="primary" :loading="saving" @click="handleSubmit">
          <save width="18" height="18" />
          <span class="ml-1">{{ $t('common.save') }}</span>
        </CustomButton>
        <CustomButton
          type="default"
          :disabled="saving"
          @click="dialogVisible = false"
        >
          <close width="18" height="18" />
          <span class="ml-1">{{ $t('common.cancel') }}</span>
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import Up from '~icons/lucide/chevron-up';
import Down from '~icons/lucide/chevron-down';
import Delete from '~icons/lucide/trash-2';
import EditTwo from '~icons/lucide/square-pen';
import AlarmClock from '~icons/lucide/alarm-clock';
import Save from '~icons/lucide/save';
import Close from '~icons/lucide/x';
import Calendar from '~icons/lucide/calendar';
import dayjs from 'dayjs';
import { CustomButton, CommonDialog } from '@/components/UI';
import { useI18n } from 'vue-i18n';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import {
  WEEKDAYS,
  createReminderDraft,
  reminderPayload
} from '../../../reminders';
import modal from '@/utils/modal';

const { t, locale } = useI18n();
const props = defineProps<{
  editData?: AlarmCard | null;
  save: (card: Partial<AlarmCard>) => Promise<void>;
}>();
const emit = defineEmits<{ delete: [card: AlarmCard] }>();
const dialogVisible = ref(false);
const saving = ref(false);
const formData = ref(createReminderDraft(null));
const datePickerLocale = computed(() =>
  locale.value.startsWith('zh') ? zhCn : en
);
const weekdays = computed(() =>
  WEEKDAYS.map((value) => ({
    value,
    label: t(`alarm.weekdays.${value.toLowerCase()}`)
  }))
);
const alarmTypes = computed(() => [
  { label: t('alarm.daily'), value: 'Daily' as const },
  { label: t('alarm.weekly'), value: 'Weekly' as const },
  { label: t('alarm.specificDate'), value: 'SpecificDate' as const }
]);

const handleDelete = (): void => {
  if (props.editData && !saving.value) emit('delete', props.editData);
};
const adjustTime = (type: 'hour' | 'minute', delta: number): void => {
  if (saving.value) return;
  const limit = type === 'hour' ? 24 : 60;
  const value = (Number(formData.value[type]) + delta + limit) % limit;
  formData.value[type] = value.toString().padStart(2, '0');
};
const toggleWeekday = (day: string): void => {
  const days = formData.value.weekdays;
  const index = days.indexOf(day);
  if (index < 0) days.push(day);
  else days.splice(index, 1);
};
const validateForm = (): string | null => {
  const draft = formData.value;
  if (!draft.title.trim()) return t('alarm.titleRequired');
  if (!/^\d{2}$/.test(draft.hour) || Number(draft.hour) > 23)
    return t('alarm.hourError');
  if (!/^\d{2}$/.test(draft.minute) || Number(draft.minute) > 59)
    return t('alarm.minuteError');
  if (draft.alarmType === 'Weekly' && draft.weekdays.length === 0)
    return t('alarm.weekdayRequired');
  if (draft.alarmType === 'SpecificDate') {
    if (!draft.specificDates?.length) return t('alarm.dateRequired');
    const time = `${draft.hour}:${draft.minute}`;
    for (const date of draft.specificDates) {
      const parsed = dayjs(`${date}T${time}:00`);
      const unchanged =
        props.editData?.specific_dates?.includes(date) &&
        props.editData.time === time;
      if (
        !parsed.isValid() ||
        parsed.format('YYYY-MM-DD') !== date ||
        (parsed.isBefore(dayjs()) && !unchanged)
      ) {
        return t('alarm.dateExpired', { date });
      }
    }
  }
  return null;
};
const handleSubmit = async (): Promise<void> => {
  if (saving.value) return;
  const error = validateForm();
  if (error) {
    modal.error(error);
    return;
  }
  saving.value = true;
  try {
    await props.save(reminderPayload(formData.value, props.editData ?? null));
    dialogVisible.value = false;
    modal.success(t('alarm.saveSuccess'));
  } catch (error) {
    modal.error(`${t('alarm.saveFailed')}: ${String(error)}`);
  } finally {
    saving.value = false;
  }
};
defineExpose({
  open: (): void => {
    formData.value = createReminderDraft(props.editData ?? null);
    dialogVisible.value = true;
  },
  close: (): void => {
    dialogVisible.value = false;
  }
});
</script>

<style scoped lang="scss">
.title-container {
  @apply flex items-center justify-between select-none;

  .delete-icon {
    @apply cursor-pointer text-red-500;
  }
}

.time-picker {
  @apply mb-1;
}

.time-unit {
  @apply flex flex-col items-center;

  .time-value {
    @apply text-4xl font-bold my-1 select-none;
  }
}

.day-item {
  @apply px-[8px] py-[4px] rounded-full cursor-pointer text-sm border transition-colors;

  &:hover {
    @apply bg-content;
  }

  &.active {
    @apply bg-active text-white hover:bg-[--el-button-hover-bg-color];
  }
}

.alarm-edit-form {
  @apply flex flex-col gap-2 py-2;
}

.alarm-title-input {
  @apply flex items-center gap-2;

  .title-input {
    @apply border rounded-md shadow-sm;
  }
}

.alarm-repeat-section {
  .repeat-section-title {
    @apply text-sm text-panel-text-secondary select-none;
  }

  .repeat-section-weekdays {
    @apply flex flex-wrap gap-2 mt-1 select-none;
  }
}

.alarm-pause-time {
  @apply flex items-center gap-2;

  .reminder-time-select {
    @apply border rounded-md shadow-sm;
  }
}

.alarm-type-selection {
  .alarm-type-title {
    @apply text-sm text-panel-text-secondary select-none;
  }

  .alarm-type-options {
    @apply flex flex-wrap gap-2 mt-1 select-none;
  }

  .type-item {
    @apply px-[8px] py-[4px] rounded-full cursor-pointer text-sm border transition-colors;

    &:hover {
      @apply bg-content;
    }

    &.active {
      @apply bg-active text-white hover:bg-[--el-button-hover-bg-color];
    }
  }
}

.alarm-date-picker {
  @apply flex items-center gap-2;

  .date-picker {
    @apply border rounded-md shadow-sm;
  }
}

.dialog-footer {
  @apply flex items-center justify-end gap-3;
}
</style>
