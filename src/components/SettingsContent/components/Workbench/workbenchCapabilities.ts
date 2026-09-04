import type {
  CapabilityItem,
  WorkbenchStatus,
  WorkbenchTranslator
} from './workbenchViewModel';

interface CapabilityConfig {
  id: string;
  labelKey: string;
  pluginId: string;
  resourceStatusPluginId?: string;
}

export interface WorkbenchCapabilityRuntime {
  isInstalled: (pluginId: string) => boolean;
  isEnabled: (pluginId: string) => boolean;
  resourceStatusByPluginId: Record<string, { available?: boolean } | undefined>;
}

const capabilityConfigs: CapabilityConfig[] = [
  { id: 'screenshot', labelKey: 'screenshot', pluginId: 'screenshot' },
  {
    id: 'ocr',
    labelKey: 'ocr',
    pluginId: 'screenshot',
    resourceStatusPluginId: 'screenshot'
  },
  {
    id: 'recorder',
    labelKey: 'recorder',
    pluginId: 'screen-recorder',
    resourceStatusPluginId: 'screen-recorder'
  },
  { id: 'translation', labelKey: 'translation', pluginId: 'translation' },
  { id: 'todo', labelKey: 'todo', pluginId: 'todo' },
  {
    id: 'wallpaper',
    labelKey: 'wallpaper',
    pluginId: 'wallpaper-switcher'
  },
  { id: 'launcher', labelKey: 'launcher', pluginId: 'local-launcher' },
  {
    id: 'localAi',
    labelKey: 'localAi',
    pluginId: 'local-ai',
    resourceStatusPluginId: 'local-ai'
  },
  { id: 'gitSync', labelKey: 'gitSync', pluginId: 'git-sync' }
];

const capabilityStatus = (
  installed: boolean,
  enabled: boolean,
  resourceMissing: boolean
): WorkbenchStatus => {
  if (!installed || !enabled) return 'inactive';
  return resourceMissing ? 'attention' : 'ready';
};

const capabilityMeta = (
  t: WorkbenchTranslator,
  installed: boolean,
  enabled: boolean,
  resourceMissing: boolean
): string => {
  if (!installed) return t('settings.workbench.capabilityMeta.notInstalled');
  if (!enabled) return t('settings.workbench.capabilityMeta.disabled');
  if (resourceMissing) {
    return t('settings.workbench.capabilityMeta.resourceMissing');
  }
  return t('settings.workbench.capabilityMeta.ready');
};

const buildCapabilityItem = (
  config: CapabilityConfig,
  runtime: WorkbenchCapabilityRuntime,
  t: WorkbenchTranslator
): CapabilityItem => {
  const installed = runtime.isInstalled(config.pluginId);
  const enabled = runtime.isEnabled(config.pluginId);
  const resourceStatus = config.resourceStatusPluginId
    ? runtime.resourceStatusByPluginId[config.resourceStatusPluginId]
    : undefined;
  const resourceMissing = resourceStatus?.available === false;
  const status = capabilityStatus(installed, enabled, resourceMissing);

  return {
    id: config.id,
    label: t(`settings.workbench.capabilities.${config.labelKey}`),
    status,
    meta: capabilityMeta(t, installed, enabled, resourceMissing)
  };
};

export const buildCapabilityItems = (
  runtime: WorkbenchCapabilityRuntime,
  t: WorkbenchTranslator
): CapabilityItem[] =>
  capabilityConfigs.map((config) => buildCapabilityItem(config, runtime, t));
