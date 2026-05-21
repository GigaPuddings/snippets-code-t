import type { RegisteredPlugin } from './protocol';

const getPluginPermissions = (plugin: RegisteredPlugin): string[] =>
  plugin.manifest.permissions ?? [];

export const canInvokeCommand = (
  plugin: RegisteredPlugin,
  command: string
): boolean => {
  const permissions = getPluginPermissions(plugin);
  return (
    permissions.includes('command:*') ||
    permissions.includes(`command:${command}`)
  );
};

export const canInvokeBackendCommand = (
  plugin: RegisteredPlugin,
  command: string
): boolean => {
  const permissions = getPluginPermissions(plugin);
  return (
    permissions.includes('backend:*') ||
    permissions.includes(`backend:${command}`)
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
