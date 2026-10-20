<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {
  wallpaperSources,
  type WallpaperProvider,
  type WallhavenSource
} from '../../../api';

const props = defineProps<{
  modelValue: WallhavenSource;
  provider: WallpaperProvider;
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
  { value: 'latest', labelKey: 'wallpaperSwitcher.latest' },
  { value: 'hot', labelKey: 'wallpaperSwitcher.hot' },
  { value: 'toplist', labelKey: 'wallpaperSwitcher.toplist' },
  { value: 'favorites', labelKey: 'wallpaperSwitcher.favorites' }
];
const visibleOptions = computed(() =>
  options.filter((option) =>
    wallpaperSources(props.provider).includes(option.value)
  )
);

const selectSource = (source: WallhavenSource, disabled?: boolean) => {
  if (disabled) return;
  emit('update:modelValue', source);
};
</script>

<template>
  <template v-for="option in visibleOptions" :key="option.value">
    <button
      v-if="tabClass === 'button'"
      type="button"
      :class="{ [activeClass || 'active']: modelValue === option.value }"
      :disabled="disabled"
      :title="t(option.labelKey)"
      :aria-pressed="modelValue === option.value"
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
      :aria-selected="modelValue === option.value"
      tabindex="0"
      @click="selectSource(option.value, disabled)"
      @keydown.enter.prevent="selectSource(option.value, disabled)"
    >
      {{ t(option.labelKey) }}
    </div>
  </template>
</template>
