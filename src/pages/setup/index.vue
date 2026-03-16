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
        <!-- 欢迎页：三选项卡片（类 Obsidian）或 登录子视图 -->
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

        <!-- 数据目录设置 -->
        <div v-if="step === 1" class="step-page">
          <h2 class="step-title">{{ $t('setup.dataLocationTitle') }}</h2>
          <p class="step-desc">{{ $t('setup.dataLocationDesc') }}</p>

          <div class="path-options">
            <div :class="['path-option', { selected: pathOption === 'default' }]" @click="pathOption = 'default'">
              <div class="option-info">
                <div class="option-title">{{ $t('setup.defaultLocation') }}</div>
                <div class="option-desc">{{ defaultPath }}</div>
              </div>
              <div class="option-action">
                <div class="radio-circle">
                  <div v-if="pathOption === 'default'" class="radio-dot"></div>
                </div>
              </div>
            </div>

            <div :class="['path-option', { selected: pathOption === 'custom' }]" @click="pathOption = 'custom'">
              <div class="option-info">
                <div class="option-title">{{ $t('setup.customLocation') }}</div>
                <div v-if="pathOption === 'custom'" class="custom-path-input">
                  <el-input v-model="customPath" :placeholder="$t('common.browse')" class="path-input dark-input"
                    clearable @blur="onPathBlur" />
                  <CustomButton type="primary" size="small" @click.stop="selectCustomPath" class="browse-btn">
                    {{ $t('common.browse') }}
                  </CustomButton>
                </div>
                <div v-else class="option-desc">{{ $t('setup.customLocationDesc') || 'Choose a custom folder' }}</div>
              </div>
              <div class="option-action">
                <div class="radio-circle">
                  <div v-if="pathOption === 'custom'" class="radio-dot"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="path-tip">
            <Info theme="outline" size="16" />
            <span>{{ $t('setup.pathTip') }}</span>
          </div>
        </div>

        <!-- 完成 -->
        <div v-if="step === 2" class="step-page">
          <div class="complete-icon">
            <CheckOne theme="filled" size="64" fill="#10b981" />
          </div>
          <h2 class="step-title">{{ $t('setup.completeTitle') }}</h2>
          <p class="step-desc">{{ $t('setup.completeDesc') }}</p>
          <div class="summary">
            <div class="summary-item">
              <span class="summary-label">{{ $t('setup.dataPath') }}:</span>
              <span class="summary-value">{{ finalPath }}</span>
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
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
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
  { title: t('setup.dataLocation') },
  { title: t('setup.complete') }
]);

const step = ref(0);
const pathOption = ref<'default' | 'custom'>('default');
const defaultPath = ref('');
const customPath = ref('');
const completing = ref(false);

/** 引导模式：新建 / 打开 */
type SetupMode = 'create' | 'open';
const setupMode = ref<SetupMode>('create');

const chooseSetupMode = (mode: 'create' | 'open') => {
  setupMode.value = mode;
  pathOption.value = mode === 'create' ? 'default' : 'custom';
  step.value = 1;
};

// 检查路径是否需要添加 snippets-code
const needsAppFolder = (path: string) => {
  if (!path || path === defaultPath.value) return false;
  const lowerPath = path.toLowerCase();
  const endsWithAppFolder = lowerPath.endsWith('snippets-code') || lowerPath.endsWith('snippets code');
  return !endsWithAppFolder && !lowerPath.includes('com.snippets-code.app');
};

// 失焦时自动追加 snippets-code
const onPathBlur = () => {
  if (needsAppFolder(customPath.value)) {
    customPath.value = customPath.value.replace(/[\\/]+$/, '') + '\\snippets-code';
  }
};

const finalPath = computed(() => {
  return pathOption.value === 'default' ? defaultPath.value : customPath.value;
});


onMounted(async () => {
  try {
    version.value = await getVersion();
    // 获取数据目录信息
    const info = await invoke<{ path: string; source: string }>('get_data_dir_info');
    defaultPath.value = info.path;
    customPath.value = info.path;
  } catch (error) {
    console.error('获取初始化信息失败:', error);
  }
});

const prevStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = async () => {
  // 在数据目录设置步骤，只验证路径（不保存）
  if (step.value === 1) {
    if (pathOption.value === 'custom' && !customPath.value) {
      modal.msg(t('setup.selectDir'), 'warning');
      return;
    }

    // 验证自定义路径格式（不调用后端）
    if (pathOption.value === 'custom' && customPath.value) {
      // 确保路径格式正确
      if (needsAppFolder(customPath.value)) {
        customPath.value = customPath.value.replace(/[\\/]+$/, '') + '\\snippets-code';
      }
    }
  }

  if (step.value < steps.value.length - 1) {
    step.value++;
  }
};

const selectCustomPath = async () => {
  try {
    const selected = await open({
      directory: true,
      title: t('setup.selectDirTitle')
    });
    if (selected) {
      let path = selected as string;
      // 如果选择的不是应用目录，自动追加 snippets-code
      if (needsAppFolder(path)) {
        path = path.replace(/[\\/]+$/, '') + '\\snippets-code';
      }
      customPath.value = path;
    }
  } catch (error) {
    console.error('选择目录失败:', error);
  }
};

const completeSetup = async () => {
  completing.value = true;
  try {
    // 1. 保存数据目录（如果选择了自定义路径）
    if (pathOption.value === 'custom' && customPath.value && customPath.value !== defaultPath.value) {
      try {
        // 保存路径并创建数据库和 app.json
        const actualPath = await invoke<string>('set_data_dir_from_setup', { path: customPath.value });
        customPath.value = actualPath;
      } catch (error: any) {
        // 显示详细的错误信息
        modal.msg(`${t('setup.pathError') || '路径设置失败'}: ${error}`, 'error');
        completing.value = false;
        return;
      }
    } else {
      // 使用默认路径，也需要调用后端初始化数据库和创建 app.json
      try {
        await invoke<string>('set_data_dir_from_setup', { path: defaultPath.value });
      } catch (error: any) {
        modal.msg(`${t('setup.pathError') || '初始化失败'}: ${error}`, 'error');
        completing.value = false;
        return;
      }
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
  @apply w-full h-full rounded-xl overflow-hidden;
  background: linear-gradient(180deg, #1a1b26 0%, #16171f 100%);
  color: #e2e4e8;
  border: 1px solid rgba(93, 109, 253, 0.12);
}

.setup-card {
  @apply w-full h-full flex flex-col overflow-hidden;
}

.welcome-drag-region {
  @apply h-8 w-full shrink-0;
  -webkit-app-region: drag;
}

.setup-steps {
  @apply flex items-center justify-center gap-6 py-6 px-8;
  @apply cursor-move select-none;
  -webkit-app-region: drag;

  /* Minimalist step indicator */
  .step {
    @apply flex items-center gap-2;
    opacity: 0.5;
    transition: opacity 0.3s, color 0.3s;

    &.active {
      opacity: 1;
      color: #dcddde;

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
  border: 1px solid rgba(93, 109, 253, 0.3);
  background-color: transparent;
  transition: all 0.3s ease;
}

.step-label {
  @apply text-sm font-medium hidden sm:block;
}

.setup-content {
  @apply flex-1 min-h-0 px-8 pt-2 pb-2 flex flex-col items-center justify-start;
  overflow-y: auto;
}

.step-page {
  @apply flex flex-col items-center text-center w-full max-w-md flex-1 min-h-0;
  animation: fadeIn 0.3s ease-out;

  &.welcome-page {
    @apply justify-start gap-3 pb-2;
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
  @apply mb-3;
}

.app-logo {
  @apply w-16 h-16 object-contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
}

.welcome-title {
  @apply text-xl font-semibold mb-0.5;
  color: #f0f1f4;
  letter-spacing: -0.02em;
}

.app-version {
  @apply text-xs font-mono mb-1;
  color: rgba(148, 163, 184, 0.9);
}

.welcome-actions {
  @apply flex flex-col items-center gap-4 w-full max-w-lg;
}

.welcome-actions.options-card {
  @apply w-full px-4 gap-0 rounded-xl overflow-hidden;
  background: rgba(37, 40, 54, 0.85);
  border: 1px solid rgba(93, 109, 253, 0.18);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
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
    background: rgba(93, 109, 253, 0.08);
  }
}

.option-row .option-info {
  @apply flex-1 min-w-0 text-left;
}

.option-row .option-title {
  @apply font-medium text-sm leading-tight;
  color: #f0f1f4;
  margin-bottom: 0.125rem;
}

.option-row .option-desc {
  @apply text-xs leading-snug;
  color: rgba(148, 163, 184, 0.85);
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
  @apply text-xs text-center px-4 leading-relaxed mt-4 flex-shrink-0 max-w-md;
  color: rgba(148, 163, 184, 0.75);
}

.language-footer {
  @apply mt-2 flex-shrink-0;
}

.lang-select {
  width: 140px;

  :deep(.el-input__wrapper) {
    background: rgba(37, 40, 54, 0.6) !important;
    box-shadow: 0 0 0 1px rgba(93, 109, 253, 0.2) !important;
    border-radius: 8px;
    padding: 0 8px;

    &:hover {
      box-shadow: 0 0 0 1px rgba(93, 109, 253, 0.35) !important;
    }

    &.is-focus {
      box-shadow: 0 0 0 1px var(--el-color-primary) !important;
    }

    .el-input__inner {
      color: rgba(148, 163, 184, 0.95);
      font-size: 12px;
      text-align: center;
    }
  }
}


.step-title {
  @apply text-lg font-semibold mb-2;
  color: #f0f1f4;
}

.step-desc {
  @apply mb-8 text-sm;
  color: rgba(148, 163, 184, 0.9);
}

.path-options {
  @apply w-full space-y-3;
}

.path-option {
  @apply flex items-center justify-between gap-4 p-4 rounded-xl cursor-pointer transition-all;
  background: rgba(37, 40, 54, 0.85);
  border: 1px solid rgba(93, 109, 253, 0.18);

  &:hover {
    border-color: rgba(93, 109, 253, 0.35);
    background: rgba(93, 109, 253, 0.06);
  }

  &.selected {
    border-color: rgba(93, 109, 253, 0.5);
    background: rgba(93, 109, 253, 0.1);

    .radio-dot {
      background-color: var(--el-color-primary);
    }

    .radio-circle {
      border-color: var(--el-color-primary);
    }
  }
}

.option-info {
  @apply flex-1 text-left;
}

.option-action {
  @apply flex-shrink-0;
}

.radio-circle {
  @apply w-4 h-4 rounded-full flex items-center justify-center;
  border: 1px solid rgba(93, 109, 253, 0.4);
  transition: all 0.2s;
}

.radio-dot {
  @apply w-2 h-2 rounded-full;
  background-color: transparent;
}

.option-title {
  @apply font-medium text-sm mb-0.5;
  color: #f0f1f4;
}

.option-desc {
  @apply text-xs break-all;
  color: rgba(148, 163, 184, 0.85);
}

.custom-path-input {
  @apply flex items-center gap-2 mt-2;

  .path-input {
    @apply flex-1;

  :deep(.el-input__wrapper) {
    background: rgba(26, 27, 38, 0.8);
    box-shadow: 0 0 0 1px rgba(93, 109, 253, 0.2) inset;
    border-radius: 8px;

      &:hover {
        box-shadow: 0 0 0 1px rgba(93, 109, 253, 0.35) inset;
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
  @apply flex items-start gap-2 mt-6 text-xs p-3 rounded-lg;
  background: rgba(93, 109, 253, 0.06);
  border: 1px solid rgba(93, 109, 253, 0.15);
  color: rgba(148, 163, 184, 0.9);
  text-align: left;
}

.complete-icon {
  @apply mb-6;
  filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.3));
}

.summary {
  @apply w-full mt-6 p-4 rounded-xl text-left;
  background: rgba(37, 40, 54, 0.85);
  border: 1px solid rgba(93, 109, 253, 0.18);
}

.summary-item {
  @apply flex flex-col gap-1;
}

.summary-label {
  @apply text-xs uppercase tracking-wider;
  color: rgba(148, 163, 184, 0.8);
}

.summary-value {
  @apply text-sm font-mono break-all p-2 rounded;
  color: #e2e4e8;
  background: rgba(0, 0, 0, 0.25);
}

.setup-footer {
  @apply flex items-center gap-3 px-8 py-5;
  border-top: 1px solid rgba(93, 109, 253, 0.12);
  background: rgba(22, 23, 31, 0.95);
}
</style>
