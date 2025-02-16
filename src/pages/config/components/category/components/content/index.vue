<template>
  <main class="content-container">
    <div class="content-title">
      <el-input
        v-model="state.title"
        autofocus
        placeholder=""
        @change="handleTitleChange"
      />
    </div>
    <!-- CodeMirror 代码高亮编辑器 -->
    <CodeMirrorEditor
      :code="state.editorContent"
      :codeStyle="{ height: 'calc(100vh - 110px)', overflowY: 'auto' }"
      @update:code="handleEditorChange"
      :dark="isDark"
    />
  </main>
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { getFragmentContent, editFragment } from '@/database/fragment';
import { debounce } from '@/utils';

// 组件状态集中管理
const state = reactive({
  title: '',
  editorContent: '',
  currentContent: null as ContentType | null,
  isLoading: false,
  isInitializing: true,
  contentChanged: false
});

const route = useRoute();
const store = useConfigurationStore();

const isDark = computed(() => store.theme === 'dark');

defineOptions({
  name: 'Content'
});

// 更新 store 中的内容
const updateStore = (data: Partial<ContentType>) => {
  if (!state.currentContent) return;

  const index = store.contents.findIndex(
    (item) => item.id === state.currentContent?.id
  );

  if (index !== -1) {
    store.contents[index] = {
      ...store.contents[index],
      ...data
    };
  }
};

// 保存内容的核心逻辑
const saveContent = async (data: Partial<ContentType> = {}) => {
  if (!state.currentContent || state.isLoading) return;

  try {
    state.isLoading = true;

    const params = {
      ...state.currentContent,
      title: state.title,
      content: state.editorContent,
      ...data
    };

    await editFragment(params);
    updateStore(params);

    // 更新当前内容的引用
    state.currentContent = {
      ...state.currentContent,
      ...params
    };
    state.contentChanged = false;
  } catch (error) {
    console.error('保存失败:', error);
    ElMessage.error('保存失败，请重试');
  } finally {
    state.isLoading = false;
  }
};

// 使用 useDebounceFn 代替普通的 debounce
const debouncedSave = debounce(saveContent, 300);

// 处理内容变更的通用函数
const handleContentChange = (
  value: string,
  field: 'title' | 'content',
  currentValue?: string
) => {
  if (state.isInitializing) return;

  if (value !== currentValue) {
    state.contentChanged = true;
    if (field === 'title') {
      state.title = value;
      // 标题变更时立即更新 store，提升用户体验
      updateStore({ title: value });
    } else {
      state.editorContent = value;
    }

    debouncedSave();
  }
};

// 处理标题变更
const handleTitleChange = (value: string) =>
  handleContentChange(value, 'title', state.currentContent?.title);

// 处理编辑器内容变更
const handleEditorChange = (value: string) =>
  handleContentChange(value, 'content', state.currentContent?.content);

// 获取片段内容
const fetchContent = async () => {
  state.isInitializing = true;

  try {
    const result = await getFragmentContent(Number(route.params.id));

    if (result?.[0]) {
      state.currentContent = result[0];
      state.title = result[0].title;
      state.editorContent = result[0].content || '';
      state.contentChanged = false;
    }
  } catch (error) {
    console.error('获取内容失败:', error);
    ElMessage.error('获取内容失败，请重试');
  } finally {
    nextTick(() => {
      state.isInitializing = false;
    });
  }
};

// 组件挂载
onMounted(async () => {
  const id = route.params.id;
  if (id) {
    await fetchContent();
  }
});

// 组件卸载前保存
onBeforeUnmount(async () => {
  if (state.currentContent && state.contentChanged) {
    debouncedSave.cancel();
    await saveContent();
  }
});
</script>

<style scoped lang="scss">
@mixin common() {
  @apply outline-none bg-panel;
}

.content-container {
  @apply h-full text-xs bg-panel;

  display: grid;
  grid-template-rows: 40px 1fr;

  .content-title {
    @apply border-b border-panel mx-2;

    :deep(input) {
      @apply text-lg text-panel pt-1 box-border;
    }
  }
}
</style>
