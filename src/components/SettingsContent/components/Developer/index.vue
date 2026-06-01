<template>
  <div class="settings-panel">
    <div class="panel-header">
      <h3 class="panel-title">{{ t('settings.developer.title') }}</h3>
    </div>

    <main class="panel-content developer-content">
      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('settings.developer.mode') }}</div>
          <div class="summarize-label-desc">{{ t('settings.developer.modeDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <CustomSwitch
            v-model="developerMode"
            :active-text="t('common.on')"
            :inactive-text="t('common.off')"
            @change="handleDeveloperModeChange"
          />
        </div>
      </section>

      <div class="developer-actions">
        <CustomButton type="primary" size="small" :loading="loading" @click="refresh">
          {{ t('settings.developer.refresh') }}
        </CustomButton>
        <CustomButton size="small" @click="copyReport">
          {{ t('settings.developer.copy') }}
        </CustomButton>
        <CustomButton size="small" @click="openLogDir">
          {{ t('settings.developer.openLogs') }}
        </CustomButton>
        <CustomButton size="small" @click="clearFrontendLogs">
          {{ t('settings.developer.clearFrontend') }}
        </CustomButton>
      </div>

      <p class="developer-hint">{{ t('settings.developer.hint') }}</p>

      <textarea
        class="diagnostic-report"
        :value="reportText"
        readonly
        spellcheck="false"
      ></textarea>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton, CustomSwitch } from '@/components/UI';
import {
  getDeveloperDiagnostics,
  openDeveloperLogDir,
  type DeveloperDiagnostics
} from '@/api/developerDiagnostics';
import {
  clearFrontendDiagnostics,
  formatFrontendDiagnostics,
  getFrontendDiagnostics,
  isDeveloperModeEnabled,
  setDeveloperModeEnabled,
  type FrontendDiagnosticEntry
} from '@/utils/developer-diagnostics';
import modal from '@/utils/modal';

defineOptions({
  name: 'DeveloperSettings'
});

const { t } = useI18n();
const developerMode = ref(isDeveloperModeEnabled());
const diagnostics = ref<DeveloperDiagnostics | null>(null);
const frontendLogs = ref<FrontendDiagnosticEntry[]>([]);
const loading = ref(false);

const reportText = computed(() => {
  const frontend = formatFrontendDiagnostics(frontendLogs.value) || '<empty>';
  if (!diagnostics.value) {
    return `===== Frontend diagnostics =====\n${frontend}`;
  }

  const { recentBackendLogs, ...summary } = diagnostics.value;
  return [
    '===== Environment =====',
    JSON.stringify(summary, null, 2),
    '',
    '===== Frontend diagnostics =====',
    frontend,
    '',
    '===== Backend logs =====',
    recentBackendLogs || '<empty>'
  ].join('\n');
});

const refresh = async () => {
  loading.value = true;
  try {
    frontendLogs.value = getFrontendDiagnostics();
    diagnostics.value = await getDeveloperDiagnostics();
  } catch (error) {
    modal.msg(`${t('settings.developer.refreshFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
};

const handleDeveloperModeChange = (enabled: boolean) => {
  setDeveloperModeEnabled(enabled);
  modal.msg(
    enabled
      ? t('settings.developer.enabled')
      : t('settings.developer.disabled')
  );
  void refresh();
};

const copyReport = async () => {
  try {
    await navigator.clipboard.writeText(reportText.value);
    modal.msg(t('settings.developer.copied'));
  } catch (error) {
    modal.msg(`${t('settings.developer.copyFailed')}: ${error}`, 'error');
  }
};

const openLogDir = async () => {
  try {
    await openDeveloperLogDir();
  } catch (error) {
    modal.msg(`${t('settings.developer.openLogsFailed')}: ${error}`, 'error');
  }
};

const clearFrontendLogs = () => {
  clearFrontendDiagnostics();
  frontendLogs.value = [];
  modal.msg(t('settings.developer.frontendCleared'));
};

onMounted(() => {
  void refresh();
});
</script>

<style scoped lang="scss">
.developer-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.developer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.developer-hint {
  margin: 0;
  color: var(--panel-text-secondary);
  font-size: 12px;
  line-height: 1.6;
}

.diagnostic-report {
  width: 100%;
  min-height: 0;
  flex: 1 1 auto;
  padding: 10px;
  color: var(--panel-text);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: 6px;
  box-sizing: border-box;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.55;
  resize: none;
}
</style>
