<template>
  <el-dialog
    v-model="visible"
    :title="$t('settings.gitSync.saveConfigTitle')"
    width="500px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    align-center
  >
    <div class="save-config-content">
      <!-- 警告提示 -->
      <div class="warning-box">
        <Attention theme="filled" size="20" class="warning-icon" />
        <p class="warning-text">{{ $t('settings.gitSync.saveConfigWarning') }}</p>
      </div>
      
      <!-- 配置摘要 -->
      <div class="config-summary">
        <h4 class="summary-title">{{ $t('settings.gitSync.configSummary') }}</h4>
        <div class="summary-list">
          <div class="summary-item">
            <span class="label">{{ $t('settings.gitSync.userName') }}:</span>
            <span class="value">{{ config.user_name }}</span>
          </div>
          <div class="summary-item">
            <span class="label">{{ $t('settings.gitSync.userEmail') }}:</span>
            <span class="value">{{ config.user_email }}</span>
          </div>
          <div class="summary-item">
            <span class="label">{{ $t('settings.gitSync.remoteUrl') }}:</span>
            <span class="value text-break">{{ config.remote_url }}</span>
          </div>
        </div>
      </div>
      
      <!-- 备份提醒 -->
      <div class="backup-reminder">
        <Info theme="filled" size="18" class="info-icon" />
        <span>{{ $t('settings.gitSync.backupReminder') }}</span>
      </div>
      
      <!-- 确认选项 -->
      <el-checkbox v-model="confirmUnderstand" class="confirm-checkbox">
        {{ $t('settings.gitSync.confirmUnderstand') }}
      </el-checkbox>
    </div>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel" :disabled="loading">
          {{ $t('common.cancel') }}
        </el-button>
        <el-button 
          type="primary" 
          @click="handleConfirm"
          :loading="loading"
          :disabled="!confirmUnderstand"
        >
          {{ $t('common.confirm') }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Info, Attention } from '@icon-park/vue-next';
import type { GitSettings } from '@/types/models';

interface Props {
  modelValue: boolean;
  config: GitSettings;
  loading?: boolean;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
});

const emit = defineEmits<Emits>();

const visible = ref(props.modelValue);
const confirmUnderstand = ref(false);

watch(() => props.modelValue, (val) => {
  visible.value = val;
  if (val) {
    // 对话框打开时重置确认状态
    confirmUnderstand.value = false;
  }
});

watch(visible, (val) => {
  emit('update:modelValue', val);
});

const handleConfirm = () => {
  if (!confirmUnderstand.value) {
    return;
  }
  emit('confirm');
};

const handleCancel = () => {
  visible.value = false;
  emit('cancel');
};
</script>

<style scoped lang="scss">
.save-config-content {
  @apply space-y-4;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  
  /* 自定义滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    @apply bg-panel rounded;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-panel-hover-bg rounded;

    &:hover {
      @apply bg-panel-hover-bg;
    }
  }
}

.warning-box {
  @apply flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg;
  
  .warning-icon {
    @apply text-orange-500 text-xl flex-shrink-0 mt-0.5;
  }
  
  .warning-text {
    @apply text-sm text-orange-800 dark:text-orange-200 leading-relaxed;
  }
}

.config-summary {
  @apply space-y-2;
  
  .summary-title {
    @apply text-sm font-semibold text-panel mb-3;
  }

  .summary-list {
    @apply space-y-2 bg-content rounded-lg p-3;
  }

  .summary-item {
    @apply flex gap-2 text-sm;

    .label {
      @apply font-medium text-panel-text-secondary flex-shrink-0;
    }

    .value {
      @apply text-panel font-mono;

      &.text-break {
        @apply break-all;
      }
    }
  }
}

.backup-reminder {
  @apply flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg;
  
  .info-icon {
    @apply text-blue-500 text-lg flex-shrink-0;
  }
  
  span {
    @apply text-sm text-blue-800 dark:text-blue-200;
  }
}

.confirm-checkbox {
  @apply mt-4;
  
  :deep(.el-checkbox__label) {
    @apply text-sm font-medium;
  }
}

.dialog-footer {
  @apply flex justify-end gap-2;
}
</style>
