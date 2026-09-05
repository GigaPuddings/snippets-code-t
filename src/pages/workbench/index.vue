<template>
  <main
    class="h-full min-h-0 w-full flex-1 overflow-y-auto bg-content text-panel"
  >
    <div
      class="mx-auto flex min-h-full w-full max-w-[1320px] flex-col px-5 py-5 sm:px-7"
    >
      <header class="flex flex-wrap items-start justify-between gap-4">
        <div class="min-w-0">
          <p class="text-xs font-medium text-primary">
            {{ t('workbenchHome.eyebrow') }}
          </p>
          <h1 class="mt-1 text-2xl font-semibold text-panel">
            {{ t('workbenchHome.title') }}
          </h1>
          <p
            class="mt-1 max-w-3xl truncate text-xs text-content"
            :title="workspaceRoot"
          >
            {{ workspaceRoot || t('workbenchHome.workspaceNotSet') }}
          </p>
        </div>
        <CustomButton size="small" plain :loading="loading" @click="refresh">
          <Refresh class="mr-1.5" theme="outline" size="14" />
          {{ t('workbenchHome.refresh') }}
        </CustomButton>
      </header>

      <button
        type="button"
        class="mt-5 flex h-11 w-full items-center gap-3 rounded-md border border-panel bg-panel px-4 text-left shadow-sm transition-colors hover:bg-panel-hover-bg focus:outline-none focus:ring-2 focus:ring-primary/30"
        @click="openQuickSearch"
      >
        <Search class="shrink-0 text-primary" theme="outline" size="18" />
        <span class="min-w-0 flex-1 truncate text-sm text-content">
          {{ t('workbenchHome.searchPlaceholder') }}
        </span>
        <kbd
          class="shrink-0 rounded border border-panel bg-content px-2 py-0.5 text-[10px] text-content"
        >
          Ctrl K
        </kbd>
      </button>

      <p
        v-if="loadError"
        class="mt-3 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300"
      >
        {{ loadError }}
      </p>

      <section
        class="mt-5 grid grid-cols-2 border-y border-panel md:grid-cols-4"
        :aria-label="t('workbenchHome.metrics')"
      >
        <div
          v-for="(metric, index) in metrics"
          :key="metric.id"
          class="min-w-0 px-4 py-3"
          :class="{
            'border-l border-panel': index % 2 !== 0,
            'md:border-l': index > 0,
            'border-t md:border-t-0': index > 1
          }"
        >
          <span class="block truncate text-[11px] text-content">
            {{ metric.label }}
          </span>
          <div class="mt-1 flex items-baseline gap-2">
            <strong class="text-xl font-semibold tabular-nums text-panel">
              {{ metric.value }}
            </strong>
            <small class="truncate text-[11px] text-content">
              {{ metric.meta }}
            </small>
          </div>
        </div>
      </section>

      <div
        class="mt-5 grid min-h-0 flex-1 gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(17rem,0.7fr)]"
      >
        <section class="min-w-0">
          <div class="mb-2 flex items-center justify-between gap-3">
            <h2 class="text-sm font-semibold text-panel">
              {{ t('workbenchHome.recent') }}
            </h2>
            <button
              type="button"
              class="inline-flex items-center gap-1 text-xs text-primary hover:opacity-80"
              @click="navigate('/config/category/contentList')"
            >
              {{ t('workbenchHome.viewAll') }}
              <ArrowRight theme="outline" size="13" />
            </button>
          </div>

          <div class="overflow-hidden rounded-md border border-panel bg-panel">
            <button
              v-for="item in recentItems"
              :key="item.id"
              type="button"
              class="group flex h-14 w-full items-center gap-3 border-b border-panel px-4 text-left last:border-b-0 hover:bg-panel-hover-bg"
              @click="navigate(item.path)"
            >
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-content text-content group-hover:text-primary"
              >
                <FileCodeOne
                  v-if="item.type === 'code'"
                  theme="outline"
                  size="17"
                />
                <FileText v-else theme="outline" size="17" />
              </span>
              <span class="min-w-0 flex-1">
                <strong class="block truncate text-sm font-medium text-panel">
                  {{ item.title }}
                </strong>
                <small class="mt-0.5 block truncate text-[11px] text-content">
                  {{ item.categoryName || t('nav.uncategorized') }}
                </small>
              </span>
              <time
                class="shrink-0 text-[11px] text-content"
                :datetime="item.modified"
              >
                {{ formatModified(item.modified) }}
              </time>
              <ArrowRight
                class="shrink-0 text-content opacity-0 transition-opacity group-hover:opacity-100"
                theme="outline"
                size="14"
              />
            </button>

            <div
              v-if="recentItems.length === 0"
              class="flex min-h-52 flex-col items-center justify-center px-6 text-center"
            >
              <BookOpen theme="outline" size="24" class="text-content" />
              <strong class="mt-3 text-sm font-medium text-panel">
                {{
                  workspaceRoot
                    ? t('workbenchHome.noRecent')
                    : t('workbenchHome.workspaceNotSet')
                }}
              </strong>
              <CustomButton
                class="mt-4"
                size="small"
                plain
                @click="navigate(workspaceEmptyAction)"
              >
                {{
                  workspaceRoot
                    ? t('workbenchHome.openWorkspace')
                    : t('workbenchHome.configureWorkspace')
                }}
              </CustomButton>
            </div>
          </div>
        </section>

        <aside class="min-w-0 space-y-5">
          <section>
            <h2 class="mb-2 text-sm font-semibold text-panel">
              {{ t('workbenchHome.quickActions') }}
            </h2>
            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="action in quickActions"
                :key="action.id"
                type="button"
                class="flex min-h-16 min-w-0 items-center gap-2 rounded-md border border-panel bg-panel px-3 text-left hover:bg-panel-hover-bg"
                @click="navigate(action.path)"
              >
                <component
                  :is="action.icon"
                  class="shrink-0 text-primary"
                  theme="outline"
                  size="18"
                />
                <span class="truncate text-xs font-medium text-panel">
                  {{ t(action.labelKey) }}
                </span>
              </button>
            </div>
          </section>

          <section>
            <div class="mb-2 flex items-center justify-between gap-3">
              <h2 class="text-sm font-semibold text-panel">
                {{ t('workbenchHome.systemStatus') }}
              </h2>
              <button
                type="button"
                class="text-xs text-primary hover:opacity-80"
                @click="navigate('/config/category/settings?tab=workbench')"
              >
                {{ t('workbenchHome.manage') }}
              </button>
            </div>
            <div
              class="overflow-hidden rounded-md border border-panel bg-panel"
            >
              <button
                v-for="layer in layers"
                :key="layer.id"
                type="button"
                class="flex h-11 w-full items-center gap-2 border-b border-panel px-3 text-left last:border-b-0 hover:bg-panel-hover-bg"
                @click="navigateTo(layer.actions[0])"
              >
                <component
                  :is="layer.icon"
                  class="shrink-0 text-content"
                  theme="outline"
                  size="16"
                />
                <span class="min-w-0 flex-1 truncate text-xs text-panel">
                  {{ layer.label }}
                </span>
                <span
                  class="h-2 w-2 shrink-0 rounded-full"
                  :class="{
                    'bg-green-500': layer.status === 'ready',
                    'bg-amber-500': layer.status === 'attention',
                    'bg-slate-400': layer.status === 'inactive'
                  }"
                  :title="statusLabel(layer.status)"
                  :aria-label="statusLabel(layer.status)"
                ></span>
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  BookOpen,
  FileCodeOne,
  FileText,
  Refresh,
  Search
} from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { CustomButton } from '@/components/UI';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import { configNavigationTabs } from '@/plugins/navigation';
import { usePluginStore } from '@/store';
import { useWorkbenchOverview } from '@/workbench/useWorkbenchOverview';

defineOptions({ name: 'WorkbenchHome' });

const { t, locale } = useI18n();
const router = useRouter();
const pluginStore = usePluginStore();
const { open: openQuickSearch } = useConfigQuickSearch();
const {
  loading,
  loadError,
  metrics,
  layers,
  workspaceRoot,
  recentItems,
  refresh,
  navigateTo,
  statusLabel
} = useWorkbenchOverview();

const quickActions = computed(() =>
  configNavigationTabs.filter(
    (tab) =>
      tab.id !== 'workbench' &&
      (!tab.pluginId || pluginStore.isEnabled(tab.pluginId))
  )
);

const workspaceEmptyAction = computed(() =>
  workspaceRoot.value
    ? '/config/category/contentList'
    : '/config/category/settings?tab=data'
);

const navigate = (path: string): void => {
  void router.push(path);
};

const formatModified = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale.value, {
    month: 'short',
    day: 'numeric'
  }).format(date);
};
</script>
