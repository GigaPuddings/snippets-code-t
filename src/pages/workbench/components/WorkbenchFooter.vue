<template>
  <footer
    class="mx-auto flex w-full max-w-6xl shrink-0 flex-wrap items-center gap-x-4 gap-y-1 px-8 pb-4 pt-4 text-ui-caption text-[var(--workspace-nav-muted)] max-[640px]:px-5"
  >
    <span class="flex min-w-0 items-center gap-2">
      <i
        class="size-1.5 shrink-0 rounded-full"
        :class="
          workspaceReady
            ? 'bg-[var(--el-color-success)]'
            : 'bg-[var(--el-color-warning)]'
        "
        aria-hidden="true"
      ></i>
      {{
        workspaceReady
          ? t('workbenchHome.footer.workspaceReady')
          : t('workbenchHome.workspaceNotSet')
      }}
    </span>
    <span>
      {{ t('workbenchHome.footer.recentCount', { count: recentCount }) }}
    </span>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{
  recentCount: number;
  workspaceReady: boolean;
}>();
const { t } = useI18n();
</script>
