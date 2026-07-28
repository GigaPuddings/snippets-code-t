import type { RouteRecordRaw } from 'vue-router';

// Plugin routes are registered by their runtime entry after installation and
// activation. Keep this list for future built-in, non-plugin config routes only.
export const configPluginRoutes: RouteRecordRaw[] = [];

export const layoutPluginRoutes: RouteRecordRaw[] = [];

export const windowPluginRoutes: RouteRecordRaw[] = [];
