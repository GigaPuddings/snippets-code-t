<template>
  <el-dialog
    v-model="dialogVisible"
    :title="isEdit ? (type === 'app' ? $t('editDialog.editApp') : $t('editDialog.editBookmark')) : (type === 'app' ? $t('editDialog.addApp') : $t('editDialog.addBookmark'))"
    width="540px"
    :close-on-click-modal="false"
    :draggable="true"
    class="edit-dialog"
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="90px"
      label-position="left"
      class="edit-form"
    >
      <el-form-item :label="$t('editDialog.name')" prop="title" class="form-item-name">
        <el-input
          v-model="formData.title"
          :placeholder="$t('editDialog.namePlaceholder', { type: type === 'app' ? $t('local.apps') : $t('local.bookmarks') })"
          clearable
        />
      </el-form-item>

      <el-form-item :label="type === 'app' ? $t('editDialog.path') : $t('editDialog.url')" prop="content" class="form-item-path">
        <el-input
          v-model="formData.content"
          :placeholder="type === 'app' ? $t('editDialog.pathPlaceholder') : $t('editDialog.urlPlaceholder')"
          clearable
        >
          <template v-if="type === 'app'" #append>
            <el-button @click="handleSelectFile">{{ $t('common.browse') }}</el-button>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item :label="$t('editDialog.icon')" prop="icon" class="form-item-icon">
        <div class="icon-section">
          <div class="icon-display">
            <div v-if="formData.icon" class="icon-preview has-icon">
              <img :src="formData.icon" alt="icon" />
              <div class="icon-overlay">
                <el-button
                  link
                  type="danger"
                  size="small"
                  class="remove-btn"
                  @click="formData.icon = null"
                >
                  <Delete theme="outline" size="14" :strokeWidth="3" />
                </el-button>
              </div>
            </div>
            <div v-else class="icon-placeholder">
              <Application v-if="type === 'app'" theme="outline" size="24" :strokeWidth="2" />
              <Browser v-else theme="outline" size="24" :strokeWidth="2" />
              <span class="placeholder-text">{{ $t('editDialog.noIcon') }}</span>
            </div>
          </div>
          <div class="icon-actions">
            <el-button
              v-if="type === 'app' && formData.content"
              @click="handleExtractAppIcon"
              :loading="fetchingIcon"
              class="extract-btn"
            >
              {{ $t('editDialog.extractIcon') }}
            </el-button>
            <el-button
              v-if="type === 'bookmark' && formData.content"
              @click="handleFetchIcon"
              size="small"
              :loading="fetchingIcon"
              class="extract-btn"
            >
              {{ $t('editDialog.fetchIcon') }}
            </el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <div class="footer-left">
          <el-button type="danger" plain v-if="isEdit" @click="handleDelete" class="delete-btn">
            <Delete theme="outline" size="14" :strokeWidth="3" />
            {{ $t('common.delete') }}
          </el-button>
        </div>
        <div class="footer-right">
          <el-button @click="handleClose" class="cancel-btn">{{ $t('common.cancel') }}</el-button>
          <el-button type="primary" @click="handleSubmit" :loading="submitting" class="submit-btn">
            <Check v-if="!submitting" theme="outline" size="14" :strokeWidth="3" />
            {{ isEdit ? $t('common.save') : $t('common.add') }}
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { open as openFileDialog } from '@tauri-apps/plugin-dialog';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { Application, Browser, Delete, Check } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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

const rules = computed<FormRules>(() => ({
  title: [
    { required: true, message: t('editDialog.nameRequired'), trigger: 'blur' },
    { min: 1, max: 100, message: t('editDialog.nameLength'), trigger: 'blur' }
  ],
  content: [
    { required: true, message: props.type === 'app' ? t('editDialog.pathRequired') : t('editDialog.urlRequired'), trigger: 'blur' }
  ]
}));

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
        name: t('editDialog.executableFiles'),
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
    ElMessage.error(t('editDialog.selectFile'));
  }
};

const handleExtractAppIcon = async () => {
  if (!formData.content) {
    ElMessage.warning(t('editDialog.enterPathFirst'));
    return;
  }

  fetchingIcon.value = true;
  try {
    const iconResult = await invoke<string | null>('extract_icon_from_app', { 
      appPath: formData.content 
    });
    if (iconResult) {
      formData.icon = iconResult;
      ElMessage.success(t('editDialog.extractSuccess'));
    } else {
      ElMessage.warning(t('editDialog.noIconFound'));
    }
  } catch (error) {
    console.error('Extract icon failed:', error);
    ElMessage.error(t('editDialog.extractFailed'));
  } finally {
    fetchingIcon.value = false;
  }
};

