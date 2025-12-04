<template>
  <div class="todo-container">
    <div v-if="alarmCards.length > 0" class="grid grid-cols-3 gap-4">
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
                每天
              </span>
              <span
                v-else-if="(item as any).alarm_type === 'SpecificDate'"
                class="type-badge specific"
              >
                {{ formatSpecificDates((item as any).specific_dates) }}
              </span>
              <span v-else class="type-badge weekly">每周</span>
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
            <span class="daily-text">每日重复</span>
          </div>

          <div
            v-else-if="(item as any).alarm_type === 'SpecificDate'"
            class="specific-date-info"
          >
            <span class="date-info">
              共 {{ ((item as any).specific_dates || []).length }} 个日期
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
      <div class="alarm-no-title">暂无设定提醒事项</div>
      <div class="alarm-no-description">点击右下角的"＋"以添加新提醒事项</div>
    </div>

    <div
      class="fixed bottom-6 right-6 rounded-md shadow-md border dark:border-none bg-panel p-1"
    >
      <div class="flex items-center justify-center gap-4">
        <div
          class="cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md p-[4px] leading-3"
          :class="{ 'opacity-50': alarmCards.length === 0 }"
          @click="handleEdit"
        >
          <write v-if="!isEdit" theme="outline" size="20" :strokeWidth="3" />
          <check-small v-else theme="outline" size="20" :strokeWidth="3" />
        </div>
        <div
          :class="[isEdit ? 'bg-gray-200' : '']"
          class="cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-md p-[2px] leading-3"
          @click="addAlarmCard"
        >
          <plus theme="outline" size="24" :strokeWidth="3" />
        </div>
      </div>
    </div>

    <alarm-edit-dialog
      ref="alarmEditDialogRef"
      :edit-data="currentEditCard"
      @submit="handleAlarmSubmit"
      @delete="deleteAlarmCard"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Write, Plus, CheckSmall, Delete, Remind } from '@icon-park/vue-next';
import AlarmEditDialog from './components/AlarmEditDialog.vue';
import { invoke } from '@tauri-apps/api/core';
import { ElMessage } from 'element-plus';

const alarmCards = ref<AlarmCard[]>([]);
const weekdays = ref<string[]>(['一', '二', '三', '四', '五', '六', '日']);
const isEdit = ref(false);

// 格式化多个日期显示
const formatSpecificDates = (dates: string[] | undefined) => {
  if (!dates || dates.length === 0) return '未设置';
  if (dates.length === 1) return dates[0];
  if (dates.length <= 3) return dates.join(', ');
  return `${dates.slice(0, 2).join(', ')} 等${dates.length}个日期`;
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
    ElMessage.error(`保存失败: ${error?.message || error}`);
  }
};

const deleteAlarmCard = async (item: AlarmCard) => {
  try {
    await invoke('delete_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    console.error('Failed to delete alarm card:', error);
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
  }
});
</script>

<style scoped lang="scss">
.todo-container {
  @apply w-full p-6 pt-1 rounded-md overflow-hidden;

  .alarm-card {
    @apply min-h-[180px] border dark:border-panel bg-white dark:bg-panel rounded-lg p-4 relative shadow-sm cursor-pointer select-none transition-all;

    &.disabled {
      @apply opacity-50 bg-gray-50 dark:bg-gray-800;
    }

    &.expired {
      @apply border-red-300 bg-red-50 dark:bg-red-900/20;

      .time {
        @apply text-red-600 dark:text-red-400;
      }
    }

    &.urgent {
      @apply border-orange-300 bg-orange-50 dark:bg-orange-900/20;

      .time {
        @apply text-orange-600 dark:text-orange-400;
      }
    }

    .time {
      @apply text-6xl font-bold mb-2;
    }

    .info {
      @apply mb-4;

      .title {
        @apply text-lg font-medium mb-1;
      }

      .time-left {
        @apply flex items-center gap-2 text-sm text-gray-500 mb-2;
      }

      .alarm-type {
        @apply mt-2;

        .type-badge {
          @apply text-xs px-2 py-1 rounded-full;

          &.daily {
            @apply bg-blue-100 text-blue-600;
          }

          &.weekly {
            @apply bg-green-100 text-green-600;
          }

          &.specific {
            @apply bg-purple-100 text-purple-600;
          }
        }
      }
    }

    .weekdays {
      @apply flex gap-2 mb-4;

      .weekday {
        @apply text-sm text-gray-600 dark:text-white px-[8px] py-[4px] rounded-full shadow-sm;

        border: 1px solid #e5e7eb;
      }

      .active-weekday {
        @apply bg-active text-white hover:bg-[--el-button-hover-bg-color];
      }
    }

    .toggle {
      @apply absolute top-4 right-4;
    }

    .daily-indicator {
      @apply flex gap-2 mb-4;

      .daily-text {
        @apply text-sm text-blue-600 dark:text-blue-400 px-[8px] py-[4px] rounded-full shadow-sm bg-blue-50 dark:bg-blue-900;
      }
    }

    .specific-date-info {
      @apply flex gap-2 mb-4;

      .date-info {
        @apply text-sm text-purple-600 dark:text-purple-400 px-[8px] py-[4px] rounded-full shadow-sm bg-purple-50 dark:bg-purple-900;
      }
    }
  }

  .is-edit {
    @apply opacity-65;
  }

  .alarm-no-data {
    @apply flex flex-col items-center justify-center h-full select-none;

    .alarm-no-title {
      @apply text-lg font-medium mb-2;
    }

    .alarm-no-description {
      @apply text-sm text-gray-500;
    }
  }
}
</style>
