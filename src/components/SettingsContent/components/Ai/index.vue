<template>
  <div class="settings-panel">
    <div class="panel-header ai-settings-header">
      <h3 class="panel-title">{{ t('settings.ai.title') }}</h3>
      <CustomButton size="small" plain :loading="loading" @click="refresh">
        {{ t('settings.ai.refresh') }}
      </CustomButton>
    </div>

    <main class="panel-content ai-settings-content">
      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">
            {{ t('settings.ai.defaultProviders') }}
          </div>
          <div class="summarize-label-desc">
            {{ t('settings.ai.defaultProvidersDesc') }}
          </div>
        </div>
        <div class="provider-count">
          {{
            t('settings.ai.providerCount', {
              count: enabledProviderCount
            })
          }}
        </div>
      </section>

      <section
        v-for="capability in capabilities"
        :key="capability"
        class="ai-provider-row"
      >
        <div class="provider-label">
          <div class="provider-title">{{ capabilityLabel(capability) }}</div>
          <div class="provider-desc">
            {{ capabilityDescription(capability) }}
          </div>
          <div
            v-if="preferenceUnavailable(capability)"
            class="provider-warning"
          >
            {{
              t('settings.ai.preferenceUnavailable', {
                provider: selectedProviderIds[capability]
              })
            }}
          </div>
        </div>

        <div class="provider-control">
          <el-select
            v-model="selectedProviderIds[capability]"
            class="provider-select"
            :disabled="loading"
            :loading="savingCapability === capability"
            @change="
              (value) => handlePreferenceChange(capability, String(value))
            "
          >
            <el-option :label="t('settings.ai.automatic')" value="" />
            <el-option
              v-for="provider in providersByCapability[capability]"
              :key="provider.id"
              :label="provider.label"
              :value="provider.id"
            >
              <div class="provider-option">
                <span>{{ provider.label }}</span>
                <small>{{ providerMeta(provider) }}</small>
              </div>
            </el-option>
          </el-select>
        </div>
      </section>

      <section v-if="!enabledProviderCount" class="provider-empty">
        {{ t('settings.ai.noProviders') }}
      </section>

      <section v-else class="provider-status-section">
        <div class="provider-status-header">
          <div>
            <div class="provider-status-title">
              {{ t('settings.ai.runtimeStatus') }}
            </div>
            <div class="provider-status-desc">
              {{ t('settings.ai.runtimeStatusDesc') }}
            </div>
          </div>
          <CustomButton
            size="small"
            plain
            :loading="statusLoading"
            @click="refreshStatuses"
          >
            {{ t('settings.ai.refreshStatus') }}
          </CustomButton>
        </div>

        <div class="provider-status-list">
          <article
            v-for="provider in providerSnapshots"
            :key="provider.id"
            class="provider-status-card"
          >
            <div class="provider-status-main">
              <div class="provider-status-name-row">
                <span class="provider-status-name">{{ provider.label }}</span>
                <span class="provider-status-id">{{ provider.id }}</span>
                <span
                  class="provider-status-chip"
                  :class="statusChipClass(provider.status)"
                >
                  {{ statusLabel(provider.status) }}
                </span>
              </div>
              <div class="provider-status-meta">
                {{ providerMeta(provider) }}
                <span v-if="provider.status.modelName">
                  {{
                    t('settings.ai.modelName', {
                      model: provider.status.modelName
                    })
                  }}
                </span>
                <span v-if="provider.status.baseUrl">
                  {{ provider.status.baseUrl }}
                </span>
              </div>
              <div class="provider-capabilities">
                <span
                  v-for="capability in provider.capabilities"
                  :key="capability"
                  class="provider-capability-chip"
                >
                  {{ capabilityLabel(capability) }}
                </span>
              </div>
              <div
                v-if="provider.status.lastError"
                class="provider-status-error"
              >
                {{ provider.status.lastError }}
              </div>
            </div>

            <CustomButton
              v-if="provider.canStart"
              size="small"
              plain
              :loading="startingProviderId === provider.id"
              @click="handleStartProvider(provider.id)"
            >
              {{ t('settings.ai.startProvider') }}
            </CustomButton>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import {
  AI_PROVIDER_CAPABILITIES,
  getAiProviderPreferences,
  setAiProviderPreference,
  type AiProviderCapability,
  type AiProviderStatusSnapshot
} from '@/ai';
import { usePluginStore } from '@/store';
import modal from '@/utils/modal';
import { useAiProviderStatusList } from './useAiProviderStatusList';

defineOptions({
  name: 'AiSettings'
});

const { t } = useI18n();
const pluginStore = usePluginStore();

const capabilities = AI_PROVIDER_CAPABILITIES;
const loading = ref(false);
const savingCapability = ref<AiProviderCapability | null>(null);
const selectedProviderIds = reactive<Record<AiProviderCapability, string>>({
  chat: '',
  vision: '',
  translation: ''
});
const {
  statusLoading,
  startingProviderId,
  providerSnapshots,
  providerMeta,
  statusLabel,
  statusChipClass,
  refreshStatuses,
  handleStartProvider
} = useAiProviderStatusList();

const providersByCapability = computed<
  Record<AiProviderCapability, AiProviderStatusSnapshot[]>
>(() => {
  pluginStore.runtimeRevision;
  return {
    chat: providerSnapshots.value.filter((provider) =>
      provider.capabilities.includes('chat')
    ),
    vision: providerSnapshots.value.filter((provider) =>
      provider.capabilities.includes('vision')
    ),
    translation: providerSnapshots.value.filter((provider) =>
      provider.capabilities.includes('translation')
    )
  };
});

const enabledProviderCount = computed(() => {
  pluginStore.runtimeRevision;
  return providerSnapshots.value.length;
});

const capabilityLabel = (capability: AiProviderCapability): string =>
  t(`settings.ai.capabilities.${capability}`);

const capabilityDescription = (capability: AiProviderCapability): string =>
  t(`settings.ai.capabilityDescriptions.${capability}`);

const preferenceUnavailable = (capability: AiProviderCapability): boolean => {
  const providerId = selectedProviderIds[capability];
  if (!providerId) return false;
  return !providersByCapability.value[capability].some(
    (provider) => provider.id === providerId
  );
};

const applyPreferences = (
  preferences: Partial<Record<AiProviderCapability, string>>
): void => {
  for (const capability of capabilities) {
    selectedProviderIds[capability] = preferences[capability] ?? '';
  }
};

const refresh = async (): Promise<void> => {
  loading.value = true;
  try {
    await pluginStore.initialize();
    await pluginStore.loadEnabledPluginEntries();
    applyPreferences(await getAiProviderPreferences());
    await refreshStatuses();
  } catch (error) {
    modal.msg(`${t('settings.ai.loadFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
};

const handlePreferenceChange = async (
  capability: AiProviderCapability,
  providerId: string
): Promise<void> => {
  savingCapability.value = capability;
  try {
    const preferences = await setAiProviderPreference(
      capability,
      providerId || null
    );
    applyPreferences(preferences);
    modal.msg(t('settings.ai.saved'));
  } catch (error) {
    modal.msg(`${t('settings.ai.saveFailed')}: ${error}`, 'error');
    void refresh();
  } finally {
    savingCapability.value = null;
  }
};

onMounted(() => {
  void refresh();
});
</script>

<style scoped lang="scss" src="./ai-settings.scss"></style>
