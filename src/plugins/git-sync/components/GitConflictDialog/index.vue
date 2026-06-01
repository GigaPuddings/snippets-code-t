<template>
  <CommonDialog
    v-model="visible"
    :title="$t('settings.gitSync.conflictDetected')"
    width="520px"
    custom-class="git-conflict-dialog warning-dialog"
    :close-on-click-modal="true"
    @close="handleClose"
  >
    <div class="conflict-body">
            <!-- 冲突文件列表 -->
            <div v-if="conflictFiles.length > 0" class="section">
              <div class="section-label">{{ $t('settings.gitSync.conflictFiles') }}</div>
              <div class="file-list">
                <div v-for="file in conflictFiles" :key="file" class="file-item conflict">
                  <span class="file-dot conflict-dot"></span>
                  <span class="file-name">{{ file }}</span>
                </div>
              </div>
            </div>

            <!-- 未跟踪文件列表（会被远程覆盖） -->
            <div v-if="untrackedFiles.length > 0" class="section">
              <div class="section-label">{{ $t('settings.gitSync.untrackedFiles') || '未跟踪文件（会被远程覆盖）' }}</div>
              <div class="file-list">
                <div v-for="file in untrackedFiles" :key="file" class="file-item untracked">
                  <span class="file-dot untracked-dot"></span>
                  <span class="file-name">{{ file }}</span>
                </div>
              </div>
            </div>

            <!-- 策略选择 -->
            <div class="section">
              <div class="section-label">{{ $t('settings.gitSync.selectResolution') }}</div>
              <div class="strategy-list">
                <button
                  class="strategy-card"
                  :class="{ active: selectedStrategy === 'manual-merge' }"
                  @click="selectedStrategy = 'manual-merge'"
                >
                  <div class="card-icon merge-icon">⇄</div>
                  <div class="card-body">
                    <div class="card-title">{{ $t('settings.gitSync.manualMerge') }}</div>
                    <div class="card-desc">{{ $t('settings.gitSync.manualMergeDesc') }}</div>
                  </div>
                  <div class="card-badge recommended">{{ $t('settings.gitSync.recommended') }}</div>
                </button>

                <button
                  class="strategy-card"
                  :class="{ active: selectedStrategy === 'force-pull' }"
                  @click="selectedStrategy = 'force-pull'"
                >
                  <div class="card-icon pull-icon">↓</div>
                  <div class="card-body">
                    <div class="card-title">{{ $t('settings.gitSync.forcePull') }}</div>
                    <div class="card-desc">{{ $t('settings.gitSync.forcePullDesc') }}</div>
                  </div>
                </button>

                <button
                  class="strategy-card"
                  :class="{ active: selectedStrategy === 'force-push' }"
                  @click="selectedStrategy = 'force-push'"
                >
                  <div class="card-icon push-icon">↑</div>
                  <div class="card-body">
                    <div class="card-title">{{ $t('settings.gitSync.forcePush') }}</div>
                    <div class="card-desc">{{ $t('settings.gitSync.forcePushDesc') }}</div>
                  </div>
                </button>
              </div>
            </div>

            <!-- 警告提示 -->
            <transition name="warning-slide">
              <div v-if="selectedStrategy === 'force-push' || selectedStrategy === 'force-pull'" class="warning-box">
                <span class="warning-icon">⚠</span>
                <span class="warning-text">
                  {{ selectedStrategy === 'force-push'
                    ? $t('settings.gitSync.forcePushWarning')
                    : $t('settings.gitSync.forcePullWarning')
                  }}
                </span>
              </div>
            </transition>
    </div>

    <template #footer>
      <div class="conflict-footer">
        <CustomButton @click="handleCancel" :disabled="loading">
          {{ $t('common.cancel') }}
        </CustomButton>
        <CustomButton
          type="primary"
          @click="handleConfirm"
          :disabled="!selectedStrategy"
          :loading="loading"
        >
          {{ $t('common.confirm') }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { CommonDialog, CustomButton } from '@/components/UI';

interface Props {
  modelValue: boolean;
  conflictFiles: string[];
  untrackedFiles?: string[]; // 未跟踪文件（会被远程覆盖）
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm', strategy: string): void;
  (e: 'cancel'): void;
  /** 按 ESC 关闭：仅关闭弹框，不触发「取消冲突处理」二次确认 */
  (e: 'escape'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});

const conflictFiles = computed(() => props.conflictFiles || []);
const untrackedFiles = computed(() => props.untrackedFiles || []);

const selectedStrategy = ref<string>('');
const loading = ref(false);
const skipCloseEmit = ref(false);

watch(visible, (val) => {
  if (val) {
    selectedStrategy.value = '';
    loading.value = false;
  }
});

function handleConfirm() {
  if (!selectedStrategy.value) return;
  emit('confirm', selectedStrategy.value);
}

function handleCancel() {
  closeAfterAction();
  emit('cancel');
}

function handleClose() {
  visible.value = false;
  if (skipCloseEmit.value) {
    skipCloseEmit.value = false;
    return;
  }
  emit('escape');
}

function closeAfterAction() {
  skipCloseEmit.value = true;
  visible.value = false;
}

defineExpose({
  setLoading: (val: boolean) => {
    loading.value = val;
  }
});
</script>

<style scoped lang="scss">
// 内容区
.conflict-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 65vh;
  overflow-y: auto;
}

