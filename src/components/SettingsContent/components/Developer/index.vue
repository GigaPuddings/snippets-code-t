<template>
  <div class="settings-panel diagnostics">
    <header class="panel-header">
      <div
        class="diagnostic-column flex flex-wrap items-center justify-between gap-2"
      >
        <h2 class="panel-title">{{ t('settings.developer.title') }}</h2>
        <div class="flex flex-wrap items-center gap-1">
          <button
            class="ui-action ui-action--muted"
            type="button"
            :disabled="loading"
            :aria-busy="loading"
            @click="refresh"
          >
            <RefreshCw
              class="size-4"
              :class="{ 'motion-safe:animate-spin': loading }"
              aria-hidden="true"
            />
            {{ t('settings.developer.refresh') }}
          </button>
          <button
            class="ui-action border border-ui"
            type="button"
            :disabled="!snapshot"
            @click="copyReport(summary)"
          >
            <Copy class="size-4" aria-hidden="true" />
            {{ t('settings.developer.copy') }}
          </button>
        </div>
      </div>
    </header>

    <main
      class="panel-content diagnostic-column grid gap-settings-group text-ui-main"
    >
      <section aria-labelledby="recent-diagnostics" :aria-busy="loading">
        <div class="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h3 id="recent-diagnostics" class="m-0 text-ui font-semibold">
            {{ t('settings.developer.recent') }}
          </h3>
          <span v-if="lastChecked" class="diagnostic-meta">
            {{ t('settings.developer.generatedAt', { time: lastChecked }) }}
          </span>
        </div>
        <p
          v-if="refreshFailed || snapshot?.backendLogsIncomplete"
          role="status"
          class="mb-2 text-ui-caption text-chat-warning"
        >
          {{
            t(
              refreshFailed
                ? 'settings.developer.refreshFailed'
                : 'settings.developer.logsIncomplete'
            )
          }}
        </p>
        <ul
          v-if="failedSources.length || issues.length"
          class="diagnostic-list"
        >
          <li v-for="source in failedSources" :key="source.key">
            <button
              type="button"
              class="ui-list-action flex w-full items-center justify-between gap-3 p-3"
              @click="showSearchSource(source.key)"
            >
              <span class="grid min-w-0 gap-0.5">
                <strong class="diagnostic-text text-ui font-medium">
                  {{ source.pluginId }} · {{ source.source }}
                </strong>
                <span class="diagnostic-meta">
                  {{ t('settings.developer.searchSources') }} ·
                  {{ searchFailure(source) }} · {{ searchTiming(source) }}
                </span>
              </span>
              <ChevronRight
                class="size-4 shrink-0 text-ui-muted"
                aria-hidden="true"
              />
            </button>
          </li>
          <li v-for="issue in visibleIssues" :key="issue.id">
            <details v-if="issue.description">
              <summary class="diagnostic-disclosure">
                <span class="grid min-w-0 gap-0.5">
                  <strong class="diagnostic-text text-ui font-medium">
                    {{ issue.title }}
                  </strong>
                  <span class="diagnostic-meta">{{ issueMeta(issue) }}</span>
                </span>
              </summary>
              <pre class="diagnostic-pre mx-3 mb-3">{{
                issue.description
              }}</pre>
            </details>
            <div v-else class="grid min-w-0 gap-0.5 p-3 pl-8">
              <strong class="diagnostic-text text-ui font-medium">
                {{ issue.title }}
              </strong>
              <span class="diagnostic-meta">{{ issueMeta(issue) }}</span>
            </div>
          </li>
          <li v-if="issues.length > defaultIssueLimit">
            <button
              type="button"
              class="ui-action ui-action--muted m-1"
              @click="showAll = !showAll"
            >
              {{
                t(
                  showAll
                    ? 'settings.developer.showLess'
                    : 'settings.developer.showAll'
                )
              }}
            </button>
          </li>
        </ul>
        <p
          v-else-if="loading && !snapshot"
          role="status"
          class="diagnostic-meta"
        >
          {{ t('common.loading') }}
        </p>
        <p
          v-else-if="
            lastChecked && !refreshFailed && !snapshot?.backendLogsIncomplete
          "
          class="diagnostic-meta"
        >
          {{ t('settings.developer.normal') }}
        </p>
      </section>

      <section class="settings-card !p-0" aria-labelledby="capture-title">
        <div
          class="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5"
        >
          <div class="min-w-0">
            <h3 id="capture-title" class="m-0 text-ui font-medium">
              {{ t('settings.developer.mode') }}
            </h3>
            <p id="capture-description" class="diagnostic-meta">
              {{
                t(
                  recording
                    ? 'settings.developer.modeOn'
                    : 'settings.developer.modeOff'
                )
              }}
            </p>
          </div>
          <CustomSwitch
            v-model="recording"
            aria-labelledby="capture-title"
            aria-describedby="capture-description"
            @change="setDeveloperModeEnabled"
          />
        </div>
      </section>

      <div class="diagnostic-list">
        <details ref="searchDetails">
          <summary class="diagnostic-disclosure font-medium">
            {{ t('settings.developer.searchSources') }}
          </summary>
          <p v-if="!searchSources.length" class="diagnostic-meta px-3 pb-3">
            {{ t('settings.developer.empty') }}
          </p>
          <ul
            v-else
            ref="searchList"
            class="mx-3 mb-3 min-w-0 list-none divide-y divide-ui pl-0"
          >
            <li v-for="source in searchSources" :key="source.key" class="py-1">
              <details
                :data-search-source="source.key"
                class="rounded-ui"
                :class="{ 'bg-ui-card-soft': selectedSource === source.key }"
              >
                <summary class="diagnostic-disclosure">
                  <span class="diagnostic-text min-w-0">
                    {{ source.pluginId }} · {{ source.source }}
                  </span>
                  <span
                    class="diagnostic-meta ml-auto shrink-0"
                    :class="{ 'text-chat-warning': source.health === 'failed' }"
                  >
                    {{
                      t(
                        `settings.developer.searchSourceHealth.${source.health}`
                      )
                    }}
                  </span>
                </summary>
                <div class="diagnostic-meta grid gap-1 px-3 pb-3">
                  <span>{{ searchTiming(source) }}</span>
                  <span
                    v-if="source.health === 'failed'"
                    class="text-chat-warning"
                  >
                    {{ searchFailure(source) }}
                  </span>
                  <span
                    v-if="source.lastError && source.health === 'failed'"
                    class="diagnostic-text"
                  >
                    {{ redactDiagnosticText(source.lastError) }}
                  </span>
                </div>
              </details>
            </li>
          </ul>
        </details>

        <details>
          <summary class="diagnostic-disclosure font-medium">
            {{ t('settings.developer.application') }}
          </summary>
          <div v-if="snapshot" class="grid gap-3 px-3 pb-3">
            <p class="text-ui-caption">
              v{{ snapshot.appVersion }} · {{ snapshot.os }}
              {{ snapshot.arch }} · {{ snapshot.buildMode }}
            </p>
            <dl class="diagnostic-meta grid gap-1">
              <div
                v-for="path in paths"
                :key="path.label"
                class="flex flex-wrap gap-x-2"
              >
                <dt>{{ path.label }}</dt>
                <dd class="diagnostic-text min-w-0 text-ui-main">
                  {{ path.value || '—' }}
                </dd>
              </div>
            </dl>
            <div class="grid gap-1">
              <h4 class="m-0 text-ui-caption font-medium">
                {{ t('settings.developer.windows') }}
              </h4>
              <p
                v-for="window in snapshot.windows"
                :key="window.label"
                class="diagnostic-meta diagnostic-text"
              >
                {{ window.label }} ·
                {{
                  t(
                    window.visible
                      ? 'settings.developer.visible'
                      : 'settings.developer.hidden'
                  )
                }}
                · {{ redactDiagnosticText(window.url) }}
              </p>
            </div>
          </div>
        </details>

        <details>
          <summary class="diagnostic-disclosure font-medium">
            {{ t('settings.developer.fullReport') }}
          </summary>
          <div class="grid min-w-0 gap-2 px-3 pb-3">
            <div class="flex flex-wrap items-center gap-1">
              <button
                v-for="tab in logTabs"
                :key="tab.id"
                type="button"
                class="ui-action ui-action--muted text-ui-caption"
                :aria-pressed="activeLog === tab.id"
                @click="activeLog = tab.id"
              >
                {{ t(tab.label) }}
              </button>
            </div>
            <input
              v-model="logSearch"
              type="search"
              class="h-ui-control w-full rounded-ui border border-ui bg-transparent px-2 text-ui focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary"
              :aria-label="t('settings.developer.searchLogs')"
              :placeholder="t('settings.developer.searchLogs')"
            />
            <pre class="diagnostic-pre">{{ visibleLog }}</pre>
            <div class="flex flex-wrap items-center gap-1">
              <button
                type="button"
                class="ui-action ui-action--muted"
                @click="openLogDir"
              >
                {{ t('settings.developer.openLogs') }}
              </button>
              <button
                type="button"
                class="ui-action ui-action--muted"
                :disabled="!frontendLogs.length"
                @click="clearFrontendLogs"
              >
                {{ t('settings.developer.clearFrontend') }}
              </button>
              <button
                type="button"
                class="ui-action ui-action--muted"
                :disabled="!snapshot"
                @click="copyReport(fullReport)"
              >
                {{ t('settings.developer.copyFull') }}
              </button>
            </div>
          </div>
        </details>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import ChevronRight from '~icons/lucide/chevron-right';
