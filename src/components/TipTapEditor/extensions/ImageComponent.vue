<template>
  <node-view-wrapper
    as="span"
    class="image-wrapper"
    :class="{ 'is-selected': selected }"
    :style="wrapperStyle"
    @contextmenu="handleContextMenu"
  >
    <span v-if="showPath && originalPath" class="image-path" @click.stop="openFileLocation">
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <path d="M3.5 6.5h6l2 2h9v9a2 2 0 0 1-2 2h-15v-13Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
      </svg>
      <span class="path-text">{{ originalPath }}</span>
    </span>

    <span ref="imageContainerRef" class="image-container">
      <img
        :src="node.attrs.src"
        :alt="node.attrs.alt"
        :title="node.attrs.title"
        :data-original-path="node.attrs['data-original-path'] || undefined"
        :data-image-scale="node.attrs['data-image-scale'] || undefined"
        :style="imageStyle"
        draggable="false"
        @click.stop="selectImage"
        @load="handleRenderedImageLoad"
        @error="handleRenderedImageError"
      />
    </span>

    <teleport to="body">
      <div
        v-if="showContextMenu"
        ref="contextMenuRef"
        class="image-context-menu"
        :style="contextMenuStyle"
        @mousedown.stop
        @contextmenu.prevent
      >
        <button class="menu-item" type="button" @click="openFileLocation">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path d="M3.5 6.5h6l2 2h9v9a2 2 0 0 1-2 2h-15v-13Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
          </svg>
          <span>{{ t('settings.attachment.openImageLocation') }}</span>
        </button>

        <div class="menu-divider"></div>
        <div class="menu-heading">
          <span>{{ t('settings.attachment.imageScale') }}</span>
          <button
            v-if="imageCount > 1"
            class="menu-scope"
            :class="{ active: applyToAllImages }"
            type="button"
            @click="applyToAllImages = !applyToAllImages"
          >
            {{ applyToAllImages
              ? t('settings.attachment.allImagesShort')
              : t('settings.attachment.currentImage') }}
          </button>
        </div>
        <div class="scale-presets">
          <button
            v-for="scale in IMAGE_SCALE_PRESETS"
            :key="scale"
            class="scale-preset"
            :class="{ active: draftScalePercent === scale }"
            type="button"
            @click="resizeImage(scale)"
          >
            {{ scale }}%
          </button>
        </div>

        <div class="menu-divider"></div>
        <button class="menu-item danger" type="button" @click="deleteImage">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path d="M5 7h14M9 7V4h6v3m2 0-1 13H8L7 7m4 4v6m3-6v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ t('settings.attachment.deleteImage') }}</span>
        </button>
      </div>
    </teleport>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper } from '@tiptap/vue-3';
import type { NodeViewProps } from '@tiptap/core';
import type { CSSProperties } from 'vue';
import { useI18n } from 'vue-i18n';
import { logger } from '@/utils/logger';
import {
  ATTACHMENT_CONFIG_UPDATED_EVENT,
  DEFAULT_ATTACHMENT_CONFIG,
  getAttachmentConfig,
  restoreDeletedAttachment
} from '@/plugins/attachments/api';
import type { AttachmentConfig } from '@/types/models';
import { requestSelectionScrollAfterLayout } from '../utils/editorLayout';
import {
  applyImageScalePercent,
  clampImageScalePercent,
  countLocalImages,
  resolveImageScalePercent
} from '../utils/imageSizing';

interface Props {
  node: NodeViewProps['node'];
  updateAttributes: NodeViewProps['updateAttributes'];
  selected: boolean;
  editor: NodeViewProps['editor'];
  getPos: NodeViewProps['getPos'];
}

const IMAGE_SCALE_PRESETS = [50, 75, 100, 125, 150, 200];
const props = defineProps<Props>();
const { t } = useI18n();

const originalWidth = ref<number | null>(null);
const draftScalePercent = ref(100);
const applyToAllImages = ref(false);
const imageCount = ref(1);
const showContextMenu = ref(false);
const contextMenuRef = ref<HTMLElement | null>(null);
const contextMenuPosition = ref({ x: 0, y: 0 });
const imageContainerRef = ref<HTMLElement | null>(null);
const hasLoadError = ref(false);
const attachmentConfig = ref<AttachmentConfig>({ ...DEFAULT_ATTACHMENT_CONFIG });

