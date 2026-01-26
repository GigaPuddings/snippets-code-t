<template>
  <div class="source-editor" @contextmenu="handleContextMenu">
    <textarea
      ref="textareaRef"
      v-model="localContent"
      class="source-textarea"
      :class="{ 'dark': dark }"
      @input="handleInput"
      @scroll="handleScroll"
      spellcheck="false"
      placeholder="# Markdown 源码"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  content: string;
  dark?: boolean;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  'update:content': [value: string];
  contextmenu: [event: MouseEvent];
  scroll: [];
}>();

const localContent = ref(props.content);
const textareaRef = ref<HTMLTextAreaElement | null>(null);

watch(() => props.content, (newContent) => {
  if (newContent !== localContent.value) {
    localContent.value = newContent;
  }
});

const handleInput = () => {
  emits('update:content', localContent.value);
};

const handleContextMenu = (event: MouseEvent) => {
  emits('contextmenu', event);
};

const handleScroll = () => {
  emits('scroll');
};

// 暴露方法供父组件调用
defineExpose({
  getTextarea: () => textareaRef.value,
  scrollToLine: (lineNumber: number) => {
    if (!textareaRef.value) return;
    
    const lines = localContent.value.split('\n');
    let charCount = 0;
    
    for (let i = 0; i < Math.min(lineNumber, lines.length); i++) {
      charCount += lines[i].length + 1; // +1 for newline
    }
    
    // 设置光标位置
    textareaRef.value.focus();
    textareaRef.value.setSelectionRange(charCount, charCount);
    
    // 计算实际行高
    const computedStyle = window.getComputedStyle(textareaRef.value);
    const fontSize = parseFloat(computedStyle.fontSize);
    const lineHeight = fontSize * 1.5; // line-height: 1.5
    
    // 计算滚动位置，添加小偏移让标题更靠近顶部
    const targetScroll = Math.max(0, lineNumber * lineHeight - 10);
    textareaRef.value.scrollTop = targetScroll;
  }
});
</script>

<style lang="scss" scoped>
.source-editor {
  @apply flex-1 overflow-hidden;
}

.source-textarea {
  @apply w-full h-full p-4 outline-none resize-none font-mono text-sm;
  background-color: #ffffff;
  color: #2e2e2e;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding-bottom: 28px;
  line-height: 1.5;

  &.dark {
    @apply bg-[#1a1a1a] text-[#CECFD0];
  }

  &::selection {
    @apply bg-blue-200;
  }

  &.dark::selection {
    @apply bg-[#5d6dfd] bg-opacity-40;
  }
}
</style>
