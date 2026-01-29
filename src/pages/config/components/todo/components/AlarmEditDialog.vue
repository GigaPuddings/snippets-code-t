<template>
  <CommonDialog
    v-model="dialogVisible"
    :center="true"
    :show-close="false"
    width="28%"
  >
    <template #header>
      <div class="title-container">
        <span>{{ props.editData ? $t('alarm.editAlarm') : $t('alarm.addAlarm') }}</span>
        <delete
          v-if="props.editData"
          class="delete-icon"
          theme="outline"
          size="20"
          :strokeWidth="3"
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
              theme="outline"
              size="20"
              :strokeWidth="6"
              @click="adjustTime('hour', 1)"
            />
            <div class="time-value">{{ formData.hour }}</div>
            <down
              class="cursor-pointer"
              theme="outline"
              size="20"
              :strokeWidth="6"
              @click="adjustTime('hour', -1)"
            />
          </div>
          <div class="text-2xl font-bold select-none">:</div>
          <div class="time-unit">
            <up
              class="cursor-pointer"
              theme="outline"
              size="20"
              :strokeWidth="6"
              @click="adjustTime('minute', 1)"
            />
            <div class="time-value">{{ formData.minute }}</div>
            <down
              class="cursor-pointer"
              theme="outline"
              size="20"
              :strokeWidth="6"
              @click="adjustTime('minute', -1)"
            />
          </div>
        </div>
      </div>

      <div class="alarm-title-input  transparent-input">
        <edit-two theme="outline" size="20" :strokeWidth="3" />
        <el-tooltip effect="light" :content="$t('alarm.title')" placement="top">
          <el-input
            class="title-input"
            v-model="formData.title"
            :placeholder="$t('alarm.title')"
          />
        </el-tooltip>
      </div>

      <div class="alarm-type-selection">
        <span class="alarm-type-title">{{ $t('alarm.alarmType') }}</span>
        <div class="alarm-type-options">
          <div
            v-for="type in alarmTypes"
            :key="type.value"
            :class="[
              'type-item',
              formData.alarmType === type.value ? 'active' : ''
            ]"
            @click="formData.alarmType = type.value"
          >
            {{ type.label }}
          </div>
        </div>
      </div>

      <div
        v-if="formData.alarmType === 'SpecificDate'"
        class="alarm-date-picker"
      >
        <calendar theme="outline" size="20" :strokeWidth="3" />
        <el-config-provider :locale="zhCnLocale">
          <el-date-picker
            v-model="specificDatesValue"
            type="dates"
            :placeholder="$t('alarm.selectDates')"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            class="date-picker"
            @change="handleDateChange"
          />
        </el-config-provider>
      </div>

      <div v-if="formData.alarmType === 'Weekly'" class="alarm-repeat-section">
        <span class="repeat-section-title">{{ $t('alarm.repeatReminder') }}</span>
        <div class="repeat-section-weekdays">
          <div
            v-for="day in weekdays"
            :key="day"
            :class="[
              'day-item',
              formData.weekdays.includes(day) ? 'active' : ''
            ]"
            @click="toggleWeekday(day)"
          >
            {{ day }}
          </div>
        </div>
      </div>

      <div class="alarm-pause-time transparent-input">
        <alarm-clock theme="outline" size="20" :strokeWidth="3" />
        <el-tooltip effect="light" :content="$t('alarm.pauseTime')" placement="top">
          <el-select
            v-model="formData.reminderTime"
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
        <CustomButton type="primary" @click="handleSubmit">
          <save theme="outline" size="18" :strokeWidth="3" />
          <span class="ml-1">{{ $t('common.save') }}</span>
        </CustomButton>
        <CustomButton type="default" @click="dialogVisible = false">
          <close theme="outline" size="18" :strokeWidth="3" />
          <span class="ml-1">{{ $t('common.cancel') }}</span>
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import {
  Up,
  Down,
  Delete,
  EditTwo,
  AlarmClock,
  Save,
  Close,
  Calendar
} from '@icon-park/vue-next';
import dayjs from 'dayjs';
import { CustomButton, CommonDialog } from '@/components/UI';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const { t } = useI18n();
interface FormData {
  hour: string;
  minute: string;
  title: string;
  weekdays: string[];
  reminderTime: string;
  alarmType: 'Daily' | 'Weekly' | 'SpecificDate';
  specificDates: string[];
}

const props = defineProps<{
  editData?: AlarmCard | null;
}>();

const emit = defineEmits(['submit', 'delete']);
const dialogVisible = ref(false);
const weekdays = computed(() => [
  t('alarm.weekdays.mon'),
  t('alarm.weekdays.tue'),
  t('alarm.weekdays.wed'),
  t('alarm.weekdays.thu'),
  t('alarm.weekdays.fri'),
  t('alarm.weekdays.sat'),
  t('alarm.weekdays.sun')
]);

const alarmTypes = computed(() => [
  { label: t('alarm.daily'), value: 'Daily' as const },
  { label: t('alarm.weekly'), value: 'Weekly' as const },
  { label: t('alarm.specificDate'), value: 'SpecificDate' as const }
]);

const specificDatesValue = ref<string[]>([dayjs().format('YYYY-MM-DD')]);
const zhCnLocale = zhCn;

const handleDateChange = (dates: string[]) => {
  formData.value.specificDates = dates || [];
};
const now = dayjs();
const formData = ref<FormData>({
  hour: now.format('HH'),
  minute: now.format('mm'),
  title: '',
  weekdays: [],
  reminderTime: '5',
  alarmType: 'Weekly',
  specificDates: [now.format('YYYY-MM-DD')]
});

