import { ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  getAiProviderStatusSnapshots,
  startAiProvider,
  type AiProviderStatus,
  type AiProviderStatusSnapshot
} from '@/ai';
import { usePluginStore } from '@/store';
import modal from '@/utils/modal';

type Translate = (key: string, named?: Record<string, unknown>) => string;

interface AiProviderStatusListController {
  statusLoading: Ref<boolean>;
  startingProviderId: Ref<string | null>;
  providerSnapshots: Ref<AiProviderStatusSnapshot[]>;
  providerMeta: (provider: AiProviderStatusSnapshot) => string;
  statusLabel: (status: AiProviderStatus) => string;
  statusChipClass: (status: AiProviderStatus) => Record<string, boolean>;
  refreshStatuses: () => Promise<void>;
  handleStartProvider: (providerId: string) => Promise<void>;
}

const providerMeta = (
  provider: AiProviderStatusSnapshot,
  t: Translate
): string =>
  provider.pluginId
    ? t('settings.ai.pluginProvider', { plugin: provider.pluginId })
    : t('settings.ai.coreProvider');

const statusLabel = (status: AiProviderStatus, t: Translate): string => {
  if (!status.available) return t('settings.ai.statusUnavailable');
  if (status.running) return t('settings.ai.statusRunning');
  if (status.healthy) return t('settings.ai.statusHealthy');
  return t('settings.ai.statusAvailable');
};

const statusChipClass = (
  status: AiProviderStatus
): Record<string, boolean> => ({
  'provider-status-chip--success': status.available && status.healthy !== false,
  'provider-status-chip--warning': status.available && status.healthy === false,
  'provider-status-chip--danger': !status.available
});

export function useAiProviderStatusList(): AiProviderStatusListController {
  const { t } = useI18n();
  const pluginStore = usePluginStore();
  const statusLoading = ref(false);
  const startingProviderId = ref<string | null>(null);
  const providerSnapshots = ref<AiProviderStatusSnapshot[]>([]);

  const updateProviderStatus = (
    providerId: string,
    status: AiProviderStatus
  ): void => {
    providerSnapshots.value = providerSnapshots.value.map((provider) =>
      provider.id === providerId ? { ...provider, status } : provider
    );
  };

  const refreshStatuses = async (): Promise<void> => {
    statusLoading.value = true;
    try {
      providerSnapshots.value = await getAiProviderStatusSnapshots({
        isPluginEnabled: (pluginId) => pluginStore.isEnabled(pluginId)
      });
    } catch (error) {
      modal.msg(`${t('settings.ai.statusLoadFailed')}: ${error}`, 'error');
    } finally {
      statusLoading.value = false;
    }
  };

  const handleStartProvider = async (providerId: string): Promise<void> => {
    startingProviderId.value = providerId;
    try {
      updateProviderStatus(providerId, await startAiProvider(providerId));
      modal.msg(t('settings.ai.started'));
    } catch (error) {
      modal.msg(`${t('settings.ai.startFailed')}: ${error}`, 'error');
      void refreshStatuses();
    } finally {
      startingProviderId.value = null;
    }
  };

  return {
    statusLoading,
    startingProviderId,
    providerSnapshots,
    providerMeta: (provider) => providerMeta(provider, t),
    statusLabel: (status) => statusLabel(status, t),
    statusChipClass,
    refreshStatuses,
    handleStartProvider
  };
}
