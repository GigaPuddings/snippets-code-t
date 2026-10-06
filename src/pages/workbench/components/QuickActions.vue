<template>
  <section class="min-w-0">
    <h2
      class="mb-3 mt-0 flex min-h-8 items-center text-ui font-medium text-[var(--workspace-nav-heading)]"
    >
      {{ t('workbenchHome.quickActions') }}
    </h2>
    <div class="grid grid-cols-2 gap-2 max-[480px]:grid-cols-1">
      <button
        v-for="action in actions"
        :key="action.id"
        type="button"
        class="ui-card grid min-h-14 grid-cols-[20px_minmax(0,1fr)_16px] items-center gap-2 px-3 py-2 text-ui-main"
        :title="`${t(action.labelKey)}: ${quickActionDescription(action.id)}`"
        @click="emit('navigate', action.path)"
      >
        <component
          :is="action.icon"
          theme="outline"
          size="20"
          aria-hidden="true"
        />
        <span class="flex min-w-0 flex-col gap-0.5">
          <span class="truncate text-ui font-medium">
            {{ t(action.labelKey) }}
          </span>
          <span
            class="truncate text-ui-caption text-[var(--workspace-nav-muted)]"
          >
            {{ quickActionDescription(action.id) }}
          </span>
        </span>
        <RightSmall
          class="text-[var(--workspace-nav-muted)]"
          theme="outline"
          size="16"
          aria-hidden="true"
        />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RightSmall } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { ConfigNavigationTab } from '@/plugins/navigation';

defineProps<{ actions: ConfigNavigationTab[] }>();
const emit = defineEmits<{ navigate: [path: string] }>();
const { t } = useI18n();
const quickActionDescription = (id: string): string =>
  t(`workbenchHome.quickActionDescriptions.${id}`);
</script>
