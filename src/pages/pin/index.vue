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
        <component class="menu-item-icon" :is="isAlwaysOnTop ? Pin : Pushpin" size="18" :strokeWidth="3"/><span>{{ isAlwaysOnTop ? '取消置顶' : '置顶窗口' }}</span>
      </div>
      <div class="menu-item" @click="handleResetZoom">
        <Redo class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>重置缩放</span>
      </div>
      <div class="menu-item" @click="handleCopyImage">
        <Copy class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>复制图片</span>
      </div>
      <div class="menu-item" @click="handleSaveImage">
        <Save class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>保存图片</span>
      </div>
      <div class="menu-divider"></div>
      <div class="menu-item danger" @click="handleClose">
        <Close class="menu-item-icon" size="18" theme="outline" :strokeWidth="3"/><span>关闭贴图</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Window, LogicalSize } from '@tauri-apps/api/window'
import { invoke } from '@tauri-apps/api/core'
import { Pin, Pushpin, Redo, Copy, Save, Close } from '@icon-park/vue-next';
// 组件引用
const containerRef = ref<HTMLDivElement>()
const appWindow = ref<Window | null>(null)

// 图片数据
const imageData = ref<string>('')  // 存储原始 base64
const imageBlobUrl = ref<string>('')  // 存储 Blob URL 用于显示
const imageWidth = ref(0)  // 图片的物理像素宽度（naturalWidth）
const imageHeight = ref(0)  // 图片的物理像素高度（naturalHeight）
const initialWindowSize = ref({ width: 0, height: 0 })  // 窗口初始逻辑像素尺寸

// 缩放相关
const scale = ref(1)  // 仅用于显示缩放百分比
const showZoomInfo = ref(false)
const isResizing = ref(false)  // 防止重复缩放
let zoomInfoTimer: ReturnType<typeof setTimeout> | null = null

// 右键菜单
const showContextMenu = ref(false)
const contextMenuPosition = ref({ x: 0, y: 0 })
const isAlwaysOnTop = ref(true)
const windowSize = ref({ width: 0, height: 0 })  // 存储窗口尺寸用于菜单缩放

// 事件监听清理函数
let unlistenImageData: (() => void) | null = null

// 计算图片容器样式
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

// 计算右键菜单样式（根据窗口大小动态缩放）
const contextMenuStyle = computed(() => {
  // 基于窗口较小边的尺寸计算缩放比例
  const minDimension = Math.min(windowSize.value.width, windowSize.value.height)
  
  // 计算缩放比例：
  // - 窗口 >= 300px: 100% (scale = 1)
  // - 窗口 200px: 75% (scale = 0.75)
  // - 窗口 100px: 50% (scale = 0.5)
  // - 最小缩放 0.4 (40%)
  let menuScale = 1
  if (minDimension < 300) {
    menuScale = Math.max(0.4, minDimension / 300)
  }
  
  return {
    left: `${contextMenuPosition.value.x}px`,
    top: `${contextMenuPosition.value.y}px`,
    transform: `scale(${menuScale})`,
    transformOrigin: 'top left'  // 从左上角开始缩放，保持位置稳定
  }
})

// 处理图片加载
const handleImageLoad = async (event: Event) => {
  const img = event.target as HTMLImageElement
  imageWidth.value = img.naturalWidth
  imageHeight.value = img.naturalHeight
  
  // 保存窗口的初始逻辑像素尺寸（用于重置缩放）
  if (appWindow.value && initialWindowSize.value.width === 0) {
    try {
      const currentSizeRaw = await appWindow.value.innerSize()
      const scaleFactor = await appWindow.value.scaleFactor()
      const logicalSize = currentSizeRaw.toLogical(scaleFactor)
      initialWindowSize.value = { 
        width: logicalSize.width, 
        height: logicalSize.height 
      }
      console.log('[PIN] 💾 保存窗口初始尺寸（逻辑像素）:', initialWindowSize.value)
      console.log('[PIN] 📐 图片原始尺寸（物理像素）:', { 
        width: imageWidth.value, 
        height: imageHeight.value 
      })
    } catch (error) {
      console.error('[PIN] 获取窗口初始尺寸失败:', error)
    }
  }
}

