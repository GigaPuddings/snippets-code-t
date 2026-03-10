<template>
  <node-view-wrapper class="image-wrapper" :class="{ 'is-selected': selected }" @contextmenu="handleContextMenu">
    <!-- 图片路径显示 -->
    <div v-if="showPath && originalPath" class="image-path" @click="openFileLocation">
      <span class="path-icon">📁</span>
      <span class="path-text">{{ originalPath }}</span>
    </div>
    
    <!-- 图片容器 -->
    <div ref="imageContainerRef" class="image-container" @mouseenter="showControls = true" @mouseleave="showControls = false">
      <img
        :src="node.attrs.src"
        :alt="node.attrs.alt"
        :title="node.attrs.title"
        :style="imageStyle"
        @click="selectImage"
      />
      
      <!-- 缩放控制 -->
      <div v-if="showControls && selected" class="image-controls">
        <div class="control-group">
          <button class="control-btn" @click="resizeImage(0.5)" title="缩小 50%">
            <span>50%</span>
          </button>
          <button class="control-btn" @click="resizeImage(0.75)" title="缩小 75%">
            <span>75%</span>
          </button>
          <button class="control-btn" @click="resizeImage(1)" title="原始大小">
            <span>100%</span>
          </button>
          <button class="control-btn" @click="resizeImage(1.5)" title="放大 150%">
            <span>150%</span>
          </button>
          <button class="control-btn" @click="resizeImage(2)" title="放大 200%">
            <span>200%</span>
          </button>
        </div>
      </div>
      
      <!-- 拖拽调整大小的手柄 -->
      <div
        v-if="selected"
        class="resize-handle resize-handle-right"
        @mousedown="startResize"
      ></div>
    </div>
    
    <!-- 图片右键菜单 -->
    <teleport to="body">
      <div
        v-if="showContextMenu"
        ref="contextMenuRef"
        class="image-context-menu"
        :style="contextMenuStyle"
        @contextmenu.prevent
      >
        <div class="menu-item" @click="openFileLocation">
          <span class="menu-icon">📁</span>
          <span>打开文件位置</span>
        </div>
        <div class="menu-divider"></div>
        <div class="menu-item" @click="resizeImage(0.5)">
          <span>缩放到 50%</span>
        </div>
        <div class="menu-item" @click="resizeImage(0.75)">
          <span>缩放到 75%</span>
        </div>
        <div class="menu-item" @click="resizeImage(1)">
          <span>原始大小 (100%)</span>
        </div>
        <div class="menu-item" @click="resizeImage(1.5)">
          <span>放大到 150%</span>
        </div>
        <div class="menu-item" @click="resizeImage(2)">
          <span>放大到 200%</span>
        </div>
        <div class="menu-divider"></div>
        <div class="menu-item" @click="deleteImage">
          <span class="menu-icon">🗑️</span>
          <span>删除图片</span>
        </div>
      </div>
    </teleport>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { NodeViewWrapper } from '@tiptap/vue-3';
import { logger } from '@/utils/logger';

interface Props {
  node: any;
  updateAttributes: (attrs: any) => void;
  selected: boolean;
  editor: any;
}

const props = defineProps<Props>();

const showControls = ref(false);
const showPath = ref(true);
const originalWidth = ref<number | null>(null);
const originalHeight = ref<number | null>(null);
const currentWidth = ref<number | null>(null);
const currentHeight = ref<number | null>(null);
const isResizing = ref(false);
const showContextMenu = ref(false);
const contextMenuRef = ref<HTMLElement | null>(null);
const contextMenuPosition = ref({ x: 0, y: 0 });
const imageContainerRef = ref<HTMLElement | null>(null);

// 获取原始路径
const originalPath = computed(() => {
  return props.node.attrs['data-original-path'] || null;
});

// 右键菜单样式
const contextMenuStyle = computed(() => ({
  left: `${contextMenuPosition.value.x}px`,
  top: `${contextMenuPosition.value.y}px`
}));

// 图片样式
const imageStyle = computed(() => {
  const style: any = {
    cursor: props.selected ? 'default' : 'pointer',
    height: 'auto',
  };
  
  const nodeWidth = props.node.attrs.width;
  const widthToUse = nodeWidth || currentWidth.value;
  
  if (widthToUse) {
    style.width = `${widthToUse}px`;
    style.maxWidth = '100%';
  } else {
    style.maxWidth = '100%';
  }
  
  return style;
});

