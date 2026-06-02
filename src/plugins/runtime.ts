import { convertFileSrc, invoke } from '@tauri-apps/api/core';
import { listen, emit, type UnlistenFn } from '@tauri-apps/api/event';
import { SettingTwo } from '@icon-park/vue-next';
import {
  defineAsyncComponent,
  defineComponent,
  h,
  markRaw,
  type Component
} from 'vue';
import * as VueRuntime from 'vue';
import type { RouteComponent, RouteRecordRaw, Router } from 'vue-router';
import type { RegisteredPlugin } from './protocol';
import type { SearchSourceProvider, SearchSourceResult } from './search';
import { searchSourceProviders } from './search-providers';
import {
  pluginSettingsComponents,
  pluginSettingsMenuItems,
  type PluginSettingsMenuItem
} from './settings';
import { titlebarPluginActions, type TitlebarPluginAction } from './titlebar';
import { pluginWindowShortcuts, type PluginWindowShortcut } from './windows';
import {
  pluginHostComponents,
  type PluginHostComponentTarget
} from './host-components';
import { logger } from '@/utils/logger';
import {
  assertCanInvokeBackendCommand,
  assertCanInvokeCommand
} from './permissions';

type RuntimeRouteTarget = 'config' | 'layout' | 'window';
type RuntimeRouteComponent = RouteComponent | (() => Promise<unknown>);

