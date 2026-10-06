<template>
  <main
    class="flex h-full min-h-0 w-full min-w-0 overflow-hidden font-ui text-ui text-[var(--workspace-nav-text)]"
    :aria-busy="loading"
  >
    <div
      class="flex min-w-0 flex-1 flex-col overflow-y-auto bg-[var(--settings-surface)]"
    >
      <div
        class="mx-auto flex w-full max-w-6xl shrink-0 flex-col gap-4 px-8 py-4 max-[640px]:px-5"
      >
        <p
          v-if="loadError"
          class="m-0 rounded-lg bg-[var(--el-color-danger-light-9)] px-3 py-2 text-ui-caption text-[var(--el-color-danger)]"
          role="alert"
        >
          {{ loadError }}
        </p>
        <WorkbenchHero
          :workspace-root="workspaceRoot"
          :loading="loading"
          @open-workspace="navigate(workspaceAction)"
          @refresh="refresh"
        />
        <WorkbenchMetrics :metrics="metrics" @select="openMetric" />
        <div
          class="grid min-w-0 grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)] items-start gap-8 max-[900px]:grid-cols-1"
        >
          <RecentContent
            :items="recentItems"
            :workspace-root="workspaceRoot"
            :empty-action-label="
              workspaceRoot
                ? t('workbenchHome.openWorkspace')
                : t('workbenchHome.configureWorkspace')
            "
            @open="navigate"
            @open-empty="navigate(workspaceEmptyAction)"
            @view-all="navigate('/config/category/contentList')"
          />
          <aside class="flex min-w-0 flex-col gap-5">
            <QuickActions :actions="quickActions" @navigate="navigate" />
            <CapabilityStatus
              :layers="layers"
              @manage="navigate('/config/category/settings?tab=workbench')"
              @navigate-action="navigateTo"
            />
          </aside>
        </div>
      </div>
      <WorkbenchFooter
        class="mt-auto"
        :recent-count="recentItems.length"
        :workspace-ready="Boolean(workspaceRoot)"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { configNavigationTabs } from '@/plugins/navigation';
import { usePluginStore } from '@/store';
import { useWorkbenchOverview } from '@/workbench/useWorkbenchOverview';
import CapabilityStatus from './components/CapabilityStatus.vue';
import QuickActions from './components/QuickActions.vue';
import RecentContent from './components/RecentContent.vue';
import WorkbenchFooter from './components/WorkbenchFooter.vue';
import WorkbenchHero from './components/WorkbenchHero.vue';
import WorkbenchMetrics from './components/WorkbenchMetrics.vue';

defineOptions({ name: 'WorkbenchHome' });

const { t } = useI18n();
const router = useRouter();
const pluginStore = usePluginStore();
const {
  loading,
  loadError,
  metrics,
  layers,
  workspaceRoot,
  recentItems,
  refresh,
  navigateTo
} = useWorkbenchOverview();

const quickActionIds = new Set(['workspace', 'launcher', 'todo', 'aiChat']);

const quickActions = computed(() =>
  configNavigationTabs.filter(
    (tab) =>
      quickActionIds.has(tab.id) &&
      (!tab.pluginId || pluginStore.isEnabled(tab.pluginId))
  )
);

const workspaceAction = computed(() =>
  workspaceRoot.value
    ? '/config/category/contentList'
    : '/config/category/settings?tab=data'
);

const workspaceEmptyAction = computed(() => workspaceAction.value);

const metricDestinations: Record<string, string> = {
  content: '/config/category/contentList',
  plugins: '/config/category/settings?tab=plugins',
  search: '/config/retrieve',
  ai: '/config/category/settings?tab=ai'
};

const navigate = (path: string): void => {
  void router.push(path);
};

const openMetric = (metricId: string): void => {
  const path = metricDestinations[metricId];
  if (path) navigate(path);
};
</script>
