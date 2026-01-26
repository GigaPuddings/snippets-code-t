<template>
  <main class="notification-container" :class="{ 'fade-in': state.show }">
    <!-- 代办提醒通知 -->
    <ReminderContent
      v-if="state.type === 'reminder'"
      :body="state.body"
      :reminderTime="state.reminderTime"
      @close="closeWindow"
      @confirm="closeWindow"
      @remind="handleRemind"
    />
    
    <!-- 扫描进度通知 -->
    <ProgressContent
      v-else-if="state.type === 'progress'"
      @confirm="closeWindow"
      @autoClose="closeWindow"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Window } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import ReminderContent from './components/ReminderContent.vue';
import ProgressContent from './components/ProgressContent.vue';

interface State {
  label: string;
  type: 'reminder' | 'progress';
  body: string;
  reminderTime: string;
  show: boolean;
}

const appWindow = ref<Window | null>(null);
const route = useRoute();

const state = reactive<State>({
  label: '',
  type: 'reminder',
  body: '',
  reminderTime: '',
  show: false
});

const closeWindow = () => {
  appWindow.value?.close();
};

const handleRemind = async () => {
  await invoke('remind_notification_window', {
    title: state.body,
    reminderTime: state.reminderTime
  });
  closeWindow();
};

onMounted(async () => {
  // 获取路由参数
  const { label, type, body, reminder_time } = route.query as {
    label: string;
    type?: string;
    body?: string;
    reminder_time?: string;
  };

  state.label = label ? decodeURIComponent(label) : '';
  state.type = (type as 'reminder' | 'progress') || 'reminder';
  state.body = body ? decodeURIComponent(body) : '';
  state.reminderTime = reminder_time || '';

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
