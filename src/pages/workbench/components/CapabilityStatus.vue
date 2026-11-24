<template>
  <section class="min-w-0">
    <header
      class="mb-1.5 flex min-h-[var(--wb-control)] items-center justify-between gap-2"
    >
      <h2
        class="m-0 flex min-w-0 items-center gap-2 text-[clamp(0.9375rem,1.35cqw,1.25rem)] font-medium leading-tight text-ui-main"
      >
        <Layers width="19" height="19" aria-hidden="true" />
        {{ t('workbenchHome.systemStatus') }}
      </h2>
      <button
        type="button"
        class="ui-action ui-action--muted h-[var(--wb-control)] gap-1 text-[length:var(--wb-caption)] active:bg-ui-selected"
        @click="emit('manage')"
      >
        {{ t('workbenchHome.manage') }}
        <ArrowRight width="14" height="14" aria-hidden="true" />
      </button>
    </header>
    <ul class="m-0 grid list-none gap-[clamp(0.375rem,0.9cqh,0.75rem)] p-0">
      <li v-for="layer in layers" :key="layer.id">
        <button
          type="button"
          class="ui-list-action grid min-h-[clamp(2.25rem,5.9cqh,4.75rem)] w-full grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-2 border border-solid border-[var(--settings-border)] px-[var(--wb-inset)] py-1 active:bg-ui-selected"
          :class="{
            'bg-[color-mix(in_srgb,var(--el-color-warning)_6%,var(--settings-surface))]':
              layer.status === 'attention'
          }"
          :title="layer.label"
          @click="emit('select', layer.id)"
        >
          <component
            :is="layer.icon"
            class="text-ui-muted"
            width="18"
            height="18"
            aria-hidden="true"
          />
          <span
            class="min-w-0 break-words font-normal text-[color:var(--wb-primary)]"
          >
            {{ layer.label }}
          </span>
          <span
            class="flex items-center gap-1.5 whitespace-nowrap text-ui-caption"
            :class="statusClasses[layer.status]"
          >
            <span
              class="size-1.5 shrink-0 rounded-full bg-current"
              aria-hidden="true"
            ></span>
            <span class="rounded-full px-2 font-medium">
              {{ t(`settings.workbench.status.${layer.status}`) }}
            </span>
          </span>
          <ChevronRight
            class="text-ui-muted"
            width="14"
            height="14"
            aria-hidden="true"
          />
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import ArrowRight from '~icons/lucide/arrow-right';
import ChevronRight from '~icons/lucide/chevron-right';
import Layers from '~icons/lucide/layers';
import { useI18n } from 'vue-i18n';
import type { WorkbenchLayer, WorkbenchStatus } from '@/workbench/viewModel';

defineProps<{ layers: WorkbenchLayer[] }>();
const emit = defineEmits<{
  manage: [];
  select: [id: WorkbenchLayer['id']];
}>();
const { t } = useI18n();
const statusClasses: Record<WorkbenchStatus, string> = {
  ready:
    'text-[var(--chat-success-text)] [&>span:last-child]:bg-[var(--el-color-success-light-8)]',
  attention:
    'text-[var(--chat-warning-text)] [&>span:last-child]:bg-[var(--el-color-warning-light-8)]',
  inactive: 'text-ui-muted [&>span:last-child]:bg-ui-selected'
};
</script>
