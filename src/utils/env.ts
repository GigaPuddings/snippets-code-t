import { type, arch as archFn, version } from '@tauri-apps/plugin-os';
import { getName, getVersion } from '@tauri-apps/api/app';
import { Window } from '@tauri-apps/api/window';

export let osType = '';
export let arch = '';
export let osVersion = '';
export let appVersion = '';
export let appName = '';

export async function initEnv() {
  osType = await type();
  arch = await archFn();
  osVersion = await version();
  appVersion = await getVersion();
  appName = await getName();
}

let appWindow: Window | null = null;

export const getAppWindow = (label: 'search' | 'config') => {
  if (!appWindow) {
    appWindow = new Window(label);
  }
  return appWindow;
};
