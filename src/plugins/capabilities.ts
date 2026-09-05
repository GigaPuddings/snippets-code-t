import type { Component } from 'vue';
import type { RouteComponent } from 'vue-router';
import type { PluginHostComponentTarget } from './host-components';
import type { RegisteredPlugin } from './protocol';
import type { SearchSourceProviderPhase, SearchSourceResult } from './search';
import type { RuntimeAiProviderRegistration } from './ai-providers';
import type { RuntimeAiContextProviderRegistration } from './ai-context-providers';
import { assertCanFetchUrl, assertCanUseCapability } from './permissions';

type PluginCapabilityInvoke = <T = unknown>(
  command: string,
  args?: Record<string, unknown>
) => Promise<T>;

export type RuntimeRouteTarget = 'config' | 'layout' | 'window';
export type RuntimeRouteComponent = RouteComponent | (() => Promise<unknown>);

export interface RuntimeRouteRegistration {
  target?: RuntimeRouteTarget;
  path: string;
  name: string;
  component?: RuntimeRouteComponent;
  componentUrl?: string;
  meta?: Record<string, unknown>;
}

export interface RuntimeSettingsRegistration {
  id: string;
  labelKey?: string;
  label?: string;
  icon?: Component;
  component?: Component;
  componentUrl?: string;
}

export interface RuntimeSearchProviderRegistration {
  source: string;
  phase?: SearchSourceProviderPhase;
  search(query: string): Promise<SearchSourceResult[]>;
}

export interface RuntimeTitlebarActionRegistration {
  id: string;
  component?: Component;
  componentUrl?: string;
}

export interface RuntimeWindowShortcutRegistration {
  label: string;
  closeCommandLabel?: string;
}

export interface RuntimeHostComponentRegistration {
  id: string;
  target?: PluginHostComponentTarget;
  component?: Component;
  componentUrl?: string;
}

export interface PluginWorkspaceWriteInput {
  content?: string;
  metadata?: Record<string, unknown> | null;
}

export interface PluginWorkspaceCapability {
  getRoot(): Promise<string | null>;
  read<T = unknown>(filePath: string): Promise<T>;
  write(
    filePath: string,
    input: string | PluginWorkspaceWriteInput
  ): Promise<string | null>;
}

export interface PluginStorageCapability {
  get<T = unknown>(key: string): Promise<T | null>;
  set(key: string, value: unknown): Promise<void>;
  delete(key: string): Promise<void>;
}

export interface PluginSearchCapability {
  registerProvider(provider: RuntimeSearchProviderRegistration): void;
}

export interface PluginAiCapability {
  registerProvider(provider: RuntimeAiProviderRegistration): void;
  registerContextProvider(provider: RuntimeAiContextProviderRegistration): void;
}