.section {
  .section-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--categories-info-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
}

// 文件列表
.file-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background: var(--categories-content-bg);
  border: 1px solid var(--categories-border-color);
  max-height: 140px;
  overflow-y: auto;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  border-radius: 4px;

  .file-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #e6a23c;
    flex-shrink: 0;
  }

  &.conflict .file-dot {
    background: #f56c6c;
  }

  &.untracked .file-dot {
    background: #909399;
  }

  .file-name {
    font-size: 12px;
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
    color: var(--categories-text-color);
    word-break: break-all;
  }
}

// 策略卡片
.strategy-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.strategy-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--categories-border-color);
  background: var(--categories-panel-bg);
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
  width: 100%;

  &:hover {
    border-color: var(--el-color-primary, #5d6dfd);
    background: var(--categories-content-bg);
  }

  &.active {
    border-color: var(--el-color-primary, #5d6dfd);
    background: rgba(93, 109, 253, 0.06);
    box-shadow: 0 0 0 1px var(--el-color-primary, #5d6dfd);
  }

  .card-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    flex-shrink: 0;

    &.merge-icon {
      background: rgba(76, 175, 80, 0.12);
      color: #4caf50;
    }

    &.pull-icon {
      background: rgba(33, 150, 243, 0.12);
      color: #2196f3;
    }

    &.push-icon {
      background: rgba(230, 162, 60, 0.12);
      color: #e6a23c;
    }
  }

  .card-body {
    flex: 1;
    min-width: 0;

    .card-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--categories-text-color);
      margin-bottom: 2px;
    }

    .card-desc {
      font-size: 11px;
      color: var(--categories-info-text-color);
      line-height: 1.4;
    }
  }

  .card-badge {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    flex-shrink: 0;

    &.recommended {
      background: rgba(76, 175, 80, 0.12);
      color: #4caf50;
    }
  }
}

// 警告
.warning-box {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 6px;
  background: rgba(230, 162, 60, 0.08);
  border: 1px solid rgba(230, 162, 60, 0.2);

  .warning-icon {
    flex-shrink: 0;
    font-size: 14px;
  }

  .warning-text {
    font-size: 12px;
    line-height: 1.5;
    color: #e6a23c;
  }
}

.warning-slide-enter-active,
.warning-slide-leave-active {
  transition: all 0.2s ease;
}

.warning-slide-enter-from,
.warning-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

// 底栏
.conflict-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.btn-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 4px;
  vertical-align: middle;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// 过渡动画
.conflict-fade-enter-active {
  transition: opacity 0.2s ease;

  .conflict-dialog {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
}

.conflict-fade-leave-active {
  transition: opacity 0.15s ease;

  .conflict-dialog {
    transition: transform 0.15s ease, opacity 0.15s ease;
  }
}

.conflict-fade-enter-from {
  opacity: 0;

  .conflict-dialog {
    transform: scale(0.96) translateY(8px);
    opacity: 0;
  }
}

.conflict-fade-leave-to {
  opacity: 0;

  .conflict-dialog {
    transform: scale(0.98);
    opacity: 0;
  }
}
</style>
