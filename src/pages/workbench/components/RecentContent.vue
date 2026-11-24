<template>
  <section class="min-w-0">
    <header
      class="mb-1.5 flex min-h-[var(--wb-control)] items-center justify-between gap-2"
    >
      <h2
        class="m-0 flex min-w-0 items-center gap-2 text-[clamp(0.9375rem,1.35cqw,1.25rem)] font-medium leading-tight text-ui-main"
      >
        <Clock class="shrink-0" width="19" height="19" aria-hidden="true" />
        {{ t('workbenchHome.recent') }}
      </h2>
      <button
        type="button"
        class="ui-action ui-action--muted h-[var(--wb-control)] gap-1 text-[length:var(--wb-caption)] active:bg-ui-selected"
        @click="emit('viewAll')"
      >
        {{ t('workbenchHome.viewAll') }}
        <ArrowRight width="14" height="14" aria-hidden="true" />
      </button>
    </header>
    <ul v-if="items.length" class="m-0 list-none p-0">
      <li
        v-for="item in items"
        :key="item.id"
        class="min-w-0 border-b border-solid border-[var(--settings-border)] py-0.5"
      >
        <button
          type="button"
          class="ui-list-action grid min-h-[clamp(3rem,8.4cqh,7rem)] w-full grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-[clamp(0.375rem,1cqw,1.25rem)] px-[var(--wb-inset)] py-1.5 hover:enabled:bg-[var(--el-color-primary-light-9)] focus-visible:bg-[var(--el-color-primary-light-9)] active:bg-ui-selected"
          :title="item.title"
          @click="emit('open', item.path)"
        >
          <span class="text-ui-muted" aria-hidden="true">
            <FileCodeOne v-if="item.type === 'code'" width="18" height="18" />
            <Notebook v-else width="18" height="18" />
          </span>
          <span class="flex min-w-0 flex-col gap-0.5">
            <span class="truncate font-normal text-[color:var(--wb-primary)]">
              {{ item.title }}
            </span>
            <span
              class="flex min-w-0 items-center justify-between gap-3 text-[length:var(--wb-caption)] text-ui-muted"
            >
              <span
                class="flex min-w-0 items-center gap-1"
                :title="item.categoryName || t('nav.uncategorized')"
              >
                <Folder
                  width="12"
                  height="12"
                  class="shrink-0"
                  aria-hidden="true"
                />
                <span class="truncate">
                  {{ item.categoryName || t('nav.uncategorized') }}
                </span>
              </span>
              <span
                v-if="item.tags.length"
                class="flex max-w-[50%] shrink-0 items-center gap-1 [@container_workbench_(max-width:28rem)]:hidden"
              >
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="min-w-0 truncate rounded-full bg-[var(--el-color-primary-light-9)] px-1.5 text-primary"
                  :title="tag"
                >
                  {{ tag }}
                </span>
              </span>
            </span>
          </span>
          <time
            class="whitespace-nowrap text-[length:var(--wb-caption)] tabular-nums text-ui-muted"
            :datetime="item.modified"
          >
            {{ formatModified(item.modified) }}
          </time>
          <ChevronRight
            class="text-ui-muted"
            width="14"
            height="14"
            aria-hidden="true"
          />
        </button>
      </li>
    </ul>
    <div
      v-else
      class="flex min-h-40 flex-col items-center justify-center gap-3 rounded-ui-lg bg-ui-card-soft px-4 py-6 text-center text-ui-muted"
    >
      <FolderOpen width="24" height="24" aria-hidden="true" />
      <p class="m-0 text-ui">
        {{
          !contentAvailable
            ? t(loading ? 'common.loading' : 'workbenchHome.recentUnavailable')
            : t(
                workspaceRoot
                  ? 'workbenchHome.noRecent'
                  : 'workbenchHome.workspaceNotSet'
              )
        }}
      </p>
      <button
        type="button"
        v-if="contentAvailable"
        class="ui-action bg-ui-selected px-3 active:bg-ui-selected"
        @click="emit('openEmpty')"
      >
        {{ emptyActionLabel }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowRight from '~icons/lucide/arrow-right';
import ChevronRight from '~icons/lucide/chevron-right';
import Clock from '~icons/lucide/clock';
import FileCodeOne from '~icons/lucide/file-code';
import Folder from '~icons/lucide/folder';
import Notebook from '~icons/lucide/notebook';
import FolderOpen from '~icons/lucide/folder-open';
import { useI18n } from 'vue-i18n';
import { formatDate } from '@/utils/time-format';
import type { WorkbenchRecentItem } from '@/workbench/viewModel';

defineProps<{
  items: WorkbenchRecentItem[];
  workspaceRoot: string;
  contentAvailable: boolean;
  loading: boolean;
  emptyActionLabel: string;
}>();
const emit = defineEmits<{
  open: [path: string];
  openEmpty: [];
  viewAll: [];
}>();
const { t, locale } = useI18n();
const timeFormatter = computed(
  () =>
    new Intl.DateTimeFormat(locale.value, {
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    })
);
const relativeFormatter = computed(
  () => new Intl.RelativeTimeFormat(locale.value, { numeric: 'auto' })
);
const formatModified = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const day = formatDate(date);
  if (day === formatDate(today) || day === formatDate(yesterday)) {
    const relativeDay = day === formatDate(today) ? 0 : -1;
    return `${relativeFormatter.value.format(relativeDay, 'day')} ${timeFormatter.value.format(date)}`;
  }
  return new Intl.DateTimeFormat(locale.value, {
    year: date.getFullYear() === today.getFullYear() ? undefined : 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};
</script>
