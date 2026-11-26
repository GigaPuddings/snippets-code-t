import type { Component, ComputedRef, Ref } from 'vue';
import Application from '~icons/lucide/puzzle';
import Library from '~icons/lucide/library';
import MessageSearch from '~icons/lucide/search';
import Brain from '~icons/lucide/brain';
import { AI_PROVIDER_CAPABILITIES } from '@/ai';
import { DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS } from '@/search/sourceCatalog';
import type { MarkdownFile } from '@/types';
import { compareTimestamps } from '@/utils/time-format';
import { getConfigContentPath } from '@/utils/config-navigation';
import type {
  WorkbenchAiSummary,
  WorkbenchContentSummary,
  WorkbenchPluginSummary,
  WorkbenchSearchSummary
} from './summary';

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
  id: 'content' | 'plugins' | 'search' | 'ai';
  label: string;
  value: number | null;
  meta: string;
  trend?: number[];
  detail?: string;
  tone?: 'success' | 'warning';
  badge?: string;
}

export interface WorkbenchRecentItem {
  id: string;
  title: string;
  type: MarkdownFile['type'];
  categoryName: string;
  tags: string[];
  modified: string;
  path: string;
}

export interface WorkbenchLayer {
  id: 'workspace' | 'plugins' | 'search' | 'ai';
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
  contentAvailable: ComputedRef<boolean>;
  metrics: ComputedRef<WorkbenchMetric[]>;
  layers: ComputedRef<WorkbenchLayer[]>;
  capabilities: ComputedRef<CapabilityItem[]>;
  workspaceRoot: Ref<string>;
  recentItems: ComputedRef<WorkbenchRecentItem[]>;
  refresh: () => Promise<void>;
  navigateTo: (action: WorkbenchAction | string) => void;
  statusLabel: (status: WorkbenchStatus) => string;
  statusChipClass: (status: WorkbenchStatus) => Record<string, boolean>;
}

export const buildWorkbenchRecentItems = (
  files: MarkdownFile[],
  limit = 6
): WorkbenchRecentItem[] =>
  [...files]
    .sort((left, right) => compareTimestamps(right.modified, left.modified))
    .slice(0, Math.max(0, limit))
    .map((file) => {
      const id = file.filePath || file.id;
      return {
        id,
        title: file.title || id,
        type: file.type,
        categoryName: file.categoryName,
        tags: [...new Set(file.tags)].slice(0, 2),
        modified: file.modified,
        path: getConfigContentPath(id, file.categoryId)
      };
    });

export type WorkbenchTranslator = (
  key: string,
  params?: Record<string, string | number>
) => string;

export interface WorkbenchViewModelInput {
  t: WorkbenchTranslator;
  workspaceRoot: string;
  workspaceFailed: boolean;
  pluginsFailed: boolean;
  categoriesCount: number;
  content: WorkbenchContentSummary | null;
  plugins: WorkbenchPluginSummary | null;
  search: WorkbenchSearchSummary | null;
  ai: WorkbenchAiSummary | null;
  settingsAction: (tab: string, labelKey: string) => WorkbenchAction;
}

export const statusChipClass = (
  status: WorkbenchStatus
): Record<string, boolean> => ({
  'status-chip--ready': status === 'ready',
  'status-chip--attention': status === 'attention',
  'status-chip--inactive': status === 'inactive'
});

const searchStatus = (
  search: WorkbenchSearchSummary | null
): WorkbenchStatus => {
  if (!search || search.failed > 0) return 'attention';
  return search.registered > 0 ? 'ready' : 'inactive';
};

const aiStatus = (ai: WorkbenchAiSummary | null): WorkbenchStatus => {
  if (!ai) return 'attention';
  if (ai.providers === 0) return 'inactive';
  return ai.healthy < ai.providers ? 'attention' : 'ready';
};

const buildWorkspaceLayer = (
  input: WorkbenchViewModelInput
): WorkbenchLayer => ({
  id: 'workspace',
  label: input.t('settings.workbench.layers.workspace'),
  icon: Library,
  status:
    input.workspaceFailed || !input.content
      ? 'attention'
      : input.workspaceRoot
        ? 'ready'
        : 'inactive',
  stats: [
    {
      label: input.t('settings.workbench.stats.path'),
      value:
        input.workspaceRoot || input.t('settings.workbench.workspaceNotSet')
    },
    {
      label: input.t('settings.workbench.stats.categories'),
      value: input.categoriesCount
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
      value: input.search?.registered ?? '—'
    },
    {
      label: input.t('settings.workbench.stats.failed'),
      value: input.search?.failed ?? '—'
    },
    {
      label: input.t('settings.workbench.stats.timeout'),
      value: `${DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS} ms`
    }
  ],
  actions: [
    {
      ...input.settingsAction(
        'developer',
        'settings.workbench.actions.diagnostics'
      ),
      query: { tab: 'developer', section: 'search' }
    }
  ]
});

const buildPluginLayer = (input: WorkbenchViewModelInput): WorkbenchLayer => ({
  id: 'plugins',
  label: input.t('settings.workbench.layers.plugins'),
  icon: Application,
  status:
    input.pluginsFailed || !input.plugins
      ? 'attention'
      : input.plugins.enabled > 0
        ? 'ready'
        : 'inactive',
  stats: [
    {
      label: input.t('settings.workbench.stats.installed'),
      value: input.plugins?.installed ?? '—'
    },
    {
      label: input.t('settings.workbench.stats.enabled'),
      value: input.plugins?.enabled ?? '—'
    },
    {
      label: input.t('settings.workbench.stats.surfaces'),
      value: input.plugins?.surfaces ?? '—'
    }
  ],
  actions: [
    input.settingsAction('plugins', 'settings.workbench.actions.plugins')
  ]
});

const buildAiLayer = (input: WorkbenchViewModelInput): WorkbenchLayer => ({
  id: 'ai',
  label: input.t('settings.workbench.layers.ai'),
  icon: Brain,
  status: aiStatus(input.ai),
  stats: [
    {
      label: input.t('settings.workbench.stats.providers'),
      value: input.ai?.providers ?? '—'
    },
    {
      label: input.t('settings.workbench.stats.healthy'),
      value: input.ai?.healthy ?? '—'
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
