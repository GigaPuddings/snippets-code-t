<template>
  <div class="settings-panel local-ai-settings-shell">
    <header class="local-ai-hero panel-card">
      <div>
        <h3 class="panel-title">{{ t('localAi.title') }}</h3>
        <p class="hero-desc">{{ t('localAi.serviceControlDesc') }}</p>
      </div>
      <div class="header-actions">
        <CustomButton size="small" plain @click="openChat">
          {{ t('localAi.openChat') }}
        </CustomButton>
        <CustomButton size="small" :loading="loading" @click="refreshAll">
          {{ t('plugins.refresh') }}
        </CustomButton>
      </div>
    </header>

    <main v-if="config" class="settings-grid">
      <aside class="summary-panel panel-card">
        <div class="status-strip">
          <div class="status-item" :class="{ ready: runtimeStatus?.available }">
            <span class="status-dot"></span>
            <span>{{ runtimeStatusText }}</span>
          </div>
          <div class="status-item" :class="{ ready: modelReady }">
            <span class="status-dot"></span>
            <span>{{ modelStatusText }}</span>
          </div>
          <div class="status-item" :class="{ ready: serviceStatus?.healthy }">
            <span class="status-dot"></span>
            <span>{{ serviceStatusText }}</span>
          </div>
        </div>

        <section class="summary-card">
          <div class="summary-card__title">{{ t('localAi.serviceControl') }}</div>
          <div class="summary-card__desc">{{ t('localAi.serviceControlDesc') }}</div>
          <div class="service-controls">
            <CustomButton type="primary" size="small" :loading="starting" :disabled="serviceStatus?.running" @click="startService">
              {{ t('localAi.startService') }}
            </CustomButton>
            <CustomButton size="small" :loading="restarting" :disabled="!serviceStatus?.running" @click="restartService">
              {{ t('localAi.restartService') }}
            </CustomButton>
            <CustomButton type="danger" size="small" plain :loading="stopping" :disabled="!serviceStatus?.running" @click="stopService">
              {{ t('localAi.stopService') }}
            </CustomButton>
          </div>
          <div class="service-url">{{ serviceStatus?.baseUrl }}</div>
        </section>

        <section class="summary-card">
          <div class="summary-card__title">{{ t('localAi.modelRuntime') }}</div>
          <div class="summary-card__desc">{{ t('localAi.modelRuntimeDesc') }}</div>
          <div class="summary-meta">
            <div><span>{{ t('localAi.runtimeReady') }}</span><b>{{ runtimeStatus?.available ? t('common.yes') : t('common.no') }}</b></div>
            <div><span>{{ t('localAi.modelReady') }}</span><b>{{ modelReady ? t('common.yes') : t('common.no') }}</b></div>
            <div><span>{{ t('localAi.serviceHealthy') }}</span><b>{{ serviceStatus?.healthy ? t('common.yes') : t('common.no') }}</b></div>
          </div>
        </section>
      </aside>

      <section class="form-panel panel-card">
        <div class="settings-section">
          <div class="settings-section__header">
            <div>
              <h4>{{ t('localAi.modelRuntime') }}</h4>
              <p>{{ t('localAi.modelRuntimeDesc') }}</p>
            </div>
          </div>
          <div class="field-stack">
            <label class="field-row">
              <span>{{ t('localAi.modelDir') }}</span>
              <div class="path-control">
                <input v-model="config.modelDir" class="text-input" @change="scanModels">
                <CustomButton size="small" plain @click="chooseModelDir">{{ t('common.browse') }}</CustomButton>
              </div>
            </label>
            <label class="field-row">
              <span>{{ t('localAi.mainModel') }}</span>
              <el-select v-model="selectedModelPath" class="field-select" clearable @change="saveOnly">
                <el-option v-for="path in modelScan?.mainModels ?? []" :key="path" :label="fileName(path)" :value="path" />
              </el-select>
            </label>
            <label class="field-row">
              <span>{{ t('localAi.mmprojModel') }}</span>
              <el-select v-model="selectedMmprojPath" class="field-select" clearable @change="saveOnly">
                <el-option v-for="path in modelScan?.mmprojModels ?? []" :key="path" :label="fileName(path)" :value="path" />
              </el-select>
            </label>
            <label class="field-row">
              <span>{{ t('localAi.runtimePath') }}</span>
              <div class="path-control">
                <input v-model="config.runtimePath" class="text-input" :placeholder="t('localAi.runtimePathPlaceholder')">
                <CustomButton size="small" plain @click="chooseRuntime">{{ t('common.browse') }}</CustomButton>
              </div>
            </label>
          </div>
        </div>

        <div class="settings-section grid-two">
          <div class="settings-section__header">
            <div>
              <h4>{{ t('localAi.inferenceParams') }}</h4>
              <p>{{ t('localAi.inferenceParamsDesc') }}</p>
            </div>
          </div>
          <div class="param-grid">
            <label class="number-field"><span>{{ t('localAi.ctxSize') }}</span><el-input-number v-model="config.ctxSize" :min="512" :max="65536" :step="512" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.gpuLayers') }}</span><el-input-number v-model="config.gpuLayers" :min="0" :max="999" :step="1" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.threads') }}</span><el-input-number v-model="config.threads" :min="1" :max="64" :step="1" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.batchSize') }}</span><el-input-number v-model="config.batchSize" :min="32" :max="4096" :step="32" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.ubatchSize') }}</span><el-input-number v-model="config.ubatchSize" :min="16" :max="2048" :step="16" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.mainGpu') }}</span><el-input-number v-model="config.mainGpu" :min="0" :max="8" :step="1" size="small" /></label>
          </div>
        </div>

        <div class="settings-section grid-two">
          <div class="settings-section__header">
            <div>
              <h4>{{ t('localAi.acceleration') }}</h4>
              <p>{{ t('localAi.accelerationDesc') }}</p>
            </div>
          </div>
          <div class="switch-grid">
            <label><span>{{ t('localAi.flashAttn') }}</span><el-switch v-model="config.flashAttn" /></label>
            <label><span>{{ t('localAi.kvOffload') }}</span><el-switch v-model="config.kvOffload" /></label>
            <label><span>{{ t('localAi.mmap') }}</span><el-switch v-model="config.mmap" /></label>
          </div>
        </div>

        <div class="settings-section grid-two">
          <div class="settings-section__header">
            <div>
              <h4>{{ t('localAi.lifecycle') }}</h4>
              <p>{{ t('localAi.lifecycleDesc') }}</p>
            </div>
          </div>
          <div class="switch-grid switch-grid--two">
            <label><span>{{ t('localAi.autoStart') }}</span><el-switch v-model="config.autoStartOnRequest" /></label>
            <label><span>{{ t('localAi.keepAlive') }}</span><el-switch v-model="config.keepAlive" /></label>
            <label class="number-field"><span>{{ t('localAi.idleTimeout') }}</span><el-input-number v-model="config.idleTimeoutMinutes" :min="0" :max="240" :step="1" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.requestTimeout') }}</span><el-input-number v-model="config.requestTimeoutSecs" :min="30" :max="3600" :step="30" size="small" /></label>
          </div>
        </div>

        <div class="settings-section grid-two">
          <div class="settings-section__header">
            <div>
              <h4>{{ t('localAi.generation') }}</h4>
              <p>{{ t('localAi.generationDesc') }}</p>
            </div>
          </div>
          <div class="param-grid param-grid--three">
            <label class="number-field"><span>{{ t('localAi.temperature') }}</span><el-input-number v-model="config.temperature" :min="0" :max="2" :step="0.1" :precision="1" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.maxTokens') }}</span><el-input-number v-model="config.maxTokens" :min="0" :max="8192" :step="64" size="small" /></label>
            <label class="number-field"><span>{{ t('localAi.port') }}</span><el-input-number v-model="config.port" :min="1024" :max="65535" :step="1" size="small" /></label>
          </div>
        </div>

        <div class="settings-footer">
          <CustomButton type="primary" :loading="saving" @click="saveConfig">{{ t('common.save') }}</CustomButton>
          <span v-if="serviceStatus?.commandLine" class="command-line" :title="serviceStatus.commandLine">{{ serviceStatus.commandLine }}</span>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { open } from '@tauri-apps/plugin-dialog';
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import { getLocalAiConfig, getLocalAiRuntimeStatus, getLocalAiStatus, restartLocalAiService, saveLocalAiConfig, scanLocalAiModels, startLocalAiService, stopLocalAiService, type LocalAiConfig, type LocalAiModelScan, type LocalAiRuntimeStatus, type LocalAiServiceStatus } from '@/api/localAi';

