<template>
  <div class="settings-panel">
    <div class="panel-header">
      <h3 class="panel-title">{{ t('settings.developer.title') }}</h3>
    </div>

    <main class="panel-content developer-content">
      <section class="summarize-section mode-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('settings.developer.mode') }}</div>
          <div class="summarize-label-desc">{{ t('settings.developer.modeDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <CustomSwitch
            v-model="developerMode"
            :active-text="t('common.on')"
            :inactive-text="t('common.off')"
            @change="handleDeveloperModeChange"
          />
        </div>
      </section>

      <div class="developer-toolbar">
        <div class="developer-actions">
          <CustomButton type="primary" size="small" :loading="loading" @click="refresh">
            {{ t('settings.developer.refresh') }}
          </CustomButton>
          <CustomButton size="small" @click="copyReport">
            {{ t('settings.developer.copy') }}
          </CustomButton>
          <CustomButton size="small" @click="openLogDir">
            {{ t('settings.developer.openLogs') }}
          </CustomButton>
          <CustomButton size="small" @click="clearFrontendLogs">
            {{ t('settings.developer.clearFrontend') }}
          </CustomButton>
        </div>
        <span v-if="diagnostics" class="refresh-time">
          {{ t('settings.developer.generatedAt') }} {{ diagnostics.generatedAt }}
        </span>
      </div>

      <p class="developer-hint">{{ t('settings.developer.hint') }}</p>
      <p v-if="ignoredWarningCount > 0" class="ignored-warning-hint">
        {{ t('settings.developer.ignoredWarnings', { count: ignoredWarningCount }) }}
      </p>

      <section class="diagnostic-summary">
        <article class="summary-card" :class="issueCardClass(totalErrorCount, totalIssueCount)">
          <span class="summary-label">{{ t('settings.developer.status') }}</span>
          <strong>{{ totalIssueCount > 0 ? t('settings.developer.attention') : t('settings.developer.normal') }}</strong>
          <small>{{ t('settings.developer.issueCount', { count: totalIssueCount }) }}</small>
        </article>
        <article class="summary-card">
          <span class="summary-label">{{ t('settings.developer.application') }}</span>
          <strong>v{{ diagnostics?.appVersion || '-' }}</strong>
          <small>{{ diagnostics?.buildMode || '-' }} · {{ diagnostics?.os || '-' }} {{ diagnostics?.arch || '' }}</small>
        </article>
        <article class="summary-card">
          <span class="summary-label">{{ t('settings.developer.windows') }}</span>
          <strong>{{ visibleWindowCount }} / {{ diagnostics?.windows.length || 0 }}</strong>
          <small>{{ t('settings.developer.visibleWindows') }}</small>
        </article>
        <article class="summary-card" :class="issueCardClass(frontendErrorCount, frontendIssueCount)">
          <span class="summary-label">{{ t('settings.developer.frontendIssues') }}</span>
          <strong>{{ frontendIssueCount }}</strong>
          <small>{{ t('settings.developer.errorWarnCount', { errors: frontendErrorCount, warnings: frontendWarningCount }) }}</small>
        </article>
        <article class="summary-card" :class="issueCardClass(backendErrorCount, backendIssueCount)">
          <span class="summary-label">{{ t('settings.developer.backendIssues') }}</span>
          <strong>{{ backendIssueCount }}</strong>
          <small>{{ t('settings.developer.errorWarnCount', { errors: backendErrorCount, warnings: backendWarningCount }) }}</small>
        </article>
      </section>

      <nav class="diagnostic-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="diagnostic-tab"
          :class="{ 'diagnostic-tab--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
          <span v-if="tab.count !== undefined" class="tab-count">{{ tab.count }}</span>
        </button>
      </nav>

      <section v-if="activeTab === 'overview'" class="overview-panel">
        <div class="overview-grid">
          <article class="overview-card">
            <h4>{{ t('settings.developer.paths') }}</h4>
            <dl class="diagnostic-list">
              <div>
                <dt>{{ t('settings.developer.dataDir') }}</dt>
                <dd>{{ diagnostics?.dataDir || '-' }}</dd>
              </div>
              <div>
                <dt>{{ t('settings.developer.pluginDir') }}</dt>
                <dd>{{ diagnostics?.pluginDir || '-' }}</dd>
              </div>
              <div>
                <dt>{{ t('settings.developer.logDir') }}</dt>
                <dd>{{ diagnostics?.logDir || '-' }}</dd>
              </div>
            </dl>
          </article>

          <article class="overview-card">
            <h4>{{ t('settings.developer.windows') }}</h4>
            <div v-if="diagnostics?.windows.length" class="compact-list">
              <div v-for="window in diagnostics.windows" :key="window.label" class="compact-item">
                <div class="compact-item-title">
                  <span class="status-dot" :class="{ 'status-dot--active': window.visible }"></span>
                  <strong>{{ window.label }}</strong>
                  <span class="state-text">{{ window.visible ? t('settings.developer.visible') : t('settings.developer.hidden') }}</span>
                </div>
                <small>{{ window.url }}</small>
              </div>
            </div>
            <p v-else class="empty-text">{{ t('settings.developer.empty') }}</p>
          </article>

          <article class="overview-card">
            <h4>{{ t('settings.developer.logFiles') }}</h4>
            <div v-if="diagnostics?.logFiles.length" class="compact-list">
              <div v-for="file in diagnostics.logFiles" :key="file.path" class="compact-item">
                <div class="compact-item-title">
                  <strong>{{ fileName(file.path) }}</strong>
                  <span class="state-text">{{ formatBytes(file.sizeBytes) }}</span>
                </div>
                <small>{{ file.modifiedAt || '-' }} · {{ file.path }}</small>
              </div>
            </div>
            <p v-else class="empty-text">{{ t('settings.developer.empty') }}</p>
          </article>
        </div>
      </section>

      <section v-else class="log-panel">
        <div class="log-toolbar">
          <input
            v-model="logSearch"
            class="log-search"
            type="search"
            :placeholder="t('settings.developer.searchLogs')"
          />
          <span>{{ t('settings.developer.matchLines', { count: matchedLineCount }) }}</span>
        </div>
        <pre class="diagnostic-report">{{ visibleLogText }}</pre>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton, CustomSwitch } from '@/components/UI';
import {
  getDeveloperDiagnostics,
  openDeveloperLogDir,
  type DeveloperDiagnostics
} from '@/api/developerDiagnostics';
import {
  clearFrontendDiagnostics,
  formatFrontendDiagnostics,
  getFrontendDiagnostics,
  isDeveloperModeEnabled,
  redactDiagnosticText,
  setDeveloperModeEnabled,
  summarizeBackendDiagnostics,
  summarizeFrontendDiagnostics,
  type FrontendDiagnosticEntry
} from '@/utils/developer-diagnostics';
import modal from '@/utils/modal';

type DiagnosticTab = 'overview' | 'frontend' | 'backend' | 'report';

defineOptions({
  name: 'DeveloperSettings'
});

const { t } = useI18n();
const developerMode = ref(isDeveloperModeEnabled());
const diagnostics = ref<DeveloperDiagnostics | null>(null);
const frontendLogs = ref<FrontendDiagnosticEntry[]>([]);
const loading = ref(false);
const activeTab = ref<DiagnosticTab>('overview');
const logSearch = ref('');

const frontendSummary = computed(() => summarizeFrontendDiagnostics(frontendLogs.value));
const backendSummary = computed(() =>
  summarizeBackendDiagnostics(diagnostics.value?.recentBackendLogs)
);
const frontendErrorCount = computed(() => frontendSummary.value.errors);
const frontendWarningCount = computed(() => frontendSummary.value.warnings);
const frontendIssueCount = computed(() => frontendSummary.value.total);
const backendErrorCount = computed(() => backendSummary.value.errors);
const backendWarningCount = computed(() => backendSummary.value.warnings);
const backendIssueCount = computed(() => backendSummary.value.total);
const totalErrorCount = computed(() => frontendErrorCount.value + backendErrorCount.value);
const totalIssueCount = computed(() => frontendIssueCount.value + backendIssueCount.value);
const ignoredWarningCount = computed(
  () => frontendSummary.value.ignoredWarnings + backendSummary.value.ignoredWarnings
);
const visibleWindowCount = computed(() =>
  diagnostics.value?.windows.filter((window) => window.visible).length || 0
);

const frontendLogText = computed(() =>
  formatFrontendDiagnostics(frontendLogs.value) || t('settings.developer.empty')
);
const backendLogText = computed(() =>
  redactDiagnosticText(diagnostics.value?.recentBackendLogs || '') || t('settings.developer.empty')
);

const reportText = computed(() => {
  const { recentBackendLogs: _recentBackendLogs, ...summary } = diagnostics.value || {
    recentBackendLogs: ''
  };
  return redactDiagnosticText(
    [
      '===== Environment =====',
      JSON.stringify(summary, null, 2),
      '',
      '===== Frontend diagnostics =====',
      frontendLogText.value,
      '',
      '===== Backend logs =====',
      backendLogText.value
    ].join('\n')
  );
});

const tabs = computed(() => [
  { id: 'overview' as const, label: t('settings.developer.overview') },
  { id: 'frontend' as const, label: t('settings.developer.frontendLogs'), count: frontendIssueCount.value },
  { id: 'backend' as const, label: t('settings.developer.backendLogs'), count: backendIssueCount.value },
  { id: 'report' as const, label: t('settings.developer.fullReport') }
]);

const selectedLogText = computed(() => {
  if (activeTab.value === 'frontend') return frontendLogText.value;
  if (activeTab.value === 'backend') return backendLogText.value;
  return reportText.value;
});

const visibleLogText = computed(() => {
  const keyword = logSearch.value.trim().toLowerCase();
  if (!keyword) return selectedLogText.value;
  return selectedLogText.value
    .split('\n')
    .filter((line) => line.toLowerCase().includes(keyword))
    .join('\n') || t('settings.developer.noMatches');
});

const matchedLineCount = computed(() => {
  if (!logSearch.value.trim()) return selectedLogText.value.split('\n').length;
  if (visibleLogText.value === t('settings.developer.noMatches')) return 0;
  return visibleLogText.value.split('\n').length;
});

const issueCardClass = (errorCount: number, issueCount: number): Record<string, boolean> => ({
  'summary-card--danger': errorCount > 0,
  'summary-card--warning': errorCount === 0 && issueCount > 0
});

const fileName = (path: string): string =>
  path.split(/[\\/]/).pop() || path;

const formatBytes = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};

const refresh = async () => {
  loading.value = true;
  try {
    const includeLogs = developerMode.value;
    frontendLogs.value = includeLogs ? getFrontendDiagnostics() : [];
    diagnostics.value = await getDeveloperDiagnostics(includeLogs);
  } catch (error) {
    modal.msg(`${t('settings.developer.refreshFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
};

const handleDeveloperModeChange = (enabled: boolean) => {
  setDeveloperModeEnabled(enabled);
  modal.msg(enabled ? t('settings.developer.enabled') : t('settings.developer.disabled'));
  void refresh();
};

const copyReport = async () => {
  try {
    await navigator.clipboard.writeText(reportText.value);
    modal.msg(t('settings.developer.copied'));
  } catch (error) {
    modal.msg(`${t('settings.developer.copyFailed')}: ${error}`, 'error');
  }
};

const openLogDir = async () => {
  try {
    await openDeveloperLogDir();
  } catch (error) {
    modal.msg(`${t('settings.developer.openLogsFailed')}: ${error}`, 'error');
  }
};

const clearFrontendLogs = () => {
  clearFrontendDiagnostics();
  frontendLogs.value = [];
  modal.msg(t('settings.developer.frontendCleared'));
};

onMounted(() => {
  void refresh();
});
</script>

<style scoped lang="scss">
.developer-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mode-section {
  margin-top: 0;
}

.developer-toolbar,
.developer-actions,
.log-toolbar,
.compact-item-title {
  display: flex;
  align-items: center;
}

.developer-toolbar {
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.developer-actions {
  flex-wrap: wrap;
  gap: 8px;
}

.refresh-time,
.developer-hint,
.log-toolbar,
.empty-text,
.compact-item small,
.summary-card small {
  color: var(--panel-text-secondary);
  font-size: 12px;
}

.developer-hint,
.ignored-warning-hint,
.empty-text {
  margin: 0;
  line-height: 1.6;
}

.ignored-warning-hint {
  padding: 6px 9px;
  color: #a16207;
  background: rgb(245 158 11 / 8%);
  border: 1px solid rgb(245 158 11 / 22%);
  border-radius: 6px;
  font-size: 12px;
}

.diagnostic-summary {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}

.summary-card,
.overview-card {
  padding: 10px 12px;
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: 7px;
}

.summary-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 3px;
  border-left: 3px solid var(--search-result-accent);

  strong {
    color: var(--panel-text);
    font-size: 17px;
  }

  &--danger {
    border-left-color: #ef4444;
  }

  &--warning {
    border-left-color: #f59e0b;
  }
}

.summary-label {
  color: var(--panel-text-secondary);
  font-size: 12px;
}

.diagnostic-tabs {
  display: flex;
  gap: 4px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--panel-border);
}

.diagnostic-tab {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  color: var(--panel-text-secondary);
  background: transparent;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &--active {
    color: var(--panel-text);
    background: var(--panel-hover-bg);
  }
}

.tab-count,
.state-text {
  padding: 1px 5px;
  color: var(--panel-text-secondary);
  background: var(--panel-hover-bg);
  border-radius: 999px;
  font-size: 11px;
}

.overview-panel,
.log-panel {
  min-height: 0;
  flex: 1 1 auto;
  overflow: auto;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.overview-card {
  min-width: 0;

  &:first-child {
    grid-column: 1 / -1;
  }

  h4 {
    margin: 0 0 8px;
    color: var(--panel-text);
    font-size: 13px;
  }
}

.diagnostic-list,
.compact-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.diagnostic-list {
  margin: 0;

  div {
    display: grid;
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 8px;
  }

  dt,
  dd {
    margin: 0;
    font-size: 12px;
  }

  dt {
    color: var(--panel-text-secondary);
  }

  dd {
    overflow: hidden;
    color: var(--panel-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.compact-item {
  min-width: 0;

  .compact-item-title {
    gap: 6px;
    color: var(--panel-text);
    font-size: 12px;
  }

  small {
    display: block;
    overflow: hidden;
    margin-top: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.status-dot {
  width: 7px;
  height: 7px;
  background: var(--panel-text-secondary);
  border-radius: 50%;

  &--active {
    background: #22c55e;
  }
}

.log-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.log-toolbar {
  justify-content: space-between;
  gap: 10px;
}

.log-search {
  min-width: 240px;
  padding: 6px 9px;
  color: var(--panel-text);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: var(--search-result-accent);
  }
}

.diagnostic-report {
  min-height: 0;
  flex: 1 1 auto;
  overflow: auto;
  margin: 0;
  padding: 10px;
  color: var(--panel-text);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: 6px;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
}

@media (max-width: 1100px) {
  .diagnostic-summary {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
