<template>
  <main class="content-container">
    <div class="content-title">
      <el-input v-model="title" autofocus placeholder="" @input="handleTitleChange" />
    </div>
    <!-- CodeMirror 代码高亮编辑器 -->
    <CodeMirrorEditor :codeStyle="{ height: 'calc(100vh - 105px)', overflowY: 'auto' }" v-model:code="editorContent"
      @update:code="handleEditorChange" />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useConfigurationStore } from '@/store'
import { getFragmentContent, editFragment } from '@/database/fragment'
import { debounce } from '@/utils'
const route = useRoute()
const store = useConfigurationStore()
const title = ref('')
const editorContent = ref('')
const currentContent = ref<ContentType>()
const isLoading = ref(false)
const isInitializing = ref(true)

defineOptions({
  name: 'Content'
})

// 获取片段内容
const fetchContent = async () => {
  isInitializing.value = true
  const result = await getFragmentContent(Number(route.params.id)) as ContentType[]
  if (result && result[0]) {
    currentContent.value = result[0]
    title.value = result[0].title
    editorContent.value = result[0].content || ''
  }
  nextTick(() => {
    isInitializing.value = false
  })
}

onMounted(async () => {
  const id = route.params.id
  if (id) {
    console.log('route.params.id changed:', id)
    await fetchContent()
  }
})

// 防抖处理提交
const debouncedSubmit = debounce(async (data: Partial<ContentType>) => {
  if (!currentContent.value || isLoading.value) return
  const params = {
    ...currentContent.value,
    ...data
  }
  console.log('params', params)
  await editFragment(params)
  // 更新 store 中的内容
  const index = store.contents.findIndex(item => item.id === currentContent.value?.id)
  if (index !== -1) {
    store.contents[index] = {
      ...store.contents[index],
      ...data
    }
  }
}, 500)

// 处理标题变化
const handleTitleChange = (value: string) => {
  if (isInitializing.value) return
  debouncedSubmit({ title: value })
}

// 处理编辑器内容变化
const handleEditorChange = (value: string) => {
  if (isInitializing.value) return
  console.log('处理 编辑器 内容变化>>>>')
  debouncedSubmit({ content: value })
}
</script>

<style scoped lang="scss">
@mixin common() {
  @apply outline-none dark:bg-[#282d32];
}

.content-container {
  @apply h-[calc(100vh-40px)] text-xs dark:bg-[#282d32];
  display: grid;
  grid-template-rows: 40px 1fr;

  .content-title {
    @apply border-b dark:border-b-[#43444e] mx-2 mb-1;

    :deep(input) {
      @apply text-lg dark:text-[#c9ccd4] pt-1 box-border;
    }
  }
}
</style>