const originalPath = computed<string | null>(() => props.node.attrs['data-original-path'] || null);
const showPath = computed(() => attachmentConfig.value.showImagePath);
const effectiveScalePercent = computed(() => resolveImageScalePercent(
  props.node.attrs,
  originalWidth.value,
  attachmentConfig.value.defaultImageScalePercent
));

const desiredWidth = computed(() => {
  if (!originalWidth.value) return null;
  return Math.max(1, Math.round(originalWidth.value * effectiveScalePercent.value / 100));
});

const wrapperStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {};
  if (desiredWidth.value) style.width = `${desiredWidth.value}px`;
  if (attachmentConfig.value.responsiveImages) {
    style.maxWidth = `${Math.min(100, effectiveScalePercent.value)}%`;
  }
  return style;
});

const imageStyle = computed<CSSProperties>(() => ({
  width: desiredWidth.value ? '100%' : 'auto',
  maxWidth: attachmentConfig.value.responsiveImages ? '100%' : 'none',
  height: 'auto',
  cursor: props.selected ? 'default' : 'pointer'
}));

const contextMenuStyle = computed(() => ({
  left: `${contextMenuPosition.value.x}px`,
  top: `${contextMenuPosition.value.y}px`
}));

watch(effectiveScalePercent, (scale) => {
  draftScalePercent.value = scale;
}, { immediate: true });

const refreshImageCount = (force = false) => {
  if (!force && !props.selected && !showContextMenu.value) return;
  imageCount.value = Math.max(1, countLocalImages(props.editor));
  if (imageCount.value <= 1) applyToAllImages.value = false;
};

const handleEditorTransaction = () => refreshImageCount();

const selectImage = () => {
  const imagePosition = props.getPos();
  if (!props.selected && typeof imagePosition === 'number') {
    props.editor.commands.setNodeSelection(imagePosition);
  }
  refreshImageCount(true);
};

const revealSelectionAfterImageLayout = () => {
  nextTick(() => requestSelectionScrollAfterLayout(props.editor));
};

const handleRenderedImageLoad = (event: Event) => {
  const image = event.currentTarget as HTMLImageElement;
  originalWidth.value = image.naturalWidth;
  draftScalePercent.value = effectiveScalePercent.value;
  hasLoadError.value = false;
  revealSelectionAfterImageLayout();
};

const handleRenderedImageError = async (error: Event) => {
  logger.error('[ImageComponent] 图片加载失败:', error);
  if (originalPath.value && !hasLoadError.value) {
    hasLoadError.value = true;
    await tryRestoreAttachment();
  }
};

const applyScale = (scale: number) => {
  const normalizedScale = clampImageScalePercent(scale);
  const imagePosition = props.getPos();
  if (!applyToAllImages.value && typeof imagePosition !== 'number') return;

  draftScalePercent.value = normalizedScale;
  applyImageScalePercent(
    props.editor,
    typeof imagePosition === 'number' ? imagePosition : undefined,
    normalizedScale,
    applyToAllImages.value
  );
  revealSelectionAfterImageLayout();
};

const resizeImage = (scale: number) => {
  applyScale(scale);
  closeContextMenu();
};

function closeContextMenu(): void {
  showContextMenu.value = false;
}

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  selectImage();
  contextMenuPosition.value = { x: event.clientX, y: event.clientY };
  showContextMenu.value = true;

  nextTick(() => {
    if (!contextMenuRef.value) return;
    const menuRect = contextMenuRef.value.getBoundingClientRect();
    contextMenuPosition.value = {
      x: Math.max(8, Math.min(event.clientX, window.innerWidth - menuRect.width - 8)),
      y: Math.max(8, Math.min(event.clientY, window.innerHeight - menuRect.height - 8))
    };
  });
};

const deleteImage = () => {
  const imagePosition = props.getPos();
  if (typeof imagePosition === 'number') {
    props.editor.chain().focus().setNodeSelection(imagePosition).deleteSelection().run();
  }
  closeContextMenu();
};

const openFileLocation = async () => {
  if (!originalPath.value) return;
  try {
    const { invoke } = await import('@tauri-apps/api/core');
    const workspaceRoot = localStorage.getItem('workspaceRoot');
    if (!workspaceRoot) return;

    let absolutePath = originalPath.value;
    if (absolutePath.startsWith('../')) {
      absolutePath = `${workspaceRoot}\\${absolutePath.replace(/^\.\.\//, '').replace(/\//g, '\\')}`;
    }
    await invoke('show_file_in_folder', { filePath: absolutePath });
  } catch (error) {
    logger.error('[ImageComponent] 打开文件位置失败:', error);
  } finally {
    closeContextMenu();
  }
};

