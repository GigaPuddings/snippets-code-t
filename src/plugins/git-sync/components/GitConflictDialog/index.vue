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
  @apply flex flex-col gap-4 max-h-[65vh] overflow-y-auto;
}

.section {
  .section-label {
    @apply text-xs font-semibold text-content uppercase tracking-[0.5px] mb-2;
  }
}

// 文件列表
.file-list {
  @apply flex flex-col gap-1 p-2 rounded-md bg-content border border-panel max-h-[140px] overflow-y-auto;
}

.file-item {
  @apply flex items-center gap-2 py-[5px] px-2 rounded;

  .file-dot {
    @apply w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0;
  }

  &.conflict .file-dot {
    @apply bg-red-500;
  }

  &.untracked .file-dot {
    @apply bg-gray-500;
  }

  .file-name {
    @apply text-xs text-panel;
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
    word-break: break-all;
  }
}

// 策略卡片
.strategy-list {
  @apply flex flex-col gap-1.5;
}

.strategy-card {
  @apply flex items-center gap-3 p-3 rounded-lg border border-panel bg-panel cursor-pointer text-left w-full transition-all duration-150;

  &:hover {
    @apply border-active bg-content;
  }

  &.active {
    @apply border-active;
    background: rgba(93, 109, 253, 0.06);
    box-shadow: 0 0 0 1px var(--el-color-primary);
  }

  .card-icon {
    @apply w-9 h-9 rounded-lg flex items-center justify-center text-lg font-bold shrink-0;

    &.merge-icon {
      @apply bg-green-500/10 text-green-500;
    }

    &.pull-icon {
      @apply bg-blue-500/10 text-blue-500;
    }

    &.push-icon {
      @apply bg-amber-500/10 text-amber-500;
    }
  }

  .card-body {
    @apply flex-1 min-w-0;

    .card-title {
      @apply text-[13px] font-semibold text-panel mb-0.5;
    }

    .card-desc {
      @apply text-[11px] text-content leading-[1.4];
    }
  }

  .card-badge {
    @apply py-0.5 px-2 rounded text-[10px] font-semibold shrink-0;

    &.recommended {
      @apply bg-green-500/10 text-green-500;
    }
  }
}

// 警告
.warning-box {
  @apply flex items-start gap-2 py-2.5 px-3 rounded-md bg-amber-500/[0.08] border border-amber-500/20;

  .warning-icon {
    @apply shrink-0 text-sm;
  }

  .warning-text {
    @apply text-xs leading-[1.5] text-amber-500;
  }
}

.warning-slide-enter-active,
.warning-slide-leave-active {
  @apply transition-all duration-200 ease-in-out;
}

.warning-slide-enter-from,
.warning-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

// 底栏
.conflict-footer {
  @apply flex justify-end gap-2;
}

.btn-spinner {
  @apply inline-block w-3 h-3 rounded-full mr-1 align-middle border-2 border-white/30 border-t-white;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// 过渡动画
.conflict-fade-enter-active {
  @apply transition-opacity duration-200 ease-in-out;

  .conflict-dialog {
    @apply transition-all duration-200 ease-in-out;
  }
}

.conflict-fade-leave-active {
  @apply transition-opacity duration-150 ease-in-out;

  .conflict-dialog {
    @apply transition-all duration-150 ease-in-out;
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
