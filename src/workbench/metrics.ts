import type { WorkbenchAiSummary } from './summary';
import type {
  WorkbenchMetric,
  WorkbenchTranslator,
  WorkbenchViewModelInput
} from './viewModel';

type MetricDetails = Omit<WorkbenchMetric, 'id' | 'label'>;

function describeAiServices(
  { healthy, providers }: WorkbenchAiSummary,
  t: WorkbenchTranslator
): MetricDetails {
  const warning = providers
    ? 'settings.workbench.status.attention'
    : 'workbenchHome.needsSetup';
  return {
    value: healthy,
    meta: t('settings.workbench.metrics.aiProvidersMeta', { total: providers }),
    detail: t('workbenchHome.available', { count: healthy }),
    tone: healthy ? 'success' : 'warning',
    badge: healthy ? undefined : t(warning)
  };
}

export function buildWorkbenchMetrics({
  t,
  content,
  plugins,
  search,
  ai
}: WorkbenchViewModelInput): WorkbenchMetric[] {
  function metric<T>(
    id: WorkbenchMetric['id'],
    labelKey: string,
    data: T | null,
    describe: (summary: T) => MetricDetails
  ): WorkbenchMetric {
    const details =
      data === null
        ? { value: null, meta: t('workbenchHome.dataUnavailable') }
        : describe(data);
    return {
      id,
      label: t(`settings.workbench.metrics.${labelKey}`),
      ...details
    };
  }

  return [
    metric(
      'content',
      'content',
      content,
      ({ total, snippets, notes, creationsByDay }) => ({
        value: total,
        meta: t('settings.workbench.metrics.contentMeta', { snippets, notes }),
        trend: creationsByDay
      })
    ),
    metric('plugins', 'plugins', plugins, ({ installed, enabled }) => ({
      value: enabled,
      meta: t('settings.workbench.metrics.pluginsMeta', { total: installed }),
      detail: t('workbenchHome.disabledPlugins', { count: installed - enabled })
    })),
    metric('search', 'searchSources', search, ({ registered, failed }) => ({
      value: registered,
      meta: t('workbenchHome.registered', { count: registered }),
      detail: t('settings.workbench.metrics.searchSourcesMeta', { failed }),
      tone: failed ? 'warning' : 'success'
    })),
    metric('ai', 'aiProviders', ai, (services) =>
      describeAiServices(services, t)
    )
  ];
}
