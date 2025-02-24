<template>
  <main class="notification-container" :class="{ 'fade-in': show }">
    <div class="notification-content">
      <div class="notification-header">
        <div class="header-left">
          <div class="icon-wrapper">
            <bell-ring
              theme="filled"
              size="20"
              fill="#4096ff"
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
      <div class="notification-body">{{ body }}</div>
    </div>
    <div class="notification-button-group">
      <el-button
        type="primary"
        size="small"
        class="confirm-btn"
        @click="commonMethod('confirm')"
      >
        确认
      </el-button>
      <el-button
        v-if="reminderTime"
        type="info"
        size="small"
        class="remind-btn"
        @click="commonMethod('remind')"
      >
        <template #icon>
          <alarm-clock theme="outline" size="16" :strokeWidth="3" />
        </template>
        {{ reminderTime }}分钟后提醒
      </el-button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { CloseSmall, BellRing, AlarmClock } from '@icon-park/vue-next';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Window } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';

const appWindow = ref<Window | null>(null);

const route = useRoute();
const label = ref<string>('');
const body = ref<string>('');
const reminderTime = ref<string>('');
const show = ref(false);

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
        title: body.value,
        reminderTime: reminderTime.value
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
  const dataLabel = route.query.label as string;
  const dataBody = route.query.body as string;
  const dataReminderTime = route.query.reminder_time as string;

  label.value = decodeURIComponent(dataLabel);
  body.value = decodeURIComponent(dataBody);
  reminderTime.value = dataReminderTime;

  appWindow.value = new Window(label.value);

  // 添加淡入效果
  setTimeout(() => {
    show.value = true;
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

  /* border-bottom: 1px solid rgba(229, 231, 235, 0.5); */

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
  @apply text-sm text-gray-600 dark:text-gray-400 leading-relaxed;

  padding: 0 4px;
}

.notification-button-group {
  @apply flex justify-end gap-2 mt-3;

  /* padding-top: 8px; */

  /* border-top: 1px solid rgba(229, 231, 235, 0.5); */

  .dark & {
    border-color: rgb(75 85 99 / 30%);
  }
}

.titlebar-button {
  @apply flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700;

  width: 24px;
  height: 24px;
  transition: all 0.2s ease;
}

.close-icon {
  @apply text-gray-500 dark:text-gray-400;
}

:deep(.el-button) {
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    transform: translateY(-1px);
  }
}

:deep(.remind-btn) {
  .icon-park-icon {
    margin-right: 4px;
  }
}
</style>
