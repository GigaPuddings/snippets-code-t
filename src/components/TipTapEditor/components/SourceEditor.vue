<template>
  <div class="source-editor" @contextmenu="handleContextMenu">
    <div v-if="props.showLineNumbers" ref="lineNumbersRef" class="line-numbers" aria-hidden="true">
      <span v-for="line in lineCount" :key="line">{{ line }}</span>
    </div>
    <textarea
      ref="textareaRef"
      v-model="localContent"
      class="source-textarea"
      :class="{ 'dark': dark }"
      @input="handleInput"
      @keydown="handleKeyDown"
      @scroll="handleScroll"
      spellcheck="false"
      placeholder="# Markdown 源码"
    ></textarea>
  </div>
</template>

<script setup lang="ts">

interface Props {
  content: string;
  dark?: boolean;
  showLineNumbers?: boolean;
  indentWithTab?: boolean;
  tabSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  showLineNumbers: true,
  indentWithTab: true,
  tabSize: 2
});

const emits = defineEmits<{
  'update:content': [value: string];
  contextmenu: [event: MouseEvent];
  scroll: [];
}>();

const localContent = ref(props.content);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const lineNumbersRef = ref<HTMLDivElement | null>(null);

const lineCount = computed(() => Math.max(1, localContent.value.split('\n').length));

watch(() => props.content, (newContent) => {
  if (newContent !== localContent.value) {
    localContent.value = newContent;
  }
});

const handleInput = () => {
  emits('update:content', localContent.value);
};

const updateContentWithSelection = (value: string, start: number, end: number) => {
  localContent.value = value;
  emits('update:content', localContent.value);

  nextTick(() => {
    textareaRef.value?.setSelectionRange(start, end);
  });
};

const indentSelection = (textarea: HTMLTextAreaElement, indentText: string) => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const lineStart = localContent.value.lastIndexOf('\n', start - 1) + 1;
  const selectedBlock = localContent.value.slice(lineStart, end);
  const indentedBlock = selectedBlock.replace(/^/gm, indentText);

  updateContentWithSelection(
    localContent.value.slice(0, lineStart) + indentedBlock + localContent.value.slice(end),
    start + indentText.length,
    end + indentedBlock.length - selectedBlock.length
  );
};

const outdentSelection = (textarea: HTMLTextAreaElement, indentText: string) => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const lineStart = localContent.value.lastIndexOf('\n', start - 1) + 1;
  const selectedBlock = localContent.value.slice(lineStart, end);
  const outdentedBlock = selectedBlock.replace(new RegExp(`^(?:${indentText}| {1,${props.tabSize}}|\\t)`, 'gm'), '');
  const removedBeforeCursor = selectedBlock.length - selectedBlock.slice(0, start - lineStart).replace(new RegExp(`^(?:${indentText}| {1,${props.tabSize}}|\\t)`, 'gm'), '').length;

  updateContentWithSelection(
    localContent.value.slice(0, lineStart) + outdentedBlock + localContent.value.slice(end),
    Math.max(lineStart, start - removedBeforeCursor),
    Math.max(lineStart, end - (selectedBlock.length - outdentedBlock.length))
  );
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (!props.indentWithTab || event.key !== 'Tab' || !textareaRef.value) return;

  event.preventDefault();
  const textarea = textareaRef.value;
  const indentText = ' '.repeat(Math.max(1, props.tabSize));

  if (event.shiftKey) {
    outdentSelection(textarea, indentText);
    return;
  }

  if (textarea.selectionStart === textarea.selectionEnd) {
    const start = textarea.selectionStart;
    updateContentWithSelection(
      localContent.value.slice(0, start) + indentText + localContent.value.slice(start),
      start + indentText.length,
      start + indentText.length
    );
    return;
  }

  indentSelection(textarea, indentText);
};

const handleContextMenu = (event: MouseEvent) => {
  emits('contextmenu', event);
};