const handleFetchIcon = async () => {
  if (!formData.content) {
    ElMessage.warning(t('editDialog.enterUrlFirst'));
    return;
  }

  fetchingIcon.value = true;
  try {
    const icon = await invoke<string>('fetch_favicon', { url: formData.content });
    if (icon) {
      formData.icon = icon;
      ElMessage.success(t('editDialog.fetchSuccess'));
    } else {
      ElMessage.warning(t('editDialog.noIconFound'));
    }
  } catch (error) {
    console.error('Fetch icon failed:', error);
    ElMessage.error(t('editDialog.fetchFailed'));
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
:deep(.edit-dialog) {
  .el-dialog__header {
    @apply pb-3 border-b border-gray-200 dark:border-neutral-700;
    
    .el-dialog__title {
      @apply text-lg font-semibold text-gray-900 dark:text-white;
    }
  }
  
  .el-dialog__body {
    @apply pt-6 pb-4;
  }
}

.edit-form {
  :deep(.el-form-item) {
    @apply mb-6;
    
    .el-form-item__label {
      @apply text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1;
      
      &::before {
        @apply hidden;
      }
      
      &::after {
        content: '：';
        @apply text-gray-500 dark:text-gray-400;
      }
    }
    
    .el-form-item__error {
      @apply mt-1;
    }
  }
  
  .form-item-name, .form-item-path {
    :deep(.el-input) {
      .el-input__wrapper {
        @apply border-gray-300 dark:border-neutral-600 hover:border-blue-400 dark:hover:border-blue-500;
        transition: all 0.3s ease;
        
        &.is-focus {
          @apply border-blue-500 dark:border-blue-400;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      }
    }
  }
  
  .form-item-icon {
    :deep(.el-form-item__content) {
      @apply flex items-start;
    }
    
    .icon-section {
      @apply flex gap-4 items-center justify-center;
      
      .icon-display {
        .icon-preview {
          @apply relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-800 border-2 border-gray-200 dark:border-neutral-700;
          transition: all 0.3s ease;
          
          &.has-icon {
            @apply border-transparent shadow-md hover:shadow-lg;
            
            &:hover {
              transform: scale(1.05);
              
              .icon-overlay {
                @apply opacity-100;
              }
            }
          }
          
          img {
            @apply w-full h-full object-contain p-2;
          }
          
          .icon-overlay {
            @apply absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-200;
            
            .remove-btn {
              @apply text-white hover:text-red-400;
              
              :deep(.i-icon) {
                @apply text-current;
              }
            }
          }
        }
        
        .icon-placeholder {
          @apply w-16 h-16 rounded-xl border-2 border-dashed border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 flex flex-col items-center justify-center gap-1 text-gray-400 dark:text-gray-500;
          transition: all 0.3s ease;
          
          &:hover {
            @apply border-gray-400 dark:border-neutral-500 bg-gray-100 dark:bg-neutral-700;
          }
          
          .placeholder-text {
            @apply text-xs;
          }
        }
      }
      
      .icon-actions {
        @apply flex flex-col gap-2;
        
        .extract-btn {
          @apply flex items-center gap-1;
          
          :deep(.el-button__text) {
            @apply flex items-center gap-1;
          }
          
          &:hover {
            @apply shadow-sm;
          }
        }
      }
    }
  }
}

.dialog-footer {
  @apply flex justify-between items-center pt-4 border-t border-gray-200 dark:border-neutral-700;
  
  .footer-left {
    @apply flex items-center;
    
    .delete-btn {
      @apply flex items-center gap-1;
      
      &:hover {
        @apply bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-600;
      }
      
      :deep(.el-button__text) {
        @apply flex items-center gap-1;
      }
    }
  }
  
  .footer-right {
    @apply flex items-center gap-3;
    
    .cancel-btn {
      @apply hover:bg-gray-100 dark:hover:bg-neutral-700;
    }
    
    .submit-btn {
      @apply min-w-[100px] flex items-center gap-1;
      
      :deep(.el-button__text) {
        @apply flex items-center gap-1;
      }
      
      &:not(:disabled):hover {
        @apply shadow-md;
        transform: translateY(-1px);
      }
    }
  }
}
</style>