watch(
  () => props.editData,
  (newValue, _oldValue) => {
    if (newValue) {
      const specificDates = (newValue as any).specific_dates || [
        now.format('YYYY-MM-DD')
      ];
      formData.value = {
        hour: newValue.time.split(':')[0],
        minute: newValue.time.split(':')[1],
        title: newValue.title,
        weekdays: newValue.weekdays,
        reminderTime: newValue.reminder_time,
        alarmType: (newValue as any).alarm_type || 'Weekly',
        specificDates: Array.isArray(specificDates)
          ? specificDates
          : [specificDates]
      };
      specificDatesValue.value = Array.isArray(specificDates)
        ? specificDates
        : [specificDates];
    } else {
      const currentDate = [now.format('YYYY-MM-DD')];
      formData.value = {
        hour: now.format('HH'),
        minute: now.format('mm'),
        title: '',
        weekdays: [],
        reminderTime: '5',
        alarmType: 'Weekly',
        specificDates: currentDate
      };
      specificDatesValue.value = currentDate;
    }
  },
  {
    immediate: true
  }
);

watch(specificDatesValue, (newDates) => {
  if (newDates) {
    formData.value.specificDates = newDates;
  }
});
const handleDelete = () => {
  if (props.editData) {
    emit('delete', props.editData);
    dialogVisible.value = false;
  }
};

const adjustTime = (type: 'hour' | 'minute', delta: number) => {
  if (type === 'hour') {
    let newHour = parseInt(formData.value.hour) + delta;
    if (newHour > 23) newHour = 0;
    if (newHour < 0) newHour = 23;
    formData.value.hour = newHour.toString().padStart(2, '0');
  } else {
    let newMinute = parseInt(formData.value.minute) + delta;
    if (newMinute > 59) newMinute = 0;
    if (newMinute < 0) newMinute = 59;
    formData.value.minute = newMinute.toString().padStart(2, '0');
  }
};

const toggleWeekday = (day: string) => {
  const index = formData.value.weekdays.indexOf(day);
  if (index === -1) {
    formData.value.weekdays.push(day);
  } else {
    formData.value.weekdays.splice(index, 1);
  }
};

const validateForm = (): string | null => {
  if (!formData.value.title.trim()) {
    return t('alarm.titleRequired');
  }

  const hour = parseInt(formData.value.hour);
  const minute = parseInt(formData.value.minute);
  if (isNaN(hour) || hour < 0 || hour > 23) {
    return t('alarm.hourError');
  }
  if (isNaN(minute) || minute < 0 || minute > 59) {
    return t('alarm.minuteError');
  }

  if (
    formData.value.alarmType === 'Weekly' &&
    formData.value.weekdays.length === 0
  ) {
    return t('alarm.weekdayRequired');
  }

  if (formData.value.alarmType === 'SpecificDate') {
    if (
      !formData.value.specificDates ||
      formData.value.specificDates.length === 0
    ) {
      return t('alarm.dateRequired');
    }

    const now = dayjs();
    for (const dateStr of formData.value.specificDates) {
      const selectedDate = dayjs(dateStr);
      const selectedDateTime = selectedDate.hour(hour).minute(minute);

      if (selectedDateTime.isBefore(now)) {
        return t('alarm.dateExpired', { date: dateStr });
      }
    }
  }

  return null;
};

const handleSubmit = () => {
  const error = validateForm();
  if (error) {
    ElMessage.error(error);
    return;
  }

  let weeks: string[] = [];

  if (formData.value.alarmType === 'Weekly') {
    weeks =
      formData.value.weekdays.length > 0
        ? formData.value.weekdays
        : weekdays.value;
  } else if (formData.value.alarmType === 'Daily') {
    weeks = weekdays.value;
  }

  emit('submit', {
    id: props.editData?.id || '',
    time: `${formData.value.hour}:${formData.value.minute}`,
    title: formData.value.title.trim() || '消息提醒',
    weekdays: weeks,
    reminder_time: formData.value.reminderTime,
    is_active: true,
    alarm_type: formData.value.alarmType,
    specific_dates:
      formData.value.alarmType === 'SpecificDate'
        ? formData.value.specificDates
        : null
  });
  dialogVisible.value = false;
};

const resetForm = () => {
  const now = dayjs();
  const currentDates = [now.format('YYYY-MM-DD')];
  formData.value = {
    hour: now.format('HH'),
    minute: now.format('mm'),
    title: '',
    weekdays: [],
    reminderTime: '5',
    alarmType: 'Weekly',
    specificDates: currentDates
  };
  specificDatesValue.value = currentDates;
};

defineExpose({
  open: () => {
    if (props.editData) {
      const specificDate =
        (props.editData as any).specific_date || dayjs().format('YYYY-MM-DD');
      formData.value = {
        hour: props.editData.time.split(':')[0],
        minute: props.editData.time.split(':')[1],
        title: props.editData.title,
        weekdays: props.editData.weekdays,
        reminderTime: props.editData.reminder_time,
        alarmType: (props.editData as any).alarm_type || 'Weekly',
        specificDates: Array.isArray(specificDate)
          ? specificDate
          : [specificDate]
      };
      specificDatesValue.value = Array.isArray(specificDate)
        ? specificDate
        : [specificDate];
    } else {
      resetForm();
    }
    dialogVisible.value = true;
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
    @apply bg-gray-100;
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
    @apply text-sm text-gray-600 select-none;
  }

  .repeat-section-weekdays {
    @apply flex gap-2 mt-1 select-none;
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
    @apply text-sm text-gray-600 select-none;
  }

  .alarm-type-options {
    @apply flex gap-2 mt-1 select-none;
  }

  .type-item {
    @apply px-[8px] py-[4px] rounded-full cursor-pointer text-sm border transition-colors;

    &:hover {
      @apply bg-gray-100;
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