interface RuntimeRouteRegistration {
  target?: RuntimeRouteTarget;
  path: string;
  name: string;
  component?: RuntimeRouteComponent;
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

interface RuntimeHostComponentRegistration {
  id: string;
  target?: PluginHostComponentTarget;
  component?: Component;
  componentUrl?: string;
}

type RuntimeCleanup = () => void | Promise<void>;
type RuntimeActivationResult =
  | void
  | RuntimeCleanup
  | {
      deactivate?: RuntimeCleanup;
      dispose?: RuntimeCleanup;
    };

export interface PluginFrontendRuntimeContext {
  pluginId: string;
  packagePath: string;
  manifest: RegisteredPlugin['manifest'];
  resolveAssetUrl(relativePath: string): string;
  api: {
    invoke: typeof invoke;
    invokeBackend<T = unknown>(command: string, payload?: unknown): Promise<T>;
    listen: typeof listen;
    emit: typeof emit;
  };
  ui: {
    h: typeof h;
    defineComponent: typeof defineComponent;
  };
  storage: {
    get<T = unknown>(key: string): Promise<T | null>;
    set(key: string, value: unknown): Promise<void>;
    delete(key: string): Promise<void>;
  };
  registerRoute(route: RuntimeRouteRegistration): void;
  registerSettingsTab(tab: RuntimeSettingsRegistration): void;
  registerSearchProvider(provider: RuntimeSearchProviderRegistration): void;
  registerTitlebarAction(action: RuntimeTitlebarActionRegistration): void;
  registerWindowShortcut(shortcut: RuntimeWindowShortcutRegistration): void;
  registerHostComponent(component: RuntimeHostComponentRegistration): void;
}

interface PluginFrontendModule {
  activate?: (
    context: PluginFrontendRuntimeContext
  ) => RuntimeActivationResult | Promise<RuntimeActivationResult>;
  default?:
    | {
        activate?: (
          context: PluginFrontendRuntimeContext
        ) => RuntimeActivationResult | Promise<RuntimeActivationResult>;
      }
    | ((
        context: PluginFrontendRuntimeContext
      ) => RuntimeActivationResult | Promise<RuntimeActivationResult>);
}

const runtimeConfigPluginRoutes: RouteRecordRaw[] = [];
const runtimeLayoutPluginRoutes: RouteRecordRaw[] = [];
const runtimeWindowPluginRoutes: RouteRecordRaw[] = [];
const loadedFrontendEntries = new Set<string>();
const loadedPluginStyleLinks = new Map<string, HTMLLinkElement[]>();
const loadedPluginModuleUrls = new Map<string, string[]>();
const sharedModuleUrls = new Map<string, string>();
const installedRuntimeRouteNames = new Set<string>();
const installedRuntimeRouteRemovers = new Map<string, () => void>();
const runtimeCleanupHandlers = new Map<string, Set<RuntimeCleanup>>();
const runtimeSettingsTabKeys = new Set<string>();
const runtimeTitlebarActionKeys = new Set<string>();

const trimSlashes = (value: string): string =>
  value.replace(/^[\\/]+|[\\/]+$/g, '');

const isSafeRelativePath = (value: string): boolean =>
  !!value &&
  !value.includes('://') &&
  !value.startsWith('/') &&
  !/^[a-zA-Z]:[\\/]/.test(value) &&
  !trimSlashes(value)
    .split(/[\\/]+/)
    .includes('..');

const resolvePluginAssetPath = (
  plugin: RegisteredPlugin,
  relativePath: string
): string => {
  if (!plugin.packagePath) {
    throw new Error(`插件 ${plugin.id} 缺少 packagePath`);
  }
  if (!isSafeRelativePath(relativePath)) {
    throw new Error(
      `插件 ${plugin.id} 使用了不安全的资源路径: ${relativePath}`
    );
  }

  return `${plugin.packagePath.replace(/[\\/]+$/g, '')}/${trimSlashes(relativePath)}`;
};

const resolvePluginAssetUrl = (
  plugin: RegisteredPlugin,
  relativePath: string
): string => convertFileSrc(resolvePluginAssetPath(plugin, relativePath));

const dirnameOfRelativePath = (relativePath: string): string => {
  const segments = trimSlashes(relativePath).split(/[\\/]+/);
  segments.pop();
  return segments.join('/');
};

const splitAssetSpecifier = (
  specifier: string
): { path: string; suffix: string } => {
  const match = /^([^?#]*)([?#].*)?$/.exec(specifier);
  return {
    path: match?.[1] ?? specifier,
    suffix: match?.[2] ?? ''
  };
};

const normalizePluginAssetPath = (
  baseDir: string,
  specifier: string
): string => {
  const { path } = splitAssetSpecifier(specifier);
  const segments = [
    ...trimSlashes(baseDir).split(/[\\/]+/),
    ...path.split(/[\\/]+/)
  ];
  const normalized: string[] = [];

  for (const segment of segments) {
    if (!segment || segment === '.') continue;
    if (segment === '..') {
      if (!normalized.length) {
        throw new Error(`插件资源路径越界: ${specifier}`);
      }
      normalized.pop();
      continue;
    }
    normalized.push(segment);
  }

  return normalized.join('/');
};

const resolveRelativePluginAssetUrl = (
  plugin: RegisteredPlugin,
  fromRelativePath: string,
  specifier: string
): string => {
  const { suffix } = splitAssetSpecifier(specifier);
  const normalizedPath = normalizePluginAssetPath(
    dirnameOfRelativePath(fromRelativePath),
    specifier
  );
  return `${resolvePluginAssetUrl(plugin, normalizedPath)}${suffix}`;
};

const vueRuntimeExportNames = [
  'BaseTransition',
  'BaseTransitionPropsValidators',
  'Comment',
  'DeprecationTypes',
  'EffectScope',
  'ErrorCodes',
  'ErrorTypeStrings',
  'Fragment',
  'KeepAlive',
  'ReactiveEffect',
  'Static',
  'Suspense',
  'Teleport',
  'Text',
  'TrackOpTypes',
  'Transition',
  'TransitionGroup',
  'TriggerOpTypes',
  'VueElement',
  'assertNumber',
  'callWithAsyncErrorHandling',
  'callWithErrorHandling',
  'camelize',
  'capitalize',
  'cloneVNode',
  'compatUtils',
  'compile',
  'computed',
  'createApp',
  'createBlock',
  'createCommentVNode',
  'createElementBlock',
  'createElementVNode',
  'createHydrationRenderer',
  'createPropsRestProxy',
  'createRenderer',
  'createSSRApp',
  'createSlots',
  'createStaticVNode',
  'createTextVNode',
  'createVNode',
  'customRef',
  'defineAsyncComponent',
  'defineComponent',
  'defineCustomElement',
  'defineEmits',
  'defineExpose',
  'defineModel',
  'defineOptions',
  'defineProps',
  'defineSSRCustomElement',
  'defineSlots',
  'devtools',
  'effect',
  'effectScope',
  'getCurrentInstance',
  'getCurrentScope',
  'getCurrentWatcher',
  'getTransitionRawChildren',
  'guardReactiveProps',
  'h',
  'handleError',
  'hasInjectionContext',
  'hydrate',
  'hydrateOnIdle',
  'hydrateOnInteraction',
  'hydrateOnMediaQuery',
  'hydrateOnVisible',
  'initCustomFormatter',
  'initDirectivesForSSR',
  'inject',
  'isMemoSame',
  'isProxy',
  'isReactive',
  'isReadonly',
  'isRef',
  'isRuntimeOnly',
  'isShallow',
  'isVNode',
  'markRaw',
  'mergeDefaults',
  'mergeModels',
  'mergeProps',
  'nextTick',
  'normalizeClass',
  'normalizeProps',
  'normalizeStyle',
  'onActivated',
  'onBeforeMount',
  'onBeforeUnmount',
  'onBeforeUpdate',
  'onDeactivated',
  'onErrorCaptured',
  'onMounted',
  'onRenderTracked',
  'onRenderTriggered',
  'onScopeDispose',
  'onServerPrefetch',
  'onUnmounted',
  'onUpdated',
  'onWatcherCleanup',
  'openBlock',
  'popScopeId',
  'provide',
  'proxyRefs',
  'pushScopeId',
  'queuePostFlushCb',
  'reactive',
  'readonly',
  'ref',
  'registerRuntimeCompiler',
  'render',
  'renderList',
  'renderSlot',
  'resolveComponent',
  'resolveDirective',
  'resolveDynamicComponent',
  'resolveFilter',
  'resolveTransitionHooks',
  'setBlockTracking',
  'setDevtoolsHook',
  'setTransitionHooks',
  'shallowReactive',
  'shallowReadonly',
  'shallowRef',
  'ssrContextKey',
  'ssrUtils',
  'stop',
  'toDisplayString',
  'toHandlerKey',
  'toHandlers',
  'toRaw',
  'toRef',
  'toRefs',
  'toValue',
  'transformVNodeArgs',
  'triggerRef',
  'unref',
  'useAttrs',
  'useCssModule',
  'useCssVars',
  'useHost',
  'useId',
  'useModel',
  'useSSRContext',
  'useShadowRoot',
  'useSlots',
  'useTemplateRef',
  'useTransitionState',
  'vModelCheckbox',
  'vModelDynamic',
  'vModelRadio',
  'vModelSelect',
  'vModelText',
  'vShow',
  'version',
  'warn',
  'watch',
  'watchEffect',
  'watchPostEffect',
  'watchSyncEffect',
  'withAsyncContext',
  'withCtx',
  'withDefaults',
  'withDirectives',
  'withKeys',
  'withMemo',
  'withModifiers',
  'withScopeId'
];

const ensureSharedModuleUrl = (specifier: string): string | null => {
  if (specifier !== 'vue') return null;

  const existingUrl = sharedModuleUrls.get(specifier);
  if (existingUrl) return existingUrl;

  const globalKey = '__SNIPPETS_CODE_PLUGIN_SHARED__';
  const sharedGlobal = globalThis as typeof globalThis & {
    [globalKey]?: Record<string, unknown>;
  };
  sharedGlobal[globalKey] = {
    ...(sharedGlobal[globalKey] ?? {}),
    vue: VueRuntime
  };

  const exports = vueRuntimeExportNames
    .map((name) => `export const ${name} = Vue.${name};`)
    .join('\n');
  const source = [
    `const Vue = globalThis.${globalKey}.vue;`,
    'export default Vue;',
    exports
  ].join('\n');
  const moduleUrl = URL.createObjectURL(
    new Blob([source], { type: 'text/javascript' })
  );
  sharedModuleUrls.set(specifier, moduleUrl);
  return moduleUrl;
};

const rewritePluginModuleSource = (
  plugin: RegisteredPlugin,
  entryRelativePath: string,
  source: string
): string => {
  const rewriteSpecifier = (specifier: string): string => {
    const sharedModuleUrl = ensureSharedModuleUrl(specifier);
    if (sharedModuleUrl) return sharedModuleUrl;
    if (!specifier.startsWith('./') && !specifier.startsWith('../')) {
      return specifier;
    }
    return resolveRelativePluginAssetUrl(plugin, entryRelativePath, specifier);
  };

  return source
    .replace(
      /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
      (_match, prefix: string, quote: string, specifier: string) =>
        `${prefix}${quote}${rewriteSpecifier(specifier)}${quote}`
    )
    .replace(
      /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
      (
        _match,
        prefix: string,
        quote: string,
        specifier: string,
        suffix: string
      ) => `${prefix}${quote}${rewriteSpecifier(specifier)}${quote}${suffix}`
    );
};

const rememberPluginModuleUrl = (pluginId: string, url: string): void => {
  const urls = loadedPluginModuleUrls.get(pluginId) ?? [];
  urls.push(url);
  loadedPluginModuleUrls.set(pluginId, urls);
};

const revokePluginModuleUrls = (pluginId: string): void => {
  const urls = loadedPluginModuleUrls.get(pluginId) ?? [];
  urls.forEach((url) => URL.revokeObjectURL(url));
  loadedPluginModuleUrls.delete(pluginId);
};

const loadPluginFrontendModule = async (
  plugin: RegisteredPlugin,
  entryRelativePath: string
): Promise<PluginFrontendModule> => {
  const entryUrl = resolvePluginAssetUrl(plugin, entryRelativePath);
  const response = await fetch(entryUrl);

  if (!response.ok) {
    throw new Error(
      `插件 ${plugin.id} 前端入口读取失败: ${response.status} ${response.statusText}`
    );
  }

  const source = await response.text();
  const rewrittenSource = rewritePluginModuleSource(
    plugin,
    entryRelativePath,
    source
  );
  const moduleUrl = URL.createObjectURL(
    new Blob([rewrittenSource], { type: 'text/javascript' })
  );
  rememberPluginModuleUrl(String(plugin.id), moduleUrl);

  return (await import(/* @vite-ignore */ moduleUrl)) as PluginFrontendModule;
};

const createPluginInvoke = (plugin: RegisteredPlugin): typeof invoke =>
  (async (
    command: string,
    args?: Record<string, unknown>,
    options?: unknown
  ) => {
    assertCanInvokeCommand(plugin, command);

    return invoke(command, args, options as Parameters<typeof invoke>[2]);
  }) as typeof invoke;

const createPluginBackendInvoke =
  (plugin: RegisteredPlugin) =>
  async <T = unknown>(command: string, payload: unknown = null): Promise<T> => {
    assertCanInvokeBackendCommand(plugin, command);

    return await invoke<T>('invoke_plugin_backend', {
      pluginId: plugin.id,
      command,
      payload
    });
  };

const addRuntimeCleanup = (pluginId: string, cleanup: RuntimeCleanup): void => {
  const handlers = runtimeCleanupHandlers.get(pluginId) ?? new Set();
  handlers.add(cleanup);
  runtimeCleanupHandlers.set(pluginId, handlers);
};

const removeRuntimeCleanup = (
  pluginId: string,
  cleanup: RuntimeCleanup
): void => {
  const handlers = runtimeCleanupHandlers.get(pluginId);
  if (!handlers) return;

  handlers.delete(cleanup);
  if (handlers.size === 0) {
    runtimeCleanupHandlers.delete(pluginId);
  }
};

const runRuntimeCleanups = (pluginId: string): void => {
  const handlers = Array.from(runtimeCleanupHandlers.get(pluginId) ?? []);
  runtimeCleanupHandlers.delete(pluginId);

  for (const cleanup of handlers) {
    try {
      void cleanup();
    } catch (error) {
      logger.warn(`[PluginRuntime] 清理插件运行时失败: ${pluginId}`, error);
    }
  }
};

const createPluginListen = (plugin: RegisteredPlugin): typeof listen =>
  (async (...args: Parameters<typeof listen>) => {
    const pluginId = String(plugin.id);
    const unlisten = await listen(...args);
    let active = true;
    const cleanup = (): void => {
      if (!active) return;
      active = false;
      removeRuntimeCleanup(pluginId, cleanup);
      unlisten();
    };

    addRuntimeCleanup(pluginId, cleanup);
    return cleanup;
  }) as typeof listen;

const pluginComponent = (
  plugin: RegisteredPlugin,
  component?: Component,
  componentUrl?: string
): Component => {
  if (component) return markRaw(component);
  if (!componentUrl) {
    throw new Error(
      `插件 ${plugin.id} 注册组件时缺少 component 或 componentUrl`
    );
  }

  return markRaw(
    defineAsyncComponent(
      () =>
        import(/* @vite-ignore */ resolvePluginAssetUrl(plugin, componentUrl))
    )
  );
};

const pluginRouteComponent = (
  plugin: RegisteredPlugin,
  component?: RuntimeRouteComponent,
  componentUrl?: string
): RouteRecordRaw['component'] => {
  if (component) return component as RouteRecordRaw['component'];
  if (!componentUrl) {
    throw new Error(
      `插件 ${plugin.id} 注册路由组件时缺少 component 或 componentUrl`
    );
  }

  return () => import(/* @vite-ignore */ resolvePluginAssetUrl(plugin, componentUrl));
};

const pushRoute = (target: RuntimeRouteTarget, route: RouteRecordRaw): void => {
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

const removeRoutesForPlugin = (
  routes: RouteRecordRaw[],
  pluginId: string
): void => {
  for (let index = routes.length - 1; index >= 0; index -= 1) {
    if (routes[index].meta?.pluginId === pluginId) {
      routes.splice(index, 1);
    }
  }
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

const runtimeRegistrationKey = (pluginId: string, id: string): string =>
  `${pluginId}:${id}`;

const createRuntimeContext = (
  plugin: RegisteredPlugin
): PluginFrontendRuntimeContext => ({
  pluginId: String(plugin.id),
  packagePath: plugin.packagePath ?? '',
  manifest: plugin.manifest,
  resolveAssetUrl: (relativePath: string) =>
    resolvePluginAssetUrl(plugin, relativePath),
  api: {
    invoke: createPluginInvoke(plugin),
    invokeBackend: createPluginBackendInvoke(plugin),
    listen: createPluginListen(plugin),
    emit
  },
  ui: {
    h,
    defineComponent
  },
  storage: {
    get: async <T = unknown>(key: string): Promise<T | null> => {
      const value = await invoke<T | null>('get_local_plugin_data', {
        pluginId: plugin.id,
        key
      });
      return value ?? null;
    },
    set: async (key: string, value: unknown): Promise<void> => {
      await invoke('set_local_plugin_data', {
        pluginId: plugin.id,
        key,
        value
      });
    },
    delete: async (key: string): Promise<void> => {
      await invoke('delete_local_plugin_data', {
        pluginId: plugin.id,
        key
      });
    }
  },
  registerRoute(route) {
    const target = route.target ?? 'layout';
    appendCapability(plugin, 'routeNames', route.name);
    const routeRecord: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      component: pluginRouteComponent(plugin, route.component, route.componentUrl),
      meta: {
        ...route.meta,
        pluginId: plugin.id
      }
    } as RouteRecordRaw;
    pushRoute(target, routeRecord);
  },
  registerSettingsTab(tab) {
    const labelKey = tab.labelKey ?? `plugins.${plugin.id}.${tab.id}`;
    const item: PluginSettingsMenuItem = {
      id: tab.id,
      pluginId: String(plugin.id),
      labelKey,
      label: tab.label,
      icon: tab.icon ?? SettingTwo
    };
    const registrationKey = runtimeRegistrationKey(String(plugin.id), tab.id);
    const existingIndex = pluginSettingsMenuItems.findIndex(
      (candidate) =>
        candidate.id === tab.id && candidate.pluginId === String(plugin.id)
    );
    const component = pluginComponent(plugin, tab.component, tab.componentUrl);

    if (existingIndex === -1) {
      pluginSettingsMenuItems.push(item);
      pluginSettingsComponents[tab.id] = component;
      runtimeSettingsTabKeys.add(registrationKey);
    } else if (runtimeSettingsTabKeys.has(registrationKey)) {
      pluginSettingsMenuItems[existingIndex] = item;
      pluginSettingsComponents[tab.id] = component;
    }
    appendCapability(plugin, 'settingsTabs', tab.id);
  },
  registerSearchProvider(provider) {
    const nextProvider = {
      pluginId: plugin.id,
      source: provider.source,
      search: provider.search
    } satisfies SearchSourceProvider;
    const existingIndex = searchSourceProviders.findIndex(
      (candidate) =>
        candidate.pluginId === plugin.id && candidate.source === provider.source
    );

    if (existingIndex === -1) {
      searchSourceProviders.push(nextProvider);
    } else {
      searchSourceProviders[existingIndex] = nextProvider;
    }
    appendCapability(plugin, 'searchSources', provider.source);
  },
  registerTitlebarAction(action) {
    const registrationKey = runtimeRegistrationKey(
      String(plugin.id),
      action.id
    );
    const existingIndex = titlebarPluginActions.findIndex(
      (candidate) =>
        candidate.id === action.id && candidate.pluginId === plugin.id
    );
    const titlebarAction = {
      id: action.id,
      pluginId: plugin.id,
      component: pluginComponent(plugin, action.component, action.componentUrl)
    } satisfies TitlebarPluginAction;

    if (existingIndex === -1) {
      titlebarPluginActions.push(titlebarAction);
      runtimeTitlebarActionKeys.add(registrationKey);
    } else if (runtimeTitlebarActionKeys.has(registrationKey)) {
      titlebarPluginActions[existingIndex] = titlebarAction;
    }
  },
  registerWindowShortcut(shortcut) {
    pluginWindowShortcuts.push({
      label: shortcut.label,
      pluginId: plugin.id,
      closeCommandLabel: shortcut.closeCommandLabel
    } satisfies PluginWindowShortcut);
  },
  registerHostComponent(hostComponent) {
    const target = hostComponent.target ?? 'config';
    const nextComponent = {
      id: hostComponent.id,
      pluginId: plugin.id,
      target,
      component: pluginComponent(
        plugin,
        hostComponent.component,
        hostComponent.componentUrl
      )
    };
    const existingIndex = pluginHostComponents.findIndex(
      (candidate) =>
        candidate.pluginId === plugin.id &&
        candidate.id === hostComponent.id &&
        candidate.target === target
    );

    if (existingIndex === -1) {
      pluginHostComponents.push(nextComponent);
    } else {
      pluginHostComponents[existingIndex] = nextComponent;
    }
  }
});

const activateFrontendModule = async (
  plugin: RegisteredPlugin,
  module: PluginFrontendModule
): Promise<void> => {
  const activate =
    module.activate ??
    (typeof module.default === 'function'
      ? module.default
      : module.default?.activate);

  if (typeof activate !== 'function') {
    throw new Error(`插件 ${plugin.id} 的前端入口没有导出 activate(context)`);
  }

  const result = await activate(createRuntimeContext(plugin));
  const pluginId = String(plugin.id);

  if (typeof result === 'function') {
    addRuntimeCleanup(pluginId, result);
    return;
  }

  if (typeof result?.deactivate === 'function') {
    addRuntimeCleanup(pluginId, result.deactivate);
  }
  if (typeof result?.dispose === 'function') {
    addRuntimeCleanup(pluginId, result.dispose);
  }
};

const ensurePluginStyles = (plugin: RegisteredPlugin): void => {
  if (loadedPluginStyleLinks.has(String(plugin.id))) return;

  const styles = plugin.manifest.entry?.styles ?? [];
  if (!styles.length) return;

  const links = styles.map((stylePath) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = resolvePluginAssetUrl(plugin, stylePath);
    link.dataset.pluginId = String(plugin.id);
    document.head.appendChild(link);
    return link;
  });

  loadedPluginStyleLinks.set(String(plugin.id), links);
};

const removePluginStyles = (pluginId: string): void => {
  const links = loadedPluginStyleLinks.get(pluginId) ?? [];
  links.forEach((link) => link.remove());
  loadedPluginStyleLinks.delete(pluginId);
};

export const ensureLocalPluginFrontendEntries = async (
  plugins: RegisteredPlugin[],
  isEnabled: (pluginId: string) => boolean
): Promise<void> => {
  for (const plugin of plugins) {
    if (plugin.source !== 'local') continue;
    if (!isEnabled(String(plugin.id))) continue;
    if (loadedFrontendEntries.has(String(plugin.id))) continue;

    if (plugin.manifest.entry?.frontend) {
      try {
        ensurePluginStyles(plugin);
        const pluginModule = await loadPluginFrontendModule(
          plugin,
          plugin.manifest.entry.frontend
        );
        await activateFrontendModule(plugin, pluginModule);
        loadedFrontendEntries.add(String(plugin.id));
      } catch (error) {
        clearRuntimePluginRegistrations(String(plugin.id));
        logger.warn(`[PluginRuntime] 加载本地插件失败: ${plugin.id}`, error);
      }
      continue;
    }

    logger.warn(`[PluginRuntime] 本地插件缺少前端入口: ${plugin.id}`);
  }
};

export const installRuntimePluginRoutes = (router: Router): number => {
  let added = 0;
  const installRoute = (route: RouteRecordRaw, parentName?: string): void => {
    if (!route.name || installedRuntimeRouteNames.has(String(route.name)))
      return;
    if (router.hasRoute(route.name)) return;
    let removeRoute: () => void;
    if (parentName) {
      removeRoute = router.addRoute(parentName, route);
    } else {
      removeRoute = router.addRoute(route);
    }
    installedRuntimeRouteNames.add(String(route.name));
    installedRuntimeRouteRemovers.set(String(route.name), removeRoute);
    added += 1;
  };

  runtimeConfigPluginRoutes.forEach((route) => installRoute(route, 'Config'));
  runtimeLayoutPluginRoutes.forEach((route) => installRoute(route, 'Root'));
  runtimeWindowPluginRoutes.forEach((route) => installRoute(route));

  return added;
};

export function clearRuntimePluginRegistrations(pluginId: string): void {
  runRuntimeCleanups(pluginId);
  loadedFrontendEntries.delete(pluginId);
  removePluginStyles(pluginId);
  revokePluginModuleUrls(pluginId);

  for (const [
    routeName,
    removeRoute
  ] of installedRuntimeRouteRemovers.entries()) {
    const shouldRemove = [
      ...runtimeConfigPluginRoutes,
      ...runtimeLayoutPluginRoutes,
      ...runtimeWindowPluginRoutes
    ].some(
      (route) => route.name === routeName && route.meta?.pluginId === pluginId
    );
    if (!shouldRemove) continue;

    removeRoute();
    installedRuntimeRouteNames.delete(routeName);
    installedRuntimeRouteRemovers.delete(routeName);
  }

  removeRoutesForPlugin(runtimeConfigPluginRoutes, pluginId);
  removeRoutesForPlugin(runtimeLayoutPluginRoutes, pluginId);
  removeRoutesForPlugin(runtimeWindowPluginRoutes, pluginId);

  for (let index = pluginSettingsMenuItems.length - 1; index >= 0; index -= 1) {
    const item = pluginSettingsMenuItems[index];
    const registrationKey = runtimeRegistrationKey(pluginId, item.id);
    if (
      item.pluginId === pluginId &&
      runtimeSettingsTabKeys.has(registrationKey)
    ) {
      delete pluginSettingsComponents[item.id];
      pluginSettingsMenuItems.splice(index, 1);
      runtimeSettingsTabKeys.delete(registrationKey);
    }
  }

  for (let index = searchSourceProviders.length - 1; index >= 0; index -= 1) {
    if (searchSourceProviders[index].pluginId === pluginId) {
      searchSourceProviders.splice(index, 1);
    }
  }

  for (let index = titlebarPluginActions.length - 1; index >= 0; index -= 1) {
    const action = titlebarPluginActions[index];
    const registrationKey = runtimeRegistrationKey(pluginId, action.id);
    if (
      action.pluginId === pluginId &&
      runtimeTitlebarActionKeys.has(registrationKey)
    ) {
      titlebarPluginActions.splice(index, 1);
      runtimeTitlebarActionKeys.delete(registrationKey);
    }
  }

  for (let index = pluginWindowShortcuts.length - 1; index >= 0; index -= 1) {
    if (pluginWindowShortcuts[index].pluginId === pluginId) {
      pluginWindowShortcuts.splice(index, 1);
    }
  }

  for (let index = pluginHostComponents.length - 1; index >= 0; index -= 1) {
    if (pluginHostComponents[index].pluginId === pluginId) {
      pluginHostComponents.splice(index, 1);
    }
  }
}

export type RuntimeUnlisten = UnlistenFn;
