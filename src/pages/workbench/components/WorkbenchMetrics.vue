<template>
  <section
    class="grid min-w-0 grid-cols-4 gap-3 max-[800px]:grid-cols-2"
    :aria-label="t('workbenchHome.metrics')"
  >
    <button
      v-for="metric in metrics"
      :key="metric.id"
      type="button"
      class="ui-card group p-3"
      :title="`${metric.label}: ${metric.value} · ${metric.meta}`"
      @click="emit('select', metric.id)"
    >
      <span
        class="flex min-w-0 items-center gap-2 text-ui-caption text-[var(--workspace-nav-muted)]"
      >
        <component
          :is="metricIcons[metric.id] || FileText"
          class="shrink-0 text-[var(--workspace-nav-text)]"
          width="16"
          height="16"
          aria-hidden="true"
        />
        <span class="truncate">{{ metric.label }}</span>
        <RightSmall
          class="ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          width="16"
          height="16"
          aria-hidden="true"
        />
      </span>
      <span class="mt-2 flex min-w-0 items-baseline gap-2">
        <strong
          class="shrink-0 text-2xl font-semibold leading-7 tabular-nums text-[var(--workspace-nav-heading)]"
        >
          {{ metric.value }}
        </strong>
        <span
          class="truncate text-ui-caption text-[var(--workspace-nav-muted)]"
        >
          {{ metric.meta }}
        </span>
      </span>
    </button>
  </section>
</template>

<script setup lang="ts">
import Brain from '~icons/lucide/brain';
import Puzzle from '~icons/lucide/puzzle';
import FileText from '~icons/lucide/file-text';
import RightSmall from '~icons/lucide/chevron-right';
import Search from '~icons/lucide/search';
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
const metricIcons: Record<string, Component> = {
  content: FileText,
  plugins: Puzzle,
  search: Search,
  ai: Brain
};
</script>
