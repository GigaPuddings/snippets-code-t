<template>
  <div class="setup-container">
    <div class="setup-card">
      <!-- 步骤指示器 - 仅在非欢迎页显示 -->
      <div v-if="step > 0" class="setup-steps" data-tauri-drag-region>
        <div v-for="(s, i) in steps" :key="i" :class="['step', { active: step === i, completed: step > i }]">
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
            <p class="app-version">{{ $t('setup.versionLabel') }} {{ version }}</p>
          </div>


          <!-- 主视图：三选项 -->
          <div class="welcome-actions options-card">
            <div
              class="option-row"
              @click="chooseSetupMode('create')"
            >
              <div class="option-info">
                <div class="option-title">{{ $t('setup.createWorkspace') }}</div>
                <div class="option-desc">{{ $t('setup.createWorkspaceDesc') }}</div>
              </div>
              <CustomButton type="primary" size="small" class="option-btn">{{ $t('setup.create') }}</CustomButton>
            </div>
            <div
              class="option-row"
              @click="chooseSetupMode('open')"
            >
              <div class="option-info">
                <div class="option-title">{{ $t('setup.openWorkspace') }}</div>
                <div class="option-desc">{{ $t('setup.openWorkspaceDesc') }}</div>
              </div>
              <CustomButton type="default" size="small" class="option-btn">{{ $t('setup.open') }}</CustomButton>
            </div>
          </div>
          <p class="welcome-desc-text">{{ $t('setup.welcomeDesc') }}</p>

          <!-- 语言选择 -->
          <div class="language-footer">
            <el-select v-model="language" class="lang-select dark-input" popper-class="dark-select-popper"
              @change="onLanguageChange">
              <el-option v-for="lang in languages" :key="lang.value" :label="lang.label" :value="lang.value">
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

          <section class="path-section">
            <div class="path-options">
              <div :class="['path-option', { selected: dataPathOption === 'default' }]" @click="dataPathOption = 'default'">
                <div class="option-info">
                  <div class="option-title">{{ $t('setup.defaultAppDataDir') }}</div>
                  <div class="option-desc">{{ defaultDataPath }}</div>
                </div>
                <div class="option-action">
                  <div class="radio-circle">
                    <div v-if="dataPathOption === 'default'" class="radio-dot"></div>
                  </div>
                </div>
              </div>

              <div :class="['path-option', { selected: dataPathOption === 'custom' }]" @click="dataPathOption = 'custom'">
                <div class="option-info">
                  <div class="option-title">{{ $t('setup.customAppDataDir') }}</div>
                  <div v-if="dataPathOption === 'custom'" class="custom-path-input">
                    <el-input v-model="customDataPath" :placeholder="$t('common.browse')" class="path-input dark-input"
                      clearable @blur="onAppDataPathBlur" />
                    <CustomButton type="primary" size="small" @click.stop="selectAppDataPath" class="browse-btn">
                      {{ $t('common.browse') }}
                    </CustomButton>
                  </div>
                  <div v-else class="option-desc">{{ $t('setup.customAppDataDirDesc') }}</div>
                </div>
                <div class="option-action">
                  <div class="radio-circle">
                    <div v-if="dataPathOption === 'custom'" class="radio-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Markdown 工作区 -->
        <div v-if="step === 2" class="step-page path-step-page">
          <h2 class="step-title">{{ $t('setup.workspaceDir') }}</h2>
          <p class="step-desc compact">{{ $t('setup.workspaceDirDesc') }}</p>

          <section class="path-section">
            <div class="path-options">
              <div :class="['path-option', { selected: workspacePathOption === 'default' }]" @click="workspacePathOption = 'default'">
                <div class="option-info">
                  <div class="option-title">{{ $t('setup.defaultLocation') }}</div>
                  <div class="option-desc">{{ defaultWorkspacePath }}</div>
                </div>
                <div class="option-action">
                  <div class="radio-circle">
                    <div v-if="workspacePathOption === 'default'" class="radio-dot"></div>
                  </div>
                </div>
              </div>

              <div :class="['path-option', { selected: workspacePathOption === 'custom' }]" @click="workspacePathOption = 'custom'">
                <div class="option-info">
                  <div class="option-title">{{ $t('setup.customLocation') }}</div>
                  <div v-if="workspacePathOption === 'custom'" class="custom-path-input">
                    <el-input v-model="customWorkspacePath" :placeholder="$t('common.browse')" class="path-input dark-input"
                      clearable @blur="onWorkspacePathBlur" />
                    <CustomButton type="primary" size="small" @click.stop="selectWorkspacePath" class="browse-btn">
                      {{ $t('common.browse') }}
                    </CustomButton>
                  </div>
                  <div v-else class="option-desc">{{ $t('setup.customLocationDesc') }}</div>
                </div>
                <div class="option-action">
                  <div class="radio-circle">
                    <div v-if="workspacePathOption === 'custom'" class="radio-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="path-tip">
            <Info theme="outline" size="16" />
            <span>{{ $t('setup.pathTip') }}</span>
          </div>
        </div>

        <!-- 插件安装位置 -->
        <div v-if="step === 3" class="step-page path-step-page">
          <h2 class="step-title">{{ $t('setup.pluginInstallDir') }}</h2>
          <p class="step-desc compact">{{ $t('setup.pluginInstallDirDesc') }}</p>

          <section class="path-section">
            <div class="path-options">
              <div :class="['path-option', { selected: pluginPathOption === 'default' }]" @click="pluginPathOption = 'default'">
                <div class="option-info">
                  <div class="option-title">{{ $t('setup.defaultPluginInstallDir') }}</div>
                  <div class="option-desc">{{ defaultPluginPackagesPath }}</div>
                </div>
                <div class="option-action">
                  <div class="radio-circle">
                    <div v-if="pluginPathOption === 'default'" class="radio-dot"></div>
                  </div>
                </div>
              </div>

              <div :class="['path-option', { selected: pluginPathOption === 'custom' }]" @click="pluginPathOption = 'custom'">
                <div class="option-info">
                  <div class="option-title">{{ $t('setup.customPluginInstallDir') }}</div>
                  <div v-if="pluginPathOption === 'custom'" class="custom-path-input">
                    <el-input v-model="customPluginInstallPath" :placeholder="$t('common.browse')" class="path-input dark-input"
                      clearable />
                    <CustomButton type="primary" size="small" @click.stop="selectPluginInstallPath" class="browse-btn">
                      {{ $t('common.browse') }}
                    </CustomButton>
                  </div>
                  <div v-else class="option-desc">{{ $t('setup.customPluginInstallDirDesc') }}</div>
                </div>
                <div class="option-action">
                  <div class="radio-circle">
                    <div v-if="pluginPathOption === 'custom'" class="radio-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- 完成 -->
        <div v-if="step === 4" class="step-page complete-page">
          <div class="complete-icon">
            <CheckOne theme="filled" size="48" fill="#10b981" />
          </div>
          <h2 class="step-title">{{ $t('setup.completeTitle') }}</h2>
          <p class="step-desc compact">{{ $t('setup.completeDesc') }}</p>
          <div class="summary">
            <div class="summary-item">
              <span class="summary-label">{{ $t('setup.appDataPath') }}:</span>
              <span class="summary-value" :title="finalDataPath">{{ finalDataPath }}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">{{ $t('setup.workspacePath') }}:</span>
              <span class="summary-value" :title="finalWorkspacePath">{{ finalWorkspacePath }}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">{{ $t('setup.pluginInstallPath') }}:</span>
              <span class="summary-value" :title="finalPluginPackagesPath">{{ finalPluginPackagesPath }}</span>
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
        <CustomButton v-if="step < steps.length - 1" type="primary" @click="nextStep">
          {{ $t('common.next') }}
        </CustomButton>
        <CustomButton v-else type="primary" @click="completeSetup" :loading="completing">
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
import { open } from '@tauri-apps/plugin-dialog';
import { CustomButton } from '@/components/UI';
import { Info, CheckOne } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { setLocale, type LocaleType } from '@/i18n';
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

