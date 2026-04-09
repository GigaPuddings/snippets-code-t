/**
 * Markdown 文件存储 API
 * 提供与后端 Tauri 命令交互的接口
 */

import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import type { MarkdownFile, MigrationConfig, MigrationProgress, MigrationResult, AttachmentConfig, AttachmentInfo } from '@/types/models';
import type { Category } from '@/types/database';

/**
 * 执行数据库到 Markdown 文件系统的迁移
 * @param config 迁移配置
 * @param onProgress 进度回调函数
 * @returns 迁移结果
 */
export async function migrateToMarkdown(
  config: MigrationConfig,
  onProgress?: (progress: MigrationProgress) => void
): Promise<MigrationResult> {
  try {
    // 如果提供了进度回调，设置事件监听器
    if (onProgress) {
      const unlisten = await listen<MigrationProgress>('migration-progress', (event) => {
        onProgress(event.payload);
      });
      
      try {
        const result = await invoke<MigrationResult>('migrate_to_markdown', { config });
        unlisten();
        return result;
      } catch (error) {
        unlisten();
        throw error;
      }
    }
    
    return await invoke<MigrationResult>('migrate_to_markdown', { config });
  } catch (error) {
    throw new Error(`迁移失败: ${error}`);
  }
}

/**
 * 回滚迁移操作
 * @param workspaceRoot 工作区根目录
 */
export async function rollbackMigration(workspaceRoot: string): Promise<void> {
  try {
    await invoke('rollback_migration', { workspaceRoot });
  } catch (error) {
    throw new Error(`回滚失败: ${error}`);
  }
}

/**
 * 完成迁移：移除数据库中的 fragments 和 categories 表
 * 
 * 此函数应在用户确认迁移成功后调用。
 * 它会永久删除数据库中的 contents 和 categories 表。
 * 
 * ⚠️ 警告：此操作不可逆！确保：
 * 1. 所有数据已成功迁移到 Markdown 文件
 * 2. 用户已验证迁移结果
 * 3. 数据库备份已创建
 * 
 * @throws 如果数据库操作失败
 */
export async function finalizeMigration(): Promise<void> {
  try {
    await invoke('finalize_migration');
  } catch (error) {
    throw new Error(`完成迁移失败: ${error}`);
  }
}

/**
 * Task 6 迁移：将 cache.json 中的元数据写入各文件的 Front Matter
 * @returns 迁移结果
 */

/**
 * 创建新的 Markdown 文件
 * @param category 分类名称（可选）
 * @param metadata 文件元数据
 * @returns 创建的文件路径
 */
export async function createMarkdownFile(
  category: string | null,
  metadata: Partial<MarkdownFile>
): Promise<string> {
  try {
    const result = await invoke<string>('create_markdown_file', { category, metadata });
    return result;
  } catch (error) {
    throw new Error(`创建文件失败: ${error}`);
  }
}

/**
 * 读取 Markdown 文件
 * @param filePath 文件路径
 * @returns Markdown 文件数据
 */
export async function readMarkdownFile(filePath: string): Promise<MarkdownFile> {
  try {
    return await invoke<MarkdownFile>('read_markdown_file', { filePath });
  } catch (error) {
    throw new Error(`读取文件失败: ${error}`);
  }
}

/**
 * 更新 Markdown 文件
 * @param filePath 文件路径
 * @param content 文件内容（可选）
 * @param metadata 文件元数据（可选）
 * @returns 如果文件被重命名，返回新的文件路径；否则返回 null
 */
export async function updateMarkdownFile(
  filePath: string,
  content?: string,
  metadata?: Partial<MarkdownFile>
): Promise<string | null> {
  try {
    const newPath = await invoke<string | null>('update_markdown_file', { filePath, content, metadata });
    return newPath;
  } catch (error) {
    throw new Error(`更新文件失败: ${error}`);
  }
}

/**
 * 删除 Markdown 文件
 * @param filePath 文件路径
 */
export async function deleteMarkdownFile(filePath: string): Promise<void> {
  try {
    await invoke('delete_markdown_file', { filePath });
  } catch (error) {
    throw new Error(`删除文件失败: ${error}`);
  }
}

/**
 * 移动 Markdown 文件到新分类
 * @param filePath 当前文件路径
 * @param newCategory 新分类名称（空字符串表示"未分类"）
 * @returns 新文件路径
 */
export async function moveMarkdownFile(filePath: string, newCategory: string): Promise<string> {
  try {
    return await invoke<string>('move_markdown_file', { filePath, newCategory });
  } catch (error) {
    throw new Error(`移动文件失败: ${error}`);
  }
}

