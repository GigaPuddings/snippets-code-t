/* Native host connection is explicitly enabled from the extension popup. */
if (typeof importScripts === 'function') importScripts('policy.js');
const api = globalThis.browser || globalThis.chrome;
let port = null;
let timer = null;
let enabled = false;
let status = 'Disconnected';
let client;

async function connect() {
  clearTimeout(timer);
  const config = await api.storage.local.get([
    'clientId',
    'browserName',
    'profileLabel',
    'enabled'
  ]);
  enabled = config.enabled === true;
  if (!enabled) return;
  const id = config.clientId || crypto.randomUUID();
  await api.storage.local.set({ clientId: id });
  client = {
    id,
    browser: config.browserName || (globalThis.browser ? 'Firefox' : 'Chrome'),
    label: config.profileLabel || 'Default'
  };
  const previousPort = port;
  port = null;
  if (previousPort) previousPort.disconnect();
  clearTimeout(timer);
  const nextPort = api.runtime.connectNative('com.snippets_code.bookmarks');
  port = nextPort;
  nextPort.onDisconnect.addListener(() => {
    if (port !== nextPort) return;
    status = api.runtime.lastError?.message || 'Disconnected';
    port = null;
    if (enabled) timer = setTimeout(connect, 10000);
  });
  nextPort.onMessage.addListener(async (response) => {
    if (port !== nextPort) return;
    status = response.error || 'Connected';
    const results = [];
    for (const command of (response.commands || []).slice(0, 64)) {
      try {
        await SnippetsBookmarkBridge.removeConfirmedBookmark(api, command);
        results.push({ request_id: command.request_id, ok: true });
      } catch (error) {
        results.push({
          request_id: command.request_id,
          ok: false,
          error: error.message
        });
      }
    }
    timer = setTimeout(
      () => {
        if (port === nextPort && enabled)
          nextPort.postMessage({ client, results });
      },
      results.length ? 0 : 1500
    );
  });
  nextPort.postMessage({ client, results: [] });
}

api.runtime.onMessage.addListener((message, sender, respond) => {
  if (sender.id !== api.runtime.id) return false;
  if (message.action === 'status') {
    respond({ status, client });
    return false;
  }
  if (message.action === 'connect') {
    connect()
      .then(() => respond({ status }))
      .catch((error) => respond({ status: error.message }));
    return true;
  }
  if (message.action === 'disconnect') {
    enabled = false;
    clearTimeout(timer);
    if (port) port.disconnect();
    port = null;
    status = 'Disconnected';
    respond({ status });
  }
  return false;
});
api.runtime.onStartup.addListener(connect);
api.runtime.onInstalled.addListener(connect);
connect();
