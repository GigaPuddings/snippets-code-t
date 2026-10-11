const api = globalThis.browser || globalThis.chrome;
const browserSelect = document.getElementById('browser');
const profile = document.getElementById('profile');
const status = document.getElementById('status');
const hint = document.getElementById('hint');

function showStatus(value) {
  status.textContent =
    { Connected: '已连接', Connecting: '正在连接…', Disconnected: '未连接' }[
      value
    ] || value;
  hint.textContent =
    value === 'Connected'
      ? '返回启动器的浏览器连接设置，绑定此配置文件。连接状态会自动刷新。'
      : value === 'Connecting'
        ? '正在等待 Snippets Code 主程序响应。'
        : '请先在 Snippets Code 中准备本地连接，并保持应用运行。若提示找不到本地主机，重新准备连接后重试；浏览器类型应与启动器扫描的来源一致。';
}

async function refreshStatus() {
  try {
    const result = await api.runtime.sendMessage({ action: 'status' });
    showStatus(result.status);
  } catch (error) {
    showStatus(error.message);
  }
}
api.storage.local.get(['browserName', 'profileLabel']).then((config) => {
  browserSelect.value =
    config.browserName ||
    (globalThis.browser
      ? 'Firefox'
      : navigator.userAgent.includes('Edg/')
        ? 'Edge'
        : 'Chrome');
  profile.value = config.profileLabel || 'Default';
});
document.getElementById('connect').addEventListener('click', async () => {
  await api.storage.local.set({
    browserName: browserSelect.value,
    profileLabel: profile.value.trim() || 'Default',
    enabled: true
  });
  const result = await api.runtime.sendMessage({ action: 'connect' });
  showStatus(result.status);
});
document.getElementById('disconnect').addEventListener('click', async () => {
  await api.storage.local.set({ enabled: false });
  const result = await api.runtime.sendMessage({ action: 'disconnect' });
  showStatus(result.status);
});
refreshStatus();
const statusTimer = setInterval(refreshStatus, 1000);
window.addEventListener('pagehide', () => clearInterval(statusTimer));
