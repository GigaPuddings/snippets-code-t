<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <header
      class="mb-2 flex shrink-0 items-center justify-between gap-3"
      data-tauri-drag-region
    >
      <div
        class="flex items-center gap-2 text-ui-caption font-medium text-ui-muted"
        data-tauri-drag-region
      >
        <BellRing width="16" height="16" aria-hidden="true" />
        <h2 class="m-0 text-ui-caption font-medium">
          {{ $t('notification.title') }}
        </h2>
      </div>
      <CustomButton
        unstyled
        class="ui-icon-button ui-action--muted !h-5 !w-5"
        :icon="CloseSmall"
        :disabled="loading"
        :aria-label="$t('notification.closeHint')"
        :title="$t('notification.closeHint')"
        @click="$emit('close')"
      />
    </header>
    <div
      class="min-h-0 flex-1 overflow-y-auto whitespace-pre-wrap break-words text-ui font-medium leading-relaxed text-ui-heading"
      :title="body"
    >
      {{ body }}
    </div>
  </div>
  <div class="mt-2 flex shrink-0 items-center justify-end gap-2">
    <CustomButton
      v-if="reminderTime"
      :loading="loading"
      size="small"
      @click="$emit('remind')"
    >
      {{ $t('notification.remindLater', { minutes: reminderTime }) }}
    </CustomButton>
    <CustomButton
      type="primary"
      size="small"
      :disabled="loading"
      @click="$emit('confirm')"
    >
      {{ $t('notification.confirm') }}
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import CloseSmall from '~icons/lucide/x';
import BellRing from '~icons/lucide/bell-ring';
import { CustomButton } from '@/components/UI';

defineProps<{
  body: string;
  reminderTime?: string;
  loading?: boolean;
}>();

defineEmits<{
  close: [];
  confirm: [];
  remind: [];
}>();
</script>
