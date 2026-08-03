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

    <div
      v-if="backgroundIndexTasks.length"
      class="mt-3 space-y-2"
      role="status"
      aria-live="polite"
    >
      <div
        v-for="task in backgroundIndexTasks"
        :key="task.owner"
        class="overflow-hidden rounded-md border border-panel bg-content"
      >
        <div class="flex min-w-0 items-center gap-3 px-3 py-2.5">
          <span
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-active/10 text-primary"
          >
            <Loading theme="outline" size="18" :stroke-width="3" spin />
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex min-w-0 items-center gap-2">
              <span class="truncate text-xs font-semibold text-panel">
                {{ taskSourceLabel(task) }}
              </span>
              <span class="truncate text-xs text-content">
                {{ localizedTaskStage(task) }}
              </span>
            </div>
            <p class="mt-0.5 truncate text-[11px] text-content">
              {{
                task.currentItem ||
                task.current_item ||
                t('dataManager.backgroundTaskHint')
              }}
            </p>
          </div>
          <div class="shrink-0 text-right font-mono text-[11px]">
            <span v-if="task.total > 0" class="text-content">
              {{ task.current }} / {{ task.total }}
            </span>
            <strong class="ml-2 inline-block min-w-9 text-primary">
              {{ task.total > 0 ? `${taskPercent(task)}%` : '…' }}
            </strong>
          </div>
        </div>
        <div class="h-0.5 overflow-hidden bg-panel">
          <div
            v-if="task.total > 0"
            class="h-full rounded-full bg-active transition-[width] duration-300 ease-out"
            :style="{ width: `${taskPercent(task)}%` }"
          ></div>
          <div
            v-else
            class="h-full w-1/3 animate-pulse rounded-full bg-active"
          ></div>
        </div>
      </div>
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
          :disabled="backgroundIndexBusy"
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
import { Loading } from '@icon-park/vue-next';
import { CustomButton } from '@/components/UI';
import type { BackgroundIndexTask } from './useIndexMaintenance';

defineProps<{
  workspaceSet: boolean;
  localIndexLoading: boolean;
  markdownIndexLoading: boolean;
  backgroundIndexTasks: BackgroundIndexTask[];
  backgroundIndexBusy: boolean;
}>();

const emit = defineEmits<{
  manageLocal: [];
  rebuildMarkdown: [];
}>();

const { t } = useI18n();

const taskPercent = (task: BackgroundIndexTask): number => {
  if (task.total <= 0) return 0;
  return Math.min(
    100,
    Math.max(0, Math.round((task.current / task.total) * 100))
  );
};

const taskSourceLabel = (task: BackgroundIndexTask): string =>
  task.owner === 'desktop-files'
    ? t('dataManager.indexDesktopFiles')
    : t('dataManager.localIndex');

const localizedTaskStage = (task: BackgroundIndexTask): string => {
  if (task.task === 'icons') return t('progress.loadingIcons');
  const stage = task.stage.toLocaleLowerCase();
  if (stage.includes('准备') || stage.includes('prepar')) {
    return t('progress.preparing');
  }
  if (stage.includes('保存') || stage.includes('saving')) {
    return t('progress.savingToDatabase');
  }
  if (stage.includes('书签') || stage.includes('bookmark')) {
    return t('progress.scanningBookmarks');
  }
  if (stage.includes('应用') || stage.includes('application')) {
    return t('progress.scanningApps');
  }
  if (stage.includes('桌面') || stage.includes('desktop')) {
    return t('progress.scanningDesktopFiles');
  }
  return t('progress.title');
};
</script>
