<template>
  <main class="workbench-page" :aria-busy="loading">
    <p v-if="loadError" class="workbench-alert" role="alert">
      {{ loadError }}
    </p>

    <div class="workbench-shell">
      <WorkbenchHero
        :workspace-root="workspaceRoot"
        :loading="loading"
        @open-workspace="navigate(workspaceAction)"
        @refresh="refresh"
      />

      <WorkbenchMetrics :metrics="metrics" @select="openMetric" />

      <div class="workbench-main">
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

        <aside class="workbench-sidebar">
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

<style scoped lang="scss">
.workbench-page {
  --wb-bg: #f7faff;
  --wb-card-bg: rgb(255 255 255 / 78%);
  --wb-card-bg-strong: rgb(255 255 255 / 92%);
  --wb-card-border: rgb(214 224 238 / 78%);
  --wb-card-border-hover: rgb(95 116 243 / 35%);
  --wb-text: #172033;
  --wb-muted: #748197;
  --wb-muted-soft: #93a0b3;
  --wb-primary: var(--el-color-primary);
  --wb-success: #19bf67;
  --wb-warning: #ff9f1c;
  --wb-hover: rgb(95 116 243 / 4%);
  --wb-shadow: 0 4px 18px rgb(36 78 140 / 4%);

  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  color: var(--wb-text);
  background: var(--wb-bg);
}

:global(.dark) .workbench-page {
  --wb-bg: #24262b;
  --wb-card-bg: rgb(31 34 40 / 84%);
  --wb-card-bg-strong: rgb(35 38 45 / 94%);
  --wb-card-border: rgb(93 105 124 / 40%);
  --wb-card-border-hover: rgb(123 136 253 / 52%);
  --wb-text: #f1f5fb;
  --wb-muted: #aab4c4;
  --wb-muted-soft: #818c9e;
  --wb-hover: rgb(123 136 253 / 9%);
  --wb-shadow: 0 4px 18px rgb(0 0 0 / 12%);
}

.workbench-shell {
  display: grid;
  flex: 1;
  grid-template-rows: 112px 100px minmax(0, 1fr);
  gap: 18px;
  width: 100%;
  max-width: 1600px;
  min-height: 0;
  padding: 18px clamp(24px, 3vw, 48px) 16px;
  margin: 0 auto;
}

.workbench-main {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(340px, 0.95fr);
  gap: 18px;
  min-width: 0;
  min-height: 0;
}

.workbench-sidebar {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 12px;
  min-width: 0;
  min-height: 0;
}

.workbench-alert {
  position: absolute;
  top: 12px;
  left: 50%;
  z-index: 20;
  max-width: min(720px, calc(100% - 48px));
  padding: 8px 12px;
  font-size: 12px;
  color: #b42318;
  background: rgb(254 243 242 / 96%);
  border: 1px solid #fecdca;
  border-radius: 8px;
  box-shadow: var(--wb-shadow);
  transform: translateX(-50%);
}

@media (width <= 1080px) {
  .workbench-shell {
    padding-inline: 22px;
  }

  .workbench-main {
    grid-template-columns: minmax(0, 1.55fr) minmax(310px, 0.85fr);
    gap: 14px;
  }
}

@media (height <= 800px) {
  .workbench-shell {
    grid-template-rows: 76px 82px minmax(0, 1fr);
    gap: 12px;
    padding-top: 12px;
    padding-bottom: 10px;
  }

  .workbench-sidebar {
    gap: 10px;
  }
}

@media (height <= 620px) {
  .workbench-page {
    overflow-y: auto;
  }

  .workbench-shell {
    flex: none;
    min-height: 578px;
  }
}
</style>
