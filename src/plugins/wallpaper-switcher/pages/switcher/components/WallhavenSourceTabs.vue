<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { WallhavenSource } from '../../../api';

defineProps<{
  modelValue: WallhavenSource;
  disabled?: boolean;
  tabClass?: string;
  activeClass?: string;
  disabledClass?: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: WallhavenSource): void;
}>();

const { t } = useI18n();

const options: Array<{ value: WallhavenSource; labelKey: string }> = [
  { value: 'hot', labelKey: 'wallpaperSwitcher.hot' },
  { value: 'toplist', labelKey: 'wallpaperSwitcher.toplist' },
  { value: 'favorites', labelKey: 'wallpaperSwitcher.favorites' }
];

const selectSource = (source: WallhavenSource, disabled?: boolean) => {
  if (disabled) return;
  emit('update:modelValue', source);
};
</script>

<template>
  <template v-for="option in options" :key="option.value">
    <button
      v-if="tabClass === 'button'"
      type="button"
      :class="{ [activeClass || 'active']: modelValue === option.value }"
      :disabled="disabled"
      @click="selectSource(option.value, disabled)"
    >
      {{ t(option.labelKey) }}
    </button>
    <div
      v-else
      class="seg-tab"
      :class="{
        [activeClass || 'active']: modelValue === option.value,
        [disabledClass || 'disabled']: disabled
      }"
      role="tab"
      tabindex="0"
      @click="selectSource(option.value, disabled)"
      @keydown.enter.prevent="selectSource(option.value, disabled)"
    >
      {{ t(option.labelKey) }}
    </div>
  </template>
</template>
