<template>
  <div
    v-if="visible"
    class="ai-selection-toolbar"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
    @mousedown.prevent
  >
    <CustomButton type="primary" size="small" @click="emit('rewrite')">
      ✦ AI 润色选区
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import { CustomButton } from '@/components/UI';

defineProps<{
  visible: boolean;
  position: { x: number; y: number };
}>();

const emit = defineEmits<{
  rewrite: [];
}>();
</script>

<style scoped lang="scss">
.ai-selection-toolbar {
  position: fixed;
  z-index: 3000;
  padding: 4px;
  background: var(--dialog-bg);
  border: 1px solid var(--dialog-border);
  border-radius: 8px;
  box-shadow: 0 8px 22px rgb(16 24 40 / 18%);
  transform: translate(-50%, -100%);
}
</style>
