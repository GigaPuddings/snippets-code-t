<template>
  <main class="notification-container">
    <ReminderContent
      :body="state.body"
      :reminderTime="state.reminderTime"
      @close="closeWindow"
      @confirm="closeWindow"
      @remind="handleRemind"
    />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Window } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import ReminderContent from './components/ReminderContent.vue';

interface State {
  label: string;
  body: string;
  reminderTime: string;
}

const appWindow = ref<Window | null>(null);
const route = useRoute();

const state = reactive<State>({
  label: '',
  body: '',
  reminderTime: ''
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
  const { label, body, reminder_time } = route.query as {
    label: string;
    body?: string;
    reminder_time?: string;
  };

  state.label = label ? decodeURIComponent(label) : '';
  state.body = body ? decodeURIComponent(body) : '';
  state.reminderTime = reminder_time || '';

  appWindow.value = new Window(state.label);

  // 首屏包含完整通知背景和内容，绘制后由原生窗口执行滑入动画。
  await appWindow.value.emit('notification-ready', { label: state.label });
});
</script>

<style scoped lang="scss">
.notification-container {
  @apply w-full h-full flex flex-col justify-between rounded-lg shadow-lg p-3;

  background: linear-gradient(to bottom right, #fff, #f8f9fa);
  border: 1px solid rgb(229 231 235 / 50%);

  .dark & {
    background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
    border-color: rgb(75 85 99 / 30%);
  }
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
  @apply text-base font-medium text-panel;
}

.notification-content {
  @apply flex-1;
}

.notification-body {
  @apply text-sm text-panel-text-secondary whitespace-nowrap overflow-hidden text-ellipsis;

  padding: 0 4px;
}

.notification-button-group {
  @apply flex justify-end gap-2 mt-1;

  .dark & {
    border-color: rgb(75 85 99 / 30%);
  }
}

.titlebar-button {
  @apply flex items-center justify-center rounded-full hover:bg-panel-hover-bg w-6 h-6 transition-all duration-200;
}

.close-icon {
  @apply text-panel-text-secondary;
}

:deep(.custom-button) {
  @apply transition-all duration-200 hover:shadow-md hover:translate-y-[-1px];
}

:deep(.remind-btn) {
  .app-icon {
    @apply mr-2;
  }
}
</style>
