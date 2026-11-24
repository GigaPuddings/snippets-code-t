<template>
  <header
    class="flex min-w-0 flex-wrap items-center justify-between gap-x-[var(--wb-gap)] gap-y-2"
  >
    <div class="min-w-0 flex-[1_1_18rem]">
      <h1
        class="m-0 text-[clamp(var(--app-ui-title-size),1.85cqw,1.75rem)] font-medium leading-tight tracking-tight text-ui-main"
      >
        {{ t('workbenchHome.title') }}
      </h1>
      <p
        class="mb-0 mt-1 text-[length:var(--wb-caption)] leading-normal text-ui-muted"
      >
        {{ t('workbenchHome.description') }}
      </p>
    </div>
    <div class="flex min-w-0 max-w-full flex-wrap items-center gap-2">
      <span
        v-if="workspaceRoot"
        class="flex min-w-0 items-center gap-1.5 text-[length:var(--wb-caption)] text-ui-muted [@container_workbench_(max-width:36rem)]:basis-full"
        :title="workspaceRoot"
      >
        <Folder class="shrink-0" width="16" height="16" aria-hidden="true" />
        <span
          class="max-w-[clamp(9rem,28cqw,42rem)] truncate [@container_workbench_(max-width:36rem)]:max-w-none"
        >
          {{ workspaceRoot }}
        </span>
        <ChevronRight
          class="shrink-0"
          width="14"
          height="14"
          aria-hidden="true"
        />
      </span>
      <button
        type="button"
        class="ui-action h-[var(--wb-control)] max-w-full border border-solid border-[var(--settings-border)] px-[var(--wb-inset)] text-[length:var(--wb-caption)] text-[color:var(--wb-primary)] active:bg-ui-selected"
        @click="emit('openWorkspace')"
      >
        <FolderOpen width="16" height="16" aria-hidden="true" />
        {{
          t(
            workspaceRoot
              ? 'workbenchHome.openWorkspace'
              : 'workbenchHome.configureWorkspace'
          )
        }}
      </button>
      <button
        type="button"
        class="ui-action h-[var(--wb-control)] max-w-full border border-solid border-[var(--settings-border)] px-[var(--wb-inset)] text-[length:var(--wb-caption)] text-[color:var(--wb-primary)] active:bg-ui-selected"
        :disabled="loading"
        @click="emit('refresh')"
      >
        <Refresh
          width="16"
          height="16"
          aria-hidden="true"
          :class="{ 'motion-safe:animate-spin': loading }"
        />
        {{ t('workbenchHome.refresh') }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Refresh from '~icons/lucide/refresh-cw';
import Folder from '~icons/lucide/folder';
import FolderOpen from '~icons/lucide/folder-open';
import ChevronRight from '~icons/lucide/chevron-right';
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
