<template>
  <CommonDialog
    v-model="visible"
    :title="attachment?.name ?? t('localAi.attachmentPreview')"
    width="min(920px, 88vw)"
    custom-class="local-ai-attachment-preview-dialog"
    :close-on-click-modal="true"
  >
    <div v-if="attachment?.dataUrl" class="attachment-preview-dialog__body">
      <img :src="attachment.dataUrl" :alt="attachment.name" />
      <div class="attachment-preview-dialog__meta">
        <strong>{{ attachment.name }}</strong>
        <span>{{ formatFileSize(attachment.size) }}</span>
      </div>
    </div>
  </CommonDialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CommonDialog } from '@/components/UI';
import {
  formatFileSize,
  type LocalAiAttachment
} from '@/utils/localAiAttachments';

const props = defineProps<{
  modelValue: boolean;
  attachment: LocalAiAttachment | null;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();

const { t } = useI18n();
const visible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
});
</script>

<style scoped lang="scss">
.attachment-preview-dialog__body {
  @apply grid min-h-0 gap-3;
}

.attachment-preview-dialog__body img {
  @apply block max-h-[72vh] max-w-full justify-self-center rounded-md object-contain;

  background: var(--chat-inset-bg);
}

.attachment-preview-dialog__meta {
  @apply flex min-w-0 items-center justify-between gap-3 text-xs;
}

.attachment-preview-dialog__meta strong {
  @apply min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-chat-strong;
}

.attachment-preview-dialog__meta span {
  @apply flex-shrink-0 text-chat-tertiary;
}

:global(.local-ai-attachment-preview-dialog) {
  @apply overflow-hidden rounded-md;
}
</style>
