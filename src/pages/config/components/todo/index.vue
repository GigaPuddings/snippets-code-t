<template>
  <div class="todo-container">
    <div v-if="alarmCards.length > 0" class="grid grid-cols-3 gap-4">
      <!-- 代办提醒事项卡片 -->
      <div class="alarm-card" v-for="item in alarmCards" :key="item.id">
        <div :class="{ 'is-edit': isEdit }" @click="editAlarmCard(item)">
          <div class="time">{{ item.time }}</div>
          <div class="info">
            <div class="time-left">
              <remind theme="outline" size="14" :strokeWidth="3" />
              <span>{{ item.time_left }}</span>
            </div>
            <div class="title">{{ item.title }}</div>
          </div>
          <div class="weekdays">
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

    <!-- 右下角悬浮操作按钮 -->
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

    <!-- 添加提醒编辑弹框 -->
    <alarm-edit-dialog
      ref="alarmEditDialogRef"
      :edit-data="currentEditCard"
      @submit="handleAlarmSubmit"
      @delete="handleAlarmDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Write, Plus, CheckSmall, Delete, Remind } from '@icon-park/vue-next';
import AlarmEditDialog from './components/AlarmEditDialog.vue';
import { invoke } from '@tauri-apps/api/core';

const alarmCards = ref<AlarmCard[]>([]);
const weekdays = ref<string[]>(['一', '二', '三', '四', '五', '六', '日']);
const isEdit = ref(false);
const currentEditCard = ref<AlarmCard | null>(null);
const alarmEditDialogRef = ref();
let timer: number | null = null;
// 定时更新提醒列表
const startTimer = () => {
  // 计算到下一分钟的毫秒数
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

  // 先等待到下一分钟
  setTimeout(() => {
    fetchAlarmCards();
    // 然后每分钟更新一次
    timer = window.setInterval(fetchAlarmCards, 60000);
  }, delay);
};

// 获取提醒列表
const fetchAlarmCards = async () => {
  try {
    alarmCards.value = await invoke('get_alarm_cards');
  } catch (error) {
    console.error('Failed to fetch alarm cards:', error);
  }
};

// 编辑提醒事项卡片
const handleEdit = () => {
  if (alarmCards.value.length === 0) return;
  isEdit.value = !isEdit.value;
};

// 添加提醒事项卡片
const addAlarmCard = () => {
  if (isEdit.value) return;
  currentEditCard.value = null;
  alarmEditDialogRef.value?.open();
};

// 编辑提醒事项卡片
const editAlarmCard = (item: AlarmCard) => {
  if (isEdit.value) return;
  currentEditCard.value = item;
  alarmEditDialogRef.value?.open();
};

// 处理提醒提交
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
  } catch (error) {
    console.error('Failed to save alarm card:', error);
  }
};

// 处理提醒删除
const handleAlarmDelete = async (item: AlarmCard) => {
  try {
    await invoke('delete_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    console.error('Failed to delete alarm card:', error);
  }
};

// 删除提醒事项卡片
const deleteAlarmCard = async (item: AlarmCard) => {
  try {
    await invoke('delete_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    console.error('Failed to delete alarm card:', error);
  }
};

// 切换提醒状态
const toggleAlarmCard = async (item: AlarmCard) => {
  try {
    await invoke('toggle_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    console.error('Failed to toggle alarm card:', error);
  }
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
    @apply min-h-[180px] bg-white dark:bg-panel rounded-lg p-4 relative shadow-sm cursor-pointer select-none;

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
    }

    .weekdays {
      @apply flex gap-2 mb-4;

      .weekday {
        @apply text-sm text-gray-600 dark:text-white px-[8px] py-[4px] rounded-full shadow-sm;

        border: 1px solid #e5e7eb;
      }

      .active-weekday {
        @apply bg-[#4b94f8] text-white border-[#4b94f8];
      }
    }

    .toggle {
      @apply absolute top-4 right-4;
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
