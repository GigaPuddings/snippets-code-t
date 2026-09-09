<template>
  <footer
    class="h-7 w-full flex-none border-t border-workbench-footer-border bg-workbench-footer-bg text-[11px] text-workbench-muted"
  >
    <div
      class="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between gap-5 px-[clamp(24px,3vw,48px)] [@media(max-width:1080px)]:px-[22px]"
    >
      <div class="flex min-w-0 items-center gap-3">
        <span class="flex min-w-0 items-center gap-[7px]">
          <i class="size-2 flex-none rounded-full bg-workbench-success"></i>
          {{ t('workbenchHome.footer.workspaceReady') }}
        </span>
        <span
          class="h-[13px] w-px bg-workbench-card-border"
          aria-hidden="true"
        ></span>
        <span>
          {{ t('workbenchHome.footer.recentCount', { count: recentCount }) }}
        </span>
      </div>
      <div
        class="flex min-w-0 items-center gap-1.5 truncate opacity-90 [@media(max-width:760px)]:hidden"
      >
        <Lightning theme="outline" size="14" />
        {{ t('workbenchHome.footer.tagline') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Lightning } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';

defineProps<{
  recentCount: number;
}>();

const { t } = useI18n();
</script>
