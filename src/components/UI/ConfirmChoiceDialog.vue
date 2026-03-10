<template>
  <teleport to="body">
    <transition name="confirm-fade">
      <div v-if="visible" class="confirm-overlay" @click.self="handleClose">
        <div class="confirm-dialog" :class="[`type-${type}`]">
          <!-- 顶栏 -->
          <div class="confirm-header">
            <div class="header-title">
              <span class="header-icon" :class="iconClass">{{ icon }}</span>
              <span>{{ title }}</span>
            </div>
            <button class="header-close" @click="handleClose" :title="'×'">
              <span>×</span>
            </button>
          </div>

          <!-- 内容区 -->
          <div class="confirm-body">
            <div class="message-text">{{ mainMessage }}</div>
            <div v-if="hintLines.length" class="hint-list">
              <div v-for="(line, i) in hintLines" :key="i" class="hint-item">
                <span class="hint-dot"></span>
                <span>{{ line }}</span>
              </div>
            </div>
          </div>

          <!-- 底栏 -->
          <div class="confirm-footer">
            <button
              v-if="secondaryText"
              class="footer-btn secondary"
              @click="handleSecondary"
            >
              {{ secondaryText }}
            </button>
            <button
              class="footer-btn primary"
              :class="{ danger: type === 'danger' }"
              @click="handlePrimary"
            >
              {{ primaryText }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    message?: string;
    primaryText?: string;
    secondaryText?: string;
    type?: 'info' | 'warning' | 'danger';
  }>(),
  {
    modelValue: false,
    title: '',
    message: '',
    primaryText: '确定',
    secondaryText: '取消',
    type: 'info'
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'primary'): void;
  (e: 'secondary'): void;
  (e: 'close'): void;
}>();

const visible = ref(props.modelValue);

const icon = computed(() => {
  switch (props.type) {
    case 'warning': return '⚠';
    case 'danger': return '!';
    default: return '?';
  }
});

const iconClass = computed(() => `icon-${props.type}`);

// 拆分 message：主文本 + 提示列表（• 开头的行）
const mainMessage = computed(() => {
  const m = props.message || '';
  const lines = m.split('\n').filter(Boolean);
  const main: string[] = [];
  for (const line of lines) {
    const t = line.trim();
    if (/^[•·\-]\s*/.test(t)) break;
    if (t) main.push(line);
  }
  return main.join('\n') || lines[0] || m;
});

const hintLines = computed(() => {
  const m = props.message || '';
  const lines = m.split('\n').filter(Boolean);
  const hints: string[] = [];
  for (const line of lines) {
    const t = line.trim();
    const match = t.match(/^[•·\-]\s*(.+)$/);
    if (match) hints.push(match[1].trim());
  }
  return hints;
});

watch(
  () => props.modelValue,
  (val) => { visible.value = val; }
);

watch(visible, (val) => {
  emit('update:modelValue', val);
});

function handlePrimary() {
  visible.value = false;
  emit('primary');
}

function handleSecondary() {
  visible.value = false;
  emit('secondary');
}

function handleClose() {
  visible.value = false;
  emit('close');
}

defineExpose({
  open: () => { visible.value = true; },
  close: () => { visible.value = false; }
});
</script>

<style scoped lang="scss">
.confirm-fade-enter-active,
.confirm-fade-leave-active {
  transition: opacity 0.2s ease;
}
.confirm-fade-enter-from,
.confirm-fade-leave-to {
  opacity: 0;
}
.confirm-fade-enter-active .confirm-dialog,
.confirm-fade-leave-active .confirm-dialog {
  transition: transform 0.2s ease;
}
.confirm-fade-enter-from .confirm-dialog,
.confirm-fade-leave-to .confirm-dialog {
  transform: scale(0.96);
}

.confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.52);
  backdrop-filter: blur(6px);
}

.confirm-dialog {
  width: 440px;
  max-width: 92vw;
  border-radius: 12px;
  overflow: hidden;
  background: var(--categories-panel-bg);
  border: 1px solid var(--categories-border-color);
  box-shadow: 0 24px 72px rgba(0, 0, 0, 0.28);
}

.confirm-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-bottom: 1px solid var(--categories-border-color);
  background: var(--categories-content-bg);

  .header-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 600;
    color: var(--categories-text-color);

    .header-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 700;

      &.icon-info {
        background: rgba(93, 109, 253, 0.15);
        color: var(--el-color-primary, #5d6dfd);
      }
      &.icon-warning {
        background: rgba(230, 162, 60, 0.18);
        color: #e6a23c;
      }
      &.icon-danger {
        background: rgba(245, 108, 108, 0.18);
        color: #f56c6c;
      }
    }
  }

  .header-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
    color: var(--categories-info-text-color);
    font-size: 20px;
    transition: all 0.15s;

    &:hover {
      background: rgba(255, 65, 54, 0.12);
      color: #ff4136;
    }
  }
}

.confirm-body {
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.message-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--categories-text-color);
}

.hint-list {
  padding: 12px 14px;
  border-radius: 8px;
  background: var(--categories-content-bg);
  border: 1px solid var(--categories-border-color);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hint-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--categories-info-text-color);

  .hint-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--el-color-primary, #5d6dfd);
    margin-top: 7px;
    flex-shrink: 0;
  }
}

.confirm-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 14px 18px;
  border-top: 1px solid var(--categories-border-color);
  background: var(--categories-content-bg);
}

.footer-btn {
  min-width: 96px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid transparent;

  &.secondary {
    background: transparent;
    border-color: var(--categories-border-color);
    color: var(--categories-text-color);

    &:hover {
      background: var(--categories-content-bg);
      border-color: var(--categories-info-text-color);
    }
  }

  &.primary {
    background: var(--el-color-primary, #5d6dfd);
    color: #fff;
    border-color: var(--el-color-primary, #5d6dfd);

    &:hover {
      background: var(--el-color-primary-dark-2, #4a5cfd);
      border-color: var(--el-color-primary-dark-2, #4a5cfd);
      transform: translateY(-1px);
    }

    &.danger {
      background: #f56c6c;
      border-color: #f56c6c;

      &:hover {
        background: #f54545;
        border-color: #f54545;
      }
    }
  }
}
</style>
