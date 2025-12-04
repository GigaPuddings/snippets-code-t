<template>
  <div class="segmented">
    <div class="segmented-group">
      <!-- 通过 v-for 渲染选项 -->
      <div
        v-for="(item, index) in items"
        :key="getItemKey(item, index)"
        class="segmented-item"
        :class="{ 'segmented-item-selected': modelValue === index }"
        @click="selectItem(index)"
        ref="itemsRef"
      >
        <div class="segmented-item-label">
          <slot
            name="item"
            :item="item"
            :index="index"
            :selected="modelValue === index"
          >
            {{ getItemLabel(item) }}
          </slot>
        </div>
      </div>
      <!-- 滑块 -->
      <div class="slider" ref="slider"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';

const props = defineProps({
  // 选项列表，可以是字符串数组或对象数组
  items: {
    type: Array as PropType<any[]>,
    required: true,
    default: () => []
  },
  // 当前选中项的索引 (v-model)
  modelValue: {
    type: Number,
    default: 0
  },
  // 当items是对象数组时，指定显示哪个字段作为标签
  itemLabel: {
    type: String,
    default: 'label'
  },
  // 当items是对象数组时，指定哪个字段作为唯一键
  itemKey: {
    type: String,
    default: 'key'
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const slider = ref<HTMLElement | null>(null);
const itemsRef = ref<HTMLElement[]>([]);

// 获取选项标签
const getItemLabel = (item: any): string => {
  return typeof item === 'object' ? item[props.itemLabel] : item;
};

// 获取选项唯一键
const getItemKey = (item: any, index: number): string | number => {
  if (typeof item === 'object' && props.itemKey in item) {
    return item[props.itemKey];
  }
  return index;
};

// 选择项
const selectItem = (index: number) => {
  if (props.disabled) return;
  if (index < 0 || index >= props.items.length) return;
  if (index !== props.modelValue) {
    emit('update:modelValue', index);
    emit('change', index);
  }
};

// 更新滑块位置
const updateSliderPosition = () => {
  nextTick(() => {
    if (!slider.value || !itemsRef.value.length) return;

    const selectedIndex = Math.min(
      Math.max(0, props.modelValue),
      props.items.length - 1
    );
    const selectedItem = itemsRef.value[selectedIndex];

    if (!selectedItem) return;

    // 计算前序元素的宽度总和
    let offsetLeft = 0;
    for (let i = 0; i < selectedIndex; i++) {
      offsetLeft += itemsRef.value[i].offsetWidth + 8;
    }

    slider.value.style.width = `${selectedItem.offsetWidth}px`;
    slider.value.style.transform = `translateX(${offsetLeft}px)`;
  });
};

// 监听窗口大小变化和modelValue变化
onMounted(() => {
  updateSliderPosition();
  window.addEventListener('resize', updateSliderPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSliderPosition);
});

watch(() => props.modelValue, updateSliderPosition);
watch(() => props.items, updateSliderPosition, { deep: true, immediate: true });
</script>

<style scoped>
.segmented {
  @apply relative overflow-hidden inline-block p-1 box-border m-0 text-panel dark:text-panel text-sm list-none bg-content rounded-md;
}

.segmented-group {
  @apply relative flex items-stretch justify-start w-full gap-2;
}

.segmented-item {
  @apply relative text-center cursor-pointer transition-colors duration-200 rounded-md z-10 flex-1 min-w-max;
}

.segmented-item[disabled] {
  @apply cursor-not-allowed opacity-50;
}

.segmented-item-label {
  @apply flex items-center justify-center min-h-6 leading-6 px-3 overflow-hidden whitespace-nowrap text-ellipsis;
}

.slider {
  @apply absolute top-0 bottom-0 bg-white hover:bg-active dark:bg-active dark:hover:bg-active dark:!text-panel shadow-sm rounded-md;

  z-index: 0;
  transition:
    transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
