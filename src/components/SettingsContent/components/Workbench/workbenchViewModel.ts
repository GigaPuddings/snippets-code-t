import type { Component, ComputedRef, Ref } from 'vue';
import {
  Application,
  BookOpen,
  MessageSearch,
  Robot
} from '@icon-park/vue-next';
import { AI_PROVIDER_CAPABILITIES } from '@/ai';
import { DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS } from '@/search/sourceCatalog';
import type {
  WorkbenchAiSummary,
  WorkbenchContentSummary,
  WorkbenchPluginSummary,
  WorkbenchSearchSummary
} from './workbenchSummary';

export type WorkbenchStatus = 'ready' | 'attention' | 'inactive';

export interface WorkbenchAction {
  label: string;
  path: string;
  query?: Record<string, string>;
}

export interface WorkbenchStat {
  label: string;
  value: string | number;
}

export interface WorkbenchMetric {
  id: string;
  label: string;
  value: number;
  meta: string;
}

export interface WorkbenchLayer {
  id: string;
  label: string;
  icon: Component;
  status: WorkbenchStatus;
  stats: WorkbenchStat[];
  actions: WorkbenchAction[];
}

export interface CapabilityItem {
  id: string;
  label: string;
  status: WorkbenchStatus;
  meta: string;
}

export interface WorkbenchOverviewController {
  loading: Ref<boolean>;
  loadError: Ref<string>;
  metrics: ComputedRef<WorkbenchMetric[]>;
  layers: ComputedRef<WorkbenchLayer[]>;
  capabilities: ComputedRef<CapabilityItem[]>;
  refresh: () => Promise<void>;
  navigateTo: (action: WorkbenchAction) => void;
  statusLabel: (status: WorkbenchStatus) => string;
  statusChipClass: (status: WorkbenchStatus) => Record<string, boolean>;
}

export type WorkbenchTranslator = (
  key: string,
  params?: Record<string, string | number>
) => string;

export interface WorkbenchViewModelInput {
  t: WorkbenchTranslator;
  workspaceRoot: string;
  categoriesCount: number;
  content: WorkbenchContentSummary;
  plugins: WorkbenchPluginSummary;
  search: WorkbenchSearchSummary;
  ai: WorkbenchAiSummary;
  settingsAction: (tab: string, labelKey: string) => WorkbenchAction;
}

export const statusChipClass = (
  status: WorkbenchStatus
): Record<string, boolean> => ({
  'status-chip--ready': status === 'ready',
  'status-chip--attention': status === 'attention',
  'status-chip--inactive': status === 'inactive'
});

export const buildWorkbenchMetrics = ({
  t,
  content,
  plugins,
  search,
  ai
}: WorkbenchViewModelInput): WorkbenchMetric[] => [
  {
    id: 'content',
    label: t('settings.workbench.metrics.content'),
    value: content.total,
    meta: t('settings.workbench.metrics.contentMeta', {
      snippets: content.snippets,
      notes: content.notes
    })
  },
  {
    id: 'plugins',
    label: t('settings.workbench.metrics.plugins'),
    value: plugins.enabled,
    meta: t('settings.workbench.metrics.pluginsMeta', {
      total: plugins.installed
    })
  },
  {
    id: 'search',
    label: t('settings.workbench.metrics.searchSources'),
    value: search.registered,
    meta: t('settings.workbench.metrics.searchSourcesMeta', {
      failed: search.failed
    })
  },
  {
    id: 'ai',
    label: t('settings.workbench.metrics.aiProviders'),
    value: ai.healthy,
    meta: t('settings.workbench.metrics.aiProvidersMeta', {
      total: ai.providers
    })
  }
];

const workspaceStatus = (workspaceRoot: string): WorkbenchStatus =>
  workspaceRoot ? 'ready' : 'attention';

const searchStatus = (search: WorkbenchSearchSummary): WorkbenchStatus => {
  if (search.failed > 0) return 'attention';
  return search.registered > 0 ? 'ready' : 'inactive';
};

const pluginStatus = (plugins: WorkbenchPluginSummary): WorkbenchStatus =>
  plugins.enabled > 0 ? 'ready' : 'inactive';

const aiStatus = (ai: WorkbenchAiSummary): WorkbenchStatus => {
  if (ai.providers === 0) return 'inactive';
  return ai.unavailable > 0 ? 'attention' : 'ready';
};

const buildWorkspaceLayer = (
  input: WorkbenchViewModelInput
): WorkbenchLayer => ({
  id: 'workspace',
  label: input.t('settings.workbench.layers.workspace'),
  icon: BookOpen,
  status: workspaceStatus(input.workspaceRoot),
  stats: [
    {
      label: input.t('settings.workbench.stats.path'),
      value:
        input.workspaceRoot || input.t('settings.workbench.workspaceNotSet')
    },
    {
      label: input.t('settings.workbench.stats.categories'),
      value: input.categoriesCount
    },
    {
      label: input.t('settings.workbench.stats.favorites'),
      value: input.content.favorites
    }
  ],
  actions: [
    {
      label: input.t('settings.workbench.actions.openWorkspace'),
      path: '/config/category/contentList'
    },
    input.settingsAction('data', 'settings.workbench.actions.data')
  ]
});

const buildSearchLayer = (input: WorkbenchViewModelInput): WorkbenchLayer => ({
  id: 'search',
  label: input.t('settings.workbench.layers.search'),
  icon: MessageSearch,
  status: searchStatus(input.search),
  stats: [
    {
      label: input.t('settings.workbench.stats.sources'),
      value: input.search.registered
    },
    {
      label: input.t('settings.workbench.stats.failed'),
      value: input.search.failed
    },
    {
      label: input.t('settings.workbench.stats.timeout'),
      value: `${DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS} ms`
    }
  ],
  actions: [
    input.settingsAction('developer', 'settings.workbench.actions.diagnostics')
  ]
});

const buildPluginLayer = (input: WorkbenchViewModelInput): WorkbenchLayer => ({
  id: 'plugins',
  label: input.t('settings.workbench.layers.plugins'),
  icon: Application,
  status: pluginStatus(input.plugins),
  stats: [
    {
      label: input.t('settings.workbench.stats.installed'),
      value: input.plugins.installed
    },
    {
      label: input.t('settings.workbench.stats.enabled'),
      value: input.plugins.enabled
    },
    {
      label: input.t('settings.workbench.stats.surfaces'),
      value: input.plugins.surfaces
    }
  ],
  actions: [
    input.settingsAction('plugins', 'settings.workbench.actions.plugins')
  ]
});

const buildAiLayer = (input: WorkbenchViewModelInput): WorkbenchLayer => ({
  id: 'ai',
  label: input.t('settings.workbench.layers.ai'),
  icon: Robot,
  status: aiStatus(input.ai),
  stats: [
    {
      label: input.t('settings.workbench.stats.providers'),
      value: input.ai.providers
    },
    {
      label: input.t('settings.workbench.stats.healthy'),
      value: input.ai.healthy
    },
    {
      label: input.t('settings.workbench.stats.capabilities'),
      value: AI_PROVIDER_CAPABILITIES.length
    }
  ],
  actions: [
    input.settingsAction('ai', 'settings.workbench.actions.ai'),
    {
      label: input.t('settings.workbench.actions.chat'),
      path: '/config/local-ai/chat'
    }
  ]
});

export const buildWorkbenchLayers = (
  input: WorkbenchViewModelInput
): WorkbenchLayer[] => [
  buildWorkspaceLayer(input),
  buildSearchLayer(input),
  buildPluginLayer(input),
  buildAiLayer(input)
];
