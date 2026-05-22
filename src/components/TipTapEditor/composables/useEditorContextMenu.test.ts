import { describe, expect, it, vi } from 'vitest';
import { useEditorContextMenu } from './useEditorContextMenu';

const createContextEvent = () => ({
  preventDefault: vi.fn()
}) as unknown as MouseEvent;

describe('useEditorContextMenu', () => {
  it('opens the context menu when enabled', () => {
    const show = vi.fn();
    const event = createContextEvent();
    const contextMenu = useEditorContextMenu({
      isEnabled: () => true,
      getContextMenu: () => ({ show })
    });

    contextMenu.handleContextMenu(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(show).toHaveBeenCalledWith(event);
  });

  it('does not prevent native menu when disabled', () => {
    const show = vi.fn();
    const event = createContextEvent();
    const contextMenu = useEditorContextMenu({
      isEnabled: () => false,
      getContextMenu: () => ({ show })
    });

    contextMenu.handleSourceContextMenu(event);

    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(show).not.toHaveBeenCalled();
  });

  it('tolerates a missing menu instance', () => {
    const event = createContextEvent();
    const contextMenu = useEditorContextMenu({
      isEnabled: () => true,
      getContextMenu: () => null
    });

    expect(() => contextMenu.openContextMenu(event)).not.toThrow();
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
});