// 处理鼠标滚轮缩放（仅在按住 Ctrl 键时）
const handleWheel = async (event: WheelEvent) => {
  // 只有按住 Ctrl 键时才进行缩放
  if (!event.ctrlKey) {
    return
  }
  
  event.preventDefault()
  event.stopPropagation()
  
  // 防抖：如果正在缩放中，忽略此次事件
  if (isResizing.value) {
    console.log('[PIN] ⏸️ 缩放进行中，忽略此次滚轮事件')
    return
  }
  
  console.log('[PIN] ✅ 滚轮事件触发:', { ctrlKey: event.ctrlKey, deltaY: event.deltaY })
  
  // 缩放窗口大小而不是图片
  if (appWindow.value) {
    // 立即锁定，防止重复触发
    isResizing.value = true
    
    try {
      // 获取当前窗口尺寸（可能是物理像素或逻辑像素）
      const currentSizeRaw = await appWindow.value.innerSize()
      console.log('[PIN] 原始窗口尺寸:', currentSizeRaw)
      
      // 转换为逻辑像素
      const currentSize = currentSizeRaw.toLogical(await appWindow.value.scaleFactor())
      console.log('[PIN] 逻辑像素尺寸:', currentSize)
      
      // 使用5%的缩放步长
      // deltaY > 0: 向下滚动 → 缩小（0.95）
      // deltaY < 0: 向上滚动 → 放大（1.05）
      const scaleFactor = event.deltaY > 0 ? 0.95 : 1.05
      console.log('[PIN] 缩放因子:', scaleFactor, event.deltaY > 0 ? '缩小' : '放大')
      
      // 使用逻辑像素进行计算
      const currentWidth = currentSize.width
      const currentHeight = currentSize.height
      
      // 等比例缩放，保持宽高比
      const newWidth = Math.round(currentWidth * scaleFactor)
      const newHeight = Math.round(currentHeight * scaleFactor)
      
      // 限制最小和最大尺寸（逻辑像素）
      const minSize = 50   // 最小 50px
      const maxSize = 3000 // 最大 3000px
      
      if (newWidth >= minSize && newWidth <= maxSize && 
          newHeight >= minSize && newHeight <= maxSize) {
        await appWindow.value.setSize(new LogicalSize(newWidth, newHeight))
        
        // 计算并显示缩放比例（相对于原始图片宽度）
        if (imageWidth.value > 0) {
          const scalePercentage = Math.round((newWidth / imageWidth.value) * 100)
          scale.value = scalePercentage / 100  // 仅用于显示百分比
        }
        
        console.log('[PIN] ✅ 窗口缩放完成:', { 
          old: { w: currentSize.width, h: currentSize.height }, 
          new: { w: newWidth, h: newHeight },
          change: { w: newWidth - currentSize.width, h: newHeight - currentSize.height },
          scalePercent: Math.round(scale.value * 100) + '%'
        })
        
        showZoomInfo.value = true
        showZoomIndicator()
      } else {
        console.log('[PIN] ⚠️ 超出尺寸限制，忽略缩放')
      }
    } catch (error) {
      console.error('[PIN] ❌ 窗口缩放失败:', error)
    } finally {
      // 延迟 100ms 后允许下次缩放（增加防抖时间）
      setTimeout(() => {
        console.log('[PIN] 🔓 解锁，允许下次缩放')
        isResizing.value = false
      }, 100)
    }
  }
}

// 显示缩放指示器
const showZoomIndicator = () => {
  showZoomInfo.value = true
  
  if (zoomInfoTimer) {
    clearTimeout(zoomInfoTimer)
  }
  
  zoomInfoTimer = setTimeout(() => {
    showZoomInfo.value = false
  }, 1000)
}

// 处理右键菜单
const handleContextMenu = (event: MouseEvent) => {
  console.log('[PIN] 处理右键菜单，位置:', event.clientX, event.clientY)
  event.preventDefault()
  event.stopPropagation()
  
  // 先关闭已有菜单
  showContextMenu.value = false
  
  // 使用 setTimeout 确保状态更新后再显示
  setTimeout(() => {
    // 获取窗口尺寸
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    
    // 更新窗口尺寸，用于菜单动态缩放
    windowSize.value = { width: windowWidth, height: windowHeight }
    
    // 基于窗口大小计算菜单的实际尺寸（考虑缩放）
    const minDimension = Math.min(windowWidth, windowHeight)
    let menuScale = 1
    if (minDimension < 300) {
      menuScale = Math.max(0.4, minDimension / 300)
    }
    
    console.log('[PIN] 菜单缩放计算:', { 
      windowSize: { width: windowWidth, height: windowHeight }, 
      minDimension, 
      menuScale: menuScale.toFixed(2) 
    })
    
    // 菜单的基础尺寸
    const baseMenuWidth = 150
    const baseMenuHeight = 180
    // 实际菜单尺寸（应用缩放后）
    const menuWidth = baseMenuWidth * menuScale
    const menuHeight = baseMenuHeight * menuScale
    
    // 计算菜单位置，防止超出窗口边界
    let x = event.clientX
    let y = event.clientY
    
    // 右边界检测
    if (x + menuWidth > windowWidth) {
      x = windowWidth - menuWidth - 5
    }
    
    // 底部边界检测
    if (y + menuHeight > windowHeight) {
      y = windowHeight - menuHeight - 5
    }
    
    // 确保不会超出左边和顶部
    x = Math.max(5, x)
    y = Math.max(5, y)
    
    contextMenuPosition.value = { x, y }
    showContextMenu.value = true
    console.log('[PIN] 菜单已显示，调整后位置:', { x, y })
  }, 10)
}

