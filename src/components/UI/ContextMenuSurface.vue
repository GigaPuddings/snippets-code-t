<template>
  <div
    ref="element"
    class="context-menu-surface"
    :class="{ 'context-menu-surface--scaled': scaled }"
    role="menu"
  >
    <div class="context-menu-list" role="presentation">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@/styles/menus.scss';

defineProps<{ scaled?: boolean }>();

const element = ref<HTMLDivElement | null>(null);
defineExpose({ element });
</script>