// 处理右键菜单
const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  
  contextMenuPosition.value = {
    x: event.clientX,
    y: event.clientY
  };
  showContextMenu.value = true;
  
  // 调整菜单位置防止超出屏幕
  nextTick(() => {
    if (!contextMenuRef.value) return;
    
    const menuRect = contextMenuRef.value.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    let x = event.clientX;
    let y = event.clientY;
    
    if (x + menuRect.width > windowWidth) {
      x = windowWidth - menuRect.width - 10;
    }
    
    if (y + menuRect.height > windowHeight) {
      y = windowHeight - menuRect.height - 10;
    }
    
    contextMenuPosition.value = { x, y };
  });
};

// 关闭右键菜单
const closeContextMenu = () => {
  showContextMenu.value = false;
};

// 删除图片
const deleteImage = () => {
  props.editor.commands.deleteSelection();
  closeContextMenu();
};

// 选中图片
const selectImage = () => {
  if (!props.selected) {
    props.editor.commands.setNodeSelection(props.editor.state.selection.from);
  }
};

// 缩放图片
const resizeImage = (scale: number) => {
  if (!originalWidth.value) {
    logger.error('[resizeImage] 图片尚未加载完成，无法缩放');
    return;
  }
  
  // 获取 image-wrapper 元素的实际宽度
  let maxContainerWidth = 710; // 默认值
  
  // 尝试从 NodeViewWrapper 获取（这是最外层的 image-wrapper）
  const wrapperElement = imageContainerRef.value?.closest('.image-wrapper');
  
  if (wrapperElement) {
    const rect = wrapperElement.getBoundingClientRect();
    maxContainerWidth = rect.width;
  } else {
    logger.warn('[resizeImage] 未找到 image-wrapper 元素，使用默认宽度');
  }
  
  // 计算基准宽度：取原始宽度和容器宽度中的较小值
  const baseWidth = Math.min(originalWidth.value, maxContainerWidth);
  
  // 基于基准宽度计算目标宽度
  const targetWidth = Math.round(baseWidth * scale);
  
  try {
    props.updateAttributes({
      width: targetWidth,
    });
  } catch (error) {
    logger.error('[resizeImage] ❌ 更新属性失败:', error);
  }
  
  currentWidth.value = targetWidth;
  closeContextMenu();
};

// 开始拖拽调整大小
const startResize = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  
  if (!originalWidth.value) return;
  
  isResizing.value = true;
  const startX = e.clientX;
  const startWidth = currentWidth.value || originalWidth.value;
  
  const onMouseMove = (moveEvent: MouseEvent) => {
    const deltaX = moveEvent.clientX - startX;
    const newWidth = Math.max(100, startWidth + deltaX);
    currentWidth.value = newWidth;
  };
  
  const onMouseUp = () => {
    isResizing.value = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    
    // 更新节点属性
    if (currentWidth.value) {
      props.updateAttributes({
        width: currentWidth.value,
      });
    }
  };
  
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

// 打开文件位置
const openFileLocation = async () => {
  if (!originalPath.value) return;
  
  try {
    // 动态导入 Tauri API
    const { invoke } = await import('@tauri-apps/api/core');
    
    // 获取工作区根目录
    const workspaceRoot = localStorage.getItem('workspaceRoot');
    if (!workspaceRoot) {
      logger.error('工作区根目录未设置');
      return;
    }
    
    // 构建绝对路径
    let absolutePath = originalPath.value;
    if (absolutePath.startsWith('../')) {
      // 相对路径转绝对路径
      absolutePath = absolutePath.replace('../', '');
      absolutePath = `${workspaceRoot}\\${absolutePath.replace(/\//g, '\\')}`;
    }
    
    // 使用 Tauri 命令打开文件位置
    await invoke('show_file_in_folder', { file_path: absolutePath });
  } catch (error) {
    logger.error('打开文件位置失败:', error);
  }
};