defineOptions({
  name: 'LocalAiSettings'
});

const { t } = useI18n();
const config = ref<LocalAiConfig | null>(null);
const runtimeStatus = ref<LocalAiRuntimeStatus | null>(null);
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const modelScan = ref<LocalAiModelScan | null>(null);
const loading = ref(false);
const saving = ref(false);
const starting = ref(false);
const restarting = ref(false);
const stopping = ref(false);
let statusTimer: ReturnType<typeof setInterval> | null = null;

const modelReady = computed(() => Boolean(modelScan.value?.selectedModelPath));
const selectedModelPath = computed<string>({ get: () => config.value?.modelPath ?? '', set: (value) => { if (!config.value) return; config.value.modelPath = value || undefined; } });
const selectedMmprojPath = computed<string>({ get: () => config.value?.mmprojPath ?? '', set: (value) => { if (!config.value) return; config.value.mmprojPath = value || undefined; } });
const runtimeStatusText = computed(() => (runtimeStatus.value?.available ? t('localAi.runtimeReady') : t('localAi.runtimeMissing')));
const modelStatusText = computed(() => (modelReady.value ? t('localAi.modelReady') : modelScan.value?.message ?? t('localAi.modelMissing')));
const serviceStatusText = computed(() => { if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy'); if (serviceStatus.value?.running) return t('localAi.serviceStarting'); return t('localAi.serviceStopped'); });
const fileName = (path: string): string => path.split(/[\\/]+/).pop() ?? path;

const refreshAll = async () => {
  loading.value = true;
  try {
    config.value = await getLocalAiConfig();
    await Promise.all([refreshRuntime(), scanModels(), refreshStatus()]);
  } catch (error) {
    logger.error('[LocalAI] refresh settings failed', error);
    modal.msg(`${t('localAi.refreshFailed')}: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
};
const refreshRuntime = async () => { runtimeStatus.value = await getLocalAiRuntimeStatus(); };
const refreshStatus = async () => { serviceStatus.value = await getLocalAiStatus(); };
const scanModels = async () => { if (!config.value) return; modelScan.value = await scanLocalAiModels(config.value); if (!config.value.modelPath && modelScan.value.selectedModelPath) config.value.modelPath = modelScan.value.selectedModelPath; if (!config.value.mmprojPath && modelScan.value.selectedMmprojPath) config.value.mmprojPath = modelScan.value.selectedMmprojPath; };
const saveOnly = async () => { if (!config.value) return; try { await saveLocalAiConfig(config.value); } catch (error) { logger.warn('[LocalAI] autosave failed', error); } };
const saveConfig = async () => { if (!config.value) return; saving.value = true; try { config.value = await saveLocalAiConfig(config.value); await Promise.all([refreshRuntime(), scanModels(), refreshStatus()]); modal.msg(t('localAi.configSaved')); } catch (error) { modal.msg(`${t('localAi.configSaveFailed')}: ${error}`, 'error'); } finally { saving.value = false; } };
const chooseModelDir = async () => { const selected = await open({ directory: true, multiple: false, title: t('localAi.chooseModelDir') }); if (!selected || Array.isArray(selected) || !config.value) return; config.value.modelDir = selected; config.value.modelPath = undefined; config.value.mmprojPath = undefined; await scanModels(); };
const chooseRuntime = async () => { const selected = await open({ multiple: false, title: t('localAi.chooseRuntime'), filters: [{ name: 'llama-server', extensions: ['exe'] }] }); if (!selected || Array.isArray(selected) || !config.value) return; config.value.runtimePath = selected; await saveOnly(); await refreshRuntime(); };
const startService = async () => { if (!config.value) return; starting.value = true; try { await saveLocalAiConfig(config.value); serviceStatus.value = await startLocalAiService(config.value); modal.msg(t('localAi.serviceStarted')); } catch (error) { modal.msg(`${t('localAi.serviceStartFailed')}: ${error}`, 'error'); } finally { starting.value = false; } };
const restartService = async () => { restarting.value = true; try { await saveConfig(); serviceStatus.value = await restartLocalAiService(); modal.msg(t('localAi.serviceRestarted')); } catch (error) { modal.msg(`${t('localAi.serviceRestartFailed')}: ${error}`, 'error'); } finally { restarting.value = false; } };
const stopService = async () => { stopping.value = true; try { await stopLocalAiService(); await refreshStatus(); modal.msg(t('localAi.serviceStoppedMsg')); } catch (error) { modal.msg(`${t('localAi.serviceStopFailed')}: ${error}`, 'error'); } finally { stopping.value = false; } };
const openChat = () => { window.location.hash = '#/local-ai/chat'; };

onMounted(async () => { await refreshAll(); statusTimer = setInterval(() => { refreshStatus().catch((error) => logger.warn('[LocalAI] status refresh failed', error)); }, 5000); });
onUnmounted(() => { if (statusTimer) clearInterval(statusTimer); });
</script>

<style scoped lang="scss">
.local-ai-settings-shell {
  @apply flex h-full min-h-0 w-full max-w-none flex-col gap-3 bg-content p-3;
}

.panel-card {
  @apply rounded-lg border border-panel bg-panel shadow-sm;
}

.local-ai-hero {
  @apply flex items-center justify-between gap-4 px-4 py-3;
}

.hero-desc {
  @apply mt-1 text-sm text-panel-text-secondary;
}

.header-actions {
  @apply flex items-center gap-2;
}

.settings-grid {
  @apply grid min-h-0 flex-1 gap-3 overflow-hidden;
  grid-template-columns: 320px minmax(0, 1fr);
}

.summary-panel,
.form-panel {
  @apply min-h-0 overflow-y-auto;
}

.summary-panel {
  @apply p-4;
}

.status-strip {
  @apply grid gap-2;
}

.status-item {
  @apply flex items-center gap-2 rounded-md border border-panel bg-hover px-3 py-2 text-xs text-panel-text-secondary;

  &.ready {
    @apply text-green-600 dark:text-green-300;
  }
}

.status-dot {
  @apply h-2 w-2 rounded-full bg-orange-400;

  .ready & {
    @apply bg-green-500;
  }
}

.summary-card {
  @apply mt-4 rounded-md border border-panel bg-hover p-3;
}

.summary-card__title {
  @apply text-sm font-medium text-panel;
}

.summary-card__desc {
  @apply mt-1 text-xs text-panel-text-secondary;
}

.summary-meta {
  @apply mt-3 space-y-2 text-xs;

  div {
    @apply flex items-center justify-between gap-2 text-panel-text-secondary;
  }

  b {
    @apply text-panel;
  }
}

.form-panel {
  @apply p-4;
}

.settings-section + .settings-section {
  @apply mt-4;
}

.settings-section__header h4 {
  @apply text-sm font-semibold text-panel;
}

.settings-section__header p {
  @apply mt-1 text-xs text-panel-text-secondary;
}

.field-stack,
.param-grid,
.switch-grid {
  @apply mt-3 grid gap-3;
}

.field-row,
.number-field,
.switch-grid label {
  @apply flex items-center gap-3 text-sm text-panel;
}

.field-row span,
.number-field span,
.switch-grid span {
  @apply min-w-14 truncate text-panel-text-secondary;
}

.path-control {
  @apply flex min-w-0 flex-1 items-center gap-2;
}

.text-input {
  @apply h-8 min-w-0 flex-1 rounded border border-panel bg-hover px-2 text-xs text-panel outline-none;
}

.field-select {
  @apply w-full mr-[58px];
}

.param-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.param-grid--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.switch-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.switch-grid--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.service-controls {
  @apply mt-3 flex flex-wrap gap-2;
}

.service-url {
  @apply mt-2 truncate text-xs text-panel-text-secondary;
}

.settings-footer {
  @apply sticky bottom-0 mt-4 flex items-center justify-end gap-3 border-t border-panel bg-panel pt-3;
}

.command-line {
  @apply min-w-0 flex-1 truncate text-xs text-panel-text-secondary;
}

@media (max-width: 1100px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .param-grid,
  .param-grid--three,
  .switch-grid,
  .switch-grid--two {
    grid-template-columns: 1fr;
  }

  .field-row {
    @apply flex-col items-stretch;
  }
}
</style>
