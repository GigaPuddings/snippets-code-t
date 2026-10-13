<template>
  <main class="h-full w-full bg-transparent p-2 font-ui text-ui-main">
    <section
      class="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-ui-lg border border-ui bg-[var(--settings-surface)] p-3 shadow-toast"
    >
      <ReminderContent
        :body="state.body"
        :reminderTime="state.reminderTime"
        :loading="reminding"
        @close="closeWindow"
        @confirm="closeWindow"
        @remind="handleRemind"
      />
      <p
        v-if="remindError"
        class="my-1 shrink-0 truncate text-ui-caption text-[var(--el-color-danger)]"
        role="alert"
        :title="remindError"
      >
        {{ remindError }}
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import { useI18n } from 'vue-i18n';
import ReminderContent from './components/ReminderContent.vue';
import { notificationParams } from './params';

const { t } = useI18n();
const route = useRoute();
const appWindow = getCurrentWindow();
const state = reactive(notificationParams(route.query));
const reminding = ref(false);
const remindError = ref('');
const closeWindow = (): void => {
  if (!reminding.value) void appWindow.close();
};
const handleRemind = async (): Promise<void> => {
  if (reminding.value) return;
  reminding.value = true;
  remindError.value = '';
  try {
    await invoke('remind_notification_window', {
      title: state.body,
      reminderTime: state.reminderTime,
      alarmId: state.alarmId || null,
      requestId: appWindow.label
    });
    await appWindow.close();
  } catch (error) {
    remindError.value = `${t('alarm.snoozeFailed')}: ${String(error)}`;
  } finally {
    reminding.value = false;
  }
};
onMounted(async () => {
  await nextTick();
  await appWindow.emit('notification-ready', { label: appWindow.label });
});
</script>
