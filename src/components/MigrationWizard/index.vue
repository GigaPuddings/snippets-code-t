<template>
  <div class="migration-wizard">
    <div class="wizard-content">
      <!-- Step 1: Select Workspace -->
      <div v-if="currentStep === 1" class="step step-workspace">
        <h3>{{ t('migration.selectWorkspace') }}</h3>
        <p class="step-description">{{ t('migration.selectWorkspaceDesc') }}</p>
        
        <div class="workspace-input-group">
          <input 
            v-model="workspaceRoot" 
            type="text" 
            :placeholder="t('migration.workspacePlaceholder')"
            class="workspace-input"
            readonly
          />
          <button @click="handleSelectWorkspace" class="btn-browse">
            {{ t('migration.browse') }}
          </button>
        </div>
        
        <div class="wizard-actions">
          <button @click="handleCancel" class="btn-secondary">
            {{ t('common.cancel') }}
          </button>
          <button 
            @click="nextStep" 
            :disabled="!workspaceRoot"
            class="btn-primary"
          >
            {{ t('common.next') }}
          </button>
        </div>
      </div>
      
      <!-- Step 2: Confirm Migration -->
      <div v-if="currentStep === 2" class="step step-confirm">
        <h3>{{ t('migration.confirmMigration') }}</h3>
        <p class="step-description">{{ t('migration.confirmMigrationDesc', { count: totalFragments }) }}</p>
        
        <div class="migration-options">
          <label class="checkbox-label">
            <input v-model="backupDatabase" type="checkbox" />
            <span>{{ t('migration.backupDatabase') }}</span>
          </label>
          
          <p v-if="backupDatabase" class="backup-info">
            {{ t('migration.backupInfo') }}
          </p>
        </div>
        
        <div class="wizard-actions">
          <button @click="prevStep" class="btn-secondary">
            {{ t('common.back') }}
          </button>
          <button @click="startMigration" class="btn-primary">
            {{ t('migration.startMigration') }}
          </button>
        </div>
      </div>
      
      <!-- Step 3: Migration Progress -->
      <div v-if="currentStep === 3" class="step step-progress">
        <h3>{{ t('migration.migrating') }}</h3>
        
        <div class="progress-container">
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
          <div class="progress-text">{{ progressPercent }}%</div>
        </div>
        
        <div class="progress-details">
          <p class="progress-step">{{ progress.step }}</p>
          <p class="progress-count">
            {{ progress.processed }} / {{ progress.total }}
          </p>
          <p v-if="progress.currentFile" class="progress-file">
            {{ progress.currentFile }}
          </p>
        </div>
      </div>
      
      <!-- Step 4: Migration Result -->
      <div v-if="currentStep === 4" class="step step-result">
        <div :class="['result-header', result.success ? 'success' : 'error']">
          <div class="result-icon">
            {{ result.success ? '✓' : '✗' }}
          </div>
          <h3>{{ result.success ? t('migration.migrationComplete') : t('migration.migrationFailed') }}</h3>
        </div>
        
        <div class="result-details">
          <div class="result-item">
            <span class="result-label">{{ t('migration.successCount') }}:</span>
            <span class="result-value">{{ result.successCount }}</span>
          </div>
          <div class="result-item">
            <span class="result-label">{{ t('migration.failedCount') }}:</span>
            <span class="result-value">{{ result.failedCount }}</span>
          </div>
          <div class="result-item">
            <span class="result-label">{{ t('migration.workspacePath') }}:</span>
            <span class="result-value path">{{ result.workspacePath }}</span>
          </div>
        </div>
        
        <div v-if="result.errors.length > 0" class="errors">
          <h4>{{ t('migration.errors') }}:</h4>
          <ul class="error-list">
            <li v-for="(error, index) in result.errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        
        <div class="wizard-actions">
          <button 
            v-if="!result.success" 
            @click="handleRollback" 
            class="btn-secondary"
          >
            {{ t('migration.rollback') }}
          </button>
          <button @click="handleFinish" class="btn-primary">
            {{ t('common.finish') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { 
  migrateToMarkdown, 
  rollbackMigration, 
  selectWorkspace 
} from '@/api/markdown';
import type { MigrationProgress, MigrationResult } from '@/types/models';

const { t } = useI18n();

// Emits
const emit = defineEmits<{
  cancel: [];
  finish: [result: MigrationResult];
}>();

// Props
const props = defineProps<{
  totalFragments: number;
}>();

// State
const currentStep = ref(1);
const workspaceRoot = ref('');
const backupDatabase = ref(true);
const progress = ref<MigrationProgress>({
  step: '',
  processed: 0,
  total: 0,
  currentFile: undefined
});
const result = ref<MigrationResult>({
  success: false,
  successCount: 0,
  failedCount: 0,
  errors: [],
  workspacePath: ''
});

// Computed
const progressPercent = computed(() => {
  if (progress.value.total === 0) return 0;
  return Math.round((progress.value.processed / progress.value.total) * 100);
});

// Methods
const handleSelectWorkspace = async () => {
  try {
    const selected = await selectWorkspace();
    if (selected) {
      workspaceRoot.value = selected;
    }
  } catch (error) {
    console.error('Failed to select workspace:', error);
  }
};

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const startMigration = async () => {
  currentStep.value = 3;
  
  try {
    const migrationResult = await migrateToMarkdown(
      {
        workspaceRoot: workspaceRoot.value,
        backupDatabase: backupDatabase.value
      },
      (progressUpdate) => {
        progress.value = progressUpdate;
      }
    );
    
    result.value = migrationResult;
    currentStep.value = 4;
  } catch (error) {
    result.value = {
      success: false,
      successCount: 0,
      failedCount: props.totalFragments,
      errors: [String(error)],
      workspacePath: workspaceRoot.value
    };
    currentStep.value = 4;
  }
};

const handleRollback = async () => {
  try {
    await rollbackMigration(workspaceRoot.value);
    emit('cancel');
  } catch (error) {
    console.error('Failed to rollback migration:', error);
  }
};

const handleCancel = () => {
  emit('cancel');
};

const handleFinish = () => {
  emit('finish', result.value);
};
</script>

<style scoped lang="scss">
.migration-wizard {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
}

.wizard-content {
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 32px;
}

.step {
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--text-primary);
  }
  
  .step-description {
    color: var(--text-secondary);
    margin-bottom: 24px;
    line-height: 1.5;
  }
}

