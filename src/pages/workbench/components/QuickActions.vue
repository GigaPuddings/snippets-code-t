<template>
  <section
    class="overflow-hidden rounded-xl border border-workbench-card-border bg-workbench-card px-3 pb-2.5 pt-0 shadow-workbench"
  >
    <header
      class="flex min-h-[45px] items-center gap-[9px] px-0.5 text-workbench-primary [@media(max-height:800px)]:min-h-10"
    >
      <AllApplication theme="outline" size="20" />
      <h2
        class="m-0 text-[17px] font-[650] leading-[1.3] text-workbench-text [@media(max-height:800px)]:text-[15px]"
      >
        {{ t('workbenchHome.quickActions') }}
      </h2>
    </header>

    <div class="grid grid-cols-2 gap-2 [@media(max-height:800px)]:gap-1.5">
      <button
        v-for="action in actions"
        :key="action.id"
        type="button"
        class="grid min-h-[70px] min-w-0 grid-cols-[30px_minmax(0,1fr)_14px] items-center gap-[9px] rounded-[10px] border border-workbench-card-border bg-workbench-card px-2.5 py-[9px] text-left text-workbench-text shadow-workbench transition-[transform,background-color,border-color] duration-[160ms] hover:-translate-y-px hover:border-workbench-card-border-hover hover:bg-workbench-card-strong focus-visible:-translate-y-px focus-visible:border-workbench-card-border-hover focus-visible:bg-workbench-card-strong focus-visible:outline-none [@media(max-height:800px)]:!grid-cols-[24px_minmax(0,1fr)_12px] [@media(max-height:800px)]:min-h-[57px] [@media(max-height:800px)]:gap-[7px] [@media(max-height:800px)]:px-2 [@media(max-height:800px)]:py-1.5 [@media(max-width:1080px)]:grid-cols-[26px_minmax(0,1fr)_12px] [@media(max-width:1080px)]:gap-[7px] [@media(max-width:1080px)]:px-2"
        @click="emit('navigate', action.path)"
      >
        <component
          :is="action.icon"
          class="text-workbench-primary"
          theme="outline"
          size="24"
        />
        <span class="flex min-w-0 flex-col gap-0.5">
          <strong
            class="truncate text-sm font-[580] leading-[1.3] [@media(max-height:800px)]:text-[13px]"
          >
            {{ t(action.labelKey) }}
          </strong>
          <small
            class="truncate text-[11px] leading-[1.3] text-workbench-muted [@media(max-height:800px)]:text-[10px]"
          >
            {{ quickActionDescription(action.id) }}
          </small>
        </span>
        <RightSmall
          class="text-workbench-muted-soft"
          theme="outline"
          size="16"
        />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AllApplication, RightSmall } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { ConfigNavigationTab } from '@/plugins/navigation';

defineProps<{
  actions: ConfigNavigationTab[];
}>();

const emit = defineEmits<{
  navigate: [path: string];
}>();

const { t } = useI18n();

const quickActionDescription = (id: string): string =>
  t(`workbenchHome.quickActionDescriptions.${id}`);
</script>
