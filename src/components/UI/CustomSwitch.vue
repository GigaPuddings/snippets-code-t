<template>
  <div
    class="custom-switch"
    :class="{
      'custom-switch--active': modelValue,
      'custom-switch--disabled': disabled
    }"
    @click="toggleSwitch"
  >
    <span
      v-if="activeText || inactiveText"
      class="custom-switch__text"
      :class="{ 'custom-switch__text--active': modelValue }"
    >
      {{ modelValue ? activeText : inactiveText }}
    </span>
    <div class="custom-switch__core">
      <div class="custom-switch__handle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CustomSwitch'
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  activeColor: {
    type: String,
    default: '#4b94f8'
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const toggleSwitch = () => {
  if (props.disabled) return;

  const newValue = !props.modelValue;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};
</script>

<style scoped lang="scss">
.custom-switch {
  @apply inline-flex items-center cursor-pointer select-none;

  &--disabled {
    @apply opacity-60 cursor-not-allowed;
  }

  &__core {
    @apply relative h-5 w-10 rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-300 mx-1;

    .custom-switch--active & {
      @apply bg-active;
    }
  }

  &__handle {
    @apply absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-all duration-300 transform;

    .custom-switch--active & {
      @apply translate-x-5;
    }
  }

  &__text {
    @apply text-xs text-panel;

    &--active {
      @apply text-panel;
    }
  }
}
</style>
