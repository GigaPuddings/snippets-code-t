<template>
  <CommonDialog
    v-model="visible"
    :title="t('localAi.attachmentPreview')"
    width="min(1000px, calc(100vw - 40px))"
    custom-class="local-ai-attachment-preview-dialog"
    :close-on-click-modal="true"
  >
    <div v-if="attachment?.dataUrl" class="attachment-preview-dialog__body">
      <div class="attachment-preview-dialog__viewport">
        <img :src="attachment.dataUrl" :alt="attachment.name" />
      </div>
      <div class="attachment-preview-dialog__meta">
        <span class="attachment-preview-dialog__file">
          <Picture theme="outline" size="16" />
          <strong :title="attachment.name">{{ attachment.name }}</strong>
        </span>
        <span>{{ formatFileSize(attachment.size) }}</span>
      </div>
    </div>
  </CommonDialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Picture } from '@icon-park/vue-next';
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

.attachment-preview-dialog__viewport {
  @apply flex min-h-0 items-center justify-center overflow-hidden rounded-md border border-chat p-2;

  background: var(--chat-inset-bg);
}

.attachment-preview-dialog__viewport img {
  @apply block max-h-[calc(100vh-210px)] max-w-full rounded-md object-contain;
}

.attachment-preview-dialog__meta {
  @apply flex min-w-0 items-center justify-between gap-3 text-xs;
}

.attachment-preview-dialog__file {
  @apply flex min-w-0 items-center gap-2 text-chat-secondary;
}

.attachment-preview-dialog__file strong {
  @apply min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-chat-strong;
}

.attachment-preview-dialog__meta span {
  @apply flex-shrink-0 text-chat-tertiary;
}

:global(.app-dialog.local-ai-attachment-preview-dialog.el-dialog) {
  max-width: calc(100vw - 32px);
  overflow: hidden;
  border-radius: 0.375rem !important;
}

:global(
  .app-dialog.local-ai-attachment-preview-dialog.el-dialog .el-dialog__header
) {
  padding: 12px 16px !important;
  border-bottom: 1px solid var(--dialog-border);
}

:global(
  .app-dialog.local-ai-attachment-preview-dialog.el-dialog .el-dialog__body
) {
  padding: 14px 16px 16px !important;
}
</style>
