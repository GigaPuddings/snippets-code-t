export default {
  // 消息提示
  msg(
    message: string,
    type: 'success' | 'warning' | 'info' | 'error' = 'success'
  ) {
    ElMessage({
      message,
      type,
      plain: true,
      duration: 3000
      // showClose: true
    });
  }
};
