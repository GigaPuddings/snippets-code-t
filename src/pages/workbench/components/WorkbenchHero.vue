<template>
  <header class="flex min-w-0 items-start justify-between gap-4">
    <div class="min-w-0">
      <h1
        class="m-0 truncate text-ui-title font-semibold text-[var(--workspace-nav-heading)]"
      >
        {{ t('workbenchHome.title') }}
      </h1>
      <button
        type="button"
        class="ui-action ui-action--muted mt-1 min-w-0 max-w-full gap-1 px-1 text-left text-ui-caption"
        :title="workspaceRoot || t('workbenchHome.workspaceNotSet')"
        @click="emit('openWorkspace')"
      >
        <span class="truncate">
          {{ workspaceRoot || t('workbenchHome.workspaceNotSet') }}
        </span>
        <RightSmall class="shrink-0" theme="outline" size="16" />
      </button>
    </div>
    <button
      type="button"
      class="ui-icon-button ui-action--muted disabled:cursor-wait"
      :title="t('workbenchHome.refresh')"
      :aria-label="t('workbenchHome.refresh')"
      :disabled="loading"
      @click="emit('refresh')"
    >
      <Refresh
        theme="outline"
        size="16"
        :class="{ 'animate-spin [animation-duration:800ms]': loading }"
      />
    </button>
  </header>
</template>

<script setup lang="ts">
import { Refresh, RightSmall } from '@icon-park/vue-next';
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
