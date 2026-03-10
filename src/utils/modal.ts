/**
 * 消息提示位置
 * - center: 居中显示（默认，用于重要操作反馈）
 * - top-right: 右上角显示（用于后台操作、更新通知等）
 * - top-left: 左上角显示
 * - bottom-right: 右下角显示
 * - bottom-left: 左下角显示
 */
export type MessagePosition = 'center' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

/**
 * 消息提示选项
 */
export interface MessageOptions {
  /** 消息内容 */
  message: string;
  /** 消息类型 */
  type?: 'success' | 'warning' | 'info' | 'error';
  /** 显示位置，默认 center */
  position?: MessagePosition;
  /** 显示时长（毫秒），默认 3000 */
  duration?: number;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
}

/**
 * 统一的消息提示工具
 * 
 * 使用规范：
 * - 重要操作反馈（保存、删除等）：使用 center 位置
 * - 后台操作通知（更新链接、同步等）：使用 top-right 位置
 * - 错误提示：使用 center 位置，type 为 error
 * 
 * @example
 * ```typescript
 * // 居中显示成功消息（默认）
 * modal.msg('保存成功');
 * 
 * // 右上角显示通知
 * modal.msg('已更新 3 个反向链接', 'success', 'top-right');
 * 
 * // 使用选项对象
 * modal.message({
 *   message: '操作成功',
 *   type: 'success',
 *   position: 'top-right',
 *   duration: 5000
 * });
 * ```
 */
const modal = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(
    message: string,
    type: 'success' | 'warning' | 'info' | 'error' = 'success',
    position: MessagePosition = 'center',
    duration?: number
  ) {
    this.message({
      message,
      type,
      position,
      duration
    });
  },

  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(options: MessageOptions) {
    const {
      message,
      type = 'success',
      position = 'center',
      duration = 3000,
      showClose = false
    } = options;

    // 如果位置是 center，使用 ElMessage（居中显示）
    if (position === 'center') {
      // 使用全局的 ElMessage（由 unplugin-auto-import 自动导入）
      // @ts-ignore - ElMessage 由 auto-import 提供
      ElMessage({
        message,
        type,
        duration,
        showClose,
        grouping: true
      });
    } else {
      // 其他位置使用 ElNotification（角落显示）
      // @ts-ignore - ElNotification 由 auto-import 提供
      ElNotification({
        message,
        type,
        position,
        duration,
        showClose: false, // 角落通知统一不显示关闭按钮，更简洁
        title: '',
        offset: 50, // 距离顶部/底部 50px，避免遮挡窗口控制按钮
        customClass: 'custom-notification' // 自定义样式类
      });
    }
  },

  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(message: string, position: MessagePosition = 'center', duration?: number) {
    this.msg(message, 'success', position, duration);
  },

  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(message: string, position: MessagePosition = 'center', duration?: number) {
    this.msg(message, 'warning', position, duration);
  },

  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(message: string, position: MessagePosition = 'center', duration?: number) {
    this.msg(message, 'info', position, duration);
  },

  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(message: string, position: MessagePosition = 'center', duration?: number) {
    this.msg(message, 'error', position, duration);
  }
};

export { modal };
export default modal;