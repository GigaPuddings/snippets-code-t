import { localAiConfigRoutes, localAiLayoutRoutes } from './local-ai/routes';
import { localLauncherConfigRoutes } from './local-launcher/routes';
import type { RouteRecordRaw } from 'vue-router';

export const configPluginRoutes: RouteRecordRaw[] = [
  ...localLauncherConfigRoutes,
  ...localAiConfigRoutes
];

export const layoutPluginRoutes: RouteRecordRaw[] = [
  ...localAiLayoutRoutes
];

export const windowPluginRoutes: RouteRecordRaw[] = [];
