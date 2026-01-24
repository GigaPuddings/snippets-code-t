/**
 * 图像压缩工具
 * 对背景图像进行适度压缩以减少内存占用
 */
export class ImageCompressor {
  /**
   * 压缩图像
   * @param imageData Base64 图像数据
   * @param quality 压缩质量 (0-1)
   * @param maxWidth 最大宽度
   * @param maxHeight 最大高度
   * @returns 压缩后的 Base64 图像数据
   */
  static async compress(
    imageData: string,
    quality: number = 0.85,
    maxWidth?: number,
    maxHeight?: number
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      
      img.onload = () => {
        try {
          let { width, height } = img

          // 计算缩放比例
          if (maxWidth && width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }
          if (maxHeight && height > maxHeight) {
            width = (width * maxHeight) / height
            height = maxHeight
          }

          // 创建临时 canvas
          const canvas = document.createElement('canvas')
          canvas.width = Math.round(width)
          canvas.height = Math.round(height)
          
          const ctx = canvas.getContext('2d', {
            alpha: false, // 不需要透明通道
            desynchronized: true // 提升性能
          })

          if (!ctx) {
            reject(new Error('无法获取 2D 上下文'))
            return
          }

          // 使用高质量缩放
          ctx.imageSmoothingEnabled = true
          ctx.imageSmoothingQuality = 'high'

          // 绘制图像
          ctx.drawImage(img, 0, 0, width, height)

          // 转换为 JPEG 格式（更小的文件大小）
          const compressed = canvas.toDataURL('image/jpeg', quality)
          resolve(compressed.replace(/^data:image\/jpeg;base64,/, ''))
        } catch (error) {
          reject(error)
        }
      }

      img.onerror = () => {
        reject(new Error('图像加载失败'))
      }

      img.src = `data:image/jpeg;base64,${imageData}`
    })
  }

  /**
   * 估算图像内存占用
   * @param width 宽度
   * @param height 高度
   * @param bytesPerPixel 每像素字节数 (默认 4: RGBA)
   * @returns 内存占用 (字节)
   */
  static estimateMemoryUsage(
    width: number,
    height: number,
    bytesPerPixel: number = 4
  ): number {
    return width * height * bytesPerPixel
  }

  /**
   * 格式化内存大小
   * @param bytes 字节数
   * @returns 格式化的字符串
   */
  static formatMemorySize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }
}
