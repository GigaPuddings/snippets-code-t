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
        <span>{{ props.editData ? '编辑闹钟' : '新增闹钟' }}</span>
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
      <!-- 时间选择器 -->
      <div class="time-picker mb-6">
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

      <!-- 标题输入 -->
      <div class="alarm-title-input">
        <edit-two theme="outline" size="20" :strokeWidth="3" />
        <el-tooltip effect="light" content="闹钟名称" placement="top">
          <el-input
            class="title-input"
            v-model="formData.title"
            placeholder="闹钟标题"
          />
        </el-tooltip>
      </div>

      <!-- 重复选项 -->
      <div class="alarm-repeat-section">
        <span class="repeat-section-title">重复闹钟</span>
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

      <!-- 暂停时间 -->
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
        <el-button type="primary" @click="handleSubmit">
          <save theme="outline" size="18" :strokeWidth="3" />
          <span class="ml-1">保存</span>
        </el-button>
        <el-button @click="dialogVisible = false">
          <close theme="outline" size="18" :strokeWidth="3" />
          <span class="ml-1">取消</span>
        </el-button>
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
  Close
} from '@icon-park/vue-next';
import dayjs from 'dayjs';

interface FormData {
  hour: string;
  minute: string;
  title: string;
  weekdays: string[];
  reminderTime: string;
}

const props = defineProps<{
  editData?: AlarmCard | null;
}>();

const emit = defineEmits(['submit', 'delete']);
const dialogVisible = ref(false);
const weekdays = ref(['一', '二', '三', '四', '五', '六', '日']);

// 初始化表单数据，使用当前时间
const now = dayjs();
const formData = ref<FormData>({
  hour: now.format('HH'),
  minute: now.format('mm'),
  title: '',
  weekdays: [],
  reminderTime: '5'
});

watch(
  () => props.editData,
  (newValue, _oldValue) => {
    if (newValue) {
      formData.value = {
        hour: newValue.time.split(':')[0],
        minute: newValue.time.split(':')[1],
        title: newValue.title,
        weekdays: newValue.weekdays,
        reminderTime: newValue.reminder_time
      };
    } else {
      formData.value = {
        hour: now.format('HH'),
        minute: now.format('mm'),
        title: '',
        weekdays: [],
        reminderTime: '5'
      };
    }
  },
  {
    immediate: true
  }
);

// 删除闹钟
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

const handleSubmit = () => {
  const weeks =
    formData.value.weekdays.length > 0
      ? formData.value.weekdays
      : weekdays.value;
  emit('submit', {
    id: props.editData?.id || '',
    time: `${formData.value.hour}:${formData.value.minute}`,
    title: formData.value.title || '消息提醒',
    weekdays: weeks,
    reminder_time: formData.value.reminderTime,
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
    time_left: ''
  });
  dialogVisible.value = false;
};

// 重置表单数据
const resetForm = () => {
  const now = dayjs();
  formData.value = {
    hour: now.format('HH'),
    minute: now.format('mm'),
    title: '',
    weekdays: [],
    reminderTime: '5'
  };
};

// 对外暴露方法
defineExpose({
  open: () => {
    if (props.editData) {
      // 编辑模式，设置表单数据
      formData.value = {
        hour: props.editData.time.split(':')[0],
        minute: props.editData.time.split(':')[1],
        title: props.editData.title,
        weekdays: props.editData.weekdays,
        reminderTime: props.editData.reminder_time
      };
    } else {
      // 新增模式，重置表单
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
    @apply bg-[#4b94f8] text-white border-[#4b94f8];

    &:hover {
      @apply bg-[#3a7fd9];
    }
  }
}

.alarm-edit-form {
  @apply flex flex-col gap-5 p-1;
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
</style>
