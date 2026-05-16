import { convertFileSrc, invoke } from '@tauri-apps/api/core';
import { listen, emit, type UnlistenFn } from '@tauri-apps/api/event';
import { SettingTwo } from '@icon-park/vue-next';
import { defineAsyncComponent, markRaw, type Component } from 'vue';
import type { RouteRecordRaw, Router } from 'vue-router';
import type { RegisteredPlugin } from './protocol';
import type { SearchSourceProvider, SearchSourceResult } from './search';
import { searchSourceProviders } from './search-providers';
import { pluginSettingsComponents, pluginSettingsMenuItems, type PluginSettingsMenuItem } from './settings';
import { titlebarPluginActions, type TitlebarPluginAction } from './titlebar';
import { pluginWindowShortcuts, type PluginWindowShortcut } from './windows';

type RuntimeRouteTarget = 'config' | 'layout' | 'window';

interface RuntimeRouteRegistration {
  target?: RuntimeRouteTarget;
  path: string;
  name: string;
  component?: Component;
  componentUrl?: string;
  meta?: Record<string, unknown>;
}

interface RuntimeSettingsRegistration {
  id: string;
  labelKey?: string;
  label?: string;
  icon?: Component;
  component?: Component;
  componentUrl?: string;
}

interface RuntimeSearchProviderRegistration {
  source: string;
  search(query: string): Promise<SearchSourceResult[]>;
}

interface RuntimeTitlebarActionRegistration {
  id: string;
  component?: Component;
  componentUrl?: string;
}

interface RuntimeWindowShortcutRegistration {
  label: string;
  closeCommandLabel?: string;
}

export interface PluginFrontendRuntimeContext {
  pluginId: string;
  packagePath: string;
  manifest: RegisteredPlugin['manifest'];
  resolveAssetUrl(relativePath: string): string;
  api: {
    invoke: typeof invoke;
    listen: typeof listen;
    emit: typeof emit;
  };
  registerRoute(route: RuntimeRouteRegistration): void;
  registerSettingsTab(tab: RuntimeSettingsRegistration): void;
  registerSearchProvider(provider: RuntimeSearchProviderRegistration): void;
  registerTitlebarAction(action: RuntimeTitlebarActionRegistration): void;
  registerWindowShortcut(shortcut: RuntimeWindowShortcutRegistration): void;
}

interface PluginFrontendModule {
  activate?: (context: PluginFrontendRuntimeContext) => void | Promise<void>;
  default?: {
    activate?: (context: PluginFrontendRuntimeContext) => void | Promise<void>;
  } | ((context: PluginFrontendRuntimeContext) => void | Promise<void>);
}

const runtimeConfigPluginRoutes: RouteRecordRaw[] = [];
const runtimeLayoutPluginRoutes: RouteRecordRaw[] = [];
const runtimeWindowPluginRoutes: RouteRecordRaw[] = [];
const loadedFrontendEntries = new Set<string>();
const installedRuntimeRouteNames = new Set<string>();

const trimSlashes = (value: string): string => value.replace(/^[\\/]+|[\\/]+$/g, '');

const isSafeRelativePath = (value: string): boolean => (
  !!value
  && !value.includes('://')
  && !value.startsWith('/')
  && !/^[a-zA-Z]:[\\/]/.test(value)
  && !trimSlashes(value).split(/[\\/]+/).includes('..')
);

const resolvePluginAssetPath = (plugin: RegisteredPlugin, relativePath: string): string => {
  if (!plugin.packagePath) {
    throw new Error(`插件 ${plugin.id} 缺少 packagePath`);
  }
  if (!isSafeRelativePath(relativePath)) {
    throw new Error(`插件 ${plugin.id} 使用了不安全的资源路径: ${relativePath}`);
  }

  return `${plugin.packagePath.replace(/[\\/]+$/g, '')}/${trimSlashes(relativePath)}`;
};

const resolvePluginAssetUrl = (plugin: RegisteredPlugin, relativePath: string): string => (
  convertFileSrc(resolvePluginAssetPath(plugin, relativePath))
);

const pluginComponent = (
  plugin: RegisteredPlugin,
  component?: Component,
  componentUrl?: string
): Component => {
  if (component) return markRaw(component);
  if (!componentUrl) {
    throw new Error(`插件 ${plugin.id} 注册组件时缺少 component 或 componentUrl`);
  }

  return markRaw(defineAsyncComponent(() => (
    import(/* @vite-ignore */ resolvePluginAssetUrl(plugin, componentUrl))
  )));
};

const pushRoute = (
  target: RuntimeRouteTarget,
  route: RouteRecordRaw
): void => {
  if (target === 'config') {
    runtimeConfigPluginRoutes.push(route);
    return;
  }
  if (target === 'window') {
    runtimeWindowPluginRoutes.push(route);
    return;
  }
  runtimeLayoutPluginRoutes.push(route);
};

