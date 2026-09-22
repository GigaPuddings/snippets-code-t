import type { RouteRecordRaw } from 'vue-router';
import type { RegisteredPlugin } from './protocol';

// Plugin routes are registered by their runtime entry after installation and
// activation. Keep this list for future built-in, non-plugin config routes only.
export const configPluginRoutes: RouteRecordRaw[] = [];

export const layoutPluginRoutes: RouteRecordRaw[] = [];

export const windowPluginRoutes: RouteRecordRaw[] = [];

const normalizeRouteHint = (value: string): string =>
  value.replace(/[^a-z0-9]/gi, '').toLowerCase();

export const getRuntimeRoutePluginCandidates = (
  path: string,
  plugins: RegisteredPlugin[]
): RegisteredPlugin[] => {
  const routeHints = path
    .split('/')
    .filter(Boolean)
    .map(normalizeRouteHint)
    .filter(Boolean);

  if (routeHints.length === 0) return [];

  return plugins.filter((plugin) => {
    if (routeHints.includes(normalizeRouteHint(String(plugin.id)))) {
      return true;
    }
    return (plugin.routeNames ?? []).some((routeName) =>
      routeHints.includes(normalizeRouteHint(routeName))
    );
  });
};
