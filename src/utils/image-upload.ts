/**
 * 图片上传工具函数
 */

import { saveImageAttachment } from '@/api/markdown';
import type { AttachmentInfo } from '@/types/models';

/**
 * 将文件转换为 Base64 字符串
 * @param file 文件对象
 * @returns Base64 字符串（不含前缀）
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      const result = reader.result as string;
      // 移除 data:image/xxx;base64, 前缀
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * 检查文件是否为图片
 * @param file 文件对象
 * @returns 是否为图片
 */
export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/');
}

/**
 * 检查文件类型是否支持
 * @param file 文件对象
 * @returns 是否支持
 */
export function isSupportedImageType(file: File): boolean {
  const supportedTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/webp',
    'image/bmp',
    'image/svg+xml'
  ];
  
  return supportedTypes.includes(file.type);
}

/**
 * 上传图片到附件文件夹
 * @param file 图片文件
 * @param noteFilePath 笔记文件路径
 * @returns 附件信息
 */
export async function uploadImage(
  file: File,
  noteFilePath: string
): Promise<AttachmentInfo> {
  // 检查文件类型
  if (!isImageFile(file)) {
    throw new Error('文件不是图片类型');
  }
  
  if (!isSupportedImageType(file)) {
    throw new Error(`不支持的图片格式: ${file.type}`);
  }
  
  // 转换为 Base64
  const base64 = await fileToBase64(file);
  
  // 调用后端 API 保存图片
  const attachmentInfo = await saveImageAttachment(
    noteFilePath,
    base64,
    file.name
  );
  
  return attachmentInfo;
}

/**
 * 从剪贴板数据中提取图片文件
 * @param clipboardData 剪贴板数据
 * @returns 图片文件数组
 */
export function extractImagesFromClipboard(clipboardData: DataTransfer | null): File[] {
  if (!clipboardData) return [];
  
  const images: File[] = [];
  const items = clipboardData.items;
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile();
      if (file) {
        images.push(file);
      }
    }
  }
  
  return images;
}

/**
 * 从拖拽数据中提取图片文件
 * @param dataTransfer 拖拽数据
 * @returns 图片文件数组
 */
export function extractImagesFromDrop(dataTransfer: DataTransfer | null): File[] {
  if (!dataTransfer) return [];
  
  const images: File[] = [];
  const files = dataTransfer.files;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith('image/')) {
      images.push(file);
    }
  }
  
  return images;
}
