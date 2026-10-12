<template>
  <CommonDialog
    v-model="dialogVisible"
    :show-close="false"
    :draggable="false"
    width="min(360px, calc(100vw - 32px))"
    custom-class="todo-edit-dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="!saving"
  >
    <template #header>
      <div class="flex items-center justify-between gap-3">
        <span class="text-ui font-semibold text-ui-heading">
          {{ props.editData ? $t('alarm.editAlarm') : $t('alarm.addAlarm') }}
        </span>
        <CustomButton
          unstyled
          class="ui-icon-button ui-action--muted"
          :icon="Close"
          :disabled="saving"
          :aria-label="$t('common.close')"
          @click="dialogVisible = false"
        />
      </div>
    </template>
    <form class="space-y-4" @submit.prevent="handleSubmit">
      <div>
        <label
          for="todo-reminder-title"
          class="mb-1.5 block text-ui-caption font-medium text-ui-main"
        >
          {{ $t('alarm.title') }}
        </label>
        <el-input
          id="todo-reminder-title"
          v-model="formData.title"
          :disabled="saving"
          :maxlength="200"
          :placeholder="$t('alarm.titlePlaceholder')"
          autofocus
        />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label
            for="todo-reminder-time"
            class="mb-1.5 block text-ui-caption font-medium text-ui-main"
          >
            {{ $t('alarm.timeLabel') }}
          </label>
          <el-config-provider :locale="datePickerLocale">
            <el-time-picker
              id="todo-reminder-time"
              v-model="selectedTime"
              format="HH:mm"
              value-format="HH:mm"
              :clearable="false"
              :disabled="saving"
              class="!w-full"
            />
          </el-config-provider>
        </div>
        <div>
          <label
            id="todo-snooze-label"
            class="mb-1.5 block text-ui-caption font-medium text-ui-main"
          >
            {{ $t('alarm.pauseTime') }}
          </label>
          <el-select
            v-model="formData.reminderTime"
            :disabled="saving"
            aria-labelledby="todo-snooze-label"
            class="w-full"
          >
            <el-option
              v-for="minutes in ['5', '10', '15', '30']"
              :key="minutes"
              :label="`${minutes} ${$t('alarm.minutes')}`"
              :value="minutes"
            />
          </el-select>
        </div>
      </div>
      <div>
        <span
          id="todo-repeat-label"
          class="mb-1.5 block text-ui-caption font-medium text-ui-main"
        >
          {{ $t('alarm.repeatReminder') }}
        </span>
        <div
          class="grid grid-cols-3 gap-1 rounded-ui bg-ui-card p-1"
          role="group"
          aria-labelledby="todo-repeat-label"
        >
          <button
            v-for="type in alarmTypes"
            :key="type.value"
            type="button"
            :disabled="saving"
            :aria-pressed="formData.alarmType === type.value"
            class="min-h-8 rounded-ui px-2 text-ui-caption transition-colors hover:bg-ui-card-hover disabled:opacity-50"
            :class="
              formData.alarmType === type.value
                ? 'bg-ui-selected font-medium text-ui-main'
                : 'text-ui-muted'
            "
            @click="formData.alarmType = type.value"
          >
            {{ type.label }}
          </button>
        </div>
      </div>
      <div v-if="formData.alarmType === 'Weekly'">
        <span
          id="todo-weekdays-label"
          class="mb-1.5 block text-ui-caption text-ui-muted"
        >
          {{ $t('alarm.weekdayPrompt') }}
        </span>
        <div
          class="grid grid-cols-7 gap-1"
          role="group"
          aria-labelledby="todo-weekdays-label"
        >
          <button
            v-for="day in weekdays"
            :key="day.value"
            type="button"
            :disabled="saving"
            :aria-pressed="formData.weekdays.includes(day.value)"
            class="h-8 rounded-ui text-ui-caption transition-colors hover:bg-ui-card-hover disabled:opacity-50"
            :class="
              formData.weekdays.includes(day.value)
                ? 'bg-ui-selected font-medium text-ui-main'
                : 'text-ui-muted'
            "
            @click="toggleWeekday(day.value)"
          >
            {{ day.label }}
          </button>
        </div>
      </div>
      <div v-else-if="formData.alarmType === 'SpecificDate'">
        <span
          id="todo-dates-label"
          class="mb-1.5 block text-ui-caption text-ui-muted"
        >
          {{ $t('alarm.selectDates') }}
        </span>
        <el-config-provider :locale="datePickerLocale">
          <el-date-picker
            v-model="formData.specificDates"
            :disabled="saving"
            :disabled-date="disabledDate"
            type="dates"
            :placeholder="$t('alarm.selectDates')"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            aria-labelledby="todo-dates-label"
            class="!w-full"
          />
        </el-config-provider>
      </div>
      <p class="m-0 text-ui-caption leading-relaxed text-ui-muted">
        {{
          $t(
            props.editData && reminderCompleted(props.editData)
              ? 'alarm.completedEditHint'
              : 'alarm.scheduleHint'
          )
        }}
      </p>
      <button
        type="submit"
        class="hidden"
        tabindex="-1"
        aria-hidden="true"
      ></button>
    </form>
    <template #footer>
      <div class="flex items-center justify-between gap-2">
        <CustomButton
          v-if="props.editData"
          unstyled
          class="ui-icon-button ui-action--muted text-[var(--el-color-danger)]"
          :icon="Delete"
          :disabled="saving"
          :aria-label="$t('common.delete')"
          @click="handleDelete"
        />
        <span v-else></span>
        <div class="flex items-center gap-2">
          <CustomButton :disabled="saving" @click="dialogVisible = false">
            {{ $t('common.cancel') }}
          </CustomButton>
          <CustomButton type="primary" :loading="saving" @click="handleSubmit">
            {{ $t('common.save') }}
          </CustomButton>
        </div>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import Delete from '~icons/lucide/trash-2';
import Close from '~icons/lucide/x';
import dayjs from 'dayjs';
import { CustomButton, CommonDialog } from '@/components/UI';
import { useI18n } from 'vue-i18n';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import {
  WEEKDAYS,
  createReminderDraft,
  reminderPayload,
  reminderCompleted
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
const selectedTime = computed({
  get: (): string => `${formData.value.hour}:${formData.value.minute}`,
  set: (value: string): void => {
    if (!value) return;
    const [hour, minute] = value.split(':');
    formData.value.hour = hour;
    formData.value.minute = minute;
  }
});
const disabledDate = (date: Date): boolean =>
  dayjs(date).isBefore(dayjs().startOf('day'));
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