/**
 * 搜索 Markdown 文件
 * @param query 搜索查询字符串
 * @returns 匹配的文件列表
 */
export async function searchMarkdownFiles(query: string): Promise<MarkdownFile[]> {
  try {
    return await invoke<MarkdownFile[]>('search_markdown_files_optimized', { query });
  } catch (error) {
    throw new Error(`搜索失败: ${error}`);
  }
}

/**
 * 按标签筛选文件
 * @param tag 标签名称
 * @returns 包含该标签的文件列表
 */
export async function getFilesByTag(tag: string): Promise<MarkdownFile[]> {
  try {
    return await invoke<MarkdownFile[]>('get_files_by_tag', { tag });
  } catch (error) {
    throw new Error(`按标签筛选失败: ${error}`);
  }
}

/**
 * 获取收藏的文件列表
 * @returns 收藏的文件列表
 */
export async function getFavoriteFiles(): Promise<MarkdownFile[]> {
  try {
    return await invoke<MarkdownFile[]>('get_favorite_files');
  } catch (error) {
    throw new Error(`获取收藏列表失败: ${error}`);
  }
}

/**
 * 获取所有标签列表
 * @returns 唯一标签列表
 */
export async function getAllTags(): Promise<string[]> {
  try {
    return await invoke<string[]>('get_all_tags');
  } catch (error) {
    throw new Error(`获取标签列表失败: ${error}`);
  }
}

/**
 * 选择工作区文件夹
 * @returns 选择的文件夹路径，如果取消则返回 null
 */
export async function selectWorkspace(): Promise<string | null> {
  try {
    return await invoke<string | null>('select_workspace');
  } catch (error) {
    throw new Error(`选择工作区失败: ${error}`);
  }
}

/**
 * 获取当前工作区根目录
 * @returns 工作区根目录路径
 */
export async function getWorkspaceRoot(): Promise<string> {
  try {
    const result = await invoke<string | null>('get_workspace_root_path');
    if (!result) {
      throw new Error('工作区未设置');
    }
    return result;
  } catch (error) {
    throw new Error(`获取工作区路径失败: ${error}`);
  }
}

/**
 * 设置工作区根目录
 * @param path 工作区根目录路径
 */
export async function setWorkspaceRoot(path: string): Promise<void> {
  try {
    await invoke('set_workspace_root', { path });
  } catch (error) {
    throw new Error(`设置工作区路径失败: ${error}`);
  }
}

/**
 * 验证工作区目录
 * @param path 要验证的目录路径
 * @returns 是否有效
 */
export async function validateWorkspace(path: string): Promise<boolean> {
  try {
    return await invoke<boolean>('validate_workspace', { path });
  } catch (error) {
    throw new Error(`验证工作区失败: ${error}`);
  }
}

/**
 * 获取所有分类（文件夹）
 * 后端现在返回完整的 Category 对象
 */
export async function getCategories(): Promise<Category[]> {
  try {
    const result = await invoke<Category[]>('get_markdown_categories');
    return result;
  } catch (error) {
    throw new Error(`获取分类列表失败: ${error}`);
  }
}

/**
 * 创建分类文件夹
 * @param name 分类名称
 * @returns 创建的文件夹路径
 */
export async function createCategory(name: string): Promise<string> {
  try {
    return await invoke<string>('create_category_folder', { name });
  } catch (error) {
    throw new Error(`创建分类失败: ${error}`);
  }
}

/**
 * 删除分类文件夹
 * @param name 分类名称
 */
export async function deleteCategory(name: string): Promise<void> {
  try {
    await invoke('delete_category_folder', { name });
  } catch (error) {
    throw new Error(`删除分类失败: ${error}`);
  }
}

/**
 * 重命名分类文件夹
 * @param oldName 旧名称
 * @param newName 新名称
 */
export async function renameCategory(oldName: string, newName: string): Promise<void> {
  try {
    await invoke('rename_category_folder', { oldName, newName });
  } catch (error) {
    throw new Error(`重命名分类失败: ${error}`);
  }
}

/**
 * 获取分类下的文件列表
 * @param category 分类 ID（0 表示未分类，null 表示所有文件）
 * @returns 文件列表
 */
export async function getFilesByCategory(category: number | null): Promise<MarkdownFile[]> {
  try {
    const result = await invoke<MarkdownFile[]>('get_files_by_category', { category });
    return result;
  } catch (error) {
    throw new Error(`获取文件列表失败: ${error}`);
  }
}

