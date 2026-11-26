<template>
  <main
    class="workbench h-full min-h-0 min-w-0 overflow-y-auto bg-[var(--settings-surface)] font-ui [&_button]:duration-150 motion-reduce:[&_button]:transition-none"
    :aria-busy="loading"
  >
    <div
      class="workbench-content mx-auto flex min-h-full w-full max-w-[138rem] flex-col"
    >
      <WorkbenchHero
        :workspace-root="workspaceRoot"
        :loading="loading"
        @open-workspace="navigateTo(workspaceAction)"
        @refresh="refresh"
      />
      <p
        v-if="loadError"
        class="m-0 rounded-ui bg-[var(--el-color-warning-light-9)] px-3 py-2 text-ui-caption text-ui-main"
        role="alert"
        :title="loadError"
      >
        {{ t('workbenchHome.refreshFailed') }}
      </p>
      <WorkbenchMetrics
        :metrics="metrics"
        :loading="loading"
        @select="openMetric"
      />
      <div class="workbench-columns grid min-w-0">
        <RecentContent
          :items="recentItems"
          :workspace-root="workspaceRoot"
          :content-available="contentAvailable"
          :loading="loading"
          :empty-action-label="
            workspaceRoot
              ? t('workbenchHome.openWorkspace')
              : t('workbenchHome.configureWorkspace')
          "
          @open="navigateTo"
          @open-empty="navigateTo(workspaceAction)"
          @view-all="navigateTo(workspaceAction)"
        />
        <div class="workbench-tools flex min-w-0 flex-col">
          <QuickActions :actions="quickActions" @select="runQuickAction" />
          <CapabilityStatus
            :layers="layers"
            @manage="navigateTo('/config/category/settings?tab=workbench')"
            @select="openCapability"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import { hasPluginConfigRoute } from '@/plugins/runtime';
import { usePluginStore } from '@/store';
import { useWorkbenchOverview } from '@/workbench/useWorkbenchOverview';
import type { WorkbenchLayer, WorkbenchMetric } from '@/workbench/viewModel';
import {
  buildWorkbenchQuickActions,
  type WorkbenchQuickAction
} from './quickActions';
import CapabilityStatus from './components/CapabilityStatus.vue';
import QuickActions from './components/QuickActions.vue';
import RecentContent from './components/RecentContent.vue';
import WorkbenchHero from './components/WorkbenchHero.vue';
import WorkbenchMetrics from './components/WorkbenchMetrics.vue';

defineOptions({ name: 'WorkbenchHome' });

const { t } = useI18n();
const { open: openQuickSearch } = useConfigQuickSearch();
const pluginStore = usePluginStore();
const {
  loading,
  loadError,
  contentAvailable,
  metrics,
  layers,
  workspaceRoot,
  recentItems,
  refresh,
  navigateTo
} = useWorkbenchOverview();

const quickActions = computed(() =>
  buildWorkbenchQuickActions(workspaceRoot.value, (tab) => {
    if (!tab.pluginId) return true;
    // Runtime route registrations are published through the plugin store.
    pluginStore.runtimeRevision;
    return (
      pluginStore.isEnabled(tab.pluginId) &&
      hasPluginConfigRoute(tab.pluginId, tab.routeName)
    );
  })
);

const workspaceSettings = '/config/category/settings?tab=data';
const workspaceAction = computed(() =>
  workspaceRoot.value ? '/config/category/contentList' : workspaceSettings
);

const metricDestinations = {
  plugins: '/config/category/settings?tab=plugins',
  search: '/config/category/settings?tab=developer&section=search',
  ai: '/config/category/settings?tab=ai'
};

const openMetric = (id: WorkbenchMetric['id']): void => {
  navigateTo(id === 'content' ? workspaceAction.value : metricDestinations[id]);
};

const openCapability = (id: WorkbenchLayer['id']): void => {
  navigateTo(id === 'workspace' ? workspaceSettings : metricDestinations[id]);
};

const runQuickAction = (action: WorkbenchQuickAction): void => {
  if (action.path) navigateTo(action.path);
  else openQuickSearch();
};
</script>

<style scoped>
.workbench {
  container: workbench / size;
}

.workbench-content {
  --wb-gap: clamp(0.75rem, min(2.2cqw, 2.5cqh), 2.25rem);
  --wb-padding: clamp(0.75rem, 2.2cqw, 3.75rem);
  --wb-inset: clamp(0.625rem, min(1.2cqw, 2cqh), 1.5rem);
  --wb-control: clamp(var(--app-ui-control-height), 4.8cqh, 2.75rem);
  --wb-primary: color-mix(
    in srgb,
    var(--workspace-nav-text) 76%,
    var(--workspace-nav-muted)
  );
  --wb-caption: clamp(var(--app-ui-caption-size), 1cqw, 0.875rem);

  gap: var(--wb-gap);
  padding: var(--wb-gap) var(--wb-padding);
  font-size: clamp(var(--app-ui-font-size), 1.14cqw, 1.0625rem);
  line-height: 1.45;
  color: var(--wb-primary);
}

.workbench-columns,
.workbench-tools {
  gap: var(--wb-gap);
}

@container workbench (min-width: 56rem) {
  .workbench-columns {
    grid-template-columns: minmax(0, 1.04fr) minmax(0, 1fr);
  }

  .workbench-tools {
    padding-inline-start: var(--wb-gap);
    border-inline-start: 1px solid var(--settings-border);
  }
}
</style>
