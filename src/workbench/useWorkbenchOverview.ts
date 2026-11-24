import {
  computed,
  onActivated,
  onMounted,
  ref,
  type ComputedRef,
  type Ref
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, type Router } from 'vue-router';
import { getAllFiles, getCategories, getWorkspaceRoot } from '@/api/markdown';
import { openNewLocalAiChat } from '@/api/localAi';
import modal from '@/utils/modal';
import { navigateConfigRoute } from '@/utils/config-navigation';
import {
  getAiProviderStatusSnapshots,
  type AiProviderStatusSnapshot
} from '@/ai';
import { getSearchSourceRuntimeStates } from '@/plugins/search-providers';
import { isPluginFrontendReady } from '@/plugins/runtime';
import { usePluginStore } from '@/store';
import type { SearchSourceRuntimeState } from '@/search/sourceRegistry';
import type { MarkdownFile } from '@/types';
import type { Category } from '@/types/database';
import {
  summarizeWorkbenchAi,
  summarizeWorkbenchContent,
  summarizeWorkbenchPlugins,
  summarizeWorkbenchSearch,
  type WorkbenchPluginSummary
} from './summary';
import {
  buildWorkbenchRecentItems,
  buildWorkbenchLayers,
  statusChipClass,
  type CapabilityItem,
  type WorkbenchAction,
  type WorkbenchOverviewController,
  type WorkbenchTranslator,
  type WorkbenchViewModelInput
} from './viewModel';
import { buildWorkbenchMetrics } from './metrics';
import { buildCapabilityItems } from './capabilities';

type PluginStore = ReturnType<typeof usePluginStore>;

interface WorkbenchStateRefs {
  loading: Ref<boolean>;
  loadError: Ref<string>;
  workspaceRoot: Ref<string>;
  workspaceFailed: Ref<boolean>;
  pluginsFailed: Ref<boolean>;
  categories: Ref<Category[]>;
  files: Ref<MarkdownFile[] | null>;
  plugins: Ref<WorkbenchPluginSummary | null>;
  searchSources: Ref<SearchSourceRuntimeState[] | null>;
  aiProviders: Ref<AiProviderStatusSnapshot[] | null>;
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
  workspaceFailed: ref(false),
  pluginsFailed: ref(false),
  categories: ref<Category[]>([]),
  files: ref(null),
  plugins: ref(null),
  searchSources: ref(null),
  aiProviders: ref(null)
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
  (action: WorkbenchAction | string): void => {
    const target: Pick<WorkbenchAction, 'path' | 'query'> =
      typeof action === 'string' ? { path: action } : action;
    if (target.path === '/config/local-ai/chat' && !target.query) {
      void openNewLocalAiChat().catch((error) => modal.error(String(error)));
      return;
    }
    void navigateConfigRoute(
      router,
      typeof action === 'string'
        ? action
        : { path: target.path, query: target.query }
    ).catch((error) => modal.error(String(error)));
  };

const setWorkspaceRoot = (refs: WorkbenchStateRefs, root: string): void => {
  if (root !== refs.workspaceRoot.value) {
    refs.workspaceRoot.value = root;
    refs.categories.value = [];
    refs.files.value = null;
  }
};

const refreshWorkspace = async (refs: WorkbenchStateRefs): Promise<void> => {
  try {
    let root = await getWorkspaceRoot();
    setWorkspaceRoot(refs, root);
    for (let attempt = 0; attempt < 2; attempt += 1) {
      if (!root) {
        refs.files.value = [];
        refs.workspaceFailed.value = false;
        return;
      }
      const [categories, files] = await Promise.allSettled([
        getCategories(),
        getAllFiles({ includeContent: false })
      ]);
      const currentRoot = await getWorkspaceRoot();
      if (currentRoot !== root) {
        root = currentRoot;
        setWorkspaceRoot(refs, root);
        continue;
      }
      if (categories.status === 'rejected') throw categories.reason;
      if (files.status === 'rejected') throw files.reason;
      refs.categories.value = categories.value;
      refs.files.value = files.value;
      refs.workspaceFailed.value = false;
      return;
    }
    throw new Error('Workspace changed during refresh');
  } catch (error) {
    refs.workspaceFailed.value = true;
    throw error;
  }
};

const refreshPluginData = async ({
  pluginStore,
  refs
}: Pick<RefreshWorkbenchDeps, 'pluginStore' | 'refs'>): Promise<void> => {
  const isEnabled = (pluginId: string): boolean =>
    pluginStore.isEnabled(pluginId);
  try {
    await pluginStore.refreshInstalledPlugins();
    refs.plugins.value = summarizeWorkbenchPlugins(
      pluginStore.plugins,
      isEnabled
    );
    refs.pluginsFailed.value = pluginStore.visiblePlugins.some(
      (plugin) => isEnabled(String(plugin.id)) && !isPluginFrontendReady(plugin)
    );
    refs.searchSources.value = getSearchSourceRuntimeStates();
  } catch (error) {
    refs.pluginsFailed.value = true;
    throw error;
  }

  const providers = await getAiProviderStatusSnapshots({
    isPluginEnabled: isEnabled
  });
  refs.aiProviders.value = providers.filter(
    (provider) => !provider.pluginId || isEnabled(provider.pluginId)
  );
};

const refreshWorkbench = async ({
  pluginStore,
  t,
  refs
}: RefreshWorkbenchDeps): Promise<void> => {
  refs.loading.value = true;
  try {
    const results = await Promise.allSettled([
      refreshWorkspace(refs),
      refreshPluginData({ pluginStore, refs })
    ]);
    const failed = results.find((result) => result.status === 'rejected');
    refs.loadError.value = failed
      ? `${t('settings.workbench.loadFailed')}: ${formatError(failed.reason)}`
      : '';
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
  translate: WorkbenchTranslator
): ComputedRef<WorkbenchViewModelInput> => {
  const content = computed(() =>
    refs.files.value ? summarizeWorkbenchContent(refs.files.value) : null
  );
  const search = computed(() =>
    refs.searchSources.value
      ? summarizeWorkbenchSearch(refs.searchSources.value)
      : null
  );
  const ai = computed(() =>
    refs.aiProviders.value ? summarizeWorkbenchAi(refs.aiProviders.value) : null
  );

  return computed(() => ({
    t: translate,
    workspaceRoot: refs.workspaceRoot.value,
    workspaceFailed: refs.workspaceFailed.value,
    pluginsFailed: refs.pluginsFailed.value,
    categoriesCount: refs.categories.value.length,
    content: content.value,
    plugins: refs.plugins.value,
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

  const input = createViewModelInput(refs, translate);
  const metrics = computed(() => buildWorkbenchMetrics(input.value));
  const layers = computed(() => buildWorkbenchLayers(input.value));
  const recentItems = computed(() =>
    buildWorkbenchRecentItems(refs.files.value ?? [])
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

  onMounted((): void => void refresh());
  let activated = false;
  onActivated(() => {
    if (activated) {
      // Returning from another page must sample state after any in-flight read.
      void (pendingRefresh ?? Promise.resolve()).then(refresh);
    }
    activated = true;
  });

  return {
    loading: refs.loading,
    loadError: refs.loadError,
    contentAvailable: computed(() => refs.files.value !== null),
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
