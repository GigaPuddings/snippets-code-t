<template>
  <node-view-wrapper
    as="span"
    class="image-wrapper"
    :class="{ 'is-selected': selected }"
    :style="wrapperStyle"
    @contextmenu="handleContextMenu"
  >
    <span
      v-if="showPath && originalPath"
      class="image-path"
      @click.stop="openFileLocation"
    >
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <path
          d="M3.5 6.5h6l2 2h9v9a2 2 0 0 1-2 2h-15v-13Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />
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
        tabindex="-1"
        @mousedown.stop
        @click.stop
        @contextmenu.prevent
        @keydown.esc="closeContextMenu"
      >
        <button
          class="menu-item menu-item-primary"
          type="button"
          @click="openFileLocation"
        >
          <span class="menu-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="17" height="17">
              <path
                d="M3.5 6.5h6l2 2h9v9a2 2 0 0 1-2 2h-15v-13Z"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linejoin="round"
              />
              <path
                d="m13.5 12.5 2-2 2 2m-2-2v5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="menu-item-label">
            {{ t('settings.attachment.openImageLocation') }}
          </span>
          <svg
            class="menu-item-arrow"
            viewBox="0 0 20 20"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              d="m8 5 5 5-5 5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="menu-divider"></div>
        <section class="scale-section">
          <div class="menu-heading">
            <span>{{ t('settings.attachment.imageScale') }}</span>
            <span class="current-scale">{{ draftScalePercent }}%</span>
          </div>
          <div class="scale-presets">
            <button
              v-for="scale in IMAGE_SCALE_PRESETS"
              :key="scale"
              class="scale-preset"
              :class="{ active: draftScalePercent === scale }"
              type="button"
              :aria-pressed="draftScalePercent === scale"
              @click="resizeImage(scale)"
            >
              {{ scale }}%
            </button>
          </div>
          <button
            v-if="imageCount > 1"
            class="menu-scope"
            :class="{ active: applyToAllImages }"
            type="button"
            :aria-pressed="applyToAllImages"
            @click="applyToAllImages = !applyToAllImages"
          >
            <span class="scope-indicator" aria-hidden="true"></span>
            <span>
              {{
                applyToAllImages
                  ? t('settings.attachment.allImagesShort')
                  : t('settings.attachment.currentImage')
              }}
            </span>
          </button>
        </section>

        <div class="menu-divider"></div>
        <button class="menu-item danger" type="button" @click="deleteImage">
          <span class="menu-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="17" height="17">
              <path
                d="M5 7h14M9 7V4h6v3m2 0-1 13H8L7 7m4 4v6m3-6v6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="menu-item-label">
            {{ t('settings.attachment.deleteImage') }}
          </span>
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
import { getWorkspaceRoot } from '@/api/markdown';
import { showFileInFolder } from '@/utils/file-open';
import { logger } from '@/utils/logger';
import modal from '@/utils/modal';
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
import { resolveImageFilePath } from '../utils/imagePath';

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
const attachmentConfig = ref<AttachmentConfig>({
  ...DEFAULT_ATTACHMENT_CONFIG
});

const originalPath = computed<string | null>(
  () => props.node.attrs['data-original-path'] || null
);
const showPath = computed(() => attachmentConfig.value.showImagePath);
const effectiveScalePercent = computed(() =>
  resolveImageScalePercent(
    props.node.attrs,
    originalWidth.value,
    attachmentConfig.value.defaultImageScalePercent
  )
);

const desiredWidth = computed(() => {
  if (!originalWidth.value) return null;
  return Math.max(
    1,
    Math.round((originalWidth.value * effectiveScalePercent.value) / 100)
  );
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

watch(
  effectiveScalePercent,
  (scale) => {
    draftScalePercent.value = scale;
  },
  { immediate: true }
);

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
      x: Math.max(
        8,
        Math.min(event.clientX, window.innerWidth - menuRect.width - 8)
      ),
      y: Math.max(
        8,
        Math.min(event.clientY, window.innerHeight - menuRect.height - 8)
      )
    };
    contextMenuRef.value.focus({ preventScroll: true });
  });
};

const deleteImage = () => {
  const imagePosition = props.getPos();
  if (typeof imagePosition === 'number') {
    props.editor
      .chain()
      .focus()
      .setNodeSelection(imagePosition)
      .deleteSelection()
      .run();
  }
  closeContextMenu();
};

const openFileLocation = async () => {
  try {
    const workspaceRoot = await getWorkspaceRoot().catch(() =>
      localStorage.getItem('workspaceRoot')
    );
    const absolutePath = resolveImageFilePath(
      props.node.attrs.src,
      originalPath.value,
      workspaceRoot
    );
    if (!absolutePath) {
      throw new Error('Unable to resolve the local image path');
    }
    await showFileInFolder(absolutePath);
  } catch (error) {
    logger.error('[ImageComponent] 打开文件位置失败:', error);
    modal.error(t('settings.attachment.openImageLocationFailed'));
  } finally {
    closeContextMenu();
  }
};