const appendCapability = (
  plugin: RegisteredPlugin,
  key: 'routeNames' | 'settingsTabs' | 'hotkeys' | 'searchSources',
  value: string
): void => {
  const current = plugin[key] ?? [];
  if (!current.includes(value)) {
    plugin[key] = [...current, value];
  }

  plugin.manifest.capabilities = {
    ...plugin.manifest.capabilities,
    [key]: plugin[key]
  };
};

const createRuntimeContext = (plugin: RegisteredPlugin): PluginFrontendRuntimeContext => ({
  pluginId: String(plugin.id),
  packagePath: plugin.packagePath ?? '',
  manifest: plugin.manifest,
  resolveAssetUrl: (relativePath: string) => resolvePluginAssetUrl(plugin, relativePath),
  api: {
    invoke,
    listen,
    emit
  },
  registerRoute(route) {
    const target = route.target ?? 'layout';
    appendCapability(plugin, 'routeNames', route.name);
    pushRoute(target, {
      path: route.path,
      name: route.name,
      component: pluginComponent(plugin, route.component, route.componentUrl),
      meta: {
        ...route.meta,
        pluginId: plugin.id
      }
    });
  },
  registerSettingsTab(tab) {
    const labelKey = tab.labelKey ?? `plugins.${plugin.id}.${tab.id}`;
    const item: PluginSettingsMenuItem = {
      id: tab.id,
      labelKey,
      label: tab.label,
      icon: tab.icon ?? SettingTwo
    };

    pluginSettingsMenuItems.push(item);
    pluginSettingsComponents[tab.id] = pluginComponent(plugin, tab.component, tab.componentUrl);
    appendCapability(plugin, 'settingsTabs', tab.id);
  },
  registerSearchProvider(provider) {
    searchSourceProviders.push({
      pluginId: plugin.id,
      search: provider.search
    } satisfies SearchSourceProvider);
    appendCapability(plugin, 'searchSources', provider.source);
  },
  registerTitlebarAction(action) {
    titlebarPluginActions.push({
      id: action.id,
      pluginId: plugin.id,
      component: pluginComponent(plugin, action.component, action.componentUrl)
    } satisfies TitlebarPluginAction);
  },
  registerWindowShortcut(shortcut) {
    pluginWindowShortcuts.push({
      label: shortcut.label,
      pluginId: plugin.id,
      closeCommandLabel: shortcut.closeCommandLabel
    } satisfies PluginWindowShortcut);
  }
});

const activateFrontendModule = async (
  plugin: RegisteredPlugin,
  module: PluginFrontendModule
): Promise<void> => {
  const activate = module.activate
    ?? (typeof module.default === 'function' ? module.default : module.default?.activate);

  if (typeof activate !== 'function') {
    throw new Error(`插件 ${plugin.id} 的前端入口没有导出 activate(context)`);
  }

  await activate(createRuntimeContext(plugin));
};

export const ensureLocalPluginFrontendEntries = async (
  plugins: RegisteredPlugin[],
  isEnabled: (pluginId: string) => boolean
): Promise<void> => {
  for (const plugin of plugins) {
    if (plugin.source !== 'local') continue;
    if (!isEnabled(String(plugin.id))) continue;
    if (!plugin.manifest.entry?.frontend) continue;
    if (loadedFrontendEntries.has(String(plugin.id))) continue;

    try {
      const entryUrl = resolvePluginAssetUrl(plugin, plugin.manifest.entry.frontend);
      const pluginModule = await import(/* @vite-ignore */ entryUrl) as PluginFrontendModule;
      await activateFrontendModule(plugin, pluginModule);
      loadedFrontendEntries.add(String(plugin.id));
    } catch (error) {
      console.warn(`[PluginRuntime] 加载本地插件失败: ${plugin.id}`, error);
    }
  }
};

export const installRuntimePluginRoutes = (router: Router): number => {
  let added = 0;
  const installRoute = (route: RouteRecordRaw, parentName?: string): void => {
    if (!route.name || installedRuntimeRouteNames.has(String(route.name))) return;
    if (router.hasRoute(route.name)) return;
    if (parentName) {
      router.addRoute(parentName, route);
    } else {
      router.addRoute(route);
    }
    installedRuntimeRouteNames.add(String(route.name));
    added += 1;
  };

  runtimeConfigPluginRoutes.forEach((route) => installRoute(route, 'Config'));
  runtimeLayoutPluginRoutes.forEach((route) => installRoute(route, 'Root'));
  runtimeWindowPluginRoutes.forEach((route) => installRoute(route));

  return added;
};

export type RuntimeUnlisten = UnlistenFn;
