<template>
  <div
    v-if="visible"
    ref="toolbar"
    class="ai-selection-toolbar fixed z-40 rounded-ui border border-solid border-[var(--dialog-border)] bg-[var(--dialog-bg)] p-1 shadow-[var(--toast-shadow)]"
    :style="{ left: `${offset.left}px`, top: `${offset.top}px` }"
    @mousedown.prevent
  >
    <CustomButton type="primary" size="small" @click="emit('rewrite')">
      ✦ {{ t('aiAssist.selectionRewrite') }}
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import { selectionToolbarPosition, type SelectionAnchor } from './position';

const { t } = useI18n();

const props = defineProps<{
  visible: boolean;
  position: SelectionAnchor;
}>();

const emit = defineEmits<{
  rewrite: [];
  dismiss: [];
}>();
const toolbar = ref<HTMLElement | null>(null);
const offset = ref({ left: 0, top: 0 });

watchPostEffect(() => {
  if (!props.visible || !toolbar.value) return;
  offset.value = selectionToolbarPosition(
    props.position,
    toolbar.value.getBoundingClientRect(),
    { width: window.innerWidth, height: window.innerHeight }
  );
});

const dismiss = (): void => {
  if (props.visible) emit('dismiss');
};
const outside = (event: PointerEvent): void => {
  if (event.target instanceof Node && !toolbar.value?.contains(event.target)) {
    dismiss();
  }
};
onMounted(() => {
  document.addEventListener('pointerdown', outside, true);
  document.addEventListener('scroll', dismiss, true);
  window.addEventListener('resize', dismiss);
});
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', outside, true);
  document.removeEventListener('scroll', dismiss, true);
  window.removeEventListener('resize', dismiss);
});
</script>