async function tryRestoreAttachment(): Promise<void> {
  if (!originalPath.value) return;
  const pathParts = originalPath.value.replace(/^\.\.\//, '').split('/');
  const assetsIndex = pathParts.findIndex(
    (part) => part === 'assets' || part === '.assets'
  );
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
  if (
    showContextMenu.value &&
    !contextMenuRef.value?.contains(event.target as Node)
  ) {
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
  window.addEventListener(
    ATTACHMENT_CONFIG_UPDATED_EVENT,
    handleAttachmentConfigUpdated
  );

  try {
    attachmentConfig.value = await getAttachmentConfig();
  } catch (error) {
    logger.warn('[ImageComponent] 使用默认图片显示配置:', error);
  }
});

onBeforeUnmount(() => {
  props.editor.off('transaction', handleEditorTransaction);
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener(
    ATTACHMENT_CONFIG_UPDATED_EVENT,
    handleAttachmentConfigUpdated
  );
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
  @apply cursor-pointer border-0 text-xs;

  color: var(--categories-info-text-color);
}

.image-context-menu {
  @apply fixed z-[9999] w-[280px] select-none rounded-xl border p-2 outline-none;

  color: var(--categories-text-color);
  background: var(--categories-panel-bg);
  border-color: var(--categories-border-color);
  box-shadow:
    0 20px 48px rgb(15 23 42 / 18%),
    0 3px 10px rgb(15 23 42 / 8%);
}

.menu-item {
  @apply flex w-full cursor-pointer items-center gap-2.5 rounded-lg border-0 px-2 py-1.5 text-left text-sm;

  color: var(--categories-text-color);
  background: transparent;
  transition:
    color 0.16s ease,
    background-color 0.16s ease;

  &:hover {
    background: var(--categories-panel-bg-hover);
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--search-result-active-border);
  }

  &.menu-item-primary:hover .menu-icon {
    color: var(--search-result-accent);
    background: var(--search-result-active);
  }

  &.danger {
    color: var(--el-color-danger);

    .menu-icon {
      color: var(--el-color-danger);
      background: color-mix(in srgb, var(--el-color-danger) 10%, transparent);
    }

    &:hover {
      background: color-mix(in srgb, var(--el-color-danger) 9%, transparent);
    }
  }
}

.menu-icon {
  @apply flex h-8 w-8 shrink-0 items-center justify-center rounded-lg;

  color: var(--categories-info-text-color);
  background: var(--search-soft-bg);
  transition:
    color 0.16s ease,
    background-color 0.16s ease;
}

.menu-item-label {
  @apply min-w-0 flex-1;
}

.menu-item-arrow {
  @apply shrink-0;

  color: var(--categories-info-text-color);
}

.scale-section {
  @apply px-1 py-0.5;
}

.menu-heading {
  @apply flex items-center justify-between px-1.5 pb-2 pt-1 text-xs font-medium;

  color: var(--categories-info-text-color);
}

.current-scale {
  @apply rounded-md px-1.5 py-0.5 font-semibold tabular-nums;

  color: var(--search-result-accent);
  background: var(--search-result-active);
}

.menu-scope {
  @apply mt-1.5 flex w-full items-center justify-center gap-1.5 rounded-lg px-2 py-1.5;

  background: transparent;

  &:hover {
    color: var(--categories-text-color);
    background: var(--search-soft-bg);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--search-result-active-border);
  }

  &.active {
    color: var(--search-result-accent);
  }
}

.scope-indicator {
  @apply h-1.5 w-1.5 rounded-full;

  background: var(--categories-info-text-color);
}

.menu-scope.active .scope-indicator {
  background: var(--search-result-accent);
  box-shadow: 0 0 0 3px var(--search-result-active);
}

.scale-presets {
  @apply grid grid-cols-3 gap-1.5;
}

.scale-preset {
  @apply rounded-lg border px-2 py-2 font-medium tabular-nums;

  background: var(--search-soft-bg);
  border-color: transparent;

  &:hover {
    color: var(--categories-text-color);
    background: var(--categories-panel-bg-hover);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--search-result-active-border);
  }

  &.active {
    color: var(--search-result-accent);
    background: var(--search-result-active);
    border-color: var(--search-result-active-border);
    box-shadow: inset 0 0 0 1px var(--search-result-active-border);
  }
}

.menu-divider {
  height: 1px;
  margin: 7px 6px;
  background: var(--categories-border-color);
}
</style>