import Copy from '~icons/lucide/copy';
import RefreshCw from '~icons/lucide/refresh-cw';
import { CustomSwitch } from '@/components/UI';
import {
  getDeveloperDiagnostics,
  getSearchDiagnostics,
  mergeSearchDiagnostics,
  openDeveloperLogDir,
  type DeveloperDiagnostics,
  type SearchDiagnosticEntry
} from '@/api/developerDiagnostics';
import { getSearchSourceRuntimeStates } from '@/plugins/search-providers';
import { usePluginStore } from '@/store';
import modal from '@/utils/modal';
import {
  clearFrontendDiagnostics,
  formatFrontendDiagnostics,
  getFrontendDiagnostics,
  isDeveloperModeEnabled,
  redactDiagnosticText,
  setDeveloperModeEnabled
} from '@/utils/developer-diagnostics';
import {
  collectRecentDiagnosticIssues,
  type RecentDiagnosticIssue
} from './diagnosticIssues';

defineOptions({ name: 'DeveloperSettings' });
const props = defineProps<{ active: boolean }>();
const { t, locale } = useI18n();
const route = useRoute();
const pluginStore = usePluginStore();
type SearchSource = ReturnType<typeof mergeSearchDiagnostics>[number];

const recording = ref(isDeveloperModeEnabled());
const snapshot = ref<DeveloperDiagnostics>();
const frontendLogs = ref(getFrontendDiagnostics());
const searchResults = ref<SearchDiagnosticEntry[]>([]);
const runtimeSources = ref(getSearchSourceRuntimeStates());
const searchSources = computed(() =>
  mergeSearchDiagnostics(runtimeSources.value, searchResults.value)
);
const failedSources = computed(() =>
  searchSources.value
    .filter((source) => source.health === 'failed')
    .sort((a, b) => searchTime(b) - searchTime(a))
);
const loading = ref(false);
const refreshFailed = ref(false);
const lastChecked = ref('');
const searchDetails = ref<HTMLDetailsElement>();
const searchList = ref<HTMLUListElement>();
const selectedSource = ref('');
const showAll = ref(false);
const defaultIssueLimit = 6;
const issues = computed(() =>
  collectRecentDiagnosticIssues(
    frontendLogs.value,
    snapshot.value?.recentBackendLogs ?? ''
  )
);
const visibleIssues = computed(() =>
  showAll.value ? issues.value : issues.value.slice(0, defaultIssueLimit)
);

