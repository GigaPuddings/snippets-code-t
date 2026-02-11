<template>
  <div class="pin-container" ref="containerRef" @contextmenu.prevent="handleContextMenu">
    <!-- 图片容器 -->
    <div 
      v-if="imageBlobUrl"
      class="image-wrapper" 
      :style="imageWrapperStyle"
      @wheel.capture="handleWheel"
      @contextmenu.prevent="handleContextMenu"
      @mousedown="handleMouseDown"
    >
      <img 
        :src="imageBlobUrl" 
        alt="贴图" 
        :style="imageStyle"
        @load="handleImageLoad"
        draggable="false"
      />
    </div>

    <!-- 缩放信息 -->
    <div v-if="showZoomInfo" class="zoom-info">
      {{ Math.round(scale * 100) }}%
    </div>

    <!-- 右键菜单 -->
    <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
      <div class="menu-item" @click="handleToggleAlwaysOnTop">
        <component class="menu-item-icon" :is="isAlwaysOnTop ? Pin : Pushpin" size="18" :strokeWidth="3"/><span>{{ isAlwaysOnTop ? $t('pin.togglePin') : $t('pin.pinWindow') }}</span>
      </div>
      <div class="menu-item" @click="handleResetZoom">
        <Redo class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>{{ $t('pin.resetZoom') }}</span>
      </div>
      <div class="menu-item" @click="handleCopyImage">
        <Copy class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>{{ $t('pin.copyImage') }}</span>
      </div>
      <div class="menu-item" @click="handleSaveImage">
        <Save class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>{{ $t('pin.saveImage') }}</span>
      </div>
      <div class="menu-divider"></div>
      <div class="menu-item danger" @click="handleClose">
        <Close class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>{{ $t('pin.closePin') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Window, LogicalSize } from '@tauri-apps/api/window'
import { invoke } from '@tauri-apps/api/core'
import { Pin, Pushpin, Redo, Copy, Save, Close } from '@icon-park/vue-next'
import { logger } from '@/utils/logger'

const containerRef = ref<HTMLDivElement>()
const appWindow = ref<Window | null>(null)

const imageData = ref<string>('')
const imageBlobUrl = ref<string>('')
const imageWidth = ref(0)
const imageHeight = ref(0)
const initialWindowSize = ref({ width: 0, height: 0 })

const scale = ref(1)
const showZoomInfo = ref(false)
const isResizing = ref(false)
let zoomInfoTimer: ReturnType<typeof setTimeout> | null = null

const showContextMenu = ref(false)
const contextMenuPosition = ref({ x: 0, y: 0 })
const isAlwaysOnTop = ref(true)
const windowSize = ref({ width: 0, height: 0 })

let unlistenImageData: (() => void) | null = null
const imageWrapperStyle = computed(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}))

// 计算图片样式（窗口缩放模式：图片始终填充窗口，不使用 CSS scale）
const imageStyle = computed(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain' as const
}))

const contextMenuStyle = computed(() => {
  const minDimension = Math.min(windowSize.value.width, windowSize.value.height)
  let menuScale = 1
  if (minDimension < 300) {
    menuScale = Math.max(0.4, minDimension / 300)
  }
  
  return {
    left: `${contextMenuPosition.value.x}px`,
    top: `${contextMenuPosition.value.y}px`,
    transform: `scale(${menuScale})`,
    transformOrigin: 'top left'
  }
})

const handleImageLoad = async (event: Event) => {
  const img = event.target as HTMLImageElement
  imageWidth.value = img.naturalWidth
  imageHeight.value = img.naturalHeight
  
  if (appWindow.value && initialWindowSize.value.width === 0) {
    try {
      const currentSizeRaw = await appWindow.value.innerSize()
      const scaleFactor = await appWindow.value.scaleFactor()
      const logicalSize = currentSizeRaw.toLogical(scaleFactor)
      initialWindowSize.value = { 
        width: logicalSize.width, 
        height: logicalSize.height 
      }
    } catch (error) {
      logger.error('[PIN窗口] 获取窗口初始尺寸失败', error)
    }
  }
}

