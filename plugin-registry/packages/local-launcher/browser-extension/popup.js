const api = globalThis.browser || globalThis.chrome;
const browserSelect = document.getElementById('browser');
const profile = document.getElementById('profile');
const status = document.getElementById('status');
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
  status.textContent = result.status;
});
document.getElementById('disconnect').addEventListener('click', async () => {
  await api.storage.local.set({ enabled: false });
  const result = await api.runtime.sendMessage({ action: 'disconnect' });
  status.textContent = result.status;
});
api.runtime.sendMessage({ action: 'status' }).then((result) => {
  status.textContent = result.status;
});
