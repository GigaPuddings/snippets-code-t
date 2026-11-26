<template>
  <section
    class="grid min-w-0 auto-rows-fr grid-cols-2 gap-[var(--wb-inset)] [@container_workbench_(min-width:56rem)]:grid-cols-4"
    :aria-label="t('workbenchHome.metrics')"
  >
    <button
      v-for="metric in metrics"
      :key="metric.id"
      type="button"
      class="ui-card grid min-h-[clamp(5.75rem,15cqh,11rem)] content-center gap-[var(--wb-inset)] rounded-ui-lg bg-[color-mix(in_srgb,var(--app-ui-card-bg)_60%,var(--settings-surface))] p-[var(--wb-inset)] active:bg-ui-selected dark:bg-ui-card [@container_workbench_(min-width:28rem)]:grid-cols-[auto_minmax(0,1fr)]"
      :title="[metric.meta, metric.detail].filter(Boolean).join(' · ')"
      @click="emit('select', metric.id)"
    >
      <span
        class="grid size-[clamp(2rem,3.2cqw,2.75rem)] place-items-center rounded-ui-lg"
        :class="
          metric.id === 'plugins' || metric.id === 'search'
            ? 'bg-[var(--el-color-success-light-8)] text-[var(--chat-success-text)]'
            : 'bg-[var(--el-color-primary-light-8)] text-primary'
        "
      >
        <component
          :is="metricIcons[metric.id]"
          width="20"
          height="20"
          aria-hidden="true"
        />
      </span>
      <span class="flex min-w-0 flex-col gap-[clamp(0.25rem,0.8cqh,0.75rem)]">
        <span
          class="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 font-normal leading-snug text-[color:var(--wb-primary)]"
        >
          <span>{{ metric.label }}</span>
          <span
            v-if="metric.id === 'content'"
            :title="t('workbenchHome.contentHint')"
            class="inline-flex text-ui-muted"
          >
            <CircleHelp
              width="12"
              height="12"
              :aria-label="t('workbenchHome.contentHint')"
            />
          </span>
          <span
            v-if="metric.badge"
            class="ml-auto inline-flex items-center gap-1 rounded-full bg-[var(--el-color-warning-light-8)] px-1.5 text-[11px] font-medium leading-4 text-[var(--chat-warning-text)]"
          >
            <CircleAlert width="12" height="12" aria-hidden="true" />
            {{ metric.badge }}
          </span>
        </span>
        <span class="flex min-w-0 flex-wrap items-end justify-between gap-1">
          <strong
            class="min-w-0 break-words text-[clamp(1.5rem,2.6cqw,2.5rem)] font-medium leading-none tabular-nums text-ui-main"
          >
            {{ metric.value ?? '—' }}
          </strong>
          <ContentTrend v-if="metric.trend?.length" :counts="metric.trend" />
        </span>
        <span
          class="break-words text-[length:var(--wb-caption)] leading-snug text-ui-muted"
        >
          {{
            metric.value === null && loading ? t('common.loading') : metric.meta
          }}
          <template v-if="metric.detail">
            ·
            <span
              :class="{
                'text-[var(--chat-warning-text)]': metric.tone === 'warning',
                'text-[var(--chat-success-text)]': metric.tone === 'success'
              }"
            >
              {{ metric.detail }}
            </span>
          </template>
        </span>
      </span>
    </button>
  </section>
</template>

<script setup lang="ts">
import Brain from '~icons/lucide/brain';
import Puzzle from '~icons/lucide/puzzle';
import FileText from '~icons/lucide/file-text';
import Search from '~icons/lucide/search';
import CircleHelp from '~icons/lucide/circle-help';
import CircleAlert from '~icons/lucide/circle-alert';
import ContentTrend from '@/workbench/components/ContentTrend.vue';
import { useI18n } from 'vue-i18n';
import type { Component } from 'vue';
import type { WorkbenchMetric } from '@/workbench/viewModel';

defineProps<{
  metrics: WorkbenchMetric[];
  loading: boolean;
}>();

const emit = defineEmits<{
  select: [metricId: WorkbenchMetric['id']];
}>();

const { t } = useI18n();
const metricIcons: Record<WorkbenchMetric['id'], Component> = {
  content: FileText,
  plugins: Puzzle,
  search: Search,
  ai: Brain
};
</script>
