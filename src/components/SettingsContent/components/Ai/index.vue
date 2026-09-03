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
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import {
  AI_PROVIDER_CAPABILITIES,
  aiProviderRegistry,
  ensureBuiltinAiProvidersRegistered,
  getAiProviderPreferences,
  setAiProviderPreference,
  type AiProvider,
  type AiProviderCapability
} from '@/ai';
import { usePluginStore } from '@/store';
import modal from '@/utils/modal';

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

const listProviders = (capability: AiProviderCapability): AiProvider[] =>
  aiProviderRegistry.list({
    capability,
    isPluginEnabled: (pluginId) => pluginStore.isEnabled(pluginId)
  });

const providersByCapability = computed<
  Record<AiProviderCapability, AiProvider[]>
>(() => {
  pluginStore.runtimeRevision;
  return {
    chat: listProviders('chat'),
    vision: listProviders('vision'),
    translation: listProviders('translation')
  };
});

const enabledProviderCount = computed(() => {
  pluginStore.runtimeRevision;
  return new Set(
    aiProviderRegistry
      .list({
        isPluginEnabled: (pluginId) => pluginStore.isEnabled(pluginId)
      })
      .map((provider) => provider.id)
  ).size;
});

const capabilityLabel = (capability: AiProviderCapability): string =>
  t(`settings.ai.capabilities.${capability}`);

const capabilityDescription = (capability: AiProviderCapability): string =>
  t(`settings.ai.capabilityDescriptions.${capability}`);

const providerMeta = (provider: AiProvider): string =>
  provider.pluginId
    ? t('settings.ai.pluginProvider', { plugin: provider.pluginId })
    : t('settings.ai.coreProvider');

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
    ensureBuiltinAiProvidersRegistered();
    applyPreferences(await getAiProviderPreferences());
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

<style scoped lang="scss">
.ai-settings-header {
  @apply flex items-center justify-between gap-3;
}

.ai-settings-content {
  @apply flex flex-col gap-0;
}

.provider-count {
  @apply rounded border border-panel bg-hover px-2 py-1 text-xs text-panel-text-secondary;
}

.ai-provider-row {
  @apply flex items-start justify-between gap-4 border-b border-panel py-3 last:border-b-0;
}

.provider-label {
  @apply min-w-0 flex-1;
}

.provider-title {
  @apply text-sm font-medium text-panel;
}

.provider-desc {
  @apply mt-1 text-xs leading-5 text-panel-text-secondary;
}

.provider-warning {
  @apply mt-2 rounded border border-amber-200 bg-amber-50 px-2 py-1 text-xs leading-5 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200;
}

.provider-control {
  @apply shrink-0;
}

.provider-select {
  @apply w-56;
}

.provider-option {
  @apply flex min-w-0 items-center justify-between gap-3;

  small {
    @apply truncate text-xs text-panel-text-secondary;
  }
}

.provider-empty {
  @apply mt-3 rounded border border-panel bg-hover px-3 py-2 text-xs leading-5 text-panel-text-secondary;
}
</style>
