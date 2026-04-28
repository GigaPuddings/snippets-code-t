<template>
  <div class="settings-panel">
    <!-- 固定标题 -->
    <div class="panel-header">
      <h3 class="panel-title">{{ $t('settings.attachment.title') }}</h3>
    </div>
    
    <!-- 可滚动内容 -->
    <main class="panel-content">
      <!-- 附件路径模板 -->
      <section class="summarize-section transparent-input">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ $t('settings.attachment.pathTemplate') }}</div>
          <div class="summarize-label-desc">{{ $t('settings.attachment.pathTemplateHint') }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <el-input
            class="summarize-input"
            v-model="config.pathTemplate"
            :placeholder="$t('settings.attachment.pathTemplatePlaceholder')"
            :disabled="isSaving"
            @blur="handleConfigChange"
          />
        </div>
      </section>
      
      <!-- 文件名生成格式 -->
      <section class="summarize-section transparent-input">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ $t('settings.attachment.filenameFormat') }}</div>
          <div class="summarize-label-desc">{{ $t('settings.attachment.filenameFormatHint') }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <el-select 
            class="summarize-input !w-64"
            v-model="config.filenameFormat"
            :disabled="isSaving"
            @change="handleConfigChange"
          >
            <el-option 
              :label="$t('settings.attachment.formatObsidian')" 
              value="obsidian" 
            />
            <el-option 
              :label="$t('settings.attachment.formatSimple')" 
              value="simple" 
            />
            <el-option 
              :label="$t('settings.attachment.formatUuid')" 
              value="uuid" 
            />
          </el-select>
        </div>
      </section>
      
      <!-- 路径预览 -->
      <section class="summarize-section transparent-input">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ $t('settings.attachment.pathPreview') }}</div>
          <div class="summarize-label-desc">{{ $t('settings.attachment.pathPreviewHint') }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <div class="preview-box">
            <code>{{ previewPath }}</code>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { getAttachmentConfig, updateAttachmentConfig } from '@/api/markdown';
import type { AttachmentConfig } from '@/types/models';
import modal from '@/utils/modal';
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'AttachmentSettings'
});

const { t } = useI18n();

const config = ref<AttachmentConfig>({
  pathTemplate: 'assets/${noteFileName}/',
  filenameFormat: 'snippets-code'
});

const isLoading = ref(false);
const isSaving = ref(false);

const previewPath = computed(() => {
  const exampleName = t('settings.attachment.exampleNoteName') || '示例笔记';
  const exampleFile = generateExampleFilename(config.value.filenameFormat);
  return config.value.pathTemplate
    .replace('${noteFileName}', exampleName) + exampleFile;
});

function generateExampleFilename(format: string): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
  
  switch (format) {
    case 'snippets-code':
      return `Pasted image ${dateStr}${timeStr}.png`;
    case 'simple':
      return `image-${dateStr}-${timeStr}.png`;
    case 'uuid':
      return `${crypto.randomUUID()}.png`;
    default:
      return 'image.png';
  }
}

async function handleConfigChange() {
  if (isSaving.value) return; // 防止重复保存
  
  isSaving.value = true;
  try {
    await updateAttachmentConfig(config.value);
    modal.msg(t('settings.attachment.configSaved'));
  } catch (error) {
    console.error('保存配置失败:', error);
    modal.msg(t('settings.attachment.configSaveFailed'), 'error');
  } finally {
    isSaving.value = false;
  }
}

onMounted(async () => {
  isLoading.value = true;
  try {
    config.value = await getAttachmentConfig();
  } catch (error) {
    console.error('加载配置失败:', error);
    // 使用默认配置
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.preview-box {
  @apply bg-content border border-panel rounded px-3 py-2;

  code {
    @apply text-sm text-blue-600 dark:text-blue-400 font-mono;
  }
}
</style>
