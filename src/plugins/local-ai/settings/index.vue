<template>
  <div class="settings-panel local-ai-settings">
    <div class="panel-header local-ai-header">
      <h3 class="panel-title">{{ t('localAi.title') }}</h3>
      <div class="header-actions">
        <CustomButton size="small" plain @click="openChat">
          {{ t('localAi.openChat') }}
        </CustomButton>
        <CustomButton size="small" :loading="loading" @click="refreshAll">
          {{ t('plugins.refresh') }}
        </CustomButton>
      </div>
    </div>

    <main class="panel-content" v-if="config">
      <section class="status-strip">
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
      </section>

      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('localAi.modelRuntime') }}</div>
          <div class="summarize-label-desc">{{ t('localAi.modelRuntimeDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper local-ai-fields">
          <label class="field-row">
            <span>{{ t('localAi.modelDir') }}</span>
            <div class="path-control">
              <input v-model="config.modelDir" class="text-input" @change="scanModels">
              <CustomButton size="small" plain @click="chooseModelDir">
                {{ t('common.browse') }}
              </CustomButton>
            </div>
          </label>

          <label class="field-row">
            <span>{{ t('localAi.mainModel') }}</span>
            <el-select v-model="selectedModelPath" class="field-select" clearable @change="saveOnly">
              <el-option
                v-for="path in modelScan?.mainModels ?? []"
                :key="path"
                :label="fileName(path)"
                :value="path"
              />
            </el-select>
          </label>

          <label class="field-row">
            <span>{{ t('localAi.mmprojModel') }}</span>
            <el-select v-model="selectedMmprojPath" class="field-select" clearable @change="saveOnly">
              <el-option
                v-for="path in modelScan?.mmprojModels ?? []"
                :key="path"
                :label="fileName(path)"
                :value="path"
              />
            </el-select>
          </label>

          <label class="field-row">
            <span>{{ t('localAi.runtimePath') }}</span>
            <div class="path-control">
              <input v-model="config.runtimePath" class="text-input" :placeholder="t('localAi.runtimePathPlaceholder')">
              <CustomButton size="small" plain @click="chooseRuntime">
                {{ t('common.browse') }}
              </CustomButton>
            </div>
          </label>
        </div>
      </section>

      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('localAi.serviceControl') }}</div>
          <div class="summarize-label-desc">{{ t('localAi.serviceControlDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper service-controls">
          <CustomButton
            type="primary"
            size="small"
            :loading="starting"
            :disabled="serviceStatus?.running"
            @click="startService"
          >
            {{ t('localAi.startService') }}
          </CustomButton>
          <CustomButton
            size="small"
            :loading="restarting"
            :disabled="!serviceStatus?.running"
            @click="restartService"
          >
            {{ t('localAi.restartService') }}
          </CustomButton>
          <CustomButton
            type="danger"
            size="small"
            plain
            :loading="stopping"
            :disabled="!serviceStatus?.running"
            @click="stopService"
          >
            {{ t('localAi.stopService') }}
          </CustomButton>
          <span class="service-url">{{ serviceStatus?.baseUrl }}</span>
        </div>
      </section>

      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('localAi.inferenceParams') }}</div>
          <div class="summarize-label-desc">{{ t('localAi.inferenceParamsDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper param-grid">
          <label class="number-field">
            <span>{{ t('localAi.ctxSize') }}</span>
            <el-input-number v-model="config.ctxSize" :min="512" :max="65536" :step="512" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.gpuLayers') }}</span>
            <el-input-number v-model="config.gpuLayers" :min="0" :max="999" :step="1" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.threads') }}</span>
            <el-input-number v-model="config.threads" :min="1" :max="64" :step="1" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.batchSize') }}</span>
            <el-input-number v-model="config.batchSize" :min="32" :max="4096" :step="32" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.ubatchSize') }}</span>
            <el-input-number v-model="config.ubatchSize" :min="16" :max="2048" :step="16" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.mainGpu') }}</span>
            <el-input-number v-model="config.mainGpu" :min="0" :max="8" :step="1" size="small" />
          </label>
        </div>
      </section>

      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('localAi.acceleration') }}</div>
          <div class="summarize-label-desc">{{ t('localAi.accelerationDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper switch-list">
          <label>
            <span>{{ t('localAi.flashAttn') }}</span>
            <el-switch v-model="config.flashAttn" />
          </label>
          <label>
            <span>{{ t('localAi.kvOffload') }}</span>
            <el-switch v-model="config.kvOffload" />
          </label>
          <label>
            <span>{{ t('localAi.mmap') }}</span>
            <el-switch v-model="config.mmap" />
          </label>
        </div>
      </section>

      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('localAi.lifecycle') }}</div>
          <div class="summarize-label-desc">{{ t('localAi.lifecycleDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper lifecycle-grid">
          <label>
            <span>{{ t('localAi.autoStart') }}</span>
            <el-switch v-model="config.autoStartOnRequest" />
          </label>
          <label>
            <span>{{ t('localAi.keepAlive') }}</span>
            <el-switch v-model="config.keepAlive" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.idleTimeout') }}</span>
            <el-input-number v-model="config.idleTimeoutMinutes" :min="0" :max="240" :step="1" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.requestTimeout') }}</span>
            <el-input-number v-model="config.requestTimeoutSecs" :min="30" :max="3600" :step="30" size="small" />
          </label>
        </div>
      </section>

      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ t('localAi.generation') }}</div>
          <div class="summarize-label-desc">{{ t('localAi.generationDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper param-grid">
          <label class="number-field">
            <span>{{ t('localAi.temperature') }}</span>
            <el-input-number v-model="config.temperature" :min="0" :max="2" :step="0.1" :precision="1" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.maxTokens') }}</span>
            <el-input-number v-model="config.maxTokens" :min="64" :max="8192" :step="64" size="small" />
          </label>
          <label class="number-field">
            <span>{{ t('localAi.port') }}</span>
            <el-input-number v-model="config.port" :min="1024" :max="65535" :step="1" size="small" />
          </label>
        </div>
      </section>

      <div class="settings-footer">
        <CustomButton type="primary" :loading="saving" @click="saveConfig">
          {{ t('common.save') }}
        </CustomButton>
        <span v-if="serviceStatus?.commandLine" class="command-line" :title="serviceStatus.commandLine">
          {{ serviceStatus.commandLine }}
        </span>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { open } from '@tauri-apps/plugin-dialog';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import {
  getLocalAiConfig,
  getLocalAiRuntimeStatus,
  getLocalAiStatus,
  restartLocalAiService,
  saveLocalAiConfig,
  scanLocalAiModels,
  startLocalAiService,
  stopLocalAiService,
  type LocalAiConfig,
  type LocalAiModelScan,
  type LocalAiRuntimeStatus,
  type LocalAiServiceStatus
} from '@/api/localAi';

defineOptions({
  name: 'LocalAiSettings'
});

const { t } = useI18n();
const router = useRouter();

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
const selectedModelPath = computed<string>({
  get: () => config.value?.modelPath ?? '',
  set: (value) => {
    if (!config.value) return;
    config.value.modelPath = value || undefined;
  }
});
const selectedMmprojPath = computed<string>({
  get: () => config.value?.mmprojPath ?? '',
  set: (value) => {
    if (!config.value) return;
    config.value.mmprojPath = value || undefined;
  }
});
const runtimeStatusText = computed(() => (
  runtimeStatus.value?.available
    ? t('localAi.runtimeReady')
    : t('localAi.runtimeMissing')
));
const modelStatusText = computed(() => (
  modelReady.value
    ? t('localAi.modelReady')
    : modelScan.value?.message ?? t('localAi.modelMissing')
));
const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});

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

const refreshRuntime = async () => {
  runtimeStatus.value = await getLocalAiRuntimeStatus();
};

const refreshStatus = async () => {
  serviceStatus.value = await getLocalAiStatus();
};

const scanModels = async () => {
  if (!config.value) return;
  modelScan.value = await scanLocalAiModels(config.value);
  if (!config.value.modelPath && modelScan.value.selectedModelPath) {
    config.value.modelPath = modelScan.value.selectedModelPath;
  }
  if (!config.value.mmprojPath && modelScan.value.selectedMmprojPath) {
    config.value.mmprojPath = modelScan.value.selectedMmprojPath;
  }
};

const saveOnly = async () => {
  if (!config.value) return;
  try {
    await saveLocalAiConfig(config.value);
  } catch (error) {
    logger.warn('[LocalAI] autosave failed', error);
  }
};

const saveConfig = async () => {
  if (!config.value) return;
  saving.value = true;
  try {
    config.value = await saveLocalAiConfig(config.value);
    await Promise.all([refreshRuntime(), scanModels(), refreshStatus()]);
    modal.msg(t('localAi.configSaved'));
  } catch (error) {
    modal.msg(`${t('localAi.configSaveFailed')}: ${error}`, 'error');
  } finally {
    saving.value = false;
  }
};

const chooseModelDir = async () => {
  const selected = await open({
    directory: true,
    multiple: false,
    title: t('localAi.chooseModelDir')
  });
  if (!selected || Array.isArray(selected) || !config.value) return;
  config.value.modelDir = selected;
  config.value.modelPath = undefined;
  config.value.mmprojPath = undefined;
  await scanModels();
};

const chooseRuntime = async () => {
  const selected = await open({
    multiple: false,
    title: t('localAi.chooseRuntime'),
    filters: [{ name: 'llama-server', extensions: ['exe'] }]
  });
  if (!selected || Array.isArray(selected) || !config.value) return;
  config.value.runtimePath = selected;
  await saveOnly();
  await refreshRuntime();
};

const startService = async () => {
  if (!config.value) return;
  starting.value = true;
  try {
    await saveLocalAiConfig(config.value);
    serviceStatus.value = await startLocalAiService(config.value);
    modal.msg(t('localAi.serviceStarted'));
  } catch (error) {
    modal.msg(`${t('localAi.serviceStartFailed')}: ${error}`, 'error');
  } finally {
    starting.value = false;
  }
};

const restartService = async () => {
  restarting.value = true;
  try {
    await saveConfig();
    serviceStatus.value = await restartLocalAiService();
    modal.msg(t('localAi.serviceRestarted'));
  } catch (error) {
    modal.msg(`${t('localAi.serviceRestartFailed')}: ${error}`, 'error');
  } finally {
    restarting.value = false;
  }
};

const stopService = async () => {
  stopping.value = true;
  try {
    await stopLocalAiService();
    await refreshStatus();
    modal.msg(t('localAi.serviceStoppedMsg'));
  } catch (error) {
    modal.msg(`${t('localAi.serviceStopFailed')}: ${error}`, 'error');
  } finally {
    stopping.value = false;
  }
};

const openChat = () => {
  router.push('/local-ai/chat');
};

onMounted(async () => {
  await refreshAll();
  statusTimer = setInterval(() => {
    refreshStatus().catch((error) => logger.warn('[LocalAI] status refresh failed', error));
  }, 5000);
});

onUnmounted(() => {
  if (statusTimer) {
    clearInterval(statusTimer);
    statusTimer = null;
  }
});
</script>

<style scoped lang="scss">
.local-ai-settings {
  height: 100%;
}

.local-ai-header {
  @apply flex items-center justify-between gap-3;
}

.header-actions {
  @apply flex items-center gap-2;
}

.status-strip {
  @apply mb-4 grid grid-cols-3 gap-2;
}

.status-item {
  @apply flex min-w-0 items-center gap-2 rounded border border-panel bg-hover px-3 py-2 text-xs text-panel-text-secondary;

  &.ready {
    @apply text-green-600 dark:text-green-300;
  }
}

.status-dot {
  @apply h-2 w-2 shrink-0 rounded-full bg-orange-400;

  .ready & {
    @apply bg-green-500;
  }
}

.local-ai-fields {
  @apply flex-col !items-stretch gap-3;
}

.field-row {
  @apply grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-3 text-sm text-panel;
}

.path-control {
  @apply flex min-w-0 items-center gap-2;
}

.text-input {
  @apply h-8 min-w-0 flex-1 rounded border border-panel bg-hover px-2 text-xs text-panel outline-none;
}

.field-select {
  @apply w-full;
}

.service-controls {
  @apply flex-wrap gap-2;
}

.service-url {
  @apply ml-1 truncate text-xs text-panel-text-secondary;
}

.param-grid,
.lifecycle-grid {
  @apply grid grid-cols-3 gap-3;
}

.number-field,
.switch-list label,
.lifecycle-grid label {
  @apply flex min-w-0 items-center justify-between gap-3 text-sm text-panel;
}

.number-field span,
.switch-list span,
.lifecycle-grid span {
  @apply truncate text-panel-text-secondary;
}

.switch-list {
  @apply grid grid-cols-3 gap-4;
}

.settings-footer {
  @apply sticky bottom-0 mt-4 flex items-center gap-3 border-t border-panel bg-panel pt-3;
}

.command-line {
  @apply min-w-0 flex-1 truncate text-xs text-panel-text-secondary;
}

@media (max-width: 900px) {
  .status-strip,
  .param-grid,
  .lifecycle-grid,
  .switch-list {
    @apply grid-cols-1;
  }

  .field-row {
    @apply grid-cols-1 gap-1;
  }
}
</style>