const handleScroll = () => {
  if (lineNumbersRef.value && textareaRef.value) {
    lineNumbersRef.value.scrollTop = textareaRef.value.scrollTop;
  }
  emits('scroll');
};

  // 暴露方法供父组件调用
  defineExpose({
    getTextarea: () => textareaRef.value,
    focus: () => {
      textareaRef.value?.focus();
    },
    selectAll: () => {
      if (!textareaRef.value) return;
      textareaRef.value.select();
      textareaRef.value.focus();
    },
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
    },
    // 插入文本
    insertText: (text: string) => {
      if (!textareaRef.value) return;
      
      const start = textareaRef.value.selectionStart;
      const end = textareaRef.value.selectionEnd;
      const before = localContent.value.substring(0, start);
      const after = localContent.value.substring(end);
      
      localContent.value = before + text + after;
      emits('update:content', localContent.value);
      
      // 设置光标位置到插入文本的末尾
      nextTick(() => {
        if (textareaRef.value) {
          textareaRef.value.setSelectionRange(start + text.length, start + text.length);
          textareaRef.value.focus();
        }
      });
    },
    // 包裹选中文本
    wrapSelection: (before: string, after: string) => {
      if (!textareaRef.value) return;
      
      const start = textareaRef.value.selectionStart;
      const end = textareaRef.value.selectionEnd;
      const selectedText = localContent.value.substring(start, end);
      const beforeText = localContent.value.substring(0, start);
      const afterText = localContent.value.substring(end);
      
      if (selectedText) {
        // 有选中文本，包裹它
        localContent.value = beforeText + before + selectedText + after + afterText;
        emits('update:content', localContent.value);
        
        nextTick(() => {
          if (textareaRef.value) {
            // 选中包裹后的文本
            textareaRef.value.setSelectionRange(start + before.length, start + before.length + selectedText.length);
            textareaRef.value.focus();
          }
        });
      } else {
        // 无选中文本，插入标记并将光标放在中间
        localContent.value = beforeText + before + after + afterText;
        emits('update:content', localContent.value);
        
        nextTick(() => {
          if (textareaRef.value) {
            textareaRef.value.setSelectionRange(start + before.length, start + before.length);
            textareaRef.value.focus();
          }
        });
      }
    },
    // 在行首插入前缀
    insertLinePrefix: (prefix: string) => {
      if (!textareaRef.value) return;
      
      const start = textareaRef.value.selectionStart;
      const lines = localContent.value.split('\n');
      let charCount = 0;
      let currentLine = 0;
      
      // 找到当前行
      for (let i = 0; i < lines.length; i++) {
        if (charCount + lines[i].length >= start) {
          currentLine = i;
          break;
        }
        charCount += lines[i].length + 1;
      }
      
      // 在当前行首插入前缀
      lines[currentLine] = prefix + lines[currentLine];
      localContent.value = lines.join('\n');
      emits('update:content', localContent.value);
      
      nextTick(() => {
        if (textareaRef.value) {
          textareaRef.value.setSelectionRange(start + prefix.length, start + prefix.length);
          textareaRef.value.focus();
        }
      });
    }
  });
</script>

<style lang="scss" scoped>
.source-editor {
  @apply flex flex-1 overflow-hidden;
}

.line-numbers {
  @apply h-full flex flex-col flex-none overflow-hidden select-none border-r px-2 py-4 text-right font-mono text-sm;
  min-width: 48px;
  line-height: 1.5;
  color: var(--text-color-secondary);
  background-color: var(--editor-bg);
  border-color: var(--border-color);

  span {
    @apply block;
    height: 1.5em;
  }
}

.source-textarea {
  @apply h-full flex-1 p-4 outline-none resize-none font-mono text-sm;
  min-width: 0;
  background-color: var(--editor-bg);
  color: var(--editor-text);
  transition: background-color 0.3s ease, color 0.3s ease;
  padding-bottom: 28px;
  line-height: 1.5;

  &::selection {
    @apply bg-blue-200;
  }

  &.dark::selection {
    @apply bg-[#5d6dfd] bg-opacity-40;
  }
}
</style>