/**
 * 获取所有文件
 * @returns 所有文件列表
 */
export async function getAllFiles(): Promise<MarkdownFile[]> {
  try {
    const result = await invoke<MarkdownFile[]>('get_files_by_category', { category: null });
    return result;
  } catch (error) {
    throw new Error(`获取所有文件失败: ${error}`);
  }
}

// ─── workspace UI 状态 ───────────────────────────────────────────────────────

/**
 * 切换文件的收藏状态
 * @param filePath 文件路径
 * @param favorite 是否收藏
 */
export async function toggleFavorite(filePath: string, favorite: boolean): Promise<void> {
  try {
    await invoke('toggle_favorite', { filePath, favorite });
  } catch (error) {
    throw new Error(`切换收藏状态失败: ${error}`);
  }
}

/**
 * 解决文件冲突
 * @param filePath 文件路径
 * @param resolution 解决方案：'keep-external' 或 'keep-app'
 */
export async function resolveConflict(
  filePath: string,
  resolution: 'keep-external' | 'keep-app'
): Promise<void> {
  try {
    await invoke('resolve_conflict', { filePath, resolution });
  } catch (error) {
    throw new Error(`解决冲突失败: ${error}`);
  }
}

/**
 * 忽略下一次文件变化（用于应用内部修改）
 * @param filePath 文件路径
 */
export async function ignoreNextChange(filePath: string): Promise<void> {
  try {
    await invoke('ignore_next_change', { filePath });
  } catch (error) {
    throw new Error(`设置忽略失败: ${error}`);
  }
}

/**
 * 通过标题查找文件
 * @param title 笔记标题
 * @returns 匹配的文件，如果不存在则返回 null
 */
export async function findFileByTitle(title: string): Promise<MarkdownFile | null> {
  try {
    return await invoke<MarkdownFile | null>('find_file_by_title', { title });
  } catch (error) {
    throw new Error(`查找文件失败: ${error}`);
  }
}

/**
 * 获取所有文件标题
 * @returns 文件标题集合
 */
export async function getAllFileTitles(): Promise<string[]> {
  try {
    return await invoke<string[]>('get_all_file_titles');
  } catch (error) {
    throw new Error(`获取文件标题失败: ${error}`);
  }
}

/**
 * 更新所有文件中的 wikilinks
 * @param oldTitle 旧标题
 * @param newTitle 新标题
 * @returns 更新的文件数量
 */
export async function updateWikilinks(oldTitle: string, newTitle: string): Promise<number> {
  try {
    return await invoke<number>('update_wikilinks', { oldTitle, newTitle });
  } catch (error) {
    throw new Error(`更新 wikilinks 失败: ${error}`);
  }
}

/**
 * 查找包含指定标题 wikilink 的文件
 * @param title 笔记标题
 * @returns 包含该 wikilink 的文件列表
 */
export async function findFilesWithWikilink(title: string): Promise<MarkdownFile[]> {
  try {
    return await invoke<MarkdownFile[]>('find_files_with_wikilink', { title });
  } catch (error) {
    throw new Error(`查找 wikilink 引用失败: ${error}`);
  }
}
/**
 * 清理 cache.json 中已删除文件的元数据
 * @returns 清理的文件数量
 */
export async function cleanupCache(): Promise<number> {
  try {
    return await invoke<number>('cleanup_cache');
  } catch (error) {
    throw new Error(`清理缓存失败: ${error}`);
  }
}

/**
 * 扫描新文件并更新 cache（用于 Git Pull 后）
 * @returns 扫描到的文件总数
 */
export async function scanNewFiles(): Promise<number> {
  try {
    return await invoke<number>('scan_new_files');
  } catch (error) {
    throw new Error(`扫描新文件失败: ${error}`);
  }
}

/**
 * 保存图片附件
 * @param noteFilePath 笔记文件路径
 * @param imageData 图片数据（Base64）
 * @param originalName 原始文件名
 * @returns 附件信息
 */
export async function saveImageAttachment(
  noteFilePath: string,
  imageData: string,
  originalName: string
): Promise<AttachmentInfo> {
  try {
    return await invoke<AttachmentInfo>('save_image_attachment', {
      noteFilePath,
      imageData,
      originalName
    });
  } catch (error) {
    throw new Error(`保存图片失败: ${error}`);
  }
}

/**
 * 获取附件配置
 * @returns 附件配置
 */
