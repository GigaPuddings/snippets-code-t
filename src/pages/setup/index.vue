<template>
  <div class="setup-container">
    <div class="setup-card">
      <!-- 步骤指示器 - 仅在非欢迎页显示 -->
      <div v-if="step > 0" class="setup-steps" data-tauri-drag-region>
        <div
          v-for="(s, i) in steps"
          :key="i"
          :class="['step', { active: step === i, completed: step > i }]"
        >
          <div class="step-dot">{{ step > i ? '✓' : i + 1 }}</div>
          <span class="step-label">{{ s.title }}</span>
        </div>
      </div>

      <!-- 欢迎页的拖拽区域 -->
      <div v-else class="welcome-drag-region" data-tauri-drag-region></div>

      <!-- 步骤内容 -->
      <div class="setup-content">
        <!-- 欢迎页：三选项卡片或 登录子视图 -->
        <div v-if="step === 0" class="step-page welcome-page">
          <div class="welcome-header">
            <div class="welcome-icon">
              <img src="../../assets/128x128.png" alt="Logo" class="app-logo" />
            </div>
            <h1 class="welcome-title">Snippets Code</h1>
            <p class="app-version">
              {{ $t('setup.versionLabel') }} {{ version }}
            </p>
          </div>

          <!-- 主视图：三选项 -->
          <div class="welcome-actions options-card">
            <div class="option-row" @click="chooseSetupMode('create')">
              <div class="option-info">
                <div class="option-title">
                  {{ $t('setup.createWorkspace') }}
                </div>
                <div class="option-desc">
                  {{ $t('setup.createWorkspaceDesc') }}
                </div>
              </div>
              <CustomButton type="primary" size="small" class="option-btn">
                {{ $t('setup.create') }}
              </CustomButton>
            </div>
            <div class="option-row" @click="chooseSetupMode('open')">
              <div class="option-info">
                <div class="option-title">{{ $t('setup.openWorkspace') }}</div>
                <div class="option-desc">
                  {{ $t('setup.openWorkspaceDesc') }}
                </div>
              </div>
              <CustomButton type="default" size="small" class="option-btn">
                {{ $t('setup.open') }}
              </CustomButton>
            </div>
          </div>
          <p class="welcome-desc-text">{{ $t('setup.welcomeDesc') }}</p>

          <!-- 语言选择 -->
          <div class="language-footer">
            <el-select
              v-model="language"
              class="lang-select"
              popper-class="dark-select-popper"
              @change="onLanguageChange"
            >
              <el-option
                v-for="lang in languages"
                :key="lang.value"
                :label="lang.label"
                :value="lang.value"
              >
                <div class="flex items-center gap-2">
                  <span>{{ lang.flag }}</span>
                  <span>{{ lang.label }}</span>
                </div>
              </el-option>
            </el-select>
          </div>
        </div>

        <!-- 应用数据目录 -->
        <div v-if="step === 1" class="step-page path-step-page">
          <h2 class="step-title">{{ $t('setup.appDataDir') }}</h2>
          <p class="step-desc compact">{{ $t('setup.appDataDirDesc') }}</p>

          <SetupPathOptions
            v-model="dataPathOption"
            v-model:path="customDataPath"
            :default-title="$t('setup.defaultAppDataDir')"
            :default-path="defaultDataPath"
            :custom-title="$t('setup.customAppDataDir')"
            :custom-description="$t('setup.customAppDataDirDesc')"
            @browse="selectAppDataPath"
            @blur="onAppDataPathBlur"
          />
        </div>

        <!-- Markdown 工作区 -->
        <div v-if="step === 2" class="step-page path-step-page">
          <h2 class="step-title">{{ $t('setup.workspaceDir') }}</h2>
          <p class="step-desc compact">{{ $t('setup.workspaceDirDesc') }}</p>

          <SetupPathOptions
            v-model="workspacePathOption"
            v-model:path="customWorkspacePath"
            :default-title="$t('setup.defaultLocation')"
            :default-path="defaultWorkspacePath"
            :custom-title="$t('setup.customLocation')"
            :custom-description="$t('setup.customLocationDesc')"
            @browse="selectWorkspacePath"
            @blur="onWorkspacePathBlur"
          />

          <div class="path-tip">
            <Info width="16" height="16" />
            <span>{{ $t('setup.pathTip') }}</span>
          </div>
        </div>

        <!-- 插件安装位置 -->
        <div v-if="step === 3" class="step-page path-step-page">
          <h2 class="step-title">{{ $t('setup.pluginInstallDir') }}</h2>
          <p class="step-desc compact">
            {{ $t('setup.pluginInstallDirDesc') }}
          </p>

          <SetupPathOptions
            v-model="pluginPathOption"
            v-model:path="customPluginInstallPath"
            :default-title="$t('setup.defaultPluginInstallDir')"
            :default-path="defaultPluginPackagesPath"
            :custom-title="$t('setup.customPluginInstallDir')"
            :custom-description="$t('setup.customPluginInstallDirDesc')"
            @browse="selectPluginInstallPath"
          />
        </div>

        <!-- 完成 -->
        <div v-if="step === 4" class="step-page complete-page">
          <div class="complete-icon">
            <CheckOne
              width="48"
              height="48"
              class="text-[var(--el-color-success)]"
            />
          </div>
          <h2 class="step-title">{{ $t('setup.completeTitle') }}</h2>
          <p class="step-desc compact">{{ $t('setup.completeDesc') }}</p>
          <div class="summary">
            <div class="summary-item">
              <span class="summary-label">{{ $t('setup.appDataPath') }}:</span>
              <span class="summary-value" :title="finalDataPath">
                {{ finalDataPath }}
              </span>
            </div>
            <div class="summary-item">
              <span class="summary-label">
                {{ $t('setup.workspacePath') }}:
              </span>
              <span class="summary-value" :title="finalWorkspacePath">
                {{ finalWorkspacePath }}
              </span>
            </div>
            <div class="summary-item">
              <span class="summary-label">
                {{ $t('setup.pluginInstallPath') }}:
              </span>
              <span class="summary-value" :title="finalPluginPackagesPath">
                {{ finalPluginPackagesPath }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部按钮 - 仅在非欢迎页显示 -->
      <div v-if="step > 0" class="setup-footer">
        <CustomButton v-if="step > 0" type="default" @click="prevStep">
          {{ $t('common.prev') }}
        </CustomButton>
        <div class="flex-1"></div>
        <CustomButton
          v-if="step < steps.length - 1"
          type="primary"
          @click="nextStep"
        >
          {{ $t('common.next') }}
        </CustomButton>
        <CustomButton
          v-else
          type="primary"
          @click="completeSetup"
          :loading="completing"
        >
          {{ $t('common.start') }}
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
import { emit } from '@tauri-apps/api/event';
import { getVersion } from '@tauri-apps/api/app';
import SetupPathOptions from './components/SetupPathOptions.vue';
import { appendSetupAppFolder, pickSetupDirectory } from './setupPaths';
import { CustomButton } from '@/components/UI';
import Info from '~icons/lucide/info';
import CheckOne from '~icons/lucide/circle-check';
import { useConfigurationStore } from '@/store';
import { getLocale, setLocale, type LocaleType } from '@/i18n';
import modal from '@/utils/modal';

defineOptions({
  name: 'SetupWizard'
});

const { t } = useI18n();
const store = useConfigurationStore();

const languages = [
  { value: 'zh-CN' as LocaleType, label: '简体中文', flag: '🇨🇳' },
  { value: 'en-US' as LocaleType, label: 'English', flag: '🇺🇸' }
];

const language = computed({
  get: () => store.language,
  set: (value: LocaleType) => {
    store.language = value;
  }
});
const version = ref('');

// 语言切换处理
const onLanguageChange = async (value: LocaleType) => {
  const previousLanguage = getLocale();
  try {
    await invoke('set_language', { language: value });
    setLocale(value);
  } catch (error) {
    store.language = previousLanguage;
    modal.msg(`${t('settings.settingFailed')}: ${error}`, 'error');
  }
};

const steps = computed(() => [
  { title: t('setup.welcome') },
  { title: t('setup.appDataStep') },
  { title: t('setup.workspaceStep') },
  { title: t('setup.pluginStep') },
  { title: t('setup.complete') }
]);

const step = ref(0);
const dataPathOption = ref<'default' | 'custom'>('default');
const defaultDataPath = ref('');
const customDataPath = ref('');
const workspacePathOption = ref<'default' | 'custom'>('default');
const defaultWorkspacePath = ref('');
const customWorkspacePath = ref('');
const pluginPathOption = ref<'default' | 'custom'>('default');
const customPluginInstallPath = ref('');
const completing = ref(false);

/** 引导模式：新建 / 打开 */
type SetupMode = 'create' | 'open';
const setupMode = ref<SetupMode>('create');

const chooseSetupMode = (mode: 'create' | 'open') => {
  setupMode.value = mode;
  workspacePathOption.value = mode === 'create' ? 'default' : 'custom';
  customWorkspacePath.value =
    mode === 'create' ? defaultWorkspacePath.value : '';
  step.value = 1;
};

const normalizeAppDataPath = (path: string): string =>
  dataPathOption.value === 'custom'
    ? appendSetupAppFolder(path, defaultDataPath.value)
    : path;

const normalizeWorkspacePath = (path: string): string =>
  setupMode.value === 'create'
    ? appendSetupAppFolder(path, defaultWorkspacePath.value)
    : path;

const onAppDataPathBlur = () => {
  customDataPath.value = normalizeAppDataPath(customDataPath.value);
};

const onWorkspacePathBlur = () => {
  customWorkspacePath.value = normalizeWorkspacePath(customWorkspacePath.value);
};

const joinPath = (base: string, child: string) => {
  if (!base) return child;
  const separator = base.includes('\\') ? '\\' : '/';
  return `${base.replace(/[\\/]+$/, '')}${separator}${child}`;
};

const finalDataPath = computed(() => {
  return dataPathOption.value === 'default'
    ? defaultDataPath.value
    : customDataPath.value;
});

const finalWorkspacePath = computed(() => {
  return workspacePathOption.value === 'default'
    ? defaultWorkspacePath.value
    : customWorkspacePath.value;
});

const defaultPluginPackagesPath = computed(() => {
  return joinPath(finalDataPath.value, 'plugins');
});

const finalPluginRootPath = computed(() => {
  return pluginPathOption.value === 'default'
    ? finalDataPath.value
    : customPluginInstallPath.value;
});

const finalPluginPackagesPath = computed(() => {
  const root = finalPluginRootPath.value;
  if (!root) return '';
  return /[\\/]plugins$/i.test(root) ? root : joinPath(root, 'plugins');
});

onMounted(async () => {
  try {
    version.value = await getVersion();
    // 应用数据目录保存数据库和全局配置，工作区目录保存 Markdown 知识资产。
    const info = await invoke<{
      path: string;
      source: 'default' | 'custom';
      recommendedPath?: string;
    }>('get_data_dir_info');
    const recommendedPath = info.recommendedPath || info.path;
    defaultDataPath.value = recommendedPath;
    customDataPath.value = info.path;
    dataPathOption.value = info.source === 'default' ? 'default' : 'custom';
    defaultWorkspacePath.value = await invoke<string>(
      'get_default_workspace_dir'
    );
    customWorkspacePath.value = defaultWorkspacePath.value;
    customPluginInstallPath.value = defaultPluginPackagesPath.value;
  } catch (error) {
    console.error('获取初始化信息失败:', error);
  }

  nextTick(() => {
    emit('setup_ready');
  });
});

watch(defaultPluginPackagesPath, (path) => {
  if (pluginPathOption.value === 'default') {
    customPluginInstallPath.value = path;
  }
});

const prevStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = async () => {
  // 每个路径步骤只验证当前项，保存统一放到最后完成步骤。
  if (step.value === 1) {
    if (dataPathOption.value === 'custom') {
      onAppDataPathBlur();
      if (!customDataPath.value) {
        modal.msg(t('setup.selectAppDataDir'), 'warning');
        return;
      }
    }
  }

  if (step.value === 2) {
    if (workspacePathOption.value === 'custom' && !customWorkspacePath.value) {
      modal.msg(t('setup.selectDir'), 'warning');
      return;
    }

    if (workspacePathOption.value === 'custom') onWorkspacePathBlur();
  }

  if (step.value === 3) {
    if (pluginPathOption.value === 'custom' && !customPluginInstallPath.value) {
      modal.msg(t('setup.selectPluginInstallDir'), 'warning');
      return;
    }
  }

  if (step.value < steps.value.length - 1) {
    step.value++;
  }
};

const selectAppDataPath = async () => {
  const selected = await pickSetupDirectory(
    t('setup.selectAppDataDirTitle'),
    '选择应用数据目录失败:'
  );
  if (!selected) return;
  customDataPath.value = normalizeAppDataPath(selected);
  dataPathOption.value = 'custom';
  if (pluginPathOption.value === 'default') {
    customPluginInstallPath.value = defaultPluginPackagesPath.value;
  }
};

const selectWorkspacePath = async () => {
  const selected = await pickSetupDirectory(
    t('setup.selectDirTitle'),
    '选择目录失败:'
  );
  if (!selected) return;
  customWorkspacePath.value = normalizeWorkspacePath(selected);
  workspacePathOption.value = 'custom';
};

const selectPluginInstallPath = async () => {
  const selected = await pickSetupDirectory(
    t('setup.selectPluginInstallDirTitle'),
    '选择插件安装目录失败:'
  );
  if (!selected) return;
  customPluginInstallPath.value = selected;
  pluginPathOption.value = 'custom';
};

const completeSetup = async () => {
  completing.value = true;
  try {
    const appDataPath = finalDataPath.value;
    const workspacePath = finalWorkspacePath.value;
    if (!appDataPath) {
      modal.msg(t('setup.selectAppDataDir'), 'warning');
      completing.value = false;
      return;
    }
    if (!workspacePath) {
      modal.msg(t('setup.selectDir'), 'warning');
      completing.value = false;
      return;
    }

    // 1. 初始化应用数据目录，并保存 Markdown 工作区根目录。
    try {
      const actualDataPath = await invoke<string>('set_data_dir_from_setup', {
        path: appDataPath
      });
      defaultDataPath.value = actualDataPath;
      if (dataPathOption.value === 'custom') {
        customDataPath.value = actualDataPath;
      }
      await invoke('set_workspace_root_from_setup', {
        path: workspacePath,
        create: setupMode.value === 'create'
      });
      await invoke('set_plugin_install_dir', {
        path:
          pluginPathOption.value === 'custom'
            ? customPluginInstallPath.value
            : null
      });
    } catch (error: any) {
      modal.msg(`${t('setup.pathError')}: ${error}`, 'error');
      completing.value = false;
      return;
    }

    // 2. 保存语言设置到后端（更新 app.json）
    store.language = language.value;
    await invoke('set_language', { language: language.value });

    // 3. 标记设置已完成
    await invoke('set_setup_completed');

    modal.msg(t('setup.setupComplete'));

    // 4. 关闭设置向导窗口并重启应用
    await invoke('close_setup_window');
  } catch (error: any) {
    modal.msg(`${t('setup.setupFailed')}: ${error}`, 'error');
  } finally {
    completing.value = false;
  }
};
</script>

<style scoped lang="scss">
.setup-container {
  @apply w-full h-full rounded-xl overflow-hidden bg-panel;

  --setup-bg: var(--panel-bg, #fbfcff);
  --setup-content-bg: linear-gradient(
    180deg,
    rgb(255 255 255 / 100%),
    rgb(248 250 252 / 92%)
  );
  --setup-header-bg: linear-gradient(
    180deg,
    rgb(255 255 255 / 94%),
    rgb(248 250 252 / 82%)
  );
  --setup-footer-bg: rgb(248 250 252 / 92%);
  --setup-card-bg: rgb(255 255 255 / 86%);
  --setup-soft-bg: rgb(241 245 249 / 90%);
  --setup-option-hover: rgb(59 130 246 / 6%);
  --setup-option-selected: rgb(59 130 246 / 8%);
  --setup-border: rgb(148 163 184 / 18%);
  --setup-border-strong: rgb(148 163 184 / 28%);
  --setup-text: var(--panel-text, #0f172a);
  --setup-muted: var(--panel-text-secondary, #64748b);
  --setup-shadow: 0 18px 48px rgb(15 23 42 / 12%);

  color: var(--setup-text);
  background: var(--setup-bg);
  border: 1px solid var(--setup-border-strong);
  box-shadow: var(--setup-shadow);
}

:global(html.dark .setup-container),
:global(.dark .setup-container) {
  --setup-bg: var(--panel-bg, #1e1e1e);
  --setup-content-bg: linear-gradient(
    180deg,
    rgb(30 30 30 / 100%),
    rgb(24 24 24 / 96%)
  );
  --setup-header-bg: linear-gradient(
    180deg,
    rgb(42 42 42 / 96%),
    rgb(32 32 32 / 92%)
  );
  --setup-footer-bg: rgb(32 32 32 / 94%);
  --setup-card-bg: rgb(36 36 36 / 96%);
  --setup-soft-bg: rgb(42 42 42 / 92%);
  --setup-option-hover: rgb(95 116 243 / 12%);
  --setup-option-selected: rgb(95 116 243 / 16%);
  --setup-border: rgb(255 255 255 / 8%);
  --setup-border-strong: rgb(255 255 255 / 12%);
  --setup-text: var(--panel-text, #e5e7eb);
  --setup-muted: var(--panel-text-secondary, #9ca3af);
  --setup-shadow: 0 18px 48px rgb(0 0 0 / 34%);
}

.setup-card {
  @apply w-full h-full flex flex-col overflow-hidden;
}

.welcome-drag-region {
  @apply h-8 w-full shrink-0;

  background: var(--setup-header-bg);
  -webkit-app-region: drag;
}

.setup-steps {
  @apply flex items-center justify-center gap-4 py-4 px-6;
  @apply cursor-move select-none;

  -webkit-app-region: drag;
  background: var(--setup-header-bg);
  border-bottom: 1px solid var(--setup-border);

  /* Minimalist step indicator */
  .step {
    @apply flex items-center gap-2;

    opacity: 0.5;
    transition:
      opacity 0.3s,
      color 0.3s;

    &.active {
      color: var(--setup-text);
      opacity: 1;

      .step-dot {
        color: white;
        background-color: var(--el-color-primary);
        border-color: var(--el-color-primary);
      }
    }

    &.completed {
      color: var(--el-color-primary);
      opacity: 1;

      .step-dot {
        color: var(--el-color-primary);
        background-color: transparent;
        border-color: var(--el-color-primary);
      }
    }
  }
}

.step-dot {
  @apply w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium;

  background-color: transparent;
  border: 1px solid rgb(95 116 243 / 34%);
  transition: all 0.3s ease;
}

.step-label {
  @apply text-xs font-medium hidden sm:block;
}

.setup-content {
  @apply flex-1 min-h-0 px-8 pt-3 pb-2 flex flex-col items-center justify-start;

  overflow: hidden;
  background: var(--setup-content-bg);
}

.step-page {
  @apply flex flex-col items-center text-center w-full max-w-lg flex-1 min-h-0;

  animation: fadeIn 0.3s ease-out;

  &.welcome-page {
    @apply justify-start gap-3 pb-2;
  }

  &.path-step-page {
    @apply justify-start;
  }

  &.complete-page {
    @apply justify-start;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-header {
  @apply flex flex-col items-center flex-shrink-0;
}

.welcome-icon {
  @apply mb-2 rounded-2xl p-3;

  background: rgb(95 116 243 / 12%);
  border: 1px solid rgb(95 116 243 / 18%);
}

.app-logo {
  @apply w-14 h-14 object-contain;

  filter: drop-shadow(0 8px 16px rgb(15 23 42 / 14%));
}

.welcome-title {
  @apply text-xl font-semibold mb-0.5;

  color: var(--setup-text);
  letter-spacing: 0;
}

.app-version {
  @apply text-xs font-mono mb-1;

  color: var(--setup-muted);
}

.welcome-actions {
  @apply flex flex-col items-center gap-4 w-full max-w-lg;
}

.welcome-actions.options-card {
  @apply w-full px-3 gap-0 rounded-lg overflow-hidden;

  background: var(--setup-card-bg);
  border: 1px solid var(--setup-border);
  box-shadow: 0 10px 28px rgb(15 23 42 / 8%);
}

.option-row {
  @apply flex items-center w-full gap-4 cursor-pointer transition-all;

  min-height: 3.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--setup-border);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: var(--setup-option-hover);
  }
}

.option-row .option-info {
  @apply flex-1 min-w-0 text-left;
}

.option-row .option-title {
  @apply font-medium text-sm leading-tight;

  margin-bottom: 0.125rem;
  color: var(--setup-text);
}

.option-row .option-desc {
  @apply text-xs leading-snug;

  overflow: hidden;
  color: var(--setup-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option-btn {
  flex-shrink: 0;
  width: 5rem;
  margin-left: auto;
}

.login-card {
  @apply w-full max-w-md text-left rounded-xl flex-shrink-0;

  padding: 1rem 1.25rem;
  background: rgb(37 40 54 / 85%);
  border: 1px solid rgb(93 109 253 / 18%);
  box-shadow: 0 4px 24px rgb(0 0 0 / 20%);
}

.back-btn {
  @apply mb-2;
}

.login-form-title {
  @apply text-base font-semibold mb-0.5;

  color: #f0f1f4;
}

.login-form-desc {
  @apply text-xs mb-4;

  color: rgb(148 163 184 / 85%);
}

.login-form {
  @apply space-y-3;
}

.login-form .form-row {
  @apply flex flex-col gap-1.5;
}

.login-form .form-label {
  @apply text-sm;

  color: rgb(148 163 184 / 90%);
}

.login-input {
  @apply w-full;

  :deep(.el-input__wrapper) {
    height: 2.25rem;
    background: rgb(26 27 38 / 80%) !important;
    border-radius: 8px;
    box-shadow: 0 0 0 1px rgb(93 109 253 / 20%) inset !important;
  }
}

.login-submit-btn {
  @apply w-full mt-4;
}

.welcome-desc-text {
  @apply text-xs text-center px-4 leading-relaxed mt-3 flex-shrink-0 max-w-md;

  color: var(--setup-muted);
}

.language-footer {
  @apply mt-2 flex-shrink-0;
}

.lang-select {
  width: 140px;

  :deep(.el-input__wrapper) {
    padding: 0 8px;
    background: var(--setup-card-bg) !important;
    border-radius: 8px;
    box-shadow: 0 0 0 1px var(--setup-border-strong) !important;

    &:hover {
      box-shadow: 0 0 0 1px rgb(59 130 246 / 38%) !important;
    }

    &.is-focus {
      box-shadow: 0 0 0 1px var(--el-color-primary) !important;
    }

    .el-input__inner {
      font-size: 12px;
      color: var(--setup-text);
      text-align: center;
    }
  }
}

.step-title {
  @apply text-lg font-semibold mb-2;

  color: var(--setup-text);
}

.step-desc {
  @apply mb-8 text-sm;

  color: var(--setup-muted);

  &.compact {
    @apply mb-5;
  }
}

.section-header {
  @apply text-left mb-2;
}

.section-title {
  @apply text-sm font-medium;

  color: var(--setup-text);
}

.section-desc {
  @apply text-xs leading-relaxed mt-1;

  color: var(--setup-muted);
}

.path-tip {
  @apply flex items-start gap-2 mt-4 text-xs p-3 rounded-lg;

  color: var(--setup-muted);
  text-align: left;
  background: rgb(14 165 233 / 7%);
  border: 1px solid rgb(14 165 233 / 14%);
}

.complete-icon {
  @apply mb-4;

  filter: drop-shadow(0 0 15px rgb(16 185 129 / 30%));
}

.summary {
  @apply w-full mt-3 p-3 rounded-lg text-left flex flex-col gap-2;

  background: var(--setup-card-bg);
  border: 1px solid var(--setup-border);
  box-shadow: 0 10px 28px rgb(15 23 42 / 7%);
}

.summary-item {
  @apply flex flex-col gap-1;
}

.summary-label {
  @apply text-xs uppercase tracking-wider;

  color: var(--setup-muted);
}

.summary-value {
  @apply text-xs font-mono p-2 rounded;

  overflow: hidden;
  color: var(--setup-text);
  text-overflow: ellipsis;
  white-space: nowrap;
  background: var(--setup-soft-bg);
}

.setup-footer {
  @apply flex items-center gap-3 px-8 py-4;

  background: var(--setup-footer-bg);
  border-top: 1px solid var(--setup-border);
}
</style>