// 关闭右键菜单
const closeContextMenu = () => {
  if (showContextMenu.value) {
    console.log('[PIN] 关闭右键菜单')
  }
  showContextMenu.value = false
}

// 切换置顶状态
const handleToggleAlwaysOnTop = async () => {
  if (!appWindow.value) return
  
  isAlwaysOnTop.value = !isAlwaysOnTop.value
  await appWindow.value.setAlwaysOnTop(isAlwaysOnTop.value)
  closeContextMenu()
}

// 键盘快捷键缩放窗口
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
        
        console.log('[PIN] ⌨️ 键盘缩放:', { factor, old: currentSize, new: { w: newWidth, h: newHeight } })
        showZoomIndicator()
      }
    } catch (error) {
      console.error('[PIN] 键盘缩放失败:', error)
    } finally {
      setTimeout(() => {
        isResizing.value = false
      }, 100)
    }
  }
}

// 重置缩放（将窗口调整回创建时的初始逻辑像素尺寸）
const handleResetZoom = async () => {
  if (appWindow.value && initialWindowSize.value.width > 0 && initialWindowSize.value.height > 0) {
    try {
      await appWindow.value.setSize(new LogicalSize(
        initialWindowSize.value.width, 
        initialWindowSize.value.height
      ))
      scale.value = 1
      console.log('[PIN] 🔄 重置缩放到初始窗口尺寸（逻辑像素）:', initialWindowSize.value)
      showZoomIndicator()
    } catch (error) {
      console.error('[PIN] 重置缩放失败:', error)
    }
  } else {
    console.warn('[PIN] ⚠️ 无法重置：初始窗口尺寸未保存')
  }
  closeContextMenu()
}

// 复制图片
const handleCopyImage = async () => {
  try {
    // 1. 先保存图片数据到局部变量
    const imageDataToSave = imageData.value
    console.log('[PIN] 📋 准备复制图片，数据大小:', imageDataToSave.length, 'bytes')
    
    // 2. 关闭菜单
    closeContextMenu()
    
    // 3. 立即隐藏窗口（用户看不到了，但窗口还在）
    if (appWindow.value) {
      await appWindow.value.hide()
      console.log('[PIN] 👻 窗口已隐藏（复制图片）')
    }
    
    // 4. 执行复制操作
    await invoke('copy_image_to_clipboard', { imageData: imageDataToSave })
    console.log('[PIN] ✅ 图片已复制到剪贴板')
    
    // 5. 操作成功后，销毁窗口
    if (appWindow.value) {
      await appWindow.value.close()
      console.log('[PIN] 🚪 窗口已销毁（复制完成）')
    }
    
  } catch (error) {
    console.error('[PIN] ❌ 复制图片失败:', error)
    // 即使失败也要关闭窗口
    if (appWindow.value) {
      await appWindow.value.close()
    }
  }
}

// 保存图片
const handleSaveImage = async () => {
  try {
    // 1. 先保存图片数据到局部变量
    const imageDataToSave = imageData.value
    console.log('[PIN] 💾 准备保存图片，数据大小:', imageDataToSave.length, 'bytes')
    
    // 2. 关闭菜单
    closeContextMenu()
    
    // 3. 立即隐藏窗口（用户看不到了，但窗口还在）
    if (appWindow.value) {
      await appWindow.value.hide()
      console.log('[PIN] 👻 窗口已隐藏（保存图片）')
    }
    
    // 4. 执行保存操作
    await invoke('save_pin_image', { imageData: imageDataToSave })
    console.log('[PIN] ✅ 图片已保存')
    
    // 5. 操作成功后，销毁窗口
    if (appWindow.value) {
      await appWindow.value.close()
      console.log('[PIN] 🚪 窗口已销毁（保存完成）')
    }
    
  } catch (error) {
    console.error('[PIN] ❌ 保存图片失败:', error)
    // 即使失败也要关闭窗口
    if (appWindow.value) {
      await appWindow.value.close()
    }
  }
}

// 关闭窗口
const handleClose = async () => {
  if (appWindow.value) {
    await appWindow.value.close()
  }
}

// 全局右键菜单处理器（用于阻止系统菜单，但允许自定义菜单）
const globalContextMenuHandler = (e: MouseEvent) => {
  console.log('[PIN] 全局右键菜单被触发')
  e.preventDefault()
}