const language = ref<LocaleType>(store.language || 'zh-CN');
const version = ref('');

// 语言切换处理
const onLanguageChange = async (value: LocaleType) => {
  setLocale(value);
  // 同步语言设置到后端（为托盘菜单准备）
  try {
    await invoke('set_language', { language: value });
  } catch (error) {
    console.error('Failed to sync language to backend:', error);
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
  customWorkspacePath.value = mode === 'create' ? defaultWorkspacePath.value : '';
  step.value = 1;
};

// 检查路径是否需要添加 snippets-code
const needsAppFolder = (path: string) => {
  if (setupMode.value !== 'create' || !path || path === defaultWorkspacePath.value) return false;
  const lowerPath = path.toLowerCase();
  const endsWithAppFolder = lowerPath.endsWith('snippets-code') || lowerPath.endsWith('snippets code');
  return !endsWithAppFolder && !lowerPath.includes('com.snippets-code.app');
};

const needsAppDataFolder = (path: string) => {
  if (dataPathOption.value !== 'custom' || !path || path === defaultDataPath.value) return false;
  const lowerPath = path.toLowerCase();
  const endsWithAppFolder = lowerPath.endsWith('snippets-code') || lowerPath.endsWith('snippets code');
  return !endsWithAppFolder && !lowerPath.includes('com.snippets-code.app');
};

const normalizeAppDataPath = () => {
  if (needsAppDataFolder(customDataPath.value)) {
    customDataPath.value = customDataPath.value.replace(/[\\/]+$/, '') + '\\snippets-code';
  }
};

const onAppDataPathBlur = () => {
  normalizeAppDataPath();
};

// 失焦时自动追加 snippets-code
const onWorkspacePathBlur = () => {
  if (needsAppFolder(customWorkspacePath.value)) {
    customWorkspacePath.value = customWorkspacePath.value.replace(/[\\/]+$/, '') + '\\snippets-code';
  }
};

const joinPath = (base: string, child: string) => {
  if (!base) return child;
  const separator = base.includes('\\') ? '\\' : '/';
  return `${base.replace(/[\\/]+$/, '')}${separator}${child}`;
};

const finalDataPath = computed(() => {
  return dataPathOption.value === 'default' ? defaultDataPath.value : customDataPath.value;
});

const finalWorkspacePath = computed(() => {
  return workspacePathOption.value === 'default' ? defaultWorkspacePath.value : customWorkspacePath.value;
});

const defaultPluginPackagesPath = computed(() => {
  return joinPath(finalDataPath.value, 'plugins');
});

const finalPluginRootPath = computed(() => {
  return pluginPathOption.value === 'default' ? finalDataPath.value : customPluginInstallPath.value;
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
    const info = await invoke<{ path: string; source: string }>('get_data_dir_info');
    defaultDataPath.value = info.path;
    customDataPath.value = info.path;
    defaultWorkspacePath.value = await invoke<string>('get_default_workspace_dir');
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
      normalizeAppDataPath();
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

    // 验证自定义路径格式（不调用后端）
    if (workspacePathOption.value === 'custom' && customWorkspacePath.value) {
      // 确保路径格式正确
      if (needsAppFolder(customWorkspacePath.value)) {
        customWorkspacePath.value = customWorkspacePath.value.replace(/[\\/]+$/, '') + '\\snippets-code';
      }
    }
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
  try {
    const selected = await open({
      directory: true,
      title: t('setup.selectAppDataDirTitle')
    });
    if (selected) {
      let path = selected as string;
      if (needsAppDataFolder(path)) {
        path = path.replace(/[\\/]+$/, '') + '\\snippets-code';
      }
      customDataPath.value = path;
      dataPathOption.value = 'custom';
      if (pluginPathOption.value === 'default') {
        customPluginInstallPath.value = defaultPluginPackagesPath.value;
      }
    }
  } catch (error) {
    console.error('选择应用数据目录失败:', error);
  }
};

const selectWorkspacePath = async () => {
  try {
    const selected = await open({
      directory: true,
      title: t('setup.selectDirTitle')
    });
    if (selected) {
      let path = selected as string;
      // 新建工作区时，如果选择的是父目录，自动追加 snippets-code。
      // 打开工作区时必须保留用户选择的已有目录。
      if (needsAppFolder(path)) {
        path = path.replace(/[\\/]+$/, '') + '\\snippets-code';
      }
      customWorkspacePath.value = path;
      workspacePathOption.value = 'custom';
    }
  } catch (error) {
    console.error('选择目录失败:', error);
  }
};

const selectPluginInstallPath = async () => {
  try {
    const selected = await open({
      directory: true,
      title: t('setup.selectPluginInstallDirTitle')
    });
    if (selected) {
      customPluginInstallPath.value = selected as string;
      pluginPathOption.value = 'custom';
    }
  } catch (error) {
    console.error('选择插件安装目录失败:', error);
  }
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
      const actualDataPath = await invoke<string>('set_data_dir_from_setup', { path: appDataPath });
      defaultDataPath.value = actualDataPath;
      if (dataPathOption.value === 'custom') {
        customDataPath.value = actualDataPath;
      }
      await invoke('set_workspace_root_from_setup', {
        path: workspacePath,
        create: setupMode.value === 'create'
      });
      await invoke('set_plugin_install_dir', {
        path: pluginPathOption.value === 'custom' ? customPluginInstallPath.value : null
      });
    } catch (error: any) {
      modal.msg(`${t('setup.pathError') || '路径设置失败'}: ${error}`, 'error');
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
  color: var(--panel-text-color, #0f172a);
  border: 1px solid rgb(148 163 184 / 18%);
  box-shadow: 0 18px 48px rgb(15 23 42 / 12%);
}

.setup-card {
  @apply w-full h-full flex flex-col overflow-hidden;
}

.welcome-drag-region {
  @apply h-8 w-full shrink-0;
  background: linear-gradient(180deg, rgb(255 255 255 / 92%), rgb(248 250 252 / 70%));
  -webkit-app-region: drag;
}

.setup-steps {
  @apply flex items-center justify-center gap-4 py-4 px-6;
  @apply cursor-move select-none;
  -webkit-app-region: drag;
  background: linear-gradient(180deg, rgb(255 255 255 / 94%), rgb(248 250 252 / 82%));
  border-bottom: 1px solid rgb(148 163 184 / 14%);

  /* Minimalist step indicator */
  .step {
    @apply flex items-center gap-2;
    opacity: 0.5;
    transition: opacity 0.3s, color 0.3s;

    &.active {
      opacity: 1;
      color: #0f172a;

      .step-dot {
        background-color: var(--el-color-primary);
        border-color: var(--el-color-primary);
        color: white;
      }
    }

    &.completed {
      opacity: 1;
      color: var(--el-color-primary);

      .step-dot {
        background-color: transparent;
        border-color: var(--el-color-primary);
        color: var(--el-color-primary);
      }
    }
  }
}

.step-dot {
  @apply w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium;
  border: 1px solid rgb(59 130 246 / 28%);
  background-color: transparent;
  transition: all 0.3s ease;
}

.step-label {
  @apply text-xs font-medium hidden sm:block;
}

.setup-content {
  @apply flex-1 min-h-0 px-8 pt-3 pb-2 flex flex-col items-center justify-start;
  overflow: hidden;
  background: linear-gradient(180deg, rgb(255 255 255 / 100%), rgb(248 250 252 / 92%));
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
  background: rgb(59 130 246 / 8%);
  border: 1px solid rgb(59 130 246 / 12%);
}

.app-logo {
  @apply w-14 h-14 object-contain;
  filter: drop-shadow(0 8px 16px rgb(15 23 42 / 14%));
}

.welcome-title {
  @apply text-xl font-semibold mb-0.5;
  color: #0f172a;
  letter-spacing: 0;
}

.app-version {
  @apply text-xs font-mono mb-1;
  color: #64748b;
}

.welcome-actions {
  @apply flex flex-col items-center gap-4 w-full max-w-lg;
}

.welcome-actions.options-card {
  @apply w-full px-3 gap-0 rounded-lg overflow-hidden;
  background: #fff;
  border: 1px solid rgb(148 163 184 / 18%);
  box-shadow: 0 10px 28px rgb(15 23 42 / 8%);
}

.option-row {
  @apply flex items-center w-full gap-4 cursor-pointer transition-all;
  min-height: 3.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgb(59 130 246 / 6%);
  }
}

.option-row .option-info {
  @apply flex-1 min-w-0 text-left;
}

.option-row .option-title {
  @apply font-medium text-sm leading-tight;
  color: #0f172a;
  margin-bottom: 0.125rem;
}

.option-row .option-desc {
  @apply text-xs leading-snug;
  color: #64748b;
}

.option-btn {
  flex-shrink: 0;
  width: 5rem;
  margin-left: auto;
}

.login-card {
  @apply w-full max-w-md text-left rounded-xl flex-shrink-0;
  padding: 1rem 1.25rem;
  background: rgba(37, 40, 54, 0.85);
  border: 1px solid rgba(93, 109, 253, 0.18);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
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
  color: rgba(148, 163, 184, 0.85);
}

.login-form {
  @apply space-y-3;
}

.login-form .form-row {
  @apply flex flex-col gap-1.5;
}

.login-form .form-label {
  @apply text-sm;
  color: rgba(148, 163, 184, 0.9);
}

.login-input {
  @apply w-full;

  :deep(.el-input__wrapper) {
    height: 2.25rem;
  }
}

.login-input :deep(.el-input__wrapper) {
  background: rgba(26, 27, 38, 0.8) !important;
  box-shadow: 0 0 0 1px rgba(93, 109, 253, 0.2) inset !important;
  border-radius: 8px;
}

.login-submit-btn {
  @apply w-full mt-4;
}

.welcome-desc-text {
  @apply text-xs text-center px-4 leading-relaxed mt-3 flex-shrink-0 max-w-md;
  color: #64748b;
}

.language-footer {
  @apply mt-2 flex-shrink-0;
}

.lang-select {
  width: 140px;

  :deep(.el-input__wrapper) {
    background: #fff !important;
    box-shadow: 0 0 0 1px rgb(148 163 184 / 26%) !important;
    border-radius: 8px;
    padding: 0 8px;

    &:hover {
      box-shadow: 0 0 0 1px rgb(59 130 246 / 38%) !important;
    }

    &.is-focus {
      box-shadow: 0 0 0 1px var(--el-color-primary) !important;
    }

    .el-input__inner {
      color: #475569;
      font-size: 12px;
      text-align: center;
    }
  }
}


.step-title {
  @apply text-lg font-semibold mb-2;
  color: #0f172a;
}

.step-desc {
  @apply mb-8 text-sm;
  color: #64748b;

  &.compact {
    @apply mb-5;
  }
}

.path-options {
  @apply w-full space-y-3;
}

.path-section {
  @apply w-full;
}

.section-header {
  @apply text-left mb-2;
}

.section-title {
  @apply text-sm font-medium;
  color: #0f172a;
}

.section-desc {
  @apply text-xs leading-relaxed mt-1;
  color: #64748b;
}

.path-option {
  @apply flex items-center justify-between gap-4 p-3 rounded-lg cursor-pointer transition-all;
  background: #fff;
  border: 1px solid rgb(148 163 184 / 18%);
  min-height: 4.75rem;
  box-shadow: 0 8px 22px rgb(15 23 42 / 5%);

  &:hover {
    border-color: rgb(59 130 246 / 32%);
    background: rgb(59 130 246 / 4%);
  }

  &.selected {
    border-color: rgb(59 130 246 / 48%);
    background: rgb(59 130 246 / 7%);

    .radio-dot {
      background-color: var(--el-color-primary);
    }

    .radio-circle {
      border-color: var(--el-color-primary);
    }
  }
}

.option-info {
  @apply flex-1 min-w-0 text-left;
}

.option-action {
  @apply flex-shrink-0;
}

.radio-circle {
  @apply w-4 h-4 rounded-full flex items-center justify-center;
  border: 1px solid rgb(59 130 246 / 40%);
  transition: all 0.2s;
}

.radio-dot {
  @apply w-2 h-2 rounded-full;
  background-color: transparent;
}

.option-title {
  @apply font-medium text-sm mb-0.5;
  color: #0f172a;
}

.option-desc {
  @apply text-xs;
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.custom-path-input {
  @apply flex items-center gap-2 mt-2;

  .path-input {
    @apply flex-1;

  :deep(.el-input__wrapper) {
    background: #fff;
    box-shadow: 0 0 0 1px rgb(148 163 184 / 28%) inset;
    border-radius: 8px;

      &:hover {
        box-shadow: 0 0 0 1px rgb(59 130 246 / 36%) inset;
      }

      &.is-focus {
        box-shadow: 0 0 0 1px var(--el-color-primary) inset;
      }
    }
  }
}

.browse-btn {
  @apply flex-shrink-0 whitespace-nowrap;
}

.path-tip {
  @apply flex items-start gap-2 mt-4 text-xs p-3 rounded-lg;
  background: rgb(14 165 233 / 7%);
  border: 1px solid rgb(14 165 233 / 14%);
  color: #475569;
  text-align: left;
}

.complete-icon {
  @apply mb-4;
  filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.3));
}

.summary {
  @apply w-full mt-3 p-3 rounded-lg text-left flex flex-col gap-2;
  background: #fff;
  border: 1px solid rgb(148 163 184 / 18%);
  box-shadow: 0 10px 28px rgb(15 23 42 / 7%);
}

.summary-item {
  @apply flex flex-col gap-1;
}

.summary-label {
  @apply text-xs uppercase tracking-wider;
  color: #64748b;
}

.summary-value {
  @apply text-xs font-mono p-2 rounded;
  color: #0f172a;
  background: rgb(241 245 249 / 90%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.setup-footer {
  @apply flex items-center gap-3 px-8 py-4;
  border-top: 1px solid rgb(148 163 184 / 14%);
  background: rgb(248 250 252 / 92%);
}
</style>
