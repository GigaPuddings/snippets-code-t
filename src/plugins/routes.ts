import { localAiConfigRoutes } from './local-ai/routes';
import { localLauncherConfigRoutes } from './local-launcher/routes';
import type { RouteRecordRaw } from 'vue-router';

export const configPluginRoutes: RouteRecordRaw[] = [
  ...localLauncherConfigRoutes,
  ...localAiConfigRoutes
];

export const layoutPluginRoutes: RouteRecordRaw[] = [];

export const windowPluginRoutes: RouteRecordRaw[] = [];
