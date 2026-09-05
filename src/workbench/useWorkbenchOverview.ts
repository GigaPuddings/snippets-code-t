import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, type Router } from 'vue-router';
import { getAllFiles, getCategories, getWorkspaceRoot } from '@/api/markdown';
import {
  getAiProviderStatusSnapshots,
  type AiProviderStatusSnapshot
} from '@/ai';
import { getSearchSourceRuntimeStates } from '@/plugins/search-providers';
import { usePluginStore } from '@/store';
import type { SearchSourceRuntimeState } from '@/search/sourceRegistry';
import type { MarkdownFile } from '@/types';
import type { Category } from '@/types/database';
import {
  summarizeWorkbenchAi,
  summarizeWorkbenchContent,
  summarizeWorkbenchPlugins,
  summarizeWorkbenchSearch
} from './summary';
import {
  buildWorkbenchRecentItems,
  buildWorkbenchLayers,
  buildWorkbenchMetrics,
  statusChipClass,
  type CapabilityItem,
  type WorkbenchAction,
  type WorkbenchOverviewController,
  type WorkbenchTranslator,
  type WorkbenchViewModelInput
} from './viewModel';
import { buildCapabilityItems } from './capabilities';

type PluginStore = ReturnType<typeof usePluginStore>;

interface WorkbenchStateRefs {
  loading: Ref<boolean>;
  loadError: Ref<string>;
  workspaceRoot: Ref<string>;
  categories: Ref<Category[]>;
  files: Ref<MarkdownFile[]>;
  searchSources: Ref<SearchSourceRuntimeState[]>;
  aiProviders: Ref<AiProviderStatusSnapshot[]>;
}

interface RefreshWorkbenchDeps {
  pluginStore: PluginStore;
  t: WorkbenchTranslator;
  refs: WorkbenchStateRefs;
}

const formatError = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const createWorkbenchRefs = (): WorkbenchStateRefs => ({
  loading: ref(false),
  loadError: ref(''),
  workspaceRoot: ref(''),
  categories: ref<Category[]>([]),
  files: ref<MarkdownFile[]>([]),
  searchSources: ref<SearchSourceRuntimeState[]>([]),
  aiProviders: ref<AiProviderStatusSnapshot[]>([])
});

const createSettingsAction = (
  t: WorkbenchTranslator,
  tab: string,
  labelKey: string
): WorkbenchAction => ({
  label: t(labelKey),
  path: '/config/category/settings',
  query: { tab }
});

const createActionNavigator =
  (router: Router) =>
  (action: WorkbenchAction): void => {
    void router.push(
      action.query
        ? { path: action.path, query: action.query }
        : { path: action.path }
    );
  };

const refreshWorkspace = async (refs: WorkbenchStateRefs): Promise<void> => {
  refs.workspaceRoot.value = '';
  refs.categories.value = [];
  refs.files.value = [];
  refs.workspaceRoot.value = await getWorkspaceRoot();
  if (!refs.workspaceRoot.value) {
    refs.categories.value = [];
    refs.files.value = [];
    return;
  }

  const [nextCategories, nextFiles] = await Promise.all([
    getCategories(),
    getAllFiles()
  ]);
  refs.categories.value = nextCategories;
  refs.files.value = nextFiles;
};

const refreshAiProviders = async (
  refs: WorkbenchStateRefs,
  pluginStore: PluginStore
): Promise<void> => {
  refs.aiProviders.value = await getAiProviderStatusSnapshots({
    isPluginEnabled: (pluginId) => pluginStore.isEnabled(pluginId)
  });
};

const refreshWorkbench = async ({
  pluginStore,
  t,
  refs
}: RefreshWorkbenchDeps): Promise<void> => {
  refs.loading.value = true;
  refs.loadError.value = '';
  try {
    const results = await Promise.allSettled([
      refreshWorkspace(refs),
      (async (): Promise<void> => {
        refs.aiProviders.value = [];
        refs.searchSources.value = [];
        await pluginStore.initialize();
        const pluginResults = await Promise.allSettled([
          pluginStore.loadEnabledPluginEntries(),
          pluginStore.refreshPluginResourceStatus()
        ]);
        refs.searchSources.value = getSearchSourceRuntimeStates();
        await refreshAiProviders(refs, pluginStore);
        const failed = pluginResults.find(
          (result) => result.status === 'rejected'
        );
        if (failed) throw failed.reason;
      })()
    ]);
    const failed = results.find((result) => result.status === 'rejected');
    if (failed) {
      refs.loadError.value = `${t('settings.workbench.loadFailed')}: ${formatError(failed.reason)}`;
    }
  } finally {
    refs.loading.value = false;
  }
};

const createCapabilities = (
  pluginStore: PluginStore,
  translate: WorkbenchTranslator
): ComputedRef<CapabilityItem[]> =>
  computed(() =>
    buildCapabilityItems(
      {
        isInstalled: (pluginId) => pluginStore.isInstalled(pluginId),
        isEnabled: (pluginId) => pluginStore.isEnabled(pluginId),
        resourceStatusByPluginId: pluginStore.resourceStatusByPluginId
      },
      translate
    )
  );

const createViewModelInput = (
  refs: WorkbenchStateRefs,
  pluginStore: PluginStore,
  translate: WorkbenchTranslator
): ComputedRef<WorkbenchViewModelInput> => {
  const content = computed(() => summarizeWorkbenchContent(refs.files.value));
  const plugins = computed(() =>
    summarizeWorkbenchPlugins(pluginStore.plugins, (pluginId) =>
      pluginStore.isEnabled(pluginId)
    )
  );
  const search = computed(() =>
    summarizeWorkbenchSearch(refs.searchSources.value)
  );
  const ai = computed(() => summarizeWorkbenchAi(refs.aiProviders.value));

  return computed(() => ({
    t: translate,
    workspaceRoot: refs.workspaceRoot.value,
    categoriesCount: refs.categories.value.length,
    content: content.value,
    plugins: plugins.value,
    search: search.value,
    ai: ai.value,
    settingsAction: (tab, labelKey) =>
      createSettingsAction(translate, tab, labelKey)
  }));
};

export function useWorkbenchOverview(): WorkbenchOverviewController {
  const { t } = useI18n();
  const router = useRouter();
  const pluginStore = usePluginStore();
  const refs = createWorkbenchRefs();
  const translate: WorkbenchTranslator = (key, params) =>
    params ? t(key, params) : t(key);

  const input = createViewModelInput(refs, pluginStore, translate);
  const metrics = computed(() => buildWorkbenchMetrics(input.value));
  const layers = computed(() => buildWorkbenchLayers(input.value));
  const recentItems = computed(() =>
    buildWorkbenchRecentItems(refs.files.value)
  );
  const capabilities = createCapabilities(pluginStore, translate);
  let pendingRefresh: Promise<void> | undefined;
  const refresh = (): Promise<void> => {
    pendingRefresh ??= refreshWorkbench({
      pluginStore,
      t: translate,
      refs
    }).finally(() => {
      pendingRefresh = undefined;
    });
    return pendingRefresh;
  };

  onMounted(() => {
    void refresh();
  });

  return {
    loading: refs.loading,
    loadError: refs.loadError,
    metrics,
    layers,
    capabilities,
    workspaceRoot: refs.workspaceRoot,
    recentItems,
    refresh,
    navigateTo: createActionNavigator(router),
    statusLabel: (status) => translate(`settings.workbench.status.${status}`),
    statusChipClass
  };
}
