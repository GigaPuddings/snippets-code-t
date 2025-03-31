<template>
  <button
    :class="[
      'custom-button',
      `custom-button--${props.type}`,
      props.size ? `custom-button--${props.size}` : 'custom-button--medium',
      { 'custom-button--loading': props.loading }
    ]"
    :disabled="loading || disabled"
    @click="$emit('click', $event)"
  >
    <div v-if="loading" class="custom-button__loading">
      <svg class="custom-button__spinner" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        />
      </svg>
    </div>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CustomButton'
});

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value: string) =>
      ['default', 'primary', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: '',
    validator: (value: string) => ['', 'small', 'large'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<style scoped lang="scss">
.custom-button {
  @apply inline-flex items-center justify-center rounded-md shadow-sm transition-all duration-200 font-medium outline-none border border-transparent relative overflow-hidden;

  &:not(:disabled):active {
    transform: scale(0.98);
  }

  &:disabled {
    @apply opacity-60 cursor-not-allowed;
  }

  &--default {
    @apply bg-panel text-panel hover:bg-hover;
  }

  &--primary {
    @apply bg-active text-white hover:bg-active;
  }

  &--danger {
    @apply bg-red-500 text-white hover:bg-red-600;
  }

  &--medium {
    @apply text-sm py-2 px-4 h-8;
  }

  &--small {
    @apply text-xs py-1 px-3 h-6;
  }

  &--large {
    @apply text-base py-2.5 px-5 h-12;
  }

  &--loading {
    @apply cursor-wait;
  }

  &__loading {
    @apply absolute left-0 top-0 w-full h-full flex items-center justify-center bg-inherit;
  }

  &__spinner {
    width: 1.25rem;
    height: 1.25rem;
    animation: rotate 2s linear infinite;

    & .path {
      stroke: currentcolor;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
