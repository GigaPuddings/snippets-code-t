<template>
  <section
    class="flex max-h-[498px] min-h-0 w-full min-w-0 self-start flex-col overflow-hidden rounded-xl border border-workbench-card-border bg-workbench-card shadow-workbench"
  >
    <header
      class="flex min-h-12 flex-none items-center justify-between gap-4 border-b border-workbench-card-border px-[18px] [@media(max-height:800px)]:min-h-[42px] [@media(max-height:800px)]:px-[14px]"
    >
      <div class="flex min-w-0 items-center gap-2.5 text-workbench-primary">
        <FileText theme="outline" size="20" />
        <h2
          class="m-0 text-[17px] font-[650] leading-[1.3] text-workbench-text [@media(max-height:800px)]:text-[15px]"
        >
          {{ t('workbenchHome.recent') }}
        </h2>
      </div>
      <button
        type="button"
        class="flex flex-none items-center gap-1 border-0 bg-transparent px-0 py-1 text-xs text-workbench-primary transition-opacity duration-[160ms] hover:opacity-[0.72] focus-visible:opacity-[0.72] focus-visible:outline-none"
        @click="emit('viewAll')"
      >
        {{ t('workbenchHome.viewAll') }}
        <ArrowRight theme="outline" size="15" />
      </button>
    </header>

    <ul v-if="items.length" class="m-0 flex min-h-0 list-none flex-col p-0">
      <li
        v-for="item in items"
        :key="item.id"
        class="flex min-h-0 flex-[0_0_71px] border-b border-workbench-card-border last:border-b-0 [@media(max-height:800px)]:flex-[0_0_58px]"
      >
        <button
          type="button"
          class="group grid w-full min-w-0 grid-cols-[40px_minmax(0,1fr)_auto_24px] items-center gap-3 border-0 bg-transparent px-[14px] py-[7px] text-left text-workbench-text transition-colors duration-[160ms] hover:bg-workbench-hover focus-visible:bg-workbench-hover focus-visible:outline-none [@media(max-height:800px)]:grid-cols-[34px_minmax(0,1fr)_auto_18px] [@media(max-height:800px)]:gap-[9px] [@media(max-height:800px)]:px-[11px] [@media(max-height:800px)]:py-1"
          @click="emit('open', item.path)"
        >
          <span
            class="flex size-[38px] items-center justify-center rounded-[9px] bg-workbench-recent-icon text-workbench-muted transition-[color,background-color] duration-[160ms] group-hover:bg-workbench-recent-icon-hover group-hover:text-workbench-primary group-focus-visible:bg-workbench-recent-icon-hover group-focus-visible:text-workbench-primary [@media(max-height:800px)]:size-8 [@media(max-height:800px)]:rounded-[7px]"
            aria-hidden="true"
          >
            <FileCodeOne
              v-if="item.type === 'code'"
              theme="outline"
              size="18"
            />
            <FileText v-else theme="outline" size="18" />
          </span>
          <span class="flex min-w-0 flex-col items-start gap-px">
            <strong
              class="w-full truncate text-sm font-[560] leading-[1.3] [@media(max-height:800px)]:text-[13px]"
            >
              {{ item.title }}
            </strong>
            <small
              class="block max-w-full truncate rounded bg-workbench-tag px-1.5 py-px text-[11px] leading-[1.35] text-workbench-muted [@media(max-height:800px)]:py-0 [@media(max-height:800px)]:text-[10px]"
            >
              {{ item.categoryName || t('nav.uncategorized') }}
            </small>
          </span>
          <time
            class="whitespace-nowrap text-xs leading-[1.3] text-workbench-muted [@media(max-height:800px)]:text-[11px]"
            :datetime="item.modified"
          >
            {{ formatModified(item.modified) }}
          </time>
          <More class="text-workbench-muted-soft" theme="outline" size="16" />
        </button>
      </li>
    </ul>

    <div
      v-else
      class="flex min-h-0 flex-1 flex-col items-center justify-center text-center text-workbench-muted"
    >
      <FolderOpen theme="outline" size="25" />
      <strong class="mt-[9px] text-sm font-[550] text-workbench-text">
        {{
          workspaceRoot
            ? t('workbenchHome.noRecent')
            : t('workbenchHome.workspaceNotSet')
        }}
      </strong>
      <button
        type="button"
        class="mt-3 rounded-[7px] border border-workbench-card-border bg-transparent px-3 py-1.5 text-xs text-workbench-primary hover:border-workbench-card-border-hover focus-visible:border-workbench-card-border-hover focus-visible:outline-none"
        @click="emit('openEmpty')"
      >
        {{ emptyActionLabel }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  FileCodeOne,
  FileText,
  FolderOpen,
  More
} from '@icon-park/vue-next';
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
