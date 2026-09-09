<template>
  <main
    class="relative flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden bg-workbench-bg text-workbench-text [@media(max-height:620px)]:overflow-y-auto"
    :aria-busy="loading"
  >
    <p
      v-if="loadError"
      class="absolute left-1/2 top-3 z-20 max-w-[min(720px,calc(100%_-_48px))] -translate-x-1/2 rounded-lg border border-workbench-alert-border bg-workbench-alert-bg px-3 py-2 text-xs text-workbench-alert-text shadow-workbench"
      role="alert"
    >
      {{ loadError }}
    </p>

    <div
      class="mx-auto grid min-h-0 w-full max-w-[1600px] flex-1 grid-rows-[134px_10px_100px_20px_minmax(0,1fr)] px-[clamp(24px,3vw,48px)] pb-4 pt-[18px] [@media(max-height:620px)]:min-h-[592px] [@media(max-height:620px)]:flex-none [@media(max-height:800px)]:!grid-rows-[108px_6px_76px_14px_minmax(0,1fr)] [@media(max-height:800px)]:!pt-3 [@media(max-height:800px)]:pb-2.5 [@media(max-height:830px)]:grid-rows-[130px_14px_76px_14px_minmax(0,1fr)] [@media(max-height:830px)]:pt-4 [@media(max-width:1080px)]:px-[22px]"
    >
      <WorkbenchHero
        class="row-start-1 row-end-2"
        :workspace-root="workspaceRoot"
        :loading="loading"
        @open-workspace="navigate(workspaceAction)"
        @refresh="refresh"
      />

      <WorkbenchMetrics
        class="row-start-3 row-end-4"
        :metrics="metrics"
        @select="openMetric"
      />

      <div
        class="row-start-5 row-end-6 grid min-h-0 min-w-0 grid-cols-[minmax(0,1.7fr)_minmax(340px,0.95fr)] gap-[18px] [@media(max-width:1080px)]:grid-cols-[minmax(0,1.55fr)_minmax(310px,0.85fr)] [@media(max-width:1080px)]:gap-[14px]"
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

        <aside
          class="grid min-h-0 min-w-0 grid-rows-[auto_minmax(0,1fr)] gap-3 [@media(max-height:800px)]:gap-2.5"
        >
          <QuickActions :actions="quickActions" @navigate="navigate" />
          <CapabilityStatus
            :layers="layers"
            @manage="navigate('/config/category/settings?tab=workbench')"
            @navigate-action="navigateTo"
          />
        </aside>
      </div>
    </div>

    <WorkbenchFooter :recent-count="recentItems.length" />
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