// 处理鼠标按下（用于拖拽窗口）
const handleMouseDown = async (event: MouseEvent) => {
  // 左键拖拽窗口
  if (event.button === 0 && appWindow.value) {
    try {
      console.log('[PIN] 开始拖拽窗口')
      await appWindow.value.startDragging()
    } catch (error) {
      console.error('[PIN] 拖拽窗口失败:', error)
    }
  }
}

// 点击空白处关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.context-menu')) {
    closeContextMenu()
  }
}

// 键盘快捷键
const handleKeydown = (event: KeyboardEvent) => {
  // 阻止 Alt+Space 打开系统菜单
  if (event.altKey && event.code === 'Space') {
    event.preventDefault()
    event.stopPropagation()
    console.log('[PIN] 阻止 Alt+Space 系统菜单')
    return false
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
  console.log('[PIN] onMounted 开始')
  
  if (!containerRef.value) {
    console.error('[PIN] containerRef 不存在')
    return
  }
  
  // 获取当前窗口实例
  try {
    appWindow.value = Window.getCurrent()
    const windowLabel = appWindow.value.label
    
    console.log('[PIN] 贴图窗口已挂载，窗口标签:', windowLabel)
    
    // 监听后端发送的图片数据事件（使用窗口级别的 listen）
    console.log('[PIN] 窗口标签:', windowLabel)
    console.log('[PIN] 开始监听窗口级别的图片数据事件: pin-image-data')
    
    try {
      unlistenImageData = await appWindow.value.listen('pin-image-data', (event: any) => {
        
        if (event.payload && event.payload.imageData) {
          const base64Data = event.payload.imageData
          imageData.value = base64Data
          console.log('[PIN] ✅ 图片数据已设置，大小:', base64Data.length, 'bytes')
          
          // 将 base64 转换为 Blob URL，避免 431 错误
          try {
            // 提取 base64 数据部分
            const base64String = base64Data.split(',')[1] || base64Data
            const mimeMatch = base64Data.match(/data:([^;]+);/)
            const mimeType = mimeMatch ? mimeMatch[1] : 'image/png'
            
            // 解码 base64
            const binaryString = atob(base64String)
            const bytes = new Uint8Array(binaryString.length)
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i)
            }
            
            // 创建 Blob
            const blob = new Blob([bytes], { type: mimeType })
            
            // 创建 Blob URL
            imageBlobUrl.value = URL.createObjectURL(blob)
            console.log('[PIN] ✅ Blob URL 已创建:', imageBlobUrl.value)
          } catch (error) {
            console.error('[PIN] ❌ 转换 Blob URL 失败:', error)
            // 失败时降级使用原始 base64
            imageBlobUrl.value = base64Data
          }
        } else {
          console.error('[PIN] ❌ 收到的事件数据格式不正确')
          console.error('[PIN] event.payload:', event.payload)
        }
      })
      console.log('[PIN] ✅ 窗口事件监听已设置成功')
      console.log('[PIN] unlistenImageData 类型:', typeof unlistenImageData)
    } catch (error) {
      console.error('[PIN] ❌ 设置事件监听失败:', error)
    }
    
    console.log('[PIN] 等待后端发送数据（后端将在500ms后开始尝试发送）...')
    
    // 超时检测
    setTimeout(() => {
      if (!imageBlobUrl.value) {
        console.error('[PIN] ❌ 超时：5秒内未收到图片数据或转换失败')
        console.error('[PIN] imageData 长度:', imageData.value?.length || 0)
      } else {
        console.log('[PIN] ✅ 图片数据接收并转换成功！')
      }
    }, 5000)
    
  } catch (error) {
    console.error('[PIN] 初始化错误:', error)
    if (appWindow.value) {
      try {
        await appWindow.value.show()
        console.log('[PIN] 出错但窗口已显示')
      } catch (showError) {
        console.error('[PIN] 显示窗口也失败:', showError)
      }
    }
  }
  
  // 添加事件监听
  // 注意：wheel 事件已通过 Vue 模板绑定，不需要手动添加
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown, true)  // 使用捕获阶段
  
  // 在文档级别阻止系统右键菜单（使用捕获阶段优先拦截）
  document.addEventListener('contextmenu', globalContextMenuHandler, true)
  
  // 窗口失焦时关闭右键菜单
  window.addEventListener('blur', closeContextMenu)
  
  // 在 body 上也添加阻止（多重防护）
  if (document.body) {
    document.body.oncontextmenu = (e) => {
      e.preventDefault()
      return false
    }
  }
  
  console.log('[PIN] onMounted 完成')
})

onUnmounted(() => {
  // 清理 Blob URL
  if (imageBlobUrl.value) {
    URL.revokeObjectURL(imageBlobUrl.value)
    console.log('[PIN] Blob URL 已释放')
  }
  
  // 清理事件监听
  if (unlistenImageData) {
    unlistenImageData()
  }
  
  // wheel 事件通过 Vue 模板绑定，会自动清理
  
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
