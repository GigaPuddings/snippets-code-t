<template>
  <component
    :is="as"
    class="context-menu-item"
    :class="{
      'is-disabled': disabled,
      'is-active': active,
      'is-danger': danger
    }"
    :type="as === 'button' ? 'button' : undefined"
    role="menuitem"
    :disabled="as === 'button' ? disabled : undefined"
    :aria-disabled="disabled || undefined"
  >
    <slot></slot>
    <kbd v-if="shortcut" class="context-menu-shortcut">{{ shortcut }}</kbd>
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'button' | 'div';
    disabled?: boolean;
    active?: boolean;
    danger?: boolean;
    shortcut?: string;
  }>(),
  { as: 'button' }
);
</script>
