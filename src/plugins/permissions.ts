import type { RegisteredPlugin } from './protocol';

export type PluginCapabilityId =
  | 'workspace'
  | 'storage'
  | 'search'
  | 'network'
  | 'clipboard'
  | 'notification'
  | 'window';

const getPluginPermissions = (plugin: RegisteredPlugin): string[] =>
  plugin.manifest.permissions ?? [];

const hasPermission = (plugin: RegisteredPlugin, permission: string): boolean =>
  getPluginPermissions(plugin).includes(permission);

export const canInvokeCommand = (
  plugin: RegisteredPlugin,
  command: string
): boolean => {
  return (
    hasPermission(plugin, 'command:*') ||
    hasPermission(plugin, `command:${command}`)
  );
};

export const canInvokeBackendCommand = (
  plugin: RegisteredPlugin,
  command: string
): boolean => {
  return (
    hasPermission(plugin, 'backend:*') ||
    hasPermission(plugin, `backend:${command}`)
  );
};

export const canUseCapability = (
  plugin: RegisteredPlugin,
  capability: PluginCapabilityId,
  action?: string
): boolean =>
  hasPermission(plugin, 'capability:*') ||
  hasPermission(plugin, `capability:${capability}`) ||
  hasPermission(plugin, capability) ||
  hasPermission(plugin, `${capability}:*`) ||
  (action ? hasPermission(plugin, `${capability}:${action}`) : false);

const wildcardToRegExp = (value: string): RegExp => {
  const escaped = value.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^${escaped.replace(/\*/g, '.*')}$`);
};

const networkPermissionMatches = (
  permission: string,
  requestedUrl: URL
): boolean => {
  if (!permission.startsWith('network:')) return false;

  const allowed = permission.slice('network:'.length).trim();
  if (!allowed || allowed === '*') return true;
  if (allowed.includes('*')) {
    return wildcardToRegExp(allowed).test(requestedUrl.href);
  }

  try {
    const allowedUrl = new URL(allowed);
    if (
      allowedUrl.origin === requestedUrl.origin &&
      allowedUrl.pathname === '/' &&
      !allowedUrl.search &&
      !allowedUrl.hash
    ) {
      return true;
    }

    return requestedUrl.href.startsWith(allowedUrl.href);
  } catch {
    return false;
  }
};

export const canFetchUrl = (plugin: RegisteredPlugin, url: string): boolean => {
  if (canUseCapability(plugin, 'network', 'fetch')) return true;

  let requestedUrl: URL;
  try {
    requestedUrl = new URL(url);
  } catch {
    return false;
  }

  return getPluginPermissions(plugin).some((permission) =>
    networkPermissionMatches(permission, requestedUrl)
  );
};

export const assertCanInvokeCommand = (
  plugin: RegisteredPlugin,
  command: string
): void => {
  if (!canInvokeCommand(plugin, command)) {
    throw new Error(`插件 ${plugin.id} 没有调用命令 ${command} 的权限`);
  }
};

export const assertCanInvokeBackendCommand = (
  plugin: RegisteredPlugin,
  command: string
): void => {
  if (!canInvokeBackendCommand(plugin, command)) {
    throw new Error(`插件 ${plugin.id} 没有调用后端命令 ${command} 的权限`);
  }
};

export const assertCanUseCapability = (
  plugin: RegisteredPlugin,
  capability: PluginCapabilityId,
  action?: string
): void => {
  if (!canUseCapability(plugin, capability, action)) {
    const capabilityName = action ? `${capability}:${action}` : capability;
    throw new Error(`插件 ${plugin.id} 没有使用 ${capabilityName} 能力的权限`);
  }
};

export const assertCanFetchUrl = (
  plugin: RegisteredPlugin,
  url: string
): void => {
  if (!canFetchUrl(plugin, url)) {
    throw new Error(`插件 ${plugin.id} 没有访问网络地址 ${url} 的权限`);
  }
};
