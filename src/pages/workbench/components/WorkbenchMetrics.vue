<template>
  <section
    class="grid h-full min-w-0 grid-cols-4 gap-3 [@media(max-width:1180px)]:gap-[9px]"
    :aria-label="t('workbenchHome.metrics')"
  >
    <button
      v-for="metric in metrics"
      :key="metric.id"
      type="button"
      class="group grid h-full min-w-0 grid-cols-[58px_minmax(0,1fr)_18px] items-center gap-3 rounded-xl border border-workbench-card-border bg-workbench-card px-[14px] py-3 text-left text-workbench-text shadow-workbench transition-[transform,background-color,border-color] duration-[160ms] hover:-translate-y-px hover:border-workbench-card-border-hover hover:bg-workbench-card-strong focus-visible:-translate-y-px focus-visible:border-workbench-card-border-hover focus-visible:bg-workbench-card-strong focus-visible:outline-none [@media(max-height:800px)]:!grid-cols-[44px_minmax(0,1fr)_12px] [@media(max-height:800px)]:!gap-2 [@media(max-height:800px)]:!px-2.5 [@media(max-height:800px)]:py-2 [@media(max-width:1180px)]:grid-cols-[48px_minmax(0,1fr)_14px] [@media(max-width:1180px)]:gap-[9px] [@media(max-width:1180px)]:px-2 [@media(max-width:900px)]:grid-cols-[minmax(0,1fr)_12px]"
      @click="emit('select', metric.id)"
    >
      <span
        class="flex size-[58px] items-center justify-center rounded-xl [@media(max-height:800px)]:!size-11 [@media(max-height:800px)]:rounded-[10px] [@media(max-width:1180px)]:size-12 [@media(max-width:900px)]:hidden"
        :class="
          metricVisuals[metric.id]?.iconClass || metricVisuals.content.iconClass
        "
        aria-hidden="true"
      >
        <component
          :is="metricVisuals[metric.id]?.icon || FileText"
          theme="outline"
          size="29"
          :stroke-width="3"
        />
      </span>
      <span class="flex min-w-0 flex-col justify-center">
        <span
          class="truncate text-[13px] leading-[1.35] text-workbench-muted [@media(max-height:800px)]:text-xs"
        >
          {{ metric.label }}
        </span>
        <span
          class="mt-[3px] flex min-w-0 items-baseline gap-[9px] [@media(max-height:800px)]:mt-px [@media(max-width:1180px)]:gap-1.5"
        >
          <strong
            class="flex-none text-[29px] font-bold leading-[1.05] [font-variant-numeric:tabular-nums] [@media(max-height:800px)]:!text-2xl [@media(max-width:1180px)]:text-[26px]"
          >
            {{ metric.value }}
          </strong>
          <small
            class="truncate text-xs leading-[1.3] text-workbench-muted [@media(max-height:800px)]:text-[11px]"
          >
            {{ metric.meta }}
          </small>
        </span>
      </span>
      <RightSmall
        class="text-workbench-muted-soft opacity-[0.72] transition-colors duration-[160ms] group-hover:text-workbench-primary group-hover:opacity-[0.88] group-focus-visible:text-workbench-primary group-focus-visible:opacity-[0.88]"
        theme="outline"
        size="18"
      />
    </button>
  </section>
</template>

<script setup lang="ts">
import { Brain, Cube, FileText, RightSmall, Search } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { Component } from 'vue';
import type { WorkbenchMetric } from '@/workbench/viewModel';

defineProps<{
  metrics: WorkbenchMetric[];
}>();

const emit = defineEmits<{
  select: [metricId: string];
}>();

const { t } = useI18n();

const metricVisuals: Record<string, { icon: Component; iconClass: string }> = {
  content: {
    icon: FileText,
    iconClass: 'bg-workbench-metric-content-bg text-workbench-metric-content'
  },
  plugins: {
    icon: Cube,
    iconClass: 'bg-workbench-metric-plugins-bg text-workbench-metric-plugins'
  },
  search: {
    icon: Search,
    iconClass: 'bg-workbench-metric-search-bg text-workbench-metric-search'
  },
  ai: {
    icon: Brain,
    iconClass: 'bg-workbench-metric-ai-bg text-workbench-metric-ai'
  }
};
</script>
