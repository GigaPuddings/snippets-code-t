<template>
  <main class="notification-container" :class="{ 'fade-in': state.show }">
    <div class="notification-content">
      <div class="notification-header">
        <div class="header-left">
          <div class="icon-wrapper">
            <bell-ring
              theme="filled"
              size="20"
              fill="#5d6dfd"
              :strokeWidth="2"
            />
          </div>
          <h2 class="title">代办提醒</h2>
        </div>
        <div class="titlebar-button" @click="commonMethod('close')">
          <close-small
            class="close-icon"
            theme="outline"
            size="20"
            :strokeWidth="2"
            strokeLinecap="butt"
          />
        </div>
      </div>
      <div class="notification-body">{{ state.body }}</div>
    </div>
    <div class="notification-button-group">
      <!-- <el-button
        type="primary"
        size="small"
        class="confirm-btn"
        @click="commonMethod('confirm')"
      >
        确认
      </el-button>
      <el-button
        v-if="state.reminderTime"
        type="info"
        size="small"
        class="remind-btn"
        @click="commonMethod('remind')"
      >
        <template #icon>
          <alarm-clock theme="outline" size="16" :strokeWidth="3" />
        </template>
{{ state.reminderTime }}分钟后提醒
</el-button> -->
      <CustomButton
        type="primary"
        size="small"
        class="confirm-btn"
        @click="commonMethod('confirm')"
      >
        确认
      </CustomButton>
      <CustomButton
        v-if="state.reminderTime"
        size="small"
        class="remind-btn"
        @click="commonMethod('remind')"
      >
        <template #icon>
          <alarm-clock theme="outline" size="16" :strokeWidth="3" />
        </template>
        {{ state.reminderTime }}分钟后提醒
      </CustomButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { CloseSmall, BellRing, AlarmClock } from '@icon-park/vue-next';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Window } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import CustomButton from '@/components/UI/CustomButton.vue';

interface State {
  label: string;
  body: string;
  reminderTime: string;
  show: boolean;
}

const appWindow = ref<Window | null>(null);

const route = useRoute();
const state = reactive<State>({
  label: '',
  body: '',
  reminderTime: '',
  show: false
});

const commonMethod = async (type: string) => {
  switch (type) {
    case 'close':
      appWindow.value?.close();
      break;
    case 'confirm':
      appWindow.value?.close();
      break;
    case 'remind':
      await invoke('remind_notification_window', {
        title: state.body,
        reminderTime: state.reminderTime
      });
      appWindow.value?.close();
      break;
    default:
      break;
  }
};

onMounted(async () => {
  console.log('route.query', route.query);

  // 获取路由参数
  const { label, body, reminder_time } = route.query as {
    label: string;
    body: string;
    reminder_time: string;
  };

  state.label = decodeURIComponent(label);
  state.body = decodeURIComponent(body);
  state.reminderTime = reminder_time;

  appWindow.value = new Window(state.label);

  // 添加淡入效果
  setTimeout(() => {
    state.show = true;
  }, 100);

  // 通知后端页面已准备好
  await appWindow.value.emit('notification-ready');
});
</script>

<style scoped lang="scss">
.notification-container {
  @apply w-full h-full flex flex-col justify-between rounded-lg shadow-lg p-3;

  background: linear-gradient(to bottom right, #fff, #f8f9fa);
  border: 1px solid rgb(229 231 235 / 50%);
  opacity: 0;
  transition: all 0.3s ease-in-out;

  .dark & {
    background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
    border-color: rgb(75 85 99 / 30%);
  }
}

.fade-in {
  opacity: 1;
}

.notification-header {
  @apply flex justify-between items-center mb-2;

  padding-bottom: 2px;

  .dark & {
    border-color: rgb(75 85 99 / 30%);
  }
}

.header-left {
  @apply flex items-center gap-2;
}

.icon-wrapper {
  @apply flex items-center justify-center rounded-full p-1;

  background: rgb(64 150 255 / 10%);
}

.title {
  @apply text-base font-medium text-gray-800 dark:text-gray-200;
}

.notification-content {
  @apply flex-1;
}

.notification-body {
  @apply text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis;

  padding: 0 4px;
}

.notification-button-group {
  @apply flex justify-end gap-2 mt-1;

  .dark & {
    border-color: rgb(75 85 99 / 30%);
  }
}

.titlebar-button {
  @apply flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 w-6 h-6 transition-all duration-200;
}

.close-icon {
  @apply text-gray-500 dark:text-gray-400;
}

:deep(.el-button) {
  @apply transition-all duration-200 hover:shadow-md hover:translate-y-[-1px];
}

:deep(.remind-btn) {
  .icon-park-icon {
    @apply mr-2;
  }
}
</style>
