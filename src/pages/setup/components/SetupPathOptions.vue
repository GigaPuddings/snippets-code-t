<template>
  <section class="path-section">
    <div class="path-options">
      <div
        v-for="option in options"
        :key="option"
        class="path-option"
        :class="{ selected: mode === option }"
        @click="mode = option"
      >
        <div class="option-info">
          <div class="option-title">
            {{ option === 'default' ? defaultTitle : customTitle }}
          </div>
          <div
            v-if="option === 'custom' && mode === 'custom'"
            class="custom-path-input"
          >
            <el-input
              v-model="path"
              :placeholder="$t('common.browse')"
              class="path-input"
              clearable
              @blur="emit('blur')"
            />
            <CustomButton
              type="primary"
              size="small"
              class="browse-btn"
              @click.stop="emit('browse')"
            >
              {{ $t('common.browse') }}
            </CustomButton>
          </div>
          <div v-else class="option-desc">
            {{ option === 'default' ? defaultPath : customDescription }}
          </div>
        </div>
        <div class="option-action">
          <div class="radio-circle">
            <div v-if="mode === option" class="radio-dot"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CustomButton } from '@/components/UI';

defineProps<{
  defaultTitle: string;
  defaultPath: string;
  customTitle: string;
  customDescription: string;
}>();

const options = ['default', 'custom'] as const;
const mode = defineModel<(typeof options)[number]>({ required: true });
const path = defineModel<string>('path', { required: true });
const emit = defineEmits<{ browse: []; blur: [] }>();
</script>

<style scoped lang="scss">
.path-options {
  @apply w-full space-y-3;
}

.path-section {
  @apply w-full;
}

.path-option {
  @apply flex items-center justify-between gap-4 p-3 rounded-lg cursor-pointer transition-all;

  min-height: 4.75rem;
  background: var(--setup-card-bg);
  border: 1px solid var(--setup-border);
  box-shadow: 0 8px 22px rgb(15 23 42 / 5%);

  &:hover {
    background: var(--setup-option-hover);
    border-color: rgb(95 116 243 / 36%);
  }

  &.selected {
    background: var(--setup-option-selected);
    border-color: rgb(95 116 243 / 52%);

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

  color: var(--setup-text);
}

.option-desc {
  @apply text-xs;

  overflow: hidden;
  color: var(--setup-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.custom-path-input {
  @apply flex items-center gap-2 mt-2;

  .path-input {
    @apply flex-1;

    :deep(.el-input__wrapper) {
      background: var(--setup-card-bg) !important;
      border-radius: 8px;
      box-shadow: 0 0 0 1px var(--setup-border-strong) inset !important;

      &:hover {
        box-shadow: 0 0 0 1px rgb(59 130 246 / 36%) inset;
      }

      &.is-focus {
        box-shadow: 0 0 0 1px var(--el-color-primary) inset;
      }
    }

    :deep(.el-input__inner) {
      color: var(--setup-text);
    }

    :deep(.el-input__inner::placeholder) {
      color: var(--setup-muted);
    }
  }
}

.browse-btn {
  @apply flex-shrink-0 whitespace-nowrap;
}
</style>
