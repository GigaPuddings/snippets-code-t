import { invoke } from '@tauri-apps/api/core';
import type { AttachmentConfig, AttachmentInfo } from '@/types/models';

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

export async function getAttachmentConfig(): Promise<AttachmentConfig> {
  try {
    return await invoke<AttachmentConfig>('get_attachment_config');
  } catch (error) {
    throw new Error(`获取附件配置失败: ${error}`);
  }
}

export async function updateAttachmentConfig(config: AttachmentConfig): Promise<void> {
  try {
    await invoke('update_attachment_config', { config });
  } catch (error) {
    throw new Error(`更新附件配置失败: ${error}`);
  }
}

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

export async function cleanupAttachmentsOnDelete(noteName: string): Promise<boolean> {
  try {
    return await invoke<boolean>('cleanup_attachments_on_delete', { noteName });
  } catch (error) {
    throw new Error(`清理附件失败: ${error}`);
  }
}

export async function cleanupUnusedAttachments(noteName: string, noteContent: string): Promise<number> {
  try {
    return await invoke<number>('cleanup_unused_attachments', { noteName, noteContent });
  } catch (error) {
    throw new Error(`清理未使用的附件失败: ${error}`);
  }
}

export async function cleanupOrphanedAttachments(): Promise<number> {
  try {
    return await invoke<number>('cleanup_orphaned_attachments');
  } catch (error) {
    throw new Error(`清理孤立附件失败: ${error}`);
  }
}

export async function restoreDeletedAttachment(noteName: string, fileName: string): Promise<boolean> {
  try {
    return await invoke<boolean>('restore_deleted_attachment', { noteName, fileName });
  } catch (error) {
    throw new Error(`恢复被误删的附件失败: ${error}`);
  }
}

export async function restoreAllDeletedAttachments(noteName: string, noteContent: string): Promise<number> {
  try {
    return await invoke<number>('restore_all_deleted_attachments', { noteName, noteContent });
  } catch (error) {
    throw new Error(`恢复所有被误删的附件失败: ${error}`);
  }
}

export async function deleteAllTrashAttachments(): Promise<number> {
  try {
    return await invoke<number>('delete_all_trash_attachments');
  } catch (error) {
    throw new Error(`删除软删除附件失败: ${error}`);
  }
}
