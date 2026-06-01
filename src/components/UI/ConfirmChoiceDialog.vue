<template>
  <CommonDialog
    v-model="visible"
    :title="title"
    width="440px"
    :custom-class="dialogClass"
    @close="handleClose"
  >
    <div class="confirm-choice-body">
      <div class="message-row">
        <span class="type-indicator" :class="`type-${type}`">{{ icon }}</span>
        <div class="message-text">{{ mainMessage }}</div>
      </div>
      <div v-if="hintLines.length" class="hint-list">
        <div v-for="(line, i) in hintLines" :key="i" class="hint-item">
          <span class="hint-dot"></span>
          <span>{{ line }}</span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="confirm-footer">
        <CustomButton v-if="secondaryText" @click="handleSecondary">
          {{ secondaryText }}
        </CustomButton>
        <CustomButton :type="type === 'danger' ? 'danger' : 'primary'" @click="handlePrimary">
          {{ primaryText }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import CommonDialog from './CommonDialog.vue';
import CustomButton from './CustomButton.vue';

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
const skipCloseEmit = ref(false);

const icon = computed(() => {
  switch (props.type) {
    case 'warning': return '!';
    case 'danger': return '!';
    default: return 'i';
  }
});

const dialogClass = computed(
  () =>
    `confirm-choice-dialog ${props.type === 'danger' ? 'delete-dialog' : props.type === 'warning' ? 'warning-dialog' : ''}`
);

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
  closeAfterAction();
  emit('primary');
}

function handleSecondary() {
  closeAfterAction();
  emit('secondary');
}

function handleClose() {
  visible.value = false;
  if (skipCloseEmit.value) {
    skipCloseEmit.value = false;
    return;
  }
  emit('close');
}

function closeAfterAction() {
  skipCloseEmit.value = true;
  visible.value = false;
}

defineExpose({
  open: () => { visible.value = true; },
  close: () => { visible.value = false; }
});
</script>

<style scoped lang="scss">
.confirm-choice-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.message-text {
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
  color: var(--dialog-text);
}

.type-indicator {
  display: flex;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;

  &.type-info {
    color: var(--el-color-primary);
    background: rgb(95 116 243 / 12%);
  }

  &.type-warning {
    color: var(--el-color-warning);
    background: rgb(230 162 60 / 14%);
  }

  &.type-danger {
    color: var(--el-color-danger);
    background: rgb(245 108 108 / 14%);
  }
}

.hint-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px 12px;
  border: 1px solid var(--dialog-border);
  border-radius: 8px;
  background: var(--dialog-footer-bg);
}

.hint-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--dialog-text-secondary);

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
  gap: 8px;
}
</style>