const handleWheel = async (event: WheelEvent) => {
  if (!event.ctrlKey) {
    return
  }
  
  event.preventDefault()
  event.stopPropagation()
  
  if (isResizing.value) {
    return
  }
  
  if (appWindow.value) {
    isResizing.value = true
    
    try {
      const currentSizeRaw = await appWindow.value.innerSize()
      const currentSize = currentSizeRaw.toLogical(await appWindow.value.scaleFactor())
      const scaleFactor = event.deltaY > 0 ? 0.95 : 1.05
      
      const currentWidth = currentSize.width
      const currentHeight = currentSize.height
      const newWidth = Math.round(currentWidth * scaleFactor)
      const newHeight = Math.round(currentHeight * scaleFactor)
      
      const minSize = 50
      const maxSize = 3000
      
      if (newWidth >= minSize && newWidth <= maxSize && 
          newHeight >= minSize && newHeight <= maxSize) {
        await appWindow.value.setSize(new LogicalSize(newWidth, newHeight))
        
        if (imageWidth.value > 0) {
          const scalePercentage = Math.round((newWidth / imageWidth.value) * 100)
          scale.value = scalePercentage / 100
        }
        
        showZoomInfo.value = true
        showZoomIndicator()
      }
    } catch (error) {
      logger.error('[PIN窗口] 窗口缩放失败', error)
    } finally {
      setTimeout(() => {
        isResizing.value = false
      }, 100)
    }
  }
}

const showZoomIndicator = () => {
  showZoomInfo.value = true
  
  if (zoomInfoTimer) {
    clearTimeout(zoomInfoTimer)
  }
  
  zoomInfoTimer = setTimeout(() => {
    showZoomInfo.value = false
  }, 1000)
}

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()
  showContextMenu.value = false
  
  setTimeout(() => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    
    windowSize.value = { width: windowWidth, height: windowHeight }
    
    const minDimension = Math.min(windowWidth, windowHeight)
    let menuScale = 1
    if (minDimension < 300) {
      menuScale = Math.max(0.4, minDimension / 300)
    }
    const baseMenuWidth = 150
    const baseMenuHeight = 180
    const menuWidth = baseMenuWidth * menuScale
    const menuHeight = baseMenuHeight * menuScale
    
    let x = event.clientX
    let y = event.clientY
    
    if (x + menuWidth > windowWidth) {
      x = windowWidth - menuWidth - 5
    }
    
    if (y + menuHeight > windowHeight) {
      y = windowHeight - menuHeight - 5
    }
    
    x = Math.max(5, x)
    y = Math.max(5, y)
    
    contextMenuPosition.value = { x, y }
    showContextMenu.value = true
  }, 10)
}

const closeContextMenu = () => {
  showContextMenu.value = false
}

// 切换置顶状态
const handleToggleAlwaysOnTop = async () => {
  if (!appWindow.value) return
  
  isAlwaysOnTop.value = !isAlwaysOnTop.value
  await appWindow.value.setAlwaysOnTop(isAlwaysOnTop.value)
  closeContextMenu()
}

const scaleWindowByKeyboard = async (factor: number) => {
  if (appWindow.value && !isResizing.value) {
    isResizing.value = true
    try {
      const currentSizeRaw = await appWindow.value.innerSize()
      const currentSize = currentSizeRaw.toLogical(await appWindow.value.scaleFactor())
      const newWidth = Math.round(currentSize.width * factor)
      const newHeight = Math.round(currentSize.height * factor)
      
      const minSize = 50
      const maxSize = 3000
      
      if (newWidth >= minSize && newWidth <= maxSize && 
          newHeight >= minSize && newHeight <= maxSize) {
        await appWindow.value.setSize(new LogicalSize(newWidth, newHeight))
        
        if (imageWidth.value > 0) {
          scale.value = newWidth / imageWidth.value
        }
        
        showZoomIndicator()
      }
    } catch (error) {
      logger.error('[PIN窗口] 键盘缩放失败', error)
    } finally {
      setTimeout(() => {
        isResizing.value = false
      }, 100)
    }
  }
}

const handleResetZoom = async () => {
  if (appWindow.value && initialWindowSize.value.width > 0 && initialWindowSize.value.height > 0) {
    try {
      await appWindow.value.setSize(new LogicalSize(
        initialWindowSize.value.width, 
        initialWindowSize.value.height
      ))
      scale.value = 1
      showZoomIndicator()
    } catch (error) {
      logger.error('[PIN窗口] 重置缩放失败', error)
    }
  }
  closeContextMenu()
}

const handleCopyImage = async () => {
  try {
    const imageDataToSave = imageData.value
    closeContextMenu()
    
    if (appWindow.value) {
      await appWindow.value.hide()
    }
    
    await invoke('copy_image_to_clipboard', { imageData: imageDataToSave })
    
    if (appWindow.value) {
      await appWindow.value.close()
    }
  } catch (error) {
    logger.error('[PIN窗口] 复制图片失败', error)
    if (appWindow.value) {
      await appWindow.value.close()
    }
  }
}

const handleSaveImage = async () => {
  try {
    const imageDataToSave = imageData.value
    closeContextMenu()
    
    if (appWindow.value) {
      await appWindow.value.hide()
    }
    
    await invoke('save_pin_image', { imageData: imageDataToSave })
    
    if (appWindow.value) {
      await appWindow.value.close()
    }
  } catch (error) {
    logger.error('[PIN窗口] 保存图片失败', error)
    if (appWindow.value) {
      await appWindow.value.close()
    }
  }
}

