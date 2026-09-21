<template>
  <button
    :class="[
      props.unstyled
        ? 'custom-button--unstyled'
        : [
            'custom-button',
            `custom-button--${props.type || 'default'}`,
            props.size && props.size !== 'default'
              ? `custom-button--${props.size}`
              : 'custom-button--medium',
            { 'custom-button--loading': props.loading },
            { 'custom-button--circle': props.circle },
            { 'custom-button--plain': props.plain },
            { 'custom-button--textual': props.text || props.link },
            { 'custom-button--link': props.link }
          ]
    ]"
    :type="props.nativeType"
    :disabled="loading || disabled"
    :aria-busy="loading || undefined"
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
    <slot v-if="!loading" name="icon">
      <component
        :is="props.icon"
        v-if="props.icon"
        class="custom-button__icon"
        aria-hidden="true"
      />
    </slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { Component, PropType } from 'vue';

type NativeButtonType = 'button' | 'submit' | 'reset';

defineOptions({
  name: 'CustomButton'
});

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value: string) =>
      ['default', 'primary', 'success', 'danger', 'warning', 'text'].includes(
        value
      )
  },
  size: {
    type: String,
    default: '',
    validator: (value: string) =>
      ['', 'default', 'small', 'large'].includes(value)
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  unstyled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [Object, Function] as PropType<Component>,
    default: undefined
  },
  nativeType: {
    type: String as PropType<NativeButtonType>,
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value)
  }
});

defineEmits(['click']);
</script>

<style scoped lang="scss">
.custom-button--text {
  @apply bg-transparent border-none shadow-none text-panel-text-secondary dark:text-panel hover:bg-content dark:hover:bg-panel-hover-bg;
}

.custom-button {
  @apply inline-flex items-center justify-center gap-1.5 rounded-md shadow-sm transition-all duration-200 font-medium outline-none relative overflow-hidden;

  &:not(:disabled):active {
    transform: scale(0.98);
  }

  &:disabled {
    @apply opacity-60 cursor-not-allowed;
  }

  &--default {
    @apply bg-panel dark:bg-panel text-panel-text-secondary dark:text-panel hover:bg-content dark:hover:bg-panel-hover-bg border border-panel dark:border-panel;
  }

  &--primary {
    @apply bg-active text-white hover:bg-active-hover;
  }

  &--success {
    @apply bg-green-500 text-white hover:bg-green-600;
  }

  &--warning {
    @apply bg-orange-500 text-white hover:bg-orange-600;
  }

  &--danger {
    @apply bg-red-500 text-white hover:bg-red-600;
  }

  &--plain {
    @apply bg-transparent border;

    &.custom-button--primary {
      @apply border-active text-primary hover:bg-active hover:text-white;
    }

    &.custom-button--success {
      @apply border-green-500 text-green-600 hover:bg-green-500 hover:text-white;
    }

    &.custom-button--warning {
      @apply border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white;
    }

    &.custom-button--danger {
      @apply border-red-500 text-red-600 hover:bg-red-500 hover:text-white;
    }
  }

  &--textual {
    @apply bg-transparent border-transparent shadow-none px-2;

    &.custom-button--default,
    &.custom-button--text {
      @apply text-panel-text-secondary hover:text-panel hover:bg-content dark:hover:bg-panel-hover-bg;
    }

    &.custom-button--primary {
      @apply text-primary hover:text-primary bg-transparent hover:bg-content dark:hover:bg-panel-hover-bg;
    }

    &.custom-button--success {
      @apply text-green-600 hover:text-green-700 bg-transparent hover:bg-green-50 dark:hover:bg-green-900/20;
    }

    &.custom-button--warning {
      @apply text-orange-600 hover:text-orange-700 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20;
    }

    &.custom-button--danger {
      @apply text-red-500 hover:text-red-600 bg-transparent hover:bg-red-50 dark:hover:bg-red-900/20;
    }
  }

  &--link {
    @apply hover:bg-transparent dark:hover:bg-transparent;
  }

  &--medium {
    @apply text-sm px-4 h-8;

    padding-top: 0;
    padding-bottom: 0;
    line-height: 32px;
  }

  &--small {
    @apply text-xs px-3 h-6;

    padding-top: 0;
    padding-bottom: 0;
    line-height: 24px;
  }

  &--large {
    @apply text-base px-5 h-10;

    padding-top: 0;
    padding-bottom: 0;
    line-height: 40px;
  }

  &--loading {
    @apply cursor-wait;
  }

  &--circle {
    @apply rounded-full !p-1;
  }

  &__loading {
    @apply absolute left-0 top-0 w-full h-full flex items-center justify-center bg-inherit;
  }

  &__icon {
    flex: 0 0 auto;
    width: 1em;
    height: 1em;
  }

  &__spinner {
    width: 1.25rem;
    height: 1.25rem;
    animation: rotate 0.8s linear infinite;
    will-change: transform;

    & .path {
      stroke: currentcolor;
      stroke-dasharray: 80, 150;
      stroke-linecap: round;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
