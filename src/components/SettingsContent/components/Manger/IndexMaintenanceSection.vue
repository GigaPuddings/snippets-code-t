<template>
  <section class="rounded-lg border border-panel bg-panel px-4 pb-2">
    <div class="border-b border-panel py-3">
      <h4 class="text-sm font-semibold text-panel">
        {{ t('dataManager.indexTitle') }}
      </h4>
      <p class="mt-1 text-xs leading-5 text-content">
        {{ t('dataManager.indexDesc') }}
      </p>
    </div>

    <section class="summarize-section !mt-0 gap-6 py-3">
      <div class="summarize-label !basis-64">
        <div class="summarize-label-title">
          {{ t('dataManager.localIndex') }}
        </div>
        <div class="summarize-label-desc">
          {{ t('dataManager.localIndexDesc') }}
        </div>
      </div>
      <div
        class="summarize-input-wrapper !basis-[22rem] !grow max-[1120px]:!w-full"
      >
        <CustomButton
          type="primary"
          size="small"
          class="min-w-[5.5rem] shrink-0 whitespace-nowrap"
          :loading="localIndexLoading"
          @click="emit('manageLocal')"
        >
          {{ t('dataManager.manageIndex') }}
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section !mt-0 gap-6 py-3">
      <div class="summarize-label !basis-64">
        <div class="summarize-label-title">
          {{ t('dataManager.markdownIndex') }}
        </div>
        <div class="summarize-label-desc">
          {{ t('dataManager.markdownIndexDesc') }}
        </div>
      </div>
      <div
        class="summarize-input-wrapper !basis-[22rem] !grow max-[1120px]:!w-full"
      >
        <CustomButton
          type="primary"
          size="small"
          class="min-w-[5.5rem] shrink-0 whitespace-nowrap"
          :disabled="!workspaceSet"
          :loading="markdownIndexLoading"
          @click="emit('rebuildMarkdown')"
        >
          {{ t('dataManager.rebuildIndex') }}
        </CustomButton>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';

defineProps<{
  workspaceSet: boolean;
  localIndexLoading: boolean;
  markdownIndexLoading: boolean;
}>();

const emit = defineEmits<{
  manageLocal: [];
  rebuildMarkdown: [];
}>();

const { t } = useI18n();
</script>
