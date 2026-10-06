<template>
  <section class="min-w-0">
    <header class="mb-2 flex min-h-8 items-center justify-between gap-3">
      <h2 class="m-0 text-ui font-medium text-[var(--workspace-nav-heading)]">
        {{ t('workbenchHome.systemStatus') }}
      </h2>
      <button
        type="button"
        class="ui-action ui-action--muted gap-1 text-ui-caption"
        @click="emit('manage')"
      >
        {{ t('workbenchHome.manage') }}
        <ArrowRight theme="outline" size="14" aria-hidden="true" />
      </button>
    </header>
    <div class="space-y-1">
      <button
        v-for="layer in layers"
        :key="layer.id"
        type="button"
        class="ui-list-action grid min-h-9 w-full grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-3 px-2 py-1.5"
        :title="layer.label"
        @click="layer.actions[0] && emit('navigateAction', layer.actions[0])"
      >
        <component
          :is="layer.icon"
          theme="outline"
          size="18"
          aria-hidden="true"
        />
        <span class="truncate text-ui">{{ layer.label }}</span>
        <span
          class="flex items-center gap-2 whitespace-nowrap text-ui-caption text-[var(--workspace-nav-muted)]"
        >
          <i
            class="size-1.5 shrink-0 rounded-full"
            :class="statusDotClasses[layer.status]"
            aria-hidden="true"
          ></i>
          {{ t(`workbenchHome.status.${layer.status}`) }}
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type {
  WorkbenchAction,
  WorkbenchLayer,
  WorkbenchStatus
} from '@/workbench/viewModel';

defineProps<{ layers: WorkbenchLayer[] }>();
const emit = defineEmits<{
  manage: [];
  navigateAction: [action: WorkbenchAction];
}>();
const { t } = useI18n();
const statusDotClasses: Record<WorkbenchStatus, string> = {
  ready: 'bg-[var(--el-color-success)]',
  attention: 'bg-[var(--el-color-warning)]',
  inactive: 'bg-[var(--workspace-nav-muted)]'
};
</script>