const paths = computed(() => [
  { label: t('settings.developer.dataDir'), value: snapshot.value?.dataDir },
  {
    label: t('settings.developer.pluginDir'),
    value: snapshot.value?.pluginDir
  },
  { label: t('settings.developer.logDir'), value: snapshot.value?.logDir }
]);

const formatter = computed(
  () =>
    new Intl.DateTimeFormat(locale.value, {
      dateStyle: 'short',
      timeStyle: 'medium'
    })
);
const formatTimestamp = (timestamp: number): string =>
  Number.isFinite(timestamp) && timestamp > 0
    ? formatter.value.format(timestamp)
    : '';
const searchTime = (source: SearchSource): number =>
  source.result?.completedAt ??
  Math.max(source.lastSuccessfulAt ?? 0, source.lastFailedAt ?? 0);
const searchTiming = (source: SearchSource): string =>
  [
    formatTimestamp(searchTime(source)),
    source.result?.windowLabel,
    source.lastDurationMs === undefined
      ? undefined
      : t('settings.developer.searchSourceTiming', {
          duration: source.lastDurationMs
        })
  ]
    .filter(Boolean)
    .join(' · ') || t('settings.developer.searchSourceTimingNever');
const searchFailure = (source: SearchSource): string =>
  t(
    source.result?.outcome === 'timeout'
      ? 'settings.developer.searchTimeout'
      : 'settings.developer.searchFailed'
  );

