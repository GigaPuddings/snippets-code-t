<template>
  <section class="summarize-section !mt-0 gap-6 py-3">
    <div class="summarize-label !basis-64">
      <div class="summarize-label-title">{{ title }}</div>
      <div class="summarize-label-desc">{{ description }}</div>
    </div>
    <div
      class="summarize-input-wrapper !basis-[22rem] !grow max-[1120px]:!w-full"
    >
      <button
        type="button"
        class="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-md border-0 bg-content px-3 text-left text-sm text-panel outline-none transition-colors hover:bg-hover focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-default disabled:text-content"
        :disabled="!path"
        :title="path ? t('dataManager.openDirectory') : undefined"
        @click="emit('open')"
      >
        <span class="min-w-0 flex-1 truncate">{{ path || placeholder }}</span>
        <FolderOpen
          v-if="path"
          theme="outline"
          size="16"
          class="shrink-0 text-content"
        />
      </button>
      <CustomButton
        v-if="actionLabel"
        type="primary"
        size="small"
        class="min-w-[5.5rem] shrink-0 whitespace-nowrap"
        :loading="loading"
        @click="emit('action')"
      >
        {{ actionLabel }}
      </CustomButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FolderOpen } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';

withDefaults(
  defineProps<{
    title: string;
    description: string;
    path: string;
    placeholder?: string;
    actionLabel?: string;
    loading?: boolean;
  }>(),
  {
    placeholder: '',
    actionLabel: '',
    loading: false
  }
);

const emit = defineEmits<{
  open: [];
  action: [];
}>();

const { t } = useI18n();
</script>
