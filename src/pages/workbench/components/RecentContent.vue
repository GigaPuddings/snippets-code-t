<template>
  <section class="min-w-0">
    <header class="mb-2 flex min-h-8 items-center justify-between gap-4">
      <h2 class="m-0 text-ui font-medium text-[var(--workspace-nav-heading)]">
        {{ t('workbenchHome.recent') }}
      </h2>
      <button
        type="button"
        class="ui-action ui-action--muted gap-1 text-ui-caption"
        @click="emit('viewAll')"
      >
        {{ t('workbenchHome.viewAll') }}
        <ArrowRight width="14" height="14" aria-hidden="true" />
      </button>
    </header>
    <ul v-if="items.length" class="m-0 space-y-1 list-none p-0">
      <li v-for="item in items" :key="item.id" class="min-w-0">
        <button
          type="button"
          class="ui-list-action group grid min-h-12 w-full grid-cols-[20px_minmax(0,1fr)_auto_16px] items-center gap-3 px-2 py-1.5"
          :title="item.title"
          @click="emit('open', item.path)"
        >
          <span class="text-[var(--workspace-nav-text)]" aria-hidden="true">
            <FileCodeOne v-if="item.type === 'code'" width="18" height="18" />
            <Notebook v-else width="18" height="18" />
          </span>
          <span class="flex min-w-0 flex-col gap-0.5">
            <span
              class="truncate text-ui font-medium text-[var(--workspace-nav-text)]"
            >
              {{ item.title }}
            </span>
            <span
              class="truncate text-ui-caption text-[var(--workspace-nav-muted)]"
            >
              {{ item.categoryName || t('nav.uncategorized') }}
            </span>
          </span>
          <time
            class="whitespace-nowrap text-ui-caption text-[var(--workspace-nav-muted)]"
            :datetime="item.modified"
          >
            {{ formatModified(item.modified) }}
          </time>
          <ArrowRight
            class="text-[var(--workspace-nav-muted)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            width="16"
            height="16"
            aria-hidden="true"
          />
        </button>
      </li>
    </ul>
    <div
      v-else
      class="flex min-h-48 flex-col items-center justify-center gap-3 rounded-lg bg-[var(--workspace-nav-bg)] dark:bg-[var(--categories-content-bg)] px-4 py-6 text-center text-[var(--workspace-nav-muted)]"
    >
      <FolderOpen width="24" height="24" aria-hidden="true" />
      <p class="m-0 text-ui">
        {{
          workspaceRoot
            ? t('workbenchHome.noRecent')
            : t('workbenchHome.workspaceNotSet')
        }}
      </p>
      <button
        type="button"
        class="ui-action bg-ui-selected px-3"
        @click="emit('openEmpty')"
      >
        {{ emptyActionLabel }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowRight from '~icons/lucide/arrow-right';
import FileCodeOne from '~icons/lucide/file-code';
import Notebook from '~icons/lucide/notebook';
import FolderOpen from '~icons/lucide/folder-open';
import { useI18n } from 'vue-i18n';
import type { WorkbenchRecentItem } from '@/workbench/viewModel';

defineProps<{
  items: WorkbenchRecentItem[];
  workspaceRoot: string;
  emptyActionLabel: string;
}>();
const emit = defineEmits<{
  open: [path: string];
  openEmpty: [];
  viewAll: [];
}>();
const { t, locale } = useI18n();
const formatModified = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale.value, {
    month: 'short',
    day: 'numeric'
  }).format(date);
};
</script>
