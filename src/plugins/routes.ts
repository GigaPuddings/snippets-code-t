import type { RouteRecordRaw } from 'vue-router';
import { localLauncherConfigRoutes } from './local-launcher/routes';
import { screenshotWindowRoutes } from './screenshot/routes';
import { searchEnginesConfigRoutes } from './search-engines/routes';
import { systemThemeRoutes } from './system-theme/routes';
import { todoConfigRoutes } from './todo/routes';
import { translationRoutes } from './translation/routes';

export const configPluginRoutes: RouteRecordRaw[] = [
  ...localLauncherConfigRoutes,
  ...searchEnginesConfigRoutes,
  ...todoConfigRoutes
];

export const layoutPluginRoutes: RouteRecordRaw[] = [
  ...translationRoutes,
  ...systemThemeRoutes
];

export const windowPluginRoutes: RouteRecordRaw[] = [
  ...screenshotWindowRoutes
];
