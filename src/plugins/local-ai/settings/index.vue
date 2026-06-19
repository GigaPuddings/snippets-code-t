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
          <div
            class="status-item"
            :class="statusToneClass(runtimeStatus?.available ? 'ok' : 'danger')"
          >
            <span class="status-dot"></span>
            <span>{{ runtimeStatusText }}</span>
          </div>
          <div
            class="status-item"
            :class="statusToneClass(modelReady ? 'ok' : 'danger')"
          >
            <span class="status-dot"></span>
            <span>{{ modelStatusText }}</span>
          </div>
          <div
            class="status-item"
            :class="
              statusToneClass(
                serviceStatus?.healthy
                  ? 'ok'
                  : serviceStatus?.running
                    ? 'warn'
                    : 'danger'
              )
            "
          >
            <span class="status-dot"></span>
            <span>{{ serviceStatusText }}</span>
          </div>
        </div>

        <section
          class="memory-card"
          :class="statusToneClass(performanceEstimate.level)"
        >
          <div class="memory-card__header">
            <span>{{ t('localAi.estimatedMemory') }}</span>
            <small>{{ t('localAi.estimateBeta') }}</small>
          </div>
          <div class="memory-metrics">
            <div>
              <span>GPU</span>
              <b :class="statusToneClass(performanceEstimate.level)">
                {{ performanceEstimate.gpuGb }} GB
              </b>
            </div>
            <div>
              <span>{{ t('localAi.total') }}</span>
              <b :class="statusToneClass(performanceEstimate.level)">
                {{ performanceEstimate.totalGb }} GB
              </b>
            </div>
          </div>
          <div class="bottleneck-row">
            <span>{{ t('localAi.bottleneck') }}</span>
            <b :class="statusToneClass(performanceEstimate.level)">
              {{ performanceEstimate.bottleneck }}
            </b>
          </div>
        </section>

        <section class="summary-card">
          <div class="summary-card__title">
            {{ t('localAi.serviceControl') }}
          </div>
          <div class="summary-card__desc">
            {{ t('localAi.serviceControlDesc') }}
          </div>
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
          <div class="service-url">{{ serviceStatus?.baseUrl }}</div>
        </section>

        <section class="summary-card">
          <div class="summary-card__title">{{ t('localAi.modelRuntime') }}</div>
          <div class="summary-card__desc">
            {{ t('localAi.modelRuntimeDesc') }}
          </div>
          <div class="summary-meta">
            <div>
              <span>{{ t('localAi.runtimeReady') }}</span>
              <b :class="yesNoClass(runtimeStatus?.available)">
                {{
                  runtimeStatus?.available ? t('common.yes') : t('common.no')
                }}
              </b>
            </div>
            <div>
              <span>{{ t('localAi.modelReady') }}</span>
              <b :class="yesNoClass(modelReady)">
                {{ modelReady ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div>
              <span>{{ t('localAi.mainModelConfigured') }}</span>
              <b :class="yesNoClass(Boolean(selectedModelPath))">
                {{ selectedModelPath ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div>
              <span>{{ t('localAi.mmprojConfigured') }}</span>
              <b :class="yesNoClass(Boolean(selectedMmprojPath))">
                {{ selectedMmprojPath ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div>
              <span>{{ t('localAi.visionAvailable') }}</span>
              <b :class="yesNoClass(visionReady)">
                {{ visionReady ? t('common.yes') : t('common.no') }}
              </b>
            </div>
            <div>
              <span>{{ t('localAi.serviceHealthy') }}</span>
              <b :class="yesNoClass(Boolean(serviceStatus?.healthy))">
                {{ serviceStatus?.healthy ? t('common.yes') : t('common.no') }}
              </b>
            </div>
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
            <label class="field-row" :title="paramHint('modelDir')">
              <span>{{ t('localAi.modelDir') }}</span>
              <div class="path-control">
                <input
                  v-model="config.modelDir"
                  class="text-input"
                  @change="scanModels"
                />
                <CustomButton size="small" plain @click="chooseModelDir">
                  {{ t('common.browse') }}
                </CustomButton>
              </div>
            </label>
            <label class="field-row" :title="paramHint('mainModel')">
              <span>{{ t('localAi.mainModel') }}</span>
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
            </label>
            <label class="field-row" :title="paramHint('mmprojModel')">
              <span>{{ t('localAi.mmprojModel') }}</span>
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
            </label>
            <label class="field-row" :title="paramHint('runtimePath')">
              <span>{{ t('localAi.runtimePath') }}</span>
              <div class="path-control">
                <input
                  v-model="config.runtimePath"
                  class="text-input"
                  :placeholder="t('localAi.runtimePathPlaceholder')"
                />
                <CustomButton size="small" plain @click="chooseRuntime">
                  {{ t('common.browse') }}
                </CustomButton>
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
            <label class="number-field" :title="paramHint('ctxSize')">
              <span>{{ t('localAi.ctxSize') }}</span>
              <el-input-number
                v-model="config.ctxSize"
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
                :min="0"
                :max="8"
                :step="1"
                size="small"
              />
            </label>
          </div>
          <div
            class="agent-reach-card"
            :class="statusToneClass(agentReachTone)"
          >
            <div class="agent-reach-card__header">
              <div class="status-item" :class="statusToneClass(agentReachTone)">
                <span class="status-dot"></span>
                <span>{{ agentReachStatusText }}</span>
              </div>
              <span v-if="agentReachProgressText" class="agent-reach-phase">
                {{ agentReachProgressText }}
              </span>
            </div>
            <div
              v-if="agentReachProgressVisible"
              class="agent-reach-progress-track"
              :class="{
                'agent-reach-progress-track--indeterminate':
                  agentReachProgressPercent === undefined
              }"
            >
              <div
                class="agent-reach-progress-bar"
                :style="{
                  width:
                    agentReachProgressPercent === undefined
                      ? '35%'
                      : `${agentReachProgressPercent}%`
                }"
              />
            </div>
            <div class="agent-reach-meta">
              <div>
                <span>{{ t('localAi.agentReachSource') }}</span>
                <b>{{ agentReachSourceText }}</b>
              </div>
              <div>
                <span>{{ t('localAi.agentReachResourcePackage') }}</span>
                <b :class="yesNoClass(agentReachStatus?.runtimeResourceAvailable)">
                  {{
                    agentReachStatus?.runtimeResourceAvailable
                      ? t('localAi.agentReachResourceAvailable')
                      : t('localAi.agentReachResourceMissing')
                  }}
                </b>
              </div>
              <div>
                <span>{{ t('localAi.agentReachExecutable') }}</span>
                <b :title="agentReachStatus?.agentReachPath ?? ''">
                  {{ agentReachCommandText }}
                </b>
              </div>
              <div>
                <span>{{ t('localAi.agentReachManagedRoot') }}</span>
                <b :title="agentReachStatus?.managedRoot ?? ''">
                  {{ agentReachManagedRootText }}
                </b>
              </div>
            </div>
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
            <label :title="paramHint('flashAttn')">
              <span>{{ t('localAi.flashAttn') }}</span>
              <el-switch v-model="config.flashAttn" />
            </label>
            <label :title="paramHint('kvOffload')">
              <span>{{ t('localAi.kvOffload') }}</span>
              <el-switch v-model="config.kvOffload" />
            </label>
            <label :title="paramHint('mmap')">
              <span>{{ t('localAi.mmap') }}</span>
              <el-switch v-model="config.mmap" />
            </label>
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
            <label :title="paramHint('autoStart')">
              <span>{{ t('localAi.autoStart') }}</span>
              <el-switch v-model="config.autoStartOnRequest" />
            </label>
            <label :title="paramHint('keepAlive')">
              <span>{{ t('localAi.keepAlive') }}</span>
              <el-switch v-model="config.keepAlive" />
            </label>
            <label class="number-field" :title="paramHint('idleTimeout')">
              <span>{{ t('localAi.idleTimeout') }}</span>
              <el-input-number
                v-model="config.idleTimeoutMinutes"
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
                :min="30"
                :max="3600"
                :step="30"
                size="small"
              />
            </label>
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
            <label class="number-field" :title="paramHint('temperature')">
              <span>{{ t('localAi.temperature') }}</span>
              <el-input-number
                v-model="config.temperature"
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
                :min="1024"
                :max="65535"
                :step="1"
                size="small"
              />
            </label>
          </div>
        </div>

        <div class="settings-section grid-two">
          <div class="settings-section__header">
            <div>
              <h4>{{ t('localAi.webSearch') }}</h4>
              <p>{{ t('localAi.webSearchDesc') }}</p>
            </div>
            <CustomButton
              size="small"
              plain
              :loading="testingWebSearch"
              @click="testWebSearch"
            >
              {{ t('localAi.webSearchTest') }}
            </CustomButton>
          </div>
          <div class="param-grid">
            <label
              class="number-field"
              :title="paramHint('webSearchMaxResults')"
            >
              <span>{{ t('localAi.webSearchMaxResults') }}</span>
              <el-input-number
                v-model="config.webSearchMaxResults"
                :min="1"
                :max="10"
                :step="1"
                size="small"
              />
            </label>
            <label
              class="number-field"
              :title="paramHint('webSearchTimeoutSecs')"
            >
              <span>{{ t('localAi.webSearchTimeoutSecs') }}</span>
              <el-input-number
                v-model="config.webSearchTimeoutSecs"
                :min="3"
                :max="60"
                :step="1"
                size="small"
              />
            </label>
          </div>
        </div>

        <div class="settings-footer">
          <CustomButton type="primary" :loading="saving" @click="saveConfig">
            {{ t('common.save') }}
          </CustomButton>
          <span
            v-if="serviceStatus?.commandLine"
            class="command-line"
            :title="serviceStatus.commandLine"
          >
            {{ serviceStatus.commandLine }}
          </span>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { open } from '@tauri-apps/plugin-dialog';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import {
  getLocalAiAgentReachStatus,
  getLocalAiConfig,
  getLocalAiRuntimeStatus,
  getLocalAiStatus,
  restartLocalAiService,
  saveLocalAiConfig,
  scanLocalAiModels,
  startLocalAiService,
  stopLocalAiService,
  webSearchWithLocalAi,
  type LocalAiConfig,
  type LocalAiAgentReachProgress,
  type LocalAiAgentReachStatus,
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
const agentReachStatus = ref<LocalAiAgentReachStatus | null>(null);
const agentReachProgress = ref<LocalAiAgentReachProgress | null>(null);
const serviceStatus = ref<LocalAiServiceStatus | null>(null);
const modelScan = ref<LocalAiModelScan | null>(null);
const loading = ref(false);
const saving = ref(false);
const starting = ref(false);
const restarting = ref(false);
const stopping = ref(false);
const testingWebSearch = ref(false);
let statusTimer: ReturnType<typeof setInterval> | null = null;
let agentReachUnlisten: UnlistenFn | null = null;

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
  'tone-danger': tone === 'danger'
});
const yesNoClass = (value: unknown) =>
  statusToneClass(value ? 'ok' : 'danger');
const agentReachTone = computed<'ok' | 'warn' | 'danger'>(() => {
  if (agentReachStatus.value?.ready) return 'ok';
  if (agentReachStatus.value?.installing || agentReachProgress.value)
    return 'warn';
  return 'danger';
});
const agentReachStatusText = computed(() => {
  if (agentReachStatus.value?.ready) return t('localAi.agentReachReady');
  if (agentReachStatus.value?.installing || agentReachProgress.value)
    return t('localAi.agentReachPreparing');
  return t('localAi.agentReachMissing');
});
const agentReachSourceText = computed(() => {
  const source = agentReachStatus.value?.source ?? 'missing';
  const key = `localAi.agentReachSources.${source}`;
  const translated = t(key);
  return translated === key ? source : translated;
});
const agentReachProgressText = computed(
  () => agentReachProgress.value?.message ?? agentReachStatus.value?.message ?? ''
);
const agentReachProgressPercent = computed(() => {
  const value = agentReachProgress.value?.progress;
  return typeof value === 'number'
    ? Math.max(0, Math.min(100, Math.round(value)))
    : undefined;
});
const agentReachProgressVisible = computed(
  () =>
    Boolean(agentReachProgress.value) &&
    agentReachProgress.value?.phase !== 'ready'
);
const agentReachCommandText = computed(() =>
  agentReachStatus.value?.agentReachPath
    ? fileName(agentReachStatus.value.agentReachPath)
    : '-'
);
const agentReachManagedRootText = computed(() =>
  agentReachStatus.value?.managedRoot
    ? fileName(agentReachStatus.value.managedRoot)
    : '-'
);

const refreshRuntime = async () => {
  runtimeStatus.value = await getLocalAiRuntimeStatus();
};
const refreshAgentReachStatus = async () => {
  agentReachStatus.value = await getLocalAiAgentReachStatus();
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
    await Promise.all([
      refreshRuntime(),
      scanModels(),
      refreshStatus(),
      refreshAgentReachStatus()
    ]);
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
    await Promise.all([
      refreshRuntime(),
      scanModels(),
      refreshStatus(),
      refreshAgentReachStatus()
    ]);
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
const testWebSearch = async () => {
  if (!config.value) return;
  testingWebSearch.value = true;
  try {
    config.value = await saveLocalAiConfig(config.value);
    const response = await webSearchWithLocalAi({
      query: t('localAi.webSearchTestQuery'),
      maxResults: 1
    });
    modal.msg(
      response.results.length
        ? t('localAi.webSearchTestSuccess', {
            count: response.results.length
          })
        : t('localAi.webSearchTestEmpty')
    );
    await refreshAgentReachStatus();
  } catch (error) {
    logger.warn('[LocalAI] web search test failed', error);
    modal.msg(`${t('localAi.webSearchTestFailed')}: ${error}`, 'error');
  } finally {
    testingWebSearch.value = false;
  }
};
const openChat = () => {
  window.location.hash = '#/local-ai/chat';
};

onMounted(async () => {
  await refreshAll();
  try {
    agentReachUnlisten = await listen<LocalAiAgentReachProgress>(
      'local-ai-agent-reach-progress',
      (event) => {
        agentReachProgress.value = event.payload;
        if (event.payload.phase === 'ready' || event.payload.phase === 'failed') {
          refreshAgentReachStatus().catch((error) =>
            logger.warn('[LocalAI] refresh Agent-Reach status failed', error)
          );
        }
      }
    );
  } catch (error) {
    logger.warn('[LocalAI] listen Agent-Reach progress failed', error);
  }
  statusTimer = setInterval(() => {
    Promise.all([refreshStatus(), refreshAgentReachStatus()]).catch((error) =>
      logger.warn('[LocalAI] status timer failed', error)
    );
  }, 15000);
});
onUnmounted(() => {
  if (statusTimer) clearInterval(statusTimer);
  agentReachUnlisten?.();
  agentReachUnlisten = null;
});
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
  grid-template-columns: 300px minmax(0, 1fr);
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
}

.status-dot {
  @apply h-2 w-2 rounded-full bg-orange-400;
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

.summary-card {
  @apply mt-4 rounded-md border border-panel bg-hover p-3;
}

.memory-card {
  @apply mt-4 rounded-md border border-panel bg-hover p-3;
}

.memory-card__header,
.memory-metrics,
.bottleneck-row {
  @apply flex items-center justify-between gap-2;
}

.memory-card__header {
  @apply text-sm font-semibold text-panel;

  small {
    @apply rounded border border-panel bg-panel px-1.5 py-0.5 text-[10px] font-normal text-panel-text-secondary;
  }
}

.memory-metrics {
  @apply mt-3;

  div {
    @apply flex min-w-0 flex-1 items-center justify-between rounded border border-panel bg-panel px-2 py-1.5 text-xs;
  }

  span {
    @apply text-panel-text-secondary;
  }

  b {
    @apply font-semibold text-panel;
  }
}

.bottleneck-row {
  @apply mt-2 rounded border border-panel bg-panel px-2 py-1.5 text-xs;

  span {
    @apply text-panel-text-secondary;
  }

  b {
    @apply text-panel;
  }
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

.summary-meta b.tone-ok,
.memory-metrics b.tone-ok,
.bottleneck-row b.tone-ok,
.agent-reach-meta b.tone-ok {
  @apply text-green-600 dark:text-green-300;
}

.summary-meta b.tone-warn,
.memory-metrics b.tone-warn,
.bottleneck-row b.tone-warn,
.agent-reach-meta b.tone-warn {
  @apply text-orange-600 dark:text-orange-300;
}

.summary-meta b.tone-danger,
.memory-metrics b.tone-danger,
.bottleneck-row b.tone-danger,
.agent-reach-meta b.tone-danger {
  @apply text-red-600 dark:text-red-300;
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

.agent-reach-card {
  @apply mt-3 rounded-md border border-panel bg-hover p-3;
}

.agent-reach-card__header {
  @apply flex flex-wrap items-center justify-between gap-2;
}

.agent-reach-phase {
  @apply min-w-0 truncate text-xs text-panel-text-secondary;
}

.agent-reach-progress-track {
  @apply relative mt-3 h-2 overflow-hidden rounded-full bg-panel;
}

.agent-reach-progress-track--indeterminate .agent-reach-progress-bar {
  animation: local-ai-agent-reach-progress 1.1s ease-in-out infinite;
}

.agent-reach-progress-bar {
  @apply h-full rounded-full bg-green-500;
  transition: width 0.18s ease;
}

.agent-reach-card.tone-warn .agent-reach-progress-bar {
  @apply bg-orange-400;
}

.agent-reach-card.tone-danger .agent-reach-progress-bar {
  @apply bg-red-500;
}

.agent-reach-meta {
  @apply mt-3 grid gap-2 text-xs;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  div {
    @apply flex min-w-0 items-center justify-between gap-2 rounded border border-panel bg-panel px-2 py-1.5;
  }

  span {
    @apply shrink-0 text-panel-text-secondary;
  }

  b {
    @apply min-w-0 truncate text-right font-semibold text-panel;
  }
}

.service-controls {
  @apply mt-3 flex flex-wrap gap-2;
}

.service-url {
  @apply mt-2 truncate text-xs text-panel-text-secondary;
}

.settings-footer {
  @apply mt-5 flex items-center justify-end gap-3 border-t border-panel bg-panel pt-3;
}

:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-input-number__decrease),
:deep(.el-input-number__increase) {
  display: none;
}

:deep(.el-input-number .el-input__wrapper) {
  padding-left: 8px;
  padding-right: 8px;
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
  .switch-grid--two,
  .agent-reach-meta {
    grid-template-columns: 1fr;
  }

  .field-row {
    @apply flex-col items-stretch;
  }
}

@keyframes local-ai-agent-reach-progress {
  0% {
    transform: translateX(-120%);
  }

  100% {
    transform: translateX(320%);
  }
}
</style>