export interface PluginNetworkCapability {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export interface PluginClipboardCapability {
  read(): Promise<string>;
  write(text: string): Promise<void>;
}

export interface PluginNotificationOptions {
  title: string;
  body?: string;
  icon?: string;
}

export interface PluginNotificationCapability {
  show(options: PluginNotificationOptions): Promise<void>;
}

export type RuntimeWindowRegistration = Omit<
  RuntimeRouteRegistration,
  'target'
> & {
  shortcutLabel?: string;
  closeCommandLabel?: string;
};

export interface PluginWindowCapability {
  create(registration: RuntimeWindowRegistration): void;
  registerShortcut(shortcut: RuntimeWindowShortcutRegistration): void;
}

export interface PluginRuntimeCapabilities {
  workspace: PluginWorkspaceCapability;
  storage: PluginStorageCapability;
  search: PluginSearchCapability;
  ai: PluginAiCapability;
  network: PluginNetworkCapability;
  clipboard: PluginClipboardCapability;
  notification: PluginNotificationCapability;
  window: PluginWindowCapability;
}

export interface PluginCapabilityHost {
  invoke: PluginCapabilityInvoke;
  registerRoute(route: RuntimeRouteRegistration): void;
  registerSearchProvider(provider: RuntimeSearchProviderRegistration): void;
  registerAiProvider(provider: RuntimeAiProviderRegistration): void;
  registerAiContextProvider(
    provider: RuntimeAiContextProviderRegistration
  ): void;
  registerWindowShortcut(shortcut: RuntimeWindowShortcutRegistration): void;
}

const fetchUrlFromInput = (input: RequestInfo | URL): string => {
  if (input instanceof URL) return input.href;
  if (typeof Request !== 'undefined' && input instanceof Request) {
    return input.url;
  }
  return String(input);
};

const requestNotificationPermission =
  async (): Promise<NotificationPermission> => {
    if (Notification.permission !== 'default') {
      return Notification.permission;
    }
    return await Notification.requestPermission();
  };

const writeWorkspaceInput = (
  input: string | PluginWorkspaceWriteInput
): { content?: string; metadata?: Record<string, unknown> | null } =>
  typeof input === 'string' ? { content: input } : input;

const createWorkspaceCapability = (
  plugin: RegisteredPlugin,
  host: PluginCapabilityHost
): PluginWorkspaceCapability => ({
  async getRoot(): Promise<string | null> {
    assertCanUseCapability(plugin, 'workspace', 'read');
    return await host.invoke<string | null>('get_workspace_root_path');
  },
  async read<T = unknown>(filePath: string): Promise<T> {
    assertCanUseCapability(plugin, 'workspace', 'read');
    return await host.invoke<T>('read_markdown_file', { filePath });
  },
  async write(
    filePath: string,
    input: string | PluginWorkspaceWriteInput
  ): Promise<string | null> {
    assertCanUseCapability(plugin, 'workspace', 'write');
    const payload = writeWorkspaceInput(input);
    return await host.invoke<string | null>('update_markdown_file', {
      filePath,
      content: payload.content,
      metadata: payload.metadata
    });
  }
});

const createStorageCapability = (
  plugin: RegisteredPlugin,
  host: PluginCapabilityHost
): PluginStorageCapability => ({
  async get<T = unknown>(key: string): Promise<T | null> {
    const value = await host.invoke<T | null>('get_local_plugin_data', {
      pluginId: plugin.id,
      key
    });
    return value ?? null;
  },
  async set(key: string, value: unknown): Promise<void> {
    await host.invoke('set_local_plugin_data', {
      pluginId: plugin.id,
      key,
      value
    });
  },
  async delete(key: string): Promise<void> {
    await host.invoke('delete_local_plugin_data', {
      pluginId: plugin.id,
      key
    });
  }
});

const createSearchCapability = (
  host: PluginCapabilityHost
): PluginSearchCapability => ({
  registerProvider(provider: RuntimeSearchProviderRegistration): void {
    host.registerSearchProvider(provider);
  }
});

const createNetworkCapability = (
  plugin: RegisteredPlugin
): PluginNetworkCapability => ({
  async fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const url = fetchUrlFromInput(input);
    assertCanFetchUrl(plugin, url);
    return await fetch(input, init);
  }
});

const getClipboardApi = (plugin: RegisteredPlugin): Clipboard => {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    throw new Error(`插件 ${plugin.id} 当前环境不支持剪贴板能力`);
  }
  return navigator.clipboard;
};

const createClipboardCapability = (
  plugin: RegisteredPlugin
): PluginClipboardCapability => ({
  async read(): Promise<string> {
    assertCanUseCapability(plugin, 'clipboard', 'read');
    return await getClipboardApi(plugin).readText();
  },
  async write(text: string): Promise<void> {
    assertCanUseCapability(plugin, 'clipboard', 'write');
    await getClipboardApi(plugin).writeText(text);
  }
});

const createNotificationCapability = (
  plugin: RegisteredPlugin
): PluginNotificationCapability => ({
  async show(options: PluginNotificationOptions): Promise<void> {
    assertCanUseCapability(plugin, 'notification', 'show');
    if (typeof Notification === 'undefined') {
      throw new Error(`插件 ${plugin.id} 当前环境不支持通知能力`);
    }

    const permission = await requestNotificationPermission();
    if (permission !== 'granted') {
      throw new Error(`插件 ${plugin.id} 没有通知授权`);
    }

    new Notification(options.title, {
      body: options.body,
      icon: options.icon
    });
  }
});

const createWindowCapability = (
  host: PluginCapabilityHost
): PluginWindowCapability => ({
  create(registration: RuntimeWindowRegistration): void {
    const { shortcutLabel, closeCommandLabel, ...route } = registration;
    host.registerRoute({
      ...route,
      target: 'window'
    });

    if (shortcutLabel) {
      host.registerWindowShortcut({
        label: shortcutLabel,
        closeCommandLabel
      });
    }
  },
  registerShortcut(shortcut: RuntimeWindowShortcutRegistration): void {
    host.registerWindowShortcut(shortcut);
  }
});

export const createPluginCapabilities = (
  plugin: RegisteredPlugin,
  host: PluginCapabilityHost
): PluginRuntimeCapabilities => ({
  workspace: createWorkspaceCapability(plugin, host),
  storage: createStorageCapability(plugin, host),
  search: createSearchCapability(host),
  ai: {
    registerProvider: (provider) => host.registerAiProvider(provider),
    registerContextProvider: (provider) =>
      host.registerAiContextProvider(provider)
  },
  network: createNetworkCapability(plugin),
  clipboard: createClipboardCapability(plugin),
  notification: createNotificationCapability(plugin),
  window: createWindowCapability(host)
});
