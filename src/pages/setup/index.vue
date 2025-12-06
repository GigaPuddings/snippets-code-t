<template>
  <div class="setup-container">
    <div class="setup-card">
      <!-- 步骤指示器 - 支持拖拽 -->
      <div class="setup-steps" data-tauri-drag-region>
        <div
          v-for="(s, i) in steps"
          :key="i"
          :class="['step', { active: step === i, completed: step > i }]"
        >
          <div class="step-dot">{{ step > i ? '✓' : i + 1 }}</div>
          <span class="step-label">{{ s.title }}</span>
        </div>
      </div>

      <!-- 步骤内容 -->
      <div class="setup-content">
        <!-- 欢迎页 -->
        <div v-if="step === 0" class="step-page">
          <div class="welcome-icon">
            <img src="@tauri/icons/icon.png" alt="Logo" class="w-20 h-20" />
          </div>
          <h1 class="welcome-title">欢迎使用 Snippets Code</h1>
          <p class="welcome-desc">
            一款高效的代码片段管理工具，帮助您快速存储和检索代码片段。
          </p>
        </div>

        <!-- 数据目录设置 -->
        <div v-if="step === 1" class="step-page">
          <h2 class="step-title">数据存储位置</h2>
          <p class="step-desc">选择您的数据存储位置，包括数据库和配置文件。</p>

          <div class="path-options">
            <div
              :class="['path-option', { selected: pathOption === 'default' }]"
              @click="pathOption = 'default'"
            >
              <div class="option-radio">
                <div v-if="pathOption === 'default'" class="radio-dot"></div>
              </div>
              <div class="option-content">
                <div class="option-title">默认位置（推荐）</div>
                <div class="option-path">{{ defaultPath }}</div>
              </div>
            </div>

            <div
              :class="['path-option', { selected: pathOption === 'custom' }]"
              @click="pathOption = 'custom'"
            >
              <div class="option-radio">
                <div v-if="pathOption === 'custom'" class="radio-dot"></div>
              </div>
              <div class="option-content">
                <div class="option-title">自定义位置</div>
                <div v-if="pathOption === 'custom'" class="custom-path-input">
                  <el-input 
                    v-model="customPath" 
                    placeholder="输入或选择目录" 
                    class="path-input"
                    clearable
                    @blur="onPathBlur"
                  />
                  <CustomButton type="primary" size="small" @click.stop="selectCustomPath" class="browse-btn">
                    浏览
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>

          <div class="path-tip">
            <Info theme="outline" size="16" />
            <span>建议选择非系统盘位置，以便数据备份和迁移</span>
          </div>
        </div>

        <!-- 完成 -->
        <div v-if="step === 2" class="step-page">
          <div class="complete-icon">
            <CheckOne theme="filled" size="64" fill="#10b981" />
          </div>
          <h2 class="step-title">设置完成</h2>
          <p class="step-desc">您已完成初始设置，现在可以开始使用了！</p>
          <div class="summary">
            <div class="summary-item">
              <span class="summary-label">数据位置：</span>
              <span class="summary-value">{{ finalPath }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="setup-footer">
        <CustomButton v-if="step > 0" type="default" @click="prevStep">
          上一步
        </CustomButton>
        <div class="flex-1"></div>
        <CustomButton v-if="step < steps.length - 1" type="primary" @click="nextStep">
          下一步
        </CustomButton>
        <CustomButton
          v-else
          type="primary"
          @click="completeSetup"
          :loading="completing"
        >
          开始使用
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { open } from '@tauri-apps/plugin-dialog';
import { CustomButton } from '@/components/UI';
import { Info, CheckOne } from '@icon-park/vue-next';
import modal from '@/utils/modal';

defineOptions({
  name: 'SetupWizard'
});

const steps = [
  { title: '欢迎' },
  { title: '数据位置' },
  { title: '完成' }
];

const step = ref(0);
const pathOption = ref<'default' | 'custom'>('default');
const defaultPath = ref('');
const customPath = ref('');
const completing = ref(false);
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
    // 获取数据目录信息
    const info = await invoke<{ path: string; source: string }>('get_data_dir_info');
    defaultPath.value = info.path;
    customPath.value = info.path;
  } catch (error) {
    console.error('获取数据目录失败:', error);
  }
});

const prevStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = () => {
  if (step.value === 1 && pathOption.value === 'custom' && !customPath.value) {
    modal.msg('请选择数据存储目录', 'warning');
    return;
  }
  if (step.value < steps.length - 1) {
    step.value++;
  }
};

const selectCustomPath = async () => {
  try {
    const selected = await open({
      directory: true,
      title: '选择数据存储目录'
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
    // 如果选择了自定义路径，保存到配置
    if (pathOption.value === 'custom' && customPath.value && customPath.value !== defaultPath.value) {
      // 后端会返回实际使用的路径（可能添加了 snippets-code 子文件夹）
      const actualPath = await invoke<string>('set_data_dir_from_setup', { path: customPath.value });
      customPath.value = actualPath;
    }

    // 标记设置已完成
    await invoke('set_setup_completed');

    modal.msg('设置完成！');

    // 关闭设置向导窗口并打开主窗口
    await invoke('close_setup_window');
  } catch (error: any) {
    modal.msg(`设置失败: ${error}`, 'error');
  } finally {
    completing.value = false;
  }
};
</script>

<style scoped lang="scss">
.setup-container {
  @apply w-full h-full;
}

.setup-card {
  @apply w-full h-full bg-white dark:bg-gray-800 rounded-xl;
  @apply flex flex-col overflow-hidden;
}

.setup-steps {
  @apply flex items-center justify-center gap-8 py-4 px-8;
  @apply bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600;
  @apply cursor-move select-none;
}

.step {
  @apply flex items-center gap-2 text-gray-400 dark:text-gray-500;
  
  &.active {
    @apply text-blue-600 dark:text-blue-400;
    
    .step-dot {
      @apply bg-blue-600 text-white border-blue-600;
    }
  }
  
  &.completed {
    @apply text-emerald-600 dark:text-emerald-400;
    
    .step-dot {
      @apply bg-emerald-500 text-white border-emerald-500;
    }
  }
}

.step-dot {
  @apply w-7 h-7 rounded-full border-2 border-gray-300 dark:border-gray-500;
  @apply flex items-center justify-center text-sm font-medium;
}

.step-label {
  @apply text-sm font-medium hidden sm:block;
}

.setup-content {
  @apply flex-1 p-6 min-h-[280px];
}

.step-page {
  @apply flex flex-col items-center text-center;
}

.welcome-icon {
  @apply mb-6;
}

.welcome-title {
  @apply text-2xl font-bold text-gray-800 dark:text-white mb-3;
}

.welcome-desc {
  @apply text-gray-500 dark:text-gray-400 max-w-md;
}

.step-title {
  @apply text-xl font-bold text-gray-800 dark:text-white mb-2;
}

.step-desc {
  @apply text-gray-500 dark:text-gray-400 mb-6;
}

.path-options {
  @apply w-full space-y-3;
}

.path-option {
  @apply flex items-start gap-3 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600;
  @apply cursor-pointer transition-all hover:border-blue-300 dark:hover:border-blue-500;
  
  &.selected {
    @apply border-blue-500 bg-blue-50 dark:bg-blue-900/20;
  }
}

.option-radio {
  @apply w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500;
  @apply flex items-center justify-center flex-shrink-0 mt-0.5;
  
  .path-option.selected & {
    @apply border-blue-500;
  }
}

.radio-dot {
  @apply w-2.5 h-2.5 rounded-full bg-blue-500;
}

.option-content {
  @apply flex-1 text-left;
}

.option-title {
  @apply font-medium text-gray-800 dark:text-white mb-1;
}

.option-path {
  @apply text-sm text-gray-500 dark:text-gray-400 break-all;
}

.custom-path-input {
  @apply flex items-center gap-2 mt-2;
  
  .path-input {
    @apply flex-1;
  }
  
  .browse-btn {
    @apply flex-shrink-0 whitespace-nowrap;
  }
}

.path-tip {
  @apply flex items-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400;
}

.complete-icon {
  @apply mb-4;
}

.summary {
  @apply w-full mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-left;
}

.summary-item {
  @apply flex items-start gap-2;
}

.summary-label {
  @apply text-gray-500 dark:text-gray-400 flex-shrink-0;
}

.summary-value {
  @apply text-gray-800 dark:text-white break-all;
}

.setup-footer {
  @apply flex items-center gap-3 px-6 py-3;
  @apply border-t border-gray-200 dark:border-gray-600;
}
</style>
