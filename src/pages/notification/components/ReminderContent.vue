<template>
  <div class="reminder-content">
    <div class="notification-header">
      <div class="header-left">
        <div class="icon-wrapper">
          <BellRing
            width="20"
            height="20"
            class="text-[var(--el-color-primary)]"
          />
        </div>
        <h2 class="title">{{ $t('notification.title') }}</h2>
      </div>
      <div class="titlebar-button" @click="$emit('close')">
        <CloseSmall class="close-icon" width="20" height="20" />
      </div>
    </div>
    <div class="notification-body">{{ body }}</div>
  </div>
  <div class="notification-button-group">
    <CustomButton type="primary" size="small" @click="$emit('confirm')">
      {{ $t('notification.confirm') }}
    </CustomButton>
    <CustomButton v-if="reminderTime" size="small" @click="$emit('remind')">
      <template #icon>
        <AlarmClock width="16" height="16" />
      </template>
      {{ $t('notification.remindLater', { minutes: reminderTime }) }}
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import CloseSmall from '~icons/lucide/x';
import BellRing from '~icons/lucide/bell-ring';
import AlarmClock from '~icons/lucide/alarm-clock';
import { CustomButton } from '@/components/UI';

defineProps<{
  body: string;
  reminderTime?: string;
}>();

defineEmits<{
  close: [];
  confirm: [];
  remind: [];
}>();
</script>

<style scoped lang="scss">
.notification-header {
  @apply flex justify-between items-center mb-2;

  padding-bottom: 2px;
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

.reminder-content {
  @apply flex-1;
}

.notification-body {
  @apply text-sm text-panel-text-secondary whitespace-nowrap overflow-hidden text-ellipsis;

  padding: 0 4px;
}

.notification-button-group {
  @apply flex justify-end gap-2 mt-1;
}

.titlebar-button {
  @apply flex items-center justify-center rounded-full hover:bg-panel-hover-bg w-6 h-6 transition-all duration-200;
}

.close-icon {
  @apply text-panel-text-secondary;
}
</style>
