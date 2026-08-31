<template>
  <div class="settings-panel local-ai-settings-shell">
    <header class="panel-header local-ai-header">
      <div class="local-ai-frame local-ai-header__inner">
        <div class="local-ai-heading">
          <h3 class="panel-title">{{ t('localAi.title') }}</h3>
          <p class="local-ai-desc">{{ t('localAi.serviceControlDesc') }}</p>
        </div>
        <div class="header-actions">
          <CustomButton size="small" plain @click="openChat">
            {{ t('localAi.openChat') }}
          </CustomButton>
          <CustomButton size="small" :loading="loading" @click="refreshAll">
            {{ t('plugins.refresh') }}
          </CustomButton>
        </div>
      </div>
    </header>

    <main v-if="config" class="panel-content local-ai-content">
      <div class="local-ai-frame">
        <section class="settings-section">
          <div class="settings-section__header">
            <h4>{{ t('localAi.runtimeOverview') }}</h4>
            <p>{{ t('localAi.runtimeOverviewDesc') }}</p>
          </div>

          <div class="status-overview">
            <div class="status-list">
              <div
                class="status-item"
                :class="statusToneClass(runtimeStatusTone)"
                :title="runtimeStatusText"
              >
                <span class="status-dot"></span>
                <span>{{ runtimeStatusText }}</span>
              </div>
              <div
                class="status-item"
                :class="statusToneClass(modelStatusTone)"
                :title="modelStatusText"
              >
                <span class="status-dot"></span>
                <span>{{ modelStatusText }}</span>
              </div>
              <div
                class="status-item"
                :class="statusToneClass(serviceStatusTone)"
                :title="serviceStatusText"
              >
                <span class="status-dot"></span>
                <span>{{ serviceStatusText }}</span>
              </div>
            </div>

            <div
              class="memory-summary"
              :class="statusToneClass(performanceEstimate.level)"
            >
              <div class="memory-summary__title">
                <span>{{ t('localAi.estimatedMemory') }}</span>
                <small>{{ t('localAi.estimateBeta') }}</small>
              </div>
              <div class="memory-summary__metrics">
                <span>
                  <span>GPU</span>
                  <b :class="statusToneClass(performanceEstimate.level)">
                    {{ performanceEstimate.gpuGb }} GB
                  </b>
                </span>
                <span>
                  <span>{{ t('localAi.total') }}</span>
                  <b :class="statusToneClass(performanceEstimate.level)">
                    {{ performanceEstimate.totalGb }} GB
                  </b>
                </span>
                <span>
                  <span>{{ t('localAi.bottleneck') }}</span>
                  <b :class="statusToneClass(performanceEstimate.level)">
                    {{ performanceEstimate.bottleneck }}
                  </b>
                </span>
              </div>
            </div>
          </div>

          <div class="readiness-grid">
            <div class="readiness-item">
              <span>{{ t('localAi.runtimeReady') }}</span>
              <b :class="yesNoClass(runtimeStatus?.available)">
                {{
                  runtimeStatus?.available ? t('common.yes') : t('common.no')
                }}
              </b>
            </div>
            <div class="readiness-item">
              <span>{{ t('localAi.modelReady') }}</span>
              <b :class="yesNoClass(modelReady)">
                {{ modelReady ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div class="readiness-item">
              <span>{{ t('localAi.mainModelConfigured') }}</span>
              <b :class="yesNoClass(Boolean(selectedModelPath))">
                {{ selectedModelPath ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div class="readiness-item">
              <span>{{ t('localAi.mmprojConfigured') }}</span>
              <b :class="yesNoClass(Boolean(selectedMmprojPath))">
                {{ selectedMmprojPath ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div class="readiness-item">
              <span>{{ t('localAi.visionAvailable') }}</span>
              <b :class="yesNoClass(visionReady)">
                {{ visionReady ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div class="readiness-item">
              <span>{{ t('localAi.serviceHealthy') }}</span>
              <b :class="yesNoClass(Boolean(serviceStatus?.healthy))">
                {{ serviceStatus?.healthy ? t('common.yes') : t('common.no') }}
              </b>
            </div>
          </div>

          <div class="setting-row service-setting">
            <div class="setting-label">
              <div class="setting-title">{{ t('localAi.serviceControl') }}</div>
              <div class="setting-desc">
                {{ t('localAi.serviceControlDesc') }}
              </div>
            </div>
            <div class="setting-control service-control">
              <div class="service-controls">
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
              </div>
              <div v-if="serviceStatus?.baseUrl" class="service-url">
                <span>{{ t('localAi.serviceAddress') }}</span>
                <code>{{ serviceStatus.baseUrl }}</code>
              </div>
            </div>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section__header">
            <h4>{{ t('localAi.modelRuntime') }}</h4>
            <p>{{ t('localAi.modelRuntimeDesc') }}</p>
          </div>
          <div class="field-stack">
            <div class="setting-row" :title="paramHint('modelDir')">
              <div class="setting-label">
                <div class="setting-title">{{ t('localAi.modelDir') }}</div>
                <div class="setting-desc">{{ paramHint('modelDir') }}</div>
              </div>
              <div class="setting-control">
                <div class="path-control">
                  <input
                    v-model="config.modelDir"
                    class="setting-input"
                    @change="scanModels"
                  />
                  <CustomButton size="small" plain @click="chooseModelDir">
                    {{ t('common.browse') }}
                  </CustomButton>
                </div>
              </div>
            </div>
            <div class="setting-row" :title="paramHint('mainModel')">
              <div class="setting-label">
                <div class="setting-title">{{ t('localAi.mainModel') }}</div>
                <div class="setting-desc">{{ paramHint('mainModel') }}</div>
              </div>
              <div class="setting-control">
                <el-select
                  v-model="selectedModelPath"
                  class="field-select"
                  clearable
                  @change="saveOnly"
                >
                  <el-option
                    v-for="path in modelScan?.mainModels ?? []"
                    :key="path"
                    :label="fileName(path)"
                    :value="path"
                  />
                </el-select>
              </div>
            </div>
            <div class="setting-row" :title="paramHint('mmprojModel')">
              <div class="setting-label">
                <div class="setting-title">{{ t('localAi.mmprojModel') }}</div>
                <div class="setting-desc">{{ paramHint('mmprojModel') }}</div>
              </div>
              <div class="setting-control">
                <el-select
                  v-model="selectedMmprojPath"
                  class="field-select"
                  clearable
                  @change="saveOnly"
                >
                  <el-option
                    v-for="path in modelScan?.mmprojModels ?? []"
                    :key="path"
                    :label="fileName(path)"
                    :value="path"
                  />
                </el-select>
              </div>
            </div>
            <div class="setting-row" :title="paramHint('runtimePath')">
              <div class="setting-label">
                <div class="setting-title">{{ t('localAi.runtimePath') }}</div>
                <div class="setting-desc">{{ paramHint('runtimePath') }}</div>
              </div>
              <div class="setting-control">
                <div class="path-control">
                  <input
                    v-model="config.runtimePath"
                    class="setting-input"
                    :placeholder="t('localAi.runtimePathPlaceholder')"
                  />
                  <CustomButton size="small" plain @click="chooseRuntime">
                    {{ t('common.browse') }}
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section__header">
            <h4>{{ t('localAi.inferenceParams') }}</h4>
            <p>{{ t('localAi.inferenceParamsDesc') }}</p>
          </div>
          <div class="parameter-grid">
            <label class="number-field" :title="paramHint('ctxSize')">
              <span>{{ t('localAi.ctxSize') }}</span>
              <el-input-number
                v-model="config.ctxSize"
                :controls="false"
                :min="512"
                :max="65536"
                :step="512"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('gpuLayers')">
              <span>{{ t('localAi.gpuLayers') }}</span>
              <el-input-number
                v-model="config.gpuLayers"
                :controls="false"
                :min="0"
                :max="999"
                :step="1"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('threads')">
              <span>{{ t('localAi.threads') }}</span>
              <el-input-number
                v-model="config.threads"
                :controls="false"
                :min="1"
                :max="64"
                :step="1"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('batchSize')">
              <span>{{ t('localAi.batchSize') }}</span>
              <el-input-number
                v-model="config.batchSize"
                :controls="false"
                :min="32"
                :max="4096"
                :step="32"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('ubatchSize')">
              <span>{{ t('localAi.ubatchSize') }}</span>
              <el-input-number
                v-model="config.ubatchSize"
                :controls="false"
                :min="16"
                :max="2048"
                :step="16"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('mainGpu')">
              <span>{{ t('localAi.mainGpu') }}</span>
              <el-input-number
                v-model="config.mainGpu"
                :controls="false"
                :min="0"
                :max="8"
                :step="1"
                size="small"
              />
            </label>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section__header">
            <h4>{{ t('localAi.acceleration') }}</h4>
            <p>{{ t('localAi.accelerationDesc') }}</p>
          </div>
          <div class="switch-grid">
            <label class="switch-field" :title="paramHint('flashAttn')">
              <span class="switch-field__label">
                {{ t('localAi.flashAttn') }}
              </span>
              <CustomSwitch
                v-model="config.flashAttn"
                :active-text="t('common.on')"
                :inactive-text="t('common.off')"
              />
            </label>
            <label class="switch-field" :title="paramHint('kvOffload')">
              <span class="switch-field__label">
                {{ t('localAi.kvOffload') }}
              </span>
              <CustomSwitch
                v-model="config.kvOffload"
                :active-text="t('common.on')"
                :inactive-text="t('common.off')"
              />
            </label>
            <label class="switch-field" :title="paramHint('mmap')">
              <span class="switch-field__label">{{ t('localAi.mmap') }}</span>
              <CustomSwitch
                v-model="config.mmap"
                :active-text="t('common.on')"
                :inactive-text="t('common.off')"
              />
            </label>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section__header">
            <h4>{{ t('localAi.lifecycle') }}</h4>
            <p>{{ t('localAi.lifecycleDesc') }}</p>
          </div>
          <div class="switch-grid switch-grid--two">
            <label class="switch-field" :title="paramHint('autoStart')">
              <span class="switch-field__label">
                {{ t('localAi.autoStart') }}
              </span>
              <CustomSwitch
                v-model="config.autoStartOnRequest"
                :active-text="t('common.on')"
                :inactive-text="t('common.off')"
              />
            </label>
            <label class="switch-field" :title="paramHint('keepAlive')">
              <span class="switch-field__label">
                {{ t('localAi.keepAlive') }}
              </span>
              <CustomSwitch
                v-model="config.keepAlive"
                :active-text="t('common.on')"
                :inactive-text="t('common.off')"
              />
            </label>
            <label class="number-field" :title="paramHint('idleTimeout')">
              <span>{{ t('localAi.idleTimeout') }}</span>
              <el-input-number
                v-model="config.idleTimeoutMinutes"
                :controls="false"
                :min="0"
                :max="240"
                :step="1"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('requestTimeout')">
              <span>{{ t('localAi.requestTimeout') }}</span>
              <el-input-number
                v-model="config.requestTimeoutSecs"
                :controls="false"
                :min="30"
                :max="3600"
                :step="30"
                size="small"
              />
            </label>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section__header">
            <h4>{{ t('localAi.generation') }}</h4>
            <p>{{ t('localAi.generationDesc') }}</p>
          </div>
          <div class="parameter-grid parameter-grid--three">
            <label class="number-field" :title="paramHint('temperature')">
              <span>{{ t('localAi.temperature') }}</span>
              <el-input-number
                v-model="config.temperature"
                :controls="false"
                :min="0"
                :max="2"
                :step="0.1"
                :precision="1"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('topP')">
              <span>{{ t('localAi.topP') }}</span>
              <el-input-number
                v-model="config.topP"
                :controls="false"
                :min="0.05"
                :max="1"
                :step="0.05"
                :precision="2"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('topK')">
              <span>{{ t('localAi.topK') }}</span>
              <el-input-number
                v-model="config.topK"
                :controls="false"
                :min="0"
                :max="200"
                :step="1"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('minP')">
              <span>{{ t('localAi.minP') }}</span>
              <el-input-number
                v-model="config.minP"
                :controls="false"
                :min="0"
                :max="0.5"
                :step="0.01"
                :precision="2"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('repeatPenalty')">
              <span>{{ t('localAi.repeatPenalty') }}</span>
              <el-input-number
                v-model="config.repeatPenalty"
                :controls="false"
                :min="1"
                :max="2"
                :step="0.01"
                :precision="2"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('repeatLastN')">
              <span>{{ t('localAi.repeatLastN') }}</span>
              <el-input-number
                v-model="config.repeatLastN"
                :controls="false"
                :min="0"
                :max="2048"
                :step="32"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('maxTokens')">
              <span>{{ t('localAi.maxTokens') }}</span>
              <el-input-number
                v-model="config.maxTokens"
                :controls="false"
                :min="0"
                :max="8192"
                :step="64"
                size="small"
              />
            </label>
            <label class="number-field" :title="paramHint('port')">
              <span>{{ t('localAi.port') }}</span>
              <el-input-number
                v-model="config.port"
                :controls="false"
                :min="1024"
                :max="65535"
                :step="1"
                size="small"
              />
            </label>
          </div>
        </section>

        <div class="settings-footer">
          <span
            v-if="serviceStatus?.commandLine"
            class="command-line"
            :title="serviceStatus.commandLine"
          >
            {{ serviceStatus.commandLine }}
          </span>
          <CustomButton type="primary" :loading="saving" @click="saveConfig">
            {{ t('common.save') }}
          </CustomButton>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { open } from '@tauri-apps/plugin-dialog';
import { useI18n } from 'vue-i18n';
import { CustomButton, CustomSwitch } from '@/components/UI';
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
const visionReady = computed(() => Boolean(config.value?.mmprojPath));
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
const runtimeStatusText = computed(() =>
  runtimeStatus.value?.available
    ? t('localAi.runtimeReady')
    : t('localAi.runtimeMissing')
);
const modelStatusText = computed(() =>
  modelReady.value
    ? t('localAi.modelReady')
    : (modelScan.value?.message ?? t('localAi.modelMissing'))
);
const serviceStatusText = computed(() => {
  if (serviceStatus.value?.healthy) return t('localAi.serviceHealthy');
  if (serviceStatus.value?.running) return t('localAi.serviceStarting');
  return t('localAi.serviceStopped');
});
const runtimeStatusTone = computed(() =>
  runtimeStatus.value
    ? runtimeStatus.value.available
      ? 'ok'
      : 'danger'
    : 'muted'
);
const modelStatusTone = computed(() =>
  modelScan.value ? (modelReady.value ? 'ok' : 'danger') : 'muted'
);
const serviceStatusTone = computed(() => {
  if (!serviceStatus.value) return 'muted';
  if (serviceStatus.value.healthy) return 'ok';
  if (serviceStatus.value.running) return 'warn';
  return 'danger';
});
const fileName = (path: string): string => path.split(/[\\/]+/).pop() ?? path;
const modelParamBillions = computed(() => {
  const name = fileName(
    config.value?.modelPath ?? modelScan.value?.selectedModelPath ?? ''
  );
  const match = name.match(/(\d+(?:\.\d+)?)\s*b/i);
  return match ? Number(match[1]) : 4;
});
const performanceEstimate = computed(() => {
  const cfg = config.value;
  if (!cfg) {
    return {
      gpuGb: '0.00',
      totalGb: '0.00',
      bottleneck: t('localAi.bottleneckUnknown'),
      level: 'warn' as const
    };
  }
  const modelGb = Math.max(1.4, modelParamBillions.value * 0.92);
  const gpuRatio = Math.min(1, Math.max(0, cfg.gpuLayers) / 32);
  const kvGb = (cfg.ctxSize / 8192) * 0.38 * (cfg.kvOffload ? 1 : 0.12);
  const batchGb = (cfg.batchSize / 512) * 0.18;
  const gpuGb = modelGb * gpuRatio + kvGb + batchGb;
  const cpuGb = modelGb * (1 - gpuRatio) + (cfg.ctxSize / 8192) * 0.22;
  const totalGb = gpuGb + cpuGb;
  const bottleneck =
    cfg.gpuLayers <= 4
      ? t('localAi.bottleneckCpu')
      : cfg.ctxSize >= 32768 || cfg.batchSize >= 2048
        ? t('localAi.bottleneckMemory')
        : t('localAi.bottleneckBalanced');
  const level =
    totalGb >= 24 || cfg.ctxSize >= 32768 || cfg.batchSize >= 2048
      ? 'danger'
      : totalGb >= 16 || cfg.ctxSize >= 16384 || cfg.batchSize >= 1024
        ? 'warn'
        : 'ok';
  return {
    gpuGb: gpuGb.toFixed(2),
    totalGb: totalGb.toFixed(2),
    bottleneck,
    level
  };
});
const paramHint = (key: string): string => t(`localAi.paramHints.${key}`);
const statusToneClass = (tone: string | undefined) => ({
  'tone-ok': tone === 'ok',
  'tone-warn': tone === 'warn',
  'tone-danger': tone === 'danger',
  'tone-muted': tone === 'muted' || !tone
});
const yesNoClass = (value: unknown) => statusToneClass(value ? 'ok' : 'danger');
const refreshRuntime = async () => {
  runtimeStatus.value = await getLocalAiRuntimeStatus();
};
const refreshStatus = async () => {
  serviceStatus.value = await getLocalAiStatus();
};
const scanModels = async () => {
  if (!config.value) return;
  modelScan.value = await scanLocalAiModels(config.value);
  if (!config.value.modelPath && modelScan.value.selectedModelPath)
    config.value.modelPath = modelScan.value.selectedModelPath;
  if (!config.value.mmprojPath && modelScan.value.selectedMmprojPath)
    config.value.mmprojPath = modelScan.value.selectedMmprojPath;
};
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
  window.location.hash = '#/config/local-ai/chat';
};

onMounted(async () => {
  await refreshAll();
  statusTimer = setInterval(() => {
    refreshStatus().catch((error) =>
      logger.warn('[LocalAI] status timer failed', error)
    );
  }, 15000);
});
onUnmounted(() => {
  if (statusTimer) clearInterval(statusTimer);
});
</script>

<style scoped lang="scss">
.local-ai-settings-shell {
  @apply h-full min-h-0 w-full max-w-none bg-panel;
}

.local-ai-frame {
  @apply mx-auto w-full max-w-[1320px];
}

.local-ai-header {
  @apply px-2;
}

.local-ai-header__inner {
  @apply flex items-start justify-between gap-4;
}

.local-ai-heading {
  @apply min-w-0;
}

.local-ai-desc {
  @apply mt-1 text-sm font-normal leading-5 text-content;
}

.header-actions {
  @apply flex flex-shrink-0 items-center justify-end gap-2;
}

.local-ai-content {
  @apply px-2 pb-8 pt-5;
}

.settings-section {
  @apply border-b border-panel pb-7;
}

.settings-section + .settings-section {
  @apply mt-5 pb-5;
}

.settings-section__header {
  @apply mb-4;
}

.settings-section + .settings-section .settings-section__header {
  @apply mb-2.5;
}

.settings-section__header h4 {
  @apply text-base font-semibold leading-6 text-panel;
}

.settings-section__header p {
  @apply mt-1 text-xs leading-5 text-content;
}

.status-overview {
  @apply flex flex-wrap items-start justify-between gap-5;
}

.status-list {
  @apply flex min-w-0 flex-1 flex-wrap gap-2;
}

.status-item {
  @apply inline-flex h-8 max-w-full items-center gap-2 rounded-md border border-panel bg-panel px-3 text-xs font-medium text-panel-text-secondary;

  span:last-child {
    @apply truncate;
  }
}

.status-dot {
  @apply h-2 w-2 flex-none rounded-full bg-gray-400;
}

.tone-ok {
  @apply border-green-500/30 text-green-600 dark:text-green-300;

  .status-dot,
  &.status-dot {
    @apply bg-green-500;
  }
}

.tone-warn {
  @apply border-orange-500/30 text-orange-600 dark:text-orange-300;

  .status-dot,
  &.status-dot {
    @apply bg-orange-400;
  }
}

.tone-danger {
  @apply border-red-500/40 text-red-600 dark:text-red-300;

  .status-dot,
  &.status-dot {
    @apply bg-red-500;
  }
}

.tone-muted {
  @apply border-panel text-panel-text-secondary;

  .status-dot,
  &.status-dot {
    @apply bg-gray-400;
  }
}

.memory-summary {
  @apply flex min-w-[18rem] max-w-full flex-col gap-2 rounded-md border border-panel bg-transparent px-3 py-2 text-xs;
}

.memory-summary__title {
  @apply flex items-center gap-2 font-medium text-panel;

  small {
    @apply rounded border border-panel bg-content px-1.5 py-0.5 text-[10px] font-normal leading-none text-panel-text-secondary;
  }
}

.memory-summary__metrics {
  @apply flex flex-wrap gap-x-4 gap-y-1;

  > span {
    @apply inline-flex min-w-0 items-center gap-1 text-content;
  }

  b {
    @apply font-semibold text-panel;
  }
}

.memory-summary b.tone-ok {
  @apply text-green-600 dark:text-green-300;
}

.memory-summary b.tone-warn {
  @apply text-orange-600 dark:text-orange-300;
}

.memory-summary b.tone-danger {
  @apply text-red-600 dark:text-red-300;
}

.readiness-grid {
  @apply mt-5 grid gap-x-8 border-t border-panel;

  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.readiness-item {
  @apply flex min-h-10 items-center justify-between gap-4 border-b border-panel py-2 text-xs text-content;

  b {
    @apply flex-none font-medium text-panel;
  }
}

.setting-row {
  @apply flex min-h-16 items-center justify-between gap-8 border-t border-panel py-3.5;
}

.setting-row:first-child {
  @apply border-t-0;
}

.service-setting {
  @apply mt-5;
}

.setting-label {
  @apply min-w-0 flex-1;
}

.setting-title {
  @apply text-sm font-medium leading-5 text-panel;
}

.setting-desc {
  @apply mt-1 text-xs leading-5 text-content;
}

.setting-control {
  @apply flex min-w-0 flex-[0_1_600px] items-center justify-end gap-2;
}

.service-control {
  @apply flex-col items-end gap-2;
}

.service-controls {
  @apply flex flex-wrap items-center justify-end gap-2;
}

.service-url {
  @apply flex max-w-full items-center gap-1.5 text-xs text-content;

  code {
    @apply min-w-0 truncate rounded bg-content px-1.5 py-0.5 font-mono text-[11px] text-panel;
  }
}

.field-stack {
  @apply grid;
}

.field-stack .setting-row {
  @apply min-h-14 gap-6 py-2.5;
}

.field-stack .setting-desc {
  @apply mt-0.5 leading-4;
}

.field-stack .setting-control {
  flex: 0 1 460px;
  width: min(100%, 460px);
  max-width: 460px;
}

.path-control {
  @apply flex w-full min-w-0 items-center gap-2;

  .custom-button {
    @apply flex-none;
  }
}

.setting-input {
  @apply h-8 min-w-0 flex-1 rounded-md border border-panel bg-content px-3 text-sm text-panel outline-none transition-colors duration-150 placeholder:text-panel-text-secondary;
}

.setting-input:hover {
  border-color: var(--el-color-primary-light-3);
}

.setting-input:focus {
  border-color: var(--el-color-primary);
}

.setting-input:disabled {
  @apply cursor-not-allowed opacity-60;
}

.field-select {
  @apply w-full;
}

.parameter-grid,
.switch-grid {
  @apply grid gap-x-8 gap-y-0;
}

.parameter-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.parameter-grid--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.switch-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.switch-grid--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.number-field,
.switch-field {
  @apply flex min-h-10 min-w-0 items-center justify-between gap-4 border-t border-panel py-2 text-sm;
}

.number-field > span,
.switch-field__label {
  @apply min-w-0 truncate text-sm font-medium text-panel;
}

.switch-field :deep(.custom-switch) {
  @apply flex-none;
}

:deep(.el-input-number) {
  width: 7.5rem;
  min-width: 6.5rem;
}

:deep(.el-input-number__decrease),
:deep(.el-input-number__increase) {
  display: none;
}

:deep(.el-input-number .el-input__wrapper),
:deep(.field-select .el-select__wrapper) {
  min-height: 32px;
  background-color: var(--categories-content-bg);
  border-radius: 6px;
  box-shadow: 0 0 0 1px var(--categories-border-color) inset;
  transition:
    background-color 0.15s ease,
    box-shadow 0.15s ease;
}

:deep(.el-input-number .el-input__wrapper:hover),
:deep(.field-select .el-select__wrapper:hover) {
  box-shadow: 0 0 0 1px var(--el-color-primary-light-3) inset;
}

:deep(.el-input-number .el-input__wrapper.is-focus),
:deep(.field-select .el-select__wrapper.is-focused) {
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}

:deep(.el-input-number.is-without-controls .el-input__wrapper) {
  padding-right: 8px;
  padding-left: 8px;
}

:deep(.el-input-number .el-input__inner) {
  min-width: 0;
  padding-right: 0;
  padding-left: 0;
  text-align: center;
}

:deep(.el-input.is-disabled .el-input__wrapper),
:deep(.el-select.is-disabled .el-select__wrapper) {
  opacity: 0.6;
}

.settings-footer {
  @apply mt-6 flex items-center justify-end gap-3 border-t border-panel pt-4;
}

.command-line {
  @apply min-w-0 flex-1 truncate text-xs text-panel-text-secondary;
}

@media (width <= 1180px) {
  .setting-row {
    @apply flex-col items-stretch gap-3;
  }

  .setting-control {
    @apply w-full flex-none justify-start;
  }

  .field-stack .setting-control {
    @apply flex-none;
  }

  .service-control {
    @apply items-start;
  }

  .service-controls {
    @apply justify-start;
  }

  .readiness-grid,
  .parameter-grid,
  .parameter-grid--three,
  .switch-grid,
  .switch-grid--two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (width <= 760px) {
  .local-ai-header__inner {
    @apply flex-col items-stretch gap-3;
  }

  .header-actions {
    @apply justify-start;
  }

  .status-overview {
    @apply flex-col;
  }

  .memory-summary {
    @apply min-w-0;
  }

  .field-stack .setting-control {
    @apply max-w-none;
  }

  .readiness-grid,
  .parameter-grid,
  .parameter-grid--three,
  .switch-grid,
  .switch-grid--two {
    grid-template-columns: 1fr;
  }

  .number-field,
  .switch-field {
    @apply gap-3;
  }

  :deep(.el-input-number) {
    width: 7.5rem;
  }
}
</style>
