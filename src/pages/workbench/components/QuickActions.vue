<template>
  <section class="min-w-0">
    <h2
      class="mb-1.5 mt-0 flex min-h-[var(--wb-control)] items-center gap-2 text-[clamp(0.9375rem,1.35cqw,1.25rem)] font-medium text-ui-main"
    >
      <Zap width="19" height="19" aria-hidden="true" />
      {{ t('workbenchHome.quickActions') }}
    </h2>
    <div
      class="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(100%,10.25rem),1fr))] gap-[clamp(0.375rem,0.7cqw,0.875rem)] [@container_workbench_(min-width:24rem)]:grid-cols-2"
    >
      <button
        v-for="action in actions"
        :key="action.id"
        type="button"
        class="ui-card grid min-h-[clamp(2.5rem,6.3cqh,4.5rem)] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-ui-lg border border-solid border-[var(--settings-border)] bg-[color-mix(in_srgb,var(--app-ui-card-bg)_60%,var(--settings-surface))] px-[var(--wb-inset)] py-1 text-[color:var(--wb-primary)] active:bg-ui-selected"
        :title="t(action.labelKey)"
        :aria-label="t(action.labelKey)"
        @click="emit('select', action)"
      >
        <component
          :is="action.icon"
          class="shrink-0 text-ui-muted"
          width="20"
          height="20"
          aria-hidden="true"
        />
        <span
          class="flex min-w-0 flex-wrap items-center gap-x-1.5 font-normal leading-snug"
        >
          {{ t(action.labelKey) }}
          <kbd
            v-if="action.id === 'search'"
            class="whitespace-nowrap rounded-md bg-[var(--el-color-primary-light-9)] px-1.5 font-ui text-ui-caption text-primary [@container_workbench_(max-width:29rem)]:hidden"
          >
            Ctrl K
          </kbd>
        </span>
        <RightSmall
          class="shrink-0 text-ui-muted"
          width="14"
          height="14"
          aria-hidden="true"
        />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import RightSmall from '~icons/lucide/chevron-right';
import Zap from '~icons/lucide/zap';
import { useI18n } from 'vue-i18n';
import type { WorkbenchQuickAction } from '../quickActions';

defineProps<{ actions: WorkbenchQuickAction[] }>();
const emit = defineEmits<{ select: [action: WorkbenchQuickAction] }>();
const { t } = useI18n();
</script>
