import type { AiProviderStatusSnapshot } from '@/ai';
import type { RegisteredPlugin } from '@/plugins/protocol';
import type { SearchSourceRuntimeState } from '@/search/sourceRegistry';
import type { MarkdownFile } from '@/types';

export interface WorkbenchContentSummary {
  total: number;
  snippets: number;
  notes: number;
  favorites: number;
}

export interface WorkbenchPluginSummary {
  installed: number;
  enabled: number;
  surfaces: number;
}

export interface WorkbenchSearchSummary {
  registered: number;
  failed: number;
  searching: number;
}

export interface WorkbenchAiSummary {
  providers: number;
  healthy: number;
  unavailable: number;
}

export const summarizeWorkbenchContent = (
  files: MarkdownFile[]
): WorkbenchContentSummary => ({
  total: files.length,
  snippets: files.filter((file) => file.type === 'code').length,
  notes: files.filter((file) => file.type === 'note').length,
  favorites: files.filter((file) => file.favorite).length
});

export const summarizeWorkbenchPlugins = (
  plugins: RegisteredPlugin[],
  isPluginEnabled: (pluginId: string) => boolean
): WorkbenchPluginSummary => {
  const visiblePlugins = plugins.filter((plugin) => !plugin.resourceFor);
  const enabledPlugins = visiblePlugins.filter((plugin) =>
    isPluginEnabled(String(plugin.id))
  );
  const surfaces = enabledPlugins.reduce(
    (count, plugin) =>
      count +
      (plugin.routeNames?.length ?? 0) +
      (plugin.settingsTabs?.length ?? 0) +
      (plugin.hotkeys?.length ?? 0) +
      (plugin.searchSources?.length ?? 0) +
      (plugin.aiProviders?.length ?? 0) +
      (plugin.aiContextProviders?.length ?? 0),
    0
  );

  return {
    installed: visiblePlugins.length,
    enabled: enabledPlugins.length,
    surfaces
  };
};

export const summarizeWorkbenchSearch = (
  sources: SearchSourceRuntimeState[]
): WorkbenchSearchSummary => ({
  registered: sources.length,
  failed: sources.filter((source) => source.health === 'failed').length,
  searching: sources.filter((source) => source.health === 'searching').length
});

export const summarizeWorkbenchAi = (
  providers: AiProviderStatusSnapshot[]
): WorkbenchAiSummary => ({
  providers: providers.length,
  healthy: providers.filter(
    (provider) => provider.status.available && provider.status.healthy !== false
  ).length,
  unavailable: providers.filter((provider) => !provider.status.available).length
});