.workspace-input-group {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  
  .workspace-input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
  
  .btn-browse {
    padding: 10px 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    
    &:hover {
      opacity: 0.9;
    }
  }
}

.migration-options {
  margin-bottom: 24px;
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    
    span {
      color: var(--text-primary);
      font-size: 14px;
    }
  }
  
  .backup-info {
    margin-top: 12px;
    padding: 12px;
    background: var(--bg-tertiary);
    border-radius: 6px;
    color: var(--text-secondary);
    font-size: 13px;
  }
}

.progress-container {
  margin-bottom: 24px;
  
  .progress-bar {
    width: 100%;
    height: 8px;
    background: var(--bg-tertiary);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
    
    .progress-fill {
      height: 100%;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }
  }
  
  .progress-text {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
  }
}

.progress-details {
  text-align: center;
  
  .progress-step {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 8px;
  }
  
  .progress-count {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }
  
  .progress-file {
    font-size: 12px;
    color: var(--text-tertiary);
    font-family: monospace;
  }
}

.result-header {
  text-align: center;
  margin-bottom: 24px;
  
  .result-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    margin: 0 auto 16px;
  }
  
  &.success .result-icon {
    background: #10b981;
    color: white;
  }
  
  &.error .result-icon {
    background: #ef4444;
    color: white;
  }
}

.result-details {
  margin-bottom: 24px;
  
  .result-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color);
    
    &:last-child {
      border-bottom: none;
    }
    
    .result-label {
      color: var(--text-secondary);
      font-size: 14px;
    }
    
    .result-value {
      color: var(--text-primary);
      font-size: 14px;
      font-weight: 500;
      
      &.path {
        font-family: monospace;
        font-size: 12px;
      }
    }
  }
}

.errors {
  margin-bottom: 24px;
  padding: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  
  h4 {
    color: #991b1b;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .error-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      color: #dc2626;
      font-size: 13px;
      padding: 4px 0;
      font-family: monospace;
    }
  }
}

.wizard-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
  
  button {
    padding: 10px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .btn-primary {
    background: var(--primary-color);
    color: white;
    
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }
  
  .btn-secondary {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    
    &:hover {
      background: var(--bg-quaternary);
    }
  }
}
</style>
