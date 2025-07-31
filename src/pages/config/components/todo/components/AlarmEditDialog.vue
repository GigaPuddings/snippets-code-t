<template>
  <el-dialog
    v-model="dialogVisible"
    draggable
    center
    :show-close="false"
    width="28%"
  >
    <template #header>
      <div class="title-container">
        <span>{{ props.editData ? '编辑提醒' : '新增提醒' }}</span>
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

      <div class="alarm-title-input">
        <edit-two theme="outline" size="20" :strokeWidth="3" />
        <el-tooltip effect="light" content="提醒标题" placement="top">
          <el-input
            class="title-input"
            v-model="formData.title"
            placeholder="提醒标题"
          />
        </el-tooltip>
      </div>

      <div class="alarm-type-selection">
        <span class="alarm-type-title">提醒类型</span>
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
            placeholder="选择多个日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            class="date-picker"
            @change="handleDateChange"
          />
        </el-config-provider>
      </div>

      <div v-if="formData.alarmType === 'Weekly'" class="alarm-repeat-section">
        <span class="repeat-section-title">重复提醒</span>
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

      <div class="alarm-pause-time">
        <alarm-clock theme="outline" size="20" :strokeWidth="3" />
        <el-tooltip effect="light" content="暂停时间" placement="top">
          <el-select
            v-model="formData.reminderTime"
            class="reminder-time-select"
            placeholder="提醒时间"
          >
            <el-option label="5 分钟" value="5" />
            <el-option label="10 分钟" value="10" />
            <el-option label="15 分钟" value="15" />
            <el-option label="30 分钟" value="30" />
          </el-select>
        </el-tooltip>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <CustomButton type="primary" @click="handleSubmit">
          <save theme="outline" size="18" :strokeWidth="3" />
          <span class="ml-1">保存</span>
        </CustomButton>
        <CustomButton type="default" @click="dialogVisible = false">
          <close theme="outline" size="18" :strokeWidth="3" />
          <span class="ml-1">取消</span>
        </CustomButton>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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
import { CustomButton } from '@/components/UI';
import { ElMessage } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
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
const weekdays = ref(['一', '二', '三', '四', '五', '六', '日']);

const alarmTypes = ref([
  { label: '每天', value: 'Daily' as const },
  { label: '每周', value: 'Weekly' as const },
  { label: '指定日期', value: 'SpecificDate' as const }
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
    return '请输入提醒标题';
  }

  const hour = parseInt(formData.value.hour);
  const minute = parseInt(formData.value.minute);
  if (isNaN(hour) || hour < 0 || hour > 23) {
    return '小时格式错误 (0-23)';
  }
  if (isNaN(minute) || minute < 0 || minute > 59) {
    return '分钟格式错误 (0-59)';
  }

  if (
    formData.value.alarmType === 'Weekly' &&
    formData.value.weekdays.length === 0
  ) {
    return '每周模式请至少选择一个星期';
  }

  if (formData.value.alarmType === 'SpecificDate') {
    if (
      !formData.value.specificDates ||
      formData.value.specificDates.length === 0
    ) {
      return '请选择具体日期';
    }

    const now = dayjs();
    for (const dateStr of formData.value.specificDates) {
      const selectedDate = dayjs(dateStr);
      const selectedDateTime = selectedDate.hour(hour).minute(minute);

      if (selectedDateTime.isBefore(now)) {
        return `日期 ${dateStr} 的时间不能早于当前时间`;
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
    created_at: new Date(),
    updated_at: new Date(),
    time_left: '',
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

.time-unit {
  @apply flex flex-col items-center;

  .time-value {
    @apply text-4xl font-bold my-2 select-none;
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
  @apply flex flex-col gap-3 p-1;
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
    @apply flex gap-2 mt-2 select-none;
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
    @apply flex gap-2 mt-2 select-none;
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
</style>
