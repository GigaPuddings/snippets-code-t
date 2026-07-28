<template>
  <section class="summarize-section !mt-0 gap-6 py-3">
    <div class="summarize-label !basis-64">
      <div class="summarize-label-title">{{ title }}</div>
      <div class="summarize-label-desc">{{ description }}</div>
    </div>
    <div
      class="summarize-input-wrapper !basis-[22rem] !grow !gap-2 max-[1120px]:!w-full"
    >
      <CustomButton
        v-if="secondaryLabel"
        size="small"
        plain
        :loading="secondaryLoading"
        @click="emit('secondary')"
      >
        {{ secondaryLabel }}
      </CustomButton>
      <CustomButton
        type="primary"
        size="small"
        class="min-w-[5.5rem] shrink-0 whitespace-nowrap"
        :loading="loading"
        @click="emit('action')"
      >
        {{ t('dataManager.clearAction') }}
      </CustomButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';

withDefaults(
  defineProps<{
    title: string;
    description: string;
    loading: boolean;
    secondaryLabel?: string;
    secondaryLoading?: boolean;
  }>(),
  {
    secondaryLabel: '',
    secondaryLoading: false
  }
);

const emit = defineEmits<{
  action: [];
  secondary: [];
}>();

const { t } = useI18n();
</script>
