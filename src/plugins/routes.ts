import { localLauncherConfigRoutes } from './local-launcher/routes';
import type { RouteRecordRaw } from 'vue-router';

export const configPluginRoutes: RouteRecordRaw[] = [
  ...localLauncherConfigRoutes
];

export const layoutPluginRoutes: RouteRecordRaw[] = [];

export const windowPluginRoutes: RouteRecordRaw[] = [];
