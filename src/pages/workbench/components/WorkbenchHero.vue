<template>
  <header class="flex min-w-0 items-center justify-between gap-4">
    <h1
      class="m-0 max-w-[50%] shrink-0 truncate text-ui-title font-semibold text-[var(--workspace-nav-heading)]"
    >
      {{ t('workbenchHome.title') }}
    </h1>
    <div class="flex min-w-0 flex-1 items-center justify-end gap-2">
      <button
        type="button"
        class="ui-action ui-action--muted min-w-0 max-w-full shrink gap-1 px-1 text-left text-ui-caption"
        :title="workspaceRoot || t('workbenchHome.workspaceNotSet')"
        @click="emit('openWorkspace')"
      >
        <span class="truncate">
          {{ workspaceRoot || t('workbenchHome.workspaceNotSet') }}
        </span>
        <RightSmall class="shrink-0" width="16" height="16" />
      </button>
      <button
        type="button"
        class="ui-icon-button ui-action--muted disabled:cursor-wait"
        :title="t('workbenchHome.refresh')"
        :aria-label="t('workbenchHome.refresh')"
        :disabled="loading"
        @click="emit('refresh')"
      >
        <Refresh
          width="16"
          height="16"
          :class="{ 'animate-spin [animation-duration:800ms]': loading }"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Refresh from '~icons/lucide/refresh-cw';
import RightSmall from '~icons/lucide/chevron-right';
import { useI18n } from 'vue-i18n';

defineProps<{
  workspaceRoot: string;
  loading: boolean;
}>();

const emit = defineEmits<{
  refresh: [];
  openWorkspace: [];
}>();

const { t } = useI18n();
</script>