// 加载图片获取原始尺寸
onMounted(() => {
  const img = new Image();
  img.onload = () => {
    originalWidth.value = img.naturalWidth;
    originalHeight.value = img.naturalHeight;
    
    if (props.node.attrs.width) {
      currentWidth.value = props.node.attrs.width;  
    }
    
    if (props.node.attrs.height) {
      currentHeight.value = props.node.attrs.height;
    }

  };
  
  img.onerror = (error) => {
    logger.error('[ImageComponent] 图片加载失败:', error);
    logger.error('[ImageComponent] 图片 src:', props.node.attrs.src);
  };
  
  img.src = props.node.attrs.src;
  
  // 添加全局点击事件监听器，关闭右键菜单
  const handleClickOutside = (event: MouseEvent) => {
    if (showContextMenu.value && contextMenuRef.value && !contextMenuRef.value.contains(event.target as Node)) {
      closeContextMenu();
    }
  };
  
  document.addEventListener('click', handleClickOutside);
  
  // 监听节点属性变化
  watch(() => props.node.attrs.width, (newWidth) => {
    if (newWidth && newWidth !== currentWidth.value) {
      currentWidth.value = newWidth;
    }
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>

<style scoped lang="scss">
.image-wrapper {
  @apply relative;
  display: inline-block; // 改为 inline-block，避免底部空白
  max-width: 100%;
  // margin-top: 1rem; // 顶部保留间距
  // margin-bottom: 0.5rem; // 底部减少间距
  line-height: 0; // 消除行高造成的空白
  
  &.is-selected {
    @apply outline outline-2 outline-blue-500 outline-offset-2;
  }
}

.image-path {
  @apply flex items-center gap-2 px-3 py-1 mb-2 text-sm text-gray-600 bg-gray-100 rounded cursor-pointer;
  transition: all 0.2s ease;
  max-width: 100%;
  line-height: normal; // 恢复正常行高
  
  &:hover {
    @apply bg-gray-200 text-gray-800;
  }
  
  .path-icon {
    @apply text-base;
  }
  
  .path-text {
    @apply truncate;
    max-width: 600px;
  }
}

.image-container {
  @apply relative;
  display: inline-block; // 改为 inline-block
  max-width: 100%;
  vertical-align: bottom; // 消除底部空白
  line-height: 0; // 消除行高造成的空白
  
  img {
    @apply block;
    transition: opacity 0.2s ease;
    height: auto;
    flex-shrink: 0;
  }
}

.image-controls {
  @apply absolute top-2 right-2 bg-white rounded-lg shadow-lg p-2;
  z-index: 10;
  
  .control-group {
    @apply flex gap-1;
  }
  
  .control-btn {
    @apply px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 hover:border-gray-400;
    transition: all 0.2s ease;
    
    &:active {
      @apply bg-gray-100;
    }
  }
}

.resize-handle {
  @apply absolute w-3 h-3 bg-blue-500 border-2 border-white rounded-full cursor-ew-resize;
  z-index: 10;
  
  &.resize-handle-right {
    @apply top-1/2 -right-1.5;
    transform: translateY(-50%);
  }
  
  &:hover {
    @apply bg-blue-600 scale-125;
  }
}

// 暗色模式
:global(.dark) {
  .image-controls {
    @apply bg-gray-800 border border-gray-700;
  }
  
  .control-btn {
    @apply text-gray-300 bg-gray-800 border-gray-600;
    
    &:hover {
      @apply bg-gray-700 border-gray-500;
    }
    
    &:active {
      @apply bg-gray-600;
    }
  }
  
  .image-context-menu {
    @apply bg-gray-800 border-gray-700;
    
    .menu-item {
      @apply text-gray-300;
      
      &:hover {
        @apply bg-gray-700;
      }
      
      &:active {
        @apply bg-gray-600;
      }
    }
    
    .menu-divider {
      @apply bg-gray-700;
    }
  }
}

// 图片右键菜单
.image-context-menu {
  @apply fixed z-[9999] min-w-[180px] bg-white border border-gray-200 rounded-lg p-1 select-none;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  
  .menu-item {
    @apply flex items-center gap-2 px-3 py-2 text-sm text-gray-700 cursor-pointer rounded hover:bg-gray-100;
    transition: all 0.15s ease;
    
    .menu-icon {
      @apply text-base;
    }
    
    &:active {
      @apply bg-gray-200;
    }
  }
  
  .menu-divider {
    @apply h-px bg-gray-200 mx-2 my-1;
  }
}
</style>
