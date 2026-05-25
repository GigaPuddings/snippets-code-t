<template>
  <el-dialog
    :model-value="modelValue"
    :title="$t('screenRecorder.exportSettings')"
    width="420px"
    append-to-body
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="export-form">
      <label>
        <span>{{ $t('screenRecorder.format') }}</span>
        <el-segmented
          :model-value="settings.format"
          :options="formatOptions"
          @update:model-value="handleFormatChange"
        />
      </label>
      <label>
        <span>{{ $t('screenRecorder.fps') }}</span>
        <el-select
          :model-value="settings.fps"
          @update:model-value="handleFpsChange"
        >
          <el-option v-for="fps in fpsOptions" :key="fps" :label="`${fps} FPS`" :value="fps" />
        </el-select>
      </label>
      <label>
        <span>{{ $t('screenRecorder.quality') }}</span>
        <el-select
          :model-value="settings.quality"
          @update:model-value="handleQualityChange"
        >
          <el-option :label="$t('screenRecorder.qualityHigh')" value="high" />
          <el-option :label="$t('screenRecorder.qualityStandard')" value="standard" />
          <el-option :label="$t('screenRecorder.qualitySmall')" value="small" />
        </el-select>
      </label>
      <label>
        <span>{{ $t('screenRecorder.savePath') }}</span>
        <div class="path-row">
          <el-input :model-value="settings.savePath" readonly />
          <el-button @click="choosePath">{{ $t('common.browse') }}</el-button>
        </div>
      </label>
    </div>
    <template #footer>
      <el-button @click="$emit('cancel')">{{ $t('common.cancel') }}</el-button>
      <el-button type="primary" :disabled="!settings.savePath" @click="$emit('export')">
        {{ $t('screenRecorder.export') }}
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { save } from '@tauri-apps/plugin-dialog';
import type { RecordingSettings } from '../core/types';

const props = defineProps<{
  modelValue: boolean;
  settings: RecordingSettings;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'update:settings': [value: RecordingSettings];
  export: [];
  cancel: [];
}>();

const formatOptions = [
  { label: 'MP4', value: 'mp4' },
  { label: 'GIF', value: 'gif' }
];
const fpsOptions = [15, 24, 30, 60];

const updateSetting = <Key extends keyof RecordingSettings>(
  key: Key,
  value: RecordingSettings[Key]
) => {
  emit('update:settings', {
    ...props.settings,
    [key]: value
  });
};

const handleFormatChange = (value: string | number | boolean | undefined) => {
  updateSetting('format', value === 'gif' ? 'gif' : 'mp4');
};

const handleFpsChange = (value: string | number) => {
  const fps = Number(value);
  updateSetting('fps', ([15, 24, 30, 60].includes(fps) ? fps : 30) as RecordingSettings['fps']);
};

const handleQualityChange = (value: string | number) => {
  const nextValue = String(value);
  updateSetting(
    'quality',
    (['high', 'standard', 'small'].includes(nextValue) ? nextValue : 'standard') as RecordingSettings['quality']
  );
};

const choosePath = async () => {
  const extension = props.settings.format;
  const selected = await save({
    title: '保存录屏',
    defaultPath: `recording.${extension}`,
    filters: [
      { name: extension.toUpperCase(), extensions: [extension] }
    ]
  });
  if (!selected) return;
  updateSetting('savePath', selected);
};
</script>

<style scoped lang="scss">
.export-form {
  display: grid;
  gap: 16px;

  label {
    display: grid;
    gap: 8px;
    color: var(--el-text-color-regular);
    font-size: 13px;
  }
}

.path-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
}
</style>
