<template>
  <el-dialog
    v-model="visible"
    :title="$t('settings.gitSync.detectConfigTitle')"
    width="600px"
    :close-on-click-modal="false"
    @close="handleClose"
  >
    <div class="config-dialog">
      <p class="dialog-desc">{{ $t('settings.gitSync.detectConfigDesc') }}</p>
      
      <!-- 检测到的配置列表 -->
      <div class="config-list">
        <!-- 本地配置 -->
        <div 
          v-if="hasLocalConfig" 
          class="config-item"
          :class="{ 'config-item--selected': selectedConfig === 'local' }"
          @click="selectedConfig = 'local'"
        >
          <div class="config-item-header">
            <el-radio v-model="selectedConfig" value="local" />
            <span class="config-item-title">{{ $t('settings.gitSync.localConfig') }}</span>
            <el-tag type="success" size="small">{{ $t('settings.gitSync.recommended') }}</el-tag>
          </div>
          <div class="config-item-content">
            <div class="config-field">
              <span class="config-label">{{ $t('settings.gitSync.userName') }}:</span>
              <span class="config-value">{{ systemConfig.local_user_name }}</span>
            </div>
            <div class="config-field">
              <span class="config-label">{{ $t('settings.gitSync.userEmail') }}:</span>
              <span class="config-value">{{ systemConfig.local_user_email }}</span>
            </div>
            <div v-if="systemConfig.remote_url" class="config-field">
              <span class="config-label">{{ $t('settings.gitSync.remoteUrl') }}:</span>
              <span class="config-value">{{ systemConfig.remote_url }}</span>
            </div>
          </div>
        </div>
        
        <!-- 全局配置 -->
        <div 
          v-if="hasGlobalConfig" 
          class="config-item"
          :class="{ 'config-item--selected': selectedConfig === 'global' }"
          @click="selectedConfig = 'global'"
        >
          <div class="config-item-header">
            <el-radio v-model="selectedConfig" value="global" />
            <span class="config-item-title">{{ $t('settings.gitSync.globalConfig') }}</span>
          </div>
          <div class="config-item-content">
            <div class="config-field">
              <span class="config-label">{{ $t('settings.gitSync.userName') }}:</span>
              <span class="config-value">{{ systemConfig.global_user_name }}</span>
            </div>
            <div class="config-field">
              <span class="config-label">{{ $t('settings.gitSync.userEmail') }}:</span>
              <span class="config-value">{{ systemConfig.global_user_email }}</span>
            </div>
          </div>
        </div>
        
        <!-- 手动配置 -->
        <div 
          class="config-item"
          :class="{ 'config-item--selected': selectedConfig === 'manual' }"
          @click="selectedConfig = 'manual'"
        >
          <div class="config-item-header">
            <el-radio v-model="selectedConfig" value="manual" />
            <span class="config-item-title">{{ $t('settings.gitSync.manualConfig') }}</span>
          </div>
          <div class="config-item-content">
            <p class="config-desc">{{ $t('settings.gitSync.manualConfigDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <template #footer>
      <div class="dialog-footer">
        <CustomButton @click="handleClose">
          {{ $t('common.cancel') }}
        </CustomButton>
        <CustomButton type="primary" @click="handleConfirm">
          {{ $t('common.confirm') }}
        </CustomButton>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { CustomButton } from '@/components/UI';
import type { SystemGitConfig } from '@/api/git';

defineOptions({
  name: 'GitConfigDialog'
});

interface Props {
  modelValue: boolean;
  systemConfig: SystemGitConfig;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm', config: { type: 'local' | 'global' | 'manual'; data?: SystemGitConfig }): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const selectedConfig = ref<'local' | 'global' | 'manual'>('local');

// 是否有本地配置
const hasLocalConfig = computed(() => {
  return !!(props.systemConfig.local_user_name && props.systemConfig.local_user_email);
});

// 是否有全局配置
const hasGlobalConfig = computed(() => {
  return !!(props.systemConfig.global_user_name && props.systemConfig.global_user_email);
});

// 初始化选择
const initSelection = () => {
  if (hasLocalConfig.value) {
    selectedConfig.value = 'local';
  } else if (hasGlobalConfig.value) {
    selectedConfig.value = 'global';
  } else {
    selectedConfig.value = 'manual';
  }
};

// 关闭对话框
const handleClose = () => {
  visible.value = false;
};

// 确认选择
const handleConfirm = () => {
  emit('confirm', {
    type: selectedConfig.value,
    data: props.systemConfig
  });
  visible.value = false;
};

// 监听对话框打开
const onOpen = () => {
  initSelection();
};

defineExpose({
  onOpen
});
</script>

<style scoped lang="scss">
.config-dialog {
  @apply space-y-4;
}

.dialog-desc {
  @apply text-sm text-gray-600 dark:text-gray-400 mb-4;
}

.config-list {
  @apply space-y-3;
}

.config-item {
  @apply border border-gray-200 dark:border-neutral-700 rounded-lg p-4 cursor-pointer transition-all;
  
  &:hover {
    @apply border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/10;
  }
  
  &--selected {
    @apply border-blue-500 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20;
  }
}

.config-item-header {
  @apply flex items-center gap-2 mb-3;
}

.config-item-title {
  @apply text-sm font-semibold text-gray-900 dark:text-white;
}

.config-item-content {
  @apply ml-6 space-y-2;
}

.config-field {
  @apply flex items-start gap-2 text-sm;
}

.config-label {
  @apply text-gray-600 dark:text-gray-400 min-w-20;
}

.config-value {
  @apply text-gray-900 dark:text-white font-mono break-all;
}

.config-desc {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.dialog-footer {
  @apply flex justify-end gap-2;
}
</style>
