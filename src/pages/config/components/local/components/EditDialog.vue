<template>
  <el-dialog
    v-model="dialogVisible"
    :title="isEdit ? `编辑${type === 'app' ? '应用' : '书签'}` : `新增${type === 'app' ? '应用' : '书签'}`"
    width="500px"
    :close-on-click-modal="false"
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="80px"
      label-position="left"
    >
      <el-form-item label="名称" prop="title">
        <el-input
          v-model="formData.title"
          :placeholder="`请输入${type === 'app' ? '应用' : '书签'}名称`"
          clearable
        />
      </el-form-item>

      <el-form-item :label="type === 'app' ? '路径' : '网址'" prop="content">
        <el-input
          v-model="formData.content"
          :placeholder="`请输入${type === 'app' ? '应用路径' : '书签网址'}`"
          clearable
        >
          <template v-if="type === 'app'" #append>
            <el-button @click="handleSelectFile">浏览</el-button>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item label="图标" prop="icon">
        <div class="icon-upload-wrapper">
          <div v-if="formData.icon" class="icon-preview">
            <img :src="formData.icon" alt="icon" />
            <el-button
              link
              type="danger"
              size="small"
              @click="formData.icon = null"
            >
              移除
            </el-button>
          </div>
          <div v-else class="icon-placeholder">
             <span class="text-[11px] scale-75 text-gray-500 dark:text-gray-400">暂无图标</span>
          </div>
          <el-button
            v-if="type === 'app' && formData.content"
            size="small"
            @click="handleExtractAppIcon"
            :loading="fetchingIcon"
          >
            提取应用图标
          </el-button>
          <el-button
            v-if="type === 'bookmark' && formData.content"
            size="small"
            @click="handleFetchIcon"
            :loading="fetchingIcon"
          >
            获取网站图标
          </el-button>
        </div>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="danger" v-if="isEdit" @click="handleDelete">
          删除
        </el-button>
        <el-button type="primary" @click="handleSubmit" :loading="submitting">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { open as openFileDialog } from '@tauri-apps/plugin-dialog';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';

interface EditData {
  id?: string;
  title: string;
  content: string;
  icon?: string | null;
}

interface Props {
  type: 'app' | 'bookmark';
  editData?: EditData | null;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'app',
  editData: null
});

const emit = defineEmits<{
  (e: 'submit', data: EditData): void;
  (e: 'delete', id: string): void;
}>();

const dialogVisible = ref(false);
const formRef = ref<FormInstance>();
const submitting = ref(false);
const fetchingIcon = ref(false);

const formData = reactive<EditData>({
  title: '',
  content: '',
  icon: null
});

const isEdit = computed(() => !!props.editData?.id);

const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 1, max: 100, message: '名称长度在 1 到 100 个字符', trigger: 'blur' }
  ],
  content: [
    { required: true, message: `请输入${props.type === 'app' ? '路径' : '网址'}`, trigger: 'blur' }
  ]
});

watch(
  () => props.editData,
  (newData) => {
    if (newData) {
      formData.id = newData.id;
      formData.title = newData.title || '';
      formData.content = newData.content || '';
      formData.icon = newData.icon || null;
    } else {
      // 新增操作，清空所有数据
      formData.id = undefined;
      formData.title = '';
      formData.content = '';
      formData.icon = null;
    }
  },
  { immediate: true, deep: true }
);

const open = () => {
  dialogVisible.value = true;
};

const handleClose = () => {
  dialogVisible.value = false;
  formRef.value?.resetFields();
  // 确保所有字段都被清空，包括 id
  Object.assign(formData, { id: undefined, title: '', content: '', icon: null });
};

const handleSelectFile = async () => {
  try {
    const selected = await openFileDialog({
      multiple: false,
      directory: false,
      filters: [{
        name: '可执行文件',
        extensions: ['exe', 'lnk']
      }]
    });

    if (selected && typeof selected === 'string') {
      formData.content = selected;
      // 如果没有标题，尝试从文件名提取
      if (!formData.title) {
        const fileName = selected.split('\\').pop()?.replace(/\.(exe|lnk)$/i, '') || '';
        formData.title = fileName;
      }
      
      // 自动提取应用图标
      try {
        fetchingIcon.value = true;
        const iconResult = await invoke<string | null>('extract_icon_from_app', { 
          appPath: selected 
        });
        if (iconResult) {
          formData.icon = iconResult;
        }
      } catch (error) {
        console.error('提取图标失败:', error);
        // 不显示错误提示，图标是可选的
      } finally {
        fetchingIcon.value = false;
      }
    }
  } catch (error) {
    console.error('选择文件失败:', error);
    ElMessage.error('选择文件失败');
  }
};

const handleExtractAppIcon = async () => {
  if (!formData.content) {
    ElMessage.warning('请先输入应用路径');
    return;
  }

  fetchingIcon.value = true;
  try {
    const iconResult = await invoke<string | null>('extract_icon_from_app', { 
      appPath: formData.content 
    });
    if (iconResult) {
      formData.icon = iconResult;
      ElMessage.success('提取图标成功');
    } else {
      ElMessage.warning('未能提取到图标');
    }
  } catch (error) {
    console.error('提取图标失败:', error);
    ElMessage.error('提取图标失败');
  } finally {
    fetchingIcon.value = false;
  }
};

const handleFetchIcon = async () => {
  if (!formData.content) {
    ElMessage.warning('请先输入网址');
    return;
  }

  fetchingIcon.value = true;
  try {
    const icon = await invoke<string>('fetch_favicon', { url: formData.content });
    if (icon) {
      formData.icon = icon;
      ElMessage.success('获取图标成功');
    } else {
      ElMessage.warning('未能获取到图标');
    }
  } catch (error) {
    console.error('获取图标失败:', error);
    ElMessage.error('获取图标失败');
  } finally {
    fetchingIcon.value = false;
  }
};

const handleSubmit = async () => {
  if (!formRef.value) return;

  await formRef.value.validate((valid) => {
    if (valid) {
      submitting.value = true;
      emit('submit', { ...formData });
      setTimeout(() => {
        submitting.value = false;
        handleClose();
      }, 300);
    }
  });
};

const handleDelete = () => {
  if (formData.id) {
    emit('delete', formData.id);
    handleClose();
  }
};

defineExpose({ open });
</script>

<style scoped lang="scss">
.icon-upload-wrapper {
  @apply flex items-center gap-4;

  .icon-preview {
    @apply flex flex-col items-center gap-2;

    img {
      @apply w-12 h-12 object-contain rounded border border-gray-200;
    }
  }

  .icon-placeholder {
    @apply flex items-center justify-center w-12 h-12 border border-dashed border-gray-300 rounded;
  }
}

.dialog-footer {
  @apply flex justify-end gap-2;
}
</style>