const handleClose = async () => {
  if (appWindow.value) {
    await appWindow.value.close()
  }
}

const globalContextMenuHandler = (e: MouseEvent) => {
  e.preventDefault()
}

const handleMouseDown = async (event: MouseEvent) => {
  if (event.button === 0 && appWindow.value) {
    try {
      await appWindow.value.startDragging()
    } catch (error) {
      logger.error('[PIN窗口] 拖拽窗口失败', error)
    }
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.context-menu')) {
    closeContextMenu()
  }
}

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.altKey && event.code === 'Space') {
    event.preventDefault()
    event.stopPropagation()
    return
  }
  
  if (event.key === 'Escape') {
    if (showContextMenu.value) {
      closeContextMenu()
    } else {
      handleClose()
    }
  } else if (event.ctrlKey || event.metaKey) {
    if (event.key === '0') {
      // Ctrl/Cmd + 0 重置缩放到原始尺寸
      event.preventDefault()
      handleResetZoom()
    } else if (event.key === '=' || event.key === '+') {
      // Ctrl/Cmd + + 放大（增加 5%）
      event.preventDefault()
      scaleWindowByKeyboard(1.05)
    } else if (event.key === '-') {
      // Ctrl/Cmd + - 缩小（减少 5%）
      event.preventDefault()
      scaleWindowByKeyboard(0.95)
    }
  }
}

onMounted(async () => {
  if (!containerRef.value) {
    return
  }
  
  try {
    appWindow.value = Window.getCurrent()
    
    try {
      unlistenImageData = await appWindow.value.listen('pin-image-data', (event: any) => {
        if (event.payload && event.payload.imageData) {
          const base64Data = event.payload.imageData
          imageData.value = base64Data
          
          try {
            const base64String = base64Data.split(',')[1] || base64Data
            const mimeMatch = base64Data.match(/data:([^;]+);/)
            const mimeType = mimeMatch ? mimeMatch[1] : 'image/png'
            
            const binaryString = atob(base64String)
            const bytes = new Uint8Array(binaryString.length)
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i)
            }
            
            const blob = new Blob([bytes], { type: mimeType })
            imageBlobUrl.value = URL.createObjectURL(blob)
          } catch (error) {
            logger.error('[PIN窗口] 转换 Blob URL 失败', error)
            imageBlobUrl.value = base64Data
          }
        } else {
          logger.error('[PIN窗口] 收到的事件数据格式不正确', event.payload)
        }
      })
    } catch (error) {
      logger.error('[PIN窗口] 设置事件监听失败', error)
    }
    
  } catch (error) {
    logger.error('[PIN窗口] 初始化错误', error)
    if (appWindow.value) {
      try {
        await appWindow.value.show()
      } catch (showError) {
        logger.error('[PIN窗口] 显示窗口失败', showError)
      }
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown, true)
  document.addEventListener('contextmenu', globalContextMenuHandler, true)
  window.addEventListener('blur', closeContextMenu)
  
  if (document.body) {
    document.body.oncontextmenu = (e) => {
      e.preventDefault()
      return false
    }
  }
})

onUnmounted(() => {
  if (imageBlobUrl.value) {
    URL.revokeObjectURL(imageBlobUrl.value)
  }
  
  if (unlistenImageData) {
    unlistenImageData()
  }
  
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown, true)
  document.removeEventListener('contextmenu', globalContextMenuHandler, true)
  window.removeEventListener('blur', closeContextMenu)
  
  if (document.body) {
    document.body.oncontextmenu = null
  }
  
  if (zoomInfoTimer) {
    clearTimeout(zoomInfoTimer)
  }
})
</script>

<style scoped lang="scss">
.pin-container {
  @apply w-full h-full relative overflow-hidden select-none;
  user-select: none;
  -webkit-user-select: none;
  background: transparent;
  
  .image-wrapper {
    @apply relative z-10;
    @apply w-full h-full;
    
    img {
      @apply block select-none;
      user-select: none;
      -webkit-user-drag: none;
    }
  }
  
  .zoom-info {
    @apply absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm z-30;
    pointer-events: none;
  }
  
  .context-menu {
    @apply fixed bg-white dark:bg-panel rounded-lg py-2 min-w-24;
    border: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 9999;
    
    .menu-item {
      @apply px-3 py-1 hover:bg-gray-100 dark:hover:bg-hover cursor-pointer text-sm;

      .menu-item-icon {
        @apply mr-2 inline-block align-middle mb-[1px];
      }
      
      &.danger {
        @apply text-red-500;
      }
    }
    
    .menu-divider {
      @apply h-px bg-gray-200 dark:bg-gray-600 my-1;
    }
  }
}

</style>