export async function getAttachmentConfig(): Promise<AttachmentConfig> {
  try {
    return await invoke<AttachmentConfig>('get_attachment_config');
  } catch (error) {
    throw new Error(`获取附件配置失败: ${error}`);
  }
}

/**
 * 更新附件配置
 * @param config 新的附件配置
 */
export async function updateAttachmentConfig(config: AttachmentConfig): Promise<void> {
  try {
    await invoke('update_attachment_config', { config });
  } catch (error) {
    throw new Error(`更新附件配置失败: ${error}`);
  }
}

/**
 * 重命名笔记时同步附件
 * @param oldNoteName 旧笔记名称
 * @param newNoteName 新笔记名称
 * @param noteContent 笔记内容
 * @returns 更新后的笔记内容
 */
export async function syncAttachmentsOnRename(
  oldNoteName: string,
  newNoteName: string,
  noteContent: string
): Promise<string> {
  try {
    return await invoke<string>('sync_attachments_on_rename', {
      oldNoteName,
      newNoteName,
      noteContent
    });
  } catch (error) {
    throw new Error(`同步附件失败: ${error}`);
  }
}

/**
 * 删除笔记时清理附件
 * @param noteName 笔记名称
 * @returns 是否实际删除了附件
 */
export async function cleanupAttachmentsOnDelete(noteName: string): Promise<boolean> {
  try {
    return await invoke<boolean>('cleanup_attachments_on_delete', { noteName });
  } catch (error) {
    throw new Error(`清理附件失败: ${error}`);
  }
}

/**
 * 清理未使用的附件
 * @param noteName 笔记名称
 * @param noteContent 笔记内容
 * @returns 清理的文件数量
 */
export async function cleanupUnusedAttachments(noteName: string, noteContent: string): Promise<number> {
  try {
    return await invoke<number>('cleanup_unused_attachments', { noteName, noteContent });
  } catch (error) {
    throw new Error(`清理未使用的附件失败: ${error}`);
  }
}

/**
 * 清理孤立附件（没有对应笔记的附件文件夹）
 * @returns 清理的文件夹数量
 */
export async function cleanupOrphanedAttachments(): Promise<number> {
  try {
    return await invoke<number>('cleanup_orphaned_attachments');
  } catch (error) {
    throw new Error(`清理孤立附件失败: ${error}`);
  }
}

/**
 * 从软删除目录恢复被误删的单个附件
 * 当检测到笔记内容中引用了某个附件但该附件不存在时调用此函数
 * @param noteName 笔记名称
 * @param fileName 文件名
 * @returns 是否成功恢复
 */
export async function restoreDeletedAttachment(noteName: string, fileName: string): Promise<boolean> {
  try {
    return await invoke<boolean>('restore_deleted_attachment', { noteName, fileName });
  } catch (error) {
    throw new Error(`恢复被误删的附件失败: ${error}`);
  }
}

/**
 * 恢复笔记所有被软删除的附件
 * 当加载笔记后发现内容中有图片引用但文件不存在时调用此函数
 * @param noteName 笔记名称
 * @param noteContent 笔记内容
 * @returns 恢复的文件数量
 */
export async function restoreAllDeletedAttachments(noteName: string, noteContent: string): Promise<number> {
  try {
    return await invoke<number>('restore_all_deleted_attachments', { noteName, noteContent });
  } catch (error) {
    throw new Error(`恢复所有被误删的附件失败: ${error}`);
  }
}

/**
 * 删除所有软删除的附件（Config 窗口关闭时调用）
 * 不管是否有撤销，直接删除整个临时目录
 * @returns 删除的文件数量
 */
export async function deleteAllTrashAttachments(): Promise<number> {
  try {
    return await invoke<number>('delete_all_trash_attachments');
  } catch (error) {
    throw new Error(`删除软删除附件失败: ${error}`);
  }
}

/**
 * 获取同步开关状态
 * @returns 是否启用同步
 */
export async function getSyncEnabled(): Promise<boolean> {
  try {
    return await invoke<boolean>('get_sync_enabled');
  } catch (error) {
    throw new Error(`获取同步开关状态失败: ${error}`);
  }
}

/**
 * 设置同步开关状态
 * @param enabled 是否启用同步
 */
export async function setSyncEnabled(enabled: boolean): Promise<void> {
  try {
    await invoke('set_sync_enabled', { enabled });
  } catch (error) {
    throw new Error(`设置同步开关状态失败: ${error}`);
  }
}


/**
 * 重建搜索索引
 */
export async function rebuildSearchIndex(): Promise<void> {
  return invoke('rebuild_search_index');
}