const issueMeta = (issue: RecentDiagnosticIssue): string =>
  [
    issue.module === 'frontend'
      ? t('settings.developer.frontendLogs')
      : issue.module,
    issue.windowLabel,
    t(`settings.developer.level.${issue.level}`),
    formatTimestamp(issue.timestamp),
    t('settings.developer.occurrences', { count: issue.count })
  ]
    .filter(Boolean)
    .join(' · ');

const summary = computed(() => {
  const environment = snapshot.value;
  const safeIssues = issues.value
    .slice(0, defaultIssueLimit)
    .map((issue) => issueMeta(issue));
  return [
    t('settings.developer.title'),
    environment &&
      `v${environment.appVersion} · ${environment.os} ${environment.arch} · ${environment.buildMode}`,
    lastChecked.value &&
      t('settings.developer.generatedAt', { time: lastChecked.value }),
    refreshFailed.value && t('settings.developer.refreshFailed'),
    environment?.backendLogsIncomplete &&
      t('settings.developer.logsIncomplete'),
    !recording.value && t('settings.developer.loggingOff'),
    ...failedSources.value.map(
      (source) =>
        `${source.pluginId} · ${source.source} · ${searchFailure(source)} · ${searchTiming(source)}`
    ),
    ...safeIssues
  ]
    .filter(Boolean)
    .join('\n');
});
const logTabs = [
  { id: 'report', label: 'settings.developer.preview' },
  { id: 'frontend', label: 'settings.developer.frontendLogs' },
  { id: 'backend', label: 'settings.developer.backendLogs' }
] as const;
const activeLog = ref<(typeof logTabs)[number]['id']>('report');
const logSearch = ref('');
const frontendText = computed(() =>
  formatFrontendDiagnostics(frontendLogs.value)
);
const backendText = computed(() => snapshot.value?.recentBackendLogs ?? '');
const fullReport = computed(() => {
  const environment = snapshot.value;
  const { recentBackendLogs, ...details } = environment ?? {
    recentBackendLogs: ''
  };
  return redactDiagnosticText(
    [
      summary.value,
      '===== Environment =====',
      JSON.stringify(details, null, 2),
      '===== Search sources =====',
      JSON.stringify(searchSources.value, null, 2),
      '===== Frontend diagnostics =====',
      frontendText.value,
      '===== Backend logs =====',
      recentBackendLogs
    ].join('\n\n')
  );
});
const visibleLog = computed(() => {
  const text = {
    frontend: frontendText.value,
    backend: backendText.value,
    report: fullReport.value
  }[activeLog.value];
  if (!text) return t('settings.developer.empty');
  const keyword = logSearch.value.trim().toLowerCase();
  if (!keyword) return text;
  return (
    text
      .split('\n')
      .filter((line) => line.toLowerCase().includes(keyword))
      .join('\n') || t('settings.developer.noMatches')
  );
});