async function tryRestoreAttachment(): Promise<void> {
  if (!originalPath.value) return;
  const pathParts = originalPath.value.replace(/^\.\.\//, '').split('/');
  const assetsIndex = pathParts.findIndex((part) => part === 'assets' || part === '.assets');
  if (assetsIndex === -1 || assetsIndex >= pathParts.length - 2) return;

  const noteName = pathParts[assetsIndex + 1];
  const fileName = pathParts[pathParts.length - 1];
  try {
    const restored = await restoreDeletedAttachment(noteName, fileName);
    if (!restored) return;
    const image = imageContainerRef.value?.querySelector('img');
    if (image) image.src = `${props.node.attrs.src}?t=${Date.now()}`;
  } catch (error) {
    logger.error('[ImageComponent] 恢复附件失败:', error);
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (showContextMenu.value && !contextMenuRef.value?.contains(event.target as Node)) {
    closeContextMenu();
  }
};

const handleAttachmentConfigUpdated = (event: Event) => {
  attachmentConfig.value = {
    ...DEFAULT_ATTACHMENT_CONFIG,
    ...(event as CustomEvent<AttachmentConfig>).detail
  };
};

onMounted(async () => {
  props.editor.on('transaction', handleEditorTransaction);
  document.addEventListener('click', handleClickOutside);
  window.addEventListener(ATTACHMENT_CONFIG_UPDATED_EVENT, handleAttachmentConfigUpdated);

  try {
    attachmentConfig.value = await getAttachmentConfig();
  } catch (error) {
    logger.warn('[ImageComponent] 使用默认图片显示配置:', error);
  }
});

onBeforeUnmount(() => {
  props.editor.off('transaction', handleEditorTransaction);
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener(ATTACHMENT_CONFIG_UPDATED_EVENT, handleAttachmentConfigUpdated);
});
</script>

<style scoped lang="scss">
.image-wrapper {
  @apply relative align-bottom;

  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  line-height: normal;
  transition: width 0.16s ease;

  &.is-selected .image-container {
    border-radius: 6px;
    outline: 2px solid var(--search-result-active-border);
    outline-offset: 3px;
  }
}

.image-path {
  @apply mb-2 flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 text-xs;

  max-width: 100%;
  color: var(--categories-info-text-color);
  background: var(--search-soft-bg);

  &:hover {
    color: var(--categories-text-color);
    background: var(--categories-panel-bg-hover);
  }
}

.path-text {
  @apply truncate;
}

.image-container {
  @apply relative block;

  width: 100%;
  max-width: 100%;
  line-height: 0;

  img {
    @apply block rounded-md;

    object-fit: contain;
  }
}

.menu-scope,
.scale-preset {
  @apply rounded border-0 px-2 py-1 text-xs;

  color: var(--categories-info-text-color);
  background: transparent;

  &:hover,
  &.active {
    color: var(--search-result-accent);
    background: var(--search-soft-bg);
  }
}

.image-context-menu {
  @apply fixed z-[9999] w-64 select-none rounded-xl border p-1.5 shadow-xl;

  color: var(--categories-text-color);
  background: var(--categories-panel-bg);
  border-color: rgba(var(--categories-border-color-rgb), 0.85);
}

.menu-item {
  @apply flex w-full items-center gap-2 rounded-lg border-0 px-2.5 py-2 text-left text-sm;

  color: var(--categories-text-color);
  background: transparent;

  &:hover {
    background: var(--categories-panel-bg-hover);
  }

  &.danger {
    color: var(--el-color-danger);
  }
}

.menu-heading {
  @apply flex items-center justify-between px-2 py-1 text-xs;

  color: var(--categories-info-text-color);
}

.menu-scope {
  padding-inline: 6px;
}

.scale-presets {
  @apply grid grid-cols-3 gap-1 px-1 pb-1;
}

.scale-preset {
  padding-block: 6px;
  background: var(--search-soft-bg);
}

.menu-divider {
  height: 1px;
  margin: 5px 6px;
  background: rgba(var(--categories-border-color-rgb), 0.62);
}
</style>
