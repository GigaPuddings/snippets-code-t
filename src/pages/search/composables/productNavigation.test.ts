import { beforeEach, describe, expect, it, vi } from 'vitest';
import { openProductSearchResult } from './productNavigation';
const mocks = vi.hoisted(() => ({
  invoke: vi.fn(),
  listen: vi.fn(),
  hide: vi.fn(),
  show: vi.fn(),
  focus: vi.fn(),
  stop: vi.fn()
}));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/api/event', () => ({ listen: mocks.listen }));
vi.mock('@tauri-apps/api/window', () => ({
  getCurrentWindow: () => ({
    hide: mocks.hide,
    show: mocks.show,
    setFocus: mocks.focus
  })
}));

describe('cross-window product navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.hide.mockResolvedValue(undefined);
    mocks.show.mockResolvedValue(undefined);
    mocks.focus.mockResolvedValue(undefined);
  });
  it('registers for acknowledgement before opening config, then hides main only on success', async () => {
    let receive!: (event: any) => void;
    mocks.listen.mockImplementation(async (_event, callback) => {
      receive = callback;
      return mocks.stop;
    });
    mocks.invoke.mockImplementation(async (command, args) => {
      if (command === 'open_product_search_target')
        receive({
          payload: { requestId: args.request.requestId, success: true }
        });
    });
    await openProductSearchResult({
      id: 'page',
      title: '工作区',
      content: '',
      searchAction: { kind: 'page', routeName: 'Welcome' }
    });
    expect(mocks.hide).toHaveBeenCalledOnce();
    expect(mocks.stop).toHaveBeenCalledOnce();
    expect(mocks.invoke).not.toHaveBeenCalledWith(
      'cancel_search_navigation',
      expect.anything()
    );
  });
  it('restores main on a failed target and cleans up the request', async () => {
    let receive!: (event: any) => void;
    mocks.listen.mockImplementation(async (_event, callback) => {
      receive = callback;
      return mocks.stop;
    });
    mocks.invoke.mockImplementation(async (command, args) => {
      if (command === 'open_product_search_target')
        receive({
          payload: {
            requestId: args.request.requestId,
            success: false,
            error: 'gone'
          }
        });
    });
    await expect(
      openProductSearchResult({
        id: 'chat',
        title: '对话',
        content: '',
        searchAction: { kind: 'conversation', conversationId: 'chat-1' },
        metadata: { plugin_id: 'local-ai' }
      })
    ).rejects.toThrow('gone');
    expect(mocks.hide).not.toHaveBeenCalled();
    expect(mocks.show).toHaveBeenCalledOnce();
    expect(mocks.invoke).toHaveBeenCalledWith(
      'cancel_search_navigation',
      expect.anything()
    );
  });
});