let pendingRefresh: Promise<void> | undefined;
function refresh(): Promise<void> {
  if (pendingRefresh) return pendingRefresh;
  loading.value = true;
  pendingRefresh = Promise.allSettled([
    getDeveloperDiagnostics(true),
    getSearchDiagnostics()
  ])
    .then(([environment, searches]) => {
      frontendLogs.value = getFrontendDiagnostics();
      runtimeSources.value = getSearchSourceRuntimeStates();
      if (environment.status === 'fulfilled')
        snapshot.value = environment.value;
      if (searches.status === 'fulfilled') searchResults.value = searches.value;
      refreshFailed.value =
        environment.status === 'rejected' || searches.status === 'rejected';
      if (
        environment.status === 'fulfilled' &&
        !refreshFailed.value &&
        !environment.value.backendLogsIncomplete
      )
        lastChecked.value = environment.value.generatedAt;
    })
    .finally(() => {
      loading.value = false;
      pendingRefresh = undefined;
    });
  return pendingRefresh;
}

async function showSearchSource(key = '') {
  if (!searchDetails.value) return;
  searchDetails.value.open = true;
  selectedSource.value = key;
  await nextTick();
  const detail = Array.from(
    searchList.value?.querySelectorAll('details') ?? []
  ).find((item) => item.dataset.searchSource === key);
  if (detail) detail.open = true;
  const target = (detail ?? searchDetails.value)?.querySelector('summary');
  target?.focus({ preventScroll: true });
  target?.scrollIntoView({ block: 'center' });
}

watch(
  [() => props.active, () => route.query.section],
  async ([active, section], _, onCleanup) => {
    if (!active) return;
    let outdated = false;
    onCleanup(() => {
      outdated = true;
    });
    recording.value = isDeveloperModeEnabled();
    await refresh();
    if (!outdated && section === 'search')
      await showSearchSource(failedSources.value[0]?.key);
  },
  { immediate: true, flush: 'post' }
);

watch(
  () => pluginStore.runtimeRevision,
  () => {
    if (props.active) runtimeSources.value = getSearchSourceRuntimeStates();
  }
);

async function copyReport(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    modal.msg(t('settings.developer.copied'));
  } catch (error) {
    modal.msg(`${t('settings.developer.copyFailed')}: ${error}`, 'error');
  }
}

async function openLogDir() {
  try {
    await openDeveloperLogDir();
  } catch (error) {
    modal.msg(`${t('settings.developer.openLogsFailed')}: ${error}`, 'error');
  }
}

function clearFrontendLogs() {
  clearFrontendDiagnostics();
  frontendLogs.value = getFrontendDiagnostics();
}
</script>

<style scoped lang="scss">
.diagnostic-column {
  @apply mx-auto w-full;

  max-inline-size: 62rem;
}

.diagnostic-list {
  @apply m-0 min-w-0 list-none divide-y divide-ui rounded-ui-lg border border-ui p-0;
}

.diagnostic-disclosure {
  @apply flex min-w-0 cursor-pointer items-center gap-3 rounded-ui p-3 text-ui text-ui-main transition-colors hover:bg-ui-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none;

  &::before {
    @apply size-1.5 shrink-0 rotate-45 border-r border-t border-current text-ui-muted transition-transform content-[''] motion-reduce:transition-none;
  }

  details[open] > &::before {
    @apply rotate-[135deg];
  }

  &::-webkit-details-marker {
    display: none;
  }
}

.diagnostic-meta {
  @apply text-ui-caption text-[color:var(--settings-muted)];
}

.diagnostic-text {
  overflow-wrap: anywhere;
}

.diagnostic-pre {
  @apply max-h-80 overflow-auto whitespace-pre-wrap rounded-ui bg-ui-card-soft px-3 py-2 font-mono text-ui-caption text-ui-main;

  overflow-wrap: anywhere;
}
</style>
