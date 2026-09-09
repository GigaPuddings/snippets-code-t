<template>
  <section
    class="flex min-h-0 w-full min-w-0 self-start flex-col overflow-hidden rounded-xl border border-workbench-card-border bg-workbench-card shadow-workbench"
  >
    <header
      class="flex min-h-12 flex-none items-center justify-between gap-3 border-b border-workbench-card-border px-[14px] [@media(max-height:800px)]:min-h-10 [@media(max-height:800px)]:px-[11px]"
    >
      <div class="flex min-w-0 items-center gap-[9px] text-workbench-primary">
        <ChartHistogram theme="outline" size="20" />
        <h2
          class="m-0 text-[17px] font-[650] leading-[1.3] text-workbench-text [@media(max-height:800px)]:text-[15px]"
        >
          {{ t('workbenchHome.systemStatus') }}
        </h2>
      </div>
      <button
        type="button"
        class="flex items-center gap-[3px] border-0 bg-transparent px-0 py-1 text-xs text-workbench-primary transition-opacity duration-[160ms] hover:opacity-[0.72] focus-visible:opacity-[0.72] focus-visible:outline-none"
        @click="emit('manage')"
      >
        {{ t('workbenchHome.manage') }}
        <ArrowRight theme="outline" size="14" />
      </button>
    </header>

    <div class="flex min-h-0 flex-none flex-col">
      <button
        v-for="layer in layers"
        :key="layer.id"
        type="button"
        class="grid h-[52px] min-h-[52px] min-w-0 flex-none grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-2.5 border-0 border-b border-workbench-card-border bg-transparent px-[14px] py-[7px] text-left text-workbench-text transition-colors duration-[160ms] last:border-b-0 hover:bg-workbench-hover focus-visible:bg-workbench-hover focus-visible:outline-none [@media(max-height:800px)]:h-[42px] [@media(max-height:800px)]:min-h-[42px] [@media(max-height:800px)]:grid-cols-[24px_minmax(0,1fr)_auto] [@media(max-height:800px)]:gap-2 [@media(max-height:800px)]:px-[11px] [@media(max-height:800px)]:py-[5px]"
        @click="layer.actions[0] && emit('navigateAction', layer.actions[0])"
      >
        <component
          :is="layer.icon"
          class="text-workbench-muted"
          theme="outline"
          size="20"
        />
        <span class="truncate text-[13px] leading-[1.35]">
          {{ layer.label }}
        </span>
        <span
          class="flex items-center gap-[7px] whitespace-nowrap text-[11px] leading-[1.3] text-workbench-muted"
        >
          <i
            class="size-2 flex-none rounded-full"
            :class="statusDotClasses[layer.status]"
          ></i>
          {{ t(`workbenchHome.status.${layer.status}`) }}
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ChartHistogram } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type {
  WorkbenchAction,
  WorkbenchLayer,
  WorkbenchStatus
} from '@/workbench/viewModel';

defineProps<{
  layers: WorkbenchLayer[];
}>();

const emit = defineEmits<{
  manage: [];
  navigateAction: [action: WorkbenchAction];
}>();

const { t } = useI18n();

const statusDotClasses: Record<WorkbenchStatus, string> = {
  ready: 'bg-workbench-success',
  attention: 'bg-workbench-warning',
  inactive: 'bg-workbench-muted-soft'
};
</script>
